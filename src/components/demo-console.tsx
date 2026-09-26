"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { resetDemoWorkspace, useDemoWorkspace } from "@/lib/demo-workspace";

export function DemoConsole() {
  const { machines, tickets, ready } = useDemoWorkspace();
  const [message, setMessage] = useState("");
  function reset() {
    try { resetDemoWorkspace(); setMessage("Demo restored. Machines and ticket history are ready."); }
    catch { setMessage("Could not save the reset. Allow browser storage, then try again."); }
  }
  return <AppShell>
    <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">[ DEMO WORKSPACE ]</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Ready for the next run.</h1>
      <p className="mt-3 text-sm leading-6 text-fg-muted">Restore 20 machines, including five Tormach 1100MX mills, and the team’s repair history. This replaces machines and tickets saved in this browser.</p>
      <div className="mt-8 grid grid-cols-2 gap-4">
        {[{ label: "Machines", count: machines.length }, { label: "Tickets", count: tickets.length }].map(({ label, count }) => <div key={label} className="rounded-lg border border-line bg-surface p-5"><p className="text-xs text-fg-muted">{label}</p><p className="mt-3 font-mono text-3xl tabular-nums">{count}</p></div>)}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-5">
        <button disabled={!ready} onClick={reset} className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-black disabled:opacity-40"><RotateCcw className="size-4" strokeWidth={1.5} />Reset demo data</button>
        <Link href="/machine/CNC-MX-01" className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg">Open demo machine <ArrowRight className="size-4" strokeWidth={1.5} /></Link>
      </div>
      <p role="status" className="mt-4 text-sm text-fg-muted">{message}</p>
      <section className="mt-8 rounded-lg border border-line bg-surface p-5">
        <p className="font-mono text-xs text-accent">CNC-MX-01 · BAY 03</p>
        <p className="mt-3 text-sm leading-6">The tool won’t release, but the air pressure looks fine. 120 PSI. John fixed this last month, but he’s away. What should I check? The power drawbar clicks.</p>
        <p className="mt-3 text-xs leading-5 text-fg-muted">The repair history includes John’s restricted air fitting, a contaminated toolholder, and a blocked coolant pump. CNC-MX-03 contains the lubrication warnings.</p>
      </section>
    </main>
  </AppShell>;
}
