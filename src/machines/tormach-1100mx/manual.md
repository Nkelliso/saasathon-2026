# Tormach 1100MX Operator Manual - UM10586, 0626A

> Curated reference: installation/commissioning and programming documentation has been excluded. Remaining manufacturer text is retained verbatim, including safety, operation, maintenance, repair, and troubleshooting where present. Original page/section numbering is preserved and may have gaps; any original page count describes the full source, not this excerpt. Follow references to excluded sections in the linked original manual.


Source: [https://tormach.com/media/asset/u/m/um10586_1100mx_0626a.pdf](https://tormach.com/media/asset/u/m/um10586_1100mx_0626a.pdf)

Document: UM10586, 1100MX Operator's Manual, version 0626A. Manufacturer: Tormach. Copyright 2026.

Companion model provenance: [1100MX solid models and drawings](https://tormach.com/support/mill/1100mx-solid-models-and-drawings), [official CAD archive](https://tormach.com/media/asset/1/1/1100m_machine_reva_1_.zip). The supplied STEP file is named `1100M_MACHINE_REVA.STEP`; `model.glb` uses this shared 1100M/MX geometry as a visual representation. It does not establish exact 1100MX internal parts or current option configuration. The model retains the source's simplified, untextured geometry and is unsuitable for dimensional verification.

Converted from official manufacturer PDF documentation. 329 PDF pages. Language: English. PDF page numbers below include cover and front matter.

Text extracted in PDF authored order to preserve the two-column paragraphs; diagrams and some table relationships require the source PDF. This is an extraction, not a verified substitute for the illustrated manual.


---

## PDF Page 1

Original Instructions
OPERATOR'S MANUAL
Version 0626A


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
Tormach®, 1100MX®, and PathPilot® are trademarks or registered trademarks of Tormach, Inc. Our milling
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
UM10586: 1100MX Operator's Manual(Version 0626A)
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
on the side of the electrical cabinet, next to the Main
Disconnect switch.
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
UM10586: 1100MX Operator's Manual(Version 0626A)
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

## PDF Page 21

SAFETY
IN THIS SECTION, YOU'LL LEARN:
About the standards and safety precautions associated with this machine.
Before operating the machine in any way, you must read and understand this section.
Safe operation of the machine depends on its proper use and the precautions you take. Only trained personnel
— with a clear and thorough understanding of its operation and safety requirements — shall operate this
machine.
CONTENTS
1.1 Intended Use
22
1.2 Machine Standards
23
1.3 Safety Overview
24
1.4 Machine Safety
27
1.5 Noise Exposure
30


---

## PDF Page 22

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
l Appropriate workholding, toolholding, tooling, coolant
systems, and machining parameters.
l Machining of conventional, non-abrasive materials such
as ferrous and non-ferrous metals below 60 HRC, woods,
and plastics.
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
Page 22
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
1: SAFETY
1.1 Intended Use


---

## PDF Page 23

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
l ANSI B11.8-2001 Safety Requirements for Manual
Milling, Drilling, and Boring Machines with or without
Automatic Control
l ANSI B11.19-2010 Performance Requirements for
Safeguarding
l ANSI B11.23-2002 Safety Requirements for Machining
Centers and Automatic Numerically Controlled Milling,
Drilling, and Boring Machines
1.2.2 Occupational Safety and Health Administration
(OSHA)
l OSHA 1910.212 General Requirements for All
Machines
l OSHA 3067 Concepts and Techniques of Machine
Safeguarding
©Tormach® 2026
Specifications subject to change without notice.
Page 23
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 24

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
Page 24
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
1: SAFETY
1.3 Safety Overview


---

## PDF Page 25

1: SAFETY
1.3 Safety Overview
Next to the Main Disconnect
Figure 1-2: Example of a safety decal next to the Main
Disconnect.
1.
WARNING! Entanglement / Entrapment Hazard. The
machine operates under automatic control — it can start
at any time and crush, cut, entangle, or pinch body
parts. Always keep clear of positions on the machine
where unexpected or unintended machine motion could
cause harm. Before operating this machine in any way,
you must verify that all operators know the location of
the machine's Emergency Stop button.
2.
WARNING! Ejection Hazard. Fixtures, tooling,
workpieces, or other loose items can become dangerous
projectiles and can cause death or serious injury. Before
operating this machine in any way, you must verify that
you have appropriately secured all components.
3.
WARNING! Fire Hazard.The machine and its enclosure
are not designed to contain fire or explosions. Only use
materials and coolants that are intended for the specific
machining operation. Never use flammable or explosive
items.Before operating the machine in any way, you
must read all Safety Data Sheets (SDSs) for any
workpiece materials, coatings, coolants, lubricants, and
other consumables used.
4.
WARNING! Inhalation Hazard. The machine and its
enclosure do not protect you from airborne particulates.
Chips, dust, and vapors from certain materials can be
toxic or otherwise harmful. Before operating the
machine in any way, you must read all Safety Data
Sheets (SDSs) for any workpiece materials, coatings,
coolants, lubricants, and other consumables used.
5.
Personal Protective Equipment: Eyes. Prevent injury by
always wearing protective safety eyewear. Before
operating this machine in any way, you must verify that
your eyewear is impact-resistant and rated for
ANSI 787+.
6.
Operator Knowledge. Before operating this machine in
any way, you and all other operators must read and
understand all instructions. If you don't, there's a risk of
voided warranty, property damage, serious injury, or
death.
On the Spindle Nose
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
1.3.3 Information Decals
Before operating the machine in any way, you must locate and
become familiar with all installed information decals on the
machine and equipment.
Serial Number Plate
The serial number plate is on the side of the electrical cabinet,
near the Main Disconnect switch.
©Tormach® 2026
Specifications subject to change without notice.
Page 25
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 26

Figure 1-4: Example of the serial number plate on the side
of the electrical cabinet.
©Tormach® 2026
Specifications subject to change without notice.
Page 26
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
1: SAFETY
1.3 Safety Overview


---

## PDF Page 27

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
27
1.4.2 Operational Safety
27
1.4.3 Electrical Safety
28
1.4.1 General Shop Safety
Verify that only qualified machinery maintenance
professionals install, set up, or perform maintenance on
this machine.
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
For information, see "Noise Exposure" (page 30).
Keep the work area clean and free of clutter. Machine
motion can occur if controls are accidentally activated.
Immediately clean up spills after they occur.
Never operate the machine after consuming alcohol or
taking medication that could prevent you from safely
operating the machine.
Never operate the machine while tired or otherwise
impaired.
Never operate the machine in an explosive (ATEX)
atmosphere. Such explosive atmospheres include
explosive gases, vapors, mists, powders, and dusts.
1.4.2 Operational Safety
General
Understand that the machine is automatically controlled
and can start at any time.
If anyone enters the machining envelope during operation,
immediately push in the Emergency Stop button. In case
of a power loss, turn the Door Switch Override to the
Unlocked position and open the enclosure doors.
Become familiar with all physical and software controls.
Always use a chip scraper or brush when clearing away
chips, oil, or coolant.
Examine all tools, fixtures, workpieces, and guarding for
signs of damage. Replace any damaged components as
soon as you find them.
The enclosure and other guards may not stop all types of
projectiles, like broken tools or loose workpieces.
Stop the machine and verify that all machine motion has
completely stopped before doing any of the following:
Adjusting a part, fixture, or coolant nozzle.
Changing belt or pulley positions.
Changing tools or parts.
Clearing away chips, oil, or coolant.
Reaching into any part of the machine's motion
envelope.
Removing protective shields or safeguards.
Taking measurements.
Doing any other action inside the machine enclosure.
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
©Tormach® 2026
Specifications subject to change without notice.
Page 27
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 28

Dispose of scrap and swarf according to local regulations
and guidelines.
Thoroughly read all safety precautions and instructions.
When machining an unproven program, use feed, speed,
and maximum velocity overrides, Distance-to-Go (DTG)
displays, single block, feed hold, and other control
features.
Follow all appropriate "Machine Standards" (page 23).
Never enter the machining envelope.
Never reach around a guard.
Never allow the machine to run unattended.
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
The enclosure and other guards may not stop all types of
projectiles, like broken tooling.
Never use unbalanced tooling or spindle fixtures.
Never use tools that are larger or longer than necessary.
Never use tools at speeds above their operational limits.
Workholding
Secure workpieces with appropriate workholding devices
(like a milling vise or strap clamps).
Verify that the workpiece is adequately secured.
Position clamps and workholding devices clear of any tool
paths.
Remove cutoff workpieces and other large chips before
starting the machine.
Never leave tools, stock, or other loose items inside the
machine.
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
Requirements" (page 38).
Confirm that the machine installation meets all codes and
regulations of your locality.
©Tormach® 2026
Specifications subject to change without notice.
Page 28
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
1: SAFETY
1.4 Machine Safety


---

## PDF Page 29

1: SAFETY
1.4 Machine Safety
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
Page 29
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 30

1.5 NOISE EXPOSURE
CAUTION! Noise Exposure Hazard: If you expect the
machine or the machining processes to exceed safe
exposure limits, you must wear ear protection.
With the axes moving and the spindle rotating (but not
cutting), the emission sound pressure level at the operator
control station is 70 dB(A).
Emission sound pressure levels vary depending on the
machining processes. Factors that influence the actual level of
noise exposure may include:
l Characteristics of the work room
l Other sources of noise (like the number of machines, or
other adjacent processes)
The permissible noise exposure level may vary between
countries. You must evaluate of the hazard and risk based on
your locality, and mitigate as necessary.
©Tormach® 2026
Specifications subject to change without notice.
Page 30
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
1: SAFETY
1.5 Noise Exposure


---

## PDF Page 31

ABOUT YOUR MACHINE
IN THIS SECTION, YOU'LL LEARN:
About this machine's specifications.
CONTENTS
2.1 Performance Expectations
32
2.2 Machine Specifications
33


---

## PDF Page 32

2.1 PERFORMANCE EXPECTATIONS
Each machine has a Certificate of Inspection, which details
quality assurance measurements performed by members of
our quality assurance team prior to shipping.
2.1.1 Cutting Performance
This machine is capable of cutting a wide variety of materials
(for information, see "Intended Use" (page 22)) at or near
their recommended feeds and speeds. Make sure that your
workpiece is held as rigidly as possible and use the most rigid
tooling available for roughing cuts. Verify that the
programmed operations do not exceed the available spindle
power.
l Spindle Speed Range
Two speed ranges are available: 
o
Low 70 rpm to 2000 rpm
o
High 250 rpm to 10,000 rpm
l Spindle Power Rating 2 hp (1.5 kW)
l Maximum Feed Rate
o
X- and Y-Axis 300 IPM (7.6 m/min)
o
Z-Axis 230 IPM (5.8 m/min)
2.1.2 Resolution and Accuracy
Accuracy is heavily influenced by the techniques that the
machinist uses. A skilled machinist can deliver accuracy that
exceeds the specified accuracy from the manufacturer; an
inexperienced machinist may have difficulty delivering the
specified accuracy. We can't predict operator accuracy, but the
specified accuracy is an important reference point.
l Resolution 0.0001"
Note: The resolution of motion is the minimum
discrete positional move.
l Ball Screw Positional Accuracy ≤0.0006 in./ft
l Single Axis Positional Accuracy ≤0.0013 in./ft
Note: The positional accuracy includes
additional contributing factors (like
compressibility of bearings, ball screw windup,
and friction).
©Tormach® 2026
Specifications subject to change without notice.
Page 32
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
2: ABOUT YOUR MACHINE
2.1 Performance Expectations


---

## PDF Page 33

2: ABOUT YOUR MACHINE
2.2 Machine Specifications
©Tormach® 2026
Specifications subject to change without notice.
Page 33
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
2.2 MACHINE SPECIFICATIONS
Travels
X-Axis
18" (457 mm)
Y-Axis
11" (279 mm)
Z-Axis
16.25" (413 mm)
Spindle-to-Table Maximum Clearance
17.25" (438 mm)
Spindle Centerline to Machine Column
11" (279 mm)
Spindle
Spindle Power
2 hp (1.5 kW)
Spindle Maximum Speed
10,000 rpm
Transmission
Poly-V Belt
Spindle Taper
BT30
Thread Machining
Rigid Tapping, Tension/Compression, Thread Mill
Maximum Feed Rate
X- and Y-Axis
300 IPM (7.6 m/min)
Z-Axis
230 IPM (5.8 m/min)
Axis Motor
Servo Driven
Power
Primary Power Required
Single-Phase 230 Vac, 50/60 Hz
Recommended Circuit Amperage
Dedicated 20 A breaker
Table
Table Size
34" × 9.5" (864 mm × 241 mm)
T-Slot Size
5/8" (15.9 mm) (three slots)
Maximum Weight on Table
500 lb (227 kg)
Overall Dimensions
Machine Size
69" × 56" (1.8 m × 1.4 m)
Overall System Height
96" (2.4 m)
Typical System Weight
1850 lb (840 kg)


---

## PDF Page 34

[No extractable text; see original PDF page.]


---

## PDF Page 35

SITE REQUIREMENTS
IN THIS SECTION, YOU'LL LEARN:
About the site requirements of this machine (including electrical and power requirements).
Before operating the machine in any way, you must read and understand this section.
CONTENTS
3.1 General Site and Space Requirements
36
3.2 Electrical and Power Requirements
38


---

## PDF Page 36

3.1 GENERAL SITE AND SPACE REQUIREMENTS
When choosing a location for your machine, you must verify
that it meets all requirements outlined in this section.
3.1.1 Site Requirements
You must verify that the area:
l Allows for unrestricted access to machine controls.
l Conforms to the following:
o
Primary Power Required Single-Phase 230 Vac,
50/60 Hz
Maximum 240 Vac, 50/60 Hz
o
Recommended Circuit Amperage Dedicated 20 A
breaker
Maximum 60 A breaker
Note: For more information, see "Electrical and
Power Requirements" (page 38).
l Has clean, dry, compressed air.
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
l Machine Size 69" × 56" (1.8 m × 1.4 m)
l Machine Height 96" (2.4 m)
Figure 3-1: Dimensions of the machine itself, as
viewed from the front.
l Typical System Footprint 89" × 67" (2.3 m × 1.7 m)
Figure 3-2: Dimensions of the machine and it's
required added space, as viewed from above.
If a pallet is too wide to fit through a doorway, see Moving
Dimensions (D40147).
3.1.3 Operator Workstation Reference
The typical operator workstation is the area in front of the
enclosure doors and the PathPilot controller, as shown in the
following image.
©Tormach® 2026
Specifications subject to change without notice.
Page 36
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
3: SITE REQUIREMENTS
3.1 General Site and Space Requirements


---

## PDF Page 37

3: SITE REQUIREMENTS
3.1 General Site and Space Requirements
Figure 3-3: Example of the typical operator workstation.
For information on the machine controls, go to "System
Basics" (page 107).
©Tormach® 2026
Specifications subject to change without notice.
Page 37
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 38

3.2 ELECTRICAL AND POWER REQUIREMENTS
You must verify that the site conforms to the following
electrical and power requirements.
3.2.1 Electrical Requirements
A certified electrician must make all electrical connections,
and it's your responsibility to verify that the electrical
installation of the machine meets all local regulations and
electrical codes.
l Primary Power Required Single-Phase 230 Vac, 50/60
Hz
Maximum 240 Vac, 50/60 Hz
l Recommended Circuit Amperage Dedicated 20 A
breaker
Maximum 60 A breaker
3.2.2 Power Requirements
If the site conforms to the electrical requirements, verify that
it meets the following power requirements:
l No Electrical Noise Primary power must be provided
by a dedicated circuit, which must be isolated from
electrically-noisy devices like welders or plasma torches.
The machine should be isolated from inductive loads
from items like vacuum cleaners or air compressors.
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
NEMA 6-20P plug, designed for use with a NEMA 6-20R
receptacle.
3.2.3 Options for Non-Conforming Sites
For sites that don't conform to the specified "Electrical and
Power Requirements" (above), you may consider the following.
You must consult with an electrician to determine the
suitability for your site.
l Buck-Boost Transformer Used to adjust line voltages.
While the machine can run on line voltages between 200
to 240 Vac, spindle performance is reduced on line
voltages below 230 Vac, and damage to electrical
components is possible on line voltages above 240 Vac.
To prevent reduction in spindle performance or damage
to electrical components, we recommend the Buck-
Boost Transformer (PN 32554).
©Tormach® 2026
Specifications subject to change without notice.
Page 38
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
3: SITE REQUIREMENTS
3.2 Electrical and Power Requirements


---

## PDF Page 73

Lubricate the Rotary Table
NOTICE! Never operate the 4th Axis without lubrication.
Operating the 4th Axis without lubrication may void your
warranty.
©Tormach® 2026
Specifications subject to change without notice.
Page 73
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 74

The rotary table is shipped without oil. Before operating, you
must fill the rotary table with oil. Only use AGMA 2 gear oil or
SAE 30 weight motor oil. Do not use way oil.
Note: After the rotary table is filled with oil, you must
allow it to drain the excess oil, which may take up to
two days. You may use the 4th Axis while it drains.
1.
Identify the oil fittings on the rotary table.
OIL POINT
OIL PLUG
OIL SIGHT
GLASS 
OIL POINT
Figure 4-73: Oil fittings on a standard rotary table.
OIL POINT
OIL POINT
OIL POINT
OIL POINT
OIL POINTS
Figure 4-74: Oil fittings on a tilting rotary table.
OIL POINTS
OIL POINTS
Figure 4-75: Oil fittings on a super spacer rotary table.
2.
On the standard rotary tables (6 in. Rotary Table or 8 in.
Rotary Table), identify the oil reservoir.
3.
Use a trigger-style oil can to fill the oil fittings: Insert the
tip of the oil can into each fitting, and pump in oil until
you can feel back pressure.
4.
On the standard rotary tables (6 in. Rotary Table or 8 in.
Rotary Table), fill the oil reservoir until the oil begins to
leak out at the bottom of the table. If the If the oil
reservoir is over-filled, it slowly leaks out until it reaches
the correct level.
5.
Put the rotary table on a stack of newspaper (or similar)
to allow it to drain the excess oil.
Adjust the Backlash
NOTICE! You must complete the steps in this procedure
to adjust the backlash. If you do not adjust the backlash, it
could result in premature wear on the rotary table.
To Set the Backlash by Positioning the Backlash
Adjustment Screw
1.
Identify the backlash adjustment screw: Remove the
protective cover screw on top of it, or loosen a jam nut.
Figure 4-76: Backlash adjustment screw on a standard
rotary table.
©Tormach® 2026
Specifications subject to change without notice.
Page 74
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 75

Figure 4-77: Backlash adjustment screw on a tilting
rotary table.
Figure 4-78: Backlash adjustment screw on a super
spacer rotary table.
2.
Loosen the backlash adjustment screw six turns
counterclockwise.
3.
Disengage the eccentric lock and clamp handles.
4.
Engage the worm gear: Rotate it completely
(counterclockwise on standard and tilting rotary tables;
clockwise on super spacer rotary tables).
5.
Verify that the rotary table does not turn. It doesn't turn
when the motor is engaged.
6.
Use one hand to put counterclockwise pressure on the
motor (clockwise on super spacer rotary tables), and
slowly tighten the set screw until you feel resistance to
the pressure you're applying.
Tip! Move slowly — the resistance could be
subtle.
The set screw is just against the worm drive.
7.
Tighten the set screw a quarter-turn. The motor rotates
slightly, and creates a gap (for an oil film) between table
and worm gear.
8.
Replace the protective cover screw.
To Set the Backlash by the Numbers
Adjust for a minimum backlash of 30 arc-seconds.
Measured at the outer circumference of an 8-in.
diameter circle with a dial indicator, 30 arc-seconds will
be 0.0006 in. of lost motion.
Setting the backlash to 60 arc-seconds will sustain a thicker oil
film, yielding lower friction and longer life. Measured at the
outer circumference of an 8-in. diameter circle with a dial
indicator, 60 arc-seconds is 0.0012 in. of lost motion.
We do not recommend setting the backlash greater than 90
arc-seconds (1.5 arc-minutes). It won't improve the life of the
mechanism, and could result in chatter during machine
operations.
---

## PDF Page 90

Use the Maintenance Labels
The machine has one maintenance label on each window.
Figure 4-123: Window maintenance label.
Write down today's date on each label with a permanent
marker.
Replace the Windows
When required, replace the windows with the following parts:
l Window, 1100, Side (PN 37648)
l Window, 1100, Left Door (PN 37649)
l Window, 1100, Right Door (PN 37650)
---

## PDF Page 107

SYSTEM BASICS
IN THIS SECTION, YOU'LL LEARN:
About the main components of the machine and how it moves.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
5.1 System Reference
108
5.2 Basic Controls Reference
109


---

## PDF Page 108

5.1 SYSTEM REFERENCE
To operate your machine, you must become familiar with the
components of its system.
5.1.1 Machine Table
The machine table is 34" × 9.5" (864 mm × 241 mm).
Don't put more than 500 lb (227 kg) on the machine table.
Always verify that the workpiece and workholding devices are
centered on the machine table.
The machine table has three T-slots along the X-axis, used to
secure workholding devices (on which to secure your workpiece
while machining):
l T-Slots 5/8" (15.9 mm) (three slots)
l T-Slot Spacing 2-3/8" (60.3 mm)
l Center T-Slot Precision ground to 0.625" (15.9 mm)
5.1.2 Spindle
The machine spindle uses a BT30 taper to hold BT30 tool
holders.
l Spindle Power 2 hp (1.5 kW)
l Maximum Speed 10,000 rpm
Two speed ranges are available: 
o
Low 70 rpm to 2000 rpm
o
High 250 rpm to 10,000 rpm
About the Spindle
The machine spindle gives power to the cutting tool, which
allows it to remove material from the workpiece. The spindle
is driven by the spindle motor.
The machine uses a single-contact BT30 spindle taper. The tool
holder contacts only the spindle taper, which keeps it in
position. Because of this, there's a gap (2 mm) between the
tool holder's flange and the end surface of the spindle nose.
Operate the spindle either manually or by G-code commands
(entered in the MDI Line DRO field or programmed into a G-
code program). Manually controlling the spindle is useful when
you're setting work offsets for tools that require the spindle to
be running (like “wiggler”-style edgefinders or coaxial
indicators).
The machine's spindle rotates either clockwise (forward) or
counterclockwise (reverse) at a specified spindle speed.
5.1.3 Axes
The machine has three linear axes of motion, and one optional
rotary axis, used for machining:
l The X-axis, which is (horizontally) along the long side of
the machine table.
l The Y-axis, which is (horizontally) along the short side of
the machine table.
l The Z-axis, which is (vertically) along the mill column.
l (Optional) The A-axis, which is the axis of rotation that is
typically aligned to the X-axis.
Figure 5-1: Axis directions on the machine.
Each axis has a different limit of travel:
l X-Axis 18" (457 mm)
l Y-Axis 11" (279 mm)
l Z-Axis 16.25" (413 mm)
©Tormach® 2026
Specifications subject to change without notice.
Page 108
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
5: SYSTEM BASICS
5.1 System Reference


---

## PDF Page 109

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
l The Main Disconnect switch, located on the right side of
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
button, located on the front of the machine.
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
Page 109
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 110

[No extractable text; see original PDF page.]


---

## PDF Page 111

PATHPILOT INTERFACE
OVERVIEW
IN THIS SECTION, YOU'LL LEARN:
How PathPilot is organized, and where you can access each tool or feature.
CONTENTS
6.1 About PathPilot
112
6.2 Notebook Section
113
6.3 Persistent Controls
116
6.4 Keyboard Shortcuts
118
6.5 Manage PathPilot Versions
119


---

## PDF Page 112

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
Page 112
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.1 About PathPilot


---

## PDF Page 113

6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section
6.2 NOTEBOOK SECTION
Figure 6-2: Notebook section.
The areas displayed in the Notebook section change depending
on the activity that you're doing. Activities are grouped into the
following tabs:
6.2.1 Main Tab
113
6.2.2 File Tab
113
6.2.3 Settings Tab
113
6.2.4 Offsets Tab
114
6.2.6 Probe/ETS Tab
114
6.2.7 Status Tab
114
6.2.1 Main Tab
Figure 6-3: Main tab.
By default, the Main tab is active when you power on the
PathPilot controller. From the Main tab, you can do the
following activities:
l Access G-code files that are already loaded into
PathPilot, and open or close them.
For information, see "Access Recent G-Code Files"
(page 123); "Close the Current Program" (page 123).
l Send G-code commands directly to the machine using
the Manual Data Input (MDI) Line DRO field.
For information, see "Manually Enter Commands"
(page 164).
l In a G-code program, do tasks like finding specific terms
in the code, reading the code, or viewing the generated
tool path.
For information, see "Search in the Code" (page 125);
"Expand the G-Code Tab" (page 124); "Change the View
of the Tool Path Display" (page 126).
l Make and restore backup files of your settings.
For information, see "Create Backup Files" (page 170);
"Restore Backup Files" (page 171).
6.2.2 File Tab
Figure 6-4: File tab.
From the File tab, you can do the following activities:
l Transfer G-code files into the PathPilot controller.
For information, see "Transfer Files to and From the
Controller" (page 181).
l Edit G-code files.
For information, see "Edit G-Code" (page 123).
l Load .nc files into PathPilot to run a program.
For information, see "Load G-Code" (page 181).
l Move files within the system.
For information, see "Preview G-Code Files" (page 122);
"Manage System Files" (page 170).
6.2.3 Settings Tab
Figure 6-5: Settings tab.
From the Settings tab, you can do the following activities:
l Change the network name with which you're using
PathPilot.
For information, see "Change the Network Name"
(page 140).
©Tormach® 2026
Specifications subject to change without notice.
Page 113
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 114

l Change the screen's layout orientation (landscape or
portrait).
For information, see "Change the Screen Orientation"
(page 140).
l Configure PathPilot for the accessories you're using.
For information, see "Enable the On-Screen Keyboard"
(page 143); "Enable the USB M-Code I/O Interface Kit"
(page 144); "Use a USB Camera" (page 146); "Specify
the Tool Change Method" (page 142); "Select the Spindle
Type" (page 140) "Select the Spindle Type" (page 140).
l Turn on feeds and speeds suggestions when using
conversational programming.
For information, see "Enable Feeds and Speeds
Suggestions in Conversational Routines" (page 145).
l Specify the way in which you want to use a G30 move.
For information, see "Limit G30 Moves" (page 143).
l Identify the available G-code modes that you can use.
For information, see "View Available G-Code Modes"
(page 155).
6.2.4 Offsets Tab
Figure 6-6: Offsets tab.
From the Offsets tab, you can do the following activities:
l Import and export .csv files of your tool table.
For information, see "Import and Export the Tool Table"
(page 172).
l Work with a table of tool descriptions and tool offsets.
For information, see "Set Tool Length Offsets"
(page 183).
l Use an Electronic Tool Setter (ETS) to measure tools.
For information, see "Use an Electronic Tool Setter (ETS)
to Measure Tools" (page 185).
l Preset a G30 position.
For information, see "Use a G30 Position" (page 164).
l Read the currently programmed work offsets.
For information, see "View Work Offsets" (page 155).
6.2.6 Probe/ETS Tab
Figure 6-8: Probe tab.
From the Probe tab, you can do the following activities:
l Configure and control a probe to help perform certain
functions.
For information, see "Use a Probe with PathPilot"
(page 149).
l Configure and control an Electronic Tool Setter (ETS) to
help perform certain functions.
For information, see Use an to Measure Tools.
6.2.7 Status Tab
Figure 6-9: Status tab.
From the Status tab, you can do the following activities:
©Tormach® 2026
Specifications subject to change without notice.
Page 114
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section


---

## PDF Page 115

6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section
l View diagnostic machine information.
For information, see "Troubleshooting" (page 247).
l Read error messages.
l Configure your internet connection.
For information, see "Enable an Internet Connection"
(page 139).
l Update or install a previous version of PathPilot.
For information, see "Manage PathPilot Versions"
(page 119).
©Tormach® 2026
Specifications subject to change without notice.
Page 115
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 116

6.3 PERSISTENT CONTROLS
Figure 6-10: Persistent Controls section.
The areas that display in the Persistent Controls section don't
change (unlike the Notebook section). They display regardless
of the activity you're doing. Activities are grouped into the
following areas:
6.3.1 Program Control Area
116
6.3.2 Position Status Area
116
6.3.3 Manual Control Area
116
6.3.1 Program Control Area
Figure 6-11: Program Control area.
From the Program Control area, you can do the following
activities either before starting or while running a G-code
program:
l Reset the machine.
For information, see "Bring the Machine Out of Reset"
(page 175).
l Start, stop, or pause a G-code program.
For information, see "Start a Program" (page 158); "Stop
Machine Motion" (page 158); "Use the Feed Hold
Function" (page 160).
l Turn coolant on or off.
For information, see "Operate the Coolant Pump"
(page 188).
l Use overrides to change the feed rate, spindle speed,
and maximum velocity.
For information, see "Use the Feed Rate Override
Function" (page 160); "Use the Maxvel Override
Function" (page 161); "Use the Spindle Override
Function" (page 162).
l Manually control a G-code program.
For information, see "Use M01 Break Mode" (page 161);
"Use Single Block Mode" (page 162).
6.3.2 Position Status Area
Figure 6-12: Position Status area.
From the Position Status area, you can do the following
activities either before starting or after running a G-code
program:
l Reference the machine axes.
For information, see "Reference the Machine"
(page 176).
l Create work offsets.
For information, see "Set Work Offsets" (page 187).
l Understand how you're jogging the machine.
For information, see "View the Active Axis to Jog"
(page 156); "View the Current Machine Position"
(page 157); "View the Distance to Go" (page 159).
l Quickly determine which G-code modes are active.
For information, see "View the Active G-Code Modes"
(page 159).
6.3.3 Manual Control Area
Figure 6-13: Manual Control area.
From the Manual Control area, you can do the following
activities either before starting or after running a G-code
program:
l Move the machine axes.
For information, see "Jog the Machine" (page 177).
©Tormach® 2026
Specifications subject to change without notice.
Page 116
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.3 Persistent Controls


---

## PDF Page 117

6: PATHPILOT INTERFACE OVERVIEW
6.3 Persistent Controls
l Change the spindle speed or feed rate.
For information, see "Change the Spindle Speed"
(page 163); "Change the Feed Rate" (page 163).
l View or edit information about the current tool.
For information, see "Change the Tool Number"
(page 163); "Use a G30 Position" (page 164) "View the
Tool Length" (page 164).
©Tormach® 2026
Specifications subject to change without notice.
Page 117
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 118

6.4 KEYBOARD SHORTCUTS
The following table lists the keyboard shortcuts in PathPilot.
Keyboard
Shortcut
Use to...
Alt+E
Edit the currently loaded G-code program
(from any tab in the PathPilot interface)
Alt+Enter
Use the Manual Data Input (MDI) Line
DRO field
Alt+F
Use the coolant function
Alt+R
Start a program
Esc
Stop a program
Shift+Alt+E
From the Main tab, quickly edit a G-code
program with conversational programming
Space Bar
Feed hold the machine
©Tormach® 2026
Specifications subject to change without notice.
Page 118
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.4 Keyboard Shortcuts


---

## PDF Page 119

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
Page 119
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 120

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
Page 120
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.5 Manage PathPilot Versions


---

## PDF Page 121

PATHPILOT TOOLS AND
FEATURES
IN THIS SECTION, YOU'LL LEARN:
How to use PathPilot, depending on the activity that you want to do.
CONTENTS
7.1 Create and Load G-Code Files
122
7.2 Machine Settings and Accessories
139
7.3 Set Up G-Code Programs
149
7.4 Run G-Code Programs
156
7.5 Control G-Code Programs
160
7.6 System File Management
170


---

## PDF Page 122

7.1 CREATE AND LOAD G-CODE FILES
To get started with PathPilot, you must first load or create a G-
code file.
7.1.1 Load G-Code
122
7.1.3 Read G-Code
124
7.1.1 Load G-Code
To run a G-code program on a PathPilot controller, you must
first verify that the file is on the controller. For more
information on transferring and moving files, see "Transfer
Files to and From the Controller" (page 181).
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
Page 122
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 123

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

## PDF Page 124

7.1.3 Read G-Code
Once your G-code file is loaded into PathPilot, you can read it
in the following ways:
Expand the G-Code Tab
124
Search in the Code
125
Set a New Start Line
125
Change the View of the Tool Path Display
126
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
Page 124
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 125

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
Page 125
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 126

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
Page 126
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 127

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

## PDF Page 139

7.2 MACHINE SETTINGS AND ACCESSORIES
Before running a G-code program, you must first make sure
that the machine settings are properly configured.
7.2.1 Enable an Internet Connection
139
7.2.2 Change the Network Name
140
7.2.3 Select the Spindle Type
140
7.2.4 Change the Screen Orientation
140
7.2.5 Specify the Tool Change Method
142
7.2.6 Disable Hard Stop Referencing
142
7.2.7 Limit G30 Moves
143
7.2.8 Enable the On-Screen Keyboard
143
7.2.9 Enable the USB M-Code I/O Interface Kit
144
7.2.10 Enable Tooltips
144
7.2.11 Enable the Door Lock Switch Kit
144
7.2.13 Specify Probing and Tool Measuring Options
145
7.2.14 Use the RapidTurn Interface
145
7.2.15 Specify the 4th Axis Rotary Type
145
7.2.16 Use a USB Camera
146
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
©Tormach® 2026
Specifications subject to change without notice.
Page 139
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 140

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
7.2.3 Select the Spindle Type
If you have an additional spindle (separate from the standard
spindle), you must first select it in PathPilot.
To select the spindle type:
From the Settings tab, from the Spindle Type drop-
down, select the appropriate spindle option.
Figure 7-30: Spindle Type field on the Settings tab.
7.2.4 Change the Screen Orientation
A vertical orientation for 1920 × 1080 monitors is supported in
PathPilot v2.10.0 and later. For more information on the
portrait layout, go to "About Portrait Screen Layout" (on the
next page).
To change the screen orientation:
1.
From the PathPilot interface, on the Settings tab, select
Portrait from the Layout drop-down menu. Restart the
controller.
Figure 7-31: Layout drop-down menu on the Settings
tab.
2.
Rotate the monitor to the portrait orientation. You can
rotate it either left or right, depending on what's easier
for your setup.
©Tormach® 2026
Specifications subject to change without notice.
Page 140
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 141

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
3.
While the controller is restarting, specify which direction
you've rotated the monitor. Select Apply. If the result is
unexpected, click Restore Previous Configuration on the
confirmation dialog and choose a rotation direction
again.
Figure 7-32: Monitor configuration dialog box.
The controller restarts in portrait layout.
About Portrait Screen Layout
Portrait layout provides some key advantages:
l A larger tool path window that's always visible at the
top of the screen, regardless of which tab you have
active.
Figure 7-33: Tool Path window in portrait screen
layout.
l A wider G-code window to more easily read the loaded
G-code file and, if enabled, line numbers.
l The tool path window's view options are always visible
for much easier access.
©Tormach® 2026
Specifications subject to change without notice.
Page 141
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 142

l When browsing G-code files using the File tab, file
previews display on the top portion of the screen.
Figure 7-34: File tab G-code preview in portrait screen
layout.
7.2.5 Specify the Tool Change Method
When PathPilot finds an M06 command in a G-code program,
it has different behaviors depending on the specified tool
change method.
To specify the tool change method:
From the Settings tab, select the appropriate tool
change method for your machine.
Figure 7-35: Tool change method options on the
Settings tab.
About Automatic Tool Changes
If you're using an Automatic Tool Changer (ATC) to make tool
changes, PathPilot does the following:
1.
Looks for an ATC.
In the PathPilot interface, the ATC tab displays.
2.
When PathPilot finds a Txx M06 command in the G-
code program, the ATC loads the specified tool into the
spindle.
About Manual Tool Changes
If you're making manual tool changes, PathPilot pauses when
it finds an M06 command in the G-code program. While it's
paused, PathPilot does the following:
1.
The Cycle Start button flashes.
2.
The Tool Path display shows the requested tool number.
7.2.6 Disable Hard Stop Referencing
To provide a temporary workaround for a malfunctioning limit
switch circuit, you can disable the limit switches.
Note: By default, the Hard Stop Referencing checkbox
is selected.
To disable hard stop referencing:
1.
From the Settings tab, clear the Hard Stop Referencing
checkbox.
Figure 7-36: Hard Stop Referencing checkbox on the
Status tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 142
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 143

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
2.
Select OK.
The machine completes a unique referencing procedure
after selecting the axis reference buttons: rather than
moving each axis to the end of its travel, the reference
position is set as the machine's current position.
Tip! This is useful for troubleshooting, because
you're now able to move the axis.
About Limit Switches
In the PathPilot interface, on the Settings tab, the Hard Stop
Referencing checkbox is selected by default.
If the checkbox is cleared, the machine completes a unique
referencing procedure after selecting Ref X, Ref Y, Ref Z, and
Ref A: rather than moving each axis to the end of its travel, the
reference position is set as the machine's current position. This
is useful for troubleshooting: if the limit switches are disabled,
you're able to move the axis off of its limit switch.
7.2.7 Limit G30 Moves
You can limit G30 moves so that only the Z-axis moves. For
information, see "About G30" (page 164).
To limit G30 moves:
From the Settings tab, select G30/M998 Move in Z Only.
Figure 7-37: Settings tab.
About G30
A G30 command in a G-code program moves the machine to a
preset position. For more information on setting a G30
position, see "Use a G30 Position" (page 164).
Use a G30 move to start a coordinated movement of the axes.
You can limit the movement to only the Z-axis. For
information, see "Limit G30 Moves" (above).
Tip! It's useful to program a G30 move right before a
tool change so that the machine can jog to a safe tool
change position.
7.2.8 Enable the On-Screen Keyboard
If you have an (optional) Touch Screen Kit (PN 35575), you can
use a soft keyboard to type information in the PathPilot
interface. For information, see "About Soft Keyboards"
(below).
To enable and use the soft (on-screen) keyboard:
1.
From the Settings tab, select Soft / On-Screen Keyboard.
Figure 7-38: Settings tab.
2.
To resize the keyboard, select a corner of the keyboard
and drag.
3.
To reposition the keyboard, select the Anchor key and
drag the keyboard anywhere on the screen.
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
©Tormach® 2026
Specifications subject to change without notice.
Page 143
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 144

Figure 7-39: Soft (on-screen) keyboard.
7.2.9 Enable the USB M-Code I/O Interface Kit
If you have a USB M-Code I/O Interface Kit (PN 32616), you
must first enable it in the PathPilot interface.
To enable the USB M-Code I/O Interface Kit:
From the Settings tab, select USB IO Kit (PN 32616).
Figure 7-40: Settings tab.
7.2.10 Enable Tooltips
PathPilot displays expandable tooltips for many areas of the
interface. Hovering over an item, like a DRO field or a button,
displays helpful information about the item.
To enable or disable tooltips:
1.
From the Settings tab, select or clear Show Tooltips.
Figure 7-41: Show Tooltips checkbox.
Note: If you disable the tooltips, you can still
display them for specific items. Hover over an
area of the interface, and select the Shift key
on the keyboard.
7.2.11 Enable the Door Lock Switch Kit
If you have a Door Lock Switch Kit, you must first enable it in
PathPilot.
To enable the Door Lock Switch Kit:
1.
On the Settings tab, select Enclosure Door Switch.
Figure 7-42: Settings tab.
On the Status tab, the Door Locked / Open LEDs display.
Figure 7-43: Status tab.
2.
Reference the machine: select Ref Z, Ref X, and Ref Y.
3.
Open the enclosure doors.
4.
From the PathPilot interface, on the Status tab, make
sure that the Door Open LED is on, and the Door Locked
LED is off.
Figure 7-44: Door Open LED on the Status tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 144
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 145

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
5.
Close the enclosure doors and verify that the Door Open
LED is off. Then, push in the Emergency Stop button on
the operator box.
The doors lock, and the Door Locked LED comes on.
6.
From the PathPilot interface, on the Status tab, make
sure that the Door Open LED is off.
7.
Unlock the enclosure doors: twist out the Emergency
Stop button and press the Reset button on the operator
box.
The doors unlock.
7.2.13 Specify Probing and Tool Measuring Options
If you have any of the following accessories, you must first
specify which you're using in the PathPilot interface:
l Active Probe (PN 31858)
l Passive Probe (PN 32309)
l Electronic Tool Setter (PN 31875)
To specify a probe or a tool setter:
From the Settings tab, select the correct probing or tool
measuring options for both Accessory Input 1 and
Accessory Input 2.
Figure 7-46: Settings tab.
7.2.14 Use the RapidTurn Interface
If you have a RapidTurn, you must first change the PathPilot
interface.
To use the RapidTurn interface:
From the Settings tab, select Switch to RapidTurn.
Figure 7-47: Switch to RapidTurn button on the
Settings tab.
The PathPilot interface for the mill closes, and the
PathPilot interface for the RapidTurn opens.
7.2.15 Specify the 4th Axis Rotary Type
To select the 4th axis that you're using:
From the Settings tab, select the 4th Axis Rotary tab.
Then, from the 4th Axis Type drop-down menu, select 4"
4th Axis.
Note: Once you change the axis scale, you may
see a message indicating a Joint 3 following
error. If you do, select Reset, and the new axis
will function as normal.
Enable the 4th Axis Homing Kit
If you have a 4th Axis Homing Kit (PN 31921), you must first
enable it in the PathPilot interface.
To enable the 4th Axis Homing Kit:
From the Settings tab, select the 4th Axis Rotary tab.
Then, select 4th Axis Homing (PN 31921).
©Tormach® 2026
Specifications subject to change without notice.
Page 145
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 146

Figure 7-48: Settings tab.
7.2.16 Use a USB Camera
After plugging in the USB camera, navigate to the camera
settings. From the PathPilot interface, in the Settings tab, open
the Camera(s) tab. Identify the Camera Status read-only dialog
box.
Figure 7-49: USB camera status.
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
Figure 7-50: Manual recording controls.
©Tormach® 2026
Specifications subject to change without notice.
Page 146
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 147

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
l Select the Video Camera Recording button in the
Persistent Controls section.
Figure 7-51: Video Camera Recording button.
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
Figure 7-52: Camera settings.
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
Figure 7-53: Example of taking a photo.
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
Page 147
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 148

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
©Tormach® 2026
Specifications subject to change without notice.
Page 148
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 149

7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs
7.3 SET UP G-CODE PROGRAMS
Before running a G-code program, you must first make sure
that the machine is properly set up for the specific G-code
program.
7.3.1 Use a Probe with PathPilot
149
7.3.2 Set Tool Length Offsets
151
7.3.3 Set Work Offsets
154
7.3.4 View Work Offsets
155
7.3.5 View Available G-Code Modes
155
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
(page 145).
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
Figure 7-54: Probe tab.
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
Figure 7-55: Probe tab.
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
Page 149
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 150

3.
One at a time, select Probe X+, Set Work Origin, Probe
X-, Set Work Origin, Probe Y+, Set Work Origin, Probe Y-,
Set Work Origin, or Probe Z-, Set Work Origin.
Figure 7-56: Probe tab.
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
Figure 7-57: Probe tab.
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
Figure 7-58: Probe tab.
l To probe the slot in the Y direction only, select Find
Center, Set Work Origin as shown in the following
image.
Figure 7-59: Probe tab.
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
Figure 7-60: Probe tab.
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
Page 150
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs


---

## PDF Page 151

7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs
3.
Select Find Center, Set Work Origin as shown in the
following image.
Figure 7-61: Probe tab.
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
Figure 7-62: Probe tab.
The probe moves around the round workpiece mounted
in the A-axis to find the center rotation of the A-axis.
7.3.2 Set Tool Length Offsets
Before running a G-code program, PathPilot must know the
length of the tools that are required for the program. For more
information on using tool length offsets, see "About Tool
Offsets" (page 183).
Note: You can import a .csv file with tool length
offset data. For information, see "Import and Export
the Tool Table" (page 172).
To set tool length offsets:
1.
Verify that the machine is powered on and out of reset.
2.
Put a tool into a tool holder, and set it aside to measure.
For information, see "Set Up Tooling" (page 195).
3.
From the PathPilot interface, on the Offsets tab, verify
that the Tool tab is selected.
4.
Find the Tool Table window.
Figure 7-63: Tool Table window on the Offsets tab.
5.
Depending on your workflow, you can measure your tools
using any of the following methods:
l Use a Tool Height Setter For information, see "Use
a Tool Height Setter to Measure Tools" (page 185).
l Use an Electronic Tool Setter For information, see
"Use an Electronic Tool Setter (ETS) to Measure
Tools" (page 185).
l Touch Off of a Known Reference Height For
information, see "Touch Off the Tool Length Offsets"
(page 183).
About Tool Offsets
Tool offsets allow you to use various tools while still
programming with respect to the workpiece. Tools can have
different lengths (and, while using cutter radius compensation,
different diameters).
The most common tool offset is the tool length offset: when
you change tools, PathPilot must account for the difference in
tool length. In CNC machines, the tool length offset is applied
using a G43 command.
The tool length offset is the distance from the cutting edge of
the tool to the shoulder of the tool holder.
Before you begin a G-code program, you must verify the
lengths of the tools in the program, and make sure that the
lengths agree with the tool length offsets set in PathPilot:
l Each time you change tools, you must apply a new tool
length offset in PathPilot.
©Tormach® 2026
Specifications subject to change without notice.
Page 151
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 152

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
152
Measure Tools Using a Known Reference Height
152
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
Verify that the drive dogs won't contact the reference
surface before the end face of the spindle.
3.
Set a new, unused work offset (like G55). From the
PathPilot interface, on the Main tab, in the MDI Line
DRO field, type a work offset. Then select the Enter key.
For information, see "Set Work Offsets" (page 187).
4.
If there's already a tool in the spindle, remove it.
5.
From the PathPilot interface, in the Tool DRO field, type
0. Then select the Enter key.
6.
Slowly jog the Z-axis down (-Z) until it's 0.04 in. (1 mm)
from the reference surface.
7.
Measure the thickness of a piece of paper, and put the
paper on the reference surface. Note the thickness of the
paper for later.
8.
While moving the paper back-and-forth across the
reference surface, slowly step the Z-axis down (-Z) until
you feel a light pull on the piece of paper. This indicates
that the paper is contacting the end face of the spindle.
Note: It's easier to use step jogging for this
task. For information on step jogging, see
"About Step Jogging" (page 177).
9.
From the PathPilot interface, in the Z-axis work offset
DRO field, type the thickness of the piece of paper. Then
select the Enter key.
Figure 7-64: Z-axis work offset DRO field.
The reference surface is now set as the Z zero position in
the current coordinate system.
10.
To set the tool length offset, go to "Measure Tools Using
a Known Reference Height" (page 200).
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
Figure 7-65: Tool DRO field.
©Tormach® 2026
Specifications subject to change without notice.
Page 152
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs


---

## PDF Page 153

7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs
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
Figure 7-66: Touch Z DRO field and button.
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
Use an Electronic Tool Setter (ETS) to Measure Tools
An ETS is a device used to measure the length of a cutting tool.
To use an ETS to measure tools:
1.
Put the ETS on the known reference surface below the
spindle.
2.
From the PathPilot interface, on the Offsets tab, in the
Tool Table window, in the Description column, type a
description for the tool.
3.
In the Diameter column, type the diameter of the tool.
Then select the Enter key.
4.
Put a tool holder into the spindle.
5.
From the PathPilot interface, type the tool number in the
Tool DRO field. Then select the Enter key.
Figure 7-67: Tool DRO field.
6.
Jog the Z-axis down (-Z) until it is above the ETS.
7.
From the Offsets tab, on the Tool tab, select Move and
Set Tool Length.
Figure 7-68: Tool tab on the Offsets tab.
Note: Regardless of the initial feed rate, the
final touch off feed rate while using an ETS is
2-1/2 in. per minute (IPM).
8.
From the Tool Table window, in the Length column,
verify that the length of the tool is correct.
Use a Tool Height Setter to Measure Tools
This procedure sets the tool length offset using a known
reference height and a Tool Height Setter (PN 39682).
Complete the following steps in the order listed:
Set a Known Reference Height
153
Verify the Calibration of the Tool Height Setter
154
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
Page 153
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 154

2.
Set a new, unused work offset (like G55). From the
PathPilot interface, on the Main tab, in the MDI Line
DRO field, type a work offset. Then select the Enter key.
For information, see "Set Work Offsets" (page 187).
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
that the paper is contacting the end face of the spindle.
Note: It's easier to use step jogging for this
task. For information on step jogging, see
"About Step Jogging" (page 177).
8.
From the PathPilot interface, in the Z-axis work offset
DRO field, type the thickness of the piece of paper. Then
select the Enter key.
Figure 7-69: Z-axis work offset DRO field.
The reference surface is now set as the Z zero position in
the current coordinate system.
Verify the Calibration of the Tool Height Setter
The higher side of the Tool Height Setter is precision ground.
You can use it as a reference surface to calibrate the tool.
Figure 7-70: Tool Height Setter.
1.
Use the provided dowel pin to compress the setting face
of the Tool Height Setter to the level of the ground
reference surface.
2.
Adjust the indicator dial's bezel to read zero. Make note
of how many times the indicator rotates around the dial.
3.
Measure the height of the ground reference surface
from the bottom surface of the Tool Height Setter with a
calipers. Note the measured height for later.
4.
Carefully, without moving the bezel, put the Tool Height
Setter on the reference surface that's on the machine
table.
5.
Measure the tools using a known reference height.
7.3.3 Set Work Offsets
To set the current axis location to zero in the active work
coordinate system:
Select Zero [Axis].
Figure 7-71: Work Offset DRO fields.
To change work offsets:
1.
On the Main tab, in the MDI Line DRO field, type the
new work offset to activate (for example, G55). Then
select the Enter key.
©Tormach® 2026
Specifications subject to change without notice.
Page 154
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs


---

## PDF Page 155

7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs
2.
The new work offset displays in the following locations
in the PathPilot interface:
l The Status read-only DRO field.
l Above the Work Offset DRO fields.
Figure 7-72: Work offset indicated in the PathPilot
interface.
Note: The values in the Work Offset
DRO fields update to indicate the new
location of each axis in the new work offset.
For more information on using work offsets, see "About Work
Offsets" (page 198).
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
Work Offset Naming
Offsets 10-500 (Use extended name)
Offset
Extended Name
Name
10
G54.1 P10
Not used
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
Figure 7-73: Work Offsets Table window.
The active work offset is highlighted.
To change the current work offset, go to "Set Work Offsets"
(page 187).
7.3.5 View Available G-Code Modes
The G-Code Description window shows a list of all available G-
code modes.
To view available G-code modes:
From the Settings tab, find the G-Code Description
window.
Figure 7-74: G-code Description window on the
Settings tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 155
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 156

7.4 RUN G-CODE PROGRAMS
While running a G-code program, use the following controls:
7.4.1 Bring the Machine Out of Reset
156
7.4.2 View the Active Axis to Jog
156
7.4.3 Jog the Machine
156
7.4.4 View the Current Machine Position
157
7.4.5 Reference the Machine
158
7.4.6 Start a Program
158
7.4.7 Stop Machine Motion
158
7.4.8 Operate the Coolant Pump
158
7.4.9 View the Active G-Code Modes
159
7.4.10 View the Distance to Go
159
7.4.1 Bring the Machine Out of Reset
Select Reset.
Figure 7-75: Reset button.
For more information on reset mode, see "About Reset Mode"
(page 175).
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
Figure 7-76: Work Offset DRO fields.
For information, see "Jog the Machine" (page 177).
7.4.3 Jog the Machine
To switch between jogging modes:
From the Manual Control area, in the Jog group, select
Jog.
PathPilot toggles between continuous velocity mode and
step mode.
Figure 7-77: Jog button.
When the Cont green light is on, continuous velocity
mode is selected.
When the Step green light is on, step mode is selected.
To use continuous velocity mode:
Set the velocity: drag the Jog Speed slider.
Figure 7-78: Jog Speed slider.
For more information on continuous velocity mode, see "About
Continuous Velocity Jogging" (page 177).
To use step mode, select the step size. Do one of the
following, depending on your accessories:
l In the Manual Control area, in the Jog group, select the
step size.
The Step button's light comes on, indicating which step
size is active.
Figure 7-79: Step buttons (in G20 mode).
©Tormach® 2026
Specifications subject to change without notice.
Page 156
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs


---

## PDF Page 157

7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs
l On the (optional) Jog Shuttle, press the Step button to
toggle the currently selected step size.
In the PathPilot interface, the Step button's light comes
on, indicating which step size is active.
For more information on step mode, see "About Step Jogging"
(page 177).
Jog in Continuous Velocity Mode
In continuous mode, the machine jogs at a continuous velocity.
To select continuous velocity mode:
In the Manual Control area, select Jog.
Figure 7-80: Continuous velocity jogging controls.
When the Cont green light is on, continuous velocity
mode is selected.
When the Step green light is on, step mode is selected.
To set the velocity:
Drag the Jog Speed slider.
Figure 7-81: Jog Speed slider.
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
speed (for example, to align a vise).
Jog in Step Mode
In step mode, the machine jogs in steps, which range based on
the programming mode you're using:
l Imperial (G20) Mode 0.0001 in. to 0.1000 in.
l Metric (G21) Mode 0.01 mm to 10 mm
To select the step size:
In the Manual Control Area, select the step size.
The Step button's light comes on, indicating which step
size is active.
Figure 7-82: Step buttons (in G20 mode).
About Step Jogging
While jogging in step mode, the machine moves one step at a
time. The jog step sizes range depending on the programming
mode you are using:
l Imperial (G20) Mode 0.0001 in. to 0.1000 in.
l Metric (G21) Mode 0.01 mm to 10 mm
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
Figure 7-83: Work Offset DRO fields.
The position is expressed by the currently active work
offset coordinate system (like G54 or G55).
When the machine isn't moving, you can edit the DRO fields.
For more information on setting work offsets, go to "Set Work
Offsets" (page 187).
©Tormach® 2026
Specifications subject to change without notice.
Page 157
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 158

7.4.5 Reference the Machine
Note: The machine automatically references when
it's powered on.
1.
Verify that the machine can freely move to its reference
position (at the ends of travel).
2.
To verify that the tooling is clear of any possible
obstructions, reference the Z-axis before referencing the
other axes: from the PathPilot interface, select Ref Z.
Figure 7-84: Reference buttons.
3.
Once the spindle is clear of any possible obstructions,
continue referencing all axes.
Note: You can select the buttons one after
another. Once the machine references one axis,
it'll move on to the next.
After each axis is referenced, its button light comes on.
For more information on referencing the machine, see "About
Referencing" (page 196).
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
Figure 7-85: Cycle Start button.
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
"Main Tab" (page 113).
l Before you've loaded a G-code program. For
information, see "Load G-Code" (page 181).
l Before referencing the machine. For information, see
"Reference the Machine" (page 176).
7.4.7 Stop Machine Motion
From the Program Control area, select Stop.
Figure 7-86: Stop button.
7.4.8 Operate the Coolant Pump
To turn coolant on or off:
©Tormach® 2026
Specifications subject to change without notice.
Page 158
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs


---

## PDF Page 159

7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs
Select Coolant.
Figure 7-87: Coolant button.
For more information on turning on and off coolant, see
"About Coolant" (page 188).
About Coolant
In the PathPilot interface, the Coolant button controls the
machine's coolant pump power outlet. The Coolant button’s
light shows the current state of the outlet: the light is on when
the outlet has power; the light is off when the outlet does not
have power.
Note: The Coolant button is equivalent to using an
M08 (coolant on) or M09 (coolant off) command in
the G-code program.
Use the Coolant button before or after a program is running,
while a program is running, or while you are using manual
data input (MDI) commands.
7.4.9 View the Active G-Code Modes
To find the currently active G-code modes and the currently
active tool at a glance:
Identify the Status read-only DRO field.
Figure 7-88: Status read-only DRO field.
For more information on G-code modes, go to "View Available
G-Code Modes" (page 155).
7.4.10 View the Distance to Go
To view the distance to go:
Identify the DTG read-only DRO fields.
Figure 7-89: DTG read-only DRO fields.
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
Page 159
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 160

7.5 CONTROL G-CODE PROGRAMS
If necessary, use the following controls to add to your G-code
program:
7.5.1 Use the Feed Hold Function
160
7.5.2 Use the Feed Rate Override Function
160
7.5.3 Use M01 Break Mode
161
7.5.4 Use the Maxvel Override Function
161
7.5.5 Use Single Block Mode
162
7.5.6 Use the Spindle Override Function
162
7.5.7 Change the Feed Rate
163
7.5.8 Change the Spindle Speed
163
7.5.9 Change the Tool Number
163
7.5.10 Use a G30 Position
164
7.5.11 View the Tool Length
164
7.5.12 Manually Enter Commands
164
7.5.13 Copy Recently Entered Commands
166
7.5.15 Use Cycle Counters (M30 and M99)
169
7.5.1 Use the Feed Hold Function
Select Feed Hold.
Figure 7-90: Feed Hold button.
Tip! Use the Spacebar key to quickly activate the
feed hold function.
For more information on using the feed hold function, see
"About Feed Hold" (below).
About Feed Hold
When the feed hold function is active, the Feed Hold button's
light is on.
The feed hold function pauses machine motion — aside from
the spindle — and the Cycle Start button flashes. For
information, see "About Cycle Start" (page 158).
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
Figure 7-91: Feed Rate Override slider.
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
Page 160
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 161

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
7.5.3 Use M01 Break Mode
Select M01 Break.
Figure 7-92: M01 Break button.
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
Start" (page 158).
l When M01 Break is Inactive PathPilot ignores all
programmed M01 commands.
7.5.4 Use the Maxvel Override Function
To use the maxvel override function:
©Tormach® 2026
Specifications subject to change without notice.
Page 161
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 162

Using the Maxvel Override slider, change the maximum
velocity by a specified percentage.
Figure 7-93: Maxvel Override slider.
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
Figure 7-94: Single Block button.
For more information on using single block mode, see "About
Single Block" (below).
About Single Block
While single block mode is active, the Single Block button's
light is on.
Single block mode runs one line of G-code at a time. After
each line, motion is paused, and the Cycle Start button flashes.
For information, see "About Cycle Start" (page 158).
You can turn single block mode on or off either before starting
a program or while a program is running. For information, see
"Use Single Block Mode" (above).
Note: Single block mode ignores non-motion lines,
like comment lines or blank lines.
7.5.6 Use the Spindle Override Function
To use the spindle override function:
Using the Spindle Override slider, change the
programmed spindle speed by a specific percentage.
Figure 7-95: Spindle Override slider.
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
Page 162
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 163

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
7.5.7 Change the Feed Rate
In the Feed Rate DRO field, type in a feed rate. Then
select the Enter key.
Figure 7-96: Feed Rate DRO field.
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
Figure 7-97: Spindle RPM DRO field.
Note: Verify that the spindle speed is within the
specified range for the spindle belt's position.
For information, see "Change the Spindle Speed
Range" (page 179).
For information, see "About Spindle Controls" (below).
About Spindle Controls
A spindle speed is the rate at which the spindle rotates.
Use the FWD, REV, and Stop buttons to manually control the
spindle.
Button
G-
Code
Use to...
FWD
M03
Start the spindle clockwise at the RPM
specified in the Spindle RPM DRO field.
REV
M04
Start the spindle counterclockwise at the
RPM specified in the Spindle RPM DRO
field.
Stop
M05
Stop the spindle.
The FWD and REV buttons and the Spindle RPM DRO field
don't operate if selected when:
l A G-code program is running.
l Using manual data input (MDI) commands.
l You type a value outside of the specified range for the
spindle belt's position into the Spindle RPM DRO field.
For information, see "Change the Spindle Speed Range"
(page 179).
Spindle Controls Reference
The spindle speed is measured in revolutions per minute
(RPM).
Two speed ranges are available: 
l Low 70 rpm to 2000 rpm
l High 250 rpm to 10,000 rpm
Use the low speed range when you're using larger cutting
tools, or machining materials with lower surface speeds (like
steel or stainless steel).
Use the high speed range when you're using smaller cutting
tools, or machining materials with higher surface speeds (like
aluminum, brass, or plastic).
To move your spindle speed range from one to the other, see
"Change the Spindle Speed Range" (page 179).
7.5.9 Change the Tool Number
The Tool DRO field shows the tool number currently active.
©Tormach® 2026
Specifications subject to change without notice.
Page 163
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 164

Figure 7-98: Tool DRO field.
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
offsets, see "Set Tool Length Offsets" (page 183). This is
the equivalent of a G43 command.
7.5.10 Use a G30 Position
The Go to G30 button moves the machine to a predefined G30
position. For information, see "About G30" (below).
To set a G30 position:
1.
Jog the machine to the desired G30 position.
2.
From the Offsets tab, select Set G30.
Figure 7-99: Set G30 button.
To go to a set G30 position:
l Use a G30 command in a G-code program.
l Select Go To G30.
Figure 7-100: Go to G30 button.
Note: The G30 position defaults to only moving the Z-
axis.
About G30
A G30 command in a G-code program moves the machine to a
preset position. For more information on setting a G30
position, see "Use a G30 Position" (above).
Use a G30 move to start a coordinated movement of the axes.
You can limit the movement to only the Z-axis. For
information, see "Limit G30 Moves" (page 143).
Tip! It's useful to program a G30 move right before a
tool change so that the machine can jog to a safe tool
change position.
7.5.11 View the Tool Length
Identify the Tool Length read-only DRO field.
Figure 7-101: Tool Length DRO field.
If the tool offset matches the number of the tool in the
Tool DRO field, the text is light blue on a gray
background.
If the tool offset doesn't match the number of the tool in
the Tool DRO field, the text is orange on a red
background.
7.5.12 Manually Enter Commands
You can send G-code commands directly to the machine by
using the MDI Line DRO field. For information, see "About the
MDI Line DRO Field" (on the next page).
To manually enter commands:
©Tormach® 2026
Specifications subject to change without notice.
Page 164
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 165

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
1.
Select the MDI Line DRO field.
Figure 7-102: MDI Line DRO field.
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
"Manually Enter Commands" (on the previous page).
The MDI Line DRO field saves up to 100 of your most recent
commands, which are saved after a power cycle.
When you select the MDI Line DRO field, all keystrokes are
used within the field — so, you can't jog the machine.
Admin Commands Reference
Use the following commands in PathPilot:
Admin Command
Use to...
ADMIN AUDIO
Customize the controller's audio
device settings.
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
Admin Command
Use to...
ADMIN DISPLAY
Customize the controller's screen
display.
ADMIN DROPBOX
Connect your controller to a Dropbox
account for cloud file syncing.
ADMIN HELP
Review a list of available Admin
commands.
ADMIN KEYBOARD
Customize the controller's keyboard
layout.
ADMIN LOGDATA
Write the latest machine log data to
a USB drive for technical support
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
ADMIN
OPENDOORMAXRPM
Change the maximum spindle speed
with the spindle cabinet door open,
when using the optional Enclosure
Door Switch Kit.
ADMIN RESET_
SOFT_LIMITS
Reset axis soft limits to machine
defaults.
ADMIN SET_X_
LIMIT
Set the X-axis soft limit.
ADMIN SET_Y_
LIMIT
Set the Y-axis soft limit.
ADMIN SET_Z_
LIMIT
Set the Z-axis soft limit.
ADMIN SETTINGS
BACKUP
Create a backup of tool offset and
fixture information to store
externally.
ADMIN SETTINGS
RESTORE
Restore tool offset and fixture
information backup from an external
location.
©Tormach® 2026
Specifications subject to change without notice.
Page 165
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 166

Admin Command
Use to...
ADMIN SHOW_
SOFT_LIMITS
Display the current axis soft limits on
the Status tab.
ADMIN TOOLTIP
DELAYMS
Set the milliseconds prior to
displaying the tooltip (and then again
for the expanded tooltip). The default
is 1200 milliseconds.
ADMIN TOOLTIP
MAXDISPLAYSEC
Limit the amount of time the
expanded tooltip displays. The
default is 15 seconds.
ADMIN
TOUCHSCREEN
Adjust the touch screen calibration.
ADMIN VERSION
Display detailed version information
on the Status tab.
7.5.13 Copy Recently Entered Commands
1.
From the MDI Line DRO field, press either the
Up Arrow key or the Down Arrow key.
The previously entered command displays.
2.
You must press the Enter key to execute the command.
To abandon the command, press Esc.
For information, see "Manually Enter Commands" (page 164).
---

## PDF Page 169

7.5.15 Use Cycle Counters (M30 and M99)
On the Main tab, the Tool Path display shows M30 and M99
cycle counters. They're useful to count parts completed during
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
Page 169
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 170

7.6 SYSTEM FILE MANAGEMENT
To keep the files on your system backed up and organized, use
the following controls:
7.6.1 Manage System Files
170
7.6.2 Create Backup Files
170
7.6.3 Restore Backup Files
171
7.6.4 Import and Export the Tool Table
172
7.6.1 Manage System Files
Use the File tab to manage system files on the PathPilot
controller. For information, see "Transfer Files to and From the
Controller" (page 181).
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
Figure 7-108: Admin Settings Backup dialog box.
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
Figure 7-109: Controller Files window on the File tab.
Note: Files must have unique names. If they
don't, PathPilot prompts you to overwrite or
rename files, or cancel the file transfer.
©Tormach® 2026
Specifications subject to change without notice.
Page 170
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.6 System File Management


---

## PDF Page 171

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
Figure 7-110: Admin Settings Restore dialog box.
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
Figure 7-111: USB Files window on the File tab.
Note: To navigate backward, select Back. To
navigate to the top level, select USB.
5.
From the Controller Files window, select the folder into
which you want to copy the files.
©Tormach® 2026
Specifications subject to change without notice.
Page 171
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 172

6.
Select Copy From USB.
The files display in the Controller Files window.
Note: Files must have unique names. If they
don't, PathPilot prompts you to overwrite or
rename files, or cancel the file transfer.
7.6.4 Import and Export the Tool Table
You can manage the tool table using an external .csv file.
Figure 7-112: Export and Import buttons on the Offsets tab.
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
Figure 7-113: Import dialog box.
5.
Navigate to the .csv file on the USB drive. Then, select
OK.
The .csv file updates the tool table.
Export the Tool Table as a .csv File
1.
From the Offsets tab, select Export.
PathPilot generates the .csv file, and the Export dialog
box displays.
Figure 7-114: Export dialog box.
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
Page 172
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.6 System File Management


---

## PDF Page 173

BASIC OPERATIONS
IN THIS SECTION, YOU'LL LEARN:
About the basic operations required for most projects, organized as a suggested project workflow.
CONTENTS
8.1 Start the Machine
174
8.2 Bring the Machine Out of Reset
175
8.3 Reference the Machine
176
8.4 Jog the Machine
177
8.5 Manually Control the Spindle
179
8.6 Load G-Code
181
8.7 Set Up Tooling
182
8.8 Set Tool Length Offsets
183
8.9 Set Work Offsets
187
8.10 Operate the Coolant Pump
188
8.11 Run the Spindle Warm-Up Program
189


---

## PDF Page 174

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
Page 174
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.1 Start the Machine


---

## PDF Page 175

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
Page 175
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 176

8.3 REFERENCE THE MACHINE
Note: The machine automatically references when
it's powered on.
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
Referencing" (page 196).
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
Page 176
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.3 Reference the Machine


---

## PDF Page 177

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
speed (for example, to align a vise).
About Step Jogging
While jogging in step mode, the machine moves one step at a
time. The jog step sizes range depending on the programming
mode you are using:
l Imperial (G20) Mode 0.0001 in. to 0.1000 in.
l Metric (G21) Mode 0.01 mm to 10 mm
Step jogging mode is useful to finely move the machine, like
when you're indicating a workpiece or manually setting tool
lengths.
The jog keys on the keyboard only move the machine in steps
when step mode is indicated in PathPilot. The inner wheel on
the jog shuttle always moves the machine in steps, regardless
of which mode is indicated in PathPilot. The Operator
©Tormach® 2026
Specifications subject to change without notice.
Page 177
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 178

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
Page 178
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.4 Jog the Machine


---

## PDF Page 179

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
Open the spindle motor door.
4.
Make sure that the spindle belt position agrees with your
desired speed range. If it doesn't, do one of the
following:
l In the PathPilot interface, select Spindle Range.
l Move the spindle belt.
For information, see "Change the Spindle Speed
Range" (below).
5.
Close the spindle motor door.
6.
In the RPM DRO field, type the desired RPM speed. Then
select the Enter key.
Figure 8-7: RPM DRO field.
7.
Select FWD to start the spindle in the forward direction,
or REV to start the spindle in the reverse direction.
8.
Select Stop to stop the spindle.
8.5.1 Change the Spindle Speed Range
To change the spindle speed range, you must move the spindle
belt inside of the spindle cabinet:
1.
Open the spindle motor door.
2.
Unclamp the motor mounting plate: Loosen the clamp
handle.
This allows the spindle motor plate to pivot.
3.
Slacken the spindle belt: Pull the pivot handle forward.
4.
Move the spindle belt from one set of pulleys to the
other.
Two speed ranges are available: 
l Low 70 rpm to 2000 rpm
l High 250 rpm to 10,000 rpm
5.
Tighten the spindle belt: Push the pivot handle backward
(toward the machine column).
6.
Secure the motor mounting plate: Tighten the clamp
handle.
7.
Firmly push the spindle belt between the pulleys. If it is
properly tensioned, the spindle belt should move
between 3 mm and 6 mm. If it's not properly tensioned,
repeat the steps in this section.
8.
Rotate the clamp handle clockwise.
The spindle motor plate locks in place.
9.
Close the spindle motor door.
10.
From the PathPilot interface, examine the light on the
Spindle Range button to make sure that it agrees with
the spindle belt's position.
Figure 8-8: Spindle Range button.
8.5.2 About the Spindle
The machine spindle gives power to the cutting tool, which
allows it to remove material from the workpiece. The spindle
is driven by the spindle motor.
The machine uses a single-contact BT30 spindle taper. The tool
holder contacts only the spindle taper, which keeps it in
position. Because of this, there's a gap (2 mm) between the
tool holder's flange and the end surface of the spindle nose.
Operate the spindle either manually or by G-code commands
(entered in the MDI Line DRO field or programmed into a G-
code program). Manually controlling the spindle is useful when
you're setting work offsets for tools that require the spindle to
be running (like “wiggler”-style edgefinders or coaxial
indicators).
The machine's spindle rotates either clockwise (forward) or
counterclockwise (reverse) at a specified spindle speed.
8.5.3 Spindle Controls Reference
The spindle speed is measured in revolutions per minute
(RPM).
Two speed ranges are available: 
©Tormach® 2026
Specifications subject to change without notice.
Page 179
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 180

l Low 70 rpm to 2000 rpm
l High 250 rpm to 10,000 rpm
Use the low speed range when you're using larger cutting
tools, or machining materials with lower surface speeds (like
steel or stainless steel).
Use the high speed range when you're using smaller cutting
tools, or machining materials with higher surface speeds (like
aluminum, brass, or plastic).
To move your spindle speed range from one to the other, see
"Change the Spindle Speed Range" (on the previous page).
©Tormach® 2026
Specifications subject to change without notice.
Page 180
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.5 Manually Control the Spindle


---

## PDF Page 181

8: BASIC OPERATIONS
8.6 Load G-Code
8.6 LOAD G-CODE
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
Figure 8-9: Controller Files window on the File tab.
Note: This function is only available for files
stored on the PathPilot controller.
PathPilot loads the G-code file and opens the Main tab.
8.6.1 Transfer Files to and From the Controller
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
Figure 8-10: File tab.
Note: Select Back to move backward and either
Home or USB to move to the highest level.
3.
Select the location to which you want to copy the
transferred file.
4.
Select either Copy ←or Copy →.
Figure 8-11: File tab.
Note: The file must have a unique name. If it
doesn't, you must either overwrite the file,
rename the file, or cancel the file transfer.
5.
If you're using a USB drive, select Eject.
It's safe to remove the USB drive from the controller.
©Tormach® 2026
Specifications subject to change without notice.
Page 181
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 182

8.7 SET UP TOOLING
Before you begin machining, you must put your cutting tools in
tool holders and measure the tool length offsets for each tool.
8.7.1 Install a Tool in a Set Screw Tool Holder
1.
Clean the shank of the tool holder with a clean rag.
Verify that the shank is free of any grease or oil.
2.
Remove the set screw from the tool holder with a hex
wrench.
3.
Put the desired cutting tool into the tool holder.
4.
Replace the set screw in the tool holder, and then
completely tighten it with a hex wrench.
8.7.2 Install a Tool in an ER Collet Tool Holder
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
To install a tool in an ER collet tool holder:
1.
Hold the collet at an angle, and then insert it into the
collet nut as shown in the following image.
2.
Tilt up the collet to snap it into place.
3.
Loosely thread the nut on the tool holder, insert the tool,
and then tighten the collet.
8.7.3 Install a Drill Chuck in a Jacobs Taper Arbor
1.
Assemble the drill chuck on to the Jacobs taper arbor:
a.
Use a clean rag and acetone to clean the taper and
socket. Verify that the taper and socket are both free
of any grease or oil.
b.
Retract the jaws: fully open the drill chuck.
c.
Use a dead-blow hammer (or similar) to seat the drill
chuck on the Jacobs taper arbor.
2.
Put the drill into the drill chuck.
3.
Depending on the type of drill chuck, do one of the
following:
l Keyless Drill Chuck Tighten the drill chuck by hand.
l Keyed Drill Chuck Use a chuck key to tighten the
drill chuck until it is finger tight.
©Tormach® 2026
Specifications subject to change without notice.
Page 182
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.7 Set Up Tooling


---

## PDF Page 183

8: BASIC OPERATIONS
8.8 Set Tool Length Offsets
8.8 SET TOOL LENGTH OFFSETS
Before running a G-code program, PathPilot must know the
length of the tools that are required for the program. For more
information on using tool length offsets, see "About Tool
Offsets" (below).
Note: You can import a .csv file with tool length
offset data. For information, see "Import and Export
the Tool Table" (page 172).
To set tool length offsets:
1.
Verify that the machine is powered on and out of reset.
2.
Put a tool into a tool holder, and set it aside to measure.
For information, see "Set Up Tooling" (page 195).
3.
From the PathPilot interface, on the Offsets tab, verify
that the Tool tab is selected.
4.
Find the Tool Table window.
Figure 8-12: Tool Table window on the Offsets tab.
5.
Depending on your workflow, you can measure your tools
using any of the following methods:
l Use a Tool Height Setter For information, see "Use
a Tool Height Setter to Measure Tools" (page 185).
l Use an Electronic Tool Setter For information, see
"Use an Electronic Tool Setter (ETS) to Measure
Tools" (page 185).
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
The tool length offset is the distance from the cutting edge of
the tool to the shoulder of the tool holder.
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
183
Measure Tools Using a Known Reference Height
184
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
Verify that the drive dogs won't contact the reference
surface before the end face of the spindle.
©Tormach® 2026
Specifications subject to change without notice.
Page 183
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 184

3.
Set a new, unused work offset (like G55). From the
PathPilot interface, on the Main tab, in the MDI Line
DRO field, type a work offset. Then select the Enter key.
For information, see "Set Work Offsets" (page 187).
4.
If there's already a tool in the spindle, remove it.
5.
From the PathPilot interface, in the Tool DRO field, type
0. Then select the Enter key.
6.
Slowly jog the Z-axis down (-Z) until it's 0.04 in. (1 mm)
from the reference surface.
7.
Measure the thickness of a piece of paper, and put the
paper on the reference surface. Note the thickness of the
paper for later.
8.
While moving the paper back-and-forth across the
reference surface, slowly step the Z-axis down (-Z) until
you feel a light pull on the piece of paper. This indicates
that the paper is contacting the end face of the spindle.
Note: It's easier to use step jogging for this
task. For information on step jogging, see
"About Step Jogging" (page 177).
9.
From the PathPilot interface, in the Z-axis work offset
DRO field, type the thickness of the piece of paper. Then
select the Enter key.
Figure 8-13: Z-axis work offset DRO field.
The reference surface is now set as the Z zero position in
the current coordinate system.
10.
To set the tool length offset, go to "Measure Tools Using
a Known Reference Height" (page 200).
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
Figure 8-14: Tool DRO field.
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
Figure 8-15: Touch Z DRO field and button.
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
Page 184
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.8 Set Tool Length Offsets


---

## PDF Page 185

8: BASIC OPERATIONS
8.8 Set Tool Length Offsets
13.
Jog the Z-axis up (+Z).
You've completed the procedure to measure a tool
offset. Repeat this procedure for any remaining tooling
you have. Once you're done adding tool length offsets,
switch back to your work coordinate system.
8.8.3 Use an Electronic Tool Setter (ETS) to
Measure Tools
An ETS is a device used to measure the length of a cutting tool.
To use an ETS to measure tools:
1.
Put the ETS on the known reference surface below the
spindle.
2.
From the PathPilot interface, on the Offsets tab, in the
Tool Table window, in the Description column, type a
description for the tool.
3.
In the Diameter column, type the diameter of the tool.
Then select the Enter key.
4.
Put a tool holder into the spindle.
5.
From the PathPilot interface, type the tool number in the
Tool DRO field. Then select the Enter key.
Figure 8-16: Tool DRO field.
6.
Jog the Z-axis down (-Z) until it is above the ETS.
7.
From the Offsets tab, on the Tool tab, select Move and
Set Tool Length.
Figure 8-17: Tool tab on the Offsets tab.
Note: Regardless of the initial feed rate, the
final touch off feed rate while using an ETS is
2-1/2 in. per minute (IPM).
8.
From the Tool Table window, in the Length column,
verify that the length of the tool is correct.
8.8.4 Use a Tool Height Setter to Measure Tools
This procedure sets the tool length offset using a known
reference height and a Tool Height Setter (PN 39682).
Complete the following steps in the order listed:
Set a Known Reference Height
185
Verify the Calibration of the Tool Height Setter
186
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
For information, see "Set Work Offsets" (page 187).
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
that the paper is contacting the end face of the spindle.
Note: It's easier to use step jogging for this
task. For information on step jogging, see
"About Step Jogging" (page 177).
©Tormach® 2026
Specifications subject to change without notice.
Page 185
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 186

8.
From the PathPilot interface, in the Z-axis work offset
DRO field, type the thickness of the piece of paper. Then
select the Enter key.
Figure 8-18: Z-axis work offset DRO field.
The reference surface is now set as the Z zero position in
the current coordinate system.
Verify the Calibration of the Tool Height Setter
The higher side of the Tool Height Setter is precision ground.
You can use it as a reference surface to calibrate the tool.
Figure 8-19: Tool Height Setter.
1.
Use the provided dowel pin to compress the setting face
of the Tool Height Setter to the level of the ground
reference surface.
2.
Adjust the indicator dial's bezel to read zero. Make note
of how many times the indicator rotates around the dial.
3.
Measure the height of the ground reference surface
from the bottom surface of the Tool Height Setter with a
calipers. Note the measured height for later.
4.
Carefully, without moving the bezel, put the Tool Height
Setter on the reference surface that's on the machine
table.
5.
Measure the tools using a known reference height.
©Tormach® 2026
Specifications subject to change without notice.
Page 186
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.8 Set Tool Length Offsets


---

## PDF Page 187

8: BASIC OPERATIONS
8.9 Set Work Offsets
8.9 SET WORK OFFSETS
To set the current axis location to zero in the active work
coordinate system:
Select Zero [Axis].
Figure 8-20: Work Offset DRO fields.
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
Figure 8-21: Work offset indicated in the PathPilot
interface.
Note: The values in the Work Offset
DRO fields update to indicate the new
location of each axis in the new work offset.
For more information on using work offsets, see "About Work
Offsets" (page 198).
8.9.1 About Work Offsets
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
©Tormach® 2026
Specifications subject to change without notice.
Page 187
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 188

8.10 OPERATE THE COOLANT PUMP
To turn coolant on or off:
Select Coolant.
Figure 8-22: Coolant button.
For more information on turning on and off coolant, see
"About Coolant" (below).
8.10.1 About Coolant
In the PathPilot interface, the Coolant button controls the
machine's coolant pump power outlet. The Coolant button’s
light shows the current state of the outlet: the light is on when
the outlet has power; the light is off when the outlet does not
have power.
Note: The Coolant button is equivalent to using an
M08 (coolant on) or M09 (coolant off) command in
the G-code program.
Use the Coolant button before or after a program is running,
while a program is running, or while you are using manual
data input (MDI) commands.
©Tormach® 2026
Specifications subject to change without notice.
Page 188
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.10 Operate the Coolant Pump


---

## PDF Page 189

8: BASIC OPERATIONS
8.11 Run the Spindle Warm-Up Program
8.11 RUN THE SPINDLE WARM-UP PROGRAM
A spindle warm-up program is included in PathPilot (v2.9.2 and
later). We recommend running the program if the machine has
been idle overnight or longer. Always have a tool loaded in the
spindle during warm up.
The program takes 20 minutes to complete. It gradually
increases the spindle speed throughout its working range to
warm up the spindle bearings and evenly distribute lubrication.
To run the spindle warm-up program:
1.
Load a tool into the spindle.
2.
From the PathPilot interface, select the File tab.
3.
Select the Home button to return to the main file
directory. In the Controller Files window, open the
Examples folder.
Figure 8-23: Examples folder.
4.
Select the spindle_warmup.ngc file. In the File Preview
window, read the embedded program notes before
running the program.
Figure 8-24: Spindle Warmup program.
5.
Select Load.
The warm-up program opens in the G-Code window on
the Main tab.
6.
Select Cycle Start.
The program runs for 20 minutes.
©Tormach® 2026
Specifications subject to change without notice.
Page 189
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 190

[No extractable text; see original PDF page.]


---

## PDF Page 241

MACHINE MAINTENANCE
IN THIS SECTION, YOU'LL LEARN:
About the required maintenance procedures that you must do so that this machine operates as
designed.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
11.1 Maintenance Safety
242
11.2 Maintenance Schedules
243
11.3 Regular Maintenance
244


---

## PDF Page 242

11.1 MAINTENANCE SAFETY
Read and understand the following safety messages before
beginning any maintenance procedures.
11.1.1 All Maintenance Procedures
Understand that the machine is automatically controlled
and can start at any time.
Power off the machine and disconnect the pneumatic
supply before doing any maintenance procedures.
When appropriate, lockout/tagout the Main Disconnect
switch and the pneumatic supply line before doing any
maintenance procedures.
Wear safety eye protection rated for ANSI Z87+.
11.1.2 Swarf Maintenance Procedures
Wear work gloves.
11.1.3 Coolant Maintenance Procedures
Wear rubber gloves.
©Tormach® 2026
Specifications subject to change without notice.
Page 242
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
11: MACHINE MAINTENANCE
11.1 Maintenance Safety


---

## PDF Page 243

11: MACHINE MAINTENANCE
11.2 Maintenance Schedules
11.2 MAINTENANCE SCHEDULES
To keep your machine running as smoothly as possible, you
must regularly do the following maintenance procedures.
Note: Before you begin any maintenance procedures,
read and understand "Maintenance Safety" (on the
previous page).
If you disassemble any components, refer to the machine's
reference drawings when you've completed the maintenance
procedure. For information, see "Diagrams and Parts Lists"
(page 277). For any additional support, we can help. Create a
support ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for guidance on
how to proceed.
11.2.1 Daily
Clean the way covers of chips.
Clean the chip baskets on the coolant tank.
Examine the coolant level and condition.
Examine the way oil level and refill as necessary.
Retract the plunger on the manual oiler, hold it in the
retracted position for two seconds, and then release it.
Note: The plunger should move slowly from the
retracted position. If it doesn't, it could indicate
a malfunctioning oiler.
Verify that the regulator has at least 90 psi compressed
air (for pneumatic accessories installed, like the Power
Drawbar).
Verify that the door switches are properly functioning.
11.2.2 Weekly
Clean all exterior surfaces with a clean rag.
Verify that the machine's lubrication points (sliding
surfaces and ball screw nuts) are receiving way oil.
Examine the enclosure and other guards for damage.
Examine the drawbar for wear.
Remove vises, fixture plates, rotary tables, and other
accessories, and then examine them for rust.
If needed, reapply rust inhibitor before reinstalling
workholding and accessories.
Check coolant concentration.
11.2.3 Monthly
Clean the electrical cabinet vents of dust with a clean
cloth or compressed air.
Clean fine swarf from the coolant tank.
Examine all axes' slideway surfaces and ball screws to
determine if an oil film is present.
Examine the air tool oil level in the FRL Filter-Regulator-
Lubricator and refill as necessary.
11.2.4 Semi-Annually
Note: After the first 90 days of operation, complete
the items on this list. After that, complete the items
every six months.
Examine the spindle belt for wear.
Examine the way covers for wear.
Examine the X-axis flex conduit for wear.
11.2.5 Annually
Remove the way covers and examine them for wear.
Clean any chips or oil underneath the way covers.
Examine the windows and replace them if necessary.
Check the machine's backlash.
©Tormach® 2026
Specifications subject to change without notice.
Page 243
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 244

