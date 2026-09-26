import type { Metadata } from "next";
import { AddMachineConsole } from "@/components/machine/add-machine-console";

export const metadata: Metadata = {
  title: "Add machine",
  description: "Register a machine with your organization.",
};

export default function AddMachinePage() {
  return <AddMachineConsole />;
}
