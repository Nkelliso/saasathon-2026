"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Box,
  CalendarDays,
  Check,
  ChevronDown,
  CircleCheck,
  CirclePlus,
  ClipboardCheck,
  Clock3,
  File,
  FilePlus2,
  FileText,
  Info,
  LifeBuoy,
  LoaderCircle,
  Paperclip,
  ScanText,
  Settings2,
  ShieldCheck,
  TicketPlus,
  Upload,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { machineModels, organizationMachines } from "@/lib/machines";

const navigation = [
  { label: "Machine fix", icon: LifeBuoy, href: "/machine/MILL-01" },
  { label: "Add ticket", icon: TicketPlus, href: "/ticket", active: true },
  { label: "Add machine", icon: CirclePlus, href: "/add_machine" },
  { label: "Organization", icon: Users, href: "/org" },
];

const kinds = [
  {
    value: "REPAIR",
    shortLabel: "Repair",
    helper: "Capture the symptom, root cause, action taken, and verified outcome.",
    placeholder: "Example: Spindle stopped during cycle with ERR 0x4F2. Cabinet intake was blocked with aluminium chips. Cleared the grille, reseated the fan connector, then ran warm-up cycle successfully…",
    destination: "MAINTENANCE HISTORY",
    icon: Wrench,
  },
  {
    value: "INFO",
    shortLabel: "Note",
    helper: "Record the exact conditions and what the next operator should know.",
    placeholder: "Example: On cold starts below 12°C, lubrication pressure takes up to 40 seconds to reach 40 PSI. Wait for pressure before jogging the spindle…",
    destination: "LOCAL KNOWLEDGE",
    icon: Info,
  },
  {
    value: "EVENT",
    shortLabel: "Event",
    helper: "Describe what changed, when it happened, and the operating conditions.",
    placeholder: "Example: Repeating resonance from X-axis above 4,200 RPM during aluminium finishing pass. No alarm shown. Sound stopped when feed was reduced…",
    destination: "EVENT LOG",
    icon: Zap,
  },
] as const;

type TicketKind = (typeof kinds)[number]["value"];

const recentRecords = [
  { id: "TKT-0142", title: "Spindle fan obstruction", date: "19 SEP", kind: "REPAIR" },
  { id: "TKT-0138", title: "Warm-up load baseline", date: "14 SEP", kind: "INFO" },
  { id: "TKT-0129", title: "X-axis resonance at 4,200 RPM", date: "02 SEP", kind: "EVENT" },
];

const demoDescription =
  "Spindle stopped 18 minutes into the roughing cycle with ERR 0x4F2 and cabinet temperature at 61°C. Found aluminium chips packed across the rear intake grille, restricting the spindle drive cooling fan. Isolated power, cleared the grille, reseated the fan connector, then ran the 10-minute warm-up cycle. Machine returned to service; spindle load stable at 22% and temperature held at 38°C.";

const ease = [0.16, 1, 0.3, 1] as const;

function statusTone(status: string) {
  if (status === "FAULT") return "text-fault";
  if (status === "RUNNING") return "text-ok";
  return "text-warn";
}

function statusDot(status: string) {
  if (status === "FAULT") return "bg-fault";
  if (status === "RUNNING") return "bg-ok";
  return "bg-warn";
}

