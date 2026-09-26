# Tormach 1100MX Operator Manual - UM10586, 0626A

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

## PDF Page 5

IMPORTANT INFORMATION: PLEASE READ FIRST
3
SAFETY
21
1.1 Intended Use
22
1.2 Machine Standards
23
1.2.1 American National Safety Institute (ANSI)
23
1.2.2 Occupational Safety and Health Administration (OSHA)
23
1.3 Safety Overview
24
1.3.1 Safety Messages
24
Personal Injury
24
Property Damage
24
1.3.2 Safety Decals
24
On the Electrical Cabinet Door
24
Next to the Main Disconnect
25
On the Spindle Nose
25
1.3.3 Information Decals
25
Serial Number Plate
25
1.4 Machine Safety
27
1.4.1 General Shop Safety
27
1.4.2 Operational Safety
27
General
27
Tooling
28
Workholding
28
1.4.3 Electrical Safety
28
1.5 Noise Exposure
30
ABOUT YOUR MACHINE
31
2.1 Performance Expectations
32
2.1.1 Cutting Performance
32
2.1.2 Resolution and Accuracy
32
2.2 Machine Specifications
33
SITE REQUIREMENTS
35
3.1 General Site and Space Requirements
36
3.1.1 Site Requirements
36
3.1.2 Space Requirements
36
3.1.3 Operator Workstation Reference
36
3.2 Electrical and Power Requirements
38
3.2.1 Electrical Requirements
38
3.2.2 Power Requirements
38
TABLE OF CONTENTS


---

## PDF Page 6

©Tormach® 2026
Specifications subject to change without notice.
Page 6
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
3.2.3 Options for Non-Conforming Sites
38
INSTALLATION
39
4.1 Before You Begin
40
4.2 Installation Tools and Items
41
4.3 Move the Pallet
42
4.4 Assemble the Machine Stand
43
4.5 Unpack the Machine Crate
45
4.6 Install Core Components
46
4.6.1 Install the Y-Axis Bellows Spacers
46
4.6.2 Install the Axis Motors
46
Y-Axis Motor
47
X-Axis Motor
47
Z-Axis Motor
48
4.6.3 Lift and Move the Machine
49
Required Tools
49
Before You Begin
49
Assemble the Lifting Bar Kit
49
Connect the Machine for Lifting
50
Lift the Machine
50
4.6.4 Install the Drip Guard
51
4.6.5 Install the Controller
51
Install the Controller Arm
51
Install the Monitor
53
Make Monitor Connections
53
Install the PathPilot Controller
53
Set Up the PathPilot Operator Console
54
4.6.6 Install the Oiler
55
Make Automatic Oiler Connections
55
Make Manual Oiler Connections
56
Set Up the Manual Oiler
56
4.6.7 Verify the Installation
56
Power on the Machine
56
Verify Axes Function
57
Verify Spindle Function
58
Power off the Machine
59
4.7 Install Accessory Components
60
4.7.1 Set Up the Automatic Oiler
60
Specify the Interval Time
60
Specify the Actuation Time
60
4.7.2 Set Up the FRL
61
4.7.3 Install the Flood Coolant Kit
61
Adjust the Coolant Pump Motor Strapping
61
Set Up the Flood Coolant Kit
61
4.7.4 Install the Automatic Tool Changer (ATC)
63
TABLE OF CONTENTS


---

## PDF Page 7

©Tormach® 2026
Specifications subject to change without notice.
Page 7
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
Required Tools
63
Required Tools for Installation
63
Required Tools for Verification
63
Air Requirements
64
Before You Begin
64
Disassemble the Power Drawbar Button
64
Install the Air Cylinder
65
Mount the Automatic Tool Changer (ATC) Bracket
65
Install the Main Assembly
65
Level the Automatic Tool Changer (ATC)
66
Prepare the Machine
66
Examine Perpendicularity in the Y Direction
67
Examine Perpendicularity in the X Direction
67
Examine the Alignment of the Carousel Door Opening
67
Make Air Connections
68
Make Electrical Connections
69
Verify the Installation
69
Alignment
70
4.7.5 Install the 4th Axis
72
Install the M/MX A-Axis Driver (PN 38954)
72
Set the Driver DIP Switches
72
Install the A-Axis Motor Driver
72
Set Up the 6 in. or 8 in. Rotary Table
73
Required Tools
73
Unpack the 4th Axis
73
Lubricate the Rotary Table
73
Adjust the Backlash
74
To Set the Backlash by Positioning the Backlash Adjustment Screw
74
To Set the Backlash by the Numbers
75
Mount the Rotary Table
75
Set Up the microARC 4
75
Required Tools
75
Install in Machine
76
Center the Chuck Mounting Plate
77
Verify the Installation
77
4.7.6 Install the Chip Pans
78
4.7.7 Install the Enclosure
79
Before You Begin
79
Required Tools
79
Install the Enclosure Panels
80
Install the Left Rear Panel
80
Install the Left Side Panel
80
Install the Left Side Window Retainers
80
Install the Left Front Panel
81
Install the Enclosure Splice Plate
81


---

## PDF Page 8

©Tormach® 2026
Specifications subject to change without notice.
Page 8
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Install the Right Rear Panel
81
Install the Right Side Panel
81
Install the Right Side Window Retainers
81
Install the Right Front Panel
82
Install the Left Top Panel
82
Install the Right Top Panel
83
Install the Upper Front Panel
83
Install the Front Lower Panel
83
Install the Rear Splash Shield
84
Install the Linear Rails
84
Assemble the Linear Rails
84
Install the Linear Assemblies
84
Install the Front Doors
85
Assemble the Front Doors
85
Install the Front Door Assemblies
86
Install the Door Latch
87
Install Door Lock Mounting Hardware
87
Install the Floodlights
87
Install the Side Windows
88
Install the Access Panel
89
Install the Stainless Steel Wear Guard
90
Use the Maintenance Labels
90
Replace the Windows
90
4.7.8 Set up the Door Lock Switch Kit (Optional)
90
Install the Door Lock Switch Kit
90
Update PathPilot
92
Download and Install an Update File from the Controller
92
Install an Update File from a USB Drive
93
Enable the Door Lock Switch Kit
93
4.7.9 Install the Lube Cube Coolant Kit
94
Required Items and Tools
94
Assemble the Lube Cube
94
Install the Lube Cube on the Machine
97
Make Air Connections
97
4.7.10 Install the PathPilot Operator Console
97
Required Tools
97
Prepare the Machine
98
Remove the Right Side Window
98
Remove the Operator Box
98
Install the Mount Arm
98
Mount the Console
99
Assemble the Controller and Keyboard Tray
99
Lift and Secure the Controller Assembly
101
Make Electrical Connections
102
Reassemble the Machine
104
TABLE OF CONTENTS


---

## PDF Page 9

©Tormach® 2026
Specifications subject to change without notice.
Page 9
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
PathPilot Operator Console Drill Template
105
4.8 Set Up the PathPilot Controller
106
4.8.1 Specify the Date and Time
106
4.8.2 Specify the Keyboard Language
106
4.8.3 Configure the Optional Touch Screen Kit
106
4.8.4 Update PathPilot
106
SYSTEM BASICS
107
5.1 System Reference
108
5.1.1 Machine Table
108
5.1.2 Spindle
108
About the Spindle
108
5.1.3 Axes
108
5.2 Basic Controls Reference
109
5.2.1 Machine Controls
109
5.2.2 PathPilot Interface
109
PATHPILOT INTERFACE OVERVIEW
111
6.1 About PathPilot
112
6.2 Notebook Section
113
6.2.1 Main Tab
113
6.2.2 File Tab
113
6.2.3 Settings Tab
113
6.2.4 Offsets Tab
114
6.2.5 Conversational Tab
114
6.2.6 Probe/ETS Tab
114
6.2.7 Status Tab
114
6.3 Persistent Controls
116
6.3.1 Program Control Area
116
6.3.2 Position Status Area
116
6.3.3 Manual Control Area
116
6.4 Keyboard Shortcuts
118
6.5 Manage PathPilot Versions
119
6.5.1 Download and Install an Update File from the Controller
119
6.5.2 Install an Update File from a USB Drive
119
6.5.3 Install a Previous Version of an Update File
120
PATHPILOT TOOLS AND FEATURES
121
7.1 Create and Load G-Code Files
122
7.1.1 Load G-Code
122
Transfer Files to and From the Controller
122
Preview G-Code Files
122
Access Recent G-Code Files
123
Close the Current Program
123
7.1.2 Edit G-Code
123


---

## PDF Page 10

©Tormach® 2026
Specifications subject to change without notice.
Page 10
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Edit G-Code with a Text Editor
123
Edit G-Code with Conversational Programming
123
Change the Step Order
124
Create a New Job Assignment
124
Load an Existing G-Code File
124
Edit a Job Assignment
124
7.1.3 Read G-Code
124
Expand the G-Code Tab
124
About the G-Code Tab
124
Search in the Code
125
Set a New Start Line
125
Lead-In Moves
126
Change the View of the Tool Path Display
126
About the Tool Path Display
127
7.1.4 Use Conversational Programming
127
About Conversational Programming
127
Create a Face on a Part
127
About Facing
128
Facing in PathPilot
128
Facing Reference
129
Create a Profile on a Part
129
About Profiling
129
Profiling in PathPilot
129
Profiling Reference
130
Create a Pocket on a Part
130
About Pockets
131
Creating Pockets in PathPilot
131
About Circular Pockets
131
About Rectangular Pockets
132
Create Hole Locations on a Part (Drill/Tap)
132
About Drilling and Tapping
133
Drilling and Tapping in PathPilot
133
Create a Drilling Sequence
133
Create a Tapping Sequence
134
Drilling and Tapping Reference
134
Create Threads on a Part
135
About Thread Milling
135
Thread Milling in PathPilot
135
Thread Milling Reference
136
Create Text to Engrave on a Part
136
About Engraving
137
Import a DXF File
137
Working with Layers and Shapes
137
Change the Layer or Shape Cut Order
137
Adjust the Tree View Window
138
TABLE OF CONTENTS


---

## PDF Page 11

©Tormach® 2026
Specifications subject to change without notice.
Page 11
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
Working in the Preview Window
138
7.2 Machine Settings and Accessories
139
7.2.1 Enable an Internet Connection
139
Enable Automatic Updates
139
7.2.2 Change the Network Name
140
7.2.3 Select the Spindle Type
140
7.2.4 Change the Screen Orientation
140
About Portrait Screen Layout
141
7.2.5 Specify the Tool Change Method
142
About Automatic Tool Changes
142
About Manual Tool Changes
142
7.2.6 Disable Hard Stop Referencing
142
About Limit Switches
143
7.2.7 Limit G30 Moves
143
About G30
143
7.2.8 Enable the On-Screen Keyboard
143
About Soft Keyboards
143
7.2.9 Enable the USB M-Code I/O Interface Kit
144
7.2.10 Enable Tooltips
144
7.2.11 Enable the Door Lock Switch Kit
144
7.2.12 Enable Feeds and Speeds Suggestions in Conversational Routines
145
7.2.13 Specify Probing and Tool Measuring Options
145
7.2.14 Use the RapidTurn Interface
145
7.2.15 Specify the 4th Axis Rotary Type
145
Enable the 4th Axis Homing Kit
145
7.2.16 Use a USB Camera
146
About USB Cameras
146
Manual Recording
146
Automatic E-Stop Loop Recording ("Dashcam")
147
Review Video and Image Files
147
File Naming Convention
148
G-Code Commands
148
File Naming Conventions
148
Use M01 to Take Pictures
148
7.3 Set Up G-Code Programs
149
7.3.1 Use a Probe with PathPilot
149
Set Up the Probe
149
Use a Probe to Find a Feature's Location
149
Use a Probe to Set Work Offset Zeroes
149
Set the X and Y Work Offset Zero on the Corner of a Feature
149
Set the Work Offset Zeroes on a Feature
149
Use a Probe to Find the Center of a Feature
150
Find the Center of a Pocket
150
Find the Center of a Slot
150
Find the Center of a Rectangular Boss
150


---

## PDF Page 12

©Tormach® 2026
Specifications subject to change without notice.
Page 12
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Find the Center of a Circular Boss
150
Find the Center Rotation of an A-Axis
151
7.3.2 Set Tool Length Offsets
151
About Tool Offsets
151
Touch Off the Tool Length Offsets
152
Set a Known Reference Height
152
Measure Tools Using a Known Reference Height
152
Use an Electronic Tool Setter (ETS) to Measure Tools
153
Use a Tool Height Setter to Measure Tools
153
Set a Known Reference Height
153
Verify the Calibration of the Tool Height Setter
154
7.3.3 Set Work Offsets
154
About Work Offsets
155
7.3.4 View Work Offsets
155
7.3.5 View Available G-Code Modes
155
7.4 Run G-Code Programs
156
7.4.1 Bring the Machine Out of Reset
156
About Reset Mode
156
7.4.2 View the Active Axis to Jog
156
7.4.3 Jog the Machine
156
Jog in Continuous Velocity Mode
157
About Continuous Velocity Jogging
157
Jog in Step Mode
157
About Step Jogging
157
7.4.4 View the Current Machine Position
157
7.4.5 Reference the Machine
158
About Referencing
158
7.4.6 Start a Program
158
About Cycle Start
158
Cycle Start Reference
158
7.4.7 Stop Machine Motion
158
7.4.8 Operate the Coolant Pump
158
About Coolant
159
7.4.9 View the Active G-Code Modes
159
7.4.10 View the Distance to Go
159
About Distance to Go
159
7.5 Control G-Code Programs
160
7.5.1 Use the Feed Hold Function
160
About Feed Hold
160
7.5.2 Use the Feed Rate Override Function
160
About Feed Rate Override
160
7.5.3 Use M01 Break Mode
161
About M01 Break
161
Display Information and Capture Images During an M00 or M01 Break
161
Display Information with Images
161
TABLE OF CONTENTS


---

## PDF Page 13

©Tormach® 2026
Specifications subject to change without notice.
Page 13
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
Display Information with Text
161
Capture Images with a USB Camera
161
7.5.4 Use the Maxvel Override Function
161
About Maxvel Override
162
7.5.5 Use Single Block Mode
162
About Single Block
162
7.5.6 Use the Spindle Override Function
162
About Spindle Override
162
7.5.7 Change the Feed Rate
163
About Feed Rates
163
7.5.8 Change the Spindle Speed
163
About Spindle Controls
163
Spindle Controls Reference
163
7.5.9 Change the Tool Number
163
About M6 G43
164
7.5.10 Use a G30 Position
164
About G30
164
7.5.11 View the Tool Length
164
7.5.12 Manually Enter Commands
164
About the MDI Line DRO Field
165
Admin Commands Reference
165
7.5.13 Copy Recently Entered Commands
166
7.5.14 Use Feeds and Speeds Suggestions
166
Refresh DRO Field Values
167
Use Additional Provided Information
167
Create Tool Descriptions
167
Manually Enter Tool Descriptions
167
Automatically Generate Tool Descriptions
168
Tool Keywords Reference
168
7.5.15 Use Cycle Counters (M30 and M99)
169
Monitor Cycle Counters
169
Change Cycle Counter Values
169
7.6 System File Management
170
7.6.1 Manage System Files
170
7.6.2 Create Backup Files
170
About Backup Files
171
7.6.3 Restore Backup Files
171
7.6.4 Import and Export the Tool Table
172
Import a .csv File
172
Export the Tool Table as a .csv File
172
BASIC OPERATIONS
173
8.1 Start the Machine
174
8.2 Bring the Machine Out of Reset
175
8.2.1 About Reset Mode
175


---

## PDF Page 14

©Tormach® 2026
Specifications subject to change without notice.
Page 14
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
8.3 Reference the Machine
176
8.3.1 About Referencing
176
8.4 Jog the Machine
177
8.4.1 About Jogging
177
About Continuous Velocity Jogging
177
About Step Jogging
177
8.4.2 Jog Controls Reference
178
Jogging in PathPilot
178
Jogging with the Keyboard
178
Jogging with the (Optional) Jog Shuttle or Operator Console Pendant
178
8.5 Manually Control the Spindle
179
8.5.1 Change the Spindle Speed Range
179
8.5.2 About the Spindle
179
8.5.3 Spindle Controls Reference
179
8.6 Load G-Code
181
8.6.1 Transfer Files to and From the Controller
181
8.7 Set Up Tooling
182
8.7.1 Install a Tool in a Set Screw Tool Holder
182
8.7.2 Install a Tool in an ER Collet Tool Holder
182
8.7.3 Install a Drill Chuck in a Jacobs Taper Arbor
182
8.8 Set Tool Length Offsets
183
8.8.1 About Tool Offsets
183
8.8.2 Touch Off the Tool Length Offsets
183
Set a Known Reference Height
183
Measure Tools Using a Known Reference Height
184
8.8.3 Use an Electronic Tool Setter (ETS) to Measure Tools
185
8.8.4 Use a Tool Height Setter to Measure Tools
185
Set a Known Reference Height
185
Verify the Calibration of the Tool Height Setter
186
8.9 Set Work Offsets
187
8.9.1 About Work Offsets
187
8.10 Operate the Coolant Pump
188
8.10.1 About Coolant
188
8.11 Run the Spindle Warm-Up Program
189
FIRST PART TUTORIAL
191
9.1 About This Tutorial
192
9.2 Before You Begin
193
9.3 Required Items and Tools
194
9.4 Set Up Tooling
195
9.4.1 Install a Tool in a Set Screw Tool Holder
195
9.4.2 Install a Tool in an ER Collet Tool Holder
195
9.4.3 Install a Drill Chuck in a Jacobs Taper Arbor
195
9.5 Set Up the Machine
196
9.5.1 About Referencing
196
TABLE OF CONTENTS


---

## PDF Page 15

©Tormach® 2026
Specifications subject to change without notice.
Page 15
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
9.6 Mount the Workpiece
197
9.7 Set the Work Offsets
198
9.7.1 Set the Z Zero
198
9.7.2 Set the X/Y Zeroes
198
9.7.3 About Work Offsets
198
9.7.4 About True Positive Tool Length
199
9.7.5 About X/Y Part Zeroes
199
9.8 Set Tool Offsets
200
9.8.1 Touch Off the Tool Offsets
200
9.8.2 Measure Tools Using a Known Reference Height
200
9.9 Complete the Milling Operations
201
9.9.1 Create a Pocket
201
Load the Tool
201
Write the G-Code with Conversational
201
Run the Program
202
9.9.2 Engrave the Text
202
Write the G-Code with Conversational
202
Run the Program
203
PROGRAMMING
205
10.1 Programming Overview
206
10.1.1 About G-Code Programming Language
206
10.1.2 G-Code Formatting Reference
206
Line Numbers
206
Words
206
Letters
207
Values
207
Order of Execution
208
Modal Groups
209
Comments
210
10.1.3 Supported G-Codes Reference
210
10.2 Programming G-Code
212
10.2.1 About the Examples Used
212
10.2.2 Rapid Linear Motion (G00)
212
10.2.3 Linear Motion at Feed Rate (G01)
212
10.2.4 Arc at Feed Rate (G02 and G03)
213
Radius Format Arc
213
Center Format Arc
213
Arc in XY Plane
214
Arc in XZ Plane
214
Arc in YZ Plane
214
10.2.5 Dwell (G04)
215
10.2.6 Set Offsets (G10)
215
Set Tool Table (G10 L1)
215
Set Coordinate System (G10 L2)
215


---

## PDF Page 16

©Tormach® 2026
Specifications subject to change without notice.
Page 16
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
Set Tool Table (G10 L10)
215
Set Tool Table (G10 L11)
216
Set Coordinate System (G10 L20)
216
10.2.7 Plane Selection (G17, G18, G19)
216
10.2.8 Length Units (G20 and G21)
216
10.2.9 Return to Predefined Position (G28 and G28.1)
216
10.2.10 Return to Predefined Position (G30 and G30.1)
217
10.2.11 Automatically Measure Tool Lengths with an ETS (G37 and G37.1)
217
Move to G37 Position Over ETS (G37.1)
217
Move and Measure Tool Length (G37)
217
10.2.12 Straight Probe (G38.x)
218
Use the Straight Probe Command
219
10.2.13 Cutter Compensation (G40, G41, G42)
219
10.2.14 Dynamic Cutter Compensation (G41.1 and G42.1)
219
10.2.15 Apply Tool Length Offset (G43)
220
10.2.16 Engrave Sequential Serial Number (G47)
220
10.2.17 Cancel Tool Length Compensation (G49)
220
10.2.18 Absolute Coordinates (G53)
220
10.2.19 Select Work Offset Coordinate System (G54 to G54.1 P500)
221
10.2.20 Set Exact Path Control Mode (G61)
221
10.2.21 Set Blended Path Control Mode (G64)
221
10.2.22 Distance Mode (G90 and G91)
221
10.2.23 Arc Distance Mode (G90.1 and G91.1)
221
10.2.24 Temporary Work Offsets (G92, G92.1, G92.2, and G92.3)
221
10.2.25 Feed Rate Mode (G93, G94, and G95)
222
10.2.26 Spindle Control Mode (G96 and G97)
222
10.3 Programming Canned Cycles
224
10.3.1 Canned Cycles Reference
224
Supported Canned Cycles
224
10.3.2 High Speed Peck Drill (G73)
225
10.3.3 Cancel Canned Cycles (G80)
225
10.3.4 Drilling Cycle (G81)
225
10.3.5 Simple Drilling Cycle (G82)
227
10.3.6 Peck Drilling Cycle (G83)
227
10.3.7 Tapping Cycle (G84)
227
10.3.8 Boring Cycle (G85)
227
10.3.9 Boring Cycle (G86)
228
10.3.10 Boring Cycle (G88)
228
10.3.11 Boring Cycle (G89)
228
10.4 Programming M-Code
229
10.4.1 Supported M-Codes Reference
229
10.4.2 Program Stop and Program End (M00, M01, M02, and M30)
229
Display Information and Capture Images During an M00 or M01 Break
230
Display Information with Images
230
Display Information with Text
230
TABLE OF CONTENTS


---

## PDF Page 17

©Tormach® 2026
Specifications subject to change without notice.
Page 17
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
Capture Images with a USB Camera
230
10.4.3 Spindle Control (M03, M04, and M05)
230
10.4.4 Tool Change (M06)
230
10.4.5 Coolant Control (M07, M08, and M09)
231
10.4.6 Override Control (M48 and M49)
231
10.4.7 Feed Override Control (M50)
231
10.4.8 Spindle Speed Override Control (M51)
231
10.4.9 Set Current Tool Number (M61)
231
10.4.10 Set Output State (M64 and M65)
231
10.4.11 Wait on Input (M66)
232
10.4.12 USB Camera Control (M301, M302, M303)
232
10.5 Programming Input Codes
233
10.5.1 Feed Rate (F)
233
10.5.2 Spindle Speed (S)
233
10.5.3 Change Tool Number (T)
233
10.6 Advanced Programming
234
10.6.1 Parameters
234
Parameters Reference
234
Parameter Syntax
234
Parameter Scope
234
Behavior of Uninitialized Parameters
234
Parameter Mode
234
Persistence and Volatility
234
Intended Use
234
Numbered Parameters Reference
235
Read-Only Parameters
235
Subroutine Parameters Reference
235
Named Parameters Reference
235
10.6.2 Expressions
236
Binary Operators Reference
236
Functions Reference
236
10.6.3 Subroutines
237
Subroutines Reference
237
Conditional Subroutines Reference
238
if/endif
238
if/elseif/else/endif
238
Repeating Subroutines Reference
238
Looping Subroutines Reference
238
do/while
239
while/endwhile
239
MACHINE MAINTENANCE
241
11.1 Maintenance Safety
242
11.1.1 All Maintenance Procedures
242
11.1.2 Swarf Maintenance Procedures
242


---

## PDF Page 18

©Tormach® 2026
Specifications subject to change without notice.
Page 18
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
11.1.3 Coolant Maintenance Procedures
242
11.2 Maintenance Schedules
243
11.2.1 Daily
243
11.2.2 Weekly
243
11.2.3 Monthly
243
11.2.4 Semi-Annually
243
11.2.5 Annually
243
11.3 Regular Maintenance
244
11.3.1 Clean the Way Covers
244
11.3.2 Clean the Coolant System
244
About Cutting Fluid
244
Cutting Fluid Reference
244
11.3.3 Examine the Drawbar
245
11.3.4 Examine the Enclosure Windows
245
11.3.5 Lubricate the Machine
245
About the Manual Oiler
245
About the Automatic Oiler
245
Lubrication System Reference
246
11.3.6 Examine the Spindle Belt
246
11.3.7 Examine the Pull Stud Clamp
246
11.3.8 Prevent Rust
246
Remove Rust
246
TROUBLESHOOTING
247
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
12.5.1 LED Identification
252
12.6 Power Distribution Subsystem
253
12.6.1 The Controller Won't Power On
253
12.6.2 The Coolant Pump Won't Run
253
12.7 Control Power Subsystem
255
12.7.1 The Machine Won't Power On
255
12.8 Axes Drive Subsystem
257
12.8.1 All Axes Won't Move When Commanded
257
12.8.2 One Axis Won't Move (or Only Moves in One Direction), and Other Axes Move
258
DC-BUS Power Distribution Reference
260
12.8.3 Axis Movement is Noisy
260
12.8.4 Lost Motion on Axis Travel
261
12.9 Spindle Drive Subsystem
264
12.9.1 The Spindle Won't Turn
264
Run and Direction Commands Reference
267
Spindle VFD Trip Reference
267
TABLE OF CONTENTS


---

## PDF Page 19

©Tormach® 2026
Specifications subject to change without notice.
Page 19
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
12.9.2 Machining Operations are Loud ("Chattery")
268
12.9.3 Can't Load or Unload a Tool, or the Spindle's Drawbar Drags Against the Power Drawbar Cylinder's Piston Bolt 269
12.9.4 Spindle Rotates on Contact, or Spindle Isn't Rigidly Clamped
270
12.10 Operator Console Troubleshooting
272
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
DIAGRAMS AND PARTS LISTS
277
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
PNEUMATIC SCHEMATICS
313
14.1 Power Drawbar Pneumatics
314
14.2 Automatic Tool Changer (ATC) Pneumatics
315
ELECTRICAL SCHEMATICS
317
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

## PDF Page 20

[No extractable text; see original PDF page.]


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

## PDF Page 39

INSTALLATION
IN THIS SECTION, YOU'LL LEARN:
About the installation process required for this machine.
The installation of the base machine takes about four hours, not including items such as a Full Enclosure Kit or
an Automatic Tool Changer (ATC).
Note: For ease of installation, don't install the chip pans, backsplash/splash guard, enclosure, or
other accessories until after you've lifted the machine onto the Machine Stand.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
4.1 Before You Begin
40
4.2 Installation Tools and Items
41
4.3 Move the Pallet
42
4.4 Assemble the Machine Stand
43
4.5 Unpack the Machine Crate
45
4.6 Install Core Components
46
4.7 Install Accessory Components
60
4.8 Set Up the PathPilot Controller
106


---

## PDF Page 40

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
©Tormach® 2026
Specifications subject to change without notice.
Page 40
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.1 Before You Begin


---

## PDF Page 41

