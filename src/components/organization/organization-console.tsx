"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Factory,
  FilePlus2,
  KeyRound,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Trash2,
  UserPlus,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type Role = "Administrator" | "Engineer" | "Operator";
type Team = "Operations" | "CNC Bay A" | "Robotics Cell";

type Member = {
  id: string;
  name: string;
  email: string;
  role: Role;
  team: Team;
  shift: string;
  scope: string;
  lastActive: string;
  initials: string;
  onFloor: boolean;
};

const initialMembers: Member[] = [
  { id: "EMP-0041", name: "Dana Reyes", email: "dana.reyes@kestrel-mfg.com", role: "Administrator", team: "Operations", shift: "DAY · 06:00–14:30", scope: "ALL CELLS", lastActive: "NOW", initials: "DR", onFloor: true },
  { id: "EMP-0187", name: "Marcus Chen", email: "marcus.chen@kestrel-mfg.com", role: "Engineer", team: "CNC Bay A", shift: "DAY · 06:00–14:30", scope: "PCNC-1100-01", lastActive: "12 MIN AGO", initials: "MC", onFloor: true },
  { id: "EMP-0204", name: "Inez Hoffman", email: "inez.hoffman@kestrel-mfg.com", role: "Engineer", team: "Robotics Cell", shift: "DAY · 06:00–14:30", scope: "UR5E-01 + IRB120-02", lastActive: "2 HR AGO", initials: "IH", onFloor: true },
  { id: "EMP-0221", name: "Owen Brooks", email: "owen.brooks@kestrel-mfg.com", role: "Operator", team: "CNC Bay A", shift: "SWING · 14:00–22:30", scope: "PCNC-1100-01", lastActive: "YESTERDAY", initials: "OB", onFloor: false },
];

const navigation = [
  { label: "Machine fix", href: "/machine", icon: Wrench },
  { label: "Add ticket", href: "/ticket", icon: FilePlus2 },
  { label: "Add machine", href: "/add_machine", icon: Plus },
  { label: "Organization", href: "/org", icon: Building2, active: true },
];

