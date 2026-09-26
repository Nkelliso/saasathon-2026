"use client";

import { useSyncExternalStore } from "react";
import { createDemoWorkspace, demoStorageKey, isMachineTicket, migrateLegacyWorkspace, parseWorkspace, type DemoWorkspace, type MachineTicket } from "./demo-data";
import type { OrganizationMachine } from "./machines";

const eventName = "torque-demo-workspace-changed";
const serverSnapshot = { ...createDemoWorkspace(), ready: false };
let snapshot = { ...createDemoWorkspace(), ready: true };
let initialized = false;
let cachedRaw: string | null | undefined;

function getSnapshot() {
  if (!initialized) return snapshot;
  try {
    const raw = localStorage.getItem(demoStorageKey);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      snapshot = { ...(raw ? parseWorkspace(raw) : createDemoWorkspace()), ready: true };
    }
  } catch { /* A blocked or damaged store keeps the last valid in-memory snapshot. */ }
  return snapshot;
}

function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(eventName, listener);
  if (!initialized) {
    initialized = true;
    try {
      const raw = localStorage.getItem(demoStorageKey);
      const workspace = raw ? parseWorkspace(raw) : migrateLegacyWorkspace(localStorage.getItem("fieldnote-machines"), localStorage.getItem("fieldnote-tickets"));
      snapshot = { ...workspace, ready: true };
      cachedRaw = JSON.stringify(workspace);
      localStorage.setItem(demoStorageKey, cachedRaw);
    } catch { /* Seed stays usable in memory. An explicit reset can repair corrupt storage. */ }
    listener();
  }
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(eventName, listener);
  };
}

export function useDemoWorkspace() {
  return useSyncExternalStore(subscribe, getSnapshot, () => serverSnapshot);
}

function saveWorkspace(workspace: DemoWorkspace) {
  const raw = JSON.stringify(parseWorkspace(JSON.stringify(workspace)));
  // One storage write commits both collections together, or throws without changing either.
  localStorage.setItem(demoStorageKey, raw);
  cachedRaw = raw;
  initialized = true;
  snapshot = { ...parseWorkspace(raw), ready: true };
  window.dispatchEvent(new Event(eventName));
}

export function saveOrganizationMachines(machines: OrganizationMachine[]) {
  const current = getSnapshot();
  saveWorkspace({ version: 1, machines, tickets: current.tickets.filter((ticket) => machines.some((machine) => machine.pk === ticket.machinePk)) });
}

export function saveMachineTicket(ticket: MachineTicket) {
  if (!isMachineTicket(ticket)) throw new Error("Invalid ticket");
  const current = getSnapshot();
  saveWorkspace({ version: 1, machines: current.machines, tickets: [ticket, ...current.tickets.filter((existing) => existing.id !== ticket.id)] });
}

export function resetDemoWorkspace() {
  saveWorkspace(createDemoWorkspace());
  try { localStorage.setItem("torque-prevention-demo-read-v1", "[]"); } catch { /* Fleet is already restored. */ }
  window.dispatchEvent(new Event("torque-prevention-demo-read-v1"));
}
