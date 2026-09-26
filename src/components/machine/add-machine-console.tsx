"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import {
  Box,
  Building2,
  Check,
  ChevronDown,
  CirclePlus,
  Factory,
  FileText,
  LifeBuoy,
  LoaderCircle,
  MapPin,
  MousePointer2,
  Rotate3D,
  Search,
  Settings2,
  TicketPlus,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { machineModels, type MachineModelId } from "@/lib/machines";

const MachineModelViewer = dynamic(
  () => import("@/components/machine/machine-model-viewer").then((module) => module.MachineModelViewer),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-full place-items-center bg-bg">
        <div className="text-center">
          <LoaderCircle className="mx-auto size-5 animate-spin text-accent" strokeWidth={1.5} />
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-fg-dim">Loading geometry</p>
        </div>
      </div>
    ),
  },
);

const machineOptions = (Object.entries(machineModels) as [MachineModelId, (typeof machineModels)[MachineModelId]][]).map(
  ([id, machine]) => ({ id, ...machine }),
);

const navigation = [
  { label: "Machine fix", icon: LifeBuoy, href: "/machine/MILL-01" },
  { label: "Add ticket", icon: TicketPlus, href: "/ticket" },
  { label: "Add machine", icon: CirclePlus, href: "/add_machine", active: true },
  { label: "Organization", icon: Users, href: "/org" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function AddMachineConsole() {
  const [selectedId, setSelectedId] = useState<MachineModelId>("tormach-pcnc-1100");
  const [query, setQuery] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [internalId, setInternalId] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [registered, setRegistered] = useState(false);

  const selected = machineModels[selectedId];
  const filteredOptions = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return machineOptions;
    return machineOptions.filter((machine) =>
      `${machine.manufacturer} ${machine.model} ${machine.category}`.toLowerCase().includes(term),
    );
  }, [query]);

  function selectMachine(id: MachineModelId) {
    setSelectedId(id);
    setQuery("");
    setPickerOpen(false);
  }

  function registerMachine(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!internalId.trim()) return;
    setRegistered(true);
    window.setTimeout(() => setRegistered(false), 2600);
  }

  return (
    <div className="min-h-screen bg-bg pr-16 text-fg md:pr-60">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-bg/95 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] sm:text-xs">
          <span className="hidden text-fg-muted sm:inline">Kestrel Precision</span>
          <span className="hidden text-fg-dim sm:inline">/</span>
          <span>Register machine</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] text-fg-muted sm:text-[10px]">
          <span className="size-1.5 rounded-full bg-ok" />
          CATALOG ONLINE
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
          className="border-b border-line pb-7"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{"// Asset intake"}</span>
            <span className="h-px w-10 bg-line" />
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-fg-dim">Step 01 / 01</span>
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Register a new machine</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-fg-muted">
            Link equipment to Kestrel Precision. Model documentation and global repair knowledge become available immediately.
          </p>
        </motion.div>

        <form onSubmit={registerMachine} className="mt-7 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(420px,0.88fr)]">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease }}
            className="space-y-5"
          >
            <section className="rounded-lg border border-line bg-surface">
              <div className="flex items-center gap-3 border-b border-line px-4 py-3.5 sm:px-5">
                <div className="grid size-8 place-items-center rounded-md border border-line bg-surface-2">
                  <Factory className="size-4 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-sm font-medium">Machine identity</h2>
                  <p className="mt-0.5 text-xs text-fg-muted">Select catalog model and assign site identifier.</p>
                </div>
                <span className="ml-auto font-mono text-[9px] text-fg-dim">REQUIRED</span>
              </div>

              <div className="space-y-5 p-4 sm:p-5">
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.13em] text-fg-muted">
                    Machine type <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      aria-expanded={pickerOpen}
                      onClick={() => setPickerOpen((open) => !open)}
                      className="flex min-h-12 w-full items-center gap-3 rounded-md border border-line bg-surface-2 px-3 text-left outline-none transition-colors hover:border-line-strong focus:border-accent focus:ring-2 focus:ring-accent-dim"
                    >
                      <Box className="size-4 shrink-0 text-accent" strokeWidth={1.5} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">{selected.manufacturer} {selected.model}</span>
                        <span className="mt-0.5 block font-mono text-[9px] uppercase text-fg-muted">{selected.category}</span>
                      </span>
                      <ChevronDown className={`size-4 text-fg-muted transition-transform ${pickerOpen ? "rotate-180" : ""}`} strokeWidth={1.5} />
                    </button>

                    <AnimatePresence>
                      {pickerOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.16, ease }}
                          className="absolute z-40 mt-2 w-full overflow-hidden rounded-lg border border-line-strong bg-surface"
                        >
                          <label className="relative block border-b border-line p-2">
                            <span className="sr-only">Search machine catalog</span>
                            <Search className="absolute left-5 top-1/2 size-3.5 -translate-y-1/2 text-fg-dim" strokeWidth={1.5} />
                            <input
                              autoFocus
                              value={query}
                              onChange={(event) => setQuery(event.target.value)}
                              placeholder="Search manufacturer, model, or type"
                              className="h-9 w-full rounded-md border border-line bg-surface-2 pl-9 pr-8 text-xs outline-none placeholder:text-fg-dim focus:border-accent"
                            />
                            {query && (
                              <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-5 top-1/2 -translate-y-1/2 text-fg-dim hover:text-fg">
                                <X className="size-3.5" />
                              </button>
                            )}
                          </label>
                          <div className="max-h-64 overflow-y-auto p-1.5">
                            {filteredOptions.map((machine) => (
                              <button
                                key={machine.id}
                                type="button"
                                onClick={() => selectMachine(machine.id)}
                                className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors hover:bg-surface-2 ${machine.id === selectedId ? "bg-accent-dim" : ""}`}
                              >
                                <span className={`grid size-7 place-items-center rounded border ${machine.id === selectedId ? "border-accent/40 text-accent" : "border-line text-fg-dim"}`}>
                                  {machine.id === selectedId ? <Check className="size-3.5" /> : <Box className="size-3.5" />}
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block text-xs font-medium">{machine.manufacturer} {machine.model}</span>
                                  <span className="mt-0.5 block font-mono text-[9px] uppercase text-fg-muted">{machine.category}</span>
                                </span>
                                <span className="font-mono text-[8px] text-ok">3D READY</span>
                              </button>
                            ))}
                            {filteredOptions.length === 0 && (
                              <div className="px-3 py-8 text-center font-mono text-[10px] text-fg-muted">NO CATALOG MATCH</div>
                            )}
                          </div>
                          <div className="border-t border-line px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] text-fg-dim">
                            {machineOptions.length} verified models · Catalog rev 24.09
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label>
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.13em] text-fg-muted">Internal machine ID <span className="text-accent">*</span></span>
                    <input
                      required
                      value={internalId}
                      onChange={(event) => setInternalId(event.target.value.toUpperCase())}
                      placeholder="E.G. MILL-04"
                      className="h-11 w-full rounded-md border border-line bg-surface-2 px-3 font-mono text-sm uppercase outline-none placeholder:text-fg-dim focus:border-accent focus:ring-2 focus:ring-accent-dim"
                    />
                    <span className="mt-1.5 block text-[10px] text-fg-dim">Must be unique within organization</span>
                  </label>
                  <label>
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.13em] text-fg-muted">Location <span className="text-fg-dim">· optional</span></span>
                    <span className="relative block">
                      <MapPin className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-fg-dim" strokeWidth={1.5} />
                      <input
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        placeholder="Bay 02 / Cell 04"
                        className="h-11 w-full rounded-md border border-line bg-surface-2 pl-9 pr-3 text-sm outline-none placeholder:text-fg-dim focus:border-accent focus:ring-2 focus:ring-accent-dim"
                      />
                    </span>
                  </label>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-line bg-surface">
              <div className="flex items-center gap-3 border-b border-line px-4 py-3.5 sm:px-5">
                <FileText className="size-4 text-fg-muted" strokeWidth={1.5} />
                <div>
                  <h2 className="text-sm font-medium">Operational context</h2>
                  <p className="mt-0.5 text-xs text-fg-muted">Seed local knowledge for faster diagnosis.</p>
                </div>
                <span className="ml-auto font-mono text-[9px] text-fg-dim">OPTIONAL</span>
              </div>
              <div className="p-4 sm:p-5">
                <label htmlFor="machine-notes" className="sr-only">Machine history and notes</label>
                <textarea
                  id="machine-notes"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  rows={5}
                  maxLength={2000}
                  placeholder="Add service history, known quirks, recent events, installed modifications, recurring alarms, or operator notes…"
                  className="w-full resize-none rounded-md border border-line bg-surface-2 px-3.5 py-3 text-sm leading-6 outline-none placeholder:text-fg-dim focus:border-accent focus:ring-2 focus:ring-accent-dim"
                />
                <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-fg-dim">
                  <span>Stored in company-local knowledge only</span>
                  <span className="tabular-nums">{notes.length} / 2000</span>
                </div>
              </div>
            </section>

            <div className="flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <p className="max-w-sm text-[11px] leading-5 text-fg-muted">Registration creates an asset record. Telemetry connections can be configured later.</p>
              <button
                type="submit"
                disabled={!internalId.trim()}
                className="flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-black transition-[filter,opacity] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {registered ? <Check className="size-4" strokeWidth={2} /> : <CirclePlus className="size-4" strokeWidth={2} />}
                {registered ? "Machine registered" : "Register machine"}
              </button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease }}
            className="overflow-hidden rounded-lg border border-line bg-surface xl:sticky xl:top-[5.25rem]"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-fg-muted">Model verification</p>
                <p className="mt-1 text-xs font-medium">{selected.manufacturer} {selected.model}</p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] text-ok"><span className="size-1.5 rounded-full bg-ok" /> 3D READY</div>
            </div>
            <div className="relative h-[360px] border-b border-line sm:h-[420px] xl:h-[470px]">
              <MachineModelViewer key={selectedId} modelId={selectedId} className="absolute inset-0" autoRotate />
              <div className="pointer-events-none absolute left-4 top-4 border-l border-t border-line-strong p-2 font-mono text-[8px] uppercase tracking-[0.12em] text-fg-dim">Live preview</div>
              <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-3 rounded-md border border-line bg-surface/95 px-3 py-2 font-mono text-[8px] uppercase text-fg-muted backdrop-blur-sm">
                <span className="flex items-center gap-1.5"><Rotate3D className="size-3" /> Drag to rotate</span>
                <span className="hidden items-center gap-1.5 sm:flex"><MousePointer2 className="size-3" /> Scroll to zoom</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line">
              <div className="bg-surface p-4">
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-fg-dim">Manufacturer</p>
                <p className="mt-1.5 text-xs">{selected.manufacturer}</p>
              </div>
              <div className="bg-surface p-4">
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-fg-dim">Equipment class</p>
                <p className="mt-1.5 text-xs">{selected.category}</p>
              </div>
              <div className="col-span-2 bg-surface p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-fg-dim">Knowledge coverage</p>
                    <p className="mt-1.5 text-xs">Official manual indexed · Global KB linked</p>
                  </div>
                  <Check className="size-4 text-info" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </motion.aside>
        </form>
      </main>

      <aside className="fixed inset-y-0 right-0 z-50 flex w-16 flex-col border-l border-line bg-surface md:w-60">
        <div className="flex h-14 items-center border-b border-line px-0 md:px-4">
          <Link href="/home" className="flex w-full items-center justify-center gap-3 md:justify-start">
            <div className="grid size-8 place-items-center rounded-md bg-accent text-black"><Box className="size-4" strokeWidth={2} /></div>
            <div className="hidden md:block"><p className="text-sm font-semibold tracking-tight">FIELDNOTE</p><p className="mt-0.5 font-mono text-[8px] text-fg-dim">OPS CONTROL</p></div>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-2 md:p-3" aria-label="Primary">
          <p className="mb-3 hidden px-3 pt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-fg-dim md:block">Control</p>
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} title={item.label} className={`relative flex h-10 items-center justify-center gap-3 rounded-md border text-sm transition-colors md:justify-start md:px-3 ${item.active ? "border-accent/30 bg-accent-dim text-fg" : "border-transparent text-fg-muted hover:border-line hover:bg-surface-2 hover:text-fg"}`}>
              {item.active && <span className="absolute bottom-2 left-0 top-2 w-px bg-accent" />}
              <item.icon className={`size-4 shrink-0 ${item.active ? "text-accent" : ""}`} strokeWidth={1.5} />
              <span className="hidden md:inline">{item.label}</span>
              {item.active && <span className="ml-auto hidden font-mono text-[8px] text-accent md:inline">ACTIVE</span>}
            </Link>
          ))}
        </nav>
        <div className="hidden border-t border-line px-5 py-4 md:block">
          <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-fg-dim">Organization</p>
          <div className="mt-3 flex items-center gap-3"><Building2 className="size-4 text-fg-muted" /><div><p className="text-xs">Kestrel Precision</p><p className="mt-0.5 font-mono text-[8px] text-fg-dim">3 MACHINES</p></div></div>
        </div>
        <div className="border-t border-line p-2 md:p-3">
          <button type="button" className="flex h-10 w-full items-center justify-center gap-3 rounded-md text-fg-muted hover:bg-surface-2 hover:text-fg md:justify-start md:px-3"><Settings2 className="size-4" strokeWidth={1.5} /><span className="hidden text-sm md:inline">Settings</span></button>
          <div className="mt-1 flex items-center justify-center gap-3 border-t border-line pt-3 md:justify-start md:px-3"><div className="grid size-7 place-items-center rounded-full bg-surface-2 font-mono text-[9px]">DR</div><div className="hidden md:block"><p className="text-xs">Dana Reyes</p><p className="mt-0.5 text-[9px] text-fg-dim">Maintenance lead</p></div></div>
        </div>
      </aside>
    </div>
  );
}
