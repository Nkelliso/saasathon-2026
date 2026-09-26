# Tormach 24R CNC Router Operator Manual - UM10564, 0826A

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

## PDF Page 5

IMPORTANT INFORMATION: PLEASE READ FIRST
3
SAFETY
19
1.1 Intended Use
20
1.2 Machine Standards
21
1.2.1 American National Safety Institute (ANSI)
21
1.2.2 Occupational Safety and Health Administration (OSHA)
21
1.3 Safety Overview
22
1.3.1 Safety Messages
22
Personal Injury
22
Property Damage
22
1.3.2 Safety Decals
22
On the Electrical Cabinet Door
22
Next to the Main Disconnect
23
On the Spindle Head
23
On the Gantry and the Spindle Head
24
1.3.3 Information Decals
24
Serial Number Plate
24
1.4 Machine Safety
25
1.4.1 General Shop Safety
25
1.4.2 Operational Safety
25
General
25
Tooling
26
Workholding
26
1.4.3 Electrical Safety
27
ABOUT YOUR MACHINE
29
2.1 Performance Expectations
30
2.1.1 Cutting Performance
30
2.1.2 Resolution and Accuracy
30
2.2 Machine Specifications
31
SITE REQUIREMENTS
33
3.1 General Site and Space Requirements
34
3.1.1 Site Requirements
34
3.1.2 Space Requirements
34
3.1.3 Operator Workstation Reference
34
3.2 Electrical and Power Requirements
36
3.2.1 Electrical Requirements
36
3.2.2 Power Requirements
36
TABLE OF CONTENTS


---

## PDF Page 6

©Tormach® 2026
Specifications subject to change without notice.
Page 6
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
3.2.3 Options for Non-Conforming Sites
36
INSTALLATION
37
4.1 Before You Begin
38
4.1.1 Packing List
38
4.1.2 Installation Tools and Items
38
4.2 Move the Pallet
40
4.3 Unpack the Machine Crate
41
4.4 Lift and Move the Machine
42
4.5 Level the Machine
44
4.6 Install the Controller Arm
45
4.7 Install the Controller
48
4.7.1 Install the PathPilot Operator Console
48
4.7.2 Install the Monitor
51
Install the PathPilot Controller
52
4.8 Make Water Chiller Connections
54
4.9 Verify the Installation
55
4.9.1 Power on the Machine
55
4.9.2 Verify Limit Switch Function
56
4.9.3 Verify Axes Function
57
4.9.4 Verify Spindle Function
57
4.9.5 Power off the Machine
58
4.10 Install Accessory Components
59
4.10.1 Install the Automatic Tool Changer
59
Air Requirements
59
Required Tools
59
Remove the Existing Spindle (ER20)
59
Install the New Spindle (ISO20)
61
Rewire the ATC Cable
63
Install the Solenoid Tray
65
Connect the Filter-Regulator-Lubricator (FRL) to the Rear of the Machine
66
Connect the Air Lines to the Spindle
67
Install the Power Drawbar Button
67
Install the Lifting Dust Shoe
68
Install the ATC Communication Board
69
Install the ATC Rack
70
Prepare the Machine
70
Remove Linear Rail Cover Punch-Outs
70
Mount the ATC Rack
71
Inspect the ATC Control Board
72
Adjust the ATC Air Pressure Settings
72
Pressure Control Settings Overview
72
Adjust the Spindle Nose Air Seal and Dust Shoe Extend Pressure Regulator
73
Adjust the Dust Shoe Lift Pressure Regulator
73
Adjust the Dust Shoe Lift Speed Control Valve
74
TABLE OF CONTENTS


---

## PDF Page 7

©Tormach® 2026
Specifications subject to change without notice.
Page 7
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
Verify the Power Drawbar Function
74
Verify the Spindle Direction
75
Align the ATC Rack
76
Run the Spindle Break-In Program
77
4.10.2 Install the Vacuum Pump
77
4.10.3 Install the Dust Collector
77
4.11 Set Up the PathPilot Controller
78
4.11.1 Specify the Date and Time
78
4.11.2 Specify the Keyboard Language
78
4.11.3 Configure the Optional Touch Screen Kit
78
4.11.4 Update PathPilot
78
SYSTEM BASICS
79
5.1 System Reference
80
5.1.1 Machine Table
80
Vacuum Workholding
80
5.1.2 Spindle
80
About the Spindle
80
5.1.3 Axes
80
5.2 Basic Controls Reference
81
5.2.1 Machine Controls
81
5.2.2 PathPilot Interface
81
5.3 Connectors Reference
82
PATHPILOT INTERFACE OVERVIEW
85
6.1 About PathPilot
86
6.2 Notebook Section
87
6.2.1 Main Tab
87
6.2.2 File Tab
87
6.2.3 Settings Tab
87
6.2.4 Offsets Tab
88
6.2.5 Conversational Tab
88
6.2.6 Probe/ETS Tab
88
6.2.7 Status Tab
88
6.3 Persistent Controls
90
6.3.1 Program Control Area
90
6.3.2 Position Status Area
90
6.3.3 Manual Control Area
90
6.4 Keyboard Shortcuts
92
6.5 Manage PathPilot Versions
93
6.5.1 Download and Install an Update File from the Controller
93
6.5.2 Install an Update File from a USB Drive
93
6.5.3 Install a Previous Version of an Update File
94
PATHPILOT TOOLS AND FEATURES
95


---

## PDF Page 8

©Tormach® 2026
Specifications subject to change without notice.
Page 8
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7.1 Create and Load G-Code Files
96
7.1.1 Load G-Code
96
Transfer Files to and From the Controller
96
Preview G-Code Files
96
Access Recent G-Code Files
97
Close the Current Program
97
7.1.2 Edit G-Code
97
Edit G-Code with a Text Editor
97
Edit G-Code with Conversational Programming
97
Change the Step Order
98
Create a New Job Assignment
98
Load an Existing G-Code File
98
Edit a Job Assignment
98
7.1.3 Read G-Code
98
Expand the G-Code Tab
98
About the G-Code Tab
98
Search in the Code
99
Set a New Start Line
99
Lead-In Moves
100
Change the View of the Tool Path Display
100
About the Tool Path Display
101
7.1.4 Use Conversational Programming
101
About Conversational Programming
101
Create a Face on a Part
101
About Facing
102
Facing in PathPilot
102
Facing Reference
103
Create a Profile on a Part
103
About Profiling
103
Profiling in PathPilot
103
Profiling Reference
104
Create a Pocket on a Part
104
About Pockets
105
Creating Pockets in PathPilot
105
About Circular Pockets
105
About Rectangular Pockets
106
Create Hole Locations on a Part (Drill)
106
About Drilling
107
Create a Drilling Sequence
107
Drilling Reference
107
Create Threads on a Part
108
About Thread Milling
109
Thread Milling in PathPilot
109
Thread Milling Reference
109
Create Text to Engrave on a Part
109
TABLE OF CONTENTS


---

## PDF Page 9

©Tormach® 2026
Specifications subject to change without notice.
Page 9
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
About Engraving
110
Import a DXF File
110
Working with Layers and Shapes
111
Change the Layer or Shape Cut Order
111
Adjust the Tree View Window
111
Working in the Preview Window
111
7.2 Machine Settings and Accessories
112
7.2.1 Enable an Internet Connection
112
Enable Automatic Updates
112
7.2.2 Change the Network Name
112
7.2.3 Change the Screen Orientation
113
About Portrait Screen Layout
113
7.2.4 Disable Limit Switches
114
About Limit Switches
115
7.2.5 Limit G30 Moves
115
About G30
115
7.2.6 Enable the On-Screen Keyboard
115
About Soft Keyboards
116
7.2.7 Enable the USB M-Code I/O Interface Kit
116
7.2.8 Enable Tooltips
116
7.2.9 Enable Feeds and Speeds Suggestions in Conversational Routines
116
7.2.10 Specify Probing and Tool Measuring Options
116
7.2.11 Use a USB Camera
117
About USB Cameras
117
Manual Recording
117
Automatic E-Stop Loop Recording ("Dashcam")
118
Review Video and Image Files
118
File Naming Convention
119
G-Code Commands
119
File Naming Conventions
119
Use M01 to Take Pictures
119
7.3 Set Up G-Code Programs
120
7.3.1 Use a Probe with PathPilot
120
Set Up the Probe
120
Use a Probe to Find a Feature's Location
120
Use a Probe to Set Work Offset Zeroes
120
Set the X and Y Work Offset Zero on the Corner of a Feature
120
Set the Work Offset Zeroes on a Feature
120
Use a Probe to Find the Center of a Feature
121
Find the Center of a Pocket
121
Find the Center of a Slot
121
Find the Center of a Rectangular Boss
121
Find the Center of a Circular Boss
121
Find the Center Rotation of an A-Axis
122
7.3.2 Set Tool Length Offsets
122


---

## PDF Page 10

©Tormach® 2026
Specifications subject to change without notice.
Page 10
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
About Tool Offsets
122
Touch Off the Tool Length Offsets
123
Set a Known Reference Height
123
Measure Tools Using a Known Reference Height
123
Measure Tools Using an Electronic Tool Setter (ETS)
124
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
7.3.3 Set Work Offsets
127
Set the Z-Axis Work Offset with an Electronic Tool Setter (ETS)
128
About Work Offsets
128
7.3.4 View Work Offsets
129
7.3.5 View Available G-Code Modes
129
7.4 Run G-Code Programs
130
7.4.1 Bring the Machine Out of Reset
130
About Reset Mode
130
7.4.2 View the Active Axis to Jog
130
7.4.3 Jog the Machine
130
Jog in Continuous Velocity Mode
131
About Continuous Velocity Jogging
131
Jog in Step Mode
131
About Step Jogging
131
7.4.4 View the Current Machine Position
131
7.4.5 Reference the Machine
131
About Referencing
132
7.4.6 Start a Program
132
About Cycle Start
132
Cycle Start Reference
132
7.4.7 Stop Machine Motion
132
7.4.8 View the Active G-Code Modes
132
7.4.9 View the Distance to Go
133
About Distance to Go
133
7.5 Control G-Code Programs
134
7.5.1 Use the Feed Hold Function
134
About Feed Hold
134
7.5.2 Use the Feed Rate Override Function
134
About Feed Rate Override
134
7.5.3 Use M01 Break Mode
135
About M01 Break
135
TABLE OF CONTENTS


---

## PDF Page 11

©Tormach® 2026
Specifications subject to change without notice.
Page 11
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
Display Information and Capture Images During an M00 or M01 Break
135
Display Information with Images
135
Display Information with Text
135
Capture Images with a USB Camera
135
7.5.4 Use the Maxvel Override Function
135
About Maxvel Override
136
7.5.5 Use Single Block Mode
136
About Single Block
136
7.5.6 Use the Spindle Override Function
136
About Spindle Override
136
7.5.7 Change the Feed Rate
137
About Feed Rates
137
7.5.8 Change the Spindle Speed
137
About Spindle Controls
137
Spindle Controls Reference
137
7.5.9 Change the Tool Number
137
About M6 G43
137
7.5.10 Use a G30 Position
138
About G30
138
7.5.11 View the Tool Length
138
7.5.12 Manually Enter Commands
138
About the MDI Line DRO Field
138
Admin Commands Reference
139
7.5.13 Copy Recently Entered Commands
139
7.5.14 Use Feeds and Speeds Suggestions
139
Refresh DRO Field Values
140
Use Additional Provided Information
140
Create Tool Descriptions
141
Manually Enter Tool Descriptions
141
Automatically Generate Tool Descriptions
141
Tool Keywords Reference
142
7.5.15 Use Cycle Counters (M30 and M99)
142
Monitor Cycle Counters
143
Change Cycle Counter Values
143
7.6 System File Management
144
7.6.1 Manage System Files
144
7.6.2 Create Backup Files
144
About Backup Files
145
7.6.3 Restore Backup Files
145
7.6.4 Import and Export the Tool Table
146
Import a .csv File
146
Export the Tool Table as a .csv File
146
BASIC OPERATIONS
147
8.1 Start the Machine
148


---

## PDF Page 12

©Tormach® 2026
Specifications subject to change without notice.
Page 12
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
8.2 Bring the Machine Out of Reset
149
8.2.1 About Reset Mode
149
8.3 Reference the Machine
150
8.3.1 About Referencing
150
8.4 Jog the Machine
151
8.4.1 About Jogging
151
About Continuous Velocity Jogging
151
About Step Jogging
151
8.4.2 Jog Controls Reference
152
Jogging in PathPilot
152
Jogging with the Keyboard
152
Jogging with the (Optional) Jog Shuttle or Operator Console Pendant
152
8.5 Manually Control the Spindle
153
8.5.1 About the Spindle
153
8.5.2 Spindle Controls Reference
153
8.6 Load G-Code
154
8.7 Install a Tool in an ER Collet Spindle
155
8.8 Set Tool Length Offsets
156
8.8.1 About Tool Offsets
156
8.8.2 Touch Off the Tool Length Offsets
156
Set a Known Reference Height
156
Measure Tools Using a Known Reference Height
157
8.8.3 Use an Electronic Tool Setter (ETS) to Measure Tools
158
Set up the Electronic Tool Setter (ETS)
158
Set the ETS Height
158
Reference the Spindle Nose
158
Set the G37 Position
158
Measure Tools Using an Electronic Tool Setter (ETS)
159
Manually Measure Tool Lengths (with PathPilot)
159
Automatically Measure Tool Lengths (with G37)
159
8.9 Set Work Offsets
161
8.9.1 Set the Z-Axis Work Offset with an Electronic Tool Setter (ETS)
161
8.9.2 About Work Offsets
161
PROGRAMMING
163
9.1 Before You Begin
164
9.2 Programming Overview
165
9.2.1 About G-Code Programming Language
165
9.2.2 G-Code Formatting Reference
165
Line Numbers
165
Words
165
Letters
166
Values
166
Order of Execution
167
Modal Groups
168
TABLE OF CONTENTS


