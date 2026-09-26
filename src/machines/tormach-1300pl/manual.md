# Tormach 1300PL Operator Manual

Source: [https://tormach.com/media/asset/u/m/um10720_1300pl_0725a_web.pdf](https://tormach.com/media/asset/u/m/um10720_1300pl_0725a_web.pdf)

Machine ID: `tormach-1300pl`. Manufacturer: Tormach. Model: 1300PL CNC plasma table.

Document: UM10720, 1300PL Operator's Manual, Version 0725A, copyright 2025 Tormach, Inc. Official manufacturer asset 609.

Geometry provenance: `model.glb` is tessellated from Tormach's official 1300PL STEP solid model, asset 611, file `50000-a_1.step`: [CAD download](https://tormach.com/media/asset/5/0/50000-a_1.step), [manufacturer CAD page](https://tormach.com/support/plasma/1300pl-plasma-table-solid-models). Converted in meters with source Y-up, centered horizontally and grounded at Y=0. Geometry is a manufacturer-supplied simplified solid model; no decals or textures were added.

Converted from official manufacturer PDF documentation. 212 PDF pages. Language: English. PDF page numbers below include cover and front matter.

Text extracted in PDF authored order to preserve the two-column paragraphs; diagrams and some table relationships require the source PDF. This is an extraction, not a verified substitute for the illustrated manual.


---

## PDF Page 1

Original Instructions
OPERATOR'S MANUAL
Version 0725A


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
Tormach®, 1300PL®, and PathPilot® are trademarks or registered trademarks of Tormach, Inc. Our milling
machines and accessories are covered by one or more of the following U.S. Patents: 7,386,362; D606,568;
D612,406; D621,859; and other patent(s) pending.
Other product or company names may be the trademarks of their respective owners.
Copyright © Tormach, Inc. 2025
Page 2


---

## PDF Page 3

©Tormach® 2025
Specifications subject to change without notice.
Page 3
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
IMPORTANT INFORMATION: PLEASE READ FIRST
INSPECT THE ITEMS DELIVERED
Before installing your machine, carefully inspect all delivered
items. Complete the following steps upon receiving your
shipment to ensure that everything is in proper condition and
that any issues are promptly addressed.
1.
Inspect the item(s):
l Photograph any damage that may have occurred
during shipping.
l Note any damage on the delivery receipt before
signing for the shipment. If there is extensive visible
damage to the machine, refuse to accept the
shipment.
l Verify the received goods against the packing list.
If there is any damage or shortages, you must contact
Tormach within 30 days of receipt. Create a support
ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.
2.
If there are any items that have not yet been delivered,
we recommend waiting until you've received all
shipments to begin installing the machine. Depending on
the product and options ordered, the system may arrive
in one or more shipments of:
l Accessories (if applicable)
l Machine
Note: The machine system and large
accessories are sent by freight carrier.
Smaller accessories may be sent by parcel
service.
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

©Tormach® 2025
Specifications subject to change without notice.
Page 4
UM10720: 1300PLOperator's Manual(Version 0725A)
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

## PDF Page 5

©Tormach® 2025
Specifications subject to change without notice.
Page 5
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
IMPORTANT INFORMATION: PLEASE READ FIRST
3
SAFETY
15
1.1 Intended Use
16
1.2 Machine Standards
17
1.2.1 American National Safety Institute (ANSI)
17
1.2.2 Occupational Safety and Health Administration (OSHA)
17
1.3 Safety Overview
18
1.4 Safety Messages
19
1.4.1 Personal Injury
19
1.4.2 Property Damage
19
1.5 Safety Decals
20
1.5.1 On the Electrical Cabinet Door
20
1.5.2 On the Front of the Bed
20
1.5.3 On the Gantry and the Plasma Head
21
1.6 Information Decals
22
1.6.1 Serial Number Plate
22
1.7 Machine Safety
23
1.7.1 General Shop Safety
23
1.7.2 Operational Safety
23
General
23
Workholding
24
1.7.3 Electrical Safety
24
ABOUT YOUR MACHINE
27
2.1 Performance Expectations
28
2.1.1 Cutting Performance Reference
28
2.1.2 Torch Height Control Reference
28
2.1.3 Resolution and Accuracy Reference
28
2.2 Machine Specifications
29
SITE REQUIREMENTS
31
3.1 General Site and Space Requirements
32
3.1.1 Site Requirements
32
3.1.2 Space Requirements
32
3.2 Electrical and Power Requirements
33
3.2.1 Electrical Requirements
33
3.2.2 Power Requirements
33
3.2.3 Plasma Source Power Requirements
33
3.3 Options for Non-Conforming Sites
34
3.4 Air Requirements
35
3.5 Plasma Source Requirements
36
INSTALLATION
37


---

## PDF Page 6

©Tormach® 2025
Specifications subject to change without notice.
Page 6
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4.1 Before You Begin
38
4.2 Installation Tools and Items
39
4.3 Move the Pallet
40
4.4 Unpack the Machine Crate
41
4.4.1 Open the Crate
41
4.4.2 Unpack the Machine
41
4.5 Remove Frame from Crate
42
4.5.1 Lifting Frame
42
4.5.2 Installing Legs and Righting Machine
43
4.6 Level the Machine Frame and Water Table
45
4.6.1 Level the Machine Frame
45
4.6.2 Level the Water Table
45
4.7 Install Side Panels and Cable Carriers
47
4.8 Attach the Cable Guard
49
4.9 Install Plasma Torch and Lead
50
4.10 Make Electrical Connections
52
4.11 Install Machine Arm and Connect Controller
53
4.12 Fill Water Table
55
4.13 Verify the Installation
56
4.13.1 Check Machine Breakers
56
4.13.2 Power on the Machine
56
4.13.3 Verify Axes Function
57
4.13.4 Check Belt Tension
58
4.13.5 Testing Plasma Source Control
58
4.13.6 Testing Ohmic Probing
58
4.13.7 Testing Torch Breakaway
59
4.13.8 Power off the Machine
59
4.14 Set Torch Home Position (G30)
61
4.15 Calibrate Initial Height Sensing
62
4.15.1 Set Ohmic Probing Sensitivity
62
4.15.2 Set Physical Touch Switch Trigger Depth
62
4.16 Set Up the PathPilot Controller
63
4.16.1 Specify the Date and Time
63
4.16.2 Specify the Keyboard Language
63
4.16.3 Configure the Optional Touch Screen Kit
63
4.16.4 Update PathPilot
63
SYSTEM BASICS
65
5.1 System Reference
66
5.1.1 Water Table
66
5.1.2 Z Torch Head
66
Ohmic Touchoff
66
Physical Touch Switch
66
5.2 Basic Controls Reference
68
5.2.1 Machine Controls
68
TABLE OF CONTENTS


---

## PDF Page 7

©Tormach® 2025
Specifications subject to change without notice.
Page 7
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
5.2.2 PathPilot Interface
68
5.3 Connectors Reference
69
5.4 Plasma Source Control
70
PATHPILOT INTERFACE OVERVIEW
71
6.1 About PathPilot
72
6.2 Notebook Section
73
6.2.1 Main Tab
74
6.2.2 File Tab
75
6.2.3 Settings Tab
76
6.2.4 Offsets Tab
77
6.2.5 Conversational Tab
78
6.2.6 Status Tab
79
6.3 Persistent Controls
80
6.3.1 Program Control Area
81
6.3.2 Position Status Area
82
6.3.3 Manual Control Area
83
6.4 Keyboard Shortcuts
84
6.5 Manage PathPilot Versions
85
6.5.1 Download and Install an Update File from the Controller
85
6.5.2 Install an Update File from a USB Drive
85
6.5.3 Install a Previous Version of an Update File
86
PATHPILOT TOOLS AND FEATURES
87
7.1 Create and Load G-Code Files
88
7.1.1 Load G-Code
88
Transfer Files to and From the Controller
88
Preview G-Code Files
88
Access Recent G-Code Files
89
Close the Current Program
89
7.1.2 Edit G-Code with a Text Editor
89
7.1.3 Read G-Code
89
Expand the G-Code Tab
89
About the G-Code Tab
90
Search in the Code
90
Set a New Start Line
91
Lead-In Moves
91
Change the View of the Tool Path Display
91
About the Tool Path Display
92
7.1.4 Import a DXF File
92
Working with Layers and Shapes
93
Change the Layer or Shape Cut Order
93
Adjust the Tree View Window
93
Working in the Preview Window
93
Create and Add Shape Library Templates
93


---

## PDF Page 8

©Tormach® 2025
Specifications subject to change without notice.
Page 8
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
Create a Template
93
Add a Template
94
7.2 Machine Settings and Accessories
96
7.2.1 Enable an Internet Connection
96
7.2.2 Enable Automatic Updates
96
7.2.3 Change the Network Name
97
7.2.4 Change the Screen Orientation
97
About Portrait Screen Layout
97
7.2.5 Set Torch Touch Trigger Depth
98
7.2.6 Set Minimum Touchoff Spacing
99
7.2.7 Enable Ohmic Touchoff
99
7.2.8 Enable Torch Height Control
99
7.2.9 Enable Arc-Ok Checking
99
7.2.10 Disable Hard Stop Referencing
100
7.2.11 Limit G30 Moves
100
About G30
100
7.2.12 Enable the On-Screen Keyboard
100
About Soft Keyboards
101
7.2.13 Enable the USB M-Code I/O Interface Kit
101
7.2.14 Enable Tooltips
101
7.2.15 Use a USB Camera
101
About USB Cameras
102
Manual Recording
102
Automatic E-Stop Loop Recording ("Dashcam")
103
Review Video and Image Files
103
File Naming Convention
103
G-Code Commands
103
File Naming Conventions
103
Use M01 to Take Pictures
104
7.3 Set Up G-Code Programs
105
7.3.1 Set Work Offsets
105
About Work Offsets
105
7.3.2 View Work Offsets
105
7.3.3 View Available G-Code Modes
106
7.4 Run G-Code Programs
107
7.4.1 Bring the Machine Out of Reset
107
About Reset Mode
107
7.4.2 View the Active Axis to Jog
107
7.4.3 Jog the Machine
107
Jog in Continuous Velocity Mode
108
About Continuous Velocity Jogging
108
Jog in Step Mode
108
About Step Jogging
108
7.4.4 View the Current Machine Position
108
7.4.5 Reference the Machine
108
TABLE OF CONTENTS


---

## PDF Page 9

©Tormach® 2025
Specifications subject to change without notice.
Page 9
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
About Referencing
109
7.4.6 Start a Program
109
About Cycle Start
109
Cycle Start Reference
109
7.4.7 Stop Machine Motion
109
7.4.8 View the Active G-Code Modes
109
7.4.9 View the Distance to Go
110
About Distance to Go
110
7.5 Control G-Code Programs
111
7.5.1 Use the Feed Hold Function
111
About Feed Hold
111
7.5.2 Use the Feed Rate Override Function
111
About Feed Rate Override
111
7.5.3 Use M01 Break Mode
112
About M01 Break
112
7.5.4 Use the Maxvel Override Function
112
About Maxvel Override
112
7.5.5 Use Single Block Mode
112
About Single Block
112
7.5.6 Use the Voltage Override Function
112
7.5.7 Change the Tool Number
113
About M6 G43
113
7.5.8 Use a G30 Position
113
About G30
113
7.5.9 Manually Enter Commands
113
About the MDI Line DRO Field
114
Admin Commands Reference
114
7.5.10 Copy Recently Entered Commands
115
7.5.11 Use the AutoFS Material Picker
115
Writing G-Code with AutoFS
115
Using AutoFS
115
Creating Custom AutoFS Presets
115
Deleting Custom AutoFS Presets
115
7.5.12 Use Cycle Counters (M30 and M99)
116
Monitor Cycle Counters
116
Change Cycle Counter Values
116
7.6 System File Management
117
7.6.1 Manage System Files
117
7.6.2 Create Backup Files
117
About Backup Files
118
7.6.3 Restore Backup Files
118
7.6.4 Import and Export the Tool Table
119
Import a .csv File
119
Export the Tool Table as a .csv File
119


---

## PDF Page 10

©Tormach® 2025
Specifications subject to change without notice.
Page 10
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
BASIC OPERATIONS
121
8.1 Plasma Settings Reference
122
8.1.1 Touch Switch Trigger Depth
122
8.1.2 Minimum Touchoff Spacing
122
8.1.3 Enable Ohmic Touchoff
123
8.1.4 Enable THC
123
8.1.5 Enable Arc-Ok Checking
123
8.2 Create Programs with CAD/CAM
124
8.2.1 Converting DXF Files to G-Code
124
8.2.2 Using a Post-Processor
124
8.3 Select a Method for Initial Height Sensing (IHS)
125
8.3.1 Physical Touch Switch
125
8.3.2 Ohmic Probing
125
8.4 Make Your First Cuts
126
8.4.1 Test G-Code
126
8.4.2 Code Breakdown
126
8.4.3 Run the Test Program
126
8.5 Use the AutoFS Material Picker
128
8.5.1 Writing G-Code with AutoFS
128
8.5.2 Using AutoFS
128
8.5.3 Creating Custom AutoFS Presets
128
8.5.4 Deleting Custom AutoFS Presets
128
PROGRAMMING
129
9.1 Before You Begin
130
9.2 Programming Overview
131
9.2.1 About G-Code Programming Language
131
9.2.2 G-Code Formatting Reference
131
Line Numbers
131
Words
131
Letters
132
Values
132
Order of Execution
133
Modal Groups
134
Comments
135
9.2.3 Supported G-Codes Reference
135
9.3 Programming G-Code
137
9.3.1 About the Examples Used
137
9.3.2 Rapid Linear Motion (G00)
137
9.3.3 Linear Motion at Feed Rate (G01)
138
9.3.4 Arc at Feed Rate (G02 and G03)
138
Radius Format Arc
138
Center Format Arc
139
Arc in XY Plane
139
TABLE OF CONTENTS


---

## PDF Page 11

©Tormach® 2025
Specifications subject to change without notice.
Page 11
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
Arc in XZ Plane
139
Arc in YZ Plane
139
9.3.5 Dwell (G04)
141
9.3.6 Set Offsets (G10)
141
Set Tool Table (G10 L1)
141
Set Tool Table (G10 L10)
141
Set Tool Table (G10 L11)
141
Set Coordinate System (G10 L20)
141
9.3.7 Workpiece Probe (G15)
142
9.3.8 Pierce (G16)
142
9.3.9 Plane Selection (G17, G18, G19)
142
9.3.10 Length Units (G20 and G21)
142
9.3.11 Return to Predefined Position (G28 and G28.1)
142
9.3.12 Return to Predefined Position (G30 and G30.1)
142
9.3.13 Automatically Measure Tool Lengths with an ETS (G37 and G37.1)
143
Move to G37 Position Over ETS (G37.1)
143
Move and Measure Tool Length (G37)
143
9.3.14 Straight Probe (G38.x)
144
Use the Straight Probe Command
144
9.3.15 Cutter Compensation (G40, G41, G42)
145
9.3.16 Dynamic Cutter Compensation (G41.1 and G42.1)
145
9.3.17 Apply Tool Length Offset (G43)
145
9.3.18 Engrave Sequential Serial Number (G47)
145
9.3.19 Cancel Tool Length Compensation (G49)
146
9.3.20 Absolute Coordinates (G53)
146
9.3.21 Select Work Offset Coordinate System (G54 to G54.1 P500)
146
9.3.22 Set Exact Path Control Mode (G61)
147
9.3.23 Set Blended Path Control Mode (G64)
147
9.3.24 Distance Mode (G90 and G91)
147
9.3.25 Arc Distance Mode (G90.1 and G91.1)
147
9.3.26 Temporary Work Offsets (G92, G92.1, G92.2, and G92.3)
147
9.3.27 Feed Rate Mode (G93, G94, and G95)
148
9.3.28 Spindle Control Mode (G96 and G97)
148
9.4 Programming M-Code
149
9.4.1 Supported M-Codes Reference
149
9.4.2 Program Stop and Program End (M00, M01, M02, and M30)
149
Display Information and Capture Images During an M00 or M01 Break
150
Display Information with Images
150
Display Information with Text
150
Capture Images with a USB Camera
150
9.4.3 Spindle Control (M03, M04, and M05)
150
9.4.4 Tool Change (M06)
150
9.4.5 Coolant Control (M07, M08, and M09)
151
9.4.6 Override Control (M48 and M49)
151
9.4.7 Feed Override Control (M50)
151


---

## PDF Page 12

©Tormach® 2025
Specifications subject to change without notice.
Page 12
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9.4.8 Spindle Speed Override Control (M51)
151
9.4.9 Set Current Tool Number (M61)
151
9.4.10 Set Output State (M64 and M65)
151
9.4.11 Wait on Input (M66)
152
9.4.12 USB Camera Control (M301, M302, M303)
152
9.4.13 Plasma Specific M-Codes
152
9.5 Programming Input Codes
154
9.5.1 Feed Rate (F)
154
9.5.2 Spindle Speed (S)
154
9.5.3 Change Tool Number (T)
154
9.6 Advanced Programming
155
9.6.1 Parameters
155
Parameters Reference
155
Parameter Syntax
155
Parameter Scope
155
Behavior of Uninitialized Parameters
155
Parameter Mode
155
Persistence and Volatility
155
Intended Use
155
Numbered Parameters Reference
156
Read-Only Parameters
156
Subroutine Parameters Reference
156
Named Parameters Reference
156
9.6.2 Expressions
157
Binary Operators Reference
157
Functions Reference
157
9.6.3 Subroutines
158
Subroutines Reference
158
Conditional Subroutines Reference
159
if/endif
159
if/elseif/else/endif
159
Repeating Subroutines Reference
159
Looping Subroutines Reference
159
do/while
160
while/endwhile
160
MACHINE MAINTENANCE
161
10.1 Maintenance Safety
162
10.1.1 All Maintenance Procedures
162
10.1.2 Swarf Maintenance Procedures
162
10.2 Maintenance Schedules
163
10.2.1 Daily
163
10.2.2 Weekly
163
10.2.3 Monthly
163
10.2.4 Semi-Annually
163
TABLE OF CONTENTS


---

## PDF Page 13

©Tormach® 2025
Specifications subject to change without notice.
Page 13
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
10.2.5 As Needed
163
10.2.6 Adjust Belt Tension
163
10.2.7 Adjust Rack and Pinion Preload
164
Y-Axis
164
X-Axis
164
TROUBLESHOOTING
167
11.1 Ohmic Probing
168
11.1.1 Ohmic Probe Does Not Trigger
168
11.1.2 Ohmic Probe Triggers Early or Between Cuts
169
11.2 Touch Off
171
11.2.1 The Torch Pierces Too High
171
11.2.2 The Torch Bends the Workpiece During Touch-off
171
11.3 Cutting
172
11.3.1 Torch Shuts Off During Cut
172
11.4 Voltage Feedback
173
11.4.1 No Voltage Reading in PathPilot
173
11.5 Torch Height Control
175
11.5.1 Torch Cuts Too High
175
11.5.2 Torch Drags on the Material When Cutting
176
11.6 Servo Drives
177
11.6.1 Servos Fault on Fast Direction Changes
177
DIAGRAMS AND PARTS LISTS
179
12.1 Base Machine
180
12.2 Frame Assembly
182
12.3 Water Table
185
12.4 Y-Axis Gantry Assembly
187
12.5 X-Axis Carriage Assembly
190
12.6 Z-Axis Lifter Assembly
192
12.7 Electrical Cabinet Layout
195
ELECTRICAL SCHEMATICS
197
13.1 230 Vac Power (Sheet 2)
198
13.2 24 Vdc Controls (Sheet 3)
199
13.3 Axis Drive Control (Sheet 4)
200
13.4 A-Axis Driver (Sheet 5)
201
13.5 Plasma Source Control (Sheet 6)
202
13.6 Machine Control Board (Sheet 7)
203
13.7 Torch Limit and Breakaway Switches (Sheet 8)
204
13.8 Accessory and Auxiliary Power (Sheet 9)
205
13.9 Grounds (Sheet 10)
206
13.10 Terminal Strips (Sheets 11-16)
207
13.10.1 TB1: AC Terminal Strip (Sheet 11)
207
13.10.2 TB1: AC Terminal Strip (Sheet 12)
208


---

## PDF Page 14

©Tormach® 2025
Specifications subject to change without notice.
Page 14
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.10.3 TB2: Control Terminal Strip (Sheet 13)
209
13.10.4 TB2: Control Terminal Strip (Sheet 14)
210
13.10.5 TB3: 75 Vdc Terminal Strip (Sheet 15)
211
13.10.6 TB4: Ground Terminal Strip (Sheet 16)
212
TABLE OF CONTENTS


---

## PDF Page 15

SAFETY
IN THIS SECTION, YOU'LL LEARN:
About the standards and safety precautions associated with this machine.
Before operating the machine in any way, you must read and understand this section.
Safe operation of the machine depends on its proper use and the precautions you take. Only trained personnel
— with a clear and thorough understanding of its operation and safety requirements — shall operate this
machine.
CONTENTS
1.1 Intended Use
16
1.2 Machine Standards
17
1.3 Safety Overview
18
1.4 Safety Messages
19
1.5 Safety Decals
20
1.6 Information Decals
22
1.7 Machine Safety
23


---

## PDF Page 16

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
l Appropriate workholding, toolholding, tooling, systems,
and machining parameters.
l Plasma cutting and engraving of ferrous and non-ferrous
metals.
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
©Tormach® 2025
Specifications subject to change without notice.
Page 16
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
1: SAFETY
1.1 Intended Use


---

## PDF Page 17

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
l ANSI Z49.1:2005 Safety in Welding, Cutting, and Allied
Processes
1.2.2 Occupational Safety and Health Administration
(OSHA)
l OSHA 1910.212 General Requirements for All
Machines
©Tormach® 2025
Specifications subject to change without notice.
Page 17
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 18

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
©Tormach® 2025
Specifications subject to change without notice.
Page 18
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
1: SAFETY
1.3 Safety Overview


---

## PDF Page 19

1: SAFETY
1.4 Safety Messages
1.4 SAFETY MESSAGES
The following examples show the standard safety message
types used to draw your attention to important information.
The standards distinguish between personal injury safety
messages and property damage warning messages.
1.4.1 Personal Injury
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
1.4.2 Property Damage
NOTICE! Indicates a hazard which, if not avoided, can
cause property damage.
©Tormach® 2025
Specifications subject to change without notice.
Page 19
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 20

1.5 SAFETY DECALS
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
1.5.1 On the Electrical Cabinet Door
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
1.5.2 On the Front of the Bed
Figure 1-2: Example of a safety decal on the front of the
bed.
1.
WARNING! Arc Flash Hazard. The plasma arc process
produces very bright ultraviolet and infrared rays, which
can injure your eyes and burn your skin. Always wear
appropriate personal protective equipment to avoid
damage to your eyes and skin.
2.
Don't Operate with an Active Implanted Cardiac Device.
If you wear an implanted cardiac device, you must
consult with your doctor before operating this machine.
The machine-generated electromagnetic fields could
either interfere with or damage an implanted cardiac
device.
3.
WARNING! Fire Hazard. The machine is not designed to
contain fire or explosions. Only use materials and
coolants that are intended for the specific machining
operation. Never use flammable or explosive items.
Before operating the machine in any way, you must read
all Safety Data Sheets (SDSs) for any workpiece
materials, coatings, coolants, lubricants, and other
consumables used.
4.
WARNING! Inhalation Hazard. The machine does not
protect you from airborne particulates. Chips, dust, and
vapors from certain materials can be toxic or otherwise
harmful. Before operating the machine in any way, you
must read all Safety Data Sheets (SDSs) for any
workpiece materials, coatings, coolants, lubricants, and
other consumables used.
©Tormach® 2025
Specifications subject to change without notice.
Page 20
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
1: SAFETY
1.5 Safety Decals


---

## PDF Page 21

1: SAFETY
1.5 Safety Decals
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
1.5.3 On the Gantry and the Plasma Head
Figure 1-3: Example of safety decals on the plasma head.
WARNING! Crush Hazard. Moving parts can entangle,
pinch, or cut you, causing death or serious injury. Before
operating this machine in any way, you must verify that
all body parts, long hair, and clothes are clear of the
machine's extent of motion.
©Tormach® 2025
Specifications subject to change without notice.
Page 21
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 22

1.6 INFORMATION DECALS
Before operating the machine in any way, you must locate and
become familiar with all installed information decals on the
machine and equipment.
1.6.1 Serial Number Plate
The serial number plate is on the side of the electrical cabinet,
near the Main Disconnect switch.
Figure 1-4: Example of the serial number plate on the side
of the electrical cabinet.
©Tormach® 2025
Specifications subject to change without notice.
Page 22
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
1: SAFETY
1.6 Information Decals


---

## PDF Page 23

1: SAFETY
1.7 Machine Safety
1.7 MACHINE SAFETY
Before operating the machine in any way, you must
read and understand this section.
Safe operation of the machine depends on its proper use and
the precautions you take. Only trained personnel — with a
clear and thorough understanding of its operation and safety
requirements — shall operate this machine.
1.7.1 General Shop Safety
23
1.7.2 Operational Safety
23
1.7.3 Electrical Safety
24
1.7.1 General Shop Safety
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
Wear safety eye protection with a shade number of 6 or
greater when the torch is operating.
Wear closed-toed safety shoes.
Wear ear protection when you expect the machine or the
machining processes to exceed safe exposure limits.
Wear suitable work gloves when loading or unloading
workpieces or stock that may be sharp or hot.
Wear respiratory protection appropriate for the material
being cut.
Use welding blankets and screens to protect people and
equipment outside of the machine's work area.
Keep a clearly labeled fire extinguisher close by the
machine's work area. The fire extinguisher should be rated
for solid, combustible liquid, and electrical fires (NFPA
Type ABC). The fire extinguisher should be inspected on a
periodic basis as recommended by the manufacturer.
Remain near the machine after use for at least one half
hour to detect and extinguish any possible smoldering
fires.
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
Never wear synthetic or synthetic-blend fabrics while
operating the machine. Synthetic and synthetic-blend
fabrics can melt causing severe injury. Only wear natural
fiber fabrics.
Keep flammable materials out of the machine's work
area. Ensure that the walls, ceilings, and work surfaces of
the workshop are suitably protected from sparks and hot
materials.
1.7.2 Operational Safety
General
Understand that the machine is automatically controlled
and can start at any time.
Become familiar with all physical and software controls.
Always use a chip scraper or brush when clearing away
chips, oil, or coolant.
Examine all tools, fixtures, workpieces, and guarding for
signs of damage. Replace any damaged components as
soon as you find them.
Guards may not stop all types of projectiles, like broken or
loose workpieces.
Stop the machine and verify that all machine motion has
completely stopped before doing any of the following:
Adjusting a part, fixture, or coolant nozzle.
Changing or parts.
Clearing away chips, oil, or coolant.
Reaching into any part of the machine's motion
envelope.
©Tormach® 2025
Specifications subject to change without notice.
Page 23
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 24

Removing protective shields or safeguards.
Taking measurements.
Doing any other action inside the machine's motion
envelope.
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
When machining an unproven program, use feed, speed,
and maximum velocity overrides, Distance-to-Go (DTG)
displays, single block, feed hold, and other control
features.
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
Workholding
Secure workpieces with appropriate workholding devices.
Verify that the workpiece is adequately secured.
Monitor cutting operations for "tip-ups" or warped
workpieces that could collide with the machine.
Remove cutoff workpieces and other large chips before
starting the machine.
Never leave tools, stock, or other loose items inside the
machine.
1.7.3 Electrical Safety
WARNING! Electrical Shock Hazard: You must power
off the machine before making any electrical
connections. If you don't, there's a risk of
electrocution or shock.
Power off the machine before servicing.
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
Requirements" (page 33).
Confirm that the machine installation meets all codes and
regulations of your locality.
Confirm that electrical connections are performed by a
certified electrician.
©Tormach® 2025
Specifications subject to change without notice.
Page 24
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
1: SAFETY
1.7 Machine Safety


---

## PDF Page 25

1: SAFETY
1.7 Machine Safety
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
©Tormach® 2025
Specifications subject to change without notice.
Page 25
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 26

[No extractable text; see original PDF page.]


---

## PDF Page 27

ABOUT YOUR MACHINE
IN THIS SECTION, YOU'LL LEARN:
About this machine's specifications.
CONTENTS
2.1 Performance Expectations
28
2.2 Machine Specifications
29


---

## PDF Page 28

2.1 PERFORMANCE EXPECTATIONS
2.1.1 Cutting Performance Reference
This machine is capable of cutting any metal that can be cut
with a plasma torch at or near the recommended feeds and
speeds. Verify that the programmed cuts do not exceed the
maximum feed rate in X and Y.
l Maximum Feed Rate 1000 IPM (25.4 m/min)
2.1.2 Torch Height Control Reference
Success using torch height control depends largely on the
voltage setting selected at run time, and its relation to cutting
feed rate. Make sure that your material is flat enough that
vertical movement of the torch would not exceed the
maximum Z Torch Lifter feed rate.
l Maximum Vertical Feed Rate 120 IPM (3.0 m/min)
Tip! For a cut programmed at 140 IPM where the
material rises 1" vertically over a 10" cut, the
required vertical feed rate would be (1/10) * 140 = 14
IPM.
2.1.3 Resolution and Accuracy Reference
Accuracy is heavily influenced by the techniques that the
machinist uses. A skilled machinist can deliver accuracy that
exceeds the specified accuracy from the manufacturer; an
inexperienced machinist may have difficulty delivering the
specified accuracy. We can't predict operator accuracy, but the
specified accuracy is an important reference point.
The accuracy and overall quality of plasma-cut parts depends
on plasma torch settings, air supply quality, workpiece
material properties, toolpath parameters, and other dynamic
factors. As such, the following accuracy specifications are for
the machine's motion control system only.
l Resolution 0.0005" (.0127 mm)
Note: The resolution of motion is the minimum
discrete positional move.
l Repeatability ±0.001" (±0.0254 mm)
l Positional Accuracy ≤0.005 in./ft (130 micron / 300
mm)
Note: Positional accuracy takes into account
items like backlash in the drive system and
total composite error of the gear rack.
©Tormach® 2025
Specifications subject to change without notice.
Page 28
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
2: ABOUT YOUR MACHINE
2.1 Performance Expectations


---

## PDF Page 29

2: ABOUT YOUR MACHINE
2.2 Machine Specifications
©Tormach® 2025
Specifications subject to change without notice.
Page 29
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
2.2 MACHINE SPECIFICATIONS
Travels
X-Axis
48.5" (1232 mm)
Y-Axis
50" (1270 mm)
Z-Axis
3.9" (100 mm)
Maximum Feed Rate
X- and Y-Axis
1000 IPM (25.4 m/min)
Z-Axis
120 IPM (3.0 m/min)
Power
Primary Power Required
Single-Phase 230 Vac, 50/60 Hz
Recommended Circuit Amperage
20 A breaker
Table Specifications
Table Size
51.2" x 51.2" (1300 mm x 1300 mm)
Table Type
Water Table
Weight Capacity (Excluding Water)
750 lb (340 kg)
Water Capacity
59 US gallons (223 liters)
Machine Specifications
Gantry Clearance
7.0" (177 mm)
Machine Footprint
78" x 70" (1.95m m x 1.7 m)
Overall System Height
55" (1.4 m)
Typical System Weight
1232 lb (559 kg)
Linear Motion Components
X and Y Axis Motor
Servo Driven
Z Axis Motor
NEMA 23 Stepper
Guideways
Precision Linear Guideway
Power Transmission
Planetary Gear (X Axis)
5mm HTD Belt (Y Axis)
Machine Construction
Water Table
Welded Steel
Machine Base
Welded Steel
Gantry Bridge
Aluminum
Gantry Supports
Steel


---

## PDF Page 30

2: ABOUT YOUR MACHINE
2.2 Machine Specifications
©Tormach® 2025
Specifications subject to change without notice.
Page 30
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
Controller
Control System
PathPilot (v2.4.x or newer)
Resolution and Accuracy
Resolution
0.0005" (.0127 mm)
Repeatability
±0.001" (±0.0254 mm)
Positional Accuracy
≤0.005 in./ft (130 micron / 300 mm)


---

## PDF Page 31

SITE REQUIREMENTS
IN THIS SECTION, YOU'LL LEARN:
About the site requirements of this machine (including electrical and power requirements).
Before operating the machine in any way, you must read and understand this section.
CONTENTS
3.1 General Site and Space Requirements
32
3.2 Electrical and Power Requirements
33
3.3 Options for Non-Conforming Sites
34
3.4 Air Requirements
35
3.5 Plasma Source Requirements
36


---

## PDF Page 32

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
o
Recommended Circuit Amperage 20 A breaker
Note: For more information, see "Electrical and
Power Requirements" (on the next page).
l Has a fire extinguisher within the work area.
l Is a dry, properly ventilated, and well-lit internal space.
l Provides for unobstructed machine motion and
operation.
3.1.2 Space Requirements
The area must meet the following space requirements. Allow
more space to access the rear of the machine for maintenance
and repairs.
l Machine Size 78" x 70" (1.95m m x 1.7 m)
l Machine Height 55" (1.4 m)
Figure 3-1: Dimensions of the machine itself, as
viewed from the front.
l Typical System Footprint 89" × 67" (2.3 m × 1.7 m)
Figure 3-2: Dimensions of the machine and it's
required added space, as viewed from above.
©Tormach® 2025
Specifications subject to change without notice.
Page 32
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
3: SITE REQUIREMENTS
3.1 General Site and Space Requirements


---

## PDF Page 33

3: SITE REQUIREMENTS
3.2 Electrical and Power Requirements
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
l Recommended Circuit Amperage 20 A breaker
3.2.2 Power Requirements
If the site conforms to the electrical requirements, verify that
it meets the following power requirements:
l Proper Grounding You must properly ground the
power input to the machine. Examine the continuity
between bare metal on the machine frame and true
earth ground (a water pipe or similar) to verify that it's
properly grounded.
l Correct Plug Pattern The machine is shipped with a
NEMA 6-20P plug, designed for use with a NEMA 6-20R
receptacle.
3.2.3 Plasma Source Power Requirements
In addition to the requirements listed above for the machine
itself, make sure that you have a separate circuit available to
power your plasma source. For example, when using 220V
single-phase power the Hypertherm Powermax 45 XP requires
the following:
l Primary Power Required 200 Vac – 240 Vac
l Recommended Circuit Amperage 50 A
l Plug Pattern NEMA 6-50P
Check with the manufacturer documentation for the specific
plasma source you are using before installation.
©Tormach® 2025
Specifications subject to change without notice.
Page 33
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 34

3.3 OPTIONS FOR NON-CONFORMING SITES
For sites that don't conform to the specified "Electrical and
Power Requirements" (on the previous page), you may
consider the following. You must consult with an electrician to
determine the suitability for your site.
l Buck-Boost Transformer Used to adjust line voltages.
While the machine can run on line voltages between 200
to 240 Vac, performance is reduced on line voltages
below 230 Vac, and damage to electrical components is
possible on line voltages above 240 Vac. To prevent
reduction in performance or damage to electrical
components, we recommend the Buck-Boost
Transformer (PN 32554).
©Tormach® 2025
Specifications subject to change without notice.
Page 34
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
3: SITE REQUIREMENTS
3.3 Options for Non-Conforming Sites


---

## PDF Page 35

3: SITE REQUIREMENTS
3.4 Air Requirements
3.4 AIR REQUIREMENTS
You must verify that the site conforms to the following air
supply requirements.
l Air Pressure 90-120 psi (620-825 kPa)
If the air supply is more than 120 psi (825 kPa), you must
use a regulator.
l Air Volume At least 6 cfm at 90 psi. Check with your
plasma source manufacturer in case your model requires
more volume.
l Dry Air We recommend using a compressed air dryer,
desiccator, or filter between the air compressor and the
machine.
©Tormach® 2025
Specifications subject to change without notice.
Page 35
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 36

3.5 PLASMA SOURCE REQUIREMENTS
Tormach recommends either the Hypertherm Powermax 45 XP
or the Powermax 65 plasma sources for use with the 1300PL.
Plasma sources ordered directly from Tormach will include the
correct CNC control interface and cables.
If you would like to use your own plasma source, the minimum
requirements are as follows:
l Blowback style arc-start. The 1300PL is not
recommended for use with high-frequency style arc-start
units. The electrical noise spike generated by high-
frequency arc starts can interfere with the axis control
signals.
l An internal voltage divider outputting a 50:1 torch
voltage signal.
l An input for plasma arc start compatible with dry
contact closure to activate (the 1300PL uses an open
relay for torch off and closed relay for torch on)
l (Optional but recommended) Arc-ok output. Closed
contacts when arc is active.
©Tormach® 2025
Specifications subject to change without notice.
Page 36
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
3: SITE REQUIREMENTS
3.5 Plasma Source Requirements


---

## PDF Page 37

INSTALLATION
IN THIS SECTION, YOU'LL LEARN:
About the installation process required for this machine.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
4.1 Before You Begin
38
4.2 Installation Tools and Items
39
4.3 Move the Pallet
40
4.4 Unpack the Machine Crate
41
4.5 Remove Frame from Crate
42
4.6 Level the Machine Frame and Water Table
45
4.7 Install Side Panels and Cable Carriers
47
4.8 Attach the Cable Guard
49
4.9 Install Plasma Torch and Lead
50
4.10 Make Electrical Connections
52
4.11 Install Machine Arm and Connect Controller
53
4.12 Fill Water Table
55
4.13 Verify the Installation
56
4.14 Set Torch Home Position (G30)
61
4.15 Calibrate Initial Height Sensing
62
4.16 Set Up the PathPilot Controller
63


---

## PDF Page 38

4.1 BEFORE YOU BEGIN
1.
Inspect the item(s):
l Photograph any damage that may have occurred
during shipping.
l Note any damage on the delivery receipt before
signing for the shipment. If there is extensive visible
damage to the machine, refuse to accept the
shipment.
l Verify the received goods against the packing list.
If there is any damage or shortages, you must contact
Tormach within 30 days of receipt. Create a support
ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.
2.
If there are any items that have not yet been delivered,
we recommend waiting until you've received all
shipments to begin installing the machine. Depending on
the product and options ordered, the system may arrive
in one or more shipments of:
l Accessories (if applicable)
l Machine
Note: The machine system and large
accessories are sent by freight carrier.
Smaller accessories may be sent by parcel
service.
©Tormach® 2025
Specifications subject to change without notice.
Page 38
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.1 Before You Begin


---

## PDF Page 39

4: INSTALLATION
4.2 Installation Tools and Items
4.2 INSTALLATION TOOLS AND ITEMS
Before uncrating and installing your machine, collect the
following tools and items.
l Tin snips
l Flat-blade screwdriver
l Pliers
l 3mm, 4mm, 5mm, 6mm Allen key
l Dead-blow hammer
l Utility knife
l Adjustable crescent wrench
l Pallet jack
l Engine hoist, forklift, or gantry crane
l Lifting sling (2200lb / 1000kg minimum rating)
©Tormach® 2025
Specifications subject to change without notice.
Page 39
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 40

4.3 MOVE THE PALLET
Tools and Items Required
l Pallet jack
Shipments arrive in crates loaded on pallets, which the freight
carrier unloads onto the curb or loading dock.
WARNING! Transportation and Lift Hazard: Before
moving the machine, you must confirm that all
persons are clear of the area below the machine.
Qualified professionals must transport, lift, and move
the machine. Moving parts can entangle, pinch, or cut
you, causing death or serious injury.
Verify that the ground surface is smooth and clean of
debris, and then use a pallet jack to move the pallet(s) to
the desired installation location.
Note: If the ground is not smooth, you may
need to use a forklift (or similar lifting
equipment rated for uneven surfaces) to move
the pallet(s).
One side of the crate is labeled Lift from this side only.
Verify that there's at least 8 ft (2.5 m) of free space
behind this side of the crate so that you can lay the
machine down flat on the ground.
©Tormach® 2025
Specifications subject to change without notice.
Page 40
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.3 Move the Pallet


---

## PDF Page 41

4: INSTALLATION
4.4 Unpack the Machine Crate
4.4 UNPACK THE MACHINE CRATE
Tools and Items Required
l Pallet jack
l Flat-blade screwdriver
l Pliers
l Tin snips
l Safety eyewear that meets ANSI Z87+
l Work gloves
CAUTION! Sharp Objects Hazard: Before opening the
shipping crate, you must put on work gloves and
safety eyewear that meets ANSI Z87+. If you don't,
the shipping crate and steel straps could cut you,
causing serious injury.
4.4.1 Open the Crate
1.
Put on work gloves and eye protection.
2.
Pry up the tabs holding the lid on to the sides of the
crate. You may need to use pliers to fully straighten
them so the lid can be removed.
3.
With a helper, lift the lid off of the crate and set aside.
4.
Remove the screws from the base of the crate on all
four sides.
5.
Straighten the tabs holding one of the panels on to the
crate. The front panel is opposite the side of the crate
stenciled "Lift from this side only".
6.
Remove the front panel from the crate and set aside.
7.
With a helper, lift the remaining three sides from the
crate as a unit.
8.
Inspect the item(s):
l Photograph any damage that may have occurred
during shipping.
l Verify the received goods against the packing list.
If there is any damage or shortages, you must contact
Tormach within 30 days of receipt. Create a support
ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.
4.4.2 Unpack the Machine
1.
Cut the strap holding the electrical cabinet to the crate
and unwrap the plastic from it. Set it aside in a safe
area.
2.
Remove the Hypertherm control cable and package of
small parts from the crate.
3.
Unstrap and remove the cable tray and cable tray cover.
4.
Unstrap and remove the cable tray support brackets.
5.
Unstrap and remove all four legs.
6.
Remove the four side panels from underneath the
machine frame.
CAUTION! Be careful not to hit the torch lifter
head while removing panels from the crate.
7.
Remove all plastic overwrap from the machine frame
and water table except for the Y axis energy chain (it will
be unwrapped later).
©Tormach® 2025
Specifications subject to change without notice.
Page 41
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 42

4.5 REMOVE FRAME FROM CRATE
This potion of the installation requires at least two people.
Make sure that you have a partner before beginning the lifting
procedure.
Tools and Items Required
l Engine hoist or gantry crane rated for 825 lb (375 kg)
l Pallet jack
l 4x4 lumber (4ft long)
l Lifting strap
l Pry bar
l Allen keys
l Safety eye-wear that meets ANSI Z87+
l Work gloves
CAUTION! Lifting a machine can be dangerous if you
are unfamiliar with your equipment. Make sure to
know the load ratings of your lifting equipment and
hire a qualified rigging company if you are not
confident in its safe operation.
4.5.1 Lifting Frame
1.
If using an engine hoist, perform the following steps to
lift the crate for clearance underneath. If using a forklift
or gantry, proceed to the next step.
a.
Position a pallet jack under the machine and lift high
enough to place a 4x4 under the side supports.
b.
Place two 4x4 pieces on the pallet jack legs and
repeat the lift. Place another 4x4 under the side
supports.
c.
Repeat the above steps until the crate clears the front
legs of your engine hoist.
2.
Attach a sling to the top frame rail of the plasma. Make
sure the sling is positioned securely between two of the
raised accessory mounting pads to prevent side-to-side
slippage of the frame.
WARNING! Make sure that the lifting device
you are using is rated for the weight of the
machine frame - 825 lb (375 kg).
3.
Position your engine hoist, crane or forklift above the
sling and put light tension on it, just enough to hold the
frame upright when it is released.
©Tormach® 2025
Specifications subject to change without notice.
Page 42
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.5 Remove Frame from Crate


---

## PDF Page 43

4: INSTALLATION
4.5 Remove Frame from Crate
4.
Remove the top two bolts holding the A-frame support
of the crate to the machine frame.
5.
Remove the two bottom bolts connecting the crate
frame to the machine leg mounting pockets.
6.
Use your lifting device to put enough upwards pressure
on the machine that it will be fully supported. Use a pry
bar to push the lower leg mounting pockets off of the
crate mounting bosses.
7.
Lift the machine frame enough to clear the crate and use
a pallet jack to remove the crate from the area.
4.5.2 Installing Legs and Righting Machine
1.
Lower the bottom end of the frame down on to 4x4
blocks to protect the paint and clear the engine hoist
legs (if present).
2.
Install the top two legs on the machine on the end
supported by the lifting sling.
3.
Using gantry crane, slowly lower the top side of the
machine frame until the two legs are on the ground.
4.
Move the lifting sling to the same position on the
opposite end of the frame.
©Tormach® 2025
Specifications subject to change without notice.
Page 43
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 44

5.
Lift the remaining end of the frame off of the 4x4 blocks.
6.
Remove the two nuts (used to bolt to the crate frame)
from inside the leg mounting holes. Do not discard the
socket head cap screws attaching the nuts, these are
used to attach the last two legs.
7.
Install the last two legs.
©Tormach® 2025
Specifications subject to change without notice.
Page 44
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.5 Remove Frame from Crate


---

## PDF Page 45

4: INSTALLATION
4.6 Level the Machine Frame and Water Table
4.6 LEVEL THE MACHINE FRAME AND WATER
TABLE
Tools and Items Required
l Carpenter's Level
l Crescent Wrench
l Allen Key
The water table can be leveled at any time, but it is easiest to
do before the side panels have been installed.
4.6.1 Level the Machine Frame
1.
Loosen the jam nuts on all machine feet
2.
Place a carpenters level across the front frame rail of the
machine and level it side-to-side using the threaded
feet.
3.
Perform the same procedure on the rear of the machine,
leveling it side-to-side.
4.
Place the level one of the side rails of the machine
frame and level it front to rear.
You must adjust both front or rear feet the same number
of turns while doing this to avoid losing side-to-side level
from the step above.
5.
Tighten all the jam nuts for the machine feet.
4.6.2 Level the Water Table
Note: If the water tank ball valve is not already
installed, apply sealant tape to the water tank drain
threads and install the ball valve onto the water tank.
1.
Examine the level on the water table to determine if you
must make adjustments. The water table on the 1300PL
is supported on two adjustable rails, one on each side of
the table. The frame has grub screws to adjust the
height of these rails, leveling the water table to the
machine frame.
2.
Depending on what you determined in Step 1, do one of
the following:
l If the water table is level, proceed to the next section.
l If the water table isn't level, go to Step 3.
©Tormach® 2025
Specifications subject to change without notice.
Page 45
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 46

3.
Loosen the socket head cap screws holding the water
table support rails to the machine frame, just enough
that the rail can move vertically.
4.
By hand, move the torch carriage to the front left and
right corners of the water table. Measure the vertical
distance from the torch holder to the water table slats.
5.
Using the two grub screws underneath the machine
frame, lift the water table rails so that the front two
corners are level.
6.
Move the torch carriage to the rear of the water table
and repeat the procedure for the rear grub screws.
7.
Re-check the front corners and iterate the leveling
process if needed until your table-to-lifter height
matches in all four spots.
Note: Small variations in level will be
compensated for by torch height control. A
table leveled to within 1/4" (6 mm) will
perform well with THC.
8.
Tighten all the socket head cap screws holding the water
table rails to the frame.
©Tormach® 2025
Specifications subject to change without notice.
Page 46
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.6 Level the Machine Frame and Water Table


---

## PDF Page 47

4: INSTALLATION
4.7 Install Side Panels and Cable Carriers
4.7 INSTALL SIDE PANELS AND CABLE CARRIERS
1.
Install the front and rear panels using the M8 button
head cap screws and washers from the small parts
package. To prevent vibration, use one of the included
flat washers and then one lock washer for the top two
mounting screws on each of the panels.
2.
Install the left side panel (viewed from the front), with
the flanges overlapping the front and rear panels. The
right side panel will be left off for now to allow access
to the bottom of the machine.
Note that this side panel has a small cable carrier on the
inside of the frame to carry cables from the machine
arm to the electrical cabinet.
3.
Hang the cable track mounts on the two M8 button head
mounting screws.
4.
Remove the top cover from the cable track (4x M3
screws). It will be reinstalled after hanging the electrical
cabinet.
5.
Install the cable track to the mounts with four M6 button
head cap screws.
©Tormach® 2025
Specifications subject to change without notice.
Page 47
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 48

6.
Hang the electrical cabinet from five M6 screws, leaving
the one nearest the pass-through hole for electrical
wires off (this is where a ground wire will be attached).
©Tormach® 2025
Specifications subject to change without notice.
Page 48
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Side Panels and Cable Carriers


---

## PDF Page 49

4: INSTALLATION
4.8 Attach the Cable Guard
4.8 ATTACH THE CABLE GUARD
1.
Unwrap the flexible black cable guard from where it is
bundled on the side of the gantry and lay it out onto the
cable track above the electrical panel.
2.
Pass the bundle of connectors from the flexible cable
guard down through the rectangular cutout in the cable
track.
3.
Attach the cable guard to the cable track using 4 M6
socket head cap screws.
©Tormach® 2025
Specifications subject to change without notice.
Page 49
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 50

4.9 INSTALL PLASMA TORCH AND LEAD
1.
Install the cable retention loop into the base plate.
2.
Locate the ohmic torch wire inside the X-axis motor
cover. Pull it out and let it hang down for now.
3.
To prepare for the installation of the torch lead, remove
all of the side-to-side covers from one side of the
flexible cable guard using a flat-blade screwdriver.
4.
Remove the plasma power supply unit from its
packaging.
5.
Put the plasma power supply at the back left of the
machine. Then, locate the torch lead.
6.
Remove the brass gear from the torch body. Depending
on which torch you have, do one of the following:
l Unthread the body and slide the gear out of the
housing.
l Remove the two screws securing the gear.
7.
Using the manufacturer's instructions, install the torch
consumables.
8.
Install the plasma torch into the breakaway torch holder
using the two socket head screws. Only tighten these
screws enough to securely hold the torch, do not
overtighten.
Tip! We recommend positioning the torch nose
about 1" below the Z-axis cover plate to start.
9.
Attach the ohmic probing spade connector to your torch
cap.
10.
Install plasma torch lead into the cable guard from the X
carriage to the electrical cabinet and pass it through the
rectangular access hole to bottom of track.
Note: Do not try to pass the torch lead through
the stepped section between the Y and X axis
cable guards. Simply run the torch lead along
the outside.
11.
Plug the torch leads into the plasma power supply.
12.
Plug in the ground cable, and route the loose end of the
cable under the back of the machine and up to the water
table.
©Tormach® 2025
Specifications subject to change without notice.
Page 50
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.9 Install Plasma Torch and Lead


---

## PDF Page 51

4: INSTALLATION
4.9 Install Plasma Torch and Lead
13.
Connect the included Hypertherm control cable to the
electrical cabinet and plasma source (this cable is a 14-
pin CPC connector on one end and a 7-pin threaded -body
connector on the other). For more information on this
cable see "Plasma Source Control" (page 70).
14.
Reinstall the cable guard covers that you removed in
Step 3.
©Tormach® 2025
Specifications subject to change without notice.
Page 51
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 52

4.10 MAKE ELECTRICAL CONNECTIONS
1.
Locate the cable cover with the integrated E-Stop and
Reset button. The cable for the Reset button and E-Stop
contains a green and yellow ground lead with a ring
terminal on the end. Attach this ground lead for the
reset panel to the fourth M6 mounting screw on the
electrical cabinet that you left unpopulated earlier.
2.
Pass the connector for the reset panel down through
cable track.
3.
Install the reset panel / cable cover using four M4 socket
head cap screws.
Note: The two inboard screws are slightly
longer.
4.
Plug in all connectors at rear of cabinet, following the
"Connectors Reference" (page 69) guide in the "System
Basics" (page 65) section.
5.
Pass the ground wire through the hole in the side panel,
and then connect it to the ground block on the underside
of the water table.
©Tormach® 2025
Specifications subject to change without notice.
Page 52
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.10 Make Electrical Connections


---

## PDF Page 53

4: INSTALLATION
4.11 Install Machine Arm and Connect Controller
4.11 INSTALL MACHINE ARM AND CONNECT
CONTROLLER
1.
Bolt your machine arm to the mounting pad on either
the left or right hand leg of the machine.
2.
Install the monitor, keyboard tray and controller mount
on the machine arm.
3.
Mount the controller PC to the back of the monitor using
the PathPilot Controller VESA Mount (PN 50382).
4.
Connect a keyboard and mouse to the controller PC.
5.
Run the Ethernet cable included in your machine owner's
kit down from the controller and through the hole in the
front panel of the plasma table.
6.
Connect the Ethernet cable to the port on the rear of the
electrical cabinet.
7.
Run a power cable from the rear of the electrical cabinet
to the power supply for the controller PC in the same
way. Use the block of three IEC ports designated for
Accessory Power in "Connectors Reference" (page 69).
Repeat for the display's power cable.
©Tormach® 2025
Specifications subject to change without notice.
Page 53
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 54

8.
Now that all connections have been made inside the
machine frame, the right side panel can be installed.
Before installing the panel, check that the drain valve on
the water table is fastened securely and in the closed
position.
9.
Install all end panels on the frame rails.
©Tormach® 2025
Specifications subject to change without notice.
Page 54
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.11 Install Machine Arm and Connect Controller


---

## PDF Page 55

4: INSTALLATION
4.12 Fill Water Table
4.12 FILL WATER TABLE
Tools and Items Required
l Hose or bucket
l Plasma cutting fluid (rust inhibitor such as GreenCut or
similar)
A properly filled water table is critical for safe operation of the
1300PL. The water table traps a majority of the metal
particulates released in the cutting process and keeping it
filled is important for maintaining good air quality in your shop
space.
1.
Ensure that the drain valve on the bottom of the water
table is in the closed position.
2.
Check that the two lock bolts that hold the table in place
on the front-to-back tracks are in place.
3.
Using a hose or buckets, fill the table with tap water
until the level is about 1" below the top of the slats.
4.
Add cutting fluid to the water to inhibit corrosion. Use
the ratio recommended by the cutting fluid
manufacturer. For reference, full water table capacity on
the 1300PL is 59 US gallons (223 liters).
5.
Top the water table off to 0.5" below the top of the slats
after adding cutting fluid if desired.
©Tormach® 2025
Specifications subject to change without notice.
Page 55
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 56

4.13 VERIFY THE INSTALLATION
To properly validate the core installation of your machine, you
must understand how to power on and off the machine and
use the controls.
Complete the following steps in the order listed:
4.13.1 Check Machine Breakers
56
4.13.2 Power on the Machine
56
4.13.3 Verify Axes Function
57
4.13.4 Check Belt Tension
58
4.13.5 Testing Plasma Source Control
58
4.13.6 Testing Ohmic Probing
58
4.13.7 Testing Torch Breakaway
59
4.13.8 Power off the Machine
59
4.13.1 Check Machine Breakers
Check that all breakers in the electrical cabinet are switched on
(up position).
4.13.2 Power on the Machine
1.
Use a multimeter to verify that the electrical service in
your location meets the following requirements. If your
location does not meet these requirements, do not
install the machine. Instead, you must consult with a
local electrician about your options.
l Primary Power Required Single-Phase 230 Vac,
50/60 Hz
l Recommended Circuit Amperage 20 A breaker
2.
Connect the machine's mains power cable to the verified
electrical service.
3.
Find the Main Disconnect switch, and then remove the
hang tag.
Figure 4-1: The Main Disconnect switch on the side of
the machine's electrical cabinet.
4.
Turn the Main Disconnect switch to ON.
Figure 4-2: Example of the Main Disconnect switch in
the On position.
Mains power is now connected to the machine.
5.
Push the Power button on the PathPilot controller, if it's
not already powered on.
6.
Follow the on-screen instructions to configure the
PathPilot operating system and PathPilot controller.
When configuration is complete, the PathPilot operating
system launches.
Note: After you first configure PathPilot, the
operating system automatically launches
whenever it's powered on.
©Tormach® 2025
Specifications subject to change without notice.
Page 56
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.13 Verify the Installation


---

## PDF Page 57

4: INSTALLATION
4.13 Verify the Installation
7.
Depending on which monitor you have, do one of the
following:
a.
Standard Monitor Go to the next step.
b.
Touch Screen Monitor You must first make sure
that the monitor is configured and calibrated. From
the PathPilot interface, in the MDI Line DRO field,
type ADMIN TOUCHSCREEN. Then, select the Enter
key, and follow the on-screen instructions.
8.
Rotate the Emergency Stop button one-quarter turn
clockwise to release it.
Figure 4-3: Emergency Stop button.
9.
Push the blue Reset button to enable the machine.
Figure 4-4: Reset button.
The axis drives are now powered on.
10.
Verify that the blue Reset LED comes on. From the
PathPilot interface, on the Status tab, verify that the
Machine OK light changes from yellow to green.
Once both are on, the machine is powered on and ready
to operate.
Figure 4-5: Machine OK light on the Status tab.
11.
Select Reset.
Figure 4-6: Reset button.
This initializes the connection between the machine and
controller.
4.13.3 Verify Axes Function
You must confirm that the axes correctly operate.
1.
Reference the axes: from the PathPilot interface, select
Ref Z, Ref X and Ref Y.
Figure 4-7: Ref Z, Ref X, and Ref Y buttons.
The machine moves to the reference position.
2.
Use the keyboard to verify axes motion:
l Select the Right Arrow key and then the Left Arrow
key.
The torch carriage moves right (X+), then left (X-).
l Select the Up Arrow key and then the Down Arrow
key.
The gantry moves toward the back end of the table
(Y+), then toward the front (Y-).
l Select the Page Down key and then the Page Up key.
The torch lifter moves down (Z-), then up (Z+).
©Tormach® 2025
Specifications subject to change without notice.
Page 57
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 58

3.
If applicable, verify the optional Jog Shuttle:
l Press any axis button on the Jog Shuttle — X, Y, Z, or
A — to select an axis.
Figure 4-8: Functions on the optional Jog Shuttle.
From the PathPilot interface, on the Main tab, the
corresponding green Axis light comes on.
Figure 4-9: Axis lights.
l Turn the Jog Shuttle Ring in any direction to move the
selected axis, then turn it in the opposite direction to
reverse the direction.
4.13.4 Check Belt Tension
Since brand new drive belts have a tendency to stretch slightly
after first use, your Y-axis drive belts might need re-tensioning.
If you notice that the Y axis gantry seems to have excessive
backlash or that the servo is struggling to hold a consistent
position, follow the maintenance procedure for "Adjust Belt
Tension" (page 163)
If Y-axis gantry movement seems normal and there is no
noticeable backlash belt tension adjustment can be deferred
until the time defined in the "Maintenance Schedules"
(page 163).
4.13.5 Testing Plasma Source Control
1.
Using the "Connectors Reference" (page 69) verify that
the Hyperthem control cable is connected to the correct
spot on the rear of your electrical cabinet.
2.
Jog the torch to a location several inches above the
water table so that you can safely test the arc.
3.
Activate the plasma source and create a pilot arc by
pressing the TEST TORCH button in PathPilot.
4.
Verify that your plasma source activates and creates a
pilot arc (you may have to press the button twice to
bypass the "warning puff" function on some plasma
sources).
5.
While the pilot arc is active, watch the "Torch Voltage"
readout at the bottom of your control screen.
You should see an open-circuit voltage of above 100V. If
you do not see a voltage reading, follow the "Voltage
Feedback" (page 173) section of the Troubleshooting
guide.
4.13.6 Testing Ohmic Probing
1.
Make sure that the ohmic probing spade connector is
connected to your torch cap.
©Tormach® 2025
Specifications subject to change without notice.
Page 58
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.13 Verify the Installation


---

## PDF Page 59

4: INSTALLATION
4.13 Verify the Installation
Note: You must be using shielded consumables
where the torch cap extends below the nozzle.
If the nozzle contacts the workpiece before the
torch cap, ohmic probing will not work.
2.
Switch to the Status tab on your PathPilot controller and
locate the OHMIC TOUCH led. It should be off initially.
3.
Touch the ground clamp lead from the plasma source to
the torch cap. You should see the LED switch to green.
If you your ohmic probe input is not responding the way
described above, check the "Ohmic Probing" (page 168)
4.13.7 Testing Torch Breakaway
Your Tormach 1300PL is equipped with torch breakaway
detection to stop motion in the event that a tip-up during
cutting causes a collision with the torch. A proximity sensor is
located in the touch mounting base to detect when the
mounting clamp has been knocked off.
1.
Make sure that the machine is on and PathPilot is
running.
2.
Switch to the Status tab on your PathPilot controller and
locate the BREAKAWAY SWITCH led. It should be off
initially.
3.
Pull the torch clamp away from the base. You should see
the LED light up when the torch clamp is removed and
extinguish when it is replaced.
4.13.8 Power off the Machine
1.
Push the Emergency Stop button to lock it into the
disabled position.
©Tormach® 2025
Specifications subject to change without notice.
Page 59
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 60

Figure 4-10: Emergency Stop button.
With the Emergency Stop button in the disabled position
all motion function stops, the Reset button is disabled ,
and the blue Reset LED goes off. From the PathPilot
interface, on the Status tab, the Machine OK light
illuminates yellow.
2.
From the PathPilot interface, select Exit.
3.
When prompted, select OK.
4.
Once the PathPilot interface indicates that it's safe to
power off the machine, turn the Main Disconnect switch
to OFF.
Figure 4-11: Example of the Main Disconnect switch
in the Off position.
Mains power is disconnected from the machine.
©Tormach® 2025
Specifications subject to change without notice.
Page 60
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.13 Verify the Installation


---

## PDF Page 61

4: INSTALLATION
4.14 Set Torch Home Position (G30)
4.14 SET TORCH HOME POSITION (G30)
The plasma torch will move up in Z to its home position (G30)
between each cut, when the M205 command is executed.
It is important to set the G30 position before running the
machine, to ensure that the torch has a known position to
return to.
1.
Bring the machine out of E-Stop and reference all axes.
2.
Move the torch to a safe Z position, higher than the slats
of the water table.
3.
Click the Offsets tab in PathPilot.
4.
Click the "Set G30" button to save the current torch
position.
In the future, when you execute an M205 or G30 command in
G-Code, the torch will return to this height.
©Tormach® 2025
Specifications subject to change without notice.
Page 61
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 62

4.15 CALIBRATE INITIAL HEIGHT SENSING
4.15.1 Set Ohmic Probing Sensitivity
The ohmic probing system on the 1300PL relies on a calibrated
resistance value between the torch cap and the workpiece. If
you do not calibrate your ohmic probe, you may find that it is
triggered by water on the work piece or inside the torch cap.
1.
Open the electrical cabinet and identify the Tormach
THCT Board (PN 39096).
2.
Select a piece of sheet metal to use as a test workpiece.
Connect it to the ground clamp.
3.
Jog the torch downwards in Z until the torch cap contacts
the workpiece. Watch LED D8 on the bottom left of the
board. If the LED lights up when the workpiece contacts
the torch cap, the THCT board is measuring contact
between the cap and ground as intended.
4.
If the LED did not light up, identify adjustment screw
RV1 on the THCT board (indicated by the arrow in the
image above). Increase the sensitivity by rotating the
screw clockwise, 1/16th turn at a time until the
workpiece is detected.
5.
Splash a small puddle of water onto your workpiece. Jog
the torch cap down until it is contacting the water but
not the workpiece itself. If the LED is on, your THCT
sensitivity is too high. Decrease the sensitivity 1/16th of
a turn at a time until the LED goes out.
If you have trouble adjusting the ohmic probing system or the
LED never comes on, go to "Ohmic Probing" (page 168) in the
Troubleshooting section.
4.15.2 Set Physical Touch Switch Trigger Depth
The torch lifter head on the 1300PL contains a spring-loaded
switch to serve as a backup for ohmic probing or to be used
when ohmic probing is inconvenient. The spring compresses a
certain distance in Z before triggering. This distance must be
measured and input on the Settings tab in PathPilot.
Use the procedure in "Plasma Settings Reference" (page 122)
to measure and set the trigger depth.
©Tormach® 2025
Specifications subject to change without notice.
Page 62
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.15 Calibrate Initial Height Sensing


---

## PDF Page 63

4: INSTALLATION
4.16 Set Up the PathPilot Controller
4.16 SET UP THE PATHPILOT CONTROLLER
Before operating your machine, configure in PathPilot the date,
time, keyboard language, and — if applicable — the optional
Touch Screen Kit (PN 35575).
4.16.1 Specify the Date and Time
1.
From the PathPilot interface, on the Main tab, in the
MDI Line DRO field, type ADMIN DATE. Then select the
Enter key.
The Time and Date Settings dialog box displays.
Note: Before using any ADMIN commands, you
must release the Emergency Stop. Rotate the
Emergency Stop button one quarter turn to
release it.
2.
Complete the fields in the Time and Date Settings dialog
box, and then select Close.
4.16.2 Specify the Keyboard Language
By default, the keyboard language is set to English.
To specify a different keyboard language:
1.
From the PathPilot interface, on the Main tab, in the
MDI Line DRO field, type ADMIN KEYBOARD. Then
select the Enter key.
The Keyboard Preferences dialog box displays.
2.
Select the Layouts tab and select the desired language.
If the language you want is not listed, select Add to
specify the language. Then, select Close.
4.16.3 Configure the Optional Touch Screen Kit
Before using a touch screen, you must make sure that it's
configured and calibrated. To calibrate it:
1.
From the PathPilot interface, on the Main tab, in the
MDI Line DRO field, type ADMIN TOUCHSCREEN. Then
select the Enter key.
2.
Follow the on-screen instructions.
4.16.4 Update PathPilot
We're constantly updating PathPilot to bring you more
features. Before operating your machine, update to the latest
version.
1.
Confirm that the PathPilot controller is powered on and
out of Reset mode.
2.
Downloading and installing an update file requires an
Internet connection. From the Status tab, confirm that
the Internet button LED light is on. (To configure the
network, select the LED light.) Then, select Update.
Figure 4-12: Update button on the Status tab.
3.
From the Software Update dialog box, select Check
Online.
Figure 4-13: Software Update dialog box.
4.
Select Install.
Figure 4-14: Install button on the Software Update
dialog box.
The update file is downloaded, and a notification dialog
box displays.
5.
From the dialog box, select OK.
The update file is installed on the PathPilot controller.
6.
Follow the on-screen instructions to restart the PathPilot
controller.
©Tormach® 2025
Specifications subject to change without notice.
Page 63
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 64

[No extractable text; see original PDF page.]


---

## PDF Page 65

SYSTEM BASICS
IN THIS SECTION, YOU'LL LEARN:
About the main components of the machine and how it moves.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
5.1 System Reference
66
5.2 Basic Controls Reference
68
5.3 Connectors Reference
69
5.4 Plasma Source Control
70


---

## PDF Page 66

5.1 SYSTEM REFERENCE
5.1.1 Water Table
The machine table is 51.2" x 51.2" (1300 mm x 1300 mm). It
can be moved backwards in the frame by up to 10" (250 mm)
to provide an open area for cutting large or bulky objects that
do not fit on top of the water table (items like large pipes or
weldments).
Note: Make sure you do not forget to connect the
ground clamp to the workpiece when cutting
something that is too large for the water table.
The water table has an internal depth of about 5.2" (132 mm)
and a maximum water capacity of 59 US gallons (223 liters).
Don't put more than 750 lb (340 kg) on the machine table
(excluding water). Always verify that the workpiece and work-
holding devices are centered on the machine table.
Always lock the water table in the forward or backwards
position before running a program.
5.1.2 Z Torch Head
The Z Torch head is responsible for control of torch height
during cutting. It also contains the magnetic torch breakaway
head and the proximity sensor required to detect a breakaway.
The Z head can travel 3.9" (100 mm) vertically, which allows
for cutting bulky items or even changing the height of the slats
in the water table if cutting conditions require it.
The Z head is also responsible for material touch-off at the
start of a cut. Touch-off on the material can occur one of two
ways:
l Ohmic Touchoff
l Physical Touch Switch
Ohmic Touchoff
Ohmic Touchoff is a sensitive and precise method of Z
positioning for initial cut height. The cap on the end of the
torch is made of a conductive material (usually copper) that is
linked to the machine's control system through a removable
lead.
When the head touches the workpiece during the initial
probing move before a cut, continuity between the torch cap
and ground (through the plasma ground clamp) is detected by
the control system.
This system works well for thin workpieces like 20 ga. (1 mm)
and thinner sheet metal, where the weight of the torch during
probing could otherwise deform the sheet metal before the
probe switch triggers.
Physical Touch Switch
The physical touch switch acts as a backup to the ohmic touch
system. It consists of a micro-switch inside the lifter head that
detects when the spring-loaded lead nut on the Z lifter is
pushed back by contact with the workpiece.
The physical touch switch will automatically be used when the
ohmic touch switch does not trigger first. This can be useful in
situations like cutting painted metal, where no continuity with
the workpiece is possible.
©Tormach® 2025
Specifications subject to change without notice.
Page 66
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
5: SYSTEM BASICS
5.1 System Reference


---

## PDF Page 67

5: SYSTEM BASICS
5.1 System Reference
Note: Even though the physical touch switch allows
you to touch off on painted metal, you will still need
to grind away enough paint for the ground clamp to
make contact!
©Tormach® 2025
Specifications subject to change without notice.
Page 67
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 68

5.2 BASIC CONTROLS REFERENCE
To safely and effectively operate your machine, you must
become familiar with how it moves. The machine has two
forms of basic controls: machine controls and the PathPilot
interface.
5.2.1 Machine Controls
The following controls energize the machine's control
electronics:
l The Main Disconnect switch, located on the front of the
electrical cabinet.
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
l The operator box — which contains the blue Reset
button and the red Emergency Stop button — located on
the front of the machine.
When pushed in, the Emergency Stop button interrupts
power to the axis drives, and stops the machine’s
motion. When the Emergency Stop button is twisted out,
press the Reset button to enable the machine, allowing
axis motion. The Reset button’s LED turns on when the
machine is enabled and the axis drives receive power.
5.2.2 PathPilot Interface
PathPilot is the primary means by which you interact with your
machine. PathPilot controls all of the automatic motion of the
machine axes and spindle, as well as some accessories. The
PathPilot control system consists of:
l Controller Arm
o
Controller
o
(Optional)Jog Shuttle
o
Keyboard
o
Monitor or (Optional)Touch Screen Kit
o
Mouse
©Tormach® 2025
Specifications subject to change without notice.
Page 68
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
5: SYSTEM BASICS
5.2 Basic Controls Reference


---

## PDF Page 69

5: SYSTEM BASICS
5.3 Connectors Reference
5.3 CONNECTORS REFERENCE
Figure 5-1: Connector panel on the upper rear of the
electrical cabinet.
1.
X-Axis Motor Power Connector
Two pin power connector for the X-axis servo.
2.
Y-Axis Motor Power Connector
Two pin power connector for the Y-axis servo.
3.
Ohmic Cap Connector
Input for the ohmic probing circuit. Also connects
machine grounds to the cabinet ground.
4.
X-Axis Motor Control Connector
Eight pin control connector for the X-axis servo.
5.
Y-Axis Motor Control Connector
Eight pin control connector for the Y-axis servo.
6.
Limit Switch Inputs
Limit switch inputs from the Z Touch Lifter. Also contains
the input for the torch breakaway and touch switches.
7.
Z-Axis Motor Connector
The Z-Axis stepper motor output.
8.
A-Axis Motor Connector
The A-axis motor connector is used to connect to a rotary
4th axis (used for indexing or continuous 4th axis
machining).
9.
24v Accessory Output
24v outputs used to control things like pneumatic
solenoids for air engravers or lifters.
10.
Emergency Stop Input
Input cable from the operator panel containing the reset
button and emergency stop.
11.
Plasma Source Control
Control signals for the plasma source. Outputs an arc on-
off signal. Torch voltage and arc-ok feedback are
received here. Reference "Plasma Source Control" (on
the next page)
12.
Accessory Input
The accessory input is used to connect accessories (like
probes, tool setters, and tool touch plates) to the
machine.
13.
Controller Communications Port
The controller communications port is used to connect
the PathPilot controller to the machine. The controller
communications port (and the cable that connects to it)
sends all communication between the PathPilot
interface and the machine.
Figure 5-2: Connector panel on the lower rear of the
electrical cabinet.
14.
Switched Power Port
The IEC-320 switched power port is used to supply power
to accessories that can be controlled by PathPilot such as
a downdraft extractor fan. This outlet outputs the same
voltage as the machine input voltage (230 VAC).
15.
Accessory Power Port
The IEC-320 accessory power ports are used to supply
power to peripheral accessories (like the PathPilot
controller and monitor). These outlets output the same
voltage as the machine input voltage (230 VAC).
16.
Electrical Power Input
Input power lead for the electrical cabinet.
©Tormach® 2025
Specifications subject to change without notice.
Page 69
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 70

5: SYSTEM BASICS
5.4 Plasma Source Control
©Tormach® 2025
Specifications subject to change without notice.
Page 70
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
5.4 PLASMA SOURCE CONTROL
The 1300PL uses a 7-pin connector for controlling the plasma source. A 7-pin to 14-pin cable is included with your machine to control
Hypertherm plasma sources.
The pin-out of the 7-pin connector on the electrical cabinet is as follows:
Pin
Type
Signal
Notes
1
Output
Start Plasma
Dry contact closure. Closed relay signals plasma on.
2
3
Input
Arc Voltage -
An internal 50:1 voltage divider in the plasma source is required.
4
Arc Voltage +
5
Input
Arc-Ok
Expects dry contact closure at plasma source. Closed contacts signal arc-ok.
6
7
Not Used
The pin-out of the 14-pin Hypertherm connector on the end of the cable is as follows:
Pin
Type
Signal
Notes
3
Output
Start Plasma
Dry contact closure. Closed relay signals plasma on.
4
5
Input
Arc Voltage -
An internal 50:1 voltage divider in the plasma source is required.
6
Arc Voltage +
12
Input
Arc-Ok
Expects dry contact closure at plasma source. Closed contacts signal arc-ok.
14


---

## PDF Page 71

PATHPILOT INTERFACE
OVERVIEW
IN THIS SECTION, YOU'LL LEARN:
How PathPilot is organized, and where you can access each tool or feature.
CONTENTS
6.1 About PathPilot
72
6.2 Notebook Section
73
6.3 Persistent Controls
80
6.4 Keyboard Shortcuts
84
6.5 Manage PathPilot Versions
85


---

## PDF Page 72

6.1 ABOUT PATHPILOT
PathPilot is a combination hardware and software system that
you use to control your machine. The controller hardware runs
the PathPilot software.
The PathPilot interface is divided into sections: the Notebook
section is in the top half of the screen, and the Persistent
Controls section is in the bottom half.
Figure 6-1: Sections in the PathPilot interface.
©Tormach® 2025
Specifications subject to change without notice.
Page 72
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.1 About PathPilot


---

## PDF Page 73

6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section
6.2 NOTEBOOK SECTION
Figure 6-2: Notebook section.
The areas displayed in the Notebook section change depending
on the activity that you're doing. Activities are grouped into the
following tabs:
6.2.1 Main Tab
74
6.2.2 File Tab
75
6.2.3 Settings Tab
76
6.2.4 Offsets Tab
77
6.2.5 Conversational Tab
78
6.2.6 Status Tab
79
©Tormach® 2025
Specifications subject to change without notice.
Page 73
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 74

6.2.1 Main Tab
Figure 6-3: Main tab.
By default, the Main tab is active when you power on the
PathPilot controller. From the Main tab, you can do the
following activities:
l Access G-code files that are already loaded into
PathPilot, and open or close them.
For information, see "Access Recent G-Code Files"
(page 89); "Close the Current Program" (page 89).
l Send G-code commands directly to the machine using
the Manual Data Input (MDI) Line DRO field.
For information, see "Manually Enter Commands"
(page 113).
l In a G-code program, do tasks like finding specific terms
in the code, reading the code, or viewing the generated
tool path.
For information, see "Search in the Code" (page 90);
"Expand the G-Code Tab" (page 89); "Change the View
of the Tool Path Display" (page 91).
©Tormach® 2025
Specifications subject to change without notice.
Page 74
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section


---

## PDF Page 75

6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section
6.2.2 File Tab
Figure 6-4: File tab.
From the File tab, you can do the following activities:
l Transfer G-code files into the PathPilot controller.
For information, see "Transfer Files to and From the
Controller" (page 88).
l Edit G-code files.
For information, see "Edit G-Code with a Text Editor"
(page 89).
l Load .nc files into PathPilot to run a program.
For information, see "Load G-Code" (page 88).
l Move files within the system.
For information, see "Preview G-Code Files" (page 88);
"Manage System Files" (page 117).
©Tormach® 2025
Specifications subject to change without notice.
Page 75
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 76

6.2.3 Settings Tab
Figure 6-5: Settings tab.
From the Settings tab, you can do the following activities:
l Change the network name with which you're using
PathPilot.
For information, see "Change the Network Name"
(page 97).
l Change the screen's layout orientation (landscape or
portrait).
For information, see "Change the Screen Orientation"
(page 97).
l Configure PathPilot for the accessories you're using.
For information, see "Enable the On-Screen Keyboard"
(page 100); "Enable the USB M-Code I/O Interface Kit"
(page 101); "Use a USB Camera" (page 101).
l Specify the way in which you want to use a G30 move.
For information, see "Limit G30 Moves" (page 100).
l Identify the available G-code modes that you can use.
For information, see "View Available G-Code Modes"
(page 106).
l Adjust plasma settings.
For information, see "Set Torch Touch Trigger Depth"
(page 98); "Set Minimum Touchoff Spacing" (page 99);
"Enable Ohmic Touchoff" (page 99); "Enable Torch
Height Control" (page 99); "Enable Arc-Ok Checking"
(page 99).
©Tormach® 2025
Specifications subject to change without notice.
Page 76
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section