export function TicketConsole() {
  const [kind, setKind] = useState<TicketKind>("REPAIR");
  const [machinePk, setMachinePk] = useState("MILL-01");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [occurredAt, setOccurredAt] = useState("2026-09-26T09:42");
  const [files, setFiles] = useState<string[]>([]);
  const [showEvidence, setShowEvidence] = useState(false);
  const [summarize, setSummarize] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const machine = organizationMachines.find((item) => item.pk === machinePk) ?? organizationMachines[0];
  const model = machineModels[machine.modelId];
  const selectedKind = kinds.find((item) => item.value === kind) ?? kinds[0];
  const words = description.trim() ? description.trim().split(/\s+/).length : 0;
  const canSubmit = title.trim().length > 2 && description.trim().length > 9;
  const capturedSignals = useMemo(
    () => [
      { label: "Symptom", found: /stopp|alarm|error|sound|light|pressure|temperature|resonance/i.test(description) },
      { label: "Action", found: /clear|reset|replace|reseat|inspect|adjust|isolat|clean|reduce/i.test(description) },
      { label: "Outcome", found: /return|stable|verified|resolved|service|normal|held|success/i.test(description) },
    ],
    [description],
  );
  const summary = useMemo(() => {
    if (!description.trim()) return "A concise, searchable summary will appear here as you document the record.";
    if (kind === "REPAIR") return "Spindle drive overheated after chip buildup blocked the cabinet intake. Intake cleared and fan connection reseated; warm-up cycle verified normal load and temperature.";
    if (kind === "INFO") return "Machine-specific operating note captured for future operators and linked to this asset's local knowledge.";
    return "Abnormal machine behavior recorded with operating conditions for maintenance review and trend detection.";
  }, [description, kind]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit || saving) return;
    setSaving(true);
    window.setTimeout(() => {
      setSaving(false);
      setSaved(true);
    }, 850);
  }

  function addFiles(list: FileList | null) {
    if (!list) return;
    setFiles((current) => [...current, ...Array.from(list, (file) => file.name)].slice(0, 4));
  }

  function loadDemo() {
    setKind("REPAIR");
    setMachinePk("MILL-01");
    setTitle("Spindle drive overheated from blocked intake");
    setDescription(demoDescription);
    setFiles(["spindle-alarm-log.csv"]);
    setShowEvidence(true);
  }

  return (
    <div className="min-h-screen bg-bg pr-14 text-fg md:pr-60">
      <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-line bg-bg/95 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2 truncate font-mono text-[9px] uppercase tracking-[0.14em] sm:text-[11px]">
          <span className="hidden text-fg-muted sm:inline">Kestrel precision</span>
          <span className="hidden text-fg-dim sm:inline">/</span>
          <span>Knowledge intake</span>
          <span className="text-fg-dim">/</span>
          <span className="text-fg-muted">New record</span>
        </div>
        <div className="hidden items-center gap-2 font-mono text-[9px] text-fg-muted sm:flex">
          <span className="size-1.5 rounded-full bg-ok" />
          INTAKE ONLINE
        </div>
      </header>

      <main className="mx-auto max-w-[1220px] px-3 py-6 sm:px-6 lg:px-8 lg:py-9">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
          className="relative overflow-hidden rounded-lg border border-line bg-surface"
        >
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_right,black,transparent_60%)]" />
          <span className="absolute left-0 top-0 h-5 w-px bg-accent" />
          <span className="absolute left-0 top-0 h-px w-5 bg-accent" />
          <div className="relative flex flex-col gap-5 px-5 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">{"// Operator record"}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Capture what happened.</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-fg-muted">
                Turn one field note into searchable machine knowledge. Exact codes and original wording are always preserved.
              </p>
            </div>
            <button
              type="button"
              onClick={loadDemo}
              className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-line bg-surface-2 px-3 text-xs text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              <FileText className="size-3.5" strokeWidth={1.5} />
              Load demo record
            </button>
          </div>
        </motion.div>

        <form onSubmit={submit} className="mt-5 grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_310px]">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease }}
            className="min-w-0 space-y-4"
          >
            <section className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className={`flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-surface-2 ${statusTone(machine.status)}`}>
                    <Box className="size-4" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="truncate font-mono text-xs font-medium">{machine.pk}</span>
                      <span className={`flex items-center gap-1 font-mono text-[8px] ${statusTone(machine.status)}`}>
                        <span className={`size-1.5 rounded-full ${statusDot(machine.status)} ${machine.status === "FAULT" ? "animate-pulse" : ""}`} />
                        {machine.status}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-[11px] text-fg-muted">{model.manufacturer} {model.model} · {machine.location}</p>
                  </div>
                </div>
                <div className="hidden items-center gap-2 font-mono text-[9px] uppercase text-fg-dim sm:flex">
                  <Clock3 className="size-3.5" strokeWidth={1.5} /> Draft saved
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px bg-line" role="radiogroup" aria-label="Record type">
                {kinds.map((item) => {
                  const selected = item.value === kind;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setKind(item.value)}
                      className={`relative flex min-h-16 items-center gap-2 bg-surface px-2.5 text-left transition-colors hover:bg-surface-2 sm:min-h-20 sm:px-4 ${selected ? "bg-accent-dim" : ""}`}
                    >
                      {selected && <span className="absolute inset-x-0 top-0 h-px bg-accent" />}
                      <item.icon className={`size-4 shrink-0 ${selected ? "text-accent" : "text-fg-dim"}`} strokeWidth={1.5} />
                      <span className="min-w-0">
                        <span className={`block text-xs font-medium sm:text-sm ${selected ? "text-fg" : "text-fg-muted"}`}>{item.shortLabel}</span>
                        <span className="mt-1 hidden text-[10px] leading-4 text-fg-dim sm:block">{item.helper.split(".")[0]}</span>
                      </span>
                      {selected && <Check className="ml-auto hidden size-3.5 shrink-0 text-accent lg:block" strokeWidth={2} />}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-5 p-4 sm:p-5">
                <div className="flex gap-2 text-xs leading-5 text-fg-muted">
                  <selectedKind.icon className="mt-0.5 size-3.5 shrink-0 text-accent" strokeWidth={1.5} />
                  <p>{selectedKind.helper}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.13em] text-fg-muted">Machine</span>
                    <span className="relative block">
                      <Box className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-accent" strokeWidth={1.5} />
                      <select
                        value={machinePk}
                        onChange={(event) => setMachinePk(event.target.value)}
                        className="h-11 w-full appearance-none rounded-md border border-line bg-surface-2 pl-10 pr-9 font-mono text-xs outline-none transition-colors hover:border-line-strong focus:border-accent focus:ring-2 focus:ring-accent-dim"
                      >
                        {organizationMachines.map((item) => (
                          <option key={item.pk} value={item.pk}>{item.pk} · {machineModels[item.modelId].model}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-fg-muted" strokeWidth={1.5} />
                    </span>
                  </label>

                  <label className="block">
                    <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.13em] text-fg-muted">Occurred at</span>
                    <span className="relative block">
                      <CalendarDays className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fg-muted" strokeWidth={1.5} />
                      <input
                        type="datetime-local"
                        value={occurredAt}
                        onChange={(event) => setOccurredAt(event.target.value)}
                        className="h-11 w-full rounded-md border border-line bg-surface-2 pl-10 pr-3 font-mono text-xs outline-none transition-colors scheme-dark focus:border-accent focus:ring-2 focus:ring-accent-dim"
                      />
                    </span>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.13em] text-fg-muted">
                    <span>Record title</span><span className="text-fg-dim">{title.length} / 80</span>
                  </span>
                  <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value.slice(0, 80))}
                    placeholder={kind === "REPAIR" ? "What was fixed?" : kind === "INFO" ? "What should operators know?" : "What was observed?"}
                    className="h-11 w-full rounded-md border border-line bg-surface-2 px-3.5 text-sm outline-none transition-colors placeholder:text-fg-dim focus:border-accent focus:ring-2 focus:ring-accent-dim"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.13em] text-fg-muted">
                    <span>Field notes</span><span className="text-fg-dim">{words} words</span>
                  </span>
                  <div className="overflow-hidden rounded-md border border-line bg-surface-2 transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-accent-dim">
                    <textarea
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      rows={6}
                      placeholder={selectedKind.placeholder}
                      className="w-full resize-none bg-transparent px-3.5 py-3 text-sm leading-6 outline-none placeholder:text-fg-dim"
                    />
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line px-3 py-2.5">
                      <span className="font-mono text-[8px] uppercase text-fg-dim">Capture check</span>
                      {capturedSignals.map((signal) => (
                        <span key={signal.label} className={`flex items-center gap-1.5 font-mono text-[8px] uppercase ${signal.found ? "text-ok" : "text-fg-dim"}`}>
                          <span className={`size-1.5 rounded-full ${signal.found ? "bg-ok" : "border border-line-strong"}`} />
                          {signal.label}
                        </span>
                      ))}
                      <span className="ml-auto font-mono text-[8px] text-fg-dim">{description.length.toLocaleString()} CHARS</span>
                    </div>
                  </div>
                </label>
              </div>
            </section>

            <section className="overflow-hidden rounded-lg border border-line bg-surface">
              <button
                type="button"
                onClick={() => setShowEvidence((value) => !value)}
                aria-expanded={showEvidence}
                className="flex w-full items-center justify-between px-4 py-3.5 text-left transition-colors hover:bg-surface-2 sm:px-5"
              >
                <span className="flex items-center gap-3">
                  <Paperclip className="size-4 text-fg-muted" strokeWidth={1.5} />
                  <span>
                    <span className="block text-sm font-medium">Evidence <span className="font-normal text-fg-dim">· optional</span></span>
                    <span className="mt-0.5 block text-[11px] text-fg-muted">Photos, alarm logs, or service documents</span>
                  </span>
                </span>
                <span className="flex items-center gap-2 font-mono text-[9px] text-fg-muted">
                  {files.length ? `${files.length} ATTACHED` : showEvidence ? "CLOSE" : "ADD FILES"}
                  <ChevronDown className={`size-3.5 transition-transform ${showEvidence ? "rotate-180" : ""}`} strokeWidth={1.5} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {showEvidence && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease }}
                    className="overflow-hidden border-t border-line"
                  >
                    <div className="p-4 sm:p-5">
                      <label className="flex min-h-20 cursor-pointer items-center justify-center rounded-md border border-dashed border-line-strong bg-surface-2/50 px-4 text-center transition-colors hover:border-accent hover:bg-accent-dim">
                        <input type="file" multiple className="sr-only" onChange={(event) => addFiles(event.target.files)} />
                        <span className="flex items-center gap-3">
                          <Upload className="size-4 text-fg-muted" strokeWidth={1.5} />
                          <span className="text-left">
                            <span className="block text-xs text-fg"><span className="text-accent">Choose files</span> or drop here</span>
                            <span className="mt-1 block font-mono text-[8px] text-fg-dim">JPG · PNG · PDF · CSV · MAX 20 MB</span>
                          </span>
                        </span>
                      </label>
                      {files.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {files.map((file) => (
                            <div key={file} className="flex items-center gap-3 rounded-md border border-line bg-surface-2 px-3 py-2.5">
                              <File className="size-4 text-fg-muted" strokeWidth={1.5} />
                              <span className="min-w-0 flex-1 truncate font-mono text-[10px]">{file}</span>
                              <button type="button" onClick={() => setFiles((current) => current.filter((item) => item !== file))} aria-label={`Remove ${file}`}>
                                <X className="size-3.5 text-fg-muted hover:text-fg" strokeWidth={1.5} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            <div className="z-10 flex flex-col gap-3 border-t border-line bg-bg/95 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between xl:sticky xl:bottom-0">
              <div className="flex items-center gap-3">
                <div className={`grid size-7 place-items-center rounded-md border ${canSubmit ? "border-ok/30 bg-ok/10 text-ok" : "border-line bg-surface text-fg-dim"}`}>
                  {canSubmit ? <CircleCheck className="size-4" strokeWidth={1.5} /> : <ShieldCheck className="size-3.5" strokeWidth={1.5} />}
                </div>
                <div>
                  <p className="text-[11px] text-fg-muted">{canSubmit ? "Ready to index" : "Add a title and field note"}</p>
                  <p className="mt-0.5 font-mono text-[8px] uppercase text-fg-dim">Kestrel members only · local KB</p>
                </div>
              </div>
              <button
                type="submit"
                disabled={!canSubmit || saving}
                className="flex h-10 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-black transition-[filter,opacity] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {saving ? <LoaderCircle className="size-4 animate-spin" strokeWidth={1.8} /> : <FilePlus2 className="size-4" strokeWidth={1.8} />}
                {saving ? "Indexing record" : "Index record"}
                {!saving && <ArrowRight className="size-3.5" strokeWidth={1.8} />}
              </button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease }}
            className="space-y-4 xl:sticky xl:top-[76px]"
          >
            <section className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3.5">
                <div className="flex items-center gap-2">
                  <ScanText className="size-4 text-info" strokeWidth={1.5} />
                  <h2 className="text-xs font-medium">Index preview</h2>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[8px] text-info">
                  <span className="size-1.5 rounded-full bg-info" /> LIVE
                </span>
              </div>
              <div className="p-4">
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-fg-dim">AI summary</p>
                <p className={`mt-2 text-xs leading-5 ${description ? "text-fg-muted" : "text-fg-dim"}`}>{summary}</p>

                {description && (
                  <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-md border border-info/20 bg-info/10 px-2 py-1 font-mono text-[8px] text-info">ERR 0x4F2</span>
                    <span className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[8px] text-fg-muted">SPINDLE DRIVE</span>
                    <span className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[8px] text-fg-muted">THERMAL</span>
                  </motion.div>
                )}

                <div className="mt-4 border-t border-line pt-4">
                  <button type="button" onClick={() => setSummarize((value) => !value)} className="flex w-full items-start gap-3 text-left">
                    <span className={`mt-0.5 flex h-4 w-7 shrink-0 rounded-full border p-0.5 transition-colors ${summarize ? "justify-end border-info/40 bg-info/20" : "justify-start border-line-strong bg-surface-2"}`}>
                      <span className={`size-2.5 rounded-full ${summarize ? "bg-info" : "bg-fg-dim"}`} />
                    </span>
                    <span>
                      <span className="block text-xs">Generate concise summary</span>
                      <span className="mt-1 block text-[10px] leading-4 text-fg-muted">Original field notes stay unchanged.</span>
                    </span>
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-px border-t border-line bg-line">
                <div className="bg-surface px-4 py-3">
                  <dt className="font-mono text-[8px] uppercase text-fg-dim">Destination</dt>
                  <dd className="mt-1 font-mono text-[9px] text-fg-muted">{selectedKind.destination}</dd>
                </div>
                <div className="bg-surface px-4 py-3">
                  <dt className="font-mono text-[8px] uppercase text-fg-dim">Visibility</dt>
                  <dd className="mt-1 font-mono text-[9px] text-fg-muted">SITE ONLY</dd>
                </div>
              </dl>
            </section>

            <section className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3.5">
                <h2 className="font-mono text-[9px] uppercase tracking-[0.14em] text-fg-muted">Machine context</h2>
                <span className={`flex items-center gap-1.5 font-mono text-[8px] ${statusTone(machine.status)}`}>
                  <span className={`size-1.5 rounded-full ${statusDot(machine.status)} ${machine.status === "FAULT" ? "animate-pulse" : ""}`} />{machine.status}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-sm">{machine.pk}</p>
                    <p className="mt-1 text-[11px] text-fg-muted">{model.manufacturer} {model.model}</p>
                  </div>
                  <Link href={`/machine/${machine.pk}`} className="font-mono text-[8px] uppercase text-fg-muted hover:text-fg">Open asset →</Link>
                </div>
                <dl className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-line bg-line">
                  <div className="bg-surface-2 p-2.5"><dt className="font-mono text-[7px] text-fg-dim">LOCATION</dt><dd className="mt-1 text-[10px]">{machine.location}</dd></div>
                  <div className="bg-surface-2 p-2.5"><dt className="font-mono text-[7px] text-fg-dim">RECORDS</dt><dd className="mt-1 font-mono text-[10px]">47</dd></div>
                  <div className="bg-surface-2 p-2.5"><dt className="font-mono text-[7px] text-fg-dim">COST/HR</dt><dd className="mt-1 font-mono text-[10px]">$6,000</dd></div>
                </dl>
              </div>
            </section>

            <section>
              <div className="mb-2.5 flex items-center justify-between">
                <h2 className="font-mono text-[9px] uppercase tracking-[0.14em] text-fg-muted">Recent on {machine.pk}</h2>
                <FileText className="size-3.5 text-fg-dim" strokeWidth={1.5} />
              </div>
              <div className="overflow-hidden rounded-lg border border-line bg-surface">
                {recentRecords.map((record, index) => (
                  <div key={record.id} className={`p-3 ${index ? "border-t border-line" : ""}`}>
                    <div className="flex items-center justify-between font-mono text-[8px] text-fg-dim"><span>{record.id} · {record.kind}</span><span>{record.date}</span></div>
                    <p className="mt-1.5 text-[11px] text-fg-muted">{record.title}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex gap-3 rounded-lg border border-warn/20 bg-warn/5 p-3.5">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-warn" strokeWidth={1.5} />
              <p className="text-[10px] leading-4 text-fg-muted">Do not include access credentials or personal safety data.</p>
            </div>
          </motion.aside>
        </form>
      </main>

      <aside className="fixed inset-y-0 right-0 z-30 flex w-14 flex-col border-l border-line bg-surface md:w-60">
        <div className="flex h-14 items-center border-b border-line px-0 md:px-5">
          <Link href="/home" className="flex w-full items-center justify-center gap-3 md:justify-start">
            <div className="relative flex size-8 items-center justify-center rounded-md border border-line-strong bg-surface-2">
              <Box className="size-4 text-accent" strokeWidth={1.5} />
              <span className="absolute -right-px -top-px size-1.5 bg-accent" />
            </div>
            <div className="hidden md:block">
              <p className="text-xs font-semibold tracking-tight">FIELDNOTE</p>
              <p className="mt-0.5 font-mono text-[8px] tracking-[0.16em] text-fg-dim">OPS CONTROL</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 p-2 md:p-3" aria-label="Primary">
          <p className="mb-3 hidden px-2 pt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-fg-dim md:block">Control</p>
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              title={item.label}
              className={`relative flex h-10 items-center justify-center gap-3 rounded-md text-sm transition-colors md:justify-start md:px-3 ${item.active ? "bg-accent-dim text-fg" : "text-fg-muted hover:bg-surface-2 hover:text-fg"}`}
            >
              {item.active && <span className="absolute bottom-2 left-0 top-2 w-px bg-accent" />}
              <item.icon className={`size-4 shrink-0 ${item.active ? "text-accent" : ""}`} strokeWidth={1.5} />
              <span className="hidden md:inline">{item.label}</span>
              {item.active && <span className="ml-auto hidden font-mono text-[8px] text-accent md:inline">ACTIVE</span>}
            </Link>
          ))}
        </nav>

        <div className="border-t border-line p-2 md:p-3">
          <button type="button" className="mb-1 flex h-10 w-full items-center justify-center gap-3 rounded-md text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg md:justify-start md:px-3">
            <Settings2 className="size-4" strokeWidth={1.5} /><span className="hidden text-sm md:inline">Settings</span>
          </button>
          <div className="flex items-center justify-center gap-3 border-t border-line pt-3 md:justify-start md:px-2">
            <div className="grid size-7 shrink-0 place-items-center rounded-full bg-surface-2 font-mono text-[9px]">DR</div>
            <div className="hidden min-w-0 md:block"><p className="truncate text-xs font-medium">Dana Reyes</p><p className="mt-0.5 font-mono text-[8px] text-fg-dim">MAINTENANCE LEAD</p></div>
          </div>
        </div>
      </aside>

      <AnimatePresence>
        {saved && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-5 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease }} className="w-full max-w-md overflow-hidden rounded-lg border border-line bg-surface">
              <div className="h-px bg-accent" />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent-dim"><ClipboardCheck className="size-5 text-accent" strokeWidth={1.5} /></div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-accent">TKT-0148 · indexed</p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight">Knowledge captured.</h2>
                    <p className="mt-2 text-sm leading-6 text-fg-muted">Added to {machine.pk} and ready for operators to find in local knowledge search.</p>
                  </div>
                </div>
                <div className="mt-5 flex justify-end gap-2 border-t border-line pt-4">
                  <button type="button" onClick={() => setSaved(false)} className="rounded-md border border-line bg-surface-2 px-3.5 py-2 text-sm text-fg-muted hover:border-line-strong hover:text-fg">Add another</button>
                  <Link href={`/machine/${machine.pk}`} className="rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-black hover:brightness-110">View machine</Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