11.3 REGULAR MAINTENANCE
11.3.1 Clean the Way Covers
244
11.3.2 Clean the Coolant System
244
11.3.3 Examine the Drawbar
245
11.3.4 Examine the Enclosure Windows
245
11.3.5 Lubricate the Machine
245
11.3.6 Examine the Spindle Belt
246
11.3.7 Examine the Pull Stud Clamp
246
11.3.8 Prevent Rust
246
11.3.1 Clean the Way Covers
To extend the service life of the machine, you must make sure
that the way covers are protecting the machine's slideways.
Regularly do the following:
l Examine the way covers for signs of wear or damage. If
the way covers are damaged, you must replace them.
o
Y-Axis Way Cover, 1100 (PN 30578)
o
Z-axis Way Cover (PN 30378)
l Use a chip brush to clean the way covers of chips and
other swarf.
11.3.2 Clean the Coolant System
To extend the service life of the coolant and the coolant pump,
you must make sure that both are free of contaminants.
Regularly do the following:
l Use a chip brush to clean the machine, chip trays, and
enclosure of chips and other swarf.
l Empty the chip strainer on the coolant tank.
l Measure the coolant concentration, pH, and volume, and
then compare your findings to the material's safety data
sheet (SDS).
o
Coolant Level Too Low Fill the coolant tank with
fresh coolant, making sure that it is the appropriate
concentration.
o
Coolant pH Outside of Manufacturer's
Recommended Coolant Limits Adjust the pH
according to the manufacturer's recommendation.
Note: You must only use coolant that is
recommended for machining. See "Cutting
Fluid Reference" (below).
l Examine the coolant pump's impeller for blockages.
l To remove tramp way oil from the coolant tank, use one
of the following:
o
Oil Skimmer Kit (PN 39298)
o
Floating Tramp Oil Collection Pillow (PN 31925)
Periodically do the following:
l Remove the coolant tank covers and the chip strainer,
and then clean the fine swarf from the coolant tank.
l If you're using a filter to prevent small particles from
entering the coolant tank, replace it when it's saturated
with chips, swarf, or tramp oil.
l Examine the coolant for contamination, and determine if
the coolant's oil-water emulsion has broken.
l Drain and thoroughly clean the coolant tank, and then
replace with fresh coolant.
NOTICE! Hazardous Waste: Only dispose of coolant
as advised by local environmental protection
authorities. You must not dispose of coolant in a
septic system or a sewer.
About Cutting Fluid
Clean and well maintained coolant has increased performance,
prevents rust, and smells better than contaminated coolant.
Coolant becomes contaminated when:
l Swarf accumulates in the chip pans, the chip strainer, or
the coolant tank.
l Tramp oil isn't regularly removed from the coolant tank.
l The concentration or pH aren't maintained to the
manufacture’s specifications.
Cutting Fluid Reference
Using flood coolant provides the following benefits:
l Cools the cutting zone
l Flushes away swarf
l Lubricates the cutting tool
l Provides some degree of rust inhibition
You must only use flood coolant that is recommended for CNC
machining applications, like:
l Soluble oils
l Semi-synthetic coolants
l Synthetic coolants
©Tormach® 2026
Specifications subject to change without notice.
Page 244
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
11: MACHINE MAINTENANCE
11.3 Regular Maintenance


