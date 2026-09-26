

I want you to spend a while finding good example machines to use.

Here are some machines we have already:
<examples>
3D models: https://tormach.com/support/mill/pcnc-1100-solid-models-and-drawings
1100MX 3D models: https://tormach.com/support/mill/1100mx-solid-models-and-drawings
Operator's manual: https://tormach.com/media/asset/u/m/um10349_pcnc1100_manual_0520a_web.pdf
All documents: https://tormach.com/support/mill/pcnc-1100-series-3-documents
</examples>

You can see examples of machines inside of `src/machines/**`. You MUST look at the folder structure, and use this exact folder structure in your work.

YOUR TASK:
- Find examples of industrials machines (preferably CNC machines) that we can showcase in our product.
REQUIREMENTS:
- They MUST have 3d-model or schematics that we can use; or a way to convert their models into a GLB file.
- They MUST have a large documentation manual (e.g. 20 pages or more) that is tedious to read through. (Bonus points if the documentation is in chinese or something; the LLM translates it)

ONCE YOU HAVE FOUND 5 MACHINES TO USE, Spin up 5 fresh subagents with fresh contexts to get these machines ready. Make sure to provide them with any information / scripts / tips on how to transform their GLB models







YOUR GOAL:
You are taking on the role of a frontend designer and an engineer.
You are to follow the exact style lined up in your system prompt.
<MAIN_PAGES>
All main-pages have a sidebar on the right, visible at all times.
Sidebar tabs:
- machine_fix
- add-ticket tab
- add-machine tab
- organization_tab
</MAIN_PAGES>

In `src/app/(app)/**`, the routes and pages have been layed out.

Your task: Create the following page.
Add as much detail as you can, make it feel good, smooth, and minimal.

This is the page you are working on:
{{PAGE}}

TASK 0: Wire up EVERYTHING you need in the backend, when it comes to data, basic workflow, LLM flows.
REMINDER, DOESN'T NEED TO PROPERLY WORK. Smoke + mirrors are best.



