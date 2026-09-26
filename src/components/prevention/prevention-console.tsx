"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Check, ChevronDown, Clock3, FileText, RotateCw, ScanLine, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { machineModels } from "@/lib/machines";
import { preventionDowntimeHours, preventionIncidentCount, preventionPatterns } from "@/lib/prevention-demo";

type Filter = "All" | "Needs review" | "Reviewed";
const secondaryButton = "inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-line bg-surface-2 px-3.5 text-xs font-medium text-fg transition-colors hover:border-line-strong focus-visible:outline-2 focus-visible:outline-accent disabled:cursor-wait disabled:opacity-60";
const eyebrow = "font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted";

export function PreventionConsole() {
  const reducedMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState(preventionPatterns[0].id);
  const [reviewedIds, setReviewedIds] = useState<string[]>([]);
  const [filter, setFilter] = useState<Filter>("All");
  const [scanStep, setScanStep] = useState<number | null>(null);
  const [scanComplete, setScanComplete] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const visiblePatterns = preventionPatterns.filter((pattern) => filter === "All" || (filter === "Reviewed") === reviewedIds.includes(pattern.id));
  const selected = visiblePatterns.find((pattern) => pattern.id === selectedId) ?? visiblePatterns[0];
  const reviewed = selected ? reviewedIds.includes(selected.id) : false;
  const scanning = scanStep !== null;

  useEffect(() => {
    if (scanStep === null) return;
    const timer = window.setTimeout(() => {
      if (scanStep < 2) setScanStep(scanStep + 1);
      else {
        setScanStep(null);
        setScanComplete(true);
        setAnnouncement("Demo analysis complete. Three existing prevention tickets matched. No new patterns; no duplicate tickets filed.");
      }
    }, 650);
    return () => window.clearTimeout(timer);
  }, [scanStep]);

  function toggleReviewed() {
    if (!selected) return;
    setReviewedIds((ids) => reviewed ? ids.filter((id) => id !== selected.id) : [...ids, selected.id]);
    setAnnouncement(`${selected.id} ${reviewed ? "reopened for review" : "marked reviewed"}. Demo changes last until this page is reloaded.`);
  }

  return (
    <AppShell>
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-11">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <header className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <div className="flex flex-wrap items-center gap-3"><span className={eyebrow}>[ PREVENTION ]</span><span className="rounded border border-line px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-fg-muted">Demo data</span></div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Stop the repeat breakdown.</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-fg-muted">Your incident history has patterns. Turn them into action before the next shift.</p>
            </div>
            <button type="button" disabled={scanning} onClick={() => { setScanStep(0); setScanComplete(false); setAnnouncement("Demo analysis started."); }} className={`${secondaryButton} sm:mt-8`}>
              <RotateCw className={`size-3.5 ${scanning ? "motion-safe:animate-spin" : ""}`} strokeWidth={1.5} />{scanning ? "Analyzing incidents…" : "Run demo analysis"}
            </button>
          </header>

          <section aria-label="Analysis overview" className="mt-8 grid grid-cols-1 divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { label: "Incidents connected", value: String(preventionIncidentCount).padStart(2, "0"), note: "Across 3 demo machines", icon: FileText },
              { label: "Recurring patterns", value: "03", note: `${preventionPatterns.length - reviewedIds.length} prevention tickets need review`, icon: ScanLine },
              { label: "Recorded downtime", value: `${preventionDowntimeHours.toFixed(1)}h`, note: "Linked incidents · not projected savings", icon: Clock3 },
            ].map(({ label, value, note, icon: Icon }) => (
              <div key={label} className="px-5 py-5 lg:px-6">
                <div className="flex items-center justify-between gap-2"><span className={eyebrow}>{label}</span><Icon className="size-4 text-fg-dim" strokeWidth={1.5} /></div>
                <p className="mt-2 font-mono text-3xl tracking-tight tabular-nums">{value}</p>
                <p className="mt-1 text-[11px] text-fg-muted">{note}</p>
              </div>
            ))}
          </section>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-fg-muted" aria-live="polite">
            <span className="flex items-center gap-2"><span className={`size-1.5 rounded-full ${scanning ? "bg-info motion-safe:animate-pulse" : "bg-fg-dim"}`} />{scanning ? ["Reading 12 incident reports…", "Connecting recurring symptoms…", "Matching prevention tickets…"][scanStep] : scanComplete ? "Analysis complete · no new patterns" : "Demo analysis complete · 3 tickets automatically filed"}</span>
            <span>13–26 SEP 2026 · 14-DAY WINDOW</span>
          </div>

          <div className="mt-9 grid items-start gap-6 xl:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.5fr)]">
            <section aria-labelledby="tickets-heading" className="min-w-0">
              <div className="flex items-center justify-between"><h2 id="tickets-heading" className="text-sm font-medium">Prevention tickets</h2><span className="font-mono text-xs text-fg-dim">{String(visiblePatterns.length).padStart(2, "0")}</span></div>
              <div className="mt-4 flex gap-1 border-b border-line pb-3" aria-label="Filter prevention tickets">
                {(["All", "Needs review", "Reviewed"] as const).map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`min-h-8 rounded-md px-2.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-accent ${filter === item ? "bg-surface-2 text-fg" : "text-fg-muted hover:text-fg"}`}>{item}</button>)}
              </div>
              <div className="mt-3 space-y-3">
                {visiblePatterns.map((pattern) => {
                  const active = selected?.id === pattern.id;
                  const isReviewed = reviewedIds.includes(pattern.id);
                  return (
                    <button type="button" key={pattern.id} aria-pressed={active} aria-controls="prevention-detail" onClick={() => { setSelectedId(pattern.id); setAnnouncement(`${pattern.id} selected. Ticket details follow the list.`); }} className={`group w-full rounded-lg border bg-surface p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-accent ${active ? "border-accent/60" : "border-line hover:border-line-strong"}`}>
                      <div className="flex items-center justify-between gap-2 font-mono text-[10px]"><span className={active ? "text-accent" : "text-fg-muted"}>{pattern.id}</span><span className="flex items-center gap-1.5 text-fg-muted">{isReviewed && <Check className="size-3" strokeWidth={1.5} />}{isReviewed ? "REVIEWED" : "NEEDS REVIEW"}</span></div>
                      <h3 className="mt-3 text-sm font-medium leading-5">{pattern.title}</h3>
                      <p className="mt-2 text-xs text-fg-muted">{pattern.category}</p>
                      <div className="mt-4 flex items-center gap-2 border-t border-line pt-3 font-mono text-[10px] text-fg-muted"><span>{pattern.machinePk}</span><span className="text-fg-dim">/</span><span>{pattern.incidents.length} incidents</span><ArrowRight className={`ml-auto size-3.5 ${active ? "text-accent" : "text-fg-dim"}`} strokeWidth={1.5} /></div>
                    </button>
                  );
                })}
                {!visiblePatterns.length && <div className="rounded-lg border border-dashed border-line p-6 text-sm leading-6 text-fg-muted">{filter === "Reviewed" ? "No tickets reviewed yet. Open a ticket to inspect the pattern and recommended action." : "All prevention tickets have been reviewed."}<button type="button" onClick={() => setFilter("All")} className="mt-3 block text-xs text-fg underline underline-offset-4">Show all tickets</button></div>}
              </div>
              <p className="mt-4 flex items-start gap-2 text-[11px] leading-5 text-fg-dim"><ShieldCheck className="mt-0.5 size-3.5 shrink-0" strokeWidth={1.5} />Filed by Torque. Reviewed by your team.</p>
              {selected && <a href="#prevention-detail" className="mt-3 inline-flex items-center gap-2 text-xs text-fg-muted underline underline-offset-4 xl:hidden">View selected ticket <ArrowDown className="size-3" /></a>}
            </section>

            {selected && <motion.section key={selected.id} id="prevention-detail" aria-labelledby="detail-heading" initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="min-w-0 scroll-mt-5 overflow-hidden rounded-lg border border-line bg-surface">
              <div className="border-b border-line px-5 py-4 sm:px-6">
                <div className="flex flex-wrap items-center justify-between gap-2"><span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-info"><ShieldCheck className="size-3.5" strokeWidth={1.5} />AI prevention ticket</span><span className="font-mono text-[10px] text-fg-muted">{selected.id} · {reviewed ? "REVIEWED" : "NEEDS REVIEW"}</span></div>
                <h2 id="detail-heading" className="mt-4 text-xl font-semibold tracking-tight">{selected.title}</h2>
                <p className="mt-2 font-mono text-[10px] leading-5 text-fg-muted">{selected.machinePk} · {machineModels[selected.modelId].manufacturer} {machineModels[selected.modelId].model}</p>
              </div>
              <div className="space-y-6 px-5 py-5 sm:px-6">
                <div><h3 className={eyebrow}>01 / Pattern detected</h3><p className="mt-2 text-sm leading-6 text-fg-muted">{selected.summary}</p></div>
                <div><h3 className={eyebrow}>02 / Possible cause</h3><p className="mt-2 text-sm leading-6 text-fg-muted">{selected.hypothesis}</p></div>
                <div className="rounded-md border border-line bg-surface-2 p-4">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-info">03 / Recommended action</h3>
                  <p className="mt-2 text-sm leading-6 text-fg">{selected.action}</p>
                  <p className="mt-3 font-mono text-[10px] text-fg-muted">REVIEW WITH · {selected.owner}</p>
                  <details className="group mt-3 border-t border-line pt-3"><summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs text-fg-muted focus-visible:outline-2 focus-visible:outline-accent">Suggested review checklist<ChevronDown className="size-3.5 shrink-0 transition-transform group-open:rotate-180" strokeWidth={1.5} /></summary><ol className="mt-3 space-y-3">{selected.checklist.map((item, index) => <li key={item} className="flex gap-3 text-xs leading-5 text-fg-muted"><span className="font-mono text-fg-dim">0{index + 1}</span>{item}</li>)}</ol></details>
                </div>
                <details className="group rounded-md border border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-xs focus-visible:outline-2 focus-visible:outline-accent"><span className="flex items-center gap-2"><FileText className="size-3.5 text-fg-muted" strokeWidth={1.5} />Supporting incidents<span className="font-mono text-fg-muted">({selected.incidents.length})</span></span><ChevronDown className="size-3.5 shrink-0 text-fg-muted transition-transform group-open:rotate-180" strokeWidth={1.5} /></summary>
                  <div className="divide-y divide-line border-t border-line">{selected.incidents.map((incident) => <article key={incident.id} className="p-4"><div className="flex flex-wrap justify-between gap-2 font-mono text-[10px] text-fg-muted"><span className="text-accent">{incident.id}</span><span>{incident.date}</span></div><h4 className="mt-2 text-xs font-medium">{incident.title}</h4><p className="mt-1.5 text-xs leading-5 text-fg-muted">{incident.note}</p><p className="mt-2 font-mono text-[10px] text-fg-dim">{incident.downtimeMinutes} MIN RECORDED DOWNTIME</p></article>)}</div>
                </details>
              </div>
              <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-5 py-4 sm:px-6">
                <p className="max-w-56 text-[11px] leading-5 text-fg-muted">{reviewed ? "Review recorded for this demo session." : "Review the cause with your team. A pattern is a starting point."}</p>
                <button type="button" onClick={toggleReviewed} className={reviewed ? secondaryButton : "inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-accent px-4 text-xs font-medium text-black transition-shadow hover:shadow-[0_0_20px_var(--color-accent-dim)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"}>{reviewed ? <RotateCw className="size-3.5" strokeWidth={1.5} /> : <Check className="size-3.5" strokeWidth={1.5} />}{reviewed ? "Reopen ticket" : "Mark reviewed"}</button>
              </footer>
            </motion.section>}
          </div>
          <p className="mt-7 border-t border-line pt-4 text-[10px] leading-5 text-fg-dim">Demo workspace · Kestrel Precision Machining · All incidents and AI findings are simulated. Review changes reset on reload.</p>
          <p role="status" className="sr-only">{announcement}</p>
        </motion.div>
      </main>
    </AppShell>
  );
}
