import { isMachineModelId, organizationMachines, type OrganizationMachine } from "./machines";

export type MachineTicket = {
  id: string;
  machinePk: string;
  kind: "REPAIR" | "INFO" | "EVENT";
  title: string;
  description: string;
  summary?: string;
  createdAt: string;
};
export type DemoWorkspace = { version: 1; machines: OrganizationMachine[]; tickets: MachineTicket[] };
export const demoStorageKey = "torque-demo-workspace-v1";

// Fictional records from <SPOOFED_DATA> in _notes/OLI_PROMPTS.md.
export const spoofedTickets: MachineTicket[] = [
  {
    id: "demo-mx-air-fitting", machinePk: "CNC-MX-01", kind: "REPAIR", title: "Tool stuck — restricted air fitting", createdAt: "2026-09-21T09:00:00Z",
    description: "Tool would not release. Compressor read 120 psi, but pressure at the machine dropped from 94 to 72 psi during release. John replaced a restricted quick-connect on the Bay 03 air line. Pressure stayed above 90 psi and ten tool changes passed. Downtime: 38 minutes. Check machine-side pressure if this returns.",
    summary: "Replacing the restricted air fitting restored tool release.",
  },
  {
    id: "demo-mx-toolholder", machinePk: "CNC-MX-01", kind: "REPAIR", title: "Chatter — chip on toolholder", createdAt: "2026-09-23T11:20:00Z",
    description: "Chatter started after loading holder H07, with no program changes. Found an aluminium chip on the holder's taper. Cleaning the holder and spindle contact surfaces restored the finish. Downtime: 22 minutes. H07 had been left on a dirty bench; store holders covered and inspect before loading.",
    summary: "Removing a chip from the toolholder stopped the chatter.",
  },
  {
    id: "demo-mx-coolant", machinePk: "CNC-MX-01", kind: "REPAIR", title: "Weak coolant — blocked pump impeller", createdAt: "2026-09-25T14:00:00Z",
    description: "Pump was running but coolant barely flowed. Tank level was normal. Found fine chips blocking the impeller and a full chip basket. Cleaning both restored flow. Downtime: 31 minutes. The previous shift had missed the tank basket; added it to the handover checklist.",
    summary: "Clearing chips restored coolant flow without replacing the pump.",
  },
  {
    id: "demo-mx-missed-oiler", machinePk: "CNC-MX-03", kind: "EVENT", title: "Startup lubrication missed", createdAt: "2026-09-22T07:15:00Z",
    description: 'Operator handover: "Didn’t pump the oiler — thought it was automatic." This cell has the manual-oiler configuration. Maintenance review requested to verify oil delivery and the correct lubrication routine.',
    summary: "Operator may have mistaken the manual oiler for an automatic system.",
  },
  {
    id: "demo-mx-table-squeal", machinePk: "CNC-MX-03", kind: "EVENT", title: "Table squealing again", createdAt: "2026-09-24T10:30:00Z",
    description: 'Operator reported: "Table squealing again; restarted and kept running." Shift lead subsequently held the machine for urgent maintenance review. Verify oil delivery and inspect for damage before further operation; an oil-system fault has not been ruled out.',
    summary: "Repeated squealing after a missed lubrication report; maintenance review pending.",
  },
];

const observations: Record<OrganizationMachine["modelId"], [string, string]> = {
  "tormach-1100mx": ["Toolholder rack checked at handover", "Covered holders were accounted for before the next batch. Setup sheet and tooling list are in the cell folder."],
  "tormach-pcnc-1100": ["Coolant level noted during long batch", "Operator recorded a lower coolant level near the end of the batch. Shift lead asked maintenance to check against the approved operating procedure."],
  "tormach-770mx": ["Chip basket cleared between batches", "Maintenance cleared accumulated chips during the scheduled stop. The outgoing shift added the basket check to the handover sheet."],
  "tormach-15l-slant-pro": ["First-off part held for inspection", "The first part from the new setup is awaiting inspection. Keep the approved setup sheet with the batch and record any offset changes."],
  "tormach-24r": ["Fixture reference checked", "Operator flagged a worn fixture label before setup. Cell lead replaced the label and verified the fixture against the job sheet."],
  "tormach-1300pl": ["Cut quality changed on final sheet", "Operator noticed extra dross on the final sheet. Material thickness and consumable condition were recorded for the fabrication technician to review."],
  "universal-robots-ur5e": ["Protective stop after gripper change", "Cell stopped on the first pick after a gripper change. Robotics technician asked to review stop logs and approved tool and payload settings. Cause unconfirmed; all protective functions remain enabled."],
  "abb-irb-120": ["Pick deviation at fixture station A", "A pick deviation was reported at station A. Cell engineer asked to inspect fixture condition and review recorded offsets before further adjustments."],
};

