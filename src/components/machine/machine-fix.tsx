"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  BookOpenText,
  Box,
  Check,
  ChevronDown,
  CirclePlus,
  Clock3,
  Factory,
  FileText,
  Focus,
  Gauge,
  LifeBuoy,
  LoaderCircle,
  LockKeyhole,
  Maximize2,
  MousePointer2,
  Rotate3D,
  Search,
  Settings2,
  ShieldCheck,
  TicketPlus,
  Users,
  Wrench,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { getOrganizationMachine, machineModels, organizationMachines } from "@/lib/machines";

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

const navigation = [
  { label: "Machine fix", icon: LifeBuoy, href: "/machine/MILL-01", active: true },
  { label: "Add ticket", icon: TicketPlus, href: "/ticket" },
  { label: "Add machine", icon: CirclePlus, href: "/add_machine" },
  { label: "Organization", icon: Users, href: "/org" },
];

const faultSignals = ["ERR 1241", "Warm-up cycle", "Restricted airflow"];
const repairSteps = [
  {
    title: "Lock out main disconnect",
    description: "Engage E-stop, isolate the main supply, and wait for the drive bus indicator to extinguish.",
    time: "02 MIN",
    icon: LockKeyhole,
  },
  {
    title: "Clear the drive intake path",
    description: "Remove the cabinet filter. Clear metal fines and confirm the lower fan rotates without drag.",
    time: "06 MIN",
    icon: Wrench,
  },
  {
    title: "Reset and verify under load",
    description: "Restore power, clear ERR 1241, then run warm-up O02020. Spindle load should remain below 80%.",
    time: "12 MIN",
    icon: Gauge,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function MachineFix({ machinePk }: { machinePk: string }) {
  const router = useRouter();
  const machine = getOrganizationMachine(machinePk);
  const model = machineModels[machine.modelId];
  const [symptoms, setSymptoms] = useState(
    "Spindle stopped during warm-up. ERR 1241 remains after reset; cabinet fan sounds obstructed.",
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [guidedMode, setGuidedMode] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  function runDiagnosis() {
    setIsAnalyzing(true);
    window.setTimeout(() => setIsAnalyzing(false), 850);
  }

  function addSignal(signal: string) {
    if (symptoms.toLowerCase().includes(signal.toLowerCase())) return;
    setSymptoms((current) => `${current.trim()}${current.trim() ? " " : ""}${signal}.`);
  }

  function toggleStep(index: number) {
    setGuidedMode(true);
    setCompletedSteps((current) =>
      current.includes(index) ? current.filter((step) => step !== index) : [...current, index],
    );
  }

  return (
    <div className="min-h-screen bg-bg pr-16 text-fg md:pr-60">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-bg/95 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px]">
          <span className="hidden text-fg-muted sm:inline">Kestrel precision</span>
          <span className="hidden text-fg-dim sm:inline">/</span>
          <span className="truncate">{machine.pk}</span>
          <span className="text-fg-dim">/</span>
          <span className="text-fg-muted">Recovery</span>
        </div>
        <div className="flex shrink-0 items-center gap-2 font-mono text-[9px] uppercase text-fg-muted sm:text-[10px]">
          <span className="size-1.5 rounded-full bg-ok" /> KB online
          <span className="hidden text-fg-dim lg:inline">· 09:42 UTC</span>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease }}
          className="flex flex-col justify-between gap-5 border-b border-line pb-6 lg:flex-row lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-fault">{"// Active incident"}</span>
              <span className="h-px w-8 bg-line" />
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-fg-dim">INC-0241 · OPEN 64 MIN</span>
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Restore {machine.pk} to service</h1>
            <p className="mt-1.5 text-sm text-fg-muted">
              {model.manufacturer} {model.model} · {machine.location} · Probable spindle drive over-temperature
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-line bg-line lg:min-w-[390px]">
            {[["Downtime", "01:04:36"], ["Loss rate", "$6,000/hr"], ["Est. impact", "$6,480"]].map(([label, value]) => (
              <div key={label} className="bg-surface px-3 py-2.5 sm:px-4">
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-fg-dim sm:text-[9px]">{label}</p>
                <p className="mt-1 font-mono text-xs tabular-nums sm:text-sm">{value}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="mt-5 grid items-start gap-5 xl:grid-cols-[minmax(360px,0.78fr)_minmax(500px,1.22fr)]">
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 0.04, ease }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex h-14 items-center justify-between gap-3 border-b border-line px-3 sm:px-4">
                <div className="relative min-w-0 flex-1 sm:max-w-[270px]">
                  <Factory className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-accent" strokeWidth={1.5} />
                  <select
                    aria-label="Active machine"
                    value={machine.pk}
                    onChange={(event) => router.push(`/machine/${event.target.value}`)}
                    className="h-9 w-full appearance-none truncate rounded-md border border-line bg-surface-2 pl-9 pr-8 font-mono text-[10px] text-fg outline-none transition-colors hover:border-line-strong focus:border-accent focus:ring-2 focus:ring-accent-dim sm:text-xs"
                  >
                    {organizationMachines.map((item) => (
                      <option key={item.pk} value={item.pk}>{item.pk} · {machineModels[item.modelId].model}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-fg-muted" strokeWidth={1.5} />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="hidden items-center gap-1.5 rounded-md border border-fault/30 bg-fault/10 px-2 py-1.5 font-mono text-[9px] uppercase text-fault sm:flex">
                    <span className="size-1.5 animate-pulse rounded-full bg-fault" /> {machine.status}
                  </span>
                  <button type="button" aria-label="Center model" className="grid size-9 place-items-center rounded-md border border-line bg-surface-2 text-fg-muted transition-colors hover:border-line-strong hover:text-fg">
                    <Focus className="size-4" strokeWidth={1.5} />
                  </button>
                  <button type="button" aria-label="Fullscreen model" className="grid size-9 place-items-center rounded-md border border-line bg-surface-2 text-fg-muted transition-colors hover:border-line-strong hover:text-fg">
                    <Maximize2 className="size-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="relative h-[300px] sm:h-[350px] xl:h-[390px]">
                <MachineModelViewer modelId={machine.modelId} className="absolute inset-0" autoRotate />
                <div className="pointer-events-none absolute inset-x-4 top-4 flex items-start justify-between">
                  <div className="rounded-md border border-line bg-surface/95 px-2.5 py-2 backdrop-blur-sm">
                    <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-fg-dim">Live asset view</p>
                    <p className="mt-1 font-mono text-[10px]">CAM-02 · {machine.location}</p>
                  </div>
                  <div className="rounded-md border border-line bg-surface/95 p-2 text-fg-muted backdrop-blur-sm">
                    <Rotate3D className="size-4" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="pointer-events-none absolute left-[53%] top-[43%] hidden -translate-x-1/2 -translate-y-1/2 sm:block">
                  <div className="relative size-8 rounded-full border border-fault/60 bg-fault/10">
                    <span className="absolute inset-2 animate-pulse rounded-full bg-fault" />
                    <span className="absolute left-10 top-1/2 w-max -translate-y-1/2 rounded-md border border-fault/30 bg-surface/95 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-fault">Drive cabinet · suspected</span>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-x-4 bottom-3 flex items-center justify-between font-mono text-[8px] uppercase text-fg-dim">
                  <span className="flex items-center gap-1.5"><MousePointer2 className="size-3" /> Drag to inspect</span>
                  <span className="hidden sm:inline">Scroll to zoom</span>
                </div>
              </div>
              <span className="pointer-events-none absolute left-2 top-[64px] h-5 w-px bg-line-strong" />
              <span className="pointer-events-none absolute left-2 top-[64px] h-px w-5 bg-line-strong" />
              <span className="pointer-events-none absolute bottom-2 right-2 h-5 w-px bg-line-strong" />
              <span className="pointer-events-none absolute bottom-2 right-2 h-px w-5 bg-line-strong" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              <div className="rounded-lg border border-line bg-surface p-4">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-fg-muted">Detected signals</p>
                  <Activity className="size-4 text-fault" strokeWidth={1.5} />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {faultSignals.map((signal) => (
                    <button key={signal} type="button" onClick={() => addSignal(signal)} className="rounded-md border border-line bg-surface-2 px-2 py-1.5 font-mono text-[9px] text-fg-muted transition-colors hover:border-line-strong hover:text-fg">+ {signal}</button>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-accent/25 bg-accent-dim p-4">
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.13em] text-accent">
                  <FileText className="size-3.5" strokeWidth={1.5} /> Site memory
                </div>
                <p className="mt-2 text-xs leading-5 text-fg-muted">Cabinet fan clogged twice this quarter. Keep filter <span className="font-mono text-fg">34146</span> stocked.</p>
                <p className="mt-2 font-mono text-[8px] uppercase text-fg-dim">Sam W. · 18 Jun 2026</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 0.08, ease }}
            className="min-w-0"
          >
            <div className="rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-accent">{"// Describe the fault"}</p>
                  <p className="mt-1 text-xs text-fg-muted">Add what the operator can see, hear, or measure.</p>
                </div>
                <span className="hidden font-mono text-[9px] uppercase text-fg-dim sm:inline">Autosaved 09:41</span>
              </div>
              <textarea
                aria-label="Observed symptoms"
                value={symptoms}
                onChange={(event) => setSymptoms(event.target.value)}
                rows={3}
                className="min-h-24 w-full resize-none bg-transparent px-4 py-3 text-sm leading-6 text-fg outline-none placeholder:text-fg-dim"
                placeholder="Warning lights, sounds, error codes, or unexpected behavior…"
              />
              <div className="flex items-center justify-between gap-3 border-t border-line px-3 py-2.5">
                <span className="hidden items-center gap-2 font-mono text-[9px] uppercase text-fg-dim sm:flex"><Clock3 className="size-3.5" strokeWidth={1.5} /> Last event 08:37:42</span>
                <button type="button" onClick={runDiagnosis} disabled={isAnalyzing || !symptoms.trim()} className="ml-auto flex items-center gap-2 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-black transition-[filter] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60">
                  {isAnalyzing ? <LoaderCircle className="size-4 animate-spin" strokeWidth={1.5} /> : <Search className="size-4" strokeWidth={1.5} />}
                  {isAnalyzing ? "Correlating…" : "Re-run diagnosis"}
                </button>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex flex-col gap-3 border-b border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <BookOpenText className="size-4 text-info" strokeWidth={1.5} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-info sm:text-[10px]">Global KB · 14 docs · translated from 中文</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase text-fg-dim"><ShieldCheck className="size-3.5 text-info" strokeWidth={1.5} /> 92% evidence match</div>
              </div>

              <AnimatePresence mode="wait">
                {isAnalyzing ? (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3 p-5">
                    {["w-2/3", "w-full", "w-5/6", "w-4/5"].map((width, index) => (
                      <motion.div key={width} initial={{ opacity: 0.25 }} animate={{ opacity: [0.25, 0.7, 0.25] }} transition={{ duration: 0.9, repeat: Infinity, delay: index * 0.08 }} className={`h-3 rounded-sm bg-surface-2 ${width}`} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div key="result" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease }}>
                    <div className="px-4 py-4 sm:px-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-fg-dim">Recommended recovery</p>
                          <h2 className="mt-1 text-lg font-semibold tracking-tight">Clear restricted cabinet airflow</h2>
                          <p className="mt-1.5 max-w-2xl text-xs leading-5 text-fg-muted">ERR 1241 is consistent with a latched drive over-temperature event. Local history strengthens the cabinet-filter match.</p>
                        </div>
                        <div className="shrink-0 rounded-md border border-warn/30 bg-warn/10 px-2.5 py-1.5 font-mono text-[9px] uppercase text-warn">20 min est.</div>
                      </div>
                    </div>

                    <div className="border-t border-line">
                      {repairSteps.map((step, index) => {
                        const complete = completedSteps.includes(index);
                        const active = guidedMode && !complete && completedSteps.length === index;
                        return (
                          <button key={step.title} type="button" onClick={() => toggleStep(index)} className={`group flex w-full gap-3 border-b border-line px-4 py-3.5 text-left transition-colors last:border-b-0 sm:px-5 ${active ? "bg-accent-dim" : "hover:bg-surface-2"}`}>
                            <span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border font-mono text-[9px] transition-colors ${complete ? "border-ok/40 bg-ok/10 text-ok" : active ? "border-accent/40 bg-accent-dim text-accent" : "border-line bg-surface-2 text-fg-dim group-hover:border-line-strong"}`}>
                              {complete ? <Check className="size-3.5" strokeWidth={2} /> : index + 1}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="flex items-center gap-2 text-sm font-medium"><step.icon className={`size-3.5 ${active ? "text-accent" : "text-fg-muted"}`} strokeWidth={1.5} />{step.title}</span>
                              <span className="mt-1 block text-xs leading-5 text-fg-muted">{step.description}</span>
                            </span>
                            <span className="mt-1 shrink-0 font-mono text-[8px] text-fg-dim sm:text-[9px]">{step.time}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-3 border-t border-line px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md border border-info/25 bg-info/10 px-2 py-1 font-mono text-[8px] uppercase text-info">PCNC manual §7.4</span>
                        <span className="rounded-md border border-info/25 bg-info/10 px-2 py-1 font-mono text-[8px] uppercase text-info">Bulletin SB-1100-17</span>
                      </div>
                      <button type="button" onClick={() => setGuidedMode(true)} className="flex shrink-0 items-center justify-center gap-2 rounded-md border border-line bg-surface-2 px-3 py-2 text-xs font-medium transition-colors hover:border-line-strong">
                        {guidedMode ? "Repair in progress" : "Begin guided repair"}<ArrowRight className="size-3.5" strokeWidth={1.5} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        </div>
      </main>

      <aside className="fixed inset-y-0 right-0 z-40 flex w-16 flex-col border-l border-line bg-surface md:w-60">
        <div className="flex h-14 items-center gap-2 border-b border-line px-4">
          <div className="grid size-7 shrink-0 place-items-center rounded-md bg-accent text-black"><Box className="size-4" strokeWidth={2} /></div>
          <span className="hidden text-sm font-semibold tracking-tight md:inline">FIELDNOTE</span>
        </div>
        <nav className="space-y-1 p-3">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} aria-label={item.label} className={`flex items-center gap-3 rounded-md border px-2.5 py-2.5 text-sm transition-colors md:px-3 ${item.active ? "border-accent/30 bg-accent-dim text-fg" : "border-transparent text-fg-muted hover:border-line hover:bg-surface-2 hover:text-fg"}`}>
              <item.icon className={`size-4 shrink-0 ${item.active ? "text-accent" : ""}`} strokeWidth={1.5} />
              <span className="hidden md:inline">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mx-3 mt-4 hidden border-t border-line pt-5 md:block">
          <p className="px-3 font-mono text-[9px] uppercase tracking-[0.14em] text-fg-dim">Organization</p>
          <div className="mt-3 flex items-center gap-3 px-3">
            <div className="grid size-8 place-items-center rounded-md border border-line bg-surface-2 font-mono text-[10px]">KP</div>
            <div className="min-w-0"><p className="truncate text-xs">Kestrel Precision</p><p className="font-mono text-[9px] text-fg-dim">3 MACHINES</p></div>
          </div>
        </div>
        <div className="mt-auto border-t border-line p-3">
          <button type="button" aria-label="Settings" className="flex w-full items-center gap-3 rounded-md px-2 py-2.5 text-sm text-fg-muted hover:bg-surface-2 hover:text-fg md:px-3"><Settings2 className="size-4 shrink-0" strokeWidth={1.5} /><span className="hidden md:inline">Settings</span></button>
          <button type="button" aria-label="Dana Reyes account" className="mt-1 flex w-full items-center gap-3 rounded-md px-1.5 py-2 text-left hover:bg-surface-2 md:px-3">
            <div className="grid size-7 shrink-0 place-items-center rounded-full bg-surface-2 font-mono text-[9px]">DR</div>
            <div className="hidden md:block"><p className="text-xs">Dana Reyes</p><p className="text-[10px] text-fg-dim">Maintenance lead</p></div>
          </button>
        </div>
      </aside>
    </div>
  );
}
