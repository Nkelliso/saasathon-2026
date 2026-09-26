import assert from "node:assert/strict";
import { chromium } from "playwright";
import { ensureServer } from "./dev-server.mjs";

// Isolated browser context: never changes a user's browser or calls a paid model.
const baseURL = await ensureServer({ quiet: true });
const browser = await chromium.launch();
let page;
try {
  const context = await browser.newContext({ baseURL });
  page = await context.newPage();
  page.setDefaultTimeout(15000);
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  let input;
  await context.route("**/api/diagnosis", async (route) => {
    input = route.request().postDataJSON();
    await route.fulfill({ contentType: "text/event-stream", body: [
      { type: "sources", sources: [] }, { type: "delta", text: "Test diagnosis received." }, { type: "done" },
    ].map((event) => `data: ${JSON.stringify(event)}\n\n`).join("") });
  });

  await page.goto("/machine");
  await page.waitForURL("**/machine/CNC-MX-01");
  await page.getByRole("combobox", { name: "Active machine" }).waitFor();
  assert.equal(await page.locator("#active-machine option").count(), 20);
  assert.equal(await page.locator('#active-machine option').evaluateAll((options) => options.filter((option) => option.textContent.includes("1100MX")).length), 5);
  await page.getByText("Tool stuck — restricted air fitting", { exact: true }).waitFor();
  await page.getByRole("textbox", { name: "Describe the problem" }).fill("The tool won't release. John fixed this. 120 PSI.");
  await page.getByRole("button", { name: "Send message" }).click();
  await page.getByText("Test diagnosis received.", { exact: true }).waitFor();
  assert.equal(input.machine.pk, "CNC-MX-01");
  assert.equal(input.tickets.length, 4);
  assert.ok(input.tickets.some((ticket) => ticket.description.includes("John replaced a restricted quick-connect")));
  assert.ok(input.tickets.every((ticket) => ticket.machinePk === input.machine.pk));

  await page.getByRole("link", { name: "Add ticket", exact: true }).first().click();
  await page.getByLabel("Title", { exact: true }).fill("Demo test fitting replaced");
  await page.getByLabel("Details", { exact: true }).fill("Replacement quick-connect restored pressure during release. Ten test changes passed.");
  await page.getByRole("button", { name: "Save ticket" }).click();
  await page.getByRole("link", { name: "View machine" }).click();
  await page.waitForURL("**/machine/CNC-MX-01");
  await page.reload();
  await page.getByText("Demo test fitting replaced", { exact: true }).waitFor();
  await page.getByRole("textbox", { name: "Describe the problem" }).fill("What did we just repair?");
  await page.getByRole("button", { name: "Send message" }).click();
  await page.getByText("Test diagnosis received.", { exact: true }).waitFor();
  assert.equal(input.tickets.length, 5);
  assert.equal(input.tickets[0].title, "Demo test fitting replaced");

  await page.getByRole("combobox", { name: "Active machine" }).selectOption("CNC-MX-03");
  await page.getByText("Table squealing again", { exact: true }).waitFor();
  await page.getByRole("textbox", { name: "Describe the problem" }).fill("The table is squealing.");
  await page.getByRole("button", { name: "Send message" }).click();
  await page.getByText("Test diagnosis received.", { exact: true }).waitFor();
  assert.ok(input.tickets.every((ticket) => ticket.machinePk === "CNC-MX-03"));
  assert.ok(!input.tickets.some((ticket) => ticket.title === "Demo test fitting replaced"));

  await page.goto("/demo");
  await page.getByRole("button", { name: "Reset demo data" }).click();
  await page.getByRole("status").filter({ hasText: "Demo restored" }).waitFor();
  await page.getByRole("button", { name: "Reset demo data" }).click();
  await page.reload();
  await page.getByText("44", { exact: true }).waitFor();
  await page.getByRole("link", { name: "Open demo machine" }).click();
  await page.waitForURL("**/machine/CNC-MX-03");
  assert.equal(await page.getByText("Demo test fitting replaced", { exact: true }).count(), 0);
  assert.equal(await page.locator("#active-machine option").count(), 20);

  // Exercise the real local API for the scripted case; this branch makes no paid LLM call.
  await context.unroute("**/api/diagnosis");
  await page.getByRole("textbox", { name: "Describe the problem" }).fill("The tool won't release, but the air pressure looks fine. 120 PSI. John fixed this last month, but he's away. What should I check? The Power drawbar clicks.");
  await page.getByRole("button", { name: "Send message" }).click();
  await page.getByText(/Replace the restricted quick-connect air fitting/).first().waitFor();
  await page.getByRole("button", { name: "Send message" }).locator("svg.lucide-arrow-up").waitFor();
  const answer = await page.getByRole("log").innerText();
  assert.match(answer, /John's repair last month/);
  await page.screenshot({ path: ".agent/shots/oli-diagnosis-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: ".agent/shots/oli-diagnosis-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1440, height: 900 });

  await page.getByRole("link", { name: "Add ticket", exact: true }).first().click();
  await page.getByLabel("Title", { exact: true }).fill("Tool release restored — replaced air fitting");
  await page.getByLabel("Details", { exact: true }).fill("tool didnt release, air pressure OK. solution was to replace the air fitting!");
  await page.getByRole("button", { name: "Save ticket" }).click();
  await page.getByRole("link", { name: /2 matching incidents/ }).waitFor();
  await page.screenshot({ path: ".agent/shots/oli-ticket-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: ".agent/shots/oli-ticket-mobile.png", fullPage: true });
  await page.getByRole("link", { name: /2 matching incidents/ }).click();
  await page.getByRole("button", { name: /Unread: High priority, Repeat air-fitting failure/ }).click();
  await page.getByText("2 supporting incidents", { exact: true }).waitFor();
  await page.screenshot({ path: ".agent/shots/oli-prevention-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ path: ".agent/shots/oli-prevention-desktop.png", fullPage: true });
  assert.deepEqual(errors, []);
  console.log("PASS: demo seed, persistence, reset, real scripted diagnosis, fitting ticket and two-incident prevention report; desktop and mobile.");
} catch (error) {
  if (page) {
    console.error("Failed page:", page.url(), await page.locator("body").innerText());
    await page.screenshot({ path: ".agent/shots/demo-test-failure.png", fullPage: true });
  }
  throw error;
} finally {
  await browser.close();
}
