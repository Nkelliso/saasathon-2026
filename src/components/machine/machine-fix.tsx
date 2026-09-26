"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUp, ChevronDown, LoaderCircle, Plus } from "lucide-react";
import { motion } from "motion/react";
import { AppShell } from "@/components/app-shell";
import { machineModels } from "@/lib/machines";
import { useOrganizationMachines, type OrganizationMachine } from "@/lib/organization-machines";

const MachineModelViewer = dynamic(
  () => import("@/components/machine/machine-model-viewer").then((module) => module.MachineModelViewer),
  { ssr: false, loading: () => <div className="grid h-full place-items-center"><LoaderCircle className="size-5 animate-spin text-fg-muted" /></div> },
);

type Ticket = { id: string; machinePk: string; kind: string; title: string; description: string; createdAt: string };
type Message = { role: "user" | "assistant"; text: string };
const history: Record<string, Ticket[]> = {
  "MILL-01": [
    { id: "mill-filter", machinePk: "MILL-01", kind: "REPAIR", title: "Cabinet filter replaced", description: "Airflow restored after clearing metal fines. Keep a spare filter in Bay 02.", createdAt: "2026-09-23" },
    { id: "mill-coolant", machinePk: "MILL-01", kind: "INFO", title: "Check coolant before the first shift", description: "Level drops during long runs. Spare coolant is beside the tool cabinet.", createdAt: "2026-09-20" },
  ],
  "COBOT-02": [
    { id: "cobot-stop", machinePk: "COBOT-02", kind: "EVENT", title: "Protective stop during pick cycle", description: "Occurred after changing the gripper. Payload configuration needs review.", createdAt: "2026-09-24" },
  ],
  "ROBOT-03": [
    { id: "robot-service", machinePk: "ROBOT-03", kind: "INFO", title: "Service log moved to the cell cabinet", description: "Inspection notes and spare part numbers are in the blue folder.", createdAt: "2026-09-21" },
  ],
};

export function MachineFix({ machinePk }: { machinePk: string }) {
  const router = useRouter();
  const { machines, ready } = useOrganizationMachines();
  const machine = machines.find((item) => item.pk.toLowerCase() === machinePk.toLowerCase());
  useEffect(() => {
    if (ready && !machine) router.replace(machines.length ? `/machine/${encodeURIComponent(machines[0].pk)}` : "/add_machine");
  }, [machine, machines, ready, router]);
  if (!machine) return <AppShell><p className="p-8 text-sm text-fg-muted">Loading machine…</p></AppShell>;
  return <MachineWorkspace key={machine.pk} machine={machine} machines={machines} />;
}