---

## PDF Page 245

11: MACHINE MAINTENANCE
11.3 Regular Maintenance
You must never use:
l Coolant without rust inhibitors
l Flammable coolants such as alcohols, diesel fuel, or
kerosene
WARNING! Fire Hazard: The machine and its
enclosure are not designed to contain fire or
explosions. Only use materials and coolants
that are intended for the specific machining
operation. Never use flammable or explosive
items.
l Straight cutting oil
l Water
If you use a coolant concentrate, you must mix it with water to
the dilution ratio recommended by the coolant manufacturer.
Use an optical refractometer to measure coolant
concentration.
11.3.3 Examine the Drawbar
To extend the service life of the drawbar, you must make sure
that the drawbar isn't damaged, and that it's properly
lubricated.
Regularly do the following:
l Examine the drawbar for signs of wear or damage.
For the Power Drawbar, regularly do the following:
l Use Anti-Seize to lubricate the Power Drawbar disc
springs (the Belleville washers) and clamping
mechanism.
l Examine the BT30 drawbar stroke and adjust if
necessary.
11.3.4 Examine the Enclosure Windows
Regularly examine the enclosure windows, and all other
guarding, for signs of wear or damage.
When required, replace the windows with the following parts:
l Window, 1100, Side (PN 37648)
l Window, 1100, Left Door (PN 37649)
l Window, 1100, Right Door (PN 37650)
11.3.5 Lubricate the Machine
To keep the machine operating properly, and to extend the
service life of the machine, you must verify that the slideway
surfaces and ball screws are receiving lubrication.
Regularly do the following:
l Clean the oil reservoir's cover and all exposed surfaces
surrounding the oil reservoir. Swarf or debris that enters
the oil reservoir can plug the small, internal passages of
the lubrication system.
Note: The strainer at the top of the oil reservoir
isn't a filter, and can't remove all types of
debris that may cause blockages.
l Examine all axes' slideway surfaces and ball screws to
determine if an oil film is present.
If there's not an oil film, examine the lubrication system
for blockages, broken fittings, or pinched oil lines.
l Examine the amount of available oil and, if necessary,
refill with new, high-quality ISO VG 68 grade Machine
Oil (PN 31386).
About the Manual Oiler
The manual oiler operates with a plunger:
l On the Pull Stroke The oiler pulls machine oil from the
oil reservoir.
l On the Retract Stroke The oiler pushes machine oil
through the lubrication system.
The plunger is spring-loaded, and creates a light hydraulic
pressure sufficient to distribute the oil through the machine.
Do not push the plunger after you retract it.
When the machine is first powered on (and then after every
four hours of operation), retract the oiler's plunger and hold it
in the retracted position for two seconds. Then, release the
oiler's plunger.
Note: The plunger should move slowly from the
retracted position. If it doesn't, it could indicate a
malfunctioning oiler.
About the Automatic Oiler
The automatic oiler is powered whenever the machine is
powered on, and has the following default settings:
l Lubrication interval: 480 minutes (8 hours)
l Actuation time: 12 seconds
©Tormach® 2026
Specifications subject to change without notice.
Page 245
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 246