4: INSTALLATION
4.2 Installation Tools and Items
4.2 INSTALLATION TOOLS AND ITEMS
Before uncrating and beginning the initial setup of your
machine, collect the following tools and items.
l 4 mm hex wrench (included in tool bag)
l Assistant to help you
l Combination wrench set
l Consumables, like:
o
Anti-seize
o
Air tool oil
o
Machine way oil
l Digital multimeter
l Hammer
l Level (2 ft)
l Lifting Bar Kit (PN 31446)
l Pallet jack
l Phillips screwdriver (included in tool bag)
l Pry bar
l Reciprocating saw (or similar) to break down the pallet
l Safety eyewear that meets ANSI Z87+
l Shears or knife
l Socket set
l Step ladder
l Snips
l Work gloves
©Tormach® 2026
Specifications subject to change without notice.
Page 41
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 42

4.3 MOVE THE PALLET
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
If a pallet is too wide to fit through a doorway, see
Moving Dimensions (D40147).
©Tormach® 2026
Specifications subject to change without notice.
Page 42
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.3 Move the Pallet


---

## PDF Page 43

4: INSTALLATION
4.4 Assemble the Machine Stand
4.4 ASSEMBLE THE MACHINE STAND
Tools and Items Required
l Work gloves
l Safety eyewear that meets ANSI Z87+
l Hammer
l Pry bar
l Snips
CAUTION! Sharp Objects Hazard: Before opening the
shipping crate, you must put on work gloves and
safety eyewear that meets ANSI Z87+. If you don't,
the shipping crate and steel straps could cut you,
causing serious injury.
1.
Put on work gloves and eye protection.
2.
Cut and remove the steel straps on the shipping crate
with snips.
3.
Disassemble the shipping crate with a hammer and pry
bar. Start with removing the top, followed by the four
sides.
4.
Inspect the item(s):
l Photograph any damage that may have occurred
during shipping.
l Verify the received goods against the packing list.
If there is any damage or shortages, you must contact
Tormach within 30 days of receipt. Create a support
ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.
5.
Find the accessory box inside the Machine Stand, which
contains the feet for the Machine Stand. Set it aside for
later installation.
6.
Remove the shipping bolts on the coolant tank, and then
move it out of the Machine Stand and off of the pallet.
7.
In the coolant tank, find four casters and their hardware.
8.
Attach each of the four casters to the bottom of the
coolant tank with four M6 × 12 mm socket head cap
screws, spring washers, and flat washers. Then, set the
coolant tank aside for later installation.
9.
Remove the four nuts securing the Machine Stand to the
pallet with a 17 mm wrench. Discard the four nuts.
10.
To install the Machine Stand's feet, you must first lay it
on its front surface. Put a large piece of cardboard (or
similar) on the floor to protect the Machine Stand.
CAUTION! Team Lift Required: You must have
the aid of more than one person to lift and
move the object. The object is heavy, and lifting
it by yourself can cause serious injury.
11.
Lift the Machine Stand off the pallet, and set it down on
the cardboard that you put on the floor in Step 10.
Figure 4-1: Cardboard on the floor to set the Machine
Stand on.
12.
Open the accessory box that you set aside in Step 5, and
then identify the hardware inside (which is used to
assemble the feet for the Machine Stand).
Note: There are four large spacers in the
accessory box that are used to assemble the
feet for a 770M/MX mill. If you're assembling
the feet for an 1100M/MX mill, discard the
spacers.
©Tormach® 2026
Specifications subject to change without notice.
Page 43
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 44

13.
Identify the foot pad from the accessory box, and
unscrew the foot adjuster as shown in the following
image. Then, apply Anti-Seize to both components, and
reassemble the foot pad.
Figure 4-2: Disassembling the foot pad to apply Anti-
Seize on each component.
14.
Put the foot adjuster back into the base of the foot pad,
but don't tighten it completely. Leave two threads visible
so that you can adjust the stand up or down later in this
procedure.
15.
Put the threaded end of one M12 stud into each foot
pad.
Figure 4-3: Machine Stand foot assembly.
16.
Put one foot assembly into the corner of the Machine
Stand, and then use one M12 washer and one M12 nut
to secure the foot assembly in place by hand.
Figure 4-4: One foot assembly aligned with the corner
of the Machine Stand.
Note: Only attach the feet so that they're
finger-tight. You'll tighten them completely
after you've leveled the stand.
Repeat this step for the remaining three foot
assemblies.
CAUTION! Team Lift Required: You must have
the aid of more than one person to lift and
move the object. The object is heavy, and lifting
it by yourself can cause serious injury.
17.
Tilt the Machine Stand off the floor and onto its feet.
Figure 4-5: The Machine Stand moved onto its newly
installed feet.
18.
Level the feet as needed with the provided 3/8 in. (or 10
mm) adjustment bar.
19.
Securely tighten all four of the feet to the Machine Stand
with a 19 mm wrench.
©Tormach® 2026
Specifications subject to change without notice.
Page 44
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.4 Assemble the Machine Stand


---

## PDF Page 45

4: INSTALLATION
4.5 Unpack the Machine Crate
4.5 UNPACK THE MACHINE CRATE
CAUTION! Sharp Objects Hazard: Before opening the
shipping crate, you must put on work gloves and
safety eyewear that meets ANSI Z87+. If you don't,
the shipping crate and steel straps could cut you,
causing serious injury.
1.
Put on work gloves and eye protection.
2.
Cut and remove the steel straps on the shipping crate
with snips.
3.
Disassemble the shipping crate with a hammer and pry
bar. Start with removing the top, followed by the four
sides.
4.
Remove and discard the plastic wrap from the machine.
5.
Inspect the item(s):
l Photograph any damage that may have occurred
during shipping.
l Verify the received goods against the packing list.
If there is any damage or shortages, you must contact
Tormach within 30 days of receipt. Create a support
ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.
6.
Cut and remove the shipping straps securing the drip
guard to the pallet, and set aside for later installation.
7.
Cut and remove the shipping straps securing the tool bag
and Emergency Stop box to the pallet.
The tool bag contains the following items:
l 1100MX Cable Kit
l BT30 gripper installation tool
l Double open-end wrench: 13 mm/16 mm
l Electrical cabinet key
l Hex wrench set: 3 mm, 4 mm, 5 mm, 6 mm, 8 mm,
and 10 mm
l Hook wrench (for spring stack)
l Phillips screwdriver
Note: There are two spare fuses included with
the machine (2.5A, 5 × 20 mm, glass slow-
blow), which are taped to the inside of the
electrical cabinet.
8.
Cut and remove the shipping strap securing the Y-axis
motor to the pallet.
9.
Remove all packing materials from the spindle head.
©Tormach® 2026
Specifications subject to change without notice.
Page 45
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 46

4.6 INSTALL CORE COMPONENTS
After moving and unpacking the machine crate, you must
install the core components of the system. Complete the
following steps in the order listed:
4.6.1 Install the Y-Axis Bellows Spacers
46
4.6.2 Install the Axis Motors
46
4.6.3 Lift and Move the Machine
49
4.6.4 Install the Drip Guard
51
4.6.5 Install the Controller
51
4.6.6 Install the Oiler
55
4.6.7 Verify the Installation
56
4.6.1 Install the Y-Axis Bellows Spacers
NOTICE! You must install the Y-axis bellows spacers
before you operate the machine. If you don't, there's a
risk of machine damage.
1.
Find the bellows spacers on the pallet, and remove them
from the packaging. Set aside the spacers and four M6
screws.
Figure 4-6: Y-axis bellows spacers on the pallet.
2.
On the front of the Y-axis bellows, remove the front M6
screw with a 5 mm hex wrench. Discard the screw.
3.
Put one M6 screw through one of the holes on the front
of the Y-axis bellows. Then, put the spacer onto the
screw from the other side of the bellows, and line up the
screw with the hole in the base casting.
Figure 4-7: Installing the Y-axis bellows spacer.
4.
Tighten the M6 screw finger-tight.
5.
Put one M6 screw into the remaining hole in the Y-axis
bellows, through the spacer, and into the base casting.
Tighten the M6 screw finger-tight.
6.
Repeat Steps 3 through 5 for the second spacer.
7.
Carefully move the Y-axis bellows back and forth to
verify that the installation of the spacers didn't cause
binding. The bellows should move freely.
8.
Securely tighten all four M6 screws with a 5 mm hex
wrench.
4.6.2 Install the Axis Motors
The X-, Y-, and Z-axis motors are shipped disconnected from
the machine and secured to the pallet. You must install them
before removing the machine from the pallet.
Note: Previously, only the Y-axis motor was shipped
disconnected from the machine and secured to the
pallet. If your machine has the X- and Z-axis pre-
installed, install the Y-axis motor, and then go to Lift
and Move the Machine.
Figure 4-8: Axis motors secured to the pallet.
©Tormach® 2026
Specifications subject to change without notice.
Page 46
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.6 Install Core Components


---

## PDF Page 47

4: INSTALLATION
4.6 Install Core Components
NOTICE! The axis motor wires can't support the weight of
the motor. To avoid property damage, carefully move the
motors.
Y-Axis Motor
1.
Remove the screws securing the motor mount cover
with a 3 mm hex wrench. Set the screws and cover
aside.
Figure 4-9: Motor mount cover.
2.
Loosen the two motor shaft coupling screws with a 3
mm hex wrench.
Figure 4-10: Two motor shaft coupling screws to
loosen.
3.
Remove the four M5 cap head screws, lock washers, and
washers from the motor mount with a 4 mm hex
wrench. Set all aside.
Figure 4-11: Motor mounting hardware removed from
the motor mount.
4.
Remove any paint bleed from the face and bore of the
motor mount with a mild abrasive.
5.
Remove the Y-axis motor from the pallet and/or the
machine, and discard the shipping materials.
6.
Mount the Y-axis motor onto the Y-axis motor mount
with the four M5 cap head screws, lock washers, and
washers that you removed in Step 3. Verify that the
motor's wires face the floor, and that the motor and
motor mount faces are flush.
Figure 4-12: Flex conduit on the Y-axis motor facing
the floor.
7.
Securely tighten all four M5 cap head screws.
8.
Position the coupling so that it's centered between the
motor shaft and machined end of the ball screw, and
then tighten the cap screws on the coupling.
9.
Replace the motor mount cover that you removed in
Step 1.
X-Axis Motor
1.
Remove the screws securing the motor mount cover
with a 3 mm hex wrench. Set the screws and cover
aside.
©Tormach® 2026
Specifications subject to change without notice.
Page 47
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 48

2.
Loosen the two motor shaft coupling screws with a 3
mm hex wrench.
3.
Remove the four M5 cap head screws, lock washers, and
washers from the motor mount with a 4 mm hex
wrench. Set all aside.
4.
Remove any paint bleed from the face and bore of the
motor mount with a mild abrasive.
5.
Remove the X-axis motor from the pallet and/or the
machine, and discard the shipping materials.
6.
Mount the X-axis motor onto the X-axis motor mount
with the four M5 cap head screws, lock washers, and
washers that you removed in Step 3. Verify that the
motor's wires face the front of the machine, and that
the motor and motor mount faces are flush.
7.
Securely tighten all four M5 cap head screws.
8.
Position the coupling so that it's centered between the
motor shaft and machined end of the ball screw, and
then tighten the cap screws on the coupling.
9.
Replace the motor mount cover that you removed in
Step 1.
10.
Find the X-axis motor cover on the pallet. Remove the
motor cover and the rubber seal from the bag, and set
them aside.
11.
Loosen the four screws on the sides of the X-axis motor
mount with a 3 mm hex wrench.
Figure 4-13: X-axis motor cover screws.
12.
Put the rubber seal above the motor mount.
Figure 4-14: Rubber seal above the motor mount.
13.
Move the X-axis motor cover over the X-axis motor, and
tighten the four screws on the motor mount.
Z-Axis Motor
1.
Remove the four M5 cap head screws, lock washers, and
washers from the motor mount with a 4 mm hex
wrench. Set all aside.
2.
Remove the Z-axis motor from the pallet and/or the
machine, and discard the shipping materials.
3.
Loosen the motor coupler's set screw with a 4 mm hex
wrench.
Figure 4-15: Loosening the set screw on the coupler.
4.
Mount the Z-axis motor onto the Z-axis motor mount
with the four M5 cap head screws, lock washers, and
washers that you removed in Step 1. Verify that the
motor's wires face the back of the machine, and that the
motor and motor mount faces are flush.
5.
Securely tighten all four M5 cap head screws.
6.
Tighten the motor coupler's set screw with a 4 mm hex
wrench.
7.
Connect the power and control wires to the Z-axis motor.
©Tormach® 2026
Specifications subject to change without notice.
Page 48
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.6 Install Core Components


---

## PDF Page 49

4: INSTALLATION
4.6 Install Core Components
4.6.3 Lift and Move the Machine
For safety and security, use the Lifting Bar Kit (PN 31446) to
lift the machine from above.
Note: It's possible to lift the machine from below
with two steel bars — one in either 7/8-in. (22 mm)
diameter hole on the machine base. The bars must be
made of steel, at least 32 in. (813 mm) long, and
must not be hollow. You must make sure that the
machine is properly secured before lifting so that it
does not roll or shift in the process. For maximum
safety and security, we strongly recommend that you
lift the machine from above, as outlined in this
section.
1.
Move the machine's pallet and stand as close as possible
to the desired location with a pallet jack. The machine
stand must be positioned behind the machine.
2.
Remove any excess shipping grease on the machine with
a mild degreaser (like WD40® or similar).
3.
To allow room to position the engine hoist, you must
first trim the pallet: cut the machine's pallet along the
sides of the machine's base casting with a reciprocating
saw (or similar).
4.
Remove the nuts from the four studs that hold the
machine to the pallet with a 19 mm wrench. Discard the
nuts.
WARNING! Transportation and Lift Hazard:
Before moving the machine, you must confirm
that all persons are clear of the area below the
machine. Qualified professionals must
transport, lift, and move the machine. Moving
parts can entangle, pinch, or cut you, causing
death or serious injury.
5.
Lift the machine from above. Complete the following
steps in the order listed:
Required Tools
49
Before You Begin
49
Assemble the Lifting Bar Kit
49
Connect the Machine for Lifting
50
Lift the Machine
50
Required Tools
This procedure requires the following tools. Collect them
before you begin.
l Adjustable wrench
l Clean cloth
l Engine hoist
Before You Begin
1.
Inspect the lifting chain for any broken links, and all
other parts to make sure that there are no breaks or
imperfections. If you find any broken links or
imperfections, we can help. Create a support ticket with
Tormach Technical Support at tormach.com/how-to-
submit-a-support-ticket for guidance on how to proceed.
2.
Use a clean rag to remove any shipping grease from all
components in the Lifting Bar Kit and from the surface of
the machine table.
Assemble the Lifting Bar Kit
1.
Find and identify the correct Lifting Bar Kit mounting
holes specific to your machine:
l On each end of the Lifting Bar Kit are the front and
rear mounting holes: the front connects the lifting
chain to the machine table, and the rear connects to
the machine column itself.
l In the center of the Lifting Bar Kit are two mounting
holes: one for each mill model.
Figure 4-16: Center mounting hole on the Lifting
Bar Kit.
2.
Put one 3/8-in. forged lifting clevis and the lifting chain
into the front mounting hole.
©Tormach® 2026
Specifications subject to change without notice.
Page 49
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 50

3.
Depending on your machine, the center hole that you use
varies. Put the 1/2-in. forged lifting clevis in the
appropriate center mounting hole that you identified in
Step 1.
4.
Depending on your machine, the procedure for the rear
mounting hole varies:
l 1100M/MX Put two 3/8-in. forged lifting clevises
into the rear mounting hole.
Connect the Machine for Lifting
1.
Move three M12 T-nuts into the front T-slot on the
machine table and arrange them in the center as shown
in the following image.
Figure 4-17: Lifting Bar Kit hardware arranged on the
machine table.
2.
Put the M12 lifting eye in the center M12 T-nut.
3.
Securely tighten the M12 lifting eye with an adjustable
wrench.
4.
Put one M12 × 25 mm hex bolt and one M12 flat washer
into the each of the remaining M12 T-nuts.
5.
Securely tighten the two M12 × 25 mm hex bolts and
two M12 flat washers with an adjustable wrench.
6.
Connect the loose end of the lifting chain to the M12
lifting eye.
7.
Connect the hook from your engine hoist to the center
1/2-in. forged lifting clevis on the lifting bar.
8.
Depending on your machine, the procedure for
connecting the lifting bar varies:
l 1100M/MX Connect the lifting bar's rear 3/8-in.
forged lifting clevis to the M16 lifting eye on the top
of the machine column.
Figure 4-18: Lifting Bar Kit connected to the
machine.
Lift the Machine
1.
Without yet lifting the machine, raise the engine hoist to
remove any slack in the lifting chain.
2.
Verify that the connections on the M12 hex bolts and the
M12 lifting eye are securely tightened with an adjustable
wrench.
WARNING! Tip Hazard: Before lifting the
machine, you must verify that it's properly
leveled. If the machine isn't level while it's
lifted, the load on the engine hoist can
unexpectedly slide, causing death or serious
injury.
3.
Slowly and steadily lift the machine to examine the
alignment. The machine must lift flat and stay parallel
with the floor, as shown in the following image.
Figure 4-19: Machine lifted parallel to the floor.
If necessary, lower the machine and adjust the position
of the M12 T-nuts.
4.
Continue to lift the machine until it reaches the height at
which it can clear the machine stand.
©Tormach® 2026
Specifications subject to change without notice.
Page 50
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.6 Install Core Components


---

## PDF Page 51

4: INSTALLATION
4.6 Install Core Components
5.
Position the machine above the machine stand.
6.
Slowly and steadily lower the machine on to the
mounting pads on the machine stand, as shown in the
following image.
Figure 4-20: Machine lowered on to the mounting
pads on the machine stand.
WARNING! Crush Hazard: While lowering the
machine onto the machine stand, you must
keep your hands away from all moving parts.
Moving parts can entangle, pinch, or cut you,
causing death or serious injury.
7.
Secure the machine to the machine stand with a 10 mm
hex wrench, four M12 × 50 mm socket head cap screws,
and four M12 washers.
8.
Once the machine is completely supported by the
machine stand, remove all components of the Lifting Bar
Kit.
4.6.4 Install the Drip Guard
1.
Find the drip guard that you set aside in "Unpack the
Machine Crate" (page 45).
2.
Attach the drip guard to the front of the machine table
with a 3 mm hex wrench and three M5 × 0.8 - 12 socket
head cap screws.
Figure 4-21: Drip guard attached to the front of the
machine table.
4.6.5 Install the Controller
Depending on your machine configuration, do one of the
following:
l If You Have a Controller Arm Go to "Install the
Controller Arm" (below).
l If you have a PathPilot Operator Console Go to "Set
Up the PathPilot Operator Console" (page 54).
Note: The PathPilot operator console is
mounted to the enclosure, but we don't
recommend completely installing it (or the
enclosure) until after you've installed all other
major accessories.
Install the Controller Arm
Tools and Items Required
l 4 mm hex wrench
l 6 mm hex wrench
l 8 mm hex wrench
l 17 mm hex wrench
l 17 mm socket wrench
l 21 mm wrench
l Dead-blow hammer (or similar)
l Phillips screwdriver
l Pry bar
©Tormach® 2026
Specifications subject to change without notice.
Page 51
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 52

CAUTION! Sharp Objects Hazard: Before opening the
shipping crate, you must put on work gloves and
safety eyewear that meets ANSI Z87+. If you don't,
the shipping crate and steel straps could cut you,
causing serious injury.
1.
Put on work gloves and eye protection.
2.
Open the Controller Arm crate with a pry bar.
3.
Find the mounting pad on the machine stand.
Figure 4-22: Controller Arm mounting pad.
4.
Secure the square tube arm to the machine stand with
two M8 socket head cap screws, two M8 flat washers,
two M8 lock washers, and a 6 mm hex wrench. Verify
that the white nylon washer is located toward the
bottom of the mounting pad.
Figure 4-23: White nylon washer on the square tube
arm.
5.
Put the monitor post into the square tube arm. Verify
that the monitor bracket is toward the top, and that the
threaded holes face the holes in the square tube arm.
6.
Tighten the cross bolt on the square tube arm with a 17
mm socket wrench and a 17 mm hex wrench.
7.
With a 21 mm wrench, remove the monitor bracket from
the Controller Arm, and rotate it so that the largest
mounting plate is facing up.
Figure 4-24: Incorrect and correct orientations of the
monitor bracket on the Controller Arm.
Note: The largest mounting plate is for the
monitor, and the smallest mounting plate is for
the keyboard tray.
©Tormach® 2026
Specifications subject to change without notice.
Page 52
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.6 Install Core Components


---

## PDF Page 53

4: INSTALLATION
4.6 Install Core Components
8.
Tighten the three pivot bolts on the monitor bracket with
an 8 mm hex wrench and a 16 mm wrench.
Figure 4-25: Tightening the monitor bracket in place.
Tip! This makes it easier to install the monitor,
which you'll do later in this installation
procedure.
9.
Tap the end plug into the square tube arm with a dead-
blow hammer (or similar).
10.
Secure the keyboard table to the monitor bracket with
four M5 socket head cap screws, four M5 flat washers,
four M5 split lock washers, and a 4 mm hex wrench.
11.
Attach four wire tie mounts to the monitor post with
four 4 mm flat head machine screws and a Phillips
screwdriver.
Install the Monitor
1.
Align the monitor with the mount plate.
2.
Attach the top of the monitor to the mount plate with a
Phillips screwdriver and two M4 × 10 mm machine
screws.
3.
Attach the bottom of the monitor to the mount plate
with a Phillips screwdriver and two M4 × 10 mm thread-
forming screws.
Figure 4-26: Monitor installed on the mount plate.
Make Monitor Connections
1.
Connect the monitor's cables.
2.
Route all of the cables' loose ends down the Controller
Arm.
3.
Secure the cables to the wire tie mounts that you
installed on the round monitor post with four 4 in. cable
ties.
4.
Route the loose ends of all the cables through the slots
in the square tube arm.
5.
Route the loose end of the power cable to the back of
the electrical cabinet, and connect it to any of the
Accessory power outlets on the side of the electrical
cabinet.
Install the PathPilot Controller
The PathPilot controller attaches to the top of the PathPilot
Controller VESA Mount and behind the monitor.
1.
Put four standoffs into the controller and tighten them
by hand.
©Tormach® 2026
Specifications subject to change without notice.
Page 53
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 54

2.
Find the four M4 screws and the VESA plate included
with the controller. Then, mount the VESA plate to the
PathPilot Controller VESA Mount (PN 50382). Make sure
to put it flat side down with the keyholes toward the
monitor.
3.
Attach the controller to its mount by sliding the
standoffs through the key slots.
4.
Connect all USB accessories to the controller:
l Jog Shuttle (PN 30616) (Optional)
l Keyboard
l Mouse
l Monitor
5.
Connect the monitor's video cable to the controller.
6.
Route the loose end of the video cable toward the
monitor, and then connect it to the monitor.
7.
Connect the power supply to the controller.
8.
Connect the loose end of the power supply to one of the
Controller/Monitor cables provided.
9.
Route the power cables to the electrical cabinet.
10.
Connect the power supply for the controller to any of the
Accessory power outlets on the back of the electrical
cabinet.
11.
Find the Ethernet cable, and then connect it to the
Controller Communications outlet on the side of the
electrical cabinet.
12.
Route the loose end of the Ethernet cable toward the
controller and then connect it.
13.
Secure the wire loom, Ethernet cable, and power supply
cables to the Controller Arm with six wire tie mounts
and six cable ties.
Set Up the PathPilot Operator Console
To verify the installation of the base machine, you must use
the PathPilot controller. We recommend that you temporarily
set up the PathPilot operator console now.
Note: Wait to complete the full assembly of the
console until after you've installed all other major
accessories.
1.
Find the following items, which are provided with the
PathPilot operator console:
l (Optional)Automatic Tool Changer (ATC) USB cable
Note: If you're not installing an ATC, you
don't need to use this cable.
l Ethernet cable
l Jog Pendant (PN 50363)
l Machine controller
l Operator box extension cable
l WiFi dongle
2.
Temporarily put the machine controller near the
machine (on a workbench, or similar).
3.
Identify the machine's operator box, and remove the
Emergency Stop cable from it.
4.
Connect the operator box extension cable to the
Emergency Stop cable.
5.
Find the PathPilot controller's power cable and power
supply (provided in the machine owner's kit).
Note: The controller's power supply is designed
to work with either 115 Vac or 230 Vac.
©Tormach® 2026
Specifications subject to change without notice.
Page 54
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.6 Install Core Components


---

## PDF Page 55

4: INSTALLATION
4.6 Install Core Components
6.
Connect the power, Ethernet cable, emergency stop
extension cable, ATC USB cable, WiFi dongle, and the jog
pendant cable to the controller as shown in the following
image.
Figure 4-27: Controller connections.
7.
Connect the Ethernet cable to the Controller
Communications port on the side of the electrical
cabinet.
8.
Lay the control console down on the work surface to
prevent tipping.
9.
Prop up the console to avoid pinching the cables.
4.6.6 Install the Oiler
1.
Find the hardware installed on the left side of the
machine stand, as shown in the following image.
Figure 4-28: Oiler installation location on the left side
of the machine stand.
2.
Using the hardware from Step 1, attach the oiler to the
machine stand with a 5 mm hex wrench.
Figure 4-29: Automatic oiler installation on the
machine stand.
1.
Depending on your oiler type, do one of the following:
l If you have an automatic oiler (strongly
recommended), go to "Make Automatic Oiler
Connections" (below).
l If you have a manual oiler, go to "Make Manual Oiler
Connections" (on the next page).
Note: You must confirm that the mill is
regularly oiled. If you don't, there's a risk of
motor faults. Use an Automatic Oiler Kit: 230
Vac (PN 38255).
Make Automatic Oiler Connections
1.
Connect the existing oil line on the mill to the oil line on
the oiler.
2.
Attach three mounting tabs to the machine stand with
three M5 × 10 mm screws.
3.
Route the power cord on the oiler to the back of the
electrical cabinet, and connect it to any of the Accessory
outlets.
4.
Fill the oiler's sreservoir with machine oil to about 80%
full.
1.
You must verify the installation before you install any
additional components. If you are not installing any
additional components, you still must verify the core
installation before you use the machine for the first
time. Go to "Verify the Installation" (on the next page).
©Tormach® 2026
Specifications subject to change without notice.
Page 55
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 56

Note: You'll set the interval time and the
actuation time for the automatic oiler after you
verify the core installation. For information,
see"Set Up the Automatic Oiler" (page 60).
Make Manual Oiler Connections
1.
Remove and discard the orange plastic shipping plug
from the oiler.
2.
Connect the existing oil line on the mill to the oil line on
the oiler.
3.
Secure the oil line in the mounting clips on the machine
stand.
4.
Fill the oiler's sreservoir with machine oil to about 80%
full.
Set Up the Manual Oiler
1.
Pull and release the plunger on the oiler until oil is
pushed through the distribution system. After that, pull
the plunger at the following times:
l Evert time you power on the mill
l Every four hours of operation
2.
You must verify the installation before you install any
additional components. If you are not installing any
additional components, you still must verify the core
installation before you use the machine for the first
time. Go to "Verify the Installation" (below).
4.6.7 Verify the Installation
To properly validate the core installation of your machine, you
must understand how to power on and off the machine and
use the controls.
Complete the following steps in the order listed:
Power on the Machine
56
Verify Axes Function
57
Verify Spindle Function
58
Power off the Machine
59
Power on the Machine
1.
Use a multimeter to verify that the electrical service in
your location meets the following requirements. If your
location does not meet these requirements, do not
install the machine. Instead, you must consult with a
local electrician about your options.
l Primary Power Required Single-Phase 230 Vac,
50/60 Hz
Maximum 240 Vac, 50/60 Hz
l Recommended Circuit Amperage Dedicated 20 A
breaker
Maximum 60 A breaker
2.
Connect the machine's mains power cable to the verified
electrical service.
3.
Find the Main Disconnect switch, and then remove the
hang tag.
Figure 4-30: The Main Disconnect switch on the side
of the machine's electrical cabinet.
4.
Turn the Main Disconnect switch to ON.
Figure 4-31: Example of the Main Disconnect switch
in the On position.
Mains power is now connected to the machine.
5.
Push the Power button on the PathPilot controller, if it's
not already powered on.
©Tormach® 2026
Specifications subject to change without notice.
Page 56
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.6 Install Core Components


---

## PDF Page 57

4: INSTALLATION
4.6 Install Core Components
6.
Follow the on-screen instructions to configure the
PathPilot operating system and PathPilot controller.
When configuration is complete, the PathPilot operating
system launches.
Note: After you first configure PathPilot, the
operating system automatically launches
whenever it's powered on.
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
Figure 4-32: Emergency Stop button.
9.
Push the blue Reset button to enable the machine.
Figure 4-33: Reset button.
The axis drives are now powered on.
10.
Verify that the blue Reset LED comes on. From the
PathPilot interface, on the Status tab, verify that the
Machine OK light changes from yellow to green.
Once both are on, the machine is powered on and ready
to operate.
Figure 4-34: Machine OK light on the Status tab.
11.
Select Reset.
Figure 4-35: Reset button.
This initializes the connection between the machine and
controller.
Verify Axes Function
You must confirm that the axes correctly operate.
1.
Select the Page Up key on the keyboard to move the
spindle head up (Z+).
2.
Remove and discard the shipping block from the
machine table.
3.
Reference the axes: from the PathPilot interface, select
Ref Z, Ref X and Ref Y.
Figure 4-36: Ref Z, Ref X, and Ref Y buttons.
The machine moves to the reference position.
©Tormach® 2026
Specifications subject to change without notice.
Page 57
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 58

4.
Use the keyboard to verify axes motion:
l Select the Right Arrow key and then the Left Arrow
key.
The table moves left (X+), then right (X-).
l Select the Down Arrow key and then t0he Up Arrow
key.
The table moves away from you (Y-), then toward you
(Y+).
l Select the Page Down key and then the Page Up key.
The spindle head moves down (Z-), then up (Z+).
5.
If applicable, verify the optional Jog Shuttle:
l Press any axis button on the Jog Shuttle — X, Y, Z, or
A — to select an axis.
Figure 4-37: Functions on the optional Jog Shuttle.
From the PathPilot interface, on the Main tab, the
corresponding green Axis light comes on.
Figure 4-38: Axis lights.
l Turn the Jog Shuttle Ring in any direction to move the
selected axis, then turn it in the opposite direction to
reverse the direction.
Verify Spindle Function
You must confirm that the spindle correctly operates.
1.
Open the spindle door and locate the spindle belt.
2.
From the PathPilot interface, confirm that the Spindle
Range button matches the spindle belt position.
Figure 4-39: Spindle Range button.
If necessary, select Spindle Range to match the spindle's
belt position.
3.
Close and latch the spindle door.
4.
From the PathPilot interface, confirm that the Spindle
Override slider isn't set to 0% (when it's set to 0%, the
slider is yellow). To clear the override, select RPM 100%.
Figure 4-40: Spindle Override slider.
Note: The Spindle Override slider changes the
programmed spindle speed by a specific
percentage. If it's set to 0%, the spindle won't
move during the following steps in this
procedure. For information, see"About Spindle
Override" (page 162).
5.
From the PathPilot interface, in the RPM DRO field, type
500. Then select the Enter key.
Note: If you have an operator console, confirm
that the RPM knob isn't set to 0%. If it is, turn
the RPM knob.
6.
Select FWD.
Figure 4-41: Spindle controls.
The spindle rotates clockwise (viewed from above) at
500 rpm.
7.
Select STOP.
The spindle stops rotating.
©Tormach® 2026
Specifications subject to change without notice.
Page 58
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.6 Install Core Components


