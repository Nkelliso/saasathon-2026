"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUp, ChevronDown, FileText, LoaderCircle, Plus } from "lucide-react";
import { motion } from "motion/react";
import { AppShell } from "@/components/app-shell";
import { machineModels } from "@/lib/machines";
import { readEvents, type DiagnosisEvent, type DiagnosisMessage, type DiagnosisSource } from "@/lib/diagnosis";
import { useOrganizationMachines, type OrganizationMachine } from "@/lib/organization-machines";
import { parseTicketDraft, ticketDraftKey } from "@/lib/ticket-draft";

const MachineModelViewer = dynamic(
  () => import("@/components/machine/machine-model-viewer").then((module) => module.MachineModelViewer),
  { ssr: false, loading: () => <div className="grid h-full place-items-center"><LoaderCircle className="size-5 animate-spin text-fg-muted" /></div> },
);

type Message = DiagnosisMessage & { sources?: DiagnosisSource[]; failed?: boolean };

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
  const { tickets: allTickets } = useOrganizationMachines();
  const tickets = allTickets.filter((ticket) => ticket.machinePk === machine.pk);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [drafting, setDrafting] = useState(false);
  const [draftError, setDraftError] = useState("");
  const draftRequest = useRef<AbortController | null>(null);
  const activeRequest = useRef<AbortController | null>(null);
  const transcript = useRef<HTMLDivElement>(null);

  useEffect(() => () => { activeRequest.current?.abort(); draftRequest.current?.abort(); }, []);

  useEffect(() => {
    if (transcript.current) transcript.current.scrollTop = transcript.current.scrollHeight;
  }, [messages]);

  async function send(question: string, previous: Message[]) {
    if (!question || activeRequest.current || draftRequest.current) return;
    const controller = new AbortController();
    activeRequest.current = controller;
    const conversation: Message[] = [...previous, { role: "user", text: question }];
    setQuery("");
    setBusy(true);
    setError("");
    setMessages([...conversation, { role: "assistant", text: "" }]);
    const updateAnswer = (update: Partial<Message>) => setMessages((current) => [...current.slice(0, -1), { ...current[current.length - 1], ...update }]);
    try {
      const response = await fetch("/api/diagnosis", {
        method: "POST", signal: controller.signal, headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          machine: { pk: machine.pk, modelId: machine.modelId, notes: machine.notes },
          messages: conversation.filter((message) => !message.failed && message.text).slice(-19).map(({ role, text }) => ({ role, text })),
          tickets: tickets.slice(0, 30),
        }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Could not start the diagnosis. Please try again.");
      }
      if (!response.body) throw new Error("No response received. Please try again.");
      let text = "";
      let completed = false;
      for await (const event of readEvents<DiagnosisEvent>(response.body)) {
        if (event.type === "sources") updateAnswer({ sources: event.sources });
        if (event.type === "delta") { text += event.text; updateAnswer({ text }); }
        if (event.type === "error") throw new Error(event.message);
        if (event.type === "done") completed = true;
      }
      if (!completed) throw new Error("The connection was interrupted. Please retry your question.");
    } catch (error) {
      if (!controller.signal.aborted) {
        updateAnswer({ failed: true });
        setError(error instanceof Error ? error.message : "Could not connect. Please try again.");
      }
    } finally {
      if (!controller.signal.aborted) setBusy(false);
      activeRequest.current = null;
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void send(query.trim(), messages);
  }

  async function autoFill() {
    if (busy || draftRequest.current) return;
    const controller = new AbortController();
    draftRequest.current = controller;
    setDrafting(true);
    setDraftError("");
    try {
      const response = await fetch("/api/ticket-draft", {
        method: "POST", signal: controller.signal, headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ machine: { pk: machine.pk, modelId: machine.modelId }, messages: messages.filter((message) => !message.failed && message.text).slice(-40).map(({ role, text }) => ({ role, text })) }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not draft the ticket. Please try again.");
      const draft = parseTicketDraft({ ...data, machinePk: machine.pk });
      const id = crypto.randomUUID();
      sessionStorage.setItem(ticketDraftKey(id), JSON.stringify(draft));
      router.push(`/ticket?machine=${encodeURIComponent(machine.pk)}&draft=${id}`);
    } catch (error) {
      if (!controller.signal.aborted) setDraftError(error instanceof Error ? error.message : "Could not draft the ticket. Please try again.");
    } finally {
      if (!controller.signal.aborted) setDrafting(false);
      draftRequest.current = null;
    }
  }

  return (
    <AppShell>
      <main className="grid min-h-dvh lg:grid-cols-2">
        <section className="contents min-w-0 border-line lg:order-2 lg:block lg:border-l" aria-label="Machine and recent tickets">
          <div className="relative h-[290px] border-b border-line h-[550px] sm:h-[390px] lg:h-[54vh] lg:min-h-[350px]">
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
              {tickets.slice(0, 3).map((ticket) => <details key={ticket.id} className="group py-3"><summary className="cursor-pointer list-none"><div className="flex items-center justify-between gap-3"><p className="text-sm text-fg">{ticket.title}</p><ChevronDown className="size-3.5 shrink-0 text-fg-dim transition-transform group-open:rotate-180" /></div><p className="mt-1.5 line-clamp-2 text-xs leading-5 text-fg-muted group-open:hidden">{ticket.summary || ticket.description}</p><p className="mt-2 font-mono text-[10px] text-fg-dim">{ticket.kind} · {new Date(ticket.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", timeZone: "UTC" })}</p></summary><p className="mt-3 text-sm leading-6 text-fg-muted">{ticket.description}</p></details>)}
            </div>
          </div>
        </section>
        <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="order-2 flex min-h-[420px] min-w-0 flex-col px-5 py-9 sm:px-10 lg:order-1 lg:h-dvh lg:px-10 lg:py-12 xl:px-14" aria-label="Machine help">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Describe the situation:</h1>
          <div ref={transcript} role="log" aria-label="Conversation" aria-live="polite" className="mt-8 flex-1 space-y-6 overflow-y-auto pb-6 lg:min-h-0">
            {messages.map((message, index) => <div key={index} className={message.role === "user" ? "ml-5 rounded-lg border border-line bg-surface p-4 text-sm leading-6" : "text-sm leading-6"}>
              {message.role === "assistant" && <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-info">{message.failed ? "Response interrupted" : "Torque · Machine knowledge"}</p>}
              <p className="whitespace-pre-wrap text-fg-muted">{message.text || (message.failed ? "No diagnosis received." : "Searching the manual and machine notes…")}</p>
              {!!message.sources?.length && <details className="mt-3 text-xs text-fg-muted"><summary className="cursor-pointer font-mono text-[10px] uppercase tracking-wide">Retrieved sources · {message.sources.length}</summary><div className="mt-2 space-y-2">{message.sources.map((source) => <details key={source.id} className="rounded-md border border-line bg-surface p-2"><summary className={`cursor-pointer ${source.kind === "manual" ? "text-info" : "text-accent"}`}>[{source.id}] {source.title}</summary><p className="mt-2 max-h-40 overflow-y-auto whitespace-pre-wrap leading-5">{source.excerpt}</p>{source.url && <a href={source.url} target="_blank" rel="noreferrer" className="mt-2 inline-block text-info underline">Open manufacturer manual</a>}</details>)}</div></details>}
            </div>)}
          </div>
          {messages.some((message) => message.role === "user") && <div className="mb-4 rounded-md border border-line bg-surface px-3 py-2.5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-fg-muted">Incident report</span>
              <button type="button" onClick={() => void autoFill()} disabled={busy || drafting} className="inline-flex min-h-9 items-center gap-2 rounded-md border border-line bg-surface-2 px-3 text-xs font-medium text-fg transition-colors hover:border-line-strong disabled:opacity-40">
                {drafting ? <LoaderCircle className="size-4 animate-spin text-info" strokeWidth={1.5} /> : <FileText className="size-4 text-info" strokeWidth={1.5} />}{drafting ? "Filling…" : "Auto fill"}
              </button>
            </div>
            {draftError && <p role="alert" className="mt-2 text-xs text-fg-muted">{draftError}</p>}
          </div>}
          {error && <div role="alert" className="mb-3 rounded-md border border-line bg-surface p-3 text-sm text-fg-muted"><p>{error}</p><button type="button" disabled={busy} onClick={() => { const question = messages.at(-2); if (question?.role === "user") void send(question.text, messages.slice(0, -2)); }} className="mt-2 text-fg underline disabled:opacity-40">Retry question</button></div>}
          <form onSubmit={submit} className="rounded-lg border border-line bg-surface p-3 transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-accent-dim">
            <textarea aria-label="Describe the problem" maxLength={12000} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } }} rows={3} placeholder="Describe the problem or paste an error code…" className="w-full resize-none bg-transparent p-1 text-sm leading-6 text-fg outline-none placeholder:text-fg-dim" />
            <div className="mt-2 flex items-center justify-between gap-2"><span className="font-mono text-[10px] text-fg-dim">{machine.pk}</span><button type="submit" aria-label="Send message" disabled={!query.trim() || busy || drafting} className="grid size-9 place-items-center rounded-md bg-accent text-black transition-opacity hover:opacity-90 disabled:opacity-35">{busy ? <LoaderCircle className="size-4 animate-spin" strokeWidth={1.5} /> : <ArrowUp className="size-4" strokeWidth={1.5} />}</button></div>
          </form>
        </motion.section>
      </main>
    </AppShell>
  );
}
