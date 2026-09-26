import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import demo from "../.agent/diagnosis-tests/demo-data.js";
import retrieval from "../.agent/diagnosis-tests/manual-retrieval.js";
import prevention from "../.agent/diagnosis-tests/prevention-demo.js";
const { createDemoWorkspace, migrateLegacyWorkspace, parseWorkspace, spoofedTickets } = demo;

test("demo has 20 unique machines, 5 MX mills, assets for every model and valid ticket ownership", async () => {
  const workspace = createDemoWorkspace();
  assert.equal(workspace.machines.length, 20);
  assert.equal(workspace.machines.filter((m) => m.modelId === "tormach-1100mx").length, 5);
  assert.equal(new Set(workspace.machines.map((m) => m.modelId)).size, 8);
  assert.deepEqual(parseWorkspace(JSON.stringify(workspace)), workspace);
  for (const machine of workspace.machines) {
    assert.ok(workspace.tickets.some((t) => t.machinePk === machine.pk));
    await access(`src/machines/${machine.modelId}/manual.md`);
    await access(`src/machines/${machine.modelId}/model.glb`);
  }
  workspace.machines[0].name = "changed";
  assert.notEqual(createDemoWorkspace().machines[0].name, "changed");
});

test("the three OLI repair descriptions and summaries are preserved exactly", async () => {
  const prompt = await readFile("_notes/OLI_PROMPTS.md", "utf8");
  for (const ticket of spoofedTickets.filter((ticket) => ticket.kind === "REPAIR")) {
    assert.ok(prompt.includes(`**Description:** ${ticket.description}`));
    assert.ok(prompt.includes(`**Summary:** ${ticket.summary}`));
    assert.equal(ticket.machinePk, "CNC-MX-01");
  }
});

test("legacy migration keeps user data, rejects malformed and orphan records, and does not duplicate seeds", () => {
  const seed = createDemoWorkspace();
  const custom = { ...seed.machines[0], pk: "CUSTOM-01", name: "Custom machine" };
  const ticket = { ...seed.tickets[0], id: "custom-ticket", machinePk: custom.pk };
  const migrated = migrateLegacyWorkspace(JSON.stringify([...seed.machines, custom, null]), JSON.stringify([...seed.tickets, ticket, { ...ticket, id: "orphan", machinePk: "MISSING" }, null]));
  assert.equal(migrated.machines.length, 21);
  assert.equal(migrated.tickets.length, seed.tickets.length + 1);
  assert.ok(migrated.tickets.some((t) => t.id === ticket.id));
  assert.deepEqual(parseWorkspace(JSON.stringify(migrated)), migrated);
  assert.deepEqual(migrateLegacyWorkspace("broken", "{}"), seed);
  assert.throws(() => parseWorkspace(JSON.stringify({ ...seed, machines: [] })));
  assert.throws(() => parseWorkspace(JSON.stringify({ ...seed, tickets: [...seed.tickets, seed.tickets[0]] })));
  assert.deepEqual(parseWorkspace(JSON.stringify({ version: 1, machines: [], tickets: [] })).machines, []);
});

test("MX diagnosis receives John's repair, all selected-machine tickets and no other machine's history", async () => {
  const seed = createDemoWorkspace();
  const machine = seed.machines[0];
  const sources = await retrieval.retrieveSources({ machine, messages: [{ role: "user", text: "Tool won't release. 120 psi. John fixed this. Power drawbar clicks." }], tickets: seed.tickets });
  assert.ok(sources.some((s) => s.kind === "manual"));
  const tickets = sources.filter((s) => s.id.startsWith("T"));
  assert.equal(tickets.length, seed.tickets.filter((t) => t.machinePk === machine.pk).length);
  assert.ok(tickets.some((s) => s.excerpt.includes("John replaced a restricted quick-connect")));
  assert.ok(tickets.every((s) => s.excerpt.includes("Machine: CNC-MX-01")));
  assert.ok(!tickets.some((s) => s.excerpt.includes("Table squealing")));
});

test("existing demo data gains John's MX-03 repair without losing saved tickets", () => {
  const seed = createDemoWorkspace();
  const saved = { ...seed.tickets[0], id: "user-saved-ticket" };
  const old = { ...seed, tickets: [...seed.tickets.filter((ticket) => ticket.id !== demo.johnDemoRepair.id), saved] };
  const upgraded = parseWorkspace(JSON.stringify(old));
  assert.ok(upgraded.tickets.some((ticket) => ticket.id === demo.johnDemoRepair.id));
  assert.ok(upgraded.tickets.some((ticket) => ticket.id === saved.id));
  assert.deepEqual(parseWorkspace(JSON.stringify(upgraded)), upgraded);
});

test("the second fitting repair creates one prevention report with two matching incidents", () => {
  const seed = createDemoWorkspace();
  const fittingReports = (tickets) => prevention.getPreventionPatterns(tickets).filter((pattern) => pattern.id.startsWith("PRV-AIR-"));
  assert.equal(fittingReports(seed.tickets).length, 0);
  const repair = { ...demo.johnDemoRepair, id: "new-repair", title: "Tool release fixed", description: "tool didnt release, air pressure OK. solution was to replace the air fitting!", createdAt: "2026-09-27T09:00:00Z" };
  const reports = fittingReports([...seed.tickets, repair]);
  assert.equal(reports.length, 1);
  assert.deepEqual(reports[0].incidents.map((incident) => incident.id), [repair.id, demo.johnDemoRepair.id]);
  assert.equal(fittingReports([...seed.tickets, { ...repair, machinePk: "CNC-MX-01" }]).length, 0);
  assert.equal(fittingReports([...seed.tickets, { ...repair, kind: "INFO" }]).length, 0);
});