Lubrication System Reference
The machine's lubrication system distributes oil to the
following 15 points:
l 12 slideways bearing surfaces
o
Four on the X-axis
o
Four on the Y-axis
o
Four on the Z-axis
l Three ball screw nuts
11.3.6 Examine the Spindle Belt
To extend the service life of the spindle belt, you must
regularly examine it for signs of damage or wear.
If the spindle belt is damaged, you must replace it with
1100MX Spindle Belt (PN 50402).
11.3.7 Examine the Pull Stud Clamp
To extend the service life of your spindle, you must regularly do
the following:
l Examine the pull stud clamp for signs of wear or
damage.
l Make sure the inside of the spindle taper is clean and
dry.
l Use Anti-Seize (PN 31273) to lubricate the working
surfaces of the pull stud clamp.
l Use a mild degreaser to clean the shank of all tool
holders.
11.3.8 Prevent Rust
Take proper care to protect all exposed iron and steel surfaces
on your machine. To reduce the possibility of rust, you must
regularly do the following:
l Clean the machine, chip pans, and enclosure of chips and
other swarf with a chip brush.
l Clean all exterior surfaces with a mild cleaner.
l Only use flood coolant that is recommended for
machining (see "Cutting Fluid Reference" (page 244)).
l Periodically test the coolant concentration, and adjust (if
necessary) to meet coolant manufacturer's
recommended concentration.
l Put LPS 3® (or similar rust inhibitor) on the machine
before installing any workholding or accessories.
l Only operate the machine in a temperature- and
humidity-controlled environment. Extreme changes in
temperature or humidity can create condensation on the
machine.
l Put LPS 3® (or similar rust inhibitor) on all exposed, non-
painted metal surfaces before leaving the machine
unused.
l Remove all workholding and accessories, and then check
for rust.
l If needed, reapply rust inhibitor before reinstalling
workholding or accessories.
If you find rust on the machine table, go to "Remove Rust"
(below).
Remove Rust
Use a fine machinist's stone to remove light surface rust on
the machine table: use light, even pressure, and move the
stone in a random motion to avoid changing the flatness of the
machine table.
If you find a lot of rust, or if there is rust on the machine's
slideways or ball screws, take photos of all rust-covered areas.
Create a support ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for guidance on
how to proceed.
©Tormach® 2026
Specifications subject to change without notice.
Page 246
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
11: MACHINE MAINTENANCE
11.3 Regular Maintenance


---

## PDF Page 247

TROUBLESHOOTING
IN THIS SECTION, YOU'LL LEARN:
About common causes of failure in this machine, and our recommendations for diagnosing and
correcting them.
WARNING! Electrocution Hazard - Electrical Cabinet: Do not make or disconnect connections under
power.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
12.1 Troubleshooting Safety
248
12.2 Getting Help
249
12.3 Required Tools
250
12.4 Frequently Found Problems
251
12.5 Electrical Service
252
12.6 Power Distribution Subsystem
253
12.7 Control Power Subsystem
255
12.8 Axes Drive Subsystem
257
12.9 Spindle Drive Subsystem
264
12.10 Operator Console Troubleshooting
272


---

## PDF Page 248

12: TROUBLESHOOTING
12.1 Troubleshooting Safety
©Tormach® 2026
Specifications subject to change without notice.
Page 248
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.1 TROUBLESHOOTING SAFETY
Read and understand the following safety messages before beginning any troubleshooting procedures.
Take things slow and be extra cautious. During troubleshooting, you’re exposed to more hazards than during normal operation. For
example, you may have to do an electrical test on a live circuit, remove guards, or override a safety switch to make an observation.
Power off the machine and disconnect the pneumatic supply before doing any troubleshooting procedures.
When appropriate, lockout/tagout the Main Disconnect switch and the pneumatic supply line before doing any troubleshooting
procedures.


---

## PDF Page 249

12: TROUBLESHOOTING
12.2 Getting Help
©Tormach® 2026
Specifications subject to change without notice.
Page 249
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.2 GETTING HELP
We provide no-cost technical support through multiple channels. The quickest way to get the answers you need is normally in this order:
1.
Read this document.
2.
Read related documents and watch related videos at tormach.com/support.
3.
If you still need answers, gather the following information so that we may help you as quickly as possible:
l Your phone number, address, and company name (if applicable).
l Machine model and serial number, which are located on the side of the electrical cabinet, next to the Main Disconnect switch.
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

## PDF Page 250

