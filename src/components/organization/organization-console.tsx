"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  Activity,
  Building2,
  Check,
  ChevronRight,
  CircleUserRound,
  Factory,
  FilePlus2,
  Gauge,
  HardHat,
  KeyRound,
  Bot,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Trash2,
  UserPlus,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type Member = {
  id: string;
  name: string;
  email: string;
  role: "Administrator" | "Engineer" | "Operator";
  lastActive: string;
  status: "ACTIVE" | "INVITED";
  initials: string;
};

const initialMembers: Member[] = [
  {
    id: "EMP-0041",
    name: "Dana Reyes",
    email: "dana.reyes@kestrel-mfg.com",
    role: "Administrator",
    lastActive: "NOW",
    status: "ACTIVE",
    initials: "DR",
  },
  {
    id: "EMP-0187",
    name: "Marcus Chen",
    email: "marcus.chen@kestrel-mfg.com",
    role: "Engineer",
    lastActive: "12 MIN AGO",
    status: "ACTIVE",
    initials: "MC",
  },
  {
    id: "EMP-0204",
    name: "Inez Hoffman",
    email: "inez.hoffman@kestrel-mfg.com",
    role: "Engineer",
    lastActive: "2 HR AGO",
    status: "ACTIVE",
    initials: "IH",
  },
  {
    id: "EMP-0221",
    name: "Owen Brooks",
    email: "owen.brooks@kestrel-mfg.com",
    role: "Operator",
    lastActive: "YESTERDAY",
    status: "ACTIVE",
    initials: "OB",
  },
  {
    id: "EMP-0239",
    name: "Priya Nair",
    email: "priya.nair@kestrel-mfg.com",
    role: "Operator",
    lastActive: "INVITE SENT 09:42",
    status: "INVITED",
    initials: "PN",
  },
];

const navigation = [
  { label: "Machine fix", href: "/machine", icon: Wrench },
  { label: "Add ticket", href: "/ticket", icon: FilePlus2 },
  { label: "Add machine", href: "/add_machine", icon: Plus },
  { label: "Organization", href: "/org", icon: Building2, active: true },
];