---

## PDF Page 77

6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section
6.2.4 Offsets Tab
Figure 6-6: Offsets tab.
From the Offsets tab, you can do the following activities:
l Make and restore backup files of your settings.
For information, see "Create Backup Files" (page 117);
"Restore Backup Files" (page 118).
l Import and export .csv files of your tool table.
For information, see "Import and Export the Tool Table"
(page 119).
l Preset a G30 position.
For information, see "Use a G30 Position" (page 113).
l Read the currently programmed work offsets.
For information, see "View Work Offsets" (page 105).
©Tormach® 2025
Specifications subject to change without notice.
Page 77
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 78

6.2.5 Conversational Tab
Figure 6-7: Conversational tab.
From the Conversational tab, you can do the following
activities:
l Import a .dxf file.
For information, see "Import a DXF File" (page 92).
©Tormach® 2025
Specifications subject to change without notice.
Page 78
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section


---

## PDF Page 79

6: PATHPILOT INTERFACE OVERVIEW
6.2 Notebook Section
6.2.6 Status Tab
Figure 6-8: Status tab.
From the Status tab, you can do the following activities:
l View diagnostic machine information.
l Read error messages.
l Configure your internet connection.
For information, see "Enable an Internet Connection"
(page 96).
l Update or install a previous version of PathPilot.
For information, see "Manage PathPilot Versions"
(page 85).
©Tormach® 2025
Specifications subject to change without notice.
Page 79
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 80

