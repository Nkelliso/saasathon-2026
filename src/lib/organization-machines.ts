"use client";

import { useSyncExternalStore } from "react";
import { isMachineModelId, organizationMachines, type MachineModelId } from "@/lib/machines";

export type OrganizationMachine = {
  pk: string;
  name: string;
  modelId: MachineModelId;
  location: string;
  status: "FAULT" | "RUNNING" | "IDLE";
  notes?: string;
};

const key = "fieldnote-machines";
let cachedRaw: string | null | undefined;
let cachedMachines: OrganizationMachine[] = [...organizationMachines];
const serverSnapshot = { machines: [...organizationMachines] as OrganizationMachine[], ready: false };
let clientSnapshot = { machines: cachedMachines, ready: true };

function getSnapshot() {
  let raw: string | null = null;
  try { raw = localStorage.getItem(key); } catch { /* Use demo machines when storage is unavailable. */ }
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      const parsed: unknown = raw === null ? [...organizationMachines] : JSON.parse(raw);
      if (!Array.isArray(parsed)) throw new Error("Invalid machine list");
      cachedMachines = parsed.filter((machine): machine is OrganizationMachine =>
        typeof machine === "object" && machine !== null &&
        typeof machine.pk === "string" && typeof machine.name === "string" &&
        typeof machine.modelId === "string" && isMachineModelId(machine.modelId) &&
        typeof machine.location === "string" && ["FAULT", "RUNNING", "IDLE"].includes(machine.status),
      );
    } catch { cachedMachines = [...organizationMachines]; }
    clientSnapshot = { machines: cachedMachines, ready: true };
  }
  return clientSnapshot;
}

function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener("fieldnote-machines-changed", listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener("fieldnote-machines-changed", listener);
  };
}

export function useOrganizationMachines() {
  return useSyncExternalStore(subscribe, getSnapshot, () => serverSnapshot);
}

export function saveOrganizationMachines(machines: OrganizationMachine[]) {
  localStorage.setItem(key, JSON.stringify(machines));
  window.dispatchEvent(new Event("fieldnote-machines-changed"));
}