---

## PDF Page 59

4: INSTALLATION
4.6 Install Core Components
8.
Select REV.
The spindle rotates counterclockwise (viewed from
above) at 500 rpm.
9.
Select STOP.
The spindle stops rotating.
10.
In the RPM DRO field, type 1000. Then select the Enter
key.
11.
Select FWD.
The spindle rotates clockwise (viewed from above) at
1000 rpm.
12.
Repeat the procedure at 1000 rpm.
Power off the Machine
1.
Push the Emergency Stop button to lock it into the
disabled position.
Figure 4-42: Emergency Stop button.
With the Emergency Stop button in the disabled position
all motion and spindle function stops, the Reset button is
disabled , and the blue Reset LED goes off. From the
PathPilot interface, on the Status tab, the Machine OK
light illuminates yellow.
2.
From the PathPilot interface, select Exit.
3.
When prompted, select OK.
4.
Once the PathPilot interface indicates that it's safe to
power off the machine, turn the Main Disconnect switch
to OFF.
Figure 4-43: Example of the Main Disconnect switch
in the Off position.
Mains power is disconnected from the machine.
©Tormach® 2026
Specifications subject to change without notice.
Page 59
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 60

4.7 INSTALL ACCESSORY COMPONENTS
Install accessory components in the order specified, skipping
any components that you don't have. Otherwise, you may need
to remove an item in order to install another one. For example,
if you install the Full Enclosure Kit, you must remove it in order
to install any other component. When you're finished installing
accessory components, go to "Set Up the PathPilot Controller"
(page 106).
4.7.1 Set Up the Automatic Oiler
60
4.7.2 Set Up the FRL
61
4.7.3 Install the Flood Coolant Kit
61
4.7.4 Install the Automatic Tool Changer (ATC)
63
4.7.5 Install the 4th Axis
72
4.7.6 Install the Chip Pans
78
4.7.7 Install the Enclosure
79
4.7.8 Set up the Door Lock Switch Kit (Optional)
90
4.7.9 Install the Lube Cube Coolant Kit
94
4.7.10 Install the PathPilot Operator Console
97
4.7.1 Set Up the Automatic Oiler
Complete the following steps in the order listed:
Specify the Interval Time
60
Specify the Actuation Time
60
Specify the Interval Time
The oiler distributes oil at the following times:
l When the machine is powered on
l After a specified interval
The interval time is the amount of time, in minutes, that the
oiler waits between oil applications.
Note: If your machine will be unused for a long period
of time (like overnight), we recommend powering off
the machine to avoid over-lubricating the system.
1.
On the oiler's control panel, push and hold either of the
Minutes Adjustment buttons. It doesn't matter which
button you push.
Figure 4-44: Automatic oiler control panel.
The oiler beeps.
2.
While looking at the Minutes display, do one of the
following:
l To increase the interval time, push the Up Arrow.
l To decrease the interval time, push the Down Arrow.
NOTICE! Pressure Hazard: To avoid potential
equipment damage, don't set the interval time
to less than five minutes.
Specify the Actuation Time
The actuation time is the amount of time, in seconds, that the
oiler distributes oil during an oil application.
1.
On the oiler's control panel, push and hold either of the
Seconds Adjustment buttons. It doesn't matter which
button you push.
The oiler beeps.
2.
While looking at the Seconds display, do one of the
following:
l To increase the interval time, push the Up Arrow.
l To decrease the interval time, push the Down Arrow.
NOTICE! Pressure Hazard: To avoid potential
equipment damage, don't set the actuation time
to more than three minutes.
©Tormach® 2026
Specifications subject to change without notice.
Page 60
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 61

4: INSTALLATION
4.7 Install Accessory Components
4.7.2 Set Up the FRL
1.
Turn the lubricator adjustment knob all the way down
(counter-clockwise).
2.
Turn the air pressure regulator all the way down and
disconnect the outlet air line from the push-to-connect
fitting.
3.
Start to turn the air pressure regulator, which allows air
to free flow out the outlet side, while watching the
lubricator site window.
Note: To prevent air tool oil from spraying, we
recommend holding a paper towel or shop rag
to the outlet side.
4.
When you see oil exiting the outlet side, and when a
drop forms and falls rapidly in the side window, start to
turn the lubricator adjustment knob clockwise. Stop
turning the knob when you see one drip every five
seconds.
Note: Because the machine uses a small
amount of air for every air blast, it's better to
set it up on the higher side of the drip rate.
4.7.3 Install the Flood Coolant Kit
Complete the following steps in the order listed:
Adjust the Coolant Pump Motor Strapping
61
Set Up the Flood Coolant Kit
61
Adjust the Coolant Pump Motor Strapping
Because the coolant pump is dual voltage, you may need to
adjust the motor strapping.
1.
Identify the jumper configuration diagram. The coolant
pump motor strapping varies by machine:
l 1100M, 1100MX, 770MX (ML) 220 Vac (high volt)
l 770M, 770MX (MF) 120 Vac (low volt)
Figure 4-45: Coolant pump motor jumper
configuration diagram.
2.
Remove the access cover on the coolant pump.
3.
Reference the configuration diagram and move the
jumper to the 220 Vac (high volt) position. Don't change
the position of any wires – just the jumper that connects
the terminals.
Figure 4-46: Coolant pump motor strapping adjusted
for 220 Vac.
4.
Reinstall the access cover on the coolant pump.
Set Up the Flood Coolant Kit
1.
Attach the threaded elbow into the pump with a 22 mm
open-ended wrench. Twist the elbow so that it’s pointing
up.
©Tormach® 2026
Specifications subject to change without notice.
Page 61
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 62

2.
Attach the coolant pump to the coolant tank with the
four M6 × 1 - 22 screws provided.
Figure 4-47: Coolant pump and its hardware moving
into the coolant tank.
3.
Remove the coolant hose bracket from the rear of the
Machine Stand. Set the hardware aside.
Figure 4-48: Coolant hose bracket and its hardware
removed from the Machine Stand.
4.
Attach the provided Y-fitting to the coolant hose bracket.
Orient the Y-fitting so that the two ports are toward the
front of the machine, and the single port is toward the
rear of the machine. Before reinstalling the bracket,
complete the hose connections in Steps 5 through 7.
5.
Identify the two provided coolant hoses (the self-
retracting coolant hose and the long coolant hose) and
the provided elbow.
6.
Put the self-retracting coolant hose into one of the two
ports on the front side of the Y-fitting.
7.
Put the provided plug into the remaining port on the
front side of the Y-fitting.
Figure 4-49: Making hose connections on the two-port
side of the Y-fitting.
8.
Install the coolant hose bracket onto the Machine Stand
using the hardware that you set aside in Step 3.
9.
Cut a 3 in. (76 mm) piece of the longer coolant hose with
snips. Then, put the provided elbow onto one end.
10.
Put the short piece of the coolant hose into the port on
the rear side of the Y-fitting.
Figure 4-50: Making hose connections on the single-
port side of the Y-fitting.
11.
Put the remainder of the long coolant hose into the open
end of the elbow.
©Tormach® 2026
Specifications subject to change without notice.
Page 62
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 63

4: INSTALLATION
4.7 Install Accessory Components
12.
Attach the coolant manifold to the spindle nose with the
two screws provided.
Figure 4-51: Attaching the coolant manifold to the
spindle nose.
13.
Route the loose end of the long coolant hose through the
energy chain and into the spindle cabinet. At the bottom
of the spindle cabinet, route the hose through the hole in
the spindle head casting and out to the coolant manifold.
14.
Put the loose end of the long coolant hose into the
coolant manifold.
Figure 4-52: Coolant hose routing to the coolant
manifold.
15.
Pull the loose end of the self-retracting coolant hose
through the Machine Stand, and then insert it into the
elbow on the coolant pump.
16.
Slide the coolant tank into the Machine Stand.
17.
Route the power cord on the coolant pump to the rear of
the electrical cabinet, and connect it to the Coolant
Pump Power outlet.
18.
Verify that the coolant setup operates properly:
a.
From the PathPilot interface, on the Main tab, select
Coolant.
The coolant pump powers on.
b.
Select Coolant again.
The coolant pump powers off.
19.
Secure coolant tank’s front panel to the Machine Stand
with the two provided M8 × 1.25 – 16 flanged button
head cap screws. Adjust the front panel alignment as
necessary using the six mounting screws securing the
front panel to the coolant tank.
4.7.4 Install the Automatic Tool Changer (ATC)
Complete the following steps in the order listed:
Required Tools
63
Air Requirements
64
Before You Begin
64
Disassemble the Power Drawbar Button
64
Install the Air Cylinder
65
Mount the Automatic Tool Changer (ATC) Bracket
65
Install the Main Assembly
65
Level the Automatic Tool Changer (ATC)
66
Make Air Connections
68
Make Electrical Connections
69
Verify the Installation
69
Alignment
70
Required Tools
This procedure requires the following tools. Collect them
before you begin.
Required Tools for Installation
l 1-1/2 in. adjustable wrench
l 16 mm and 19 mm open-ended wrench
l FRL Filter-Regulator-Lubricator (PN 38829)
l Marker
l Metric hex wrench set
l Phillips screwdriver
l Small, flat-head screwdriver
l Snips
l Socket wrench, 13 mm socket, and (optionally) an
extender
Required Tools for Verification
l BT30 tool holder (for alignment rod)
l Machinist's square, between 6 in. and 9 in. (152 mm and
229 mm)
l Straight rod (for BT30 tool holder), between 8 in. and 12
in. (203 mm and 305 mm)
©Tormach® 2026
Specifications subject to change without notice.
Page 63
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 64

Air Requirements
You must verify that the site conforms to the following air
supply requirements.
l Air Pressure 90-120 psi (620-825 kPa)
If the air supply is more than 120 psi (825 kPa), you must
use a regulator.
l Air Volume For successive, back-to-back tool changes,
at least 2 cfm at 90 psi is required.
Exact air volume depends on the frequency of tool
changes.
l Dry Air We recommend using a compressed air dryer,
desiccator, or filter between the air compressor and the
machine.
l Lubricated Air You must lubricate the air with air tool
oil.
Use the pre-installed FRL Filter-Regulator-Lubricator for
this purpose.
Before You Begin
1.
If there's a tool holder in the spindle, remove it.
2.
Remove any accessories or fixtures from the machine
table.
3.
Center the machine table: from the PathPilot interface,
in the MDI Line DRO field, type G20 G53 G1 X9 Y-
5.5 Z0 F20. Then select the Enter key.
IMPORTANT! You must update your controller
to the latest version of PathPilot before
installing and operating the Automatic Tool
Changer. If you don't, there's a risk that the
ATC could become inoperable.
4.
Update your controller: From the Status tab, select
Update. Then, follow the on-screen instructions. Once
the controller is updated to the latest version of
PathPilot, go to Step 5.
WARNING! Electrical Shock Hazard: You must
power off the machine before making any
electrical connections. If you don't, there's a
risk of electrocution or shock.
5.
Power off the machine and the PathPilot controller.
a.
Push in the machine's red Emergency Stop button,
which removes power to motion control.
b.
From the PathPilot interface, select Exit.
c.
Turn the Main Disconnect switch to OFF on the side
of the electrical cabinet.
Disassemble the Power Drawbar Button
1.
Disconnect the shop air supply from the machine.
2.
Remove four M5 × 0.8 - 10 mm button head cap screws
that secure the Power Drawbar button cover.
3.
Disconnect the air lines from the Retract and Extend
ports on the Power Drawbar.
Figure 4-53: Power Drawbar air line routing.
4.
Disconnect the air line from the Air Supply port on the
Power Drawbar button.
5.
Remove two M4 × 0.7 - 50 mm socket head cap screws
that secure the Power Drawbar button to the spindle
head. Then, cut the cable ties that secure the air lines
together.
6.
Remove the Power Drawbar button from the spindle
head.
©Tormach® 2026
Specifications subject to change without notice.
Page 64
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 65

4: INSTALLATION
4.7 Install Accessory Components
Install the Air Cylinder
1.
Attach the air cylinder on to the ATC main assembly.
Figure 4-54: Putting the air cylinder into the ATC main
assembly.
2.
Secure the air cylinder to the ATC main assembly with a
12 mm hex wrench (provided) and two M14 × 20 mm
socket head cap screws.
Figure 4-55: Putting the air cylinder hardware into the
air cylinder.
3.
Connect the air lines from the ATC main assembly to the
air cylinder as follows:
l Connect the short air line to the front of the cylinder.
l Connect the long air line to the back of the cylinder.
Mount the Automatic Tool Changer (ATC) Bracket
1.
Identify the four provided standoffs that are used to
mount the ATC to the Z-column:
l Three fixed standoffs
l One tilt standoff
2.
Remove the flange nuts and the washers from the
standoffs, and then set them aside.
3.
Identify and remove the four set screws on the Z-column
with a flat-blade screwdriver.
4.
Install the four standoffs on the Z-column as shown in
the following image.
Figure 4-56: Four standoffs installed on the Z-column.
5.
Securely tighten the standoffs on the Z-column with a 1-
1/2 in. adjustable wrench.
6.
Put the ATC mounting bracket on the standoff's threaded
studs as shown in the following image.
Figure 4-57: ATC mounting bracket moving on to the
four standoffs.
Note: Verify that the tilt standoff's eccentric
cam fits into the large slot on the ATC
mounting bracket.
7.
Secure the bracket by reinstalling the washers and
flange nuts that you removed in Step 2 with a 13 mm
socket.
8.
Pull the bracket toward the front of the machine. You'll
make adjustments to the location of the bracket later in
this procedure, but we recommend starting with it
moved forward.
Install the Main Assembly
1.
Remove the four preinstalled M8 × 1.25 - 16 mm socket
head cap screws and washers from the bottom of the
©Tormach® 2026
Specifications subject to change without notice.
Page 65
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 66

ATC electrical cabinet. Then, set all aside for later use.
CAUTION! Team Lift Required: You must have
the aid of more than one person to lift and
move the object. The object is heavy, and lifting
it by yourself can cause serious injury.
2.
Lift the ATC main assembly on to the mounting bracket.
Figure 4-58: ATC main assembly positioned above the
mounting bracket.
3.
Align the locating pin on the ATC main assembly with
the matching hole in the mounting bracket.
4.
Secure the ATC main assembly to the mounting bracket
with the four M8 × 1.25 - 16 mm socket head cap screws
and washers that you set aside in Step 1.
Level the Automatic Tool Changer (ATC)
This section gives instructions to roughly level the ATC on the
machine by using a long, straight rod. More adjustments are
made later in the installation procedure.
NOTICE! After the initial installation, you must level the
ATC. If you don't, there's a risk of machine damage.
Complete the following steps in the order listed:
Prepare the Machine
66
Examine Perpendicularity in the Y Direction
67
Examine Perpendicularity in the X Direction
67
Examine the Alignment of the Carousel Door Opening
67
Prepare the Machine
1.
Push the tool tray toward the spindle.
Figure 4-59: Tool tray moved in toward the spindle.
2.
Verify that the linear bearing on the ATC is flush with the
ATC main assembly.
Figure 4-60: Linear bearing flush with the ATC main
assembly.
3.
Find a straight rod between 8 in. and 12 in. (203 mm and
305 mm) long. Verify that it's straight: roll it on a known
flat surface (like a granite surface plate).
Note: You'll use the rod to verify that the ATC is
correctly installed on the mill, so it must be
straight.
4.
Put the alignment rod into a tool holder.
5.
Put the tool holder into the fork so that the groove in the
tool holder slides into the fork, and so that the drive slot
aligns with the dog. Don't rest the tool holder on top of
the fork.
6.
Put a machinist's square on the machine table.
©Tormach® 2026
Specifications subject to change without notice.
Page 66
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 67

4: INSTALLATION
4.7 Install Accessory Components
Examine Perpendicularity in the Y Direction
1.
Verify that the rod is perpendicular to the machine table
in the Y direction: compare the rod's position to the
vertical edge of the machinist's square.
l If the rod is perpendicular to the vertical edge of the
machinist's square, go to "Examine Perpendicularity
in the X Direction" (below).
l If the rod must be adjusted, go to Step 2.
2.
Loosen the flange nuts on the standoffs.
3.
Turn the tilt standoff with an adjustable wrench, and
slowly pivot the ATC until the rod is perpendicular to the
vertical edge of the machinist's square.
Figure 4-61: Tilt standoff.
4.
Tighten the flange nuts with a 13 mm socket.
5.
Reexamine the alignment of the ATC in the Y direction. If
the rod isn't perpendicular to the vertical edge of the
machinist's square, repeat Steps 2 through 5.
Examine Perpendicularity in the X Direction
1.
Verify that the rod is perpendicular to the machine table
in the X direction: compare the rod's position to the
vertical edge of the machinist's square.
l If the rod is perpendicular to the vertical edge of the
machinist's square, go to "Examine the Alignment of
the Carousel Door Opening" (below).
l If the rod must be adjusted, go to Step 2.
2.
Loosen the two socket head cap screws on the linear
rails.
Figure 4-62: Socket head cap screws on the linear
rails.
3.
Slowly pivot the linear rails up or down until the rod is
perpendicular to the vertical edge of the machinist's
square.
4.
Tighten the socket head cap screws.
5.
Reexamine the alignment of the ATC in the X direction. If
the rod isn't perpendicular to the vertical edge of the
machinist's square, repeat Steps 2 through 5.
Examine the Alignment of the Carousel Door Opening
1.
Remove the tool holder from the fork, and set it aside.
Note: You'll need this tool later in the
installation procedure to make further
alignments.
2.
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
3.
Verify that the ATC is all the way forward (toward the
spindle), and then slowly move the Z-axis down (-Z) to
examine the clearance of the carousel door opening.
©Tormach® 2026
Specifications subject to change without notice.
Page 67
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 68

4.
Verify that the carousel door opening is approximately
equal to the front back and left of the spindle mounting
flange:
l If the carousel door opening is approximately equal,
go to Step 8.
Figure 4-63: Distance between the carousel door
opening and the spindle mounting flange.
l If the carousel door opening must be adjusted, go to
Step 5.
5.
Loosen the four socket head cap screws that secure the
ATC main assembly to the mounting bracket with a 6
mm hex wrench.
Figure 4-64: Socket head cap screws securing the ATC
main assembly to the mounting bracket.
6.
Adjust the carousel door opening as required:
l If the Carousel Door Opening is Contacting the
Front Pivot the ATC around the locating pin on the
bottom of the mounting bracket toward the front of
the machine (closer to you).
l If the Carousel Door Opening is Contacting the
Back Pivot the ATC around the locating pin on the
bottom of the mounting bracket toward the back of
the machine (closer to the machine column).
l If the Carousel Door Opening is Contacting the
Left Loosen the four flange nuts that attach the
mounting bracket to the column to move the bracket
forward or backward.
Note: Moving the ATC mounting bracket
could change the position of the tilt standoff
(on the Z-column). If you move it, you must
verify that the ATC is still correctly installed;
go to "Examine Perpendicularity in the Y
Direction" (on the previous page).
Repeat this step as needed.
7.
Tighten the socket head cap screws and the flange nuts
(if you loosened them in Step 5).
8.
Move the tool tray to its retracted position.
9.
Center the machine table: from the PathPilot interface,
in the MDI Line DRO field, type G20 G53 G1 X9 Y-
5.5 Z0 F20. Then select the Enter key.
10.
Power off the machine and the PathPilot controller.
a.
Push in the machine's red Emergency Stop button,
which removes power to motion control.
b.
From the PathPilot interface, select Exit.
c.
Turn the Main Disconnect switch to OFF on the side
of the electrical cabinet.
Make Air Connections
1.
Cut the cable tie that secures the ATC cables and plastic
tubes together with snips.
2.
Route the loose ends of the two 1/4 in. plastic tubes
connected to the ATC main assembly through the
enclosure knockout, up the energy chain, and toward the
Power Drawbar. Then, pull the air line from the FRL back
through the energy chain.
WARNING! Crush Hazard: If the ATC isn't
completely retracted, it could move once the
air is reconnected. When you reconnect the air,
you must keep your hands away from the ATC.
©Tormach® 2026
Specifications subject to change without notice.
Page 68
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 69

4: INSTALLATION
4.7 Install Accessory Components
3.
Trim and connect the loose ends of the 1/4 in. plastic
tubes in the following order:
a.
Connect the Retract (PDB Bottom) airline to the
bottom push-to-connect elbow on the Power
Drawbar.
b.
Connect the Advance (PDB Top) airline to the top
push-to-connect elbow on the Power Drawbar
c.
Connect the air supply line from the FRL to the air in
port in the ATC main assembly, as shown in the
following image.
Figure 4-65: Air in port in the ATC main assembly.
d.
If you haven't already done so, connect your shop's air
supply to the FRL.
Make Electrical Connections
1.
Route the ATC power cable and the USB cable toward
the rear of the machine and out of one of the enclosure
knockouts.
2.
Put the USB cable in the access hole in the rear of the
stand toward the controller.
3.
Put the USB cable into an open USB port on the PathPilot
controller.
IMPORTANT! Do not connect the ATC USB
cable to a USB hub. Make the connection
directly to the PathPilot controller itself. If you
don't have any free USB ports on the controller,
connect a different accessory to a USB hub.
4.
Connect the ATC power cable to the ATC Power
connector on the side of the electrical cabinet (below the
Enclosure Lights Power connectors).
Verify the Installation
1.
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
IMPORTANT! You must update your controller
to the latest version of PathPilot before
operating the Automatic Tool Changer. If you
don't, there's a risk that the ATC could become
inoperable.
2.
If you have not yet done so, you must make sure that the
PathPilot controller is updated to the latest version of
PathPilot: From the Status tab, select Update. Then,
follow the on-screen instructions.
3.
From the PathPilot interface, on the Settings tab, select
the ATC radio button.
Figure 4-66: ATC radio button on the Settings tab.
The ATC tab appears in the PathPilot interface.
Note: If prompted, you may need to update the
firmware for the ATC. Follow the on-screen
instructions.
©Tormach® 2026
Specifications subject to change without notice.
Page 69
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 70

