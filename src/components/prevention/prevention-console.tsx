"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ChevronDown, X } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { machineModels } from "@/lib/machines";
import { preventionPatterns, type PreventionPattern } from "@/lib/prevention-demo";

const importance = {
  High: { rank: 0, color: "text-fault", dot: "bg-fault" },
  Medium: { rank: 1, color: "text-warn", dot: "bg-warn" },
  Low: { rank: 2, color: "text-fg-muted", dot: "bg-fg-muted" },
};
const readKey = "torque-prevention-demo-read-v1";
let fallbackReadState = "[]";

function subscribeReadState(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(readKey, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(readKey, listener);
  };
}

function getReadState() {
  try { return localStorage.getItem(readKey) ?? fallbackReadState; }
  catch { return fallbackReadState; }
}

function parseReadIds(raw: string): string[] {
  try {
    const ids: unknown = JSON.parse(raw);
    return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === "string") : [];
  } catch { return []; }
}

function saveReadIds(ids: string[]) {
  fallbackReadState = JSON.stringify(ids);
  try { localStorage.setItem(readKey, fallbackReadState); } catch { /* Keep session state if storage is unavailable. */ }
  window.dispatchEvent(new Event(readKey));
}

function ticketDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", timeZone: "UTC" });
}

export function PreventionConsole() {
  const rawReadIds = useSyncExternalStore(subscribeReadState, getReadState, () => "[]");
  const readIds = parseReadIds(rawReadIds);
  const [sort, setSort] = useState("importance");
  const [selected, setSelected] = useState<PreventionPattern | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const tickets = [...preventionPatterns].sort((a, b) => {
    const priority = importance[a.importance].rank - importance[b.importance].rank;
    const newest = Date.parse(b.createdAt) - Date.parse(a.createdAt);
    return sort === "importance" ? priority || newest : newest || priority;
  });
  const unreadCount = preventionPatterns.filter((ticket) => !readIds.includes(ticket.id)).length;

  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [selected]);

  function openTicket(ticket: PreventionPattern, opener: HTMLButtonElement) {
    openerRef.current = opener;
    const currentIds = parseReadIds(getReadState());
    if (!currentIds.includes(ticket.id)) saveReadIds([...currentIds, ticket.id]);
    setSelected(ticket);
  }

  return (
    <AppShell>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8 lg:px-10">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight">Prevention</h1>
            <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-fg-muted">Demo</span>
          </div>
          <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-4">
            <span role="status" className="whitespace-nowrap text-xs text-fg-muted">{unreadCount} unread</span>
            <label className="relative">
              <span className="sr-only">Sort tickets</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-9 appearance-none rounded-md border border-line bg-surface px-3 pr-8 text-xs text-fg-muted outline-none hover:border-line-strong focus:border-accent">
                <option value="importance">Importance, then date</option>
                <option value="newest">Newest, then importance</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-3 size-3 text-fg-muted" strokeWidth={1.5} />
            </label>
          </div>
        </header>

        <section aria-label="Prevention tickets" className="overflow-hidden rounded-lg border border-line bg-surface">
          <div aria-hidden="true" className="grid grid-cols-[12px_minmax(0,1fr)_48px] items-center gap-2 border-b border-line px-3 py-2.5 font-mono text-[10px] uppercase tracking-wider text-fg-dim sm:grid-cols-[80px_minmax(0,1fr)_80px_56px] sm:gap-4 sm:px-4">
            <span className="hidden sm:block">Priority</span><span className="sm:hidden" /><span>Ticket</span><span className="hidden sm:block">Machine</span><span className="text-right">Date</span>
          </div>
          <ul className="divide-y divide-line">
            {tickets.map((ticket) => {
              const unread = !readIds.includes(ticket.id);
              const priority = importance[ticket.importance];
              return (
                <li key={ticket.id}>
                  <button type="button" aria-haspopup="dialog" aria-label={`${unread ? "Unread" : "Read"}: ${ticket.importance} priority, ${ticket.title}, ${ticket.machinePk}, ${ticketDate(ticket.createdAt)}`} onClick={(event) => openTicket(ticket, event.currentTarget)} className={`grid min-h-11 w-full grid-cols-[12px_minmax(0,1fr)_48px] items-center gap-2 px-3 text-left transition-colors hover:bg-surface-2 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent sm:grid-cols-[80px_minmax(0,1fr)_80px_56px] sm:gap-4 sm:px-4 ${unread ? "bg-surface-2/60 font-semibold text-fg" : "font-normal text-fg-muted"}`}>
                    <span className={`flex items-center gap-2 font-mono text-[10px] ${priority.color}`}><span className={`size-1.5 shrink-0 rounded-full ${priority.dot}`} /><span className="hidden sm:inline">{ticket.importance}</span></span>
                    <span className="flex min-w-0 items-center gap-2"><span className="truncate text-[13px]">{ticket.title}</span>{unread && <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-accent" />}</span>
                    <span className="hidden font-mono text-[10px] sm:block">{ticket.machinePk}</span>
                    <time dateTime={ticket.createdAt} className="text-right font-mono text-[10px] tabular-nums">{ticketDate(ticket.createdAt)}</time>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      {selected && <dialog ref={dialogRef} aria-labelledby="prevention-title" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setSelected(null); } }} className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-lg border border-line bg-surface p-0 text-fg backdrop:bg-bg/80">
        <header className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
          <div className="flex items-center gap-3 font-mono text-[10px]"><span className="text-fg-muted">{selected.id}</span><span className={`flex items-center gap-1.5 ${importance[selected.importance].color}`}><span className={`size-1.5 rounded-full ${importance[selected.importance].dot}`} />{selected.importance} priority</span></div>
          <button type="button" onClick={() => setSelected(null)} aria-label="Close ticket" className="-m-2 flex size-9 items-center justify-center rounded-md text-fg-muted hover:bg-surface-2 hover:text-fg focus-visible:outline-2 focus-visible:outline-accent"><X className="size-4" strokeWidth={1.5} /></button>
        </header>
        <div className="space-y-5 p-5">
          <div><h2 id="prevention-title" className="text-xl font-semibold tracking-tight">{selected.title}</h2><p className="mt-2 font-mono text-[10px] leading-5 text-fg-muted">{selected.machinePk} · {machineModels[selected.modelId].model} · {ticketDate(selected.createdAt)}</p></div>
          <p className="text-sm leading-6 text-fg-muted">{selected.summary}</p>
          <div><h3 className="text-xs font-medium">Possible cause</h3><p className="mt-1.5 text-sm leading-6 text-fg-muted">{selected.hypothesis}</p></div>
          <div className="rounded-md border border-line bg-surface-2 p-4"><h3 className="text-xs font-medium text-info">Recommended action</h3><p className="mt-1.5 text-sm leading-6">{selected.action}</p></div>
          <details className="group border-t border-line pt-4"><summary className="flex cursor-pointer list-none items-center justify-between text-xs text-fg-muted focus-visible:outline-2 focus-visible:outline-accent">{selected.incidents.length} supporting incidents<ChevronDown className="size-3.5 group-open:rotate-180" strokeWidth={1.5} /></summary><ul className="mt-3 divide-y divide-line">{selected.incidents.map((incident) => <li key={incident.id} className="py-3"><p className="font-mono text-[10px] text-fg-dim">{incident.id} · {incident.date}</p><p className="mt-1 text-xs leading-5 text-fg-muted">{incident.title}</p></li>)}</ul></details>
        </div>
        <footer className="flex items-center justify-between border-t border-line px-5 py-3"><span className="font-mono text-[10px] text-fg-dim">SIMULATED FINDING</span><button type="button" onClick={() => { saveReadIds(parseReadIds(getReadState()).filter((id) => id !== selected.id)); setSelected(null); }} className="rounded-md px-2 py-2 text-xs text-fg-muted hover:bg-surface-2 hover:text-fg focus-visible:outline-2 focus-visible:outline-accent">Mark unread</button></footer>
      </dialog>}
    </AppShell>
  );
}
