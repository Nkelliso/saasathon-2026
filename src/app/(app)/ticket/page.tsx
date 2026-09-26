import type { Metadata } from "next";
import { TicketConsole } from "@/components/ticket/ticket-console";

export const metadata: Metadata = {
  title: "Add Ticket",
  description: "Document repairs, events, and machine-specific operational knowledge.",
};

export default function TicketPage() {
  return <TicketConsole />;
}