---

## PDF Page 13

©Tormach® 2026
Specifications subject to change without notice.
Page 13
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
Comments
169
9.2.3 Supported G-Codes Reference
169
9.3 Programming G-Code
171
9.3.1 About the Examples Used
171
9.3.2 Rapid Linear Motion (G00)
171
9.3.3 Linear Motion at Feed Rate (G01)
171
9.3.4 Arc at Feed Rate (G02 and G03)
172
Radius Format Arc
172
Center Format Arc
172
Arc in XY Plane
173
Arc in XZ Plane
173
Arc in YZ Plane
173
9.3.5 Dwell (G04)
174
9.3.6 Set Offsets (G10)
174
Set Tool Table (G10 L1)
174
Set Coordinate System (G10 L2)
174
Set Tool Table (G10 L10)
174
Set Tool Table (G10 L11)
175
Set Coordinate System (G10 L20)
175
9.3.7 Plane Selection (G17, G18, G19)
175
9.3.8 Length Units (G20 and G21)
175
9.3.9 Return to Predefined Position (G28 and G28.1)
175
9.3.10 Return to Predefined Position (G30 and G30.1)
176
9.3.11 Automatically Measure Tool Lengths with an ETS (G37 and G37.1)
176
Move to G37 Position Over ETS (G37.1)
176
Move and Measure Tool Length (G37)
176
9.3.12 Straight Probe (G38.x)
177
Use the Straight Probe Command
177
9.3.13 Cutter Compensation (G40, G41, G42)
178
9.3.14 Dynamic Cutter Compensation (G41.1 and G42.1)
178
9.3.15 Apply Tool Length Offset (G43)
179
9.3.16 Engrave Sequential Serial Number (G47)
179
9.3.17 Cancel Tool Length Compensation (G49)
179
9.3.18 Absolute Coordinates (G53)
179
9.3.19 Select Work Offset Coordinate System (G54 to G54.1 P500)
180
9.3.20 Set Exact Path Control Mode (G61)
180
9.3.21 Set Blended Path Control Mode (G64)
180
9.3.22 Distance Mode (G90 and G91)
180
9.3.23 Arc Distance Mode (G90.1 and G91.1)
180
9.3.24 Temporary Work Offsets (G92, G92.1, G92.2, and G92.3)
180
9.3.25 Feed Rate Mode (G93, G94, and G95)
181
9.3.26 Spindle Control Mode (G96 and G97)
181
9.4 Programming Canned Cycles
183
9.4.1 Canned Cycles Reference
183
Supported Canned Cycles
183


---

## PDF Page 14

©Tormach® 2026
Specifications subject to change without notice.
Page 14
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9.4.2 High Speed Peck Drill (G73)
184
9.4.3 Cancel Canned Cycles (G80)
184
9.4.4 Drilling Cycle (G81)
184
9.4.5 Simple Drilling Cycle (G82)
186
9.4.6 Peck Drilling Cycle (G83)
186
9.4.7 Boring Cycle (G85)
186
9.4.8 Boring Cycle (G86)
186
9.4.9 Boring Cycle (G88)
186
9.4.10 Boring Cycle (G89)
186
9.5 Programming M-Code
188
9.5.1 Supported M-Codes Reference
188
9.5.2 Program Stop and Program End (M00, M01, M02, and M30)
188
Display Information and Capture Images During an M00 or M01 Break
189
Display Information with Images
189
Display Information with Text
189
Capture Images with a USB Camera
189
9.5.3 Spindle Control (M03 and M05)
189
9.5.4 Tool Change (M06)
189
9.5.5 Coolant Control (M08 and M09)
190
9.5.6 Dust Shoe Control (M27 and M28)
190
9.5.7 Override Control (M48 and M49)
190
9.5.8 Feed Override Control (M50)
190
9.5.9 Spindle Speed Override Control (M51)
190
9.5.10 Set Current Tool Number (M61)
190
9.5.11 Set Output State (M64 and M65)
190
9.5.12 Wait on Input (M66)
191
9.5.13 USB Camera Control (M301, M302, M303)
191
9.6 Programming Input Codes
192
9.6.1 Feed Rate (F)
192
9.6.2 Spindle Speed (S)
192
9.6.3 Change Tool Number (T)
192
9.7 Advanced Programming
193
9.7.1 Parameters
193
Parameters Reference
193
Parameter Syntax
193
Parameter Scope
193
Behavior of Uninitialized Parameters
193
Parameter Mode
193
Persistence and Volatility
193
Intended Use
193
Numbered Parameters Reference
194
Read-Only Parameters
194
Subroutine Parameters Reference
194
Named Parameters Reference
194
9.7.2 Expressions
195
TABLE OF CONTENTS


---

## PDF Page 15

©Tormach® 2026
Specifications subject to change without notice.
Page 15
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
Binary Operators Reference
195
Functions Reference
195
9.7.3 Subroutines
196
Subroutines Reference
196
Conditional Subroutines Reference
197
if/endif
197
if/elseif/else/endif
197
Repeating Subroutines Reference
197
Looping Subroutines Reference
197
do/while
198
while/endwhile
198
MACHINE MAINTENANCE
199
10.1 Maintenance Safety
200
10.1.1 All Maintenance Procedures
200
10.1.2 Swarf Maintenance Procedures
200
10.2 Maintenance Schedules
201
10.2.1 Daily
201
10.2.2 Weekly
201
10.2.3 Monthly
201
10.2.4 Quarterly
201
10.2.5 Semi-Annually
201
10.3 Regularly Maintaining the Machine
202
10.3.1 Clean the Linear Rails and Ball Screws
202
10.3.2 Clean the Spindle Taper, Collet Nut, and Collet
202
Spindle Taper
202
Collet Nut
202
Collet
202
10.3.3 Maintain the Chiller
203
10.3.4 Lubricate the Machine
203
Linear Rails
203
Ball Screws
204
10.3.5 Lubricate the Axis Motor Couplers
204
10.3.6 Prevent Rust
204
TROUBLESHOOTING
207
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
11.5.1 LED Identification
212
11.6 Power Distribution Subsystem
213
11.6.1 The Controller Won't Power On
213
11.7 Control Power Subsystem
214


---

## PDF Page 16

©Tormach® 2026
Specifications subject to change without notice.
Page 16
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
11.7.1 The Machine Won't Power On
214
11.8 Axes Drive Subsystem
216
11.8.1 All Axes Won't Move When Commanded
216
11.8.2 One Axis Won't Move (or Only Moves in One Direction), and Other Axes Move
217
Motor Resistance Reference
218
DC-BUS Power Distribution Reference
218
11.8.3 Axis Movement is Noisy
219
11.8.4 Can't Reference All Axes
220
Limit Switch Function Reference
222
11.8.5 Lost Motion on Axis Travel
222
11.9 Spindle Drive Subsystem
224
11.9.1 The Spindle Won't Turn
224
Run and Direction Commands Reference
226
Spindle VFD Trip Reference
227
11.10 Operator Console Troubleshooting
228
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
DIAGRAMS AND PARTS LISTS
233
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
12.9.1 ATC Dust Shoe Assembly, 80 mm
252
12.9.2 ATC Solenoid Control Panel Assembly
254
12.9.3 ATC Rack Assembly
257
12.9.4 ATC Spindle Pneumatics and Waterlines
259
DRAWINGS
261
13.1 Spoilboard Bolt Pattern
262
13.1.1 RA10001 through RA10024
263
13.1.2 RA10025 through RA10036
264
13.1.3 RA10037 and Higher
265
13.2 Vertical Fixturing Hole Pattern
266
13.3 T-Slot Layout
267
13.3.1 RA10037 and Higher
267
13.4 T-Slot Dimensions
268
TABLE OF CONTENTS


---

## PDF Page 17

©Tormach® 2026
Specifications subject to change without notice.
Page 17
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
TABLE OF CONTENTS
13.4.1 RA10037 and Higher
268
13.5 ETS Placement Layout
269
ETS Placement Template
270
ELECTRICAL SCHEMATICS
271
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
14.10.1 X1: AC Terminal Strip (Sheet 11)
281
14.10.2 X2: Control Terminal Strip (Sheet 12)
282
14.10.3 X2: Control Terminal Strip (Sheet 13)
283
14.10.4 X2: Control Terminal Strip (Sheet 14)
284
14.10.5 X3: Ground Terminal Strip (Sheet 15)
285
14.10.6 X24: ATC Terminal Strip (Sheet 16)
286
14.11 Wiring Table (Sheets 17-19)
287
14.12 Electrical Cabinet Layout
290
14.13 Operator Console Schematic
291


---

## PDF Page 18

[No extractable text; see original PDF page.]


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
3.2.3 Options for Non-Conforming Sites
For sites that don't conform to the specified "Electrical and
Power Requirements" (above), you may consider the following.
You must consult with an electrician to determine the
suitability for your site.
l Step-Down Transformer Used at sites where 115 Vac
service is not possible. You must make sure that the
step-down transformer has sufficient capacity to supply
the machine, accessories, and any 115 Vac auxiliary
equipment. We recommend the Step-Up/Step-Down
Transformer (PN 32009).
©Tormach® 2026
Specifications subject to change without notice.
Page 36
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
3: SITE REQUIREMENTS
3.2 Electrical and Power Requirements


---

## PDF Page 37

INSTALLATION
IN THIS SECTION, YOU'LL LEARN:
About the installation process required for this machine.
Before operating the machine in any way, you must read and understand this section.
CONTENTS
4.1 Before You Begin
38
4.2 Move the Pallet
40
4.3 Unpack the Machine Crate
41
4.4 Lift and Move the Machine
42
4.5 Level the Machine
44
4.6 Install the Controller Arm
45
4.7 Install the Controller
48
4.8 Make Water Chiller Connections
54
4.9 Verify the Installation
55
4.10 Install Accessory Components
59
4.11 Set Up the PathPilot Controller
78


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
4.1.1 Packing List
The following items are included with your 24R (PN 39532):
l 24R Machine Owner's Kit (PN 39534)
l CW3000 Chiller (PN 35161)
l Chiller Alarm Cable (PN 50381)
l Tormach Tool Bag
The Tormach tool bag contains the following tools and items:
l 6 mm Vacuum Gasket (PN 50362), 6 m
l 18 mm - 21 mm Wrench (PN 50358)
l 30 mm - 27 mm Wrench (PN 50357)
l Adjustable Wrench (PN 50359)
l Dust Shoe Assembly (PN 50625)
l ER20 Collet: 1/4 in. (PN 30120)*
l ER20 Collet Nut
l Grease Gun (PN 50360)
l Metric Hex Wrench Set (PN 50361)
l Operator box
*Replacements sold only as a multi-pack. Product link directs
to the current product offering.
The machine owner's kit contains the following items:
l Black nylon cable tie, 4
l Controller/Monitor Cable (PN 39042), 3
l Ethernet Cable (PN 50383), 2000 mm
l Grease Nozzle Kit (PN 50389)
l M5 × 25 mm screw, 4
l M5 nut, 4
l Operator Box Drill Template (TD10713)
l Operator's Manual (PN 39535)
4.1.2 Installation Tools and Items
Before uncrating and installing your machine, collect the
following tools and items.
l 2 in. × 6 in. × 8 in. board, 40
l 4 in. × 4 in. × 6 ft visual grade #2 (or higher) board, 2
l #5 drill bit
l Combination wrenches:
o
18 mm - 21 mm combination wrench (provided in the
tool bag)
o
30 mm - 27 mm combination wrench (provided in the
tool bag)
l Carpenter's level
l Dead-blow hammer (or similar)
l Distilled water
l Drill
l Ladder (optional)
l Metric hex wrench set (provided in the tool bag)
l Pallet jack
l Phillips screwdriver
l Pry bar
l Safety eyewear that meets ANSI Z87+
l Snips
l Socket wrench and an 8 mm (5/16 in.) socket
l Tape
©Tormach® 2026
Specifications subject to change without notice.
Page 38
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.1 Before You Begin


---

## PDF Page 39

4: INSTALLATION
4.1 Before You Begin
l Work gloves
l Wrenches:
o
8 mm wrench
o
16 mm wrench
o
21 mm wrench
o
22 mm wrench
o
24 mm wrench
o
Adjustable wrench (provided in the tool bag)
©Tormach® 2026
Specifications subject to change without notice.
Page 39
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 40

4.2 MOVE THE PALLET
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
©Tormach® 2026
Specifications subject to change without notice.
Page 40
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.2 Move the Pallet


---

## PDF Page 41

