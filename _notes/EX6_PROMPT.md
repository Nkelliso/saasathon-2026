# Implement first-class image reading in ex6

Implement first-class image-reading support in ex6 so coding agents can visually inspect generated screenshots and other local image files.

## Motivation

Frontend workflows generate screenshots with commands such as:

```text
npm run shot -- /ticket
```

Screenshots are written to paths such as:

```text
.agent/shots/ticket.png
```

Agents need to load these screenshots into a vision-capable model, inspect the rendered UI, identify visual problems, modify code, and repeat the workflow.

Current behavior is broken because `read_file()` opens all files as UTF-8 text. Reading a PNG causes an error similar to:

```text
'utf-8' codec can't decode byte 0x89 in position 0
```

Simply opening the file as bytes is not enough. Tool results are currently converted to strings in `ex6.py`, and providers currently serialize message content as text. Implement the complete path from local image file to multimodal model input.

## Relevant files

- `_ex6/tools.py`
- `ex6.py`
- `_ex6/provider.py`
- `_ex6/provider_openai.py`
- Any existing tests for tools, messages, or provider serialization

## Goal

Add a dedicated `read_image` tool and the internal rich-content plumbing needed to provide image bytes to supported multimodal models. Preserve existing behavior for all text tools and providers.

## Requirements

### 1. Add a dedicated `read_image` tool

Do not silently overload normal text behavior inside `read_file`.

Suggested public interface:

```python
def read_image(
    ctx: ex6.Context,
    path: str,
    max_dimension: int = 3072,
    detail: str = "auto",
) -> ImageToolResult:
    """Read a local image and provide it to the current vision-capable model."""
```

Supported formats:

- PNG
- JPEG/JPG
- WebP
- GIF, using first frame if animated
- BMP may be supported if convenient

Reject unsupported binary formats with a clear error.

Validate:

- File exists
- Path points to a regular file
- Format is genuinely decodable, not merely named with an image extension
- `max_dimension` is within a sensible bounded range
- `detail` is one of the supported values, such as `auto`, `low`, or `high`

Return useful metadata:

- Original path
- MIME type
- Width
- Height
- Encoded/transmitted width
- Encoded/transmitted height
- Original byte size
- Transmitted byte size
- Image bytes
- Requested detail level

Use Pillow unless the project already has a suitable image dependency. Add the dependency in the project’s established dependency-management style.

### 2. Add a typed rich tool result

Introduce an internal type rather than returning a base64 string as normal text.

Example shape:

```python
@dataclass
class ImageToolResult:
    path: str
    mime_type: str
    data: bytes
    width: int
    height: int
    original_width: int
    original_height: int
    original_size: int
    detail: str = "auto"
```

Place the type in a module that avoids circular imports and can be consumed by:

- Tool execution
- Message storage
- OpenRouter/chat-completions provider
- OpenAI Responses provider

Do not expose raw binary data through `str(result)`.

### 3. Preserve rich tool results in the tool execution pipeline

Current code around `ex6.py:759` does this:

```python
val = str(r["value"] or "")
```

That destroys rich output.

Change tool execution so:

- Existing string-returning tools behave exactly as before
- Existing scalar or arbitrary values continue receiving safe textual conversion where appropriate
- `ImageToolResult` remains structured
- Text output size limits still apply to textual outputs
- Binary bytes are not counted as text characters
- Tool errors remain ordinary textual tool outputs
- Tool call ordering remains unchanged
- Parallel tools still work
- Repetition guards do not accidentally serialize full image bytes

Broaden `Message.content` typing and behavior as needed. Keep backward compatibility for string and callable message content.

Possible shape:

```python
MessageContent = Union[
    str,
    ImageToolResult,
    list[dict],
    Callable[["Context"], object],
]
```

Use a cleaner protocol or discriminated union if more appropriate for the existing architecture.

### 4. Serialize images correctly in `_ex6/provider.py`

This provider uses OpenRouter through an OpenAI-compatible Chat Completions API.

Convert an image tool result into a valid multimodal conversation sequence accepted by OpenRouter/chat completions.

Important constraints:

- Keep tool-call/tool-result protocol valid
- Model must receive both concise textual metadata and actual image content
- Do not dump base64 into a normal text field
- Use a data URL only inside an `image_url` block
- Preserve normal text message behavior
- Preserve prompt caching logic and do not mutate image objects in place
- Ensure cache-control handling works when content is a list containing text and image blocks
- Avoid adding cache-control to an invalid block or corrupting multimodal content

