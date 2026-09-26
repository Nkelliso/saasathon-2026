"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { AppShell } from "@/components/app-shell";
import { machineModels } from "@/lib/machines";
import { useOrganizationMachines } from "@/lib/organization-machines";
import { saveMachineTicket, useDemoWorkspace } from "@/lib/demo-workspace";
import { getPreventionPatterns } from "@/lib/prevention-demo";

const kinds = {
  REPAIR: { label: "Repair", placeholder: "What went wrong, what fixed it, and how did you check it?" },
  INFO: { label: "General information", placeholder: "What should the next operator know about this machine?" },
  EVENT: { label: "Event", placeholder: "What did you notice, and when did it happen? Include any error codes." },
} as const;
type TicketKind = keyof typeof kinds;

const inputClass = "w-full rounded-md border border-line bg-surface-2 px-3.5 text-sm text-fg outline-none transition-colors placeholder:text-fg-dim hover:border-line-strong focus:border-accent focus:ring-2 focus:ring-accent-dim";
const labelClass = "mb-2 block text-sm font-medium text-fg";

export function TicketConsole({ initialMachine = "" }: { initialMachine?: string }) {
  const { machines, ready } = useOrganizationMachines();
  const [kind, setKind] = useState<TicketKind>("REPAIR");
  const [selectedMachine, setSelectedMachine] = useState(initialMachine);
  const machinePk = machines.some((machine) => machine.pk === selectedMachine) ? selectedMachine : machines[0]?.pk ?? "";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const workspace = useDemoWorkspace();
  const repeatFitting = saved && machinePk === "CNC-MX-03" && getPreventionPatterns(workspace.tickets).some((pattern) => pattern.id.startsWith("PRV-AIR-"));

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() || !description.trim() || !machinePk) return;
    try {
      const ticket = { id: crypto.randomUUID(), machinePk, kind, title: title.trim(), description: description.trim(), createdAt: new Date().toISOString() };
      saveMachineTicket(ticket);
      setSaved(true);
      setError("");
    } catch {
      setError("Could not save this ticket. Please try again.");
    }
  }

  return (
    <AppShell>
      <main className="mx-auto w-full max-w-2xl px-5 py-10 sm:px-8 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="text-3xl font-semibold tracking-tight">Add a ticket</h1>
          <p className="mt-2 text-sm leading-6 text-fg-muted">Leave a repair, observation, or note for the next operator.</p>
          {ready && !machines.length ? (
            <div className="mt-8 rounded-lg border border-line bg-surface p-6"><p className="text-sm text-fg-muted">Add a machine before filing a ticket.</p><Link href="/add_machine" className="mt-4 inline-flex h-10 items-center rounded-md bg-accent px-4 text-sm font-medium text-black">Add machine</Link></div>
          ) : saved ? (
            <section className="mt-8 rounded-lg border border-line bg-surface p-6" aria-live="polite">
              <div className="flex items-center gap-3"><Check className="size-5 text-accent" strokeWidth={1.5} /><h2 className="text-lg font-semibold">Ticket saved</h2></div>
              <p className="mt-4 text-sm text-fg">{title}</p>
              <p className="mt-2 font-mono text-xs text-fg-muted">{machinePk} · {kinds[kind].label}</p>
              {repeatFitting && <Link href="/prevention" className="mt-5 block rounded-md border border-line bg-surface-2 p-4 text-sm text-accent">2 matching incidents · New prevention report →</Link>}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link href={`/machine/${encodeURIComponent(machinePk)}`} className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-black">View machine <ArrowRight className="size-4" strokeWidth={1.5} /></Link>
                <button type="button" onClick={() => { setSaved(false); setTitle(""); setDescription(""); }} className="text-sm text-fg-muted hover:text-fg">Add another ticket</button>
              </div>
            </section>
          ) : (
            <form onSubmit={submit} className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block min-w-0">
                  <span className={labelClass}>Machine</span>
                  <span className="relative block">
                    <select aria-label="Machine" value={machinePk} onChange={(event) => setSelectedMachine(event.target.value)} className={`${inputClass} h-12 appearance-none pr-9 font-mono text-xs`}>
                      {machines.map((machine) => <option key={machine.pk} value={machine.pk}>{machine.pk} · {machineModels[machine.modelId].model}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-4 size-4 text-fg-muted" strokeWidth={1.5} />
                  </span>
                </label>
                <label className="block min-w-0">
                  <span className={labelClass}>Ticket type</span>
                  <span className="relative block">
                    <select aria-label="Ticket type" value={kind} onChange={(event) => setKind(event.target.value as TicketKind)} className={`${inputClass} h-12 appearance-none pr-9`}>
                      {Object.entries(kinds).map(([value, item]) => <option key={value} value={value}>{item.label}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-4 size-4 text-fg-muted" strokeWidth={1.5} />
                  </span>
                </label>
              </div>
              <label className="block">
                <span className={labelClass}>Title</span>
                <input required maxLength={100} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="e.g. Spindle fan replaced" className={`${inputClass} h-12`} />
              </label>
              <label className="block">
                <span className={labelClass}>Details</span>
                <textarea required maxLength={12000} value={description} onChange={(event) => setDescription(event.target.value)} rows={7} placeholder={kinds[kind].placeholder} className={`${inputClass} min-h-44 resize-y py-3 leading-6`} />
              </label>
              {error && <p role="alert" className="text-sm text-fg">{error}</p>}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                <p className="text-xs text-fg-muted">Saved to this machine’s history.</p>
                <button type="submit" disabled={!ready || !machinePk} className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-black transition-shadow hover:shadow-[0_0_20px_var(--color-accent-dim)] disabled:opacity-40">Save ticket <ArrowRight className="size-4" strokeWidth={1.5} /></button>
              </div>
            </form>
          )}
        </motion.div>
      </main>
    </AppShell>
  );
}