12: TROUBLESHOOTING
12.3 Required Tools
©Tormach® 2026
Specifications subject to change without notice.
Page 250
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.3 REQUIRED TOOLS
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

## PDF Page 251

12: TROUBLESHOOTING
12.4 Frequently Found Problems
©Tormach® 2026
Specifications subject to change without notice.
Page 251
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.4 FREQUENTLY FOUND PROBLEMS
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


---

## PDF Page 252

12: TROUBLESHOOTING
12.5 Electrical Service
©Tormach® 2026
Specifications subject to change without notice.
Page 252
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.5 ELECTRICAL SERVICE
12.5.1 LED Identification
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
l Axis Driver Power Indicators on the X-, Y-, Z-, and A-Axis Drivers Green indicates power to each individual drive, red indicates
a fault.
l Control Board DS3 Indicates power to the control board.
l Control Board DS8 Indicates that the PathPilot controller is ready.
l Control Board DS9 When on, indicates that the machine is ready.
l Control Board DS10/DS11 When DS11 is on and DS10 is flashing, indicates an Ethernet connection to the PathPilot controller.


---

## PDF Page 253

12: TROUBLESHOOTING
12.6 Power Distribution Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 253
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.6 POWER DISTRIBUTION SUBSYSTEM
Electrical power is run through a single power cord to the Main Disconnect switch. This switch controls all power to the machine, the
coolant pump, and the PathPilot controller.
To troubleshoot the power distribution subsystem, read the following:
12.6.1 The Controller Won't Power On
253
12.6.2 The Coolant Pump Won't Run
253
12.6.1 The Controller Won't Power On
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
12.6.2 The Coolant Pump Won't Run
Cause: Fuse F1 on the machine control board is blown.
Probability
How-To Steps
Need More?
Medium
1.
Unplug the coolant pump power cord and examine it for damage.
2.
Use a digital multimeter to verify the motor’s winding-to-winding and
winding-to-ground resistances.
If any winding-to-winding resistance measurement is a short (near zero
resistance) or an open circuit or if the winding-to-ground resistance is a
short, the coolant pump must be replaced.
3.
Replace the fuse with a 3A slow-blow fuse, power on and reset the
machine, and select the Coolant button in PathPilot.
Use a digital multimeter to test the power at the XS2 receptacle.
If the fuse blows again with the pump plugged in, replace the pump.
If the coolant pump shorts, the 3 A,
slow-blow, F1 flood coolant fuse on
the ECM1 control board blows before
CB3 trips.


---

## PDF Page 254

12: TROUBLESHOOTING
12.6 Power Distribution Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 254
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: The coolant pump isn't plugged in to an outlet.
Probability
How-To Steps
Need More?
Low
Examine the connection at the outlet.
It's possible that the power cord could
become loose from movement.
Cause: The coolant control relay on the machine control board failed.
Probability
How-To Steps
Need More?
Low
1.
From the PathPilot interface, toggle the Coolant button to On.
2.
Examine the coolant receptacle for power. If there's no power, and fuse F1
has continuity, it's likely that the K3 relay failed.
3.
Power off the machine (see "Power off the Machine" (page 59)). Then,
install a short jumper between wires J5-1 and J5-2.
4.
Power on the machine (see "Power on the Machine" (page 56)). If the
pump runs when the machine is powered on, replace the machine control
board.
1.
Power off the machine (see
"Power off the Machine"
(page 59)). Then, install a short
jumper between wires 109 and
125 on the machine control
board.
2.
Power on the machine (see
"Power on the Machine"
(page 56)). If the pump runs
when machine is powered on,
it's likely that the problem is the
K3 relay.
Note: This relay will fail if too
high of a current draw passes
through it. This is common
when electrical loads much
larger than the coolant pump
are plugged into the coolant
outlet.


---

## PDF Page 255

