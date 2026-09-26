# Tormach 24R CNC Router Operator Manual - UM10564, 0826A

> Curated reference: installation/commissioning and programming documentation has been excluded. Remaining manufacturer text is retained verbatim, including safety, operation, maintenance, repair, and troubleshooting where present. Original page/section numbering is preserved and may have gaps; any original page count describes the full source, not this excerpt. Follow references to excluded sections in the linked original manual.


Source: [https://tormach.com/media/asset/u/m/um10564_24r_0826a.pdf](https://tormach.com/media/asset/u/m/um10564_24r_0826a.pdf)

Converted from official manufacturer PDF documentation. 292 PDF pages. Language: English. PDF page numbers below include cover and front matter.

Text extracted in PDF authored order to preserve the two-column paragraphs; diagrams and some table relationships require the source PDF. This is an extraction, not a verified substitute for the illustrated manual.


---

## PDF Page 1

Original Instructions
OPERATOR'S MANUAL
Version 0826A


---

## PDF Page 2

Copyright
Notice
Information is subject to change without notice by Tormach, Inc. For the most recent version of this document,
see tormach.com/support.
You're welcome to make copies of this document for evaluating, learning about, and/or using the machine.
You may not charge for any copies you make beyond the cost of printing.
Unless otherwise noted, companies, names, and various data used in examples are fictitious.
To the Reader
We're dedicated to continually improving our documentation and products, and welcome any clarifications,
corrections, or suggestions.
Credits
Tormach®, 24R®, and PathPilot® are trademarks or registered trademarks of Tormach, Inc. Our milling
machines and accessories are covered by one or more of the following U.S. Patents: 7,386,362; D606,568;
D612,406; D621,859; and other patent(s) pending.
Other product or company names may be the trademarks of their respective owners.
Copyright © Tormach, Inc. 2026
Page 2


---

## PDF Page 3

©Tormach® 2026
Specifications subject to change without notice.
Page 3
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
IMPORTANT INFORMATION: PLEASE READ FIRST
SAVE THESE INSTRUCTIONS!
This document contains important safety warnings and
operating instructions for your machine. Before operating this
machine in any way, you and all other operators must read and
understand all instructions. If you don't, there's a risk of voided
warranty, property damage, serious injury, or death.
Keep these instructions with your machine so that they're
readily accessible.
PURPOSE AND SCOPE OF THIS DOCUMENT
This document is intended to provide sufficient information to
allow you to install, configure, and use your machine. It
assumes that you have appropriate experience and/or access
to training for any computer-aided design or manufacturing
software for use with the machine.
GETTING HELP
We provide no-cost technical support through multiple
channels. The quickest way to get the answers you need is
normally in this order:
1.
Read this document.
2.
Read related documents and watch related videos at
tormach.com/support.
3.
If you still need answers, gather the following
information so that we may help you as quickly as
possible:
l Your phone number, address, and company name (if
applicable).
l Machine model and serial number, which are located
next to the Main Disconnect switch.
l The version of PathPilot that you’re running.
l Any accessories that you have for your machine.
l A clear and concise description of the issue.
l Any supporting media and information that you can
share with us. For example, you could:
o
Analyze what might have changed since the
machine last worked correctly.
o
Record a short video.
o
Take a picture of a part.
o
For software, share log data .zip files, screen
captures, or program files.
For information, see "Share Log Data .zip Files"
(on the next page).
o
From the PathPilot interface, on the Status tab,
record any available information.
o
Use a digital multimeter for voltage readings.


---

## PDF Page 4

©Tormach® 2026
Specifications subject to change without notice.
Page 4
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4.
Once you've gathered the information in Step 3, contact
us in the following ways:
a.
Create a support ticket: Go to tormach.com/how-to-
submit-a-support-ticket
b.
Phone: (608) 849-8381 (Monday through Friday, 8
a.m. to 5 p.m. U.S. Central Standard Time)
SHARE LOG DATA .ZIP FILES
The controller keeps log data on how the machine has been
working, which you can export as a .zip file. This information
helps us troubleshoot software situations much faster.
To share log data .zip files:
1.
Put a USB drive into the PathPilot controller.
2.
From the PathPilot controller, on the Status tab, select
Log Data.
PathPilot creates a file called logdata_[TODAY'S-
DATE].zip, and saves it on your USB drive.
3.
Remove the USB drive from the controller. Create a
support ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.
LIABILITY DISCLAIMER
We've made every effort to provide comprehensive and
accurate information, but no warranty or fitness is claimed or
implied. All information provided is on an as is basis. The
authors, publisher, and Tormach, Inc. ("we", "us", and so on)
shall not have any liability for, or responsibility to, any person
or entity for any reason for any loss or damage arising from
the information contained in this document.
This document provides guidance on safety precautions and
techniques, but because the specifics of any one workshop or
other local conditions can vary greatly, we accept no
responsibility for machine performance or any damage or
injury caused by its use. It's your responsibility to verify that
you fully understand the implications of what you're doing and
comply with any legislation and codes of practice applicable to
your city, state, or nation.


---

## PDF Page 19

SAFETY
IN THIS SECTION, YOU'LL LEARN:
About the standards and safety precautions associated with this machine.
Before operating the machine in any way, you must read and understand this section.
Safe operation of the machine depends on its proper use and the precautions you take. Only trained personnel
— with a clear and thorough understanding of its operation and safety requirements — shall operate this
machine.
CONTENTS
1.1 Intended Use
20
1.2 Machine Standards
21
1.3 Safety Overview
22
1.4 Machine Safety
25


---

## PDF Page 20

1.1 INTENDED USE
This machine is intended for general-purpose, computer
numerical control (CNC) machining in the following
applications:
l Educational environments
l Hobby applications
l Light production
l Prototyping
l Research and development
l Secondary operations
The intended use includes:
l Appropriate workholding, toolholding, tooling, dust
collection systems, and machining parameters.
l Machining of wood, plastic materials, and soft, non-
ferrous metals.
The intended use does not include machining materials that:
l Are abrasive, carcinogenic, explosive, flammable,
radioactive, or toxic
l Produce aerosols or fine particulates when machined
The intended use does not include the following materials (not
a full list):
l Beryllium and its alloys
l Ceramics
l Fiberglass
l G10 fiberglass laminate
l Graphite
l Magnesium and its alloys
To safely operate products, you must obey all safety
precautions and warnings that are on the machines and in the
documentation.
©Tormach® 2026
Specifications subject to change without notice.
Page 20
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
1: SAFETY
1.1 Intended Use


---

## PDF Page 21

1: SAFETY
1.2 Machine Standards
1.2 MACHINE STANDARDS
When installed and operated as intended (see "Intended Use"
(on the previous page)), this machine complies with the
following standards. You must follow the requirements listed
in the standards so that the machine remains compliant.
1.2.1 American National Safety Institute (ANSI)
l ANSI B11.TR3-2000 Risk Assessment and Risk
Reduction — A Guideline to Estimate, Evaluate, and
Reduce Risks Associated with Machine Tools
1.2.2 Occupational Safety and Health Administration
(OSHA)
l OSHA 1910.212 General Requirements for All
Machines
©Tormach® 2026
Specifications subject to change without notice.
Page 21
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 22

1.3 SAFETY OVERVIEW
Any machine tool is potentially dangerous. A CNC machine's
automation presents added risk not present in a manual
machine.
Before operating the machine in any way, you must read and
understand this section.
l Read and understand all safety messages used in this
document.
l Locate and understand all safety decals on the machine.
l Locate and become familiar with all information decals
on the machine.
1.3.1 Safety Messages
The following examples show the standard safety message
types used to draw your attention to important information.
The standards distinguish between personal injury safety
messages and property damage warning messages.
Personal Injury
Personal injury safety messages have safety alert symbols and
the following hazard level labels:
DANGER! Indicates a hazard with a high level of risk
which, if not avoided, will result in death or serious
injury.
WARNING! Indicates a hazard with a medium level
of risk which, if not avoided, can result in death or
serious injury.
CAUTION! Indicates a hazard with a low level of risk
which, if not avoided, can result in minor or moderate
injury.
Property Damage
NOTICE! Indicates a hazard which, if not avoided, can
cause property damage.
1.3.2 Safety Decals
Before operating the machine in any way, you must read and
understand all installed safety decals on the machine and
equipment. Do not remove any safety decals. If any safety
decals become worn or damaged, contact Tormach Technical
Support for guidance on receiving replacement decals.
The following types of safety symbols are on the decals:
l Warning
This symbol indicates a hazard which, if not
avoided, can result in personal injury or property
damage.
l Prohibition
This symbol indicates an action that
shall not be taken or that shall be stopped.
l Mandatory Action
This symbol indicates an action
that you must take to avoid a hazard.
On the Electrical Cabinet Door
Figure 1-1: Example of a safety decal on the electrical
cabinet door.
1.
WARNING! Electrocution Hazard. Points in the electrical
cabinet contain high voltages, which can electrocute or
shock you, causing death or serious injury. Even after the
machine is powered off, electronic devices in the
electrical cabinet can retain dangerous electrical
voltages. Use caution when servicing the machine inside
the electrical cabinet.
2.
Lockout/Tagout. Before servicing the machine, you must
power off the machine and use an approved
lockout/tagout device to secure the Main Disconnect
switch in the OFF position. Points in the electrical
cabinet contain high voltages, which can electrocute or
shock you, causing death or serious injury.
©Tormach® 2026
Specifications subject to change without notice.
Page 22
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
1: SAFETY
1.3 Safety Overview


---

## PDF Page 23

1: SAFETY
1.3 Safety Overview
Next to the Main Disconnect
Figure 1-2: Example of a safety decal next to the Main
Disconnect.
1.
Don't Operate Unattended. Never allow the machine to
run unattended. The machine's spinning tool generates
friction and heat — chips, dust, or materials can start on
fire. Before operating the machine in any way, you must
verify that you're using the correct tools for the material.
During operations, you must be prepared to stop the cut
if something seems incorrect or unsafe.
2.
WARNING! Entanglement / Entrapment Hazard. The
machine operates under automatic control — it can start
at any time and crush, cut, entangle, or pinch body
parts. Always keep clear of positions on the machine
where unexpected or unintended machine motion could
cause harm. Before operating this machine in any way,
you must verify that all operators know the location of
the machine's Emergency Stop button.
3.
WARNING! Ejection Hazard. Fixtures, tooling,
workpieces, or other loose items can become dangerous
projectiles and can cause death or serious injury. Before
operating this machine in any way, you must verify that
you have appropriately secured all components.
4.
WARNING! Fire Hazard. The machine is not designed to
contain fire or explosions. Only use materials and
coolants that are intended for the specific machining
operation. Never use flammable or explosive items.
Before operating the machine in any way, you must read
all Safety Data Sheets (SDSs) for any workpiece
materials, coatings, coolants, lubricants, and other
consumables used.
5.
WARNING! Inhalation Hazard. The machine does not
protect you from airborne particulates. Chips, dust, and
vapors from certain materials can be toxic or otherwise
harmful. Before operating the machine in any way, you
must read all Safety Data Sheets (SDSs) for any
workpiece materials, coatings, coolants, lubricants, and
other consumables used.
6.
Personal Protective Equipment: Eyes. Prevent injury by
always wearing protective safety eyewear. Before
operating this machine in any way, you must verify that
your eyewear is impact-resistant and rated for
ANSI 787+.
7.
Personal Protective Equipment: Ears. Prevent injury by
always wearing ear protection when you expect the
machine or the machining processes to exceed safe
exposure limits.
8.
Operator Knowledge. Before operating this machine in
any way, you and all other operators must read and
understand all instructions. If you don't, there's a risk of
voided warranty, property damage, serious injury, or
death.
On the Spindle Head
Figure 1-3: Example of a safety decal on the spindle nose.
1.
WARNING! Crush Hazard. Moving parts can entangle,
pinch, or cut you, causing death or serious injury. Before
operating this machine in any way, you must verify that
all body parts, long hair, and clothes are clear of the
machine's extent of motion.
2.
WARNING! Cut Hazard. Tools and swarf can cut you.
Only hold tools by the tool holder. Before inserting or
removing tools from the machine, you must verify that
all motion is completely stopped.
©Tormach® 2026
Specifications subject to change without notice.
Page 23
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 24

On the Gantry and the Spindle Head
Figure 1-4: Example of safety decals on the spindle head.
Figure 1-5: Example of safety decals on the left side of the
machine.
WARNING! Crush Hazard. Moving parts can entangle,
pinch, or cut you, causing death or serious injury. Before
operating this machine in any way, you must verify that
all body parts, long hair, and clothes are clear of the
machine's extent of motion.
1.3.3 Information Decals
Before operating the machine in any way, you must locate and
become familiar with all installed information decals on the
machine and equipment.
Serial Number Plate
The serial number plate is on the side of the electrical cabinet,
near the Main Disconnect switch.
Figure 1-6: Example of the serial number plate on the side
of the electrical cabinet.
©Tormach® 2026
Specifications subject to change without notice.
Page 24
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
1: SAFETY
1.3 Safety Overview


---

## PDF Page 25

1: SAFETY
1.4 Machine Safety
1.4 MACHINE SAFETY
Before operating the machine in any way, you must
read and understand this section.
Safe operation of the machine depends on its proper use and
the precautions you take. Only trained personnel — with a
clear and thorough understanding of its operation and safety
requirements — shall operate this machine.
1.4.1 General Shop Safety
25
1.4.2 Operational Safety
25
1.4.3 Electrical Safety
27
1.4.1 General Shop Safety
Verify that only qualified machinery maintenance
professionals install, set up, or perform maintenance on
this machine.
Verify that a fire extinguisher is accessible to the work
area.
Verify that a proper dust collection system is installed.
Cutting certain materials (like MDF or other wood
products) can create dust, which could create a
deflagration or explosion hazard. To identify each
material's specific requirements, refer to its safety data
sheet (SDS).
For more information about the prevention of fire and
dust explosions, see nfpa.org or csb.gov.
Keep the work area well-lit. Use additional lighting if
needed. The work area should be illuminated to a
minimum of 500 lx.
Keep the work area temperature- and humidity-controlled.
Remove loose-fitting clothing, neckties, gloves, and
jewelry.
Tie up long hair and secure it under a hat.
Wear safety eye protection rated for ANSI Z87+.
Wear closed-toed safety shoes.
Wear ear protection when you expect the machine or the
machining processes to exceed safe exposure limits.
Keep the work area clean and free of clutter. Machine
motion can occur if controls are accidentally activated.
Immediately clean up spills after they occur.
Never operate the machine after consuming alcohol or
taking medication that could prevent you from safely
operating the machine.
Never operate the machine while tired or otherwise
impaired.
Never use the machine table as a workbench.
Never lean heavy materials against the gantry, guide rails,
or machine table.
Never operate the machine in an explosive (ATEX)
atmosphere. Such explosive atmospheres include
explosive gases, vapors, mists, powders, and dusts.
Never use pressurized air to clean the machine.
Never install the machine near sinks or faucets, or below
water supply pipes and plumbing. Condensation or water
splashes can damage the spoil boards or electrical
equipment.
1.4.2 Operational Safety
General
Understand that the machine is automatically controlled
and can start at any time.
Become familiar with all physical and software controls.
Always use a chip scraper or brush when clearing away
chips, oil, or coolant.
Examine all tools, fixtures, workpieces, and guarding for
signs of damage. Replace any damaged components as
soon as you find them.
Guards may not stop all types of projectiles, like broken
tools or loose workpieces.
Stop the machine and verify that all machine motion has
completely stopped before doing any of the following:
Adjusting a part, fixture, or coolant nozzle.
Removing any cut materials.
Changing tools or parts.
Clearing away chips, oil, or coolant.
Reaching into any part of the machine's motion
envelope.
Removing protective shields or safeguards.
Taking measurements.
Doing any other action inside the machine's motion
envelope.
©Tormach® 2026
Specifications subject to change without notice.
Page 25
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 26

Use flood or MQL (mist) coolant as required by the
machining operation.
Only use coolants designed for metal working applications
such as soluble oils, semi-synthetic, or synthetic coolants.
Read the Safety Data Sheet (SDS) for all workpiece
materials, coatings, coolants (flood or MQL), lubricants,
and other consumables. Chips, dust, and vapors from
certain materials can be toxic or otherwise harmful.
Understand that this product can expose you to chemicals
which are known to the State of California to cause cancer
and birth defects or other reproductive harm. For more
information, go to www.P65Warnings.ca.gov.
Dispose of scrap and swarf according to local regulations
and guidelines.
Thoroughly read all safety precautions and instructions.
When machining materials that may have sharp edges or
splinters, wear cut-resistant gloves and protective
clothing.
When machining materials that create dust, use a proper
dust collection system.
When putting heavy or large materials onto the machine
table, work with an assistant.
When machining an unproven program, use feed, speed,
and maximum velocity overrides, Distance-to-Go (DTG)
displays, single block, feed hold, and other control
features.
Follow all appropriate "Machine Standards" (page 21).
Never remove any cut materials while the machine is
running.
Never use the machine as a workbench or hammer on the
table surface.
Never enter the machining envelope.
Never reach around a guard.
Never allow the machine to run unattended.
Never put your hands on the machine's rails.
Never obstruct the Emergency Stop button or any other
controls.
Never allow untrained operators to install, operate, or
maintain the machine.
Never modify, defeat, or bypass safety devices or
interlocks.
Never machine abrasive, carcinogenic, explosive,
flammable, radioactive, or toxic materials. Such materials
include, but are not limited to:
Beryllium and its alloys
Ceramic
Fiberglass
G10 fiberglass laminate
Graphite
Lead and its alloys
Magnesium and its alloys
Never allow swarf to accumulate on or within the
machine.
Never use flammable liquids (like alcohol, diesel fuel, or
kerosene) in the machine’s coolant system.
Never use water, coolants without rust inhibitors, or
straight cutting oil in the machine’s coolant system.
Tooling
Use appropriate speeds, feeds, and cutting parameters for
your machine, machine operation, material, and tooling.
Use tools and tool holders that are suitable for the current
operation.
Examine tools for signs of damage. Replace any damaged
tools as soon as you find them.
Guards may not stop all types of projectiles, like broken
tooling.
Never use unbalanced tooling or spindle fixtures.
Never use tools that are larger or longer than necessary.
Never use tools at speeds above their operational limits.
Never use dull or gummy tools.
Workholding
Secure workpieces with appropriate workholding devices.
Verify that the workpiece is adequately secured.
Position clamps and workholding devices clear of any tool
paths.
Remove cutoff workpieces and other large chips before
starting the machine.
Never leave tools, stock, or other loose items inside the
machine.
Never use your hands to hold the workpiece during
machining operations.
©Tormach® 2026
Specifications subject to change without notice.
Page 26
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
1: SAFETY
1.4 Machine Safety


---

## PDF Page 27

1: SAFETY
1.4 Machine Safety
1.4.3 Electrical Safety
WARNING! Electrical Shock Hazard: You must power
off the machine before making any electrical
connections. If you don't, there's a risk of
electrocution or shock.
Power off the machine before servicing.
Use an approved lockout/tagout system to secure the
machine's Main Disconnect in the OFF position before
servicing the machine.
Understand that certain electrical components can retain
dangerous electrical voltages, even after the machine is
powered off and all power is removed from the system.
Understand that certain installation, maintenance, and
troubleshooting procedures — for the machine and certain
accessories — require access to or modification of wiring
inside of the electrical cabinet. Only qualified electrical
machinery technicians shall perform these procedures.
Confirm that the mains voltage conforms to requirements
before connecting the machine.
For more information, see "Electrical and Power
Requirements" (page 36).
Confirm that the machine installation meets all codes and
regulations of your locality.
Confirm that electrical connections are performed by a
certified electrician.
Lock the electrical cabinet door and remove the keys when
the machine is not being serviced to prevent unqualified or
unauthorized personnel from accessing the electrical
cabinet.
Never operate the machine with the electrical cabinet
door open.
Never reach into the electrical cabinet with the machine
powered on.
Never modify the machine's electronics.
Never drill into the electrical cabinet.
©Tormach® 2026
Specifications subject to change without notice.
Page 27
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 28

[No extractable text; see original PDF page.]


---

## PDF Page 29

ABOUT YOUR MACHINE
IN THIS SECTION, YOU'LL LEARN:
About this machine's specifications.
CONTENTS
2.1 Performance Expectations
30
2.2 Machine Specifications
31


---

## PDF Page 30

2.1 PERFORMANCE EXPECTATIONS
2.1.1 Cutting Performance
This machine is capable of cutting a wide variety of materials
(for information, see "Intended Use" (page 20)) at or near
their recommended feeds and speeds. Make sure that your
workpiece is held as rigidly as possible and use the most rigid
tooling available for roughing cuts. Verify that the
programmed operations do not exceed the available spindle
power.
l Spindle Speed Range 10,000 rpm to 24,000 rpm
l Spindle Power Rating 2 hp (1.5 kW)
l Maximum Feed Rate 200 IPM (5.0 m/min)
2.1.2 Resolution and Accuracy
Accuracy is heavily influenced by the techniques that the
machinist uses. A skilled machinist can deliver accuracy that
exceeds the specified accuracy from the manufacturer; an
inexperienced machinist may have difficulty delivering the
specified accuracy. We can't predict operator accuracy, but the
specified accuracy is an important reference point.
l Resolution 0.00025" (0.006 mm)
Note: The resolution of motion is the minimum
discrete positional move.
l Ball Screw Positional Accuracy ±0.002 in./ft (±50
micron/300 mm)
l Repeatability ±0.001" (±0.0254 mm)
©Tormach® 2026
Specifications subject to change without notice.
Page 30
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
2: ABOUT YOUR MACHINE
2.1 Performance Expectations


---

## PDF Page 31

2: ABOUT YOUR MACHINE
2.2 Machine Specifications
©Tormach® 2026
Specifications subject to change without notice.
Page 31
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
2.2 MACHINE SPECIFICATIONS
Travels
X-Axis
24.75" (628 mm)
Y-Axis
55.75" (1416 mm)
Z-Axis
6.7" (170 mm)
Spindle
Spindle Power
2 hp (1.5 kW)
Spindle Type
Electrospindle With Reverse
Minimum Speed
10,000 rpm
Maximum Speed
24,000 rpm
Cooling
Liquid
Spindle Taper
ER20
Thread Machining
Thread Mill
Maximum Feed Rate
X-, Y-, and Z-Axis
200 IPM (5.0 m/min)
Power
Primary Power Required
Single-Phase 115 Vac, 50/60 Hz
Recommended Circuit Amperage
Dedicated 15 A breaker
Machine Specifications
Table Size
26.7" × 65" (680 mm × 1651 mm)
Table Type
Integrated Vacuum Table
Gantry Clearance
6" (154 mm)
Machine Footprint
71" × 39" (1.8 m × 1 m)
Overall System Height
77" (1.9 m)
Typical System Weight
900 lb (408 kg)
Linear Motion Components
Axis Motor
Stepper Driven
Guideways
Precision Linear Guideway
Ball Screw Diameter
16 mm
Machine Construction
Stand
Welded Steel
Machine Base
Cast Iron


---

## PDF Page 32

2: ABOUT YOUR MACHINE
2.2 Machine Specifications
©Tormach® 2026
Specifications subject to change without notice.
Page 32
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Gantry Bridge
Aluminum
Gantry Supports
Aluminum
Controller
Control System
PathPilot (v2.4.x or newer)
Resolution and Accuracy
Resolution
0.00025" (0.006 mm)
Ball Screw Positional Accuracy
±0.002 in./ft (±50 micron/300 mm)
Repeatability
±0.001" (±0.0254 mm)


---

## PDF Page 33

SITE REQUIREMENTS
IN THIS SECTION, YOU'LL LEARN:
About the site requirements of this machine (including electrical and power requirements).
Before operating the machine in any way, you must read and understand this section.
CONTENTS
3.1 General Site and Space Requirements
34
3.2 Electrical and Power Requirements
36


---

## PDF Page 34

3.1 GENERAL SITE AND SPACE REQUIREMENTS
When choosing a location for your machine, you must verify
that it meets all requirements outlined in this section.
3.1.1 Site Requirements
You must verify that the area:
l Allows for unrestricted access to machine controls.
l Conforms to the following:
o
Primary Power Required Single-Phase 115 Vac,
50/60 Hz
o
Recommended Circuit Amperage Dedicated 15 A
breaker
Note: For more information, see "Electrical and
Power Requirements" (page 36).
l Has a fire extinguisher within the work area.
l Has a dust collection system installed and operational.
l Has one continuous slab sufficient to support the weight
of the machine, accessories, and any additional
equipment.
l Is a dry, properly ventilated, and well-lit internal space
that conforms to the following temperature and
humidity requirements:
o
Operating Temperature Range 40°F-100°F (5°C-
38°C)
o
Humidity Range 5%-95% (non-condensing)
l Provides for unobstructed machine motion and
operation.
3.1.2 Space Requirements
The area must meet the following space requirements. Allow
more space to access the rear of the machine for maintenance
and repairs.
l Machine Size 71" × 39" (1.8 m × 1 m)
l Machine Height 77" (1.9 m)
Figure 3-1: Dimensions of the machine itself, as
viewed from the front.
l Typical System Footprint 119" × 71" (3 m × 1.8 m)
Figure 3-2: Dimensions of the machine and it's
required added space, as viewed from above.
3.1.3 Operator Workstation Reference
The typical operator workstation is the area in front of the
PathPilot controller, as shown in the following image.
Figure 3-3: Example of the typical operator workstation.
©Tormach® 2026
Specifications subject to change without notice.
Page 34
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
3: SITE REQUIREMENTS
3.1 General Site and Space Requirements


---

## PDF Page 35

3: SITE REQUIREMENTS
3.1 General Site and Space Requirements
For information on the machine controls, go to "System
Basics" (page 79).
©Tormach® 2026
Specifications subject to change without notice.
Page 35
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 36

3.2 ELECTRICAL AND POWER REQUIREMENTS
You must verify that the site conforms to the following
electrical and power requirements.
3.2.1 Electrical Requirements
A certified electrician must make all electrical connections,
and it's your responsibility to verify that the electrical
installation of the machine meets all local regulations and
electrical codes.
l Primary Power Required Single-Phase 115 Vac, 50/60
Hz
l Recommended Circuit Amperage Dedicated 15 A
breaker
3.2.2 Power Requirements
If the site conforms to the electrical requirements, verify that
it meets the following power requirements:
l No Electrical Noise Primary power must be provided
by a dedicated circuit, which must be isolated from
electrically-noisy devices like welders or plasma torches.
The machine should be isolated from inductive loads
from items like vacuum cleaners, air compressors, or
dust collectors.
Note: You must use a separate circuit breaker
for the required dust collector.
l No Ground Fault Circuit Interrupter Power for the
machine must not be protected by a ground fault circuit
interrupter (GFCI), as it interferes with the operation of
the variable frequency drive (VFD) spindle controller.
l Proper Grounding You must properly ground the
power input to the machine. Examine the continuity
between bare metal on the machine frame and true
earth ground (a water pipe or similar) to verify that it's
properly grounded.
l Correct Plug Pattern The machine is shipped with a
NEMA 5-15P plug, designed for use with a NEMA 5-15R
receptacle.
©Tormach® 2026
Specifications subject to change without notice.
Page 36
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
3: SITE REQUIREMENTS
3.2 Electrical and Power Requirements


---

## PDF Page 79

SYSTEM BASICS
IN THIS SECTION, YOU'LL LEARN:
About the main components of the machine and how it moves.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
5.1 System Reference
80
5.2 Basic Controls Reference
81
5.3 Connectors Reference
82


---

## PDF Page 80

5.1 SYSTEM REFERENCE
To operate your machine, you must become familiar with the
components of its system.
5.1.1 Machine Table
The machine table is 26.7" × 65" (680 mm × 1651 mm). It's a
hybrid design that allows you to use:
l Vacuum fixturing (primary)
l Spoilboard fixturing
l Interchangeable pallets
There are three vacuum zones, each with a pair of dowel pins
(which are 6 mm in diameter), and an M8 bolt pattern. Use
the dowel pins to align pallets and fixtures to the surface of
the machine table; use the M8 holes to fasten pallets, fixtures,
or spoilboards to the machine table.
NOTICE! Don't use the last 6 in. of phenolic table at the
Y+ end of the machine as a working or load-bearing
surface. If you do, it could cause damage to the phenolic
table.
5.1.2 Spindle
The machine spindle uses an ER20 collet electrospindle.
l Spindle Power 2 hp (1.5 kW)
l Minimum Speed 10,000 rpm
l Maximum Speed 24,000 rpm
About the Spindle
The machine spindle gives power to the cutting tool, which
allows it to remove material from the workpiece. The spindle
is driven by the spindle motor.
Operate the spindle either manually or by G-code commands
(entered in the MDI Line DRO field or programmed into a G-
code program).
5.1.3 Axes
The machine has three linear axes of motion used for
machining:
l The X-axis, which is (horizontally) along the width of the
gantry.
l The Y-axis, which is (horizontally) along the length of the
machine table.
l The Z-axis, which is (vertically) along the Z-axis linear
rail plate.
Figure 5-1: Axes directions on the machine.
Each axis has a different limit of travel, which is the distance it
moves from its reference position (G53) before reaching a soft
limit:
l X-Axis 24.75" (628 mm)
l Y-Axis 55.75" (1416 mm)
l Z-Axis 6.7" (170 mm)
©Tormach® 2026
Specifications subject to change without notice.
Page 80
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
5: SYSTEM BASICS
5.1 System Reference


---

## PDF Page 81

5: SYSTEM BASICS
5.2 Basic Controls Reference
5.2 BASIC CONTROLS REFERENCE
To safely and effectively operate your machine, you must
become familiar with how it moves. The machine has two
forms of basic controls: machine controls and the PathPilot
interface.
5.2.1 Machine Controls
The following controls energize the machine's control
electronics:
l The Main Disconnect switch, located on the left end of
the electrical cabinet.
The Main Disconnect switch has two positions: OFF and
ON. When it's in the OFF position, it separates the other
machine control electronics from the mains electrical
supply. When it's in the ON position, the other machine
control electronics are able to receive power.
WARNING! Before opening the electrical
cabinet for maintenance or troubleshooting,
you must lockout the mains power: Turn the
Main Disconnect switch to the OFF position,
and secure an approved lockout device through
the lockout rings at the bottom of the switch.
l The blue Reset button and the red Emergency Stop
button, located on the keyboard table (on the Controller
Arm).
When pushed in, the Emergency Stop button interrupts
power to the spindle and axis drives, and stops the
machine’s motion. When the Emergency Stop button is
twisted out, press the Reset button to enable the
machine, allowing spindle and axis motion. The Reset
button’s LED turns on when the machine is enabled and
the spindle and axis drives receive power.
5.2.2 PathPilot Interface
PathPilot is the primary means by which you interact with your
machine. PathPilot controls all of the automatic motion of the
machine axes and spindle, as well as some accessories. The
PathPilot control system consists of:
l Controller and Monitor Shows the PathPilot interface
(monitor, touch screen, or integrated console display)
l Input Devices Keyboard and mouse for navigation and
data entry
l Manual Control Jog pendant or jog shuttle for manual
axis movement
The specific hardware configuration depends on your machine
model.
©Tormach® 2026
Specifications subject to change without notice.
Page 81
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 82

5.3 CONNECTORS REFERENCE
l A-Axis Motor Connector On the front right end of the
electrical cabinet.
Figure 5-2: A-axis motor connector on the machine.
The A-axis motor connector is used to connect to a rotary
4th axis (used for indexing or continuous 4th axis
machining).
l Accessory Input (2x)
o
Accessory Input 1 On the operator side of the rear
Z-axis cover.
o
Accessory Input 2 Below the Main Disconnect
switch on the electrical cabinet.
Figure 5-3: Accessory input ports on the machine.
The two accessory inputs are used to connect
accessories (like probes, tool setters, and tool touch
plates) to the machine.
l Accessory Power Port (2x) On the front right end of
the electrical cabinet.
Figure 5-4: Accessory power ports on the machine.
The two IEC-320 accessory power ports are used to
supply power to peripheral accessories (like the PathPilot
controller and monitor). These outlets output 115 Vac
±10%.
l Chiller Alarm Input On the side of the left end of the
electrical cabinet.
Figure 5-5: Chiller alarm input on the machine.
The chiller alarm input connects the alarm status
feedback from the spindle chiller to the machine control
system. This feedback allows the machine control
system to stop the spindle from running while the chiller
isn't working.
©Tormach® 2026
Specifications subject to change without notice.
Page 82
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
5: SYSTEM BASICS
5.3 Connectors Reference


---

## PDF Page 83

5: SYSTEM BASICS
5.3 Connectors Reference
l Compressed Air Line At the back end of the machine
underneath the phenolic table.
Figure 5-6: Compressed air line on the machine.
The compressed air line is used to supply accessories
and components with compressed air.
l Controller Communications Port On the front right
end of the electrical cabinet.
Figure 5-7: Controller communications port on the
machine.
The controller communications port is used to connect
the PathPilot controller to the machine. The controller
communications port (and the cable that connects to it)
sends all communication between the PathPilot
interface and the machine.
l Emergency Stop Input On the front right end of the
electrical cabinet.
Figure 5-8: Emergency stop input on the machine.
©Tormach® 2026
Specifications subject to change without notice.
Page 83
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 84

[No extractable text; see original PDF page.]


---

## PDF Page 85

PATHPILOT INTERFACE
OVERVIEW
IN THIS SECTION, YOU'LL LEARN:
How PathPilot is organized, and where you can access each tool or feature.
CONTENTS
6.1 About PathPilot
86
6.2 Notebook Section
87
6.3 Persistent Controls
90
6.4 Keyboard Shortcuts
92
6.5 Manage PathPilot Versions
93


---

## PDF Page 86

6.1 ABOUT PATHPILOT
PathPilot is a combination hardware and software system that
you use to control your machine. The controller hardware runs
the PathPilot software.
The PathPilot interface is divided into sections: the Notebook
section is in the top half of the screen, and the Persistent
Controls section is in the bottom half.
Figure 6-1: Sections in the PathPilot interface.
©Tormach® 2026
Specifications subject to change without notice.
Page 86
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.1 About PathPilot


---

## PDF Page 87

6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section
6.2 NOTEBOOK SECTION
Figure 6-2: Notebook section.
The areas displayed in the Notebook section change depending
on the activity that you're doing. Activities are grouped into the
following tabs:
6.2.1 Main Tab
87
6.2.2 File Tab
87
6.2.3 Settings Tab
87
6.2.4 Offsets Tab
88
6.2.6 Probe/ETS Tab
88
6.2.7 Status Tab
88
6.2.1 Main Tab
Figure 6-3: Main tab.
By default, the Main tab is active when you power on the
PathPilot controller. From the Main tab, you can do the
following activities:
l Access G-code files that are already loaded into
PathPilot, and open or close them.
For information, see "Access Recent G-Code Files"
(page 97); "Close the Current Program" (page 97).
l Send G-code commands directly to the machine using
the Manual Data Input (MDI) Line DRO field.
For information, see "Manually Enter Commands"
(page 138).
l In a G-code program, do tasks like finding specific terms
in the code, reading the code, or viewing the generated
tool path.
For information, see "Search in the Code" (page 99);
"Expand the G-Code Tab" (page 98); "Change the View
of the Tool Path Display" (page 100).
l Make and restore backup files of your settings.
For information, see "Create Backup Files" (page 144);
"Restore Backup Files" (page 145).
6.2.2 File Tab
Figure 6-4: File tab.
From the File tab, you can do the following activities:
l Transfer G-code files into the PathPilot controller.
For information, see "Transfer Files to and From the
Controller" (page 96).
l Edit G-code files.
For information, see "Edit G-Code" (page 97).
l Load .nc files into PathPilot to run a program.
For information, see "Load G-Code" (page 154).
l Move files within the system.
For information, see "Preview G-Code Files" (page 96);
"Manage System Files" (page 144).
6.2.3 Settings Tab
Figure 6-5: Settings tab.
From the Settings tab, you can do the following activities:
l Change the network name with which you're using
PathPilot.
For information, see "Change the Network Name"
(page 112).
©Tormach® 2026
Specifications subject to change without notice.
Page 87
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 88

l Change the screen's layout orientation (landscape or
portrait).
For information, see "Change the Screen Orientation"
(page 113).
l Configure PathPilot for the accessories you're using.
For information, see "Enable the On-Screen Keyboard"
(page 115); "Enable the USB M-Code I/O Interface Kit"
(page 116); "Use a USB Camera" (page 117).
l Specify the way in which you want to use a G30 move.
For information, see "Limit G30 Moves" (page 115).
l Identify the available G-code modes that you can use.
For information, see "View Available G-Code Modes"
(page 129).
6.2.4 Offsets Tab
Figure 6-6: Offsets tab.
From the Offsets tab, you can do the following activities:
l Import and export .csv files of your tool table.
For information, see "Import and Export the Tool Table"
(page 146).
l Work with a table of tool descriptions and tool offsets.
For information, see "Set Tool Length Offsets"
(page 156).
l Use an Electronic Tool Setter (ETS) to measure tools.
For information, see Use an to Measure Tools.
l Preset a G30 position.
For information, see "Use a G30 Position" (page 138).
l Read the currently programmed work offsets.
For information, see "View Work Offsets" (page 129).
6.2.6 Probe/ETS Tab
Figure 6-8: Probe tab.
From the Probe tab, you can do the following activities:
l Configure and control a probe to help perform certain
functions.
For information, see "Use a Probe with PathPilot"
(page 120).
l Configure and control an Electronic Tool Setter (ETS) to
help perform certain functions.
For information, see "Use an Electronic Tool Setter (ETS)
to Measure Tools" (page 158).
6.2.7 Status Tab
Figure 6-9: Status tab.
From the Status tab, you can do the following activities:
©Tormach® 2026
Specifications subject to change without notice.
Page 88
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section


