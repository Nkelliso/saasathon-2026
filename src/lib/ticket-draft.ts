export type TicketDraft = {
  machinePk: string;
  kind: "REPAIR" | "EVENT" | "INFO";
  title: string;
  description: string;
};

export const ticketDraftKey = (id: string) => `torque:ticket-draft:${id}`;

export function parseTicketDraft(value: unknown): TicketDraft {
  if (!value || typeof value !== "object") throw new Error("Invalid ticket draft.");
  const draft = value as Record<string, unknown>;
  if (typeof draft.machinePk !== "string" || !draft.machinePk.trim() || draft.machinePk.length > 120 ||
    !["REPAIR", "EVENT", "INFO"].includes(String(draft.kind)) ||
    typeof draft.title !== "string" || !draft.title.trim() || draft.title.length > 80 ||
    typeof draft.description !== "string" || !draft.description.trim() || draft.description.length > 600 ||
    draft.description.trim().split(/\s+/).length > 60) throw new Error("Could not create a concise draft. Try Auto fill again.");
  return { machinePk: draft.machinePk, kind: draft.kind as TicketDraft["kind"], title: draft.title.trim(), description: draft.description.trim() };
}