function MachineWorkspace({ machine, machines }: { machine: OrganizationMachine; machines: OrganizationMachine[] }) {
  const router = useRouter();
  const model = machineModels[machine.modelId];
  const [tickets, setTickets] = useState<Ticket[]>(history[machine.pk] ?? []);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const transcript = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      try {
        const saved: Ticket[] = JSON.parse(localStorage.getItem("fieldnote-tickets") ?? "[]");
        if (Array.isArray(saved)) setTickets([...saved.filter((ticket) => ticket.machinePk === machine.pk), ...(history[machine.pk] ?? [])]);
      } catch { /* Keep the machine history if browser storage is unavailable. */ }
    }, 0);
    return () => { window.clearTimeout(timeout); if (timer.current) clearInterval(timer.current); };
  }, [machine.pk]);

  useEffect(() => {
    if (transcript.current) transcript.current.scrollTop = transcript.current.scrollHeight;
  }, [messages]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = query.trim();
    if (!question || busy) return;
    setQuery("");
    setBusy(true);
    setMessages((current) => [...current, { role: "user", text: question }, { role: "assistant", text: "" }]);
    let answer = `What exact alarm code appears on ${machine.pk}, and what happened just before it stopped? Include any recent tooling or setup changes so we can narrow down the cause.`;
    if (machine.pk === "MILL-01" && /fan|filter|air|warm|spindle|heat/i.test(question)) {
      answer = "Your team's last repair notes a blocked cabinet filter. That may be relevant, but it does not confirm the cause of this fault.\n\nRecord the exact drive alarm and when it appears. Before opening the cabinet, have an authorized technician isolate power using the machine's lockout procedure.\n\nWas the fan noise present before the spindle stopped?";
    } else if (machine.pk === "COBOT-02" && /stop|grip|payload|pick/i.test(question)) {
      answer = "The latest site note reports a protective stop after a gripper change. Check whether the configured tool and payload match the current setup.\n\nKeep the cell clear and record the complete stop message before attempting a restart. Do not bypass the protective stop.\n\nDid this start immediately after the gripper change?";
    }
    const words = answer.split(" ");
    let count = 0;
    timer.current = setInterval(() => {
      count += 3;
      const text = words.slice(0, count).join(" ");
      setMessages((current) => [...current.slice(0, -1), { role: "assistant", text }]);
      if (count >= words.length) {
        if (timer.current) clearInterval(timer.current);
        setBusy(false);
      }
    }, 38);
  }

  return (
    <AppShell>
      <main className="grid min-h-dvh lg:grid-cols-2">
        <section className="contents min-w-0 border-line lg:order-2 lg:block lg:border-l" aria-label="Machine and recent tickets">
          <div className="relative h-[290px] border-b border-line sm:h-[390px] lg:h-[54vh] lg:min-h-[350px]">
            <MachineModelViewer modelId={machine.modelId} className="absolute inset-0 h-full w-full" showGizmo={false} autoRotate />
            <div className="absolute left-4 top-5 w-80 max-w-[calc(100%-2rem)] sm:left-6 sm:max-w-[calc(100%-3rem)]">
              <label htmlFor="active-machine" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-accent">Select machine</label>
              <div className="relative">
                <select id="active-machine" aria-label="Active machine" value={machine.pk} onChange={(event) => router.push(`/machine/${encodeURIComponent(event.target.value)}`)} className="h-14 w-full cursor-pointer appearance-none truncate rounded-md border-2 border-accent/70! bg-surface px-4 pr-12 font-mono text-sm font-medium text-fg outline-none transition-colors hover:border-accent! hover:bg-surface-2 focus:border-accent! focus:ring-2 focus:ring-accent-dim sm:text-base">
                  {machines.map((item) => <option key={item.pk} value={item.pk}>{item.pk} · {machineModels[item.modelId].model}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-accent" strokeWidth={1.5} />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 sm:inset-x-6">
              <div><p className="text-xs text-fg-muted">{model.manufacturer} {model.model}</p><p className="mt-1 font-mono text-[10px] text-fg-dim">{machine.location}</p></div>
              <span className={`flex items-center gap-1.5 font-mono text-[10px] ${machine.status === "FAULT" ? "text-fault" : machine.status === "RUNNING" ? "text-ok" : "text-fg-muted"}`}><span className={`size-1.5 rounded-full ${machine.status === "FAULT" ? "animate-pulse bg-fault" : machine.status === "RUNNING" ? "bg-ok" : "bg-fg-muted"}`} />{machine.status}</span>
            </div>
          </div>
          <div className="order-3 border-t border-line px-5 py-6 sm:px-7 lg:order-none lg:border-t-0">
            <div className="flex items-center justify-between gap-3"><h2 className="text-sm font-medium">Recent tickets</h2><Link href={`/ticket?machine=${encodeURIComponent(machine.pk)}`} className="flex items-center gap-1.5 text-xs text-fg-muted transition-colors hover:text-fg"><Plus className="size-3.5" strokeWidth={1.5} />Add ticket</Link></div>
            <div className="mt-3 divide-y divide-line">
              {tickets.length === 0 && <p className="py-4 text-xs leading-5 text-fg-muted">{machine.notes || "No tickets yet. Add a repair or a note for your team."}</p>}
              {tickets.slice(0, 3).map((ticket) => <details key={ticket.id} className="group py-3"><summary className="cursor-pointer list-none"><div className="flex items-center justify-between gap-3"><p className="text-sm text-fg">{ticket.title}</p><ChevronDown className="size-3.5 shrink-0 text-fg-dim transition-transform group-open:rotate-180" /></div><p className="mt-1.5 line-clamp-2 text-xs leading-5 text-fg-muted group-open:hidden">{ticket.description}</p><p className="mt-2 font-mono text-[10px] text-fg-dim">{ticket.kind} · {new Date(ticket.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", timeZone: "UTC" })}</p></summary><p className="mt-3 text-sm leading-6 text-fg-muted">{ticket.description}</p></details>)}
            </div>
          </div>
        </section>
        <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="order-2 flex min-h-[420px] min-w-0 flex-col px-5 py-9 sm:px-10 lg:order-1 lg:h-dvh lg:px-10 lg:py-12 xl:px-14" aria-label="Machine help">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Describe the situation:</h1>
          <div ref={transcript} role="log" aria-label="Conversation" aria-live="polite" className="mt-8 flex-1 space-y-6 overflow-y-auto pb-6 lg:min-h-0">
            {messages.map((message, index) => <div key={index} className={message.role === "user" ? "ml-5 rounded-lg border border-line bg-surface p-4 text-sm leading-6" : "text-sm leading-6"}><p className="whitespace-pre-wrap text-fg-muted">{message.text || "Checking machine notes…"}</p></div>)}
          </div>
          <form onSubmit={submit} className="rounded-lg border border-line bg-surface p-3 transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-accent-dim">
            <textarea aria-label="Describe the problem" value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } }} rows={3} placeholder="Describe the problem or paste an error code…" className="w-full resize-none bg-transparent p-1 text-sm leading-6 text-fg outline-none placeholder:text-fg-dim" />
            <div className="mt-2 flex items-center justify-between gap-2"><span className="font-mono text-[10px] text-fg-dim">{machine.pk}</span><button type="submit" aria-label="Send message" disabled={!query.trim() || busy} className="grid size-9 place-items-center rounded-md bg-accent text-black transition-opacity hover:opacity-90 disabled:opacity-35">{busy ? <LoaderCircle className="size-4 animate-spin" strokeWidth={1.5} /> : <ArrowUp className="size-4" strokeWidth={1.5} />}</button></div>
          </form>
        </motion.section>
      </main>
    </AppShell>
  );
}