---

## PDF Page 89

6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section
l View diagnostic machine information.
l Read error messages.
l Configure your internet connection.
For information, see "Enable an Internet Connection"
(page 112).
l Update or install a previous version of PathPilot.
For information, see "Manage PathPilot Versions"
(page 93).
©Tormach® 2026
Specifications subject to change without notice.
Page 89
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 90

6.3 PERSISTENT CONTROLS
Figure 6-10: Persistent Controls section.
The areas that display in the Persistent Controls section don't
change (unlike the Notebook section). They display regardless
of the activity you're doing. Activities are grouped into the
following areas:
6.3.1 Program Control Area
90
6.3.2 Position Status Area
90
6.3.3 Manual Control Area
90
6.3.1 Program Control Area
Figure 6-11: Program Control area.
From the Program Control area, you can do the following
activities either before starting or while running a G-code
program:
l Reset the machine.
For information, see "Bring the Machine Out of Reset"
(page 149).
l Start, stop, or pause a G-code program.
For information, see "Start a Program" (page 132); "Stop
Machine Motion" (page 132); "Use the Feed Hold
Function" (page 134).
l Use overrides to change the feed rate, spindle speed,
and maximum velocity.
For information, see "Use the Feed Rate Override
Function" (page 134); "Use the Maxvel Override
Function" (page 135); "Use the Spindle Override
Function" (page 136).
l Manually control a G-code program.
For information, see "Use M01 Break Mode" (page 135);
"Use Single Block Mode" (page 136).
6.3.2 Position Status Area
Figure 6-12: Position Status area.
From the Position Status area, you can do the following
activities either before starting or after running a G-code
program:
l Reference the machine axes.
For information, see "Reference the Machine"
(page 150).
l Create work offsets.
For information, see "Set Work Offsets" (page 161).
l Understand how you're jogging the machine.
For information, see "View the Active Axis to Jog"
(page 130); "View the Current Machine Position"
(page 131); "View the Distance to Go" (page 133).
l Quickly determine which G-code modes are active.
For information, see "View the Active G-Code Modes"
(page 132).
6.3.3 Manual Control Area
Figure 6-13: Manual Control area.
From the Manual Control area, you can do the following
activities either before starting or after running a G-code
program:
l Move the machine axes.
For information, see "Jog the Machine" (page 151).
©Tormach® 2026
Specifications subject to change without notice.
Page 90
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.3 Persistent Controls


---

## PDF Page 91

6: PATHPILOT INTERFACE OVERVIEW
6.3 Persistent Controls
l Change the spindle speed or feed rate.
For information, see "Change the Spindle Speed"
(page 137); "Change the Feed Rate" (page 137).
l View or edit information about the current tool.
For information, see "Change the Tool Number"
(page 137); "Use a G30 Position" (page 138) "View the
Tool Length" (page 138).
©Tormach® 2026
Specifications subject to change without notice.
Page 91
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 92

6.4 KEYBOARD SHORTCUTS
The following table lists the keyboard shortcuts in PathPilot.
Keyboard
Shortcut
Use to...
Alt+Enter
Use the Manual Data Input (MDI) Line
DRO field
Alt+R
Start a program
Esc
Stop a program
Space Bar
Feed hold the machine
©Tormach® 2026
Specifications subject to change without notice.
Page 92
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.4 Keyboard Shortcuts


---

## PDF Page 93

6: PATHPILOT INTERFACE OVERVIEW
6.5 Manage PathPilot Versions
6.5 MANAGE PATHPILOT VERSIONS
You don't need to install updates sequentially. You can update
from any previous version to the current version of PathPilot.
Depending on what you want to do, refer to the following
sections:
l "Download and Install an Update File from the
Controller" (below)
l "Install an Update File from a USB Drive" (below)
l "Install a Previous Version of an Update File" (on the
next page)
6.5.1 Download and Install an Update File from the
Controller
1.
Confirm that the PathPilot controller is powered on and
out of Reset mode.
2.
Downloading and installing an update file requires an
Internet connection. From the Status tab, confirm that
the Internet button LED light is on. (To configure the
network, select the LED light.) Then, select Update.
Figure 6-14: Update button on the Status tab.
3.
From the Software Update dialog box, select Check
Online.
Figure 6-15: Software Update dialog box.
4.
Select Install.
Figure 6-16: Install button on the Software Update
dialog box.
The update file is downloaded, and a notification dialog
box displays.
5.
From the dialog box, select OK.
The update file is installed on the PathPilot controller.
6.
Follow the on-screen instructions to restart the PathPilot
controller.
6.5.2 Install an Update File from a USB Drive
1.
From the PathPilot support center, download the most
recent PathPilot update file.
2.
Transfer the PathPilot update file to a USB drive.
3.
Put the USB drive into the PathPilot controller.
4.
Confirm that the PathPilot controller is powered on and
out of Reset mode.
5.
From the Status tab, select Update.
Figure 6-17: Update button on the Status tab.
6.
From the Software Update dialog box, select Browse.
Figure 6-18: Software Update dialog box.
©Tormach® 2026
Specifications subject to change without notice.
Page 93
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 94

7.
From the Browse dialog box, select USB.
Figure 6-19: Browse dialog box.
8.
Select the desired update file, and then select Update.
The update file is installed on the PathPilot controller.
9.
Follow the on-screen instructions to restart the PathPilot
controller.
6.5.3 Install a Previous Version of an Update File
1.
Confirm that the PathPilot controller is powered on and
out of Reset mode.
2.
From the Status tab, select Update.
Figure 6-20: Update button on the Status tab.
3.
From the Software Update dialog box, select Browse.
Figure 6-21: Software Update dialog box.
4.
From the Browse dialog box, select Previous Versions.
Figure 6-22: Browse dialog box.
5.
Select the desired update file, and then select Update.
The update file is installed on the PathPilot controller.
6.
Follow the on-screen instructions to restart the PathPilot
controller.
©Tormach® 2026
Specifications subject to change without notice.
Page 94
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.5 Manage PathPilot Versions


---

## PDF Page 95

PATHPILOT TOOLS AND
FEATURES
IN THIS SECTION, YOU'LL LEARN:
How to use PathPilot, depending on the activity that you want to do.
CONTENTS
7.1 Create and Load G-Code Files
96
7.2 Machine Settings and Accessories
112
7.3 Set Up G-Code Programs
120
7.4 Run G-Code Programs
130
7.5 Control G-Code Programs
134
7.6 System File Management
144


---

## PDF Page 96

7.1 CREATE AND LOAD G-CODE FILES
To get started with PathPilot, you must first load or create a G-
code file.
7.1.1 Load G-Code
96
7.1.3 Read G-Code
98
7.1.1 Load G-Code
To run a G-code program on a PathPilot controller, you must
first verify that the file is on the controller. For more
information on transferring and moving files, see "Transfer
Files to and From the Controller" (below).
To load G-code:
1.
From the File tab, in the Controller Files window, select
the desired .nc file.
2.
Select Load.
Figure 7-1: Controller Files window on the File tab.
Note: This function is only available for files
stored on the PathPilot controller.
PathPilot loads the G-code file and opens the Main tab.
Transfer Files to and From the Controller
To run a G-code program, you must transfer the files to the
PathPilot controller. You can either use a USB drive or PathPilot
HUB (our cloud-based simulator) to transfer files. For more
information on PathPilot HUB, go to hub.pathpilot.com.
To transfer files to and from the controller:
1.
Either insert a USB drive into any open USB port, or sign
in to PathPilot HUB.
2.
From the File tab, select the file to transfer (either in the
USB / HUB Files window or the Controller Files
window).
Figure 7-2: File tab.
Note: Select Back to move backward and either
Home or USB to move to the highest level.
3.
Select the location to which you want to copy the
transferred file.
4.
Select either Copy ←or Copy →.
Figure 7-3: File tab.
Note: The file must have a unique name. If it
doesn't, you must either overwrite the file,
rename the file, or cancel the file transfer.
5.
If you're using a USB drive, select Eject.
It's safe to remove the USB drive from the controller.
Preview G-Code Files
You can preview an .nc file that's either on the PathPilot
controller or on a USB drive.
To preview G-code files:
From the File tab, in the Controller Files window or the
USB Files window, select an .nc file.
The text displays in the Preview window.
©Tormach® 2026
Specifications subject to change without notice.
Page 96
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 97

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
Figure 7-4: File tab.
Access Recent G-Code Files
You can load a recently loaded G-code file from the Main tab.
For information, see "About the G-Code Tab" (on the next
page).
To access recent G-code files:
1.
From the Main tab, in the G-Code tab, select the Recent
Files menu.
Figure 7-5: Recent Files menu on the Main tab.
The last five program files loaded into PathPilot display.
2.
Select the name of the desired G-code program.
The G-code program loads.
Close the Current Program
1.
From the Main tab, on the G-Code tab, select the Recent
Files menu.
2.
Select Clear Current Program.
Figure 7-6: Recent Files menu on the Main tab.
The currently loaded G-code program closes.
---

## PDF Page 98

7.1.3 Read G-Code
Once your G-code file is loaded into PathPilot, you can read it
in the following ways:
Expand the G-Code Tab
98
Search in the Code
99
Set a New Start Line
99
Change the View of the Tool Path Display
100
Expand the G-Code Tab
You can change the size of the G-Code tab if you need more
space to view the code. For more information on using the G-
Code tab, see "About the G-Code Tab" (below).
To expand the G-Code tab:
Select the Window Expander.
Figure 7-9: Window Expander on the Main tab.
The Tool Path display shrinks.
About the G-Code Tab
The G-Code tab displays the code of the currently loaded
program file. Use the scroll bars to view the entire file. You
©Tormach® 2026
Specifications subject to change without notice.
Page 98
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 99

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
can make the G-Code tab larger. For information, see "Expand
the G-Code Tab" (on the previous page).
PathPilot highlights certain lines of code of interest. When
running a G-code program in single block mode, there may be
as many as two lines of G-code highlighted, both with a
different color:
l Green Line Indicates the start line (the line from which
PathPilot starts the program).
To change the start line, go to "Set a New Start Line"
(below).
l Orange Line Indicates the line of code that PathPilot is
currently executing.
Search in the Code
You can use PathPilot to search the text of a G-code program
file for specific numbers, codes, or other items of interest (like
tools, feeds, and speeds).
To search in the code:
1.
From Main tab, on the G-Code tab, select any line of
code to use as a starting point.
2.
In the MDI Line DRO field, type FIND followed by one of
the following:
l Any text. PathPilot searches for instances of the
specific number or code.
Figure 7-10: Search for a text command.
l FEED. PathPilot searches for instances of the actual
word Feed and any F G-code command.
Figure 7-11: Search for a feed command.
l SPEED. PathPilot searches for instances of the actual
word Speed and any S G-code command.
l TOOL. PathPilot searches for instances of the word
Tool and any T G-code command.
Note: The find command is not case-
sensitive.
3.
Select the Enter key.
If PathPilot finds the information, the searched term is
scrolled to and highlighted in the G-Code tab.
4.
(Optional) Select Enter.
PathPilot finds the next instance of the searched text.
5.
(Optional) Select Enter+Shift.
PathPilot finds the previous instance of the searched
text.
Note: When the search reaches the end of the
G-code file, it starts again from the beginning.
Set a New Start Line
The start line (the line from which PathPilot starts the
program) is, by default, the first line of code in the program.
To set a new start line:
1.
From the Main tab, on the G-Code tab, do one of the
following:
©Tormach® 2026
Specifications subject to change without notice.
Page 99
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 100

l Right-click any line in the program.
Figure 7-12: Accessing the Options menu by right-
clicking.
l Tap the line. Then, select the Options
menu.
2.
Select the desired lead-in move. For information, see
"Lead-In Moves" (below).
Lead-In Moves
l Set start line (no preparation) Keep the current tool in
the spindle, with the current tool length applied. The
machine executes the start line from the current
position.
Note: We don't recommend this option for
starting partway through a cut.
E X A M P L E
o
Starting the program at a tool change.
o
Starting the program with a different tool in
the spindle than the program calls for (like if
your tool broke, which you've replaced, but
you'd rather not edit the entire program or the
tool table entry).
l Set start line (restore with linear lead-in) Perform a
tool change (as required). The machine rapids in X and Y,
then Z to the current position, then feeds in a straight
linear line to the start line position.
Note: This option assumes that the current
position is the lead-in position.
E X A M P L E
Quickly resuming work after stopping the program
to make an adjustment to the machine setup (like
clearing chips, removing an object, or turning on
the coolant pump). Because the machine's already
set up, you can position the tool near the stopping
point.
l Set start line (restore with Z plunge lead-in)
Perform a tool change (as required). The machine rapids
in Z to G30 clearance height, rapids in X and Y to the
start line position, then feeds in Z to the start line
position.
E X A M P L E
Running a sub-section of a large program when
the correct tool isn't loaded (and positioning the
tool tip near the starting point is difficult, like with
a long tool loaded). This option doesn't require
you to jog to the exact lead-in position.
Change the View of the Tool Path Display
1.
From the Main tab, do one of the following:
l Right-click the Tool Path display.
Figure 7-13: Tool Path display on the Main tab.
l Select the View Options tab.
Figure 7-14: View Options tab on the Main tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 100
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 101

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
2.
Select a new view.
For information, see "About the Tool Path Display"
(below).
About the Tool Path Display
The Tool Path display is a graphical representation of the
currently loaded G-code file's tool path.
There are four available views:
l Front
l Iso
l Side
l Top
You can see grid lines behind the tool path while you are using
either a Top, Front, or Side view. Depending on which
programming mode you're in (G20 or G21), PathPilot defaults
to one of the following grid line spacings:
l G20 Mode 1/2 in. intervals
l G21 Mode 10 mm intervals
In the Tool Path display, there are four different line types:
l Dotted Blue Lines Indicate the boundary box (the ends
of travel of the axes).
l Red Lines Indicate the tool path as it is cut.
Note: The Tool Path display shows the program
extents — the furthest points to which the tool
will travel while running the program — of the
currently loaded G-code file alongside the tool
path lines.
l White Lines Indicate the preview lines.
l Yellow Lines Indicate the jogging moves.
To erase the jogging moves (yellow line) or the tool path (red
lines), do one of the following:
l Double-click anywhere in the Tool Path display.
l Select Reset.
---

## PDF Page 112

7.2 MACHINE SETTINGS AND ACCESSORIES
Before running a G-code program, you must first make sure
that the machine settings are properly configured.
7.2.1 Enable an Internet Connection
112
7.2.2 Change the Network Name
112
7.2.3 Change the Screen Orientation
113
7.2.4 Disable Limit Switches
114
7.2.5 Limit G30 Moves
115
7.2.6 Enable the On-Screen Keyboard
115
7.2.7 Enable the USB M-Code I/O Interface Kit
116
7.2.8 Enable Tooltips
116
7.2.10 Specify Probing and Tool Measuring Options
116
7.2.11 Use a USB Camera
117
7.2.1 Enable an Internet Connection
If desired, you can enable an internet connection on your
PathPilot controller. An internet connection allows you to
receive automatic PathPilot updates and transfer files with
PathPilot HUB instead of a USB drive.
To enable an internet connection:
1.
From the PathPilot interface, on the Status tab, select
Internet.
Figure 7-26: Internet button on the Settings tab.
The Network Configuration dialog box displays.
Figure 7-27: Network Configuration dialog box.
2.
From the Network Configuration dialog box, in the
Networks list, select the network you want to use. Then,
select Connect.
Note: Wi-Fi connection signal strengths are
indicated on a scale of 0 to 100, with 100 being
the strongest. PathPilot continually refreshes
the signal levels to help you find the best
placement for your Wi-Fi network adapter.
Ethernet connections are indicated by a prefix
in the following format: eth[NUMBER]. For
example, eth1.
The PathPilot operating system connects to the internet
using the network you specified. It continues to detect
and connect to the Wi-Fi network, even after power
cycles.
Enable Automatic Updates
Note: Automatic updates require an internet
connection. If you haven't yet enabled it, go to
"Enable an Internet Connection" (above).
If desired, you can enable automatic updates for PathPilot.
To enable automatic updates:
1.
From the PathPilot interface, on the Status tab, select
Update.
The Software Update dialog box displays.
Figure 7-28: Software Update dialog box.
2.
From the Software Update dialog box, select the Check
online daily for updates; confirmation required for
download and installation checkbox.
3.
Select Close.
When future updates are available, the Status tab
displays a notification.
7.2.2 Change the Network Name
If you're connected to a network using either the Ethernet jack
or the (optional) Wireless Network Adapter (PN 38207), the
©Tormach® 2026
Specifications subject to change without notice.
Page 112
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 113

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
PathPilot controller appears on your network as network-
attached storage. The default network name of the controller
is TORMACHPCNC.
To change the network name:
1.
From the Network Name field, type a new network
name.
Figure 7-29: Network Name field on the Settings tab.
Note: The network name must be unique within
your network.
2.
Select the Enter key.
3.
For the change to take effect, you must restart the
controller.
7.2.3 Change the Screen Orientation
A vertical orientation for 1920 × 1080 monitors is supported in
PathPilot v2.10.0 and later. For more information on the
portrait layout, go to "About Portrait Screen Layout" (below).
To change the screen orientation:
1.
From the PathPilot interface, on the Settings tab, select
Portrait from the Layout drop-down menu. Restart the
controller.
Figure 7-30: Layout drop-down menu on the Settings
tab.
2.
Rotate the monitor to the portrait orientation. You can
rotate it either left or right, depending on what's easier
for your setup.
3.
While the controller is restarting, specify which direction
you've rotated the monitor. Select Apply. If the result is
unexpected, click Restore Previous Configuration on the
confirmation dialog and choose a rotation direction
again.
Figure 7-31: Monitor configuration dialog box.
The controller restarts in portrait layout.
About Portrait Screen Layout
Portrait layout provides some key advantages:
l A larger tool path window that's always visible at the
top of the screen, regardless of which tab you have
active.
©Tormach® 2026
Specifications subject to change without notice.
Page 113
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 114

Figure 7-32: Tool Path window in portrait screen
layout.
l A wider G-code window to more easily read the loaded
G-code file and, if enabled, line numbers.
l The tool path window's view options are always visible
for much easier access.
l When browsing G-code files using the File tab, file
previews display on the top portion of the screen.
Figure 7-33: File tab G-code preview in portrait screen
layout.
7.2.4 Disable Limit Switches
To provide a temporary workaround for a malfunctioning limit
switch circuit, you can disable the limit switches. For
information, see "About Limit Switches" (on the next page).
Note: By default, the Limit Switches checkbox is
selected.
To disable limit switches:
1.
From the Settings tab, clear the Limit Switches
checkbox.
©Tormach® 2026
Specifications subject to change without notice.
Page 114
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 115

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
Figure 7-34: Limit Switches checkbox on the Status
tab.
2.
Select OK.
The machine completes a unique referencing procedure
after selecting the axis reference buttons: rather than
moving each axis to the end of its travel, the reference
position is set as the machine's current position.
Tip! This is useful for troubleshooting, because
you're now able to move the axis.
About Limit Switches
In the PathPilot interface, on the Settings tab, the Limit
Switches checkbox is selected by default.
If the checkbox is cleared, the machine completes a unique
referencing procedure after selecting Ref X, Ref Y, Ref Z, and
Ref A: rather than moving each axis to the end of its travel, the
reference position is set as the machine's current position. This
is useful for troubleshooting: if the limit switches are disabled,
you're able to move the axis off of its limit switch.
7.2.5 Limit G30 Moves
You can limit G30 moves so that only the Z-axis moves. For
information, see "About G30" (page 138).
To limit G30 moves:
From the Settings tab, select G30/M998 Move in Z Only.
Figure 7-35: Settings tab.
About G30
A G30 command in a G-code program moves the machine to a
preset position. For more information on setting a G30
position, see "Use a G30 Position" (page 138).
Use a G30 move to start a coordinated movement of the axes.
You can limit the movement to only the Z-axis. For
information, see "Limit G30 Moves" (above).
Tip! It's useful to program a G30 move right before a
tool change so that the machine can jog to a safe tool
change position.
7.2.6 Enable the On-Screen Keyboard
If you have an (optional) Touch Screen Kit (PN 35575), you can
use a soft keyboard to type information in the PathPilot
interface. For information, see "About Soft Keyboards" (on the
next page).
To enable and use the soft (on-screen) keyboard:
1.
From the Settings tab, select Soft / On-Screen Keyboard.
Figure 7-36: Settings tab.
2.
To resize the keyboard, select a corner of the keyboard
and drag.
3.
To reposition the keyboard, select the Anchor key and
drag the keyboard anywhere on the screen.
©Tormach® 2026
Specifications subject to change without notice.
Page 115
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 116

4.
To close the keyboard, select the X key.
About Soft Keyboards
If you enabled a soft keyboard (on-screen keyboard) in the
PathPilot interface to use with an optional touch screen or
operator console, a keyboard opens when you select any field
where keyboard input is required.
The keyboard displays a wide range of keys: both uppercase
and lowercase, symbols, arrow keys, caps lock, backspace and
delete, and more.
Figure 7-37: Soft (on-screen) keyboard.
7.2.7 Enable the USB M-Code I/O Interface Kit
If you have a USB M-Code I/O Interface Kit (PN 32616), you
must first enable it in the PathPilot interface.
To enable the USB M-Code I/O Interface Kit:
From the Settings tab, select USB IO Kit (PN 32616).
Figure 7-38: Settings tab.
7.2.8 Enable Tooltips
PathPilot displays expandable tooltips for many areas of the
interface. Hovering over an item, like a DRO field or a button,
displays helpful information about the item.
To enable or disable tooltips:
1.
From the Settings tab, select or clear Show Tooltips.
Figure 7-39: Show Tooltips checkbox.
Note: If you disable the tooltips, you can still
display them for specific items. Hover over an
area of the interface, and select the Shift key
on the keyboard.
7.2.10 Specify Probing and Tool Measuring Options
If you have any of the following accessories, you must first
specify which you're using in the PathPilot interface:
l Active Probe (PN 31858)
l Passive Probe (PN 32309)
l Electronic Tool Setter (PN 31875)
l Tool Setter for 24R (PN 50388)
To specify a probe or a tool setter:
©Tormach® 2026
Specifications subject to change without notice.
Page 116
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 117

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
From the Settings tab, select the correct probing or tool
measuring options for both Accessory Input 1 and
Accessory Input 2.
Figure 7-41: Settings tab.
7.2.11 Use a USB Camera
After plugging in the USB camera, navigate to the camera
settings. From the PathPilot interface, in the Settings tab, open
the Camera(s) tab. Identify the Camera Status read-only dialog
box.
Figure 7-42: USB camera status.
As cameras are plugged in and unplugged, the Camera Status
area is refreshed. To test compatibility of any USB camera,
plug it in and watch the Camera Status area for the camera
name and details.
Note: If a camera isn't shown after plugging it in or
starting a video recording, it might require too much
power from the USB ports on the controller. This is
very likely when more than one camera is used. Try
using a powered USB hub to add the camera(s).
When a USB camera is plugged in, it's analyzed for supported
video and audio formats, frame sizes, and frame rates. If the
camera supports it, PathPilot uses H.264 compression;
otherwise, it uses Motion JPEG.
If the USB camera has a microphone, PathPilot records audio
as well as video. The preferred format is compressed AAC, but
uncompressed PCM is used as a fallback.
About USB Cameras
Recording video and audio from USB cameras is supported in
PathPilot v2.10.0 and later. You can use up to four cameras
simultaneously to record from different vantage points.
Note: All cameras are started and stopped at the
same time — if you don't want a camera to record,
you must unplug it.
USB cameras are compatible with all machine types, but older
controllers may lack the processing power and memory needed
for camera support. Controllers require 4GB of memory for
camera functionality. Use the ADMIN MEMORY MDI command
to verify the memory size of a controller.
You can purchase a Tormach USB Camera (PN 51240) with a
metal case, mounting bracket, and 15-foot USB cable. Other
USB cameras may work (see below), but do not include any
technical support.
Manual Recording
To start or stop a manual recording, either:
l Use the controls in the Manual Recording area of the
Camera(s) tab.
When a manual recording is stopped, a file save-as
dialog appears prompting you for the file name base to
use.
Figure 7-43: Manual recording controls.
©Tormach® 2026
Specifications subject to change without notice.
Page 117
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 118

l Select the Video Camera Recording button in the
Persistent Controls section.
Figure 7-44: Video Camera Recording button.
Whenever PathPilot is recording from a USB camera
and/or the virtual screen camera, the LED on this button
is green. If PathPilot is recording and the button is
pressed:
o
If a program is running and not paused at an
M00/M01, the recording is aborted.
o
If a program is not running, but the machine is
moving, the recording is aborted.
o
Otherwise, if a manual recording is in progress, it is
stopped and a file save as dialog will appear. If an
automatic e-stop loop recording is in progress, it is
aborted since no e-stop occurred.
To include a screen recording:
1.
Toggle the Include PathPilot screen in recordings
checkbox in the Camera Settings area of the Camera(s)
tab to enable or disable screen recording.
Figure 7-45: Camera settings.
To take a picture (using all of the USB cameras at once):
1.
Select Snapshot in the Manual Recording area of the
Camera(s) tab.
The Main tab displays.
2.
Review the camera images, which display on top of the
Tool Path area. The camera images refresh every 0.5
seconds.
3.
Align the cameras or adjust lighting to your preference,
and then select the Shutter button.
Figure 7-46: Example of taking a photo.
Automatic E-Stop Loop Recording ("Dashcam")
E-stop loop recording enables analysis of the previous 30
seconds after an E-stop. When enabled, recording is
automatically started after reset.
To enable or disable the recording of emergency stops:
1.
Toggle the Automatic e-stop loop recording checkbox in
the Camera Settings area of the Camera(s) tab.
Note: This feature is enabled by default.
Automatic E-stop loop recording starts when the Reset
button is selected. If you selected Video Camera
Recording to abort a previous E-stop loop recording,
select Reset to start it again.
To view E-stop videos:
1.
A slight delay occurs after an E-stop while the video is
saved to the E-stop Videos folder. Select the video file,
and then select Load G-Code to view it.
Note: The E-Stop Videos folder is automatically
monitored for internal drive space use. If the
folder size grows beyond 5 GB, the oldest video
files are automatically deleted until the folder
size becomes less than 5 GB.
Review Video and Image Files
1.
On the File tab, select the video or image file and select
Load G-Code.
A video player application starts or the image preview is
displayed.
Alternatively, you could transfer the video or image files
to a Windows or macOS computer for review.
©Tormach® 2026
Specifications subject to change without notice.
Page 118
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 119

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
File Naming Convention
For manual and automatic E-stop recordings, the base file
name for the recording has automatically chosen suffixes
appended for each camera.
For example, if you stop a manual recording of two cameras,
specify “Left Bracket Op1” as the name, and enabled screen
recording, you'll see the following files:
File Name
Description of File
Left Bracket Op1_
0.mp4
Camera 0 mp4 video file
Left Bracket Op1_
0.log
Troubleshooting log for camera 0
Left Bracket Op1_
1.mp4
Camera 1 mp4 video file
Left Bracket Op1_
1.log
Troubleshooting log for camera 1
Left Bracket Op1_
PP.mp4
PathPilot screen recording mp4
video file
Left Bracket Op1_
PP.log
Troubleshooting log for screen
recording
## PDF Page 120