6.3 PERSISTENT CONTROLS
Figure 6-9: Persistent Controls section.
The areas that display in the Persistent Controls section don't
change (unlike the Notebook section). They display regardless
of the activity you're doing. Activities are grouped into the
following areas:
6.3.1 Program Control Area
81
6.3.2 Position Status Area
82
6.3.3 Manual Control Area
83
©Tormach® 2025
Specifications subject to change without notice.
Page 80
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.3 Persistent Controls


---

## PDF Page 81

6: PATHPILOT INTERFACE OVERVIEW
6.3 Persistent Controls
6.3.1 Program Control Area
Figure 6-10: Program Control area.
From the Program Control area, you can do the following
activities either before starting or while running a G-code
program:
l Reset the machine.
For information, see "Bring the Machine Out of Reset"
(page 107).
l Start, stop, or pause a G-code program.
For information, see "Start a Program" (page 109); "Stop
Machine Motion" (page 109); "Use the Feed Hold
Function" (page 111).
l Use overrides to change the feed rate, voltage, and
maximum velocity.
For information, see "Use the Feed Rate Override
Function" (page 111); "Use the Maxvel Override
Function" (page 112); "Use the Voltage Override
Function" (page 112).
l Manually control a G-code program.
For information, see "Use M01 Break Mode" (page 112);
"Use Single Block Mode" (page 112).
©Tormach® 2025
Specifications subject to change without notice.
Page 81
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 82

6.3.2 Position Status Area
Figure 6-11: Position Status area.
From the Position Status area, you can do the following
activities either before starting or after running a G-code
program:
l Reference the machine axes.
For information, see "Reference the Machine"
(page 108).
l Create work offsets.
For information, see "Set Work Offsets" (page 105).
l Understand how you're jogging the machine.
For information, see "View the Active Axis to Jog"
(page 107); "View the Current Machine Position"
(page 108); "View the Distance to Go" (page 110).
l Quickly determine which G-code modes are active.
For information, see "View the Active G-Code Modes"
(page 109).
©Tormach® 2025
Specifications subject to change without notice.
Page 82
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.3 Persistent Controls


---

## PDF Page 83

6: PATHPILOT INTERFACE OVERVIEW
6.3 Persistent Controls
6.3.3 Manual Control Area
Figure 6-12: Manual Control area.
From the Manual Control area, you can do the following
activities either before starting or after running a G-code
program:
l Move the machine axes.
For information, see "Jog the Machine" (page 107).
l Use automatic look-up tables to find feed rate,
amperage, pierce parameters, and torch height control
voltage for the material you're cutting.
For information, see "Use the AutoFS Material Picker"
(page 128).
©Tormach® 2025
Specifications subject to change without notice.
Page 83
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 84

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
Alt+R
Start a program
Esc
Stop a program
Shift+Alt+E
From the Main tab, quickly edit a G-code
program with conversational programming
Space Bar
Feed hold the machine
©Tormach® 2025
Specifications subject to change without notice.
Page 84
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.4 Keyboard Shortcuts


---

## PDF Page 85

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
Figure 6-13: Update button on the Status tab.
3.
From the Software Update dialog box, select Check
Online.
Figure 6-14: Software Update dialog box.
4.
Select Install.
Figure 6-15: Install button on the Software Update
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
Figure 6-16: Update button on the Status tab.
6.
From the Software Update dialog box, select Browse.
Figure 6-17: Software Update dialog box.
©Tormach® 2025
Specifications subject to change without notice.
Page 85
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 86

7.
From the Browse dialog box, select USB.
Figure 6-18: Browse dialog box.
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
Figure 6-19: Update button on the Status tab.
3.
From the Software Update dialog box, select Browse.
Figure 6-20: Software Update dialog box.
4.
From the Browse dialog box, select Previous Versions.
Figure 6-21: Browse dialog box.
5.
Select the desired update file, and then select Update.
The update file is installed on the PathPilot controller.
6.
Follow the on-screen instructions to restart the PathPilot
controller.
©Tormach® 2025
Specifications subject to change without notice.
Page 86
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
6: PATHPILOT INTERFACE OVERVIEW
6.5 Manage PathPilot Versions


---

## PDF Page 87

PATHPILOT TOOLS AND
FEATURES
IN THIS SECTION, YOU'LL LEARN:
How to use PathPilot, depending on the activity that you want to do.
CONTENTS
7.1 Create and Load G-Code Files
88
7.2 Machine Settings and Accessories
96
7.3 Set Up G-Code Programs
105
7.4 Run G-Code Programs
107
7.5 Control G-Code Programs
111
7.6 System File Management
117


---

## PDF Page 88

7.1 CREATE AND LOAD G-CODE FILES
To get started with PathPilot, you must first load or create a G-
code file.
7.1.1 Load G-Code
88
7.1.2 Edit G-Code with a Text Editor
89
7.1.3 Read G-Code
89
7.1.4 Import a DXF File
92
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
Select Load G-Code.
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
©Tormach® 2025
Specifications subject to change without notice.
Page 88
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 89

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
7.1.2 Edit G-Code with a Text Editor
You can edit .nc files that are on the PathPilot controller. If the
.nc file is in the USB Files window, you must first transfer it to
the controller; go to "Transfer Files to and From the Controller"
(on the previous page).
To edit G-code with a text editor:
1.
From the Controller Files window, highlight the .nc file
and select Edit G-code.
Figure 7-7: Edit G-code button on the File tab.
The file opens in a text editor.
2.
Make and save the appropriate changes to the file.
3.
Close the text editor.
Tip! To quickly edit an already loaded G-code
program from the Main tab, you can use a keyboard
shortcut: Shift+Alt+E.
7.1.3 Read G-Code
Once your G-code file is loaded into PathPilot, you can read it
in the following ways:
Expand the G-Code Tab
89
Search in the Code
90
Set a New Start Line
91
Change the View of the Tool Path Display
91
Expand the G-Code Tab
You can change the size of the G-Code tab if you need more
space to view the code. For more information on using the G-
Code tab, see "About the G-Code Tab" (on the next page).
To expand the G-Code tab:
©Tormach® 2025
Specifications subject to change without notice.
Page 89
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 90

Select the Window Expander.
Figure 7-8: Window Expander on the Main tab.
The Tool Path display shrinks.
About the G-Code Tab
The G-Code tab displays the code of the currently loaded
program file. Use the scroll bars to view the entire file. You
can make the G-Code tab larger. For information, see "Expand
the G-Code Tab" (on the previous page).
PathPilot highlights certain lines of code of interest. When
running a G-code program in single block mode, there may be
as many as two lines of G-code highlighted, both with a
different color:
l Green Line Indicates the start line (the line from which
PathPilot starts the program).
To change the start line, go to "Set a New Start Line" (on
the next page).
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
Figure 7-9: Search for a text command.
l FEED. PathPilot searches for instances of the actual
word Feed and any F G-code command.
Figure 7-10: Search for a feed command.
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
©Tormach® 2025
Specifications subject to change without notice.
Page 90
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 91

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
Set a New Start Line
The start line (the line from which PathPilot starts the
program) is, by default, the first line of code in the program.
To set a new start line:
1.
From the Main tab, on the G-Code tab, do one of the
following:
l Right-click any line in the program.
Figure 7-11: Accessing the Options menu by right-
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
a long tool or fly cutter loaded). This option
doesn't require you to jog to the exact lead-in
position.
Change the View of the Tool Path Display
1.
From the Main tab, do one of the following:
l Right-click the Tool Path display.
Figure 7-12: Tool Path display on the Main tab.
©Tormach® 2025
Specifications subject to change without notice.
Page 91
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 92

l Select the View Options tab.
Figure 7-13: View Options tab on the Main tab.
2.
Select a new view.
For information, see "About the Tool Path Display"
(below).
About the Tool Path Display
The Tool Path display is a graphical representation of the
currently loaded G-code file's tool path.
Depending on which programming mode you're in (G20 or
G21), PathPilot defaults to one of the following grid line
spacings:
l G20 Mode 1/2 in. intervals
l G21 Mode 5 mm intervals
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
7.1.4 Import a DXF File
You can import a .dxf file (Drawing Exchange Format) into
PathPilot to generate G-code, which can then cut the shape (or
shapes) described in the .dxf file. For example, you could use
this feature to engrave logos or artwork.
1.
From the Conversational tab, select the DXF tab.
Figure 7-14: DXF tab on the Conversational tab.
2.
Select the File DRO field.
The File Selector dialog box opens.
3.
Select the .dxf file, and then select Open.
4.
The shapes from the selected file are loaded into the
Preview window.
Note: The .dxf file must already be transferred
to the PathPilot controller. For information, see
"Transfer Files to and From the Controller"
(page 88).
5.
In the X Offset DRO field and the Y Offset DRO field,
type the offset value added in the XY direction from the
bottom left corner of the .dxf drawing.
6.
In the Scale DRO field, type the scale factor for the
drawing. The value typed in the Scale DRO field is used
as a multiplier for the .dxf dimensions, and is used for
the entire drawing.
E X A M P L E
If you type 1.0 in the Scale DRO field, the .dxf is
scaled at 100%.
If you type 2.0 in the Scale DRO field, the .dxf is
scaled at 200%.
7.
In the Rotate DRO field, type the rotation angle in
degrees.
The rotation angle is applied around the Z-axis of the
drawing’s origin.
©Tormach® 2025
Specifications subject to change without notice.
Page 92
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 93

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
8.
Select one of the following to set the cutter
compensation to be applied to the tool path:
l On: The tool moves along the path.
l Outside / Right: Offsets the tool path right of the
drawing path, seen from the direction where the tool
enters the path.
l Inside / Left: The opposite of Outside / Right.
Working with Layers and Shapes
The .dxf file contains shapes grouped into layers.
In the Shape Selection tree view window, you can enable or
disable individual layers and complete layers. You can select
shapes either from the tree view window or in the Preview
window.
Change the Layer or Shape Cut Order
Use the Up Arrow and Down Arrow buttons above the
Shape Selection tree view window.
Shapes or layers higher in the tree view window are cut
earlier than those below it. The order in which the
shapes are cut is the same as the order of the enabled
shapes in the tree view window and the cyan path in the
Preview window.
Note: If a layer is selected, the whole layer is
moved up or down. Shapes can’t be moved
between layers.
Adjust the Tree View Window
Use the Fold and Unfold buttons to collapse and expand
the layer and shape tree in the tree view window.
Working in the Preview Window
The Preview window uses the following colors:
l Cyan Selected paths
l Gray Disabled paths
l White Drawing path
l Magenta Cut path
l Dark Cyan Stippled Line Tool path between cuts
l The coordinates use the following colors:
o
Red X-axis
o
Green Y-axis
o
Blue Z-axis
Create and Add Shape Library Templates
Starting with PathPilot v2.9.0, you can create and add new
templates to the Shape Library system.
Templates consist of two files:
l .template: A parametric G-code file that serves as the
actual template.
l .png: A thumbnail image to identify it in the shape
library.
Tip! We recommend that you create templates
externally in your favorite G-code editor and then
copy them to your PathPilot controller like you would
any other file.
Create a Template
1.
Create a new file named [shape_name].template, where
[shape_name] is your desired template name.
E X A M P L E
To create a template for a welding bracket, make
the file name welding_bracket.template.
©Tormach® 2025
Specifications subject to change without notice.
Page 93
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 94

