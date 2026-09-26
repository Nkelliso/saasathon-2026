"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Activity,
  Box,
  ChevronDown,
  CirclePlus,
  Factory,
  LifeBuoy,
  Maximize2,
  MousePointer2,
  Rotate3D,
  Search,
  Settings2,
  TicketPlus,
  Users,
} from "lucide-react";
import { MachineModelViewer } from "@/components/machine/machine-model-viewer";
import {
  getOrganizationMachine,
  machineModels,
  organizationMachines,
} from "@/lib/machines";

const navigation = [
  { label: "Machine fix", icon: LifeBuoy, href: "/machine/MILL-01", active: true },
  { label: "Add ticket", icon: TicketPlus, href: "/ticket" },
  { label: "Add machine", icon: CirclePlus, href: "/add_machine" },
  { label: "Organization", icon: Users, href: "/org" },
];

export function MachineFix({ machinePk }: { machinePk: string }) {
  const router = useRouter();
  const machine = getOrganizationMachine(machinePk);
  const model = machineModels[machine.modelId];

  return (
    <div className="h-screen min-h-[620px] overflow-hidden bg-bg text-fg">
      <header className="mr-14 flex h-14 items-center justify-between border-b border-line px-4 lg:mr-0 lg:pr-[260px]">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="text-fg-muted">Kestrel precision</span>
          <span className="text-fg-dim">/</span>
          <span>{machine.pk}</span>
          <span className="text-fg-dim">/</span>
          <span>Machine fix</span>
        </div>
        <div className="hidden items-center gap-2 font-mono text-[10px] text-fg-muted md:flex">
          <span className="size-1.5 rounded-full bg-ok" />
          SYSTEM ONLINE
          <span className="ml-2 text-fg-dim">09:42:18 UTC</span>
        </div>
      </header>

      <main className="grid h-[calc(100vh-3.5rem)] min-h-[566px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(380px,1fr)_240px]">
        <section className="relative min-h-[440px] overflow-hidden border-b border-line lg:border-b-0 lg:border-r">
          <div className="absolute left-5 top-5 z-10">
            <label className="mb-2 block font-mono text-[9px] uppercase tracking-[0.15em] text-fg-muted">
              Active machine
            </label>
            <div className="relative">
              <Factory className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-accent" strokeWidth={1.5} />
              <select
                value={machine.pk}
                onChange={(event) => router.push(`/machine/${event.target.value}`)}
                className="h-11 w-[270px] appearance-none rounded-md border border-line bg-surface pl-10 pr-9 font-mono text-xs text-fg outline-none transition-colors hover:border-line-strong focus:border-accent focus:ring-2 focus:ring-accent-dim"
              >
                {organizationMachines.map((item) => (
                  <option key={item.pk} value={item.pk}>
                    {item.pk} · {machineModels[item.modelId].model}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-fg-muted" strokeWidth={1.5} />
            </div>
          </div>

          <div className="absolute right-5 top-5 z-10 flex gap-1.5">
            <div aria-label="Interactive orbit enabled" className="grid size-9 place-items-center rounded-md border border-line bg-surface text-fg-muted">
              <Rotate3D className="size-4" strokeWidth={1.5} />
            </div>
            <button type="button" aria-label="Fullscreen model" className="grid size-9 place-items-center rounded-md border border-line bg-surface text-fg-muted transition-colors hover:border-line-strong hover:text-fg">
              <Maximize2 className="size-4" strokeWidth={1.5} />
            </button>
          </div>

          <MachineModelViewer modelId={machine.modelId} className="absolute inset-0" autoRotate />

          <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
            <div className="rounded-md border border-line bg-surface/95 px-3 py-2.5 backdrop-blur-sm">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em]">
                <span className={`size-1.5 rounded-full ${machine.status === "FAULT" ? "animate-pulse bg-fault" : "bg-ok"}`} />
                <span className={machine.status === "FAULT" ? "text-fault" : "text-ok"}>{machine.status}</span>
              </div>
              <p className="mt-1 font-mono text-xs">{machine.pk} · {machine.location}</p>
            </div>
            <div className="hidden items-center gap-3 font-mono text-[9px] uppercase text-fg-dim sm:flex">
              <span className="flex items-center gap-1.5"><MousePointer2 className="size-3" /> drag to rotate</span>
              <span>shift + drag to pan</span>
              <span>scroll to zoom</span>
            </div>
          </div>
        </section>

        <section className="flex min-h-0 flex-col bg-surface/30">
          <div className="border-b border-line px-6 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">{"// Diagnose machine"}</p>
            <div className="mt-2 flex items-start justify-between gap-3">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">What needs attention?</h1>
                <p className="mt-1 text-sm text-fg-muted">{model.manufacturer} {model.model} · {model.category}</p>
              </div>
              <span className="rounded-md border border-fault/30 bg-fault/10 px-2 py-1 font-mono text-[9px] text-fault">FAULT ACTIVE</span>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
              {[
                ["Last event", "08:37:42"],
                ["Downtime", "01:04:36"],
                ["Est. impact", "$6,480"],
              ].map(([label, value]) => (
                <div key={label} className="bg-surface p-3">
                  <p className="font-mono text-[9px] uppercase text-fg-dim">{label}</p>
                  <p className="mt-1 font-mono text-sm tabular-nums">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <label htmlFor="symptoms" className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">Observed symptoms</label>
              <div className="mt-2 overflow-hidden rounded-lg border border-line bg-surface transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-accent-dim">
                <textarea id="symptoms" rows={5} className="w-full resize-none bg-transparent px-4 py-3.5 text-sm leading-6 text-fg outline-none placeholder:text-fg-dim" placeholder="Describe warning lights, sounds, error codes, or unexpected behavior…" defaultValue="Spindle stopped during warm-up cycle. ERR 1241 remains after reset; cabinet fan sounds obstructed." />
                <div className="flex items-center justify-between border-t border-line px-3 py-2.5">
                  <span className="font-mono text-[9px] text-fg-dim">ERR CODE DETECTED · 1241</span>
                  <button type="button" className="flex items-center gap-2 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-black transition-[filter] hover:brightness-110">
                    <Search className="size-4" strokeWidth={1.5} /> Run diagnosis
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-info">Source: Global KB · 14 docs</span>
                <span className="font-mono text-[9px] text-fg-dim">92% MATCH</span>
              </div>
              <div className="p-4">
                <div className="flex gap-3">
                  <Activity className="mt-0.5 size-4 shrink-0 text-warn" strokeWidth={1.5} />
                  <div>
                    <h2 className="text-sm font-medium">Probable spindle drive over-temperature</h2>
                    <p className="mt-2 text-xs leading-5 text-fg-muted">Restricted cabinet airflow can latch ERR 1241 during high-load warm-up. Isolate power before checking intake filter and fan rotation.</p>
                  </div>
                </div>
                <button type="button" className="mt-4 w-full rounded-md border border-line bg-surface-2 px-3 py-2 text-left text-xs text-fg-muted transition-colors hover:border-line-strong hover:text-fg">Open guided repair procedure →</button>
              </div>
            </div>
          </div>
        </section>

        <aside className="fixed inset-y-0 right-0 z-20 flex w-14 flex-col border-l border-line bg-surface lg:w-60">
          <div className="flex h-14 items-center gap-2 border-b border-line px-4">
            <div className="grid size-7 place-items-center rounded-md bg-accent text-black"><Box className="size-4" strokeWidth={2} /></div>
            <span className="hidden text-sm font-semibold tracking-tight lg:inline">FIELDNOTE</span>
          </div>
          <nav className="space-y-1 p-3">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} className={`flex items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition-colors ${item.active ? "border-accent/30 bg-accent-dim text-fg" : "border-transparent text-fg-muted hover:border-line hover:bg-surface-2 hover:text-fg"}`}>
                <item.icon className={`size-4 ${item.active ? "text-accent" : ""}`} strokeWidth={1.5} />
                <span className="hidden lg:inline">{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="mx-3 mt-4 hidden border-t border-line pt-5 lg:block">
            <p className="px-3 font-mono text-[9px] uppercase tracking-[0.14em] text-fg-dim">Organization</p>
            <div className="mt-3 flex items-center gap-3 px-3">
              <div className="grid size-8 place-items-center rounded-md border border-line bg-surface-2 font-mono text-[10px]">KP</div>
              <div className="min-w-0"><p className="truncate text-xs">Kestrel Precision</p><p className="font-mono text-[9px] text-fg-dim">3 MACHINES</p></div>
            </div>
          </div>
          <div className="mt-auto border-t border-line p-3">
            <button type="button" className="flex w-full items-center gap-3 rounded-md px-2 py-2.5 text-sm text-fg-muted hover:bg-surface-2 hover:text-fg lg:px-3"><Settings2 className="size-4" strokeWidth={1.5} /> <span className="hidden lg:inline">Settings</span></button>
            <button type="button" className="mt-1 flex w-full items-center gap-3 rounded-md px-1.5 py-2 text-left hover:bg-surface-2 lg:px-3">
              <div className="grid size-7 shrink-0 place-items-center rounded-full bg-surface-2 font-mono text-[9px]">DR</div>
              <div className="hidden lg:block"><p className="text-xs">Dana Reyes</p><p className="text-[10px] text-fg-dim">Maintenance lead</p></div>
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
