"use client";

import { type FormEvent, useMemo, useState, useSyncExternalStore } from "react";
import { Plus, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { AppShell } from "@/components/app-shell";
import { OrganizationDocuments } from "@/components/organization/organization-documents";

type Member = { id: string; name: string };
const initialMembers: Member[] = [
  { id: "EMP-0041", name: "Dana Reyes" },
  { id: "EMP-0187", name: "Marcus Chen" },
  { id: "EMP-0204", name: "Inez Hoffman" },
  { id: "EMP-0221", name: "Owen Brooks" },
];
const storageKey = "fieldnote:organization-members:v1";
const initialSnapshot = JSON.stringify(initialMembers);
const changeEvent = "fieldnote:members-changed";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
}
function getSnapshot() {
  try { return localStorage.getItem(storageKey) ?? initialSnapshot; }
  catch { return initialSnapshot; }
}

export function OrganizationConsole() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => initialSnapshot);
  const members = useMemo<Member[]>(() => {
    try {
      const parsed: unknown = JSON.parse(snapshot);
      if (Array.isArray(parsed) && parsed.every((member) => typeof member?.id === "string" && typeof member?.name === "string")) return parsed;
    } catch { /* Restore the demo roster if browser storage is invalid. */ }
    return initialMembers;
  }, [snapshot]);
  const [memberId, setMemberId] = useState("");
  const [message, setMessage] = useState("");
  const [removed, setRemoved] = useState<Member | null>(null);

  function save(nextMembers: Member[]) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(nextMembers));
      window.dispatchEvent(new Event(changeEvent));
      return true;
    } catch {
      setMessage("Changes could not be saved. Check browser storage and try again.");
      return false;
    }
  }

  function addMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = memberId.trim().toUpperCase();
    if (!id) return;
    if (members.some((member) => member.id.toUpperCase() === id)) {
      setMessage(`${id} is already a member.`);
      setRemoved(null);
      return;
    }
    const knownMember = initialMembers.find((member) => member.id === id);
    if (!save([...members, knownMember ?? { id, name: "Member" }])) return;
    setMemberId("");
    setMessage(`${id} added.`);
    setRemoved(null);
  }

  function removeMember(member: Member) {
    if (!save(members.filter((item) => item.id !== member.id))) return;
    setRemoved(member);
    setMessage(`${member.id} removed.`);
  }

  return (
    <AppShell>
      <motion.main initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Kestrel Precision Machining</h1>
        <p className="mt-3 text-sm leading-6 text-fg-muted">Manage who can access your machines and shared knowledge.</p>

        <OrganizationDocuments />

        <section aria-labelledby="members-title" className="mt-9 overflow-hidden rounded-lg border border-line bg-surface">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
            <h2 id="members-title" className="text-sm font-medium">Members</h2>
            <span className="font-mono text-xs tabular-nums text-fg-muted">{members.length}</span>
          </div>
          <ul className="divide-y divide-line">
            {members.map((member) => (
              <li key={member.id} className="flex min-w-0 items-center justify-between gap-3 px-5 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{member.name}</p>
                  <p className="mt-1 break-all font-mono text-xs text-fg-muted">{member.id}</p>
                </div>
                {member.id === "EMP-0041" ? <span className="text-xs text-fg-muted">You</span> : (
                  <button type="button" onClick={() => removeMember(member)} aria-label={`Remove ${member.id}`} title={`Remove ${member.name}`} className="flex size-10 shrink-0 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg focus-visible:outline-2 focus-visible:outline-accent">
                    <Trash2 className="size-4" strokeWidth={1.5} />
                  </button>
                )}
              </li>
            ))}
          </ul>
          <form onSubmit={addMember} className="border-t border-line p-5 sm:p-6">
            <label htmlFor="member-id" className="block text-sm font-medium">Add member by ID</label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input id="member-id" value={memberId} onChange={(event) => setMemberId(event.target.value)} placeholder="e.g. EMP-0239" required maxLength={80} autoComplete="off" className="h-11 min-w-0 shrink-0 rounded-md sm:flex-1 border border-line bg-surface-2 px-3 font-mono text-sm outline-none transition-colors placeholder:text-fg-dim focus:border-accent focus:ring-2 focus:ring-accent-dim" />
              <button type="submit" disabled={!memberId.trim()} className="flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-black transition-[filter] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40">
                <Plus className="size-4" strokeWidth={1.5} />Add member
              </button>
            </div>
          </form>
        </section>
        <div role="status" aria-live="polite" className="mt-4 flex min-h-6 flex-wrap items-center gap-x-3 gap-y-1 text-xs text-fg-muted">
          {message && <span>{message}</span>}
          {removed && <button type="button" onClick={() => {
            if (!save([...members, removed])) return;
            setMessage(`${removed.id} restored.`);
            setRemoved(null);
          }} className="rounded-sm text-fg underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-accent">Undo</button>}
        </div>
      </motion.main>
    </AppShell>
  );
}

