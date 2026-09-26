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
} as const;

export type MachineModelId = keyof typeof machineModels;

export function isMachineModelId(value: string): value is MachineModelId {
  return value in machineModels;
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