2.
Inside the file that you created in Step 1, you can write
regular G-code with the addition of special parametric
variables that PathPilot uses to display adjustable
parameters in the Shape Library.
The following example is a template file that creates a
line from one (X, Y) location to another:
line.templateText#<start_x> = 1.0
(PARAMFLOAT)
#<start_y> = 1.0 (PARAMFLOAT)
#<end_x> = 5.0 (PARAMFLOAT)
#<end_y> = 5.0 (PARAMFLOAT)
G20 (set units to inches)
G91.1 (Restore Incremental Arc Distance Mode)
G90 (Absolute Distance Mode)
G30
M200
G0 X[#<start_x>] Y[#<start_y>]
G15
G16
(Cut to end of line)
G1 X[#<end_x>] Y[#<end_y>]
M205
Note: The special lines at the top each create a
parameter that PathPilot recognizes and
displays on screen. Each parameter can either
have the type PARAMFLOAT or PARAMINT for
floating point numbers or integers, respectively.
3.
(Optional) Once you've written the G-code for your
template, you can create a .png image to use as the
thumbnail. The image must:
l Be sized to 256 pixels × 256 pixels.
l Use a file name that matches the template name.
E X A M P L E
A thumbnail for the template welding_
bracket.template requires an image with the
file name welding_bracket.png.
Add a Template
1.
From the PathPilot controller, on the File tab, find the
plasma_library_templates folder inside the Home
directory. If you don't see this folder, make sure that
you've updated to the latest version of PathPilot.
2.
Copy the .template file and the .png file that you created
into the plasma_library_templates folder.
©Tormach® 2025
Specifications subject to change without notice.
Page 94
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 95

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
3.
Restart PathPilot.
Your new template displays on the Shape Library tab,
with any defined parameters from the .template file
displayed as configurable options.
©Tormach® 2025
Specifications subject to change without notice.
Page 95
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 96

7.2 MACHINE SETTINGS AND ACCESSORIES
Before running a G-code program, you must first make sure
that the machine settings are properly configured.
7.2.1 Enable an Internet Connection
96
7.2.2 Enable Automatic Updates
96
7.2.3 Change the Network Name
97
7.2.4 Change the Screen Orientation
97
7.2.5 Set Torch Touch Trigger Depth
98
7.2.6 Set Minimum Touchoff Spacing
99
7.2.7 Enable Ohmic Touchoff
99
7.2.8 Enable Torch Height Control
99
7.2.9 Enable Arc-Ok Checking
99
7.2.10 Disable Hard Stop Referencing
100
7.2.11 Limit G30 Moves
100
7.2.12 Enable the On-Screen Keyboard
100
7.2.13 Enable the USB M-Code I/O Interface Kit
101
7.2.14 Enable Tooltips
101
7.2.15 Use a USB Camera
101
7.2.1 Enable an Internet Connection
If desired, you can enable an internet connection on your
PathPilot controller. An internet connection allows you to
receive automatic PathPilot updates and transfer files with
PathPilot HUB instead of a USB drive.
To enable an internet connection:
1.
From the PathPilot interface, on the Status tab, select
Internet.
Figure 7-15: Internet button on the Settings tab.
The Network Configuration dialog box displays.
Figure 7-16: Network Configuration dialog box.
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
7.2.2 Enable Automatic Updates
Note: Automatic updates require an internet
connection. If you haven't yet enabled it, go to
"Enable an Internet Connection" (above).
If desired, you can enable automatic updates for PathPilot.
To enable automatic updates:
1.
From the PathPilot interface, on the Status tab, select
Update.
The Software Update dialog box displays.
©Tormach® 2025
Specifications subject to change without notice.
Page 96
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 97

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
Figure 7-17: Software Update dialog box.
2.
From the Software Update dialog box, select the Check
online daily for updates; confirmation required for
download and installation checkbox.
3.
Select Close.
When future updates are available, the Status tab
displays a notification.
7.2.3 Change the Network Name
If you're connected to a network using either the Ethernet jack
or the (optional) Wireless Network Adapter (PN 38207), the
PathPilot controller appears on your network as network-
attached storage. The default network name of the controller
is TORMACHPCNC.
To change the network name:
1.
From the Network Name field, type a new network
name.
Figure 7-18: Network Name field on the Settings tab.
Note: The network name must be unique within
your network.
2.
Select the Enter key.
3.
For the change to take effect, you must restart the
controller.
7.2.4 Change the Screen Orientation
A vertical orientation for 1920 × 1080 monitors is supported in
PathPilot v2.10.0 and later. For more information on the
portrait layout, go to "About Portrait Screen Layout" (below).
To change the screen orientation:
1.
From the PathPilot interface, on the Settings tab, select
Portrait from the Layout drop-down menu. Restart the
controller.
Figure 7-19: Layout drop-down menu on the Settings
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
Figure 7-20: Monitor configuration dialog box.
The controller restarts in portrait layout.
About Portrait Screen Layout
Portrait layout provides some key advantages:
l A larger tool path window that's always visible at the
top of the screen, regardless of which tab you have
active.
©Tormach® 2025
Specifications subject to change without notice.
Page 97
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 98

Figure 7-21: Tool Path window in portrait screen
layout.
l A wider G-code window to more easily read the loaded
G-code file and, if enabled, line numbers.
l The tool path window's view options are always visible
for much easier access.
l When browsing G-code files using the File tab, file
previews display on the top portion of the screen.
Figure 7-22: File tab G-code preview in portrait screen
layout.
7.2.5 Set Torch Touch Trigger Depth
When using the physical touchoff switch for material height
sensing, there's a certain amount of lost motion in the Z-axis
between when the torch head touches the material and when
the micro-switch in the torch lifter triggers.
It's important to set an accurate value for the distance
between torch touch and touch switch triggering so that the
initial pierce height can be correctly computed.
©Tormach® 2025
Specifications subject to change without notice.
Page 98
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 99

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
To set torch touch trigger depth:
1.
Power on the machine and reference all axes.
2.
From the PathPilot interface, on the Settings tab, disable
Ohmic Touchoff.
3.
Put a piece of material on the machine table and
position the torch above it.
4.
Using a slow jog speed (~5 IPM), jog the torch down
until it's just contacting the material.
5.
Zero your Z-axis at this position.
6.
Switch to the Status tab and watch the Touch Switch
LED. Very slowly, jog downwards until the LED comes on.
7.
Note the value in the Z DRO field. This is your Torch
Touch Trigger Depth. Convert this value to a positive
number and enter it on the Settings tab.
8.
Re-enable Ohmic Touchoff on the Settings page.
7.2.6 Set Minimum Touchoff Spacing
Minimum touchoff spacing is a time saving setting designed to
avoid unnecessary probing during programs with a large
number of individual cuts.
After the machine has probed for initial cut height, if the next
cut begins within this distance it will be assumed that the
material height is the same. This allows the machine to skip
the probing routine and proceed straight to pierce height.
If your material is very flat and uniform, you can use a large
distance for this setting (>2 in.). If your material is uneven or
you would simply prefer to probe for height every time a cut
begins, enter zero for this value.
7.2.7 Enable Ohmic Touchoff
This setting disables the ohmic sensing system entirely and
relies solely on the physical touch switch for height sensing.
This can be useful for cutting programs that result in water
being repeatedly splashed into the torch nozzle, causing
spurious probing trips.
Note: Do not disable ohmic touch-off when cutting
very thin material. The weight of the torch will bend
the material during probing and cause inaccurate
pierce height.
7.2.8 Enable Torch Height Control
Disabling this setting stops all dynamic height adjustment
during cutting. The torch will stay at the same height for the
length of a cut and not adjust to follow the contours of the
material.
7.2.9 Enable Arc-Ok Checking
Hypertherm plasma sources supply an arc-ok signal to
PathPilot when the cutting arc is fully established. When this
setting is enabled, the machine will pause during a G16 pierce
until is receives an arc-ok signal.
Disable this setting if your plasma source does not supply an
arc-ok signal.
©Tormach® 2025
Specifications subject to change without notice.
Page 99
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 100

7.2.10 Disable Hard Stop Referencing
To provide a temporary workaround for a malfunctioning limit
switch circuit, you can disable the limit switches.
Note: By default, the Hard Stop Referencing checkbox
is selected.
To disable :
1.
From the Settings tab, clear the Hard Stop Referencing
checkbox.
Figure 7-23: Hard Stop Referencing checkbox on the
Status tab.
2.
Select OK.
The machine completes a unique referencing procedure
after selecting the axis reference buttons: rather than
moving each axis to the end of its travel, the reference
position is set as the machine's current position.
Tip! This is useful for troubleshooting, because
you're now able to move the axis.
7.2.11 Limit G30 Moves
You can limit G30 moves so that only the Z-axis moves. For
information, see "About G30" (page 113).
To limit G30 moves:
From the Settings tab, select G30/M998 Move in Z Only.
Figure 7-24: Settings tab.
About G30
A G30 command in a G-code program moves the machine to a
preset position. For more information on setting a G30
position, see "Use a G30 Position" (page 113).
Use a G30 move to start a coordinated movement of the axes.
You can limit the movement to only the Z-axis. For
information, see "Limit G30 Moves" (above).
Tip! It's useful to program a G30 move right before a
tool change so that the machine can jog to a safe tool
change position.
7.2.12 Enable the On-Screen Keyboard
If you have an (optional) Touch Screen Kit (PN 35575), you can
use a soft keyboard to type information in the PathPilot
interface. For information, see "About Soft Keyboards" (on the
next page).
To enable and use the soft (on-screen) keyboard:
1.
From the Settings tab, select Soft / On-Screen Keyboard.
Figure 7-25: Settings tab.
2.
To resize the keyboard, select a corner of the keyboard
and drag.
3.
To reposition the keyboard, select the Anchor key and
drag the keyboard anywhere on the screen.
©Tormach® 2025
Specifications subject to change without notice.
Page 100
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 101

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
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
Figure 7-26: Soft (on-screen) keyboard.
7.2.13 Enable the USB M-Code I/O Interface Kit
If you have a USB M-Code I/O Interface Kit (PN 32616), you
must first enable it in the PathPilot interface.
To enable the USB M-Code I/O Interface Kit:
From the Settings tab, select USB IO Kit (PN 32616).
Figure 7-27: Settings tab.
7.2.14 Enable Tooltips
PathPilot displays expandable tooltips for many areas of the
interface. Hovering over an item, like a DRO field or a button,
displays helpful information about the item.
To enable or disable tooltips:
1.
From the Settings tab, select or clear Show Tooltips.
Figure 7-28: Show Tooltips checkbox.
Note: If you disable the tooltips, you can still
display them for specific items. Hover over an
area of the interface, and select the Shift key
on the keyboard.
7.2.15 Use a USB Camera
After plugging in the USB camera, navigate to the camera
settings. From the PathPilot interface, in the Settings tab, open
the Camera(s) tab. Identify the Camera Status read-only dialog
box.
Figure 7-29: USB camera status.
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
©Tormach® 2025
Specifications subject to change without notice.
Page 101
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 102

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
Figure 7-30: Manual recording controls.
l Select the Video Camera Recording button in the
Persistent Controls section.
Figure 7-31: Video Camera Recording button.
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
Figure 7-32: Camera settings.
To take a picture (using all of the USB cameras at once):
1.
Select Snapshot in the Manual Recording area of the
Camera(s) tab.
The Main tab displays.
2.
Review the camera images, which display on top of the
Tool Path area. The camera images refresh every 0.5
seconds.
©Tormach® 2025
Specifications subject to change without notice.
Page 102
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 103

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
3.
Align the cameras or adjust lighting to your preference,
and then select the Shutter button.
Figure 7-33: Example of taking a photo.
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
G-Code Commands
PathPilot supports three new M-codes to control cameras
within G-code programs: M301, M302, and M303. Example use
cases:
l Record only across each M01 stop where the operator
needs to flip a workpiece or change a tool.
l Create short videos that focus on unique aspects of the
program to reduce later video editing.
l Record USB IO integration operations with robots or
other devices (pneumatic vises, etc.).
l Monitor progress on a workpiece by including M303
throughout the program.
File Naming Conventions
Recordings or pictures created by M301/M302/M303 have
automatically generated file names, with the base file name
taken from the running G-code file. Video files are saved
alongside the G-code file. The suffix for each file uses a time
©Tormach® 2025
Specifications subject to change without notice.
Page 103
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 104

stamp format. This makes it easy to distinguish multiple runs
of the same G-code program.
For example, if engrave.nc is running and uses M301 and M302
to create one recording on a machine with one camera, and
screen recording is enabled, you'll see the following files:
File Name
Description of File
engrave_2023-02-21_
16_58_33_0.mp4
Camera 0 mp4 video file
engrave_2023-02-21_
16_58_33_0.log
Troubleshooting log for camera
0
engrave_2023-02-21_
16_58_33_PP.mp4
PathPilot screen recording mp4
video file
engrave_2023-02-21_
16_58_33_PP.log
Troubleshooting log for screen
recording
engrave_2023-02-21_
17_43_22.jpg
Picture taken by a single M303
later in the program
Use M01 to Take Pictures
In addition to displaying information like pictures or messages
during an M01 break, you can also use a USB camera (if
installed) to take a picture.
To use M01 to take pictures:
1.
Add M01 (op1_setup.jpg) into your G-code
program.
2.
Run the G-code program.
3.
When PathPilot executes the M01 it looks to see if the
comment contains a file name.
l If there isn't a file name: The comment is shown as
instructional text across the tool path.
l If there is a file name, but the file doesn’t exist yet
and the extension is .jpg, .png, or .jpeg: The USB
cameras are initialized and shown in the tool path
display.
4.
Select the Shutter button to take the picture and create
the op1_setup.jpg file.
In future runs of the G-code program, op1_setup.jpg will
display to the operator for instructional purposes on the
workpiece.
For more information, see "Display Information and Capture
Images During an M00 or M01 Break" (page 150).
©Tormach® 2025
Specifications subject to change without notice.
Page 104
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories


---

## PDF Page 105

7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs
7.3 SET UP G-CODE PROGRAMS
Before running a G-code program, you must first make sure
that the machine is properly set up for the specific G-code
program.
7.3.1 Set Work Offsets
105
7.3.2 View Work Offsets
105
7.3.3 View Available G-Code Modes
106
7.3.1 Set Work Offsets
To set the current axis location to zero in the active work
coordinate system:
Select Zero [Axis].
Figure 7-34: Work Offset DRO fields.
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
Figure 7-35: Work offset indicated in the PathPilot
interface.
Note: The values in the Work Offset
DRO fields update to indicate the new
location of each axis in the new work offset.
For more information on using work offsets, see "About Work
Offsets" (below).
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
7.3.2 View Work Offsets
To view the current work offset:
From the Offsets tab, on the Work tab, identify the
Work Offsets Table window.
©Tormach® 2025
Specifications subject to change without notice.
Page 105
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 106

Figure 7-36: Work Offsets Table window.
The active work offset is highlighted.
To change the current work offset, go to "Set Work Offsets"
(on the previous page).
7.3.3 View Available G-Code Modes
The G-Code Description window shows a list of all available G-
code modes.
To view available G-code modes:
From the Settings tab, find the G-Code Description
window.
Figure 7-37: G-code Description window on the
Settings tab.
©Tormach® 2025
Specifications subject to change without notice.
Page 106
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.3 Set Up G-Code Programs


---

## PDF Page 107

7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs
7.4 RUN G-CODE PROGRAMS
While running a G-code program, use the following controls:
7.4.1 Bring the Machine Out of Reset
107
7.4.2 View the Active Axis to Jog
107
7.4.3 Jog the Machine
107
7.4.4 View the Current Machine Position
108
7.4.5 Reference the Machine
108
7.4.6 Start a Program
109
7.4.7 Stop Machine Motion
109
7.4.8 View the Active G-Code Modes
109
7.4.9 View the Distance to Go
110
7.4.1 Bring the Machine Out of Reset
Select Reset.
Figure 7-38: Reset button.
For more information on reset mode, see "About Reset Mode"
(below).
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
Figure 7-39: Work Offset DRO fields.
For information, see "Jog the Machine" (below).
7.4.3 Jog the Machine
To switch between jogging modes:
From the Manual Control area, in the Jog group, select
Jog.
PathPilot toggles between continuous velocity mode and
step mode.
Figure 7-40: Jog button.
When the Cont green light is on, continuous velocity
mode is selected.
When the Step green light is on, step mode is selected.
To use continuous velocity mode:
Set the velocity: drag the Jog Speed slider.
Figure 7-41: Jog Speed slider.
For more information on continuous velocity mode, see "About
Continuous Velocity Jogging" (on the next page).
To use step mode, select the step size. Do one of the
following, depending on your accessories:
l In the Manual Control Area, in the Jog group, select the
step size.
The Step button's light comes on, indicating which step
size is active.
Figure 7-42: Step buttons (in G20 mode).
©Tormach® 2025
Specifications subject to change without notice.
Page 107
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 108

l On the (optional) Jog Shuttle, press the Step button to
toggle the currently selected step size.
In the PathPilot interface, the Step button's light comes
on, indicating which step size is active.
For more information on step mode, see "About Step Jogging"
(below).
Jog in Continuous Velocity Mode
In continuous mode, the machine jogs at a continuous velocity.
To select continuous velocity mode:
In the Manual Control area, select Jog.
Figure 7-43: Continuous velocity jogging controls.
When the Cont green light is on, continuous velocity
mode is selected.
When the Step green light is on, step mode is selected.
To set the velocity:
Drag the Jog Speed slider.
Figure 7-44: Jog Speed slider.
About Continuous Velocity Jogging
While jogging in continuous velocity mode, the machine moves
at a constant speed for as long as:
l A keyboard key is pressed
l The Jog Shuttle outer ring is twisted away from the
neutral position
This is useful when you're doing things like:
l Roughly positioning the machine (for example, to move
the spindle head away from the workpiece).
l Moving the machine a certain distance at a constant
speed.
Jog in Step Mode
In step mode, the machine jogs in steps, which range based on
the programming mode you're using:
l Imperial (G20) Mode 0.0001 in. to 0.1000 in.
l Metric (G21) Mode 0.01 mm to 10 mm
To select the step size:
In the Manual Control Area, select the step size.
The Step button's light comes on, indicating which step
size is active.
Figure 7-45: Step buttons (in G20 mode).
About Step Jogging
While jogging in step mode, the machine moves one step each
time you either press a jog key on the keyboard or click the
inner wheel of the Jog Shuttle. The jog step sizes range
depending on the programming mode you are using:
l Imperial (G20) Mode 0.0001 in. to 0.1000 in.
l Metric (G21) Mode 0.01 mm to 10 mm
Step jogging mode is useful to finely move the machine, like
when you're indicating a workpiece or manually setting tool
lengths.
The jog keys on the keyboard only move the machine in steps
when step mode is indicated in PathPilot. The inner wheel on
the jog shuttle always moves the machine in steps, regardless
of which mode is indicated in PathPilot.
7.4.4 View the Current Machine Position
Identify the Work Offset DRO fields.
Figure 7-46: Work Offset DRO fields.
The position is expressed by the currently active work
offset coordinate system (like G54 or G55).
When the machine isn't moving, you can edit the DRO fields.
For more information on setting work offsets, go to "Set Work
Offsets" (page 105).
7.4.5 Reference the Machine
1.
Verify that the machine can freely move to its reference
position (at the ends of travel).
©Tormach® 2025
Specifications subject to change without notice.
Page 108
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs


---

## PDF Page 109

7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs
2.
To verify that the tooling is clear of any possible
obstructions, reference the Z-axis before referencing the
other axes: from the PathPilot interface, select Ref Z.
Figure 7-47: Reference buttons.
3.
Once the spindle is clear of any possible obstructions,
continue referencing all axes.
Note: You can select the buttons one after
another. Once the machine references one axis,
it'll move on to the next.
After each axis is referenced, its button light comes on.
For more information on referencing the machine, see "About
Referencing" (below).
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
Figure 7-48: Cycle Start button.
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
"Main Tab" (page 74).
l Before you've loaded a G-code program. For
information, see "Load G-Code" (page 88).
l Before referencing the machine. For information, see
"Reference the Machine" (on the previous page).
7.4.7 Stop Machine Motion
From the Program Control area, select Stop.
Figure 7-49: Stop button.
7.4.8 View the Active G-Code Modes
To find the currently active G-code modes and the currently
active tool at a glance:
©Tormach® 2025
Specifications subject to change without notice.
Page 109
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 110

Identify the Status read-only DRO field.
Figure 7-50: Status read-only DRO field.
For more information on G-code modes, go to "View Available
G-Code Modes" (page 106).
7.4.9 View the Distance to Go
To view the distance to go:
Identify the DTG read-only DRO fields.
Figure 7-51: DTG read-only DRO fields.
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
©Tormach® 2025
Specifications subject to change without notice.
Page 110
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.4 Run G-Code Programs


---

## PDF Page 111

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
7.5 CONTROL G-CODE PROGRAMS
If necessary, use the following controls to add to your G-code
program:
7.5.1 Use the Feed Hold Function
111
7.5.2 Use the Feed Rate Override Function
111
7.5.3 Use M01 Break Mode
112
7.5.4 Use the Maxvel Override Function
112
7.5.5 Use Single Block Mode
112
7.5.6 Use the Voltage Override Function
112
7.5.7 Change the Tool Number
113
7.5.8 Use a G30 Position
113
7.5.9 Manually Enter Commands
113
7.5.10 Copy Recently Entered Commands
115
7.5.11 Use the AutoFS Material Picker
115
7.5.12 Use Cycle Counters (M30 and M99)
116
7.5.1 Use the Feed Hold Function
Select Feed Hold.
Figure 7-52: Feed Hold button.
Tip! Use the Spacebar key to quickly activate the
feed hold function.
For more information on using the feed hold function, see
"About Feed Hold" (below).
About Feed Hold
When the feed hold function is active, the Feed Hold button's
light is on.
The feed hold function pauses machine motion — aside from
the spindle — and the Cycle Start button flashes. For
information, see "About Cycle Start" (page 109).
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
Figure 7-53: Feed Rate Override slider.
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
©Tormach® 2025
Specifications subject to change without notice.
Page 111
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 112

7.5.3 Use M01 Break Mode
Select M01 Break.
Figure 7-54: M01 Break button.
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
Start" (page 109).
l When M01 Break is Inactive PathPilot ignores all
programmed M01 commands.
7.5.4 Use the Maxvel Override Function
To use the maxvel override function:
Using the Maxvel Override slider, change the maximum
velocity by a specified percentage.
Figure 7-55: Maxvel Override slider.
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
Figure 7-56: Single Block button.
For more information on using single block mode, see "About
Single Block" (below).
About Single Block
While single block mode is active, the Single Block button's
light is on.
Single block mode runs one line of G-code at a time. After
each line, motion is paused, and the Cycle Start button flashes.
For information, see "About Cycle Start" (page 109).
You can turn single block mode on or off either before starting
a program or while a program is running. For information, see
"Use Single Block Mode" (above).
Note: Single block mode ignores non-motion lines,
like comment lines or blank lines.
7.5.6 Use the Voltage Override Function
To use the voltage override function:
Using the Voltage Override slider, change the
programmed voltage by a specific percentage.
©Tormach® 2025
Specifications subject to change without notice.
Page 112
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 113

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
Figure 7-57: Voltage Override slider.
Note: Percentages range from 1-200%.
To remove the voltage override function:
Select Volts 100%.
The voltage returns to 100% of its programmed value
(it's no longer overriden).
7.5.7 Change the Tool Number
The Tool DRO field shows the tool number currently active.
Figure 7-58: Tool DRO field.
To change the tool number (and apply its tool length offset):
1.
From the PathPilot interface, on the Offsets tab, select
the Tool tab.
2.
In the Tool DRO field on the Offsets tab, type a number
(the valid range is from 0-1000). Then select the Enter
key.
Note: You can also select M6 G43. For
information, see "About M6 G43" (below).
About M6 G43
The M6 G43 button is a shortcut used to do the following:
l Change the number of the currently-loaded tool in the
spindle to the number typed in the Tool DRO field. This is
the equivalent of an M06 command.
7.5.8 Use a G30 Position
The Go to G30 button moves the machine to a predefined G30
position. For information, see "About G30" (below).
To set a G30 position:
1.
Jog the machine to the desired G30 position.
2.
From the Offsets tab, select Set G30.
Figure 7-59: Set G30 button.
To go to a set G30 position:
l Use a G30 command in a G-code program.
Note: The G30 position defaults to only moving the Z-
axis.
About G30
A G30 command in a G-code program moves the machine to a
preset position. For more information on setting a G30
position, see "Use a G30 Position" (above).
Use a G30 move to start a coordinated movement of the axes.
You can limit the movement to only the Z-axis. For
information, see "Limit G30 Moves" (page 100).
Tip! It's useful to program a G30 move right before a
tool change so that the machine can jog to a safe tool
change position.
7.5.9 Manually Enter Commands
You can send G-code commands directly to the machine by
using the MDI Line DRO field. For information, see "About the
MDI Line DRO Field" (on the next page).
To manually enter commands:
1.
Select the MDI Line DRO field.
Figure 7-60: MDI Line DRO field.
The DRO field highlights.
©Tormach® 2025
Specifications subject to change without notice.
Page 113
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 114

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
Admin Command
Use to...
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
©Tormach® 2025
Specifications subject to change without notice.
Page 114
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 115

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
7.5.10 Copy Recently Entered Commands
1.
From the MDI Line DRO field, press either the
Up Arrow key or the Down Arrow key.
The previously entered command displays.
2.
You must press the Enter key to execute the command.
To abandon the command, press Esc.
For information, see "Manually Enter Commands" (page 113).
7.5.11 Use the AutoFS Material Picker
PathPilot on the 1300PL is designed so that you don't need to
manually program feeds and speeds in your G-code. Instead,
feed rate, amperage, pierce parameters, and torch height
control voltage are all set at program run-time using
automatic look-up tables based on the material you're cutting.
AutoFS is designed so that you can export a program once
from your post-processor and run it multiple times with
different materials, all without re-posting. All material-specific
machine parameters are set by the M200 AutoFS M-code
(rather than directly programmed in the G-code).
Writing G-Code with AutoFS
A standard block of G-code before a cutting operation might
look like this:
M210 P123 (Set THC voltage to 123v)
M211 P45 (Set plasma source to 45A)
M207 P0.15 (Set pierce height to 0.15")
M208 P0.08 (Set cut height to 0.08")
M209 P2 (Set a two second pierce delay)
F225 (Set cutting feed rate of 225 IPM)
G15 (Perform ohmic probe)
G16 (Pierce and start cutting)
The block of code shown above is totally valid and can be used
if you prefer to hard code your cutting parameters.
Alternatively, the code shown above can be replaced with the
following when AutoFS is being used:
M200 (Set cutting parameters from AutoFS tables)
G15 (Perform ohmic probe)
G16 (Pierce and start cutting)
Using AutoFS
1.
On the Settings tab, select which plasma source you're
using from the Auto FS Plasma Source drop-down menu.
2.
Before running your program, select the material you're
cutting from the AutoFS dropdowns on the Main tab of
PathPilot.
The DROs turn green, which indicates that they were
automatically set.
With a material selected, the next time an M200 code is
encountered in a program, PathPilot will set all of the cutting
parameters for that material.
Creating Custom AutoFS Presets
Since your shop air supply and cutting conditions might differ
from those used to create the AutoFS presets, you can save
your own custom settings for a material at any time.
To create new AutoFS presets:
1.
From the Main tab, select the material you're cutting
from the AutoFS dropdowns, and then type your cut
parameters into the DRO fields.
2.
Select Save.
The values are stored as a new preset for that material.
Deleting Custom AutoFS Presets
1.
From the File tab, navigate to the fs_tables folder, and
open the plasma_user_fs_data.csv file.
©Tormach® 2025
Specifications subject to change without notice.
Page 115
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 116

2.
Highlight the line of the preset you want to delete and
delete it. Then, save the file.
Note: This file is read on boot only, so the
preset remains visible until the controller is
power cycled.
7.5.12 Use Cycle Counters (M30 and M99)
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
Change Cycle Counter Values
The cycle counters are implemented as read-only persistent G-
code numbered parameters, as detailed in the following table.
If needed, the cycle counter value can be read in G-code.
Cycle Counter
Parameter
M30 A
#5650
M30 B
#5651
M99 A
#5652
M99 B
#5653
To change a counter value explicitly, use a G10 command: G10
L99 P~ Q~
l P~ selects the cycle counter to change. Use any of the
values detailed in the following table.
Cycle Counter
P~
M30 A
0
M30 B
1
M99 A
2
M99 B
3
l Q~ specifies the value to set the cycle counter. If Q~ is
omitted, the cycle counter is incremented by 1.
For example, if you program G10 L99 P2, the M99 A
cycle counter increments by 1.
©Tormach® 2025
Specifications subject to change without notice.
Page 116
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 117

7: PATHPILOT TOOLS AND FEATURES
7.6 System File Management
7.6 SYSTEM FILE MANAGEMENT
To keep the files on your system backed up and organized, use
the following controls:
7.6.1 Manage System Files
117
7.6.2 Create Backup Files
117
7.6.3 Restore Backup Files
118
7.6.4 Import and Export the Tool Table
119
7.6.1 Manage System Files
Use the File tab to manage system files on the PathPilot
controller. For information, see "Transfer Files to and From the
Controller" (page 88).
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
Figure 7-61: Admin Settings Backup dialog box.
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
Figure 7-62: Controller Files window on the File tab.
Note: Files must have unique names. If they
don't, PathPilot prompts you to overwrite or
rename files, or cancel the file transfer.
©Tormach® 2025
Specifications subject to change without notice.
Page 117
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 118

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
Figure 7-63: Admin Settings Restore dialog box.
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
Figure 7-64: USB Files window on the File tab.
Note: To navigate backward, select Back. To
navigate to the top level, select USB.
5.
From the Controller Files window, select the folder into
which you want to copy the files.
©Tormach® 2025
Specifications subject to change without notice.
Page 118
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.6 System File Management


---

## PDF Page 119

7: PATHPILOT TOOLS AND FEATURES
7.6 System File Management
6.
Select Copy From USB.
The files display in the Controller Files window.
Note: Files must have unique names. If they
don't, PathPilot prompts you to overwrite or
rename files, or cancel the file transfer.
7.6.4 Import and Export the Tool Table
You can manage the tool table using an external .csv file.
Figure 7-65: Export and Import buttons on the Offsets tab.
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
Figure 7-66: Import dialog box.
5.
Navigate to the .csv file on the USB drive. Then, select
OK.
The .csv file updates the tool table.
Export the Tool Table as a .csv File
1.
From the Offsets tab, select Export.
PathPilot generates the .csv file, and the Export dialog
box displays.
Figure 7-67: Export dialog box.
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
©Tormach® 2025
Specifications subject to change without notice.
Page 119
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 120

[No extractable text; see original PDF page.]


---

## PDF Page 121

BASIC OPERATIONS
IN THIS SECTION, YOU'LL LEARN:
About the basic operations required for most projects, organized as a suggested project workflow.
CONTENTS
8.1 Plasma Settings Reference
122
8.2 Create Programs with CAD/CAM
124
8.3 Select a Method for Initial Height Sensing (IHS)
125
8.4 Make Your First Cuts
126
8.5 Use the AutoFS Material Picker
128


---

## PDF Page 122

8.1 PLASMA SETTINGS REFERENCE
8.1.1 Touch Switch Trigger Depth
When using the physical touchoff switch for material height
sensing, there's a certain amount of lost motion in the Z-axis
between when the torch head touches the material and when
the micro-switch in the torch lifter triggers.
It's important to set an accurate value for the distance
between torch touch and touch switch triggering so that the
initial pierce height can be correctly computed.
To set torch touch trigger depth:
1.
Power on the machine and reference all axes.
2.
From the PathPilot interface, on the Settings tab, disable
Ohmic Touchoff.
3.
Put a piece of material on the machine table and
position the torch above it.
4.
Using a slow jog speed (~5 IPM), jog the torch down
until it's just contacting the material.
5.
Zero your Z-axis at this position.
6.
Switch to the Status tab and watch the Touch Switch
LED. Very slowly, jog downwards until the LED comes on.
7.
Note the value in the Z DRO field. This is your Torch
Touch Trigger Depth. Convert this value to a positive
number and enter it on the Settings tab.
8.
Re-enable Ohmic Touchoff on the Settings page.
8.1.2 Minimum Touchoff Spacing
Minimum touchoff spacing is a time saving setting designed to
avoid unnecessary probing during programs with a large
number of individual cuts.
After the machine has probed for initial cut height, if the next
cut begins within this distance it will be assumed that the
material height is the same. This allows the machine to skip
the probing routine and proceed straight to pierce height.
If your material is very flat and uniform, you can use a large
distance for this setting (>2 in.). If your material is uneven or
you would simply prefer to probe for height every time a cut
begins, enter zero for this value.
©Tormach® 2025
Specifications subject to change without notice.
Page 122
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.1 Plasma Settings Reference


---

## PDF Page 123

8: BASIC OPERATIONS
8.1 Plasma Settings Reference
8.1.3 Enable Ohmic Touchoff
This setting disables the ohmic sensing system entirely and
relies solely on the physical touch switch for height sensing.
This can be useful for cutting programs that result in water
being repeatedly splashed into the torch nozzle, causing
spurious probing trips.
Note: Do not disable ohmic touch-off when cutting
very thin material. The weight of the torch will bend
the material during probing and cause inaccurate
pierce height.
8.1.4 Enable THC
Disabling this setting stops all dynamic height adjustment
during cutting. The torch will stay at the same height for the
length of a cut and not adjust to follow the contours of the
material.
8.1.5 Enable Arc-Ok Checking
Hypertherm plasma sources supply an arc-ok signal to
PathPilot when the cutting arc is fully established. When this
setting is enabled, the machine will pause during a G16 pierce
until is receives an arc-ok signal.
Disable this setting if your plasma source does not supply an
arc-ok signal.
©Tormach® 2025
Specifications subject to change without notice.
Page 123
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 124

8.2 CREATE PROGRAMS WITH CAD/CAM
8.2.1 Converting DXF Files to G-Code
The simplest way to start cutting on the 1300PL is by using the
conversational DXF import feature in PathPilot. We
recommend this for beginners because it ensures that your G-
code takes full advantage of PathPilot's AutoFS features and
integrates the recommended feeds and speeds for Hypertherm
plasma units.
To create DXF files for cutting:
1.
Model the part as a flat body in SolidWorks. Use the
sheet metal design tools or a extrude a flat sketch to
create the geometry.
2.
Export the DXF by right-clicking the desired surface in
SolidWorks and selecting Export to DXF/DWG.
Figure 8-1: Example of exporting a surface in
SolidWorks to DXF/DWG.
This approach avoids including unwanted items like axis
markings, sketch boundaries, or notes in the DXF file.
3.
Once your DXF is ready, import it into PathPilot using the
conversational DXF import tool to quickly generate
reliable cutting programs.
8.2.2 Using a Post-Processor
For more control over your cutting programs, you can use one
of the following CAM programs, which have Tormach-
supported post-processors:
l Autodesk Fusion 360
l Vectric Software
To export programs using Fusion or Vectric:
1.
Select the Tormach post-processor in your CAM
software.
2.
Choose whether to:
l Use the M200 AutoFS feature that allows PathPilot to
choose feeds and speeds (based on the AutoFS
dropdowns).
l Override the AutoFS settings by applying the cut
parameters from your CAM software.
Note: If you override AutoFS settings, you
may experience unexpected cutting
problems. Ensure that your cut settings align
with Hypertherm’s recommendations.
To export programs using another CAM software:
Modify the post-processor to ensure the generated G-
code matches the requirements in the example program
in "Make Your First Cuts" (page 126).
Note: Although PathPilot uses LinuxCNC, off-
the-shelf post-processors will not work without
adjustments. They lack the specific M- and G-
codes that PathPilot uses for setting cut
parameters, so using them as-is may produce
unexpected results.
©Tormach® 2025
Specifications subject to change without notice.
Page 124
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.2 Create Programs with CAD/CAM


---

## PDF Page 125

8: BASIC OPERATIONS
8.3 Select a Method for Initial Height Sensing (IHS)
8.3 SELECT A METHOD FOR INITIAL HEIGHT
SENSING (IHS)
Because plasma cutting workpieces are prone to heat-induced
warping, it's common practice to probe the workpiece height
before each cut using the initial height sensing (IHS) system.
This guarantees a consistent pierce height, which prolongs
consumable life.
The 1300PL has two methods of detecting the Z location of the
workpiece before a cut. Choose which method to use based on
your workpiece, cutting situation, and machine setup.
To select an IHS method:
From the PathPilot interface, on the Settings tab, select
or clear the Enable Ohmic Touchoff checkbox.
For more information, see "Plasma Settings Reference"
(page 122).
8.3.1 Physical Touch Switch
The first (and simplest) IHS method is the physical touch off
switch in the torch lifter. A spring-loaded switch on the Z lead
screw is triggered when the torch is pressed against the
workpiece.
Use the physical touch switch when:
l Your workpiece is thicker than 18 ga (1.2 mm).
l Making many small cuts, where water is splashed into
the torch head between cuts.
8.3.2 Ohmic Probing
The second, and more accurate, method of IHS is ohmic
probing. Ohmic probing uses the conductivity of the workpiece
to detect when the torch cap is touching it. Ohmic probing
requires a very light touch and is very accurate, but can be
incorrectly triggered by water splashing into the torch head.
Use ohmic probing when:
l Your workpiece is thinner than 18 ga (1.2 mm).
l Cutting large workpieces, where the torch is not crossing
over open water between cuts.
©Tormach® 2025
Specifications subject to change without notice.
Page 125
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 126

8.4 MAKE YOUR FIRST CUTS
Once you've verified all subsystems of the machine and
plasma source, we recommend making a simple test program
to test the cutting and torch height control systems. This is
also a good quick-start tutorial on NC programming for the
1300PL.
8.4.1 Test G-Code
The following code will probe, set feeds from the AutoFS
system, and then cut a 4" line from (0, 0) to (0, 4).
Open a text editor on your computer (like Notepad++), and
save the following code in a file named test.nc.
G90 (Absolute Distance Mode)
G64 P 0.0050 Q 0.0050 (PathBlending)
G17 (XY Plane)
G54 (Set Work Offset)
T 1 M6 G43 H 1
G30 (Move Home)
G0 X0 Y0
M200 (AutoFS)
G15 (probe)
G16 (pierce)
G1 X0 Y4
M205 (Torch Off)
G30 (Move Home)
8.4.2 Code Breakdown
Preamble: This code block resets the modal state of the
machine. It places the interpreter in absolute distance mode,
sets reasonable values for smoothing, and selects the G54
work offset. For more detail on these G-codes, see the full
PathPilot manual.
G90 (Absolute Distance Mode)
G64 P 0.0050 Q 0.0050 (PathBlending)
G17 (XY Plane)
G54 (Set Work Offset)
Tool Selection: Selects Tool 1 from the offsets table. On the
plasma, convention is to use Tool 1 for the plasma torch.
T 1 M6 G43 H 1
Initial Move: Moves the torch to the home (G30) position in Z
for safety and then performs a rapid move to coordinate (0, 0).
G30 (Move Home)
G0 X0 Y0
AutoFS: Uses the AutoFS material selector on the Main tab of
PathPilot to set feed rate, pierce delay, pierce height and
plasma amperage. No explicit feedrate needs to be specified
for G1 moves since AutoFS sets this for you.
M200 (AutoFS)
Probe and Pierce: Probe the material surface using ohmic
sensing. Once the torch detects the surface, Z0 for the current
Work Coordinate System is set at the surface. After probing,
G16 moves the torch to the pierce height set by AutoFS, fires
the torch, waits for the AutoFS pierce delay and then moves to
cutting height.
G15 (probe)
G16 (pierce)
Cut and Turn Torch Off: Performs a feed move from the current
position (0, 0) to (0, 4). After the cutting move is complete, the
torch is shut off and returned to the G30 home position.
Note: You might notice that your torch pauses and
continues to blow air for 10-20 seconds. This is a cool
down procedure designed by the plasma source
manufacturer.
G1 X0 Y4
M205 (Torch Off)
G30 (Move Home)
8.4.3 Run the Test Program
IMPORTANT! Before running your test program,
make sure you have completed all steps in "Verify
the Installation" (page 56).
1.
Find a piece of scrap sheet steel large enough to make a
4" test cut.
2.
Put the metal on the cutting table and connect the
ground clamp to it.
3.
Bring PathPilot out of the Reset state and home the
machine.
©Tormach® 2025
Specifications subject to change without notice.
Page 126
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.4 Make Your First Cuts


---

## PDF Page 127

8: BASIC OPERATIONS
8.4 Make Your First Cuts
4.
Power on plasma source.
5.
Jog the cutting torch to a place at least 5" past the edge
of the plate in Y- (towards the operator side of the
machine).
6.
Check that your current Work Coordinate System is G54
to match the test cutting code.
If it isn't, type G54 into the MDI Line DRO field. Then
select the Enter key.
7.
Select Zero X and Zero Y to set your work coordinate
system zeros.
8.
Copy your G-code from a USB drive and load it into
PathPilot.
9.
Select the material you're using for your cut test in the
AutoFS dropdown on the Main tab.
10.
Adjust your plasma source to the amperage shown in the
AMPS DRO field.
11.
Select Cycle Start.
The machine performs the test cut that you
programmed.
©Tormach® 2025
Specifications subject to change without notice.
Page 127
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 128

8.5 USE THE AUTOFS MATERIAL PICKER
PathPilot on the 1300PL is designed so that you don't need to
manually program feeds and speeds in your G-code. Instead,
feed rate, amperage, pierce parameters, and torch height
control voltage are all set at program run-time using
automatic look-up tables based on the material you're cutting.
AutoFS is designed so that you can export a program once
from your post-processor and run it multiple times with
different materials, all without re-posting. All material-specific
machine parameters are set by the M200 AutoFS M-code
(rather than directly programmed in the G-code).
8.5.1 Writing G-Code with AutoFS
A standard block of G-code before a cutting operation might
look like this:
M210 P123 (Set THC voltage to 123v)
M211 P45 (Set plasma source to 45A)
M207 P0.15 (Set pierce height to 0.15")
M208 P0.08 (Set cut height to 0.08")
M209 P2 (Set a two second pierce delay)
F225 (Set cutting feed rate of 225 IPM)
G15 (Perform ohmic probe)
G16 (Pierce and start cutting)
The block of code shown above is totally valid and can be used
if you prefer to hard code your cutting parameters.
Alternatively, the code shown above can be replaced with the
following when AutoFS is being used:
M200 (Set cutting parameters from AutoFS tables)
G15 (Perform ohmic probe)
G16 (Pierce and start cutting)
8.5.2 Using AutoFS
1.
On the Settings tab, select which plasma source you're
using from the Auto FS Plasma Source drop-down menu.
2.
Before running your program, select the material you're
cutting from the AutoFS dropdowns on the Main tab of
PathPilot.
The DROs turn green, which indicates that they were
automatically set.
With a material selected, the next time an M200 code is
encountered in a program, PathPilot will set all of the cutting
parameters for that material.
8.5.3 Creating Custom AutoFS Presets
Since your shop air supply and cutting conditions might differ
from those used to create the AutoFS presets, you can save
your own custom settings for a material at any time.
To create new AutoFS presets:
1.
From the Main tab, select the material you're cutting
from the AutoFS dropdowns, and then type your cut
parameters into the DRO fields.
2.
Select Save.
The values are stored as a new preset for that material.
8.5.4 Deleting Custom AutoFS Presets
1.
From the File tab, navigate to the fs_tables folder, and
open the plasma_user_fs_data.csv file.
2.
Highlight the line of the preset you want to delete and
delete it. Then, save the file.
Note: This file is read on boot only, so the
preset remains visible until the controller is
power cycled.
©Tormach® 2025
Specifications subject to change without notice.
Page 128
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.5 Use the AutoFS Material Picker


---

## PDF Page 129

PROGRAMMING
IN THIS SECTION, YOU'LL LEARN:
About the languages that are understood and interpreted by PathPilot.
CONTENTS
9.1 Before You Begin
130
9.2 Programming Overview
131
9.3 Programming G-Code
137
9.4 Programming M-Code
149
9.5 Programming Input Codes
154
9.6 Advanced Programming
155


---

## PDF Page 130

9.1 BEFORE YOU BEGIN
l Referring to This Section Use this section only for
reference. To learn about the principles of the control
language (so that you can write programs by hand from
first principles, for example), we recommend that you
consult an introductory textbook on G-code
programming.
l Creating and Editing G-Code Files We recommend
using a text editor like Gedit or Notepad++. Don't use a
word processor to create or edit G-code files — it'll
leave unseen codes that could cause problems or prevent
a G-code file from working.
©Tormach® 2025
Specifications subject to change without notice.
Page 130
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.1 Before You Begin


---

## PDF Page 131

9: PROGRAMMING
9.2 Programming Overview
9.2 PROGRAMMING OVERVIEW
Read the following sections for a G-code overview:
9.2.1 About G-Code Programming Language
131
9.2.2 G-Code Formatting Reference
131
9.2.3 Supported G-Codes Reference
135
9.2.1 About G-Code Programming Language
A G-code program is made up of one or more lines of code.
Each line of code is called a block, and can include commands
to the machine. Blocks are collected into a file, which makes a
program.
A block is normally made up of an optional line number at the
beginning, followed by one or more words, which groups the
elements together into a single statement.
A word is a letter followed by a number (or, something that
evaluates to a number). A word can either give a command or
provide an argument to a command.
A program is one or more blocks, each separated by a line
break. Blocks in a program are executed either:
l Sequentially (from the top of the program to the
bottom)
l Until an end command (M02 or M30) is encountered
E X A M P L E :
G01 X3 is a valid line of code with two words:
l G01 is a command: the machine should move in a
straight line at the programmed feed rate.
l X3 provides an argument value: the value of X
should be 3 at the end of the move.
Most commands start with either G (general) or M
(miscellaneous) — G-codes and M-codes.
There are two commands (M02 and M30) that end a program.
A program can end before the end of a file. If there are lines in
a file after the end of a program, they're not meant to be
executed in the normal flow (they're generally parts of
subroutines).
9.2.2 G-Code Formatting Reference
A permissible block of input code is made up of the following
programming elements, in order, with the restriction that
there is a maximum of 256 characters allowed on a line:
1.
(Optional) Block delete character (/)
2.
(Optional) Line number
3.
Any number of words, parameter settings, and
comments
4.
End of line marker (carriage return or line break)
Programs are limited to 999,999 lines of code.
Spaces and tabs are allowed anywhere on a line of code and
do not change the meaning of the line, except inside
comments. Blank lines are allowed in the input, but they're
ignored. Input is not case sensitive (except in comments), so
any letter outside a comment may be in uppercase or
lowercase without changing the meaning of a line.
E X A M P L E
G00 x +0. 12 34y 7 is equal to G00 x+0.1234
y7
A line may have:
l Any number of G words, but two G words from the same
modal group may not appear on the same line.
l Zero to four M words, but two M words from the same
modal group may not appear on the same line.
l For all other legal letters, a line may have only one word
beginning with that letter.
Any input not explicitly allowed is illegal, and causes the
interpreter to either signal an error or ignore the line.
PathPilot omits blocks of code that are prefixed with a block
delete character (/).
PathPilot sometimes ignores things it doesn't understand. If a
command doesn't work as expected, or does nothing, make
sure that it's correctly typed. PathPilot doesn't check for
excessively high machining feeds or speeds, and it doesn't
detect situations where a legal command will do something
unfortunate (like machining a fixture).
Line Numbers
A line number is indicated by the following, in the order listed:
1.
The letter N
2.
An integer (with no sign) between 0 and 99,999,999
(which must be written without commas)
Line numbers may be repeated, or used out of order, but that's
rare in normal practice. A line number isn't required, and is
often omitted.
Words
A word is indicated by the following, in the order listed:
©Tormach® 2025
Specifications subject to change without notice.
Page 131
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 132

1.
A letter other than N or O
2.
A real value
Letters
Words may begin with any of the following letters, except N or
O:
Note: Several letters (I, J, K, L, P and R) may have
different meanings in different contexts.
Letter
Description
A
A-axis
B
B-axis
C
C-axis
D
Tool radius compensation number
F
Feed rate
G
General function
H
Tool length offset index
I
X-axis offset for arcs
J
Y-axis offset for arcs
K
Z-axis offset for arcs
L
Number of repetitions in canned cycles and
subroutines, or key used with G10
M
Miscellaneous function
N
Line number
O
Subroutine label number
P
Dwell time in canned cycles, dwell time with G04,
key used with G10, or tapping depth in M871
through M874
Q
Feed increment in a G83 canned cycle, or
repetitions of subroutine call
R
Arc radius, or canned cycle retract level
S
Spindle speed
T
Tool selection
U
Synonymous with A
Letter
Description
V
Synonymous with B
W
Synonymous with C
X
X-axis
Y
Y-axis
Z
Z-axis
Values
A real value is one of the following:
l An explicit number (like 341, or -0.8807)
l An expression (like [2+2.4])
l A parameter value (like #88)
l A unary operation value (like acos[0])
Note: In the command examples that we use, the
tilde symbol (~) stands for a real value. If L~ is
written in an example, the ~ is often referred to as
the L number. Similarly the ~ in H~ may be called the
H number, and so on for any other letter.
A number is a subset of a real value. Processing a real value to
come up with a number is called evaluating. An explicit
number evaluates to itself.
Explicit numbers have the following rules (in this case, a digit
is a single character, 0 through 9):
l A number must consist of the following, in the order
listed:
1.
An optional plus or minus sign
2.
Zero to many digits
3.
(Optional) One decimal point
4.
Zero to many digits
l There must be at least one digit somewhere in the
number.
l It must be either an integer (no decimal point) or a
decimals (decimal point).
©Tormach® 2025
Specifications subject to change without notice.
Page 132
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.2 Programming Overview


---

## PDF Page 133

9: PROGRAMMING
9.2 Programming Overview
l It may have any number of digits (subject to line length
limitations).
Note: PathPilot only keeps 17 significant
figures, which is enough for all known
applications.
l A non-zero number with no sign as the first character is
assumed to be positive.
Initial zeros (a zero before the decimal point and the first non-
zero digit) and trailing zeros (a zero after the decimal point
and the last non-zero digit) are allowed, but not required. A
number written with initial or trailing zeros has the same
value when it is read as if the extra zeros were not there.
Numbers used for specific purposes by PathPilot are often
restricted to some finite set of values, or to some range of
values. In many uses, decimal numbers must be close enough
to an integer to be accepted as a valid input. A decimal
number which is supposed to be close to an integer is
considered close enough if it is within 0.0001 of an integer.
Order of Execution
If a parameter setting of the same parameter is repeated on a
line (like #3=15 #3=6), only the last setting takes effect. It's
illogical, but not illegal, to set the same parameter twice on
the same line.
The order of items on a line doesn't determine the order of
execution on the commands.
Three types of items' order may vary on a line (as given earlier
in this section):
l Word May be reordered in any way without changing
the meaning of the line.
l Parameter Setting If it's reordered, there is no change
in the meaning of the line unless the same parameter is
set more than once. In this case, only the last setting of
the parameter takes effect.
E X A M P L E
When the line #3=15 #3=6 is interpreted, the
value of parameter 3 is 6. If the order is reversed
to #3=6 #3=15 and the line is interpreted, the
value of parameter 3 is 15.
l Comment If it contains more than one comment and is
reordered, only the last comment is used. If each group
is kept in order or reordered without changing the
meaning of the line, then the three groups may be
interleaved in any way without changing the meaning of
the line.
E X A M P L E
G40 G01 #3=15 (foo) #4=-7.0 has five
items and means exactly the same thing in any of
the 120 possible orders, like #4=-7.0 G01
#3=15 G40 (foo), for the five items.
The order of execution of items on a line is critical to safe and
effective machine operation. If items occur on the same line,
they are executed in a particular order. To impose a different
order (like to turn coolant off before the spindle is stopped),
code the commands on separate blocks.
The order of execution is as follows:
1.
Comment (including message)
2.
Set feed rate mode (G93, G94, G95)
3.
Set feed rate (F)
4.
Set spindle speed (S)
5.
Special I/O (M62 to M68)
Note: This is not supported.
6.
Change tool (T)
7.
Spindle on/off (M03, M04, M05)
8.
Save State (M70, M73, restore state (M72), invalidate
state (M71)
9.
Coolant on/off (M07, M08, M09)
10.
Enable/disable overrides (M48, M49, M50, M51, M52,
M53)
11.
Operator defined commands (M101 to M199)
12.
Dwell (G04)
13.
Set active plane (G17, G18, G19)
14.
Set length units (G20, G21)
15.
Cutter radius compensation on/off (G40, G41, G42)
16.
Tool table offset on/off (G43, G49)
17.
Fixture table select (G54 through G58 and G59 P~)
18.
Set path control mode (G61, G61.1, G64)
19.
Set distance mode (G90, G91)
20.
Set canned cycle return level mode (G98, G99)
©Tormach® 2025
Specifications subject to change without notice.
Page 133
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 134

21.
Home, change coordinate system data (G10) or set
offsets (G92, G94)
22.
Perform motion (G00 to G03, G12, G13, G80 to G89 as
modified by G53)
23.
Stop (M00, M01, M02, M30, M60)
Modal Groups
G- and M-codes are, generally speaking, modal — they cause
the machining system to change from one mode to another.
The mode stays active until another command changes it
implicitly or explicitly.
E X A M P L E
If coolant is turned on (M07 or M08), it stays on until it is
explicitly turned off in the program (M09).
A few G-codes and M-codes are non-modal (like Dwell (G04)).
These codes have effect only on the lines on which they occur.
Modal commands are arranged in sets, called modal groups.
Only one member of a modal group may be in force at any
given time. In general, a modal group contains commands for
which it is logically impossible for two members to be in effect
at the same time (like inch units (G20) vs. millimeter units
(G21)).
A machining system may be in many modes at the same time,
with one mode from each modal group being in effect.
For all G-code modal groups, when a machining system is
ready to accept commands, one member of the modal group
must be in effect. There are default settings for these modal
groups. When the machining system is turned on or re-
initialized, default values are automatically in effect.
Modal groups for G-codes are detailed in the following table.
Group
Commands
Group Description
Group
1
{G00, G01,
G02, G03,
G33,
G37/G37.1,
G38.x, G73,
G76, G80,
G81, G82,
G84, G85,
G86, G88,
G89}
Motion (one always in effect)
Group
Commands
Group Description
Group
2
{G17, G18,
G19, G17.1,
G17.2, G17.3}
Plane selection
Group
3
{G90, G91}
Distance mode
Group
4
{G90.1,
G91.1}
Arc distance mode
Group
5
{G93, G94}
Feed rate mode
Group
6
{G20, G21}
Length units
Group
7
{G40, G41,
G42, G41.1,
G42.1}
Cutter compensation
Group
8
{G43, G43.1,
G49}
Tool length offset
Group
10
{G98, G99}
Return mode in canned cycles
Group
12
{G54, G55,
G56, G57,
G58, G59,
G59.1, G59.2,
G59.3}
Select work offset coordinate
system
Group
13
{G61, G61.1,
G64}
Path control mode
Group
14
{G96, G97}
Spindle control mode
Group
15
{G07, G08}
Lathe diameter mode
Modal groups for M-codes are detailed in the following table.
Group
Commands
Group Description
Group
4
{M00, M01,
M02, M30,
M60}
Program stop and program end
Group
7
{M03, M04,
M05}
Spindle control
©Tormach® 2025
Specifications subject to change without notice.
Page 134
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.2 Programming Overview


---

## PDF Page 135

9: PROGRAMMING
9.2 Programming Overview
Group
Commands
Group Description
Group
8
{M07, M08,
M09}
Coolant control (special case:
M07 and M08 may be active at
the same time)
Group
9
{M48, M49}
Override control
Non-modal G-codes are:
l Group 0 {G04, G10, G28, G30, G53, G92, G92.1, G92.2,
G92.3}
Comments
You can add comments to lines of G-code to help clarify the
intention of the programmer. To embed a comment in a line,
use parentheses. To add a comment to the end of a line, use a
semicolon.
Note: The semicolon is not treated as the start of a
comment when it's enclosed in parentheses.
Comments can appear between words, but they can't be
between words and their corresponding parameter.
E X A M P L E :
S100(set speed)F200(feed) is okay, but S
(speed)100F(feed) is not.
9.2.3 Supported G-Codes Reference
G-Code
Description
G00
Rapid linear motion
G01
Linear motion at feed rate
G02
Clockwise arc at feed rate
G03
Counterclockwise arc at feed rate
G04
Dwell
G10 L1
Set tool table
G10 L2
Set coordinate system
G10 L10
Set tool table – calculated – workpiece
G10 L11
Set tool table – calculated – fixture
G10 L20
Set coordinate system
G-Code
Description
G15
Workpiece probe
G16
Pierce
G17, G18,
G19
Plane selection
G20/G21
Length units
G28
Return to predefined position
G28.1
Return to predefined position
G30
Return to predefined position
G33
Spindle synchronized motion (like threading)
G33.1
Rigid tapping
G37/G37.1
Automatically measure tool lengths with an
ETS
G38.x
Straight probe
G40
Cancel cutter compensation
G41/G42
Cutter compensation (left/right)
G41.1,
G42.1
Dynamic cutter compensation
G43
Apply tool length offset
G47
Engrave sequential serial number
G49
Cancel tool length compensation
G53
Absolute coordinates
G54-G59.3
Select work offset coordinate system
G61/G61.1
Set exact path control mode
G64
Set blended path control mode
G73
High-speed peck drill
G76
Multi-pass threading cycle
G80
Cancel canned cycles
G81
Drilling cycle
G82
Simple drilling cycle
G83
Peck drilling cycle
G85
Boring cycle
©Tormach® 2025
Specifications subject to change without notice.
Page 135
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 136

G-Code
Description
G86
Boring cycle
G88
Boring cycle
G89
Boring cycle
G90,
G90.1
Arc distance mode
G91,
G91.1
Incremental distance mode
G92
Offset coordinates and set parameters
G92.x
Cancel G92, etc.
G93, G94,
G95
Feed rate mode
G96, G97
Spindle control mode
G98
Initial level return / R-point level after canned
cycles
©Tormach® 2025
Specifications subject to change without notice.
Page 136
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.2 Programming Overview


---

## PDF Page 137

9: PROGRAMMING
9.3 Programming G-Code
9.3 PROGRAMMING G-CODE
Read the following sections as a G-code reference:
9.3.1 About the Examples Used
137
9.3.2 Rapid Linear Motion (G00)
137
9.3.3 Linear Motion at Feed Rate (G01)
138
9.3.4 Arc at Feed Rate (G02 and G03)
138
9.3.5 Dwell (G04)
141
9.3.6 Set Offsets (G10)
141
9.3.7 Workpiece Probe (G15)
142
9.3.8 Pierce (G16)
142
9.3.9 Plane Selection (G17, G18, G19)
142
9.3.10 Length Units (G20 and G21)
142
9.3.11 Return to Predefined Position (G28 and G28.1)
142
9.3.12 Return to Predefined Position (G30 and G30.1)
142
9.3.13 Automatically Measure Tool Lengths with an ETS
(G37 and G37.1)
143
9.3.14 Straight Probe (G38.x)
144
9.3.15 Cutter Compensation (G40, G41, G42)
145
9.3.16 Dynamic Cutter Compensation (G41.1 and G42.1) 145
9.3.17 Apply Tool Length Offset (G43)
145
9.3.18 Engrave Sequential Serial Number (G47)
145
9.3.19 Cancel Tool Length Compensation (G49)
146
9.3.20 Absolute Coordinates (G53)
146
9.3.21 Select Work Offset Coordinate System (G54 to
G54.1 P500)
146
9.3.22 Set Exact Path Control Mode (G61)
147
9.3.23 Set Blended Path Control Mode (G64)
147
9.3.24 Distance Mode (G90 and G91)
147
9.3.25 Arc Distance Mode (G90.1 and G91.1)
147
9.3.26 Temporary Work Offsets (G92, G92.1, G92.2, and
G92.3)
147
9.3.27 Feed Rate Mode (G93, G94, and G95)
148
9.3.28 Spindle Control Mode (G96 and G97)
148
9.3.1 About the Examples Used
Many commands require axis words (X~, Y~ ,Z~, or A~) as an
argument. Unless explicitly stated otherwise, you can make
the following assumptions:
l Axis words specify a destination point
l Axis words relate to the currently active coordinate
system, unless explicitly described as being in the
absolute coordinate system
l Where axis words are optional, any omitted axes retain
their current value
Any items in the command examples not explicitly described
as optional are required.
9.3.2 Rapid Linear Motion (G00)
For rapid linear motion, program: G00 X~ Y~ Z~ A~
l X~ is the X-axis coordinate
l Y~ is the Y-axis coordinate
l Z~ is the Z-axis coordinate
l A~ is the A-axis coordinate
This produces coordinated linear motion to the destination
point at the current traverse rate (or slower, if the machine
won't go that fast). It's expected that cutting won’t take place
when a G00 command is executing. The G00 is optional if the
current motion mode is G00.
Depending on where the tool is located, follow these two basic
rules:
1.
If the Z value represents a cutting move in the positive
direction (like out of a hole), the X-axis should be moved
last.
2.
If the Z value represents a move in the negative
direction, the X-axis should be moved first.
Conditions
The motion differs if:
l Cutter radius compensation is active
l G53 is programmed on the same line
Troubleshooting
It's an error if:
l All axis words are omitted
The axis words are optional, except that at least one
must be used.
l G10, G28, G30 or G92 appear in the same block
©Tormach® 2025
Specifications subject to change without notice.
Page 137
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 138

9.3.3 Linear Motion at Feed Rate (G01)
For linear motion at feed rate (for cutting or not), program:
G01 X~ Y~ Z~ A~ F~
l X~ is the X-axis coordinate
l Y~ is the Y-axis coordinate
l Z~ is the Z-axis coordinate
l A~ is the A-axis coordinate
l F~ is the feed rate
This produces coordinated linear motion to the destination
point at the current feed rate (or slower, if the machine won’t
go that fast). The G01 is optional if the current motion mode is
G01.
Conditions
The motion differs if:
l Cutter radius compensation is active
l G53 is programmed on the same line
Troubleshooting
It's an error if:
l All axis words are omitted
The axis words are optional, except that at least one
must be used.
l G10, G28, G30, or G92 appear in the same block
l No F word is specified
9.3.4 Arc at Feed Rate (G02 and G03)
A circular or helical arc is specified using either G02 (clockwise
arc) or G03 (counterclockwise arc). The axis of the circle or
helix must be parallel to the X-, Y- or Z-axis of the machine
coordinate system. The axis (or equivalently, the plane
perpendicular to the axis) is selected with G17 (Z-axis, XY-
plane), G18 (Y-axis, XZ-plane) or G19 (X-axis, YZ-plane). If the
arc is circular, it lies in a plane parallel to the selected plane.
If a line of code makes an arc and includes rotational axis
motion, the rotational axes turn at a constant rate so that the
rotational motion starts and finishes when the XYZ motion
starts and finishes. This is rare.
The motion differs if cutter radius compensation is active.
Two formats are allowed for specifying an arc: the center
format and the radius format. In both formats, the G02 or G03
is optional if it's the current motion mode.
Radius Format Arc
For a clockwise arc in radius format, program: G02 X~ Y~
Z~ A~ R~
For a counterclockwise arc in radius format, program: G03 X~
Y~ Z~ A~ R~
l X~ is the X-axis coordinate
l Y~ is the Y-axis coordinate
l Z~ is the Z-axis coordinate
l A~ is the A-axis coordinate
l R~ is the radius of the arc
In radius format, the coordinates of the end point of the arc in
the selected plane are specified along with the radius of the
arc. A positive radius indicates that the arc turns through 180
degrees or less, while a negative radius indicates a turn of 180
degrees to 359.999 degrees.
If the arc is helical, the value of the end point of the arc on the
coordinate axis parallel to the axis of the helix is also specified.
We don't recommend programming radius format arcs that
are:
l Nearly full circles
l Semicircles
l Nearly semicircles
A small change in the location of the end point produces a
much larger change in the location of the center of the circle
(and the middle of the arc). The magnification effect is large
enough that rounding error in a number can produce out-of-
tolerance cuts.
You can program arcs that are:
l Up to 165 degrees
l Between 195 degrees to 345 degrees
E X A M P L E
G17 G02 X 1.0 Y 1.5 R 2.0 Z 0.5 is a radius
format command to mill an arc, which makes a
clockwise (as viewed from the positive Z-axis) circular or
helical arc whose axis is parallel to the Z-axis, ending
where X = 1.0, Y = 1.5, and Z = 0.5, with a radius of 2.0.
If the starting value of Z is 0.5, this is an arc of a circle
parallel to the XY-plane; otherwise, it's a helical arc.
Troubleshooting
It's an error if:
©Tormach® 2025
Specifications subject to change without notice.
Page 138
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 139

9: PROGRAMMING
9.3 Programming G-Code
l Both of the axis words for the axes of the selected plane
are omitted
The axis words are all optional except that at least one
of the two words for the axes in the selected plane must
be used.
l No R word is given
l The end point of the arc is the same as the current point
l G10, G28, G30, or G92 appear in the same block
Center Format Arc
For a clockwise arc in center format, program: G02 X~ Y~
Z~ I~ J~
For a counterclockwise arc in center format, program: G03 X~
Y~ Z~ I~ J~
l X~ is the X-axis coordinate
l Y~ is the Y-axis coordinate
l Z~ is the Z-axis coordinate
l A~ is the A-axis coordinate
l I~ is the center of arc (X coordinate)
l J~ is the center of arc (Y coordinate)
l K~ is the center of arc (Z coordinate)
In the center format, the coordinates of the end point of the
arc in the selected plane are specified along with the offsets of
the center of the arc from the current location. In this format,
it's okay if the end point of the arc is the same as the current
point.
The center is specified using the I, J, K words associated with
the active plane. These specify the center relative to the
current point at the start of the arc, defined in incremental
coordinates from the start point.
It's an error if:
l When the arc is projected on the selected plane, the
distance from the current point to the center differs
from the distance from the end point to the center by
more than 0.0002 inches (if you're programming in
inches) or 0.002 millimeters (if you're programming in
millimeters)
l G10, G28, G30, or G92 appear in the same block
Arc in XY Plane
When the XY-plane is selected, program: G02 X~ Y~ Z~ A~
I~ J~ (or, use G03 instead of G02)
I and J are the offsets from the current location or coordinates
– depending on arc distance mode (G90.1/G91.1) of the center
of the circle (X and Y directions, respectively).
It's an error if:
l X and Y are both omitted
The axis words are all optional except that at least one
of X and Y must be used.
l I and J are both omitted
I and J are optional except that at least one of the two
must be used.
Arc in XZ Plane
When the XZ-plane is selected, program: G02 X~ Y~ Z~ A~
I~ K~ (or, use G03 instead of G02)
I and K are the offsets from the current location or coordinates
– depending on arc distance mode (G90.1/G91.1) of the center
of the circle (X and Z directions, respectively).
It's an error if:
l X and Z are both omitted
The axis words are all optional except that at least one
of X and Z must be used.
l I and K are both omitted
I and K are optional except that at least one of the two
must be used.
Arc in YZ Plane
When the YZ-plane is selected, program: G02 X~ Y~ Z~ A~
J~ K~ (or, use G03 instead of G02)
J and K are the offsets from the current location or coordinates
– depending on depending on arc distance mode
(G90.1/G91.1) of the center of the circle (Y and Z directions,
respectively).
It's an error if:
l Y and Z are both omitted
The axis words are all optional except that at least one
of Y and Z must be used.
l J and K are both omitted
J and K are optional except that at least one of the two
must be used.
©Tormach® 2025
Specifications subject to change without notice.
Page 139
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 140

E X A M P L E
G17 G02 X1.0 Y1.6 I0.3 J0.4 Z0.9 is a center
format command to mill an arc in incremental arc
distance mode (G91.1) that makes a clockwise (as
viewed from the positive Z-axis), circular, or helical arc
whose axis is parallel to the Z-axis, ending where X =
1.0, Y = 1.6, and Z = 0.9, with its center offset in the X
direction by 0.3 units from the current X location and
offset in the Y direction by 0.4 units from the current Y
location. If the current location has X = 0.7, Y = 0.7 at the
outset, the center is at X = 1.0, Y = 1.1. If the starting
value of Z is 0.9, this is a circular arc; otherwise, it's a
helical arc. The radius of this arc would be 0.5.
In the center format, the radius of the arc is not specified, but
it may be found easily as the distance from the center of the
circle to either the current point or the end point of the arc.
(Sample Program G02EX3:)
(Workpiece Size: X4, Y3, Z1)
(Tool: Tool #2, 1/4” Slot Drill)
(Tool Start Position: X0, Y0, Z1)
N2 G90 G80 G40 G54 G20 G17 G94 G64 (SAFETY BLOCK)
N5 G90 G20
N10 M06 T2 G43 H2
N15 M03 S1200
N20 G00 X1 Y1
N25 Z0.1
N30 G01 Z-0.1 F5
N35 G02 X2 Y2 I1 J0 F20 (ARC FEED CW, RADIUS I1,J0
AT 20 IPM)
N40 G01 X3.5
N45 G02 X3 Y0.5 R2 (ARC FEED CW, RADIUS 2)
N50 X1 Y1 R2 (ARC FEED CW, RADIUS 2)
N55 G00 Z0.1
N60 X2 Y1.5
N65 G01 Z-0.25
N70 G02 X2 Y1.5 I0.25 J-0.25 (FULL CIRCLE ARC FEED
MOVE CW)
N75 G00 Z1
N80 X0 Y0
N85 M05
N90 M30
©Tormach® 2025
Specifications subject to change without notice.
Page 140
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 141

9: PROGRAMMING
9.3 Programming G-Code
9.3.5 Dwell (G04)
For a dwell, program: G04 P~
l P~ is the dwell time (measured in seconds)
Dwell keeps the axes unmoving for the period of time in
seconds specified by the P number.
E X A M P L E
G04 P4.2 (to wait 4.2 seconds)
Troubleshooting
It's an error if:
l The P number is negative
9.3.6 Set Offsets (G10)
Use the controls on the Offsets tab to set offsets. You can
program offsets with the G10 G-code command.
Read the following sections for reference:
Set Tool Table (G10 L1)
141
Set Tool Table (G10 L10)
141
Set Tool Table (G10 L11)
141
Set Coordinate System (G10 L20)
141
Set Tool Table (G10 L1)
To define an entry in the tool table, program: G10 L1 P~ R~
l P~ is the tool number
l R~ is the radius of tool
G10 L1 sets the tool table for the P tool number to the values
of the words. A valid G10 L1 rewrites and reloads the tool
table.
Troubleshooting
It's an error if:
l Cutter Compensation is on
l The P number is unspecified
l The P number is not a valid tool number from the tool
table
l The P number is 0
Set Tool Table (G10 L10)
To change the tool table entry for tool P so that if the tool
offset is reloaded with the machine in its current position and
with the current G5x and G92 offsets active, program: G10
L10 P~ R~
l P~ is the tool number
l R~ is the radius of tool
The current coordinates for the given axes become the given
values. The axes that are not specified in the G10 L10
command are not changed. This could be useful with a probe
move (G38).
Troubleshooting
It's an error if:
l Cutter Compensation is on
l The P number is unspecified
l The P number is not a valid tool number from the tool
table
l The P number is 0
Set Tool Table (G10 L11)
G10 L11 is just like G10 L10, except that instead of setting
the entry according to the current offsets, it's set so that the
current coordinates would become the given value if the new
tool offset is reloaded and the machine is placed in the G59.3
coordinate system without any G92 offset active. This allows
you to set the G59.3 coordinate system according to a fixed
point on the machine, and then use that fixture to measure
tools without regard to other currently active offsets.
Program: G10 L11 P~ X~ Y~ Z~ R~
l P~ is the tool number
l R~ is the radius of tool
Troubleshooting
It's an error if:
l Cutter Compensation is on
l The P number is unspecified
l The P number is not a valid tool number from the tool
table
l The P number is 0
Set Coordinate System (G10 L20)
G10 L20 is similar to G10 L2, except that instead of setting
the offset/entry to the given value, it is set to a calculated
value that makes the current coordinates become the given
value.
Program: G10 L20 P~ X~ Y~ Z~ A~
l P~ is the number of coordinate system to use (G54 = 1,
G59.3 = 9)
l X~ is the X-axis coordinate
©Tormach® 2025
Specifications subject to change without notice.
Page 141
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 142

l Y~ is the Y-axis coordinate
l Z~ is the Z-axis coordinate
l A~ is the A-axis coordinate
Troubleshooting
It's an error if:
l The P number does not evaluate to an integer in the
range 0 to 9
l An axis other than X, Y, Z, or A is programmed
9.3.7 Workpiece Probe (G15)
Probe vertically downwards towards the end of travel until the
ohmic cap contacts the work piece.
Once the workpiece has been located, the Z coordinate of the
current coordinate system is set to zero.
G15 will trigger on either the ohmic cap making continuity
with the workpiece or the physical touch switch in the torch
lifter detecting upwards pressure on the torch from the
material.
9.3.8 Pierce (G16)
Raise the torch to the pierce height set in the variable #<_
PierceHeight>. The torch is turned on and the program pauses
for the pierce delay value set by AutoFS or M209.
After the pierce delay, Torch Height Control (THC) is enabled
and the program continues.
9.3.9 Plane Selection (G17, G18, G19)
To select the XY-plane as active, program: G17
To select the XZ-plane as active, program: G18
To select the YZ-plane as active, program: G19
The active plane determines how the tool path of an arc (G02
or G03) or canned cycle (G73, G81 through G89) is
interpreted.
9.3.10 Length Units (G20 and G21)
To set length units to inches, program: G20
To set length units to millimeters, program: G21
Tip! Program either G20 or G21 near the beginning
of a program, before any motion occurs. Avoid using
either one anywhere else in the program. It's your
responsibility to make sure that all numbers are
appropriate for use with the current length units.
9.3.11 Return to Predefined Position (G28 and
G28.1)
To make a rapid linear move from the current position to the
absolute position of the values in parameters 5161-5166: G28
To make a rapid linear move to the G28.1 position by first
going to the intermediate position specified by the X~, Y~, and
Z~ words, program: G28 X~ Y~ Z~
Note: Any axis not specified won't move.
To store the current location of the tool in the G28.1 setting,
program: G28.1
G28 uses the values stored in parameters 5161, 5162, and
5163 as the X, Y, and Z final points to move to. The parameter
values are absolute machine coordinates in the native machine
units of inches.
To store the current absolute position into parameters 5161-
5163, program: G28.1
Troubleshooting
It's an error if:
l Cutter Compensation is turned on
9.3.12 Return to Predefined Position (G30 and
G30.1)
G30 uses the values stored in parameters 5181 and 5183 as
the X and Z final point to move to. The parameter values are
absolute machine coordinates in the native machine units of
inches.
To make a rapid traverse move from the current position to the
absolute position of the values in parameters, program: G30
To make a rapid traverse move to the position specified by
axes including any offsets, then make a rapid traverse move to
the absolute position of the values in parameters 5181 and/or
5183, program: G30 X~ Z~
Note: Any axis not specified won't move.
To store the current absolute position into parameters 5181-
5183, program: G30.1
Troubleshooting
It's an error if:
l Cutter Compensation is turned on
©Tormach® 2025
Specifications subject to change without notice.
Page 142
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 143

9: PROGRAMMING
9.3 Programming G-Code
9.3.13 Automatically Measure Tool Lengths with an
ETS (G37 and G37.1)
Use G37 and G37.1 with an Electronic Tool Setter (ETS) to
enable automatic length measurement. For automated use,
add a G37 command after an M6 tool change commands.
If you're using the ETS with a mill, the input port varies
depending on your machine:
l M Series Mills Plug the ETS into the Accessory Input 2
port. You can still use the Accessory Input 1 port for
other probes and accessories.
l Older PCNC Mills Plug the ETS into the (single)
accessory input port.
Move to G37 Position Over ETS (G37.1)
To move to the G37 position (over the ETS), program: G37.1
To set the G37 position:
1.
Jog the machine over the center of the ETS.
2.
From the Probe tab, on the ETS Setup tab, select Set G37
ETS Position.
The read-only DROs in the ETS G37 Position Setup group
display the new position.
The G37 position is in G53 machine coordinate space. It
defaults to (0, 0, 0), or the top left rear of machine travel (the
same as the X-, Y-, and Z-axis reference position).
G37.1 supports X and Y tool offsets. If there are X or Y tool
offsets present in the tool table (manually applied through a
G10 L1 command), they offset the spindle position. This
enables G37 for tools mounted in an auxiliary spindle installed
on the spindle column.
Note: If G10 L1 is used to change the X or Y offset of
the currently loaded tool, you must then apply the
new offsets with a G43 command.
G37.1 performs as follows:
1.
A rapid upward move to the Z clear position (which is
always G53 Z = 0.0).
2.
A rapid move in X and Y to the X and Y ETS coordinates.
3.
A rapid downward move in Z to the Z ETS coordinate.
Note: The Z word saves time by rapidly moving
closer to the ETS before the slower probing
begins. You must use caution if you set this
lower than G53 Z = 0.0. If you don't, there's a
risk that a long tool could collide with the ETS
and damage it and the tool.
Move and Measure Tool Length (G37)
To move and measure the tool length, program: G37 H~ P~
l H~ saves the measured tool length to the H tool table
entry instead of the current tool number's entry.
You could use this to track tool wear between the two
tool table entries, for example.
Note: The newly measured tool length isn't
applied, but it's stored in the tool table entry
for tool number H.
l P~ is positive or negative tolerance. It measures the tool
length, but, instead of storing it in the tool table,
compares it to the length in the tool table. If the
difference exceeds the P tolerance, the G-code program
stops.
You could use this to detect broken or improperly
inserted tools that are not fully seated in the spindle, for
example.
G37 with no optional words moves to the G37 ETS position
(through G37.1), probes the ETS, stores the new tool length in
the tool table entry of the current tool, and applies the tool
length offset.
G37 fails if the spindle nose hasn't been referenced to the ETS
after a Z-axis reference. This sets a G53 coordinate at the ETS
trigger point such that the measured tool length is the distance
of the spindle nose to ETS reference. For more information,
see the ETS G37 Spindle Nose Reference group on the
ETS Setup tab.
So that tool length measurements have consistent results, G37
uses the fine probe feed rate of 2.5 in./min for the final ETS
touch. G37 uses the rough probe feed rate for the first ETS
touch.
G37 performs as follows:
1.
Issues a G37.1 move to the ETS location.
2.
A downward rough probe feed rate move until the tool
triggers the ETS.
©Tormach® 2025
Specifications subject to change without notice.
Page 143
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 144

3.
An upward retract move of 0.100 in. to back off the
triggered ETS.
4.
A downward slow ETS probe feed rate move until the
tool triggers the ETS.
5.
An upward retract move of 0.100 in. to back off the
triggered ETS.
6.
An upward rapid move to the G37 ETS Z position.
9.3.14 Straight Probe (G38.x)
G38.2 probes toward the workpiece, stops on contact, and
signals error if failure
G38.3 probes toward the workpiece and stops on contact
G38.4 probes away from the workpiece, stops on loss of
contact, and signals error if failure
G38.5 probes away from the workpiece and stops on loss of
contact
G38.6 moves away from the workpiece and ignores probe
input
To perform a straight probe operation program: G31 X~ Y~
Z~ A~
Conventionally, the probe is tool #99. The rotational axis words
are allowed, but it's better to omit them. If rotational axis
words are used, the numbers must be the same as the current
position numbers so that the rotational axes do not move. The
tool in the spindle must be a probe.
In response to this command, the machine moves the
controlled point (which should be at the end of the probe tip)
in a straight line at the current feed rate toward the
programmed point; if the probe trips, then the probe
decelerates.
After successful probing, parameters 5061 to 5064 will be set
to the coordinates of the location of the controlled point at the
time the probe tripped (not where it stopped), or if it does not
trip to the coordinates at the end of the move and a triplet
giving X, Y, and Z at the trip is written to the triplet file.
Troubleshooting
It's an error if:
l The current point is less than 0.01 in. (0.254 mm) from
the programmed point
l G38 is used in inverse time feed rate mode
l Any rotational axis is commanded to move
l No X-, Y- or Z-axis word is used
The linear axis words are optional, except that at least
one of them must be used.
l Feed rate is zero
l The probe is already tripped
Use the Straight Probe Command
When you use the straight probe command, if the probe shank
is kept nominally parallel to the Z-axis (i.e., any rotational axes
are at zero) and the tool length offset for the probe is used, so
that the controlled point is at the end of the tip of the probe,
you may be able to find:
l Without additional knowledge about the probe, the
parallelism of a face of a part to the XY-plane
l If the probe tip radius is known approximately, the
parallelism of a face of a part to the YZ or XZ-plane
l If the shank of the probe is known to be well-aligned
with the Z-axis and the probe tip radius is known
approximately, the center of a circular hole
If the shank of the probe is known to be well-aligned with the
Z-axis and the probe tip radius is known precisely, you can use
the straight probe command for things like finding the
diameter of a circular hole.
Example code:
o<probe_pocket> sub
(probe to find center of circular or rectangular
pocket)
#<x_start> = #5420 (Current X Location)
#<y_start> = #5421 (Current Y Location)
#<x_max> = 1
#<x_min> = -1
#<y_max> = 1
#<y_min> = -1
#<feed_rate> = 30 (30 IPM)
F #<feed_rate>
G38.3 X #<x_max> (rough probe +X side of hole)
F [#<feed_rate>/30]
G38.5 X #<x_start> (finish probe)
#<x_plus>=#5061 (save results)
G00 X #<x_start> (return to start)
F #<feed_rate>
G38.3 X #<x_min> (probe -X side of hole)
F [#<feed_rate>/30]
G38.5 X #<x_start>
#<x_minus>=#5061 (save results)
G00 X #<x_start>
#<x_center> = [[#<x_plus>+#<x_minus>]/2]
G00 X #<x_center> (go to middle)
©Tormach® 2025
Specifications subject to change without notice.
Page 144
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 145

9: PROGRAMMING
9.3 Programming G-Code
F #<feed_rate>
G38.3 Y #<y_max> (probe +Y side of hole)
F [#<feed_rate>/30]
G38.5 Y #<y_start>
#<y_plus>=#5062 (save results)
G00 Y #<y_start> (return to start)
F #<feed_rate>
G38.3 Y #<y_min> (probe -Y side of hole)
F [#<feed_rate>/30]
G38.5 Y #<y_start>
#<y_minus>=#5062 (save results)
G00 Y #<y_start>
#<y_center> = [[#<y_plus>+#<y_minus>]/2]
G00 Y #<y_center> (go to middle)
G10 L20 P1 X 0 Y 0 (set current location to zero)
F #<feed_rate> (restore original feed rate)
o<probe_pocket> endsub
M02
9.3.15 Cutter Compensation (G40, G41, G42)
To turn Cutter Compensation off, program: G40
It's okay to turn compensation off when it is already off.
It's an error if:
l A G02/G03 arc move is programmed next after a G40
l The linear move after turning compensation off is less
than twice the tool tip radius
To program Cutter Compensation to the left of the
programmed tool path (as viewed looking down on the
machine), program: G41 D~
To program Cutter Compensation to the right of the
programmed tool path (as viewed looking down on the
machine), program: G42 D~
l D~ is the tool number associated with the diameter
offset to be applied
The D word is optional — if there is no D word, the radius of
the currently loaded tool is used. If no tool is loaded and no D
word is given, a radius of 0 is used. If supplied, the D word is
the tool number to use.
The lead in move must be at least as long as the tool radius.
The lead in move can be a rapid move.
It's an error if:
l The D number is not a valid tool number, or it's 0
l Cutter Compensation is commanded to turn on when it is
already on
9.3.16 Dynamic Cutter Compensation (G41.1 and
G42.1)
To program dynamic Cutter Compensation to the left of the
programmed tool path, program: G41.1 D~
To program dynamic Cutter Compensation to the right of the
programmed tool path, program: G42.1 D~
l D~ is the tip radius multiplied by two
G41.1 and G42.1 function the same as G41 and G42, with
the added scope of being able to ignore the tool table and to
program the tool diameter.
Troubleshooting
It's an error if:
l Cutter Compensation is commanded to turn on when it is
already on
9.3.17 Apply Tool Length Offset (G43)
To apply a tool length offset from a stored value in the tool
table, program: G43 H~
l H~ is the tool number associated with the length offset
to be applied.
Note: Generally speaking, the value of the H~
word should match the active tool number (T~
word).
It's okay to program using the same offset already in use, or to
program without a tool length offset (if none is currently being
used).
Troubleshooting
It's an error if:
l The H number is not an integer
l The H number is negative
l The H number is not a valid tool number
9.3.18 Engrave Sequential Serial Number (G47)
To engrave a serial number, either alone or added to the end
of any text, program: Z~ R~ X~ Y~ P~ Q~ D~
l Z~ is the depth of cut of the engraving
l R~ is the retract height between character segments in
the numbers
l X~ is, if present, the starting X position, or the left side
of the serial number
If omitted, the current X position is assumed.
©Tormach® 2025
Specifications subject to change without notice.
Page 145
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 146

l Y~ is, if present, the starting Y position, or the bottom
side of the serial number
If omitted, the current Y position is assumed.
l P~ is, if present, the X extent (width) in current units
(inches or millimeters) of the engraved number
l Q~ is, if present, the Y extent (height) in current units
(inches or millimeters) of the engraved number
l D~ is, if present, the requested number of decimals of
the engraved number
If the requested D value exceeds the number of decimals
in the serial number, the serial number will show
leading zeros. If the requested D value is less than the
number of decimals in the serial number, only the digits
of the serial number will show.
E X A M P L E
A serial number of 10, where D = 4, engraves as
0010. A serial number of 9056, where D = 3,
engraves as 9056.
Troubleshooting
It's an error if:
l Cutter Compensation is on
l The Z number is unspecified
l The R number is unspecified
l The Z number is greater than the R number
l The P number is too small (determined by the font used)
l The Q number is too small (determined by the font used)
9.3.19 Cancel Tool Length Compensation (G49)
To cancel tool length compensation, program: G49
9.3.20 Absolute Coordinates (G53)
For rapid linear motion to a point expressed in absolute
coordinates, program: G01 G53 X~ Y~ Z~ (or use with G00
instead of G01)
All the axis words are optional, except that at least one must
be used. The G00 or G01 is optional if it is in the current
motion mode. G53 isn't modal, and must be programmed on
each line on which it is intended to be active. This produces
coordinated linear motion to the programmed point. If G01 is
active, the speed of motion is the current feed rate (or slower
if the machine won’t go that fast). If G00 is active, the speed
of motion is the current traverse rate (or slower if the machine
won’t go that fast).
Troubleshooting
It's an error if:
l G53 is used without G00 or G01 being active
l G53 is used while cutter radius compensation is on
9.3.21 Select Work Offset Coordinate System (G54
to G54.1 P500)
You can save up to 500 work offsets in PathPilot. The naming
structure varies based on the offset number.
l To select work offset 1, program: G54 or G54.1 P1
l To select work offset 2, program: G55 or G54.1 P2
l To select work offset 3, program: G56 or G54.1 P3
l To select work offset 4, program: G57 or G54.1 P4
l To select work offset 5, program: G58 or G54.1 P5
l To select work offset 6, program: G59 or G54.1 P6
l To select work offset 7, program: G59.1 or G54.1 P7
l To select work offset 8, program: G59.2 or G54.1 P8
l To select work offset 9, program: G59.3 or G54.1 P9
l To select a work offset beyond the standard 9 (listed
above), program: G54.1 P###, where P### is a
parameter indicating the index of the work offset you
want to use (work offset 10 through work offset 500).
E X A M P L E
To select the 124th work offset, program G54.1
P124.
For information, see "About Work Offsets" (page 105).
Troubleshooting
It's an error if:
l One of these G-codes is used while cutter radius
compensation is on
©Tormach® 2025
Specifications subject to change without notice.
Page 146
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 147

9: PROGRAMMING
9.3 Programming G-Code
l The X- and Z-axis work offset values are stored in
parameters corresponding to the system in use (i.e.,
System 1 X=5221, Z=5223; System 2 X=5141, Z=5143; up
to System 9 X= 5381, Z = 5383).
9.3.22 Set Exact Path Control Mode (G61)
To put the machining system into exact path mode, program:
G61
9.3.23 Set Blended Path Control Mode (G64)
To attempt to maintain the defined feed velocity, program:
G64 P~ Q~
l P~ is, if present, the maximum acceptable tool path
deviation to round corners to maintain speed.
If P is omitted then the speed is maintained however far
from the programmed path the tool cuts.
l Q~ is, if present, the maximum deviation from
collinearity that will collapse a series of linear G01
moves at the same feed rate into a single linear move.
It's okay to program for the mode that is already active.
9.3.24 Distance Mode (G90 and G91)
Interpretation of the operating system code can be in one of
two distance modes: absolute or incremental.
To go into absolute distance mode, program: G90.
In absolute distance mode, axis numbers (X, Y, Z, A) usually
represent positions in terms of the currently active coordinate
system. Any exceptions to that rule are described explicitly in
this section.
To go into incremental distance mode, program: G91.
In incremental distance mode, axis numbers (X, Y, Z, A) usually
represent increments from the current values of the numbers. I
and J numbers always represent increments, regardless of the
distance mode setting. K numbers represent increments.
9.3.25 Arc Distance Mode (G90.1 and G91.1)
G90.1 – Absolute distance mode for I and K offsets. When
G90.1 is in effect, I and K both must be specified with
G02/G03 for the XZ plane or it is an error.
G91.1 – Incremental distance mode for I and K offsets.
G91.1 returns I and K to their default behavior.
9.3.26 Temporary Work Offsets (G92, G92.1, G92.2,
and G92.3)
IMPORTANT! This is a legacy feature. Most modern
programming methods don't use temporary work
offsets.
To apply a temporary work offset, program: G92 X~ Y~ Z~
A~
l X~ is the X-axis coordinate
l Y~ is the Y-axis coordinate
l Z~ is the Z-axis coordinate
l A~ is the A-axis coordinate
G92 reassigns the current controlled point to the coordinates
specified by the axis words (X~, Y~, Z~, and/or A~). No motion
takes place.
The axis words are optional, except that at least one must be
used. If an axis word is not used for a given axis, the
coordinate on that axis of the current point is not changed.
Incremental distance mode (G91) has no effect on the action
of G92.
When G92 is executed, it is applied to the origins of all
coordinate systems (G54 through G59.3).
E X A M P L E
If the current controlled point is at X = 4, and there is
currently no G92 offset active, and then G92 X7 is
programmed, this reassigns the current controlled point
to X = 7 — effectively moving the origin of the active
coordinate system -3 units in X. The origins of all
inactive coordinate systems also move -3 units in X. This
-3 is saved in parameter 5211.
G92 offsets may be already be in effect when the G92 is
called. If this is the case, the offset is replaced with a new
offset that makes the current point become the specified
value.
It's an error if:
l All axis words are omitted
PathPilot stores the G92 offsets and reuses them on the next
run of a program. To prevent this, you can program a G92.1
(to erase them), or program a G92.2 (to stop them being
applied – they are still stored).
©Tormach® 2025
Specifications subject to change without notice.
Page 147
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 148

To reset axis offsets to zero and sets parameters 5211 - 5219
to zero, program: G92.1
To reset axis offsets to zero, program: G92.2
To set the axis offset to the values saved in parameters 5211
to 5219, program: G92.3
9.3.27 Feed Rate Mode (G93, G94, and G95)
To set the active feed rate mode to inverse time, program:
G93
Inverse time is used to program simultaneous coordinated
linear and coordinated rotary motion. In inverse time feed rate
mode, an F word means the move should be completed in [1/F
number] minutes.
E X A M P L E
If the F number is 2.0, the move should be completed in
half a minute.
When the inverse time feed rate mode is active, an F word
must appear on every line which has a G01, G02, or G03
motion, and an F word on a line that does not have G01, G02,
or G03 is ignored. Being in inverse time feed rate mode does
not affect G00 (rapid traverse) motions.
To set the active feed rate mode to units per minute mode,
program: G94
In units per minute feed rate mode, an F word is interpreted to
mean the controlled point should move at a certain number of
inches per minute, or millimeters per minute, depending upon
what length units are being used.
To set the active feed rate mode to units per revolution mode,
program: G95
In units per revolution mode, an F word is interpreted to mean
the controlled point should move a certain number of inches
per revolution of the spindle, depending on what length units
are being used. G95 is not suitable for threading, for threading
use G33 or G76.
Troubleshooting
It's an error if:
l Inverse time feed rate mode is active and a line with
G01, G02, or G03 (explicitly or implicitly) does not have
an F word
l A new feed rate is not specified after switching to G94
or G95 canned cycle return level – G98 and G99
9.3.28 Spindle Control Mode (G96 and G97)
To set constant surface speed mode, program: G96 D~ S~
l D~ is the maximum spindle RPM.
This word is optional.
l S~ is the surface speed.
Note: If G20 is the active mode, the value is
interpreted as feet per minute. If G21 is the
active mode, the value is interpreted as meters
per minute
E X A M P L E
G96 D2500 S250 (set constant surface speed
with a maximum RPM of 2500, and a surface
speed of 250).
When using G96 (the most common mode of machine
operation), X0 in the current coordinate system (including
offsets and tool lengths) must be the spindle axis.
To set RPM mode, program: G97
Troubleshooting
It's an error if:
l S is not specified with G96
l A feed move is specified in G96 mode while the spindle
is not turning
©Tormach® 2025
Specifications subject to change without notice.
Page 148
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 149

9: PROGRAMMING
9.4 Programming M-Code
9.4 PROGRAMMING M-CODE
Read the following sections for reference:
9.4.1 Supported M-Codes Reference
149
9.4.2 Program Stop and Program End (M00, M01, M02,
and M30)
149
9.4.3 Spindle Control (M03, M04, and M05)
150
9.4.4 Tool Change (M06)
150
9.4.5 Coolant Control (M07, M08, and M09)
151
9.4.6 Override Control (M48 and M49)
151
9.4.7 Feed Override Control (M50)
151
9.4.8 Spindle Speed Override Control (M51)
151
9.4.9 Set Current Tool Number (M61)
151
9.4.10 Set Output State (M64 and M65)
151
9.4.11 Wait on Input (M66)
152
9.4.12 USB Camera Control (M301, M302, M303)
152
9.4.13 Plasma Specific M-Codes
152
9.4.1 Supported M-Codes Reference
M-
Code
Description
M00
Program stop
M01
Optional program stop
M02
Program end
M03,
M04
Rotate spindle clockwise/counterclockwise
M05
Stop spindle rotation
M07,
M08
Coolant on
M09
All coolant off
M30
Program end and rewind
M48
Enable speed and feed override
M49
Disable speed and feed override
M64
Activate output relays
M66
Wait on an input
Note: M64 through M66 is only useful
with a USB M-Code I/O Interface Kit (PN
32616).
M-
Code
Description
M98
Call subroutine
M99
Return from subroutine/repeat
M200,
M203,
M205,
M207-
M13
Plasma specific M-codes
M301,
M302,
M303
USB camera control
9.4.2 Program Stop and Program End (M00, M01,
M02, and M30)
To stop a running program temporarily, regardless of the
optional stop switch setting, program: M00
To stop a running program temporarily, but only if the optional
stop switch is on, program: M01
It's okay to program M00 and M01 in MDI mode, but the effect
probably won’t be noticeable because normal behavior in MDI
mode is to stop after each line of input.
If a program is stopped by an M00, M01, selecting Cycle Start
restarts the program at the following line of the G-code
program.
To end a program, program: M02 or M30.
M02 leaves the next line to be executed as the M02 line. M30
rewinds the G-code file. These commands can have the
following effects:
l Axis offsets are set to zero (like G92.2) and origin
offsets are set to the default (like G54)
l Selected plane is set to XY (like G17)
l Distance mode is set to absolute (like G90)
l Feed rate mode is set to units per minute mode (like
G94)
l Feed and speed overrides are set to on (like M48)
l Cutter Compensation is turned off (like G40)
l The spindle is stopped (like M05)
l The current motion mode is set to G01 (like G01)
l Coolant is turned off (like M09)
©Tormach® 2025
Specifications subject to change without notice.
Page 149
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 150

No more lines of code in the file are executed after the M02 or
M30 command is executed. Selecting Cycle Start starts the
program back at the beginning of the file.
Display Information and Capture Images During an M00
or M01 Break
Display Information with Images
If the comment occurs on a line with M00 or M01, and contains
a file name with a .jpg or .png extension, PathPilot displays the
image in the Tool Path display when the program reaches the
M00 or M01 break.
To display an image during an M00 or M01 break:
1.
Move an image file with a .jpg or .png extension to the
PathPilot controller in one of the following locations:
l In the same folder as the G-code program
l In an images folder within the G-code program's
folder
l In an images folder within the home directory
2.
Program an M00 or M01 break, and, using parentheses,
type the full file name of the image (including its
extension).
E X A M P L E
M01 (Op1_Setup.jpg) displays the image file
on the Tool Path display.
3.
The image file displays on the Tool Path display.
Display Information with Text
To display a message on the Tool Path display:
1.
Program an M00 or M01 break, and, using parentheses,
type a message that you'd like to display on the screen.
E X A M P L E
M01 (Check coolant nozzles are
pointed correctly) displays Check coolant
nozzles are pointed correctly across the bottom of
the Tool Path display.
2.
The message displays on the Tool Path display.
Capture Images with a USB Camera
In addition to displaying information like pictures or messages
during an M01 break, you can also use a USB camera (if
installed) to take a picture.
To use M01 to take pictures:
1.
Add M01 (op1_setup.jpg) into your G-code
program.
2.
Run the G-code program.
3.
When PathPilot executes the M01 it looks to see if the
comment contains a file name.
l If there isn't a file name: The comment is shown as
instructional text across the tool path.
l If there is a file name, but the file doesn’t exist yet
and the extension is .jpg, .png, or .jpeg: The USB
cameras are initialized and shown in the tool path
display.
4.
Select the Shutter button to take the picture and create
the op1_setup.jpg file.
In future runs of the G-code program, op1_setup.jpg will
display to the operator for instructional purposes on the
workpiece.
For more information, see "Use a USB Camera" (page 101).
9.4.3 Spindle Control (M03, M04, and M05)
To start the spindle turning clockwise at the currently
programmed speed, program: M03
To start the spindle turning counterclockwise at the currently
programmed speed, program: M04
The speed is programmed by the S word.
To stop the spindle from turning, program: M05
It's okay to use M03 or M04 if the spindle speed is set to 0; if
this is done, the spindle won’t start turning. If later the spindle
speed is set above 0, the spindle starts turning. It is permitted
to use M03 or M04 when the spindle is already turning, or to
use M05 when the spindle is already stopped.
9.4.4 Tool Change (M06)
To execute a tool change sequence, program: M06
M06 behaves differently depending on whether or not the
machine is equipped with an Automatic Tool Changer (ATC):
l If you have an ATC:
o
If the requested tool (T number) is assigned to the
carousel, M06 initiates an automatic tool change.
o
If the tool is not assigned to the carousel, you're
prompted to manually change the tool and select
Cycle Start to confirm the tool change. This resumes
the program.
©Tormach® 2025
Specifications subject to change without notice.
Page 150
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.4 Programming M-Code


---

## PDF Page 151

9: PROGRAMMING
9.4 Programming M-Code
l If you don't have an ATC:
o
M06 commands the machine, stops the spindle,
pauses program execution, and prompts operator to
change tools by flashing Tool Change LED.
o
The program resumes after you select Cycle Start to
confirm that the tool has been changed.
We recommend putting the T~, the M06, and the G43 H~ on
one line (block) of code.
E X A M P L E
N191 M06 T3 G43 H3
9.4.5 Coolant Control (M07, M08, and M09)
To turn coolant on, program: M07
To turn flood coolant on, program: M08
To turn all coolant off, program: M09
It's always okay to use any of these commands, regardless of
what coolant is on or off.
9.4.6 Override Control (M48 and M49)
To enable the speed and feed override, program: M48
To disable both overrides, program: M49
It's okay to enable or disable the switches when they are
already enabled or disabled.
9.4.7 Feed Override Control (M50)
To enable the feed rate override control, program: M50 P1
The P1 is optional.
To disable the feed rate control, program: M50 P0
When feed rate override control is disabled, the feed rate
override slider has no influence, and all motion is executed at
programmed feed rate (unless there is an adaptive feed rate
override active).
9.4.8 Spindle Speed Override Control (M51)
To enable the spindle speed override control, program: M51
P1
The P1 is optional.
To disable the spindle speed override control, program: M51
P0
When spindle speed override control is disabled, the spindle
speed override slider has no influence, and the spindle speed is
equal to the value of the S word.
9.4.9 Set Current Tool Number (M61)
To change the current tool number while in MDI or manual
mode, program: M61 Q~
l Q~ is the tool number
Troubleshooting
It's an error if:
l Q~ is not 0 or greater
9.4.10 Set Output State (M64 and M65)
Note: These commands are only useful when the
machine is equipped with the USB M-Code
I/O Interface Kit.
There are four output relays available on the USB I/O module.
To activate output relays (contact close), program: M64
To deactivate output relays (contact open), program: M65
There are four contacts, numbered from 0 to 3. The contact is
specified by the P word.
E X A M P L E
l Activating the first relay: M64 P0
l Activating the second relay: M64 P1
The outputs are deactivated using M65 with the P word
specifying the relay.
E X A M P L E
l Deactivating the second relay: M65 P1
l Deactivating the fourth relay: M65 P3
There is only one P word and one relay per line. Each relay
command must be done on an individual line.
The following is legal:
M64 P0
M64 P2
M64 P3
The following is not legal:
M64 P023
M64 P0 P2 P3
©Tormach® 2025
Specifications subject to change without notice.
Page 151
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 152

9.4.11 Wait on Input (M66)
Note: This command is only useful when the machine
is equipped with the USB M-Code I/O Interface Kit.
There are four digital inputs available on the USB I/O module.
M66 P- | E- <L->
l P- is the digital input number from 0 to 3.
l L- is the wait mode type:
o
Mode 0: IMMEDIATE – no waiting, returns
immediately. The value of the input at that time is
stored in parameter #5399.
o
Mode 1: RISE – waits for the selected input to
perform a rise event.
o
Mode 2: FALL – waits for the selected input to
perform a fall event.
o
Mode 3: HIGH – waits for the selected input to go to
the HIGH state.
o
Mode 4: LOW – waits for the selected input to go to
the LOW state.
l Q- is the timeout in seconds for waiting
The Q value is ignored if the L word is zero (IMMEDIATE). A Q
value of zero is an error if the L word is non-zero.
9.4.12 USB Camera Control (M301, M302, M303)
PathPilot supports three new M-codes to control cameras
within G-code programs: M301, M302, and M303. Example use
cases:
l Record only across each M01 stop where the operator
needs to flip a workpiece or change a tool.
l Create short videos that focus on unique aspects of the
program to reduce later video editing.
l Record USB IO integration operations with robots or
other devices (pneumatic vises, etc.).
l Monitor progress on a workpiece by including M303
throughout the program.
To begin a video recording by an attached camera,
program: M301
To stop a video recording by an attached camera, program:
M302
To take a picture with an attached camera, program: M303
For more information, see "Use a USB Camera" (page 101).
9.4.13 Plasma Specific M-Codes
M-
Code
Description
Set
by
M200
Parameters
M200
AutoFS - Apply the
automatically generated
feed, speed and cutting
values for the material
selected in the main
PathPilot UI. AutoFS will
set feedrate, THC voltage,
and pierce delay.
M203
Start Torch
M205
Stop Torch and return to
G30 Z Height
M207
Set Pierce Height used
when executing a G16
pierce. Set automatically
when using M200 AutoFS.
Yes
P (Required):
Pierce height
in the current
unit system
(in. or mm.)
M208
Set Cut Height used when
executing a G16 pierce. Set
automatically when using
M200 AutoFS.
Yes
P (Required):
Cut height in
the current
unit system
(in. or mm.)
M209
Set Pierce Delay used when
executing a G16 pierce.
Set automatically when
using M200 AutoFS.
Yes
P (Required):
Pierce delay
in seconds
M210
Set THC voltage. Does not
enable or disable THC.
Yes
P (Required):
Desired THC
Voltage
©Tormach® 2025
Specifications subject to change without notice.
Page 152
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.4 Programming M-Code


---

## PDF Page 153

9: PROGRAMMING
9.4 Programming M-Code
M-
Code
Description
Set
by
M200
Parameters
M211
Set plasma source cut
current.
If a Hypertherm adapter is
not installed on the
system, program run will
be paused with an M01
break to allow the user to
set the specified cut
current.
Yes
P (Required):
Desired Cut
Current in
Amps
M212
Set plasma source cut
mode.
If a Hypertherm adapter is
not installed on the
system, program run will
be paused with an M01
break to allow the user to
set the specified cut mode.
No
P (Required):
Cut mode:
Normal = 1
CPA = 2
Gouge = 3
Note: For the
Hypertherm
Powermax
45 Normal
Mode and
CPA Mode 
(Continuous
Pilot Arc) are
the same.
M213
Set plasma source air
pressure.
If a Hypertherm adapter is
not installed on the
system, program run will
be paused with an M01
break to allow the user to
set the specified air
pressure.
No
P: Desired
Cut Pressure
in PSI
Note: When
the pressure
is omitted or
set to 0, the
pressure
control is set
to
Automatic.
©Tormach® 2025
Specifications subject to change without notice.
Page 153
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 154

9.5 PROGRAMMING INPUT CODES
Read the following sections for reference:
9.5.1 Feed Rate (F)
154
9.5.2 Spindle Speed (S)
154
9.5.3 Change Tool Number (T)
154
9.5.1 Feed Rate (F)
To set the feed rate, program: F~
Depending on the setting of the feed mode toggle, the rate
may be in units-per-minute or units-per-rev of the spindle. The
units are those defined by the G20/G21 mode. The feed rate
may sometimes be overridden.
9.5.2 Spindle Speed (S)
To set the speed in revolutions per minute (rpm) of the
spindle, program: S~
The spindle turns at the commanded speed when it has been
programmed to start turning. It's okay to program an S word
whether the spindle is turning or not. If the speed override
switch is enabled and not set at 100 percent, the speed is
different from what is programmed. It's okay to program S0,
but the spindle does turn if that is done.
Troubleshooting
It's an error if:
l The S number is negative
9.5.3 Change Tool Number (T)
It's your responsibility to make sure that the machine is in a
safe place for changing tools (for example, by using G30). This
allows optimization of motion which can save time. You can
provide a pause for manual intervention with M00 or M01
before the tool change.
Troubleshooting
It's an error if:
l A negative T number is used
l A T number larger than 1000 is used
©Tormach® 2025
Specifications subject to change without notice.
Page 154
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.5 Programming Input Codes


---

## PDF Page 155

9: PROGRAMMING
9.6 Advanced Programming
9.6 ADVANCED PROGRAMMING
Parameter and expression programming language features are
not used in common G-code application (hand coding), G-code
created by PathPilot conversational programming, or the
majority of third-party CAM-programming systems.
There are significant differences between controls in the way
parameters work. Do not assume that code from another
control works in the same way with the operating system. We
don't recommend writing parametric G-code — it’s difficult to
debug, and difficult for another operator to understand.
Modern CAM virtually eliminates the need for it.
Read the following sections for reference:
9.6.1 Parameters
155
9.6.2 Expressions
157
9.6.3 Subroutines
158
9.6.1 Parameters
Read the following sections for reference:
Parameters Reference
155
Numbered Parameters Reference
156
Subroutine Parameters Reference
156
Named Parameters Reference
156
Parameters Reference
The RS274/NGC language supports parameters. Parameters
are analogous to variables in other programming languages.
PathPilot maintains an array of 10,320 numerical parameters.
Many of them have specific uses. The parameters that are
associated with fixtures are persistent over time. Other
parameters are undefined when the operating system is
loaded. The parameters are preserved when the interpreter is
reset. Parameters 1 to 1000 can be used by the code of part-
programs.
There are several types of parameters of different purpose and
appearance. The only value type supported by parameters is
floating-point; there are no string, Boolean or integer types in
G-code like in other programming languages. However, logic
expressions can be formulated with Boolean operators (AND,
OR, XOR, and the comparison operators EQ, NE, GT, GE ,LT,
LE), and the MOD, ROUND, FUP and FIX operators support
integer arithmetic.
Parameter Syntax
There are three types of parameters, numbered, named local,
and named global. The type of the parameter is defined by its
syntax:
l Numbered - #4711
l Named local - #<localvalue>
l Named global - #<_globalvalue>
Parameter Scope
The scope of a parameter is either global or local within a
subroutine. The scope of each parameter is inferred from its
syntax. Subroutine parameters and named local parameters
have local scope. Named global parameters and all numbered
parameters starting from #31 are global in scope. RS274/NGC
uses lexical scoping. In a subroutine, only the local parameters
defined therein and any global parameters are visible. The
local parameters of a calling procedure are not visible in a
called procedure.
Behavior of Uninitialized Parameters
Uninitialized global parameters and unused subroutine
parameters return the value zero when used in an expression.
Uninitialized named parameters signal an error when used in
an expression.
Parameter Mode
The mode of a parameter can either be read/write or read-
only. Read/write parameters may be assigned values within an
assignment statement. Read-only parameters cannot be
assigned values. They may appear in expressions, but not on
the left-hand side of an assignment statement.
Persistence and Volatility
Parameters can either be persistent or volatile. When the
operating system is powered off, volatile parameters lose their
values and are reset to zero. The values of persistent
parameters are saved in a disc file and restored to their
previous values when the operating system is powered on
again. All parameters except numbered parameters in the
current persistent range (5163 to 5390) are volatile.
Intended Use
Numbered parameters in the range #31-#5000, named global,
and local parameters are available for general-purpose storage
of floating-point values, like intermediate results, flags, etc.,
throughout program execution. They are read/write (can be
assigned a value). Subroutine parameters, numbered
©Tormach® 2025
Specifications subject to change without notice.
Page 155
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 156

parameters #1-#30, and system parameters are read-only and
not available for general use. Subroutine parameters are used
to hold the actual parameters passed to a subroutine.
Numbered parameters in the range of #1-#30 are used to
access offsets of coordinate systems. System parameters are
used to determine the current running version and are read-
only.
Numbered Parameters Reference
A numbered parameter is recognized by the pound symbol (#)
followed by an integer between 1 and 5399. The parameter is
referred to by this integer, and its value is whatever number is
stored in the parameter. A value is stored in a parameter with
the (=) operator.
Example: #3 = 15 (set parameter 3 to 15)
A parameter setting does not take effect until after all
parameter values on the same line have been found. For
example, if parameter 3 has been previously set to 15 and the
line: #3=6 G01 X#3 is interpreted, a straight move to a point
where X = 15 occurs before the value of parameter 3 is set to
6.
The # symbol takes precedence over other operations. For
example, #1+2 means the number found by adding 2 to the
value of parameter 1, not the value found in parameter 3. Of
course, #[1+2] does mean the value found in parameter 3.
The # character may be repeated; for example ##2 means the
value of parameter whose index is the (integer) value of
parameter 2. PathPilot maintains a number of read-only
parameters. Only parameters for the relevant axes are
maintained: (X Y Z A) for mill and (X Z) for lathe. The
remaining parameters for unused axes are undefined.
Read-Only Parameters
l 1-30: Subroutine local parameters of call arguments.
These parameters are local to the subroutine. For further
information, see Programming with Subroutines later in
this chapter
l 31-5000: G-code operator parameters. These
parameters are global in G-code file
l 5061-5070: Result of G38.2 probe (X Y Z A B C U V W)
l 5161-5169: G28 home for (X Y Z A B C U V W)
l 5181-5189: G30 home for (X Y Z A B C U V W)
l 5210: 1 if G92 offsets are active, 0 if not
l 5211-5219: G92 offset (X Y Z A B C U V W)
l 5220: Current coordinate system number 1-9 for G54 -
G59.3
l 5221-5230: Coordinate System 1, G54 (X Y Z A B C U V W
R) – R denotes XY rotation angle around Z-axis
l 5241-5250: Coordinate System 2, G55 (X Y Z A B C U V W
R)
l 5261-5270: Coordinate System 3, G56 (X Y Z A B C U V W
R)
l 5281-5290: Coordinate System 4, G57 (X Y Z A B C U V W
R)
l 5301-5310: Coordinate System 5, G58 (X Y Z A B C U V W
R)
l 5321-5330: Coordinate System 6, G59 (X Y Z A B C U V W
R)
l 5341-5350: Coordinate System 7, G59.1 (X Y Z A B C U V
W R)
l 5361-5370: Coordinate System 8, G59.2 (X Y Z A B C U V
W R)
l 5381-5390: Coordinate System 9, G59.3 (X Y Z A B C U V
W R)
l 5399: Result of M66 – check or wait for input
l 5400: Current tool number
l 5401-5409: Tool offset (X Y Z A B C U V W)
l 5410: Current tool diameter
l 5411: Current tool front angle
l 5412: Current tool back angle
l 5420-5428: Current position including offsets in current
program units (X Y Z A B C U V W)
Subroutine Parameters Reference
Subroutine parameters are specifically reserved for call
arguments. By definition, these are parameters #1-#30 and are
local to the subroutine.
Named Parameters Reference
Named parameters work like numbered parameters, but are
easier to read and remember. All parameter names are
converted to lowercase and have spaces and tabs removed.
Named parameters must be enclosed with < > marks.
#<named parameter here> is a local named parameter.
By default, a named parameter is local to the scope in which it
is assigned.
©Tormach® 2025
Specifications subject to change without notice.
Page 156
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.6 Advanced Programming


---

## PDF Page 157

9: PROGRAMMING
9.6 Advanced Programming
You can’t access a local parameter outside of its subroutine.
This is so two subroutines can use the same parameter names
without fear of one subroutine overwriting the values in
another.
#<_global named parameter here> (i.e., name
starting with an underscore) is a global named parameter.
They are accessible from within called subroutines and may
set values within subroutines that are accessible to the caller.
As far as scope is concerned, they act just like regular numeric
parameters. They are not made persistent by storage in a file.
The global parameters _a, _b, _c, . . . _z are reserved for
special use. Do not use these parameters.
E X A M P L E S
l #<_endmill_dia> = 0.049 is a declaration
of named global variable.
l #<_endmill_rad> = [#<_endmill_
dia>/2.0] is a reference to previously declared
global variable.
l o100 call [0.0] [0.0] [#<_inside_
cutout>-#<_endmill_dia>] [#<_Zcut>]
[#<_feedrate>] is mixed literal and named
parameters.
9.6.2 Expressions
An expression is a set of characters starting with a left bracket
([) and ending with a right bracket (]). Located between the
brackets are numbers, parameter values, binary operators,
functions, and other expressions. An expression is evaluated to
produce a number. An example of an expression is:
[1 + acos[0] - [#3 ** [4.0/2]]]
All expressions on a line are evaluated when the line is read
and before anything on the line is executed.
Read the following sections for reference:
Binary Operators Reference
157
Functions Reference
157
Binary Operators Reference
Binary operators only appear inside expressions. There are
three types of binary operators: mathematical, logical, and
relational.
There are four basic mathematical operations: addition (+),
subtraction (-), multiplication (*), and division (/). In addition,
the modulus operation (MOD) finds the remainder after
division of one number by another number. The power
operation (**) of raising the number on the left of the
operation to the power on the right. There are three logical
operations: non-exclusive or (OR), exclusive or (XOR), and
logical and (AND).
The relational operators are equality (EQ), inequality (NE),
strictly greater than (GT), greater than or equal to (GE), strictly
less than (LT), and less than or equal to (LE).
Binary operators are divided into several groups according to
their precedence as follows, from highest to lowest:
1.
**
2.
* / MOD
3.
+ -
4.
EQ NE GT GE LT LE
5.
AND OR XOR
If operations in different precedence groups are strung
together, operations with a higher precedence are performed
before operations with a lower precedence. If an expression
contains more than one operation with the same precedence,
the operation on the left is performed first.
E X A M P L E
[2.0 / 3 * 1.5 - 5.5 / 11.0] is equivalent to
[[[2.0 / 3] * 1.5] - [5.5 / 11.0]]
which is equivalent to [1.0 - 0.5]
which is
0.5
The logical operations and modulus are to be performed on
any real numbers, not just on integers. The number zero is
equivalent to logical false, and any non-zero number is
equivalent to logical true.
Functions Reference
The available functions are:
l ATAN[Y]/[X]: Four quadrant inverse tangent
l ABS[arg]: Absolute value
l ACOS[arg]: Inverse cosine
l ASIN[arg]: Inverse sine
l COS[arg]: Cosine
l EXP[arg]: e raised to the given power (ex)
©Tormach® 2025
Specifications subject to change without notice.
Page 157
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 158

l FIX[arg]: Round down to integer
l FUP[arg]: Round up to integer
l ROUND[arg]: Round to nearest integer
l LN[arg]: Base-e logarithm
l SIN[arg]: Sine
l SQRT[arg]: Square root
l TAN[arg]: Tangent
l EXISTS[arg]: Check named parameter
9.6.3 Subroutines
Subroutines are subprograms that are called from inside
another program.
Read the following sections for reference:
Subroutines Reference
158
Conditional Subroutines Reference
159
Repeating Subroutines Reference
159
Looping Subroutines Reference
159
Subroutines Reference
Subroutines are identified in a program by a unique subroutine
label. The subroutine label is the letter o followed by an
integer (with no sign) between 0 and 99999 written with no
more than five digits (000009 is not permitted, for example) or
a string of characters surrounded by <> symbols.
Examples of valid subroutine labels:
l o123
l o99999
l o<my test code>
Subroutine labels may be used in any order, but they must be
unique in a program. Each subroutine label must be followed
by a subroutine keyword. The subroutine keyword defines the
action associated with the subroutine label.
Valid subroutine keywords and their meanings are:
l Sub: Begin subroutine definition
l Endsub: End of subroutine definition
l Call: Call the subroutine
l Do/while/endwhile: Execute the subroutine while a
condition is true
l Repeat/endrepeat: Execute the subroutine while a
condition is true
l If/elseif/else/endif: Conditionally execute the
subroutine
l Break: Break out of a while or if/elseif statement
l Continue: Skip remaining code and restart at top of
while or repeat loop
l Return: Return a value
The sub and endsub keywords are used to define the
beginning and end a subroutine. All lines of code between the
sub and endsub keywords are considered to be part of the
subroutine.
Example of sub, endsub, call:
o100 sub
G53 G00 X0 Y0 Z0 (rapid move to machine home)
o100 endsub
...
o100 call (call the subroutine here)
M02
Subroutines can either be defined in the program file or in a
separate file. If the subroutine is defined in the same file as
the main program that calls the subroutine, it must be defined
before the call statement.
For example, this is valid:
o100 sub
G53 G00 X0 Y0 Z0 (rapid move to machine home)
o100 endsub
...
o100 call (call the subroutine here)
M02
But this is not:
o100 call (call the subroutine here)
M02
o100 sub
G53 G00 X0 Y0 Z0 (rapid move to machine home)
o100 endsub
...
A subroutine can be a separate file as long as:
l The file is named the same as your call.
l The file includes a sub and endsub in the file.
l The file is in the directory /subroutines.
l The file name only includes lowercase letters, numbers,
dashes, and underscores.
l The file only contains a single subroutine definition.
l The file ends with the extension .nc.
©Tormach® 2025
Specifications subject to change without notice.
Page 158
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.6 Advanced Programming


---

## PDF Page 159

9: PROGRAMMING
9.6 Advanced Programming
Note: File names are lowercase letters only.
o<MyFile> is converted to o<myfile> by the
interpreter.
To execute a subroutine in a program, it must be called. To call
a subroutine, program o~ call where ~ is the subroutine
name. The subroutine name may be either a named file, a
numbered file, or an expression that evaluates to a valid
subroutine label.
l Expression example: o[#101+2] call
l Named file example: o<myfile> call
l Numbered file example: o123 call
o~ call takes up to 30 optional arguments, which are
passed to the subroutine as #1, #2 , . . . , #N. Unused
parameters from #N+1 to #30 have the same value as in the
calling context.
Parameters #1-#30 are local to the subroutine. On return from
the subroutine, the values of parameters #1 through #30
(regardless of the number of arguments) are restored to the
values they had before the call.
The following calls a subroutine with three arguments: o200
call [1] [2] [3]
Because 1 2 3 is parsed as the number 123, the parameters
must be enclosed in square brackets.
Subroutine bodies may be nested.
l Nested subroutines may only be called after they are
defined.
l They may be called from other functions, and may call
themselves recursively if it makes sense to do so.
l The maximum subroutine nesting level is 10.
Subroutines do not have return values, but they may change
the value of parameters above #30 and those changes are
visible to the calling G-code. Subroutines may also change the
value of global named parameters.
Conditional Subroutines Reference
Subroutines can be conditionally executed using the if/endif or
the if/else/elseif/endif keyword constructs.
if/endif
The if/endif conditional will execute a block of code following
theif keyword only when the if argument evaluates to true.
If/endif example:
o100 sub
(notice that the if-endif block uses a different
number)
o110 if [#2 GT 5]
(some code here)
o110 endif
(some more code here)
o100 endsub
if/elseif/else/endif
The if/elseif/else/endif conditional will execute the block of
code following the if keyword when its argument evaluates to
true. If the argument evaluates to false, then the code
following each elseif is executed as long as the associated
elseif argument evaluates to true. If no elseif keywords are
present, or if all elseif arguments evaluate to false, than the
code following the else keyword is executed.
If/elseif/endif example:
o102 if [#2 GT 5] (if parameter #2 is greater than
5 set F100)
F100
o102 elseif [#2 LT 2] (else if parameter #2 is
less than 2 set F200)
F200
o102 else (else if parameter #2 is 2 through 5 set
F150)
F150
o102 endif
Repeating Subroutines Reference
Subroutines can be repeated a finite number of times using
the repeat/endrepeat keyword.
Repeat example:
(Mill 5 diagonal shapes)
G91 (Incremental mode)
o103 repeat [5]
... (insert milling code here)
G00 X1 Y1 (diagonal move to next position)
o103 endrepeat
G90 (Absolute mode)
Looping Subroutines Reference
Subroutines can be looped using the do/while or
while/endwhile keyword constructs.
©Tormach® 2025
Specifications subject to change without notice.
Page 159
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 160

do/while
The do/while loop executes a block of code once and continues
to execute the code block until the while argument evaluates
to true.
Do/while loop example:
#1 = 0 (assign parameter #1 the value of 0)
o100 do
(debug, parameter 1 = #1)
o110 if [#1 EQ 2]
#1 = 3 (assign the value of 3 to parameter #1)
(msg, #1 has been assigned the value of 3)
o100 continue (skip to start of loop)
o110 endif
(some code here)
#1 = [#1 + 1] (increment the test counter)
o100 while [#1 LT 3]
M02
while/endwhile
The while/endwhile repeats a set of statements an indefinite
number of times, as long as the while argument evaluates to
true.
While/endwhile example:
(draw a sawtooth shape)
G00 X1 Y0 (move to start position)
#1 = 1 (assign parameter #1 the value of 0)
F25 (set a feed rate)
o101 while [#1 LT 10]
G01 X0
G01 Y[#1/10] X1
#1 = [#1+1] (increment the test counter)
o101 endwhile
M02 (end program)
The following statements cause an error message and abort
the interpreter:
l A return or endsub not within a sub definition
l A label on repeat which is defined elsewhere
l A label on while which is defined elsewhere and not
referring to a do
l A label on if defined elsewhere
l A undefined label on else or elseif
l A label on else, elseif or endif not pointing to a matching
if
l A label on break or continue which does not point to a
matching while or do
l A label on endrepeat or endwhile no referring to a
corresponding while or repeat
©Tormach® 2025
Specifications subject to change without notice.
Page 160
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.6 Advanced Programming


---

## PDF Page 161

MACHINE MAINTENANCE
IN THIS SECTION, YOU'LL LEARN:
About the required maintenance procedures that you must do so that this machine operates as
designed.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
10.1 Maintenance Safety
162
10.2 Maintenance Schedules
163


---

## PDF Page 162

10.1 MAINTENANCE SAFETY
Read and understand the following safety messages before
beginning any maintenance procedures.
10.1.1 All Maintenance Procedures
Understand that the machine is automatically controlled
and can start at any time.
Power off the machine and disconnect the pneumatic
supply before doing any maintenance procedures.
When appropriate, lockout/tagout the and the pneumatic
supply line before doing any maintenance procedures.
Wear safety eye protection rated for ANSI Z87+.
10.1.2 Swarf Maintenance Procedures
Wear work gloves.
©Tormach® 2025
Specifications subject to change without notice.
Page 162
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
10: MACHINE MAINTENANCE
10.1 Maintenance Safety


---

## PDF Page 163

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
(page 179). For any additional support, we can help. Create a
support ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for guidance on
how to proceed.
10.2.1 Daily
Clean the machine of any dust or abrasive particle
buildup with a vacuum and brushes.
Wipe dust off of the linear rails with a clean cloth.
10.2.2 Weekly
Clean all exterior surfaces with a clean rag.
Examine the water table's level and, if necessary, add
water / rust inhibitor.
Check your plasma torch consumables for wear and
replace if needed.
10.2.3 Monthly
Clean the electrical cabinet vents of dust with a clean
cloth or compressed air.
Remove the slats and clean sediment buildup from the
bottom of the water table.
10.2.4 Semi-Annually
Check drive belts for wear and re-tension if needed.
Remove faceplate from torch lifter and clean lead screw
with a lint-free cloth.
10.2.5 As Needed
Replace the water table's slats when they have been
worn away too much to hold stock securely.
10.2.6 Adjust Belt Tension
Tools and Items Required
l Allen Key Set
The drive belts on the 1300PL should be checked for wear and
tensioned several times a year to avoid lost motion and
reduced machine accuracy.
1.
Remove the motor belt cover over the servo motor
pulley.
2.
Remove the belt covers from both sides of the gantry.
3.
Loosen the two mounting bolts holding the belt
tensioner. Adjust the tensioner until the belt is tight
enough to only deflect 0.125" (3 mm) when pressed with
one finger.
©Tormach® 2025
Specifications subject to change without notice.
Page 163
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 164

4.
Tighten the tensioner mounting hardware and repeat for
the other side of the gantry.
5.
Loosen the mounting hardware for the servo motor.
6.
Slide the servo back in its mounting slots until the belt is
taught. It should deflect about 1/16" (1.5 mm) when
pressed with one finger.
7.
Tighten all mounting hardware and re-install belt covers.
10.2.7 Adjust Rack and Pinion Preload
Tools and Items Required
l Allen Key Set
l Crescent Wrench
The rack and pinion gear drive on the 1300PL uses a spring
preload to allow the pinion gear to self adjust to compensate
wear on the rack and reduce backlash. It is preset at the
factory and will not need frequent adjustment.
Y-Axis
1.
Remove the motor belt cover over the servo motor
pulley.
2.
Remove the belt covers from both sides of the gantry.
3.
Adjust the preload nut on the pinion mount assembly
until the spring is compressed approximately 1/4" (6
mm) from its fully slack position.
4.
Reinstall all belt covers and guards.
X-Axis
1.
Remove the motor cover on the X-axis carriage.
©Tormach® 2025
Specifications subject to change without notice.
Page 164
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
10: MACHINE MAINTENANCE
10.2 Maintenance Schedules


---

## PDF Page 165

10: MACHINE MAINTENANCE
10.2 Maintenance Schedules
2.
Locate and tighten the preload nut for the X motor
assembly until the spring is compressed approximately
1/4" (6 mm) from its fully slack position.
3.
Reinstall all belt covers and guards.
©Tormach® 2025
Specifications subject to change without notice.
Page 165
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support


---

## PDF Page 166

[No extractable text; see original PDF page.]


---

## PDF Page 167

TROUBLESHOOTING
IN THIS SECTION, YOU'LL LEARN:
About common causes of failure in this machine, and our recommendations for diagnosing and
correcting them.
WARNING! Electrocution Hazard - Electrical Cabinet: Do not make or disconnect connections under
power.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
11.1 Ohmic Probing
168
11.2 Touch Off
171
11.3 Cutting
172
11.4 Voltage Feedback
173
11.5 Torch Height Control
175
11.6 Servo Drives
177


---

## PDF Page 168

11: TROUBLESHOOTING
11.1 Ohmic Probing
©Tormach® 2025
Specifications subject to change without notice.
Page 168
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
11.1 OHMIC PROBING
11.1.1 Ohmic Probe Does Not Trigger
How to test ohmic probing:
Open the electrical cabinet and locate the Tormach THCT Board (PN 39096). Have a helper touch the ground clamp to the torch cap and
watch LED D8 on the bottom left of the board. If the LED lights up when the ground clamp contacts the torch cap, the THCT board is
measuring contact between the cap and ground as intended.
Switch to the Status tab in PathPilot and repeat the test with the ground clamp. Watch the status LED for ohmic touch. If it turns green
when the ground clamp makes contact, the THCT board is communicating with PathPilot correctly.
Cause: Faulty Connection Between Workpiece Clamp and Plasma Source
Probability
How-To Steps
Need More?
High
Check that your ground clamp is connected to your workpiece and plasma
source.
Ohmic probing detects continuity
between the torch cap and the ground
connection of the work piece. If this
connection is not solid, ohmic probing
will not trigger.
Cause: Faulty Work Clamp Connection Between Plasma Source and THCT Board
Probability
How-To Steps
Need More?
Low
1.
Open the electrical cabinet and locate the Tormach THCT board (PN
39096).
2.
Using a multimeter in continuity mode, measure continuity between J2 Pin
1 (WORK) on the Tormach THCT Board (PN 39096) and the workpiece
clamp.
3.
If there is not continuity, check that the plasma source control cable is
connected at the rear of the electrical cabinet. Pin 4 on this connector is
used for the workpiece clamp signal.
Continuity to the workpiece clamp is
measured through the plasma source
control cable Arc+ pin (since the torch
operates at a negative voltage relative
to the workpiece). If this connection is
faulty or high resistance the probe will
not trigger.


---

## PDF Page 169

11: TROUBLESHOOTING
11.1 Ohmic Probing
©Tormach® 2025
Specifications subject to change without notice.
Page 169
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
Cause: Ohmic Probe Wire Disconnected From the Torch Cap
Probability
How-To Steps
Need More?
Medium
1.
Check that the ohmic probe wire (481 on the electrical diagram) coming
from the X axis carriage is connected to the torch cap.
2.
Check that the connector on the rear of the electrical cabinet (X27 on the
electrical diagram) is connected.
To test the wire for breaks, use a
multimeter in continuity mode to
measure between the torch cap and
Pin 5 on connector J2 (labeled CAP) on
the Tormach THCT board in the
electrical cabinet.
Cause: Ohmic Touch Sensitivity Adjusted Incorrectly
Probability
How-To Steps
Need More?
Low
1.
Open the electrical cabinet and locate the Tormach THCT board (PN
39096).
2.
Adjust the "RV1" potentiometer clockwise to increase the sensitivity, until
a ground clamp touched to the torch nose triggers the probe.
Sensitivity is adjustable to account for
different workpiece materials and
situations (wet metal).
See "Calibrate Initial Height Sensing"
(page 62).
Cause: THCT Board Disconnected From the Machine Control Board
Probability
How-To Steps
Need More?
Low
1.
Open the electrical cabinet and locate the Tormach THCT board (PN
39096).
2.
Using a multimeter on continuity mode, check the connection between
THCT J1 Pin 6 (PROBE-) and J9 Pin 5 on the main control board.
3.
Perform the same check between THCT J1 Pin 7 (PROBE+) and J9 Pin 6 on
the main control board.
4.
If both connections measured good, switch the multimeter to DC Voltage
mode and measure the voltage between J9 Pin 6 and 7 on the main control
board. The reading should be -3.5v without the probe tripped, and +3.5v
with the probe tripped.
11.1.2 Ohmic Probe Triggers Early or Between Cuts
Cause: Plasma Torch Cap Is Wet
Probability
How-To Steps
Need More?
High
1.
Use the TEST TORCH button to purge the torch cap. Make sure to jog away
from the workpiece first.
2.
Using compressed air, blow any water out of your torch cap.
3.
Adjust ohmic touch sensitivity as detailed below.
Water in the torch cap can cause ohmic
probing to trigger because it creates a
circuit between the torch nozzle (Arc-)
and cap. Since the nozzle is electrically
connected to the workpiece clamp 
(Arc+) by the arc voltage divider, this
can trigger the ohmic probe.


---

## PDF Page 170

11: TROUBLESHOOTING
11.1 Ohmic Probing
©Tormach® 2025
Specifications subject to change without notice.
Page 170
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
Cause: Ohmic Touch Sensitivity Adjusted Incorrectly
Probability
How-To Steps
Need More?
High
1.
Position the torch in above the workpiece in a small puddle of water, so
that the torch cap is touching the water but not the workpiece.
2.
Open the electrical cabinet and locate the Tormach THCT board (PN
39096).
3.
Adjust the "RV1" potentiometer counterclockwise to decrease the
sensitivity until the ohmic probe is not triggered by the water but is still
triggered if you lift the workpiece to touch the torch cap.
Ohmic touch sensitivity may need to be
adjusted when you switch between
styles of consumable or torch cap.


---

## PDF Page 171

11: TROUBLESHOOTING
11.2 Touch Off
©Tormach® 2025
Specifications subject to change without notice.
Page 171
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
11.2 TOUCH OFF
11.2.1 The Torch Pierces Too High
Cause: Torch Touch Trigger Depth Set Incorrectly
Probability
How-To Steps
Need More?
High
Open the Settings tab and set the Torch Touch Trigger Depth as described
in "Plasma Settings Reference" (page 122).
Torch touch trigger depth is the
difference between the Z location
where the torch touches the material
and the Z location where the touch
switch in the floating Z head registers
a touch-off.
Cause: M207 Pierce Height Set Incorrectly
Probability
How-To Steps
Need More?
High
If using M200 AutoFS, ensure that you have selected the correct material
on the Main tab of PathPilot.
Using the M200 AutoFS system
chooses a pierce height appropriate for
the material selected on the Main tab.
Medium
If not using M200 AutoFS to set pierce height automatically, make sure
that you have a call to M207in your program to explicitly set a pierce
height.
Check "Plasma Specific M-Codes"
(page 152) for more information.
11.2.2 The Torch Bends the Workpiece During Touch-off
Cause: Ohmic Probing Disabled
Probability
How-To Steps
Need More?
High
Open the Settings tab and ensure that the check-box for ohmic probing is
enabled.
If ohmic probing is disabled the plasma
table will rely on the switch in the
floating torch head to detect touch-off.
This can be useful for painted
materials, but you need to make sure
that Torch Touch Trigger Depth is set
correctly as noted above.
If necessary to work around a bending
workpiece, the workpiece or work
coordinate system can be relocated to
a position where the workpiece is
better supported by the table's slats.


---

## PDF Page 172

11: TROUBLESHOOTING
11.3 Cutting
©Tormach® 2025
Specifications subject to change without notice.
Page 172
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
11.3 CUTTING
11.3.1 Torch Shuts Off During Cut
Cause: Air source cannot keep up with demand
Probability
How-To Steps
Need More?
High
Check the specifications for your compressor to make sure that it can
supply the CFM needed by your plasma source.
Check for restrictive fittings or hoses on the air path to your plasma source.
The Hypertherm plasma sources can
detect inadequate air flow and will
shut off the plasma arc if not enough
air is being provided to the unit.
Cause: Gaps in material being cut
Probability
How-To Steps
Need More?
High
If you are trying to cut across gaps or expanded metal, make sure your
plasma source is in "expanded metal mode" and disable Torch Height
Control in the PathPilot Settings menu.
Most plasma sources will
automatically shut off the arc when
they encounter a gap while cutting
unless placed in expanded metal /
continuous pilot arc mode.


---

## PDF Page 173

11: TROUBLESHOOTING
11.4 Voltage Feedback
©Tormach® 2025
Specifications subject to change without notice.
Page 173
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
11.4 VOLTAGE FEEDBACK
11.4.1 No Voltage Reading in PathPilot
Cause: Bad control connection to plasma source
Probability
How-To Steps
Need More?
High
Measure voltage input to THCT board in electrical cabinet:
1.
Using a multimeter set to DC volts, probe wires 442 and 495 on the THCT
board with the torch off.
You should read close to 0 VDC.
2.
Have a helper press the TEST TORCH button in PathPilot and check the
voltage. You should read your plasma source's open circuit voltage divided
by 50 or around 2.5 VDC.
3.
If you do not read a voltage, you may need to replace your plasma source
control cable. If you do read a voltage, proceed to checking THCT
communication with the Machine Control Board.
Your plasma source is required to have
an internal voltage divider. By default,
PathPilot is configured for a 50:1
divider.


---

## PDF Page 174

11: TROUBLESHOOTING
11.4 Voltage Feedback
©Tormach® 2025
Specifications subject to change without notice.
Page 174
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
Cause: THCT not communicating with Machine Control Board
Probability
How-To Steps
Need More?
Low
1.
Verify that the THCT board power LED is on
2.
Using a multimeter that can measure frequency, measure the signal
between wires 444 and 445. You should read a value between 80 kHz and
120 kHz.
l If you don't read any frequency, you may have a faulty THCT board.
Contact Tormach Technical Support.
3.
Have a helper press the TEST TORCH button in PathPilot and check the
frequency. You should read a frequency above 200 kHz (usually about 450
kHz).
4.
If you read a frequency in both tests, check the connections for wires 444
and 445 at the Machine Control Board. Reference the machine wiring
diagram to make sure they are in the correct terminal blocks and firmly
seated.
The THCT communicates measured
voltage from the plasma source back
to the Machine Control Board using a
differential frequency signal. This is
much more immune to noise than a
analog voltage.


---

## PDF Page 175

11: TROUBLESHOOTING
11.5 Torch Height Control
©Tormach® 2025
Specifications subject to change without notice.
Page 175
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
11.5 TORCH HEIGHT CONTROL
11.5.1 Torch Cuts Too High
Cause: M210 Torch Height Control Voltage Set Too High
Probability
How-To Steps
Need More?
High
If using M200 AutoFS, ensure that you have selected the correct material
and consumables on the Main tab of PathPilot.
If you are manually specifying voltage using the M210 M-Code, verify that
the P value in your G-Code is appropriate for the feed rate, cut current and
consumables you are using according to the manufacturer's cut charts.
THC target voltage is set automatically
when you select a material on the
main PathPilot screen and use the
M200 AutoFS function in your G-Code.
Cause: Incorrect Consumables Being Used
Probability
How-To Steps
Need More?
Medium
If you have both FineCut and standard consumables, verify that the correct
nozzle is installed for the cut settings you have selected.
Standard consumables can require a
THC voltage setting of up to 50V higher
than FineCut consumables for the
same cut current. Mixing up the two
can produce a cut height error of more
than 1" (25mm).
Cause: Bad Workpiece Clamp Connection
Probability
How-To Steps
Need More?
High
Make sure that the workpiece clamp is securely fastened to your material
and plugged in to the plasma source.
If you have your workpiece clamp cable routed through any terminal
blocks, make sure that all connections are firmly tightened down.
A bad workpiece clamp connection can
produce an additional voltage drop that
will cause higher than usual THC
voltage values. This will effect the
cutting height.
Cause: Plasma Source Amperage Set Too High
Probability
How-To Steps
Need More?
High
If you are using the AutoFS Material Picker, make sure that you have your
plasma source cut current set to match the value suggested on the main
page of PathPilot.
If you are using the Hypertherm control kit to allow PathPilot to control cut
current and air pressure, verify that the adapter is connected to the
controller's USB port and the RS485 cable is plugged in to the back of the
plasma source.


---

## PDF Page 176

11: TROUBLESHOOTING
11.5 Torch Height Control
©Tormach® 2025
Specifications subject to change without notice.
Page 176
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
11.5.2 Torch Drags on the Material When Cutting
Cause: M208 Cut Height Set Too Low
Probability
How-To Steps
Need More?
High
If using M200 AutoFS, ensure that you have selected the correct material
and consumables on the Main tab of PathPilot.
If you are manually specifying a cut height in your G-Code with M208 make
sure that the P value for height matches the consumables being used, cut
current, and material.
After executing a G16 pierce, PathPilot
will move the torch to the height
specified by M208 or the AutoFS
system.
If this height is too low, Torch Height
Control may not be able to activate and
take over control of the Z axis because
of safety limits on torch voltage.
Cause: Plasma Source Amperage Set Too Low
Probability
How-To Steps
Need More?
High
If you are using the AutoFS Material Picker, make sure that you have your
plasma source cut current set to match the value suggested on the main
page of PathPilot.
If you are using the Hypertherm control kit to allow PathPilot to control cut
current and air pressure, verify that the adapter is connected to the
controller's USB port and the RS-485 cable is plugged in to the back of the
plasma source.


---

## PDF Page 177

11: TROUBLESHOOTING
11.6 Servo Drives
©Tormach® 2025
Specifications subject to change without notice.
Page 177
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
11.6 SERVO DRIVES
11.6.1 Servos Fault on Fast Direction Changes
Cause: Power Supply not Connected to Backfeed Clamp
Probability
How-To Steps
Need More?
High
Check for loose wires between the power supply and backfeed clamp (PN
39102).
l Power off the main breaker.
l Measure the continuity between the V+ terminal of the power supply and
the + terminal on the backfeed clamp (follow wire 207).
l Perform the same check for the V- terminal of the power supply to the -
terminal of the backfeed clamp (wire 208).
l Power on the main breaker, release the E-Stop button and press the blue
Reset button.
l You should see a green power LED on the power supply and an orange ON
LED on the backfeed clamp if they are connected correctly.
The servos used in the 1300PL feed a
significant amount of energy back into
the power supply when braking. This
energy is dissipated by the backfeed
clamp.


---

## PDF Page 178

11: TROUBLESHOOTING
11.6 Servo Drives
©Tormach® 2025
Specifications subject to change without notice.
Page 178
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
Cause: Faulty Backfeed Clamp
Probability
How-To Steps
Need More?
Low
Check that the backfeed clamp is enabling itself.
l Power on the main breaker, release the E-Stop button and press the blue
Reset button.
l Watch the status LEDs on the backfeed clamp. You should immediately see
the ON LED.
l After about 1.5 sec, you should see the ENABLE LED light. If you do not see
the ENABLE LED light, your backfeed clamp is not sensing input voltage
and needs to be replaced.
Cause: Backfeed Clamp Not Triggering
Probability
How-To Steps
Need More?
Low
Check that the backfeed clamp is triggering on hard braking.
l Create a new G-Code program with the following test snippet:
G1 Y20 X20 F1000
G1 Y0 X0 F1000
M99 (Repeat until Stop button is pressed)
l Jog your machine to the -X, -Y corner and ZERO the X + Y axes and then run
the test program.
WARNING! The test program will run continuously until the Stop
button is pressed. Make sure you are in a safe position away
from the motion envelope.
l Watch the orange CLAMP LED on the backfeed clamp when the axes are
slowing down. You should see a momentary flicker (<5 ms).
l If you see no activity from the CLAMP LED and either axis faults during the
test, replace your backfeed clamp.
The braking energy is only dissipated in
the backfeed clamp under very high
braking situations, which is why a G-
Code program is used to test it instead
of simply jogging the machine back and
forth.


---

## PDF Page 179

DIAGRAMS AND PARTS LISTS
IN THIS SECTION, YOU'LL LEARN:
About this machine’s components.
NOTICE! Only use Tormach-approved parts when making replacements. If you don't replace parts with
those listed in this section, you may void your warranty.
CONTENTS
12.1 Base Machine
180
12.2 Frame Assembly
182
12.3 Water Table
185
12.4 Y-Axis Gantry Assembly
187
12.5 X-Axis Carriage Assembly
190
12.6 Z-Axis Lifter Assembly
192
12.7 Electrical Cabinet Layout
195


---

## PDF Page 180

12: DIAGRAMS AND PARTS LISTS
12.1 Base Machine
©Tormach® 2025
Specifications subject to change without notice.
Page 180
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
12.1 BASE MACHINE
5
1
2
6
3
6


---

## PDF Page 181

12: DIAGRAMS AND PARTS LISTS
12.1 Base Machine
©Tormach® 2025
Specifications subject to change without notice.
Page 181
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Frame Assembly (PN 50001)
1
2
Electrical Cabinet Assembly (PN 50002)
1
3
Water Table Assembly (PN 50003)
1
4
Y-Axis Gantry Assembly (PN 50004)
1
5
X-Axis Carriage Assembly (PN 50005)
1
6
Z-Axis Lifter Assembly (PN 50006)
1


---

## PDF Page 182

12: DIAGRAMS AND PARTS LISTS
12.2 Frame Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 182
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
12.2 FRAME ASSEMBLY
31
6
7
36
18
5
13
2
1
30
12
11
35
28
14
8
34
27
16
15
10
17
22
21
26
23
20
24
25
9
32
29
33
19
4
37


---

## PDF Page 183

12: DIAGRAMS AND PARTS LISTS
12.2 Frame Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 183
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Frame X Tube (PN 50010)
2
2
Frame Y Tube (PN 50011)
2
3
Grounding Bar (PN 39097)
1
4
Rack, Module 1, 1400 mm (PN 50047)
2
5
Linear Rail for 1300P Y (PN 50020)
2
6
Linear Rail, 20 mm (PN 50033)
4
7
Water Table Rail Support (PN 50129)
2
8
Front Panel Sheet Metal (PN 50015)
1
9
Rear Panel Sheet Metal (PN 50016)
1
10
Left Panel Sheet Metal (PN 50018)
1
11
Right Panel Sheet Metal (PN 50019)
1
12
Gantry Hard Stop, X-Axis (PN 50061)
4
13
Frame End Cap X (PN 50013)
4
14
Front Cable Tray (PN 50130)
1
15
Side Cable Tray (PN 50131)
1
16
1300P Frame Leg (PN 50009)
2
17
Frame Leg, B (PN 50133)
2
18
Water Table Track Shield (PN 50111)
4
19
Screw, Socket Head Cap, M05 × 0.8 × 015 (PN 20001)
72
20
Side Cable Tray Bracket (PN 50071)
2
21
Push Button (Blue LED) (PN 37342)
1
22
Emergency Stop Switch (PN 30462)
1
23
Side Cable Tray Base (PN 50021)
1
24
Side Cable Tray Top (PN 50022)
1
25
Screw, Socket Head Cap, M06 × 1 × 015 (PN 20001)
18
26
Screw, Socket Head Cap, M04 × 0.7 × 006 (PN 20001)
4
27
Machine Foot, Leveling, M16 × 2 Thread (PN 50119)
4
28
Nut, Hex, M16 (PN 20001)
8
29
Screw, Button Head Cap, M08 × 1.25 × 010 (PN 20001)
18
30
Screw, Socket Head Cap, M03 × 0.5 × 006 (PN 20001)
16
31
Screw, Socket Head Cap, M08 × 1.25 × 016 (PN 31681)
14
32
Screw, Socket Head Cap, M10 × 1.5 × 060 (PN 20001)
4


---

## PDF Page 184

12: DIAGRAMS AND PARTS LISTS
12.2 Frame Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 184
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
33
Nut, Hex, M10 (PN 36008)
4
34
Screw, Socket Head Cap, M16 × 1.75 × 025 (PN 20001)
4
35
Screw, Socket Head Cap, M04 × 0.7 × 010 (PN 30924)
4
36
Screw, Button Head Cap, M05 × 0.8 × 010 (PN 35774)
8
37
Energy Chain Link, Wide (PN 50017)
28
38
Energy Chain End Link, Wide, Internal Tabs (PN 50819)
1
39
Energy Chain End Link, Wide, External Tabs (PN 50820)
1


---

## PDF Page 185

12: DIAGRAMS AND PARTS LISTS
12.3 Water Table
©Tormach® 2025
Specifications subject to change without notice.
Page 185
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
12.3 WATER TABLE
4
3
5
6
2
7
1


---

## PDF Page 186

12: DIAGRAMS AND PARTS LISTS
12.3 Water Table
©Tormach® 2025
Specifications subject to change without notice.
Page 186
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Water Table Sheet Metal (PN 50030)
1
2
Water Table Roller (PN 50036)
4
3
Screw, Thumb, M8 × 1.25 - 60, 2 Arm Plastic Head (PN 50117)
2
4
Water Table Vertical Divider (PN 50032)
13
5
Water Table Roller Axle (PN 50118)
4
6
Water Table Roller Spacer (PN 50034)
4
7
Washer, Flat, M8 (PN 30531)
4


---

## PDF Page 187

12: DIAGRAMS AND PARTS LISTS
12.4 Y-Axis Gantry Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 187
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
12.4 Y-AXIS GANTRY ASSEMBLY
33
29
36
56
34
1
24
7
53
40
41
6
48
43
2
56
3
4
20
22
10
55
11
12
56
18
15
53
14
38
47
56
42
32
57
44
26
25
61
49
58
30
46
39
27
60 37
35
54
23
56
28
21
54
5
8
7
45
16
19
59
31
50


---

## PDF Page 188

12: DIAGRAMS AND PARTS LISTS
12.4 Y-Axis Gantry Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 188
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Rack, Module 1, Plasma X-Axis (PN 50046)
1
2
Gantry Cross Beam Extrusion (PN 50044)
1
3
Linear Rail, 16 mm (PN 50045)
2
4
Cross Beam Mount Block (PN 50043)
2
5
Gantry Hard Stop, X-Axis (PN 50061)
2
6
Y-Axis Pulley Mount Plate X+ (PN 50037)
1
7
Y-Axis Drive Bearing (PN 50064)
2
8
Y-Axis Drive Lock Nut (PN 50063)
2
9
Timing Pulley, HTD-5, 25 Tooth, 14 mm Taper Lock (PN 50078)
2
10
Y-Axis Belt Tensioner (PN 50073)
2
11
Y-Axis Belt Tensioner L Bracket (PN 50134)
2
12
Y-Axis Belt Tensioner Wheel (PN 50074)
2
13
Y-Axis Belt Tensioner Wheel Bearing (PN 50135)
4
14
Y-Axis Pinion Bearing (PN 50137)
4
15
Y-Axis Pinion Bearing Spacer (PN 50138 )
2
16
Y-Axis Pinion Mount Block (PN 50080)
2
17
Y-Axis Pinion Shaft (PN 50081)
2
18
Pinion, Module 1, 23T (PN 50072)
2
19
Key Stock, 5 mm × 15 mm (PN 50143)
4
20
Pin, 15 mm × 50 mm (PN 50049)
4
21
Linear Rail Roller, 20 mm Rail (PN 50050)
8
22
Y-Axis Roller Inner Spacer (PN 50069)
8
23
Y-Axis Motor Mount, NEMA 34 (PN 50082)
1
24
Y-Axis Drive Shaft (PN 50062)
1
25
Y-Axis Rack and Pinion Tensioner Bracket, Top (PN 50052)
2
26
Y-Axis Rack and Pinion Tensioner Bracket, Bottom (PN 50051)
2
27
Y-Axis Drive Lock Washer (PN 50065)
2
28
Plasma Y-Axis Servo, Clearpath CPM-SDSK-3411S-ELN (PN 39104)
1
29
Y-Axis Pulley Mount Plate X- Mirrored (PN 50038)
1
30
Timing Pulley, HTD-5, 40 Tooth, 14 mm Taper Lock (PN 50076)
1
31
Timing Pulley, HTD-5, 25 Tooth, 14 mm ID (PN 50077)
1
32
Timing Pulley, HTD-5, 50 Tooth, 14 mm Shaft (PN 50079)
2


---

## PDF Page 189

12: DIAGRAMS AND PARTS LISTS
12.4 Y-Axis Gantry Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 189
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
33
Y-Axis Motor Pulley Cover (PN 50056)
1
34
Gantry Cable Tray Base (PN 50059)
1
35
Grounding Bar (PN 39097)
1
36
Gantry Cable Tray Cover (PN 50060)
1
37
Y-Axis Roller Outer Spacer (PN 50070)
4
38
Y-Axis Roller Eccentric Adjust (PN 50066)
4
39
Gantry Cable Tray Connector (PN 50041)
1
40
Y-Axis Pulley Cover, X+ (PN 50039)
1
41
Y-Axis Linear Roller Cover, X+ (PN 50140)
1
42
Y-Axis Pulley Cover, X- (PN 50040)
1
43
Y-Axis Linear Roller Cover, X- (PN 50141)
1
44
Y-Axis Tensioner Bracket Retainer (PN 50142)
2
45
Y-Axis Tensioner Pinion Mount (PN 50057)
2
46
Timing Belt, HTD-5, Motor to Drive Shaft (PN 50112)
1
47
Timing Belt, HTD-5, Drive Shaft to Pinion (PN 50113)
1
48
T-Nut, M6, 8 mm WD (PN 50048)
16
49
Compression Spring, 10.5 mm ID, 20 mm LG (PN 50053)
2
50
Energy Chain Link, Narrow (PN 50055)
29
51
Energy Chain End Link, Narrow, External (PN 50817)
1
52
Energy Chain End Link, Narrow, Internal Tabs (PN 50818)
1
53
Screw, Socket Head Cap, M8 × 1.25 - 16 (PN 31681)
12
54
Screw, Socket Head Cap, M6 × 1 - 16 (PN 33117)
26
55
Screw, Socket Head Cap, M8 × 1.25 - 25 (PN 31618)
12
56
Screw, Socket Head Cap, M4 × 0.7 - 6 (PN 20001)
17
57
Screw, Shoulder, M6 × 1 - 10 (PN 35926)
4
58
Nut, Hex, M10 (PN 36008)
2
59
Screw, Socket Head Cap, M4 × 0.7 - 10 (PN 30924)
19
60
Washer, Flat, M8 (PN 50821)
4
61
Screw, Socket Head Cap, M8 × 1.25 - 20 (PN 31895)
2


---

## PDF Page 190

12: DIAGRAMS AND PARTS LISTS
12.5 X-Axis Carriage Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 190
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
12.5 X-AXIS CARRIAGE ASSEMBLY
13
10
14
16
9
7
15
29
26
20
3
5
4
21
18
2
1
22
19
23
6
27
28
30
8
24
12
11
17
25


---

## PDF Page 191

12: DIAGRAMS AND PARTS LISTS
12.5 X-Axis Carriage Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 191
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
X-Axis Carriage (PN 50083)
1
2
X Linear Rail Roller Shaft Support Plate, Eccentric (PN 50087)
4
3
X Linear Rail Roller Shaft, Support Plate (PN 50086)
4
4
Linear Rail Roller, 16 mm Rail (PN 50092)
4
5
Linear Rail Roller, 16 mm Rail Flat (PN 50093)
4
6
X-Axis Linear Rail Mounting Bracket (PN 50149)
1
7
X-Axis Motor Bracket (PN 50115)
1
8
Lead Screw, 8 mm × 170 mm (PN 50094)
2
9
Linear Bearing, 8 mm (PN 50102)
2
10
X-Axis Motor, ClearPath CPM-SDSK-2321S-EQN (PN 39105)
1
11
Planetary Gear Box, NEMA 23, 5:1 (PN 50088)
1
12
Pinion, Module 1, 23T (PN 50072)
1
13
Screw, Socket Head Cap, M5 × 0.8 - 12 mm (PN 31353)
4
14
Screw, Cone Point Set, M5x5 120° (PN 20001)
1
15
Linear Rail Clamp, 8 mm (PN 50101)
4
16
Screw, Socket Head Cap, M4 × 0.7 - 16 (PN 37751)
8
17
Screw, Socket Head Cap, M5 × 0.8 - 16 (PN 30546)
4
18
X-Axis Linear Roller Washer (PN 50148)
4
19
Screw, Socket Head Countersunk, M5 × 0.8 - 14 (PN 20001)
8
20
Screw, Socket Head Cap, M5 × 0.8 - 14 (PN 31563)
8
21
Washer, Flat, M5 (PN 50822)
8
22
Screw, Socket Head Cap, M6 × 1 - 16 (PN 33117)
2
23
Screw, Socket Head Cap, M5 × 0.8 - 10 (PN 31641)
4
24
Screw, Socket Head Cap, M4 × 0.7 - 12 (PN 31360)
8
25
X Carriage Top Sheet Metal (PN 50085)
1
26
X Carriage Back Cover Plate (PN 50084)
1
27
X-Axis Tensioner Bracket (PN 50116)
1
28
Z-Axis Compression Spring (PN 50122)
1
29
Screw, Socket Head Cap, M4 × 0.7 - 10 (PN 30924)
12
30
Screw, Socket Head Cap, M10 × 1.5 - 60 (PN 20001)
1


---

## PDF Page 192

12: DIAGRAMS AND PARTS LISTS
12.6 Z-Axis Lifter Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 192
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
12.6 Z-AXIS LIFTER ASSEMBLY
36
1
14
2
11
16
38
28
22
23
8
35
17
21
20
27
24
30
29
25
18
19
26
31
15
33
37
12
5
7
10
3
40
32
39
4
13
34
9
6
28


---

## PDF Page 193

12: DIAGRAMS AND PARTS LISTS
12.6 Z-Axis Lifter Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 193
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Lead Screw Nut, 8 mm (PN 50107)
1
2
Lead Screw Coupler, 8 mm (PN 50108)
1
3
Z-Axis Limit Switch Vertical Trigger (PN 50105)
1
4
Z-Axis Limit Switch (PN 50104)
2
5
Linear Rail, 8 mm × 225 mm (PN 50100)
2
6
Z-Axis Lifter Touch Switch Trigger Plate (PN 50103)
1
7
Z-Axis Motor Mount Front Cover (PN 50099)
1
8
Duramax Torch
1
9
Stepper, NEMA 23, 3 Stack, 8 mm Shaft (PN 39106)
1
10
Z-Axis Linear Bearing Carrier (PN 50120)
1
11
Linear Bearing, Round, 10 mm (PN 50146)
2
12
Lead Screw, 8 mm × 170 mm (PN 50106)
1
13
Z-Axis Compression Spring (PN 50122)
1
14
Z-Axis Upper Linear Rail Mounting Plate (PN 50124)
1
15
Z-Axis Lower Linear Rail Mounting Plate (PN 50125)
1
16
Z-Axis Limit Switch Flag (PN 50121)
1
17
Magnetic Breakaway Base (PN 50096)
1
18
Magnetic Breakaway Kinematic Plate (PN 50126)
1
19
Magnetic Breakaway Torch Holder Acorn Nut (PN 50703)
2
20
Magnetic Breakaway Torch Holder Magnet (PN 50702 )
4
21
Magnetic Breakaway Torch Holder Tether Clamp (PN 50701)
1
22
Magnetic Breakaway Torch Holder Tether Base (PN 50700)
1
23
Magnetic Breakaway Torch Holder Tether (PN 50704)
1
24
Magnetic Breakaway Torch Top Clamp (PN 50699)
1
25
Magnetic Breakaway Torch Bottom Clamp (PN 50150)
1
26
Screw, Socket Head Countersunk, M5 × 0.8 - 12 (PN 38894)
4
27
Screw, Socket Head Cap, M6 × 1 - 10 (PN 20001)
2
28
Screw, Socket Head Cap, M4 × 0.7 - 16 (PN 37751)
7
29
Screw, Socket Head Cap, M5 × 0.8 - 30 (PN 31602)
2
30
Screw, Socket Head Cap, M5 × 0.8 - 12 mm (PN 31353)
2
31
Screw, Socket Head Cap, M4 × 0.7 - 10 (PN 30924)
6
32
Z-Axis Motor Mount Sheet Metal (PN 50098)
1


---

## PDF Page 194

12: DIAGRAMS AND PARTS LISTS
12.6 Z-Axis Lifter Assembly
©Tormach® 2025
Specifications subject to change without notice.
Page 194
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
33
Lead Screw End Support (PN 50123)
1
34
Screw, Cone Point Set, M5 × 8 90° (PN 30337)
4
35
Screw, Socket Head Cap, M5 × 0.8 - 16 (PN 30546)
3
36
Screw, Socket Head Cap, M5 × 0.8 - 10 (PN 31641)
8
37
Screw, Socket Head Cap, M5 × 0.8 - 8 (PN 30844)
2
38
Screw, Socket Head Cap, M4 × 0.7 - 8 (PN 30891)
3
39
Screw, Socket Head Cap, M2 × 0.4 - 10 (PN 20001)
6
40
Screw, Socket Head Cap, M6 × 1 - 16 (PN 33117)
4
41
Screw, Cone Point Set, M4 × 16 90° (PN 20001)
2


---

## PDF Page 195

12: DIAGRAMS AND PARTS LISTS
12.7 Electrical Cabinet Layout
©Tormach® 2025
Specifications subject to change without notice.
Page 195
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
12.7 ELECTRICAL CABINET LAYOUT
19
5
6
20
4
1
18
14
3
2
17
22
13
21
16
15
7
8
9
10
11
12


---

## PDF Page 196

12: DIAGRAMS AND PARTS LISTS
12.7 Electrical Cabinet Layout
©Tormach® 2025
Specifications subject to change without notice.
Page 196
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
ID
Description
Quantity
1
Cabinet (PN 50024)
1
2
Fan (24 Vdc, 120 mm) (PN 37526)
1
3
Main Disconnect Switch (PN 30454)
1
4
Power Supply, 90-132 Vac / 180-264 Vac, 75 Vdc, 600 W, 8 A (PN 39101)
1
5
Sheet Metal Panel (PN 50027)
1
6
ECM1 v1.5, Machine Control Board (PN 37509)
1
7
Filter (110 Vac/250 Vac, 10 A) (PN 32350)
1
8
Ground Terminal Block (Screwless, DIN Mount) (PN 34130)
10
9
DIN Rail (35 × 7.5), 170 mm Long (PN 37910)
1
10
Circuit Breaker (10 A, 2 Pole) (PN 37346)
1
11
Circuit Breaker (20 A, 2 Pole) (PN 37345)
2
12
Circuit Breaker (20 A, 2 Pole) (PN 37345)
13
Terminal Block (Screwless, DIN Mount) (PN 34127)
34
14
DC Flyback Protection Diode (PN 37514)
1
15
Contactor (24 Vdc Coil, 1 Auxiliary Pole) (PN 37343)
1
16
Relay (24 Vdc Coil, DIN Mount) (PN 37515)
1
17
DIN Rail (35 × 7.5), 225 mm Long (PN 37910)
1
18
DIN Rail (35 × 7.5), 190 mm Long (PN 37910)
1
19
Stepper Driver (PN 38686)
1
20
Torch Height Control Board (PN 39096)
1
21
Power Supply (24 Vdc, 60 W) (PN 50461)
1
22
Electrical Noise Suppressor (DIN Mount) (PN 37358)
1


---

## PDF Page 197

ELECTRICAL SCHEMATICS
IN THIS SECTION, YOU'LL LEARN:
About the electrical schematics for this machine’s electronics.
CONTENTS
13.1 230 Vac Power (Sheet 2)
198
13.2 24 Vdc Controls (Sheet 3)
199
13.3 Axis Drive Control (Sheet 4)
200
13.4 A-Axis Driver (Sheet 5)
201
13.5 Plasma Source Control (Sheet 6)
202
13.6 Machine Control Board (Sheet 7)
203
13.7 Torch Limit and Breakaway Switches (Sheet 8)
204
13.8 Accessory and Auxiliary Power (Sheet 9)
205
13.9 Grounds (Sheet 10)
206
13.10 Terminal Strips (Sheets 11-16)
207


---

## PDF Page 198

13: ELECTRICAL SCHEMATICS
13.1 230 Vac Power (Sheet 2)
©Tormach® 2025
Specifications subject to change without notice.
Page 198
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.1 230 VAC POWER (SHEET 2)
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
2
2018.0.2.14
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
9/4/2020
2
pdenhartog
1
0
1300PL Production Run 1
5/24/2018
pdenhartog
9/24/2019
Add DIP switch settings for Z
pdenhartog
SOLIDWORKS Electrical
-P1
L
G
N
GND1
-DISC1
1
2
5
6
30454
Main Disconnect
3 meter cord
101
NEMA 6-20 Plug
103
104/N
-CB1
20A
1
2
3
4
37345
Main Breaker
-TB1
1
2
3
4
105
106/N
-CB3
20A
1
2
3
4
37345
Machine Breaker
-CB2
10A
1
2
3
4
37346
Accessory Breaker
8
7
6
-TB1
5
113
114/N
114/N
113
-K2
5
9
6
10
37343
Drive Contactor
-K1
3
4
1
2
37343
Downdraft Contactor
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
111
112/N
GND2
115
116/N
117
118/N
107
124/N
P4 - COL1
P4 - COL1
P9 - COL5
P9 - COL5
P10 - COL8
P10 - COL10
102/N
P9 - COL3
P9 - COL3


---

## PDF Page 199

13: ELECTRICAL SCHEMATICS
13.2 24 Vdc Controls (Sheet 3)
©Tormach® 2025
Specifications subject to change without notice.
Page 199
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.2 24 VDC CONTROLS (SHEET 3)
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
03
+L1
Electrical Panel
Machine Schematic
2
2018.0.2.14
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
9/4/2020
2
pdenhartog
1
0
1300PL Production Run 1
5/24/2018
pdenhartog
9/24/2019
Add DIP switch settings for Z
pdenhartog
SOLIDWORKS Electrical
113
114/N
P2 - COL9
P2 - COL9
24V DC
-PS1
2A
N
L
+V
-V
50461
24V DC Power Supply
100-240V AC
-TB2
1
4
5
2
401
402
401
402
37526
24V
-FAN1
Electrical Cabinet Fan
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
+L2 - Reset Panel
GND4
404
404
11
10
404
GND3
402
6
7
402
P7 - COL9
P7 - COL9
P7 - COL9
401
402
402
-K2
A1
A2
37343
Drive Contactor
5
9 02-7
6
10 02-7
8
12 06-3
13
14 03-5
-K2
-K1
A1
A2
37343
Downdraft Contactor
1
2 02-7
3
4 02-7
5
6
13
14
-K1
13
405
402
-D1
37514
402
405
405
12
P10 - COL8
P10 - COL10
-X1
1
2
3
4
5
401
-X2
1
2
3
4
5
403
484
486
GND31
483
485
ECM Power
P7 - COL9
8
-TB2
9
402
404
P9 - COL9
P9 - COL8
Accessory V-
Accessory V+
-K2
13
14
37343
Drive Contactor
404
404
P7 - COL9
-D2
37514
404
402
3
P8 - COL1


---

## PDF Page 200

13: ELECTRICAL SCHEMATICS
13.3 Axis Drive Control (Sheet 4)
©Tormach® 2025
Specifications subject to change without notice.
Page 200
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.3 AXIS DRIVE CONTROL (SHEET 4)
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
04
+L1
Electrical Panel
Machine Schematic
2
2018.0.2.14
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
9/4/2020
2
pdenhartog
1
0
1300PL Production Run 1
5/24/2018
pdenhartog
9/24/2019
Add DIP switch settings for Z
pdenhartog
SOLIDWORKS Electrical
115
116/N
P2 - COL9
P2 - COL9
Control
Power
Motor
3~
Encoder
3
2
-M1
39105
X Motor
1
2
3
4
5
6
7
8
Control
Power
Motor
3~
Encoder
3
2
-M2
39104
Y Motor
1
2
3
4
5
6
7
8
W4\1
W4\2
W4\3
W4\4
W4\5
W4\6
W4\7
W4\8
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
+L3 - Frame and Gantry
75V
-PS2
6A
N
L
+V
-V
39101
75V DC Power Supply
100-240V
-TB3
1
3
4
2
225
225
226
226
226
225
GND5
THERMAL FUSE
F1
10A
Backfeed Clamp
+
-
39102
-E1
207
208
P10 - COL8
-X3
2
1
-X4
1
2
W5\2
W5\1
W7\2
W7\1
-X10
2
1
-X11
1
2
-X8
1
2
3
4
5
6
7
8
W6\1
W6\2
W6\3
W6\4
W6\5
W6\6
W6\7
W6\8
-X9
1
2
3
4
5
6
7
8
W8\5
W8\4
W8\3
W8\2
W8\1
W8\8
W8\7
W8\6
-X6
1
2
3
6
4
5
7
8
W2\1
W2\2
W2\3
W2\4
W2\5
W2\6
W2\7
W2\8
-X7
1
2
3
6
4
5
7
8
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
P7 - COL6
-DR1
38686
Z Driver
V+
V-
A+
A-
B+
B-
STEP+
STEP-
DIR+
DIR-
EN+
EN-
OUT+
OUT-
Motor
-M3
39106
Z Motor
A+
A-
B+
B-
-X14
1
2
4
6
7
-X13
1
2
4
6
7
221
222
223
224
-X12
1
2
4
6
7
-X5
1
2
4
6
7
210
211
212
211
212
448
467
449
466
P7 - COL4
P7 - COL4
P7 - COL4
P7 - COL4
210
209
209
W9\A+
W9\A-
W9\B+
W9\B-
GND17
W9\GND
GND33
P10 - COL10
225
226
Bulkhead on X Carriage
5
6
P5 - COL4
P5 - COL4
Red
Blue
Red
Blue
Green-yellow
Green
Black
Green
Blue
Yellow
Black
White
Brown
Red
Orange
Green
Blue
Yellow
Black
White
Brown
Red
Orange
Black
Red
Black
Red
Z Axis DIP Switches:
Main Block:
1: OFF
2: OFF
3: ON
4: ON
5: OFF
6: OFF
7: ON
8: ON
Top Switches (Diagnostic):
1: OFF
2: OFF


---

## PDF Page 201

13: ELECTRICAL SCHEMATICS
13.4 A-Axis Driver (Sheet 5)
©Tormach® 2025
Specifications subject to change without notice.
Page 201
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.4 A-AXIS DRIVER (SHEET 5)
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
05
+L1
Electrical Panel
Machine Schematic
2
2018.0.2.14
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
9/4/2020
2
pdenhartog
1
0
1300PL Production Run 1
9/6/2019
pdenhartog
9/24/2019
Add DIP switch settings for Z
pdenhartog
SOLIDWORKS Electrical
-DR2
38686
A Drive
V+
V-
A+
A-
B+
B-
STEP+
STEP-
DIR+
DIR-
EN+
EN-
OUT+
OUT-
226
225
P4 - COL4
P4 - COL4
502
503
500
P7 - COL4
P7 - COL4
501
P7 - COL4
P7 - COL4
-X30
1
2
4
6
7
234
233
232
231
GND34
231
232
234
233
P10 - COL10
Note: A Axis driver is an optional add-on. Not installed at factory.


---

## PDF Page 202

13: ELECTRICAL SCHEMATICS
13.5 Plasma Source Control (Sheet 6)
©Tormach® 2025
Specifications subject to change without notice.
Page 202
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.5 PLASMA SOURCE CONTROL (SHEET 6)
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
06
+L1
Electrical Panel
Machine Schematic
2
2018.0.2.14
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
9/4/2020
2
pdenhartog
1
0
1300PL Production Run 1
5/24/2018
pdenhartog
9/24/2019
Add DIP switch settings for Z
pdenhartog
SOLIDWORKS Electrical
430
431
432
433
434
435
-X16
3
4
5
14
6
12
13
Plasma Machine Interface
38907
437
P7 - COL9
-K2
10A
03-10
8
12
438
439
P7 - COL9
441
440
P7 - COL4
P7 - COL4
] Start Plasma
] Arc Ok
442
P7 - COL1
482
Ohmic Cap
Torch
P10 - COL6
] Arc Voltage (50x Divider)
Hypertherm Powermax 45 XP
495
P7 - COL2
-X28
1
2
3
6
4
5
7
-X29
1
2
3
4
5
6
7


---

## PDF Page 203

13: ELECTRICAL SCHEMATICS
13.6 Machine Control Board (Sheet 7)
©Tormach® 2025
Specifications subject to change without notice.
Page 203
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.6 MACHINE CONTROL BOARD (SHEET 7)
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
07
+L1
Electrical Panel
Machine Schematic
2
2018.0.2.14
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
9/4/2020
2
pdenhartog
1
0
1300PL Production Run 1
5/24/2018
pdenhartog
9/24/2019
Add DIP switch settings for Z
pdenhartog
SOLIDWORKS Electrical
901
-X18
Machine Control Connector
P3 - COL3
P3 - COL3
P3 - COL6
405
J5
J1
J3
J4
J9
J7
J10
J2
2A
F1
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
402
401
404
W4\1
W4\2
W4\3
W4\4
W4\5
W4\6
W4\7
W4\8
W2\1
W2\2
W2\3
W2\4
W2\5
W2\6
W2\7
W2\8
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
402
437
P6 - COL1
439
P6 - COL1
441
440
P6 - COL1
P6 - COL1
443
443
Tormach THCT
39096
J1
J2
+5v
FO-
FO+
FR-
FR+
PROBE-
PROBE+
GND
GND
SHIELD
SHIELD
CAP
-IN
-E2
444
444
445
445
447
447
442
P6 - COL1
470
469
468
471
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
P4 - COL5
466
467
449
448
P4 - COL3
P4 - COL3
P4 - COL3
P4 - COL3
P8 - COL1
P8 - COL1
P8 - COL1
P8 - COL1
481
P10 - COL8
-X17
1
2
3
4
5
488
489
490
487
Accessory Input DIN Socket
Arc On Output
Downdraft Contactor
P3 - COL6
492
491
P9 - COL8
P9 - COL8
493
493
494
494
497
P8 - COL1
Limit Switch Cable
495
P6 - COL1
Arc OK Input [
P3 - COL6
24v Accessory 2
24v Accessory 1
24v (-)
24v (+)
Z Axis Control [
500
501
503
502
P5 - COL4
P5 - COL4
P5 - COL4
P5 - COL4
Orange


---

## PDF Page 204

13: ELECTRICAL SCHEMATICS
13.7 Torch Limit and Breakaway Switches (Sheet 8)
©Tormach® 2025
Specifications subject to change without notice.
Page 204
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.7 TORCH LIMIT AND BREAKAWAY SWITCHES (SHEET 8)
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
08
+L1
Electrical Panel
Machine Schematic
2
2018.0.2.14
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
9/4/2020
2
pdenhartog
1
0
1300PL Production Run 1
8/31/2018
pdenhartog
9/24/2019
Add DIP switch settings for Z
pdenhartog
SOLIDWORKS Electrical
-LS1
Z Positive Limit
-LS2
Z Negative Limt
-LS3
Torch Touch Switch
476
480
477
478
479
-X22
1
2
3
6
4
5
-X21
1
2
3
6
4
5
W10\6
W10\5
W10\4
W10\3
+L3 - Frame and Gantry
-X19
1
2
3
6
4
5
-X20
1
2
3
4
5
6
468
469
470
471
P7 - COL9
P7 - COL9
P7 - COL9
P7 - COL9
W10\2
W10\1
497
P7 - COL9
504
-LS4
V+/BN
OUT/BK
V-/BL
401
P3 - COL4
Torch Crash Detection
24v+
24v-
Black
Green
Blue
White
Red
Yellow


---

## PDF Page 205

13: ELECTRICAL SCHEMATICS
13.8 Accessory and Auxiliary Power (Sheet 9)
©Tormach® 2025
Specifications subject to change without notice.
Page 205
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.8 ACCESSORY AND AUXILIARY POWER (SHEET 9)
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
09
+L1
Electrical Panel
Machine Schematic
2
2018.0.2.14
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
9/4/2020
2
pdenhartog
1
0
1300PL Production Run 1
5/24/2018
pdenhartog
9/24/2019
Add DIP switch settings for Z
pdenhartog
SOLIDWORKS Electrical
L
N
E
-X23 37350
Ventillation Power
L
N
E
-X24
37599
Computer Power
124/N
118/N
-FL2
Downdraft Ventillation Noise Filter
37358
118/N
117
-TB1
9
10
11
12
107
P2 - COL6
P2 - COL6
GND7
GND9
P10 - COL8
P10 - COL8
118/N
P2 - COL9
P2 - COL9
-X25
1
2
3
4
404
402
P3 - COL6
P3 - COL8
492
491
P7 - COL9
P7 - COL9
24V Switched Accessory


---

## PDF Page 206

13: ELECTRICAL SCHEMATICS
13.9 Grounds (Sheet 10)
©Tormach® 2025
Specifications subject to change without notice.
Page 206
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.9 GROUNDS (SHEET 10)
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
10
+L1
Electrical Panel
Machine Schematic
2
2018.0.2.14
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
9/4/2020
2
pdenhartog
1
0
1300PL Production Run 1
5/24/2018
pdenhartog
9/24/2019
Add DIP switch settings for Z
pdenhartog
SOLIDWORKS Electrical
GND1
GND5
GND3
GND7
GND9
1
-TB4
2
3
4
5
6
GND17
GND2
GND4
P2 - COL2
P2 - COL7
P3 - COL3
P3 - COL5
P9 - COL3
P9 - COL5
-XS2
Frame Ground Bar
39097
-XS1
Water Table Ground Bar
39097
-XS3
Gantry Ground Bar
39097
GND23
GND25
GND26
GND24
+L3 - Frame and Gantry
P4 - COL2
Work Clamps
GND29
GND30
-X27
1
3
2
-X26
1
2
3
GND27
GND28
482
481
P7 - COL1
P6 - COL4
P4 - COL5
X Carriage Ground
GND34
P5 - COL7


---

## PDF Page 207

13: ELECTRICAL SCHEMATICS
13.10 Terminal Strips (Sheets 11-16)
©Tormach® 2025
Specifications subject to change without notice.
Page 207
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.10 TERMINAL STRIPS (SHEETS 11-16)
13.10.1 TB1: AC Terminal Strip (Sheet 11)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
SCHEME
REV.
NAME
DATE
CHANGES
11
+L1
Electrical Panel
Machine Schematic
2
2022.0.1.24
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
6/8/2018
pdenhartog
2
pdenhartog
Add DIP switch settings for Z
pdenhartog
9/24/2019
9/4/2020
1300PL Production Run 1
0
1
SOLIDWORKS Electrical
AC Terminal Strip
-TB1
105
=F1+L1-CB1:4
105
=F1+L1-CB3:3
1
105
=F1+L1-CB2:3
2
106/N
=F1+L1-CB1:2
106/N
=F1+L1-CB3:1
3
106/N
=F1+L1-CB2:1
4
113
=F1+L1-FL1:L'
113
=F1+L1-PS1:L
5
113
=F1+L1-K1:1
113
=F1+L1-K2:6
6
114/N
=F1+L1-FL1:N'
114/N
=F1+L1-PS1:N
7
114/N
=F1+L1-K1:3
114/N
=F1+L1-K2:5
8
117
=F1+L1-X23:L
9
117
=F1+L1-FL2
117
=F1+L1-K1:2
10
118/N
=F1+L1-FL2
118/N
=F1+L1-X23:N
11


---

## PDF Page 208

13: ELECTRICAL SCHEMATICS
13.10 Terminal Strips (Sheets 11-16)
©Tormach® 2025
Specifications subject to change without notice.
Page 208
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.10.2 TB1: AC Terminal Strip (Sheet 12)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
SCHEME
REV.
NAME
DATE
CHANGES
12
+L1
Electrical Panel
Machine Schematic
2
2022.0.1.24
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
6/8/2018
pdenhartog
2
pdenhartog
Add DIP switch settings for Z
pdenhartog
9/24/2019
9/4/2020
1300PL Production Run 1
0
1
SOLIDWORKS Electrical
AC Terminal Strip
-TB1
118/N
=F1+L1-K1:4
12


---

## PDF Page 209

13: ELECTRICAL SCHEMATICS
13.10 Terminal Strips (Sheets 11-16)
©Tormach® 2025
Specifications subject to change without notice.
Page 209
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.10.3 TB2: Control Terminal Strip (Sheet 13)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
SCHEME
REV.
NAME
DATE
CHANGES
13
+L1
Electrical Panel
Machine Schematic
2
2022.0.1.24
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
6/8/2018
pdenhartog
2
pdenhartog
Add DIP switch settings for Z
pdenhartog
9/24/2019
9/4/2020
1300PL Production Run 1
0
1
SOLIDWORKS Electrical
Control Terminal Strip
-TB2
401
=F1+L1-PS1:-V
401
=F1+L1-X1:2
1
401
=F1+L1-ECM1:1
401
=F1+L1-X19:1
2
401
=F1+L1-FAN1
3
402
=F1+L1-PS1:+V
402
=F1+L1-X1:1
4
402
=F1+L1-ECM1:2
402
=F1+L1-FAN1
5
402
=F1+L1-D1
402
=F1+L1-K1:A2
6
402
=F1+L1-ECM1:5
402
=F1+L1-K2:A2
7
402
=F1+L1-X25:4
402
=F1+L1-D2
8
404
=F1+L1-ECM1:1
404
=F1+L1-X25:1
9
404
=F1+L1-X1:3
404
=F1+L1-D2
10
404
=F1+L1-K2:14
404
=F1+L1-K2:A1
11


---

## PDF Page 210

13: ELECTRICAL SCHEMATICS
13.10 Terminal Strips (Sheets 11-16)
©Tormach® 2025
Specifications subject to change without notice.
Page 210
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.10.4 TB2: Control Terminal Strip (Sheet 14)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
SCHEME
REV.
NAME
DATE
CHANGES
14
+L1
Electrical Panel
Machine Schematic
2
2022.0.1.24
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
11/8/2018
pdenhartog
2
pdenhartog
Add DIP switch settings for Z
pdenhartog
9/24/2019
9/4/2020
1300PL Production Run 1
0
1
SOLIDWORKS Electrical
Control Terminal Strip
-TB2
405
=F1+L1-ECM1:3
12
405
=F1+L1-D1
405
=F1+L1-K1:A1
13


---

## PDF Page 211

13: ELECTRICAL SCHEMATICS
13.10 Terminal Strips (Sheets 11-16)
©Tormach® 2025
Specifications subject to change without notice.
Page 211
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.10.5 TB3: 75 Vdc Terminal Strip (Sheet 15)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
SCHEME
REV.
NAME
DATE
CHANGES
15
+L1
Electrical Panel
Machine Schematic
2
2022.0.1.24
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
9/5/2018
pdenhartog
2
pdenhartog
Add DIP switch settings for Z
pdenhartog
9/24/2019
9/4/2020
1300PL Production Run 1
0
1
SOLIDWORKS Electrical
75v DC Terminal Strip
-TB3
225
=F1+L1-PS2:-V
225
=F1+L1-X3:2
1
225
=F1+L1-DR1:V+
225
=F1+L1-X4:1
2
225
=F1+L1-DR2:V+
3
226
=F1+L1-PS2:+V
226
=F1+L1-X3:1
4
226
=F1+L1-DR1:V-
226
=F1+L1-X4:2
5
226
=F1+L1-DR2:V-
6


---

## PDF Page 212

13: ELECTRICAL SCHEMATICS
13.10 Terminal Strips (Sheets 11-16)
©Tormach® 2025
Specifications subject to change without notice.
Page 212
UM10720: 1300PLOperator's Manual(Version 0725A)
For the most recent version, see tormach.com/support
13.10.6 TB4: Ground Terminal Strip (Sheet 16)
REVISION
LOCATION:
Document realized with version :
CONTRACT:
SCHEME
REV.
NAME
DATE
CHANGES
16
+L1
Electrical Panel
Machine Schematic
2
2022.0.1.24
Tormach, Inc
1071 Uniek Dr.
Waunakee, WI 53597
User data 1
User data 2
6/8/2018
pdenhartog
2
pdenhartog
Add DIP switch settings for Z
pdenhartog
9/24/2019
9/4/2020
1300PL Production Run 1
0
1
SOLIDWORKS Electrical
Ground Terminal Strip
-TB4
GND1
=F1+L1-P1:G
GND2
=F1+L1-FL1
1
GND3
=F1+L1-PS1
GND4
=F1+L1-X1:5
2
GND5
=F1+L1-PS2
GND17
=F1+L1-X5:4
3
GND7
=F1+L1-X23:E
GND34
=F1+L1-X30:4
4
GND9
=F1+L1-X24:E
5
GND29
=F1+L1-X27:1
GND30
=F1+L1-X27:2
6
7
