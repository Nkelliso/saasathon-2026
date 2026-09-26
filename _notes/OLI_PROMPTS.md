

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





TASK:
We need to work out an excellent question or query to ask the model during the demo.
FIRST JOB: Read through the Tormach 1100MX spec file.
SECOND JOB: Find out 5 good fake `ticket`s to write that are plausible issues to have occured. (Might want to create subagent to scrape the web?)

Go ahead and do this.
For the ticket instances: Don't instantiate them directly; instead, write them into the bottom of the OLI_PROMPTS.md file please.






TASK:
I want to create a script to populate the DB with a bunch of mock Machines.
Companies should have many machines of different types to use.

This script should be able to be ran easily such that it clears the database, and populates it with a bunch of test data robustly.
This is exceptionally foolproof, and it means that we won't demo with bad data.

OVERALL TASK:
- create a (python?) script that can be ran to clear/populate the DB. (MAKE IT ROBUST.)
- make it so it can be ran on the supabase instance, via backend key
- It should populate it with about 20 machine-instances, including 5 instances of Tormach 1100 MX CNC machines.
- ADDITIONALLY: Populate it with





In the organization-tab, add a "Add Manual" button.
This allows customers to add their own manuals. This skirts the legal liability for us, and our platform doesn't really need to change: Ingests the manuals exactly the same






TASK:
Make it so in the model-view in threeJS, you can click on a part of the GLB model.
This will zoom in with the camera, and put a little "target" or something on the model.
This selects a part; and in the future it will inform the model about which part is 






<DEMO_SCRIPT>
DEMO SCRIPT:

Consider that you are a factory manager, like Dwayne, working in Plastech.
You have a CNC machine that is working 

</DEMO_SCRIPT>



