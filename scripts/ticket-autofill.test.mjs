import assert from "node:assert/strict";
import { mkdirSync } from "node:fs";
import { chromium } from "playwright";
import { ensureServer } from "./dev-server.mjs";

const baseURL = await ensureServer({ quiet: true });
const browser = await chromium.launch();
const live = process.argv.includes("--live");
mkdirSync(".agent/shots", { recursive: true });
try {
  for (const mobile of [false, true]) {
    const context = await browser.newContext({ baseURL, viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 } });
    const page = await context.newPage();
    page.setDefaultTimeout(60000);
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const description = "Tool would not release at 120 PSI. Replaced the restricted air fitting; ten tool changes passed.";
    await context.route("**/api/diagnosis", (route) => route.fulfill({ contentType: "text/event-stream", body: [
      { type: "delta", text: "Record the replaced fitting and ten successful tool changes." }, { type: "done" },
    ].map((event) => `data: ${JSON.stringify(event)}\n\n`).join("") }));
    let attempts = 0;
    await context.route("**/api/ticket-draft", async (route) => {
      const input = route.request().postDataJSON();
      assert.equal(input.machine.pk, "CNC-MX-03");
      assert.equal(input.machine.modelId, "tormach-1100mx");
      assert.equal(input.messages[0].text, description);
      if (++attempts === 1) return route.fulfill({ status: 502, json: { error: "Could not draft the ticket. Please try again." } });
      if (live) return route.continue();
      return route.fulfill({ json: { machinePk: "CNC-MX-03", kind: "REPAIR", title: "Restricted air fitting replaced", description } });
    });
    await page.goto("/machine/CNC-MX-03");
    assert.equal(await page.getByRole("button", { name: "Auto fill", exact: true }).count(), 0);
    await page.getByRole("textbox", { name: "Describe the problem" }).fill(description);
    await page.getByRole("button", { name: "Send message" }).click();
    await page.getByText("Record the replaced fitting and ten successful tool changes.", { exact: true }).waitFor();
    await page.addStyleTag({ content: "nextjs-portal { display: none !important; }" });
    await page.screenshot({ path: `.agent/shots/autofill-machine${mobile ? "-mobile" : ""}.png`, fullPage: true });
    await page.getByRole("button", { name: "Auto fill", exact: true }).click();
    await page.getByRole("alert").getByText("Could not draft the ticket. Please try again.").waitFor();
    assert.equal(await page.getByRole("log").getByText(description, { exact: true }).count(), 1);
    await page.getByRole("button", { name: "Auto fill", exact: true }).click();
    await page.waitForURL("**/ticket?machine=CNC-MX-03&draft=*");
    await page.getByText("Auto-filled from your conversation. Review and save.").waitFor();
    assert.equal(await page.getByRole("combobox", { name: "Machine", exact: true }).inputValue(), "CNC-MX-03");
    assert.equal(await page.getByRole("combobox", { name: "Ticket type" }).inputValue(), "REPAIR");
    const details = await page.getByLabel("Details", { exact: true }).inputValue();
    const title = await page.getByLabel("Title", { exact: true }).inputValue();
    assert.ok(details.trim().split(/\s+/).length <= 60);
    assert.ok(title.length > 0 && title.length <= 80);
    console.log(`${mobile ? "Mobile" : "Desktop"} draft:`, { title, details });
    await page.reload();
    await page.getByText("Auto-filled from your conversation. Review and save.").waitFor();
    assert.equal(await page.getByLabel("Details", { exact: true }).inputValue(), details);
    await page.addStyleTag({ content: "nextjs-portal { display: none !important; }" });
    await page.screenshot({ path: `.agent/shots/autofill-ticket${mobile ? "-mobile" : ""}.png`, fullPage: true });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await page.getByLabel("Title", { exact: true }).fill("Air fitting replaced — verified");
    await page.getByRole("button", { name: "Save ticket" }).click();
    await page.getByRole("heading", { name: "Ticket saved" }).waitFor();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("torque-demo-workspace-v1")).tickets[0]);
    assert.equal(saved.machinePk, "CNC-MX-03");
    assert.equal(saved.title, "Air fitting replaced — verified");
    assert.equal(saved.description, details);
    await page.getByRole("link", { name: "View machine" }).click();
    await page.getByText("Air fitting replaced — verified", { exact: true }).waitFor();
    assert.deepEqual(errors, []);
    await context.close();
  }
  const context = await browser.newContext({ baseURL });
  const unauthorized = await context.request.post("/api/ticket-draft", { headers: { Cookie: "dev-auth=off" }, data: {} });
  assert.equal(unauthorized.status(), 401);
  const invalid = await context.request.post("/api/ticket-draft", { data: { machine: { pk: "", modelId: "tormach-1100mx" }, messages: [] } });
  assert.equal(invalid.status(), 400);
  if (live) {
    const response = await context.request.post("/api/ticket-draft", { data: {
      machine: { pk: "CNC-MX-03", modelId: "tormach-1100mx" },
      messages: [{ role: "user", text: "Tool will not release at 120 PSI. I have not tried any repair yet." }, { role: "assistant", text: "A technician could inspect the air fitting." }],
    } });
    assert.equal(response.status(), 200, await response.text());
    const draft = await response.json();
    assert.equal(draft.machinePk, "CNC-MX-03");
    assert.equal(draft.kind, "EVENT");
    assert.match(draft.description, /unconfirmed/i);
    console.log("Unresolved incident:", draft);
  }
  console.log("PASS: auto fill, retry, exact machine, concise draft, refresh, edit/save, mobile layout, auth and input validation.");
} finally {
  await browser.close();
}