Expected image block shape for Chat Completions/OpenRouter:

```python
{
    "type": "image_url",
    "image_url": {
        "url": f"data:{mime_type};base64,{encoded}"
    }
}
```

If exact OpenRouter protocol requires an adjacent user message instead of multimodal tool content, use that protocol and document the reason in code. Tool-call ordering must remain valid.

### 5. Serialize images correctly in `_ex6/provider_openai.py`

This provider uses OpenAI Responses API.

Update `_to_responses_input()` to support image tool results.

Likely safe sequence:

- Emit a normal `function_call_output` containing concise textual metadata
- Emit an adjacent user-role message containing:
  - `input_text` identifying image path
  - `input_image` containing data URL or another supported image source

Example:

```python
{
    "type": "function_call_output",
    "call_id": m.tool_call_id,
    "output": "Loaded image .agent/shots/ticket.png (1440x900)",
}
```

Followed by:

```python
{
    "type": "message",
    "role": "user",
    "content": [
        {
            "type": "input_text",
            "text": "Image loaded from .agent/shots/ticket.png",
        },
        {
            "type": "input_image",
            "image_url": data_url,
            "detail": detail,
        },
    ],
}
```

Verify exact schema expected by Responses API version used in this project. Use current installed SDK definitions or existing API conventions rather than relying blindly on this example.

Maintain:

- Existing system instruction behavior
- Existing assistant messages
- Existing tool call serialization
- Existing reasoning configuration
- Existing textual function outputs
- Existing OAuth/Codex behavior

### 6. Normalize images before transmission

Avoid transmitting arbitrarily large full-page screenshots.

Behavior:

- Read and validate original image
- Apply EXIF orientation
- For animated GIF, use first frame
- Convert unsupported color modes safely to RGB or RGBA
- Preserve aspect ratio
- Resize only when largest dimension exceeds `max_dimension`
- Never upscale
- Default `max_dimension`: approximately 3072
- Keep UI screenshots crisp
- Prefer PNG output for images with alpha or screenshots
- JPEG may remain JPEG when no conversion is needed
- Strip unnecessary metadata where practical
- Use deterministic encoding options so tests are stable

Do not aggressively convert UI screenshots to lossy JPEG. Small text needs to remain readable.

Protect against decompression bombs and unreasonable resource use:

- Enforce maximum pixel count
- Enforce maximum source file size
- Return clear errors when limits are exceeded
- Do not suppress Pillow decompression-bomb warnings without replacing them with explicit validation

Reasonable limits are acceptable, but define them as named constants.

### 7. Improve `read_file` behavior for binary files

`read_file()` should no longer expose a low-level Unicode decode exception when passed a binary file.

Before opening as text:

- Detect known binary extensions
- Optionally inspect first bytes for NUL/binary signatures
- If it is a supported image, return an actionable error:

```text
'ticket.png' is an image. Use read_image instead.
```

- For another binary format:

```text
'<path>' is a binary file and cannot be read as text.
```

Open text files explicitly:

```python
open(path, "r", encoding="utf-8", errors="strict")
```

Do not silently decode arbitrary binary files with replacement characters.

### 8. Reconsider gitignore handling for explicit image reads

Current `_check_gitignore()` behavior blocks explicitly reading generated screenshots under ignored directories such as `.agent/`.

Desired behavior:

- `glob` and `search` continue excluding ignored files by default
- Explicit `read_image(".agent/shots/ticket.png")` is allowed
- Explicit reading of ordinary ignored generated artifacts may be allowed
- Sensitive files remain protected

Do not equate “gitignored” with “secret.”

Add a separate sensitive-read policy for:

- `.env`
- `.env.*`
- Private SSH keys
- Common credential files
- Secret/token files already protected elsewhere
- Any project-specific sensitive patterns

Be conservative about secrets, but allow explicitly requested generated screenshots.

Do not weaken write protections as part of this task.

If changing global read policy risks unrelated behavior, add a narrowly scoped exception allowing `read_image` to access `.agent/shots/**` while preserving current behavior elsewhere.

### 9. Tool documentation and discoverability

Add `read_image` to coding-agent tool set wherever `read_file`, `glob`, and `search` are registered.

Use a concise tool description telling agents:

- It reads image files for visual inspection
- It should be used for screenshots
- It supports PNG/JPEG/WebP
- `read_file` is only for text

Update `read_file` description to explicitly state that images must use `read_image`.