const coverage = [
  { cell: "CNC Bay A", detail: "2 assigned · 1 machine", initials: ["MC", "OB"] },
  { cell: "Robotics Cell", detail: "1 assigned · 2 machines", initials: ["IH"] },
  { cell: "Ops control", detail: "Escalation owner", initials: ["DR"] },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function OrganizationConsole() {
  const [members, setMembers] = useState(initialMembers);
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState<"All teams" | Team>("All teams");
  const [removeId, setRemoveId] = useState<string | null>(null);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [memberId, setMemberId] = useState("");
  const [inviteRole, setInviteRole] = useState<Role>("Operator");
  const [inviteTeam, setInviteTeam] = useState<Team>("CNC Bay A");
  const [pendingRequest, setPendingRequest] = useState(true);
  const [approved, setApproved] = useState(false);

  const visibleMembers = useMemo(
    () => members.filter((member) => {
      const matchesQuery = `${member.name} ${member.id} ${member.email} ${member.scope}`.toLowerCase().includes(query.toLowerCase());
      return matchesQuery && (team === "All teams" || member.team === team);
    }),
    [members, query, team],
  );

  function inviteMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = memberId.trim().toUpperCase();
    if (!id || members.some((member) => member.id === id)) return;
    setMembers((current) => [...current, {
      id, name: "Pending identity", email: "Invitation sent · awaiting verification", role: inviteRole, team: inviteTeam,
      shift: "SHIFT NOT ASSIGNED", scope: "NO MACHINE SCOPE", lastActive: "INVITED NOW", initials: "--", onFloor: false,
    }]);
    setMemberId("");
    setInviteOpen(false);
  }

  function removeMember() {
    if (!removeId) return;
    setMembers((current) => current.filter((member) => member.id !== removeId));
    setRemoveId(null);
  }

  function approveRequest() {
    setPendingRequest(false);
    setApproved(true);
    window.setTimeout(() => setApproved(false), 2600);
  }

  return (
    <div className="min-h-screen bg-bg pr-16 text-fg md:pr-60">
      <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-line bg-bg/95 px-4 backdrop-blur-sm sm:px-6 md:px-8">
        <div className="flex min-w-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] sm:text-xs">
          <span className="hidden text-fg-muted sm:inline">Kestrel Precision</span><span className="hidden text-fg-dim sm:inline">/</span><span>Organization</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-fg-muted sm:text-[10px]">
          <span className="size-1.5 animate-pulse rounded-full bg-fg-dim" />Access sync · 14:32
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] px-4 py-7 sm:px-6 md:px-8 md:py-9">
        <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease }} className="relative overflow-hidden border-b border-line pb-7">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-80 opacity-40 lg:block" aria-hidden="true">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_left,black,transparent)]" />
          </div>
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{"// Organization control"}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Kestrel Precision Machining</h1>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-fg-muted">
                <span className="flex items-center gap-2"><Building2 className="size-3.5" strokeWidth={1.5} /> Albany plant · Auckland</span>
                <span className="hidden h-3 w-px bg-line sm:block" /><span className="font-mono text-[10px]">ORG KPM-7A41-02</span>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start lg:self-auto">
              <button className="flex h-9 items-center gap-2 rounded-md border border-line bg-surface px-3 text-xs text-fg-muted transition-colors hover:border-line-strong hover:text-fg"><Factory className="size-3.5" strokeWidth={1.5} />ALB-01<ChevronDown className="size-3.5" strokeWidth={1.5} /></button>
              <button type="button" onClick={() => setInviteOpen(true)} className="flex h-9 items-center gap-2 rounded-md bg-accent px-3.5 text-xs font-medium text-black transition-[filter] hover:brightness-110"><UserPlus className="size-3.5" strokeWidth={1.8} />Invite member</button>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05, ease }} className="grid grid-cols-2 border-x border-b border-line bg-surface lg:grid-cols-4" aria-label="Organization summary">
          {[
            ["Verified members", String(members.length).padStart(2, "0"), "20 seats"],
            ["On floor now", String(members.filter((member) => member.onFloor).length).padStart(2, "0"), "Day shift"],
            ["Managed assets", "03", "3 models"],
            ["Shift coverage", "3/3", "All cells"],
          ].map(([label, value, detail], index) => (
            <div key={label} className={`px-4 py-4 md:px-5 ${index % 2 ? "border-l border-line" : ""} ${index === 2 ? "border-t border-line lg:border-l lg:border-t-0" : ""} ${index === 3 ? "border-l border-t border-line lg:border-t-0" : ""}`}>
              <div className="flex items-center justify-between gap-3"><span className="font-mono text-[8px] uppercase tracking-[0.14em] text-fg-muted sm:text-[9px]">{label}</span><span className="font-mono text-[8px] uppercase text-fg-dim">{detail}</span></div>
              <p className="mt-2 font-mono text-2xl tabular-nums">{value}</p>
            </div>
          ))}
        </motion.section>

        <div className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1, ease }} className="min-w-0 overflow-hidden rounded-lg border border-line bg-surface">
            <div className="border-b border-line p-4 sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="flex items-center gap-2"><h2 className="text-sm font-medium">People & machine access</h2><span className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[8px] text-fg-muted">{visibleMembers.length}</span></div>
                  <p className="mt-1 text-xs leading-5 text-fg-muted">Current assignments for Albany plant.</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <label className="relative sm:w-52"><span className="sr-only">Search members</span><Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-fg-dim" strokeWidth={1.5} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search people or assets" className="h-9 w-full rounded-md border border-line bg-surface-2 pl-9 pr-3 text-xs outline-none transition-colors placeholder:text-fg-dim focus:border-accent focus:ring-2 focus:ring-accent-dim" /></label>
                  <select value={team} onChange={(event) => setTeam(event.target.value as "All teams" | Team)} aria-label="Filter by team" className="h-9 rounded-md border border-line bg-surface-2 px-3 text-xs text-fg outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent-dim"><option>All teams</option><option>Operations</option><option>CNC Bay A</option><option>Robotics Cell</option></select>
                </div>
              </div>
            </div>
            <div className="hidden grid-cols-[minmax(220px,1.3fr)_minmax(180px,1fr)_150px_40px] border-b border-line px-5 py-2.5 font-mono text-[8px] uppercase tracking-[0.14em] text-fg-dim lg:grid"><span>Identity</span><span>Assignment</span><span>Machine scope</span><span /></div>
            <div>
              <AnimatePresence initial={false}>
                {visibleMembers.map((member) => (
                  <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2, ease }} key={member.id} className="group relative grid grid-cols-2 gap-x-4 gap-y-3 border-b border-line px-4 py-4 last:border-b-0 sm:px-5 lg:grid-cols-[minmax(220px,1.3fr)_minmax(180px,1fr)_150px_40px] lg:items-center lg:gap-0">
                    <div className="col-span-2 flex min-w-0 items-center gap-3 pr-8 lg:col-span-1 lg:pr-0">
                      <div className="relative flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-surface-2 font-mono text-[9px] text-fg-muted">{member.initials}{member.onFloor && <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full border-2 border-surface bg-fg-muted" />}</div>
                      <div className="min-w-0"><div className="flex items-center gap-2"><p className="truncate text-sm font-medium">{member.name}</p>{member.role === "Administrator" && <BadgeCheck className="size-3.5 shrink-0 text-accent" strokeWidth={1.5} />}</div><p className="mt-1 truncate font-mono text-[9px] text-fg-muted">{member.id} · {member.role.toUpperCase()}</p></div>
                    </div>
                    <div><span className="mb-2 block font-mono text-[8px] uppercase text-fg-dim lg:hidden">Assignment</span><div><p className="text-xs text-fg">{member.team}</p><p className="mt-1 font-mono text-[8px] text-fg-muted">{member.shift}</p></div></div>
                    <div><span className="mb-2 block font-mono text-[8px] uppercase text-fg-dim lg:hidden">Machine scope</span><div><p className="break-words font-mono text-[9px] text-fg">{member.scope}</p><p className="mt-1 font-mono text-[8px] text-fg-dim">SEEN {member.lastActive}</p></div></div>
                    <button type="button" onClick={() => setRemoveId(member.id)} disabled={member.id === "EMP-0041"} aria-label={`Remove ${member.name}`} title={member.id === "EMP-0041" ? "Primary administrator cannot be removed" : `Remove ${member.name}`} className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-md text-fg-dim transition-colors hover:bg-surface-2 hover:text-fg disabled:cursor-not-allowed disabled:opacity-20 lg:static lg:ml-auto lg:opacity-0 lg:group-hover:opacity-100 lg:focus:opacity-100"><MoreHorizontal className="size-4" strokeWidth={1.5} /></button>
                  </motion.div>
                ))}
              </AnimatePresence>
              {visibleMembers.length === 0 && <div className="px-5 py-12 text-center"><Search className="mx-auto size-5 text-fg-dim" strokeWidth={1.5} /><p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted">No matching assignments</p><button onClick={() => { setQuery(""); setTeam("All teams"); }} className="mt-3 text-xs text-accent hover:underline">Clear filters</button></div>}
            </div>
          </motion.section>

          <motion.aside initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15, ease }} className="space-y-5">
            <section className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3.5"><div><h2 className="font-mono text-[9px] uppercase tracking-[0.15em] text-fg-muted">Shift coverage</h2><p className="mt-1 text-xs font-medium">Day · 06:00–14:30</p></div><div className="flex items-center gap-1.5 font-mono text-[9px] text-fg-muted"><Clock3 className="size-3.5" strokeWidth={1.5} />03:28 LEFT</div></div>
              <div>{coverage.map((item, index) => <div key={item.cell} className={`flex items-center justify-between gap-3 px-4 py-3 ${index ? "border-t border-line" : ""}`}><div><p className="text-xs font-medium">{item.cell}</p><p className="mt-1 font-mono text-[8px] text-fg-muted">{item.detail}</p></div><div className="flex -space-x-1.5">{item.initials.map((initials) => <span key={initials} className="flex size-6 items-center justify-center rounded-full border border-line-strong bg-surface-2 font-mono text-[7px] text-fg-muted">{initials}</span>)}</div></div>)}</div>
            </section>

            <section className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3"><h2 className="font-mono text-[9px] uppercase tracking-[0.15em] text-fg-muted">Access queue</h2><span className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[8px] text-fg-muted">{pendingRequest ? "01" : "00"}</span></div>
              <AnimatePresence mode="wait">
                {pendingRequest ? <motion.div key="request" exit={{ opacity: 0, y: -4 }} className="p-4"><div className="flex items-start gap-3"><div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-surface-2 font-mono text-[8px] text-fg-muted">PN</div><div className="min-w-0 flex-1"><p className="text-xs font-medium">Priya Nair</p><p className="mt-1 font-mono text-[8px] text-fg-muted">EMP-0239 · OPERATOR</p><p className="mt-2 text-[11px] leading-4 text-fg-muted">Requests CNC Bay A access for swing shift.</p></div></div><div className="mt-4 grid grid-cols-2 gap-2"><button onClick={() => setPendingRequest(false)} className="h-8 rounded-md border border-line bg-surface-2 text-[11px] text-fg-muted hover:border-line-strong hover:text-fg">Dismiss</button><button onClick={approveRequest} className="h-8 rounded-md bg-accent text-[11px] font-medium text-black hover:brightness-110">Approve access</button></div></motion.div>
                  : <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-4"><Check className="size-4 text-fg-muted" strokeWidth={1.5} /><div><p className="text-xs font-medium">Queue clear</p><p className="mt-1 text-[10px] text-fg-muted">{approved ? "Priya’s access was approved." : "No pending access requests."}</p></div></motion.div>}
              </AnimatePresence>
            </section>

            <section className="rounded-lg border border-line bg-surface p-4">
              <div className="flex items-center justify-between"><h2 className="font-mono text-[9px] uppercase tracking-[0.15em] text-fg-muted">Facility structure</h2><ShieldCheck className="size-3.5 text-fg-dim" strokeWidth={1.5} /></div>
              <div className="mt-4 space-y-1.5 border-l border-line pl-3"><div className="rounded-md bg-surface-2 px-3 py-2"><p className="text-xs font-medium">Albany plant</p><p className="mt-1 font-mono text-[8px] text-fg-muted">ALB-01 · 3 ASSETS</p></div>{["CNC Bay A · PCNC-1100-01", "Robotics · UR5E-01 + IRB120-02"].map((item) => <div key={item} className="flex items-center gap-2 px-3 py-1.5 font-mono text-[8px] text-fg-muted"><ChevronRight className="size-3 shrink-0 text-fg-dim" strokeWidth={1.5} />{item}</div>)}</div>
            </section>
          </motion.aside>
        </div>
      </main>

      <aside className="fixed inset-y-0 right-0 z-30 flex w-16 flex-col border-l border-line bg-surface md:w-60">
        <div className="flex h-14 items-center border-b border-line px-0 md:px-5"><Link href="/home" className="flex w-full items-center justify-center gap-3 md:justify-start"><div className="relative flex size-8 items-center justify-center rounded-md border border-line-strong bg-surface-2"><Factory className="size-4 text-accent" strokeWidth={1.5} /><span className="absolute -right-px -top-px size-1.5 bg-accent" /></div><div className="hidden md:block"><p className="text-xs font-semibold tracking-tight">FIELDNOTE</p><p className="mt-0.5 font-mono text-[8px] tracking-[0.16em] text-fg-dim">OPS CONTROL</p></div></Link></div>
        <nav className="flex-1 space-y-1 p-2 md:p-3" aria-label="Primary"><p className="mb-3 hidden px-2 pt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-fg-dim md:block">Control</p>{navigation.map((item) => <Link key={item.label} href={item.href} title={item.label} className={`relative flex h-10 items-center justify-center gap-3 rounded-md text-sm transition-colors md:justify-start md:px-3 ${item.active ? "bg-accent-dim text-fg" : "text-fg-muted hover:bg-surface-2 hover:text-fg"}`}>{item.active && <span className="absolute bottom-2 left-0 top-2 w-px bg-accent" />}<item.icon className={`size-4 shrink-0 ${item.active ? "text-accent" : ""}`} strokeWidth={1.5} /><span className="hidden md:inline">{item.label}</span>{item.active && <span className="ml-auto hidden font-mono text-[8px] text-accent md:inline">ACTIVE</span>}</Link>)}</nav>
        <div className="border-t border-line p-2 md:p-3"><button className="mb-1 flex h-10 w-full items-center justify-center gap-3 rounded-md text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg md:justify-start md:px-3"><Settings2 className="size-4" strokeWidth={1.5} /><span className="hidden text-sm md:inline">Settings</span></button><div className="flex items-center justify-center gap-3 border-t border-line pt-3 md:justify-start md:px-2"><CircleUserRound className="size-7 text-fg-muted" strokeWidth={1.25} /><div className="hidden min-w-0 md:block"><p className="truncate text-xs font-medium">Dana Reyes</p><p className="mt-0.5 font-mono text-[8px] text-fg-dim">ADMIN · EMP-0041</p></div></div></div>
      </aside>

      <AnimatePresence>
        {inviteOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-bg/85 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && setInviteOpen(false)}>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2, ease }} role="dialog" aria-modal="true" aria-labelledby="invite-title" className="w-full max-w-lg overflow-hidden rounded-lg border border-line bg-surface">
            <div className="flex items-start justify-between border-b border-line p-5"><div><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-accent">Provision access</p><h2 id="invite-title" className="mt-2 text-lg font-semibold tracking-tight">Invite organization member</h2><p className="mt-1 text-xs text-fg-muted">Assign their first operating scope. You can refine it later.</p></div><button onClick={() => setInviteOpen(false)} className="rounded-md p-1 text-fg-muted hover:bg-surface-2 hover:text-fg" aria-label="Close"><X className="size-4" strokeWidth={1.5} /></button></div>
            <form onSubmit={inviteMember} className="space-y-4 p-5">
              <label className="block"><span className="font-mono text-[9px] uppercase tracking-[0.12em] text-fg-muted">Employee ID</span><div className="relative mt-2"><KeyRound className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fg-dim" strokeWidth={1.5} /><input autoFocus value={memberId} onChange={(event) => setMemberId(event.target.value)} placeholder="EMP-0000" className="h-10 w-full rounded-md border border-line bg-surface-2 pl-10 pr-3 font-mono text-sm uppercase outline-none transition-colors placeholder:text-fg-dim focus:border-accent focus:ring-2 focus:ring-accent-dim" /></div></label>
              <div className="grid gap-4 sm:grid-cols-2"><label><span className="font-mono text-[9px] uppercase tracking-[0.12em] text-fg-muted">Role</span><select value={inviteRole} onChange={(event) => setInviteRole(event.target.value as Role)} className="mt-2 h-10 w-full rounded-md border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent-dim"><option>Operator</option><option>Engineer</option><option>Administrator</option></select></label><label><span className="font-mono text-[9px] uppercase tracking-[0.12em] text-fg-muted">Initial team</span><select value={inviteTeam} onChange={(event) => setInviteTeam(event.target.value as Team)} className="mt-2 h-10 w-full rounded-md border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent-dim"><option>Operations</option><option>CNC Bay A</option><option>Robotics Cell</option></select></label></div>
              <div className="flex items-start gap-3 rounded-md border border-line bg-bg p-3"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-fg-dim" strokeWidth={1.5} /><p className="text-[11px] leading-5 text-fg-muted">Machine access stays read-only until the member verifies their factory identity.</p></div>
              <div className="flex justify-end gap-2 pt-1"><button type="button" onClick={() => setInviteOpen(false)} className="h-9 rounded-md border border-line bg-surface-2 px-3.5 text-xs text-fg-muted hover:border-line-strong hover:text-fg">Cancel</button><button type="submit" disabled={!memberId.trim()} className="flex h-9 items-center gap-2 rounded-md bg-accent px-3.5 text-xs font-medium text-black hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"><UserPlus className="size-3.5" strokeWidth={1.8} />Send invitation</button></div>
            </form>
          </motion.div>
        </motion.div>}
      </AnimatePresence>

      <AnimatePresence>
        {removeId && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-bg/85 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && setRemoveId(null)}>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2, ease }} role="dialog" aria-modal="true" aria-labelledby="remove-title" className="w-full max-w-md rounded-lg border border-line bg-surface">
            <div className="flex items-start justify-between border-b border-line p-5"><div><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-fg-muted">Revoke access</p><h2 id="remove-title" className="mt-2 text-lg font-semibold tracking-tight">Remove organization member?</h2></div><button onClick={() => setRemoveId(null)} className="rounded-md p-1 text-fg-muted hover:bg-surface-2 hover:text-fg" aria-label="Close"><X className="size-4" strokeWidth={1.5} /></button></div>
            <div className="p-5"><p className="text-sm leading-6 text-fg-muted"><span className="font-mono text-fg">{removeId}</span> will immediately lose access to all machines and local knowledge records.</p><div className="mt-6 flex justify-end gap-2"><button onClick={() => setRemoveId(null)} className="h-9 rounded-md border border-line bg-surface-2 px-3.5 text-xs text-fg-muted hover:border-line-strong hover:text-fg">Cancel</button><button onClick={removeMember} className="flex h-9 items-center gap-2 rounded-md border border-line-strong bg-fg px-3.5 text-xs font-medium text-bg hover:bg-fg-muted"><Trash2 className="size-3.5" strokeWidth={1.5} />Remove member</button></div></div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
}