4: INSTALLATION
4.3 Unpack the Machine Crate
4.3 UNPACK THE MACHINE CRATE
Tools and Items Required
l Pallet jack
l Safety eyewear that meets ANSI 787+
l Snips
l Socket wrench and 8 mm (5/16 in.) socket
l Work gloves
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
Remove the screws from the shipping crate with a
socket wrench and an 8 mm (5/16 in.) socket. Start with
removing the screws securing the top, followed by the
four sides.
Note: To access the screws on the top of the
shipping crate, you may need a ladder.
4.
Remove and discard the plastic wrap from the machine.
5.
Cut and remove the shipping straps securing the water
chiller and the stand end panel to the machine stand,
and set both aside for later installation.
Figure 4-1: Water chiller packaged for shipping inside
of the machine stand.
6.
Remove the tool bag from the machine stand, and set it
aside for later use.
The Tormach tool bag contains the following tools and
items:
l 6 mm Vacuum Gasket (PN 50362), 6 m
l 18 mm - 21 mm Wrench (PN 50358)
l 30 mm - 27 mm Wrench (PN 50357)
l Adjustable Wrench (PN 50359)
l Dust Shoe Assembly (PN 50625)
l ER20 Collet: 1/4 in. (PN 30120)*
l ER20 Collet Nut
l Grease Gun (PN 50360)
l Metric Hex Wrench Set (PN 50361)
l Operator box
*Replacements sold only as a multi-pack. Product link
directs to the current product offering.
7.
Remove and discard all protective shipping materials
from the machine, and cut and remove any remaining
shipping straps.
8.
Remove the desiccant packet from the Z-axis. If it's not
on the Z-axis, it may have fallen onto the machine table
during shipping.
9.
Inspect the item(s):
l Photograph any damage that may have occurred
during shipping.
l Verify the received goods against the packing list.
If there is any damage or shortages, you must contact
Tormach within 30 days of receipt. Create a support
ticket with Tormach Technical Support at
tormach.com/how-to-submit-a-support-ticket for
guidance on how to proceed.
©Tormach® 2026
Specifications subject to change without notice.
Page 41
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 42

