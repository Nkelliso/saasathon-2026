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

export const organizationMachines = [
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
] as const;

export function getOrganizationMachine(pk: string) {
  return (
    organizationMachines.find(
      (machine) => machine.pk.toLowerCase() === pk.toLowerCase(),
    ) ?? organizationMachines[0]
  );
}
