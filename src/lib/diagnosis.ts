import { isMachineModelId, type MachineModelId } from "./machines";

export type DiagnosisMessage = { role: "user" | "assistant"; text: string };
export type DiagnosisSource = { id: string; title: string; url?: string; excerpt: string; kind: "manual" | "local" };
export type DiagnosisRequest = {
  machine: { pk: string; modelId: MachineModelId; notes?: string };
  messages: DiagnosisMessage[];
  tickets: { machinePk: string; title: string; description: string; kind: string; createdAt: string }[];
};
export type DiagnosisEvent =
  | { type: "sources"; sources: DiagnosisSource[] }
  | { type: "delta"; text: string }
  | { type: "done" }
  | { type: "error"; message: string };

/** Only the opening, staged MX-03 scenario bypasses the LLM. Follow-ups use normal RAG. */
export function scriptedDemoAnswer(request: DiagnosisRequest, sources: DiagnosisSource[]): string | undefined {
  if (request.machine.pk !== "CNC-MX-03" || request.machine.modelId !== "tormach-1100mx" ||
    request.messages.some((message) => message.role === "assistant")) return;
  const question = request.messages.map((message) => message.text).join(" ").toLowerCase().replace(/[’']/g, "");
  const stuckTool = /tool/.test(question) && /(?:wont|will not|doesnt|does not|not|stuck|cant|cannot).*releas|(?:releas.*(?:not|stuck))|tool.*stuck/.test(question);
  if (!stuckTool || !/120\s*(?:psi|pounds)|air pressure (?:looks |is |seems )?(?:fine|ok|okay|normal)/.test(question) ||
    !/drawbar/.test(question) || !/click/.test(question)) return;
  return sources.find((source) => source.id === "D1" && source.kind === "local")?.excerpt.split(/Demo response:\r?\n/)[1]?.trim();
}

const record = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null;
const string = (value: unknown, max: number): value is string => typeof value === "string" && value.length <= max;

export function parseDiagnosisRequest(value: unknown): DiagnosisRequest {
  if (!record(value) || !record(value.machine)) throw new Error("Select a machine.");
  const { machine, messages, tickets } = value;
  if (!string(machine.pk, 120) || !machine.pk.trim() || !string(machine.modelId, 100) || !isMachineModelId(machine.modelId) ||
    (machine.notes !== undefined && !string(machine.notes, 12000))) throw new Error("Invalid machine details.");
  if (!Array.isArray(messages) || !messages.length || messages.length > 20 ||
    messages.some((m) => !record(m) || !["user", "assistant"].includes(String(m.role)) || !string(m.text, 12000) || !m.text.trim()) ||
    messages.at(-1).role !== "user") throw new Error("Send a question of up to 12,000 characters.");
  if (!Array.isArray(tickets) || tickets.length > 30 || tickets.some((t) => !record(t) ||
    !string(t.machinePk, 120) || t.machinePk !== machine.pk || !string(t.title, 500) ||
    !string(t.description, 12000) || !string(t.kind, 40) || !string(t.createdAt, 100))) throw new Error("Invalid machine ticket context.");
  return value as DiagnosisRequest;
}

/** Decode SSE across arbitrary network/UTF-8 boundaries. Also used for the browser stream. */
export async function* readEvents<T>(body: ReadableStream<Uint8Array>): AsyncGenerator<T> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let data: string[] = [];
  function line(value: string): T | undefined {
    if (value === "") {
      const payload = data.join("\n");
      data = [];
      if (payload && payload !== "[DONE]") return JSON.parse(payload) as T;
    } else if (value.startsWith("data:")) data.push(value.slice(5).trimStart());
  }
  try {
    while (true) {
      const { done, value } = await reader.read();
      buffer += decoder.decode(value, { stream: !done });
      let end: number;
      while ((end = buffer.indexOf("\n")) !== -1) {
        const event = line(buffer.slice(0, end).replace(/\r$/, ""));
        buffer = buffer.slice(end + 1);
        if (event !== undefined) yield event;
      }
      if (done) break;
    }
    if (buffer) line(buffer.replace(/\r$/, ""));
    const event = line("");
    if (event !== undefined) yield event;
  } finally {
    await reader.cancel().catch(() => {});
    reader.releaseLock();
  }
}