4.4 LIFT AND MOVE THE MACHINE
Tools and Items Required
l 2 in. × 6 in. × 8 in. board (block), 40
l 4 in. × 4 in. × 6 ft board (support), 2
l 8 mm wrench
l Adjustable wrench (or, if desired, a 22 mm wrench)
l Pallet jack
The easiest way to lift and move the machine off of the pallet
is to use a forklift. If you don't have a forklift available, we
recommend lifting the machine with 4 in. × 4 in. × 6 ft boards
(supports) and 2 in. × 6 in. × 8 in. boards (blocks).
To lift and move the machine:
1.
Move the machine's pallet as close as possible to the
desired location with a pallet jack.
2.
The machine is secured to the pallet with two screws in
the base of each foot. Remove the screws from the
pallet with an 8 mm wrench.
Note: If you have a forklift, use it to lift and
move the machine off of the pallet now. When
finished, go to "Level the Machine" (page 44).
3.
Verify that the top nut on each machine foot is loose.
Note: The top nut is used to lock the height of
the machine in place (which you'll do after
you're done leveling the machine). The bottom
nut raises or lowers the machine.
4.
Raise the machine up about 1 in. by turning the lower
nut on each machine foot with an adjustable wrench
(provided in the tool bag).
This raises the machine up to make room for the
supports.
Figure 4-2: Turning the lower nut on the machine foot.
Tip! You can also use a 22 mm wrench, if you
have it available.
5.
Put two supports on the pallet so that they're
approximately 6 in. from each end of the machine stand.
Verify that there's enough room between the supports
for the pallet jack.
6.
Stack blocks under each end of the supports as shown in
the following image.
Figure 4-3: Boards arranged under the machine to
prepare for pallet removal.
WARNING! Transportation and Lift Hazard:
Before moving the machine, you must confirm
that all persons are clear of the area below the
machine. Qualified professionals must
transport, lift, and move the machine. Moving
parts can entangle, pinch, or cut you, causing
death or serious injury.
7.
Lower the machine with an adjustable wrench until the
weight of the machine is completely held by the
supports. Verify that the feet aren't touching the pallet.
©Tormach® 2026
Specifications subject to change without notice.
Page 42
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.4 Lift and Move the Machine


---

## PDF Page 43

4: INSTALLATION
4.4 Lift and Move the Machine
8.
Slowly remove the pallet from under the machine.
Figure 4-4: Pallet removed from the machine, which
is now completely held by the boards.
9.
Lift the machine off of the supports with a pallet jack. If
your pallet jack doesn't lift high enough to move the
machine, stack blocks on it. You must verify that the
additional blocks are placed evenly on the pallet jack,
and that they're beneath all four lifting points on the
machine before attempting to raise the pallet jack.
Figure 4-5: Lifting the machine from the boards with a
pallet jack (and additional boards).
10.
Once the weight of the machine is fully supported by the
pallet jack, begin lowering the machine onto the floor:
a.
Remove two of the blocks from each end of the
supports.
b.
Slowly lower the pallet jack until the weight of the
machine is fully supported by the supports.
c.
Remove two of the blocks from the pallet jack.
d.
Lift the machine off of the supports with the pallet
jack.
11.
Repeat Step 10 until the weight of the machine is
entirely on the floor.
©Tormach® 2026
Specifications subject to change without notice.
Page 43
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 44

4.5 LEVEL THE MACHINE
Tools and Items Required
l 24 mm wrench
l Adjustable wrench
l Carpenter's level
1.
Put a carpenter's level on the machine table. Verify that
the level is flat on the table, and isn't on the vacuum
table gaskets.
Figure 4-6: Carpenter's level on the machine table.
2.
Raise or lower each foot by turning the lower nut with
an adjustable wrench to level the machine in the X and Y
directions.
3.
Examine all four feet and verify that each foot touches
the floor.
4.
Tighten the top nut (the jam nut) on each foot with a 24
mm wrench.
©Tormach® 2026
Specifications subject to change without notice.
Page 44
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.5 Level the Machine


---

## PDF Page 45

4: INSTALLATION
4.6 Install the Controller Arm
4.6 INSTALL THE CONTROLLER ARM
Tools and Items Required
l #5 drill bit
l 4 mm hex wrench
l 6 mm hex wrench
l 8 mm hex wrench
l 17 mm hex wrench
l 17 mm socket wrench
l 21 mm wrench
l Dead-blow hammer (or similar)
l Drill
l Phillips screwdriver
l Pry bar
l Tape
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
Figure 4-7: Controller Arm mounting pad.
WARNING! Crush Hazard: Only install the
Controller Arm on the mounting pad at the
front end of the machine. If there's a mounting
pad next to the electrical cabinet on the
machine stand, don't use it. If you do, there's a
risk of entrapment between the Controller Arm
and the machine's moving parts.
4.
Secure the square tube arm to the machine stand with
two M8 socket head cap screws, two M8 flat washers,
two M8 lock washers, and a 6 mm hex wrench. Verify
that the white nylon washer is located toward the
bottom of the mounting pad.
Figure 4-8: White nylon washer on the square tube
arm.
5.
Put the monitor post into the square tube arm. Verify
that the monitor bracket is toward the top, and that the
threaded holes face the holes in the square tube arm.
6.
Tighten the cross bolt on the square tube arm with a 17
mm socket wrench and a 17 mm hex wrench.
©Tormach® 2026
Specifications subject to change without notice.
Page 45
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 46

7.
With a 21 mm wrench, remove the monitor bracket from
the Controller Arm, and rotate it so that the largest
mounting plate is facing up.
Figure 4-9: Incorrect and correct orientations of the
monitor bracket on the Controller Arm.
Note: The largest mounting plate is for the
monitor, and the smallest mounting plate is for
the keyboard tray.
8.
Tighten the three pivot bolts on the monitor bracket with
an 8 mm hex wrench and a 16 mm wrench.
Figure 4-10: Tightening the monitor bracket in place.
Tip! This makes it easier to install the monitor,
which you'll do later in this installation
procedure.
9.
Tap the end plug into the square tube arm with a dead-
blow hammer (or similar).
10.
Find the operator box drill template (provided in the
machine owner's kit). Put the template on the operator
box, and verify that the holes on the operator box align
with the holes on the template. If they don't, trace the
correct hole pattern on the template.
11.
Tape the template to the keyboard tray as shown in the
following image. This indicates the location to mount
the operator box, which you'll do later in this procedure.
Figure 4-11: Template taped to the keyboard tray.
12.
Drill the four holes through the template and into the
keyboard tray with a drill and a #5 drill bit.
13.
Remove the template from the keyboard tray, and then
discard it.
14.
Secure the keyboard table to the monitor bracket with
four M5 socket head cap screws, four M5 flat washers,
four M5 split lock washers, and a 4 mm hex wrench.
©Tormach® 2026
Specifications subject to change without notice.
Page 46
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.6 Install the Controller Arm


---

## PDF Page 47

4: INSTALLATION
4.6 Install the Controller Arm
15.
Find the operator box (in the tool bag), and mount it to
the bottom of the keyboard table with four M5 × 25 mm
screws and four M5 nuts (provided in the machine
owner's kit).
Figure 4-12: Operator box installed on the keyboard
tray.
16.
Route the loose end of the cable from the operator box
down the monitor post, through the openings in the
square tube arm, and toward the electrical cabinet.
17.
Connect the cable from the operator box to the
Emergency Stop Input port on the front right end of the
electrical cabinet. Tighten the locking collar to secure the
cable.
Figure 4-13: Operator box cable connected to the
Emergency Stop Input port.
18.
Attach four wire tie mounts to the monitor post with
four 4 mm flat head machine screws and a Phillips
screwdriver.
©Tormach® 2026
Specifications subject to change without notice.
Page 47
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 48

4.7 INSTALL THE CONTROLLER
Depending on your machine configuration, do one of the
following:
l If You Have a PathPilot Controller Go to "Install the
Monitor" (page 51).
l If you have a PathPilot Operator Console Go to
"Install the PathPilot Operator Console" (below).
4.7.1 Install the PathPilot Operator Console
Tools and Items Required
l 16 mm wrench
l Metric hex wrench set
l Phillips screwdriver
1.
Put the operator console against the monitor mounting
plate and align the holes. Attach the operator console
and monitor mounting plate together with four M4 × 12
mm socket head cap screws (provided with the operator
console).
Figure 4-14: Operator console attached to the monitor
mounting plate.
2.
Attach the keyboard tray to the lower controller arm
mount with an 8 mm hex wrench.
Figure 4-15: Attaching the keyboard tray to the lower
controller arm mount (from below).
3.
Adjust the operator console and the keyboard tray so
that the two holes on the underside of the operator
console line up with the holes on the keyboard tray.
4.
Attach the keyboard tray to the operator console with
two M3 Phillips screws (provided in the controller box)
and a Phillips screwdriver.
Figure 4-16: Attaching the keyboard tray to the
operator console (from below).
5.
Put the operator console's power supply into the power
supply bracket (provided in the operator console box),
and attach the assembly to the underside of the
keyboard tray with M3 Phillips screws and a Phillips
screwdriver.
Figure 4-17: Attaching the operator console's power
supply and power supply bracket to the keyboard tray
(from below).
6.
Connect the 12 ft power cable to the power supply.
7.
Use the three pivot bolts on the controller arm monitor
bracket to adjust the position of the operator console
and the keyboard tray to your desired angle with a 3 mm
hex wrench and 16 mm hex wrench.
©Tormach® 2026
Specifications subject to change without notice.
Page 48
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install the Controller


---

## PDF Page 49

4: INSTALLATION
4.7 Install the Controller
8.
If you have any of the following optional USB
accessories, connect them to any USB port on the
operator console:
l Keyboard
l Mouse
9.
Connect the WiFi dongle to any USB port on the operator
console.
10.
Connect the Ethernet cable to the Ethernet port on the
operator console.
11.
Connect the barrel end of the power supply cable to the
Power Supply port on the operator console.
Figure 4-18: USB accessories connected.
12.
Route the loose ends of the USB, Ethernet, and power
supply cables through the square hole in the keyboard
tray. Then, use the cable tie holes to secure the loose
power supply and USB cables.
Figure 4-19: Cable tie holes.
Tip! If you're using a mouse, we recommend
leaving some slack for it to move freely.
13.
Connect the jog pendant cable and the Emergency Stop
cable to the operator console.
Figure 4-20: Jog pendant (left) and Emergency Stop
(right) cables connected.
14.
Connect the cable from the operator box to the
Emergency Stop Input port on the front right end of the
electrical cabinet. Tighten the locking collar to secure the
cable.
Figure 4-21: Operator box cable connected to the
Emergency Stop Input port.
15.
Route the loose end of the operator console's 12 ft
power cable, and the Ethernet cable down the controller
arm. Then, route the cables through the slots in the
square tube arm that's connected to the machine stand.
©Tormach® 2026
Specifications subject to change without notice.
Page 49
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 50

16.
On the right side of the machine, connect the loose ends
of the cables as follows:
a.
Connect the operator console's power cable to any of
the Accessory power outlets.
b.
Connect the Ethernet cable to the Controller
Communications port.
17.
Secure the cables to the wire tie mounts that you
installed on the round monitor post with four 4 in. cable
ties.
©Tormach® 2026
Specifications subject to change without notice.
Page 50
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install the Controller


---

## PDF Page 51

4: INSTALLATION
4.7 Install the Controller
4.7.2 Install the Monitor
Tools and Items Required
l 3 mm hex wrench
l 8 mm hex wrench
l 16 mm wrench
l PathPilot Controller VESA Mount (PN 50382)
The PathPilot controller mount allows you to install the
PathPilot controller behind the monitor (which is attached to
the Controller Arm).
Note: If you're using a Touch Screen Kit (PN 35575),
you must first remove the stock mounting bracket
from the back of the monitor.
1.
Put the PathPilot Controller VESA Mount (PN 50382)
against the monitor mounting plate. Then, put the
monitor on the other side of the PathPilot controller
mount, and align the holes on the three components.
2.
Attach the monitor, PathPilot Controller VESA Mount,
and monitor mounting plate together with four M4 × 12
mm socket head cap screws (provided with the PathPilot
Controller VESA Mount).
Figure 4-22: PathPilot controller mount attached to
the back of the monitor.
3.
Adjust the position of the monitor and the keyboard tray
with an 8 mm hex wrench and a 16 mm wrench. Once
complete, securely tighten the pivot screws.
©Tormach® 2026
Specifications subject to change without notice.
Page 51
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 52

Install the PathPilot Controller
The PathPilot controller attaches to the top of the PathPilot
Controller VESA Mount and behind the monitor.
1.
Put the four standoffs into the bottom of the controller
and tighten them by hand.
2.
Find the four M4 screws and the mounting plate
included with the controller. Secure the mounting plate
to the PathPilot Controller VESA Mount (PN 50382).
Install the plate with the keyhole slots facing away from
the monitor.
3.
Attach the controller to its mount by sliding the
standoffs through the keyhole slots.
4.
Connect all accessories to the controller:
l Jog Shuttle (PN 30616) (Optional)
l Keyboard
l Mouse
l Monitor
5.
Connect the monitor's video cable to the PathPilot
controller.
6.
Connect the loose end of the video cable to the monitor.
©Tormach® 2026
Specifications subject to change without notice.
Page 52
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.7 Install the Controller


---

## PDF Page 53

4: INSTALLATION
4.7 Install the Controller
7.
Connect the monitor's power cord. Depending on the
type of monitor you have, do one of the following:
l Standard LCD Monitor (PN 30615)
a.
Connect two of the Controller/Monitor cables
(provided in the machine owner's kit) together.
Then, connect one end of the cable assembly into
the monitor.
b.
Route the loose end of the cable assembly down
the monitor post, through the square tube arm,
and toward the electrical cabinet.
c.
Connect the cable assembly into one of the
Accessory Power Ports on the front right end of the
electrical cabinet.
Figure 4-23: Connecting the monitor cable to
the Accessory Power Port.
l Touch Screen Kit (PN 35575)
a.
Connect the monitor's power supply into the
monitor.
b.
Route the power supply down the monitor post.
c.
Connect one end of one Controller/Monitor cable
(provided in the machine owner's kit) to the loose
end of the monitor's power supply.
d.
Route the loose end of the Controller/Monitor
cable through the square tube arm and toward the
electrical cabinet.
e.
Connect the loose end of the Controller/Monitor
cable into one of the Accessory Power Ports on the
front right end of the electrical cabinet.
f.
Attach the power supply to the monitor post with
one cable tie (provided in the machine owner's
kit).
8.
Connect the PathPilot controller's power supply to the
PathPilot controller.
9.
Connect the loose end of the power supply to one of the
Controller/Monitor cables provided.
10.
Route the power cable down the monitor post, through
the square tube arm, and toward the electrical cabinet.
11.
Connect the loose end of the Controller/Monitor cable
into one of the Accessory Power Ports on the front right
end of the electrical cabinet.
12.
Attach the PathPilot controller and monitor power
supplies to the square tube arm with cable ties (provided
in the machine owner's kit).
Figure 4-24: Power supply attached to the square tube
arm.
13.
Find the Ethernet cable (provided in the machine
owner's kit), and then connect it to the Controller
Communications outlet on the front right end of the
electrical cabinet.
14.
Route the loose end of the Ethernet cable toward the
PathPilot controller, and then connect it to the PathPilot
controller.
15.
Secure the operator box cable, Ethernet cable, and
power supply cables to the Controller Arm with four wire
tie mounts and four cable ties.
©Tormach® 2026
Specifications subject to change without notice.
Page 53
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 54

4.8 MAKE WATER CHILLER CONNECTIONS
Tools and Items Required
l Distilled water, 2-1/4 gal
1.
Find the water chiller that you set aside in "Unpack the
Machine Crate" (page 41). Then, remove the
components from the box the water chiller is shipped in.
Set the two cables aside.
2.
Put the water chiller into the machine stand.
3.
Find the two preinstalled water lines in the machine
stand. Then, route both toward the water chiller.
4.
Connect the water lines to the water chiller:
a.
Put the clear water line into the Inlet port.
b.
Put the black water line into the Outlet port.
5.
Find the water chiller alarm cable (that you set aside in
Step 1). Then, connect one end to the back of the water
chiller.
Figure 4-25: Water chiller connections.
6.
Route the loose end of the water chiller alarm cable
toward the electrical cabinet, and connect it to the
Chiller Alarm Input port on the side of the left end of the
electrical cabinet.
Figure 4-26: Water chiller cable connected to the
Chiller Alarm Input port.
7.
Fill the water chiller with 2-1/4 gal of distilled water.
8.
Find the water chiller's power cable (that you set aside
in Step 1). Then, connect one end to the back of the
water chiller.
9.
Route the loose end of the power cable to a 115 Vac
outlet, and connect it.
10.
Turn on the water chiller and examine the clear water
line to confirm that water is flowing.
11.
Inspect the water chiller and water lines for leaks.
©Tormach® 2026
Specifications subject to change without notice.
Page 54
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.8 Make Water Chiller Connections


---

## PDF Page 55

4: INSTALLATION
4.9 Verify the Installation
4.9 VERIFY THE INSTALLATION
To properly validate the core installation of your machine, you
must understand how to power on and off the machine and
use the controls.
Complete the following steps in the order listed:
4.9.1 Power on the Machine
55
4.9.2 Verify Limit Switch Function
56
4.9.3 Verify Axes Function
57
4.9.4 Verify Spindle Function
57
4.9.5 Power off the Machine
58
4.9.1 Power on the Machine
1.
Use a multimeter to verify that the electrical service in
your location meets the following requirements. If your
location does not meet these requirements, do not
install the machine. Instead, you must consult with a
local electrician about your options.
l Primary Power Required Single-Phase 115 Vac,
50/60 Hz
l Recommended Circuit Amperage Dedicated 15 A
breaker
2.
Connect the machine's mains power cable to the verified
electrical service.
3.
Find the Main Disconnect switch, and then remove the
hang tag.
Figure 4-27: The Main Disconnect switch on the side
of the machine's electrical cabinet.
4.
Turn the Main Disconnect switch to ON.
Figure 4-28: Example of the Main Disconnect switch
in the On position.
Mains power is now connected to the machine.
5.
Push the Power button on the PathPilot controller, if it's
not already powered on.
©Tormach® 2026
Specifications subject to change without notice.
Page 55
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 56

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
Figure 4-29: Emergency Stop button.
9.
Push the blue Reset button to enable the machine.
Figure 4-30: Reset button.
The axis drives are now powered on.
10.
Verify that the blue Reset LED comes on. From the
PathPilot interface, on the Status tab, verify that the
Machine OK light changes from yellow to green.
Once both are on, the machine is powered on and ready
to operate.
Figure 4-31: Machine OK light on the Status tab.
11.
Select Reset.
Figure 4-32: Reset button.
This initializes the connection between the machine and
controller.
4.9.2 Verify Limit Switch Function
You must confirm that the limit switches correctly operate.
1.
From the PathPilot interface, on the Status tab, identify
the X Limit, Y Limit, and Z Limit lights.
Figure 4-33: X Limit, Y Limit, and Z Limit lights on the
Status tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 56
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.9 Verify the Installation


---

## PDF Page 57

4: INSTALLATION
4.9 Verify the Installation
2.
On the machine, identify the X, Y, and Z limit switches.
Figure 4-34: Machine limit switches.
3.
Hold a piece of steel (like a screwdriver or a wrench) up
to each limit switch.
The red light on each limit switch is on until the steel is
within sensing range, at which point the red light dims
or turns off.
From the PathPilot interface, on the Status tab, the
corresponding X Limit, Y Limit, and Z Limit lights come
on.
4.
From the PathPilot interface, select Reset.
4.9.3 Verify Axes Function
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
Figure 4-35: Ref Z, Ref X, and Ref Y buttons.
The machine moves to the reference position.
4.
Use the keyboard to verify axes motion:
l Select the Right Arrow key and then the Left Arrow
key.
The spindle moves right (X+), then left (X-).
l Select the Up Arrow key and then the Down Arrow
key.
The gantry moves toward the back end of the table
(Y+), then toward the front (Y-).
l Select the Page Down key and then the Page Up key.
The spindle head moves down (Z-), then up (Z+).
5.
If applicable, verify the optional Jog Shuttle:
l Press any axis button on the Jog Shuttle — X, Y, Z, or
A — to select an axis.
Figure 4-36: Functions on the optional Jog Shuttle.
From the PathPilot interface, on the Main tab, the
corresponding green Axis light comes on.
Figure 4-37: Axis lights.
l Turn the Jog Shuttle Ring in any direction to move the
selected axis, then turn it in the opposite direction to
reverse the direction.
4.9.4 Verify Spindle Function
You must confirm that the spindle correctly operates.
1.
Remove the collet and nut from the spindle, if installed.
2.
If you haven't already done so, turn on the water chiller.
©Tormach® 2026
Specifications subject to change without notice.
Page 57
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 58

3.
From the PathPilot interface, confirm that the Spindle
Override slider isn't set to 0% (when it's set to 0%, the
slider is yellow). To clear the override, select RPM 100%.
Figure 4-38: Spindle Override slider.
Note: The Spindle Override slider changes the
programmed spindle speed by a specific
percentage. If it's set to 0%, the spindle won't
move during the following steps in this
procedure. For information, see"About Spindle
Override" (page 136).
4.
From the PathPilot interface, in the RPM DRO field, type
10,000. Then select the Enter key.
Note: If you have an operator console, confirm
that the RPM knob isn't set to 0%. If it is, turn
the RPM knob.
5.
Select FWD.
Figure 4-39: Spindle controls.
The spindle rotates clockwise (viewed from above) at
10,000 rpm.
6.
Select STOP.
The spindle stops rotating.
7.
In the RPM DRO field, type 11,000. Then select the
Enter key.
8.
Select FWD.
The spindle rotates clockwise (viewed from above) at
11,000 rpm.
9.
Repeat the procedure in 1000 rpm intervals up to 24,000
rpm.
4.9.5 Power off the Machine
1.
Push the Emergency Stop button to lock it into the
disabled position.
Figure 4-40: Emergency Stop button.
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
Figure 4-41: Example of the Main Disconnect switch
in the Off position.
Mains power is disconnected from the machine.
©Tormach® 2026
Specifications subject to change without notice.
Page 58
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.9 Verify the Installation


---

## PDF Page 59

4: INSTALLATION
4.10 Install Accessory Components
4.10 INSTALL ACCESSORY COMPONENTS
Install accessory components in the order specified, skipping
any components that you don't have.
4.10.1 Install the Automatic Tool Changer
59
4.10.2 Install the Vacuum Pump
77
4.10.3 Install the Dust Collector
77
4.10.1 Install the Automatic Tool Changer
Complete the following steps in the order listed:
Air Requirements
59
Required Tools
59
Remove the Existing Spindle (ER20)
59
Install the New Spindle (ISO20)
61
Rewire the ATC Cable
63
Install the Solenoid Tray
65
Connect the Filter-Regulator-Lubricator (FRL) to the Rear
of the Machine
66
Connect the Air Lines to the Spindle
67
Install the Power Drawbar Button
67
Install the Lifting Dust Shoe
68
Install the ATC Communication Board
69
Install the ATC Rack
70
Inspect the ATC Control Board
72
Adjust the ATC Air Pressure Settings
72
Verify the Power Drawbar Function
74
Verify the Spindle Direction
75
Align the ATC Rack
76
Run the Spindle Break-In Program
77
Air Requirements
You must verify that the site conforms to the following air
supply requirements.
l Air Pressure 90-120 psi (620-825 kPa)
If the air supply is more than 120 psi (825 kPa), you must
use a regulator.
l Dry Air We recommend using a compressed air dryer,
desiccator, or filter between the air compressor and the
machine.
l Lubricated Air You must lubricate the air with air tool
oil.
Required Tools
This procedure requires the following tools. Collect them
before you begin.
l An assistant to help you
l 3 mm hex wrench
l 4 mm hex wrench
l 6 mm hex wrench
l 14 mm wrench
l 16 mm wrench
l Flat-blade screwdriver, small
l Marker
l Phillips screwdriver
l Wood block
Remove the Existing Spindle (ER20)
1.
Verify that the collet nut is installed and that there's no
tooling in it.
2.
Put a block of wood below the spindle on the machine
table. Then, slowly jog the Z-axis down until the spindle
is resting on the block of wood.
Figure 4-42: Wood block to support the spindle.
3.
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
Page 59
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 60

4.
Remove the six M5 button head cap screws that secure
the front spindle cover with a 3 mm hex wrench. Set
aside the screws and the cover.
Figure 4-43: Removing the M5 screws that secure the
front spindle cover.
5.
Identify the spindle power connector and disconnect it.
Figure 4-44: Spindle power connector.
6.
From the top of the spindle, disconnect the two water
lines with a 14 mm wrench.
Figure 4-45: Two water lines on the existing spindle.
Note: We recommend that you put a piece of
tape or a black mark on the clear water line.
There's another clear line involved in this
procedure, so marking this line helps to prevent
confusion.
7.
If the water lines are difficult to remove from the fitting,
cut them with a knife about 1/2 in. above the fitting.
Figure 4-46: Cutting the water lines from the fitting.
©Tormach® 2026
Specifications subject to change without notice.
Page 60
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.10 Install Accessory Components


---

## PDF Page 61

4: INSTALLATION
4.10 Install Accessory Components
8.
Mark each of the spindle clamps, as shown in the
following image, to indicate which is the top and which
is the bottom. You'll use the marks later to correctly
realign the spindle clamps to the spindle mount.
Figure 4-47: Spindle clamps marked to indicate the
top and bottom.
9.
Use one hand to support the spindle, and use your other
hand to remove the four M5 socket head cap screws that
secure the spindle clamps. Set aside the screws and the
spindle clamps.
10.
Remove the existing spindle (ER20) from the spindle
mount.
Install the New Spindle (ISO20)
Before You Begin: A Note About Spindle Heights
You can adjust the installation height on the 24R spindle to fit
your project. For example, you can install it lower to be able to
machine thin parts with short tools or you can raise the spindle
up to give yourself more clearance for thicker parts and long
tooling.
As a good starting point, we recommending starting low and
keeping the black portion of the spindle flush or slightly above
the top clamp.
1.
Put the ISO20 spindle onto wood blocks on the machine
table, and then put the spindle into the spindle mount.
Orient the spindle so that the coolant ports are pointing
toward the front.
Figure 4-48: Putting the spindle into the spindle
mount.
2.
If necessary, use additional pieces of wood or cardboard
to raise the spindle higher in the spindle mount. Don't
mount the spindle too low — verify that both clamps are
clamped on the main body (the silver section) of the
spindle, and that the clamps are spaced evenly on each
side.
©Tormach® 2026
Specifications subject to change without notice.
Page 61
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 62

3.
Mount the ISO20 spindle with the spindle clamps and
screws (that you set aside earlier) and a 4 mm hex
wrench. Align the top and bottom mounts, as shown in
the following image, using the marks that you made on
the spindle mount before you removed the clamps.
Figure 4-49: Mounting the ISO20 spindle.
Tip! It may be useful to have an assistant help
support the spindle while you're installing the
clamps.
4.
Remove the two shipping bolts from the top of the
spindle.
Figure 4-50: Shipping bolts installed on the top of the
spindle.
5.
Remove the cap from the coolant ports with a 14 mm
wrench. Then connect the water lines to the fittings on
the top of the spindle in the following order:
l Connect the black line to the Water Inlet.
l Connect the clear line to the Water Outlet.
Figure 4-51: Water line connections.
©Tormach® 2026
Specifications subject to change without notice.
Page 62
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.10 Install Accessory Components


---

## PDF Page 63

4: INSTALLATION
4.10 Install Accessory Components
6.
Identify the spindle power connector on the spindle, and
connect it to the machine's spindle power connector.
Figure 4-52: Spindle power connector.
7.
Remove some pieces from the energy chain by gently
prying them with a small, flat-blade screwdriver.
Figure 4-53: Removing pieces of the energy chain.
Tip! We recommend leaving a few of the
energy chain pieces installed to help keep the
wires and tubes organized while you route the
new lines.
8.
Remove the eight M5 screws that secure the rear Z-axis
access panel with a 3 mm hex wrench. Set aside the
screws and the panel.
Figure 4-54: Rear Z-axis access panel.
9.
Find the bag of hardware and wires that's provided with
this kit. Then, identify the following items:
l Power drawbar sensor cable (PDB), which contains
wires 545-547.
l Tool position sensor cable (TPS), which contains wires
548-550.
10.
Connect the PDB and TPS cables to the coordinating
cables on the spindle.
11.
Route the following wires from through the energy chain
and toward the rear Z-axis cover:
l Power drawbar and tool position wires
l Power drawbar open button wire
Rewire the ATC Cable
IMPORTANT! On earlier machines, the ATC cable
wasn't installed on the inside of the electrical
cabinet. Follow this procedure to verify this
connection before installing the solenoid tray.
1.
To determine if you need to connect your ATC cable,
open the electrical cabinet and, on the terminal strip,
find wires 490, 491, and 492.
l If the wires are connected, as shown in the
following image, skip this section and go to "Install
the Solenoid Tray" (page 65).
©Tormach® 2026
Specifications subject to change without notice.
Page 63
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 64

Figure 4-55: Wires 490, 491, and 492 connected.
l If the wires aren't connected, as shown in the
following image, proceed to the next step in this
section.
Figure 4-56: Wires 490, 491, and 492 not
connected.
2.
Remove the wire trough covers and set them aside.
3.
In the electrical cabinet, locate the ATC cable — it's a
black cable with six black wires and one green/yellow
wire. The cable is in one of two places:
l The left-most wire trough
l The bottom wire trough
4.
From the end of the ATC cable, measure 6 in. (15 cm)
and make a mark.
5.
Carefully strip away and remove the cable's main
insulation all the way back to the mark with a knife or an
insulation stripping tool.
6.
Push the metal sleeve back so that it bunches up at the
bottom, and carefully cut away at the material with wire
cutters.
7.
Trim away the extra plastic and paper from inside of the
cable, and clean any talcum powder from the wires.
8.
Strip 1/4 in. (6 mm) from the ends of the six black wires
with a wire stripper.
9.
In the rear Z-axis cover, find the round ATC connector on
the ATC cable.
10.
Use a multimeter to perform a continuity test between
each pin on the ATC connector and each of the six black
wires at the other end of the cable inside the electrical
cabinet. Use the following table to identify each wire,
and then apply a wire number label 2 in. from the end of
each wire.
ATC Connector Pin
ATC Cable Wire
Pin 1
Wire 492
Pin 2
Wire 490
Pin 3
Wire 491
Pin 4
Wire 508
11.
Trim the remaining three black wires and one
green/yellow wire back to the main insulation with a
pair of cutters. Because these wires aren't used for any
connections, you can clean up any remaining metal
sheathing and tape the wires back with electrical tape.
12.
On the terminal strip, find the three open terminal
blocks that you identified earlier.
13.
Connect wire 492 to the terminal block by inserting it
into the open part of the terminal block across from wire
487.
Figure 4-57: Connecting wire 492 to the terminal
block.
©Tormach® 2026
Specifications subject to change without notice.
Page 64
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.10 Install Accessory Components


---

## PDF Page 65

4: INSTALLATION
4.10 Install Accessory Components
14.
Connect wire 490 and wire 491 into the open ports on
the terminal block next to wire 492.
Figure 4-58: Connecting wire 490 and wire 491 to the
terminal block.
15.
Connect wire 508 to -24 Vdc by connecting it to one of
the open terminals as shown below.
Figure 4-59: Connecting wire 508 to the terminal
block.
Install the Solenoid Tray
1.
Route the extra length of air supply line back through the
energy chain and to the solenoid tray.
2.
Find the solenoid tray provided with this kit, and then
identify the ATC control board mounted in it.
Figure 4-60: Control board in the solenoid tray.
3.
Make the connections to the ATC control board as
detailed in the following table.
Identify the...
Connect
to...
BTN power drawbar button wires (from
the Z-axis energy chain)
J6
connector
TPS wire cable (from the spindle)
J7
connector
PDB wire cable (from the spindle)
J8
connector
Figure 4-61: ATC control board connections.
4.
Identify the pre-installed ATC cable in the rear Z-axis
cover. Then, connect it to the ATC power connector on
the ATC solenoid control assembly.
5.
Lift the ATC solenoid control assembly up into the
bottom of the rear Z-axis cover. Align the threaded holes
on the side of the tray with the horizontal slots in the
rear Z-axis cover.
Note: Be careful to not pinch wires while lifting
the tray into position.
Figure 4-62: Solenoid control assembly.
©Tormach® 2026
Specifications subject to change without notice.
Page 65
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 66

6.
Find five M5 screws provided with this kit, and use them
to secure the solenoid control assembly to the rear Z-
axis cover.
7.
Identify the pre-installed 8 mm air hose in the rear Z-
axis cover. Then, trim the length and connect it to the 8
mm push-to-connect fitting on the ATC solenoid control
assembly.
Note: You may need to pull the air line back
from within the inside of the Z-axis energy
chain.
8.
Reinstall all of the energy chain links that you removed
earlier in this procedure.
Connect the Filter-Regulator-Lubricator (FRL) to the
Rear of the Machine
1.
Remove the two 1/4 in. push-to-connect fittings on
either side of the FRL with a 14 mm open socket wrench.
Figure 4-63: Preinstalled push-to-connect fittings on
the FRL.
2.
Install the two included 5/16 in. push-to-connect elbows
to either side of the FRL with a 14 mm open socket
wrench. Teflon tape is preinstalled on these elbows.
Figure 4-64: Installing the included push-to-connect
elbows on the FRL.
3.
Wrap Teflon tape onto the threads of the included dial.
Then, install the dial on the FRL. Do not overtighten.
Figure 4-65: Preparing the dial for installation on the
FRL.
4.
On the rear of the machine, remove the bottom hex
screw on the panel shown in the following image with a
hex wrench.
Figure 4-66: Hex screw to remove for mounting the
FRL.
5.
Slide the included socket head cap screw into the top
FRL bracket, and slide the spacer onto the backside of
the screw. Then, secure the socket head cap screw to the
machine with a 3 mm hex wrench.
©Tormach® 2026
Specifications subject to change without notice.
Page 66
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.10 Install Accessory Components


---

## PDF Page 67

4: INSTALLATION
4.10 Install Accessory Components
6.
Attach the air line going into the machine to the right
push-to-connect elbow on the FRL.
Figure 4-67: Connecting the machine's air line to the
FRL.
7.
Connect the loose end of the 6 in. air line (with the air
fitting) to the left push-to-connect elbow on the FRL.
IMPORTANT! Don't connect the fitting to your
shop's air supply yet. You'll do so later in this
procedure.
Connect the Air Lines to the Spindle
1.
Route the loose ends of the air lines from the solenoid
panel assembly, through the Z-axis energy chain, and
toward the spindle.
2.
Identify the two air lines labeled Lift and EXT. Route the
air lines toward the spindle and out the front of the Z-
axis energy chain two links before the spindle cover.
You'll connect the air lines later in this procedure.
Figure 4-68: Pulling the dust shoe air lines through the
energy chain.
3.
Identify and connect the following air lines to the push-
to-connect fittings on the top of the spindle.
Air Line
Fitting
Blast
Dust Removal
Open
Air Inlet
Seal
Air Sealed
Close
Air Return
Figure 4-69: Air line connections.
Tip! If the air lines are too long, trim them to
length.
Install the Power Drawbar Button
1.
Unplug the power drawbar button at the connector near
the spindle from the wires previously routed up through
the Z-axis energy chain.
©Tormach® 2026
Specifications subject to change without notice.
Page 67
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 68

2.
Put the power drawbar button into the hole on the
spindle cover, and tighten the lock washer and nut onto
the button.
Figure 4-70: Power drawbar button hole on the
spindle cover.
Note: Earlier machines (RA10001-RA10036)
didn't include a hole for the power drawbar
button. If you have one of these machines, use
the new Spindle Cover (PN 39086) provided in
this kit.
3.
While holding the spindle cover up to the spindle head,
identify the power drawbar button wires from the Z-axis
energy chain, and plug them in to the power drawbar
button.
4.
Attach the spindle cover to the spindle head with the six
M5 screws from earlier in this procedure and a 3 mm
hex wrench.
Install the Lifting Dust Shoe
1.
Verify that the top push-to-connect fitting on the dust
shoe has the adjustment valve. If it's installed on the
bottom, remove it with a wrench and switch it to the top
location. Securely tighten both fittings.
Figure 4-71: Adjustment valve on the top push-to-
connect fitting of the dust shoe.
2.
Slide the non-flanged end of the dust shoe onto the
spindle. Then, align the center dust shoe holes on the
spindle cover.
Figure 4-72: Sliding the dust shoe onto the spindle.
3.
Mount the dust shoe to the spindle cover with the two
socket head cap screws and a 3 mm hex wrench.
Figure 4-73: Mounting the dust shoe onto the spindle
cover.
4.
Install the air line labeled LIFT to the push-to-connect
fitting into the lower port on the double rod cylinder
(nearest to the dust shoe).
5.
Install the air line labeled EXT to the push-to-connect
fitting into the upper port on the double rod cylinder
(furthest from the dust shoe).
©Tormach® 2026
Specifications subject to change without notice.
Page 68
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.10 Install Accessory Components


---

## PDF Page 69

4: INSTALLATION
4.10 Install Accessory Components
6.
Lift and lower the dust shoe, and observe the motion to
determine if it rubs on the spindle. If it does, loosen the
Phillips head screws a quarter-turn to adjust the position
of the shoe until it's clear of the spindle. Then, re-tighten
the Phillips head screws.
Figure 4-74: Adjusting the position of the dust shoe.
Install the ATC Communication Board
1.
In the electrical cabinet, from the machine control board,
remove the four screws securing the acrylic board shield
with a 2.5 mm hex wrench. Set aside the shield and the
screws.
2.
Find the ATC communication board provided in this kit.
Then, plug the black connector on the ATC
communication board into the P1 auxiliary port on the
machine control board.
Figure 4-75: ATC communication board installed onto
the machine control board.
3.
Locate the wire harness for the ATC communication
board with wires labeled 530 and 531. Connect them as
follows:
l Connect the loose end of wire 530 to the open port of
the terminal block connected to wire 490.
l Connect the loose end of wire 531 to the open port of
the terminal block connected to wire 491.
Figure 4-76: Wires 530 and 531 connected to the
terminal block.
©Tormach® 2026
Specifications subject to change without notice.
Page 69
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 70

4.
Connect the loose end of wire 529 to the open port of
the terminal block connected to wire 508.
Figure 4-77: Wire 429 connected to the open port of
wire 508.
5.
Plug the green connector of the wire harness into the J2
connector on the ATC communication board.
Figure 4-78: Connector J2 on the ATC communication
board.
6.
Re-install the acrylic board shield to the machine control
board with the four screws that you set aside earlier.
Note: If the spacers used previously no longer
work, we've included additional plastic spacers
in this kit for you to use.
Figure 4-79: Shield installed on the machine control
board.
7.
Tuck all of the wires back into the wire troughs and
replace all of the wire trough covers.
Install the ATC Rack
Prepare the Machine
1.
On the machine table, near the back end (Y+) of the
machine, locate the three M8 threaded holes on each
side of the machine. You'll use these to mount the ATC
rack. If you don’t see the three threaded holes, you must
remove the linear rail cover punch-outs.
Figure 4-80: Linear rail cover punch-outs.
Remove Linear Rail Cover Punch-Outs
Note: If your machine has punch-outs on the linear
rail covers, you must remove them before you mount
the ATC rack.
©Tormach® 2026
Specifications subject to change without notice.
Page 70
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.10 Install Accessory Components


---

## PDF Page 71

4: INSTALLATION
4.10 Install Accessory Components
1.
Remove the five M5 button head cap screws securing
the left and right linear rail covers to the bed casting
with a 3 mm hex wrench.
2.
Put a short and a long wood block onto a secure work
surface and align the first linear rail cover in the open
space.
3.
Support one of the linear covers with two wooden
blocks, aligning the punch-out between the blocks.
Figure 4-81: Linear rail cover on two wooden blocks.
4.
Break the tabs securing the punch-out to the linear rail
cover with a punch and a hammer. Start with one of the
tabs closest to the edge of the linear rail cover.
Figure 4-82: Using a punch to break the tab closest to
the edge of the linear rail cover.
5.
Break the remaining tabs one-by-one, working your way
around the punch-out until all of the tabs are broken.
Remove the punch-out.
Figure 4-83: Linear rail cover with punch-out
removed.
6.
Repeat Steps 2 through 4 with the punch-out on the
other linear rail cover.
7.
Re-attach the linear rail covers to the bed of the
machine with a 3 mm hex wrench and the five M5
button head cap screws that you set aside in Step 1.
Mount the ATC Rack
1.
Find the ATC rack provided with this kit. Then, remove
the four M8 bolts securing the standoffs to the bottom
of the ATC rack with a 6 mm hex wrench and a 16 mm
wrench. Set aside the M8 bolts.
2.
Identify the two sets of three holes on either side of the
machine table. You'll install the ATC rack's two standoffs
into two of the holes (the hole that's furthest to the left
is unused and remains open).
Figure 4-84: ATC rack standoff holes.
©Tormach® 2026
Specifications subject to change without notice.
Page 71
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 72

3.
Install the standoffs into the two holes with a 16 mm
wrench.
Figure 4-85: Installing the standoffs onto the machine.
4.
Turn the rack so that the mounting screws for the tool
forks are on the bottom of the rack, and then mount the
ATC rack to the top of the standoffs with the four M8
bolts that you set aside earlier.
Figure 4-86: Installing the rack onto the standoffs.
Inspect the ATC Control Board
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
2.
If you haven't yet done so, you must update your
controller to at least version 2.9.0 of PathPilot. From the
PathPilot interface, on the Status tab, select Update.
3.
Once PathPilot has been updated, from the Settings tab,
select Rack Tool Changer.
The Rack ATC tab displays next to the Status tab.
4.
In the rear Z-axis cover, on the ATC control board, inspect
the Power and Status LED lights. Confirm that they're
illuminated as detailed in the following table.
LED
Light
Power (green)
On
Status (amber)
Off
Adjust the ATC Air Pressure Settings
The ATC has three air pressure control settings that you must
adjust before operation.
Pressure Control Settings Overview
The three air pressure control settings are:
1.
Spindle Nose Seal and Dust Shoe Extend Pressure
Regulator (closest to the operator side of the machine
(X-))
2.
Dust Shoe Lift Pressure Regulator (furthest from the
operator side of the machine)
3.
Dust Shoe Lift Speed Control Valve
The Spindle Nose Seal and Dust Shoe Extend Pressure
Regulator has two functions:
l The ISO20 spindle has a positive pressure air seal around
the spindle nose. The constant flow of air from the
spindle nose keeps dust out of the spindle bearings
during operation. The pressure regulator controls the
flow rate of air that is purged from the spindle nose.
l This pressure regulator also adjusts the downward force
applied to the lifting dust shoe.
Both the spindle nose air seal and the downward force on the
lifting dust shoe require the same amount of air pressure. The
downward force on the lifting dust shoe should be enough to
fully extend the dust shoe but not enough to fold the bristles in
half when lifting the dust shoe with both hands.
The Dust Shoe Lift Pressure Regulator controls the upward
force applied to the lifting dust shoe when in the up position.
The pressure should be set such that the dust shoe fully lifts
when commanded and the dust shoe can still be pushed
downward with two fingers.
The Dust Shoe Lift Pressure Regulator should be adjusted after
adjusting the Spindle Nose Seal and Dust Shoe Extend Pressure
regulator.
The Dust Shoe Lift Speed Control Valve fitting is a one way
flow control valve and it controls how quickly the dust shoe
©Tormach® 2026
Specifications subject to change without notice.
Page 72
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.10 Install Accessory Components


---

## PDF Page 73

4: INSTALLATION
4.10 Install Accessory Components
moves upward when it is lifted. This valve should be open
when adjusting the Spindle Nose Air Seal and Dust Shoe
Extend Pressure Regulator and then fine tuned after setting
the pressure on the Dust Shoe Lift Pressure Regulator.
Adjust the Spindle Nose Air Seal and Dust Shoe Extend
Pressure Regulator
1.
At the back of the machine, connect the air line from the
air compressor to the FRL's air fitting inlet that you
connected earlier. Verify that the air compressor is set
between 90 psi and 120 psi.
Figure 4-87: Connecting the air compressor's air line
to the FRL.
2.
Identify the dust shoe lift speed control valve on the top
of the lifting dust shoe cylinder. Loosen the locking nut.
Then open the valve by turning the adjustment screw
counterclockwise 1-3 full turns.
Figure 4-88: Loosening the dust shoe lift speed control
valve.
3.
On the bottom of the ATC solenoid control panel, identify
the spindle nose air seal and dust shoe extend pressure
regulator, and pull down to unlock the pressure
regulator.
Figure 4-89: Unlocking the dust shoe extend pressure
regulator.
4.
Turn the knob clockwise to increase the air pressure until
you begin to hear air coming from the air seal around
the nose of the spindle.
5.
Place the palms of both hands below the bristles of the
lifting dust shoe and lift the dust shoe upward. Then
release the lifting dust shoe and allow it to extend.
a.
If the lifting dust shoe does not fully extend, turn the
air pressure regulator clockwise to increase the
pressure.
b.
If the bristles on the dust shoe bend too much when
lifting the dust shoe with both hands, turn the
pressure regulator counterclockwise to decrease the
pressure.
6.
Once the pressure is set properly, push the knob back up
to lock the pressure regulator.
Adjust the Dust Shoe Lift Pressure Regulator
1.
From the PathPilot interface, select Lift/Lower Dust
Shoe.
©Tormach® 2026
Specifications subject to change without notice.
Page 73
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 74

Figure 4-90: Dust Shoe button.
2.
On the bottom of the ATC solenoid control panel, identify
the dust shoe lift pressure regulator, and pull down to
unlock the pressure regulator.
Figure 4-91: Unlocking the dust shoe lift pressure
regulator.
3.
Turn the knob clockwise to increase the lifting pressure
until the dust shoe lifts all the way up.
4.
Using two fingers, push the lifting dust shoe downward.
Figure 4-92: Pressing down on the dust shoe.
5.
If you can't push the lifting dust shoe downward with
two fingers, turn the pressure regulator
counterclockwise to decrease the pressure.
6.
From the PathPilot interface, select Lift/Lower Dust
Shoe. The dust shoe goes back down.
Adjust the Dust Shoe Lift Speed Control Valve
1.
From the PathPilot interface, select Lift/Lower Dust
Shoe to lift the dust shoe. Observe the speed of how
quickly the dust shoe lifts.
2.
Select Lift/Lower Dust Shoe Button to lower the dust
shoe.
3.
On the top of the dust shoe lifting cylinder, identify the
dust shoe lift speed control valve.
Figure 4-93: Loosening the dust shoe lift speed control
valve.
4.
Adjust the dust shoe lifting speed as follows:
a.
Rotate the adjustment screw clockwise to decrease
the speed.
b.
Rotate the adjustment screw counterclockwise to
increase the speed.
5.
Repeat Steps 1 through 4 until the dust shoe lifts and
lowers at roughly the same speed.
Verify the Power Drawbar Function
1.
Identify the PDB button on the front of the spindle cover,
and press and hold the power drawbar button.
The power drawbar valve opens, and the power drawbar
opens inside of the spindle.
2.
Insert an ISO20 tool holder into the spindle and release
the power drawbar button.
The drawbar closes and locks the tool into the spindle.
Note: The power drawbar button does not lock
the PDB in the open position. The PDB closes
when the button is released.
©Tormach® 2026
Specifications subject to change without notice.
Page 74
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.10 Install Accessory Components


---

## PDF Page 75

4: INSTALLATION
4.10 Install Accessory Components
3.
While holding the tool in the spindle, select the Collet
button on the Rack ATC tab in the PathPilot interface.
The drawbar opens, releasing the tool from the spindle,
and remains in the open position.
Note: The collet button in PathPilot opens the
power drawbar and locks it in the open position
until either the collet button is pressed again or
the PDB button on the front of the spindle is
pressed and released.
4.
Remove the tool from the spindle. Then, select Collet.
The drawbar closes.
5.
Select Collet to lock the drawbar in the open position.
Then, select Air Blast.
Air purges from the center of the spindle until you press
the button again.
6.
Select Air Blast again to turn the blast off.
Note: The Air Blast button is used to test the air
blast from the center of the spindle. The air
blast is used to clear chips, dust and debris
from the tool shanks when the machine
performs an Automatic Tool Change.
Verify the Spindle Direction
NOTICE! You must verify the spindle direction before
operating the machine. If you don't, you could operate the
spindle in the reverse direction, which could damage the
spindle.
1.
Remove the collet nut from an ISO20 tool holder and put
a piece of tape onto the side of the tool holder. Draw a
vertical line onto the tape. Then install the tool holder
into the spindle.
Figure 4-94: Tape and line indicator installed into the
spindle.
2.
From the PathPilot interface, on the Main tab, in the
RPM DRO field, type 10,000. Then select the Enter key.
3.
While observing the spindle, select Fwd, and then select
Stop.
The spindle turns on, rotates counterclockwise, and turns
off.
Figure 4-95: Spindle rotating counterclockwise.
©Tormach® 2026
Specifications subject to change without notice.
Page 75
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 76

4.
Depending on the direction in which the spindle rotated
in Step 3, do one of the following:
l Rotates Clockwise (Viewed from Above) You've
completed the spindle function verification. Go to
"Align the ATC Rack" (below).
l Rotates Counterclockwise (Viewed from Above)
Power off the machine and, on the variable frequency
drive (VFD), swap wire U and wire V. Then, power on
the machine, and repeat Steps 2 through 3.
Figure 4-96: Wire U and wire V on the VFD.
Align the ATC Rack
Before using the 24R ATC for the first time, you must set the
tool change positions for tool pockets A and J to align the ATC
rack to the machine's reference position.
1.
Install an ISO20 holder into the spindle.
2.
Jog the machine in front of the left-most pocket (Pocket
A) of the ATC rack.
3.
Jog the spindle down to visually align the ATC fork with
the tools holder's groove.
Figure 4-97: Aligning the ATC fork with the tool
holder's groove.
4.
Jog the machine in the Y+ direction to move the tool
holder into the ATC rack while watching the tool fork.
You want to see both forks start to bend out at the same
time when the tool starts engaging the fork. Make any
adjustments needed in the X direction.
Figure 4-98: Tool forks bending out together.
5.
Continue jogging the machine in the Y+ direction until
the holder is seated in the ATC fork. You can determine
this visually or by rotating the tool by hand. When the
tool holder touches the back of the fork, you'll feel the
drag increase.
Figure 4-99: Rotating the tool holder to feel when the
drag increases.
6.
From the PathPilot interface, select Set TC POS below
pocket A to teach the location for Pocket A.
Figure 4-100: Set TOC POS button on Rack ATC Setup
tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 76
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.10 Install Accessory Components


---

## PDF Page 77

4: INSTALLATION
4.10 Install Accessory Components
7.
Jog the machine in the Y- direction to remove the tool
from the ATC rack.
Note: Keep the Z height at the same position to
help reduce the setup time for Pocket J.
8.
Jog the machine over to the right-most pocket (Pocket J),
and repeat Steps 3-5.
9.
From the PathPilot interface, Set TC POS below pocket J
to teach the location for Pocket J.
10.
Jog the machine in the Y- direction to remove the tool
from the ATC rack.
11.
You can make fine adjustments by directly editing the TC
positions on the Rack ATC Setup tab. It's important to
note that what's displayed are the G53 or machine
coordinates. To have your machine's DRO match these
values, you must:
l Have a work coordinate active with all values set to 0,
and
l Have T0 active or a tool with a 0 in. offset.
Run the Spindle Break-In Program
To prolong bearing life and reduce spindle noise, it's important
to run the spindle through a break-in procedure before
operating the machine. Complete the following steps to run
the spindle through a break-in cycle. You only must perform
this procedure once for a new spindle.
Note: The total cycle time for the spindle break-in
procedure is 195 minutes.
1.
If you haven't yet done so, you must first install the
spindle chiller before running this break-in program. For
information, see the operator's manual.
2.
Load a tool into the spindle. You can use an empty tool
holder for this procedure.
3.
From the PathPilot interface, on the File tab, open the
Examples folder. Then, double click the program called
24R_spindle_breakin.ngc.
Figure 4-101: Examples folder on the File tab.
The program loads on the Main tab.
4.
Select Cycle Start.
The spindle runs through the three-hour break-in
procedure, where it rotates in increments of 10,000,
20,000, and 24,000 rpm. After the program finishes, the
break-in procedure is complete.
4.10.2 Install the Vacuum Pump
The (optional) Storm Vacuum Pump (PN 50462) is supplied
with documentation from the manufacturer. For information
on installing and maintaining the vacuum pump, see the
manufacturer’s manual.
Note: The hose supplied with the vacuum pump may
fit tightly on the machine. If necessary, carefully
warm the end of the hose with a low-setting heat
gun or a hair dryer to soften it before installation.
4.10.3 Install the Dust Collector
The (optional) Dust Collector (PN 50395) is supplied with
documentation from the manufacturer. For information on
installing and maintaining the dust collector, see the
manufacturer’s manual.
©Tormach® 2026
Specifications subject to change without notice.
Page 77
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 78

4.11 SET UP THE PATHPILOT CONTROLLER
Before operating your machine, configure in PathPilot the date,
time, keyboard language, and — if applicable — the optional
Touch Screen Kit (PN 35575).
4.11.1 Specify the Date and Time
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
4.11.2 Specify the Keyboard Language
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
4.11.3 Configure the Optional Touch Screen Kit
Before using a touch screen, you must make sure that it's
configured and calibrated. To calibrate it:
1.
From the PathPilot interface, on the Main tab, in the
MDI Line DRO field, type ADMIN TOUCHSCREEN. Then
select the Enter key.
2.
Follow the on-screen instructions.
4.11.4 Update PathPilot
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
Figure 4-102: Update button on the Status tab.
3.
From the Software Update dialog box, select Check
Online.
Figure 4-103: Software Update dialog box.
4.
Select Install.
Figure 4-104: Install button on the Software Update
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
Page 78
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
4: INSTALLATION
4.11 Set Up the PathPilot Controller


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
Vacuum Workholding
The machine table is designed for vacuum fixturing. For
information about installing the optional Storm Vacuum Pump
(PN 50462), refer to the documentation from the
manufacturer.
Note: The hose supplied with the vacuum pump may
fit tightly on the machine. If necessary, carefully
warm the end of the hose with a low-setting heat
gun or a hair dryer to soften it before installation.
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
6.2.5 Conversational Tab
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
l Turn on feeds and speeds suggestions when using
conversational programming.
For information, see "Enable Feeds and Speeds
Suggestions in Conversational Routines" (page 116).
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
6.2.5 Conversational Tab
Figure 6-7: Conversational tab.
From the Conversational tab, you can do the following
activities:
l Use different functions to create simple G-code
programs in PathPilot.
For information, see "About Conversational
Programming" (page 101).
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
7.1.2 Edit G-Code
97
7.1.3 Read G-Code
98
7.1.4 Use Conversational Programming
101
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
7.1.2 Edit G-Code
In PathPilot, there are two ways to edit G-code:
Edit G-Code with a Text Editor
97
Edit G-Code with Conversational Programming
97
Edit G-Code with a Text Editor
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
Edit G-Code with Conversational Programming
You can edit .nc files that are on the PathPilot controller. If the
.nc file is in the USB Files window, you must first transfer it to
the controller; go to "Transfer Files to and From the Controller"
(on the previous page).
To edit G-code with conversational programming:
©Tormach® 2026
Specifications subject to change without notice.
Page 97
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 98

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
98
Create a New Job Assignment
98
Load an Existing G-Code File
98
Edit a Job Assignment
98
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
7.1.4 Use Conversational Programming
To create simple parts, use the conversational programming
feature in PathPilot.
About Conversational Programming
101
Create a Face on a Part
101
Create a Profile on a Part
103
Create a Pocket on a Part
104
Create Hole Locations on a Part (Drill)
106
Create Threads on a Part
108
Create Text to Engrave on a Part
109
Import a DXF File
110
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
Page 101
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 102

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
Page 102
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 103

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
For information on using conversational programming in
PathPilot to face a part, see "Create a Face on a Part"
(page 101).
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
Page 103
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 104

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
Page 104
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 105

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
Page 105
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 106

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
Create Hole Locations on a Part (Drill)
Using conversational programming, you can program PathPilot
to make multiple holes on a part. For information, see About
Drilling.
Before You Begin
Before you begin, you must verify that you enter the program
values considering the following:
l In the Conversational DROs group, the value in the Z
Clear DRO field must be set to clear any obstructions
between hole changes.
To make a specific hole pattern of evenly spaced holes around
a circumference (also know as a bolt pattern):
1.
From the Conversational tab, select the Drill tab.
Figure 7-19: Drill tab on the Conversational tab.
2.
From the Drill tab, select the Circular tab.
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
Go to "Create a Drilling Sequence" (on the next page).
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
From the Conversational tab, select the Drill tab.
Figure 7-20: Drill tab on the Conversational tab.
2.
From the Drill tab, select the Pattern tab.
©Tormach® 2026
Specifications subject to change without notice.
Page 106
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 107

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
3.
In the Location table, select the row, then select the cell
to edit.
Holes indicated in the Location table are completed from
top to bottom.
4.
Go to "Create a Drilling Sequence" (below).
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
About Drilling
PathPilot has the following options to define the locations:
l Pattern Use X and Y locations to make a list of hole
locations.
l Circular Use a circumference to make a specific pattern
of evenly spaced holes.
For information on using conversational programming in
PathPilot to drill holes, see .
During a drilling routine, PathPilot uses one of the following
canned G-code cycles, depending on the entries in each DRO
field:
l G81 Drill
l G82 Drill with dwell
l G83 Drill with peck
Note: The features can't be combined, because
peck cancels dwell.
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
2.
In the Spot Tool DOC DRO field, type the depth of cut for
the spot drilling sequence.
Note: To skip a spot drilling sequence, leave the
Spot Tool DOC DRO field blank.
3.
In the Peck DRO field, type the distance for each peck.
Note: Any entry greater than 0 typed in the
Peck DRO field replaces G81 with G83 in the G-
code. For information, see "Drilling Reference"
(below).
4.
Set the parameters for the hole in the Z range: 
a.
In the Z Start DRO field, type the location for the first
Z pass.
b.
In the Z End DRO field, type the location for the last
Z pass.
Drilling Reference
PathPilot uses the following terms when drilling on a part in
conversational programming:
l Start Angle Specifies the angle from angle 0. Angle 0 is
a base (horizontal) line from the center point going right
(east) to the circumference. The angle from the base
line can be:
©Tormach® 2026
Specifications subject to change without notice.
Page 107
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 108

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
Create Threads on a Part
Using conversational programming, you can program PathPilot
to take helical tool paths around a boss or inside a hole to
create external or internal threads. For information, see
"About Thread Milling" (on the next page).
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
©Tormach® 2026
Specifications subject to change without notice.
Page 108
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 109

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
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
For information, see "Thread Milling Reference"
(below).
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
(on the previous page).
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
©Tormach® 2026
Specifications subject to change without notice.
Page 109
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 110

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
(page 96).
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
©Tormach® 2026
Specifications subject to change without notice.
Page 110
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files


---

## PDF Page 111

7: PATHPILOT TOOLS AND FEATURES
7.1 Create and Load G-Code Files
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
(page 96).
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
Page 111
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


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
7.2.9 Enable Feeds and Speeds Suggestions in
Conversational Routines
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
7.2.9 Enable Feeds and Speeds Suggestions in
Conversational Routines
You can use PathPilot to automatically calculate feeds and
speeds. For more information, see "Use Feeds and Speeds
Suggestions" (page 139).
From the Settings tab, select Conversational Feeds and
Speeds.
Figure 7-40: Settings tab.
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
Images During an M00 or M01 Break" (page 189).
©Tormach® 2026
Specifications subject to change without notice.
Page 119
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

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
7.5.14 Use Feeds and Speeds Suggestions
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
For more information, see "Use a USB Camera" (page 117).
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
7.5.14 Use Feeds and Speeds Suggestions
Note: Calculating feeds and speeds requires that
PathPilot has relevant details about the tooling. If you
haven't yet done so, go to "Create Tool Descriptions"
(page 141).
©Tormach® 2026
Specifications subject to change without notice.
Page 139
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 140

You can use PathPilot to automatically calculate feeds and
speeds: from the Conversational tab, in the Conversational
DROs group, select a material, a sub-type, and a tool.
1.
If you haven't yet done so, enable the conversational
feeds and speeds setting. From the Settings tab, select
Conversational Feeds and Speeds.
Figure 7-95: Settings tab.
2.
From the Conversational tab, locate the Material
dropdowns in the Conversational DROs group.
Figure 7-96: Feeds and speeds suggestions on the
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
Figure 7-97: Refresh button on the Conversational tab.
Use Additional Provided Information
The following tips are displayed based on the calculations that
PathPilot is performing:
l Chip Load Information Chip load — the amount of
material removed per tooth — is based on the number
of flutes, RPM, and feed rate.
©Tormach® 2026
Specifications subject to change without notice.
Page 140
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs


---

## PDF Page 141

7: PATHPILOT TOOLS AND FEATURES
7.5 Control G-Code Programs
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

## PDF Page 161

8: BASIC OPERATIONS
8.9 Set Work Offsets
8.9 SET WORK OFFSETS
To set the current axis location to zero in the active work
coordinate system:
Select Zero [Axis].
Figure 8-18: Work Offset DRO fields.
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
Figure 8-19: Work offset indicated in the PathPilot
interface.
Note: The values in the Work Offset
DRO fields update to indicate the new
location of each axis in the new work offset.
For more information on using work offsets, see "About Work
Offsets" (below).
8.9.1 Set the Z-Axis Work Offset with an
Electronic Tool Setter (ETS)
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
Figure 8-20: Work tab on the Offsets tab.
The machine moves down (-Z) until the tool contacts the
ETS. The Z-axis offset updates for the current work
offset.
8.9.2 About Work Offsets
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
©Tormach® 2026
Specifications subject to change without notice.
Page 161
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 162

Work Offset Naming
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
Page 162
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
8: BASIC OPERATIONS
8.9 Set Work Offsets


---

## PDF Page 163

PROGRAMMING
IN THIS SECTION, YOU'LL LEARN:
About the languages that are understood and interpreted by PathPilot.
CONTENTS
9.1 Before You Begin
164
9.2 Programming Overview
165
9.3 Programming G-Code
171
9.4 Programming Canned Cycles
183
9.5 Programming M-Code
188
9.6 Programming Input Codes
192
9.7 Advanced Programming
193


---

## PDF Page 164

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
©Tormach® 2026
Specifications subject to change without notice.
Page 164
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.1 Before You Begin


---

## PDF Page 165

9: PROGRAMMING
9.2 Programming Overview
9.2 PROGRAMMING OVERVIEW
Read the following sections for a G-code overview:
9.2.1 About G-Code Programming Language
165
9.2.2 G-Code Formatting Reference
165
9.2.3 Supported G-Codes Reference
169
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
Page 165
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 166

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
Page 166
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.2 Programming Overview


---

## PDF Page 167

9: PROGRAMMING
9.2 Programming Overview
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
Spindle on/off (M03, M05)
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
Page 167
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 168

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
G85, G86,
G88, G89}
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
{}{M03, M05}
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
Page 168
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.2 Programming Overview


---

## PDF Page 169

9: PROGRAMMING
9.2 Programming Overview
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
G86
Boring cycle
G88
Boring cycle
G89
Boring cycle
G90,
G90.1
Arc distance mode
©Tormach® 2026
Specifications subject to change without notice.
Page 169
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 170

G-Code
Description
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
Page 170
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.2 Programming Overview


---

## PDF Page 171

9: PROGRAMMING
9.3 Programming G-Code
9.3 PROGRAMMING G-CODE
Read the following sections as a G-code reference:
9.3.1 About the Examples Used
171
9.3.2 Rapid Linear Motion (G00)
171
9.3.3 Linear Motion at Feed Rate (G01)
171
9.3.4 Arc at Feed Rate (G02 and G03)
172
9.3.5 Dwell (G04)
174
9.3.6 Set Offsets (G10)
174
9.3.7 Plane Selection (G17, G18, G19)
175
9.3.8 Length Units (G20 and G21)
175
9.3.9 Return to Predefined Position (G28 and G28.1)
175
9.3.10 Return to Predefined Position (G30 and G30.1)
176
9.3.11 Automatically Measure Tool Lengths with an ETS
(G37 and G37.1)
176
9.3.12 Straight Probe (G38.x)
177
9.3.13 Cutter Compensation (G40, G41, G42)
178
9.3.14 Dynamic Cutter Compensation (G41.1 and G42.1) 178
9.3.15 Apply Tool Length Offset (G43)
179
9.3.16 Engrave Sequential Serial Number (G47)
179
9.3.17 Cancel Tool Length Compensation (G49)
179
9.3.18 Absolute Coordinates (G53)
179
9.3.19 Select Work Offset Coordinate System (G54 to
G54.1 P500)
180
9.3.20 Set Exact Path Control Mode (G61)
180
9.3.21 Set Blended Path Control Mode (G64)
180
9.3.22 Distance Mode (G90 and G91)
180
9.3.23 Arc Distance Mode (G90.1 and G91.1)
180
9.3.24 Temporary Work Offsets (G92, G92.1, G92.2, and
G92.3)
180
9.3.25 Feed Rate Mode (G93, G94, and G95)
181
9.3.26 Spindle Control Mode (G96 and G97)
181
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
©Tormach® 2026
Specifications subject to change without notice.
Page 171
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 172

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
Page 172
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 173

9: PROGRAMMING
9.3 Programming G-Code
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
Page 173
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 174

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
174
Set Coordinate System (G10 L2)
174
Set Tool Table (G10 L10)
174
Set Tool Table (G10 L11)
175
Set Coordinate System (G10 L20)
175
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
Page 174
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 175

9: PROGRAMMING
9.3 Programming G-Code
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
9.3.7 Plane Selection (G17, G18, G19)
To select the XY-plane as active, program: G17
To select the XZ-plane as active, program: G18
To select the YZ-plane as active, program: G19
The active plane determines how the tool path of an arc (G02
or G03) or canned cycle (G73, G81 through G89) is
interpreted.
9.3.8 Length Units (G20 and G21)
To set length units to inches, program: G20
To set length units to millimeters, program: G21
Tip! Program either G20 or G21 near the beginning
of a program, before any motion occurs. Avoid using
either one anywhere else in the program. It's your
responsibility to make sure that all numbers are
appropriate for use with the current length units.
9.3.9 Return to Predefined Position (G28 and G28.1)
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
©Tormach® 2026
Specifications subject to change without notice.
Page 175
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 176

If no positions are stored with G28.1, then all axes will go to
the machine origin.
Troubleshooting
It's an error if:
l Cutter Compensation is turned on
9.3.10 Return to Predefined Position (G30 and
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
9.3.11 Automatically Measure Tool Lengths with an
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
Page 176
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 177

9: PROGRAMMING
9.3 Programming G-Code
l P~ is a symmetrical tolerance. It measures the tool
length but, instead of storing it in the tool table,
compares it to the length in the tool table. If the
difference exceeds the P tolerance (positive or negative),
the G-code program stops.
For example, G37 P0.005 passes if the measured
length is within ±0.005 of the current tool table length.
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
9.3.12 Straight Probe (G38.x)
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
©Tormach® 2026
Specifications subject to change without notice.
Page 177
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 178

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
9.3.13 Cutter Compensation (G40, G41, G42)
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
9.3.14 Dynamic Cutter Compensation (G41.1 and
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
©Tormach® 2026
Specifications subject to change without notice.
Page 178
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 179

9: PROGRAMMING
9.3 Programming G-Code
l Cutter Compensation is commanded to turn on when it is
already on
9.3.15 Apply Tool Length Offset (G43)
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
9.3.16 Engrave Sequential Serial Number (G47)
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
9.3.17 Cancel Tool Length Compensation (G49)
To cancel tool length compensation, program: G49
9.3.18 Absolute Coordinates (G53)
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
©Tormach® 2026
Specifications subject to change without notice.
Page 179
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 180

9.3.19 Select Work Offset Coordinate System (G54
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
For information, see "About Work Offsets" (page 161).
Troubleshooting
It's an error if:
l One of these G-codes is used while cutter radius
compensation is on
l The X- and Z-axis work offset values are stored in
parameters corresponding to the system in use (i.e.,
System 1 X=5221, Z=5223; System 2 X=5141, Z=5143; up
to System 9 X= 5381, Z = 5383).
9.3.20 Set Exact Path Control Mode (G61)
To put the machining system into exact path mode, program:
G61
9.3.21 Set Blended Path Control Mode (G64)
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
9.3.22 Distance Mode (G90 and G91)
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
9.3.23 Arc Distance Mode (G90.1 and G91.1)
G90.1 – Absolute distance mode for I and K offsets. When
G90.1 is in effect, I and K both must be specified with
G02/G03 for the XZ plane or it is an error.
G91.1 – Incremental distance mode for I and K offsets.
G91.1 returns I and K to their default behavior.
9.3.24 Temporary Work Offsets (G92, G92.1, G92.2,
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
©Tormach® 2026
Specifications subject to change without notice.
Page 180
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 181

9: PROGRAMMING
9.3 Programming G-Code
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
9.3.25 Feed Rate Mode (G93, G94, and G95)
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
9.3.26 Spindle Control Mode (G96 and G97)
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
Page 181
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 182

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
Page 182
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.3 Programming G-Code


---

## PDF Page 183

9: PROGRAMMING
9.4 Programming Canned Cycles
9.4 PROGRAMMING CANNED CYCLES
Read the following sections for reference:
9.4.1 Canned Cycles Reference
183
9.4.2 High Speed Peck Drill (G73)
184
9.4.3 Cancel Canned Cycles (G80)
184
9.4.4 Drilling Cycle (G81)
184
9.4.5 Simple Drilling Cycle (G82)
186
9.4.6 Peck Drilling Cycle (G83)
186
9.4.7 Boring Cycle (G85)
186
9.4.8 Boring Cycle (G86)
186
9.4.9 Boring Cycle (G88)
186
9.4.10 Boring Cycle (G89)
186
9.4.1 Canned Cycles Reference
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
l X, Y, and Z words are all missing during a canned cycle
l A P number is required and a negative P number is used
©Tormach® 2026
Specifications subject to change without notice.
Page 183
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 184

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
9.4.2 High Speed Peck Drill (G73)
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
9.4.3 Cancel Canned Cycles (G80)
To cancels all canned cycles, program: G80
It's okay to program G80 if no canned cycles are in effect.
After a G80, the motion mode must be set with G00 (or any
other motion mode G word). If motion mode is not set after
G80, this error message appears: "Cannot use axis values
without a g code that uses them."
9.4.4 Drilling Cycle (G81)
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
Page 184
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.4 Programming Canned Cycles


---

## PDF Page 185

9: PROGRAMMING
9.4 Programming Canned Cycles
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
Page 185
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 186

N50 X2
N55 X1
N60 G80 G00 Z1 (Cancel Canned Cycles)
N65 X0 Y0
N70 M05
N75 M30
9.4.5 Simple Drilling Cycle (G82)
The G82 cycle is intended for drilling.
Program: G82 X~ Y~ Z~ A~ R~ L~ P~
The G82 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate to the Z position.
Step 3: Dwell for the P number of seconds.
Step 4: Dwell for the P number of seconds.
9.4.6 Peck Drilling Cycle (G83)
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
9.4.7 Boring Cycle (G85)
The G85 cycle is intended for boring or reaming, but could be
used for drilling or milling.
Program: G85 X~ Y~ Z~ A~ R~ L~
The G85 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate to the Z position.
Step 3: Retract the Z-axis at the current feed rate
to clear Z.
9.4.8 Boring Cycle (G86)
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
9.4.9 Boring Cycle (G88)
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
9.4.10 Boring Cycle (G89)
The G89 cycle is intended for boring. This cycle uses a P
number, where P specifies the number of seconds to dwell.
Program: G89 X~ Y~ Z~ A~ R~ L~ P~
©Tormach® 2026
Specifications subject to change without notice.
Page 186
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.4 Programming Canned Cycles


---

## PDF Page 187

9: PROGRAMMING
9.4 Programming Canned Cycles
The G89 cycle is as follows:
Step 1: Preliminary canned cycle motion.
Step 2: Move the Z-axis only at the current feed
rate to the Z position.
Step 3: Dwell for the P number of seconds.
Step 4: Retract the Z-axis at the current feed rate
to clear Z.
©Tormach® 2026
Specifications subject to change without notice.
Page 187
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 188

9.5 PROGRAMMING M-CODE
Read the following sections for reference:
9.5.1 Supported M-Codes Reference
188
9.5.2 Program Stop and Program End (M00, M01, M02,
and M30)
188
9.5.3 Spindle Control (M03 and M05)
189
9.5.4 Tool Change (M06)
189
9.5.5 Coolant Control (M08 and M09)
190
9.5.6 Dust Shoe Control (M27 and M28)
190
9.5.7 Override Control (M48 and M49)
190
9.5.8 Feed Override Control (M50)
190
9.5.9 Spindle Speed Override Control (M51)
190
9.5.10 Set Current Tool Number (M61)
190
9.5.11 Set Output State (M64 and M65)
190
9.5.12 Wait on Input (M66)
191
9.5.13 USB Camera Control (M301, M302, M303)
191
9.5.1 Supported M-Codes Reference
M-
Code
Description
M00
Program stop
M01
Optional program stop
M02
Program end
M03
Rotate spindle clockwise
M05
Stop spindle rotation
M07,
M08
Coolant on
M09
All coolant off
M27
Dust shoe lift
M28
Dust shoe lower
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
M-
Code
Description
M66
Wait on an input
Note: M64 through M66 is only useful
with a USB M-Code I/O Interface Kit (PN
32616).
M98
Call subroutine
M99
Return from subroutine/repeat
M301,
M302,
M303
USB camera control
9.5.2 Program Stop and Program End (M00, M01,
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
©Tormach® 2026
Specifications subject to change without notice.
Page 188
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.5 Programming M-Code


---

## PDF Page 189

9: PROGRAMMING
9.5 Programming M-Code
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
For more information, see "Use a USB Camera" (page 117).
9.5.3 Spindle Control (M03 and M05)
To start the spindle turning clockwise at the currently
programmed speed, program: M03
The speed is programmed by the S word.
To stop the spindle from turning, program: M05
It's okay to use M03 if the spindle speed is set to 0; if this is
done, the spindle won’t start turning. If later the spindle speed
is set above 0, the spindle starts turning. It is permitted to use
M03 when the spindle is already turning, or to use M05 when
the spindle is already stopped.
9.5.4 Tool Change (M06)
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
Page 189
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 190

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
9.5.5 Coolant Control (M08 and M09)
To turn flood coolant on, program: M08
To turn all coolant off, program: M09
It's always okay to use any of these commands, regardless of
what coolant is on or off.
9.5.6 Dust Shoe Control (M27 and M28)
To raise or retract the dust shoe, program: M27
To lower or extend the dust shoe, program: M28
9.5.7 Override Control (M48 and M49)
To enable the speed and feed override, program: M48
To disable both overrides, program: M49
It's okay to enable or disable the switches when they are
already enabled or disabled.
9.5.8 Feed Override Control (M50)
To enable the feed rate override control, program: M50 P1
The P1 is optional.
To disable the feed rate control, program: M50 P0
When feed rate override control is disabled, the feed rate
override slider has no influence, and all motion is executed at
programmed feed rate (unless there is an adaptive feed rate
override active).
9.5.9 Spindle Speed Override Control (M51)
To enable the spindle speed override control, program: M51
P1
The P1 is optional.
To disable the spindle speed override control, program: M51
P0
When spindle speed override control is disabled, the spindle
speed override slider has no influence, and the spindle speed is
equal to the value of the S word.
9.5.10 Set Current Tool Number (M61)
To change the current tool number while in MDI or manual
mode, program: M61 Q~
l Q~ is the tool number
Troubleshooting
It's an error if:
l Q~ is not 0 or greater
9.5.11 Set Output State (M64 and M65)
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
Page 190
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.5 Programming M-Code


---

## PDF Page 191

9: PROGRAMMING
9.5 Programming M-Code
9.5.12 Wait on Input (M66)
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
9.5.13 USB Camera Control (M301, M302, M303)
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
For more information, see "Use a USB Camera" (page 117).
©Tormach® 2026
Specifications subject to change without notice.
Page 191
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 192

9.6 PROGRAMMING INPUT CODES
Read the following sections for reference:
9.6.1 Feed Rate (F)
192
9.6.2 Spindle Speed (S)
192
9.6.3 Change Tool Number (T)
192
9.6.1 Feed Rate (F)
To set the feed rate, program: F~
Depending on the setting of the feed mode toggle, the rate
may be in units-per-minute or units-per-rev of the spindle. The
units are those defined by the G20/G21 mode. The feed rate
may sometimes be overridden.
9.6.2 Spindle Speed (S)
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
9.6.3 Change Tool Number (T)
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
Page 192
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.6 Programming Input Codes


---

## PDF Page 193

9: PROGRAMMING
9.7 Advanced Programming
9.7 ADVANCED PROGRAMMING
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
9.7.1 Parameters
193
9.7.2 Expressions
195
9.7.3 Subroutines
196
9.7.1 Parameters
Read the following sections for reference:
Parameters Reference
193
Numbered Parameters Reference
194
Subroutine Parameters Reference
194
Named Parameters Reference
194
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
©Tormach® 2026
Specifications subject to change without notice.
Page 193
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 194

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
©Tormach® 2026
Specifications subject to change without notice.
Page 194
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.7 Advanced Programming


---

## PDF Page 195

9: PROGRAMMING
9.7 Advanced Programming
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
9.7.2 Expressions
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
195
Functions Reference
195
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
Page 195
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 196

l FIX[arg]: Round down to integer
l FUP[arg]: Round up to integer
l ROUND[arg]: Round to nearest integer
l LN[arg]: Base-e logarithm
l SIN[arg]: Sine
l SQRT[arg]: Square root
l TAN[arg]: Tangent
l EXISTS[arg]: Check named parameter
9.7.3 Subroutines
Subroutines are subprograms that are called from inside
another program.
Read the following sections for reference:
Subroutines Reference
196
Conditional Subroutines Reference
197
Repeating Subroutines Reference
197
Looping Subroutines Reference
197
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
Page 196
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.7 Advanced Programming


---

## PDF Page 197

9: PROGRAMMING
9.7 Advanced Programming
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
Page 197
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support


---

## PDF Page 198

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
Page 198
UM10564: 24R Operator's Manual(Version 0826A)
For the most recent version, see tormach.com/support
9: PROGRAMMING
9.7 Advanced Programming


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