7.3 SET UP G-CODE PROGRAMS
Before running a G-code program, you must first make sure
that the machine is properly set up for the specific G-code
program.
7.3.1 Use a Probe with PathPilot
120
7.3.2 Set Tool Length Offsets
122
7.3.3 Set Work Offsets
127
7.3.4 View Work Offsets
129
7.3.5 View Available G-Code Modes
129
7.3.1 Use a Probe with PathPilot
Use the Probe tab in the PathPilot interface to automate
functions with a probe.
Set Up the Probe
Before using the functions on the Probe tab, you must first do
the following:
1.
Verify that tool number 99 (the probe tool) is in the
spindle.
2.
Disable the spindle to prevent any accidental spindle
starts with the probe in the spindle.
3.
Verify that the feed rate is appropriate for probing
moves.
Note: All probing moves occur at a feed rate
specified by the DRO fields on the Probe Setup
tab.
4.
Press the probe tip and make sure that, from the
PathPilot interface, on the Probe tab, the Accessory Input
light comes on.
This indicates that the probe polarity is correctly
specified.
If the Accessory Input light does not come on, you must
change the probe polarity setting. For information, see
"Specify Probing and Tool Measuring Options"
(page 116).
Use a Probe to Find a Feature's Location
To find the location of a workpiece or vise in the current work
offset coordinates:
1.
From the PathPilot interface, on the Probe tab, select the
X/Y/Z Probe tab.
2.
Position the probe near the workpiece or vise.
3.
One at a time, select Find X+, Find X-, Find Y+, Find Y-,
or Find Z-.
Figure 7-47: Probe tab.
The axis is probed, and the location of the probed
surface is displayed.
Use a Probe to Set Work Offset Zeroes
You can set the work offsets of a workpiece or vise jaw using a
probe.
Set the X and Y Work Offset Zero on the Corner of a
Feature
1.
From the PathPilot interface, on the Probe tab, select the
X/Y/Z Probe tab.
2.
Position the probe so that it is below the surface of the
feature and 1 in. away from the vice jaw corner in the X
and Y directions.
3.
Select Find Corner, Set Work Origin.
Figure 7-48: Probe tab.
The axes are probed, and the location of the probed
surface is set as the current work offset's X/Y origin.
Note: Select Change Corner to change the
corner on which to probe.
Set the Work Offset Zeroes on a Feature
1.
From the PathPilot interface, on the Probe tab, select the
X/Y/Z Probe tab.
2.
Position the probe near the workpiece or vise.
©Tormach® 2026
Specifications subject to change without notice.
Page 120
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs


---

## PDF Page 121

7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs
3.
One at a time, select Probe X+, Set Work Origin, Probe
X-, Set Work Origin, Probe Y+, Set Work Origin, Probe Y-,
Set Work Origin, or Probe Z-, Set Work Origin.
Figure 7-49: Probe tab.
The axis is probed, and the location of the probed
surface is set as the current work offset's origin.
Use a Probe to Find the Center of a Feature
You can find the center of a pocket, slot, or boss on a part
using a probe.
Find the Center of a Pocket
1.
From the PathPilot interface, on the Probe tab, select the
Rect/Circ tab.
2.
Position the probe near the center of the pocket.
3.
Select Find Center, Set Work Origin as shown in the
following image.
Figure 7-50: Probe tab.
Find the Center of a Slot
1.
From the PathPilot interface, on the Probe tab, select the
Rect/Circ tab.
2.
Position the probe near the center of the slot.
3.
Depending on the slot, do one of the following:
l To probe the slot in the X direction only, select Find
Center, Set Work Origin as shown in the following
image.
Figure 7-51: Probe tab.
l To probe the slot in the Y direction only, select Find
Center, Set Work Origin as shown in the following
image.
Figure 7-52: Probe tab.
Find the Center of a Rectangular Boss
1.
From the PathPilot interface, on the Probe tab, select the
Rect/Circ tab.
2.
Position the probe below the top surface of the boss and
on the left-hand side.
3.
Select Find Center, Set Work Origin as shown in the
following image.
Figure 7-53: Probe tab.
The probe moves around the edge of the workpiece to
find the center.
Find the Center of a Circular Boss
1.
From the PathPilot interface, on the Probe tab, select the
Rect/Circ tab.
2.
Position the probe below the top surface of the boss and
on the left-hand side.
©Tormach® 2026
Specifications subject to change without notice.
Page 121
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 122

3.
Select Find Center, Set Work Origin as shown in the
following image.
Figure 7-54: Probe tab.
The probe moves around the workpiece three times to
determine the approximate center of the curve, and then
makes four additional move to confirm the center of the
circle.
Find the Center Rotation of an A-Axis
1.
From the PathPilot interface, on the Probe tab, select the
Rect/Circ tab.
2.
Position the probe directly above the A-axis center of
rotation.
3.
Select Find A Axis Center & Set Work Origin.
Figure 7-55: Probe tab.
The probe moves around the round workpiece mounted
in the A-axis to find the center rotation of the A-axis.
7.3.2 Set Tool Length Offsets
Before running a G-code program, PathPilot must know the
length of the tools that are required for the program. For more
information on using tool length offsets, see "About Tool
Offsets" (page 156).
Note: You can import a .csv file with tool length
offset data. For information, see "Import and Export
the Tool Table" (page 146).
To set tool length offsets:
1.
Verify that the machine is powered on and out of reset.
2.
Put a tool into a tool holder, and set it aside to measure.
3.
From the PathPilot interface, on the Offsets tab, verify
that the Tool tab is selected.
4.
Find the Tool Table window.
Figure 7-56: Tool Table window on the Offsets tab.
5.
Depending on your workflow, you can measure your tools
using any of the following methods:
l Use an Electronic Tool Setter For information, see
Use an to Measure Tools.
l Touch Off of a Known Reference Height For
information, see "Touch Off the Tool Length Offsets"
(page 156).
About Tool Offsets
Tool offsets allow you to use various tools while still
programming with respect to the workpiece. Tools can have
different lengths (and, while using cutter radius compensation,
different diameters).
The most common tool offset is the tool length offset: when
you change tools, PathPilot must account for the difference in
tool length. In CNC machines, the tool length offset is applied
using a G43 command.
The tool length offset is the distance from the tip of the tool to
the spindle nose. Because the ER20 collet spindle doesn't
provide a repeatable tool length, the tool length must be
measured every time that you remove a tool from the spindle.
To speed up tool changes, we recommend using an Electronic
Tool Setter (PN 31875) when measuring tool lengths.
Before you begin a G-code program, you must verify the
lengths of the tools in the program, and make sure that the
lengths agree with the tool length offsets set in PathPilot:
l Each time you change tools, you must apply a new tool
length offset in PathPilot.
©Tormach® 2026
Specifications subject to change without notice.
Page 122
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs


---

## PDF Page 123

7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs
l Each time you replace a tool, you must remeasure its
length, and apply a new tool length offset in PathPilot.
NOTICE! You must always verify that the physical
length of a tool agrees with the tool length offset
value set in PathPilot. If you don't, there's a risk
that the tool length offset misrepresents the
currently active tool in the spindle, which may
result in a machine crash or damaged tooling,
workpieces, or fixtures.
Touch Off the Tool Length Offsets
Touch off the tool length offsets by using a reference surface
with a known height, which gives you a basis to measure any
other tool lengths. Use any surface that is parallel (within 0.02
mm) to the machine table. For example:
l A 1-2-3 Block Set (PN 31950)
l Box parallel
There are two steps to touch off the tool offsets. Complete the
following steps in the order listed:
Set a Known Reference Height
123
Measure Tools Using a Known Reference Height
123
Set a Known Reference Height
This procedure sets a new Z zero position for the currently
selected work offset.
To set a known reference height:
1.
Identify a precision surface to use as a reference surface
(like a 1-2-3 Block Set), and put it below the spindle on
the machine table. Verify that there's a clear path from
the spindle to the machine table.
2.
Set a new, unused work offset (like G55). From the
PathPilot interface, on the Main tab, in the MDI Line
DRO field, type a work offset. Then select the Enter key.
For information, see "Set Work Offsets" (page 161).
3.
If there's already a tool in the spindle, remove it.
4.
From the PathPilot interface, in the Tool DRO field, type
0. Then select the Enter key.
5.
Slowly jog the Z-axis down (-Z) until it's 0.04 in. (1 mm)
from the reference surface.
6.
Measure the thickness of a piece of paper, and put the
paper on the reference surface. Note the thickness of the
paper for later.
7.
While moving the paper back-and-forth across the
reference surface, slowly step the Z-axis down (-Z) until
you feel a light pull on the piece of paper. This indicates
that the paper is contacting the spindle.
Note: It's easier to use step jogging for this
task. For information on step jogging, see
"About Step Jogging" (page 151).
8.
From the PathPilot interface, in the Z-axis work offset
DRO field, type the thickness of the piece of paper. Then
select the Enter key.
Figure 7-57: Z-axis work offset DRO field.
The reference surface is now set as the Z zero position in
the current coordinate system.
9.
To set the tool length offset, go to Measure Tools Using
a Known Reference Height.
Measure Tools Using a Known Reference Height
This procedure sets the tool length offset using a known
reference height. If you have not yet done so, you must first set
the Z zero position; go to Set a Known Reference Height.
To measure tools using a known reference height:
1.
Verify that the reference surface is still on the machine
table with the piece of paper.
2.
From the PathPilot interface, on the Offsets tab, find an
unused tool number in the Tool Table window. Then,
type a description for the tool you're measuring.
3.
Put the tool holder into the spindle.
4.
From the PathPilot interface, in the Tool DRO field, type
the number of the tool. Then select the Enter key.
Figure 7-58: Tool DRO field.
5.
Slowly jog the Z-axis down (-Z) until it is 0.04 in. (1 mm)
from the reference surface.
©Tormach® 2026
Specifications subject to change without notice.
Page 123
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 124

6.
Continue to slowly jog the Z-axis while slowly moving
the piece of paper back-and-forth on the reference
surface.
7.
Stop jogging the Z-axis when you feel a light pull on the
piece of paper, which indicates that it is in contact with
the tool.
8.
From the PathPilot interface, on the Offsets tab, in the
Tool Table, select the tool for which you previously wrote
a description.
9.
In the Touch Z DRO field, type the thickness of the piece
of paper. Then select the Enter key.
Figure 7-59: Touch Z DRO field and button.
10.
Select Touch Z.
The length of the tool is stored in the Tool Table
window.
11.
From the Tool Table window, in the Length column,
verify that the length of the tool is correct.
12.
In the Diameter column, type the diameter of the tool.
Then select the Enter key.
13.
Jog the Z-axis up (+Z).
You've completed the procedure to measure a tool
offset. Repeat this procedure for any remaining tooling
you have. Once you're done adding tool length offsets,
switch back to your work coordinate system.
Measure Tools Using an Electronic Tool Setter (ETS)
Depending on your workflow, do one of the following:
Manually Measure Tool Lengths (with PathPilot)
124
Automatically Measure Tool Lengths (with G37)
125
Set up the Electronic Tool Setter (ETS)
125
Set the ETS Height
125
Reference the Spindle Nose
126
Set the G37 Position
126
Measure Tools Using an Electronic Tool Setter (ETS)
126
Manually Measure Tool Lengths (with PathPilot)
127
Automatically Measure Tool Lengths (with G37)
127
Manually Measure Tool Lengths (with PathPilot)
1.
Plug in the ETS to the Accessory 2 port.
2.
Set up the ETS.
For information, see "Set up the Electronic Tool Setter
(ETS)" (page 158).
3.
Put the ETS in its home position (that you determined in
"Set up the Electronic Tool Setter (ETS)" (page 158)).
4.
From the PathPilot interface, on the Offsets tab, in the
Tool Table window, in the Description column, type a
description for the tool.
5.
In the Diameter column, type the diameter of the tool.
Then select the Enter key.
6.
Install a tool into the spindle.
7.
From the PathPilot interface, type the tool number in the
Tool DRO field. Then select the Enter key.
©Tormach® 2026
Specifications subject to change without notice.
Page 124
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs


---

## PDF Page 125