const activity = [
  {
    title: "Member added",
    detail: "Priya Nair · EMP-0239",
    time: "09:42",
    icon: UserPlus,
  },
  {
    title: "Role changed",
    detail: "Owen Brooks · Operator",
    time: "YESTERDAY",
    icon: ShieldCheck,
  },
  {
    title: "Machine registered",
    detail: "ABB-CELL-02 · IRB 120",
    time: "22 SEP",
    icon: Bot,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function OrganizationConsole() {
  const [members, setMembers] = useState(initialMembers);
  const [memberId, setMemberId] = useState("");
  const [role, setRole] = useState<Member["role"]>("Operator");
  const [query, setQuery] = useState("");
  const [removeId, setRemoveId] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const visibleMembers = members.filter((member) =>
    `${member.name} ${member.id} ${member.email}`.toLowerCase().includes(query.toLowerCase()),
  );

  function addMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = memberId.trim().toUpperCase();
    if (!id || members.some((member) => member.id === id)) return;

    setMembers((current) => [
      ...current,
      {
        id,
        name: "Pending member",
        email: "Identity resolves after invite acceptance",
        role,
        lastActive: "INVITE SENT NOW",
        status: "INVITED",
        initials: "--",
      },
    ]);
    setMemberId("");
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2400);
  }

  function removeMember() {
    if (!removeId) return;
    setMembers((current) => current.filter((member) => member.id !== removeId));
    setRemoveId(null);
  }

  return (
    <div className="min-h-screen bg-bg text-fg md:pr-60 pr-16">
      <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-line bg-bg/95 px-5 backdrop-blur-sm md:px-8">
        <div className="flex min-w-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] sm:text-xs">
          <span className="hidden text-fg-muted sm:inline">Kestrel Precision</span>
          <span className="hidden text-fg-dim sm:inline">/</span>
          <span>Organization</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-fg-muted">
          <span className="size-1.5 rounded-full bg-ok" />
          ORG SYSTEM ONLINE
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6 md:px-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
          className="flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {"// Organization control"}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Kestrel Precision Machining
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-fg-muted">
              Manage site access, operator roles, and organization identity from one control surface.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start rounded-md border border-line bg-surface px-3 py-2.5 font-mono text-[10px] text-fg-muted lg:self-auto">
            <KeyRound className="size-3.5" strokeWidth={1.5} />
            ORG ID&nbsp; <span className="select-all text-fg">KPM-7A41-02</span>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05, ease }}
          className="grid grid-cols-2 border-x border-b border-line bg-surface lg:grid-cols-4"
        >
          {[
            ["Members", String(members.length).padStart(2, "0"), Users],
            ["Active machines", "08", Factory],
            ["Open tickets", "03", Activity],
            ["Knowledge records", "147", Gauge],
          ].map(([label, value, Icon], index) => (
            <div
              key={label as string}
              className={`p-4 md:p-5 ${index % 2 ? "border-l border-line" : ""} ${
                index === 2 ? "border-t border-line lg:border-l lg:border-t-0" : ""
              } ${index === 3 ? "border-l border-t border-line lg:border-t-0" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-fg-muted">
                  {label as string}
                </span>
                <Icon className="size-3.5 text-fg-dim" strokeWidth={1.5} />
              </div>
              <p className="mt-3 font-mono text-2xl tabular-nums">{value as string}</p>
            </div>
          ))}
        </motion.section>

        <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1, ease }}
              className="overflow-hidden rounded-lg border border-line bg-surface"
            >
              <div className="flex items-start gap-3 border-b border-line px-4 py-4 sm:px-5">
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-surface-2">
                  <UserPlus className="size-4 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-sm font-medium">Add organization member</h2>
                  <p className="mt-1 text-xs leading-5 text-fg-muted">
                    Enter an employee ID. New members receive access after identity verification.
                  </p>
                </div>
              </div>
              <form onSubmit={addMember} className="grid gap-3 p-4 sm:grid-cols-[minmax(0,1fr)_170px_auto] sm:p-5">
                <label className="relative">
                  <span className="sr-only">Employee ID</span>
                  <HardHat className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fg-dim" strokeWidth={1.5} />
                  <input
                    value={memberId}
                    onChange={(event) => setMemberId(event.target.value)}
                    placeholder="EMP-0000"
                    className="h-10 w-full rounded-md border border-line bg-surface-2 pl-10 pr-3 font-mono text-sm uppercase outline-none transition-colors placeholder:text-fg-dim focus:border-accent focus:ring-2 focus:ring-accent-dim"
                  />
                </label>
                <select
                  value={role}
                  onChange={(event) => setRole(event.target.value as Member["role"])}
                  aria-label="Member role"
                  className="h-10 rounded-md border border-line bg-surface-2 px-3 text-sm text-fg outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent-dim"
                >
                  <option>Operator</option>
                  <option>Engineer</option>
                  <option>Administrator</option>
                </select>
                <button
                  type="submit"
                  disabled={!memberId.trim()}
                  className="flex h-10 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-black transition-[filter,opacity] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {added ? <Check className="size-4" strokeWidth={1.8} /> : <Plus className="size-4" strokeWidth={1.8} />}
                  {added ? "Added" : "Add member"}
                </button>
              </form>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15, ease }}
              className="overflow-hidden rounded-lg border border-line bg-surface"
            >
              <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div>
                  <h2 className="text-sm font-medium">Member directory</h2>
                  <p className="mt-1 font-mono text-[10px] text-fg-muted">
                    {members.length} OF 20 SEATS ASSIGNED
                  </p>
                </div>
                <label className="relative sm:w-56">
                  <span className="sr-only">Search members</span>
                  <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-fg-dim" strokeWidth={1.5} />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search member or ID"
                    className="h-9 w-full rounded-md border border-line bg-surface-2 pl-9 pr-3 text-xs outline-none transition-colors placeholder:text-fg-dim focus:border-line-strong"
                  />
                </label>
              </div>

              <div className="hidden grid-cols-[minmax(230px,1.5fr)_140px_120px_38px] border-b border-line px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] text-fg-dim lg:grid">
                <span>Identity</span>
                <span>Role</span>
                <span>Last active</span>
                <span />
              </div>
              <div>
                <AnimatePresence initial={false}>
                  {visibleMembers.map((member) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease }}
                      key={member.id}
                      className="group grid gap-3 border-b border-line px-4 py-4 last:border-b-0 sm:px-5 lg:grid-cols-[minmax(230px,1.5fr)_140px_120px_38px] lg:items-center lg:gap-0"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-surface-2 font-mono text-[10px] text-fg-muted">
                          {member.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="truncate text-sm font-medium">{member.name}</p>
                            {member.status === "INVITED" && (
                              <span className="rounded border border-warn/30 bg-warn/10 px-1.5 py-0.5 font-mono text-[8px] text-warn">
                                INVITED
                              </span>
                            )}
                          </div>
                          <p className="mt-1 truncate font-mono text-[10px] text-fg-muted">
                            {member.id} · {member.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between lg:block">
                        <span className="font-mono text-[9px] uppercase text-fg-dim lg:hidden">Role</span>
                        <span className="text-xs text-fg-muted">{member.role}</span>
                      </div>
                      <div className="flex items-center justify-between lg:block">
                        <span className="font-mono text-[9px] uppercase text-fg-dim lg:hidden">Last active</span>
                        <span className="font-mono text-[9px] text-fg-muted">{member.lastActive}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setRemoveId(member.id)}
                        disabled={member.id === "EMP-0041"}
                        aria-label={`Remove ${member.name}`}
                        title={member.id === "EMP-0041" ? "Primary administrator cannot be removed" : `Remove ${member.name}`}
                        className="ml-auto flex size-8 items-center justify-center rounded-md text-fg-dim opacity-100 transition-colors hover:bg-surface-2 hover:text-fault disabled:cursor-not-allowed disabled:opacity-20 lg:opacity-0 lg:group-hover:opacity-100 lg:focus:opacity-100"
                      >
                        <Trash2 className="size-3.5" strokeWidth={1.5} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {visibleMembers.length === 0 && (
                  <div className="px-5 py-10 text-center font-mono text-xs text-fg-muted">
                    NO MATCHING MEMBERS
                  </div>
                )}
              </div>
            </motion.section>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2, ease }}
            className="space-y-6"
          >
            <section className="rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3.5">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted">Access policy</h2>
                <ShieldCheck className="size-4 text-ok" strokeWidth={1.5} />
              </div>
              <div className="space-y-4 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium">Verified IDs only</p>
                    <p className="mt-1 text-[11px] leading-4 text-fg-muted">Factory identity required</p>
                  </div>
                  <span className="font-mono text-[9px] text-ok">ENFORCED</span>
                </div>
                <div className="h-px bg-line" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium">Admin approval</p>
                    <p className="mt-1 text-[11px] leading-4 text-fg-muted">Required for engineers</p>
                  </div>
                  <span className="font-mono text-[9px] text-ok">ENFORCED</span>
                </div>
                <button className="flex w-full items-center justify-between rounded-md border border-line bg-surface-2 px-3 py-2.5 text-xs text-fg-muted transition-colors hover:border-line-strong hover:text-fg">
                  Configure policy
                  <ChevronRight className="size-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </section>

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted">Recent activity</h2>
                <MoreHorizontal className="size-4 text-fg-dim" strokeWidth={1.5} />
              </div>
              <div className="rounded-lg border border-line bg-surface">
                {activity.map((item, index) => (
                  <div key={item.title} className={`flex gap-3 p-4 ${index ? "border-t border-line" : ""}`}>
                    <item.icon className="mt-0.5 size-3.5 shrink-0 text-fg-dim" strokeWidth={1.5} />
                    <div className="min-w-0">
                      <p className="text-xs font-medium">{item.title}</p>
                      <p className="mt-1 truncate text-[11px] text-fg-muted">{item.detail}</p>
                      <p className="mt-2 font-mono text-[9px] text-fg-dim">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-line bg-surface p-4">
              <div className="flex items-center justify-between font-mono text-[10px] text-fg-muted">
                <span>SEAT UTILIZATION</span>
                <span className="tabular-nums text-fg">{members.length} / 20</span>
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(members.length / 20) * 100}%` }}
                  className="h-full bg-accent"
                />
              </div>
              <p className="mt-3 text-[11px] leading-4 text-fg-muted">Standard plan · 15 seats available</p>
            </section>
          </motion.aside>
        </div>
      </main>

      <aside className="fixed inset-y-0 right-0 z-30 flex w-16 flex-col border-l border-line bg-surface md:w-60">
        <div className="flex h-14 items-center border-b border-line px-0 md:px-5">
          <Link href="/home" className="flex w-full items-center justify-center gap-3 md:justify-start">
            <div className="relative flex size-8 items-center justify-center rounded-md border border-line-strong bg-surface-2">
              <Factory className="size-4 text-accent" strokeWidth={1.5} />
              <span className="absolute -right-px -top-px size-1.5 bg-accent" />
            </div>
            <div className="hidden md:block">
              <p className="text-xs font-semibold tracking-tight">MACHINEBASE</p>
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
              className={`relative flex h-10 items-center justify-center gap-3 rounded-md text-sm transition-colors md:justify-start md:px-3 ${
                item.active
                  ? "bg-accent-dim text-fg"
                  : "text-fg-muted hover:bg-surface-2 hover:text-fg"
              }`}
            >
              {item.active && <span className="absolute bottom-2 left-0 top-2 w-px bg-accent" />}
              <item.icon className={`size-4 shrink-0 ${item.active ? "text-accent" : ""}`} strokeWidth={1.5} />
              <span className="hidden md:inline">{item.label}</span>
              {item.active && <span className="ml-auto hidden font-mono text-[8px] text-accent md:inline">ACTIVE</span>}
            </Link>
          ))}
        </nav>

        <div className="border-t border-line p-2 md:p-3">
          <button className="mb-1 flex h-10 w-full items-center justify-center gap-3 rounded-md text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg md:justify-start md:px-3">
            <Settings2 className="size-4" strokeWidth={1.5} />
            <span className="hidden text-sm md:inline">Settings</span>
          </button>
          <div className="flex items-center justify-center gap-3 border-t border-line pt-3 md:justify-start md:px-2">
            <CircleUserRound className="size-7 text-fg-muted" strokeWidth={1.25} />
            <div className="hidden min-w-0 md:block">
              <p className="truncate text-xs font-medium">Dana Reyes</p>
              <p className="mt-0.5 font-mono text-[8px] text-fg-dim">ADMIN · EMP-0041</p>
            </div>
          </div>
        </div>
      </aside>

      <AnimatePresence>
        {removeId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-5 backdrop-blur-sm"
            onMouseDown={(event) => event.target === event.currentTarget && setRemoveId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="remove-title"
              className="w-full max-w-md rounded-lg border border-line bg-surface"
            >
              <div className="flex items-start justify-between border-b border-line p-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-fault">Revoke access</p>
                  <h2 id="remove-title" className="mt-2 text-lg font-semibold">Remove organization member?</h2>
                </div>
                <button onClick={() => setRemoveId(null)} className="text-fg-muted hover:text-fg" aria-label="Close">
                  <X className="size-4" strokeWidth={1.5} />
                </button>
              </div>
              <div className="p-5">
                <p className="text-sm leading-6 text-fg-muted">
                  <span className="font-mono text-fg">{removeId}</span> will immediately lose access to all machines, tickets, and local knowledge records.
                </p>
                <div className="mt-6 flex justify-end gap-2">
                  <button onClick={() => setRemoveId(null)} className="rounded-md border border-line bg-surface-2 px-3.5 py-2 text-sm text-fg-muted hover:border-line-strong hover:text-fg">
                    Cancel
                  </button>
                  <button onClick={removeMember} className="rounded-md bg-fault px-3.5 py-2 text-sm font-medium text-black hover:brightness-110">
                    Remove member
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