Add `read_image` to read-only subagents only if their selected models support vision. Do not expose a vision tool to a guaranteed text-only model.

### 10. Keep tool output concise in terminal UI

Visible tool result must not print base64 or a dataclass representation containing bytes.

Display something like:

```text
Loaded image .agent/shots/ticket.png
1440x900 · image/png · 184 KB
```

If resized:

```text
Loaded image .agent/shots/full-page.png
1440x8120 → 545x3072 · image/png · 1.8 MB → 412 KB
```

If TUI has a tool-result renderer, it may show metadata only. Actual bytes should remain available to provider serialization.

Ensure context-history views and logs do not emit full data URL unless explicitly in debug output, and preferably never log it.

### 11. Handle provider/model limitations clearly

If current model/provider does not support vision:

- Return or raise a clear actionable message
- Do not silently discard image
- Do not send malformed provider requests

Example:

```text
Current model/provider does not support image input. Switch to a vision-capable model or inspect image metadata only.
```

Use existing model metadata if vision capability is already represented. If it is not, add a minimal capability flag or provider-level check.

Avoid maintaining a fragile hardcoded model-name list when provider/model metadata can represent capability.

### 12. Optional metadata-only mode

If useful, support:

```python
read_image(path, mode="metadata")
```

or a separate `inspect_image` helper.

Metadata mode should return text only:

- Path
- Format/MIME
- Dimensions
- File size
- Color mode
- Frame count

Do not transmit image bytes in metadata-only mode.

This is optional. Prioritize working visual image input first.

### 13. Tests

Add focused tests covering at least:

Tool behavior:

- Reads valid PNG
- Reads valid JPEG
- Reads valid WebP if Pillow build supports it
- Applies EXIF orientation
- Resizes oversized image while preserving aspect ratio
- Does not upscale
- Handles RGBA PNG
- Handles animated GIF first frame
- Rejects corrupt image
- Rejects unsupported format
- Rejects excessive file size or pixel dimensions
- Gives actionable `read_file` error for PNG
- Allows explicit generated screenshot read under `.agent/shots`
- Continues protecting sensitive ignored files

Tool pipeline:

- `ImageToolResult` is not stringified
- Text tool outputs remain strings
- Text size limit still works
- Parallel mixed text/image tool outputs preserve order
- Error results remain textual
- Repetition guard fingerprints do not include raw bytes

Chat Completions/OpenRouter serialization:

- Produces valid text and image blocks
- Correct MIME data URL
- Base64 round-trips to original or normalized bytes
- Normal text messages unchanged
- Tool result ordering remains valid
- Cache-control does not corrupt image blocks
- No base64 appears in textual metadata

Responses API serialization:

- Emits valid `function_call_output`
- Emits valid image input item
- Preserves call ID
- Correct detail setting
- Normal tool outputs unchanged
- No base64 appears in textual metadata

Logging/display:

- Tool summary excludes raw bytes
- Provider debug logs do not contain full data URLs
- Message overview/history remains usable

### 14. Manual validation

After implementation:

- Run full test suite
- Run lint/type checks
- Start ex6 using a vision-capable model
- In a project with an existing screenshot, call:

```text
read_image(".agent/shots/ticket.png")
```

- Confirm model can describe visible UI details such as:
  - Page title
  - Sidebar position
  - Active navigation item
  - Form layout
  - Obvious clipping, overflow, or spacing issues
- Confirm reading same image with `read_file` produces guidance to use `read_image`
- Confirm a normal source file still works through `read_file`
- Confirm ignored screenshot can be explicitly read
- Confirm `.env` remains inaccessible
- Confirm neither terminal output nor debug log contains image base64 payload

## Implementation constraints

- Read relevant code before editing
- Prefer minimal architecture changes, but do not use a brittle base64-in-text hack
- Avoid breaking existing tool interfaces
- Avoid unrelated refactors
- Keep provider-specific serialization inside provider modules
- Keep image decoding and normalization inside tool/image utility code
- Add comments only where provider protocol behavior is non-obvious
- Check changes with tests and git diff afterward

## Acceptance criteria

- Agent can call `read_image` on `.agent/shots/ticket.png`
- Vision-capable model actually receives image pixels
- Model can reason about visual content
- Existing text tools continue working
- Both provider implementations handle image results
- Binary files no longer produce raw UTF-8 codec failures
- Generated gitignored screenshots can be explicitly inspected
- Sensitive files remain protected
- No raw base64 or image bytes are printed into visible tool output or logs
- Automated tests cover tool behavior and both serialization paths