export function createDemoWorkspace(): DemoWorkspace {
  const machines = organizationMachines.map((machine) => ({ ...machine }));
  const tickets: MachineTicket[] = machines.flatMap((machine, index) => {
    const [title, description] = observations[machine.modelId];
    const notes: MachineTicket[] = [{
      id: `demo-${machine.pk}-handover`, machinePk: machine.pk, kind: "INFO",
      title: "Cell handover and local notes", description: machine.notes || `${machine.name} operates in ${machine.location}. Shift records and approved setup sheets are kept in the cell cabinet.`,
      createdAt: "2026-09-12T07:00:00Z",
    }];
    if (!["CNC-MX-01", "CNC-MX-03"].includes(machine.pk)) notes.push({
      id: `demo-${machine.pk}-observation`, machinePk: machine.pk, kind: "EVENT", title, description,
      createdAt: `2026-09-${String(18 + index % 8).padStart(2, "0")}T10:00:00Z`,
    });
    return notes;
  });
  return { version: 1, machines, tickets: sortTickets([...tickets, ...spoofedTickets.map((ticket) => ({ ...ticket }))]) };
}

export function sortTickets(tickets: MachineTicket[]) {
  return [...tickets].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt) || a.id.localeCompare(b.id));
}

const record = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null;
const text = (value: unknown, max: number) => typeof value === "string" && value.trim().length > 0 && value.length <= max;
export function isOrganizationMachine(value: unknown): value is OrganizationMachine {
  return record(value) && text(value.pk, 120) && typeof value.name === "string" &&
    typeof value.modelId === "string" && isMachineModelId(value.modelId) && typeof value.location === "string" &&
    ["FAULT", "RUNNING", "IDLE"].includes(String(value.status)) && (value.notes === undefined || typeof value.notes === "string");
}
export function isMachineTicket(value: unknown): value is MachineTicket {
  return record(value) && text(value.id, 200) && text(value.machinePk, 120) && text(value.title, 500) &&
    text(value.description, 12000) && ["REPAIR", "INFO", "EVENT"].includes(String(value.kind)) &&
    typeof value.createdAt === "string" && Number.isFinite(Date.parse(value.createdAt)) &&
    (value.summary === undefined || typeof value.summary === "string");
}

export function parseWorkspace(raw: string): DemoWorkspace {
  const value: unknown = JSON.parse(raw);
  if (!record(value) || value.version !== 1 || !Array.isArray(value.machines) || !Array.isArray(value.tickets) ||
    !value.machines.every(isOrganizationMachine) || !value.tickets.every(isMachineTicket)) throw new Error("Invalid demo workspace");
  const machines = value.machines as OrganizationMachine[];
  const tickets = value.tickets as MachineTicket[];
  if (new Set(machines.map((machine) => machine.pk.toLowerCase())).size !== machines.length ||
    new Set(tickets.map((ticket) => ticket.id)).size !== tickets.length ||
    tickets.some((ticket) => !machines.some((machine) => machine.pk === ticket.machinePk))) throw new Error("Invalid demo relationships");
  return { version: 1, machines, tickets: sortTickets(tickets) };
}

// One-time upgrade: preserve valid user additions, fill in the expanded demo fleet.
export function migrateLegacyWorkspace(machineRaw: string | null, ticketRaw: string | null): DemoWorkspace {
  const seed = createDemoWorkspace();
  function array(raw: string | null): unknown[] {
    try { const value: unknown = JSON.parse(raw ?? "[]"); return Array.isArray(value) ? value : []; } catch { return []; }
  }
  const machines = new Map(seed.machines.map((machine) => [machine.pk.toLowerCase(), machine]));
  for (const machine of array(machineRaw).filter(isOrganizationMachine)) machines.set(machine.pk.toLowerCase(), machine);
  const tickets = new Map(seed.tickets.map((ticket) => [ticket.id, ticket]));
  for (const ticket of array(ticketRaw).filter(isMachineTicket)) {
    const machine = machines.get(ticket.machinePk.toLowerCase());
    if (machine) tickets.set(ticket.id, { ...ticket, machinePk: machine.pk });
  }
  return { version: 1, machines: [...machines.values()], tickets: sortTickets([...tickets.values()].map((ticket) => ({ ...ticket, machinePk: machines.get(ticket.machinePk.toLowerCase())!.pk }))) };
}
