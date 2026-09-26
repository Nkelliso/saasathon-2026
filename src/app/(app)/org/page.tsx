import type { Metadata } from "next";
import { OrganizationConsole } from "@/components/organization/organization-console";

export const metadata: Metadata = {
  title: "Organisation",
  description: "Manage organisation members, machine manuals and schematics.",
};

export default function OrgPage() {
  return <OrganizationConsole />;
}
