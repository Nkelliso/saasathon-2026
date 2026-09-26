"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOrganizationMachines } from "@/lib/organization-machines";
import { AppShell } from "@/components/app-shell";

export function MachineEntry() {
  const { machines, ready } = useOrganizationMachines();
  const router = useRouter();
  useEffect(() => {
    if (ready) router.replace(machines.length ? `/machine/${encodeURIComponent(machines[0].pk)}` : "/add_machine");
  }, [machines, ready, router]);
  return <AppShell><main className="p-8 text-sm text-fg-muted">Opening your workspace…</main></AppShell>;
}
