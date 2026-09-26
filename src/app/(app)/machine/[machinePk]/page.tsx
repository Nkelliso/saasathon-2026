import type { Metadata } from "next";
import { MachineFix } from "@/components/machine/machine-fix";

export const metadata: Metadata = {
  title: "Machine Fix",
  description: "Inspect a machine and diagnose active faults.",
};

export default async function MachinePage({
  params,
}: {
  params: Promise<{ machinePk: string }>;
}) {
  const { machinePk } = await params;
  return <MachineFix machinePk={machinePk} />;
}
