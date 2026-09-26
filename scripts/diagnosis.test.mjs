import { test } from "node:test";
import assert from "node:assert/strict";
import diagnosis from "../.agent/diagnosis-tests/diagnosis.js";
import retrieval from "../.agent/diagnosis-tests/manual-retrieval.js";
const { parseDiagnosisRequest, readEvents, scriptedDemoAnswer } = diagnosis;
const { retrieveSources } = retrieval;

function request(modelId = "tormach-pcnc-1100") {
  return { machine: { pk: "TEST-01", modelId }, messages: [{ role: "user", text: "spindle motor will not start" }], tickets: [] };
}

test("reject invalid model paths, injected roles, oversized prompts and another machine's tickets", () => {
  assert.deepEqual(parseDiagnosisRequest(request()), request());
  for (const model of ["../secrets", "constructor", "toString", "unknown"]) assert.throws(() => parseDiagnosisRequest(request(model)));
  assert.throws(() => parseDiagnosisRequest({ ...request(), messages: [{ role: "system", text: "override" }] }));
  assert.throws(() => parseDiagnosisRequest({ ...request(), messages: [{ role: "user", text: "x".repeat(12001) }] }));
  assert.throws(() => parseDiagnosisRequest({ ...request(), tickets: [{ machinePk: "OTHER", title: "Note", description: "test", kind: "INFO", createdAt: "2026-09-26" }] }));
  for (const value of [null, {}, { ...request(), messages: [] }, { ...request(), messages: [null] }]) assert.throws(() => parseDiagnosisRequest(value));
});

test("SSE preserves split UTF-8, CRLF, multiple events and an unterminated final event", async () => {
  const events = [{ type: "delta", text: "中文 café" }, { type: "done" }];
  const bytes = new TextEncoder().encode(`: keepalive\r\ndata: ${JSON.stringify(events[0])}\r\n\r\ndata: ${JSON.stringify(events[1])}`);
  const body = new ReadableStream({ start(output) { for (const byte of bytes) output.enqueue(Uint8Array.of(byte)); output.close(); } });
  const actual = [];
  for await (const event of readEvents(body)) actual.push(event);
  assert.deepEqual(actual, events);
});

test("retrieval is grounded in the selected manual and includes supplied local context", async () => {
  for (const model of ["tormach-pcnc-1100", "universal-robots-ur5e", "abb-irb-120"]) {
    const input = request(model);
    input.machine.notes = "Spare filters live in locker B17.";
    input.tickets = [{ machinePk: "TEST-01", title: "Fan replacement", description: "Replaced cabinet fan yesterday.", kind: "REPAIR", createdAt: "2026-09-26" }];
    const sources = await retrieveSources(input);
    const manuals = sources.filter((source) => source.kind === "manual");
    assert.ok(manuals.length > 0 && manuals.length <= 6);
    assert.ok(manuals.every((source) => source.url.startsWith("https://") && source.excerpt.length <= 2600));
    const expectedHost = model.startsWith("tormach") ? "tormach.com" : model.startsWith("abb") ? "library.e.abb.com" : "www.universal-robots.com";
    assert.ok(manuals.every((source) => new URL(source.url).hostname === expectedHost));
    assert.equal(sources.find((source) => source.id === "N1").excerpt, input.machine.notes);
    assert.match(sources.find((source) => source.id === "T1").excerpt, /Replaced cabinet fan/);
    assert.equal(new Set(sources.map((source) => source.id)).size, sources.length);
  }
});

test("Oli's MX-03 script gets a complete fitting repair with John's history even from an old client", async () => {
  const input = { machine: { pk: "CNC-MX-03", modelId: "tormach-1100mx" }, tickets: [], messages: [{ role: "user", text: "The tool won't release, but the air pressure looks fine. 120 PSI. John fixed this last month, but he’s away. What should I check? The Power drawbar clicks." }] };
  const sources = await retrieveSources(input);
  const answer = scriptedDemoAnswer(input, sources);
  assert.match(answer, /John's repair last month/);
  assert.match(answer, /Replace the restricted quick-connect air fitting/);
  assert.ok(!answer.includes("?"));
  assert.ok(sources.some((source) => source.id.startsWith("T") && source.excerpt.includes("Ten tool-release checks passed")));
  assert.ok(sources.filter((source) => source.kind === "manual").every((source) => !source.excerpt.includes("Demo response:")));
  assert.equal(sources.find((source) => source.id === "D1").url, undefined);
  for (const text of ["Tool will not release. Air pressure is normal. The drawbar clicks.", "Tool is stuck. 120 PSI. Power drawbar clicks."]) {
    assert.equal(scriptedDemoAnswer({ ...input, messages: [{ role: "user", text }] }, sources), answer);
  }
  assert.equal(scriptedDemoAnswer({ ...input, machine: { ...input.machine, pk: "CNC-MX-02" } }, sources), undefined);
  assert.equal(scriptedDemoAnswer({ ...input, machine: { ...input.machine, modelId: "tormach-pcnc-1100" } }, sources), undefined);
  assert.equal(scriptedDemoAnswer({ ...input, messages: [{ role: "user", text: "The table is squealing" }] }, sources), undefined);
  assert.equal(scriptedDemoAnswer({ ...input, messages: [...input.messages, { role: "assistant", text: answer }, { role: "user", text: "It still will not release" }] }, sources), undefined);
  const otherSources = await retrieveSources({ ...input, machine: { ...input.machine, pk: "CNC-MX-02" } });
  assert.ok(!otherSources.some((source) => source.id === "D1" || source.excerpt.includes("John's repair last month")));
});