4.
Load a tool into the spindle:
a.
Push and hold the drawbar open button on the side of
the ATC.
Figure 4-67: Drawbar open button on the side of
the ATC.
The drawbar opens.
b.
Load a tool into the spindle.
c.
Release the button.
The drawbar closes.
5.
From the PathPilot interface, on the Main tab, in the
RPM DRO field, type 1000. Then select the Enter key.
6.
Select FWD.
The spindle starts.
7.
From the Status tab, make sure that the VFD Running
green light comes on.
Figure 4-68: VFD Running light on the Status tab.
Note: If the VFD Running light did not come on
in the previous step, we can help. Create a
support ticket with Tormach Technical Support
at tormach.com/how-to-submit-a-support-
ticket for guidance on how to proceed.
8.
Select Stop.
The spindle stops.
Alignment
In this section, you'll adjust the tool alignment and set the tool
tray height and encoder position.
1.
From the PathPilot interface, on the ATC tab, select Ref
Tool Tray.
Figure 4-69: Ref Tool Tray button on the ATC tab.
The tool tray spins.
Note: You're only required to reference the tool
tray once, unlike the mill axes’ referencing
procedure.
2.
If you haven't already done so, load a tool into the
spindle.
3.
Manually rotate the spindle two revolutions by hand.
The encoder has now been oriented.
4.
Disconnect the air from the machine.
5.
While manually advancing the tool tray toward the
spindle, align the fork with the tool. Complete the
following steps in the order listed:
a.
Slowly jog the Z-axis up or down until the groove in
the fork aligns with the groove in the tool holder.
b.
Determine if the tray must move clockwise or
counterclockwise to align the fork with the tool
holder. From the PathPilot interface, in the ATC tab,
either select -- to step the tool tray counterclockwise
or ++ to step the tool tray clockwise.
c.
Fully seat the ATC to its tray load position, verifying
that the tool and its drive dog slots are fully inserted
into the fork.
6.
Verify that, from the Status tab, the ATC Tray In LED is
still illuminated.
If the LED isn't illuminated, examine the tool tray. It may
have exceeded the Tray In sensor during adjustments in
the previous step.
©Tormach® 2026
Specifications subject to change without notice.
Page 70
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 71

4: INSTALLATION
4.7 Install Accessory Components
7.
On the ATC tab, select Set TC POS.
Figure 4-70: Set TC POS button on the ATC tab.
The tool change position has now been set.
8.
Select Set TC M19. Then, in the dialog box that displays,
select OK.
Figure 4-71: Confirmation dialog box to change the
spindle's alignment position.
9.
Follow the on-screen instructions to set the spindle's
tool change rotation position:
a.
Rotate the spindle clockwise in the fork by hand.
Then, select OK.
b.
Rotate the spindle counterclockwise in the fork by
hand. Then, select OK.
The tool change rotation position has now been set.
In the dialog box that displays, select OK.
10.
Manually move the ATC back to the retracted position.
WARNING! Crush Hazard: If the ATC isn't
completely retracted, it could move once the
air is reconnected. When you reconnect the air,
you must keep your hands away from the ATC.
11.
Reconnect the air.
12.
Remove the tool from the spindle.
13.
Move the Z-axis up: in the MDI Line DRO field, type G20
G53 G1 Z0 F20. Then select the Enter key.
14.
On the ATC tab, select Go To Tray Load Position. Then,
manually load a tool into the fork.
15.
Orient the spindle: from the PathPilot interface, in the
MDI Line DRO field, type M19 R0 Q10. Then select the
Enter key.
16.
Open the drawbar: on the ATC tab, select Collet, and
wait until the LED toggles from Closed to Open.
Note: You must verify that the drawbar is open
(and not just that the brake is engaged) before
you continue.
17.
Verify that the spindle is concentric with the tool: slowly
jog the Z-axis down and, depending on the result, do one
of the following:
l If the Spindle is Concentric with the Tool You've
completed the alignments.
l If Adjustments are Required Go to Step 18.
18.
Determine if the tray must move left or right. Use two
wrenches to loosen the jam nut on the end of the
cylinder rod, making sure that you don't spin the rod end
when adjusting the jam nut. Then, either turn the rod
end one-half turn further on to the cylinder rod to move
the tool tray to the left, or turn it one-half turn off of the
cylinder rod to move the tool tray to the right. Once
finished, tighten the jam nut.
Figure 4-72: Moving the tool tray left or right.
Note: Don't move the tool tray more than 0.100
in. in either direction (left or right). If you do,
the tool tray will exceed the Tray In sensor,
which affects how ATC operations are
communicated to PathPilot.
©Tormach® 2026
Specifications subject to change without notice.
Page 71
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 72

19.
Adjust for the ATC's backlash: apply light pressure
forward and backward on the carousel; then, from the
PathPilot interface, on the ATC tab, select ++ or -- until
there's equal space on the front and the back of the
BT30 taper.
20.
Verify that, from the Status tab, the ATC Tray In LED is
still illuminated.
If the LED isn't illuminated, examine the tool tray. It may
have exceeded the Tray In sensor during adjustments in
the previous step.
21.
Repeat adjustments until the tool's shank is concentric
with the spindle.
22.
Move the Z-axis up: in the MDI Line DRO field, type G20
G53 G1 Z0 F20. Then select the Enter key.
23.
Remove the tool from the ATC. Then, select Retract.
4.7.5 Install the 4th Axis
Complete the following steps in the order listed:
Install the M/MX A-Axis Driver (PN 38954)
72
Set Up the 6 in. or 8 in. Rotary Table
73
Set Up the microARC 4
75
Verify the Installation
77
Install the M/MX A-Axis Driver (PN 38954)
Complete the following steps in the order listed:
Set the Driver DIP Switches
72
Install the A-Axis Motor Driver
72
Set the Driver DIP Switches
Depending on which rotary table you're using, set the DIP
switches on the motor driver as detailed in the following
tables.
6 in. Standard or Tilting
Dip Switch
Position
1
On
2
On
3
Off
4
Off
5
Off
6
On
7
On
8
Off
6 in. Super Spacer, or 8 in. Standard, Tilting, or Super
Spacer
Dip Switch
Position
1
On
2
Off
3
Off
4
Off
5
Off
6
On
7
On
8
Off
1100 and 770M/MX/PCNC -
microARC 4
Dip Switch
Position
1
On
2
On
3
Off
4
On
5
On
6
On
7
On
8
Off
Install the A-Axis Motor Driver
WARNING! Electrical Shock Hazard: You must power
off the machine before making any electrical
connections. If you don't, there's a risk of
electrocution or shock.
1.
Power off the machine and the PathPilot controller.
a.
Push in the machine's red Emergency Stop button,
which removes power to motion control.
b.
From the PathPilot interface, select Exit.
©Tormach® 2026
Specifications subject to change without notice.
Page 72
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 73

4: INSTALLATION
4.7 Install Accessory Components
c.
Turn the Main Disconnect switch to OFF on the side
of the electrical cabinet.
2.
Verify that you've correctly set the DIP switches on your
stepper driver.
3.
Remove the top, right, and middle (above the DC-BUS
board) wire trough covers in the electrical cabinet.
4.
Find the ribbon cable (labeled 423.4) in the top wire
trough.
5.
Find the green connector and wires in the right wire
trough.
6.
Install the motor driver in the electrical cabinet with a #2
Phillips screwdriver.
7.
Connect the ribbon cable to the motor driver.
8.
Apply dielectric grease to the power connector, and then
connect it to the motor driver.
9.
From the green connector, follow wire 240 (blue) and
wire 241 (brown) to where they end in the wire trough
and pull them out.
10.
Connect the loose end of wire 241 (brown) to the A+
terminal on the DC bus board and connect wire 240
(blue) to the A- terminal of the DC bus board.
11.
Put back the wire trough covers.
Set Up the 6 in. or 8 in. Rotary Table
Complete the following steps in the order listed:
Required Tools
73
Unpack the 4th Axis
73
Lubricate the Rotary Table
73
Adjust the Backlash
74
To Set the Backlash by Positioning the Backlash
Adjustment Screw
74
To Set the Backlash by the Numbers
75
Mount the Rotary Table
75
Required Tools
This procedure requires the following tools. Collect them
before you begin.
l #2 Phillips screwdriver
l Dead-blow hammer (or similar)
l Magnetic dial indicator
l Newspaper (or similar)
Unpack the 4th Axis
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
Make sure that all loose parts are removed from the
package before discarding any shipping materials.
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
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 75

4: INSTALLATION
4.7 Install Accessory Components
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
Mount the Rotary Table
1.
Prevent rust from forming on the machine table from
trapped water-based coolants: put a thin film of oil (WD-
40® or similar) on the surfaces.
2.
Depending on your rotary table, do one of the following:
l Standard Rotary Table (6 in. or 8 in.) Put the
rotary table on the left side of the machine table.
l Super Spacer or Tilting Rotary Table (6 in. or 8
in.) Put the rotary table on the right side of the
machine table.
3.
Loosely attach the rotary table toe clamps to the
machine table.
Note: The components are left loose so that
you can adjust the rotary table.
4.
Attach a magnetic dial indicator to the spindle head of
the machine.
5.
Put the dial indicator on the rotary table so that it will
measure across the platter of the rotary table.
6.
Jog the machine from side-to-side in the Y direction to
indicate across the platter.
7.
Use a dead blow hammer to tap the rotary table and
adjust its position and reduce any misalignment
determined in Step 6.
8.
Completely tighten the rotary table toe clamps to secure
the rotary table to the machine table.
Set Up the microARC 4
Complete the following steps in the order listed:
Required Tools
75
Install in Machine
76
Center the Chuck Mounting Plate
77
Required Tools
This procedure requires the following tools. Collect them
before you begin.
l 3 mm hex wrench
l Dead-blow hammer (or similar)
©Tormach® 2026
Specifications subject to change without notice.
Page 75
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 76

