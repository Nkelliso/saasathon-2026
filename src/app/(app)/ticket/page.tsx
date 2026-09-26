import type { Metadata } from "next";
import { TicketConsole } from "@/components/ticket/ticket-console";

export const metadata: Metadata = {
  title: "Add Ticket",
  description: "Document repairs, events, and machine-specific operational knowledge.",
};

export default async function TicketPage({ searchParams }: { searchParams: Promise<{ machine?: string; draft?: string }> }) {
  const { machine, draft } = await searchParams;
  return <TicketConsole key={`${machine ?? ""}:${draft ?? ""}`} initialMachine={machine} draftId={draft} />;
}
