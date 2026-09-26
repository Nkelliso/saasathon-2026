

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
- ADDITIONALLY: Populate it with `tickets` at the bottom 





In the organization-tab, add a "Add Manual" and "Add Schematics" button.
This allows customers to add their own manuals. This skirts the legal liability for us, and our platform doesn't really need to change: Ingests the manuals exactly the same






TASK:
Make it so in the model-view in threeJS, you can click on a part of the GLB model.
This will zoom in with the camera, and put a little "target" or something on the model.
This selects a part; and in the future it will inform the model about which part is 






<DEMO_SCRIPT>
DEMO SCRIPT:

Consider that you are a factory manager, like Dwayne, working in Plastech.
The blue CNC machine-2 has just stopped working.

Right now, the company is burning $10 every minute, because the machine isn't working!

"The tool won't release, but the air pressure looks fine. 120 PSI.
John fixed this last month, but he’s away. What should I check?
The Power drawbar clicks."

And I'm gonna just click on where the exact issue is.
Heeree we go.

And lets get our result:
Okay, great. Lets do XYZ. (beep boop beep boop.)

Okay fantastic! It's now fixed. 
Now is when we log our issue:


tool didnt release, air pressure OK. 
solution was to 

</DEMO_SCRIPT>





## Tormach 1100MX demo

Three fictional repairs for proposed machine `CNC-MX-01`, model `tormach-1100mx`. All tickets have kind `REPAIR`. Drafts only; nothing added to the database.

### Demo question

"The tool won't release, but the air pressure looks fine. 120 PSI.
John fixed this last month, but he’s away. What should I check?"



**The payoff:** Torque combines the manual's minimum 90 psi at the machine with John's repair history. A normal compressor reading can hide low pressure at the machine; the previous cause is a lead to check.



<TICKET_EXAMPLES>
### Ticket 1: Tool stuck — restricted air fitting

**Date:** 2026-09-21

**Description:** Tool would not release. Compressor read 120 psi, but pressure at the machine dropped from 94 to 72 psi during release. John replaced a restricted quick-connect on the Bay 03 air line. Pressure stayed above 90 psi and ten tool changes passed. Downtime: 38 minutes. Check machine-side pressure if this returns.

**Summary:** Replacing the restricted air fitting restored tool release.

**Source:** [Manual p. 269, §12.9.3](https://tormach.com/media/asset/u/m/um10586_1100mx_0626a.pdf#page=269): insufficient air pressure can prevent tool release.

### Ticket 2: Chatter — chip on toolholder

**Date:** 2026-09-23

**Description:** Chatter started after loading holder H07, with no program changes. Found an aluminium chip on the holder's taper. Cleaning the holder and spindle contact surfaces restored the finish. Downtime: 22 minutes. H07 had been left on a dirty bench; store holders covered and inspect before loading.

**Summary:** Removing a chip from the toolholder stopped the chatter.

**Source:** [Manual p. 268, §12.9.2](https://tormach.com/media/asset/u/m/um10586_1100mx_0626a.pdf#page=268): chips on spindle/toolholder surfaces can cause chatter.

### Ticket 3: Weak coolant — blocked pump impeller

**Date:** 2026-09-25

**Description:** Pump was running but coolant barely flowed. Tank level was normal. Found fine chips blocking the impeller and a full chip basket. Cleaning both restored flow. Downtime: 31 minutes. The previous shift had missed the tank basket; added it to the handover checklist.

**Summary:** Clearing chips restored coolant flow without replacing the pump.

**Source:** [Manual p. 244, §11.3.2](https://tormach.com/media/asset/u/m/um10586_1100mx_0626a.pdf#page=244): inspect the impeller for blockages and clean the chip strainer.

All repairs assume proper power and air isolation before maintenance. The source manual is English.

</TICKET_EXAMPLES>