12: TROUBLESHOOTING
12.7 Control Power Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 255
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.7 CONTROL POWER SUBSYSTEM
To troubleshoot the control power subsystem, read the following:
12.7.1 The Machine Won't Power On
255
12.7.1 The Machine Won't Power On
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
Measure for 24 Vdc nominal between wires 401 and 400.
Before you replace the DC power
supply, power off the machine (see
"Power off the Machine" (page 59)).
Cause: The Main Disconnect switch is in the Off position.
Probability
How-To Steps
Need More?
Low
Examine the Main Disconnect switch. If it’s not already in the On position,
turn it on.
If needed, measure for 230 Vac
nominal between wires L1 and L2.
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
Measure for 230 Vac nominal between wires 105 and 104/N.
2.
Measure for 230 Vac nominal between wires 107 and 106/N.
Before you reset the tripped breaker,
power off the machine (see "Power off
the Machine" (page 59)).


---

## PDF Page 256

12: TROUBLESHOOTING
12.7 Control Power Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 256
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: The contactor K1 is defective.
Probability
How-To Steps
Need More?
Low
l If the contactor's red LED is on, the contactor is latched. Use a digital
multimeter to examine the power at K1-1 and wire 115.
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

## PDF Page 257

12: TROUBLESHOOTING
12.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 257
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.8 AXES DRIVE SUBSYSTEM
The axis motors are used to move the X-, Y-, Z-, and A-axis. The axis motors contain their own digital driver modules. The axis motors are
powered by the DC-BUS board. Travel limits are established by the motors when the machine is referenced.
To troubleshoot the axes drive subsystem, read the following:
12.8.1 All Axes Won't Move When Commanded
257
12.8.2 One Axis Won't Move (or Only Moves in One Direction), and Other Axes Move
258
12.8.3 Axis Movement is Noisy
260
12.8.4 Lost Motion on Axis Travel
261
12.8.1 All Axes Won't Move When Commanded
Cause: Control signals aren't reaching the servo motors.
Probability
How-To Steps
Need More?
High
1.
Power off the machine (see "Power off the Machine" (page 59)).
2.
Examine the connections at the machine control board and the servo
motors. Verify that the connectors are firmly seated, and examine the
connectors for loose wires or ferrules.
Examine the cable 424/425/426 from
the control board (J13/J14/J15) to the
servo motors.
Cause: The DC-BUS board is malfunctioning.
Probability
How-To Steps
Need More?
Medium
The loss of DC-BUS board power to one or more axes is likely if the servo motor
LEDs are not on, if they're dim, or if they're displaying a green 3 blink or 3-4
yellow blink error code.
Verify 68 Vdc on motor power wires (210/211, 220/221, 230/231).
Examine the axis status LED on the back of the servo motor.
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

## PDF Page 258

12: TROUBLESHOOTING
12.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 258
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.8.2 One Axis Won't Move (or Only Moves in One Direction), and Other Axes Move
Cause: There are loose wires or cables.
Probability
How-To Steps
High
1.
Power off the machine (see "Power off the Machine" (page 59)).
2.
Examine the connection of the J13/J14/J15 communication cables and the power wires (210/211, 220/221, 230/231)
from the DC-BUS board to the affected motor.
3.
Power on the machine (see "Power on the Machine" (page 56)) and test for operation.
Cause: There's a defective or malfunctioning servo motor.
Probability
How-To Steps
Need More?
Medium
2.
Examine the motor status LED. A solid red or absent status LED indicates a
motor problem.
3.
Power off the machine (see "Power off the Machine" (page 59)).
5.
On the malfunctioning axis, swap the central cable connector for the
control cable and the motor/DC supply connector with those from a
functioning axis.
6.
Power on the machine (see "Power on the Machine" (page 56)).
Do not attempt to reference the machine with swapped motor control
cables.
7.
Jog the malfunctioning axis in both directions.
If the malfunctioning axis now moves properly, then it's likely that the
malfunctioning axis motor is defective.
8.
Jog the functioning axis in both directions.
A defective malfunctioning axis motor is confirmed if the previously
functioning motor has the same problem.
Swapping control signals between
motors is very helpful during
troubleshooting.
Note: Do not attempt to
reference the machine with
swapped motor control
cables. Take care to avoid
reaching the end of travel
when moving an axis.
Cause: There's a blown fuse on the DC-BUS board.
Probability
How-To Steps
Need More?
Medium
1.
Power off the machine (see "Power off the Machine" (page 59)).
2.
Remove the cover from the DC-BUS board.
3.
Measure the continuity on each fuse with a multimeter. Then, visually
inspect each fuse.
If a fuse is blown, replace it with an equivalent fuse.
A blown fuse usually is the result of a
defective motor or wiring. Inspect the
axis' wiring carefully and repair any
damage observed. If you replace a fuse
and it immediately blows, it's likely a
defective axis motor or its wiring.
Cause: There's a loose axis motor coupling.
Probability
How-To Steps
Low
l Jog the axis and listen to determine if you can hear the motor run.
l Remove the cover plate over the coupling and make witness marks to determine if the motor's turning but the screw
isn't.


---

## PDF Page 259

12: TROUBLESHOOTING
12.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 259
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: There's a defective motor or motor connection.
Probability
How-To Steps
Need More?
Low
2.
Examine the motor status LED. A solid red or absent status LED indicates a
motor problem.
3.
Power off the machine (see "Power off the Machine" (page 59)).
4.
Remove the power connector from the axis motor, and examine the motor
for signs of coolant contamination.
Cause: The gibs are too tight or too loose.
Probability
How-To Steps
Need More?
Low
Adjust the gibs.
Gibs that are too tight result in too
much friction in the ways. Gibs that are
too loose can cause binding.
Cause: Oil isn't getting to the ways and ball screw.
Probability
How-To Steps
Low
1.
Examine the oil level in the oiler.
2.
Investigate the oiling system for lack of oil and/or plugged lines (See Tormach service bulletin SB0031).
Cause: There's oil residue from long-term storage.
Probability
How-To Steps
Low
Repeatedly pump oil and slowly jog the axis.
Cause: There's debris on the ball screw.
Probability
How-To Steps
Need More?
Low
Clean the ball screw.
Debris on the ball screws can rapidly
accelerate wear and reduce the
lifespan of your machine. Evaluate if
additional measures are required to
protect your machine's ball screws and
ways (like supplemental dust
collection).
Cause: The servo motor is overheating.
Probability
How-To Steps
Low
1.
Examine the LEDs on the servo motors.
If there's a green 3 blink or a yellow 5 blink, the servo motor is overheating.
2.
Power the machine on and off, and the trip should reset.
5.
If the problem continues, evaluate supplemental cooling or environmental controls for your application.


---

## PDF Page 260

12: TROUBLESHOOTING
12.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 260
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
DC-BUS Power Distribution Reference
The DC-BUS board contains four fuses which are used to individually fuse power to the axes drivers. A fifth fuse is provided on the supply
boards for the Z-axis brake. Fuses are noted on the circuit board. Note that the control power circuit must be on.
Fuse Number on DC-BUS
Board
Function
Wire Numbers to Monitor (Common Lead (0V)
Listed First)
Voltage When DC-BUS is OK and When
Fuse is Good
F1 X
X-axis
210 211
55-75 Vdc
F2 Y
Y-axis
220 221
55-75 Vdc
F3 Z
Z-axis
230 231
55-75 Vdc
F4 A
A-axis
240 241
55-75 Vdc
12.8.3 Axis Movement is Noisy
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
Power off the machine (see "Power off the Machine" (page 59)). Then,
tighten all screw connections.
Examine the green power connector
for signs of overheating.
Cause: There's a defective servo motor.
Probability
How-To Steps
Need More?
Medium
See "One Axis Won't Move (or Only Moves in One Direction), and Other
Axes Move" (page 258).
There have been cases of a noisy axis
relating to a defective servo motor.
This may be temperature-dependent.
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

## PDF Page 261

12: TROUBLESHOOTING
12.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 261
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: The C1 (DC-BUS) capacitor is defective.
Probability
How-To Steps
Low
1.
Power off the machine (see "Power off the Machine" (page 59)). Then, unplug the green power connectors on all of
the axis motors (X, Y, Z, and A).
2.
With the electrical cabinet door open, power on the machine (see "Power on the Machine" (page 56)).
3.
Examine the green LED on the DC-BUS board, and then twist out the Emergency Stop button and press the Reset
button. The green LED should come on.
4.
Push in the Emergency Stop button.
If the LED goes out in two seconds or less, the capacitor is defective and must be replaced. If the LED takes five
seconds or more to go out, the capacitor is OK.
5.
If the results are not conclusive, power off the machine (see "Power off the Machine" (page 59)). Then, unplug the
green power connectors from the axis motors (if they're not already unplugged).
6.
Power on the machine (see "Power on the Machine" (page 56)). Then, carefully measure DC voltage on wires 202
(common) and 203 on the DC-BUS board.
If there's a DC voltage of a nominal 65 Vdc (55-75), this indicates the capacitor is OK.
If there's a DC voltage of a nominal 40 Vdc (35-45), this indicates the capacitor is defective.
12.8.4 Lost Motion on Axis Travel
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


---

## PDF Page 262

12: TROUBLESHOOTING
12.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 262
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: The Z-axis brake isn't releasing.
Probability
How-To Steps
Need More?
Low
Slowly jog the Z-axis: if the brake isn't releasing, the Z-axis will usually
move down properly, but won't move up.
You should be able to hear the motor
whenever you command the axis to
move. Usually, the brake alone does
not have the torque to cause a loss of
motion. A condition like poor
lubrication in combination with a
defective Z brake are required to
actually lose position.
A faulty Z-axis brake can over-torque
the Z-axis motor, which is displayed as
a yellow 4 blink code.
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
(page 249).
Cause: There's an obstruction or excessive friction (the gibs aren't adjusted properly, or poor lubrication), or there's high load in the
mechanical system.
Probability
How-To Steps
Need More?
Low
Jog the axis and carefully observe the motion.
Typical mechanical issues include: an
increase in friction due to lack of oil at
the way surfaces or ball screw and/or
improperly adjusted gibs. They also
come from excessive load on the
system due to chips or debris on the
way surfaces or ball screw, a sticking
Z-axis brake or an end-of-travel
bumper wedged against the motor
mount casting. This occurs sometimes
after a limit switch failure and is more
common on the Z-axis.
Cause: The axes drivers have the wrong DIP switch settings. (A-axis only)
Probability
How-To Steps
Need More?
Low
See the machine's electrical schematic.
New axis drivers require you to set the
DIP switches at installation.


---

## PDF Page 263

12: TROUBLESHOOTING
12.8 Axes Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 263
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: Axis motor has the incorrect program.
Probability
How-To Steps
Low
Create a support ticket with Tormach Technical Support at tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.


---

## PDF Page 264

12: TROUBLESHOOTING
12.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 264
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.9 SPINDLE DRIVE SUBSYSTEM
The machine's spindle is driven by an AC motor whose speed is controlled by a variable frequency drive (VFD).
The spindle is in a ready-to-run condition when:
1.
The control power is on.
2.
The spindle door is closed.
3.
The machine is reset.
4.
(If equipped) The enclosure doors are closed.
5.
The spindle brake resistor thermal switch isn't tripped.
To troubleshoot the spindle drive subsystem, read the following:
12.9.1 The Spindle Won't Turn
264
12.9.2 Machining Operations are Loud ("Chattery")
268
12.9.3 Can't Load or Unload a Tool, or the Spindle's Drawbar Drags Against the Power Drawbar Cylinder's Piston Bolt
269
12.9.4 Spindle Rotates on Contact, or Spindle Isn't Rigidly Clamped
270
12.9.1 The Spindle Won't Turn
Cause: The motor runs, but the spindle doesn’t turn.
Probability
How-To Steps
Need More?
Low
Examine the spindle belt for wear or damage.
If the display on the VFD is on, the belt
may be loose or broken. You'll hear the
spindle motor running.
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

## PDF Page 265

12: TROUBLESHOOTING
12.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 265
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: There's no power to the VFD because contactor K2 is not energizing. (Examine the voltage across 116/N and 117 at the VFD,
which should be 200-250 Vac.)
Probability
How-To Steps
High
There are loose power or control wires in the VFD circuit.
1.
Power off the machine (see "Power off the Machine" (page 59)).
2.
Examine the circuit for loose wires.
3.
Power on the machine (see "Power on the Machine" (page 56)) and test operation.
Probability
How-To Steps
Medium
1.
Examine the spindle cover door to verify that it's being held closed.
2.
Verify that there's 24 Vdc measured from wire 400 to wire 436.
Probability
How-To Steps
Low
Thermal switch (TS1) tripped, preventing K2 from latching.
1.
Power off the machine (see "Power off the Machine" (page 59)).
2.
Allow the brake resistor to cool, and reset thermal switch by pressing reset button (between its two terminals).
Probability
How-To Steps
Low
The control board isn't providing a run command or holding the K2 contactor on.
1.
Examine wires 434 and 436 for 24 Vdc on wires J10.1 and J10.3, respectively.
2.
Start the spindle and listen for a soft, audible click on the control board. If you hear this click (from a relay contact on
the board), the machine control board is functioning properly. If you don't hear the click:
l Verify that there's 24 Vdc measured from wire 400 to wire 434. Make a jumper wire and, carefully,
momentarily jumper wires 434 and 436.
o
If contactor K2 pulls in (you will hear an audible clunk) while you have the jumper on but drops out as soon
as you remove the jumper, the holding contact on K2 is defective.
o
If K2 stays powered on, the control board is not passing the run signal to the circuit. The control board
passes 24 Vdc from wire 434 to 436 via a relay to create the start pulse. Measure wire 434 for 24 Vdc
power. If present, the control board or wire 436 connected to J10.3 is defective. Power off the machine (see
"Power off the Machine" (page 59)), and jumper J10.1 to J10.3 Power on the machine (see "Power on the
Machine" (page 56)) and check the VFD for a display. If the VFD reads rdy, the control board is defective. If
not, wire 436 may be broken. Lift the connections of wire 436 at the control board and K2 and measure
continuity.
Cause: The VFD tripped.
Probability
How-To Steps
Need More?
Low
If the VFD tripped, an error code displays. Read the error code and go to
"Spindle VFD Trip Reference" (page 267).
You can clear a VFD trip by either:
l Removing power from the VFD
for 30 seconds.
l Pressing the red Reset button on
the front of the VFD .


---

## PDF Page 266

12: TROUBLESHOOTING
12.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 266
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: The belt is loose or broken, or sheaves are not fixed to the motor or the spindle.
Probability
How-To Steps
Low
Power off the machine (see "Power off the Machine" (page 59)). Then, examine the mechanical system.
Cause: The VFD is defective.
Probability
How-To Steps
Low
The VFD may be defective if:
l The display isn't on and there is nominal 230 Vac between wires 117 and 106/N at the VFD.
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
Power off the machine (see "Power off the Machine" (page 59)).
2.
Wait 30 seconds, and then remove wires 118, 119, and 120 from the
VFD terminals.
3.
Measure the resistance between:
l Wires 118 and 119
l Wires 119 and 120
l Wires 120 and 118
Resistance should be in the range of approximately 2-4 Ω.
l 0 Ω indicates that the winding is
shorted.
l >1M Ω indicates that the
winding is open.
Both cases indicate a defective
motor or compromised wiring to
the motor from the VFD.


---

## PDF Page 267

12: TROUBLESHOOTING
12.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 267
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
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
403
404
14-20 Vdc
0 Vdc
Reverse
403
406
14-20 Vdc
0 Vdc
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

## PDF Page 268

12: TROUBLESHOOTING
12.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 268
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.9.2 Machining Operations are Loud ("Chattery")
Cause: Inappropriate cutting parameters or CAM settings.
Probability
How-To Steps
High
1.
Verify that you're using the correct cutting parameters: use the feed rate and spindle overrides
to adjust cutting parameters during operation.
2.
Confirm that tool offsets are correct.
Cause: Worn or broken cutting tools.
Probability
How-To Steps
High
Inspect for worn or broken cutting tools, and replace as necessary.
Cause: Swarf in the spindle or on the tool holder's shank.
Probability
How-To Steps
Medium
1.
Inspect inside the spindle and on the tool holder's shank for swarf. If necessary, clean the
components.
2.
Verify that the spindle and tool holder's contact surfaces are clean, dry, and free of grease or
oil.
Cause: Insufficient preload of drawbar springs.
Probability
How-To Steps
Medium
Verify that there's sufficient preload of the drawbar disc springs:
1.
Examine the shop air pressure, and verify that there's a minimum of 90 psi compressed air at
the machine's FRL Filter-Regulator-Lubricator.
If the machine's inlet air pressure is too low, it limits the machine's maximum tool clamping
force.
2.
Tighten the spring stack compression nut and jam nut to increase the tool's clamping force.
3.
Adjust the power drawbar cylinder's piston bolt to maintain a 0.5 mm (0.20 in.) gap with the
spindle's spring stack when there's no tool loaded in the spindle. Secure the piston bolt jam nut.
4.
Verify that the clamping force is increased as high as possible while still smoothly and reliably
clamping and unclamping tool holders.
Cause: Under- or over-tightened pull stud.
Probability
How-To Steps
Medium
Use the following items to tighten the pull studs to 40 Nm (30 ft lb) of torque:
o
Socket, BT30 Pull Stud (PN 39420)
o
Tool Tightening Fixture, BT30 (PN 39681)
o
Torque wrench
Under- or over-tightening the pull studs can cause poor contact between the tool holder and the
spindle taper.


---

## PDF Page 269

12: TROUBLESHOOTING
12.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 269
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: Cracked or broken disc springs.
Probability
How-To Steps
Low
Remove the disc springs from the drawbar assembly and inspect them for damage.
If you find any cracked or fractured springs, replace all 16 disc springs in the stack with Disc
Spring, 40 mm × 20.4 mm × 2.0 mm × 3.10 mm (PN 39689).
Cause: Incorrect pull stud used for the machine.
Probability
How-To Steps
Low
Verify that all pull studs used in the machine are of the appropriate type.
NOTICE! You must only use BT30-45° (ISO7388-3-JF30-45) type pull studs with this
machine (Pull Stud, BT30-45° (PN 37553)). Other pull stud types or angles can cause
damage to the pull stud clamping mechanism.
If you find incorrect pull studs used in the machine, inspect the clamping mechanism for
damage. If you find any damage, replace it with Clamping Unit, BT30 (PN 39690).
12.9.3 Can't Load or Unload a Tool, or the Spindle's Drawbar Drags Against the Power Drawbar Cylinder's Piston
Bolt
Cause: Insufficient shop air pressure.
Probability
How-To Steps
High
Examine the shop air pressure, and verify that there's a minimum of 90 psi compressed air at
the machine's FRL Filter-Regulator-Lubricator.
Cause: Insufficient or excessive preload of drawbar springs.
Probability
How-To Steps
Medium
Verify that there's sufficient preload of the drawbar disc springs:
1.
Examine the shop air pressure, and verify that there's a minimum of 90 psi compressed air at
the machine's FRL Filter-Regulator-Lubricator.
If the machine's inlet air pressure is too low, it limits the machine's ability to unclamp tools.
2.
If the spring stack drags against the power drawbar cylinder bolt, tighten the spring stack
compression nut and jam nut to increase the tool's clamping force.
If you cant' load or unload the tool, loosen the spring stack compression nut and jam nut to
increase clamping mechanism travel.
3.
(Serial numbers ME10048/MF10028 and earlier, three-stack power drawbar only) Adjust the
power drawbar cylinder's piston bolt to maintain a 0.5 mm (0.20 in.) gap with the spindle's
spring stack when there's no tool loaded in the spindle. Secure the piston bolt jam nut.
4.
Verify that the clamping force is increased as high as possible while still smoothly and reliably
clamping and unclamping tool holders. Repeat Steps 2-3 as necessary.


---

## PDF Page 270

12: TROUBLESHOOTING
12.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 270
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: Power drawbar cylinder piston is out of adjustment range. (For three-stack power drawbar cylinders only.)
Probability
How-To Steps
Low
1.
Loosen the power drawbar cylinder's jam nut and adjust the piston bolt. Verify that the piston
bolt sits within 0.5 mm (0.020 in.) of the spindle's spring stack when there's no tool loaded in
the spindle.
2.
Secure the jam nut.
Cause: The pull stud clamp has loosened from the end of the spindle's drawbar shaft.
Probability
How-To Steps
Very Low
1.
Use the BT30 Clamping Unit Installation Tool (PN 50385) that was provided either with your
machine or with your upgrade kit to verify that the clamping unit is securely tightened onto the
drawbar shaft. If the clamping unit is loose:
a.
Uninstall the clamping unit and inspect it for wear or damage. If you find any damage,
replace it with Clamping Unit, BT30 (PN 39690).
b.
Reinstall the clamping unit: apply medium-strength (blue) thread-locking compound to
the threads, and tighten the clamping unit onto the drawbar shaft with the installation
tool.
12.9.4 Spindle Rotates on Contact, or Spindle Isn't Rigidly Clamped
Cause: Insufficient shop air pressure.
Probability
How-To Steps
High
Verify that your shop’s air compressor is operational and that 95 psi compressed air is reaching
your machine’s FRL.
Cause: Excessive torque on spindle.
Probability
How-To Steps
High
Adjust tool paths to reduce forces applied to the braked spindle.
The spindle brake is only intended for maintaining orientation during tool changes. Excessive
torque imparted on the spindle by punch, shaping, slotting, or similar tooling can cause the
spindle to rotate.
Cause: Main machine FRL’s setpoint too low.
Probability
How-To Steps
Medium
Verify that the machine FRL is set to 90 psi (0.6 MPa).


---

## PDF Page 271

12: TROUBLESHOOTING
12.9 Spindle Drive Subsystem
©Tormach® 2026
Specifications subject to change without notice.
Page 271
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Cause: ATC Low Pressure Regulator setpoint too low; Clogged or damaged ATC Low Pressure Regulator.
Probability
How-To Steps
Medium
1.
Verify that the ATC’s Low Pressure Regulator is functioning correctly. If necessary, increase the
Low Pressure Regulator’s setpoint.
2.
Test the spindle brake function:
a.
Load an empty tool holder into the spindle.
WARNING! Entanglement Hazard: The machine operates under automatic
control — it can start at any time and crush, cut, entangle, or pinch body
parts. Always keep clear of positions on the machine where unexpected or
unintended machine motion could cause harm.
b.
From the PathPilot interface, in the MDI Line DRO field, type M19 R0 (a spindle orient
command). Then select the Enter key.
With the brake engaged, the tool holder should be rigidly clamped, and the spindle should
not be able to rotate.
3.
If the problem persists:
a.
Push in the Emergency Stop button on the operator box, which removes power to motion
control.
b.
Disconnect the compressed air supply from the machine.
c.
Remove the Low Pressure Regulator and inspect the regulator’s ports for damage or
debris blocking the flow of compressed air. Clean and reassemble the Low Pressure
Regulator onto the ATC.
Then, repeat Step 2.


---

## PDF Page 272

12: TROUBLESHOOTING
12.10 Operator Console Troubleshooting
©Tormach® 2026
Specifications subject to change without notice.
Page 272
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.10 OPERATOR CONSOLE TROUBLESHOOTING
12.10.1 The Screen Doesn't Respond to Touch Inputs
272
12.10.2 The Screen Doesn't Display an Image or Respond to Power Button
273
12.10.3 The Screen is Scrambled or Illegible
273
12.10.4 The Knobs Don't Respond
274
12.10.5 The Buttons Don't Respond
275
12.10.1 The Screen Doesn't Respond to Touch Inputs
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

## PDF Page 273

12: TROUBLESHOOTING
12.10 Operator Console Troubleshooting
©Tormach® 2026
Specifications subject to change without notice.
Page 273
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
12.10.2 The Screen Doesn't Display an Image or Respond to Power Button
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
12.10.3 The Screen is Scrambled or Illegible
Problem
The console screen turns on, but is scrambled or illegible.
Cause
The BIOS isn't configured for the correct screen output.


---

## PDF Page 274

12: TROUBLESHOOTING
12.10 Operator Console Troubleshooting
©Tormach® 2026
Specifications subject to change without notice.
Page 274
UM10586: 1100MX Operator's Manual(Version 0626A)
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
12.10.4 The Knobs Don't Respond
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

## PDF Page 275

12: TROUBLESHOOTING
12.10 Operator Console Troubleshooting
©Tormach® 2026
Specifications subject to change without notice.
Page 275
UM10586: 1100MX Operator's Manual(Version 0626A)
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
12.10.5 The Buttons Don't Respond
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

## PDF Page 276

[No extractable text; see original PDF page.]


---

## PDF Page 277

DIAGRAMS AND PARTS LISTS
IN THIS SECTION, YOU'LL LEARN:
About this machine’s components.
NOTICE! Only use Tormach-approved parts when making replacements. If you don't replace parts with
those listed in this section, you may void your warranty.
CONTENTS
13.1 Base Machine
278
13.2 Spindle Cartridge
280
13.3 Spindle Head
282
13.4 BT30 Power Drawbar Cylinder
284
13.5 Power Drawbar Push Button
286
13.6 Spindle Motor Cover
288
13.7 X-Axis Assembly
290
13.8 Y-Axis Assembly
293
13.9 Y-Axis Saddle
296
13.10 X-Y Axis Assembly
298
13.11 Z-Axis Assembly
300
13.12 Stand
303
13.13 Coolant Tank
307
13.14 Enclosure
309
13.15 Lubrication/Oil System Diagram
312


---

## PDF Page 278

13: DIAGRAMS AND PARTS LISTS
13.1 Base Machine
©Tormach® 2026
Specifications subject to change without notice.
Page 278
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.1 BASE MACHINE
1
4
2
3


---

## PDF Page 279

13: DIAGRAMS AND PARTS LISTS
13.1 Base Machine
©Tormach® 2026
Specifications subject to change without notice.
Page 279
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
"X-Y Axis Assembly" (page 298)
1
2
"Z-Axis Assembly" (page 300)
1
3
Electrical Cabinet
1
Fan Guard Filter, 120 mm (PN 37948)
1
Fan Guard, 120 mm (PN 37947)
1
4
"Spindle Head" (page 282)
1


---

## PDF Page 280

13: DIAGRAMS AND PARTS LISTS
13.2 Spindle Cartridge
©Tormach® 2026
Specifications subject to change without notice.
Page 280
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.2 SPINDLE CARTRIDGE
10
9
11
5
7
6
8
13
3
2
1
4
12
14


---

## PDF Page 281

13: DIAGRAMS AND PARTS LISTS
13.2 Spindle Cartridge
©Tormach® 2026
Specifications subject to change without notice.
Page 281
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Magnetic Encoder, Spindle Ring (PN 38298)
1
2
Spindle Pulley, 1100MX (PN 39576)
1
3
Flange, BT30 Power Drawbar (PN 39577)
1
4
Key, Straight, 6 mm × 6 mm - 64 mm (PN 39579)
1
5
Disc Spring Guide, MX BT30 Spindle (PN 39597)
1
6
Disc Spring Compression Nut, MX BT30 Spindle (PN 39598)
1
7
Disc Spring, 40 mm × 20.4 mm × 2.0 mm × 3.10 mm (PN 39689)
16
8
Nut, Jam, M12 × 1.75 (PN 39602)
1
9
Drawbar, BT30 Spindle (PN 39574)
1
10
Clamping Unit, BT30 (PN 39690)
1
11
Key, Straight, 4 mm × 4 mm - 12 mm (PN 39601)
1
12
O-Ring, 9 mm × 12 mm × 1.5 mm, Buna-N (PN 39584)
3
13
Nut, Bearing, M25 × 1.5 (PN 39589)
1
14
Drawbar Core Assembly, MX BT30 Spindle (PN 39599)
—


---

## PDF Page 282

13: DIAGRAMS AND PARTS LISTS
13.3 Spindle Head
©Tormach® 2026
Specifications subject to change without notice.
Page 282
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.3 SPINDLE HEAD
16
12
2
15
13
10
16
1
11
5
6
17
14
9
8
19
7
18
4


---

## PDF Page 283

13: DIAGRAMS AND PARTS LISTS
13.3 Spindle Head
©Tormach® 2026
Specifications subject to change without notice.
Page 283
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
1100 Head Casting (PN 30323)
1
2
1100 Spindle Motor Mount (PN 30324)
1
3
Spindle Cover, 1100 (37690)
1
4
1100 Spindle Motor Pivot Plate Assembly (37714)
1
5
BT30 Spindle Cartridge Assembly, 1100MX (PN 39590)
1
6
Wear Strip, Spindle Door (PN 38451)
2
7
Magnetic Encoder, Readhead (PN 38299)
1
8
Mill Coolant Manifold Assembly (PN 38346) (Optional)
1
9
Screw, Socket Head Cap, M10 × 1.5 - 30 (PN 31894)
6
10
Screw, Socket Head Cap, M12 × 1.75 - 50 (PN 32476)
6
11
Screw, Socket Head Cap, M8 × 1.25 - 30 (PN 30544)
6
12
Washer, Split Lock, M10 (PN 31684)
6
13
Washer, Split Lock, M12 (PN 30321)
6
14
Washer, Flat, M10 (PN 30919)
6
15
Washer, Flat, M12 (PN 32473)
6
16
Pin, Taper, 8 mm - 40 mm (PN 30320)
2
17
Screw, M5 × 0.8 -14 (PN 37901)
6
18
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
2
19
1100MX/770MX Power Drawbar Kit (PN 50433)
1
20
1100MX Spindle Belt (PN 50402)1100MX Spindle Belt
1


---

## PDF Page 284

13: DIAGRAMS AND PARTS LISTS
13.4 BT30 Power Drawbar Cylinder
©Tormach® 2026
Specifications subject to change without notice.
Page 284
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.4 BT30 POWER DRAWBAR CYLINDER
8
1
4
6
5
7
2
3


---

## PDF Page 285

13: DIAGRAMS AND PARTS LISTS
13.4 BT30 Power Drawbar Cylinder
©Tormach® 2026
Specifications subject to change without notice.
Page 285
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Power Drawbar Mount Plate (PN 37747)
1
2
Pneumatic Cylinder, Double Acting, 100 mm Bore, 25 mm Stroke, 2-Stack (PN 50450)
1
3
BT30 Power Drawbar Standoff, M14 × 2 - 145 (PN 39710)
3
4
Fitting, Elbow, 1/4 NPT to 1/4 in. PTC (Male) (PN 31324)
2
5
Fitting, Branch Tee, 1/4 NPT to 1/4 OD Tube (PN 31325)
1
6
Screw, Hex Head Cap, M16 × 1.5 - 25 (PN 31322)
1
7
Washer, Flat, M16 (PN 31445)
1
8
Screw, Flat-Head Cap, M14 × 2 - 40 (PN 38285)
3
9
Tube, 1/4 in. OD, Plastic - 125 mm (PN 38408)
1


---

## PDF Page 286

13: DIAGRAMS AND PARTS LISTS
13.5 Power Drawbar Push Button
©Tormach® 2026
Specifications subject to change without notice.
Page 286
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.5 POWER DRAWBAR PUSH BUTTON
3
6
5
1
10
9
8
2
7
4
LABEL: PDB INLET
LABEL: PDB RETRACT 
LABEL: PDB EXTEND


---

## PDF Page 287

13: DIAGRAMS AND PARTS LISTS
13.5 Power Drawbar Push Button
©Tormach® 2026
Specifications subject to change without notice.
Page 287
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Power Drawbar Push Button Base (PN 38217)
1
2
Power Drawbar Push Button Cover (PN 38218)
1
3
Push Button Air Valve (4-Way, 5-Port) (PN 37295)
1
4
Fitting, Male Connector, 1/4 NPT to 1/4 in. PTC (PN 32212)
2
5
Fitting, Elbow, 1/4 NPT to 1/4 in. PTC (Male) (PN 31324)
1
6
Fitting, Muffler (Flat), 1/8 NPT (PN 37297)
2
7
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
4
8
Screw, Socket Head Cap, M4 × 0.7 - 50 (PN 38220)
2
9
Power Drawbar Push Button Spacer (PN 38219)
2
10
Decal, Power Drawbar, Release Tool (PN 37340)
1


---

## PDF Page 288

13: DIAGRAMS AND PARTS LISTS
13.6 Spindle Motor Cover
©Tormach® 2026
Specifications subject to change without notice.
Page 288
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.6 SPINDLE MOTOR COVER
11
16
19
18
3
17
13
9
10
12
5
14
1
4
15
8
7
6
2
15
15
15


---

## PDF Page 289

13: DIAGRAMS AND PARTS LISTS
13.6 Spindle Motor Cover
©Tormach® 2026
Specifications subject to change without notice.
Page 289
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
1100 Rear Spindle Cover (PN 37691)
1
2
1100 Front Spindle Cover (PN 37692)
1
3
1100 Upper Drag Chain Mount (PN 38456)
1
4
Spindle Motor Cover Latch (PN 31199)
1
5
Spindle Door Switch (PN 30461)
1
6
Cover Dog (PN 37695)
1
7
Bumper, Push-In, 16 mm × 8.5 mm, Rubber (PN 38450)
2
8
Spindle Door Latch Guard (PN 38878)
1
9
Cover Hinge (PN 37693)
2
10
Cover Pivot (PN 37694)
2
11
Cover Axel (PN 37696)
2
12
Spindle Motor Cover Lid Support (PN 38446)
1
13
Lid Support Bushing (PN 38447)
2
14
Lid Support Washer (PN 38448)
2
15
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
20
16
Screw, Button Head Cap (Flanged), M5 × 0.8 - 8 (PN 38889)
4
17
Screw, Button Head Cap (Flanged), M5 × 0.8 - 12 (PN 38890)
2
18
1100M Drag Chain (PN 38464)
1
19
Screw, Button Head Cap, M4 × 0.7 - 10 mm (PN 38904)
4


---

## PDF Page 290

13: DIAGRAMS AND PARTS LISTS
13.7 X-Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 290
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.7 X-AXIS ASSEMBLY
26
31
17
25 10 7
8 28 6
5
14
3
4
34
27
33
2
24
18
15
21
19
20
12
29
16
23
22
1
9
11
13
30
23
32
11 24
22
21
3
28


---

## PDF Page 291

13: DIAGRAMS AND PARTS LISTS
13.7 X-Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 291
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
1100 Machine Table (PN 30436)
1
2
X-Axis Motor Mount (PN 32401)
1
3
Bearing, Angular Contact, 7202B (P6), 15 mm × 35 mm × 11 mm (PN 30373)
2
4
X-Y Ball Screw Bearing Spacer (PN 30429)
1
5
X-Y Ball Screw Bearing Cover Plate (PN 30423)
1
6
X-Y Bearing Nut Sleeve (PN 30444)
1
7
Bearing Nut, M14 × 1.5, Tab Lock (PN 30363)
2
8
Bearing Nut Lock Washer, M14 (PN 30364)
1
9
X-Axis Ball Screw Assembly (PN 30483)
1
10
Ball Screw Coupler (PN 30362)
1
11
X-/Y-Axis Ball Screw End Bumper, 1100 (PN 30400)
2
12
Ball Screw End Stop Clamp (PN 30433)
1
13
X-Y End Bumper Washer (PN 30401)
1
14
1100 X-Axis Motor Mount Cover Plate (PN 37954)
1
15
X-Axis Limit Switch Flag (PN 31208)
2
16
Front Drip Guard, 860 mm (PN 50400)
1
17
X-Axis Servo Motor, 1100 (PN 38404)
1
18
X-Axis Motor Cover, 1100MX (PN 39276)
1
19
Flex Conduit Bracket, X-Axis (PN 39712)
1
20
Flex Conduit Fitting, 13 mm ID × 16 mm OD (PN 30628)
2
21
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
6
22
Washer, Split Lock, M5 (PN 31572)
10
23
Washer, Split Lock, M6 (PN 31379)
5
24
Screw, Socket Head Cap, M5 × 0.8 - 16 (PN 30546)
10
25
Screw, Socket Head Cap, M4 × 0.7 - 16 (PN 37751)
4
26
Screw, Socket Head Cap, M5 × 0.8 - 20 (PN 30357)
4
27
Screw, Socket Head Cap, M8 × 1.25 - 40 (PN 30427)
4
28
Screw, Socket Head Cap, M5 × 0.8 - 10 (PN 31641)
6
29
Screw, Socket Head Cap, M5 × 0.8 - 25 (PN 30530)
1
30
Screw, Socket Head Cap, M6 × 1 - 16 (PN 33117)
1
31
Washer, Flat, M5 (PN 39305)
4
32
Washer, Flat, M8 (PN 30531)
4


---

## PDF Page 292

13: DIAGRAMS AND PARTS LISTS
13.7 X-Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 292
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
33
Taper Pin, 8 mm × 30 mm (PN 30428)
2
34
Screw, Button Head Cap, M5 × 0.8 - 12, Stainless Steel (PN 37716)
4


---

## PDF Page 293

13: DIAGRAMS AND PARTS LISTS
13.8 Y-Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 293
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.8 Y-AXIS ASSEMBLY
26
38
17
12
22
14
7
15
25
27
20
30
10
9
11
32
31
2
33
5
4
6
21
16
13
8
34
37
3
24
23
28
29
35
1
36
18
39
30


---

## PDF Page 294

13: DIAGRAMS AND PARTS LISTS
13.8 Y-Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 294
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
1100 Machine Base (PN 30399)
1
2
Y-Axis Motor Mount (PN 30445)
1
3
Ball Screw Coupler (PN 30362)
1
4
Bearing, Angular Contact, 7202B (P6), 15 mm × 35 mm × 11 mm (PN 30373)
2
5
X-Y Ball Screw Bearing Spacer (PN 30429)
1
6
X-Y Ball Screw Bearing Cover Plate (PN 30423)
1
7
Y-Axis Ball Screw Assembly, 1100 (PN 38800)
1
8
Bearing Nut, M14 × 1.5, Tab Lock (PN 30363)
2
9
Ball Screw End Stop Clamp (PN 30433)
1
10
Y-Axis Ball Screw Back Bumper, 1100 (PN 30446)
1
11
Motor Mount Cover Plate (PN 30418)
1
12
X-/Y-Axis Ball Screw End Bumper, 1100 (PN 30400)
1
13
Bearing Nut Lock Washer, M14 (PN 30364)
1
14
Y-Axis Cover Plate (PN 30406)
1
15
Y-Axis Bellows Spacer (PN 30404)
2
16
X-Y Bearing Nut Sleeve (PN 30444)
1
17
X-Y End Bumper Washer (PN 30401)
1
18
Y-Axis Limit Switch Flag (PN 30450)
2
19
Fitting, Oil, Tee (PN 30398)
1
20
Screw, Button Head Cap, M5 × 0.8 - 12, Stainless Steel (PN 37716)
4
21
Taper Pin, 8 mm × 30 mm (PN 30428)
2
22
Screw, Pan Head Machine, M6 × 1 - 40 (PN 30405)
4
23
Screw, Pan Head Machine, M4 × 0.7 - 12 (PN 30403)
12
24
Y-Axis Servo Motor, 1100 (PN 38701)
1
25
Y-Axis Way Cover, 1100 (PN 30578)
2
26
Screw, Socket Head Cap, M6 × 1 - 16 (PN 33117)
2
27
Washer, Split Lock, M5 (PN 31572)
10
28
Washer, Flat, M5 (PN 39305)
4
29
Screw, Socket Head Cap, M5 × 0.8 - 20 (PN 30357)
4
30
Screw, Socket Head Cap, M5 × 0.8 - 16 (PN 30546)
10
31
Washer, Split Lock, M8 (PN 32339)
4
32
Washer, Flat, M8 (PN 30531)
4


---

## PDF Page 295

13: DIAGRAMS AND PARTS LISTS
13.8 Y-Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 295
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
33
Screw, Socket Head Cap, M8 × 1.25 - 40 (PN 30427)
4
34
Screw, Socket Head Cap, M5 × 0.8 - 10 (PN 31641)
3
35
Washer, Flat, M12 (PN 32473)
4
36
Screw, Socket Head Cap, M12 × 1.75 - 50 (PN 32476)
4
37
Screw, Socket Head Cap, M4 × 0.7 - 16 (PN 37751)
4
38
Washer, Split Lock, M6 (PN 31379)
1
39
Screw, Socket Head Cap, M5 × 0.8 - 25 (PN 30530)
1


---

## PDF Page 296

13: DIAGRAMS AND PARTS LISTS
13.9 Y-Axis Saddle
©Tormach® 2026
Specifications subject to change without notice.
Page 296
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.9 Y-AXIS SADDLE
13
9
15
14
7
6
11
12
10
1
8
4
24
20
21
23
19
18
22
4
1
22
7
2
2
7
5
3
2
5


---

## PDF Page 297

13: DIAGRAMS AND PARTS LISTS
13.9 Y-Axis Saddle
©Tormach® 2026
Specifications subject to change without notice.
Page 297
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Taper Pin, 6 - 25 (PN 30439)
4
2
Screw, Pan Head Machine, M4 × 0.7 - 12 (PN 30403)
14
3
Screw, Socket Head Cap, M5 × 0.8 - 20 (PN 30357)
2
4
Screw, Socket Head Cap, M6 × 1 - 25 (PN 31685)
8
5
Washer, Split Lock, M6 (PN 31379)
8
6
1100 Y-Axis Saddle (PN 30414)
1
7
Gib Adjustment Screw for 1100 (PN 30412)
4
8
Y-Axis Ball Nut Carrier (PN 30453)
1
9
X-Axis Ball Nut Carrier (PN 30441)
1
10
Y-Axis Limit Switch Cover Plate (PN 31212)
1
11
Y-Axis Limit Switch Housing (PN 30452)
1
12
Y-Axis Limit Switch (PN 30461)
1
13
5-Port Manifold (PN 30442)
1
14
Y-Axis Way Cover, 1100 (PN 30578)
1
15
Lubrication System, 2-Port Manifold (PN 33954)
1
16
1100 X-Axis Ball Screw (PN 37953)
1
17
1100 X-Y Ball Nut (PN 37952)
1
18
X-Axis Gib (PN 30443)
1
19
X-Axis Limit Switch Housing (PN 31211)
1
20
X-Axis Limit Switch Cover Plate (PN 31210)
1
21
X-/Z-Axis Limit Switch (PN 31860)
1
22
Screw, Socket Head Cap, M5 × 0.8 - 25 (PN 30530)
4
23
Screw, Pan Head Machine, M5 × 0.8 - 10 (PN 30417)
2
24
Y-Axis Gib (PN 30413)
1


---

## PDF Page 298

13: DIAGRAMS AND PARTS LISTS
13.10 X-Y Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 298
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.10 X-Y AXIS ASSEMBLY
1
2
3


---

## PDF Page 299

13: DIAGRAMS AND PARTS LISTS
13.10 X-Y Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 299
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
"Y-Axis Assembly" (page 293)
1
2
"Y-Axis Saddle" (page 296)
1
3
"X-Axis Assembly" (page 290)
1


---

## PDF Page 300

13: DIAGRAMS AND PARTS LISTS
13.11 Z-Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 300
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.11 Z-AXIS ASSEMBLY
22
3
46
21
35
36
37
16
18
19
13
14
11
31
12
40
32
39
34
33
8
10
47
30
9
6
5
23
15
17
41
28
27
1
29
26
48
2
25
24
4
7
45
43
42
38
47
37
30
48
20


---

## PDF Page 301

13: DIAGRAMS AND PARTS LISTS
13.11 Z-Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 301
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
1100 Column (PN 30379)
1
2
1100 Z-Axis Saddle (PN 30386)
1
3
Z-Axis Gib (PN 30384)
1
4
Z-Axis Gib Screw (PN 30412)
2
5
Z-Axis Ball Nut Carrier (PN 30387)
1
6
Z-Axis Limit Switch Flag (PN 37749)
1
7
1100MX Spindle Head Assembly (PN 50432)
1
8
Z-Axis Motor Mount (PN 30367)
1
9
Z-Axis Ball Screw Assembly, 1100 (PN 30382)
1
10
Z-axis Ball Screw Upper Bumper, 1100 (PN 30375)
1
11
Bearing, Angular Contact, 7202B (P6), 15 mm × 35 mm × 11 mm (PN 30373)
2
12
Bearing Spacer (PN 30374)
1
13
Bearing Nut Sleeve (PN 30371)
1
14
Z-Axis Bearing Retainer (PN 30372)
1
15
Z-Axis Ball Screw Lower Bumper, 1100 (PN 30388)
1
16
Ball Screw Coupler (PN 30362)
1
17
Lower Bumper Washer (PN 30390)
1
18
Bearing Nut, M14 × 1.5, Tab Lock (PN 30363)
2
19
Bearing Nut Lock Washer, M14 (PN 30364)
1
20
Z-Axis Servo Motor, 1100 (PN 38405)
1
21
Brake, NEMA 34 Inline, 24 Vdc (PN 38399)
1
22
Z-Axis Drag Chain Box (PN 38449)
1
23
Column Cover Plate (PN 30376)
1
24
Z-axis Way Cover (PN 30378)
1
25
Z-Axis Way Cover Bracket (PN 31204)
1
26
Washer, Flat, M12 (PN 32473)
6
27
Washer, Split Lock, M12 (PN 30321)
6
28
Screw, Socket Head Cap, M12 × 1.75 - 60 (PN 30380)
6
29
Taper Pin, 10 mm - 55 mm (PN 30381)
2
30
Screw, Button Head Cap, M5 × 0.8 - 12, Stainless Steel (PN 37716)
11
31
Taper Pin, 6 - 30 (PN 30368)
2
32
Washer, Split Lock, M10 (PN 31684)
4


---

## PDF Page 302

13: DIAGRAMS AND PARTS LISTS
13.11 Z-Axis Assembly
©Tormach® 2026
Specifications subject to change without notice.
Page 302
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
33
Washer, Flat, M10 (PN 30919)
4
34
Screw, Socket Head Cap, M10 × 1.5 - 40 (PN 30366)
4
35
Washer, Split Lock, M5 (PN 31572)
8
36
Washer, Flat, M5 (PN 39305)
8
37
Screw, Socket Head Cap, M5 × 0.8 - 25 (PN 30530)
10
38
Screw, Button Head Cap (Flanged) M3 × 0.5 - 6 (PN 38880)
4
39
Eye Bolt, M16 × 2 - 28 (PN 30370)
1
40
Screw, Flat Point Set, M16 × 2 - 12 (PN 30369)
1
41
Screw, Socket Head Cap, M5 × 0.8 - 10 (PN 31641)
1
42
Washer, Split Lock, M6 (PN 31379)
5
43
Screw, Socket Head Cap, M6 × 1 - 30 (PN 30353)
4
44
Nut, Hex, M5 × 0.8 (PN 31201)
2
45
Taper Pin, 6 - 35 (PN 31205)
2
46
Screw, Socket Head Cap, M4 × 0.7 - 16 (PN 37751)
4
47
Screw, Socket Head Cap, M5 × 0.8 - 20 (PN 30357)
9
48
Flex Conduit Fitting, 13 mm ID × 16 mm OD (PN 30628)
9


---

## PDF Page 303

13: DIAGRAMS AND PARTS LISTS
13.12 Stand
©Tormach® 2026
Specifications subject to change without notice.
Page 303
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.12 STAND
6
8
4
2
1
3
9


---

## PDF Page 304

13: DIAGRAMS AND PARTS LISTS
13.12 Stand
©Tormach® 2026
Specifications subject to change without notice.
Page 304
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
1100M Base (PN 37544)
1
2
Coolant Tank Assembly (PN 37530)
1
3
1100 Front Cover (PN 37538)
1
4
Coolant Tank Handle (PN 38466)
1
5
Screw, Socket Head Cap, M8 × 1.25 - 16 (PN 31681)
2
6
Screw, Socket Head Cap, M6 × 1 - 12 (PN 51421)
6
7
Screw, Button Head Cap (Flanged), M6 × 1 - 12, Stainless Steel (PN 38206)
4
8
Washer, Split Lock, M6 (PN 31379)
6
9
Washer, Flat, M6 (PN 31676)
6


---

## PDF Page 305

13: DIAGRAMS AND PARTS LISTS
13.12 Stand
©Tormach® 2026
Specifications subject to change without notice.
Page 305
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15
1
11
6
12
5
7
8
14
3
13
9
4
2


---

## PDF Page 306

13: DIAGRAMS AND PARTS LISTS
13.12 Stand
©Tormach® 2026
Specifications subject to change without notice.
Page 306
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
1100M Base (PN 37544)
1
2
Machine Foot (PN 32092)
4
3
Door (PN 37675)
1
4
Wear Strip (PN 37667) Wear Strip (PN 37667)
2
5
Door Hinge (PN 37669)
2
6
USB Cover (PN 37676)
1
7
Coolant Line Mounting Bracket (PN 38340)
1
8
Machine Stand Access Panel (PN 38343)
1
9
Stand Door Latch, Right (PN 30713)
1
10
Screw, Button Head Cap (Flanged), M6 × 1 - 12, Stainless Steel (PN 38206)
4
11
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
2
12
Screw, Flat Head Cap, M6 × 1 - 20, Stainless Steel (PN 38467)
8
13
Washer, Flat, M3, Stainless Steel (PN 37937)
2
14
Screw, Button Head Cap, M3 × 0.5 - 6, Stainless Steel (PN 37938)
2


---

## PDF Page 307

13: DIAGRAMS AND PARTS LISTS
13.13 Coolant Tank
©Tormach® 2026
Specifications subject to change without notice.
Page 307
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.13 COOLANT TANK
4
3
15
7
2
11
5
10
6
13
9
12
14
1
16


---

## PDF Page 308

13: DIAGRAMS AND PARTS LISTS
13.13 Coolant Tank
©Tormach® 2026
Specifications subject to change without notice.
Page 308
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Coolant Tank (PN 37531)
1
2
Straight Caster (PN 37626)
4
3
3/4 in. NPT Cap (PN 37627)
1
4
Sight Gauge (PN 37628)
1
5
Chip Tub (PN 37532)
1
6
Skimmer Plate (PN 37533)
1
7
Pump Adapter Cover (PN 37536)
1
8
Cup Clamp (PN 37539)
3
9
Large Pump Plate (PN 37535)
1
10
Skimmer Plate Cover (PN 37534)
1
11
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
12
12
Screw, Button Head Cap (Flanged), M6 × 1 - 12, Stainless Steel (PN 38206)
4
13
High Quality 1/8 HP (100 W) Coolant Pump (PN 33128)
1
14
Screw, Socket Head Cap, M6 × 1 - 12 (PN 51421)
16
15
Washer, Flat, M6 (PN 31676)
16
16
Screw, Socket Head Cap, M6 × 1 - 14 (PN 51161)
4


---

## PDF Page 309

13: DIAGRAMS AND PARTS LISTS
13.14 Enclosure
©Tormach® 2026
Specifications subject to change without notice.
Page 309
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.14 ENCLOSURE
6
3
1
11
16
18
2
7
15
8
20
30
23
17
19
4
24
47
12
14
13
9
10
5
20
40
21
22
A
B
26
27
28
30
45
46
38
16
31
41
17
36
18
31
19
37
22
21
41
39
21
22
42
35
DOOR LATCH
DETAIL A
32
34
33
RAIL MOUNT
DETAIL B
29
25
44
42


---

## PDF Page 310

13: DIAGRAMS AND PARTS LISTS
13.14 Enclosure
©Tormach® 2026
Specifications subject to change without notice.
Page 310
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Enclosure Panel, 1100, Lower Front (PN 37630)
1
2
Enclosure Panel, 1100MX, Left Front (PN 39546)
1
3
Enclosure Panel, 1100MX, Right Front (PN 39547)
1
4
Enclosure Panel, 1100, Upper Front (PN 37633)
1
5
Enclosure Panel, 1100MX, Left Side (PN 39548)
1
6
Enclosure Panel, 1100MX, Right Side (PN 39549)
1
7
Enclosure Panel, 1100, Left Top (PN 37636)
1
8
Enclosure Panel, 1100, Right Top (PN 37637)
1
9
Enclosure Panel, 1100, Left Rear (PN 37638)
1
10
Enclosure Panel, 1100, ATC (PN 37645)
1
11
Chip Tray Rail, 1100 (PN 37657)
1
12
Enclosure Panel, 1100, Right Rear (PN 37639)
1
13
Enclosure Panel, 1100, Splash Shield (PN 38691)
1
14
Enclosure Panel, 1100, Splice Plate (PN 38695)
1
15
Enclosure Panel, 1100, Column Splice (PN 37663)
1
16
Enclosure Door, 1100, Right (PN 37640)
1
17
Window, 1100, Right Door (PN 37650)
1
18
Enclosure Door, 1100, Left (PN 37641)
1
19
Window, 1100, Left Door (PN 37649)
1
20
Window, 1100, Side (PN 37648)
2
21
Enclosure Window Retainer, 1100, Vertical (PN 37646)
8
22
Enclosure Window Retainer, 1100, Horizontal (PN 37647)
8
23
LED Floodlight, 50 W (PN 37341)
2
24
Flood Light Retainer (PN 38222)
4
25
Linear Rail Support, Round, 16 mm (PN 37622)
8
26
Left Door Rail, 1100 (PN 37642)
2
27
Right Door Rail, 1100 (PN 37643)
2
28
Linear Bearing (PN 37610)
8
29
Door Bumper (PN 38357)
8
30
Handle, 400 mm (PN 37611)
2
31
Door Seal (PN 37644)
2


---

## PDF Page 311

13: DIAGRAMS AND PARTS LISTS
13.14 Enclosure
©Tormach® 2026
Specifications subject to change without notice.
Page 311
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
32
Enclosure Ball Latch, Female (PN 38482)
1
33
Enclosure Ball Latch, Male (PN 38483)
1
34
Washer, Flat, M5, Stainless Steel (PN 37939)
2
35
Nut Bar (PN 37585)
1
36
Switch Key Bracket (PN 37586)
1
37
Locking Door Switch Installation/Cover Plate (PN 38272)
1
38
Door Lock Switch Kit (PN 38283)
1
39
Cable Tie Anchor, Screw Mount, M5 (PN 31460)
3
40
Round Plug, 32 mm (PN 37598)
3
41
Sealing Strip, Rubber (PN 38356)
21
42
Screw, Button Head Cap (Flanged), M6 × 1 - 12, Stainless Steel (PN 38206)
76
43
Screw, Button Head Cap (Flanged), M5 × 0.8 - 10, Stainless Steel (PN 38205)
151
44
Screw, Socket Head Cap, M5 × 0.8 - 20 (PN 30357)
8
45
Screw, Socket Head Cap, M8 × 1.25 - 22 (PN 37190)
4
46
Washer, Flat, M8 (PN 30531)
4
47
Decal, Enclosure, 1100MX, Front Left Panel (PN 39032)
1


---

## PDF Page 312

13: DIAGRAMS AND PARTS LISTS
13.15 Lubrication/Oil System Diagram
©Tormach® 2026
Specifications subject to change without notice.
Page 312
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
13.15 LUBRICATION/OIL SYSTEM DIAGRAM
P-9
P-3
P-10
P-8
P-21
P-2
P-27
P-23
P-24
P-26
P-16
P-20
P-19
P-18
P-11
P-1
Z Slide and Dovetail 
Right Side
Z Ballnut
Z Gib
Z Manifold (PN 34707)
Z Column, Left Side
Table Slide, Left Side
Table Slide, Right Side
Inside Base, Left Side
Z Slide Left 
Side
Splitter  
(PN 32354)
Y Slide Left 
Side
X Slide Rear
Large XY Manifold (PN 33955)
X Slide and 
Dovetail Front
Y Slide and Dovetail 
Right Side
Small XY Manifold 
(PN 33954)
Y Ballnut
X Ballnut
X Gib
Y Gib
Pump  
(PN 38953/
PN 38255)
Manifold Orﬁce (PN 31370)
4 mm Nylon Tubing (PN 31304)
4 mm Protective Metal Sheath (PN 31306)


---

## PDF Page 313

PNEUMATIC SCHEMATICS
IN THIS SECTION, YOU'LL LEARN:
About the pneumatic schematics for this machine's pneumatic systems.
CONTENTS
14.1 Power Drawbar Pneumatics
314
14.2 Automatic Tool Changer (ATC) Pneumatics
315


---

## PDF Page 314

14: PNEUMATIC SCHEMATICS
14.1 Power Drawbar Pneumatics
©Tormach® 2026
Specifications subject to change without notice.
Page 314
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
14.1 POWER DRAWBAR PNEUMATICS
31313
Power Drawbar Cylinder
Exhaust Silencer
37297
Power Drawbar Pushbutton
37295
Filter-Regulator-Lubricator
38829
Exhaust Silencer
37297
Shop Air


---

## PDF Page 315

14: PNEUMATIC SCHEMATICS
14.2 Automatic Tool Changer (ATC) Pneumatics
©Tormach® 2026
Specifications subject to change without notice.
Page 315
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
14.2 AUTOMATIC TOOL CHANGER (ATC) PNEUMATICS
Exhaust Silencer
37297
Blast Solenoid
38759
Filter-Regulator-Lubricator
38829
Exhaust Silencer
37297
Tray Slide Cylinder
38520
Exhaust Silencer
37297
Tray Slide Solenoid
38759
Exhaust Silencer
37297
31313
Power Drawbar Cylinder
Exhaust Silencer
37297
Power Drawbar Solenoid 
38759
Exhaust Silencer
37297
Plug, 1/4 NPT
35890
Shop Air
Tool Shank Air Blast Nozzles
Spindle Brake Regulator
38488
32210
Spindle Brake Solenoid
Spindle Brake (MX Only)
90 psi (0.62MPa)
10 psi (0.07 MPa)


---

## PDF Page 316

[No extractable text; see original PDF page.]


---

## PDF Page 317

ELECTRICAL SCHEMATICS
IN THIS SECTION, YOU'LL LEARN:
About the electrical schematics for this machine’s electronics.
CONTENTS
15.1 230 Vac Power (Sheet 1)
318
15.2 24 Vdc Controls (Sheet 2)
319
15.3 Axis Drive Bus (Sheet 3)
320
15.4 Spindle Drive (Sheet 4)
321
15.5 Machine Control Board (Sheet 5)
322
15.6 Limit/Door Switches (Sheet 6)
323
15.7 Accessory and Auxiliary Power (Sheet 7)
324
15.8 Grounds (Sheet 8)
325
15.9 Electrical Panel Layout and Fuse Table (Sheet 9)
326
15.10 Operator Box Layout (Sheet 10)
327
15.11 Wiring Table (Sheet 11)
328
15.12 Operator Console Schematic
329


---

## PDF Page 318

15: ELECTRICAL SCHEMATICS
15.1 230 Vac Power (Sheet 1)
©Tormach® 2026
Specifications subject to change without notice.
Page 318
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.1 230 VAC POWER (SHEET 1)
5
1
6
2
230
VAC
24
VDC
L
N
+V
-V
1
3
2
4
1
3
2
4
1
3
2
4
1
3
2
4
MAIN
DISCONNECT
MAIN BREAKER
MACHINE BREAKER
EMI
FILTER
24 VDC POWER SUPPLY
20A
101
103
105
105
105
107
113
113
113
K1-2
K1-1
401
400
K2-1
K2-2
115
112/N
114/N
112/N
112/N
106/N
104/N
104/N
104/N
102/N
100/N
10A
ACCESSORY
BREAKER
20A
3A
AUXILIARY
BREAKER
117
116/N
109
108/N
GND0
GND1
24 VDC+
(SHEET 2)
24 VDC-
(SHEET 2)
XFM1 - L
(SHEET 3)
XFM1 - N
(SHEET 3)
VFD - L
(SHEET 4)
VFD - N
(SHEET 4)
ACCESSORY - L
(SHEET 7)
ACCESSORY - N
(SHEET 7)
K1-C (SHEET 2)
K2-C (SHEET 2)
230 VAC LINE
DISC1 
CB1 
CB2 
CB3 
CB4 
EMI1 
PS1 
PN 30454
PN 37345
PN 37345
PN 32350
PN 50461
PN 37346
PN 37516
AUXILIARY - L
(SHEET 7)
AUXILIARY - N
(SHEET 7)
111
110/N
L
N
L
N
GROUND BAR
(SHEET 8)
GROUND BAR
(SHEET 8)
7
8
1
3
2
4
4
5
D
C
B
A
A
B
C
D
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
DATE
DRAWN BY
TITLE:
SIZE
B
DWG.  NO.
REV
I
1100M/MX ELECTRICAL SCHEMATIC
230 VAC POWER
SHEET 1 OF 12
37158
DO NOT SCALE DRAWING
THIS DRAWING CONTAINS PROPRIETARY 
AND CONFIDENTIAL INFORMATION 
BELONGING TO TORMACH INC. THIS 
DRAWING MAY NOT BE REPRODUCED OR 
COPIED IN WHOLE OR IN PART NOR CAN 
THE INFORMATION CONTAINED BE USED 
FOR ANY PURPOSE WITHOUT THE EXPRESS 
WRITTEN PERMISSION OF TORMACH INC
RRH
2018-09
1071 UNIEK DR
WAUNAKEE, WI 53597
(608) 849-8381


---

## PDF Page 319

15: ELECTRICAL SCHEMATICS
15.2 24 Vdc Controls (Sheet 2)
©Tormach® 2026
Specifications subject to change without notice.
Page 319
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.2 24 VDC CONTROLS (SHEET 2)
M
6
5
PB2-LED
EMERGENCY
STOP
PB1 
PB2 
RESET
K1-C 
K1-3
440
434
434
434
DS1
K2-C 
434
SPINDLE DOOR
SWITCH
K2-4
434
440
OPERATOR BOX
441
400
400
401
400
434
ECM1 J10.1
(SHEET 5)
ECM1 J10.3
(SHEET 5)
ECM1 J10.5
(SHEET 5)
Z-BRAKE
(SHEET 3)
ECM1 J7.1
(SHEET 5)
ECM1 J7.2
(SHEET 5)
24 VDC+
(SHEET 1)
24 VDC-
(SHEET 1)
RESET RELAY
COIL
SPINDLE
CONTACTOR
COIL
 RESET-LED
PN 30461
PN 30462
PN 37342
PN 37515
PN 37343
401
400
TS1 
BRAKE RESISTOR
THERMAL SWITCH
PN 37420
1
3
2
4
1
3
401
400
440
434
GND4
400
D1 
PN 37514
434
400
436
400
LOCK SOLENOID
(SHEET 6)
GND4
401
440
400
434
XS4 
PANEL GROUND
PN 37526
ELECTRICAL
CABINET FAN
FAN1
400
401
436
442
GROUND BAR
(SHEET 8)
9
6
10
11
A2
A1
OPERATOR BOX
CONNECTOR
PLUG PN 37928
SOCKET PN 37927
14
13
1
2
3
4
5
RESET RELAY
LOCATION
TERMINAL 1
TERMINAL 2
K1-C
SHEET 2 - C3
434
400
K1-1
SHEET 1 - C3
113
115
K1-2
SHEET 1 - C3
112/N
114/N
K1-3
SHEET 2 - C7
440
434
SPINDLE 
CONTACTOR
LOCATION
TERMINAL 1
TERMINAL 2
K2-C
SHEET 2 - B2
442
400
K2-1
SHEET 1 - C3
113
117
K2-2
SHEET 1 - C3
112/N
116/N
K2-3
--
--
--
K2-4
SHEET 2 - C2
434
436
D
C
B
A
A
B
C
D
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
DATE
DRAWN BY
TITLE:
SIZE
B
DWG.  NO.
REV
I
1100M/MX ELECTRICAL SCHEMATIC
24 VDC CONTROLS
SHEET 2 OF 12
37158
DO NOT SCALE DRAWING
THIS DRAWING CONTAINS PROPRIETARY 
AND CONFIDENTIAL INFORMATION 
BELONGING TO TORMACH INC. THIS 
DRAWING MAY NOT BE REPRODUCED OR 
COPIED IN WHOLE OR IN PART NOR CAN 
THE INFORMATION CONTAINED BE USED 
FOR ANY PURPOSE WITHOUT THE EXPRESS 
WRITTEN PERMISSION OF TORMACH INC
RRH
2018-09
1071 UNIEK DR
WAUNAKEE, WI 53597
(608) 849-8381


---

## PDF Page 320

15: ELECTRICAL SCHEMATICS
15.3 Axis Drive Bus (Sheet 3)
©Tormach® 2026
Specifications subject to change without notice.
Page 320
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.3 AXIS DRIVE BUS (SHEET 3)
A+
A-
0
2
13
11
48
VAC
230
VAC
2
6
7
4
1
A+
A-
10A
5A
8A
202
203
241
240
231
230
221
220
242
245
243
244
400
435
210
211
127
201
200
115
3
2
1
204
205
5
4
403
408
8A
8A
8A
C
A
A
C
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
B
37158
2018-09


---

## PDF Page 321

15: ELECTRICAL SCHEMATICS
15.4 Spindle Drive (Sheet 4)
©Tormach® 2026
Specifications subject to change without notice.
Page 321
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.4 SPINDLE DRIVE (SHEET 4)
117
118
119
120
122
123
403
405
408
404
406
402
407
L1
L2
V
L3
-
+
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
445
1
4
3
2
443
444
C
A
A
C
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
B
37158
2018-09


---

## PDF Page 322

15: ELECTRICAL SCHEMATICS
15.5 Machine Control Board (Sheet 5)
©Tormach® 2026
Specifications subject to change without notice.
Page 322
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.5 MACHINE CONTROL BOARD (SHEET 5)
3
2
1
5
4
PROBE / ACCESSORY INPUT DETAIL
(SOLDER SIDE OF PANEL MOUNT CONNECTOR)
418 (COM)
417 (INPUT)
416 (5VDC+)
415 (12 VDC+)
3
2
1
5
4
419 (12 VDC+)
420 (5VDC+)
421 (INPUT)
422 (COM)
PROBE / ACCESSORY INPUT DETAIL
(SOLDER SIDE OF PANEL MOUNT CONNECTOR)
XS6
420
421
422
419
SOCKET PN 38212
ACCESSORY
INPUT 2
XS5 
416
417
418
415
SOCKET PN 38212
 ACCESSORY
INPUT 1
J2.4
J2.3
J1.1
J2.2
J2.1
J2.5
J2.6
J3.4
J3.3
J3.2
J3.1
J1.7
J1.6
J1.5
J1.4
J1.3
J1.2
VFD 14 (SHEET 4)
XS10 PIN 4 (SHEET 3), VFD 10 (SHEET 4)
VFD 42 (SHEET 4)
VFD 12 (SHEET 4)
VFD 9 (SHEET 4)
VFD 11 (SHEET 4)
XS10 PIN 5 (SHEET 3), VFD 1 (SHEET 4)
402
408
407
406
405
404
403
 A-DRIVE CONTROL (SHEET 3)
423.4
J10.1
24 VDC- (SHEET 2)
J10.4
J10.3
J10.2
START PULSE (SHEET 2)
Z-BRAKE (SHEET 3)
J6 
MACHINE
CONTROL BOARD
434
437
436
435
900
RJ45 BULKHEAD
CONNECTOR
XS7 
MACHINE
CONTROLLER
PN 37509
 J6 A-AXIS DRIVE CONTROL 
 RIBBON CABLE PN39103
414
413
412
COMMON (SHEET 6)
DS2 - LATCH SWITCH (SHEET 6)
DS2 - LOCK SWITCH (SHEET 6)
J12
LIMIT / DOOR SWITCHES
ACCESSORY INPUT 1
SPINDLE CONTROL
AXIS CONTROL
24VDC CONTROLS
ECM1 
PN 37355
24 VDC+ (SHEET 2)
400
401
24 VDC- (SHEET 2)
ECM1
POWER
J7.1
J7.2
J5.1
ACCESSORY - L (SHEET 7)
109
J5.2
125
FLOOD COOLANT - L (SHEET 7)
AC RELAYS
  ECM1v1.7
J10.5
900
400
SWITCHED 24VDC+ (SHEET 2)
LOCK SOLENOID (SHEET 6)
PN 31120
FLOOD COOLANT FUSE
3A
SLOW
F1
J4.4
J4.3
J4.2
J4.1
ACCESSORY INPUT 2
J15 
J14 
J13 
 X-DRIVE CONTROL (SHEET 3)
 Y-DRIVE CONTROL (SHEET 3)
 Z-DRIVE CONTROL (SHEET 3)
MX SERVO CONTROL CABLE PN39400
MX SERVO CONTROL CABLE PN39399
MX SERVO CONTROL CABLE PN39398
443
444
445
J1.8
J1.9
J1.10
VFD 5 (SHEET 4)
VFD 13 (SHEET 4)
VFD 41 (SHEET 4)
J9.1 +5V
J9.2  A+
J9.3  A-
J9.4  B+
J9.6  Z+
J9.5  B-
J9.7  Z-
J9.8 GND
J9.9  SHIELD
SPINDLE ENCODER
450
451
452
453
454
455
456
457
PN 38299
ENC0
130
109
J5.3
J5.4
MQL COOLANT - L (SHEET 7)
PN 31120
MQL COOLANT FUSE
F2
3A
SLOW
SERVO CONTROL CABLE PIN ASSIGNMENTS
AXIS
LABEL
WIRE COLOR 
PIN 
(ECM1 V1.5)
CONNECTOR 
PN
X
460
GREEN
J13.1
PN38767
461
BLACK
J13.2
462
WHITE
J13.3
463
BLUE
J13.4
464
RED
J13.5
465
YELLOW
J13.6
466
BROWN
J13.7
467
ORANGE
J13.8
Y
470
GREEN
J14.1
PN38767
471
BLACK
J14.2
472
WHITE
J14.3
473
BLUE
J14.4
474
RED
J14.5
475
YELLOW
J14.6
476
BROWN
J14.7
477
ORANGE
J14.8
Z
480
GREEN
J15.1
PN32877
481
BLACK
J15.2
482
WHITE
J15.3
483
BLUE
J15.4
484
RED
J15.5
485
YELLOW
J15.6
486
BROWN
J15.7
487
ORANGE
J15.8
D
C
B
A
A
B
C
D
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
DATE
DRAWN BY
TITLE:
SIZE
B
DWG.  NO.
REV
I
1100MX ELECTRICAL SCHEMATIC
MACHINE CONTROL BOARD
SHEET 5 OF 12
37158
DO NOT SCALE DRAWING
THIS DRAWING CONTAINS PROPRIETARY 
AND CONFIDENTIAL INFORMATION 
BELONGING TO TORMACH INC. THIS 
DRAWING MAY NOT BE REPRODUCED OR 
COPIED IN WHOLE OR IN PART NOR CAN 
THE INFORMATION CONTAINED BE USED 
FOR ANY PURPOSE WITHOUT THE EXPRESS 
WRITTEN PERMISSION OF TORMACH INC
RRH
2018-09
1071 UNIEK DR
WAUNAKEE, WI 53597
(608) 849-8381


---

## PDF Page 323

15: ELECTRICAL SCHEMATICS
15.6 Limit/Door Switches (Sheet 6)
©Tormach® 2026
Specifications subject to change without notice.
Page 323
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.6 LIMIT/DOOR SWITCHES (SHEET 6)
C
NC
C
NC
C
NC
 LOCK SOLENOID
 LATCH SWITCH
12
E2
22
11
E1
21
PN 37352
 LOCK SWITCH
ENCLOSURE DOOR
SWITCH
DS2 
LS1 
LS2 
LS3 
X-LIMIT SWITCH
Y-LIMIT SWITCH
Z-LIMIT SWITCH
409
410
411
414
413
412
437
ECM1 J2.1
(SHEET 5)
ECM1 J2.2
(SHEET 5)
ECM1 J2.3
(SHEET 5)
SOCKET PN 37357
PLUG PN 37929
PN 31860
PN 31860
PN 30461
ENCLOSURE DOOR
SWITCH CONNECTOR
XS8 
PN 37514
D2 
400
414
ECM1 J2.6
(SHEET 5)
414
414
400
437
412
413
ECM1 J2.5 (SHEET 5)
ECM1 J2.4 (SHEET 5)
ECM1 J10.4 (SHEET 5)
24 VDC- (SHEET 2)
412
400
437
414
413
4
1
5
2
3
LIMIT SWITCHES
(M ONLY)
D
C
B
A
A
B
C
D
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
DATE
DRAWN BY
TITLE:
SIZE
B
DWG.  NO.
REV
I
1100M/MX ELECTRICAL SCHEMATIC
LIMIT / DOOR SWITCHES
SHEET 6 OF 12
37158
DO NOT SCALE DRAWING
THIS DRAWING CONTAINS PROPRIETARY 
AND CONFIDENTIAL INFORMATION 
BELONGING TO TORMACH INC. THIS 
DRAWING MAY NOT BE REPRODUCED OR 
COPIED IN WHOLE OR IN PART NOR CAN 
THE INFORMATION CONTAINED BE USED 
FOR ANY PURPOSE WITHOUT THE EXPRESS 
WRITTEN PERMISSION OF TORMACH INC
RRH
2018-09
1071 UNIEK DR
WAUNAKEE, WI 53597
(608) 849-8381


---

## PDF Page 324

15: ELECTRICAL SCHEMATICS
15.7 Accessory and Auxiliary Power (Sheet 7)
©Tormach® 2026
Specifications subject to change without notice.
Page 324
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.7 ACCESSORY AND AUXILIARY POWER (SHEET 7)
L
N
E
E
N
L
L
N
E
XS1 
L
N
E
PN 37599
ACCESSORY POWER
109
FLOOD COOLANT
POWER
PN 37350
ACCESSORY  - L
(SHEET 1)
ACCESSORY  - N
(SHEET 1)
GROUND BAR
(SHEET 8)
ECM1 J5.2
(SHEET 5)
108/N
109
108/N
108/N
125
108/N
GND12
GND13
PN 37358
XS
2
SUPPRESSOR
  ACCESSORY POWER
  AUXILIARY POWER
SP1 
PN 37351
XS3 
GND14
ENCLOSURE LIGHTS
POWER
110/N
111
AUXILIARY - N
(SHEET 1)
AUXILIARY - L
(SHEET 1)
111
110/N
GROUND BAR
(SHEET 8)
GROUND BAR
(SHEET 8)
108/N
GROUND BAR
(SHEET 8)
ECM1 J5.4
(SHEET 5)
PN 37358
PN 37350
ECM1 J5.1/J5.3
(SHEET 5)
GND17
SUPPRESSOR
MQL COOLANT
POWER
130
SP2
XS
12
108/N
D
C
B
A
A
B
C
D
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
DATE
DRAWN BY
TITLE:
SIZE
B
DWG.  NO.
REV
I
1100M/MX ELECTRICAL SCHEMATIC
ACCESSORY / AUXILIARY POWER
SHEET 7 OF 12
37158
DO NOT SCALE DRAWING
THIS DRAWING CONTAINS PROPRIETARY 
AND CONFIDENTIAL INFORMATION 
BELONGING TO TORMACH INC. THIS 
DRAWING MAY NOT BE REPRODUCED OR 
COPIED IN WHOLE OR IN PART NOR CAN 
THE INFORMATION CONTAINED BE USED 
FOR ANY PURPOSE WITHOUT THE EXPRESS 
WRITTEN PERMISSION OF TORMACH INC
RRH
2018-09
1071 UNIEK DR
WAUNAKEE, WI 53597
(608) 849-8381


---

## PDF Page 325

15: ELECTRICAL SCHEMATICS
15.8 Grounds (Sheet 8)
©Tormach® 2026
Specifications subject to change without notice.
Page 325
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.8 GROUNDS (SHEET 8)
MAINS EARTH
(SHEET 1)
EMI1 GROUND
(SHEET 1)
XFM1 GROUND
(SHEET 3)
VFD1 GROUND 1
(SHEET 4)
VFD1 GROUND 2
(SHEET 4)
M0 GROUND
(SHEET 4)
CHASIS GROUND
ELECTRICAL CABINET DOOR GROUND
ACCESSORY GROUND
(SHEET 7)
FLOOD COOLANT GROUND
(SHEET 7)
ENCLOSURE LIGHTS GROUND
(SHEET 7)
GND0
GND1
GND13
GND12
GND11
GND10
GND9
GND7
GND6
GND4
GND14
M4 GROUND (SHEET 3)
ATC GROUND
(SHEET 3)
GND15
OPERATOR BOX GROUND
(SHEET 2)
GND16
GND5
MQL COOLANT GROUND
(SHEET 7)
GND17
D
C
B
A
A
B
C
D
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
DATE
DRAWN BY
TITLE:
SIZE
B
DWG.  NO.
REV
I
1100M/MX ELECTRICAL SCHEMATIC
GROUNDS
SHEET 8 OF 12
37158
DO NOT SCALE DRAWING
THIS DRAWING CONTAINS PROPRIETARY 
AND CONFIDENTIAL INFORMATION 
BELONGING TO TORMACH INC. THIS 
DRAWING MAY NOT BE REPRODUCED OR 
COPIED IN WHOLE OR IN PART NOR CAN 
THE INFORMATION CONTAINED BE USED 
FOR ANY PURPOSE WITHOUT THE EXPRESS 
WRITTEN PERMISSION OF TORMACH INC
RRH
2018-09
1071 UNIEK DR
WAUNAKEE, WI 53597
(608) 849-8381


---

## PDF Page 326

15: ELECTRICAL SCHEMATICS
15.9 Electrical Panel Layout and Fuse Table (Sheet 9)
©Tormach® 2026
Specifications subject to change without notice.
Page 326
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.9 ELECTRICAL PANEL LAYOUT AND FUSE TABLE (SHEET 9)
ECM1
DR1
DR2
DR3
DR4
PS1
VFD1
SP1
CB1
CB2
CB3 CB4
EMI1
XFM1
BUS1
D1 D2
K1
K2
J5
J2
J6
J7
J10
J12
F 1
F 2
J4
J3
SP2
J1
F6
F8
F4
F3
F2
F1
F1F2
REF
PN
DESCRIPTION
ECM1 
37509
MACHINE CONTROL BOARD
DR1
32000
X-AXIS DRIVER (M ONLY)
DR2
32000
Y-AXIS DRIVER (M ONLY)
DR3
32000
Z-AXIS DRIVER (M ONLY)
DR4
--
A-AXIS DRIVER (OPTION)
PS1
50461
24 VDC POWER SUPPLY
D1
37514
FLYBACK PROTECTION DIODE
D2
37514
FLYBACK PROTECTION DIODE
K1
37515
RESET RELAY
K2
37343
SPINDLE CONTACTOR
BUS1
32005
DC BUS BOARD
VFD1
51125
SPINDLE MOTOR VFD
XFM1
30459
TRANSFORMER
SP1
37358
FLOOD COOLANT SUPPRESSOR
SP2
37358
MQL COOLANT SUPPRESSOR
CB1
37345
MAIN BREAKER
CB2
37345
MACHINE BREAKER
CB3
37346
ACCESSORY BREAKER
CB4
37516
AUXILIARY BREAKER
EMI1
32350
EMI FILTER
F1
38398
FUSE HOLDER
F2
38398
FUSE HOLDER
C1
30468
DC BUS CAPACITOR (SIDE OF 
CABINET)
R1
37906
BRAKE RESISTOR (SIDE OF CABINET)
TS1
37420
BRAKE RESISTOR THERMAL SWITCH 
(SIDE OF CABINET)
FUSE TABLE
COMPONENT
FUSE NO.
AMPERES
SPEED
PN
DC BUS TRANSFORMER XFM1
F1
2.5A
SLOW
38692
F2
2.5A
SLOW
38692
DC BUS BOARD
BUS1
F1
8A
FAST
31655
F2
8A
FAST
31655
F3
8A
FAST
31655
F4
8A
FAST
31655
F6
10A
SLOW
37949
F8
5A
FAST
30213
MACHINE CONTROL BOARD 
ECM1
F1
3A
SLOW
31120
F2
3A
SLOW
31120
D
C
B
A
A
B
C
D
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
DATE
DRAWN BY
TITLE:
SIZE
B
DWG.  NO.
REV
I
1100M/MX ELECTRICAL SCHEMATIC
ELECTRICAL PANEL LAYOUT
SHEET 9 OF 12
37158
DO NOT SCALE DRAWING
THIS DRAWING CONTAINS PROPRIETARY 
AND CONFIDENTIAL INFORMATION 
BELONGING TO TORMACH INC. THIS 
DRAWING MAY NOT BE REPRODUCED OR 
COPIED IN WHOLE OR IN PART NOR CAN 
THE INFORMATION CONTAINED BE USED 
FOR ANY PURPOSE WITHOUT THE EXPRESS 
WRITTEN PERMISSION OF TORMACH INC
RRH
2018-09
1071 UNIEK DR
WAUNAKEE, WI 53597
(608) 849-8381


---

## PDF Page 327

15: ELECTRICAL SCHEMATICS
15.10 Operator Box Layout (Sheet 10)
©Tormach® 2026
Specifications subject to change without notice.
Page 327
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.10 OPERATOR BOX LAYOUT (SHEET 10)
PB2 RESET
PN 37342
PB1 EMERGENCY STOP
PN 30462
D
C
B
A
A
B
C
D
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
DATE
DRAWN BY
TITLE:
SIZE
B
DWG.  NO.
REV
I
1100M/MX ELECTRICAL SCHEMATIC
OPERATOR BOX LAYOUT
SHEET 10 OF 12
37158
DO NOT SCALE DRAWING
THIS DRAWING CONTAINS PROPRIETARY 
AND CONFIDENTIAL INFORMATION 
BELONGING TO TORMACH INC. THIS 
DRAWING MAY NOT BE REPRODUCED OR 
COPIED IN WHOLE OR IN PART NOR CAN 
THE INFORMATION CONTAINED BE USED 
FOR ANY PURPOSE WITHOUT THE EXPRESS 
WRITTEN PERMISSION OF TORMACH INC
RRH
2018-09
1071 UNIEK DR
WAUNAKEE, WI 53597
(608) 849-8381


---

## PDF Page 328

15: ELECTRICAL SCHEMATICS
15.11 Wiring Table (Sheet 11)
©Tormach® 2026
Specifications subject to change without notice.
Page 328
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.11 WIRING TABLE (SHEET 11)
CIRCUIT
LABEL
COLOR
SIZE
MAINS - L
101
BROWN
2.5 mm2
MAINS - N
100/N BLUE
2.5 mm2
MAIN DISCONNECT - L
103
BROWN
2.5 mm2
MAIN DISCONNECT - N
102/N BLUE
2.5 mm2
MAIN BREAKER - L
105
BROWN
2.5 mm2
MAIN BREAKER - N
104/N BLUE
2.5 mm2
MACHINE BREAKER - L
107
BROWN
2.5 mm2
MACHINE BREAKER - N
106/N BLUE
2.5 mm2
ACCESSORY BREAKER - L 109
BROWN
1.5 mm2
ACCESSORY BREAKER - N 108/N BLUE
1.5 mm2
AUXILIARY BREAKER - L
111
BROWN
0.75 mm2
AUXILIARY BREAKER - N
110/N BLUE
0.75 mm2
EMI FILTER - L
113
BROWN
2.5 mm2
EMI FILTER - N
112/N BLUE
2.5 mm2
K1-1 - L
115
BROWN
2.5 mm2
K1-2 -N
114/N BLUE
2.5 mm2
K2-1 - L
117
BROWN
2.5 mm2
K2-2 - N
116/N BLUE
2.5 mm2
SPINDLE MOTOR - U
118
BROWN
2.5 mm2
SPINDLE MOTOR - V
119
BLACK
2.5 mm2
SPINDLE MOTOR - W
120
GREY
2.5 mm2
VFD BRAKE BR
122
BLACK
2.5 mm2
VFD BRAKE +
123
BLACK
2.5 mm2
FLOOD COOLANT FUSED 125
BROWN
1.5 mm2
MQL COOLANT FUSED
130
BROWN
1.5 mm2
XFM1 PRIMARY FUSED - L 127
BROWN
2.5 mm2
XFM1 PRIMARY FUSED - N 126/N BLUE
2.5 mm2
CIRCUIT
LABEL
COLOR
SIZE
48 VAC - L1
201
BROWN
2.5 mm2
48 VAC - L2
200
BLUE
2.5 mm2
X_DRIVE_POWER + 211
RED
1.3 mm2
X_DRIVE_POWER -
210
BLACK
1.3 mm2
Y_DRIVE_POWER + 221
RED
1.3 mm2
Y_DRIVE_POWER -
220
BLACK
1.3 mm2
Z_DRIVE_POWER + 231
RED
1.3 mm2
Z_DRIVE_POWER -
230
BLACK
1.3 mm2
A_DRIVE_POWER + 241
BROWN
1.5 mm2
A_DRIVE_POWER - 240
BLUE
1.5 mm2
ATC_POWER + 205
BROWN
1.5 mm2
ATC_POWER - 204
BLUE
1.5 mm2
CAP+
203
BLACK
1.5 mm2
CAP-
202
BLACK
1.5 mm2
A MOTOR - A+ 242
GREEN
1.5 mm2
A MOTOR - A- 243
RED
1.5 mm2
A MOTOR - B+ 244
YELLOW
1.5 mm2
A MOTOR - B- 245
BLUE
1.5 mm2
CIRCUIT
LABEL
COLOR
SIZE
MAINS EARTH
GND0
GREEN / YELLOW 2.5 mm2
EMI1 GROUND
GND1
GREEN / YELLOW 2.5 mm2
PS1 GROUND (NOT USED)
GND2
N/A
N/A
24VDC- GROUND (NOT 
USED)
GND3
N/A
N/A
OPERATOR BOX GROUND GND4
GREEN / YELLOW 2.5 mm2
XFM1 - CHASIS GROUND
GND5
GREEN / YELLOW 2.5 mm2
M4 GROUND
GND6
GREEN / YELLOW 2.5 mm2
ATC GROUND
GND7
GREEN / YELLOW 2.5 mm2
VFD1 GROUND 1
GND9
GREEN / YELLOW 2.5 mm2
VFD1 GROUND 2
GND10
GREEN / YELLOW 2.5 mm2
M0 GROUND
GND11
GREEN / YELLOW 2.5 mm2
ACCESSORY GROUND
GND12
GREEN / YELLOW 2.5 mm2
COOLANT PUMP GROUND GND13
GREEN / YELLOW 2.5 mm2
ENCLOSURE LIGHTS 
GROUND
GND14
GREEN / YELLOW 2.5 mm2
CHASIS GROUND
GND15
GREEN / YELLOW 2.5 mm2
ELECTRICAL CABINET 
DOOR GROUND
GND16
GREEN / YELLOW 2.5 mm2
MQL COOLANT GROUND
GND 17
GREEN / YELLOW 2.5 mm2
CIRCUIT
LABEL
COLOR
SIZE
VFD_FREQ
402
PURPLE
0.75 mm2
VFD_GND
403
PURPLE
0.75 mm2
VFD_RUN
404
PURPLE
0.75 mm2
VFD_24V
405
PURPLE
0.75 mm2
VFD_DIR
406
PURPLE
0.75 mm2
VFD_FAULT-
407
PURPLE
0.75 mm2
VFD_RUNNING
408
PURPLE
0.75 mm2
VFD_MODE0
443
PURPLE
0.75 mm2
VFD_MODE1
444
PURPLE
0.75 mm2
VFD_FAULT+
445
PURPLE
0.75 mm2
DOOR_LOCKED
412
RED
0.75 mm2
DOOR_SWITCH
413
RED
0.75 mm2
COMMON
414
RED
0.75 mm2
+12V
415
RED
0.20 mm2
+5V
416
WHITE
0.20 mm2
ACC_INPUT1
417
BLUE
0.20 mm2
GND
418
GREEN
0.20 mm2
+12V
419
RED
0.20 mm2
+5V
420
WHITE
0.20 mm2
ACC_INPUT2
421
BLUE
0.20 mm2
GND
422
GREEN
0.20 mm2
A_DRIVE_CONTROL
423.4
GREY
6x 0.08mm2
24 VDC+
401
BROWN
0.75 mm2
24 VDC-
400
BLUE
0.75 mm2
24 VDC+ (CABINET FAN)
401
RED
0.3 mm2
24 VDC- (CABINET FAN)
400
BLACK
0.3 mm2
24V_SWITCHED_IN
434
ORANGE
0.75 mm2
Z_BRAKE
435
ORANGE
0.75 mm2
START_PULSE
436
ORANGE
0.75 mm2
DOOR_LOCK
437
ORANGE
0.75 mm2
24V_ISOLATED_GND
400
BLUE
0.75 mm2
ETHERNET
900
BLACK
8x 0.08mm2
MACHINE RESET PENDANT 
(ESTOP -- RESET LINE)
440
ORANGE
0.75 mm2
DOOR SWITCH -- THERMAL 
OVERLOAD
441
ORANGE
0.75 mm2
THERMAL OVERLOAD -- 
SPINDLE CONTACTOR COIL
442
ORANGE
0.75 mm2
CIRCUIT
LABEL
COLOR
SIZE
+5V
450
RED
0.32 mm2
ENCODER_A+
451
GREEN
0.32 mm2
ENCODER_A-
452
BROWN
0.32 mm2
ENCODER_B+
453
WHITE
0.32 mm2
ENCODER_B-
454
GRAY
0.32 mm2
ENCODER_Z +
455
YELLOW
0.32 mm2
ENCODER_Z-
456
ORANGE
0.32 mm2
ENCODER_GND
457
BLACK
0.32 mm2
ENCODER_SHIELD 
(NOT USED)
458
N/A
N/A
X_HLFB+
460
GREEN
0.32 mm2
X_INPUT_B+
461
BLACK
0.32 mm2
X_INPUT_A+
462
WHITE
0.32 mm2
X_ENABLE+
463
BLUE
0.32 mm2
X_HLFB-
464
RED
0.32 mm2
X_INPUT_B-
465
YELLOW
0.32 mm2
X_INPUT_A-
466
BROWN
0.32 mm2
X_ENABLE-
467
ORANGE
0.32 mm2
Y_ENABLE-
470
GREEN
0.32 mm2
Y_INPUT_B+
471
BLACK
0.32 mm2
Y_INPUT_A+
472
WHITE
0.32 mm2
Y_ENABLE+
473
BLUE
0.32 mm2
Y_HLFB-
474
RED
0.32 mm2
Y_INPUT_B-
475
YELLOW
0.32 mm2
Y_INPUT_A-
476
BROWN
0.32 mm2
Y_ENABLE-
477
ORANGE
0.32 mm2
Z_ENABLE-
480
GREEN
0.32 mm2
Z_INPUT_B+
481
BLACK
0.32 mm2
Z_INPUT_A+
482
WHITE
0.32 mm2
Z_ENABLE+
483
BLUE
0.32 mm2
Z_HLFB-
484
RED
0.32 mm2
Z_INPUT_B-
485
YELLOW
0.32 mm2
Z_INPUT_A-
486
BROWN
0.32 mm2
Z_ENABLE-
487
ORANGE
0.32 mm2
D
C
B
A
A
B
C
D
1
2
3
4
5
6
7
8
8
7
6
5
4
3
2
1
DATE
DRAWN BY
TITLE:
SIZE
B
DWG.  NO.
REV
I
1100MX ELECTRICAL SCHEMATIC
WIRING TABLE
SHEET 11 OF 12
37158
DO NOT SCALE DRAWING
THIS DRAWING CONTAINS PROPRIETARY 
AND CONFIDENTIAL INFORMATION 
BELONGING TO TORMACH INC. THIS 
DRAWING MAY NOT BE REPRODUCED OR 
COPIED IN WHOLE OR IN PART NOR CAN 
THE INFORMATION CONTAINED BE USED 
FOR ANY PURPOSE WITHOUT THE EXPRESS 
WRITTEN PERMISSION OF TORMACH INC
MCB
2016-10
1071 UNIEK DR
WAUNAKEE, WI 53597
(608) 849-8381


---

## PDF Page 329

15: ELECTRICAL SCHEMATICS
15.12 Operator Console Schematic
©Tormach® 2026
Specifications subject to change without notice.
Page 329
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
15.12 OPERATOR CONSOLE SCHEMATIC
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
