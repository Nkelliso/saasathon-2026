"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { FormEvent, useState } from "react";
import { ArrowRight, Box, Check, ChevronDown, LoaderCircle, Plus } from "lucide-react";
import { motion } from "motion/react";
import { AppShell } from "@/components/app-shell";
import { machineModels, type MachineModelId } from "@/lib/machines";

import { useOrganizationMachines, saveOrganizationMachines } from "@/lib/organization-machines";

const fieldClass = "w-full rounded-md border border-line bg-surface-2 px-3.5 text-sm text-fg outline-none transition-colors placeholder:text-fg-dim hover:border-line-strong focus:border-accent focus:ring-2 focus:ring-accent-dim";
const machineOptions = Object.entries(machineModels);
const MachineModelViewer = dynamic(
  () => import("@/components/machine/machine-model-viewer").then((module) => module.MachineModelViewer),
  { ssr: false, loading: () => <div className="grid h-full place-items-center"><LoaderCircle aria-label="Loading model" className="size-5 animate-spin text-fg-muted" /></div> },
);

export function AddMachineConsole() {
  const { machines } = useOrganizationMachines();
  const [modelId, setModelId] = useState<MachineModelId>("tormach-pcnc-1100");
  const previewModel = machineModels[modelId];
  const [internalId, setInternalId] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [savedId, setSavedId] = useState("");

  function registerMachine(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const pk = internalId.trim();
    if (!pk) return;
    try {
      if (machines.some((machine) => machine.pk.toLowerCase() === pk.toLowerCase())) {
        setError("This machine ID is already in use. Choose a different ID.");
        return;
      }
      saveOrganizationMachines([...machines, {
        pk, name: pk, modelId, location: "", status: "IDLE", notes: notes.trim(),
      }]);
      setSavedId(pk);
      setError("");
    } catch {
      setError("Couldn't save this machine. Please try again.");
    }
  }

  return (
    <AppShell>
      <motion.main initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 px-5 py-9 sm:px-8 sm:py-14 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-12 xl:px-12">
        <div className="order-1 min-w-0 lg:col-start-1 lg:row-start-1">
          <h1 className="text-3xl font-semibold tracking-tight">Add a machine</h1>
          <p className="mt-3 text-sm leading-6 text-fg-muted">Choose a model to get answers from its manuals and your team&apos;s notes.</p>
        </div>

          {savedId ? (
            <section aria-live="polite" className="order-2 rounded-lg border border-line bg-surface p-6 lg:col-start-1 lg:row-start-2">
              <Check className="size-5 text-accent" strokeWidth={1.5} />
              <h2 className="mt-4 text-lg font-medium"><span className="font-mono">{savedId}</span> added</h2>
              <p className="mt-2 text-sm text-fg-muted">Your machine is ready for troubleshooting.</p>
              <Link href={`/machine/${encodeURIComponent(savedId)}`} className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-black">
                Open machine <ArrowRight className="size-4" strokeWidth={1.5} />
              </Link>
              <button type="button" onClick={() => { setSavedId(""); setInternalId(""); setNotes(""); }} className="mt-4 block text-sm text-fg-muted hover:text-fg">Add another machine</button>
            </section>
          ) : (
            <form onSubmit={registerMachine} className="contents lg:col-start-1 lg:row-start-2 lg:block lg:space-y-6">
              <div className="order-2 min-w-0">
                <label htmlFor="machine-type" className="mb-2 block text-sm font-medium">Machine type</label>
                <div className="relative">
                  <select id="machine-type" value={modelId} onChange={(event) => setModelId(event.target.value as MachineModelId)} className={`${fieldClass} h-12 appearance-none pr-10`}>
                    {machineOptions.map(([id, model]) => <option key={id} value={id}>{model.manufacturer} {model.model}</option>)}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-4 size-4 text-fg-muted" strokeWidth={1.5} />
                </div>
              </div>

              <div className="order-4 min-w-0 space-y-6">
              <div>
                <label htmlFor="machine-id" className="mb-2 block text-sm font-medium">Internal machine ID</label>
                <input id="machine-id" required maxLength={48} autoComplete="off" value={internalId} onChange={(event) => { setInternalId(event.target.value.toUpperCase()); setError(""); }} placeholder="e.g. MILL-04" aria-describedby={error ? "machine-id-error" : "machine-id-help"} aria-invalid={Boolean(error)} className={`${fieldClass} h-12 font-mono`} />
                <p id="machine-id-help" className="mt-2 text-xs leading-5 text-fg-muted">Use the unique ID your team calls this machine.</p>
                {error && <p id="machine-id-error" role="alert" className="mt-2 text-sm text-accent">{error}</p>}
              </div>

              <div>
                <label htmlFor="machine-notes" className="mb-2 block text-sm font-medium">Machine notes <span className="ml-1 text-xs font-normal text-fg-dim">Optional</span></label>
                <textarea id="machine-notes" value={notes} onChange={(event) => setNotes(event.target.value)} rows={5} maxLength={4000} placeholder="Known issues, recent repairs, or anything the next operator should know…" className={`${fieldClass} min-h-36 resize-y py-3 leading-6`} />
              </div>

              <div className="border-t border-line pt-6">
                <button type="submit" className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-black transition-shadow hover:shadow-[0_0_20px_var(--color-accent-dim)] sm:w-auto">
                  <Plus className="size-4" strokeWidth={1.5} /> Add machine
                </button>
              </div>
              </div>
            </form>
          )}
        <section aria-label="Machine preview" className="order-3 min-w-0 overflow-hidden rounded-lg border border-line bg-surface lg:sticky lg:top-14 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">
            <span className="flex items-center gap-2"><Box className="size-4" strokeWidth={1.5} /> Machine preview</span>
            <span>3D</span>
          </div>
          <MachineModelViewer modelId={modelId} showGizmo={false} className="h-72 sm:h-96 lg:h-[480px] xl:h-[540px]" />
          <div className="border-t border-line px-5 py-5">
            <div aria-live="polite" aria-atomic="true">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">{previewModel.category}</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">{previewModel.manufacturer} {previewModel.model}</h2>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-fg-dim">Drag to rotate · Pinch or scroll to zoom</p>
          </div>
        </section>
      </motion.main>
    </AppShell>
  );
}


