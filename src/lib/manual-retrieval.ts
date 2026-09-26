import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { machineModels, type MachineModelId } from "./machines";
import type { DiagnosisRequest, DiagnosisSource } from "./diagnosis";
import { johnDemoRepair } from "./demo-data";

const stopWords = new Set("the and for with this that from have what when which does after before machine please about there just been into".split(" "));
function terms(text: string) {
  return [...new Set((text.toLowerCase().match(/[a-z0-9]+/g) ?? []).filter((word) => word.length > 2 && !stopWords.has(word)))];
}

const manuals = new Map<MachineModelId, { url?: string; chunks: string[]; demo?: string }>();
async function getManual(modelId: MachineModelId) {
  const cached = manuals.get(modelId);
  if (cached) return cached;
  const document = await readFile(path.join(process.cwd(), "src", "machines", modelId, "manual.md"), "utf8");
  const demoBlock = /<!-- TORQUE_DEMO_START -->([\s\S]*?)<!-- TORQUE_DEMO_END -->/;
  const demo = document.match(demoBlock)?.[1].trim();
  // Never attribute fictional site knowledge to the manufacturer or other machines.
  const text = document.replace(demoBlock, "");
  const url = text.match(/Source: \[(https:\/\/[^\]]+)\]/)?.[1];
  const chunks: string[] = [];
  for (let start = 0; start < text.length;) {
    const boundary = text.lastIndexOf("\n", start + 2600);
    const end = boundary > start + 1600 ? boundary : Math.min(start + 2600, text.length);
    chunks.push(text.slice(start, end));
    if (end >= text.length) break;
    start = end - 300;
  }
  const manual = { url, chunks, demo };
  manuals.set(modelId, manual);
  return manual;
}

export async function retrieveSources(request: DiagnosisRequest): Promise<DiagnosisSource[]> {
  const { machine, messages, tickets } = request;
  const manual = await getManual(machine.modelId);
  const queryTerms = terms(messages.filter((m) => m.role === "user").slice(-3).map((m) => m.text).join(" "));
  const tokenized = manual.chunks.map((text) => terms(text));
  const ranked = manual.chunks.map((excerpt, index) => {
    const score = queryTerms.reduce((sum, term) => {
      if (!tokenized[index].includes(term)) return sum;
      const frequency = tokenized.filter((tokens) => tokens.includes(term)).length;
      return sum + Math.log(1 + manual.chunks.length / (1 + frequency));
    }, 0);
    return { excerpt, index, score };
  }).sort((a, b) => b.score - a.score).filter((chunk) => chunk.score > 0).slice(0, 6);
  const model = machineModels[machine.modelId];
  const sources: DiagnosisSource[] = ranked.map((chunk, index) => ({
    id: `M${index + 1}`, kind: "manual", title: `${model.manufacturer} ${model.model} manual · excerpt ${chunk.index + 1}`,
    url: manual.url, excerpt: chunk.excerpt,
  }));
  if (machine.notes?.trim()) sources.push({ id: "N1", kind: "local", title: `${machine.pk} · site notes`, excerpt: machine.notes });
  const localTickets = tickets.filter((ticket) => ticket.machinePk === machine.pk).slice(0, 30);
  if (machine.modelId === "tormach-1100mx" && machine.pk === johnDemoRepair.machinePk) {
    if (manual.demo) sources.push({ id: "D1", kind: "local", title: "Plastech · CNC-MX-03 demo repair case", excerpt: manual.demo });
    if (!localTickets.some((ticket) => ticket.description === johnDemoRepair.description)) localTickets.push(johnDemoRepair);
  }
  localTickets.forEach((ticket, index) => sources.push({
    id: `T${index + 1}`, kind: "local", title: `${ticket.kind} · ${ticket.title}`,
    excerpt: `Machine: ${ticket.machinePk}\nDate: ${ticket.createdAt}\n${ticket.description}`,
  }));
  return sources;
}
