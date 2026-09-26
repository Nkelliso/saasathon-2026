"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Factory, FilePlus2, Plus, ShieldCheck, Wrench } from "lucide-react";

const navigation = [
  { label: "Machine fix", href: "/machine", icon: Wrench },
  { label: "Prevention", href: "/prevention", icon: ShieldCheck },
  { label: "Add ticket", href: "/ticket", icon: FilePlus2 },
  { label: "Add machine", href: "/add_machine", icon: Plus },
  { label: "Organisation", href: "/org", icon: Building2 },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-dvh bg-bg pl-16 text-fg md:pl-60">
      {children}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-16 flex-col border-r border-line bg-surface md:w-60">
        <Link href="/machine" aria-label="Torque home" className="flex h-14 shrink-0 items-center justify-center gap-3 border-b border-line md:justify-start md:px-6">
          <Factory className="size-5 text-accent" strokeWidth={1.5} />
          <span className="hidden text-sm font-semibold tracking-tight md:inline">Torque</span>
        </Link>
        <nav aria-label="Main navigation" className="space-y-1 px-2 py-5 md:px-3">
          {navigation.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link key={href} href={href} title={label} aria-label={label} aria-current={active ? "page" : undefined}
                className={`flex h-11 items-center justify-center gap-3 rounded-md text-sm transition-colors focus-visible:outline-2 focus-visible:outline-accent md:justify-start md:px-3 ${active ? "bg-accent-dim text-accent" : "text-fg-muted hover:bg-surface-2 hover:text-fg"}`}>
                <Icon className="size-4 shrink-0" strokeWidth={1.5} />
                <span className="hidden md:inline">{label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex items-center justify-center gap-3 border-t border-line px-2 py-5 md:justify-start md:px-6">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-surface-2 font-mono text-[10px] text-fg-muted">DR</span>
          <div className="hidden min-w-0 md:block"><p className="text-xs">Dana Reyes</p><p className="mt-1 truncate text-[11px] text-fg-muted">Kestrel Precision</p></div>
        </div>
      </aside>
    </div>
  );
}