l Magnetic dial indicator
Install in Machine
NOTICE! Before connecting or disconnecting the A-axis
motor cable, you must push in the machine's red
Emergency Stop button and power off the machine. If you
don't, you may cause property damage or void your
warranty replacement.
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
Put the microARC 4 on the machine table. There are
several mounting configurations available, depending on
the particular needs of a given project:
a.
Left Side (Using Accessory Mounting Holes) This
configuration provides the maximum available X work
space. If used with an ATC, the available tool
clearance is 10 cm from TTS flange to tool tip with
the 4th axis carrying handle removed.
b.
Right Side (Using Accessory Mounting Holes)
Using the 4th axis on the far right side of the machine
table provides the most X work envelope, but
interferes with the right side enclosure window, if
installed.
c.
Right Side (Using 6" Through-Bolts into T-Slots)
X work envelope is reduced in this configuration, but
it provides clearance for long tooling in the ATC.
3.
Feed the motor cable under the electrical cabinet and
plug it into the 7-pin connector you installed with the
driver kit.
4.
Loosely install the 5/16" mounting bolts, using either the
threaded accessory mounting holes on your machine
table or T-nuts.
5.
Use the key on the bottom of the 4th axis to perform a
rough alignment of the unit to the T-slots in your
machine's table. If you need to perform a precise
alignment, put a straight test bar into the chuck and
sweep along it in X with an indicator. Adjust the
orientation of the 4th axis until the reading does not
deviate during the sweep.
6.
Tighten the mounting hardware with a hex wrench.
©Tormach® 2026
Specifications subject to change without notice.
Page 76
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 77

4: INSTALLATION
4.7 Install Accessory Components
Center the Chuck Mounting Plate
1.
Remove the chuck from the 4th axis, if installed.
2.
From the PathPilot interface, verify that you can rotate
the 4th axis with either the jog keys on the keyboard or
the jog shuttle.
3.
The mounting plate is designed for a loose fit onto the
output of the harmonic drive. This allows you to adjust
the center of rotation to control runout at the chuck.
4.
Slightly loosen the 16 M3 button head cap screws that
hold the chuck mounting plate to the output of the
harmonic drive. They should still be snug enough that the
mounting plate is held in place by friction but can be
nudged with a dead-blow hammer.
5.
Put a the tip of a dial test indicator on the mounting
flange for the chuck.
6.
Using PathPilot, jog the 4th axis 360 degrees, noting the
spot where the indicator is highest.
7.
Using the dead-blow hammer, gently tap the highest
indicated spot towards the center and repeat the 360
degree sweep. Continue adjusting the high spot towards
the center of rotation and sweeping until you reach your
desired runout.
8.
Tighten the 16 M3 mounting screws by hand to 1.1 Nm.
9.
Reinstall the chuck or ER-40 collet holder.
Verify the Installation
1.
Make sure that all wires on the motor driver and the DC-
BUS board are completely connected.
2.
Replace the wire trough covers.
3.
Connect the rotary table to the A-Axis Encoder connector
on the side of the electrical cabinet.
4.
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
©Tormach® 2026
Specifications subject to change without notice.
Page 77
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 78

5.
From the PathPilot interface, test the movement of the
rotary table:
l Press COMMA on the keyboard to jog the rotary table
in the -A direction.
l Press PERIOD on the keyboard to jog the rotary table
in the +A direction.
4.7.6 Install the Chip Pans
CAUTION! Sharp Objects Hazard: Before opening the
shipping crate, you must put on work gloves and
safety eyewear that meets ANSI Z87+. If you don't,
the shipping crate and steel straps could cut you,
causing serious injury.
1.
Put on work gloves and eye protection.
2.
Cut and remove the steel straps on the shipping crate
with snips.
3.
Disassemble the shipping crate with a hammer and pry
bar. Start with removing the top, followed by the four
sides.
4.
Clean the surfaces of the chip pans and the Machine
Stand with a mild degreaser (like Simple Green®) to
make sure that the butyl tape bonds to the chip pans.
5.
Find the roll of butyl tape that you set aside while
assembling the Machine Stand.
6.
Remove the cover paper, and then put one strip of butyl
tape along each edge on the top of the Machine Stand.
Make sure that the butyl tape completely covers the
space in the corners or between joints — the butyl tape
should make a seal between the Machine Stand and the
chip pans to help prevent leaks.
Figure 4-79: Example of the locations to put butyl
tape.
7.
Break the butyl tape on each screw hole on the top edge
of the Machine Stand with a small hex wrench (or
similar).
8.
Remove the remaining cover paper from the butyl tape
strips.
9.
Align the right-hand chip pan with the Machine Stand.
10.
Loosely attach the right-hand chip pan to the Machine
Stand with a 4 mm hex wrench and seven M6 × 1.0 - 12
button head flange screws.
Figure 4-80: Right-hand chip pan aligned with the
Machine Stand.
11.
Put a strip of butyl tape along the center seam on the
front of the right-hand chip pan to make a seal between
the two chip pans.
12.
Remove the remaining cover paper from the butyl tape
strip.
13.
Align the left-hand chip pan with the Machine Stand.
14.
Loosely attach the left-hand chip pan to the Machine
Stand with a 4 mm hex wrench and 11 M6 × 1.0 - 12
button head flange screws.
Figure 4-81: Left-hand chip pan aligned with the
Machine Stand.
15.
Securely tighten all screws on the chip pans until they're
snug.
©Tormach® 2026
Specifications subject to change without notice.
Page 78
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 79

4: INSTALLATION
4.7 Install Accessory Components
16.
Install the Emergency Stop box to the front of the chip
pan with four M5 screws.
4.7.7 Install the Enclosure
Before You Begin
79
Required Tools
79
Install the Enclosure Panels
80
Install the Left Rear Panel
80
Install the Left Side Panel
80
Install the Left Side Window Retainers
80
Install the Left Front Panel
81
Install the Enclosure Splice Plate
81
Install the Right Rear Panel
81
Install the Right Side Panel
81
Install the Right Side Window Retainers
81
Install the Right Front Panel
82
Install the Left Top Panel
82
Install the Right Top Panel
83
Install the Upper Front Panel
83
Install the Front Lower Panel
83
Install the Rear Splash Shield
84
Install the Linear Rails
84
Assemble the Linear Rails
84
Install the Linear Assemblies
84
Install the Front Doors
85
Assemble the Front Doors
85
Install the Front Door Assemblies
86
Install the Door Latch
87
Install Door Lock Mounting Hardware
87
Install the Floodlights
87
Install the Side Windows
88
Install the Access Panel
89
Install the Stainless Steel Wear Guard
90
Use the Maintenance Labels
90
Replace the Windows
90
Before You Begin
1.
Inspect the item(s):
l Photograph any damage that may have occurred
during shipping.
l Verify the received goods against the packing list.
If there is any damage or shortages, you must contact
Tormach within 30 days of receipt. Create a support
ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.
2.
Read the packing list and locate all items:
l Arrange components so that they're easy to access
during installation.
l Do not begin assembly until all parts are accounted
for. Missing components can delay installation and
may prevent proper alignment of the enclosure.
l During the installation, remove labels from the items
as needed.
3.
Prepare the machine:
a.
Clean all chips and swarf from the:
l Chip basket
l Chip pans
l Machine
Note: The procedure to install the
enclosure uses many screws. If you start
with a clean machine, it's easier and
safer to find and pick up any screws that
might drop during the procedure.
b.
Verify that the coolant tank and chip basket are under
the Machine Stand.
c.
If previously installed, you must first remove the
stainless steel wear guard from the chip pans, and
set it aside for later installation.
4.
Install panels loosely for alignment:
l Keep all screws one quarter-turn loose while
installing the enclosure panels. This makes it easier
to align the panels.
l Once you're done installing the enclosure, fully
tighten all screws.
Required Tools
l Metric hex wrench set
l Shears or knife
©Tormach® 2026
Specifications subject to change without notice.
Page 79
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 80

Install the Enclosure Panels
Tip! To install the enclosure panels, work from the
left to the right of the machine. To make it easier to
install all components, don't install the side windows
until later in the procedure. Keep all screws one
quarter-turn loose while installing the enclosure
panels. This makes it easier to align the panels. Once
you're done installing and sealing the enclosure, fully
tighten all screws.
Install the Left Rear Panel
1.
Attach the column cover (PN 37618) to the machine
column with three M6 × 1.0 - 12 screws.
2.
Attach the left rear panel (PN 37616) to the column
cover with fourthree M5 × 0.8 - 10 screws.
3.
Attach the left rear panel to the left chip pan with
threefour M6 × 1.0 - 12 screws.
Figure 4-82: Left rear panel attached to the left chip
pan.
Install the Left Side Panel
1.
Attach the left side panel (PN 54368) to the left rear
panel with five M5 × 0.8 - 10 screws.
Figure 4-83: Left side panel attached to the left rear
panel.
2.
Attach the left side panel to the left chip pan with five
M6 × 1.0 - 12 screws.
Figure 4-84: Left side panel attached to the left chip
pan.
Install the Left Side Window Retainers
Note: To make it easier to install all components,
don't install the side windows yet. Wait until later in
the procedure.
1.
Push a strip of rubber window trim on to the edges of:
l Two vertical window retainers
l One horizontal window retainer
When finished, use shears or a knife to cut the excess
trim.
2.
Loosely install two vertical window retainers on both
sides of the left side panel's window opening with two
sets of three M5 × 0.8 - 10 screws.
Don't fully tighten the screws. Leaving the window
retainers loose makes it easier to install the side
windows.
©Tormach® 2026
Specifications subject to change without notice.
Page 80
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 81

4: INSTALLATION
4.7 Install Accessory Components
3.
Loosely attach one horizontal window retainer to the
bottom of the left side panel's window opening with two
M5 × 0.8 - 10 screws.
Figure 4-85: Side window retainers attached to the
left side panel.
Install the Left Front Panel
1.
Attach the left front panel (PN 39551) to the left chip
pan with twoM6 × 1.0 - 12 screws.
Figure 4-86: Left front panel attached to the left chip
pan.
2.
Attach the left front panel to the left side panel with
eight M5 × 0.8 - 10 screws.
Figure 4-87: Left front panel attached to the left side
panel.
Install the Enclosure Splice Plate
1.
Find the three installed M5 × 0.8 - 10 screws on the right
side of the electrical cabinet.
2.
Remove and set aside the three M5 × 0.8 - 10 screws.
3.
Attach the right rear side panel (PN 37619) to the
electrical cabinet with the three M5 × 0.8 - 10 screws
that you set aside in Step 2.
Install the Right Rear Panel
1.
Find the three installed M5 × 0.8 - 10 screws along the
top of the electrical cabinet.
2.
Remove and set aside the three M5 × 0.8 - 10 screws.
3.
Attach the right rear top panel (PN 38480) to the
electrical cabinet with the three M5 × 0.8 - 10 screws
that you set aside in Step 2.
Install the Right Side Panel
1.
Attach the right side panel (PN 54367) to the enclosure
splice plate with four M5 × 0.8 - 10 screws.
2.
Attach the right side panel to the right chip pan with four
M6 × 1.0 - 12 screws.
Install the Right Side Window Retainers
Note: To make it easier to install all components,
don't install the side windows yet. Wait until later in
the procedure.
©Tormach® 2026
Specifications subject to change without notice.
Page 81
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 82

1.
Push a strip of rubber window trim on to the edges of:
l Two vertical window retainers
l One horizontal window retainer
When finished, use shears or a knife to cut the excess
trim.
2.
Loosely install two vertical window retainers on both
sides of the right side panel's window opening with two
sets of three M5 × 0.8 - 10 screws.
Don't fully tighten the screws. Leaving the window
retainers loose makes it easier to install the side
windows.
3.
Loosely attach one horizontal window retainer to the
bottom of the right side panel's window opening with
two M5 × 0.8 - 10 screws.
Figure 4-88: Side window retainers attached to the
right side panel.
Install the Right Front Panel
1.
Attach the right front panel (PN 54332) to the right chip
pan with two M6 × 1.0 - 12 screws.
Figure 4-89: Right front panel attached to the right
chip pan.
2.
Attach the right front panel to the right side panel with
eight M5 × 0.8 - 10 screws.
Figure 4-90: Right front panel attached to the right
side panel.
Install the Left Top Panel
1.
Attach the left top panel to the panels on the left side of
the enclosure with 12 M5 × 0.8 - 10 screws.
Figure 4-91: Left top panel attached to the left side of
the enclosure.
2.
Attach two cable tie anchors to the left top panel with
two M5 × 0.8 - 10 screws.
Figure 4-92: Location to attach two cable tie anchors.
©Tormach® 2026
Specifications subject to change without notice.
Page 82
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 83

4: INSTALLATION
4.7 Install Accessory Components
Install the Right Top Panel
1.
Attach the right top panel (PN 54339) to the panels on
the right side of the enclosure with nine M5 × 0.8 - 10
screws.
Figure 4-93: Right top panel attached to the right side
of the enclosure.
2.
Connect the left and right top panels with two M5 × 0.8 -
10 screws.
Figure 4-94: Left and right top panels connected.
3.
Attach three cable tie anchors to the right top panel with
three M5 × 0.8 - 10 screws.
Figure 4-95: Location to attach three cable tie
anchors.
Install the Upper Front Panel
1.
Attach the front upper panel (PN 37605) (with the
threaded holes facing up) to the right and left front
panels with two sets of two M5 × 0.8 - 10 screws.
Figure 4-96: Front upper panel attached to the right
and left front panels.
2.
Attach the front upper panel to the right and left top
panels with four M5 × 0.8 - 10 screws.
Figure 4-97: Front upper panel attached to the right
and left top panels.
Install the Front Lower Panel
1.
Attach the front lower panel (PN 54399) to the right and
left front panels with two sets of two M5 × 0.8 - 10
screws.
©Tormach® 2026
Specifications subject to change without notice.
Page 83
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 84

Figure 4-98: Front lower panel attached to the right
and left front panels.
2.
Attach the front lower panel to the right and left chip
pans with four M5 × 0.8 - 10 screws.
Figure 4-99: Front lower panel attached to the right
and left chip pans.
Install the Rear Splash Shield
Attach the rear splash shield to the right chip pan below
the electrical cabinet with four M6 × 1.0 - 12 screws.
Install the Linear Rails
Assemble the Linear Rails
1.
Find the four linear rails provided: use the two shorter
linear rails on the right side of the enclosure. Use the
two longer linear rails on the left side of the enclosure.
2.
Assemble each linear rail in the following order:
a.
Slide one linear rail mount onto one end of the linear
rail.
Don't completely tighten the clamping screw on the
linear rail mount. It's easier to install and align the
linear rails with loose clamping screws.
b.
Slide one bumper onto the linear rail.
c.
Slide two linear bearings onto the linear rail.
d.
Slide one bumper onto the opposite end of the linear
rail.
e.
Slide one linear rail mount onto the opposite end of
the linear rail.
Make sure that the linear rail mount's clamping
screw faces the same direction as the linear rail
mount that you installed in Step A.
Figure 4-100: Linear rail assembly.
3.
Repeat Step 2 for the remaining three linear rails.
Install the Linear Assemblies
1.
Align one short linear rail assembly (PN 37607) to the
two holes on the inside of both the right front panel and
the front lower panel.
The linear rail mount's clamping screws must face up.
Figure 4-101: Right lower linear assembly attached to
the inside of the enclosure's lower right side.
©Tormach® 2026
Specifications subject to change without notice.
Page 84
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 85

4: INSTALLATION
4.7 Install Accessory Components
2.
Attach the short linear rail assembly to the outside of
both the right front panel and the front lower panel with
two sets of two M6 × 1.0 - 12 screws.
Figure 4-102: Right lower linear assembly attached to
the outside of the enclosure's lower right side.
3.
Repeat Steps 1 to 2 for the remaining three linear rails,
with the linear rail mount's clamping screws face in the
following directions:
l Up on the lower linear assemblies
l Down on the upper linear assemblies
Figure 4-103: Four linear assemblies attached to the
enclosure.
Install the Front Doors
Assemble the Front Doors
Figure 4-104: Rubber trim, window, and window retainers
layered to assemble the front door.
1.
Push a strip of rubber trim onto the edge of the window
opening on each front door. Make sure that the trim
starts at one end of the door handle mount, continues
around the perimeter of the window, and ends at the
opposite side of the door handle mount. When finished,
use shears or a knife to cut the excess trim.
2.
Remove and discard the protective plastic film from
each window.
3.
On the inside of one front door, put one window on top
of the rubber trim.
4.
Attach one dark gray, vertical window retainer to both
sides of the front door's window opening with two sets
of three M5 × 0.8 - 10 screws.
NOTICE! To prevent window damage from over-
tightening, use your fingers to tighten the screws.
©Tormach® 2026
Specifications subject to change without notice.
Page 85
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 86

5.
Attach one dark gray, horizontal window retainer to the
top and bottom of the front door's window opening with
two sets of two M5 × 0.8 - 10 screws.
NOTICE! To prevent window damage from over-
tightening, use your fingers to tighten the screws.
Figure 4-105: Window retainers attached to the front
door.
6.
Repeat Steps 1 through 5 to assemble the remaining
front door.
Install the Front Door Assemblies
Each front door is attached to the enclosure by securing it to
the linear bearings: the wider door is mounted on the left side
of the enclosure, and the narrower door is mounted on the
right side of the enclosure.
To install the front doors:
1.
Starting with the top linear assembly, attach the narrow
door to the two upper linear bearings with two sets of
four M5 × 0.8 - 10 screws.
Figure 4-106: Narrow door attached to the top linear
assembly.
2.
Move the bottom of the narrow door into alignment with
the bottom linear assembly. Then, attach the narrow
door to the two bottom linear bearings with two sets of
four M5 × 0.8 - 10 screws.
3.
Repeat Steps 1 to 2 to attach the wide door to the top
and bottom linear rail assemblies on the remaining side
of the enclosure.
Figure 4-107: Both front doors attached to the
enclosure.
4.
To the edge of the front door that's closest to the left
side of the enclosure, attach one door seal with three
M5 × 0.8 - 10 screws.
Figure 4-108: Door seal attached to the edge of the
front door.
5.
Repeat Step 4 for the remaining front door.
©Tormach® 2026
Specifications subject to change without notice.
Page 86
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 87

4: INSTALLATION
4.7 Install Accessory Components
6.
Attach the handles to both front doors with two sets of
two M8 x 1.25 - 20 screws and two sets of two M8 flat
washers.
Figure 4-109: Both front door handles attached to the
enclosure.
7.
Push one square tube plug into the bottom of each door
handle.
Install the Door Latch
1.
Attach the door latch strike plate on the left front door
with a Phillips screwdriver and two M3 screws.
2.
Attach the door latch in the pocket on the right door with
two M3 screws.
Install Door Lock Mounting Hardware
Note: If you have the (optional) Door Lock Switch Kit,
skip this section. The mounting hardware is part of
the door lock switch installation procedure later in
this manual.
1.
Attach the door switch installation plate on the right
enclosure door with a 3 mm hex wrench and four M5 ×
0.8-50 button head screws.
Figure 4-110: Attaching the door switch assembly to
the right side of the enclosure.
2.
Attach the lock key and the lock key nut together with a 3
mm hex wrench and two M5 × 0.8-10 flanged button
head screws.
Figure 4-111: Attaching the components of the lock
key bracket assembly.
3.
Attach the lock key bracket assembly to the left
enclosure door with a 3 mm hex wrench and two M5 ×
0.8-10 flanged button head screws.
Figure 4-112: Attaching the lock key bracket
assembly to the left side of the enclosure.
Install the Floodlights
1.
Use a multimeter to verify the ground connection of both
floodlights:
a.
Measure the resistance between the floodlight's
power connector ground pin (the middle pin on the
three-prong connector) and the floodlight's bracket
screw.
©Tormach® 2026
Specifications subject to change without notice.
Page 87
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 88

b.
Read the OHMS value that displays. The value should
be less than 5 OHMS. If the value is greater than 5
OHMS, don't install the floodlight. Create a support
ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.
2.
Position one floodlight over the opening on the right top
panel. Take care not to drop the light through the
opening into the enclosure.
3.
Attach one floodlight retainer to either side of the lights
with two sets of two M5 × 0.8 - 10 screws.
Verify that the floodlight is centered over the opening
before hand-tightening the floodlight retainers.
Figure 4-113: Floodlight attached to the top panel.
Figure 4-114: Attached floodlight from the inside of
the enclosure.
4.
Repeat Steps 1 to 3 to install the floodlight on the left
side.
5.
Connect the short power cable from the Enclosure Cable
Kit to the plug on the right floodlight.
6.
Connect the long power cable from the Enclosure Cable
Kit to the plug on the left floodlight.
7.
Route the power cables from the floodlights to the
electrical cabinet.
8.
Plug the floodlights into the Enclosure Lights outlet on
the back of the electrical cabinet.
9.
Attach the floodlights' power cables to the five wire tie
anchors on the left and right top panels with five wire
ties.
Install the Side Windows
1.
Rubber trim is required to prevent leaks around the
window openings: push a strip of rubber trim to the edge
of the window opening on each side panel. Verify that
the trim covers the entire perimeter of the window.
When finished, use shears or a knife to cut the excess
trim.
Figure 4-115: Rubber trim pushed onto the window
opening.
2.
Remove and discard the protective plastic film from the
windows.
3.
Slowly slide one window through the left top panel's
window opening and into the two installed vertical
window retainers. Take care to not scratch the window.
When finished, verify that the window rests on the
bottom horizontal window retainer.
Figure 4-116: Window sliding into the window
opening.
©Tormach® 2026
Specifications subject to change without notice.
Page 88
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 89

4: INSTALLATION
4.7 Install Accessory Components
4.
Push a strip of rubber trim onto the edge of one
horizontal window retainer. When finished, use shears
or a knife to cut the excess trim.
5.
Attach one horizontal window retainer above the
window on the left side panel with two M5 × 0.8 - 10
screws.
Figure 4-117: Horizontal window retainer attached
above the window.
6.
Tighten all screws on the window retainers to secure the
window.
NOTICE! To prevent window damage from over-
tightening, use your fingers to tighten the screws.
7.
Repeat Steps 1 through 6 for the window on the right
side panel.
Install the Access Panel
1.
Push three round hole plugs into the three holes on the
left rear panel.
Figure 4-118: Round hole plugs pushed into the left
rear panel.
2.
Push a strip of rubber trim to the edge of the access
panel opening on the left rear panel. Verify that the trim
covers the entire perimeter of the opening. When
finished, use shears or a knife to cut the excess trim.
3.
Find the threaded hole toward the top center of the left
rear panel. Then, loosely install one M5 × 0.8 - 10 screw
from the inside of the enclosure.
This screw supports the access panel while you install
the remaining fasteners.
Figure 4-119: Supporting screw inside the left rear
panel.
4.
Tilt the access panel and put it through the opening on
the left rear panel. Then, hang it inside the enclosure on
the installed M5 × 0.8 - 10 screw.
Figure 4-120: Access panel moving inside the
enclosure.
©Tormach® 2026
Specifications subject to change without notice.
Page 89
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 90

5.
Attach the access panel to the left rear panel from the
outside of the enclosure with 11 M5 × 0.8 - 10 screws.
Figure 4-121: Access panel attached to the left rear
panel.
Install the Stainless Steel Wear Guard
Find the stainless steel wear guard that you set aside
earlier.
Attach it to the lower front panel with two M5 × 0.8 - 10
screws.
Figure 4-122: Stainless steel wear guard attached to
the lower front panel.
Use the Maintenance Labels
The machine has one maintenance label on each window.
Figure 4-123: Window maintenance label.
Write down today's date on each label with a permanent
marker.
You have completed assembling and installing the
1100MX Enclosure.
Replace the Windows
When required, replace the windows with the following parts:
l Window, 1100, Side (PN 37648)
l Window, 1100, Left Door (PN 37649)
l Window, 1100, Right Door (PN 37650)
4.7.8 Set up the Door Lock Switch Kit (Optional)
The Door Lock Switch Kit (PN 38283) is an optional accessory
that reduces risk by allowing you to lock enclosure doors during
potentially hazardous machining operations.
Complete the following steps in the order listed:
Install the Door Lock Switch Kit
90
Update PathPilot
92
Enable the Door Lock Switch Kit
93
Install the Door Lock Switch Kit
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
©Tormach® 2026
Specifications subject to change without notice.
Page 90
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 91

4: INSTALLATION
4.7 Install Accessory Components
2.
Attach the door switch to the door switch installation
plate on the right enclosure door with a 3 mm hex
wrench and four M5 × 0.8-50 button head screws.
Figure 4-124: Attaching the door switch assembly to
the right side of the enclosure.
Figure 4-125: Door switch assembly attached.
(Viewed from inside the enclosure.)
3.
Loosely attach the lock key and the lock key nut to the
lock key bracket with a 3 mm hex wrench and two M5 ×
0.8-10 flanged button head screws. You'll make further
adjustments later in this procedure.
Figure 4-126: Attaching the components of the lock
key bracket assembly.
4.
Loosely attach the lock key bracket assembly to the left
enclosure door with a 3 mm hex wrench and two M5 ×
0.8-10 flanged button head screws. You'll make further
adjustments later in this procedure.
Figure 4-127: Attaching the lock key bracket
assembly to the left side of the enclosure.
Figure 4-128: Lock key bracket attached. (Viewed
from inside the enclosure.)
5.
Identify the door lock override switch, as shown in the
following image.
Figure 4-129: Door lock override switch.
6.
Remove the screw that secures the door lock override
switch with a Phillips screwdriver, and then set it aside.
7.
Turn the door lock override switch to the unlocked
position with a flat-blade screwdriver.
©Tormach® 2026
Specifications subject to change without notice.
Page 91
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 92

8.
Open and close the enclosure doors to align the door
switch and the lock key. Make sure that the lock key
freely engages and disengages the door switch.
9.
Tighten all four M5 × 0.8-10 flanged button head screws
on the lock key assembly.
10.
Attach two cable tie anchors to the right top panel on
the enclosure with a 3 mm hex wrench and three M5 ×
0.8-10 flanged button head screws.
Figure 4-130: Cable tie anchors installed inside the
right side of the enclosure.
11.
Attach the remaining cable tie anchor to the enclosure
light's screw, as shown in the following image.
Figure 4-131: Cable tie anchor installed on the
enclosure light's screw.
12.
Route the loose end of the door switch cable to the
electrical cabinet, and connect it to the Enclosure Door
Switch outlet.
13.
Secure the door switch cable to the cable tie anchors
that you installed with three cable ties. Make sure that
the cable doesn't restrict the motion of the enclosure
door.
Figure 4-132: Cable routing from the enclosure light to
the door, without interference.
14.
Turn the door lock override switch to the locked position
with a flat-blade screwdriver.
15.
Find the screw for the door lock override switch that you
set aside in Step 6. Then, put it back to secure the door
lock override switch in the locked position.
16.
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
Update PathPilot
Before using the Door Lock Switch Kit, you must make sure
that the PathPilot controller is updated to PathPilot v2.1.6 (or
newer). This version of PathPilot has settings required to use
the Door Lock Switch Kit.
To update PathPilot, do either of the following:
l "Download and Install an Update File from the
Controller" (below)
l "Install an Update File from a USB Drive" (on the next
page)
Download and Install an Update File from the Controller
1.
Confirm that the PathPilot controller is powered on and
out of Reset mode.
©Tormach® 2026
Specifications subject to change without notice.
Page 92
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 93

4: INSTALLATION
4.7 Install Accessory Components
2.
Downloading and installing an update file requires an
Internet connection. From the Status tab, confirm that
the Internet button LED light is on. (To configure the
network, select the LED light.) Then, select Update.
Figure 4-133: Update button on the Status tab.
3.
From the Software Update dialog box, select Check
Online.
Figure 4-134: Software Update dialog box.
4.
Select Install.
Figure 4-135: Install button on the Software Update
dialog box.
The update file is downloaded, and a notification dialog
box displays.
5.
From the dialog box, select OK.
The update file is installed on the PathPilot controller.
6.
Follow the on-screen instructions to restart the PathPilot
controller.
Install an Update File from a USB Drive
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
Figure 4-136: Update button on the Status tab.
6.
From the Software Update dialog box, select Browse.
Figure 4-137: Software Update dialog box.
7.
From the Browse dialog box, select USB.
Figure 4-138: Browse dialog box.
8.
Select the desired update file, and then select Update.
The update file is installed on the PathPilot controller.
9.
Follow the on-screen instructions to restart the PathPilot
controller.
Enable the Door Lock Switch Kit
If you have a Door Lock Switch Kit, you must first enable it in
PathPilot.
To enable the Door Lock Switch Kit:
©Tormach® 2026
Specifications subject to change without notice.
Page 93
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 94

1.
On the Settings tab, select Enclosure Door Switch.
Figure 4-139: Settings tab.
On the Status tab, the Door Locked / Open LEDs display.
Figure 4-140: Status tab.
2.
Reference the machine: select Ref Z, Ref X, and Ref Y.
3.
Open the enclosure doors.
4.
From the PathPilot interface, on the Status tab, make
sure that the Door Open LED is on, and the Door Locked
LED is off.
Figure 4-141: Door Open LED on the Status tab.
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
4.7.9 Install the Lube Cube Coolant Kit
Complete the following steps in the order listed:
Required Items and Tools
94
Assemble the Lube Cube
94
Install the Lube Cube on the Machine
97
Make Air Connections
97
Required Items and Tools
l 3 mm hex wrench
l 5 mm hex wrench
l 7/16 in. wrench
l 9/16 in. wrench
l Phillips screwdriver
l Snips
l Thread seal tape
Assemble the Lube Cube
1.
Apply thread seal tape to the 1/4 in. NPT push-to-
connect fitting, and then install it into the solenoid using
a 9/16 in. wrench.
Figure 4-142: Installing the push-to-connect fitting
into the solenoid.
2.
Apply thread seal tape to the 1/4 in. NPT barbed fitting,
and then install it into the solenoid using a 9/16 in.
wrench.
Figure 4-143: Installing the barbed fitting into the
solenoid.
©Tormach® 2026
Specifications subject to change without notice.
Page 94
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 95

4: INSTALLATION
4.7 Install Accessory Components
3.
Install the solenoid onto the solenoid mounting bracket
with two M4 × 5 mm Phillips head screws using a
screwdriver or a 3 mm hex wrench.
Figure 4-144: Solenoid installed onto the solenoid
mounting bracket.
4.
Mount the solenoid and bracket assembly onto the top of
the canister with four M6 socket head cap screws using
a 5 mm hex wrench. Make sure that the barbed fitting is
pointed towards the pressure regulator.
Figure 4-145: Installing the solenoid mounting bracket
onto the canister.
5.
Apply thread sealant tape to the threads of the pressure
gauge, and then install it into the air pressure regulator
using an 7/16 in. wrench.
Figure 4-146: Installing the pressure gauge onto the
air pressure regulator.
6.
Install one end of the short tubing into the pressure
regulator and the other end of the tubing onto the
barbed fitting on the solenoid.
Figure 4-147: Tubing installed between the pressure
regulator and the solenoid.
7.
Prepare the duplex tubing:
l Split the tubes apart on one end. On the canister,
connect the black tube to the barbed outlet fitting
labeled Air, and connect the orange tube to the
barbed outlet fitting labeled Cool.
Figure 4-148: Duplex tubing connected to the
canister.
l On the opposite end, separate the tubes
approximately 5 in. back from the end.
8.
Cut approximately 3 in. (7.6 cm) from the end of the
orange tube. Set aside the removed section.
©Tormach® 2026
Specifications subject to change without notice.
Page 95
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 96

9.
Install the brass check valve onto the orange tube. Make
sure that the arrow on the valve points away from the
canister.
Figure 4-149: Check valve installed onto the
previously cut tubing.
10.
Install the removed tubing section onto the other end of
the check valve.
11.
Trim the longer of the two tubes so that both tubes are
equal in length.
Figure 4-150: Trimming the duplex tubing to length.
12.
Connect the duplex tubing to the flow control block. The
orange tube (with the check valve) connects to the
barbed fitting labeled Cool. The black tube connects to
the barbed fitting labeled Air.
Figure 4-151: Duplex tubing connected to the flow
control block.
13.
Install the spray nozzle into the flow control block.
Figure 4-152: Spray nozzle installed on the flow
control block.
Note: Thread seal tape isn't required because
this port is sealed.
14.
Connect one end of the 1/4 in. black polyurethane tubing
into the push-to-connect fitting on the solenoid valve.
Figure 4-153: Connecting one end of the 1/4 in. black
tubing to the solenoid.
©Tormach® 2026
Specifications subject to change without notice.
Page 96
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 97

4: INSTALLATION
4.7 Install Accessory Components
15.
Install the push-to-connect tee fitting onto the loose end
of the 1/4 in. black tubing.
Figure 4-154: Tee fitting installed on the loose end of
the 1/4 in. black tubing.
16.
Thread the magnetic base into the bottom of the flow
control block.
Figure 4-155: Magnetic base threaded onto the flow
control block.
17.
You've completed the assembly of the Lube Cube. Go to
"Install the Lube Cube on the Machine" (below).
Install the Lube Cube on the Machine
1.
On the back of the chip pan below the electrical cabinet,
locate the two threaded M5 holes. Mount the canister to
the chip pan using two M5 button head cap screws.
Figure 4-156: Lube Cube mounted on the back of the
chip pan.
2.
Route the solenoid power cable to the outside of the
electrical cabinet, and connect it to the Coolant Pump
Power outlet.
3.
Unthread the magnetic base from the bottom of the
flow control block. Then, route the flow control block
underneath the electrical cabinet and into the enclosure.
4.
Reinstall the threaded magnetic base into the flow
control block.
5.
Mount the flow control block to the machine table or the
spindle head sheet metal using the magnetic base.
6.
You've completed the installation of the Lube Cube on
your machine. Go to "Make Air Connections" (below).
Make Air Connections
Note: The Lube Cube is designed to operate at high
volume and low pressure (10–30 psi), consuming
approximately 0.7–2.0 cfm.
1.
Locate the air supply line from your compressor.
2.
Use the tee fitting installed on the 1/4 in. black tubing to
splice into the air supply line.
4.7.10 Install the PathPilot Operator Console
Complete the following steps in the order listed:
Required Tools
97
Prepare the Machine
98
Remove the Right Side Window
98
Remove the Operator Box
98
Install the Mount Arm
98
Mount the Console
99
Assemble the Controller and Keyboard Tray
99
Lift and Secure the Controller Assembly
101
Make Electrical Connections
102
Reassemble the Machine
104
PathPilot Operator Console Drill Template
105
Required Tools
This procedure requires the following tools. Collect them
before you begin.
l 15/64 in. drill bit
l Electric drill
l Hole punch
©Tormach® 2026
Specifications subject to change without notice.
Page 97
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 98

l Level
l Metric hex wrench set
l Phillips screwdriver
l Phillips screwdriver, small
l Scissors
l Ruler
l Tape
Prepare the Machine
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
Close the enclosure doors.
NOTICE! This procedure requires you to drill four
holes into the enclosure. If the enclosure's right
door is open, there's a risk that you'll drill into it.
Remove the Right Side Window
To make it easier to install the mount arm, we
recommend removing the right side window from the
enclosure. Loosen the screws on the vertical window
retainers, and slide the window out of the right side
panel. Set the window aside.
Remove the Operator Box
1.
Remove the Emergency Stop cable from the operator
box.
2.
Remove the four screws that secure the operator box to
the machine stand using a 3 mm hex wrench.
Discard the operator box.
3.
Put the four screws from the operator box back on to the
machine stand.
Install the Mount Arm
1.
Print the drill template provided in this document. To
verify that the template printed at the correct size, use a
ruler to measure the 1 in. scale on the template. If the
template is incorrectly sized, adjust your printer settings
and try again.
2.
Cut out the drill template along its edges.
3.
Find the operator console's mount arm.
4.
Put the drill template on the mount arm's top bracket.
Then, verify that the holes on the bracket align with the
holes on the drill template. If they don't, trace the
correct hole pattern on to the drill template.
5.
Align the drill template to the top of the enclosure and
tape it in place, as shown in the following image.
Figure 4-157: Drill template taped to the enclosure.
6.
Put a mark in each hole on the drill template using a
hole punch.
7.
Remove the drill template from the enclosure and
discard it.
8.
Drill into the marks on the enclosure that you made in
Step 6 using an electric drill and a 15/64 in. (6 mm) drill
bit.
Figure 4-158: Drilling holes into the top of the
enclosure.
©Tormach® 2026
Specifications subject to change without notice.
Page 98
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 99

4: INSTALLATION
4.7 Install Accessory Components
9.
Loosely secure the top of the mount arm to the
enclosure with four M5 × 0.8 - 10 screws and washers.
Figure 4-159: Securing the top of the mount arm to
the enclosure.
10.
Using a level, align the bottom of the mount arm with
the bottom of the enclosure.
Figure 4-160: Bottom of the mount arm level on the
enclosure.
11.
Using the bottom of the mount arm as a template, drill
one hole using an electric drill and a 15/64 in. drill bit.
12.
Put one M5 × 0.8 - 10 screw and washer into the hole
that you drilled in Step 11.
The mount arm is now secure enough to reliably drill the
remaining three holes.
13.
Drill the remaining three holes for the mount arm's
bottom bracket.
Figure 4-161: Drilling the remaining three holes into
the enclosure.
14.
Put three M5 × 0.8 - 10 screws and washers into the
remaining three holes.
15.
Once the mount arm is secured to the enclosure, open
the enclosure door and verify that the mount arm's
screws don't interfere with the enclosure door jamb. If
they do, loosen the screws on the door jamb, and slide it
toward the back of the machine.
Figure 4-162: Door jamb moved to provide clearance
for the mount arm's screws.
Mount the Console
Complete the following steps in the order listed:
Assemble the Controller and Keyboard Tray
1.
Find the three provided split collars. If they're connected,
remove their bolts using a 8 mm hex wrench, and
separate them. The split collars are matched pairs, so
you must keep them together.
©Tormach® 2026
Specifications subject to change without notice.
Page 99
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 100

Figure 4-163: One split collar disassembled.
2.
Find the four provided pieces of plastic with adhesive
backing. Cut each piece of plastic so that it's the length
of the inside of the split collar.
3.
Adhere one piece of plastic to the inside of each split
collar.
Figure 4-164: Adhering tape on the inside of a split
collar.
4.
Remove the operator console out of its packaging.
5.
Find the three provided mount arm brackets.
Figure 4-165: Mount arm brackets.
6.
Loosely attach two of the mount arm brackets to the left
side of the controller with four M4 × 0.7 - 10 screws
using a 2.5 mm hex wrench, as shown in the following
image. Verify that the curved edge is facing away from
the controller.
Note: Don't completely tighten the brackets to
the controller. You'll adjust them when you're
adjusting the height of the entire console
assembly.
Figure 4-166: Two mount brackets attached to the
controller.
7.
Attach the threaded side of two split collars to the
mount arm brackets with four M5 × 0.8 - 10 screws and
washers.
Figure 4-167: Split collars attached to the mount arm
brackets on the controller.
8.
Find the keyboard tray provided. Then, attach the
remaining mount arm bracket to the left side of the
keyboard tray with two M4 × 0.7 - 10 screws using a 2.5
mm hex wrench. Verify that the curved edge is facing
away from the keyboard tray.
©Tormach® 2026
Specifications subject to change without notice.
Page 100
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 101

4: INSTALLATION
4.7 Install Accessory Components
9.
Attach one side of one split collar to the mount arm
bracket with two M5 × 0.8 - 10 screws and washers.
Figure 4-168: Split collar attached to the mount arm
bracket on the keyboard tray.
10.
Find the provided jog pendant bracket. Then, attach it to
the left side of the controller (between the two mount
arm brackets) with two M4 × 0.7 - 10 screws using a 2.5
mm hex wrench.
11.
Set the keyboard tray aside.
Lift and Secure the Controller Assembly
1.
Attach the remaining split collar to the mount arm, and
completely tighten it using a 8 mm hex wrench. This
split collar determines the height for the overall console
assembly, so we suggest attaching it 16-1/2 in. (42 cm)
from the top of the enclosure.
Figure 4-169: Split collar attached to the mount arm.
CAUTION! Team Lift Required: You must have
the aid of more than one person to lift and
move the object. The object is heavy, and lifting
it by yourself can cause serious injury.
2.
Lift the console and hold it on the right side of the mount
arm.
3.
Align the bottom split collar on the controller with the
split collar that you installed on the mount arm in Step 1.
4.
With the aid of another person, loosely attach the
opposite side of both split collars to the mount arm
using a 8 mm hex wrench.
Figure 4-170: Loosely attaching the split collars to the
mount arm.
5.
Find the keyboard tray that you set aside earlier. Then,
attach it to the bottom of the controller, as shown in the
following image.
Figure 4-171: Attaching the keyboard tray to the
bottom of the controller.
6.
Loosely attach the opposite side of the split collar to the
mounting arm using a 8 mm hex wrench.
7.
Adjust the height and the angle of the console assembly
as required.
8.
Securely tighten all four split collars using a 8 mm hex
wrench. Securely tighten all mount arm brackets using a
2.5 mm hex wrench.
©Tormach® 2026
Specifications subject to change without notice.
Page 101
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 102

Make Electrical Connections
1.
Find the provided Jog Pendant (PN 50363).
2.
Hang the jog pendant on its bracket (on the front of the
controller) as shown in the following image.
Figure 4-172: Jog pendant on the front of the console
assembly.
3.
Route the loose end of the jog pendant to the back of the
controller.
4.
Find the provided power supply bracket. Then, attach it
to the back of the controller with two M3 screws using a
Phillips screwdriver.
5.
Find the provided power, Ethernet, emergency stop
extension, and ATC USB extension cables, and the WiFi
dongle. Then, connect them – and the jog pendant cable
– to the controller as shown in the following image.
Figure 4-173: Controller connections.
6.
Put the power supply into the power supply bracket.
7.
Find the provided corrugated tubing and piece of rubber.
8.
Attach the piece of rubber to the bracket on the rear of
the keyboard tray as shown in the following image.
Figure 4-174: Rubber attached to the bracket on the
keyboard tray.
9.
Put the loose ends of all cables from the controller into
the corrugated tubing.
10.
Push the corrugated tubing into the bracket on the rear
of the keyboard tray.
Figure 4-175: Cords put into corrugated tubing, which
is attached to the rear of the keyboard tray.
11.
Find the access panel on the machine stand as shown in
the following image.
Figure 4-176: Access panel on the machine stand.
12.
Remove the access panel using a 2 mm hex wrench, and
discard the panel. Set the screws aside for later in this
procedure.
©Tormach® 2026
Specifications subject to change without notice.
Page 102
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 103

4: INSTALLATION
4.7 Install Accessory Components
13.
Find the provided access panel. Then, put the loose end
of the corrugated tubing and all cords through it as
shown in the following image.
Figure 4-177: Loose end of corrugated tubing and all
cords put through the access panel.
14.
Attach the access panel – with the corrugated tubing and
all cords – to the machine stand with the screws that
you set aside in Step 12 using a 2 mm hex wrench.
Figure 4-178: Access panel attached to the machine
stand.
15.
Route the loose end of all cords through the machine
stand and out toward the rear of the machine.
16.
Find the existing operator box cable that's preinstalled
on the machine. Then, route it through the access hole in
the machine stand shown in the following image.
Figure 4-179: Preinstalled operator box cable routing.
17.
Connect the operator box extension cable to the existing
operator box cable (that you just routed into the machine
stand).
18.
Connect the Ethernet cable to the Controller
Communications port on the side of the electrical
cabinet.
19.
Connect the power cable to the Accessory Power port on
the rear of the electrical cabinet.
20.
From the ATC, remove and discard the existing USB
cable. Then, route the loose end of the ATC USB
extension cable from the controller to the ATC, and
connect it in place of the original USB cable.
©Tormach® 2026
Specifications subject to change without notice.
Page 103
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 104

21.
If you have an EU model of the operator console, find the
provided set of keys, and put it into the top of the
operator console.
Figure 4-180: Key put into the controller.
Note: On EU machines, the keys switch
between run mode and setup mode. If you
don't have an EU machine, you don't need the
keys. For more information on operation
modes, refer to the Safety section of the EU
machine operator's manual.
Reassemble the Machine
1.
Put the right side window (that you set aside in "Prepare
the Machine" (page 98)) back into the right side panel on
the enclosure. Then, tighten the screws on the vertical
window retainers
2.
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
©Tormach® 2026
Specifications subject to change without notice.
Page 104
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install Accessory Components


---

## PDF Page 105

Drill four
6 mm holes
Keep edge ﬂush 
with top of 
enclosure
5”
2.5”
4”
Keep edge ﬂush with right side of enclosure


---

## PDF Page 106

4.8 SET UP THE PATHPILOT CONTROLLER
Before operating your machine, configure in PathPilot the date,
time, keyboard language, and — if applicable — the optional
Touch Screen Kit (PN 35575).
4.8.1 Specify the Date and Time
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
4.8.2 Specify the Keyboard Language
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
4.8.3 Configure the Optional Touch Screen Kit
Before using a touch screen, you must make sure that it's
configured and calibrated. To calibrate it:
1.
From the PathPilot interface, on the Main tab, in the
MDI Line DRO field, type ADMIN TOUCHSCREEN. Then
select the Enter key.
2.
Follow the on-screen instructions.
4.8.4 Update PathPilot
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
Figure 4-181: Update button on the Status tab.
3.
From the Software Update dialog box, select Check
Online.
Figure 4-182: Software Update dialog box.
4.
Select Install.
Figure 4-183: Install button on the Software Update
dialog box.
The update file is downloaded, and a notification dialog
box displays.
5.
From the dialog box, select OK.
The update file is installed on the PathPilot controller.
6.
Follow the on-screen instructions to restart the PathPilot
controller.
©Tormach® 2026
Specifications subject to change without notice.
Page 106
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.8 Set Up the PathPilot Controller


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
6.2.5 Conversational Tab
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
6.2.5 Conversational Tab
Figure 6-7: Conversational tab.
From the Conversational tab, you can do the following
activities:
l Use different functions to create simple G-code
programs in PathPilot.
For information, see "About Conversational
Programming" (page 127).
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
7.1.2 Edit G-Code
123
7.1.3 Read G-Code
124
7.1.4 Use Conversational Programming
127
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
7.1.2 Edit G-Code
In PathPilot, there are two ways to edit G-code:
Edit G-Code with a Text Editor
123
Edit G-Code with Conversational Programming
123
Edit G-Code with a Text Editor
You can edit .nc files that are on the PathPilot controller. If the
.nc file is in the USB Files window, you must first transfer it to
the controller; go to "Transfer Files to and From the Controller"
(page 181).
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
Edit G-Code with Conversational Programming
You can edit .nc files that are on the PathPilot controller. If the
.nc file is in the USB Files window, you must first transfer it to
the controller; go to "Transfer Files to and From the Controller"
(page 181).
To edit G-code with conversational programming:
©Tormach® 2026
Specifications subject to change without notice.
Page 123
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 124

1.
From the File tab, select the .nc file.
2.
Select Conv. Edit.
The file opens in a job assignment editor window: the
program's job assignments are on the left and a preview
of the program is on the right.
Figure 7-8: Job assignment editor.
3.
Edit the file contents as needed. Do any of the following:
Change the Step Order
124
Create a New Job Assignment
124
Load an Existing G-Code File
124
Edit a Job Assignment
124
4.
Select Save.
The G-code program file is updated.
Change the Step Order
Select Move Up, Move Down, Duplicate, or Remove.
Create a New Job Assignment
1.
Select Insert Step.
PathPilot opens the Conversational tab.
2.
Create the new job assignment.
3.
Select Insert.
4.
(Optional) Edit the job assignment order in the program.
Load an Existing G-Code File
1.
Select Insert File. You can insert G-code files that are
hand-written, generated from CAM software, or
generated from conversational programming in
PathPilot.
2.
Navigate to and select the .nc file that you want to
insert.
3.
Select Open.
4.
(Optional) Edit the job assignment order in the program.
Edit a Job Assignment
1.
Select the job assignment, and then select Conv. Edit.
PathPilot opens the Conversational tab.
2.
Edit the job assignment.
3.
Select Finish Editing.
Tips
l To restore an edited job assignment to its original
parameters: select Revert.
Note: Revert is only available for individual job
assignments created in conversational
programming.
l To undo all changes made to an entire G-code program:
select Close. When prompted, select Close Without
Saving.
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
7.1.4 Use Conversational Programming
To create simple parts, use the conversational programming
feature in PathPilot.
About Conversational Programming
127
Create a Face on a Part
127
Create a Profile on a Part
129
Create a Pocket on a Part
130
Create Hole Locations on a Part (Drill/Tap)
132
Create Threads on a Part
135
Create Text to Engrave on a Part
136
Import a DXF File
137
About Conversational Programming
PathPilot includes G-code generators intended to make simple
G-code programs:
l Programs for simple parts.
l Programs for parts made up of a collection of simple
features.
Note: For complex parts, or parts with complex
shapes, we recommend you use a CAD/CAM
program.
The Conversational tab is divided into two sections:
l Parameters common to most operations, like speeds and
feeds.
Note: DRO fields that are grayed out are not
available for the specific conversational
features.
l Parameters specific to each operation, like part
geometry.
Create a Face on a Part
Using conversational programming, you can program PathPilot
to take multiple cuts — each following the last — on an X/Y
plane over a Z range. For information, see "About Facing" (on
the next page).
Before You Begin
Before you begin, you must verify that you enter the program
values considering the following:
l The area from the rear, left corner of the workpiece to
the rear, right corner of the workpiece must be clear of
any obstructions from the Z Start position to the Z End
position.
l The top of the workpiece must be free of any
workholding devices.
l The value used in the Z End DRO field must be such that
it is above the workholding device.
l The value used in the Z Clear DRO field must be such
that it is above any obstruction in the tool path between
the end of one pass and the beginning of the next.
©Tormach® 2026
Specifications subject to change without notice.
Page 127
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 128

To create a face on a part:
1.
From the Conversational tab, select the Face tab.
2.
From the Conversational DROs group, set the
parameters for the facing operation.
Figure 7-15: Conversational DROs on the Face tab.
3.
Work through the program-specific DRO fields:
a.
In the X Start DRO field and the X End DRO field, type
the location of the workpiece edges. We recommend
using the rear left corner of the part for the X Start
value.
b.
In the Y Start DRO field and the Y End DRO field, type
the location of the workpiece edges. We recommend
using the front right corner of the part for the Y End
value.
c.
In the Stepover DRO field, type the required distance
between tool paths. To prevent uncut areas in the
spiral corners, we recommend limiting this value to
80% of the tool diameter. For information, see
"Facing Reference" (on the next page).
d.
In the Z Start DRO field and the Z End DRO field, type
the location of the first and last Z passes. For a single
Z pass at the location typed in the Z End DRO field,
type a value of 0 or a full Z range value into the
Depth of Cut DRO field.
e.
In the Depth of Cut DRO field, type the desired
amount of material to remove.
Note: The depth of cut is later adjusted
within the Z range so that each pass in the Z
range has the same depth (rather than the
last Z pass having a short depth of cut).
Figure 7-16: Program-specific DROs on the Face
tab.
About Facing
Face milling is the process of cutting a surface that's
perpendicular to the axis of the cutting tool. A facing program
is usually used to cut an accurate, finished top surface on a
rough piece of stock material. After a facing program is
complete, tool marks remain — creating a fairly flat surface,
with microscopic height differences.
Facing in PathPilot
When using a facing routine, each tool pass along the X-/Y-axis
begins off to the side of the workpiece to avoid plunging into
the workpiece. To compensate for this procedure, PathPilot
sets lead-in tool paths outside of the workpiece using the
part's work offsets, the tool's diameter, and the
predetermined stepover value. PathPilot also adjusts the depth
of cut to make sure each tool pass has the same depth, rather
than cutting a short depth on the last pass of the program.
During a facing routine, PathPilot does the following:
1.
Moves the machine to the predefined G30 position, or
the tool change position.
2.
If required, performs or requests a tool change.
3.
Makes a rapid move in the X and Y direction to the
beginning of the workpiece.
4.
Makes a rapid move in the Z direction to the predefined
Z Clear position.
5.
Begins the cut in the X/Y plane at an adjusted Z depth of
cut.
Note: The value entered into the Depth of Cut
DRO field is adjusted within the Z range (the
value entered into the Z End DRO field minus
the value entered into the Z Start DRO field).
6.
Makes cuts in a rectangular spiral from the workpiece
perimeter to the workpiece center.
©Tormach® 2026
Specifications subject to change without notice.
Page 128
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 129

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
For information on using conversational programming in
PathPilot to face a part, see "Create a Face on a Part"
(page 127).
Facing Reference
PathPilot uses the following terms when creating a face on a
part in conversational programming:
l Stepover Indicates how much space PathPilot creates
between each spiral tool path.
l Z Clear Indicates the Z location that the tool moves
(retracts) to when starting or ending a tool pass.
Create a Profile on a Part
Using conversational programming, you can program PathPilot
to take multiple cuts — each following the last — on an
X/Y plane over a Z range to form a boss. For information, see
"About Profiling" (below).
Before You Begin
Before you begin, you must verify that you enter the program
values considering the following:
l The value used in the Radius DRO field must be between
0 and either:
o
One half of the boss' narrow width, or
o
The full radii on the long ends of the boss
l The value used in the Z Clear DRO field must be set to
clear any obstructions between path changes.
To create a profile on a part:
1.
From the Conversational tab, select the Profile tab.
2.
From the Conversational DROs group, set the
parameters for the profiling operation.
Figure 7-17: Conversational DROs on the Profile tab.
3.
Work through the program-specific DRO fields:
a.
In the X Start DRO field and the X End DRO field, type
the location of the workpiece edges.
b.
In the Y Start DRO field and the Y End DRO field, type
the location of the workpiece edges.
c.
In the X Profile Start DRO field, the X Profile End
DRO field, the Y Profile Start DRO field, and the Y
Profile End DRO field, type the location of the
profile's outer edges.
d.
In the Stepover DRO field, type the required distance
between tool paths. If you want a single cut in the
workpiece (to create a slot), type 0.
e.
In the Radius DRO field, type the required radius for
the corners of the profile. For no corner radius, type
0.
f.
In the Z Start DRO field and the Z End DRO field, type
the location for the first and last Z passes. For a
single Z pass at Z End, type 0 — or a full Z range
value — in the Z DOC DRO field.
g.
In the Z DOC DRO field, type the desired amount of
material to remove.
Note: The depth of cut is later adjusted
within the Z range so that each pass in the Z
range has the same depth (rather than the
last Z pass having a short depth of cut).
Figure 7-18: Program-specific DROs on the Profile
tab.
About Profiling
A profiling program is usually used to create a circular or
rectangular boss within a larger piece of stock material. The
outer bound of the area is the stock material's perimeter. The
inner bound of the area is the boss' perimeter.
Profiling in PathPilot
When using a profile routine, each tool pass along the X-/Y-
axis begins off to the side of the workpiece to avoid plunging
into the workpiece. To compensate for this procedure,
PathPilot sets lead-in tool paths outside of the workpiece using
the part's work offsets, the tool's diameter, and the
predetermined stepover value. PathPilot also adjusts the depth
©Tormach® 2026
Specifications subject to change without notice.
Page 129
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 130

of cut to make sure each tool pass has the same depth, rather
than cutting a short depth on the last pass of the program.
When you're creating a profile on a part using conversational
programming, PathPilot does the following in the order listed:
1.
Retracts the tool to the Z Clear position.
Note: The first Z pass cuts at Z Start minus
Depth of Cut adjusted.
2.
Makes a rapid movement to the beginning of the
section.
3.
If required, makes a tool path around the perimeter of
the boss to cut the programmed radii.
Note: Radius cuts use an adjusted feed rate to
compensate for the difference between the
tool's control point rate (at the tool center) and
the actual rate at the radius surface.
4.
Repeats Steps 1-3 for each predefined Z Depth of Cut.
Note: The last Z pass will cut at the Z End
location.
For information on using conversational programming in
PathPilot to create a profile, see "Create a Profile on a Part"
(on the previous page).
Profiling Reference
PathPilot uses the following terms when creating a profile on a
part in conversational programming:
l Stepover Indicates the tool path offset between section
sweeps.
l Z Clear Indicates the Z location the tool moves to or
retracts to when starting or ending a section change,
section sweep, or Z pass.
Create a Pocket on a Part
Using conversational programming, you can program PathPilot
to take multiple cuts — each following the last — on an X/Y
plane over a Z range to form a circular or rectangular pocket.
For information, see "About Pockets" (on the next page).
Before You Begin
Before you begin, you must verify that you enter the program
values considering the following:
l The value used in the Radius DRO field must be between
0 and either:
o
One half of the pocket's narrow width, or
o
The full radii on the long ends of the pocket
To create a circular pocket on a part:
1.
From the Conversational tab, select the Pocket tab.
2.
From the Conversational DROs group, set the
parameters for the pocket operation.
3.
Work through the program-specific DRO fields:
a.
In the X Center DRO field and the Y Center DRO field,
type the location of the pocket's center.
b.
In the Pocket Dia. DRO field, type the required
diameter for the pocket.
Note: The radius of the tool is used to set
the tool path diameter.
c.
In the Stepover DRO field, type the required distance
between each rotation of the spiral cut. For a single
cut around the inside perimeter of the pocket (to
create a slot), type 0.
d.
In the Z Start DRO field and the Z End DRO field, type
the location of the first and last Z passes. For a single
Z pass at the location typed in the Z End DRO field,
type a value of 0 or a full Z range value into the
Depth of Cut DRO field.
©Tormach® 2026
Specifications subject to change without notice.
Page 130
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 131

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
e.
In the Z DOC DRO field, type the desired amount of
material to remove.
Note: The depth of cut is later adjusted
within the Z range so that each pass in the Z
range has the same depth (rather than the
last Z pass having a short depth of cut).
To create a rectangular pocket on a part:
1.
From the Conversational tab, select the Pocket tab.
2.
From the Conversational DROs group, set the
parameters for the pocket operation.
3.
Work through the program-specific DRO fields:
a.
In the X Start DRO field, the X End DRO field, the
Y Start DRO field, and the Y End DRO field, type the
location of the pocket edges.
b.
In the Radius DRO field, type the required radius for
the corners of the pocket. For no corner radius, type
0.
c.
In the Stepover DRO field, type the required distance
between adjacent tool paths. For a single cut around
the inside perimeter of the pocket (to create a slot),
type 0.
d.
In the Z Start DRO field and the Z End DRO field, type
the location of the first and last Z passes. For a single
Z pass at the location typed in the Z End DRO field,
type a value of 0 or a full Z range value into the
Depth of Cut DRO field.
e.
In the Z DOC DRO field, type the desired amount of
material to remove.
Note: The depth of cut is later adjusted
within the Z range so that each pass in the Z
range has the same depth (rather than the
last Z pass having a short depth of cut).
About Pockets
A pocket program is usually used to remove a large amount of
material from a part.
Creating Pockets in PathPilot
For more information about creating a pocket on a part using
conversational programming, see of the following sections,
depending on the shape of the pocket:
l "About Circular Pockets" (below)
l "About Rectangular Pockets" (on the next page)
For information on using conversational programming in
PathPilot to make a pocket on a part, see "Create a Pocket on a
Part" (on the previous page).
About Circular Pockets
PathPilot does one of the following, depending on the
diameter of the tool:
l Tool Diameter Larger Than Pocket Diameter
PathPilot displays an error and does not create any G-
code. You must select a different tool or edit the
diameter of the pocket.
l Tool Diameter Just Small Enough to Fit Within
Pocket Diameter PathPilot does the following in the
order listed:
1.
Uses a straight Z plunge into the pocket center.
You must use a center-cutting end mill.
2.
Makes a single pass around the perimeter of the
pocket at the adjusted Z depth of cut.
3.
Continues to make single passes around the
perimeter of the pocket.
l Pocket Diameter More Than Two Times Tool
Diameter PathPilot does the following in the order
©Tormach® 2026
Specifications subject to change without notice.
Page 131
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 132

listed:
1.
Uses a helical entry into the pocket center.
2.
Makes a hole that is two times the diameter of
the tool diameter in the pocket center.
3.
Makes a spiral cut out from the pocket center to
the pocket diameter.
4.
Makes a cut around the perimeter of the pocket.
About Rectangular Pockets
PathPilot does one of the following, depending on the
diameter of the tool:
l Tool Diameter Larger Than Pocket Width PathPilot
displays an error and does not create any G-code. You
must select a different tool or edit the width of the
pocket.
l Tool Diameter Just Small Enough to Fit Within
Pocket Parameters PathPilot does the following in the
order listed:
1.
Uses a straight Z plunge into the pocket center.
You must use a center-cutting end mill.
2.
Makes a single pass around the perimeter of the
pocket at the adjusted Z depth of cut.
3.
Continues to make single passes around the
perimeter of the pocket.
l Length of Pocket More Than Two Times Diameter
of Tool PathPilot uses a linear ramp entry.
l Pocket Parameters More Than Two Times
Diameter of Tool PathPilot uses a helical entry.
Create Hole Locations on a Part (Drill/Tap)
Using conversational programming, you can program PathPilot
to make multiple holes on a part. For information, see "About
Drilling and Tapping" (on the next page).
Before You Begin
Before you begin, you must verify that you enter the program
values considering the following:
l In the Conversational DROs group, the value in the Z
Clear DRO field must be set to clear any obstructions
between hole changes.
To make a specific hole pattern of evenly spaced holes around
a circumference (also know as a bolt pattern):
1.
From the Conversational tab, select the Drill/Tap tab.
Figure 7-19: Drill/Tap tab on the Conversational tab.
2.
From the Drill/Tap tab, select the Circular tab.
3.
In the Number of Holes DRO field, type the number of
holes (greater than 0) required for the pattern.
4.
In the Start Angle DRO field, type the value of the angle
from angle 0 (from -90 to 90).
5.
In the Diameter DRO field, type the size of the circular
pattern (as defined by a line through the center point of
each hole).
6.
In the Center X DRO field and the Center Y DRO field,
type the location for the center of the hole.
7.
Depending on if you're drilling or tapping the holes, do
one of the following:
l Go to "Create a Drilling Sequence" (on the next page).
l Go to "Create a Tapping Sequence" (page 134).
Use the Location table to make a list of X and Y locations for
each hole using the same tool, the same Z location, and the
same values in the Conversational DROs group.
Note: You can create holes using different tools or
different parameters. You must first post the first
group of hole locations, enter the second group of
hole locations, and then append the second group to
the existing posted file.
To make a hole pattern based on X and Y locations on a part:
1.
From the Conversational tab, select the Drill/Tap tab.
Figure 7-20: Drill/Tap tab on the Conversational tab.
2.
From the Drill/Tap tab, select the Pattern tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 132
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 133

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
3.
In the Location table, select the row, then select the cell
to edit.
Holes indicated in the Location table are completed from
top to bottom.
4.
Depending on if you're drilling or tapping the holes, do
one of the following:
l Go to "Create a Drilling Sequence" (below).
l Go to "Create a Tapping Sequence" (on the next
page).
Tips
l To rearrange the row order, select a row, and then select
Raise or Lower.
l To clear all values in the table, select Clear All.
l To make sure that the value is a valid number, leave the
cell. If the value isn't a valid number, it's erased, and an
error displays on the Status tab.
l Before posting the file, make sure that there are none of
the following:
o
X values without a Y value
o
Y values without an X value
o
An empty row before the last row with values
About Drilling and Tapping
A drilling and tapping program is used to create a series of
holes in defined locations on a part.
Drilling and Tapping in PathPilot
PathPilot has the following options to define the locations:
l Pattern Use X and Y locations to make a list of hole
locations.
l Circular Use a circumference to make a specific pattern
of evenly spaced holes.
For information on using conversational programming in
PathPilot to drill and tap holes, see "Create Hole Locations on a
Part (Drill/Tap)" (on the previous page).
During a drilling routine, PathPilot uses one of the following
canned G-code cycles, depending on the entries in each DRO
field:
l G81 Drill
l G82 Drill with dwell
l G83 Drill with peck
Note: The features can't be combined, because
peck cancels dwell.
When using a tapping routine, PathPilot uses the G84 canned
G-code cycle. G84 is similar to G81, but it commands a spindle
reverse once it gets to the bottom of the hole.
It's important that the Z Feedrate matches the spindle RPM
and tap pitch, so the rate is calculated from the Pitch and RPM
DRO entries. The result is displayed in the Z Feedrate DRO (in
the left panel) after the Enter key is selected in one of the
RPM, Pitch, or TPU DRO fields.
Note: An auto-reversing tapping head typically uses a
drilling cycle.
Create a Drilling Sequence
The Drill tab uses one of the following canned G8x cycles to
drill a hole at each identified location:
l G81 Drill
l G82 Drill with dwell
l G83 Drill with peck
Note: The features can't be combined, because
peck cancels dwell.
Hole depth is usually defined as the full diameter portion of
the hole, so you may need to consider the Z length from the
drill point to the corner.
1.
In the Spot Tool # DRO field, type the number of the spot
drill.
If a valid tool number is used in the Spot Tool
# DRO field, PathPilot makes a spot drilling sequence
before the drilling sequence. In the spot drilling
sequence, PathPilot uses the values indicated in the
Feedrate DRO field, the Spindle RPM DRO field, and the
Z Clear DRO field.
Note: To skip a spot drilling sequence, leave the
Spot Tool # DRO field blank.
©Tormach® 2026
Specifications subject to change without notice.
Page 133
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 134

2.
In the Spot Tool DOC DRO field, type the depth of cut for
the spot drilling sequence.
Note: To skip a spot drilling sequence, leave the
Spot Tool DOC DRO field blank.
3.
In the Peck DRO field, type the distance for each peck.
Note: Any entry greater than 0 typed in the
Peck DRO field replaces G81 with G83 in the G-
code. For information, see "Drilling and Tapping
Reference" (below).
4.
Set the parameters for the hole in the Z range: 
a.
In the Z Start DRO field, type the location for the first
Z pass.
b.
In the Z End DRO field, type the location for the last
Z pass.
Create a Tapping Sequence
The Tap tab uses the G84 canned cycle — it's similar to the
G81 drill cycle, but it commands a spindle reverse once it
reaches the bottom of the hole.
Note: If you're using an auto-reversing tapping head,
use a drilling sequence. Go to "Create a Drilling
Sequence" (on the previous page).
1.
In the Dwell DRO field, type the time — in seconds —
for the tool to pause at the bottom of the hole before
retracting.
A dwell gives the tool time to completely cut the bottom
of the hole.
Note: Any entry greater than 0 typed in the
Dwell DRO field replaces G81 with G82 in the
G-code — unless there is an entry greater than
0 in the Peck DRO field.
2.
Set the parameters for the threads: In the Pitch
(In) DRO field or the Threads/In DRO field, type either
the required pitch or the threads per inch.
Note: The Pitch (In) DRO field and the
Threads/In DRO field are linked — after you
type a value in one and press Enter on the
keyboard, the other is auto-filled.
3.
In the Conversational DROs group, make sure that the
value in the Z Feedrate DRO field is the same as the
value that you set in Step 2.
4.
Set the parameters for the hole in the Z range:
a.
In the Z Start DRO field, type the location for the first
Z pass.
b.
In the Z End DRO field, type the location for the last Z
pass.
Drilling and Tapping Reference
PathPilot uses the following terms when drilling and tapping
on a part in conversational programming:
l Start Angle Specifies the angle from angle 0. Angle 0 is
a base (horizontal) line from the center point going right
(east) to the circumference. The angle from the base
line can be:
o
Positive or negative
o
Up to 90 degrees (or -90 degrees)
A negative angle produces a clockwise rotation; a
positive angle produces a counterclockwise rotation.
o
Rotates the pattern either clockwise or
counterclockwise
For example, to create a hex pattern with flats on the
top and bottom, use a value of 0 in the Start Angle
DRO field. To create a hex pattern with flats on the
left and right sides, use a value of 30 (or -30) in the
Start Angle DRO field.
l Peck The value isn't adjusted: the G83 routine feeds at
the Z Feedrate, starting from Z Clear down to the Peck
distance, then rapid retracts to Z Clear, and rapid returns
to start the next Peck.
Note: The first and last peck will likely be
shorter than the value typed into the
Peck DRO field.
©Tormach® 2026
Specifications subject to change without notice.
Page 134
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 135

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
Create Threads on a Part
Using conversational programming, you can program PathPilot
to take helical tool paths around a boss or inside a hole to
create external or internal threads. For information, see
"About Thread Milling" (below).
Before You Begin
Before you begin, you must verify that you enter the program
values considering the following:
l The auto-filled DRO field values assume a full-form
threaded tool. If you're using a fine-point threaded tool
to cut coarse threads, you must modify the root
diameter to account for the tool's smaller nose radius.
l The value used in the Z Clear DRO field must be such
that it can clear any blockages in the path between the
end of one Z pass and the beginning of the next.
To create threads on a part:
1.
From the Conversational tab, select the Thread Mill tab.
2.
From the Conversational DROs group, set the
parameters for the thread milling operation.
Figure 7-21: Conversational DROs on the Thread Mill
tab.
3.
Depending on the type of threads, do one of the
following:
l For external threading (creating threads on a boss, for
example), select External.
l For internal threading (creating threads inside a hole,
for example), select Internal.
4.
Work through the program-specific DRO fields:
a.
From the Quick Reference drop-down, select the
thread size.
The Threads/In DRO field, Pitch (In) DRO field, Major
Dia. DRO field, and Minor Dia. DRO field auto-fill.
Note: The threads listed follow the current
unit setting: either inches (G20) or
millimeters (G21).
b.
In the Z Start DRO field, type the location of the first
Z pass (where you want the thread to start).
c.
In the Z End DRO field, type the location of the last Z
pass (where you want the thread to end).
Note: The tool actually goes beyond the
value entered in the Z End DRO field, due to
the cutting tip width and the Z component of
the compound feed angle and thread depth.
d.
In the Depth of Cut DRO field or the Number of
Passes DRO field, type a value to represent the
amount of material to remove in each helical pass.
For information, see "Thread Milling Reference" (on
the next page).
Note: The Depth of Cut DRO field and the
Number of Passes DRO field are linked —
after you type a value in one and press Enter
on the keyboard, the other is auto-filled.
Figure 7-22: Program-specific DROs on the Thread
Mill tab.
About Thread Milling
Thread milling is used to make helical tool paths on a part —
either externally, like on a boss, or internally, like in a hole. The
right-handed threads are based on pitch, diameter, and length.
Thread Milling in PathPilot
For information on using conversational programming in
PathPilot to do thread milling, see "Create Threads on a Part"
(above).
©Tormach® 2026
Specifications subject to change without notice.
Page 135
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 136

Thread Milling Reference
PathPilot uses the following terms when creating a thread mill
on a part using conversational programming:
l Major Dia. and Minor Dia. Set the start and end
diameter of the thread peak and valley.
l Depth of Cut Sets the amount of material cut in each
helical pass — the value is the distance (the change in
radius) the tool is fed on the first pass. This first pass
cuts a triangular area which is related to the chip load.
Subsequent cut depths are set to cut the same amount
of area, so the linear feed gets smaller for each pass.
The tool is also fed in on a compound angle of 30
degrees, keeping the cuts to one face of the tool.
Note: The Depth of Cut DRO field and the
Number of Passes DRO field are linked — after
you type a value in one and press Enter on the
keyboard, the other is auto-filled.
l Z Clear The location the tool moves or retracts to when
starting or ending a Z pass.
Create Text to Engrave on a Part
Using conversational programming, you can program PathPilot
to engrave a single line of text on a part. For example, you
could use this feature to engrave True Type stick or outline
fonts into things like simple plaques, control panels, or data
plates. For information, see "About Engraving" (on the next
page).
To create an engraving sequence on a part:
1.
From the Conversational tab, select the Engrave tab.
2.
From the Conversational DROs group, set the
parameters for the engraving operation.
Figure 7-23: Conversational DROs on the Engrave tab.
3.
Work through the program-specific DRO fields:
a.
In the Text DRO field, type the desired text to
engrave.
The text appears in the Preview window.
b.
From the Font list, select the desired font for the
engraved text.
Note: To search the Font list, select a font
and begin typing the font's name. PathPilot
scrolls to the result.
The Preview window updates to display the font
selected.
Note: You can add True Type font files to the
PathPilot controller. For information, see
"Transfer Files to and From the Controller"
(page 181).
c.
Use the Alignment radio buttons to select the desired
alignment of the text: either Left, Center, or Right.
The Preview window updates to display the font
selected.
d.
In the Height DRO field, type the distance in the Y
direction from the top of the text to the bottom of the
text.
PathPilot uses the height value, along with font data,
to calculate scale for character paths in the G-code
program.
Note: The value typed in the Height DRO
field includes ascenders and descenders, but
no the tool cutting diameter. For a more
accurate value, subtract the diameter from
the overall height.
e.
In the X Base DRO field and the Y Base DRO field,
type the location of the left side of the first
character’s baseline.
Note: If any characters in the text have
descenders, like y or g, they extend below
the baseline.
f.
In the Z Start DRO field, type the location of the
surface on which to engrave.
©Tormach® 2026
Specifications subject to change without notice.
Page 136
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 137

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
g.
In the Z Depth of Cut DRO field, type the desired
depth the that the cutting tool is fed into the
workpiece.
h.
In the Z Clear DRO field, type the value for the tool to
move or retract to — in the Z direction — at the start
and end of the engraving sequence and between
characters.
Figure 7-24: Program DROs on the Engrave tab.
About Engraving
Engraving is used to engrave a single line of text cut in a single
horizontal pass along the X-axis of a part.
Import a DXF File
You can import a .dxf file (Drawing Exchange Format) into
PathPilot to generate G-code, which can then cut the shape (or
shapes) described in the .dxf file. For example, you could use
this feature to engrave logos or artwork.
1.
From the Conversational tab, select the DXF tab.
Figure 7-25: DXF tab on the Conversational tab.
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
(page 181).
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
©Tormach® 2026
Specifications subject to change without notice.
Page 137
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 138

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
©Tormach® 2026
Specifications subject to change without notice.
Page 138
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 139

7: PATHPILOT TOOLS AND FEATURES
7.2 Machine Settings and Accessories
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
7.2.12 Enable Feeds and Speeds Suggestions in
Conversational Routines
145
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
7.2.12 Enable Feeds and Speeds Suggestions in
Conversational Routines
You can use PathPilot to automatically calculate feeds and
speeds. For more information, see "Use Feeds and Speeds
Suggestions" (page 166).
From the Settings tab, select Conversational Feeds and
Speeds.
Figure 7-45: Settings tab.
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
Images During an M00 or M01 Break" (page 230).
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
7.5.14 Use Feeds and Speeds Suggestions
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
For more information, see "Use a USB Camera" (page 146).
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
7.5.14 Use Feeds and Speeds Suggestions
Note: Calculating feeds and speeds requires that
PathPilot has relevant details about the tooling. If you
haven't yet done so, go to "Create Tool Descriptions"
(on the next page).
You can use PathPilot to automatically calculate feeds and
speeds: from the Conversational tab, in the Conversational
DROs group, select a material, a sub-type, and a tool.
1.
If you haven't yet done so, enable the conversational
feeds and speeds setting. From the Settings tab, select
Conversational Feeds and Speeds.
Figure 7-103: Settings tab.
2.
From the Conversational tab, locate the Material
dropdowns in the Conversational DROs group.
Figure 7-104: Feeds and speeds suggestions on the
Conversational tab.
3.
From the Material dropdown, select your material (like
Aluminum or Plastic).
4.
If required, from the Sub-Type dropdown, select the
material sub-type (like -any- or 6061).
5.
In the Tool DRO field, type the assigned tool number.
6.
Select Refresh (to the right of the Sub-Type dropdown).
The following machining-related DRO fields are
calculated:
l Spindle RPM
l Feedrate
l Z Feedrate
l Depth of Cut
l Stepover
l Peck (if drilling)
Note: After PathPilot calculates values for the
machining-related DRO fields, the background
turns green.
7.
(Optional) You can adjust the values in the calculated
DRO fields. Adjusting the value in one of these DRO field
doesn't change the value in the other machining-related
DRO fields.
Note: Once you adjust the value in the DRO
field, the background switches from green back
to white. This helps you identify which DRO
fields have suggested values (those with a
green background), and which DRO fields have
values you've supplied (white background).
©Tormach® 2026
Specifications subject to change without notice.
Page 166
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 167

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
Refresh DRO Field Values
The suggested values are no longer valid if:
l You select different material or sub-type values, or if you
type a new value in to the Tool DRO field.
The suggested feeds and speeds are made by taking into
account all of these values. Changing any value requires
you to refresh.
l You select a different Conversational tab.
The suggested feeds and speeds are made by taking into
account the current, specific conversational operation.
Changing your conversational operation requires you to
refresh the feeds and speeds values.
When the feeds and speeds are no longer valid, the Refresh
button turns green, and the machining-related DRO field
backgrounds switch from green to white, as shown in the
following image.
Figure 7-105: Refresh button on the Conversational tab.
Use Additional Provided Information
The following tips are displayed based on the calculations that
PathPilot is performing:
l Chip Load Information Chip load — the amount of
material removed per tooth — is based on the number
of flutes, RPM, and feed rate.
Chip thinning takes the stepover (the horizontal depth of
cut into the workpiece) into account, and provides the
actual chip load.
As the stepover value decreases, the actual chip load
decreases. If the stepover is too small, the cutter may
not have enough contact with the material to cut —
effectively resulting in premature tool wear.
l Cutting Speed Information Cutting speed is the speed
that a given tooth (flute) on the cutter will be moving
when it cuts through the material. All materials have a
documented cutting speed.
In imperial units, cutting speed is measured as surface
feet per minute (SFM).
In metric units, cutting speed is measured as surface
meters per minute (SMM).
l Material Removal Information The material removal
rate (MRR) indicates how much material is removed by
the tool per minute while cutting.
In imperial units, cutting speed is measured as cubic
inches per minute.
In metric units, cutting speed is measured as cubic
centimeters per minute.
Create Tool Descriptions
If desired, you can create tool descriptions in PathPilot.
Detailed tool descriptions allow you to receive feeds and
speeds suggestions in conversational programming. For
information, see "Use Feeds and Speeds Suggestions" (on the
previous page).
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
Figure 7-106: A manually-entered tool description.
Examples
To get accurate machining information, all tooling must be
described with detail: the more detail, the better the results.
©Tormach® 2026
Specifications subject to change without notice.
Page 167
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 168

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
Note: If you don't know the part number, you can
search for the tool at tormach.com.
1.
From the PathPilot interface, on the Offsets tab, in the
Tool Table window, select a blank line.
2.
Type the part number for the tool, like 35571.
The full description and tool diameter for a ShearHog
(PN 35571) displays.
Figure 7-107: An automatically-generated tool
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
©Tormach® 2026
Specifications subject to change without notice.
Page 168
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 169

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
Item
Pattern
Example
Notes
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

## PDF Page 191

FIRST PART TUTORIAL
IN THIS SECTION, YOU'LL LEARN:
How to complete your first project, with all specifications provided by us.
CONTENTS
9.1 About This Tutorial
192
9.2 Before You Begin
193
9.3 Required Items and Tools
194
9.4 Set Up Tooling
195
9.5 Set Up the Machine
196
9.6 Mount the Workpiece
197
9.7 Set the Work Offsets
198
9.8 Set Tool Offsets
200
9.9 Complete the Milling Operations
201


---

## PDF Page 192

9.1 ABOUT THIS TUTORIAL
This tutorial project is a shallow circular pocket with the
letters PCNC engraved into a 2 in. × 4 in. piece of wood.
Figure 9-1: Example of a completed first part tutorial.
Tip! Using a piece of wood reduces the possibility of
damaging a tool if you enter an incorrect work or tool
offset.
©Tormach® 2026
Specifications subject to change without notice.
Page 192
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
9: FIRST PART TUTORIAL
9.1 About This Tutorial


---

## PDF Page 193

9: FIRST PART TUTORIAL
9.2 Before You Begin
9.2 BEFORE YOU BEGIN
This tutorial assumes that you have no prior experience
running a part program on a computer numerically controlled
(CNC) machine. This tutorial will give you an introduction to
the controls of the machine using PathPilot.
The two tools used give an introduction to tool changes and
the difference between work offsets and tool length offsets. If
you have an (optional) Automatic Tool Changer (ATC), we
recommend using manual tool changes in this tutorial to keep
things simple.
©Tormach® 2026
Specifications subject to change without notice.
Page 193
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 194

9.3 REQUIRED ITEMS AND TOOLS
Before you begin, collect the following items and tools:
l A scrap piece of wood (at least 2 in. × 4 in. × 4 in.)
l 1/8 in. end mill
l 3/8 in. end mill
Tip! The Two Flute High-Speed Steel End Mill
Set (PN 33465) includes both end mills, and
three extra — it's a good set to start with.
l Marker
©Tormach® 2026
Specifications subject to change without notice.
Page 194
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
9: FIRST PART TUTORIAL
9.3 Required Items and Tools


---

## PDF Page 195

9: FIRST PART TUTORIAL
9.4 Set Up Tooling
9.4 SET UP TOOLING
Before you begin machining, you must put your cutting tools in
tool holders and measure the tool length offsets for each tool.
9.4.1 Install a Tool in a Set Screw Tool Holder
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
9.4.2 Install a Tool in an ER Collet Tool Holder
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
9.4.3 Install a Drill Chuck in a Jacobs Taper Arbor
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
Page 195
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 196

9.5 SET UP THE MACHINE
1.
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
2.
Verify that the machine can freely move to its reference
position (at the ends of travel).
3.
To verify that the tooling is clear of any possible
obstructions, reference the Z-axis before referencing the
other axes: from the PathPilot interface, select Ref Z.
Figure 9-2: Reference buttons.
4.
Once the spindle is clear of any possible obstructions,
continue referencing all axes.
Note: You can select the buttons one after
another. Once the machine references one axis,
it'll move on to the next.
After each axis is referenced, its button light comes on.
For more information, go to "About Referencing" (below).
9.5.1 About Referencing
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
Page 196
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
9: FIRST PART TUTORIAL
9.5 Set Up the Machine


---

## PDF Page 197

9: FIRST PART TUTORIAL
9.6 Mount the Workpiece
9.6 MOUNT THE WORKPIECE
Put a piece of scrap wood (2 in. × 4 in.) in the vise. Make
sure that the top of the workpiece is at least 1/4 in.
above the top of the vise jaws.
©Tormach® 2026
Specifications subject to change without notice.
Page 197
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 198

9.7 SET THE WORK OFFSETS
Touch off of the workpiece's center to establish the Z work
offsets. Then, use a tool to help you establish the X and Y work
offsets.
9.7.1 Set the Z Zero
This procedure sets a new Z zero position for the currently
selected work offset.
To set a known reference height:
1.
If there's already a tool in the spindle, remove it.
2.
Use a marker to mark the approximate center of the
workpiece.
3.
From the PathPilot interface, in the Tool DRO field, type
0. Then select the Enter key.
Tip! It's important that there's no tool in the
spindle, and that there's no tool commanded in
PathPilot. If a tool was loaded into the spindle,
or even commanded in PathPilot, the Z offset
would account for the programmed tool length.
4.
Slowly jog the Z-axis down (-Z) until it's 0.04 in. (1 mm)
from the workpiece.
5.
Put a piece of paper on the workpiece.
6.
While moving the paper back-and-forth across the
workpiece, slowly step the Z-axis down (-Z) until you feel
a light pull on the piece of paper. This indicates that the
paper is contacting the spindle.
Note: It's easier to use step jogging for this
task. For information on step jogging, see
"About Step Jogging" (page 177).
Figure 9-3: Example of using a piece of paper on the
workpiece.
7.
From the PathPilot interface, in the Z-axis work offset
DRO field, type the thickness of the piece of paper. Then
select the Enter key.
Figure 9-4: Z-axis work offset DRO field.
The reference surface is now set as the Z zero position in
the current coordinate system.
9.7.2 Set the X/Y Zeroes
1.
Put tool 1 (the 3/8-in. end mill) into the spindle.
2.
Jog the tool so that it's close to the mark you put on the
workpiece.
3.
From the PathPilot interface, select Zero X. Then, select
Zero Y.
Figure 9-5: Zero X and Zero Y buttons.
9.7.3 About Work Offsets
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
©Tormach® 2026
Specifications subject to change without notice.
Page 198
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
9: FIRST PART TUTORIAL
9.7 Set the Work Offsets


---

## PDF Page 199

9: FIRST PART TUTORIAL
9.7 Set the Work Offsets
Work Offset Naming
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
9.7.4 About True Positive Tool Length
To conceptualize tool and work offsets, we use the idea of a
true positive tool length. This means that, if you use the face
of the empty spindle to set your work offset and touch off your
tools, the tool length offsets will be equal in value to the
length of the tool.
There are a few benefits to using true positive tool lengths
when measuring tool offsets:
l Looking at the tool length value, you can estimate if it's
correct for a given tool by checking with a ruler or
calipers.
l All of your tools don't have to be measured the same
way — you can mix tools touched off on the machine
with tools measured using a digital height gauge.
l Conceptually, it's easier to understand.
9.7.5 About X/Y Part Zeroes
Common positions for the X and Y part zeros are:
l The back left of the workpiece
l The center of the workpiece
l A feature, like a hole or a boss, that already exists on the
workpiece
©Tormach® 2026
Specifications subject to change without notice.
Page 199
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 200

9.8 SET TOOL OFFSETS
9.8.1 Touch Off the Tool Offsets
1.
Make sure that tool 1 (the 3/8 in. end mill) is in the
spindle.
2.
In the Tool DRO field, type 1. Then, select M6 G43. This
tells the machine that you've changed tools, and want to
apply the tool length offset.
3.
Jog the tool so that it's touching the workpiece.
4.
From the PathPilot interface, on the Offsets tab, type 0
in the Touch DRO field. Then, select Touch Z.
Tip! If you weren't touching on the top of the
workpiece, but instead using a piece of paper
between the workpiece and the tool, you would
enter the thickness of the paper in the Touch
DRO field before you selected Touch Z to
account for the paper thickness.
5.
In the Tool Table window, identify the length entered for
tool 1.
6.
Use a calipers to verify that the length for tool 1 is
correct.
7.
In the Tool Table window, type the diameter of the tool.
Then select the Enter key.
Note: Fractions are converted to their decimal
equivalents.
8.
Put tool 2 (the 1/8 in. end mill) into the spindle.
9.
Repeat Steps 2 through 7 to measure the tool length for
tool 2.
9.8.2 Measure Tools Using a Known Reference
Height
This procedure sets the tool length offset using a known
reference height. If you have not yet done so, you must first set
the Z zero position; go to Set a Known Reference Height.
To measure tools using a known reference height:
1.
From the PathPilot interface, on the Offsets tab, find an
unused tool number in the Tool Table window. Then,
type a description for the tool you're measuring.
2.
Put the tool holder into the spindle.
3.
From the PathPilot interface, in the Tool DRO field, type
the number of the tool. Then select the Enter key.
4.
From the PathPilot interface, on the Offsets tab, in the
Tool Table, select the tool for which you previously wrote
a description.
5.
Select Touch Z.
The length of the tool is stored in the Tool Table
window.
6.
From the Tool Table window, in the Length column,
verify that the length of the tool is correct.
7.
In the Diameter column, type the diameter of the tool.
Then select the Enter key.
©Tormach® 2026
Specifications subject to change without notice.
Page 200
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
9: FIRST PART TUTORIAL
9.8 Set Tool Offsets


---

## PDF Page 201

9: FIRST PART TUTORIAL
9.9 Complete the Milling Operations
9.9 COMPLETE THE MILLING OPERATIONS
There are two milling operations required for this tutorial.
Complete the following steps in the order listed:
9.9.1 Create a Pocket
201
9.9.2 Engrave the Text
202
9.9.1 Create a Pocket
The first step is to mill a pocket into the face of the workpiece
that is 0.100 in. deep and 3-1/4 in. in diameter.
Load the Tool
1.
Put tool 1 (the 3/8 in. end mill) into the spindle.
2.
From the PathPilot interface, in the Tool DRO field, type
1. Then select the Enter key.
Figure 9-6: Tool DRO field.
Write the G-Code with Conversational
1.
From the Conversational tab, select the Pocket tab.
2.
On the Pocket tab, select Rect/Circ.
PathPilot switches the interface to create a circular
pocket.
3.
Type the following values into the DRO fields, and press
Enter on the keyboard after typing each value:
a.
In the Title DRO field, type FIRST PART POCKET.
b.
In the Work Offset DRO field, type G54.
c.
In the Tool DRO field, type 1.
d.
In the Spindle DRO field, type 5000.
e.
In the Feedrate DRO field, type 60.
f.
In the Z Feedrate DRO field, type 30.
g.
In the Z Clear DRO field, type 0.1000.
h.
In the Pocket Dia. DRO field, type 3.2500.
i.
In the Z Start DRO field, type 0.000.
j.
In the Z End DRO field, type -0.1000.
k.
In the Z DOC DRO field, type 0.1000.
l.
In the Stepover DRO field, type 0.2500.
Figure 9-7: Values typed into the DRO fields on the
Pocket tab of the Conversational tab.
4.
From the Conversational tab, select the Drill/Tap tab.
5.
On the Drill/Tap tab, make sure that the Pattern tab is
selected. Then, type the following values into the
following DRO fields:
a.
In the DRO field in the X column of row 1, type
0.0000. Then select the Enter key.
b.
In the DRO field in the Y column of row 1, type
0.0000. Then select the Enter key.
Figure 9-8: Values typed into the DRO fields on the
Pattern tab of the Drill/Tap tab.
6.
From the Conversational tab, select the Pocket tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 201
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 202

7.
Select Post to File.
PathPilot generates the G-code file, and the Save dialog
box displays.
Figure 9-9: Save dialog box.
8.
From the Save dialog box, specify where on the PathPilot
controller to save the G-code file.
9.
Select Save.
PathPilot loads the G-code file and opens the Main tab.
Figure 9-10: Example of the pocket program.
Run the Program
1.
Restrict the speed of the mill so that you can more easily
watch the operation running: Set the Maxvel Override
slider to 0%.
Tip! If you have an optional ATC, this step stops
all motion, and prevents the machine from
changing tools.
2.
Select Cycle Start.
The spindle begins to rotate, but the tool won't move,
because you restricted the speed in Step 1.
3.
Change the value of the Maxvel Override slider to speed
up, slow down, or stop the mill. When the tool is close to
the part, set the Maxvel Override slider to 0%.
4.
On the Main tab, verify the values in the DRO fields to
make sure that they look correct for the current tool
position. Then, slowly move the Maxvel Override slider
to speed up the mill.
E X A M P L E
If the value in the Z DRO field is 0.2500, the tool
should be 1/4 in. above the workpiece.
5.
After the operation is complete, examine the top surface
of the workpiece to make sure that the entire pocket has
been cut by the end mill.
9.9.2 Engrave the Text
Write the G-Code with Conversational
1.
From the PathPilot interface, on the Engrave tab, type
the following values into the DRO fields, and press Enter
on the keyboard after typing each value:
a.
In the Title DRO field, type FIRST PART POCKET.
b.
In the Work Offset DRO field, type G54.
c.
In the Tool DRO field, type 2.
d.
In the Spindle RPM DRO field, type 5000.
e.
In the Feedrate DRO field, type 60.
f.
In the Z Clear DRO field, type 0.1000.
g.
In the Text DRO field, type PCNC.
h.
In the Height DRO field, type 0.7500.
i.
In the X Base DRO field, type 0.0000.
j.
In the Y Base DRO field, type -0.3750.
k.
In the Z Start DRO field, type -0.1000.
l.
In the Z Depth of Cut DRO field, type 0.0500.
Figure 9-11: Example of the values to type on the
Engrave tab of the Conversational tab.
2.
From the Font list, select FreeMonoOblique.ttf.
3.
From the Alignment radio buttons, select Center.
©Tormach® 2026
Specifications subject to change without notice.
Page 202
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
9: FIRST PART TUTORIAL
9.9 Complete the Milling Operations


---

## PDF Page 203

9: FIRST PART TUTORIAL
9.9 Complete the Milling Operations
4.
Select Append to File.
PathPilot generates the G-code file, and the Append to
File dialog box displays.
Figure 9-12: Append to File dialog box.
5.
From the Append to File dialog box, specify to which file
you want to add this operation.
6.
Select Append to File.
PathPilot adds the G-code to the file and opens the Main
tab.
Figure 9-13: Example of the engrave and pocket
program.
Run the Program
Tip! Because you appended the second operation
onto the first, the program starts from the beginning
— it re-cuts the pocket. To avoid this in the future,
you can post the second operation to a separate file.
1.
Select Cycle Start.
The spindle begins to rotate, and the tool moves to the
beginning of the tool path.
2.
After the operation is complete, put tool 2 (the 1/8 in.
end mill) into the spindle.
3.
From the PathPilot interface, in the Tool DRO field, type
2. Then select the Enter key.
4.
Restrict the speed of the mill so that you can more easily
watch the operation running: Set the Maxvel Override
slider to 0%.
5.
Select Cycle Start.
The spindle begins to rotate, and the tool moves to the
beginning of the tool path.
6.
Change the value of the Maxvel Override slider to speed
up, slow down, or stop the speed of the mill.
7.
After the operation is complete, examine the top surface
of the workpiece to make sure that the entire phrase has
been engraved by the end mill.
©Tormach® 2026
Specifications subject to change without notice.
Page 203
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 204

[No extractable text; see original PDF page.]


---

## PDF Page 205

PROGRAMMING
IN THIS SECTION, YOU'LL LEARN:
About the languages that are understood and interpreted by PathPilot.
CONTENTS
10.1 Programming Overview
206
10.2 Programming G-Code
212
10.3 Programming Canned Cycles
224
10.4 Programming M-Code
229
10.5 Programming Input Codes
233
10.6 Advanced Programming
234


---

## PDF Page 206

10.1 PROGRAMMING OVERVIEW
Read the following sections for a G-code overview:
10.1.1 About G-Code Programming Language
206
10.1.2 G-Code Formatting Reference
206
10.1.3 Supported G-Codes Reference
210
10.1.1 About G-Code Programming Language
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
10.1.2 G-Code Formatting Reference
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
1.
A letter other than N or O
2.
A real value
©Tormach® 2026
Specifications subject to change without notice.
Page 206
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.1 Programming Overview


---

## PDF Page 207

10: PROGRAMMING
10.1 Programming Overview
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
V
Synonymous with B
W
Synonymous with C
Letter
Description
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
l It may have any number of digits (subject to line length
limitations).
Note: PathPilot only keeps 17 significant
figures, which is enough for all known
applications.
l A non-zero number with no sign as the first character is
assumed to be positive.
©Tormach® 2026
Specifications subject to change without notice.
Page 207
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 208

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
21.
Home, change coordinate system data (G10) or set
offsets (G92, G94)
22.
Perform motion (G00 to G03, G12, G13, G80 to G89 as
©Tormach® 2026
Specifications subject to change without notice.
Page 208
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.1 Programming Overview


---

## PDF Page 209

10: PROGRAMMING
10.1 Programming Overview
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
2
{G17, G18,
G19, G17.1,
G17.2, G17.3}
Plane selection
Group
Commands
Group Description
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
Group
8
{M07, M08,
M09}
Coolant control (special case:
M07 and M08 may be active at
the same time)
©Tormach® 2026
Specifications subject to change without notice.
Page 209
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 210

Group
Commands
Group Description
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
10.1.3 Supported G-Codes Reference
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
G17, G18,
G19
Plane selection
G20/G21
Length units
G-Code
Description
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
G84
Tapping cycle
G85
Boring cycle
G86
Boring cycle
G88
Boring cycle
G89
Boring cycle
©Tormach® 2026
Specifications subject to change without notice.
Page 210
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.1 Programming Overview


---

## PDF Page 211

10: PROGRAMMING
10.1 Programming Overview
G-Code
Description
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
©Tormach® 2026
Specifications subject to change without notice.
Page 211
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 212

10.2 PROGRAMMING G-CODE
Read the following sections as a G-code reference:
10.2.1 About the Examples Used
212
10.2.2 Rapid Linear Motion (G00)
212
10.2.3 Linear Motion at Feed Rate (G01)
212
10.2.4 Arc at Feed Rate (G02 and G03)
213
10.2.5 Dwell (G04)
215
10.2.6 Set Offsets (G10)
215
10.2.7 Plane Selection (G17, G18, G19)
216
10.2.8 Length Units (G20 and G21)
216
10.2.9 Return to Predefined Position (G28 and G28.1)
216
10.2.10 Return to Predefined Position (G30 and G30.1)
217
10.2.11 Automatically Measure Tool Lengths with an ETS
(G37 and G37.1)
217
10.2.12 Straight Probe (G38.x)
218
10.2.13 Cutter Compensation (G40, G41, G42)
219
10.2.14 Dynamic Cutter Compensation (G41.1 and
G42.1)
219
10.2.15 Apply Tool Length Offset (G43)
220
10.2.16 Engrave Sequential Serial Number (G47)
220
10.2.17 Cancel Tool Length Compensation (G49)
220
10.2.18 Absolute Coordinates (G53)
220
10.2.19 Select Work Offset Coordinate System (G54 to
G54.1 P500)
221
10.2.20 Set Exact Path Control Mode (G61)
221
10.2.21 Set Blended Path Control Mode (G64)
221
10.2.22 Distance Mode (G90 and G91)
221
10.2.23 Arc Distance Mode (G90.1 and G91.1)
221
10.2.24 Temporary Work Offsets (G92, G92.1, G92.2,
and G92.3)
221
10.2.25 Feed Rate Mode (G93, G94, and G95)
222
10.2.26 Spindle Control Mode (G96 and G97)
222
10.2.1 About the Examples Used
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
10.2.2 Rapid Linear Motion (G00)
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
10.2.3 Linear Motion at Feed Rate (G01)
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
©Tormach® 2026
Specifications subject to change without notice.
Page 212
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.2 Programming G-Code


---

## PDF Page 213

10: PROGRAMMING
10.2 Programming G-Code
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
10.2.4 Arc at Feed Rate (G02 and G03)
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
©Tormach® 2026
Specifications subject to change without notice.
Page 213
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 214

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
©Tormach® 2026
Specifications subject to change without notice.
Page 214
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.2 Programming G-Code


---

## PDF Page 215

10: PROGRAMMING
10.2 Programming G-Code
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
10.2.5 Dwell (G04)
For a dwell, program: G04 P~
l P~ is the dwell time (measured in seconds)
Dwell keeps the axes unmoving for the period of time in
seconds specified by the P number.
E X A M P L E
G04 P4.2 (to wait 4.2 seconds)
Troubleshooting
It's an error if:
l The P number is negative
10.2.6 Set Offsets (G10)
Use the controls on the Offsets tab to set offsets. You can
program offsets with the G10 G-code command.
Read the following sections for reference:
Set Tool Table (G10 L1)
215
Set Coordinate System (G10 L2)
215
Set Tool Table (G10 L10)
215
Set Tool Table (G10 L11)
216
Set Coordinate System (G10 L20)
216
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
Set Coordinate System (G10 L2)
To define the origin of a work offset coordinate system,
program: G10 L2 P~ <axes R~>
l P~ is the number of coordinate system to use (G54 = 1,
G59.3 = 9)
l R~ is the rotation about the rotation about the Z-axis
The G10 L2 P~ command doesn't change from the current
coordinate system to the one specified by P. Use G54 through
G59.3 to select a coordinate system.
The coordinate system whose origin is set by a G10 command
may be active or inactive at the time the G10 is executed. If
it's currently active, the new coordinates take effect
immediately. For example, if a G92 origin offset was in effect
before G10 L2, it continues to be in effect after.
Optionally program R to indicate the rotation of the XY axis
around the Z-axis. The direction of rotation is counterclockwise
(viewed from the positive end of the Z-axis). When a rotation
is in effect, jogging an axis only moves that axis in a positive or
a negative direction — not along the rotated axis. To cancel a
rotation for the active coordinate, program G10 L2 P0 R0.
Troubleshooting
It's an error if:
l The P number does not evaluate to an integer in the
range 0-500
l An axis other than X or Z is programmed
Set Tool Table (G10 L10)
To change the tool table entry for tool P so that if the tool
offset is reloaded with the machine in its current position and
with the current G5x and G92 offsets active, program: G10
L10 P~ R~
©Tormach® 2026
Specifications subject to change without notice.
Page 215
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 216

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
l Y~ is the Y-axis coordinate
l Z~ is the Z-axis coordinate
l A~ is the A-axis coordinate
Troubleshooting
It's an error if:
l The P number does not evaluate to an integer in the
range 0 to 9
l An axis other than X, Y, Z, or A is programmed
10.2.7 Plane Selection (G17, G18, G19)
To select the XY-plane as active, program: G17
To select the XZ-plane as active, program: G18
To select the YZ-plane as active, program: G19
The active plane determines how the tool path of an arc (G02
or G03) or canned cycle (G73, G81 through G89) is
interpreted.
10.2.8 Length Units (G20 and G21)
To set length units to inches, program: G20
To set length units to millimeters, program: G21
Tip! Program either G20 or G21 near the beginning
of a program, before any motion occurs. Avoid using
either one anywhere else in the program. It's your
responsibility to make sure that all numbers are
appropriate for use with the current length units.
10.2.9 Return to Predefined Position (G28 and
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
©Tormach® 2026
Specifications subject to change without notice.
Page 216
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.2 Programming G-Code


---

## PDF Page 217

10: PROGRAMMING
10.2 Programming G-Code
To store the current absolute position into parameters 5161-
5163, program: G28.1
If no positions are stored with G28.1, then all axes will go to
the machine origin.
Troubleshooting
It's an error if:
l Cutter Compensation is turned on
10.2.10 Return to Predefined Position (G30 and
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
10.2.11 Automatically Measure Tool Lengths with
an ETS (G37 and G37.1)
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
E~
l H~ saves the measured tool length to the H tool table
entry instead of the current tool number's entry.
You could use this to track tool wear between the two
tool table entries, for example.
Note: The newly measured tool length isn't
applied, but it's stored in the tool table entry
for tool number H.
©Tormach® 2026
Specifications subject to change without notice.
Page 217
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 218

l P~ is a symmetrical tolerance. It measures the tool
length but, instead of storing it in the tool table,
compares it to the length in the tool table. If the
difference exceeds the P tolerance (positive or negative),
the G-code program stops.
For example, G37 P0.005 passes if the measured
length is within ±0.005 of the current tool table length.
Note: MX BT30 tool holders are designed to
seat in the spindle taper, and should never
touch the nose of the spindle.
l E~ overrides the pullout tolerance with the specified
value.
Use E~ together with P~ to set separate thresholds for
tool breakage (P~) and tool pullout (E~), allowing
asymmetric tolerance checking.
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
Note: On MX mills, use the tip of the BT30 drive dog,
not the spindle nose, to reference .
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
10.2.12 Straight Probe (G38.x)
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
©Tormach® 2026
Specifications subject to change without notice.
Page 218
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.2 Programming G-Code


---

## PDF Page 219

10: PROGRAMMING
10.2 Programming G-Code
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
10.2.13 Cutter Compensation (G40, G41, G42)
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
10.2.14 Dynamic Cutter Compensation (G41.1 and
G42.1)
To program dynamic Cutter Compensation to the left of the
programmed tool path, program: G41.1 D~
©Tormach® 2026
Specifications subject to change without notice.
Page 219
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 220

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
10.2.15 Apply Tool Length Offset (G43)
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
10.2.16 Engrave Sequential Serial Number (G47)
To engrave a serial number, either alone or added to the end
of any text, program: Z~ R~ X~ Y~ P~ Q~ D~
l Z~ is the depth of cut of the engraving
l R~ is the retract height between character segments in
the numbers
l X~ is, if present, the starting X position, or the left side
of the serial number
If omitted, the current X position is assumed.
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
10.2.17 Cancel Tool Length Compensation (G49)
To cancel tool length compensation, program: G49
10.2.18 Absolute Coordinates (G53)
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
©Tormach® 2026
Specifications subject to change without notice.
Page 220
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.2 Programming G-Code


---

## PDF Page 221

10: PROGRAMMING
10.2 Programming G-Code
l G53 is used without G00 or G01 being active
l G53 is used while cutter radius compensation is on
10.2.19 Select Work Offset Coordinate System (G54
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
For information, see "About Work Offsets" (page 198).
Troubleshooting
It's an error if:
l One of these G-codes is used while cutter radius
compensation is on
l The X- and Z-axis work offset values are stored in
parameters corresponding to the system in use (i.e.,
System 1 X=5221, Z=5223; System 2 X=5141, Z=5143; up
to System 9 X= 5381, Z = 5383).
10.2.20 Set Exact Path Control Mode (G61)
To put the machining system into exact path mode, program:
G61
10.2.21 Set Blended Path Control Mode (G64)
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
10.2.22 Distance Mode (G90 and G91)
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
10.2.23 Arc Distance Mode (G90.1 and G91.1)
G90.1 – Absolute distance mode for I and K offsets. When
G90.1 is in effect, I and K both must be specified with
G02/G03 for the XZ plane or it is an error.
G91.1 – Incremental distance mode for I and K offsets.
G91.1 returns I and K to their default behavior.
10.2.24 Temporary Work Offsets (G92, G92.1, G92.2,
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
©Tormach® 2026
Specifications subject to change without notice.
Page 221
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 222

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
To reset axis offsets to zero and sets parameters 5211 - 5219
to zero, program: G92.1
To reset axis offsets to zero, program: G92.2
To set the axis offset to the values saved in parameters 5211
to 5219, program: G92.3
10.2.25 Feed Rate Mode (G93, G94, and G95)
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
10.2.26 Spindle Control Mode (G96 and G97)
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
©Tormach® 2026
Specifications subject to change without notice.
Page 222
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.2 Programming G-Code


---

## PDF Page 223

10: PROGRAMMING
10.2 Programming G-Code
When using G96 (the most common mode of machine
operation), X0 in the current coordinate system (including
offsets and tool lengths) must be the spindle axis.
To set RPM mode, program: G97
Troubleshooting
It's an error if:
l S is not specified with G96
l A feed move is specified in G96 mode while the spindle
is not turning
©Tormach® 2026
Specifications subject to change without notice.
Page 223
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 224

10.3 PROGRAMMING CANNED CYCLES
Read the following sections for reference:
10.3.1 Canned Cycles Reference
224
10.3.2 High Speed Peck Drill (G73)
225
10.3.3 Cancel Canned Cycles (G80)
225
10.3.4 Drilling Cycle (G81)
225
10.3.5 Simple Drilling Cycle (G82)
227
10.3.6 Peck Drilling Cycle (G83)
227
10.3.7 Tapping Cycle (G84)
227
10.3.8 Boring Cycle (G85)
227
10.3.9 Boring Cycle (G86)
228
10.3.10 Boring Cycle (G88)
228
10.3.11 Boring Cycle (G89)
228
10.3.1 Canned Cycles Reference
Supported Canned Cycles
Canned Cycle
Description
G73
High speed peck drilling cycle
G80
Cancel active canned cycle
G81
Simple drilling cycle
G82
Simple drilling with dwell cycle
G83
Peck drilling cycle
G84
Tapping cycle
G85
Boring cycle – feedrate out
G86
Boring cycle – stop, rapid out
G88
Boring cycle – stop, manual out
G89
Boring cycle – dwell, feedrate out
All canned cycles are performed with respect to the active
plane. The descriptions we use assume the XY-plane has been
selected. The behavior is always analogous if the YZ- or XZ-
plane is selected.
l X~ is the X-axis coordinate
l Y~ is the Y-axis coordinate
l Z~ is the Z-axis coordinate
l A~ is the A-axis coordinate
l R~ is the retract position along the axis perpendicular to
the currently selected plane (Z-axis for XY-plane, X-axis
for YZ-plane, Y-axis for XZ-plane)
l L~ is the L number is optional and represents the
number of repeats
All canned cycles use X, Y, Z, and R words. The R word sets the
retract position; this is along the axis perpendicular to the
currently selected plane (Z-axis for XY-plane, X-axis for YZ-
plane, Y-axis for XZ-plane). Some canned cycles use additional
arguments.
Rotational axis (A-axis) words are allowed in canned cycles,
but it's better to omit them. If rotational axis words are used,
the numbers must be the same as the current position
numbers so that the rotational axes do not move.
The R number is always sticky — it keeps its value on
subsequent blocks if they're not explicitly programmed to be
different.
In absolute distance mode (G90), the X, Y, R, and Z numbers
are absolute positions in the current coordinate system.
In incremental distance mode (G91), when the XY-plane is
selected, X, Y, and R numbers are treated as increments to the
current position and Z as an increment from the Z-axis position
before the move involving Z takes place; when the YZ- or XZ-
plane is selected, treatment of the axis words is analogous.
Many canned cycles use the L word. The L word is optional and
represents the number of repeats. L0 is not allowed. The L
word is not sticky. The interpretation of the L word depends on
the active distance mode:
l In incremental distance mode (G91), L > 1 in
incremental mode means (with the XY-plane selected),
that the X and Y positions are determined by adding the
given X and Y numbers either to the current X and Y
positions (on the first iteration) or to the X and Y
positions at the end of the previous go-around (on the
subsequent repetitions). The R and Z positions do not
change during the repeats
l In absolute distance mode (G90), L > 1 means do the
same cycle in the same place several times. Omitting
the L word is equivalent to specifying L=1
The height of the retract move at the end of each repeat —
called clear Z — is determined by the setting of the retract
mode: either to the original Z position (if that is above the R
position and the retract mode is G98) or otherwise to the R
position.
Troubleshooting
It's an error if:
©Tormach® 2026
Specifications subject to change without notice.
Page 224
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.3 Programming Canned Cycles


---

## PDF Page 225

10: PROGRAMMING
10.3 Programming Canned Cycles
l X, Y, and Z words are all missing during a canned cycle
l A P number is required and a negative P number is used
l An L number is used that does not evaluate to a positive
integer
l Rotational axis motion is used during a canned cycle
l Inverse time feed rate is active during a canned cycle
l Cutter radius compensation is active during a canned
cycle
When the XY plane is active, the Z number is sticky and it's an
error if:
l The Z number is missing and the same canned cycle was
not already active
l The R number is less than the Z number
When the XZ plane is active, the Y number is sticky and it's an
error if:
l The Y number is missing and the same canned cycle was
not already active
l The R number is less than the Y number
When the YZ plane is active, the X number is sticky and it's an
error if:
l The X number is missing and the same canned cycle was
not already active
l The R number is less than the X number
At the very beginning of the execution of any of the canned
cycles (with the XY-plane selected), if the current Z position is
below the R position, the Z-axis will move in rapid motion to
the R position. This happens only once, regardless of the value
of L. In addition, at the beginning of the first cycle and each
repeat, the following one or two moves are made:
l A straight traverse parallel to the XY-plane to the given
XY-position
l A straight traverse of the Z-axis only to the R position, if
it is not already at the R position
If the XZ- or YZ-plane is active, the preliminary and in-between
motions are analogous.
10.3.2 High Speed Peck Drill (G73)
The G73 cycle is intended for deep drilling with chip breaking.
The retracts in this cycle break the chip but do not totally
retract the drill from the hole. It's suitable for tools with long
flutes which clear the broken chips from the hole.
Program: G73 X~ Z~ R~ L~ Q~
l Q~ is the delta increment along the Z-axis
The G73 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate downward by delta or to the Z position
(whichever is less deep).
Step 3: Rapid back incrementally in Z 0.010 in.
Step 4: Repeat Step 1 through 3 until the Z
position is reached at Step 1.
Step 5: Rapid back down to the current hole
bottom, backed off a bit.
Step 6: Retract the Z-axis at traverse rate to clear
Z.
Troubleshooting
It's an error if:
l The Q number is negative or zero
l The R number is not specified
10.3.3 Cancel Canned Cycles (G80)
To cancels all canned cycles, program: G80
It's okay to program G80 if no canned cycles are in effect.
After a G80, the motion mode must be set with G00 (or any
other motion mode G word). If motion mode is not set after
G80, this error message appears: "Cannot use axis values
without a g code that uses them."
10.3.4 Drilling Cycle (G81)
The G81 cycle is intended for drilling.
Program: G81 X~ Y~ Z~ A~ R~ L~
The G81 Cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate to the Z position.
Step 3: Retract the Z-axis at traverse rate to clear
Z.
Examples
These examples demonstrate how the G81 canned cycle works
in detail. Other canned cycles work in a similar manner.
©Tormach® 2026
Specifications subject to change without notice.
Page 225
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 226

E X A M P L E
The current position is (1, 2, 3), the XY-plane has been
selected, and the following line of code is interpreted:
G90 G81 G98 X4 Y5 Z1.5 R2.8
This means that it's in absolute distance mode (G90),
old Z retract mode (G98) and the G81 drilling cycle is
performed once. The X number and X position are 4. The
Y number and Y position are 5. The Z number and Z
position are 1.5. The R number and clear Z are 2.8. The
following moves take place:
1.
G00 motion parallel to the XY-plane to (4,5,3)
2.
G00 motion parallel to the Z-axis to (4,5,2.8)
3.
G01 motion parallel to the Z-axis to (4,5,1.5)
4.
G00 motion parallel to the Z-axis to (4,5,3)
E X A M P L E
The current position is (1, 2, 3), the XY-plane has been
selected, the following line of code is interpreted: G91
G81 G98 X4 Y5 Z-0.6 R1.8 L3
This means that it's in incremental distance mode
(G91), old Z retract mode, and the G81 drilling cycle is
repeated three times. The X number is 4, the Y number
is 5, the Z number is -0.6 and the R number is 1.8. The
initial X position is 5 (=1+4), the initial Y position is 7
(=2+5), the clear Z position is 4.8 (=1.8+3) and the Z
position is 4.2 (=4.8-0.6). Old Z is 3.0.
The first move is a traverse along the Z-axis to (1,2,4.8),
since old Z < clear Z.
The first repeat consists of three moves:
1.
G00 motion parallel to the XY-plane to (5,7,4.8)
2.
G01 motion parallel to the Z-axis to (5,7, 4.2)
3.
G00 motion parallel to the Z-axis to (5,7,4.8)
The second repeat consists of three moves. The X
position is reset to 9 (=5+4) and the Y position to 12
(=7+5):
1.
G00 motion parallel to the XY-plane to (9,12,4.8)
2.
G01 motion parallel to the Z-axis to (9,12, 4.2)
3.
G00 motion parallel to the Z-axis to (9,12,4.8)
The third repeat consists of three moves. The X position
is reset to 13 (=9+4) and the Y position to 17 (=12+5):
1.
G00 motion parallel to the XY-plane to (13,17,4.8)
2.
G01 motion parallel to the Z-axis to (13,17, 4.2)
3.
G00 motion parallel to the Z-axis to (13,17,4.8)
Example code using G81 cycle:
(Sample Program G81EX18:)
(Workpiece Size: X4, Y3, Z1)
(Tool: Tool #6, 3/4” HSS DRILL)
(Tool Start Position: X0, Y0, Z1)
N2 G90 G80 G40 G54 G20 G17 G94 G64 (Safety Block)
N5 G90 G80 G20
N10 M06 T6 G43 H6
N15 M03 S1300
N20 G00 X1 Y1
N25 Z0.5
N30 G81 Z-0.25 R0.125 F5 (Drill Cycle Invoked)
N35 X2
N40 X3
N45 Y2
©Tormach® 2026
Specifications subject to change without notice.
Page 226
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.3 Programming Canned Cycles


---

## PDF Page 227

10: PROGRAMMING
10.3 Programming Canned Cycles
N50 X2
N55 X1
N60 G80 G00 Z1 (Cancel Canned Cycles)
N65 X0 Y0
N70 M05
N75 M30
10.3.5 Simple Drilling Cycle (G82)
The G82 cycle is intended for drilling.
Program: G82 X~ Y~ Z~ A~ R~ L~ P~
The G82 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate to the Z position.
Step 3: Dwell for the P number of seconds.
Step 4: Dwell for the P number of seconds.
10.3.6 Peck Drilling Cycle (G83)
The G83 cycle (often called peck drilling) is intended for deep
drilling or milling with chip breaking. The retracts in this cycle
clear the hole of chips and cut off any long stringers (which are
common when drilling in aluminum).
Program: G83 X~ Y~ Z~ A~ R~ L~ Q~
l Q~ is a delta increment along the Z-axis
The G83 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate downward by delta or to the Z position,
whichever is less deep.
Step 3: Rapid back out to the clear Z.
Step 4: Repeat Steps 1 through 3 until the Z
position is reached at Step 1.
Step 5: Rapid back down to the current hole
bottom, backed off a bit.
Step 6: Retract the Z-axis at traverse rate to clear
Z.
Troubleshooting
It's an error if:
l The Q number is negative or zero
10.3.7 Tapping Cycle (G84)
The G84 cycle is intended for tapping. This cycle rotates the
spindle clockwise to tap a pre-drilled hole; when the bottom of
the hole is reached, the spindle rotates in the reverse direction
and exits the hole.
Program: G84 X~ Y~ Z~ R~ P~ F~
l X~ is the position of the hole on the X-axis
l Y~ is the position of the hole on the Y-axis
l Z~ is the depth, tapping from the R-plane to the Z-depth
l R~ is the position of the retract plane (R-plane)
l P~ is the number of seconds to dwell
l F~ is the feed rate
The G84 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Start the spindle forward.
Step 3: Move the Z-axis at the programmed feed
rate (F~) to the Z-depth.
Step 4: Reverse the spindle.
Step 5: Dwell for the P number of seconds.
Step 6: Retract the Z-axis at the programmed feed
rate (F~) to the R-plane.
This cycle uses a P word, where P specifies the number of
seconds to dwell. The P word is optional – if it is not included,
PathPilot calculates a dwell for you (half of a second per 1000
RPM).
Spindle speed must be commanded before calling a G84 cycle.
Feed rate override is ignored during a tapping cycle. Feedhold
is ignored until the return operation is executed. After the
tapping operation is completed, either a G98 or G99 command
controls the return height — G99 returns the tool to the R-
plane; G98 returns the tool to the initial height.
E X A M P L E
N40 T51 G43 H51 M6
N45 S400 M3
N50 G54
N55 M8
N65 G0 X0.5 Y-0.75
N70 G43 Z0.6 H51
N80 G0 Z0.2
N85 S400
N90 G98 G84 X0.5 Y-0.75 Z-0.605 R0.2 F20.
N95 X1.0 Y -1.25
N100 G80
N105 G0 Z0.6
10.3.8 Boring Cycle (G85)
The G85 cycle is intended for boring or reaming, but could be
used for drilling or milling.
©Tormach® 2026
Specifications subject to change without notice.
Page 227
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 228

Program: G85 X~ Y~ Z~ A~ R~ L~
The G85 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate to the Z position.
Step 3: Retract the Z-axis at the current feed rate
to clear Z.
10.3.9 Boring Cycle (G86)
The G86 cycle is intended for boring. This cycle uses a P
number for the number of seconds to dwell.
Program: G86 X~ Y~ Z~ A~ R~ L~ P~
The G86 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate to the Z position.
Step 3: Dwell for the P number of seconds.
Step 4: Stop the spindle turning.
Step 5: Retract the Z-axis at traverse rate to clear
Z.
Step 6: Restart the spindle in the direction it was
going.
Step 7: Move the Z-axis only at the current feed
rate to the Z position.
Troubleshooting
It's an error if:
l The spindle is not turning before this cycle is executed
10.3.10 Boring Cycle (G88)
The G88 cycle is intended for boring and uses a P word, where
P specifies the number of seconds to dwell.
Program: G88 X~ Y~ Z~ A~ R~ L~ P~
The G88 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate to the Z position.
Step 3: Dwell for the P number of seconds.
Step 4: Stop the spindle turning.
Step 5: Stop the program so the operator can
retract the spindle manually.
Step 6: Restart the spindle in the direction it was
going.
10.3.11 Boring Cycle (G89)
The G89 cycle is intended for boring. This cycle uses a P
number, where P specifies the number of seconds to dwell.
Program: G89 X~ Y~ Z~ A~ R~ L~ P~
The G89 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate to the Z position.
Step 3: Dwell for the P number of seconds.
Step 4: Retract the Z-axis at the current feed rate
to clear Z.
©Tormach® 2026
Specifications subject to change without notice.
Page 228
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.3 Programming Canned Cycles


---

## PDF Page 229

10: PROGRAMMING
10.4 Programming M-Code
10.4 PROGRAMMING M-CODE
Read the following sections for reference:
10.4.1 Supported M-Codes Reference
229
10.4.2 Program Stop and Program End (M00, M01, M02,
and M30)
229
10.4.3 Spindle Control (M03, M04, and M05)
230
10.4.4 Tool Change (M06)
230
10.4.5 Coolant Control (M07, M08, and M09)
231
10.4.6 Override Control (M48 and M49)
231
10.4.7 Feed Override Control (M50)
231
10.4.8 Spindle Speed Override Control (M51)
231
10.4.9 Set Current Tool Number (M61)
231
10.4.10 Set Output State (M64 and M65)
231
10.4.11 Wait on Input (M66)
232
10.4.12 USB Camera Control (M301, M302, M303)
232
10.4.1 Supported M-Codes Reference
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
M65
Deactivate output relays
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
M301,
M302,
M303
USB camera control
10.4.2 Program Stop and Program End (M00, M01,
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
No more lines of code in the file are executed after the M02 or
M30 command is executed. Selecting Cycle Start starts the
program back at the beginning of the file.
©Tormach® 2026
Specifications subject to change without notice.
Page 229
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 230

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
For more information, see "Use a USB Camera" (page 146).
10.4.3 Spindle Control (M03, M04, and M05)
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
10.4.4 Tool Change (M06)
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
©Tormach® 2026
Specifications subject to change without notice.
Page 230
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.4 Programming M-Code


---

## PDF Page 231

10: PROGRAMMING
10.4 Programming M-Code
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
10.4.5 Coolant Control (M07, M08, and M09)
To turn coolant on, program: M07
To turn flood coolant on, program: M08
To turn all coolant off, program: M09
It's always okay to use any of these commands, regardless of
what coolant is on or off.
10.4.6 Override Control (M48 and M49)
To enable the speed and feed override, program: M48
To disable both overrides, program: M49
It's okay to enable or disable the switches when they are
already enabled or disabled.
10.4.7 Feed Override Control (M50)
To enable the feed rate override control, program: M50 P1
The P1 is optional.
To disable the feed rate control, program: M50 P0
When feed rate override control is disabled, the feed rate
override slider has no influence, and all motion is executed at
programmed feed rate (unless there is an adaptive feed rate
override active).
10.4.8 Spindle Speed Override Control (M51)
To enable the spindle speed override control, program: M51
P1
The P1 is optional.
To disable the spindle speed override control, program: M51
P0
When spindle speed override control is disabled, the spindle
speed override slider has no influence, and the spindle speed is
equal to the value of the S word.
10.4.9 Set Current Tool Number (M61)
To change the current tool number while in MDI or manual
mode, program: M61 Q~
l Q~ is the tool number
Troubleshooting
It's an error if:
l Q~ is not 0 or greater
10.4.10 Set Output State (M64 and M65)
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
©Tormach® 2026
Specifications subject to change without notice.
Page 231
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 232

10.4.11 Wait on Input (M66)
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
10.4.12 USB Camera Control (M301, M302, M303)
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
For more information, see "Use a USB Camera" (page 146).
©Tormach® 2026
Specifications subject to change without notice.
Page 232
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.4 Programming M-Code


---

## PDF Page 233

10: PROGRAMMING
10.5 Programming Input Codes
10.5 PROGRAMMING INPUT CODES
Read the following sections for reference:
10.5.1 Feed Rate (F)
233
10.5.2 Spindle Speed (S)
233
10.5.3 Change Tool Number (T)
233
10.5.1 Feed Rate (F)
To set the feed rate, program: F~
Depending on the setting of the feed mode toggle, the rate
may be in units-per-minute or units-per-rev of the spindle. The
units are those defined by the G20/G21 mode. The feed rate
may sometimes be overridden.
10.5.2 Spindle Speed (S)
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
10.5.3 Change Tool Number (T)
It's your responsibility to make sure that the machine is in a
safe place for changing tools (for example, by using G30). This
allows optimization of motion which can save time. You can
provide a pause for manual intervention with M00 or M01
before the tool change.
Troubleshooting
It's an error if:
l A negative T number is used
l A T number larger than 1000 is used
©Tormach® 2026
Specifications subject to change without notice.
Page 233
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 234

10.6 ADVANCED PROGRAMMING
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
10.6.1 Parameters
234
10.6.2 Expressions
236
10.6.3 Subroutines
237
10.6.1 Parameters
Read the following sections for reference:
Parameters Reference
234
Numbered Parameters Reference
235
Subroutine Parameters Reference
235
Named Parameters Reference
235
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
©Tormach® 2026
Specifications subject to change without notice.
Page 234
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.6 Advanced Programming


---

## PDF Page 235

10: PROGRAMMING
10.6 Advanced Programming
assigned a value). Subroutine parameters, numbered
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
You can’t access a local parameter outside of its subroutine.
This is so two subroutines can use the same parameter names
©Tormach® 2026
Specifications subject to change without notice.
Page 235
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 236

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
10.6.2 Expressions
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
236
Functions Reference
236
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
©Tormach® 2026
Specifications subject to change without notice.
Page 236
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.6 Advanced Programming


---

## PDF Page 237

10: PROGRAMMING
10.6 Advanced Programming
l FIX[arg]: Round down to integer
l FUP[arg]: Round up to integer
l ROUND[arg]: Round to nearest integer
l LN[arg]: Base-e logarithm
l SIN[arg]: Sine
l SQRT[arg]: Square root
l TAN[arg]: Tangent
l EXISTS[arg]: Check named parameter
10.6.3 Subroutines
Subroutines are subprograms that are called from inside
another program.
Read the following sections for reference:
Subroutines Reference
237
Conditional Subroutines Reference
238
Repeating Subroutines Reference
238
Looping Subroutines Reference
238
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
©Tormach® 2026
Specifications subject to change without notice.
Page 237
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 238

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
©Tormach® 2026
Specifications subject to change without notice.
Page 238
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support
10: PROGRAMMING
10.6 Advanced Programming


---

## PDF Page 239

10: PROGRAMMING
10.6 Advanced Programming
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
©Tormach® 2026
Specifications subject to change without notice.
Page 239
UM10586: 1100MX Operator's Manual(Version 0626A)
For the most recent version, see tormach.com/support


---

## PDF Page 240

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
