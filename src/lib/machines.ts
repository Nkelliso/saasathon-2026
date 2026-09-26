export const machineModels = {
  "tormach-pcnc-1100": {
    manufacturer: "Tormach",
    model: "PCNC 1100",
    category: "CNC mill",
  },
  "universal-robots-ur5e": {
    manufacturer: "Universal Robots",
    model: "UR5e",
    category: "Cobot arm",
  },
  "abb-irb-120": {
    manufacturer: "ABB",
    model: "IRB 120",
    category: "Industrial robot",
  },
  "tormach-1100mx": {
    manufacturer: "Tormach",
    model: "1100MX",
    category: "CNC mill",
  },
  "tormach-770mx": {
    manufacturer: "Tormach",
    model: "770MX (MF)",
    category: "CNC mill",
  },
  "tormach-15l-slant-pro": {
    manufacturer: "Tormach",
    model: "15L Slant-PRO",
    category: "CNC lathe",
  },
  "tormach-24r": {
    manufacturer: "Tormach",
    model: "24R",
    category: "CNC router",
  },
  "tormach-1300pl": {
    manufacturer: "Tormach",
    model: "1300PL",
    category: "CNC plasma table",
  },
} as const;

export type MachineModelId = keyof typeof machineModels;

export function isMachineModelId(value: string): value is MachineModelId {
  return Object.hasOwn(machineModels, value);
}

export type OrganizationMachine = {
  pk: string;
  name: string;
  modelId: MachineModelId;
  location: string;
  status: "FAULT" | "RUNNING" | "IDLE";
  notes?: string;
};

// Fictional demo fleet. Keep IDs aligned with src/machines/<modelId>/ assets.
export const organizationMachines: OrganizationMachine[] = [
  { pk: "CNC-MX-01", name: "Blue CNC machine 2", modelId: "tormach-1100mx", location: "Bay 03", status: "FAULT", notes: "Blue enclosure. John handles maintenance; he is off-site this week. Machine-side air supply comes from the Bay 03 drop. Spare quick-connect fittings are in drawer A3. Downtime costs $600/hr." },
  { pk: "CNC-MX-02", name: "Production mill 2", modelId: "tormach-1100mx", location: "Bay 04", status: "RUNNING", notes: "Aluminium manifold production. Record toolholder inspections at shift handover." },
  { pk: "CNC-MX-03", name: "Prototype mill", modelId: "tormach-1100mx", location: "Bay 05", status: "IDLE", notes: "Prototype cell with the manual-oiler configuration. Held for maintenance review after lubrication concerns; do not resume until cleared." },
  { pk: "CNC-MX-04", name: "Finishing mill", modelId: "tormach-1100mx", location: "Bay 06", status: "RUNNING", notes: "Finishing cell. Dedicated holders H10–H18 are kept in the covered rack." },
  { pk: "CNC-MX-05", name: "Training mill", modelId: "tormach-1100mx", location: "Training cell", status: "IDLE", notes: "Training machine. Shift lead signs off setup and approved operating checks." },
  {
    pk: "MILL-01",
    name: "Mill 01",
    location: "Bay 02",
    modelId: "tormach-pcnc-1100",
    status: "FAULT",
  },
  {
    pk: "COBOT-02",
    name: "Assembly Cobot 02",
    location: "Cell 04",
    modelId: "universal-robots-ur5e",
    status: "RUNNING",
  },
  {
    pk: "ROBOT-03",
    name: "Pick Robot 03",
    location: "Cell 07",
    modelId: "abb-irb-120",
    status: "IDLE",
  },
  { pk: "MILL-02", name: "Fixture mill", modelId: "tormach-pcnc-1100", location: "Bay 01", status: "RUNNING", notes: "Fixture plates and small batches. Spare filters in cabinet B2." },
  { pk: "CNC-770-01", name: "Small parts mill", modelId: "tormach-770mx", location: "Bay 07", status: "RUNNING", notes: "Small aluminium brackets. Inspect the chip basket at handover." },
  { pk: "CNC-770-02", name: "Instrument mill", modelId: "tormach-770mx", location: "Bay 08", status: "RUNNING", notes: "Instrument housings. Dedicated soft jaws are labelled by job number." },
  { pk: "LATHE-01", name: "Shaft turning cell", modelId: "tormach-15l-slant-pro", location: "Turning 01", status: "RUNNING", notes: "Short shaft batches. Keep approved setup sheets beside the control." },
  { pk: "LATHE-02", name: "Bushing turning cell", modelId: "tormach-15l-slant-pro", location: "Turning 02", status: "IDLE", notes: "Bronze bushings. Next batch is waiting for inspection approval." },
  { pk: "ROUTER-01", name: "Panel router", modelId: "tormach-24r", location: "Routing 01", status: "RUNNING", notes: "Polymer panels. Check workholding and extraction against the approved setup." },
  { pk: "ROUTER-02", name: "Pattern router", modelId: "tormach-24r", location: "Routing 02", status: "IDLE", notes: "Foam patterns. Label and store each fixture after the batch." },
  { pk: "PLASMA-01", name: "Sheet cutting table", modelId: "tormach-1300pl", location: "Fabrication 01", status: "RUNNING", notes: "Mild-steel blanks. Consumables are stocked in fabrication cabinet P1." },
  { pk: "PLASMA-02", name: "Short run plasma", modelId: "tormach-1300pl", location: "Fabrication 02", status: "IDLE", notes: "Short runs. Record consumable condition and material thickness for every job." },
  { pk: "COBOT-01", name: "Machine tending cobot", modelId: "universal-robots-ur5e", location: "Cell 03", status: "RUNNING", notes: "Gripper changes require a qualified technician to verify the approved configuration." },
  { pk: "COBOT-03", name: "Inspection cobot", modelId: "universal-robots-ur5e", location: "Cell 05", status: "RUNNING", notes: "Camera inspection station. Preserve the validated fixture and tool configuration." },
  { pk: "ROBOT-04", name: "Tray loading robot", modelId: "abb-irb-120", location: "Cell 08", status: "RUNNING", notes: "Tray loading. Escalate repeated pick deviations to the cell engineer." },
];

export function getOrganizationMachine(pk: string) {
  return (
    organizationMachines.find(
      (machine) => machine.pk.toLowerCase() === pk.toLowerCase(),
    ) ?? organizationMachines[0]
  );
}