7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs
8.
On the Offsets tab, find the Move and Set Tool Length
button and the Z only checkbox. Verify that the checkbox
is cleared, and then select Move and Set Tool Length.
Note: You should only use the Z only checkbox
to manually measure tools with a larger
diameter. When it's selected, the machine
doesn't go to the G37 position — instead, it just
moves straight down (Z-) to measure the tool.
The machine moves to the G37 position and measures
the tool with the ETS.
Note: Regardless of the initial feed rate, the
final touch off feed rate while using an ETS is
2-1/2 in. per minute (IPM).
9.
From the Tool Table window, in the Length column,
verify that the length of the tool is correct.
Automatically Measure Tool Lengths (with G37)
We recommend using the G37 G-code command to measure
tools. This method simplifies the tool measurement procedure
— you're letting the machine do the work for you — but it also
increases tool length accuracy and reduces tool change times
in multi-tool programs.
Depending on your workflow, do one of the following:
l Use G37 in the MDI Line DRO Field
1.
Set up the ETS.
For information, see "Set up the Electronic Tool
Setter (ETS)" (page 158).
2.
Put the ETS in its home position (that you
determined in "Set up the Electronic Tool Setter
(ETS)" (page 158)).
3.
Put a tool into the spindle.
4.
From the PathPilot interface, in the MDI Line DRO
field, type G37. Then select the Enter key.
The spindle moves to the ETS position, measures
the length of the tool, and applies that length to
the currently selected tool in the tool offsets table.
l Use G37 in a G-Code Program
1.
Set up the ETS.
For information, see "Set up the Electronic Tool
Setter (ETS)" (page 158).
2.
From the PathPilot interface, load a G-code
program with a G37 command.
3.
Select Cycle Start.
When the program reaches the G37 command, the
machine moves to the ETS and measures the
length of the tool.
For information, see "Programming" (page 163).
Set up the Electronic Tool Setter (ETS)
There are three steps to set up the ETS. Complete the
following steps in the order listed:
Set the ETS Height
125
Reference the Spindle Nose
126
Set the G37 Position
126
Set the ETS Height
Before you begin to use the ETS, you must first use the
PathPilot interface to set its work offset.
To set the ETS height:
1.
Set a new Z zero position for the currently selected work
offset.
For information, see Set a Known Reference Height.
2.
Put the ETS on the known reference height (from Step
1).
3.
Jog the spindle until it's over the ETS.
©Tormach® 2026
Specifications subject to change without notice.
Page 125
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 126

4.
From the PathPilot interface, on the Probe tab, select the
ETS Setup tab. Then find the ETS Work Offset Setup
group, and select Move & Set ETS Height.
Figure 7-60: Move & Set ETS Height button on the
Probe tab.
The Z-axis moves down (-Z) until the spindle nose
contacts and triggers the ETS.
5.
In the ETS Height DRO field, verify that the length of the
ETS updated.
Reference the Spindle Nose
Note: You must repeat this procedure after each time
that you reference the Z-axis.
1.
Identify a home location for your ETS. You can use
anywhere within the machine's area of travel as the
home location, so long as you can center the spindle
above the ETS.
Tip! We recommend putting the ETS toward
the Y+ end of travel (where it's outside of the 2
ft × 4 ft standard work envelope, and on the
surface of the vacuum table). For information,
see "ETS Placement Layout" (page 269).
2.
Remove the tool holder from the spindle.
3.
From the PathPilot interface, in the Tool DRO field, type
0. Then select the Enter key.
4.
Jog the spindle until it's over the ETS. Then, slowly jog
the Z-axis down (-Z) toward the contact pad on the ETS.
5.
From the PathPilot interface, on the ETS Setup tab, find
the ETS G37 Spindle Nose Reference section, and select
ETS Spindle Ref.
Figure 7-61: ETS Spindle Ref button on the Probe tab.
The Z-axis moves down (-Z) until the spindle nose
contacts and triggers the ETS.
The spindle nose is now referenced to the ETS.
Set the G37 Position
1.
Load the longest tool that you'll be using into the
spindle. From the PathPilot interface, change to that
tool.
NOTICE! If you use a shorter tool to set the G37
position, there's a risk of tool collision when using a
longer tool.
2.
Jog the tool so that it's about 20 mm above the tool
setter's contact pad.
3.
From the PathPilot interface, on the ETS Setup tab, find
the ETS G37 Position Setup group, and select Set G37
ETS Position.
Figure 7-62: Set G37 ETS Position on the Probe tab.
The G37 position is now set.
4.
Verify that the X, Y, and Z ETS position displayed in their
DRO fields are accurate.
Note: The values displayed in these DRO fields
are in G53.
Measure Tools Using an Electronic Tool Setter (ETS)
Depending on your workflow, do one of the following:
Manually Measure Tool Lengths (with PathPilot)
127
©Tormach® 2026
Specifications subject to change without notice.
Page 126
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs


---

## PDF Page 127

7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs
Automatically Measure Tool Lengths (with G37)
127
Manually Measure Tool Lengths (with PathPilot)
1.
Plug in the ETS to the Accessory 2 port.
2.
Set up the ETS.
For information, see "Set up the Electronic Tool Setter
(ETS)" (page 158).
3.
Put the ETS in its home position (that you determined in
"Set up the Electronic Tool Setter (ETS)" (page 158)).
4.
From the PathPilot interface, on the Offsets tab, in the
Tool Table window, in the Description column, type a
description for the tool.
5.
In the Diameter column, type the diameter of the tool.
Then select the Enter key.
6.
Install a tool into the spindle.
7.
From the PathPilot interface, type the tool number in the
Tool DRO field. Then select the Enter key.
8.
On the Offsets tab, find the Move and Set Tool Length
button and the Z only checkbox. Verify that the checkbox
is cleared, and then select Move and Set Tool Length.
Note: You should only use the Z only checkbox
to manually measure tools with a larger
diameter. When it's selected, the machine
doesn't go to the G37 position — instead, it just
moves straight down (Z-) to measure the tool.
The machine moves to the G37 position and measures
the tool with the ETS.
Note: Regardless of the initial feed rate, the
final touch off feed rate while using an ETS is
2-1/2 in. per minute (IPM).
9.
From the Tool Table window, in the Length column,
verify that the length of the tool is correct.
Automatically Measure Tool Lengths (with G37)
We recommend using the G37 G-code command to measure
tools. This method simplifies the tool measurement procedure
— you're letting the machine do the work for you — but it also
increases tool length accuracy and reduces tool change times
in multi-tool programs.
Depending on your workflow, do one of the following:
l Use G37 in the MDI Line DRO Field
1.
Set up the ETS.
For information, see "Set up the Electronic Tool
Setter (ETS)" (page 158).
2.
Put the ETS in its home position (that you
determined in "Set up the Electronic Tool Setter
(ETS)" (page 158)).
3.
Put a tool into the spindle.
4.
From the PathPilot interface, in the MDI Line DRO
field, type G37. Then select the Enter key.
The spindle moves to the ETS position, measures
the length of the tool, and applies that length to
the currently selected tool in the tool offsets table.
l Use G37 in a G-Code Program
1.
Set up the ETS.
For information, see "Set up the Electronic Tool
Setter (ETS)" (page 158).
2.
From the PathPilot interface, load a G-code
program with a G37 command.
3.
Select Cycle Start.
When the program reaches the G37 command, the
machine moves to the ETS and measures the
length of the tool.
For information, see "Programming" (page 163).
7.3.3 Set Work Offsets
To set the current axis location to zero in the active work
coordinate system:
©Tormach® 2026
Specifications subject to change without notice.
Page 127
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 128

Select Zero [Axis].
Figure 7-63: Work Offset DRO fields.
To change work offsets:
1.
On the Main tab, in the MDI Line DRO field, type the
new work offset to activate (for example, G55). Then
select the Enter key.
2.
The new work offset displays in the following locations
in the PathPilot interface:
l The Status read-only DRO field.
l Above the Work Offset DRO fields.
Figure 7-64: Work offset indicated in the PathPilot
interface.
Note: The values in the Work Offset
DRO fields update to indicate the new
location of each axis in the new work offset.
For more information on using work offsets, see "About Work
Offsets" (page 161).
Set the Z-Axis Work Offset with an Electronic Tool
Setter (ETS)
1.
Set up the ETS.
For information, see "Set up the Electronic Tool Setter
(ETS)" (page 158).
2.
Install a tool into the spindle.
For information, see "Install a Tool in an ER Collet
Spindle" (page 155).
3.
Use the ETS to measure the length of the tool in the
spindle.
For information, see "Set Tool Length Offsets"
(page 156).
4.
Put the ETS on the surface that you want to set as Z
zero.
5.
Jog the spindle until the tool is centered over the ETS.
6.
From the PathPilot interface, on the Offsets tab, on the
Work tab, select Move and Set Work Offset.
Figure 7-65: Work tab on the Offsets tab.
The machine moves down (-Z) until the tool contacts the
ETS. The Z-axis offset updates for the current work
offset.
About Work Offsets
Work offsets allow you to think in terms of X, Y, and Z
coordinates with respect to the part, rather than thinking of
them with respect to the machine position. This means that
you can jog the machine to an arbitrary location (like the end
of a workpiece) and call that location zero.
You can save up to 500 work offsets in PathPilot. The naming
structure varies based on the offset number, as detailed in the
following table.
Work Offset Naming
Offsets 1-9 (Use either name)
Offset
Extended Name
Name
1
G54.1 P1
G54
2
G54.1 P2
G55
3
G54.1 P3
G56
4
G54.1 P4
G57
5
G54.1 P5
G58
6
G54.1 P6
G59
7
G54.1 P7
G59.1
8
G54.1 P8
G59.2
9
G54.1 P9
G59.3
Offsets 10-500 (Use extended name)
Offset
Extended Name
Name
10
G54.1 P10
Not used
©Tormach® 2026
Specifications subject to change without notice.
Page 128
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs


---

## PDF Page 129

7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs
Work Offset Naming
11
G54.1 P11
Not used
...
499
G54.1 P499
Not used
500
G54.1 P500
Not used
7.3.4 View Work Offsets
To view the current work offset:
From the Offsets tab, on the Work tab, identify the
Work Offsets Table window.
Figure 7-66: Work Offsets Table window.
The active work offset is highlighted.
To change the current work offset, go to "Set Work Offsets"
(page 161).
7.3.5 View Available G-Code Modes
The G-Code Description window shows a list of all available G-
code modes.
To view available G-code modes:
From the Settings tab, find the G-Code Description
window.
Figure 7-67: G-code Description window on the
Settings tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 129
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 130

7.4 RUN G-CODE PROGRAMS
While running a G-code program, use the following controls:
7.4.1 Bring the Machine Out of Reset
130
7.4.2 View the Active Axis to Jog
130
7.4.3 Jog the Machine
130
7.4.4 View the Current Machine Position
131
7.4.5 Reference the Machine
131
7.4.6 Start a Program
132
7.4.7 Stop Machine Motion
132
7.4.8 View the Active G-Code Modes
132
7.4.9 View the Distance to Go
133
7.4.1 Bring the Machine Out of Reset
Select Reset.
Figure 7-68: Reset button.
For more information on reset mode, see "About Reset Mode"
(page 149).
About Reset Mode
When the machine is first powered on, or after an emergency
stop, the Reset button flashes. When you select the flashing
Reset button, PathPilot verifies communication to the machine
and does the following activities:
l Brings the machine out of an emergency stop condition
l Clears alarms
l Clears the tool path backplot
l Resets all modal G-codes to their normal state
l Rewinds the currently loaded G-code program
l Stops machine motion, but is not a replacement for the
Emergency Stop button
You can select the Reset button any time while the machine is
on.
7.4.2 View the Active Axis to Jog
To find which axis is active while jogging your machine:
Identify the light next to the Work Offset DRO fields.
Figure 7-69: Work Offset DRO fields.
For information, see "Jog the Machine" (page 151).
7.4.3 Jog the Machine
To switch between jogging modes:
From the Manual Control area, in the Jog group, select
Jog.
PathPilot toggles between continuous velocity mode and
step mode.
Figure 7-70: Jog button.
When the Cont green light is on, continuous velocity
mode is selected.
When the Step green light is on, step mode is selected.
To use continuous velocity mode:
Set the velocity: drag the Jog Speed slider.
Figure 7-71: Jog Speed slider.
For more information on continuous velocity mode, see "About
Continuous Velocity Jogging" (page 151).
To use step mode, select the step size. Do one of the
following, depending on your accessories:
l In the Manual Control area, in the Jog group, select the
step size.
The Step button's light comes on, indicating which step
size is active.
Figure 7-72: Step buttons (in G20 mode).
©Tormach® 2026
Specifications subject to change without notice.
Page 130
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs


---

## PDF Page 131

7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs
l On the (optional) Jog Shuttle, press the Step button to
toggle the currently selected step size.
In the PathPilot interface, the Step button's light comes
on, indicating which step size is active.
For more information on step mode, see "About Step Jogging"
(page 151).
Jog in Continuous Velocity Mode
In continuous mode, the machine jogs at a continuous velocity.
To select continuous velocity mode:
In the Manual Control area, select Jog.
Figure 7-73: Continuous velocity jogging controls.
When the Cont green light is on, continuous velocity
mode is selected.
When the Step green light is on, step mode is selected.
To set the velocity:
Drag the Jog Speed slider.
Figure 7-74: Jog Speed slider.
About Continuous Velocity Jogging
While jogging in continuous velocity mode, the machine moves
at a constant speed for as long as:
l A keyboard key is pressed
l The Jog Shuttle outer ring is twisted away from the
neutral position
l The Operator Console's pendant wheel is turned in the
desired direction
This is useful when you're doing things like:
l Roughly positioning the machine (for example, to move
the spindle head away from the workpiece).
l Moving the machine a certain distance at a constant
speed.
Jog in Step Mode
In step mode, the machine jogs in steps, which range based on
the programming mode you're using:
l Imperial (G20) Mode 0.00025 in. to 0.1000 in.
l Metric (G21) Mode 0.010 mm to 2.00 mm
To select the step size:
In the Manual Control Area, select the step size.
The Step button's light comes on, indicating which step
size is active.
Figure 7-75: Step buttons (in G20 mode).
About Step Jogging
While jogging in step mode, the machine moves one step at a
time. The jog step sizes range depending on the programming
mode you are using:
l Imperial (G20) Mode 0.00025 in. to 0.1000 in.
l Metric (G21) Mode 0.010 mm to 2.00 mm
Step jogging mode is useful to finely move the machine, like
when you're indicating a workpiece or manually setting tool
lengths.
The jog keys on the keyboard only move the machine in steps
when step mode is indicated in PathPilot. The inner wheel on
the jog shuttle always moves the machine in steps, regardless
of which mode is indicated in PathPilot. The Operator
Console's pendant moves the machine in the step size that's
selected with the three-position switch.
7.4.4 View the Current Machine Position
Identify the Work Offset DRO fields.
Figure 7-76: Work Offset DRO fields.
The position is expressed by the currently active work
offset coordinate system (like G54 or G55).
When the machine isn't moving, you can edit the DRO fields.
For more information on setting work offsets, go to "Set Work
Offsets" (page 161).
7.4.5 Reference the Machine
1.
Verify that the machine can freely move to its reference
position (at the ends of travel).
©Tormach® 2026
Specifications subject to change without notice.
Page 131
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 132

2.
To verify that the tooling is clear of any possible
obstructions, reference the Z-axis before referencing the
other axes: from the PathPilot interface, select Ref Z.
Figure 7-77: Reference buttons.
3.
Once the spindle is clear of any possible obstructions,
continue referencing all axes.
Note: You can select the buttons one after
another. Once the machine references one axis,
it'll move on to the next.
After each axis is referenced, its button light comes on.
For more information on referencing the machine, see "About
Referencing" (page 150).
About Referencing
You must reference the machine to establish a known position
for PathPilot. The position that's set while referencing the
machine is the origin of the machine coordinate system.
Without referencing the machine, PathPilot won't know the
current position of the machine axes.
You must reference the machine at the following times:
l After you power on the machine
l After you push in the Emergency Stop button
l Before running a G-code program
l Before using MDI commands
l Before setting work or tool offsets
l After a collision or an axis stall/fault
When referencing, the machine moves each axis to the end of
its travel. The machine stops at the limit switch, which sets
the axis’ reference position.
7.4.6 Start a Program
From the PathPilot interface, in the Main tab, select
Cycle Start.
Figure 7-78: Cycle Start button.
For more information on starting a program, see "About Cycle
Start" (below).
If you can't start a program, go to "Cycle Start Reference"
(below).
About Cycle Start
While a program is running, the Cycle Start button's light is on.
The Cycle Start button's light flashes if motion is paused during
the program. The following modes may pause motion during a
program:
l Single block
l Feed hold
l M01 break
If machine motion pauses a single block, feed hold, or M01
break, the Cycle Start button flashes until it's selected again.
Cycle Start Reference
The Cycle Start button doesn't operate if you select it:
l While you're not in the Main tab. For information, see
"Main Tab" (page 87).
l Before you've loaded a G-code program. For
information, see "Load G-Code" (page 154).
l Before referencing the machine. For information, see
"Reference the Machine" (page 150).
7.4.7 Stop Machine Motion
From the Program Control area, select Stop.
Figure 7-79: Stop button.
7.4.8 View the Active G-Code Modes
To find the currently active G-code modes and the currently
active tool at a glance:
©Tormach® 2026
Specifications subject to change without notice.
Page 132
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs


---

## PDF Page 133

7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs
Identify the Status read-only DRO field.
Figure 7-80: Status read-only DRO field.
For more information on G-code modes, go to "View Available
G-Code Modes" (page 129).
7.4.9 View the Distance to Go
To view the distance to go:
Identify the DTG read-only DRO fields.
Figure 7-81: DTG read-only DRO fields.
The value is the remaining distance in any programmed
move.
For more information on using the DTG read-only DRO fields,
see "About Distance to Go" (below).
About Distance to Go
While a program is running, the DTG read-only DRO fields
show the remaining distance in each move.
After using the feed hold function or the maxvel override
function, look at the distance to go. This read-only DRO field is
useful to prove out a part program.
©Tormach® 2026
Specifications subject to change without notice.
Page 133
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 134

7.5 CONTROL G-CODE PROGRAMS
If necessary, use the following controls to add to your G-code
program:
7.5.1 Use the Feed Hold Function
134
7.5.2 Use the Feed Rate Override Function
134
7.5.3 Use M01 Break Mode
135
7.5.4 Use the Maxvel Override Function
135
7.5.5 Use Single Block Mode
136
7.5.6 Use the Spindle Override Function
136
7.5.7 Change the Feed Rate
137
7.5.8 Change the Spindle Speed
137
7.5.9 Change the Tool Number
137
7.5.10 Use a G30 Position
138
7.5.11 View the Tool Length
138
7.5.12 Manually Enter Commands
138
7.5.13 Copy Recently Entered Commands
139
7.5.15 Use Cycle Counters (M30 and M99)
142
7.5.1 Use the Feed Hold Function
Select Feed Hold.
Figure 7-82: Feed Hold button.
Tip! Use the Spacebar key to quickly activate the
feed hold function.
For more information on using the feed hold function, see
"About Feed Hold" (below).
About Feed Hold
When the feed hold function is active, the Feed Hold button's
light is on.
The feed hold function pauses machine motion — aside from
the spindle — and the Cycle Start button flashes. For
information, see "About Cycle Start" (page 132).
Note: If the machine isn't moving, the feed hold
function doesn't have an effect.
You can use the feed hold function either while a program is
running or while you are using manual data input (MDI)
commands. If the program is running a spindle-synchronized
move, the feed hold function is delayed until the move is
complete.
7.5.2 Use the Feed Rate Override Function
To use the feed rate override function:
Using the Feed Rate Override slider, change the
programmed feed rate by a specific percentage.
Figure 7-83: Feed Rate Override slider.
Note: Percentages range from 1-200%.
To remove the feed rate override function:
Select Feed 100%.
The feed rate returns to 100% of its programmed value
(it's no longer overriden).
For more information on the feed rate override function, see
"About Feed Rate Override" (below).
About Feed Rate Override
You can use the feed rate override function while you're doing
any of the following activities:
l Using manual data input (MDI) commands
l Jogging
l Running a program with G01, G02, or G03 commands
The feed rate override function does not affect G00 (rapid)
commands. It's ignored if:
l The program is running a spindle-synchronized move
l An M48 (disable feed and speed overrides) command is
used
To indicate lack of motion or unusual levels, the slider turns
yellow when it's either at 0% or above 100%.
The Feed Rate Override slider and Feed 100% button work
similarly to the spindle override controls. They affect the
commanded feed rate by a percentage from 1-200%. The feed
rate override works for MDI, jogging, and G-code program
G01/G02/G03 moves. The override has no effect on G00
(rapid) moves.
©Tormach® 2026
Specifications subject to change without notice.
Page 134
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 135

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
7.5.3 Use M01 Break Mode
Select M01 Break.
Figure 7-84: M01 Break button.
For more information on using M01 break mode, see "About
M01 Break" (below).
About M01 Break
When the M01 break mode is active, the M01 Break button's
light is on. When the M01 break mode is inactive, the M01
Break button's light is off.
M01 break mode enables any M01 (optional stop) commands
that are programmed in the G-code file. You can turn M01
break mode on or off either before starting a program or while
a program is running.
l When M01 Break is Active Machine motion stops
after PathPilot reaches an M01 command, and the Cycle
Start button flashes. For information, see "About Cycle
Start" (page 132).
l When M01 Break is Inactive PathPilot ignores all
programmed M01 commands.
7.5.4 Use the Maxvel Override Function
To use the maxvel override function:
©Tormach® 2026
Specifications subject to change without notice.
Page 135
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 136

Using the Maxvel Override slider, change the maximum
velocity by a specified percentage.
Figure 7-85: Maxvel Override slider.
To remove the maxvel override function:
Select Maxvel 100%.
For more information on using the maxvel override function,
see "About Maxvel Override" (below).
About Maxvel Override
The maxvel override function affects G00 and G01 commands,
and it's useful for:
l Running a Program for the First Time Drag the
Maxvel Override slider to 0% to verify that all DRO fields
look appropriate.
l Safety If you're running a spindle-synchronized move, a
maxvel override isn't ignored.
Verify that the maxvel override value allows the machine
to use the programmed feed rate during spindle-
synchronized moves. If it can't, the spindle-synchronized
move won't produce the results you want.
To indicate lack of motion or unusual levels, the slider turns
yellow when it's either at 0% or above 100%.
7.5.5 Use Single Block Mode
Select Single Block.
Figure 7-86: Single Block button.
For more information on using single block mode, see "About
Single Block" (below).
About Single Block
While single block mode is active, the Single Block button's
light is on.
Single block mode runs one line of G-code at a time. After
each line, motion is paused, and the Cycle Start button flashes.
For information, see "About Cycle Start" (page 132).
You can turn single block mode on or off either before starting
a program or while a program is running. For information, see
"Use Single Block Mode" (above).
Note: Single block mode ignores non-motion lines,
like comment lines or blank lines.
7.5.6 Use the Spindle Override Function
To use the spindle override function:
Using the Spindle Override slider, change the
programmed spindle speed by a specific percentage.
Figure 7-87: Spindle Override slider.
Note: Percentages range from 1-200%.
To remove the spindle override function:
Select RPM 100%.
The spindle speed returns to 100% of its programmed
value (it's no longer overriden).
For more information on using the spindle override function,
see "About Spindle Override" (below).
About Spindle Override
The spindle override function won't command the spindle to
move past the maximum allowable speed. If the spindle isn't
moving, the spindle override function is delayed until the next
time spindle starts. The override doesn’t drive the spindle past
its maximum speed. It does affect the speed of a spindle
command limited by a D word.
You can use the spindle override function while you're doing
any of the following activities:
l Running a program
l Using manual data input (MDI) commands
The spindle override function is ignored in the following
situations:
l If the program is running a spindle-synchronized move
l If an M48 (disable feed and speed overrides) command
is used
To indicate lack of motion or unusual levels, the slider turns
yellow when it's either at 0% or above 100%.
©Tormach® 2026
Specifications subject to change without notice.
Page 136
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 137

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
7.5.7 Change the Feed Rate
In the Feed Rate DRO field, type in a feed rate. Then
select the Enter key.
Figure 7-88: Feed Rate DRO field.
For information, see "About Feed Rates" (below).
About Feed Rates
A feed rate is the velocity at which the workpiece can be fed
against the tool in the machine's spindle.
Motion
Feed Rate
Coordinated linear motion of one or
more axis (X-axis, Y-axis, or Z-axis)
Inches per minute
(G20) or
millimeters per
minute (G21)
Rotational axis motion of one axis (A-
axis)
Degrees per
minute
Coordinated linear motion of one or
more axis (X-axis, Y-axis, or Z-axis)
with simultaneous rotational axis
motion (A-axis)
Usually
programmed in
inverse time feed
rate mode (G93)
7.5.8 Change the Spindle Speed
In the Spindle RPM DRO field, type in a spindle speed.
Then select the Enter key.
Figure 7-89: Spindle RPM DRO field.
For information, see "About Spindle Controls" (below).
About Spindle Controls
A spindle speed is the rate at which the spindle rotates.
Button
G-
Code
Use to...
FWD
M03
Start the spindle clockwise at the RPM
specified in the Spindle RPM DRO field.
Stop
M05
Stop the spindle.
The FWD button and the Spindle RPM field don't operate if
selected when:
l A G-code program is running.
l Using manual data input (MDI) commands.
Spindle Controls Reference
The spindle speed is measured in revolutions per minute
(RPM).
The spindle speed range is 10,000 rpm to 24,000 rpm.
Use lower spindle speeds when you're using larger cutting
tools; use higher spindle speeds when you're using smaller
cutting tools.
7.5.9 Change the Tool Number
The Tool DRO field shows the tool number currently active.
Figure 7-90: Tool DRO field.
To change the tool number (and apply its tool length offset):
1.
In the Tool DRO field, type a number (the valid range is
from 0-1000). Then select the Enter key.
Note: You can also select M6 G43. For
information, see "About M6 G43" (below).
About M6 G43
The M6 G43 button is a shortcut used to do the following:
l Change the number of the currently-loaded tool in the
spindle to the number typed in the Tool DRO field. This is
the equivalent of an M06 command.
l Apply the tool length offset for that tool typed in the
Tool DRO field. For more information on tool length
offsets, see "Set Tool Length Offsets" (page 156). This is
the equivalent of a G43 command.
©Tormach® 2026
Specifications subject to change without notice.
Page 137
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 138

7.5.10 Use a G30 Position
The Go to G30 button moves the machine to a predefined G30
position. For information, see "About G30" (below).
To set a G30 position:
1.
Jog the machine to the desired G30 position.
2.
From the Offsets tab, select Set G30.
Figure 7-91: Set G30 button.
To go to a set G30 position:
l Use a G30 command in a G-code program.
l Select Go To G30.
Figure 7-92: Go to G30 button.
Note: The G30 position defaults to only moving the Z-
axis.
About G30
A G30 command in a G-code program moves the machine to a
preset position. For more information on setting a G30
position, see "Use a G30 Position" (above).
Use a G30 move to start a coordinated movement of the axes.
You can limit the movement to only the Z-axis. For
information, see "Limit G30 Moves" (page 115).
Tip! It's useful to program a G30 move right before a
tool change so that the machine can jog to a safe tool
change position.
7.5.11 View the Tool Length
Identify the Tool Length read-only DRO field.
Figure 7-93: Tool Length DRO field.
If the tool offset matches the number of the tool in the
Tool DRO field, the text is light blue on a gray
background.
If the tool offset doesn't match the number of the tool in
the Tool DRO field, the text is orange on a red
background.
7.5.12 Manually Enter Commands
You can send G-code commands directly to the machine by
using the MDI Line DRO field. For information, see "About the
MDI Line DRO Field" (below).
To manually enter commands:
1.
Select the MDI Line DRO field.
Figure 7-94: MDI Line DRO field.
The DRO field highlights.
2.
Type the command.
Note: You can use the Backspace, Delete,
Left Arrow, and Right Arrow keys to correct
typing errors.
3.
You must press the Enter key to execute the command.
To abandon the command, press Esc.
About the MDI Line DRO Field
The MDI Line DRO field allows you to send commands (or,
manual data input) directly to PathPilot. For information, see
"Manually Enter Commands" (above).
The MDI Line DRO field saves up to 100 of your most recent
commands, which are saved after a power cycle.
©Tormach® 2026
Specifications subject to change without notice.
Page 138
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 139

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
When you select the MDI Line DRO field, all keystrokes are
used within the field — so, you can't jog the machine.
Admin Commands Reference
Use the following commands in PathPilot:
Admin Command
Use to...
ADMIN AUDIO
Customize the controller's audio device
settings.
ADMIN CALC
Open the calculator.
ADMIN CLEAR
Clear the message history on the
Status tab.
ADMIN CONFIG
Change the configuration of the
PathPilot interface.
ADMIN
CYCLECOUNTER
Control the cycle counters in the Tool
Path display.
ADMIN DATE
Customize the controller's date and
time.
ADMIN DISPLAY
Customize the controller's screen
display.
ADMIN DROPBOX
Connect your controller to a Dropbox
account for cloud file syncing.
ADMIN HELP
Review a list of available Admin
commands.
ADMIN
KEYBOARD
Customize the controller's keyboard
layout.
ADMIN LOGDATA
Write the latest machine log data to a
USB drive for technical support
assistance.
ADMIN MEMORY
Determine how much total RAM is on
your controller.
ADMIN MOUSE
Change the mouse preferences, like
pointer speed and right- or left-hand
button mapping
ADMIN NETWORK
Configure a Wi-Fi network.
ADMIN RESET_
SOFT_LIMITS
Reset axis soft limits to machine
defaults.
ADMIN SET_X_
LIMIT
Set the X-axis soft limit.
Admin Command
Use to...
ADMIN SET_Y_
LIMIT
Set the Y-axis soft limit.
ADMIN SET_Z_
LIMIT
Set the Z-axis soft limit.
ADMIN
SETTINGS
BACKUP
Create a backup of tool offset and
fixture information to store externally.
ADMIN
SETTINGS
RESTORE
Restore tool offset and fixture
information backup from an external
location.
ADMIN SHOW_
SOFT_LIMITS
Display the current axis soft limits on
the Status tab.
ADMIN TOOLTIP
DELAYMS
Set the milliseconds prior to displaying
the tooltip (and then again for the
expanded tooltip). The default is 1200
milliseconds.
ADMIN TOOLTIP
MAXDISPLAYSEC
Limit the amount of time the
expanded tooltip displays. The default
is 15 seconds.
ADMIN
TOUCHSCREEN
Adjust the touch screen calibration.
ADMIN VERSION
Display detailed version information on
the Status tab.
7.5.13 Copy Recently Entered Commands
1.
From the MDI Line DRO field, press either the
Up Arrow key or the Down Arrow key.
The previously entered command displays.
2.
You must press the Enter key to execute the command.
To abandon the command, press Esc.
For information, see "Manually Enter Commands" (on the
previous page).
---

## PDF Page 141

Create Tool Descriptions
If desired, you can create tool descriptions in PathPilot.
Detailed tool descriptions allow you to receive feeds and
speeds suggestions in conversational programming. For
information, see "Use Feeds and Speeds Suggestions"
(page 139).
Manually Enter Tool Descriptions
PathPilot uses keywords and patterns in the tool description to
recognize tooling features. For information, see"Tool Keywords
Reference" (on the next page).
To manually enter tool descriptions:
1.
From the PathPilot interface, on the Offsets tab, identify
the Tool Table window.
2.
Select a blank line.
3.
Type a description for the tool. Descriptions are not case
sensitive.
If a pattern or word in the description is recognized,
PathPilot uses syntax highlighting to indicate a valid
description.
Figure 7-98: A manually-entered tool description.
Examples
To get accurate machining information, all tooling must be
described with detail: the more detail, the better the results.
E X A M P L E
Dia:.3125 4FL R:03 AlTiN CRB variable loc:.75
This description provides the following to PathPilot to calculate
machining information:
l 0.3125 tool diameter
l Four flutes
l 0.03 radius, or "bullnose"
l Aluminum-titanium nitrade coating
l Carbide
l Variable helix
l 0.75 length of cut (loc)
Using a personal description likely won’t contain meaningful
information for PathPilot.
E X A M P L E
Gold colored end mill from middle drawer
This description provides very little information, and PathPilot
defaults to basic cutter features:
l Two flutes
l Uncoated, high-speed steel end mill
l Length of cut based on the diameter
Automatically Generate Tool Descriptions
If you're using a Tormach tool, you can enter the part number
to automatically generate tool descriptions in the Tool Table
window.
©Tormach® 2026
Specifications subject to change without notice.
Page 141
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 142

Note: If you don't know the part number, you can
search for the tool at tormach.com.
1.
From the PathPilot interface, on the Offsets tab, in the
Tool Table window, select a blank line.
2.
Type the part number for the tool, like 35571.
The full description and tool diameter for a ShearHog
(PN 35571) displays.
Figure 7-99: An automatically-generated tool
description for a Tormach tool.
3.
You must enter the value for the Length.
Tool Keywords Reference
PathPilot uses keywords and patterns in the tool description to
recognize tooling features.
Item
Pattern
Example
Notes
type
drill,
centerdrill,
tap, ball,
chamfer,
spot, flat,
taper,
bullnose,
lollypop,
flycut,
shearhog,
drag, saw,
indexable
DRILL, BALL,
FLYCUT, DRAG
“Drag”
indicates
that the
tool is a
drag tool,
and has no
(0) RPM
associated
with it.
flutes
A number
followed
by “FL” or
“FLUTE”
4FL, 12FL,
2FLUTE
No flutes is
specified
the same
as two
flutes.
Item
Pattern
Example
Notes
length of
cut (or
flute
length)
“loc”
followed
by a colon,
followed
by a
decimal
number
LOC:0.875
If no length
of cut is
specified, a
length is
assumed
based on
cutter
diameter.
tool
coating
TiN, AlTiN,
TiAlN,
CNB, ZrN,
TiB2, TiB,
TiCN, DLC,
uncoated,
nACo
TIN, ZRN, TIB2
No coating
is specified
same as
“uncoated.”
tool
diameter
“diameter”
or “dia”
followed
by a colon,
followed
by a
decimal
number
DIAMETER:.0341
, DIA:.750
—
tool
material
carbide,
HSS,
CoHSS,
CRB, carb,
diamond,
DMND
HSS, COHSS, CRB
No tool
material is
specified
the same
as HSS
(high-speed
steel).
tool
radius
“R” or
“radius”
followed
by a colon,
followed
by a
decimal
number
R:.02,
RADIUS:0.02
No radius is
specified
the same
as a zero
radius.
7.5.15 Use Cycle Counters (M30 and M99)
On the Main tab, the Tool Path display shows M30 and M99
cycle counters. They're useful to count parts completed during
©Tormach® 2026
Specifications subject to change without notice.
Page 142
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 143

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
unattended operation. For each M-code, there's an A and B
counter. This provides more flexibility, because you can reset
them to 0 independently.
For example, you could use M30 A to count parts each shift,
and M30 B to count parts each week. The cycle counters
persist across the controller's power cycles.
Monitor Cycle Counters
In the MDI Line DRO field, type ADMIN
CYCLECOUNTER to show or hide the counters and to
reset them to 0.
©Tormach® 2026
Specifications subject to change without notice.
Page 143
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 144

7.6 SYSTEM FILE MANAGEMENT
To keep the files on your system backed up and organized, use
the following controls:
7.6.1 Manage System Files
144
7.6.2 Create Backup Files
144
7.6.3 Restore Backup Files
145
7.6.4 Import and Export the Tool Table
146
7.6.1 Manage System Files
Use the File tab to manage system files on the PathPilot
controller. For information, see "Transfer Files to and From the
Controller" (page 96).
To manage system files:
From the PathPilot interface, on the File tab, do any of
the following from the Controller Files window:
o
Select a file, and then select New Folder, Rename, or
Delete.
o
Select a file, and go to the Options
menu. Then,
select Copy, Cut, or Paste.
To navigate through the system files:
Select Back or Home.
7.6.2 Create Backup Files
1.
Insert a blank, formatted USB drive into the PathPilot
controller.
Note: To prevent errors when backing up and
restoring files, only use a blank, formatted USB
drive.
2.
From the PathPilot interface, on the Main tab, in the
MDI Line DRO field, type ADMIN SETTINGS BACKUP.
Then select the Enter key.
PathPilot generates a backup .zip file, and the Admin
Settings Backup dialog box displays.
Figure 7-100: Admin Settings Backup dialog box.
3.
From the Admin Settings Backup dialog box, specify
where (on the PathPilot controller or on a USB drive) to
save the backup .zip file.
4.
Select Save.
The backup .zip file is saved in the location you specified
in Step 3.
5.
If you saved the backup .zip file on the PathPilot
controller, you must manually transfer it — along with
other files you want to back up (like G-code programs)
— to a USB drive. From the PathPilot interface, on the
File tab, in the Controller Files window, select the
backup .zip file and any other files you want to back up.
Figure 7-101: Controller Files window on the File tab.
Note: Files must have unique names. If they
don't, PathPilot prompts you to overwrite or
rename files, or cancel the file transfer.
©Tormach® 2026
Specifications subject to change without notice.
Page 144
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.6 System File Management


---

## PDF Page 145

7: PATHPILOT TOOLS AND FEATURES
7.6 System File Management
6.
To prevent errors, make sure you don't include the
following folders:
l logfiles
l media
l ReleaseNotes
l subroutines
l USB
7.
Select Copy to USB.
The files are copied and display in the USB Files window.
8.
Eject the USB drive from the PathPilot controller.
9.
From the PathPilot interface, select Exit.
10.
Verify that all files are properly saved: insert the USB
drive on a device other than the PathPilot controller, and
review the list of files on the USB drive.
11.
(Optional) As an extra precaution, copy all the files onto
the device.
About Backup Files
Make a regular backup of all tool offset and fixture information
and machine settings stored on your PathPilot controller. Store
the file externally to use if you replace your controller or
restore it to factory settings.
7.6.3 Restore Backup Files
1.
Insert the USB drive with your backup files into the
PathPilot controller.
2.
From the PathPilot interface, on the Main tab, in the
MDI Line DRO field, type ADMIN SETTINGS
RESTORE. Then select the Enter key.
The Admin Settings Restore dialog box displays.
Figure 7-102: Admin Settings Restore dialog box.
3.
From the Admin Settings Restore dialog box, navigate to
the backup .zip file on the USB drive, and then select OK.
The PathPilot operating system restores the backup, then
restarts.
4.
If you backed up any other files onto the USB drive, you
must manually transfer the files to the PathPilot
controller. From the PathPilot interface, on the File tab,
in the USB Files window, select the files you want to
transfer.
Figure 7-103: USB Files window on the File tab.
Note: To navigate backward, select Back. To
navigate to the top level, select USB.
5.
From the Controller Files window, select the folder into
which you want to copy the files.
©Tormach® 2026
Specifications subject to change without notice.
Page 145
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 146

6.
Select Copy From USB.
The files display in the Controller Files window.
Note: Files must have unique names. If they
don't, PathPilot prompts you to overwrite or
rename files, or cancel the file transfer.
7.6.4 Import and Export the Tool Table
You can manage the tool table using an external .csv file.
Figure 7-104: Export and Import buttons on the Offsets tab.
Import a .csv File
1.
Transfer the .csv file to a USB drive.
2.
Insert the USB drive into the PathPilot controller.
3.
Confirm that the PathPilot controller is on.
4.
From the Offsets tab, select Import.
The Import dialog box displays.
Figure 7-105: Import dialog box.
5.
Navigate to the .csv file on the USB drive. Then, select
OK.
The .csv file updates the tool table.
Export the Tool Table as a .csv File
1.
From the Offsets tab, select Export.
PathPilot generates the .csv file, and the Export dialog
box displays.
Figure 7-106: Export dialog box.
2.
In the Name DRO field, type the name for the .csv file.
3.
Select Save.
The .csv file is saved in the File tab.
4.
From the File tab, select the newly created .csv file, and
then select Copy to USB.
5.
Select Eject.
It's safe to remove the USB drive from the controller.
©Tormach® 2026
Specifications subject to change without notice.
Page 146
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.6 System File Management


---

## PDF Page 147

BASIC OPERATIONS
IN THIS SECTION, YOU'LL LEARN:
About the basic operations required for most projects, organized as a suggested project workflow.
CONTENTS
8.1 Start the Machine
148
8.2 Bring the Machine Out of Reset
149
8.3 Reference the Machine
150
8.4 Jog the Machine
151
8.5 Manually Control the Spindle
153
8.6 Load G-Code
154
8.7 Install a Tool in an ER Collet Spindle
155
8.8 Set Tool Length Offsets
156
8.9 Set Work Offsets
161


---

## PDF Page 148

8.1 START THE MACHINE
Power on the machine and the PathPilot controller.
1.
Turn the Main Disconnect switch to ON on the side of
the electrical cabinet.
2.
Twist out the machine's red Emergency Stop button,
which enables movement to the machine axes and the
spindle.
3.
Press the machine's Reset button (next to the
Emergency Stop button).
©Tormach® 2026
Specifications subject to change without notice.
Page 148
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.1 Start the Machine


---

## PDF Page 149

8: BASIC OPERATIONS
8.2 Bring the Machine Out of Reset
8.2 BRING THE MACHINE OUT OF RESET
Select Reset.
Figure 8-1: Reset button.
For more information on reset mode, see "About Reset Mode"
(below).
8.2.1 About Reset Mode
When the machine is first powered on, or after an emergency
stop, the Reset button flashes. When you select the flashing
Reset button, PathPilot verifies communication to the machine
and does the following activities:
l Brings the machine out of an emergency stop condition
l Clears alarms
l Clears the tool path backplot
l Resets all modal G-codes to their normal state
l Rewinds the currently loaded G-code program
l Stops machine motion, but is not a replacement for the
Emergency Stop button
You can select the Reset button any time while the machine is
on.
©Tormach® 2026
Specifications subject to change without notice.
Page 149
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 150

8.3 REFERENCE THE MACHINE
1.
Verify that the machine can freely move to its reference
position (at the ends of travel).
2.
To verify that the tooling is clear of any possible
obstructions, reference the Z-axis before referencing the
other axes: from the PathPilot interface, select Ref Z.
Figure 8-2: Reference buttons.
3.
Once the spindle is clear of any possible obstructions,
continue referencing all axes.
Note: You can select the buttons one after
another. Once the machine references one axis,
it'll move on to the next.
After each axis is referenced, its button light comes on.
For more information on referencing the machine, see "About
Referencing" (below).
8.3.1 About Referencing
You must reference the machine to establish a known position
for PathPilot. The position that's set while referencing the
machine is the origin of the machine coordinate system.
Without referencing the machine, PathPilot won't know the
current position of the machine axes.
You must reference the machine at the following times:
l After you power on the machine
l After you push in the Emergency Stop button
l Before running a G-code program
l Before using MDI commands
l Before setting work or tool offsets
l After a collision or an axis stall/fault
When referencing, the machine moves each axis to the end of
its travel. The machine stops at the limit switch, which sets
the axis’ reference position.
©Tormach® 2026
Specifications subject to change without notice.
Page 150
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.3 Reference the Machine


---

## PDF Page 151

8: BASIC OPERATIONS
8.4 Jog the Machine
8.4 JOG THE MACHINE
To switch between jogging modes:
From the Manual Control area, in the Jog group, select
Jog.
PathPilot toggles between continuous velocity mode and
step mode.
Figure 8-3: Jog button.
When the Cont green light is on, continuous velocity
mode is selected.
When the Step green light is on, step mode is selected.
To use continuous velocity mode:
Set the velocity: drag the Jog Speed slider.
Figure 8-4: Jog Speed slider.
For more information on continuous velocity mode, see "About
Continuous Velocity Jogging" (below).
To use step mode, select the step size. Do one of the
following, depending on your accessories:
l In the Manual Control area, in the Jog group, select the
step size.
The Step button's light comes on, indicating which step
size is active.
Figure 8-5: Step buttons (in G20 mode).
l On the (optional) Jog Shuttle, press the Step button to
toggle the currently selected step size.
In the PathPilot interface, the Step button's light comes
on, indicating which step size is active.
For more information on step mode, see "About Step Jogging"
(below).
8.4.1 About Jogging
Jogging is the operation of manually moving an axis in various
directions (like to set up and indicate fixtures or workpieces).
You can't manually jog the machine while it's performing
automatic operations (like running a G-code program or an
MDI command).
Jog the machine using the keyboard, Jog Shuttle, or Operator
Console pendant. Whichever device you're jogging with, you
can either:
l Jog the machine at a consistent velocity (for information,
see "About Continuous Velocity Jogging" (below)).
l Jog the machine in steps (for information, see "About
Step Jogging" (below)).
For more information, see "Jog Controls Reference" (on the
next page).
About Continuous Velocity Jogging
While jogging in continuous velocity mode, the machine moves
at a constant speed for as long as:
l A keyboard key is pressed
l The Jog Shuttle outer ring is twisted away from the
neutral position
l The Operator Console's pendant wheel is turned in the
desired direction
This is useful when you're doing things like:
l Roughly positioning the machine (for example, to move
the spindle head away from the workpiece).
l Moving the machine a certain distance at a constant
speed.
About Step Jogging
While jogging in step mode, the machine moves one step at a
time. The jog step sizes range depending on the programming
mode you are using:
l Imperial (G20) Mode 0.00025 in. to 0.1000 in.
l Metric (G21) Mode 0.010 mm to 2.00 mm
Step jogging mode is useful to finely move the machine, like
when you're indicating a workpiece or manually setting tool
lengths.
The jog keys on the keyboard only move the machine in steps
when step mode is indicated in PathPilot. The inner wheel on
the jog shuttle always moves the machine in steps, regardless
of which mode is indicated in PathPilot. The Operator
©Tormach® 2026
Specifications subject to change without notice.
Page 151
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 152

Console's pendant moves the machine in the step size that's
selected with the three-position switch.
8.4.2 Jog Controls Reference
The machine’s jogging functions are controlled by the
following:
l The Jog group of the Manual Control area in the
PathPilot interface
l The keyboard
l The (optional) Jog Shuttle or Operator Console pendant
Axis
Direction
Keyboard Key
Jog Shuttle
X-
Axis
Positive
Right Arrow
Clockwise
Negative
Left Arrow
Counterclockwise
Y-
Axis
Positive
Up Arrow
Clockwise
Negative
Down Arrow
Counterclockwise
Z-
Axis
Positive
Page Up
Clockwise
Negative
Page Down
Counterclockwise
A-
Axis
Positive
Period
Clockwise
Negative
Comma
Counterclockwise
Jogging in PathPilot
From the PathPilot interface, in the Manual Control area, the
Jog group has the following functions:
l The Jog button, which toggles between continuous
velocity mode and step mode.
l The Jog Speed slider, which controls the machine’s jog
rate (whether in continuous velocity mode or in step
mode).
The jog rate is measured as a percentage of the
machine's maximum jog rate.
Jogging with the Keyboard
Pressing the keys results in the following actions:
l [KEY] jogs the axis at the current jog rate.
l [KEY]+Shift jogs the axis at the maximum jog rate.
Jogging with the (Optional) Jog Shuttle or Operator
Console Pendant
Both the jog shuttle and operator console pendant provide
manual jogging controls, but with slightly different physical
interfaces:
l Axis Movement
o
Jog Shuttle: An inner wheel provides precise,
incremental jogging. Each detent (click) moves the
selected axis by one jog step increment. An outer ring
provides smooth, continuous jogging based on
rotation speed.
o
Pendant: Provides variable-speed jogging based on
rotation, similar to the shuttle’s outer ring.
Note: Rotating clockwise jogs the axis in the
positive direction. Rotating counterclockwise
jogs the axis in the negative direction.
l Axis Selection
o
Jog Shuttle: Four buttons let you toggle between the
X, Y, Z, and A axes.
o
Pendant: A four-position switch selects the active
axis.
Note: The currently selected axis displays in
PathPilot: in the Position Status group, there's a
green light to the left of the Axis DRO field.
When it's on, it indicates the active axis.
l Step Size Selection
o
Jog Shuttle: A dedicated Step button toggles between
available jog step sizes.
o
Pendant: A three-position switch selects the jog step
size.
©Tormach® 2026
Specifications subject to change without notice.
Page 152
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.4 Jog the Machine


---

## PDF Page 153

8: BASIC OPERATIONS
8.5 Manually Control the Spindle
8.5 MANUALLY CONTROL THE SPINDLE
1.
Verify that the machine is powered on and out of reset.
2.
From the PathPilot interface, in the Manual Control area,
locate the Spindle group.
Figure 8-6: Spindle group.
3.
In the RPM DRO field, type the desired RPM speed. Then
select the Enter key.
Figure 8-7: RPM DRO field.
4.
Select FWD to start the spindle in the forward direction.
5.
Select Stop to stop the spindle.
8.5.1 About the Spindle
The machine spindle gives power to the cutting tool, which
allows it to remove material from the workpiece. The spindle
is driven by the spindle motor.
Operate the spindle either manually or by G-code commands
(entered in the MDI Line DRO field or programmed into a G-
code program).
The machine's spindle rotates clockwise (forward) at a
specified spindle speed.
8.5.2 Spindle Controls Reference
The spindle speed is measured in revolutions per minute
(RPM).
The spindle speed range is 10,000 rpm to 24,000 rpm.
Use lower spindle speeds when you're using larger cutting
tools; use higher spindle speeds when you're using smaller
cutting tools.
©Tormach® 2026
Specifications subject to change without notice.
Page 153
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 154

8.6 LOAD G-CODE
To run a G-code program on a PathPilot controller, you must
first verify that the file is on the controller. For more
information on transferring and moving files, see "Transfer
Files to and From the Controller" (page 96).
To load G-code:
1.
From the File tab, in the Controller Files window, select
the desired .nc file.
2.
Select Load.
Figure 8-8: Controller Files window on the File tab.
Note: This function is only available for files
stored on the PathPilot controller.
PathPilot loads the G-code file and opens the Main tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 154
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.6 Load G-Code


---

## PDF Page 155

8: BASIC OPERATIONS
8.7 Install a Tool in an ER Collet Spindle
8.7 INSTALL A TOOL IN AN ER COLLET SPINDLE
The ER20 collet is self-extracting: the collet must be mounted
in the nut before the nut and collet assembly are put into the
collet holder.
If you look closely, you'll notice that the collet nut isn't
symmetrical — an area of the retaining ring is cut away. When
the collet is correctly mounted in the nut, the collet is pushed
forward and out of the collet holder taper while the nut is
slightly loosened (which results in self-extraction).
NOTICE! If you don't install the collet in the order
specified, there's a risk that the collet and/or nut could be
damaged, and the collet's holding capacity could be
reduced.
To install a tool in an ER collet spindle:
1.
Hold the collet at an angle, and then insert it into the
collet nut as shown in the following image.
Figure 8-9: A collet inserted into the collet nut.
2.
Tilt up the collet to snap it into place.
Figure 8-10: The collet tilted into place.
3.
Loosely thread the nut on the spindle, insert the tool, and
then tighten the collet.
©Tormach® 2026
Specifications subject to change without notice.
Page 155
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 156

8.8 SET TOOL LENGTH OFFSETS
Before running a G-code program, PathPilot must know the
length of the tools that are required for the program. For more
information on using tool length offsets, see "About Tool
Offsets" (below).
Note: You can import a .csv file with tool length
offset data. For information, see "Import and Export
the Tool Table" (page 146).
To set tool length offsets:
1.
Verify that the machine is powered on and out of reset.
2.
Put a tool into a tool holder, and set it aside to measure.
3.
From the PathPilot interface, on the Offsets tab, verify
that the Tool tab is selected.
4.
Find the Tool Table window.
Figure 8-11: Tool Table window on the Offsets tab.
5.
Depending on your workflow, you can measure your tools
using any of the following methods:
l Use an Electronic Tool Setter For information, see
Use an to Measure Tools.
l Touch Off of a Known Reference Height For
information, see "Touch Off the Tool Length Offsets"
(below).
8.8.1 About Tool Offsets
Tool offsets allow you to use various tools while still
programming with respect to the workpiece. Tools can have
different lengths (and, while using cutter radius compensation,
different diameters).
The most common tool offset is the tool length offset: when
you change tools, PathPilot must account for the difference in
tool length. In CNC machines, the tool length offset is applied
using a G43 command.
The tool length offset is the distance from the tip of the tool to
the spindle nose. Because the ER20 collet spindle doesn't
provide a repeatable tool length, the tool length must be
measured every time that you remove a tool from the spindle.
To speed up tool changes, we recommend using an Electronic
Tool Setter (PN 31875) when measuring tool lengths.
Before you begin a G-code program, you must verify the
lengths of the tools in the program, and make sure that the
lengths agree with the tool length offsets set in PathPilot:
l Each time you change tools, you must apply a new tool
length offset in PathPilot.
l Each time you replace a tool, you must remeasure its
length, and apply a new tool length offset in PathPilot.
NOTICE! You must always verify that the physical
length of a tool agrees with the tool length offset
value set in PathPilot. If you don't, there's a risk
that the tool length offset misrepresents the
currently active tool in the spindle, which may
result in a machine crash or damaged tooling,
workpieces, or fixtures.
8.8.2 Touch Off the Tool Length Offsets
Touch off the tool length offsets by using a reference surface
with a known height, which gives you a basis to measure any
other tool lengths. Use any surface that is parallel (within 0.02
mm) to the machine table. For example:
l A 1-2-3 Block Set (PN 31950)
l Box parallel
There are two steps to touch off the tool offsets. Complete the
following steps in the order listed:
Set a Known Reference Height
156
Measure Tools Using a Known Reference Height
157
Set a Known Reference Height
This procedure sets a new Z zero position for the currently
selected work offset.
To set a known reference height:
1.
Identify a precision surface to use as a reference surface
(like a 1-2-3 Block Set), and put it below the spindle on
the machine table. Verify that there's a clear path from
the spindle to the machine table.
©Tormach® 2026
Specifications subject to change without notice.
Page 156
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.8 Set Tool Length Offsets


---

## PDF Page 157

8: BASIC OPERATIONS
8.8 Set Tool Length Offsets
2.
Set a new, unused work offset (like G55). From the
PathPilot interface, on the Main tab, in the MDI Line
DRO field, type a work offset. Then select the Enter key.
For information, see "Set Work Offsets" (page 161).
3.
If there's already a tool in the spindle, remove it.
4.
From the PathPilot interface, in the Tool DRO field, type
0. Then select the Enter key.
5.
Slowly jog the Z-axis down (-Z) until it's 0.04 in. (1 mm)
from the reference surface.
6.
Measure the thickness of a piece of paper, and put the
paper on the reference surface. Note the thickness of the
paper for later.
7.
While moving the paper back-and-forth across the
reference surface, slowly step the Z-axis down (-Z) until
you feel a light pull on the piece of paper. This indicates
that the paper is contacting the spindle.
Note: It's easier to use step jogging for this
task. For information on step jogging, see
"About Step Jogging" (page 151).
8.
From the PathPilot interface, in the Z-axis work offset
DRO field, type the thickness of the piece of paper. Then
select the Enter key.
Figure 8-12: Z-axis work offset DRO field.
The reference surface is now set as the Z zero position in
the current coordinate system.
9.
To set the tool length offset, go to Measure Tools Using
a Known Reference Height.
Measure Tools Using a Known Reference Height
This procedure sets the tool length offset using a known
reference height. If you have not yet done so, you must first set
the Z zero position; go to Set a Known Reference Height.
To measure tools using a known reference height:
1.
Verify that the reference surface is still on the machine
table with the piece of paper.
2.
From the PathPilot interface, on the Offsets tab, find an
unused tool number in the Tool Table window. Then,
type a description for the tool you're measuring.
3.
Put the tool holder into the spindle.
4.
From the PathPilot interface, in the Tool DRO field, type
the number of the tool. Then select the Enter key.
Figure 8-13: Tool DRO field.
5.
Slowly jog the Z-axis down (-Z) until it is 0.04 in. (1 mm)
from the reference surface.
6.
Continue to slowly jog the Z-axis while slowly moving
the piece of paper back-and-forth on the reference
surface.
7.
Stop jogging the Z-axis when you feel a light pull on the
piece of paper, which indicates that it is in contact with
the tool.
8.
From the PathPilot interface, on the Offsets tab, in the
Tool Table, select the tool for which you previously wrote
a description.
9.
In the Touch Z DRO field, type the thickness of the piece
of paper. Then select the Enter key.
Figure 8-14: Touch Z DRO field and button.
10.
Select Touch Z.
The length of the tool is stored in the Tool Table
window.
11.
From the Tool Table window, in the Length column,
verify that the length of the tool is correct.
12.
In the Diameter column, type the diameter of the tool.
Then select the Enter key.
©Tormach® 2026
Specifications subject to change without notice.
Page 157
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 158

13.
Jog the Z-axis up (+Z).
You've completed the procedure to measure a tool
offset. Repeat this procedure for any remaining tooling
you have. Once you're done adding tool length offsets,
switch back to your work coordinate system.
8.8.3 Use an Electronic Tool Setter (ETS) to
Measure Tools
An Electronic Tool Setter (PN 31875) is a device used to
measure the length of a cutting tool.
There are two steps to use an ETS. Complete the following
steps in the order listed:
Set up the Electronic Tool Setter (ETS)
158
Measure Tools Using an Electronic Tool Setter (ETS)
159
Set up the Electronic Tool Setter (ETS)
There are three steps to set up the ETS. Complete the
following steps in the order listed:
Set the ETS Height
158
Reference the Spindle Nose
158
Set the G37 Position
158
Set the ETS Height
Before you begin to use the ETS, you must first use the
PathPilot interface to set its work offset.
To set the ETS height:
1.
Set a new Z zero position for the currently selected work
offset.
For information, see Set a Known Reference Height.
2.
Put the ETS on the known reference height (from Step
1).
3.
Jog the spindle until it's over the ETS.
4.
From the PathPilot interface, on the Probe tab, select the
ETS Setup tab. Then find the ETS Work Offset Setup
group, and select Move & Set ETS Height.
Figure 8-15: Move & Set ETS Height button on the
Probe tab.
The Z-axis moves down (-Z) until the spindle nose
contacts and triggers the ETS.
5.
In the ETS Height DRO field, verify that the length of the
ETS updated.
Reference the Spindle Nose
Note: You must repeat this procedure after each time
that you reference the Z-axis.
1.
Identify a home location for your ETS. You can use
anywhere within the machine's area of travel as the
home location, so long as you can center the spindle
above the ETS.
Tip! We recommend putting the ETS toward
the Y+ end of travel (where it's outside of the 2
ft × 4 ft standard work envelope, and on the
surface of the vacuum table). For information,
see "ETS Placement Layout" (page 269).
2.
Remove the tool holder from the spindle.
3.
From the PathPilot interface, in the Tool DRO field, type
0. Then select the Enter key.
4.
Jog the spindle until it's over the ETS. Then, slowly jog
the Z-axis down (-Z) toward the contact pad on the ETS.
5.
From the PathPilot interface, on the ETS Setup tab, find
the ETS G37 Spindle Nose Reference section, and select
ETS Spindle Ref.
Figure 8-16: ETS Spindle Ref button on the Probe tab.
The Z-axis moves down (-Z) until the spindle nose
contacts and triggers the ETS.
The spindle nose is now referenced to the ETS.
Set the G37 Position
1.
Load the longest tool that you'll be using into the
spindle. From the PathPilot interface, change to that
tool.
©Tormach® 2026
Specifications subject to change without notice.
Page 158
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.8 Set Tool Length Offsets


---

## PDF Page 159

8: BASIC OPERATIONS
8.8 Set Tool Length Offsets
NOTICE! If you use a shorter tool to set the G37
position, there's a risk of tool collision when using a
longer tool.
2.
Jog the tool so that it's about 20 mm above the tool
setter's contact pad.
3.
From the PathPilot interface, on the ETS Setup tab, find
the ETS G37 Position Setup group, and select Set G37
ETS Position.
Figure 8-17: Set G37 ETS Position on the Probe tab.
The G37 position is now set.
4.
Verify that the X, Y, and Z ETS position displayed in their
DRO fields are accurate.
Note: The values displayed in these DRO fields
are in G53.
Measure Tools Using an Electronic Tool Setter (ETS)
Depending on your workflow, do one of the following:
Manually Measure Tool Lengths (with PathPilot)
159
Automatically Measure Tool Lengths (with G37)
159
Manually Measure Tool Lengths (with PathPilot)
1.
Plug in the ETS to the Accessory 2 port.
2.
Set up the ETS.
For information, see "Set up the Electronic Tool Setter
(ETS)" (on the previous page).
3.
Put the ETS in its home position (that you determined in
"Set up the Electronic Tool Setter (ETS)" (on the previous
page)).
4.
From the PathPilot interface, on the Offsets tab, in the
Tool Table window, in the Description column, type a
description for the tool.
5.
In the Diameter column, type the diameter of the tool.
Then select the Enter key.
6.
Install a tool into the spindle.
7.
From the PathPilot interface, type the tool number in the
Tool DRO field. Then select the Enter key.
8.
On the Offsets tab, find the Move and Set Tool Length
button and the Z only checkbox. Verify that the checkbox
is cleared, and then select Move and Set Tool Length.
Note: You should only use the Z only checkbox
to manually measure tools with a larger
diameter. When it's selected, the machine
doesn't go to the G37 position — instead, it just
moves straight down (Z-) to measure the tool.
The machine moves to the G37 position and measures
the tool with the ETS.
Note: Regardless of the initial feed rate, the
final touch off feed rate while using an ETS is
2-1/2 in. per minute (IPM).
9.
From the Tool Table window, in the Length column,
verify that the length of the tool is correct.
Automatically Measure Tool Lengths (with G37)
We recommend using the G37 G-code command to measure
tools. This method simplifies the tool measurement procedure
— you're letting the machine do the work for you — but it also
increases tool length accuracy and reduces tool change times
in multi-tool programs.
Depending on your workflow, do one of the following:
l Use G37 in the MDI Line DRO Field
1.
Set up the ETS.
For information, see "Set up the Electronic Tool
Setter (ETS)" (on the previous page).
©Tormach® 2026
Specifications subject to change without notice.
Page 159
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 160

2.
Put the ETS in its home position (that you
determined in "Set up the Electronic Tool Setter
(ETS)" (page 158)).
3.
Put a tool into the spindle.
4.
From the PathPilot interface, in the MDI Line DRO
field, type G37. Then select the Enter key.
The spindle moves to the ETS position, measures
the length of the tool, and applies that length to
the currently selected tool in the tool offsets table.
l Use G37 in a G-Code Program
1.
Set up the ETS.
For information, see "Set up the Electronic Tool
Setter (ETS)" (page 158).
2.
From the PathPilot interface, load a G-code
program with a G37 command.
3.
Select Cycle Start.
When the program reaches the G37 command, the
machine moves to the ETS and measures the
length of the tool.
For information, see "Programming" (page 163).
©Tormach® 2026
Specifications subject to change without notice.
Page 160
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.8 Set Tool Length Offsets


---

## PDF Page 199

MACHINE MAINTENANCE
IN THIS SECTION, YOU'LL LEARN:
About the required maintenance procedures that you must do so that this machine operates as
designed.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
10.1 Maintenance Safety
200
10.2 Maintenance Schedules
201
10.3 Regularly Maintaining the Machine
202


---

## PDF Page 200

10.1 MAINTENANCE SAFETY
Read and understand the following safety messages before
beginning any maintenance procedures.
10.1.1 All Maintenance Procedures
Understand that the machine is automatically controlled
and can start at any time.
Power off the machine and disconnect the pneumatic
supply before doing any maintenance procedures.
When appropriate, lockout/tagout the Main Disconnect
switch and the pneumatic supply line before doing any
maintenance procedures.
Wear safety eye protection rated for ANSI Z87+.
10.1.2 Swarf Maintenance Procedures
Wear work gloves.
©Tormach® 2026
Specifications subject to change without notice.
Page 200
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
10: MACHINE MAINTENANCE
10.1 Maintenance Safety


---

## PDF Page 201

10: MACHINE MAINTENANCE
10.2 Maintenance Schedules
10.2 MAINTENANCE SCHEDULES
To keep your machine running as smoothly as possible, you
must regularly do the following maintenance procedures.
Note: Before you begin any maintenance procedures,
read and understand "Maintenance Safety" (on the
previous page).
If you disassemble any components, refer to the machine's
reference drawings when you've completed the maintenance
procedure. For information, see "Diagrams and Parts Lists"
(page 233). For any additional support, we can help. Create a
support ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for guidance on
how to proceed.
10.2.1 Daily
Clean the machine of any dust or swarf buildup with a
vacuum and brushes.
Wipe dust off of the linear rails and ball screws with a
clean cloth.
Examine cutting tools for chips or dull cutting edges.
Inspect the spindle taper, collet nut, and collets for
buildup and, if necessary, clean the components.
Use a rust inhibitor on all exposed, non-lubricated, non-
painted metal surfaces.
Note: Don't use rust inhibitor on the ball screws
or the linear rails.
10.2.2 Weekly
Clean all exterior surfaces with a clean rag.
Inspect the dust collection hose and dust collector for
blockages (or any large debris that could cause a
blockage).
Examine the chiller's water level and, if necessary, add
distilled water.
Verify that the machine's lubrication points have been
properly lubricated.
10.2.3 Monthly
Clean the electrical cabinet vents of dust with a clean
cloth or compressed air.
Inspect the spindle's ER20 taper for wear, damage, or
dust buildup.
10.2.4 Quarterly
Drain the water from the chiller and replace it with
fresh, distilled water.
Examine the water chiller lines for flexibility and signs of
wear (like cracking). Replace the lines if stiffness has
increased or if they're damaged.
Lubricate the ball screws.
10.2.5 Semi-Annually
Lubricate the linear blocks.
Lubricate the axis motor couplers with synthetic silicone
grease.
©Tormach® 2026
Specifications subject to change without notice.
Page 201
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 202

10.3 REGULARLY MAINTAINING THE MACHINE
10.3.1 Clean the Linear Rails and Ball Screws
202
10.3.2 Clean the Spindle Taper, Collet Nut, and Collet
202
10.3.3 Maintain the Chiller
203
10.3.4 Lubricate the Machine
203
10.3.5 Lubricate the Axis Motor Couplers
204
10.3.6 Prevent Rust
204
10.3.1 Clean the Linear Rails and Ball Screws
You must clean the linear rails and ball screws for the machine
to operate properly and to extend its service life. Doing so
helps to reduce the wear in the seals and increase the service
life of the parts.
To clean the linear rails and ball screws:
1.
Power off the machine and the PathPilot controller.
a.
Push in the machine's red Emergency Stop button,
which removes power to motion control.
b.
From the PathPilot interface, select Exit.
c.
Turn the Main Disconnect switch to OFF on the side
of the electrical cabinet.
2.
Wipe the linear rails (daily, or every 8 hours of
operation) with a clean, non-linting towel or cloth.
3.
Wipe the ball screws on the X and Z axes (daily, or every
8 hours of operation) with a clean, non-linting towel or
cloth.
4.
Inspect the Y-axis ball screw with a flashlight, and
determine if it must be cleaned of dust and debris. If
necessary, wipe the ball screw with a clean, non-linting
towel or cloth.
Note: The Y-axis ball screw is protected from
dust and debris by the router table. This means
that you can clean it less frequently.
5.
Power on the machine and the PathPilot controller.
a.
Turn the Main Disconnect switch to ON on the side of
the electrical cabinet.
b.
Twist out the machine's red Emergency Stop button,
which enables movement to the machine axes and
the spindle.
c.
Press the machine's Reset button (next to the
Emergency Stop button).
d.
Bring the machine out of reset and reference it.
6.
Jog the machine through its full length of travel.
As the machine moves, the bearing blocks apply a thin
layer of grease to the linear rail, and the ball nuts apply
a thin layer of grease to the ball screws.
10.3.2 Clean the Spindle Taper, Collet Nut, and
Collet
While you use the machine, dust and resin can build up in the
spindle taper, collet nut and the slots of the collets. Before
each tool change, you must inspect and clean the spindle
taper, collet nut, and collets (and, if necessary, replace the
components).
WARNING! Tool Pullout Hazard: You must verify that
the spindle taper, collet nut, and collet aren't worn
and don't have dust buildup. If you don't, tool life and
performance could decrease, and it could introduce
the possibility for tool runout and reduced holding
power on the tool.
Spindle Taper
Inspect and clean the spindle taper as necessary.
Collet Nut
l Inspect the inside of the collet nut for dust and resin
buildup before each tool change, and clean it if
necessary.
Figure 10-1: Example of a collet nut with dust and
resin buildup.
l Inspect the collet nut for wear and damage every day,
and replace it if necessary.
Collet
l Inspect the slots of the collet for dust and resin buildup,
and clean it if necessary.
©Tormach® 2026
Specifications subject to change without notice.
Page 202
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
10: MACHINE MAINTENANCE
10.3 Regularly Maintaining the Machine


---

## PDF Page 203

10: MACHINE MAINTENANCE
10.3 Regularly Maintaining the Machine
Figure 10-2: Example of a collet with dust and resin
buildup.
l Inspect the collet for wear and damage before each tool
change, and replace it if necessary.
10.3.3 Maintain the Chiller
The chiller circulates a continuous supply of cool water through
the spindle, which regulates its temperature.
NOTICE! To keep the spindle's temperature regulated,
you must verify that the chiller is always operating
properly by maintaining it as detailed in this section. If
you don't, there's a risk that the spindle could overheat,
which could cause spindle bearing failure.
l Only use distilled water in the chiller to avoid corrosion
and/or bacterial buildup in the chiller, coolant lines, and
spindle.
l Examine the water level of the chiller weekly and, if
necessary, refill it with distilled water.
l Drain and replace the water in the chiller with fresh,
distilled water every 3 months. Over time, buildup of
corrosion and dirt in the chiller can reduce the
performance of the chiller.
10.3.4 Lubricate the Machine
To keep the machine operating properly, and to extend the
service life of the machine, you must verify that the linear rails
and ball screws are properly lubricated.
Linear Rails
The linear bearing blocks are sealed and lubricated during
machine assembly, which makes them relatively low
maintenance components. The recommended service interval
(from the linear bearing manufacturer) is between 500-1000
km, depending on load rating. We recommend lubricating the
linear bearing blocks every 6 months, which assumes that
you're using the machine at its maximum velocity for 8 hours
every day, and that the lubrication interval is every 500 km.
l Recommended Lubrication Quantity 0.3 cm3 grease
per block
NOTICE! You must only use the amount of
lubrication and at the pressure specified in this
section. If you use excessively high quantities of
lubricant, or excessively high lubricating pressure, it
could cause machine damage.
l Maximum Lubricating Pressure 30 bar
l Recommended Grease Type Hiwin G05 General Type
Grease (or greases that are in accordance with DIN
51825 of consistency class NLGI No. 2 as specified by
DIN 51818)
Note: Don't use greases with solid particles,
like graphite or MoS2.
To lubricate the linear rails:
1.
Identify the machine's bearing blocks.
Figure 10-3: Example of bearing blocks.
©Tormach® 2026
Specifications subject to change without notice.
Page 203
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 204

2.
Identify the lubrication port on the bearing blocks.
Figure 10-4: Lubrication port on a bearing block.
3.
Find the Grease Gun (PN 50360) and the Grease Nozzle
Kit (PN 50389) provided with the machine. From the
Grease Nozzle Kit, identify the concave nozzle.
4.
Assemble the Grease Gun with the concave nozzle, and
lubricate the linear bearings with the recommended
lubrication quantity once every 6 months.
Figure 10-5: Lubricating a bearing block with the
Grease Gun.
Ball Screws
The recommended lubrication interval (from the ball screw
manufacturer) is every 2-3 months or 100 km of travel. We
recommend lubricating the ball screws every 2-3 months,
which assumes that you're using the machine at its maximum
velocity for 8 hours every day.
l Maximum Lubricating Pressure 30 bar
NOTICE! You must only use the amount of
lubrication and at the pressure specified in this
section. If you use excessively high quantities of
lubricant, or excessively high lubricating pressure, it
could cause machine damage.
l Recommended Grease Type Hiwin G05 General Type
Grease (or greases that are in accordance with DIN
51825 of consistency class NLGI No. 2 as specified by
DIN 51818)
Note: Don't use greases with solid particles,
like graphite or MoS2.
1.
Identify the three remote-mounted lubrication ports.
2.
Use the Grease Gun (PN 50360) provided with the
machine (and its attachments) to lubricate the ball
screws with the recommended lubrication quantity once
every 2-3 months.
Figure 10-6: Lubricating a remote-mounted lubrication
port with the Grease Gun.
10.3.5 Lubricate the Axis Motor Couplers
The rubber bushing in the axis motor couplers may begin to
squeak or make a ticking noise after time. A small amount of
synthetic silicone grease on the mating surfaces of the red
polyurethane bushing can prevent them from squeaking.
To lubricate the axis motor couplers:
1.
Remove the axis motor.
2.
Separate the two halves of the coupler, and put a small
amount of synthetic silicone grease on the rubber
bushing faces.
3.
Re-assemble the coupler, and re-install the motor.
10.3.6 Prevent Rust
Take proper care to protect all exposed iron and steel surfaces
on your machine. To reduce the possibility of rust, you must
regularly do the following:
©Tormach® 2026
Specifications subject to change without notice.
Page 204
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
10: MACHINE MAINTENANCE
10.3 Regularly Maintaining the Machine


---

## PDF Page 205

10: MACHINE MAINTENANCE
10.3 Regularly Maintaining the Machine
l Clean all exterior surfaces with a mild cleaner.
l Only operate the machine in a temperature- and
humidity-controlled environment. Extreme changes in
temperature or humidity can create condensation on the
machine.
l Put LPS 3® (or similar rust inhibitor) on all exposed, non-
painted metal surfaces before leaving the machine
unused.
If you find rust on the machine table, go to Remove Rust.
©Tormach® 2026
Specifications subject to change without notice.
Page 205
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 206

[No extractable text; see original PDF page.]


---

## PDF Page 207

TROUBLESHOOTING
IN THIS SECTION, YOU'LL LEARN:
About common causes of failure in this machine, and our recommendations for diagnosing and
correcting them.
WARNING! Electrocution Hazard - Electrical Cabinet: Do not make or disconnect connections under
power.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
11.1 Troubleshooting Safety
208
11.2 Getting Help
209
11.3 Required Tools
210
11.4 Frequently Found Problems
211
11.5 Electrical Service
212
11.6 Power Distribution Subsystem
213
11.7 Control Power Subsystem
214
11.8 Axes Drive Subsystem
216
11.9 Spindle Drive Subsystem
224
11.10 Operator Console Troubleshooting
228


---

## PDF Page 208

11: TROUBLESHOOTING
11.1 Troubleshooting Safety
©Tormach® 2026
Specifications subject to change without notice.
Page 208
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.1 TROUBLESHOOTING SAFETY
Read and understand the following safety messages before beginning any troubleshooting procedures.
Take things slow and be extra cautious. During troubleshooting, you’re exposed to more hazards than during normal operation. For
example, you may have to do an electrical test on a live circuit, remove guards, or override a safety switch to make an observation.
Power off the machine and disconnect the pneumatic supply before doing any troubleshooting procedures.
When appropriate, lockout/tagout the Main Disconnect switch and the pneumatic supply line before doing any troubleshooting
procedures.


---

## PDF Page 209

11: TROUBLESHOOTING
11.2 Getting Help
©Tormach® 2026
Specifications subject to change without notice.
Page 209
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.2 GETTING HELP
We provide no-cost technical support through multiple channels. The quickest way to get the answers you need is normally in this order:
1.
Read this document.
2.
Read related documents and watch related videos at tormach.com/support.
3.
If you still need answers, gather the following information so that we may help you as quickly as possible:
l Your phone number, address, and company name (if applicable).
l Machine model and serial number, which are located next to the Main Disconnect switch.
l The version of PathPilot that you’re running.
l Any accessories that you have for your machine.
l A clear and concise description of the issue.
l Any supporting media and information that you can share with us. For example, you could:
o
Analyze what might have changed since the machine last worked correctly.
o
Record a short video.
o
Take a picture of a part.
o
For software, share log data .zip files, screen captures, or program files.
For information, see "Share Log Data .zip Files" (below).
o
From the PathPilot interface, on the Status tab, record any available information.
o
Use a digital multimeter for voltage readings.
4.
Once you've gathered the information in Step 3, contact us in the following ways:
a.
Create a support ticket: Go to tormach.com/how-to-submit-a-support-ticket
b.
Phone: (608) 849-8381 (Monday through Friday, 8 a.m. to 5 p.m. U.S. Central Standard Time)
Share Log Data .zip Files
The controller keeps log data on how the machine has been working, which you can export as a .zip file. This information helps us
troubleshoot software situations much faster.
To share log data .zip files:
1.
Put a USB drive into the PathPilot controller.
2.
From the PathPilot controller, on the Status tab, select Log Data.
PathPilot creates a file called logdata_[TODAY'S-DATE].zip, and saves it on your USB drive.
3.
Remove the USB drive from the controller. Create a support ticket with Tormach Technical Support at tormach.com/how-to-submit-
a-support-ticket for guidance on how to proceed.


---

## PDF Page 210

11: TROUBLESHOOTING
11.3 Required Tools
©Tormach® 2026
Specifications subject to change without notice.
Page 210
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.3 REQUIRED TOOLS
This procedure requires the following tools. Collect them before you begin.
l #2 Phillips screwdriver
l #3 Phillips screwdriver
l 1/8 in. flat-blade screwdriver
l 3/16 in. flat-blade screwdriver
l Digital multimeter that can test for:
o
Vac volts (up to 300 Vac)
o
Vdc volts (up to 100 Vdc)
o
Resistance (from 0 to 1M ohms)
o
Hz (frequency)
l Electrical safety gloves
l Measuring tools (like a tape measure, calipers, or dial indicator with magnetic base)
l Metric hex wrench set
l Needle nose pliers
l Trouble light, headlamp, or flashlight
l Wire stripper


---

## PDF Page 211

11: TROUBLESHOOTING
11.4 Frequently Found Problems
©Tormach® 2026
Specifications subject to change without notice.
Page 211
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.4 FREQUENTLY FOUND PROBLEMS
There are several frequently found problems with all electromechanical machinery. Among the problems that have occurred, we've found
that the following are more frequent than others:
l Loose Wires
Note: Before you begin the two-finger pull test, we recommend taking photos of the inside of the electrical cabinet to serve
as a visual reference while reconnecting any loose wires.
To determine if a wire is loose, use the two-finger pull test:
1.
Power off the machine and the PathPilot controller.
a.
Push in the machine's red Emergency Stop button, which removes power to motion control.
b.
From the PathPilot interface, select Exit.
c.
Turn the Main Disconnect switch to OFF on the side of the electrical cabinet.
2.
With your thumb and index finger, hold the wire close to its termination point, and gently tug each wire.
3.
If the wire comes loose, re-terminate and reconnect it before moving on to other wires.
l Poor Cable Connections
An improperly seated cable may allow some functions to work but cause others not to. We have found that the ribbon cables’ plug
connections can become loose during the shipping process.
1.
Power off the machine and the PathPilot controller.
a.
Push in the machine's red Emergency Stop button, which removes power to motion control.
b.
From the PathPilot interface, select Exit.
c.
Turn the Main Disconnect switch to OFF on the side of the electrical cabinet.
2.
Unplug and firmly reseat connectors.
l Limit Switches
The X-, Y- and Z-axes have one limit switch each. The X-axis limit switch is located on the left side of the gantry (X- direction). The Y-
axis limit switch is located on the left side of the machine at the Y- end of travel. The Z-axis limit switch is located at the upper limit
of motion.
To learn more about the limit switches, see "Axes Drive Subsystem" (page 216).


---

## PDF Page 212

11: TROUBLESHOOTING
11.5 Electrical Service
©Tormach® 2026
Specifications subject to change without notice.
Page 212
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.5 ELECTRICAL SERVICE
11.5.1 LED Identification
WARNING! Electrocution Hazard: When servicing the machine from inside the electrical cabinet, always use caution. Points in the
electrical cabinet have high voltages that can electrocute or shock you. Even after you've powered off the machine, electronic
devices in the electrical cabinet may retain dangerous electrical voltages. Only qualified electrical machinery technicians should
perform maintenance or troubleshooting procedures inside the electrical cabinet while power is still on.
Many electrical problems are self-apparent, and you can trace them by observing LEDs in PathPilot, LEDs in the electrical cabinet, and the
machine's actions.
LEDs in PathPilot indicate output or functional status — including the LEDs on the Status tab, which are useful for indicating if any inputs or
outputs are operational.
There are various LED indicators in the electrical cabinet. Among these are:
l Bus Board DC Power LED Indicates voltage on the DC-BUS board, power to axis drivers.
l 24 Vdc Power Supply Indicates power to the supply.
l Axis Driver Power Indicators on the X-, Y-, Z-, and A-Axis Drivers Green indicates power to each individual drive, red indicates
a fault.
l Control Board Power When on, indicates power to the control board.
l Control Board PC When flashing, indicates that the PathPilot controller is ready.
l Control Board DS9 When on, indicates that the machine is ready.
l Control Board DS10/DS11 When DS11 is on and DS10 is flashing, indicates an Ethernet connection to the PathPilot controller.


---

## PDF Page 213

11: TROUBLESHOOTING
11.6 Power Distribution Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 213
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.6 POWER DISTRIBUTION SUBSYSTEM
Electrical power is run through a single power cord to the Main Disconnect switch. This switch controls all power to the machine and the
PathPilot controller.
To troubleshoot the power distribution subsystem, read the following:
11.6.1 The Controller Won't Power On
213
11.6.1 The Controller Won't Power On
Cause: The PathPilot controller isn't plugged in to an outlet.
Probability
How-To Steps
Need More?
High
Reseat the power cord connection at both the outlet and the controller.
It's possible that the power cord could
become loose from movement.
Cause: The CB3 circuit breaker tripped.
Probability
How-To Steps
Need More?
Medium
If the monitor and the controller both don't have power, examine the
power cords for damage or exposed wires, and then reset the CB3 circuit
breaker.
CB3 affects the monitor and the
controller.
Cause: The video cable is disconnected from the PathPilot controller.
Probability
How-To Steps
Need More?
Low
Reseat the video cable connection at both the monitor and the PathPilot
controller.
If the monitor is disconnected, it could
seem like a controller power issue.


---

## PDF Page 214

11: TROUBLESHOOTING
11.7 Control Power Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 214
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.7 CONTROL POWER SUBSYSTEM
To troubleshoot the control power subsystem, read the following:
11.7.1 The Machine Won't Power On
214
11.7.1 The Machine Won't Power On
Cause: The Emergency Stop button is pushed in.
Probability
How-To Steps
Need More?
High
Twist out the Emergency Stop button and press the Reset button.
The Reset button doesn't illuminate
until after you:
1.
Twist out the Emergency Stop
button.
2.
Press the Reset button.
Cause: The DC power supply PS1 is defective.
Probability
How-To Steps
Need More?
Medium
Measure for 24 Vdc nominal between wires 401 and 402.
Before you replace the DC power
supply, power off the machine (see
"Power off the Machine" (page 58)).
Cause: The Main Disconnect switch is in the Off position.
Probability
How-To Steps
Need More?
Low
Examine the Main Disconnect switch. If it’s not already in the On position,
turn it on.
If needed, measure for 115 Vac
nominal between wires 101 and
100/N.
Cause: The mains breaker is turned off.
Probability
How-To Steps
Low
Examine the breaker. If it's not already on, turn it on.
Cause: The CB1 and/or CB2 circuit breaker tripped.
Probability
How-To Steps
Need More?
Low
1.
Measure for 115 Vac nominal between wires 105 and 104.
2.
Measure for 115 Vac nominal between wires 111 and 108.
Before you reset the tripped breaker,
power off the machine (see "Power off
the Machine" (page 58)).


---

## PDF Page 215

11: TROUBLESHOOTING
11.7 Control Power Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 215
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Cause: The contactor K1 is defective.
Probability
How-To Steps
Need More?
Low
l If the contactor's red LED is on, the contactor is latched. Use a digital
multimeter to examine the power at K1-1 and wire 121.
l If the contactor's LED is not on, press and hold the Reset button and
observe the LED on K1:
o
If it's on, K1 has a latching circuit issue.
o
If it's not on, K1 may have a coil issue.
Contactor K1 energizes the DC-BUS
board, which provides 65 Vdc to the
machine. K1 can fail by not energizing
the coil, or the contacts could fail.


---

## PDF Page 216

11: TROUBLESHOOTING
11.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 216
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.8 AXES DRIVE SUBSYSTEM
The axis motors are used to move the X-, Y-, Z-, and A-axis. The motors are powered by electronic driver modules (also referred to as axis
drivers) which receive control signals from the control board. The electronic driver modules are powered by the DC-BUS board. Travel limits
are established by limit switches when the machine is referenced.
To troubleshoot the axes drive subsystem, read the following:
11.8.1 All Axes Won't Move When Commanded
216
11.8.2 One Axis Won't Move (or Only Moves in One Direction), and Other Axes Move
217
11.8.3 Axis Movement is Noisy
219
11.8.4 Can't Reference All Axes
220
11.8.5 Lost Motion on Axis Travel
222
11.8.1 All Axes Won't Move When Commanded
Cause: Control signals aren't reaching the electronic driver modules.
Probability
How-To Steps
Need More?
High
1.
Power off the machine (see "Power off the Machine" (page 58)).
2.
Examine the connectors at the J6 connection at the machine control board,
and the ribbon cables at the axes drivers:
a.
Remove the connectors, and inspect them for any bent pins or
discoloration.
b.
Firmly reseat the connectors.
Examine the J6 ribbon cable from the
control board to the axes.
Cause: The DC-BUS board is malfunctioning.
Probability
How-To Steps
Need More?
Medium
The loss of DC-BUS board power to one or more axes is likely if the axes driver
LEDs are not on, if they're dim, or if they're a color other than green.
Examine the axis status LEDs on the axis drivers.
For information, see "There's a blown
fuse on the DC-BUS board" in "One
Axis Won't Move (or Only Moves in
One Direction), and Other Axes Move"
(on the next page).
Cause: PathPilot isn’t commanding the move, or there's a controller problem.
Probability
How-To Steps
Low
1.
Jog the axes and, from the PathPilot interface, examine the value displayed in their DRO fields. If the position
doesn't change while you're jogging, there's a problem with the controller.
2.
Select the Main tab, then, on the keyboard, select the Esc key.
3.
Try to jog the axes again, and examine the value displayed in their DRO fields.
4.
If the problem persists, restart the controller.


---

## PDF Page 217

11: TROUBLESHOOTING
11.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 217
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.8.2 One Axis Won't Move (or Only Moves in One Direction), and Other Axes Move
Cause: There are loose wires or ribbon cables.
Probability
How-To Steps
High
1.
Power off the machine (see "Power off the Machine" (page 58)).
2.
Examine the connection of the J6 ribbon cable and the power wires from the DC-BUS board to the affected driver.
3.
Power on the machine (see "Power on the Machine" (page 55)) and test for operation.
Cause: There's a defective or malfunctioning axis driver.
Probability
How-To Steps
Need More?
Medium
1.
Power off the machine (see "Power off the Machine" (page 58)).
2.
On the malfunctioning axis driver, replace the ribbon cable connector for
the control signals and the motor/DC supply connector with those from a
functioning axis driver.
3.
Power on the machine (see "Power on the Machine" (page 55)).
4.
Jog the malfunctioning axis in both directions.
If the malfunctioning axis now moves properly, then it's likely that the
malfunctioning axis driver is defective.
5.
Jog the functioning axis in both directions.
A defective malfunctioning axis driver is confirmed if the previously
functioning axis has the same problem.
Swapping control signals between axis
drivers is very helpful during
troubleshooting (there are at least
three identical axis drivers in this
subsystem).
Note: If control signals are
switched from the driver on
the non-functioning axis to a
driver on a functioning axis,
the end of travel limit switch
on the non-functioning axis
won't work. Take care to
avoid reaching the end of
travel when moving an axis.
Cause: There's a blown fuse on the DC-BUS board.
Probability
How-To Steps
Need More?
Medium
1.
Power off the machine (see "Power off the Machine" (page 58)).
2.
Remove the cover from the DC-BUS board.
3.
Measure the continuity on each fuse with a multimeter. Then, visually
inspect each fuse.
If a fuse is blown, replace it with an equivalent fuse.
A blown fuse usually is the result of a
defective drive or wiring. Inspect the
axis' wiring carefully and repair any
damage observed. If you replace a fuse
and it immediately blows, it's likely a
defective axis drive or its wiring.
Cause: There's a loose axis motor coupling.
Probability
How-To Steps
Low
l Jog the axis and listen to determine if you can hear the motor run.
l Remove the cover plate over the coupling and make witness marks to determine if the motor's turning but the screw
isn't.


---

## PDF Page 218

11: TROUBLESHOOTING
11.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 218
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Cause: There's a defective motor or motor connection.
Probability
How-To Steps
Need More?
Low
1.
Power off the machine (see "Power off the Machine" (page 58)).
2.
Measure the resistance of windings at the green connector on the axis
driver (see "Motor Resistance Reference" (below)).
3.
If the resistance is out of range, carefully check the wiring:
a.
Locate the axis motor connector near the motor and repeat the
resistance test.
b.
If the resistance is out of spec again, then the motor is defective.
c.
If the resistance is within spec, then inspect the cable and
connectors between the axis motor and axis driver.
When making resistance
measurements on motors and other
devices with low resistance, always
take a tare reading on the meter
before doing the resistance
measurement on the motor or device.
Cause: There's a thermal trip or an electrical short on an axis driver.
Probability
How-To Steps
Low
1.
Examine the LEDs on the axis drivers.
If there's a red LED on the driver, that means it's tripped.
2.
Power the machine on and off, and the trip should reset.
3.
If the problem continues, examine the wiring for shorts and test the motor resistance. (For more information, see
"There's a defective motor or motor connection." earlier in this section.)
4.
If the problem continues, replace the axis driver.
Motor Resistance Reference
X-, Y-, Z-Axis
Resistance
From (black probe)
To (red probe)
213
214, 215
0.5-2.0 Ω
216
217, 218
0.5-2.0 Ω
229
230, 231
0.5-2.0 Ω
214
215
0.5-2.0 Ω
217
218
0.5-2.0 Ω
230
231
0.5-2.0 Ω
All wires above
Ground bar
>1 M Ω
Note: Resistance across leads on all phases for X, Y and Z should be about the same. Deviation may indicate a problem. This does
not apply to the A-axis.
DC-BUS Power Distribution Reference
The DC-BUS board contains four fuses which are used to individually fuse power to the axes drivers. A fifth fuse is provided on the supply
boards for the Z-axis brake. Fuses are noted on the circuit board. Note that the control power circuit must be on.


---

## PDF Page 219

11: TROUBLESHOOTING
11.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 219
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Fuse Number on DC-BUS
Board
Function
Wire Numbers to Monitor (Common Lead (0V)
Listed First)
Voltage When DC-BUS is OK and When
Fuse is Good
F1 X
X-axis
204, 203
55-75 Vdc
F2 Y
Y-axis
206, 205
55-75 Vdc
F3 Z
Z-axis
208, 207
55-75 Vdc
F4 A
A-axis
210, 209
55-75 Vdc
11.8.3 Axis Movement is Noisy
Before You Begin
WARNING! Electrocution Hazard: When servicing the machine from inside the electrical cabinet, always use caution. Points in the
electrical cabinet have high voltages that can electrocute or shock you. Even after you've powered off the machine, electronic
devices in the electrical cabinet may retain dangerous electrical voltages. Only qualified electrical machinery technicians should
perform maintenance or troubleshooting procedures inside the electrical cabinet while power is still on.
Some procedures in this section require servicing the machine from inside the electrical cabinet. Before you begin, you must identify a
qualified electrical machinery technician to perform the procedures.
Cause: There's a loose wire connection or failed connector.
Probability
How-To Steps
Need More?
High / Low
Power off the machine (see "Power off the Machine" (page 58)). Then,
tighten all screw connections.
Examine the green power connector
for signs of overheating.
Cause: There's a defective axis driver module.
Probability
How-To Steps
Need More?
Medium
See "One Axis Won't Move (or Only Moves in One Direction), and Other
Axes Move" (page 217).
There have been cases of a noisy axis
relating to a defective axis driver. This
may be temperature-dependent.
Cause: There's loose sheet metal.
Probability
How-To Steps
Need More?
High
Feel for vibrating sheet metal.
Loose sheet metal is mistakenly
diagnosed as a noisy axis motor. On
some systems, certain axis motor
speeds can cause audible vibration.


---

## PDF Page 220

11: TROUBLESHOOTING
11.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 220
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Cause: The C1 (DC-BUS) capacitor is defective.
Probability
How-To Steps
Low
1.
Power off the machine (see "Power off the Machine" (page 58)). Then, unplug the green power connectors on all of
the axis drivers (X, Y, Z, and A).
2.
With the electrical cabinet door open, power on the machine (see "Power on the Machine" (page 55)).
3.
Examine the green LED on the DC-BUS board, and then twist out the Emergency Stop button and press the Reset
button. The green LED should come on.
4.
Push in the Emergency Stop button.
If the LED goes out in two seconds or less, the capacitor is defective and must be replaced. If the LED takes five
seconds or more to go out, the capacitor is OK.
5.
If the results are not conclusive, power off the machine (see "Power off the Machine" (page 58)). Then, unplug the
green power connectors from the axis drivers (if they're not already unplugged).
6.
Power on the machine (see "Power on the Machine" (page 55)). Then, carefully measure DC voltage on wires 211
(common) and 212 on the DC-BUS board.
If there's a DC voltage of a nominal 65 Vdc (55-75), this indicates the capacitor is OK.
If there's a DC voltage of a nominal 40 Vdc (35-45), this indicates the capacitor is defective.
11.8.4 Can't Reference All Axes
Cause: The machine must be reset.
Probability
How-To Steps
Need More?
High
From the PathPilot interface, select Reset.
For information, see "Bring the
Machine Out of Reset" (page 149) and
"About Reset Mode" (page 149).
Cause: The machine is stuck on a limit switch.
Probability
How-To Steps
Need More?
High
From the PathPilot interface, on the Status tab, examine the axes' Limits
LEDs.
If one or more LEDs are on, do the following:
1.
Identify which axis is stuck on a limit switch.
2.
From the PathPilot interface, on the Settings tab, clear the Limit
Switches checkbox. Then, on the dialog box, select OK.
3.
Jog the axis away from the limit switch that it's on.
4.
From the PathPilot interface, on the Settings tab, select the Limit
Switches checkbox to re-enable the limit switches.
If an axis is moved before referencing
the machine, it can trigger a limit
switch and become stuck. When you
disable the limit switches, the machine
completes a unique referencing
procedure after selecting the axis
reference buttons: rather than moving
each axis to the end of its travel, the
reference position is set as the
machine's current position.


---

## PDF Page 221

11: TROUBLESHOOTING
11.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 221
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Cause: A limit switch is defective.
Probability
How-To Steps
Need More?
Low
1.
Go to "The machine is stuck on a limit switch." earlier in this section.
2.
Examine each limit switch for its red LED.
If any of the limit switch's red LEDs is off, go to "A limit switch's cable or
connector is defective." later in this section.
Each limit switch has a red LED that
illuminates whenever the machine is
powered on.
Cause: A limit switch's cable or connector is defective.
Probability
How-To Steps
Need More?
Low
1.
Power off the machine (see "Power off the Machine" (page 58)).
2.
Inspect and reseat the limit switch's connectors on both ends of the cable.
3.
Inspect the limit switch's cable for wear or damage.
Each limit switch's cable is routed from
the machine control board to the limit
switch, and it has a connector on each
end.
Cause: A limit switch flag is improperly adjusted.
Probability
How-To Steps
Need More?
Low
If the machine crashes into the hard stop during the referencing procedure:
1.
Jog the machine to its reference position.
2.
From the PathPilot interface, on the Settings tab, clear the Limit Switches
checkbox. Then, on the dialog box, select OK.
3.
Push in the Emergency Stop button on the operator box.
4.
Adjust the limit switch flag so that the limit switch's red LED is off.
5.
Jog the machine off of the limit switch.
6.
From the PathPilot interface, on the Settings tab, select the Limit Switches
checkbox to re-enable the limit switches.
For information, see "The machine is stuck on a limit switch." earlier in
this section.
If the limit switch flags are improperly
adjusted, the limit switch won't trigger
when the machine is referenced.
Instead, the axis will crash into the
hard stop.
Cause: The control board is defective.
Probability
How-To Steps
Need More?
Low
Go to "Limit Switch Function Reference" (on the next page).
A defective control board will report no
change in the state of the limit switch,
even though the switch and wiring are
functioning properly.


---

## PDF Page 222

11: TROUBLESHOOTING
11.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 222
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Limit Switch Function Reference
Input Status Reported from the
Status Tab
Test to Perform on
Wiring at the Machine
Control Board
Results and Conclusions
The X Limit light is always on,
even though the switch is not
actuated.
Jumper wires 455 to 485
on the machine control
board.
l If the light doesn't go out when the terminals are jumped, the
machine control board is defective.
l If the light goes out when the terminals are jumped, the wiring
has a break or the limit switch is defective.
The Y Limit light is always on,
even though the switch is not
actuated.
Jumper wires 457 to 485
on the machine control
board.
The Z Limit light is always on,
even though the limit switch is not
actuated.
Jumper wires 459 to 485
on the machine control
board.
The X Limit light is never on, even
though the switch is actuated.
Remove wire 455 on the
machine control board.
l If the light doesn't go on when the wire is removed, the
machine control board is defective.
l If the light goes on when wire is removed, the wiring has a
short or the limit switch is defective:
1.
Power off the machine (see "Power off the Machine"
(page 58)). Then, disconnect the limit switch connectors
located near the switch on the gantry.
2.
Power on the machine (see "Power on the Machine"
(page 55)).
3.
If the diagnostic light is on, the wiring is OK and the
switch is defective.
4.
If the diagnostic light is off, the wiring has a short circuit.
The Y Limit light is never on, even
though the switch is actuated.
Remove wire 457 on the
machine control board.
The Z Limit light is never on, even
though the limit switch is
actuated.
Remove wire 459 on the
machine control board.
11.8.5 Lost Motion on Axis Travel
The machine uses stepper motors — open-loop control motors that are accurate and reliable — to control axis motion. With stepper
motors, however, there's a chance of losing steps in axis motion. This is because lost steps occur when the commanded number of steps
and the actual number of steps don't match (a risk with open-loop control). A step mismatch results in a loss of motion on the axis.
In most cases, when a machine loses steps, it loses many steps all at once — resulting in a visible stutter or a stall in axis motion, and/or
an audible noise. Lost steps often occur when a stepper motor is pushed too hard or too fast, and it exceeds its limits.
Although this machine uses stepper motors to control axis motion, the entire system is designed to reduce the likelihood of losing steps. In
most cases, the machine breaks smaller cutting tools or stalls the spindle with bigger cutting tools before losing steps. Outside variables,
like programming, tooling, workholding, and operator error, are sometimes misinterpreted as lost steps.
Cause: Improper use of tool offset, work offset, or cutter compensation.
Probability
How-To Steps
Need More?
High
Examine the G-code programs. You must fully understand tool offsets,
work offsets, and cutter compensation.
The most common cause of a
perceived loss of position or lost steps
is operator error.


---

## PDF Page 223

11: TROUBLESHOOTING
11.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 223
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Cause: The spindle tooling isn't properly clamped (Z-axis only).
Probability
How-To Steps
Need More?
High
l Examine the cutter to verify that it's not slipping in the holder, or that the
tool holder isn't pulling out of the spindle collet.
l Verify that the collet nut is properly tightened on the spindle before you
start cutting.
l Verify that the spindle taper, collet nut, and collet are properly cleaned.
For information, see "Clean the Spindle
Taper, Collet Nut, and Collet"
(page 202).
Cause: The motor coupling is loose or cracked.
Probability
How-To Steps
Need More?
Low
Examine the motor coupling.
You may find it useful to carefully run
the axis with the cover removed. Make
a paint line from the shaft through the
coupling to the screw to examine if
there's any movement over time.
Cause: Controller or PathPilot problem.
Probability
How-To Steps
Need More?
Low
Restart the controller and send the log file (from the logfiles directory) to
Tormach Technical Support. Create a support ticket with Tormach
Technical Support at tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.
For information, see "Getting Help"
(page 209).
Cause: The axes drivers have the wrong DIP switch settings.
Probability
How-To Steps
Need More?
Low
See the machine's electrical schematic.
New axis drivers require you to set the
DIP switches at installation.


---

## PDF Page 224

11: TROUBLESHOOTING
11.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 224
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.9 SPINDLE DRIVE SUBSYSTEM
The machine's spindle is driven by an AC motor whose speed is controlled by a variable frequency drive (VFD).
The spindle is in a ready-to-run condition when:
1.
The control power is on.
2.
The machine is reset.
3.
The spindle brake resistor thermal switch isn't tripped.
To troubleshoot the spindle drive subsystem, read the following:
11.9.1 The Spindle Won't Turn
224
11.9.1 The Spindle Won't Turn
Cause: There's a water chiller error.
Probability
How-To Steps
Need More?
High
1.
If the water chiller isn't already on, turn it on.
2.
Examine both ends of the water chiller cable to verify that they're
connected (to both the back of the water chiller and to the Chiller Alarm
Port on the machine stand).
3.
Examine the water level in the water chiller.
For information, see "Maintain the Chiller" (page 203).
To prevent overheating and damage,
PathPilot doesn't allow the spindle to
run if:
l The chiller is disconnected from
the machine.
l There's a water chiller error.
Cause: There's no power to the VFD.
Probability
How-To Steps
Need More?
—
Examine the VFD display: it has power if its digital lights are on.
When power is removed, the VFD
display remains active until the internal
capacitors dissipate their energy. That
usually takes about five seconds.


---

## PDF Page 225

11: TROUBLESHOOTING
11.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 225
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Cause: There's no power to the VFD because contactor K2 is not energizing. (Examine the voltage across 114 and 120 at the VFD, which
should be 115 Vac nominal.)
Probability
How-To Steps
High
There are loose power or control wires in the VFD circuit.
1.
Power off the machine (see "Power off the Machine" (page 58)).
2.
Examine the circuit for loose wires.
3.
Power on the machine (see "Power on the Machine" (page 55)) and test operation.
Probability
How-To Steps
Low
Thermal switch (TS1) tripped, preventing K2 from latching.
1.
Power off the machine (see "Power off the Machine" (page 58)).
2.
Allow the brake resistor to cool, and reset thermal switch by pressing reset button (between its two terminals).
Probability
How-To Steps
Low
The control board isn't providing a run command or holding the K2 contactor on.
1.
Examine wires 420 and 422 for 24 Vdc on wires J10.1 and J10.3, respectively.
2.
Start the spindle and listen for a soft, audible click on the control board. If you hear this click (from a relay contact on
the board), the machine control board is functioning properly. If you don't hear the click:
l Verify that there's 24 Vdc measured from wire 421 to wire 422. Make a jumper wire and, carefully,
momentarily jumper wires 422 and 420.
o
If contactor K2 pulls in (you will hear an audible clunk) while you have the jumper on but drops out as soon
as you remove the jumper, the holding contact on K2 is defective.
o
If K2 stays powered on, the control board is not passing the run signal to the circuit. The control board
passes 24 Vdc from wire 422 to 420 via a relay to create the start pulse. Measure wire 422 for 24 Vdc
power. If present, the control board or wire 420 connected to J10.3 is defective. Power off the machine (see
"Power off the Machine" (page 58)), and jumper J10.1 to J10.3 Power on the machine (see "Power on the
Machine" (page 55)) and check the VFD for a display. If the VFD reads rdy, the control board is defective. If
not, wire 420 may be broken. Lift the connections of wire 420 at the control board and K2 and measure
continuity.
Cause: The VFD tripped.
Probability
How-To Steps
Need More?
Low
If the VFD tripped, an error code displays. Read the error code and go to
"Spindle VFD Trip Reference" (page 227).
You can clear a VFD trip by either:
l Removing power from the VFD
for 30 seconds.
l Pressing the red Reset button on
the front of the VFD .


---

## PDF Page 226

11: TROUBLESHOOTING
11.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 226
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Cause: The VFD is defective.
Probability
How-To Steps
Low
The VFD may be defective if:
l The display isn't on and there is nominal 115 Vac between wires 120 and 114 at the VFD.
l The VFD displays a trip condition that does not clear when power is removed, the VFD may be defective.
Cause: The VFD is not programmed, or it's programmed incorrectly.
Probability
How-To Steps
Need More?
Low
1.
Push Enter on the front panel of the VFD twice.
The display changes to 00.000, with the .000 blinking.
2.
Repeatedly push the Up Arrow until .000 changes to .011.
3.
Push Enter again.
The display shows the model of the machine or accessory (for example,
1100 for an 1100M, or RT11 for a RapidTurn on an 1100M).
4.
Push the Up Arrow once more, and the VFD displays parameter .012,
which is the software version number (for example, version 2.01).
5.
Push Back to exit this mode.
Create a support ticket with Tormach
Technical Support at
tormach.com/how-to-submit-a-
support-ticket for guidance on how to
proceed.
Cause: The machine control board is defective, or there are defective cables between the machine control board and the spindle VFD.
Probability
How-To Steps
Low
Examine all cables to verify that they're properly seated in their connectors on the machine control board.
Cause: The motor is defective.
Probability
How-To Steps
Need More?
Low
1.
Power off the machine (see "Power off the Machine" (page 58)).
2.
Wait 30 seconds, and then remove wires 123, 124, and 125 from the
VFD terminals.
3.
Measure the resistance between:
l Wires 123 and 124
l Wires 123 and 125
l Wires 124 and 125
Resistance should be in the range of approximately 1-2 Ω.
l 0 Ω indicates that the winding is
shorted.
l >1M Ω indicates that the
winding is open.
Both cases indicate a defective
motor or compromised wiring to
the motor from the VFD.
Run and Direction Commands Reference
Command From
Card
Monitoring Points One Probe on
Each
Voltage Measured
Common wire
number
Wire number
Voltage when control board
command is on
Voltage when control board command
is not on
Run (FWD)
447
448
14-20 Vdc
0 Vdc
Reverse
447
450
14-20 Vdc
0 Vdc


---

## PDF Page 227

11: TROUBLESHOOTING
11.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 227
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
The display on the VFD provides valuable information for troubleshooting. The display diagnostics include:
l Frequency output (proportional to speed. Range is ~7 Hz to 142 Hz).
l Status (rd for ready, inh for inhibit which will occur when there is no jumper between terminals B2 and B4 on the drive).
l Fault information (Er for trip) and a code for the fault.
Spindle VFD Trip Reference
Trip
Code
Condition
Likely Cause
UU
DC-BUS under-voltage.
This happens when the VFD is powered down.
OU
DC-BUS over-voltage.
Braking resistor failed open or wiring connection open between the VFD and
the resistor. Resistance to measure 70 ohms.
OI.AC
VFD output instantaneous over current.
Phase to phase or phase to ground short on output of VFD to motor. This trip
code cannot be reset until 10 seconds after the trip was initiated.
OI.br
Braking resistor instantaneous over current.
Braking resistor shorted or partially shorted out or short in wiring between the
VFD and the resistor. Resistance to measure 70 ohms. Check brake resistor
wiring.
It.br
I2t (power) on braking resistor.
Excessive braking resistor energy caused by too frequent and too severe
deceleration cycles or AC supply voltage too high.
It.AC
I2t (power) on VFD output current (used to
protect motor).
You are working the spindle motor too hard. Ensure that the spindle is not
jammed or sticking. Consider running the spindle motor at half speed for 10
minutes with no load to cool the motor down.
Oht.C
VFD is working too hard and stops to cool
power electronics down to prevent failure.
Spindle motor working too hard. Stop running the spindle but leave the VFD
power on and let the power electronics cool down.
Oht.I
Heat sink temperature is too high because
the VFD is working too hard and stops to cool
power electronics down to prevent failure.
Cabinet may also be too hot.
Spindle motor working too hard or it is too hot in work location. Stop running
the spindle but leave the VFD power on and let the power electronics cool
down. Check to see if the fan on the VFD is running and check filters on the
cabinet. Cool work location down if required.
HF01
through
HF23
Cooling fan is not cooling.
Failed drive.


---

## PDF Page 228

11: TROUBLESHOOTING
11.10 Operator Console Troubleshooting
©Tormach® 2026
Specifications subject to change without notice.
Page 228
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.10 OPERATOR CONSOLE TROUBLESHOOTING
11.10.1 The Screen Doesn't Respond to Touch Inputs
228
11.10.2 The Screen Doesn't Display an Image or Respond to Power Button
229
11.10.3 The Screen is Scrambled or Illegible
229
11.10.4 The Knobs Don't Respond
230
11.10.5 The Buttons Don't Respond
231
11.10.1 The Screen Doesn't Respond to Touch Inputs
Problem
The touch screen does not respond to touch inputs on all or part of the screen's surface.
Cause
The sensitivity setting for the touch controller is too low.
Solutions
You Might
Need To...
Probability
How-To Steps
Need More?
Adjust
touchscreen
sensitivity.
High
1.
Verify that you have PathPilot v2.4.4 or higher
installed on your controller.
2.
From the PathPilot interface, in the MDI Line
DRO field, type
ADMIN TOUCHSCREEN SENSITIVITY
1000 and press Enter. You can use a value
between 1 and 2047, but 1000 is generally
sufficient for most shop spaces.
3.
Verify that the touch screen responds to touch
inputs. If it doesn't, go to the next step.
4.
From the PathPilot interface, on the File tab,
find the pointercal.xinput file and delete it.
5.
Restart the PathPilot controller.
The calibration utility displays. For now, skip
this procedure.
6.
From the PathPilot interface, in the MDI Line
DRO field, type
ADMIN TOUCHSCREEN SENSITIVITY
1000 and press Enter.
7.
From the PathPilot interface, in the MDI Line
DRO field, type ADMIN TOUCHSCREEN and
press Enter.
The calibration utility displays. Use your finger
(not a mouse) to touch all four points that
display on the screen.
The touchscreen is a resistive type to prevent
accidental triggering from drops of coolant on the
screen. The resistive touchscreen may need its
sensitivity adjusted when used in a shop space with
very high or low humidity.


---

## PDF Page 229

11: TROUBLESHOOTING
11.10 Operator Console Troubleshooting
©Tormach® 2026
Specifications subject to change without notice.
Page 229
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.10.2 The Screen Doesn't Display an Image or Respond to Power Button
Problem
The console screen doesn't display an image or respond to the power button.
Cause
The console isn't receiving power.
Solutions
You Might
Need To...
Probability
How-To Steps
Need More?
Examine
power input
to the
console.
High
Examine the green LED on the power
brick for the console. If it's not lit,
examine the power cords to the power
brick.
If your console receives power from the Accessory Input
ports on the machine, look for tripped breakers inside
your machine's electrical cabinet.
Test the
power button
functionality.
Low
Examine the green ring around the
power button. It should light up when
you press the power button.
11.10.3 The Screen is Scrambled or Illegible
Problem
The console screen turns on, but is scrambled or illegible.
Cause
The BIOS isn't configured for the correct screen output.


---

## PDF Page 230

11: TROUBLESHOOTING
11.10 Operator Console Troubleshooting
©Tormach® 2026
Specifications subject to change without notice.
Page 230
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Solutions
You Might Need To...
Probability
How-To Steps
Need More?
Configure the display
output settings in
BIOS.
High
1.
Connect a VGA monitor to the
console.
2.
Power the console on and
select the Delete key to enter
the BIOS.
3.
From the Advanced tab, select
Display Configuration.
4.
Configure the display as
follows:
l Primary IGFX Boot
Display: Auto
l LCD Panel Type:
1280x1024 LVDS
l Panel Channel: Dual
Channel
l Panel Color Depth: 24 Bit
5.
Select the Esc key, go to Save
and Exit, and select Save
Changes and Reset.
This configuration problem can occur if your console has
a CMOS battery failure. Replace the battery if it
reoccurs.
11.10.4 The Knobs Don't Respond
Problem
The RPM, Feed Override, or Max Velocity knobs don't respond or aren't smooth.
Cause
The ribbon cable connecting the knobs is disconnected or the circuit board is damaged.
Solutions
You Might Need
To...
Probability
How-To Steps
Need More?
Examine the
connectors on
the ribbon
cable.
High
1.
Remove the rear panel of the
console.
2.
Examine the connectors on
both ends of the cable going
from J4 on the control board to
the potentiometer board.
Shipping can sometime cause connectors to become loose. Re-
seating the connectors will usually fix non-responsive override
knobs.


---

## PDF Page 231

11: TROUBLESHOOTING
11.10 Operator Console Troubleshooting
©Tormach® 2026
Specifications subject to change without notice.
Page 231
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
You Might Need
To...
Probability
How-To Steps
Need More?
Examine the
USB connection
to the control
board.
High
1.
Remove the rear panel of the
console.
2.
Examine the USB cable going
from the header on the
computer motherboard to
connector J12 on the control
board.
Verify that the power LED on the console control board lights up
when the console is turned on. If it doesn't light up, and you
have confirmed the USB connection, replace the control board
(PN 39146).
11.10.5 The Buttons Don't Respond
Problem
The Cycle Start or Feed Hold buttons don't respond.
Cause
The control board is disconnected or the wires to the buttons are loose.
Solutions
You Might
Need To...
Probability
How-To Steps
Need More?
Examine the
wiring to the
buttons.
High
1.
Remove the rear panel of the console.
2.
Examine the wire inputs to connector J13 on
the control board. If any wires are loose,
tighten the screw terminals.
3.
Using a continuity tester, measure the
resistance between terminals 1 and 2 when
Feed Hold is pressed and 3 and 4 when Cycle
Start is pressed.
l If there's continuity at the terminals
on the control board and the buttons
still don't work, examine the USB
cable to the control board.
l If there's not continuity at the
terminals when the buttons are
pressed, remove the lower rear panel
of the console and examine the screw
terminals on the rear of the buttons
themselves.
Shipping can sometime cause wire terminals to
become loose. Re-seating the wires will usually fix
non-responsive buttons.
If you have tested all terminals and the buttons still
don't have continuity when pressed, replace the
buttons:
l Feed Hold Button (PN 37363)
l Cycle Start Button (PN 37362)
Examine the
USB
connection
to the
control
board.
High
1.
Remove the rear panel of the console.
2.
Examine the USB cable going from the
header on the computer motherboard to
connector J12 on the control board.
Verify that the power LED on the console control
board lights up when the console is turned on. If it
doesn't light up and you have confirmed the USB
connection, replace the control board (PN 39146).


---

## PDF Page 232

[No extractable text; see original PDF page.]


---

## PDF Page 233

DIAGRAMS AND PARTS LISTS
IN THIS SECTION, YOU'LL LEARN:
About this machine’s components.
NOTICE! Only use Tormach-approved parts when making replacements. If you don't replace parts with
those listed in this section, you may void your warranty.
CONTENTS
12.1 Machine Overview
234
12.2 Base
236
12.3 Gantry
238
12.4 Stand
241
12.5 X-Axis Carriage
243
12.6 Z-Axis Spindle Head
246
12.7 Dust Shoe Assembly, 80 mm Clamp
248
12.8 Base Spindle Waterlines
250
12.9 Automatic Tool Changer Diagrams and Parts Lists
251


---

## PDF Page 234

12: DIAGRAMS AND PARTS LISTS
12.1 Machine Overview
©Tormach® 2026
Specifications subject to change without notice.
Page 234
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.1 MACHINE OVERVIEW
7
5
6
3
4
1
2


---

## PDF Page 235

12: DIAGRAMS AND PARTS LISTS
12.1 Machine Overview
©Tormach® 2026
Specifications subject to change without notice.
Page 235
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Stand Assembly (PN 38312)
1
2
Base Casting Assembly (PN 38319)
1
3
Gantry Assembly (PN 39299)
1
4
Electrical Cabinet Assembly (PN 38835)
1
5
X-Axis Carriage Assembly (PN 39304)
1
6
Z-Axis Spindle Head Assembly (PN 38367)
1
7
Spoilboard Assembly (PN 39363)
1


---

## PDF Page 236

12: DIAGRAMS AND PARTS LISTS
12.2 Base
©Tormach® 2026
Specifications subject to change without notice.
Page 236
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.2 BASE
18
16
6
12
14
5
17
9
11
2
10
1
4
8
15
2
7
18
7
4
11
18
16
13
11
3
12


---

## PDF Page 237

12: DIAGRAMS AND PARTS LISTS
12.2 Base
©Tormach® 2026
Specifications subject to change without notice.
Page 237
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Base Casting (PN 38320)
1
2
Linear Guideway Assembly, Y-Axis (PN 39049)
2
 Linear Rail, Y-Axis, 15 mm × 1650 mm (PN 38322)
1
 Y-Axis Linear Guide Block (PN 39048)
2
 Linear Rail Bolt Cap (PN 39615)
28
3
Y-Axis Ball Screw Assembly (PN 38323)
1
 Ball Screw, Rolled, 16 mm × 5 mm - 1650 mm (PN 38324)
1
 Y-Axis Ball Nut (Nut Only) (PN 38325)
1
4
Ball Screw Support Bearing, Fixed (PN 38328)
2
5
Motor, Stepper, NEMA 34, 1.2 deg, 450 Ncm, 3-phase, 400 mm Cable (PN 50374)
1
6
Motor Mount, NEMA 34 (PN 39063)
1
7
Y-Axis Linear Rail Cover, Left (PN 39050)
1
8
Y Limit Switch Flag (PN 39073)
1
9
Cover, XY Axis Motor Mount (PN 39410)
1
10
Y-Axis Linear Rail Cover, Right (PN 39566)
1
11
Screw, Socket Head Cap, M4 × 0.7 - 16 (PN 37751)
58
12
Screw, Socket Head Cap, M5 × 0.8 - 20 (PN 30357)
8
13
Washer, Split Lock, M5 (PN 31572)
4
14
Screw, Socket Head Cap, M6 × 1 - 60 (PN 30356)
4
15
Screw, Button Head Cap, Flanged M4 × 0.7 - 8 (PN 50484)
2
16
Screw, Socket Head Cap, M6 × 1 - 45 (PN 31332)
8
17
Shaft Coupling, Jaw, One Piece Split, 10 mm × 0.5 in. - 35 mm (PN 39318)
1
18
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
12


---

## PDF Page 238

12: DIAGRAMS AND PARTS LISTS
12.3 Gantry
©Tormach® 2026
Specifications subject to change without notice.
Page 238
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.3 GANTRY
15
30
36
7
34
37
6
13
5
36
4
20
3
33
24
35
29
14
16
25
18
31
23
17
11
22
2
32
10
12
19
8
28
27
9
26
25
17
33
26
25
22
25
30
25
25
25
21
25
1
31
23
25
16
25
12
32
22
11


---

## PDF Page 239

12: DIAGRAMS AND PARTS LISTS
12.3 Gantry
©Tormach® 2026
Specifications subject to change without notice.
Page 239
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Lower Gantry Cross Beam (PN 39059)
1
2
Bridge Support, Left Side (PN 39057)
1
3
Bridge Support, Right Side (PN 39058)
1
4
X-Axis Bridge (PN 39055)
1
5
Rear Cover, X-Axis Bridge (PN 39056)
1
6
X-Axis Wire Tray (PN 39060)
1
7
X-Axis Wire Track Cover (PN 39062)
1
8
Motor Mount, NEMA 34 (PN 39063)
1
9
Motor, Stepper, NEMA 34, 1.2 deg, 450 Ncm, 3-phase, 400 mm Cable (PN 50374)
1
10
Cover, Gantry Left Side (PN 39141)
1
11
Linear Guideway Assembly, X-Axis (PN 39066)
2
 Linear Rail, X-Axis 15 mm × 800 mm (PN 39065)
1
 X/Z-Axis Linear Guide Block (PN 39301)
2
 Linear Rail Bolt Cap (PN 39615)
13
12
Ball Screw Support Bearing, Fixed (PN 38328)
2
13
X-Axis Ball Screw Assembly (PN 39302)
1
 Ball Screw, Rolled, 15 mm × 5 mm - 853 mm (PN 39064)
1
 X-Axis Ball Nut (Nut Only) (PN 39303)
1
14
Ball Nut Carrier, Y-Axis (PN 39054)
1
15
Shaft Coupling, Jaw, One Piece Split, 10 mm × 0.5 in. - 35 mm (PN 39318)
1
16
Y-Axis Drag Chain Bracket (PN 39409)
2
17
Limit Switch, Rectangular Proximity Sensor (PN 39074)
2
18
Y-Axis Cable Tray (PN 39408)
1
19
Cover, XY Axis Motor Mount (PN 39410)
1
20
Access Cover, X-Axis Ball Screw Mount (PN 39069)
1
21
Pin, 6 mm × 28 mm, Steel, Pull-Out, M4 (PN 39419)
4
22
Screw, Socket Head Cap, M4 × 0.7 - 16 (PN 37751)
28
23
Pin, 6 mm × 30 mm, Steel, Pull-Out, M4 (PN 39538)
4
24
Remote Oil Line Fitting (PN 39539)
1
25
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
29
26
Screw, Socket Head Cap, M5 × 0.8 - 20 (PN 30357)
9
27
Washer, Split Lock, M5 (PN 31572)
4


---

## PDF Page 240

12: DIAGRAMS AND PARTS LISTS
12.3 Gantry
©Tormach® 2026
Specifications subject to change without notice.
Page 240
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
28
Screw, Socket Head Cap, M6 × 1 - 60 (PN 30356)
4
29
Screw, Socket Head Cap, M8 × 1.25 - 30 (PN 30544)
4
30
Screw, Pan Head Machine, M4 × 0.7 - 25, Stainless Steel (PN 50391)
4
31
Screw, Socket Head Cap, M8 × 1.25 - 25 (PN 31618)
6
32
Screw, Socket Head Cap, M6 × 1 - 45 (PN 31332)
8
33
Screw, Socket Head Cap, M5 × 0.8 - 25 (PN 30530)
16
34
Drag Chain, X-Axis (PN 39061)
1
35
Screw, Socket Head Cap, M5 × 0.8 - 8 (PN 30844)
2
36
Screw, Socket Head Cap, M6 × 1 - 20 (PN 30832)
8
37
Screw, Socket Head Cap, M4 × 0.7 - 8 (PN 30891)
4


---

## PDF Page 241

12: DIAGRAMS AND PARTS LISTS
12.4 Stand
©Tormach® 2026
Specifications subject to change without notice.
Page 241
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.4 STAND
6
1
5
2
8
3
7
8
8
8
8
8
4


---

## PDF Page 242

12: DIAGRAMS AND PARTS LISTS
12.4 Stand
©Tormach® 2026
Specifications subject to change without notice.
Page 242
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
24R Stand (PN 38314)
1
2
Front End Panel (PN 38316)
2
3
Side Panel (PN 39406)
1
4
Drag Chain Undertray (PN 39544)
1
5
Upper Front End Panel (PN 39542)
1
6
Upper Back End Panel (PN 39543)
1
7
Machine Foot, M16 × 2 Thread (PN 38313)
4
8
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
28


---

## PDF Page 243

12: DIAGRAMS AND PARTS LISTS
12.5 X-Axis Carriage
©Tormach® 2026
Specifications subject to change without notice.
Page 243
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.5 X-AXIS CARRIAGE
22
21
14
12
11
10
27
1
23
26
7
15
17
24
2
3
16
16
3
5
19
6
8
25
13
4
20
9
18
19
19
21
17
19
21
21
28
29


---

## PDF Page 244

12: DIAGRAMS AND PARTS LISTS
12.5 X-Axis Carriage
©Tormach® 2026
Specifications subject to change without notice.
Page 244
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
X Carriage Casting (PN 39075)
1
2
Z-Axis Linear Rail Plate (PN 38368)
1
3
Linear Guideway Assembly, Z-Axis (PN 39067)
2
 Linear Rail, Z-Axis, 15 mm × 370 mm (PN 38375)
1
 X/Z-Axis Linear Guide Block (PN 39301)
2
 Linear Rail Bolt Cap (PN 39615)
7
4
Limit Switch, Rectangular Proximity Sensor (PN 39074)
1
5
X Limit Switch Flag (PN 39078)
1
6
Z-Axis Ball Screw Assembly (PN 38372)
1
 Ball Screw, Rolled, 16 mm × 5 mm - 321 mm (PN 38373)
1
 X-Axis Ball Nut (Nut Only) (PN 38374)
1
7
Ball Screw Support Bearing, Floating (PN 39079)
1
8
Ball Screw Support Bearing, Fixed (PN 38328)
1
9
Motor, Stepper with Brake, Nema 34, 1.2 deg, 450 Ncm, 3 phase, 6.8 A, 400 mm
Shrink Tube Cable, Includes Motor and Brake Connectors (PN 51133)
1
10
X-Axis Ball Nut Carrier (PN 39076)
1
11
Cover, Z-Axis Rear (PN 39084)
1
12
Access Panel, Z-Axis Rear (PN 39142)
1
13
Z-Axis Motor Mounting Plate (PN 38371)
1
14
DIN5 Connector Assembly (PN 38212)
1
15
Retaining Ring, External, 10 mm (PN 39540)
1
16
Screw, Socket Head Cap, M4 × 0.7 - 18 (PN 38734)
14
17
Screw, Socket Head Cap, M6 × 1 - 45 (PN 31332)
6
18
Washer, Split Lock, M5 (PN 31572)
4
19
Screw, Socket Head Cap, M5 × 0.8 - 20 (PN 30357)
14
20
Screw, Pan Head Machine, M4 × 0.7 - 25, Stainless Steel (PN 50391)
2
21
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
15
22
Screw, Socket Head Cap, M4 × 0.7 - 16 (PN 37751)
2
23
Screw, Socket Head Cap, M6 × 1 - 25 (PN 31685)
4
24
Screw, Socket Head Cap, M8 × 1.25 - 25 (PN 31618)
4
25
Shaft Coupling, Jaw, One Piece Split, 10 mm × 0.5 in. - 35 mm (PN 39318)
1
26
Screw, Socket Head Cap, M4 × 0.7 - 25 (PN 50486)
16


---

## PDF Page 245

12: DIAGRAMS AND PARTS LISTS
12.5 X-Axis Carriage
©Tormach® 2026
Specifications subject to change without notice.
Page 245
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
27
Screw, Button Head Cap, M5 × 0.8 - 10 (PN 35774)
2
28
Remote Oil Line Fitting (PN 39539)
1
29
Screw, Socket Head Cap, M5 × 0.8 - 8 (PN 30844)
2


---

## PDF Page 246

12: DIAGRAMS AND PARTS LISTS
12.6 Z-Axis Spindle Head
©Tormach® 2026
Specifications subject to change without notice.
Page 246
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.6 Z-AXIS SPINDLE HEAD
11
4
14
7
1
13
8
10
12
5
2
3
9
13
9
9
9
6
9
16
17
15


---

## PDF Page 247

12: DIAGRAMS AND PARTS LISTS
12.6 Z-Axis Spindle Head
©Tormach® 2026
Specifications subject to change without notice.
Page 247
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Z Carriage Block (PN 38369)
1
2
Spindle Motor Mount, 80 mm (PN 39077)
1
3
Rear Spindle Cover (PN 39085)
1
4
Z Limit Switch Flag (PN 39082)
1
5
Front Spindle Cover (PN 39086)
1
6
Remote Oil Line Fitting (PN 39539)
1
7
X-Axis Ball Nut Carrier (PN 39076)
1
8
Spindle, 80 mm, 1.5 kW, ER20, 400 Hz, 24,000 rpm (PN 39259)
1
9
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
18
10
Screw, Socket Head Cap, M5 × 0.8 - 25 (PN 30530)
4
11
Screw, Button Head Cap, M5 × 0.8 - 10 (PN 35774)
2
12
Screw, Socket Head Cap, M5 × 0.8 - 20 (PN 30357)
4
13
Screw, Socket Head Cap, M4 × 0.7 - 40 (PN 50485)
16
14
Drag Chain, Z-Axis (PN 39083)
1
15
Screw, Socket Head Cap, M6 × 1 - 30 (PN 30353)
4
16
Screw, Socket Head Cap, M5 × 0.8 - 8 (PN 30844)
2
17
Nut, Hex, M5 × 0.8 (PN 31201)
2


---

## PDF Page 248

12: DIAGRAMS AND PARTS LISTS
12.7 Dust Shoe Assembly, 80 mm Clamp
©Tormach® 2026
Specifications subject to change without notice.
Page 248
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.7 DUST SHOE ASSEMBLY, 80 MM CLAMP
2
4
5
1
3
M5 THREADED INSERT 
OR WELDED NUT


---

## PDF Page 249

12: DIAGRAMS AND PARTS LISTS
12.7 Dust Shoe Assembly, 80 mm Clamp
©Tormach® 2026
Specifications subject to change without notice.
Page 249
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Dust Shoe Body, 80 mm Clamp (PN 50375)
1
2
Brushes, Dust Shoe, 4 mm wide × 70 mm tall (PN 50380)
4
3
Dust Shoe Brushes Clamp (PN 50376)
8
4
Screw, Button Head Cap, Flanged M4 × 0.7 - 12 (PN 38920)
8
5
Screw, Socket Head Cap, M5 × 0.8 - 20 (PN 30357)
1


---

## PDF Page 250

12: DIAGRAMS AND PARTS LISTS
12.8 Base Spindle Waterlines
©Tormach® 2026
Specifications subject to change without notice.
Page 250
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.8 BASE SPINDLE WATERLINES
-P2
Inlet
Outlet
35161
Chiller
38886
-U1
PTC Fitting
38886
-U2
PTC Fitting
1
2
2
1
Coolant Out
Coolant IN
39259
ER-20 Liquid Cooled Spindle


---

## PDF Page 251

12: DIAGRAMS AND PARTS LISTS
12.9 Automatic Tool Changer Diagrams and Parts Lists
©Tormach® 2026
Specifications subject to change without notice.
Page 251
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.9 AUTOMATIC TOOL CHANGER DIAGRAMS AND PARTS LISTS
12.9.1 ATC Dust Shoe Assembly, 80 mm
252
12.9.2 ATC Solenoid Control Panel Assembly
254
12.9.3 ATC Rack Assembly
257
12.9.4 ATC Spindle Pneumatics and Waterlines
259


---

## PDF Page 252

12: DIAGRAMS AND PARTS LISTS
12.9 Automatic Tool Changer Diagrams and Parts Lists
©Tormach® 2026
Specifications subject to change without notice.
Page 252
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.9.1 ATC Dust Shoe Assembly, 80 mm
9
6
7
8
1
4
2
3
2
5


---

## PDF Page 253

12: DIAGRAMS AND PARTS LISTS
12.9 Automatic Tool Changer Diagrams and Parts Lists
©Tormach® 2026
Specifications subject to change without notice.
Page 253
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Lifting Dust Shoe Body, 80 mm, 24R ATC (PN 39089)
1
2
Screw, Button Head Cap, Flanged M4 × 0.7 - 10, 18-8 Stainless (PN 50654)
12
3
Dust Shoe Brushes Clamp (PN 50376)
10
4
Brushes, Dust Shoe, 4 mm wide × 70 mm tall 26.5 cm (PN 52948)
2
5
Brushes, Dust Shoe, 4 mm wide × 70 mm tall 9.5 cm (PN 52940)
2
6
Air Cylinder, Double Acting, Double Rod, 16 mm Bore × 80 mm Stroke (PN 50648)
1
7
Fitting, Metering Out Elbow, M5 × 0.8 (Male) - 6 mm PTC (PN 51157)
1
8
Screw, Socket Head Cap, M4 × 0.7 - 25 (PN 50486)
2
9
Fitting, Elbow, M5 × 0.8 (Male) - 6 mm PTC (PN 50652)
1


---

## PDF Page 254

12: DIAGRAMS AND PARTS LISTS
12.9 Automatic Tool Changer Diagrams and Parts Lists
©Tormach® 2026
Specifications subject to change without notice.
Page 254
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.9.2 ATC Solenoid Control Panel Assembly
14
13
15
7
2
7
3
1
11
20
12
9
9
10
31
26
27
9
8
12
9
10
5
6
6
28
11
6
18
6
29
4
30
30
24
6
19
19
10
25
6
16
17
21
22
23


---

## PDF Page 255

12: DIAGRAMS AND PARTS LISTS
12.9 Automatic Tool Changer Diagrams and Parts Lists
©Tormach® 2026
Specifications subject to change without notice.
Page 255
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
24R ATC Solenoid Control Panel (PN 50661)
1
2*
Circular Connector, Plug, PVC Jacket, 20 mm, 4-Pin Male, Solder (PN 35193)
1
3
Screw, Button Head Cap, Flanged M5 × 0.8 - 8, 18-8 Stainless Steel (PN 38889)
6
4
Fitting, Wye, 1/4 in. PTC (PN 38550)
1
5
Two Port, Two Way, Two Position, 24 Vdc, Single Solenoid Valve, 1/4 in.
(inlet/outlet), Normally Closed (PN 38827)
1
6
Fitting, Elbow, 1/4 in. NPT (Male) - 1/4 in. PTC (PN 31324)
6
7
Screw, Button Head Cap, Flanged M4 × 0.7 - 6, 18-8 Stainless Steel (PN 20001)
6
8
Three Port, Three Way, Two Position, 24 Vdc, Single Solenoid Valve, 1/8 in.
(inlet/outlet), 1/8 in. (exhaust) (PN 50647)
1
9
Fitting, Elbow, 1/8 in. NPT (Male) - 1/4 in. PTC (PN 34886)
5
10
Nut, Hex, M3, Zinc Plated (PN 31086)
6
11
Screw, Socket Head Cap, M3 × 0.5 - 25 (PN 50768)
6
12
Ftg, Muffler (Flat), 1/8 NPT (PN 37297)
3
13
Standoff, 10 mm, M4 × 0.7 - 8 mm Male, M4 × 0.7 - 5 mm Female, Steel (PN 50765)
8
14
PCB, 24R ATC Board (PN 50683)
1
15
24R ATC Board Shield, Acrylic (PN 50766)
1
16
Fitting, Male Manifold, 1/4 in. NPT - 1X 5/16 in. PTC Ports - 3X 1/4 in. PTC Ports
(PN 50685)
1
17
Fitting, Elbow, 1/4 in. NPT (Female) – 5/16 in. PTC (PN 50840)
1
18
Pressure Regulator, 1/4 in. NPT × 1/4 in. NPT, 1/8 in. NPT Gauge Port, 7-125 PSI, 150
PSI (PN 39356)
2
19
Fitting, Plug (Internal Hex), 1/8 in. NPT (Male), Brass (PN 35892)
2
20
Five Port, Four Way, Three Position, 24 Vdc, Double Solenoid Valve, 1/8 in.
(inlet/outlet), 1/8 in. (exhaust), Exhausted Center Position (PN 50705)
1
21
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 35 cm Long (PN 31457)
1
22
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 20 cm Long (PN 31457)
1
23
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 14 cm Long (PN 31457)
1
24
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 14 cm Long (PN 31457)
1
25
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 5 cm Long (PN 31457)
1
26
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 125 cm Long (PN 31457)
1
27
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 140 cm Long (PN 31457)
1
28
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 125 cm Long (PN 31457)
1


---

## PDF Page 256

12: DIAGRAMS AND PARTS LISTS
12.9 Automatic Tool Changer Diagrams and Parts Lists
©Tormach® 2026
Specifications subject to change without notice.
Page 256
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
29
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 23 cm Long (PN 31457)
1
30
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 115 cm Long (PN 31457)
2
31
Tubing, Polyethylene Air Line, 1/4 in. OD, Black, 125 cm Long (PN 31457)
1
*24R ATC Cable Board Harness includes PN 35913, wires and board connector.


---

## PDF Page 257

12: DIAGRAMS AND PARTS LISTS
12.9 Automatic Tool Changer Diagrams and Parts Lists
©Tormach® 2026
Specifications subject to change without notice.
Page 257
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.9.3 ATC Rack Assembly
5
7
1
3
2
6
4


---

## PDF Page 258

12: DIAGRAMS AND PARTS LISTS
12.9 Automatic Tool Changer Diagrams and Parts Lists
©Tormach® 2026
Specifications subject to change without notice.
Page 258
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
24R ATC Tool Holder Rack (PN 38337)
1
2
24R ATC Rack Supports (PN 39724)
4
3
Tool Holder Rack Reinforcement Rib (PN 50684)
1
4
ISO20 Tool Holder Fork (PN 38338)
10
5
Screw, Socket Head Cap, M8 × 1.25 - 20 (PN 30352)
4
6
Screw, Socket Head Cap, M6 × 1 - 14 (PN 51161)
20
7
Screw, Button Head Cap (Flanged), M4 × 0.7 - 10, 18-8 Stainless Steel (PN 50654)
13


---

## PDF Page 259

12: DIAGRAMS AND PARTS LISTS
12.9 Automatic Tool Changer Diagrams and Parts Lists
©Tormach® 2026
Specifications subject to change without notice.
Page 259
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
12.9.4 ATC Spindle Pneumatics and Waterlines
-Z1
Shop Air Supply
39087
ATC Spindle
Air Inlet
Air Blast
Air Seal
Coolant In
Coolant Out
Air Return
-P1
Inlet
Outlet
35161
Chiller
38886
-U3
PTC Fitting
38886
-U4
PTC Fitting
3
4
Exhaust Silencer
37297
-V2
IN
OUT
52941
Air Blast Control Valve
Extend
Retract
Dust Hood Cylinder
-C1
50648
-V3
52942
P
A
EA
Dust Hood Control Valve
Exhaust Silencer
37297
Lift Speed Control
-Q1
Dust Hood Extend Pressure Reg
-R1
39356
Dust Hood Lift Pressure Reg
-R2
39356
-V4
52943
P
A
EA
B
EB
PDB Conrtol Valve
Exhaust Silencer
37297
51635
FRL
50685
PTC Distribution Manifold


---

## PDF Page 260

[No extractable text; see original PDF page.]


---

## PDF Page 261

DRAWINGS
IN THIS SECTION, YOU'LL LEARN:
About various component specifications for this machine.
CONTENTS
13.1 Spoilboard Bolt Pattern
262
13.2 Vertical Fixturing Hole Pattern
266
13.3 T-Slot Layout
267
13.4 T-Slot Dimensions
268
13.5 ETS Placement Layout
269
ETS Placement Template
270


---

## PDF Page 262

13: DRAWINGS
13.1 Spoilboard Bolt Pattern
©Tormach® 2026
Specifications subject to change without notice.
Page 262
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
13.1 SPOILBOARD BOLT PATTERN
The spoilboard bolt pattern varies by serial number. Identify your machine's serial number (on the side of the electrical cabinet, near the
Main Disconnect switch), and then refer to one of the following drawings.
l "RA10001 through RA10024" (on the next page)
l "RA10025 through RA10036" (page 264)
l "RA10037 and Higher" (page 265)


---

## PDF Page 263

13: DRAWINGS
13.1 Spoilboard Bolt Pattern
©Tormach® 2026
Specifications subject to change without notice.
Page 263
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
13.1.1 RA10001 through RA10024
Nominal 24"
26.77in
23.57in
680.00mm
598.60mm
Nominal 48"
65.00in
47.64in
1651.00mm
1210.00mm
0in
0mm
7.48in
190mm
14.96in
380mm
23.48in
596.40mm
30.96in
786.40mm
39.48in
1002.80mm
46.96in
1192.80mm
0.52in
13.20mm
0in
0mm
11.42in
290mm
22.83in
580mm
 
0.58in
14.80mm
Hole Locations 
dimensioned from 
the lower left hole.
6X 6mm dowel pin holes.
12X Mounting holes
M8 Clearance holes with 
counterbores for the screw heads.  
16.00in
406.40mm
16.00in
406.40mm
 
14.96in
380mm
 
16.00in
406.40mm
 
16.00in
406.40mm
(For Reference)
6mm Dowel pin 
spacing.
(For Reference)
Mounting bolt 
spacing.
Front of table
(Y Negative end of table)


---

## PDF Page 264

13: DRAWINGS
13.1 Spoilboard Bolt Pattern
©Tormach® 2026
Specifications subject to change without notice.
Page 264
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
13.1.2 RA10025 through RA10036
 
0in
0mm 
 
9.06in
230mm 
 
22.83in
580mm 
 
0in
0mm 
 
7.48in
190mm 
 
15.39in
391mm 
 
23.48in
596.40mm 
 
30.96in
786.40mm 
 
39.48in
1002.80mm 
 
46.96in
1192.80mm 
 
13.78in
350mm 
 
0.58in
14.80mm 
 
0.52in
13.20mm 
6x 6mm Dowel Pin Holes
15x Mounting holes
M8 clearance holes with 
counterbores for screw heads.
 
15.39in
391mm 
 
15.57in
395.40mm 
 
16.00in
406.40mm 
 
16.00in
406.40mm 
 
16.00in
406.40mm 
(For Reference
Mounting bolt 
spacing.
(For Reference)
6mm dowel pin 
spacing.
Notes:
Compatible with Rev G Vacuum Table.
1.
Machines SN RA10025 - RA10036.
1.
Both views are the same orientation. The 
2.
right hand view is intended as a reference 
for the spacing between bolt holes.
Mounting hole counterbores may need to 
3.
be adjusted to fit your M8 bolt heads.
Overall spoilboard dimensions are 24in x 
4.
48in. However, spoilboards can be made 
slightly oversized depending on the 
application.
Front of table
(Y Negative end of table)


---

## PDF Page 265

13: DRAWINGS
13.1 Spoilboard Bolt Pattern
©Tormach® 2026
Specifications subject to change without notice.
Page 265
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
13.1.3 RA10037 and Higher
 
0in
0mm 
 
0.67in
17.10mm 
 
7.78in
197.50mm 
 
15.55in
395mm 
 
23.33in
592.50mm 
 
31.10in
790mm 
 
38.88in
987.50mm 
 
46.65in
1185mm 
 
0in
0mm 
 
0.58in
14.80mm 
 
8.66in
220mm 
 
14.17in
360mm 
 
22.83in
580mm 
6x 6mm Dowel Pin Holes
16x Mounting holes
M8 clearance holes with 
counterbores for screw heads.
 
15.55in
395mm 
 
15.55in
395mm 
 
15.55in
395mm 
 
15.55in
395mm 
 
15.55in
395mm 
(For Reference
Mounting bolt 
spacing.
(For Reference)
6mm dowel pin 
spacing.
Notes:
Compatible with Rev H Vacuum Table.
1.
Machines SN RA10037 and up.
1.
Both views are the same orientation. The 
2.
right hand view is intended as a reference 
for the spacing between bolt holes.
Mounting hole counterbores may need to 
3.
be adjusted to fit your M8 bolt heads.
Overall spoilboard dimensions are 24in x 
4.
48in. However, spoilboards can be made 
slightly oversized depending on the 
application.
Front of table
(Y Negative end of table)


---

## PDF Page 266

13: DRAWINGS
13.2 Vertical Fixturing Hole Pattern
©Tormach® 2026
Specifications subject to change without notice.
Page 266
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
13.2 VERTICAL FIXTURING HOLE PATTERN
 30 
 30 
 100 
 100 
 50 
 100 
 100 
 100 
 100 
 100 
 100 
 100 
 200 
 100 
 100 
14X M6X1.0 THRU
Unless otherwise specified, all measurements are in millimeters.


---

## PDF Page 267

13: DRAWINGS
13.3 T-Slot Layout
©Tormach® 2026
Specifications subject to change without notice.
Page 267
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
13.3 T-SLOT LAYOUT
13.3.1 RA10037 and Higher
 290 
 41.13 
 197.50 
 353.88 
 436.13 
 592.50 
 748.88 
 831.13 
 987.50 
 1143.88 
 25 
 605 
6x 500mm LONGT-SLOTS
6x 308mm LONG T-SLOTS


---

## PDF Page 268

13: DRAWINGS
13.4 T-Slot Dimensions
©Tormach® 2026
Specifications subject to change without notice.
Page 268
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
13.4 T-SLOT DIMENSIONS
13.4.1 RA10037 and Higher
 9 
 14.25 
 4 
 7 
FITS MOST 1/4" - 20 AND 5/16" - 18 T-BOLTS


---

## PDF Page 269

13: DRAWINGS
13.5 ETS Placement Layout
©Tormach® 2026
Specifications subject to change without notice.
Page 269
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
13.5 ETS PLACEMENT LAYOUT
Use the drawing below and the template on the following page to determine the placement for the Electronic Tool Setter (ETS) on your
machine.
 50.50
50.25 
A
 3.25
2.50 
DETAIL A
SCALE 1 : 5


---

## PDF Page 270

50.25 in. -50.5 in. from center 
to end of vacuum table.
2.25 in. - 3 in. from center to 
edge of vacuum table.
Print page at 1:1 scale, 
Cut out circle and use as 
a template to layout ETS 
placement.
KEY
1 in. 
1 in. 
Measure the square (above) to 
conﬁrm that this drawing is 
printed to scale. If the square is 
not accurate in both X and Y, 
reprint this drawing on a 1:1 
scale.


---

## PDF Page 271

ELECTRICAL SCHEMATICS
IN THIS SECTION, YOU'LL LEARN:
About the electrical schematics for this machine’s electronics.
CONTENTS
14.1 115 Vac Power (Sheet 2)
272
14.2 24 Vdc Controls (Sheet 3)
273
14.3 Axis Drive Bus (Sheet 4)
274
14.4 Spindle Drive (Sheet 5)
275
14.5 Machine Control Board (Sheet 6)
276
14.6 Limit Switches (Sheet 7)
277
14.7 Accessory and Auxiliary Power (Sheet 8)
278
14.8 Chiller Alarm (Sheet 9)
279
14.9 Grounds (Sheet 10)
280
14.10 Terminal Strips (Sheets 11-16)
281
14.11 Wiring Table (Sheets 17-19)
287
14.12 Electrical Cabinet Layout
290
14.13 Operator Console Schematic
291


---

## PDF Page 272

14: ELECTRICAL SCHEMATICS
14.1 115 Vac Power (Sheet 2)
©Tormach® 2026
Specifications subject to change without notice.
Page 272
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.1 115 VAC POWER (SHEET 2)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
1
2
3
4
5
6
7
8
9
10
02
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
115V AC
115V AC
-P1
L
G
N
39626
-DISC1
1
2
5
6
30454
Main Disconnect
3 meter cord
NEMA 5-15 Plug
-X1
1
2
-X1
3
4
107
106
8
-X1
7
6
-X1
5
118
115
116
114
117
116
114
117
P3 - COL1
P3 - COL1
-FL1
20A
32350
EMI Filter
N
N'
L
L'
GND3
101
102
P4 - COL1
P4 - COL1
P9 - COL4
P9 - COL6
-CB1
15A
1
2
37521
Main Breaker
-CB2
15A
1
2
37521
Machine Breaker
109
-K1
4
7
37515
Drive Relay
-CB3
10A
1
2
37522
Accessory Breaker
-K2
2
1
37343
VFD Contactor
120
111
108
P5 - COL5
P5 - COL5
106
119
113
112
L
N
E
-XS25
37599
Computer Power
GND2
P9 - COL6
110
107
105
101
102
GND1
104
103
103
110
121
GND1
108
104
14


---

## PDF Page 273

14: ELECTRICAL SCHEMATICS
14.2 24 Vdc Controls (Sheet 3)
©Tormach® 2026
Specifications subject to change without notice.
Page 273
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.2 24 VDC CONTROLS (SHEET 3)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
1
2
3
4
5
6
7
8
9
10
03
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
24V DC Control
24V DC Control
P2 - COL9
P2 - COL9
24V DC
-PS1
2A
N
L
+V
-V
51138
24V DC Power Supply
100-240V AC
+V
-V
4
-X2
6
7
5
410
407
402
409
403
403
409
37526
24V
-FAN1
Electrical Cabinet Fan
-K1
10A
03-8
6
9
GND5
413
411
412
411
12
13
-X2
11
422
-X2
8
9
429
421
-K1
10
11
37515
Drive Relay
4
7
1
02-9
5
8
2
6
9
3
03-4
-K1
-K2
A1
A2
37343
VFD Contactor
2
1 02-9
3
4
5
6
13
14 03-7
-K2
-X2
16
17
428
430
430
-D1
37514
415
414
-TS1
37420
Thermal Switch
427
425
-X2
14
15
426
-K2
13
14
37343
VFD Contactor
423
-XS1
1
2
3
4
5
37353
420
P6 - COL7
3
2
406
405
P6 - COL7
P6 - COL7
408
-XS2
1
2
3
4
5
39263
P9 - COL6
-X2
1
404
P7 - COL6
P7 - COL6
P7 - COL6
118
115
408
413
424
423
410
GND6
419
418
417
416
489
-S1
5
6
3
4
-S1
Reset
37342
-S2
1
2
Emergency Stop
30462
-XS29
1
2
3
4
5
51163
-XS30
1
2
3
4
5
37927
+L2 - Operator Box
433
431
434
436
435
431
GND7
436
434
432
432
39627
Operator Box Cable, 270cm
508
10
487
401
401
P8 - COL3
P6 - COL9
P6 - COL7
P6 - COL7
529
P6 - COL9
510
P4 - COL10
14


---

## PDF Page 274

14: ELECTRICAL SCHEMATICS
14.3 Axis Drive Bus (Sheet 4)
©Tormach® 2026
Specifications subject to change without notice.
Page 274
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.3 AXIS DRIVE BUS (SHEET 4)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
1
2
3
4
5
6
7
8
9
10
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Axis Drive
Axis Drive
121
116
P2 - COL9
P2 - COL9
-XFM1
30459
Drive Transformer
0
1
11
13
-F1
5A
1
2
38693
GND8
X FUSE
F1
8A
2
F
A
8
Y FUSE
3
F
A
8
Z FUSE
4
F
A
8
A FUSE
5
F
A
1
BRAKE FUSE
8A
8A
10A
F8
F7
F6
ATC FUSE
DB FUSE
MAIN FUSE
DC BUS BOARD
J1
J2
X+
X-
Y+
Y-
Z+
Z-
A+
A-
TC+
TC-
CAP+
CAP-
32005
-BUS1
-C1
+
-
30468
212
P9 - COL4
122
-DR1
X-DRIVE 
53488
PUL+
PUL-
DIR+
DIR-
ENA+
ENA-
GND
VDC
U
V
W
J6\6
-DR2
Y-DRIVE 
53488
PUL+
PUL-
DIR+
DIR-
ENA+
ENA-
GND
VDC
U
V
W
Motor
50374
Y-MOTOR
-M2
Motor
51133
Z-MOTOR
-M3
M3B
-DR3
Z-DRIVE 
53488
PUL+
PUL-
DIR+
DIR-
ENA+
ENA-
GND
VDC
U
V
W
213
214
215
205
206
229
230
231
216
217
218
J6\18
J6\17
J6\16
J6\15
J6\14
J6\13
J6\12
J6\11
J6\10
J6\9
J6\8
J6\7
J6\24
J6\23
J6\22
J6\21
J6\20
J6\19
209
210
211
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
-DR4
32793
A-DRIVE
AC
AC
A+
A-
B+
B-
DIR-
DIR+
PUL-
PUL+
EN-
EN+
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
P6 - COL5
Motor
-M4
A-MOTOR
-XS10
1
2
4
6
7
30480
-XS9
1
2
4
6
7
30235
235
234
233
219
220
221
222
232
GND9
P9 - COL6
-XS3
1
2
3
51786
-XS4
1
3
2
51787
-XS5
1
2
3
51786
-XS6
1
3
2
51787
-XS7
1
2
3
51786
-XS8
1
3
2
51787
201
202
Motor
50374
X-MOTOR
-M1
203
204
205
206
207
208
210
209
219
220
221
222
GND10
228
227
226
225
224
223
238
237
236
116
203
204
3
ON
4
ON
5
ON
6
OFF
7
ON
8
ON
9
OFF
10
OFF
PIN
POSITION
XYZ AXIS
DIP SWITCH SETTINGS
4TH AXIS OPTION
NOT INCLUDED IN BASE MACHINE
P6 - COL5
J6\1
J6\5
J6\4
J6\3
J6\2
38924
GND14
GND15
GND16
P9 - COL6
P9 - COL6
P9 - COL6
512
511
-XS36
1
2
39687
-XS37
1
2
50782
509
P6 - COL7
510
P3 - COL2
Error
04
14
2
1
OFF
ON


---

## PDF Page 275

14: ELECTRICAL SCHEMATICS
14.4 Spindle Drive (Sheet 5)
©Tormach® 2026
Specifications subject to change without notice.
Page 275
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.4 SPINDLE DRIVE (SHEET 5)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
1
2
3
4
5
6
7
8
9
10
05
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Spindle Drive
Spindle Drive
-VFD1
35717
Spindle Motor VFD
1
2
4
5
7
9
10
11
12
13
14
41
42
L1
L2
L3
U
V
W
-
+
BR
GND
GND
GND
GND
120
114
P2 - COL9
P2 - COL9
447
449
452
448
450
451
437
446
P6 - COL2
P6 - COL2
P6 - COL2
P6 - COL2
P6 - COL2
P6 - COL2
P6 - COL2
GND12
GND13
127
126
M
3~
-M5
39613
U
V
W
GND
SPINDLE MOTOR
-XS11
1
2
3
4
39593
123
124
125
P9 - COL6
P9 - COL4
-R1
1
2
37906
BRAKE RESISTOR
70 Ohm
P6 - COL2
GND11
GND11
GND17
GND17
130
130
129
129
128
128
-XS31
1
2
3
4
35193
14


---

## PDF Page 276

14: ELECTRICAL SCHEMATICS
14.5 Machine Control Board (Sheet 6)
©Tormach® 2026
Specifications subject to change without notice.
Page 276
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.5 MACHINE CONTROL BOARD (SHEET 6)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
1
2
3
4
5
6
7
8
9
10
06
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Machine Control Board
Machine Control Board
P3 - COL5
489
407
421
J5
J1
J3
J4
J9
J7
J10
J2
1
F
A
2
F2
2A
PN 31123
ACC FUSES
J8
J6
P1
J12
J11
Axis Control
Spindle Control
Encoder
24V DC Control
ECM Power
Turret Control
Accessory Input 1
Accessory Input 2
Limit / Door Switches
Aux Control 2
RS485
RJ45
J13
J14
J15
J16
ECM1 V1.5
1
2
3
4
5
6
7
8
9
10
1
2
3
4
5
6
1
2
3
4
1
2
3
4
1
2
3
4
1
2
1
2
3
4
5
6
7
8
9
1
2
3
4
5
1
8
1
8
1
8
1
8
26
1
37509 1.5
J6\24
J6\23
J6\22
J6\21
J6\20
J6\19
J6\18
J6\17
J6\16
J6\15
J6\14
J6\13
J6\12
J6\11
J6\10
J6\9
J6\8
J6\7
J6\6
J6\5
J6\4
J6\3
J6\2
J6\1
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL8
P4 - COL8
P4 - COL8
P4 - COL8
P4 - COL8
P4 - COL8
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL6
P4 - COL6
P4 - COL6
P4 - COL6
P4 - COL6
P4 - COL6
446
448
449
450
451
452
P5 - COL6
P5 - COL5
P5 - COL5
P5 - COL5
P5 - COL6
P5 - COL5
447
P5 - COL5
P3 - COL3
P3 - COL3
485
-XS14
PPC COM PORT
901
437
P5 - COL6
-X2
21
22
23
505
1
219
1
220
507
1
2
-X2
18
503
502
504
506
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
455
457
459
460
486
485
445
444
443
442
-X2
27
-X2
28
-X2
29
-X2
30
441
440
439
438
-XS27
39619
-XS28
39619
P4 - COL5
30686
J6 Ribbon Cable, 1.3m
P20 - COL4
P20 - COL4
P8 - COL3
P8 - COL2
P8 - COL3
P8 - COL2
-XS12
1
2
3
4
5
30178
ACC PORT 1
(SOLDER SIDE OF PANEL MOUNT CONNECTOR)
IP ADDRESS
CONFIGURATION
SET TO
"FROM EEPROM"
W5
W6
2-3
1-2
JUMER SETTING
453
454
456
458
-E2
50726
24R ATC Opto Board
J1
1
2
3
J2
531
530
487
-X2
24
492
-X2
26
490
-X2
25
491
P8 - COL3
P8 - COL3
P3 - COL2
P8 - COL3
ATC COMMUNICATION
ATC MACHINES ONLY
422
420
P3 - COL6
P3 - COL5
529
P3 - COL6
509
509
P4 - COL10
14


---

## PDF Page 277

14: ELECTRICAL SCHEMATICS
14.6 Limit Switches (Sheet 7)
©Tormach® 2026
Specifications subject to change without notice.
Page 277
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.6 LIMIT SWITCHES (SHEET 7)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
1
2
3
4
5
6
7
8
9
10
07
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Limit Switches
Limit Switches
499
-LS1
V+/BN
OUT/BK
V-/BL
X-LIMIT SWITCH
39074
494
493
-LS2
V+/BN
OUT/BK
V-/BL
Y-LIMIT SWITCH
39074
495
496
500
-LS3
V+/BN
OUT/BK
V-/BL
Z-LIMIT SWITCH
39074
497
498
501
-XS16
1
2
3
39616
-XS18
1
2
3
39616
-XS20
1
2
3
39616
-XS17
1
3
2
39617
-XS19
1
3
2
39617
-XS21
1
3
2
39617
P6 - COL7
P6 - COL7
P6 - COL8
P6 - COL5
P6 - COL5
P6 - COL5
P3 - COL3
P3 - COL3
P3 - COL3
507
506
406
505
504
405
502
503
404
14


---

## PDF Page 278

14: ELECTRICAL SCHEMATICS
14.7 Accessory and Auxiliary Power (Sheet 8)
©Tormach® 2026
Specifications subject to change without notice.
Page 278
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.7 ACCESSORY AND AUXILIARY POWER (SHEET 8)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
1
2
3
4
5
6
7
8
9
10
08
+L3
Rear Spindle Cover
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Accessory / ATC
Accessory / ATC
-Y3
1
2
Air Blast Solenoid
38827
-XS15
1
2
3
4
39593
-XS26
1
2
3
4
35193
544
542
541
508
492
ACC PORT 1
ATC CONTROL SOLENOIDS
ATC MACHINES ONLY
-XS24
1
2
3
4
5
30178
440
441
P6 - COL2
438
439
P6 - COL2
P6 - COL2
P6 - COL2
(SOLDER SIDE OF PANEL MOUNT CONNECTOR)
-Y1
1
2
Dust Hood Lift
50647
543
-E1
50683
24R ATC Control Board
1
2
3
4
1
2
1
2
1
2
1
2
1
2
1
2
3
1
2
3
J1
J2
J3
J4
J5
J6
J7
J8
556
556
562
562
560
560
555
555
561
561
559
559
-PB1
PDB Button
552
551
-B2
V+/BN
OUT/BK
V-/BL
PDB Sensor
39074
-B1
V+/BN
OUT/BK
V-/BL
TPS Sensor
39074
549
536
546
550
547
545
548
490
491
P6 - COL10
P6 - COL10
P3 - COL5
P6 - COL10
557
557
558
558
-Y5
1
2
50705
1
2
Tool Release
Tool Clamp
50705
-XS34
2
1
50782
-XS35
1
2
39687
-XS38
1
3
2
50786
-XS40
1
3
2
50786
-XS39
1
3
2
50783
-XS41
1
3
2
50783
546
547
545
535
538
540
548
549
550
539
537
537
Use pins 51158 for -XS39 and -XS41
Use pins 39688 for -XS38 and -XS40
14


---

## PDF Page 279

14: ELECTRICAL SCHEMATICS
14.8 Chiller Alarm (Sheet 9)
©Tormach® 2026
Specifications subject to change without notice.
Page 279
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.8 CHILLER ALARM (SHEET 9)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
1
2
3
4
5
6
7
8
9
10
20
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Chiller Alarm
Chiller Alarm
Chiller Alarm Connector
-XS13
1
2
3
37936
-XS32
1
3
2
39332
-XS33
1
2
3
50356
460
486
520
520
521
521
P6 - COL6
P6 - COL6
CABLE LENGTH = 1 METER
14


---

## PDF Page 280

14: ELECTRICAL SCHEMATICS
14.9 Grounds (Sheet 10)
©Tormach® 2026
Specifications subject to change without notice.
Page 280
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.9 GROUNDS (SHEET 10)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
1
2
3
4
5
6
7
8
9
10
09
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Grounds
Grounds
GND1
GND8
GND12
P2 - COL2
P2 - COL7
P4 - COL2
P4 - COL8
P3 - COL4
4
5
GND13
GND2
1
-X3
2
3
GND9
GND3
GND5
P5 - COL6
P5 - COL6
P2 - COL5
GND14
GND15
GND16
6
7
8
P4 - COL5
P4 - COL8
P4 - COL6
14


---

## PDF Page 281

14: ELECTRICAL SCHEMATICS
14.10 Terminal Strips (Sheets 11-16)
©Tormach® 2026
Specifications subject to change without notice.
Page 281
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.10 TERMINAL STRIPS (SHEETS 11-16)
14.10.1 X1: AC Terminal Strip (Sheet 11)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
10
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
AC Terminal Strip
-X1
105
=F1+L1-CB1:2
109
=F1+L1-CB2:1
1
2
1
106
=F1+L1-CB3:1
2
2
1
104
=F1+L1-DISC1:6
108
=F1+L1-FL1:N
3
2
1
107
=F1+L1-XS25:N
4
2
1
112
=F1+L1-FL1:L'
118
=F1+L1-PS1:L
5
2
1
117
=F1+L1-K2:1
119
=F1+L1-K1:7
6
2
1
113
=F1+L1-FL1:N'
115
=F1+L1-PS1:N
7
2
1
114
=F1+L1-VFD1:L3
116
=F1+L1-XFM1:1
8
2
1
14


---

## PDF Page 282

14: ELECTRICAL SCHEMATICS
14.10 Terminal Strips (Sheets 11-16)
©Tormach® 2026
Specifications subject to change without notice.
Page 282
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.10.2 X2: Control Terminal Strip (Sheet 12)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
11
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Control Terminal Strip
-X2
487
=F1+L1-X2-24:1
404
=F1+L1-XS17:1
1
2
1
405
=F1+L1-XS19:1
2
2
1
406
=F1+L1-XS21:1
3
2
1
401
=F1+L1-PS1:-V
407
=F1+L1-ECM1:1
4
2
1
403
=F1+L1-FAN1
408
=F1+L1-XS1:2
5
2
1
402
=F1+L1-PS1:+V
410
=F1+L1-XS1:1
6
2
1
409
=F1+L1-FAN1
489
=F1+L1-ECM1:2
7
2
1
415
=F1+L1-D1
429
=F1+L1-K2:A2
8
2
1
421
=F1+L1-ECM1:5
430
=F1+L1-K1:11
9
2
1
508
=F1+L3-XS15:4
529
=F1+L1-E2.J1:3
10
2
1
413
=F1+L1-XS1:3
422
=F1+L1-ECM1:1
11
2
1
14


---

## PDF Page 283

14: ELECTRICAL SCHEMATICS
14.10 Terminal Strips (Sheets 11-16)
©Tormach® 2026
Specifications subject to change without notice.
Page 283
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.10.3 X2: Control Terminal Strip (Sheet 13)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
12
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Control Terminal Strip
-X2
412
=F1+L1-K1:6
423
=F1+L1-K1:10
12
2
1
424
=F1+L1-K2:13
13
2
1
425
=F1+L1-K2:14
14
2
1
420
=F1+L1-ECM1:3
426
=F1+L1-TS1
15
2
1
427
=F1+L1-TS1
16
2
1
414
=F1+L1-D1
428
=F1+L1-K2:A1
17
2
1
503
=F1+L1-XS17:3
18
2
1
485
=F1+L1-ECM1:6
505
=F1+L1-XS19:3
19
2
1
486
=F1+L1-XS13:3
507
=F1+L1-XS21:3
20
2
1
455
=F1+L1-ECM1:1
502
=F1+L1-XS17:2
21
2
1
457
=F1+L1-ECM1:2
504
=F1+L1-XS19:2
22
2
1
14


---

## PDF Page 284

14: ELECTRICAL SCHEMATICS
14.10 Terminal Strips (Sheets 11-16)
©Tormach® 2026
Specifications subject to change without notice.
Page 284
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.10.4 X2: Control Terminal Strip (Sheet 14)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
13
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Control Terminal Strip
-X2
459
=F1+L1-ECM1:3
506
=F1+L1-XS21:2
23
2
1
487
=F1+L1-X2-1:1
492
=F1+L3-XS15:1
24
2
1
531
=F1+L1-E2.J1:1
491
=F1+L3-XS15:3
25
2
1
530
=F1+L1-E2.J1:2
490
=F1+L3-XS15:2
26
2
1
444
=F1+L1-ECM1:2
440
=F1+L3-XS24:1
28
2
1
445
=F1+L1-ECM1:1
441
=F1+L3-XS24:3
27
2
1
443
=F1+L1-ECM1:3
439
=F1+L3-XS24:5
29
2
1
442
=F1+L1-ECM1:4
438
=F1+L3-XS24:4
30
2
1
14


---

## PDF Page 285

14: ELECTRICAL SCHEMATICS
14.10 Terminal Strips (Sheets 11-16)
©Tormach® 2026
Specifications subject to change without notice.
Page 285
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.10.5 X3: Ground Terminal Strip (Sheet 15)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
14
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
GROUND TERMINAL STRIP
-X3
GND12
=F1+L1-VFD1:GND
4
1
2
GND13
=F1+L1-VFD1:GND
GND2
=F1+L1-XS25:E
5
1
2
GND1
=F1+L1-P1:G
GND3
=F1+L1-FL1
1
1
2
GND5
=F1+L1-XS1:5
2
1
2
GND8
=F1+L1-XFM1
GND9
=F1+L1-XS9:4
3
1
2
GND14
=F1+L1-J1
6
GND15
=F1+L1-J3
7
GND16
=F1+L1-J4
8
14


---

## PDF Page 286

14: ELECTRICAL SCHEMATICS
14.10 Terminal Strips (Sheets 11-16)
©Tormach® 2026
Specifications subject to change without notice.
Page 286
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.10.6 X24: ATC Terminal Strip (Sheet 16)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
PAGE
15
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
+L3
ATC Terminal Strip
+L3-X24
1
2
3
4
7
8
9
10
5
6
14


---

## PDF Page 287

14: ELECTRICAL SCHEMATICS
14.11 Wiring Table (Sheets 17-19)
©Tormach® 2026
Specifications subject to change without notice.
Page 287
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14.11 WIRING TABLE (SHEETS 17-19)
Document realized with version :
16
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Wire number
Section
Length (mm)
Color code
-1
0
BK
-1
0
BK
-1
0
BK
-1
0
BK
-1
0
BK
1
-1
0
BK
1
-1
0
BK
2
-1
0
TR
2
-1
0
BK
3
-1
0
BK
4
-1
0
TR
6
-1
0
BK
8
-1
0
BK
101
2.5 (mm²)
0
BN
102
2.5 (mm²)
0
BU
103
2.5 (mm²)
0
BN
104
2.5 (mm²)
0
BU
105
2.5 (mm²)
0
BN
106
2.5 (mm²)
0
BN
107
2.5 (mm²)
0
BU
108
2.5 (mm²)
0
BU
109
2.5 (mm²)
0
BN
110
2.5 (mm²)
0
BN
111
2.5 (mm²)
0
BN
112
2.5 (mm²)
0
BN
113
2.5 (mm²)
0
BU
114
2.5 (mm²)
0
BU
115
2.5 (mm²)
0
BU
116
2.5 (mm²)
0
BU
117
2.5 (mm²)
0
BN
118
2.5 (mm²)
0
BN
119
2.5 (mm²)
0
BN
120
2.5 (mm²)
0
BN
Wire number
Section
Length (mm)
Color code
121
2.5 (mm²)
0
BN
122
2.5 (mm²)
0
BN
123
2.5 (mm²)
0
BK
123
2.5 (mm²)
0
BK
124
2.5 (mm²)
0
BK
124
2.5 (mm²)
0
BK
125
2.5 (mm²)
0
BK
125
2.5 (mm²)
0
BK
126
2.5 (mm²)
0
WH
127
2.5 (mm²)
0
WH
128
2.5 (mm²)
0
BK
129
2.5 (mm²)
0
BK
130
2.5 (mm²)
0
BK
201
2.5 (mm²)
0
BN
202
2.5 (mm²)
0
BU
203
1.5 (mm²)
0
BN
204
1.5 (mm²)
0
BU
205
1.5 (mm²)
0
BN
206
1.5 (mm²)
0
BU
207
1.5 (mm²)
0
BN
208
1.5 (mm²)
0
BU
209
1.5 (mm²)
0
BN
210
1.5 (mm²)
0
BU
211
2.5 (mm²)
0
BN
212
2.5 (mm²)
0
BU
213
1.5 (mm²)
0
BK
214
1.5 (mm²)
0
BK
215
1.5 (mm²)
0
BK
216
1.5 (mm²)
0
BK
217
1.5 (mm²)
0
BK
218
1.5 (mm²)
0
BK
219
1.5 (mm²)
0
BK
220
1.5 (mm²)
0
BK
Wire number
Section
Length (mm)
Color code
221
1.5 (mm²)
0
BK
222
1.5 (mm²)
0
BK
223
1.5 (mm²)
0
RD
223
1.5 (mm²)
0
RD
224
1.5 (mm²)
0
GN
224
1.5 (mm²)
0
GN
225
1.5 (mm²)
0
YE
225
1.5 (mm²)
0
YE
226
1.5 (mm²)
0
RD
227
1.5 (mm²)
0
GN
228
1.5 (mm²)
0
YE
229
1.5 (mm²)
0
BK
230
1.5 (mm²)
0
BK
231
1.5 (mm²)
0
BK
232
1.5 (mm²)
0
BK
233
1.5 (mm²)
0
BK
234
1.5 (mm²)
0
BK
235
1.5 (mm²)
0
BK
236
1.5 (mm²)
0
RD
237
1.5 (mm²)
0
GN
238
1.5 (mm²)
0
YE
401
.75 (mm²)
0
BN
402
.75 (mm²)
0
BU
403
.75 (mm²)
0
BN
404
.75 (mm²)
0
BK
405
.75 (mm²)
0
BK
406
.75 (mm²)
0
BK
407
.75 (mm²)
0
BN
408
.75 (mm²)
0
BN
409
.75 (mm²)
0
BU
410
.75 (mm²)
0
BU
411
.75 (mm²)
0
OG
412
.75 (mm²)
0
OG
PAGE
14
REVISION


---

## PDF Page 288

14: ELECTRICAL SCHEMATICS
14.11 Wiring Table (Sheets 17-19)
©Tormach® 2026
Specifications subject to change without notice.
Page 288
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
Document realized with version :
17
+L1
Electrical Panel
Machine Schematic
2022.0.3.6
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
SOLIDWORKS Electrical
Wire number
Section
Length (mm)
Color code
413
.75 (mm²)
0
OG
414
.75 (mm²)
0
BK
415
.75 (mm²)
0
RD
416
.75 (mm²)
0
BK
417
.75 (mm²)
0
BK
418
.75 (mm²)
0
BK
419
.75 (mm²)
0
BK
420
.75 (mm²)
0
OG
421
.75 (mm²)
0
BU
422
.75 (mm²)
0
OG
423
.75 (mm²)
0
OG
424
.75 (mm²)
0
OG
425
.75 (mm²)
0
OG
426
.75 (mm²)
0
OG
427
.75 (mm²)
0
OG
428
.75 (mm²)
0
OG
429
.75 (mm²)
0
BU
430
.75 (mm²)
0
BU
431
.75 (mm²)
0
BU
432
.75 (mm²)
0
BN
433
.75 (mm²)
0
OG
434
.75 (mm²)
0
OG
435
.75 (mm²)
0
OG
436
.75 (mm²)
0
OG
437
.75 (mm²)
0
VT
438
.75 (mm²)
0
BK
439
.75 (mm²)
0
BK
440
.75 (mm²)
0
BK
441
.75 (mm²)
0
BK
442
.2 (mm²)
0
GN
443
.2 (mm²)
0
BU
444
.2 (mm²)
0
WH
445
.2 (mm²)
0
RD
Wire number
Section
Length (mm)
Color code
446
.75 (mm²)
0
VT
447
.75 (mm²)
0
VT
448
.75 (mm²)
0
VT
449
.75 (mm²)
0
VT
450
.75 (mm²)
0
VT
451
.75 (mm²)
0
VT
452
.75 (mm²)
0
VT
453
.2 (mm²)
0
RD
454
.2 (mm²)
0
WH
455
.75 (mm²)
0
OG
456
.2 (mm²)
0
BU
457
.75 (mm²)
0
OG
458
.2 (mm²)
0
GN
459
.75 (mm²)
0
OG
460
.75 (mm²)
0
OG
485
.75 (mm²)
0
BU
486
.75 (mm²)
0
BU
487
.75 (mm²)
0
BK
489
.75 (mm²)
0
BU
490
.75 (mm²)
0
BK
490
.75 (mm²)
0
BK
491
.75 (mm²)
0
BK
491
.75 (mm²)
0
BK
492
.75 (mm²)
0
BK
492
.75 (mm²)
0
BK
493
.75 (mm²)
0
BN
494
.75 (mm²)
0
BU
495
.75 (mm²)
0
BN
496
.75 (mm²)
0
BU
497
.75 (mm²)
0
BN
498
.75 (mm²)
0
BU
499
.75 (mm²)
0
BK
500
.75 (mm²)
0
BK
Wire number
Section
Length (mm)
Color code
501
.75 (mm²)
0
BK
502
.75 (mm²)
0
BK
503
.75 (mm²)
0
BK
504
.75 (mm²)
0
BK
505
.75 (mm²)
0
BK
506
.75 (mm²)
0
BK
507
.75 (mm²)
0
BK
508
.75 (mm²)
0
BK
508
.75 (mm²)
0
BK
509
.75 (mm²)
0
BK
509
.75 (mm²)
0
BK
510
.75 (mm²)
0
BK
510
.75 (mm²)
0
BK
511
.75 (mm²)
0
BK
511
.75 (mm²)
0
BK
512
.75 (mm²)
0
BK
512
.75 (mm²)
0
BK
520
.75 (mm²)
0
BK
520
.75 (mm²)
0
BK
521
.75 (mm²)
0
BK
521
.75 (mm²)
0
BK
529
.75 (mm²)
0
BU
530
.75 (mm²)
0
BK
531
.75 (mm²)
0
BK
535
.75 (mm²)
0
BU
536
.75 (mm²)
0
BK
537
.75 (mm²)
0
BN
538
.75 (mm²)
0
BU
539
.75 (mm²)
0
BK
540
.75 (mm²)
0
BN
541
.75 (mm²)
0
OG
542
.75 (mm²)
0
OG
543
.75 (mm²)
0
OG
REVISION
PAGE
14


---

## PDF Page 289

14: ELECTRICAL SCHEMATICS
14.11 Wiring Table (Sheets 17-19)
©Tormach® 2026
Specifications subject to change without notice.
Page 289
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
0
PAGE
REVISION


---

## PDF Page 290

14.12 ELECTRICAL CABINET LAYOUT
CB3
J16
J9
J3
R1
CB2
J14
XS9
X1
P1
XS14
PS1
J2
K2
XS12 
FL1
J8
XS25
XFM1
F1
J10
BUS1
J5
C1
J4
J11
DR2
J13
X2
FAN1
CB1
DR3
XS13
DR4
TS1
XS1
J7
ECM1
DISC1
VFD1
J6
DR1
J1
J15
K1
3
X
1
D
J12
REF
PN
DESCRIPTION
XS13
37936
CHILLER ALARM CONNECTOR
DISC1
30454
MAIN DISCONNECT
FAN1
37526
CABINET FAN
XS12
30178
ACC. PORT 2
TS1
37420
BRAKE RESISTOR THERMAL SWITCH
R1
37906
BRAKE RESISTOR
VFD1
35717
SPINDLE MOTOR VFD
CB1
37521
MAIN BREAKER
CB2
37521
MACHINE BREAKER
CB3
37522
ACC. BREAKER
P
I
R
T
S L
A
N
I
M
R
E
T 
1
X
1
X
PS1
51138
24 VDC POWER SUPPLY
FL1
32350
EMI FILTER
ECM1
37506
MACHINE CONTROL BOARD
F1
38924
FUSE HOLDER
38693
FUSE
K1
37515
DRIVE RELAY
K2
37343
VFD CONTACTOR
D1
37514
FLYBACK PROTECTION DIODE
X2
34127
X2 TERMINAL STRIP
X3
34127
X3 TERMINAL STRIP
XFM1
30459
DRIVE TRANSFORMER
BUS1
32005
DC BUS BOARD
C1
30468
DC BUS CAPACITOR
DR1
53488
X-AXIS DRIVE
DR2
53488
Y-AXIS DRIVE
DR3
53488
Z-AXIS DRIVE
DR4
32793
A-AXIS DRIVE (OPTION)
XS9
30235
4TH AXIS CONNECTOR
XS14
34130
PPC COM PORT
XS25
37351
COMPUTER POWER
XS1
37353
OPERATOR BOX CONNECTOR
©Tormach® 2026
Specifications subject to change without notice.
Page 290
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
14: ELECTRICAL SCHEMATICS
14.12 Electrical Cabinet Layout


---

## PDF Page 291

14: ELECTRICAL SCHEMATICS
14.13 Operator Console Schematic
14.13 OPERATOR CONSOLE SCHEMATIC
REVISION
LOCATION:
Document realized with version :
CONTRACT:
SCHEME
CHANGES
NAME
REV.
DATE
1
2
3
4
5
6
7
8
9
10
02
+L1
Electrical Panel
Machine Schematic
0
2018.0.2.14
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
0
2/20/2019
pdenhartog
SOLIDWORKS Electrical
-S2
5
6
3
4
-S2
Reset
37342
-S1
1
2
Emergency Stop
30462
-X1
1
2
3
4
5
402
404
GND1
401
403
-X2
39379
3
4
-S3
Cycle Start
37362
3
4
-S4
Feedhold
37363
PN 39376
Override Knobs
-LED1
5v
G
R
B
J13
J14
J11
J2
J3
J12
E-Stop Passthrough
RGB LED
H2R KeySw
Front Panel Buttons
Jog Pendant
USB
J4
Override Knobs
39146
Control Board
5v
G
R
B
FH
GND
CS
GND
KEY
GND
H2R
GND
-S5
Key Switch
©Tormach® 2026
Specifications subject to change without notice.
Page 291
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 292

[No extractable text; see original PDF page.]
