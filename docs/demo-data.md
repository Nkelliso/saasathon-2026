# Browser demo data

Open `/machine` to start with `CNC-MX-01`. Torque automatically loads 20 machines across eight model types, including five Tormach 1100MX mills, and 43 fictional tickets. Existing valid browser additions are retained during the one-time upgrade.

Before a pitch, open `/demo` and click **Reset demo data**. This atomically replaces this browser's machines and tickets with the fixtures and clears prevention read markers. It does not require Supabase or a backend key. Reloading preserves the data; each browser/origin has its own copy. New tickets filed in the UI join the same store.

The three repairs on `CNC-MX-01` reproduce the descriptions, summaries and dates in `_notes/OLI_PROMPTS.md` under `<SPOOFED_DATA>`. `CNC-MX-03` has the two lubrication warning reports and the corresponding simulated prevention finding. Dates are fixed for a repeatable story.

Demo question: “The tool won't release, but the air pressure looks fine. 120 PSI. John fixed this last month, but he's away. What should I check? The power drawbar clicks.”

The diagnosis request includes the selected machine's notes and latest 30 tickets (full descriptions), alongside retrieved manual excerpts. Other machines' tickets are excluded. The response instructions target 80–120 words and at most three checks. The LLM needs the existing server-side `OPENAI_KEY`; data seeding works offline.

Fixtures: `src/lib/machines.ts`, `src/lib/demo-data.ts`. Persistence: `src/lib/demo-workspace.ts`, under the single localStorage key `torque-demo-workspace-v1`. Reset changes only demo fleet/tickets and prevention read markers; organization settings and documents remain intact.

Checks: `npm run test:diagnosis` checks fixture integrity, legacy migration and retrieval. `npm run test:demo` exercises browser seeding, saving, machine isolation and repeatable reset with a mocked diagnosis stream. `npm run check` checks types and lint.
