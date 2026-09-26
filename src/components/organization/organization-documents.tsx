"use client";

import { useMemo, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { ChevronDown, CircuitBoard, FileText, FolderOpen, Trash2, Upload, X } from "lucide-react";
import { machineModels } from "@/lib/machines";
import { useOrganizationMachines } from "@/lib/organization-machines";

type DocumentKind = "manual" | "schematics";
type DocumentEntry = { id: string; kind: DocumentKind; name: string; size: number; machinePk: string; addedAt: string };
const storageKey = "torque:organization-documents:v1";
const changeEvent = "torque:documents-changed";
const formats = { manual: ".pdf,.docx,.txt,.md", schematics: ".pdf,.png,.jpg,.jpeg" };
const buttonStyle = "inline-flex h-10 items-center justify-center gap-2 rounded-md border border-line bg-surface-2 px-3 text-sm font-medium transition-colors hover:border-line-strong focus-visible:outline-2 focus-visible:outline-accent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
}
function getSnapshot() {
  try { return localStorage.getItem(storageKey) ?? "[]"; }
  catch { return "[]"; }
}
function fileSize(bytes: number) {
  return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function OrganizationDocuments() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => "[]");
  const documents = useMemo<DocumentEntry[]>(() => {
    try {
      const parsed: unknown = JSON.parse(snapshot);
      if (Array.isArray(parsed)) return parsed.filter((item): item is DocumentEntry => item &&
        typeof item.id === "string" && typeof item.name === "string" && typeof item.size === "number" &&
        typeof item.machinePk === "string" && typeof item.addedAt === "string" && ["manual", "schematics"].includes(item.kind));
    } catch { /* Ignore invalid demo data. */ }
    return [];
  }, [snapshot]);
  const { machines } = useOrganizationMachines();
  const dialog = useRef<HTMLDialogElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [kind, setKind] = useState<DocumentKind>("manual");
  const [file, setFile] = useState<File | null>(null);
  const [machinePk, setMachinePk] = useState("");
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const label = kind === "manual" ? "Manual" : "Schematics";

  function open(nextKind: DocumentKind) {
    setKind(nextKind);
    setFile(null);
    setError("");
    setDragging(false);
    setMachinePk(machines[0]?.pk ?? "");
    if (fileInput.current) fileInput.current.value = "";
    dialog.current?.showModal();
  }

  function chooseFile(nextFile: File | undefined) {
    if (!nextFile) return;
    setError("");
    setFile(null);
    const extension = `.${nextFile.name.split(".").pop()?.toLowerCase()}`;
    if (!formats[kind].split(",").includes(extension)) {
      setError(`Choose a ${kind === "manual" ? "PDF, DOCX, TXT or Markdown" : "PDF, PNG or JPG"} file.`);
    } else if (nextFile.size === 0) {
      setError("This file is empty. Choose another file.");
    } else if (nextFile.size > 20 * 1024 * 1024) {
      setError("This file is too large. Choose a file under 20 MB.");
    } else setFile(nextFile);
  }

  function save(entries: DocumentEntry[]) {
    localStorage.setItem(storageKey, JSON.stringify(entries));
    window.dispatchEvent(new Event(changeEvent));
  }

  function addDocument(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file || !machines.some((machine) => machine.pk === machinePk)) return;
    if (documents.some((entry) => entry.name === file.name && entry.machinePk === machinePk && entry.kind === kind)) {
      setError("This document has already been added to this machine.");
      return;
    }
    try {
      // Frontend demo: persist metadata only. No file is uploaded or ingested.
      save([{ id: crypto.randomUUID(), kind, name: file.name, size: file.size, machinePk, addedAt: new Date().toISOString() }, ...documents]);
      setMessage(`${file.name} added to ${machinePk}.`);
      dialog.current?.close();
    } catch { setError("Could not save the document. Check browser storage and try again."); }
  }

  return (
    <section aria-labelledby="documents-title" className="mt-9 overflow-hidden rounded-lg border border-line bg-surface">
      <div className="border-b border-line px-5 py-5 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <h2 id="documents-title" className="text-sm font-medium">Machine documents</h2>
          <span className="font-mono text-xs tabular-nums text-fg-muted">{documents.length}</span>
        </div>
        <p className="mt-2 text-sm leading-6 text-fg-muted">Your manuals and schematics, alongside your machine knowledge.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => open("manual")} className={buttonStyle}><FileText className="size-4 text-accent" strokeWidth={1.5} />Add Manual</button>
          <button type="button" onClick={() => open("schematics")} className={buttonStyle}><CircuitBoard className="size-4 text-accent" strokeWidth={1.5} />Add Schematics</button>
        </div>
      </div>
      {documents.length ? (
        <ul className="divide-y divide-line">
          {documents.map((entry) => {
            const Icon = entry.kind === "manual" ? FileText : CircuitBoard;
            return <li key={entry.id} className="flex items-center gap-3 px-5 py-4 sm:px-6">
              <Icon className="size-4 shrink-0 text-fg-muted" strokeWidth={1.5} />
              <div className="min-w-0 flex-1">
                <p className="break-words text-sm font-medium">{entry.name}</p>
                <p className="mt-1 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] uppercase text-fg-muted"><span>{entry.machinePk}</span><span>· {entry.kind}</span><span>· {fileSize(entry.size)}</span></p>
              </div>
              <button type="button" aria-label={`Remove ${entry.name}`} onClick={() => {
                try { save(documents.filter((item) => item.id !== entry.id)); setMessage(`${entry.name} removed.`); }
                catch { setMessage("Could not remove the document. Please try again."); }
              }} className="flex size-10 shrink-0 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg focus-visible:outline-2 focus-visible:outline-accent"><Trash2 className="size-4" strokeWidth={1.5} /></button>
            </li>;
          })}
        </ul>
      ) : (
        <div className="flex items-start gap-3 px-5 py-6 sm:px-6">
          <FolderOpen className="mt-0.5 size-4 shrink-0 text-fg-dim" strokeWidth={1.5} />
          <div><p className="text-sm text-fg-muted">No documents added yet.</p><p className="mt-1 text-xs leading-5 text-fg-dim">Add operating manuals, wiring diagrams or technical drawings.</p></div>
        </div>
      )}
      {message && <p role="status" className="border-t border-line px-5 py-3 text-xs text-fg-muted sm:px-6">{message}</p>}

      <dialog ref={dialog} aria-labelledby="upload-title" aria-describedby="upload-description" onClose={() => setDragging(false)} className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-lg border border-line bg-surface p-0 text-fg backdrop:bg-bg/80">
        <form onSubmit={addDocument}>
          <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
            <h2 id="upload-title" className="text-lg font-semibold tracking-tight">Add {label}</h2>
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Close upload dialog" className="grid size-9 place-items-center rounded-md text-fg-muted hover:bg-surface-2 hover:text-fg focus-visible:outline-2 focus-visible:outline-accent"><X className="size-4" strokeWidth={1.5} /></button>
          </div>
          <div className="space-y-5 p-5 sm:p-6">
            <p id="upload-description" className="text-sm leading-6 text-fg-muted">{kind === "manual" ? "Add operating instructions, service guides or maintenance manuals." : "Add wiring diagrams, hydraulic circuits or technical drawings."}</p>
            <div>
              <label htmlFor="document-machine" className="text-sm font-medium">Machine</label>
              <div className="relative mt-2">
                <select id="document-machine" value={machinePk} onChange={(event) => setMachinePk(event.target.value)} required className="h-11 w-full appearance-none rounded-md border border-line bg-surface-2 pl-3 pr-9 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent-dim">
                  {!machines.length && <option value="">Add a machine first</option>}
                  {machines.map((machine) => <option key={machine.pk} value={machine.pk}>{machine.pk} · {machineModels[machine.modelId].model}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-3.5 size-4 text-fg-muted" strokeWidth={1.5} />
              </div>
            </div>
            <div onDragOver={(event) => { event.preventDefault(); setDragging(true); }} onDragLeave={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setDragging(false); }} onDrop={(event) => { event.preventDefault(); setDragging(false); if (event.dataTransfer.files.length > 1) { setError("Add one file at a time."); return; } chooseFile(event.dataTransfer.files[0]); }} className={`relative rounded-md border border-dashed transition-colors ${dragging ? "border-accent bg-accent-dim" : "border-line-strong bg-surface-2 hover:border-accent"}`}>
              <input ref={fileInput} id="document-file" type="file" accept={formats[kind]} onChange={(event) => { chooseFile(event.target.files?.[0]); event.target.value = ""; }} className="peer sr-only" />
              <label htmlFor="document-file" className="flex min-h-40 cursor-pointer flex-col items-center justify-center px-5 py-6 text-center peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
                {file ? <FileText className="mb-3 size-5 text-accent" strokeWidth={1.5} /> : <Upload className="mb-3 size-5 text-fg-muted" strokeWidth={1.5} />}
                <span className="max-w-full break-words text-sm font-medium">{file ? file.name : "Choose a file or drop it here"}</span>
                <span className="mt-2 font-mono text-[10px] uppercase leading-5 text-fg-muted">{file ? `${fileSize(file.size)} · Click to replace` : `${kind === "manual" ? "PDF, DOCX, TXT, MD" : "PDF, PNG, JPG"} · Up to 20 MB`}</span>
              </label>
            </div>
            {error && <p role="alert" className="text-sm leading-5 text-accent">{error}</p>}
            <p className="text-xs leading-5 text-fg-dim">Demo preview · Document details are saved in this browser. Files are not uploaded.</p>
          </div>
          <div className="flex justify-end gap-3 border-t border-line px-5 py-4 sm:px-6">
            <button type="button" onClick={() => dialog.current?.close()} className={buttonStyle}>Cancel</button>
            <button type="submit" disabled={!file || !machinePk} className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-black transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-40"><Upload className="size-4" strokeWidth={1.5} />Add document</button>
          </div>
        </form>
      </dialog>
    </section>
  );
}
