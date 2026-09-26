# Tormach PCNC 1100 Operator's Manual

> Curated reference: installation/commissioning and programming documentation has been excluded. Remaining manufacturer text is retained verbatim, including safety, operation, maintenance, repair, and troubleshooting where present. Original page/section numbering is preserved and may have gaps; any original page count describes the full source, not this excerpt. Follow references to excluded sections in the linked original manual.


Source: [https://tormach.com/media/asset/u/m/um10349_pcnc1100_manual_0520a_web.pdf](https://tormach.com/media/asset/u/m/um10349_pcnc1100_manual_0520a_web.pdf)

Converted from official manufacturer PDF documentation.

---

# **Tormach**<sup>®</sup> **PCNC 1100 Operator Manual** 

™ 



###### **_IMPORTANT! Read and understand all operator manual safety precautions and instructions before attempting PCNC 1100 installation, operation, or maintenance._** 



**Questions or comments? Please email us: info@tormach.com All rights reserved.** 

**UM10349_PCNC1100_Manual_0520A Document Part Number: 35426 ©2015 Tormach Inc.** 

**<mark>Preface</mark>** 

#### **SAVE THESE INSTRUCTIONS!** 

This manual contains important safety warnings and operating instructions for the Tormach PCNC 1100 mill. Refer to these instructions before attempting installation, operation or maintenance. Keep these instructions together with your PCNC 1100 mill so they are readily accessible. The most recent version of this manual is available at: www.tormach.com/documents 

#### **Read Before Operating** 

Read and follow all warnings, cautions, and operating instructions before operating this mill. Failure to do so may result in voided warranty, property damage, serious injury or death. 

|**Symbol**|**Description**|**Example**|
|---|---|---|
||**_WARNING!_**_Indicates a hazard which, if not_<br>_avoided, could result in death or serious injury._|**_WARNING! Ejection Hazard:_**_Tools and_<br>_workpieces must be clamped properly. Failure to do_<br>_so may result in serious injury or death._|
||**_CAUTION!_**_Indicates a hazard which, if not_<br>_avoided, could result in injury or mill damage._|**_CAUTION! Sharp Objects:_**_Be sure to wear_<br>_gloves when uncrating mill. Failure to do so may_<br>_result in serious injury._|
|**_IMPORTANT!_**|**_IMPORTANT!_**_Addresses important practices not_<br>_related to personal injury._|**_IMPORTANT!_**_Damage to mill may occur if_<br>_motor weight is supported by motor wires._|
|**_NOTE:_**|**_NOTE:_**_Provides additional information, clarification,_<br>_reminders, or helpful hints._|**_NOTE:_**_For further information on automatic oiler_<br>_troubleshooting, refer to operator manual._|



#### **Safety Overview** 

Any machine tool is potentially dangerous. The automation inherent in a CNC machine presents added risk not present in a manual mill. Tormach CNC mills can deliver sufficient force to break brittle tools, crush bones, and tear flesh. 

This manual provides guidance on safety precautions and techniques, but because the specifics of any one workshop (or other local conditions) can vary greatly, Tormach accepts no responsibility for machine performance or any damage or injury caused by its use. It is your responsibility to ensure you understand the implications of what you are doing and comply with any legislation and codes of practice applicable to your city, state or nation. 

Chapter 1 

UM10349_PCNC1100_Manual_0520A 

2 

**<mark>Preface</mark>** 

#### **Machine Safety** 

Safe operation of the machine depends on its proper use and the precautions taken by the operator. Read and understand this manual prior to mill use. Only trained personnel — with a clear and thorough understanding of its operation and safety requirements — should operate this mill. 

###### **General Safety:** 

- Wear OSHA-approved safety glasses, safety shoes, and ear protection. 

- Remove loose-fitting clothing, neckties, gloves, and jewelry. 

- Tie up long hair or secure under a hat. 

- Never operate a machine after consuming alcohol or taking medication. 

- Keep work area well lit and deploy additional lighting, if needed. 

###### **Operational Safety:** 

- Understand CNC mills are automatically controlled and may start at any time. 

- Do not leave machine unattended during operation. 

- Always power off machine when not in use. 

- Never operate with unbalanced tooling or spindle fixtures. 

- Remove all tools (wrenches, chuck keys, etc.) from spindle and machine table before starting operations; loose items can become dangerous projectiles. 

- Use adequate work clamping; loose workpieces can become dangerous projectiles. 

- Protect your hands. Stop machine spindle and ensure mill motion has stopped before: 

   - Reaching into any part of the machine motion envelope 

   - Changing tools, parts or adjusting the workpiece 

   - Changing belt/pulley position 

   - Clearing away chips, oil or coolant; always use a chip scraper or brush 

   - Making an adjustment to part, fixture, coolant nozzle or when taking measurements 

   - Removing protective shields or safeguards; never reach around a guard 

- Keep work area clear of clutter as mill motion can occur when keys are accidently pressed or objects fall on keyboard, resulting in unexpected motion. 

- Position clamping attachments clear of tool path. Be aware of workpiece cutoffs that could be cut free during operations and become dangerous projectiles. 

- Always use proper feeds/speeds, as well as depth/width of cut to prevent tool breakage. 

UM10349_PCNC1100_Manual_0520A 

Chapter 1 

3 

### **<mark>Preface</mark>** 

- Check for damaged tools/workpieces and cease operations if detected; replace before restarting operations as these can become dangerous projectiles. Never use longer or larger tools than necessary. 

- Chips and dust from certain materials (e.g., magnesium) can be flammable. Fine dust from normally non-flammable materials may be flammable or even explosive. 

- Chips, dust, and vapors from certain materials can be toxic. Always check the Materials Safety Data Sheet (MSDS) for each material. 

**_IMPORTANT:_** _It is the responsibility of the employer/operator to provide and ensure point of operation safeguarding per the following:_ 

- OSHA 1910.212 – General Requirements for All Machines 

- OSHA 1910.212 – Milling Machines, point of operation safeguarding 

- ANSI B11.22-2002 Safety Requirements for Turning Centers and Automatic Numerically Controlled Turning Machines 

- ANSI B11.TR3-2000 Risk Assessment and Risk Reduction – A Guideline to Estimate, Evaluate, and Reduce Risks Associated with Machine Tools 

- Safety Requirements for Construction, Care, and Use of Drilling, Milling and Boring Machines (ANSI B11.8-1983). Available from American National Standards Institute, 1430 Broadway, New York, New York 10018 

- Concepts and Techniques of Machine Safeguarding (OSHA Publication Number 3067). Available from The Publication Office – OSHA, U.S. Department of Labor, 200 Constitution Avenue, NW, Washington, DC 20210 

#### **Electrical Safety** 

**_WARNING! Electrical Shock Hazard:_** _Be sure to power off machine before making any electrical modifications. Failure to do so may result in serious injury or death._ 

**Input Power:** The PCNC 1100 has two electrical power inputs, primary and secondary. The 230 VAC primary input supplies axis and spindle power, while the 115 VAC secondary input supplies power to the PathPilot<sup>®</sup> controller and accessory outlets. The wiring and electrical components associated with either circuit are capable of delivering lethal electrical shocks. Care should be exercised when working inside the electrical cabinet. 

**Grounding:** Both primary and secondary power inputs must be grounded. Do not assume during installation that a wall outlet is properly grounded. Check continuity between the machine frame and true earth ground (metal water pipe or similar) to ensure a good ground connection. 

**Ground Fault Interrupter:** A Ground Fault Interrupter or GFI (also known as a Residual Current Circuit Breaker or RCCB) outlet must be used to supply power to the 115 VAC power input for the secondary input. 

Chapter 1 

UM10349_PCNC1100_Manual_0520A 

4 

**<mark>Preface</mark>** 

**Electrical Cabinet:** Never operate the machine tool with the electrical cabinet open. Never allow coolant pump to operate with the electrical cabinet open. Do not allow the coolant system to flow coolant directly at the electrical cabinet or the operator panel. Neither the electrical cabinet nor the operator panel controls are hermetically sealed against liquids. 

**Electrical Service:** Certain service and troubleshooting operations require access to the electrical cabinet while power is on. Only qualified electrical technicians should perform such operations. 

**Retained Electrical Power:** Electronic devices within the electrical cabinet may retain dangerous electrical voltage after the power is off. 

#### **Support** 

Tormach provides no-cost technical support to our customers through multiple channels. The quickest way to get the answers you need is normally in this order: 

- Refer to operator manual first 

- Reference related documents at: http://www.tormach.com/documents 

- Email: info@tormach.com 

- Phone: 608-849-8381 x2001, Monday through Friday 8 a.m. to 5 p.m. (central standard time) 

- Fax: 209-885-4534 

#### **Scope and Intellectual Property** 

This document is intended to provide sufficient information to allow you to install, setup, and use your Tormach PCNC mill. It assumes that you have appropriate experience and/or access to training for any computer-aided design/manufacturing software to use with the mill. 

Tormach Inc. is dedicated to continual improvement of its products, so suggestions for enhancements, corrections, and clarifications are welcome. 

The right to make copies of this manual is granted solely for the purpose of training courses related to, evaluation of, and/or use of the mill. It is not permitted, under this right, for third parties to charge for copies beyond the cost of printing. 

Every effort has been made to make this manual as complete and as accurate as possible but no warranty or fitness is claimed or implied. All information provided is on an _as is_ basis. The authors, publisher, and Tormach Inc. shall not have any liability for, or responsibility to, any person or entity for any reason for any loss or damage arising from the information contained in this manual. 

Tormach, PCNC 1100 Personal CNC, PCNC 770 Personal CNC, Tormach Tooling System (TTS), and PathPilot are trademarks or registered trademarks of Tormach Inc. If other trademarks are used in this manual, but not acknowledged, please notify Tormach Inc. so this can be remedied in subsequent editions. Tormach milling machines and accessories are covered by one or more of the following U.S. Patents: 7,386,362, D606,568, D612,406, D621,859 and Patent(s) Pending. 

UM10349_PCNC1100_Manual_0520A 

Chapter 1 

5 

**<mark>Preface</mark>** 

#### **Intended Use Statement** 

The PCNC 1100 is intended for use as a general purpose CNC milling machine. The intended use includes cutting conventional (non-abrasive) materials such as unhardened mild or alloy steels, aluminum, plastics, wood, and similar materials (or other material that can be cut with a rotating cutter). 

#### **Outside Scope of Intended Use** 

Applications for the equipment or modifications of the equipment outside of the _Intended Use Statement_ are supported through consulting engineering and excluded from Tormach’s no-cost technical support. 

All of the technical information and insight required to support variations from the intended use cannot possibly be foreseen. If the extensive documentation provided is insufficient, Tormach can provide additional information and engineering support on a consulting-engineering basis. If you have your questions well organized, we can normally provide all the information you need in short order. Consulting engineering is done by electrical and mechanical engineers and billed at current hourly rates. 

All warranties for Tormach equipment are voided through modification to the equipment or use outside of the intended use. Individuals or companies involved with modifying the equipment or applying the products assume all consequent liability. 

#### **Performance Expectations and Cutting Ability** 

The following table summarizes the cutting performance envelope of each PCNC mill. 

||**PCNC 1100**|**PCNC 770**|
|---|---|---|
|Spindle Speed Range<sup>1</sup>|100-5140 RPM|175-10000 RPM|
|Spindle Power Rating|1.5 hp|1 hp|
|Feed Rate Range|0-110 ipm (X,Y)<br>0-90 ipm(Z)|0-135 ipm (X,Y)<br>0-110 ipm(Z)|



1For standard R8 spindle 

PCNC mills are capable of cutting any material that can be cut with a rotating cutter at or near their recommended feeds and speeds. As with any mill, care should be exercised so that programmed cuts do not exceed the maximum available spindle horsepower. Small diameter cutters may perform better with use of a companion spindle or RPM multiplier such as the Tormach Speeder™ (for more information, refer to chapter 8, _Accessories_ ). 

Chapter 1 

UM10349_PCNC1100_Manual_0520A 

6 

**<mark>Preface</mark>** 

#### **Resolution, Accuracy, and Repeatability** 

The following table summarizes resolution, accuracy, and repeatability of PCNC mills as delivered. 

|Resolution of Motion (minimum discrete positional move)|0.0001”|
|---|---|
|Ball Screw Positional Accuracy|≤ 0.0006” per foot|
|Combined Positional Accuracy<sup>1</sup>|≤ 0.0013” per foot|



> <sup>1</sup> Includes additional contributing factors such as compressibility of bearings, ball screw windup, friction, etc. 

Each PCNC Mill ships with a Certificate of Inspection. This report details quality assurance measurements performed at the factory by a Tormach quality assurance team member on each mill prior to shipping. 

A sample certificate of inspection and more information on quality assurance measurements is available at: _http://www.tormach.com/quality_overview.html_ 

In practice, accuracy and repeatability are heavily influenced by the techniques used by the machinist. A skilled machinist can often deliver accuracy that exceeds the accuracy specified by the manufacturer, while an inexperienced machinist may have difficulty delivering the expected accuracy. With this understanding, Tormach cannot predict operator accuracy. Nevertheless, the accuracy specified by the manufacturer remains an important reference point. 

#### **Nomenclature** 

This manual uses the following typographical nomenclature. 

|_Software Control_|Refers to a Software Control, i.e., an on-screen button|
|---|---|
|_Hardware Control_|Refers to a button or switch on mill’s Operator Panel|
|`G-code (e.g., G01X34.8)`|Used to show G-code programs|
|_Key name_(i.e.,_Enter_)|Tells you to press the indicated key|
|_Button name_(i.e.,_Stop_)|Tells you to press the indicated button|



UM10349_PCNC1100_Manual_0520A 

Chapter 1 

7 

### **<mark>Overview</mark>** 

#### **1. Overview** 

Tormach PCNC mills are intended for use as general purpose CNC mills. Pictured below is a typical PCNC 1100 mill set up, including several options. 

|5<br>8|8<br>3<br>4<br>|
|---|---|
||7<br>2<br>1<br>6|
|**Figure 1.1**<br>1~~1~~|9<br>10|
|**Item #**<br>**Component**|**Item #**<br>**Component**|
|1<br>Electrical Cabinet|6<br>PathPilot<sup>®</sup>Interface|
|2<br>Serial Number Plate|7<br>Keyboard Table|
|Main Disconnect Switch|8<br>Machine Arm (2)|
|3<br>Red E-stop|9<br>Path Pilot Controller Compartment|
|4<br>Green Start Button|10<br>Storage Compartment|
|5<br>Operator Panel|11<br>Coolant Compartment|



Chapter 1 

UM10349_PCNC1100_Manual_0520A 

22 

**<mark>Overview</mark>** 

###### **1.1 Specifications (PCNC 1100)** 

|**Mechanical**|||
|---|---|---|
||Length|34”(86.4 cm)|
||Width|9.5”(24.1 cm)|
||T-Slot Width|5/8”(1.59 cm)|
|K|T-Slot Center-to-Center Distance|2-3/8”|
|ey|||
|Dimensions<br>(machine<br>table)|Number of Standard T-Slots|Three along X Axis<br>(_Center slot precision ground to 0.625_”)|
||Maximum Weight on Table|500 lbs.(227 kg)|
||Spindle Nose to Table(~max)|17”(43.2 cm)|
||Spindle Nose to Table(~min)|1”(2.5 cm)|
||Spindle Center to Column Face|11”(28 cm)|
||X Axis|18”(45.7 cm)|
|Travels|Y Axis|9.5”(24.1 cm)|
||Z Axis|16.5”(42 cm)|
||Speed Range|100-5140 RPM|
||Maximum Rating|1.5 hp; 2 hp peak|
|Spindle|D S|Belt Driven<br>Low Belt: 100-2000 RPM|
||rive ystem|(two positions)<br>High Belt: 250-5140 RPM|
||Taper|R8|
||Rapids on X|110 IPM|
||Rapids on Y|110 IPM|
|Feed Rates|Rapids on Z|90 IPM|
||Max Cutting|110 IPM(X, Y), 90 IPM(Z)|
|Temperature|OperatingRange|45°F-100°F(7°C-38°C)|



|**Electrical**|||
|---|---|---|
||Primary|200 to 250 VAC singlephase<sup>1</sup>, 50/60 Hz|
|Power Requirements|Secondary (control<br>and coolant systems)|115 VAC single phase, 50/60 Hz|
|Rdd C A<sup>2</sup>|Primary|20 AMP|
|ecommene ircuit mperage|Secondary|15 AMP(GFIprotected)|



> 1 230 VAC recommended; For voltages under 230 VAC, use of a Buck-Boost Transformer (PN 32554) is recommended. 

> 2 Dedicated circuits recommended; do not use ground-fault interrupter (GFI) with primary circuit. 

UM10349_PCNC1100_Manual_0520A 

Chapter 1 

23 

###### **2.1 General Site Requirements** 

The area should be well lit, dry, have proper ventilation, provide for unobstructed machine motion/operation, and ensure unrestricted access to PCNC mill controls. 

###### **2.1.1 Space Requirements** 

Minimum floor space requirements are as follows: 

||**Width**|**Depth**|**Height**|
|---|---|---|---|
|**PCNC 1100**|67”|43”|84”|
|**PCNC 770**|60”|40”|73”|



**_NOTE:_** _Allocate additional space to allow access to rear of mill for maintenance or repairs._ 

###### **2.2 Electrical Requirements** 

**_WARNING! Electrical Shock Hazard:_** _Electrical connections must be performed by a certified electrician. Failure to do so may result in injury or death._ 

||**Primary**|**Secondary**|**Recommended Circuit Amperage**|
|---|---|---|---|
|**PCNC 1100**|200-250 VAC, 50/60 Hz|115 VAC, 50/60 Hz|20 A primary<br>15 A secondary|
|**PCNC 770**|115  VAC,50/60 Hz|N/A|20 A|



###### **2.2.1 Grounding** 

All power inputs to PCNC mills must be properly grounded. Check continuity between bare metal on mill frame and true earth ground (water pipe or similar) to ensure proper grounding. 

###### **2.2.3 Ground Fault Interrupter (GFI) Use** 

Primary power for PCNC mills should not be protected by a ground fault interrupter (GFI), as this interferes with the proper operation of the PCNC mill’s Variable Frequency Drive (VFD) spindle controller. A ground fault interrupter (GFI) is recommended for the secondary power supply to the PCNC 1100; PCNC 770 does not have a secondary power supply. 

###### **2.2.4 Electrical Noise** 

Both primary and secondary power should be provided by dedicated circuits. At the minimum, circuits should be isolated from electrically-noisy devices. In particular, high-inductive loads from vacuum cleaners, air compressors, etc., can be troublesome and the source of controller malfunction. 

At sites where this is not possible, a dual-conversion power supply should be considered for 115 VAC circuits. 

###### **3.3.5 Lift and Move Mill** 

**_WARNING! Transport and Lift Hazard:_** _The transport, lifting, and moving of PCNC mill should be done by qualified professionals. Failure to do so may result in mill damage, serious injury or death._ 

###### **3.3.5.2 Lifting Bar Kit** 

The preferred method for lifting the mill is from above, using the Lifting Bar Kit (PN 31446), as shown in **Figure 3.5** ; use this method with either a forklift or engine hoist. The single Eye Bolt on the top of the column is suitable for lifting the entire weight of the mill. However, it is recommend that the Lifting Bar Kit be used (see **Figure 3.5** and **Figure 3.6** ). Refer to documentation that ships with Lifting Bar Kit for more information on use. Do not attempt to lift mill from above using any other method. If using an engine hoist, refer to the following table to determine the minimum distance necessary to straddle stand between hoist legs. 



<!-- Start of picture text -->
Eye<br>Bolt<br><!-- End of picture text -->

**Figure 3.5** 



**Figure 3.6** 

|**Machine**|**Measurement**|
|---|---|
|PCNC 1100|37”|
|PCNC 770|29”|



###### **3.3.5.3 Lifting from Below** 

It is also possible to lift the mill from below by inserting steel bars into two sets of opposing 7/8” diameter holes located in the machine base. The bars must be a minimum of 32” in length and should be made of solid steel. Do not use hollow pipe to lift mill. 

UM10349_PCNC1100_Manual_0520A 

Chapter 3 

29 

### **<mark>Installation</mark>** 

###### **PathPilot Controller (PN 35286)** 

|**Item # **|**Connection or Component**|
|---|---|
|1|Power/Reset with LED|
|2|USB Connectors(4)|
|3|Optical Drive|
|4|Hard Drive LED|
|5|PS/2 Connector|
|6|USB Connectors(2)|
|7|DVI Connector|
|8|VGA Connector|
|9|DP*|
|10|HDMI*|
|11|Blue USB Connectors(4)|
|12|Ethernet Connector|
|13|Audio Connections*|
|14|Mill Interface Port|
|15|Voltage SettingSwitch|
|16|PCI Expansion Slot|
|17|AC Power Connector|



**Figure 3.9** 



<!-- Start of picture text -->
3<br>2<br>1<br>4<br><!-- End of picture text -->

**_*NOTE:_** _Do not use these controller features._ 

###### **PCNC 770 Power Connection Panel** 



<!-- Start of picture text -->
DB-25 Controller<br>Coolant Monitor<br><!-- End of picture text -->

**Figure 3.10** 

###### **PCNC 1100 Power Connection Panel** 



<!-- Start of picture text -->
DB-25 Controller Coolant<br>Monitor<br>Secondary Power<br>Input<br><!-- End of picture text -->

**Figure 3.11** 

UM10349_PCNC1100_Manual_0520A 

Chapter 3 

31 

<!-- Start of picture text -->
Start<br>E-stop<br>Main<br>Disconnect<br><!-- End of picture text -->

###### **3.5 Essential Controls Overview** 

Check to ensure your local power supply meets the requirements detailed in chapter 2, _Site Planning and Prep_ . 

###### **3.5.1 E-stop, Start, Reset, and Power** 

**_NOTE:_** _Before continuing, review Power Off/On Procedure later in this section._ 

###### **E-stop (emergency stop)** 

Each mill has one emergency _Stop_ button or _E-stop_ pre-installed on the _Operator Panel_ (see **Figure 3.13** and **3.14** ). The _E-stop_ terminates all motion and spindle function. Depress the _E-stop_ and it locks in the _Power Off_ position (see **Figure 3.15** ). Turn the _E-stop_ clockwise a quarter turn to release; press the green _Start_ button to power back on (see **Figure 3.13** ). 

###### **Start** 

The green _Start_ button powers on circuits for the axis drives. On the _Operator Panel_ , the _Machine_ LED indicates the green _Start_ button is pressed (see **Figure 3.14** ). When lit, the _Machine OK_ LED on the PathPilot interface’s _Status_ tab should be solid green (see **Figure 3.16** ), indicating the mill is powered on and ready to operate. 

**Figure 3.13** 

**_NOTE:_** _Once E-stop is depressed, Start button is inoperative until the E-stop is released._ 



<!-- Start of picture text -->
E-stop depressed  E-stop released<br>(Power Off) (Power On)<br>Figure 3.15 Figure 3.16<br><!-- End of picture text -->



**Figure 3.14** 

Chapter 3 

UM10349_PCNC1100_Manual_0520A 

34 

**<mark>Installation</mark>** 

###### **PathPilot Interface** 



**Figure 3.17** 

###### **Reset** 

Click the PathPilot interface’s _Reset_ button to establish communications between controller and mill (see **Figure 3.17** ). The _Controller_ LED on the operator panel indicates when communication has been established. 

###### **Main Disconnect** 

The _Main Disconnect_ switch, located on the right side of the electrical cabinet, is used to power the mill off and on (see **Figure 3.13** ). When the _Main Disconnect_ is switched to power _Off_ , it disconnects the primary supply power to the mill. On the PCNC 1100, when the _Main Disconnect_ is switched to power _Off_ , it also disconnects the secondary supply power (to controller, monitor, and coolant outlets) from the _Power Connection Panel_ (see **Figure 3.10** ). 

###### **3.6 Power Off/Power On Procedure** 

**_IMPORTANT!_** _Do not power on motors and drives via the green Start button before powering on the controller that oversees their operation. Make sure that the controller is on and the PathPilot interface is loaded before powering on the mill. Likewise, make sure to depress the red E-stop before powering off the controller using the Exit button on the PathPilot interface (see_ **_Figure 3.17_** _). Confirm that the mill powers off and on correctly using the procedure detailed in this section._ 

UM10349_PCNC1100_Manual_0520A 

Chapter 3 

35 

**<mark>Installation</mark>** 

###### **Power Off/On Procedure** 

||1. Push red_E-stop_button in|
|---|---|
|**Power Off**|2. Click_Exit_on screen; when prompted click_OK_to power off|
||3. Turn Main Disconnect_Off_(see image at right)|
||1. Turn Main Disconnect_On_(see image at right)|
|**Power On**|2.  After software loads, turn red E-stop clockwise to release|
||3. Press green_Start_button.|
||4. Click_Reset_on screen|







**_WARNING! Unattended Operation:_** _Machine is not designed to operate unattended. Do not leave machine unattended during operation. When machine is not in use, turn the main disconnect off. Failure to do so could result in death, serious injury, and/or machine damage._ 

###### **3.7.1 Verify Spindle Function** 

Use the _Operator Panel_ controls to verify spindle function as follows (see **Figure 3.14** ): 

1. Turn _Spindle Lockout_ key to _I_ (unlocked position). 

2. Select _Manual_ for spindle mode. 

3. Press _Start_ ; spindle begins to rotate. 

Chapter 3 

UM10349_PCNC1100_Manual_0520A 

36 

**<mark>Installation</mark>** 

4. Turn _Spindle Speed Dial (RPM x 100)_ up and down to vary spindle speed. 

5. Toggle between _Forward_ and _Reverse_ to switch spindle direction. 

6. Press _Stop_ ; spindle stops. 

###### **3.7.2 Verify Limit Switch Function** 

Limit switches prevent the mill from exceeding its travel limits and provide a reference location during the mill homing procedure. 

There are three limit switches, one for each axis of motion (X, Y, and Z), as shown in **Figure 3.18** . 

If a limit switch is triggered, the mill is placed in a reset state. 

To verify proper limit switch function: 

1. On the PathPilot interface, click the _Status_ tab (see **Figure 3.19** ). 

2. Manually depress _X, Y,_ and _Z_ limit switches by hand (see **Figure 3.18** ). 



<!-- Start of picture text -->
Z<br>X<br>Y<br><!-- End of picture text -->

**Figure 3.18** 



**Figure 3.19** 

UM10349_PCNC1100_Manual_0520A 

Chapter 3 

37 

### **<mark>Installation</mark>** 



<!-- Start of picture text -->
Limit<br>Switch<br>LED<br>Lights<br><!-- End of picture text -->

**Figure 3.20** 

3. Verify that the corresponding limit switch LED light illuminates on the _Status_ screen (see **Figure 3.20** ). 

4. After verifying limit switch function, click the flashing _Reset_ button (see **Figure 3.20** ). 

###### **3.7.3 Verify Axis Function** 

1. Reference the mill by clicking the _Ref Z_ , _Ref X_ , and _Ref Y_ buttons (see **Figure 3.20** ); the mill moves. 

2. Next, switch to the _Main_ screen. 

3. Use keyboard to verify axis motion: 

   - a. To move X-axis, use the ←/→ keys. 

   - b. To move Y-axis, use the ↑/↓ keys. 

   - c. To move Z-axis, use the Page Up/Page Down keys. 

4. To test the optional jog shuttle: 

   - a. Press the corresponding axis button (X, Y, or Z) to select the axis. 

   - b. Twist shuttle ring of jog shuttle to move axis. Twist in opposite direction to reverse direction. 

Chapter 3 

UM10349_PCNC1100_Manual_0520A 

38 

**<mark>Installation</mark>** 

###### **3.7.4 Coolant On/Off** 

The coolant pump can be controlled manually using the _Coolant_ switch on the operator panel (see **Figure 3.14** ). This switch has three positions: _On, Off,_ and _Auto_ . The _Auto_ position allows PathPilot to control the coolant pump. To operate: 

1. Press _On_ to turn the coolant pump on. 

2. Press _Off_ to turn the coolant pump off. 

3. Press _Auto_ to switch to operating system control of coolant. 

4. In _Auto_ mode, click the _Coolant_ button on the PathPilot interface to turn coolant on. Click the button again to turn coolant off. 

###### **3.7.5 Installation Troubleshooting** 

Upon initial installation, the most likely reason for non-functioning controls is wires that have become loose during transport. Check to ensure all wires inside the electrical cabinet are properly connected as follows: 

**_WARNING! Electrical Shock Hazard:_** _Be sure to power off machine before making any electrical modifications. Failure to do so may result in serious injury or death._ 

1. Power off mill according to the _Power Off/On Procedure_ detailed earlier in this chapter. 

2. Using two fingers, firmly tug each wire connection near its termination point. Any loose wires should be re-seated and re-tightened. 

**_NOTE:_** _Refer to chapter 10, Troubleshooting, for more information on mill troubleshooting._ 

###### **3.8 Controller Customization** 

###### **Date and Time** 

To set or edit controller’s date and time, type _ADMIN DATE_ in the MDI field and click _Enter_ on keyboard (see **Figure 3.21** ). This opens a dialog box to enter or edit date, time, and time zone. Click _Close_ when finished. 



**Figure 3.21** 

UM10349_PCNC1100_Manual_0520A 

Chapter 3 

39 

**<mark>Installation</mark>** 



**Figure 3.22** 



**Figure 3.23** 

###### **Keyboard Language** 

If you do not have a USA keyboard (QWERTY) layout, type _ADMIN KEYBOARD_ in the MDI field and click _Enter_ on your keyboard (see **Figure 3.22** ). 

Next, click on the _Layouts_ tab to change the layout of the keyboard to a different language (see **Figure 3.23** ). Select a layout and click _Close_ when finished. 

###### **Touch Screen (optional)** 

Refer to documentation that ships with 17” Touch Screen Kit (PN 35575) for information on setup and calibration. 

Chapter 3 

UM10349_PCNC1100_Manual_0520A 

40 

**<mark>Operation</mark>** 

#### **4. Operation** 

This chapter provides an overview of the basic controls of the PCNC mill. 

**_WARNING! Unattended Operation:_** _Machine is not designed to operate unattended. Do not leave machine unattended during operation. When machine is not in use, turn the main disconnect off. Failure to do so could result in death, serious injury, and/or machine damage._ 

###### **4.1 Control Locations** 

There are two control locations, the Operator Panel and the (on-screen) PathPilot<sup>®</sup> interface. All control functions can be found in one or the other location. 

###### **4.1.1 Operator Panel** 

The Operator Panel is located on the door of the electrical cabinet (see **Figure 4.1** ). It contains physical buttons that control the following functions: 

- Start 

- E-stop 

- Controller On/Off 

- Coolant On/Off/Auto 

- Spindle Manual/Auto 



**Figure 4.1** 

- Spindle Start/Stop 

- Spindle Forward/Reverse 

It also contains the Accessory inlet, the Spindle Speed Dial (RPM x 100), and Spindle Lockout. 

**_NOTE:_** _The Operator Panel is not compatible with the PCNC 1100 or PCNC 770 full enclosure kit and is therefore removed and discarded during installation of either. In this scenario, these controls are accessed (on mills without an operator panel) via the PathPilot interface._ 

###### **4.1.2  PathPilot Interface** 

PathPilot is a sophisticated CNC controller for Tormach products. All aspects of the mill is controlled via the on-screen PathPilot interface. There are four primary ways to interact with PathPilot: 

- Keyboard 

- Mouse 

- Jog shuttle (optional) 

- Touch screen (optional) 

UM10349_PCNC1100_Manual_0520A 

Chapter 4 

41 

**<mark>Operation</mark>** 

For further information on the PathPilot interface, see chapter 6, _PathPilot Interface_ . Additional devices – like the Probe, Tool Setter, Injection Molder, or CNC Scanner – can also interface with PathPilot. For information, refer to chapter 8, _Accessories_ . 

###### **4.2 Initializing the Mill** 

To prepare the mill for motion, the mill must be initialized. 

###### **4.2.1 Vital Reference** 

After powering on, the PCNC mill must be referenced in the X-, Y-, and Z-axes. Execute the referencing procedure as follows: 

1. Power on the mill following the Power Off/On Procedure detailed in chapter 3, _Installation_ . 

2. Click the flashing _Reset_ button on the PathPilot interface. 

3. Click _REF Z_ , _REF X_ , and _REF Y_ . 

###### **4.3 Jogging** 

###### **4.3.1 Manual Control Group** 

The _Manual Control Group_ ’s buttons and slider allow the operator to perform tasks related to manual control of the mill, including jogging the mill axes, changing the current tool number, feed rate, or spindle speed, and starting or stopping the spindle (see **Figure 4.2** ). 

###### **Jogging Controls** 

Tormach mills can be jogged with either the _Jog Shuttle_ (PN 30616) shown in **Figure 4.4** or by using the keyboard’s arrow keys (see **Figure 4.3** ): 

- The _right arrow_ jogs X-axis in the positive X direction (table moves left of operator). 

- The l _eft arrow_ jogs X-axis in the negative X direction (table moves right of operator). 



**Figure 4.2** 

- The _up arrow_ jogs Y-axis in the positive Y direction (moves table towards operator). 

- The _down arrow_ jogs Y-axis in the negative Y direction (moves table away from operator). 

- The _Page Up key_ jogs the Z-axis in the positive Z direction (moves spindle up). 

- The _Page Down key_ moves the Z-axis in the negative Z direction (moves spindle down). 

**_NOTE:_** _Jogging is not permitted during G-code program execution or MDI moves._ 

Chapter 4 

UM10349_PCNC1100_Manual_0520A 

42 

**<mark>Operation</mark>** 



<!-- Start of picture text -->
Jogging with Keyboard Keys Jog Shuttle<br>Jog<br>Wheel<br>A-Axis Motion<br>Shuttle<br>X-Axis Motion Ring<br>Z-Axis Motion<br>Y-Axis Motion<br><!-- End of picture text -->

**Figure 4.3** 

**Figure 4.4** 

###### **Jog Shuttle** 

The _Jog Shuttle_ (PN 30616), shown in **Figure 4.4** , is an optional accessory that many operators find increases productivity, especially on short-run jobs requiring extensive setting up of the workpiece and tooling. 

The X, Y, Z, and A buttons are used to jog the X-, Y-, Z-, and A-axis respectively. An illuminated LED light beside an axis DRO on the PathPilot interface indicates which axis is selected for jogging. The the Step button on the Jog Shuttle cycles through the available jog step sizes. The active size is indicated by an illuminated LED light on the Step Size buttons on the PathPilot interface. 

For more information on jogging methods, see chapter 6, _PathPilot Interface._ 

###### **4.4 Spindle Controls** 

###### **4.4.1 Manual Spindle Control Via Operator Panel** 

The operator panel-based spindle controls are outlined below: 

- To control the spindle via the _Operator Panel_ switch the spindle to _Manual_ (see **Figure 4.1** ). 

- Use the _Spindle Speed Dial_ to select the desired spindle RPM. The numbers correspond to spindle speeds when the belt is in the high position. 

- Use the spindle direction switches to select _Forward_ for clockwise and _Reverse_ for counterclockwise. 

- Press _Start_ to activate the spindle. Press _Stop_ to stop the spindle. 

UM10349_PCNC1100_Manual_0520A 

Chapter 4 

43 

**<mark>Operation</mark>** 

###### **4.4.2 Automated Spindle Control Via PathPilot Interface** 

To control the spindle via the PathPilot interface, switch the spindle to _Auto_ on the _Operator Panel_ (see **Figure 4.1** ). 

Ensure the _Spindle Range_ button’s LED light (see **Figure 4.5** ) correctly corresponds to the spindle belt position, either _Hi_ or _Lo;_ click to toggle between the two positions. For more information on the procedure to change belt position, refer to _Changing Spindle Speed Range_ section later in this chapter. 



**Figure 4.5** 

**_NOTE:_** _A mismatch between the Spindle Range button and actual spindle belt position will result in the commanded speed being different from the indicated RPMs. See table below for available speed ranges for each spindle option._ 

To specify spindle RPMs, click the _DRO_ . Using the keyboard, type the desired RPM and press _Enter._ 

- Click _FWD_ to run the spindle clockwise 

- Click _REV_ to run the spindle counterclockwise 

- Click _Stop_ to stop the spindle 

###### **4.4.3 Changing Spindle Speed Range** 

Each PCNC mill has two speed ranges as outlined in the table below. 

||**Low**|**High**|
|---|---|---|
|**PCNC 1100**|100-2000|250-5140|
|**PCNC 770**|175-3250|525-10,020|



The range change is performed by moving the spindle belt from the top pair of pulleys (high speed range) to the lower pair of pulleys (low speed range). 

To change belt position: 

**_WARNING! Electrical Shock Hazard:_** _Be sure to power off machine before making any electrical modifications. Failure to do so may result in serious injury or death._ 

1. Power off mill according to power off/on procedure detailed in chapter 3, _Installation_ . 

2. Open spindle door. 

Chapter 4 

UM10349_PCNC1100_Manual_0520A 

44 

**<mark>Operation</mark>** 

###### **PCNC 1100** 



**Figure 4.6** 

**PCNC 770** 



**Figure 4.7** 

3. Unlock motor mounting plate: 

   - On a PCNC 1100: Use the rear handle (see **Figure 4.6** ) 

   - On a PCNC 770: Use an 18 mm wrench to remove the rear hex bolt (see **Figure 4.7** ) 

4. Pull spindle motor forward. The spindle belt slackens. 

5. Move the spindle belt from one pulley to another (see **Figure 4.6** ). 

6. Re-tighten the spindle belt so that there is approximately 1/8”-1/4” of belt deflection midway between the pulleys with a firm finger press. 

7. Lock the motor mounting plate and stow handles (if equipped) in the vertical position. 

###### **4.5 Tool Holders** 

This section describes using tooling compatible with the standard R8 spindle. For more information on other spindle options, refer to the product-specific documentation. 

The Tormach Tooling System (TTS<sup>®</sup> ) is the recommended tool holding method for PCNC mills. The advantages of TTS over other tooling options include: 

- Exact tool offset repeatability 

- Easily adaptable to tool presetting techniques 

- Quickest manual tool change time 

- Shortest tool change clearance distance 

- Compatibility with Tormach power drawbar and Tormach automatic tool changer (ATC) 

UM10349_PCNC1100_Manual_0520A 

Chapter 4 

45 

**<mark>Operation</mark>** 

TTS uses a precision 3/4” collet in combination with a drawbar and interchangeable TTS tool holders. Many different TTS tool holders are available. 

Prior to using TTS for the first time, the TTS collet must be installed. To install the collet: 

1. Using a clean rag, apply a degreasing agent to the inside taper of the spindle and also the entire surface of TTS collet. Wipe clean and dry. 

2. Apply a small amount of Anti-seize (PN 31273) grease to the following surfaces: drawbar threads, outside taper of TTS collet, inside taper of R8 spindle. Do not apply grease to the inside surface of the TTS collet. 

3. Open the spindle door. 

4. Swing the spindle locking fork so it engages with the flats on the top of the spindle. If necessary turn the spindle by hand until the flats line up. 

5. Using one hand, insert the TTS collet into the bottom of the spindle. Twist the collet while applying light upward pressure until the collet groove aligns with the spindle alignment pin and the collet is pushed completely inside the spindle taper. With the other hand, insert the drawbar into the top of the spindle and rotate the drawbar several turns to engage several threads in the TTS collet. 

6. To finish tightening the drawbar, place and hold a TTS tool holder inside the TTS collet and against the spindle nose. Use a 13 mm wrench to rotate the drawbar and tighten the collet against the TTS tool holder. 

To change a TTS tool holder, loosen the drawbar by one turn with a 13 mm wrench. Then, grasp the tool holder in one hand and use a mallet to gently strike the top of the drawbar. Remove the tool holder and repeat steps 5 and 6 (above) to install a new tool holder. 

###### **Tips on Using Tormach Tooling System (TTS)** 

- Never tighten the TTS collet without a tool holder inserted 

- Never change tools while a tool holder is in the spindle as this may damage the spindle alignment pin 

- To minimize tool pull-out, periodically wipe tool holder shanks clean/dry with a degreasing agent 

- When not in use, apply a protective spray (WD-40<sup>®</sup> or similar) to prevent surface rust on bare metal surfaces of tool holders 

- The drawbar and TTS collet are wear items. Inspect threads and mating surfaces regularly and replace if damage or wear is apparent as it reduces the ability to tighten tools properly 

R8 collets and R8 taper tool holders are also compatible. These are installed in a similar manner to the TTS collet as described above, but must be removed completely during each tool change. 

**_NOTE:_** _The PCNC 1100 ships with a drawbar with 7/16”-20 UNF thread._ 

Chapter 4 

UM10349_PCNC1100_Manual_0520A 

46 

**<mark>Operation</mark>** 

###### **4.6 Part Setup/Workholding** 

Work must be secured to the table prior to machining. Each PCNC mill has three 5/8” T-slots that run parallel to the X-axis. The slots are precision ground to: 

**Center Slot Outer Slots** -0.00” + 0.004” 0.000” + 0.008” 

A 5” vise is recommended. Tormach offers the following vises: 

|**PCNC 1100**|**PCNC 770**|
|---|---|
|PN 31759 or PN 30553|PN 31759|



For more information on proper setup and use of the 5” vises, refer to documentation that ships with product. 

A number of other ways can be employed for workholding. These include toe clamps, fixture plates, chucks, and vacuum tables. 

UM10349_PCNC1100_Manual_0520A 

Chapter 4 

47 

###### **5.1.1 Reference the Mill** 

Follow the power off/on procedure in chapter 3, _Installation_ , to turn the PathPilot controller and mill on. After clicking the flashing _Reset_ button, you can reference the X-, Y-, and Z-axes. You should reference the Z-axis first to help avert a crash as it moves the tooling as far as possible from a workpiece or vise. All three axes can be referenced simultaneously by pressing the _Ref_ buttons in rapid succession (see **Figure 5.2** ). 

The axes should be referenced before operating the mill to establish soft limits to protect the mill from over travel and to give meaning to work offset values. After referencing the axes, the LEDs on the _Ref X, Ref Y,_ and _Ref Z_ buttons turn green, indicating that the mill has been referenced. While you can jog the mill before referencing, you should not run parts until the mill has been referenced. Should a home or limit switch fail to work, manually reference the mill as discussed in chapter 10, _Troubleshooting_ . 



**Figure 5.2** 

Chapter 5 

UM10349_PCNC1100_Manual_0520A 

48 

**<mark>Intro to PathPilot</mark>** 

E-stopping the mill de-references the axes; be sure to reference again after an E-stop. 

#### **6. PathPilot Interface** 

###### **6.1 Overall Layout** 

The PathPilot<sup>®</sup> interface is divided into two sections, the _Notebook_ and the _Persistent Controls_ (see **Figure 6.1** ). The _Persistent Controls_ make up the bottom half of the screen and include three control groups: the _Program Control Group_ , the _Position Status Group_ , and the _Manual Control Group_ . The top half of the screen is the _Notebook_ , which includes seven tabs including _Main, File, Settings, Offsets, Conversational, Probe,_ and _Status._ Depending on the mill accessories, there may also be optional tabs including _ATC_ (automatic tool changer), _Injection Molder_ , and _Scanner_ . These tabs are used to select different _Notebook_ pages, each of which displays various buttons, digital readouts (DROs), and information pertinent to the functioning of the PathPilot interface. 

###### **PathPilot Interface** 



<!-- Start of picture text -->
Program Control Group Position Status Group Manual Control Group<br>Notebook<br>Persistent Controls<br><!-- End of picture text -->

**Figure 6.1** 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

58 

### **<mark>PathPilot Interface</mark>** 

For example, the _File_ page of the Notebook is used for tasks like transferring a G-code file from a USB drive to the controller, loading a G-code file into memory, or editing a G-code file. 

While the _Notebook_ half of the screen allows you to perform a variety of tasks based on which tab is active (loading G-code file, writing G-code with the _Conversational_ tab, touching off tools), the _Persistent Controls_ half of the PathPilot interface contains the controls used to set up a job and execute G-code. Operators already familiar with Tormach milling machines (or most other CNC machines) will be familiar with many of the _Persistent Controls_ buttons. 

For definitions and more information on the terminology used in reference with PathPilot, refer to chapter 7, _Programming_ . 

###### **6.2 Persistent Controls** 

The _Persistent Controls_ on the lower half of the screen are always present – they don’t move or disappear as you page through the _Notebook_ that makes up the top half of the interface (see **Figure 6.1** ). These are divided into three logical families: _Program Control Group, Position Status Group,_ and _Manual Control Group._ 

###### **6.2.1 Program Control Group** 

The buttons, sliders, and DROs of the _Program Control Group_ are functions that relate to tasks the operator might perform while running a G-code program (see **Figure 6.2** ). They may be used at any time while running a program, or before running a program to set modes like _Single Block_ or _M01 Break_ . 

**Cycle Start** – The _Cycle Start_ button is used to start a program. While running a program the LED in the upper right hand corner of the button illuminates. 



<!-- Start of picture text -->
Feedrate Override<br>Spindle Override<br>Maxvel Override<br>Sliders<br><!-- End of picture text -->

**Figure 6.2** 

If _Single Block_ is active, the _Cycle Start_ button causes the mill to execute one line of G-code per click of the button. When running a program, if motion is paused due to _Feedhold, M01 Break, Single Block_ , or because the mill is waiting on a manual tool change, the _Cycle Start_ button LED flashes on and off until the _Cycle Start_ button is pressed again. 

It is an error if: 

- _Cycle Start_ is pressed when the _Main_ tab of the notebook is not active 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

59 

**<mark>PathPilot Interface</mark>** 

- _Cycle Start_ is pressed when no G-code program is loaded 

- _Cycle Start_ is pressed before the mill has been referenced 

**Single Block** – Turns _Single Block_ on (LED illuminated) or off. When _Single Block_ mode is active, the mill executes one block of G-code, then pauses and flashes the _Cycle Start_ button LED on and off, inviting the operator to press the _Cycle Start_ button to execute the next line of G-code. This feature may be turned on or off before running a program or during program execution. 

**_NOTE:_** _Non-motion lines are ignored by Single Block mode. This means that the PathPilot interface will skip comment lines and blank lines._ 

**M01 Break** – Turns _M01 Break_ button on (LED illuminated) or off (LED off). When _M01 Break_ is active, and an M01 (optional stop) is programmed in the G-code file, the mill stops when it reaches the M01 line and the _Cycle Start_ button LED flashes on and off. The mill continues to execute the program lines after the M01 when the _Cycle Start_ button is pressed. This feature may be turned on or off before running a program or during program execution. 

**Feedhold** – Turns _Feedhold_ button on (LED illuminated). Turning _Feedhold_ on pauses mill motion, and the _Cycle Start_ button LED flashes on and off. Turning _Feedhold_ on leaves the spindle running (if it is already on). To turn _Feedhold_ off, click the _Cycle Start_ button. The _Feedhold_ button works during program execution or during manual data input (MDI) moves (G-code commands entered into the MDI line below the G-code listing on the _Main_ screen). _Feedhold_ has no effect when the mill is not moving. Also, application of _Feedhold_ is delayed if clicked during a spindle-synchronized move (e.g., G84 tapping cycles) until that spindle-synchronized move is complete. The feedhold function is also connected to the keyboard’s space bar – pressing the spacebar on the keyboard is equivalent to clicking this button with the mouse. 

**Stop** – Stops all mill motion, including spindle motion. If clicked while running a program or during an MDI move, the _Stop_ button stops the mill and rewinds the G-code program. _Stop_ doesn’t change the current modal state of the mill (G54, G01, etc.). 

**Coolant** – Turns coolant on (LED illuminated) or off (LED off). Clicking this button turns power on or off to the coolant accessory port on the side of the electrical cabinet – so long as the _Coolant_ switch on the operator panel is in _Auto_ mode. This button is the equivalent to M8/M9 G-code commands. It may be clicked before, after, or during program execution, or an MDI move. 

**Reset** – Brings the mill out of an E-stop condition, resets G-code modalities, clears alarm messages, and rewinds the G-code program. When the mill is first powered on, or after an emergency stop (E-stop), the _Reset_ button flashes back and forth between red and white. When this button is flashing (after power has been restored to the mill), clicking the _Reset_ button starts and verifies communication between the mill and the controller. _Reset_ may be clicked any time after the mill is powered on. _Reset_ does the following: 

- Resets all modal G-codes to their normal state including work offset to G54 default 

- Rewinds a G-code program 

- Stops a program, MDI move, or homing move if one is currently in progress 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

60 

### **<mark>PathPilot Interface</mark>** 

- Clears alarms (for more information on alarms, see the _Status_ tab section) 

- Clears the tool path backplot 

**Spindle Override** – The _Spindle Override Slider_ and _RPM 100%_ button (see **Figure 6.2** ) allow you to override the commanded spindle speed by percentages ranging from 1 percent to 150 percent. The _RPM 100%_ button returns the override to 100 percent of the commanded value or no override. The spindle must be running for these controls to have a noticeable effect. If overriden when the spindle is stopped, the speed is overridden the next time spindle starts. The override doesn’t drive the spindle past its maximum speed. The _Spindle Override_ setting is ignored during spindle-synchronized (e.g., G84 tapping cycle) moves or any time M48 (disable feed and speed overrides) is in effect. 

**Feedrate Override** – The _Feedrate Override Slider_ and _Feed 100%_ button (see **Figure 6.2** ) work similarly to the spindle override controls. They affect the commanded feedrate by a percentage ranging from 1 percent to 150 percent. The feedrate override works for MDI, jogging, and G-code program G01/G02/G03 moves. The override has no effect on G00 (rapid) moves. The _Feedrate Override_ setting is ignored during spindle-synchronized (e.g. G84 tapping cycle) moves or any time M48 (disable feed and speed overrides) is in effect. 

**Maxvel Override** – The _Maxvel Override_ and _Maxvel 100%_ button (see **Figure 6.2** ) work similarly to the _Feedrate Override_ controls, except that these controls affect both G00 and G01 moves. They clamp the mill velocity to a percentage of the maximum velocity. The Maxvel slider can be very useful when running a G-code program for the first time. You can use it to stop the mill by sliding it down to 0 percent and verifying the _Distance to Go_ and X/Y/Z/A DROs look appropriate before continuing. The _Maxvel Override_ is a safety feature, and as such is not inhibited during spindlesynchronized moves or with M48. Make sure that Maxvel is at a value that allows the mill to achieve the programmed feed rate during spindle synchronized moves (e.g. G84 tapping) or the move may fail to produce the intended results. 

###### **6.2.2 Position Status Group** 

The buttons, labels, and DROs of the _Position Status Group_ pertain to mill position, active G-code modalities, and feed/speed settings (see **Figure 6.3** ). These controls may be used at any time before or after running a G-code program or MDI move. They are unavailable for operator input while mill is moving. 

**Axes Work Offset DROs** – The _X, Y, Z,_ and _A_ work offset DROs display the current mill position expressed in the currently active work offset coordinate system (G54, G55, etc.). 



**Figure 6.3** 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

61 

**<mark>PathPilot Interface</mark>** 

When the mill is at rest, these readouts are also operator entry fields. Change the current work offset position by clicking in the DRO field, which illuminates. Type a number, for example 4.0, and click _Enter_ on keyboard. Press the _Esc_ key to return to the original value. 

This technique is used for setting any DRO. Remember to click _Enter_ after any DRO change. If you forget and just click on another DRO, any value you have just entered is discarded. This is designed to avoid accidental changes. 

For convenience, the _Zero_ button to the left of the axis DROs can be used to set the current work offset position for that axis to 0.000. 

**DTG (Distance to Go)** – Just to the right of the axis _DRO_ s are the _DTG_ (see **Figure 6.2** ) or _Distance to Go_ labels (light blue) that are read-only and display the distance remaining in any single move. 

If you feedhold the mill in the middle of a move, or turn the _Maxvel_ or _Feedrate_ overrides to 0 percent, these labels display the distance left in the commanded move. These labels are useful when proving out a part. 

**Ref Axes Buttons** – _Ref X, Ref Y, Ref Z,_ and _Ref A_ buttons reference the axes to their home switch locations. This must be done after power on and before running a part program or using MDI commands. The axes may be referenced simultaneously, though it is common practice to reference the Z-axis first to clear the spindle or tool from the area of the workpiece or vise. When referenced, the LED is illuminated. 

**Status** – The _Status_ line displays the currently active G-code modalities and the active tool. A more detailed description of these active G-codes is provided on the _Settings_ tab. 

**Jog Active LEDs** – Between the (Zero) _Axis_ and _DRO_ s are _LEDs_ . If the mill is equipped with an optional Jog Shuttle (PN 30616), the active jog axis is indicated by an illuminated LED (see **Figure 6.3** ). 

###### **6.2.3 Manual Control Group** 

The _Manual Control Group_ 's buttons, slider, and DROs allow the operator to perform tasks related to manual control of the mill, including jogging the mill axes, changing the current tool number, feed rate, or spindle speed, and starting or stopping the spindle (see **Figure 6.4** ). 



**Figure 6.4** 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

62 

### **<mark>PathPilot Interface</mark>** 

###### **Jog Shuttle** 



<!-- Start of picture text -->
Shuttle<br>Ring<br>Jog<br>Wheel<br><!-- End of picture text -->

**Figure 6.5** 

###### **Jogging with Keyboard Keys** 



<!-- Start of picture text -->
A-Axis Motion<br>X-Axis Motion<br>Z-Axis Motion<br>Y-Axis Motion<br><!-- End of picture text -->

**Figure 6.6** 

Tormach mills can be jogged with either the Jog Shuttle shown in **Figure 6.5** or with the keyboard’s arrow keys (see **Figure 6.6** ): 

- The _right arrow_ jogs X-axis in the positive X direction (moves table left of operator) 

- The _left arrow_ jogs X-axis in the negative X direction (moves table right of operator) 

- The _up arrow_ jogs Y-axis in the positive Y direction (moves table toward operator) 

- The _down arrow_ jogs Y-axis in the negative Y direction (moves table away from operator) 

- The _Page Up key_ jogs the Z-axis in the positive Z direction (moves spindle up) 

- The _Page Down key_ moves the Z-axis in the negative Z direction (moves spindle down) 

###### **_NOTE:_** _Jogging is not permitted during G-code program execution or during MDI moves._ 

The Jog Shuttle is an optional accessory (see **Figure 6.5** ) that may increase productivity, especially on short-run jobs requiring extensive setting up of the workpiece and tooling. 

The _X, Y, Z and A_ buttons are used to jog axes X _,_ Y _,_ Z and A respectively (the LED light beside an axis DRO in the PathPilot interface indicates which axis is selected for jogging). The _Step_ button cycles through the available jog step sizes (the LED on a Step Size Button in the PathPilot interface indicates which size is active). Continuous jogging is done with the Shuttle Ring by turning it counterclockwise (minus) and clockwise (plus). There are seven speeds to position any axis with speed and precision. Step jogging is done with the Jog Wheel (with finger dimple) by turning it counterclockwise in the minus direction and clockwise in the plus direction. The move will be made at the current feed rate. 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

63 

### **<mark>PathPilot Interface</mark>** 



<!-- Start of picture text -->
Step Size Buttons<br>Spindle<br>RPM<br>Jog Speed  Jog Cont/<br>Slider Step<br><!-- End of picture text -->

**Figure 6.7** 

**Figure 6.8** 

Whether using the jog shuttle or the keyboard arrow keys, there are two modes of jogging, _continuous_ and _step_ . When using the keyboard to jog, switch between modes using the _Jog Cont/ Step_ button (see **Figure 6.7** ). 

**Step Mode** – In _Step_ mode the mill jogs in steps, where the step size is controlled by the four buttons to the right of the _Step_ label (see **Figure 6.7** ). 

Notice that in imperial units (type G20 in the _MDI Line_ ) the step sizes range from 0.0001” to 0.1” (see **Figure 6.7** ), whereas in metric mode (type G21 in the _MDI Line_ ) the step sizes range from .01 mm to 10 mm. The illuminated LED in the upper right corner of each _Step_ button indicates active step size. 

**Continuous Mode** – In _Continuous_ mode the mill jogs at a continuous velocity when you press and hold any one keyboard arrow key; stop the mill by releasing the key. Axis motion is key specific as shown in **Figure 6.6** . The velocity is set using the _Jog Speed Slider_ (see **Figure 6.7** ). To set jogging velocity to the maximum speed, click and drag the _Jog Speed Slider_ to the far right position. 

**Feed Rate DRO** – Feed rate is the velocity at which the workpiece can be fed against the machine tool. The DRO, or digital read out, is the field that displays this velocity. 

**Spindle Controls** – The _REV, Stop,_ and _FWD_ buttons can be used to manually control the spindle (see **Figure 6.8** ). _Rev_ is the equivalent of typing M04 in the _MDI Line_ – it starts the spindle counter clockwise at the RPM specified in the _Spindle RPM_ DRO (see **Figure 6.8** ). 

The _Stop_ button stops the spindle, similar to the M5 command. The _FWD_ button starts the spindle clockwise at the set RPM. These buttons are unavailable when running a G-code program or in the middle of an MDI move. Pressing _REV_ or _FWD_ triggers an alarm if the commanded spindle speed is outside of the valid spindle speed range for the mill's current belt position. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

64 

### **<mark>PathPilot Interface</mark>** 

The _Spindle RPM_ DRO is used to display the current spindle speed command (see **Figure 6.8** ). You may change the current spindle speed command by typing a value into this DRO and pressing _Enter_ . Values above the maximum RPM or below the minimum RPM for the current belt position triggers an alarm. The _Spindle Range_ button toggles between the two belt/pulley settings with an LED indicating which position is active (see **Figure 6.8** ). For more information on spindle belt/pulley settings see chapter 4, _Operation._ 

**Tool DRO (T)** – Displays the tool currently in the spindle. To change the spindle tool and apply its tool length offset, type a number (valid range is 0–256) in the tool DRO and press _Enter_ key or click the _M6 G43_ button. 

**M6 G43 Button** – Causes the system to change the number of the tool that is currently in the spindle to the number typed in the DRO, as well as apply the length offset for that tool. M6 is the G-code command that requests a tool change and G43 is the command that applies a tool length offset (for more information on these commands, refer to chapter 7, _Programming_ ). 

**Tool Length Label** – Displays the current tool length offset. This display is normal (light blue text on grey background) when the tool offset number matches the tool number. But an alarm appears (orange text on red background) if the offset number does not match the current tool number. 

**Go to G30 Button** – Causes the mill to move to a pre-defined G30 position, and is equivalent to typing G30 in the _MDI Line_ . This G30 position can be set using the _Set G30_ button on the _Offsets_ tab. Operators familiar with M998 will notice that the behavior of G30 is identical to M998. By default, the move to the G30 position is in Z only. This can be changed on the _Settings_ tab. 

To set the G30 position, jog the mill to the desired position and click the _Set G30 Position_ button on the _Offsets_ tab. Subsequent uses of the G30 command in G-code or the _Go To G30_ button will cause the mill to move to this position. 

###### **6.2.4 Keyboard Shortcuts** 

Several keyboard shortcuts are provided for operator convenience. Below is a list of shortcuts used in the PathPilot interface: 

|**Spacebar**|Feedhold|**Alt + R**|Cycle Start|
|---|---|---|---|
|**ESC**|Stop|**Alt + F**|Coolant|
|**Alt + Enter**|Give focus to MDI line|**Alt + E**|Edit currentlyloaded G-codeprogram<sup>1</sup>|



1Use the Alt+E command on any PathPilot screen to edit G-code. 

###### **6.3 Main Tab** 

The _Main_ tab is active by default when the PathPilot controller first powers on, and contains four controls: recent files, G-code window, MDI line, and tool path display (see **Figure 6.9** ). 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

65 

**<mark>PathPilot Interface</mark>** 



<!-- Start of picture text -->
Recent Files<br>Drop-down<br>Menu<br><!-- End of picture text -->

**Figure 6.9** 

###### **6.3.1 Selecting a Recent G-code Program File** 

The recent files drop-down menu displays the currently loaded G-code program file (see **Figure 6.9** ). Click the drop-down menu to display the last five program files loaded into PathPilot; select the name of the program from the menu to load the G-code. 

Select _Clear Current Program_ in the recent files drop-down menu to close the currently loaded G-code program file. 

###### **6.3.2 Working in the G-code Window** 

The G-code window displays the G-code of the currently loaded program file. Use the scroll bars to view the entire file. 

PathPilot highlights certain lines of code of interest. When running a G-code program in single block mode, there may be as many as three lines of G-code highlighted, each with a different color: 

- Green line: indicates the start line, which is the first line in the program (unless this has been changed with the _Set Start Line_ feature) 

- Blue line: indicates the line of code that is currently executing 

- Brown line: indicates the move that will occur the next time _Cycle Start_ is pressed 

###### **6.3.2.1 Setting a New Start Line** 

The start line is the line at which the G-code program begins. By default, this is the first line of code in the G-code program. Right-click the preferred start line of code in the program and select _Set Start Line_ to change the start line **_._** 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

66 

### **<mark>PathPilot Interface</mark>** 

When using the _Set Start Line_ option, the operator is responsible for making sure that the mill is in the proper state before the code executes. 

To set a start line in the middle of a G-code program file, make sure that any preparatory moves (like turning the spindle and coolant on) are manually completed before clicking _Cycle Start_ . 

The mill reads backwards through the beginning of the G-code program file to do things like set the appropriate G5x active work offset, G61/64 setting, and other modal states. It will not turn the spindle or coolant on. 

###### **6.3.2.2 Expanding the G-code Window** 

Double-click the G-code window to expand the G-code window and shrink the tool path display. Double-click the G-code window again to return the display to its original size. 

###### **6.3.3 Manually Entering Commands** 

When running a G-code program, commands to the mill are read from a file. You can also send G-code commands to the mill directly with the MDI line (see **Figure 6.10** ). 

Click the _MDI_ field to use the MDI line; the line is highlighted. Type the command, using the _Backspace, Delete, Left_ and _Right_ arrow keys to correct typing errors. Press _Enter_ to execute the command; press _Esc_ to abandon it _._ 



<!-- Start of picture text -->
MDI Line<br><!-- End of picture text -->

**Figure 6.10** 

Click the _MDI_ field and use the _Up_ or _Down_ arrow keys to copy a recent MDI command into the MDI line. Up to 100 MDI commands are stored for reuse; these commands are saved between sessions. Command history is available after a power cycle. 

**_NOTE:_** _When the MDI line is open, all keystrokes are registered as a typed command. Jogging is not possible when you are clicked inside the MDI field._ 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

67 

### **<mark>PathPilot Interface</mark>** 

###### **6.3.3.1 Searching in the Code** 

MDI has the ability to search the text of a G-code program file for specific numbers, codes, or items of interest like tools, feeds, and speeds. 

Type _FIND_ followed by the text to be searched in the MDI line (see **Figure 6.11** ). Pressing _Enter_ finds the next instance of the searched text; pressing _Enter_ while holding down the _Shift_ key finds the previous instance. 

If found, PathPilot scrolls to the line containing the searched text and highlights it in yellow (see **Figure 6.11** ). When the search reaches the end of the G-code file, it wraps and starts again from the beginning. 

Change the starting point of the search by clicking on any line in the G-code window. 

When used in conjunction with the _FIND_ command, certain search terms (listed below) initiate a search through the G-code file to find more than just the actual search term: 

- _FIND TOOL_ : Searches for instances of the actual word _Tool_ in the G-code and any _T_ G-code command which calls up a tool (e.g., T12) 

- _FIND SPEED_ : Searches for instances of the actual word _Speed_ in the G-code and any _S_ G-code command 

- _FIND FEED_ : Searches for instances of the actual word _Feed_ in the G-code and any _F_ G-code command (see **Figure 6.12** ) 

**_NOTE:_** _Search text ignores case, so the command FIND TOOL will match TOOL, Tool, tool, etc._ 



**Figure 6.11** 



**Figure 6.12** 

The _FIND_ command simplifies searching of a G-code file to verify speed and feed values and tool calls before cutting a part, or to find a specific set start line point in a large G-code file. For more information on using set start line, refer to _Setting a New Start Line_ section earlier in this chapter. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

68 

**<mark>PathPilot Interface</mark>** 

###### **6.3.4 Working in the Tool Path Window** 

The tool path window displays a graphic representation of the tool path that is executed for the currently loaded G-code file (see **Figure 6.13** ), each with a different color: 

- White lines: indicates the preview lines 

- Red lines: indicates the tool path as it is cut 

- Yellow lines: indicates jogging moves 

- Dotted blue lines: indicates the boundary box, which represents the ends of travel of the axes 

Double-click the tool path window, or click _Reset_ , to erase the jogging or tool path lines. 



**Figure 6.13** 

###### **6.3.4.1 Changing the View of the Tool Path Window** 

Four views are available: top, front, right, and ortho. By default, the view is top. Right-click anywhere in the tool path display and select a different view to change the view of the window. 

Grid lines are visible behind the tool path when the view is top, front, or right. Grid lines are not available in ortho. By default, grid lines are drawn at 0.5” intervals when in G20 mode (5 mm intervals when in G21 mode). Right-click anywhere in the tool path display and select a different grid spacing to change the resolution of the grid lines. When a program is loaded, the program extents (furthest points to which the tool will travel while executing the G-code) are displayed to the left and bottom of the tool path (see **Figure 6.13)** . 

###### **6.4 File Tab** 

The _File_ tab is used to transfer files to and from a USB drive, copy, delete, and rename files and folders (see **Figure 6.14** ). The left window shows files and folders on the controller hard drive; the middle window shows files and folders on a removable USB drive. 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

69 

### **<mark>PathPilot Interface</mark>** 



<!-- Start of picture text -->
Hard Drive Window USB Drive Window<br><!-- End of picture text -->

**Figure 6.14** 

###### **6.4.1 Managing Files** 

Use the _New Folder_ , _Rename_ , and _Delete_ buttons below the respective USB Drive Window and Hard Drive Window for file management (see **Figure 6.14** ). To move files into a folder, right-click on the file and select cut or copy from the pop-up menu. 

###### **6.4.1.1 Transferring Files or Folders from a USB Drive** 

1. Insert a USB drive into any open USB port. 

2. Navigate to the file to transfer in the USB drive window. 

**_NOTE:_** _Use Back to navigate backwards; use USB to jump to the highest (home) level (see_ **_Figure 6.14_** _)._ 

3. In the hard drive window, navigate to the desired location in the PathPilot interface to copy the transferred file from the USB drive. 

4. Highlight the file or folder to copy in the USB drive window; click _Copy From USB_ (see **Figure 6.14** ). 

5. If the file to be transferred has the same name as an existing file on the controller, you can either overwrite the file, give it a different name, or cancel the file transfer. 

6. When copied to the new location, the file displays in the USB drive window. 

7. Click _Eject_ to disconnect the USB drive from the controller (see **Figure 6.14** ). 

**_NOTE:_** _Ejecting the USB drive this way helps to avoid corrupting data on the USB drive._ 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

70 

### **<mark>PathPilot Interface</mark>** 

###### **6.4.2 Loading G-code** 

The _Load G-code_ function is only available for files stored on the controller (see **Figure 6.14** ). 

1. Navigate to the desired .nc file in the hard drive window; highlight the file and click _Load G-code_ (see **Figure 6.14** ). 

2. Click on the _Main_ tab; verify G-code file name appears in recent files drop-down menu. For more information on selecting a recent G-code program file, refer to _Main Tab_ section earlier in this chapter. 

### **<mark>PathPilot Interface</mark>** 



**Figure 6.16** 

###### **6.5 Settings Tab** 

The _Settings_ tab displays active settings of the PathPilot controller, allowing you to configure PathPilot to suit your machine configuration (see **Figure 6.16** ). 

The window on the left side of the _Settings_ tab displays a list of available G-code modalities. Active G-codes are highlighted in yellow (see **Figure 6.16** ). 

###### **6.5.1 Specifying the Tool Change Method** 

Select the _ATC_ (Automatic Tool Changer) or _Manual Tool Change_ option to identify the tool changer type for your specific mill configuration. Mill behavior differs when it encounters an M6 command for an ATC or manual tool change. 

If the _ATC_ option is selected, PathPilot searches for an ATC attached to the mill. If the mill is equipped with an ATC, tools that have been assigned to the tray are changed automatically when a `Tx M6` command is issued through the MDI line or within a G-code program file. The _Tool_ DRO and _M6 G43_ button only change the current tool number – neither directly cause an automatic tool change. To request an ATC tool change, either program `M6 Tx G43` in the MDI line or type a tool number in the _Tool_ DRO and press _Enter_ . For more information, refer to the ATC operator manual. 

If the _Manual Tool Change_ option is selected, the mill pauses at the `M6` command during a G-code program file execution, allowing you to manually change tools (see chapter 4, _Operation,_ for information on the manual tool change procedure). After changing tools, press _Cycle Start_ to resume program execution with the new tool. When the mill is paused and waiting for a manual tool change in the middle of a G-code program, the _Cycle Start_ LED flashes on and off and a message is displayed with the requested tool number on the tool path display. 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

73 

**<mark>PathPilot Interface</mark>** 

###### **6.5.2 Selecting the Spindle Type** 

Use the _Spindle Type_ drop-down to select spindle scaling if your mill is equipped with a Speeder Series 2 (PN 31350) or a High-speed Spindle (PN 35178). 

###### **6.5.3 Changing the Network Name** 

Use the _Network Name_ field to change the network name of the controller; press _Enter_ . The controller must be restarted for the name change to take effect. 

If you are connected to a network using either the Ethernet jack or the optional Wireless Network Adapter (PN 38207), the controller appears on a network as _network-attached storage_ . The controller exports a Windows network share named _gcode_ to the Windows network with a domain name _WORKGROUP_ . The default network name of the controller is _TORMACHPCNC_ . The login name for the share is _WORKGROUP\operator_ and the password is _pcnc_ . The network name must be unique on your network. For more information, refer to the documentation that ships with the Wireless Network Adapter. 

###### **6.5.4 Disabling Limit Switches** 

The _Limit Switches_ checkbox is selected by default. To provide a temporary workaround for a malfunctioning limit switch circuit, clear the checkbox. When cleared, _Ref X, Ref Y, Ref Z,_ and _Ref A_ sets the machine reference position to the mill position at the time it is clicked rather than completing the homing procedure. 

**_NOTE:_** _If desired, use this procedure in conjunction with one or more dial indicators mounted at the ends of mill travel to provide a more accurate method of manually referencing the mill._ 

###### **6.5.5 Limiting a G30/M998 Move** 

Select _G30/M998 Move in Z Only_ to move to the tool change position in the Z-axis only when using a G30 or M998 command. Otherwise, a coordinated X, Y, Z move occurs on G30 or M998. 

The G30 or M998 G-code commands can be used to move the mill to a pre-set position. The position is settable using the _Set G30_ button on the _Offsets_ screen. A G30 or M998 command is typically programmed right before a tool change line in G-code program files so that the spindle head clears the workpiece with sufficient distance to be able to change tools. For more information on using a G30 or M998 command, refer to chapter 7, _Programming_ . 

###### **6.5.7.3 Enabling Enclosure Door Switch** 

Select _Enclosure Door Switch_ if you are using an optional Enclosure Door Switch Kit (PN 35550). The installed enclosure door switch is activated, and, when the front doors are opened: 

- All axis motion stops 

- Spindle speed reduces to 1000 RPM 

For more information on installation and use, refer to the documentation that ships with the product. 

###### **6.5.7.5 Enabling Soft Keyboard** 

Select _Soft / Onscreen Keyboard_ to use a soft keyboard with the optional Touch Screen Kit (PN 35575). For information on setup and calibration, refer to the documentation that ships with the product. 



**Figure 6.17** 



**Figure 6.18** 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

75 

**<mark>PathPilot Interface</mark>** 

When you select a DRO field, a numeric keypad opens on screen ( **see Figure 6.17** ). When you select either the MDI line, the _Save_ field, the _Save As_ field, or the conversational title DRO, a QWERTY keyboard opens on screen ( **see Figure 6.18** ). Press _Enter_ to accept the value typed; press _ESC_ to exit the soft keyboard and restore the previous value. 

###### **6.5.7.6 Enabling Probes** 

Identify the probe type if you are using one of the two optional probe options — a Passive Probe (PN 32309) and an industrial-grade Digitizing Probe (PN 31858). 

**_IMPORTANT!_** _Do not use probing features in PathPilot before selecting this setting. Refer to chapter 8, Accessories, to make sure the correct probe is selected._ 

###### **6.5.7.8 Switching to RapidTurn** 

Click _Switch to RapidTurn_ to close the PathPilot interface for the mill and open PathPilot interface for the RapidTurn<sup>™</sup> (PN 32901). For information on operating the RapidTurn and related interface, refer to the RapidTurn operator manual. 

###### **6.6 Offsets Tab** 

The _Offsets_ tab reveals two sub tabs: _Tool_ and _Work_ (see **Figure 6.19** ) _._ 



**Figure 6.19** 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

76 

### **<mark>PathPilot Interface</mark>** 

Work offsets are a concept that allow the operator to think in terms of X/Y/Z coordinates with respect to the part instead of thinking of them with respect to the mill position. Up to nine work offsets can be saved in the control. These are selected either by typing G54, G55, ... (up to G59, G59.1, G59.2, G59.3) into the MDI line, or by including them in a G-code program. 

Tool offsets allow the operator to use tools of different lengths or – when using G41/G42 cutter radius compensation – different diameters, while still programming with respect to the workpiece. The most common tool offset is the tool length offset, which is applied by the G43 command. 

###### **6.6.1 Tool Tab** 

The _Tool_ tab displays a tool table on the right with fields available to input tool information (see **Figure 6.19** ). 

**_NOTE:_** _Fields are only editable if the mill is powered on and not in Reset mode._ 

For a given machining operation, the X and Y position of the workpiece are fixed. If you are using multiple tools of differing lengths, you will need to change the Z offset for each tool. PathPilot allows you to switch tools quickly, without the need to set up the mill every time a tool is mounted. Each tool and holder only needs to be measured once, either offline or in the mill. 

###### **6.6.1.1 Tool Measuring Techniques** 

Different tool measuring techniques may be used, but the three most common methods are: 

- Offline measurement with a height gauge 

- Automated measurement with an electronic tool setter 

- Touching off tool to a reference surface 

**Measuring Offline with a Height Gauge** 

The Tormach Tool Assistant Set (PN 31988) includes an 8” digital height gauge and a USB interface cable with touch trigger (see **Figure 6.20** ). 

1. Connect the USB interface cable to any available USB port on the controller. 

2. Move the digital height gauge to a block and press _Zero_ on the touch trigger. The device is zeroed. 

**_NOTE:_** _Granite Surface Plate with Integrated Tool Hole (PN 31713), as shown in_ **_Figure 6.20_** _, helps accurately measure tool length._ 

3. To measure tool height, mount the tool in a TTS tool holder and place on a block (see **Figure 6.20** ). The tool height measurement is the distance from the block surface to the end of the tool tip. 



**Figure 6.20** 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

77 

**<mark>PathPilot Interface</mark>** 

4. From the PathPilot interface, click the appropriate line in the tool table (see **Figure 6.19** ); the line is highlighted. 

5. Press _Data_ on the USB interface cable to transfer measurement information to the _Length_ field in the tool table (see **Figure 6.19** ). 

###### **Measuring Automatically with an Electronic Tool Setter** 

Before using an electronic tool setter: 

- Set the work offset such that the surface upon which the electronic tool setter sits is Z zero. A quick way to do this is to use the _Move And Set Work Offset_ button on the _Offsets_ screen’s _Work_ tab, with either a tool of known length in the spindle or with no tool in the spindle (and Tool Zero in the tool DRO). 

By doing this setup step, you are measuring true tool lengths, and can interchange tools measured in the height gauge with tools measured with the electronic tool setter. 

To measure a tool with the electronic tool setter: Put the tool in the spindle, type the tool number in the tool DRO, and then, with the tool centered over the electronic tool setter, click the _Move And Set Tool Length_ button on the _Offsets_ screen’s _Tool_ tab. 

###### **Measuring by Touching Off Tool** 

This method was covered in chapter 5, _Intro to PathPilot_ . It is not as accurate as the previously described methods, but works in many situations. 

###### **6.6.1.2 Creating Tool Descriptions** 

PathPilot uses keywords and patterns in the tool description to recognize tooling features. Refer to the section _Using Tool Keywords_ later in this chapter for more information. 

Example: "Dia:.3125 4FL R:03 AlTiN CRB variable loc:.75" 

This description provides the following information for PathPilot to calculate machining information: 

- 0.3125 tool diameter 

- Four flutes 

- 0.03 radius, or "bullnose" 

- Aluminum-titanium nitrade coating 

- Carbide 

- Variable helix 

- 0.75 length of cut (loc) 

To get accurate machining information, all tooling must be described with detail: the more detail, the better the results. Using a personal description likely won’t contain meaningful information for PathPilot. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

78 

**<mark>PathPilot Interface</mark>** 



**Figure 6.21** 

Example: "Gold colored end mill from middle drawer" 

This description provides virtually no information. PathPilot defaults to basic cutter features about this tool: 

- Two flutes 

- Uncoated, high-speed steel end mill 

- Length of cut based on the diameter 

###### **Manually Entering Tool Descriptions** 

You can manually enter tool descriptions in the _Tool Table_ window. Descriptions are not case sensitive. 

If a pattern or word in the description is recognized, PathPilot uses syntax highlighting to indicate a valid description (see **Figure 6.21** ). 

Refer to the section _Using Tool Keywords_ later in this chapter for more information on tool description keywords. 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

79 

**<mark>PathPilot Interface</mark>** 

###### **Using Tool Keywords** 

|**Item**|**Pattern**|**Example**|**Notes**|
|---|---|---|---|
|type|drill, centerdrill, tap, ball,<br>chamfer, spot, flat, taper,<br>bullnose, lollypop, flycut,<br>shearhog, drag, saw,<br>indexable|•<br>Drill<br>•<br>Ball<br>•<br>Flycut<br>•<br>Drag|“Drag” indicates that the tool is<br>a drag tool, and has no (0) RPM<br>associated with it.|
|flutes|A number followed by<br>“FL” or “FLUTE”|•<br>4FL<br>•<br>12FL<br>•<br>2flute|No flutes is specified the same as<br>two flutes.|
|length of cut (or<br>flute length)|“loc” followed by a colon,<br>followed by a decimal<br>number|•<br>loc:0.875|If no length of cut is specified, a<br>length is assumed based on cutter<br>diameter.|
|tool coating|TiN, AlTiN, TiAlN, CNB,<br>ZrN, TiB2, TiB, TiCN, DLC,<br>uncoated, nACo|•<br>TiN<br>•<br>ZrN<br>•<br>TiB2|No coating is specified same as<br>“uncoated.”|
|tool diameter|“diameter” or “dia”<br>followed by a colon,<br>followed by a decimal<br>number|•<br>Diameter:.0341<br>•<br>dia:.750|—|
|tool material|carbide, HSS, CoHSS, CRB,<br>carb, diamond, DMND|•<br>HSS<br>•<br>CoHSS<br>•<br>crb|No tool material is specified the<br>same as HSS (high-speed steel).|
|tool radius|“R” or “radius” followed<br>by a colon, followed by a<br>decimal number|•<br>R:.02<br>•<br>radius:0.02|No radius is specified the same as a<br>zero radius.|



UM10349_PCNC1100_Manual_0520A 

Chapter 6 

80 

### **<mark>PathPilot Interface</mark>** 



**Figure 6.22** 

###### **Generating Automatic Tool Descriptions** 

If you are using a Tormach tool, you can enter the part number to automatically generate tool descriptions in the _Tool Table_ window (see **Figure 6.22** ). 

**_NOTE:_** _If you're unsure of the part number, you can search for the tool at tormach.com._ 

1. From the PathPilot interface, on the _Offsets_ tab, in the _Tool Table_ window, select a blank line. 

2. Type the part number for the tool. 

   - Example: 35571 

The full description and tool diameter for a ShearHog (PN 35571) displays. 

3. You must enter the value for the _Length_ . 

###### **6.6.2 Work Tab** 

The _Work_ tab displays a read-only table of work offsets. The active work offset is highlighted in this table. 

**_NOTE:_** _The table cannot be edited directly. To change the current work offset value, either type into an Axis DRO or use Zero button next to the Axis DRO._ 

###### **6.6.3 Working with Backups** 

Make a periodic backup of the tool offset and fixture information and machine settings to store externally should the controller get replaced or need to be restored to factory settings. 

Create a tool offset and fixture information backup on a PathPilot controller as follows: 

1. Insert a USB drive into any open USB slot on the controller. 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

81 

**<mark>PathPilot Interface</mark>** 

2. On the _Main_ screen, type _ADMIN SETTINGS BACKUP_ in the MDI line. 

3. In the dialog box, navigate to a location to store the backup .zip file on the USB drive and rename if desired; click _Save_ . 

**_NOTE:_** _Keep this file somewhere safe and easily accessible._ 

Restore tool offset and fixture information backup on a PathPilot controller as follows: 

1. Transfer the tool offset and fixture information and machine settings backup to a USB drive; insert into any open USB slot on the controller. 

2. On the _Main_ screen, type _ADMIN SETTINGS RESTORE_ in the MDI line. 

3. In the dialog box, navigate to the backup .zip file on the USB drive; click _Open_ . PathPilot exits, restores from the backup file, and then restarts PathPilot. 

###### **6.8 Probe Tab** 

The _Probe_ tab of the notebook contains automated functions to find X/Y/Z locations, set work offsets, probe pockets, slots or bosses, as well as instructions on probe and toolsetter setup and calibration. The _Probe_ tab contains a separate, smaller notebook that consists of three tabs: 

- X/Y/Z Probe 

- Rect/Circ Probe 

- Probe/ETS Setup 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

99 

**<mark>PathPilot Interface</mark>** 

Tool 99 (the probe tool) must be the current tool in spindle before using any of the probing functions. All probing moves occur at a feed rate specified by the current _F_ command. This can be viewed and modified in the feed rate DRO. For more information, see _Feed Rate DRO_ earlier in this chapter. Disable the spindle ( _Spindle Lockout Key_ off) to prevent accidental spindle start with probe in spindle. 

**_NOTE:_** _Check that probe polarity is set correctly on Settings screen (before using the probing buttons) by pressing probe tip while looking at Accessory Input LED on Probe screen (see_ **_Figure 6.39_** _)._ 



**Figure 6.39** 

###### **6.8.1 XYZ Probe Tab** 

The _X/Y/Z Probe_ tab of the _Probe_ notebook allows the user to quickly touch off a workpiece or vise jaw to find that feature’s location in current work offset coordinates, or to touch off that feature and set the work offset zero to the feature’s surface (see **Figure 6.39** ). 

The _Find Corner, Set Work Origin_ button is used to probe the corner of a vise jaw or rectangular workpiece, and set that corner to X/Y zero. 

**_NOTE:_** _To change the corner on which to probe a part, click Change Corner._ 

To use this button, first position the probe below the surface of the vise jaw and roughly 1” away from the vice jaw corner in X and Y (see **Figure 6.39** ). Upon completion of the probing moves, the current active work offset system (e.g. G54) is set such that the vise jaw corner is 0, 0 (the X/Y origin). 

The _Probe (Axis), Set Work Offset_ buttons will probe in one axis only and set the current work offset origin to the probed surface for that axis. The direction of probing is specified by the + or – sign on the button and is described by the accompanying graphic. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

100 

**<mark>PathPilot Interface</mark>** 

The _Probe (AXIS)_ buttons cause a probing move similar to the _Probe (AXIS), Set Work Offset_ buttons, but will not change the work offset value. Instead, the location of the probed surface is displayed in the label below the button. 

###### **6.8.2 Rect/Circ Tab** 

The _Rect/Circ_ tab of the _Probe_ notebook contains buttons that automate tasks like finding the center of a pocket, slot, or bore, as well as finding the center of a circular or rectangular boss (see **Figure 6.40** ). As the on-screen instructions suggest, first jog the probe below the top surface of the feature to be probed. 



**Figure 6.40** 

The _Find Pocket Center, Set Work Origin_ button works in either a round or rectangular pocket. The probe moves in both X and Y to find the pocket center. The _Find Center, Set Work Origin_ buttons perform a similar probing operation, but in X or Y only, and are intended to be used to find the center of a slot. 

The rectangular boss center finding routine hunts around the edge of a square or rectangular workpiece to find the center. To use this routine, start with the probe below the top surface of the boss and on the left-hand side. Similarly, the circular boss center finding routine probes three times to find an approximate center of curvature, then confirms the circular boss center with four additional moves. To use this feature, start with the probe below the top surface of the boss and on the left-hand side. 

The _Find A Axis Center & Set Work Origin_ button (see **Figure 6.40** ) is available for use with a 4th axis mounted in the A-axis orientation. The function probes a round workpiece mounted in the A-axis to find the center rotation of the A-axis. Move the probe to a point approximately directly above the A-axis center of rotation, and click the _Find A Axis Center & Set Work Origin_ button (see **Figure 6.40** ). 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

101 

**<mark>PathPilot Interface</mark>** 



**Figure 6.41** 

###### **6.8.3 Probe/ETS Setup Tab** 

The _Probe/ETS Setup_ tab is used to align and set the probe and ETS heights (see **Figure 6.41** ). For information on probe and ETS setup, refer to chapter 8, _Accessories_ . 

###### **6.9 ADMIN Commands** 

Several ADMIN commands are provided for operator use. 

|**ADMIN Command**|**Description**|
|---|---|
|ADMIN CONFIG|Switch configuration|
|ADMIN DATE|Customize controller date and time|
|ADMIN DISPLAY|Customize controller screen display|
|ADMIN KEYBOARD|Customize controller keyboard layout|
|ADMIN NETWORK|WIFI network setup|
|ADMIN OPENDOORMAXRPM|Set spindle speed RPM with spindle door open; for use with Full<br>Enclosure Door Switch Kit(PN 35550)|
|ADMIN SETTINGS BACKUP|Save tool offset and fixture information backupto store externally|
|ADMIN SETTINGS RESTORE|Restore tool offset and fixture information backup from external<br>location|
|ADMIN TOUCHSCREEN|Calibrate touch screen; for use with 17" Touch Screen Kit (PN<br>35575)|



UM10349_PCNC1100_Manual_0520A 

Chapter 6 

102 

**<mark>Accessories</mark>** 

#### **8. Accessories** 

This chapter describes in brief the options and accessories available for the PCNC mill. 

###### **8.1 4th Axis Kits** 

Each PCNC mill is pre-wired for installation of an optional 4th Axis Kit. A variety of 4th axis options are available. 

###### **8.1.1 Standard Rotary Table 4th Axis Kits** 

Mounted on left side of table; horizontal mounting also possible. Available models include: 

|**PN**|**Description**|
|---|---|
|30289|8” Table|
|30290|6” Table|





**Figure 8.1** 

Chapter 8 

UM10349_PCNC1100_Manual_0520A 

162 

**<mark>Accessories</mark>** 

###### **8.1.2 Tilting Rotary Table 4th Axis Kits** 

Mounted on right side of table; manually adjustable tilting axis can position table from 0-90° with respect to mill table. Available models include: 

|**PN**|**Description**|
|---|---|
|31997|8” Table|
|31996|6” Table|





**Figure 8.2** 

###### **8.1.3 Super Spacer Rotary Table 4th Axis Kits** 

Mounted on right side of table; large bore can accommodate oversized workpieces. Available models include: 

|**PN**|**Description**|
|---|---|
|33264|8” Table|
|33089|6” Table|





**Figure 8.3** 

UM10349_PCNC1100_Manual_0520A 

Chapter 8 

163 

**<mark>Accessories</mark>** 

###### **8.1.4 4th Axis Homing Kit** 

Tormach 4th Axis Kits do not have a built-in homing switch. An optional homing kit is available that utilizes an inductive-proximity sensor and plugs in to the mill’s accessory socket. 

|**PN**|**Description**|
|---|---|
|31921|4th Axis HomingKit|



###### **4th Axis Workholding Accessories** 

A large selection of workholding accessories are available for Tormach 4th axis products including tailstocks, 2-, 3-, and 4-jaw chucks, 5C collets/collet fixtures, and Cast Iron Tombstone (PN 33146). 

###### **8.2 Enclosures, Stands, and Machine Arms** 

###### **8.2.1 Full Enclosure Kits** 

A full enclosure kit is available for both PCNC mills. The PCNC 770 enclosure is shown in **Figure 8.4** . Constructed from 16-gauge sheet metal, these feature large doors and overhead-task lighting. 

A second enclosure option, the DIY Frame Kit, is available for the PCNC 1100. It is designed as a customized enclosure, and offers open access for overhead part loading (see **Figure 8.5** ). 

|**PN**|**Description**|
|---|---|
|34427|Full Enclosure Kit for PCNC 1100|
|34442|Full Enclosure Kit for PCNC 770|
|34655|DIY Frame Kit for PCNC 1100|





**Figure 8.4** 



**Figure 8.5** 

Chapter 8 

UM10349_PCNC1100_Manual_0520A 

164 

**<mark>Accessories</mark>** 

###### **8.2.2 Stands** 

These are heavy-gauge, welded sheet metal pedestal bases to support the PCNC mill, with an enclosed compartment for the mill controller. Each base includes chip pan, backsplash, and chip guards. The PCNC 1100 deluxe stand includes an integrated coolant kit with 1/8 hp coolant pump. The coolant kit for PCNC 770 is sold separately. 

|**PN**|**Description**|
|---|---|
|30297|PCNC 1100 Deluxe Machine Stand w/ Coolant Kit|
|31191|PCNC 770 Machine Stand|
|31192|PCNC 770 Coolant Kit|



###### **8.2.3 Machine Arms** 

A variety of machine arms and related accessories are available: 

|**PN**|**Description**|
|---|---|
|30286|Machine Arm for PCNC Mill|
|30555|Tool Trayfor Machine Arm|
|32801|Upper Tool TrayKit for Machine Arm|
|34668|Machine Arm for PCNC w/ Full Enclosure|



###### **8.3 Tapping Options** 

Each PCNC mill supports tapping with the aid of tapping heads. 

The Tormach Reversing Tapping Head by Procunier is shown in **Figure 8.6** . 

The following tapping heads are supported: 



**Figure 8.6** 

UM10349_PCNC1100_Manual_0520A 

Chapter 8 

165 

**<mark>Accessories</mark>** 

|**PN**|**Description**|**Tapping Head Type**|
|---|---|---|
|32657|Tormach ReversingTappingHead byProcunier|Auto-Reversing|
|31807|Modular Tension/Compression TTS TappingHead Kit|Tension/Compression|
|32021|TTS ER20 TappingHead|Tension/Compression|
|32020|TTS ER16 TappingHead|Tension/Compression|



**_NOTE:_** _Tension compression heads can be programmed via G84 canned cycle._ 

For further information on tapping heads and general CNC tapping guidelines, refer to technical document TD10077. 

###### **8.4 Oil And Coolant System Options** 

###### **8.4.1 Automatic Oiler** 

The automatic oiler has a 0.5 gallon reservoir with programmable stroke and interval. An audible warning alerts the operator when oil level is low. Available models include: 

|**PN**|**Description**|
|---|---|
|31374|Automatic Oiler Kit for PCNC 1100 – 230 VAC|
|31373|Automatic Oiler Kit for PCNC 770 – 115 VAC|



###### **8.4.2 Spray Coolant** 

The Fog Buster Spray Coolant Kit is a non-fogging, non-atomizing, low-pressure sprayer with a 115 VAC solenoid valve included to integrate via M7/M8/M9 program commands. Requires 90 psi air supply. 

|**PN**|**Description**|
|---|---|
|32682|FogBuster SprayCoolant Kit|



###### **8.4.3 Chip Flap Kit** 

These heavy-gauge, rubber-chip flaps provide extra protection for way covers from premature wear caused by abrasive metal chips (see **Figure 8.7** ). 

|**PN**|**Description**|
|---|---|
|32780|Y-axis ChipFlap; PCNC 1100|
|32807|Y-axis ChipFlap; PCNC 770|







<!-- Start of picture text -->
Figure 8.7<br><!-- End of picture text -->

Chapter 8 

UM10349_PCNC1100_Manual_0520A 

166 

**<mark>Accessories</mark>** 

###### **8.4.4 Coolant Hose and Accessories** 

Additional coolant hose, nozzle styles, valves, manifolds, and fittings are available to design a custom flood-coolant system for any PCNC mill. Individual coolant systems are also available (see **Figure 8.8).** 

**PN Description** 33215 Coolant Hose Accessory Kit w/ Pliers 

###### **8.4.5 Tramp Oil Pillow** 

These absorbent pillows are placed inside the coolant tank to remove excess tramp oil from the coolant system. 

|**PN**|**Description**|
|---|---|
|31925|FloatingTrampOil Collection Pillow|





**Figure 8.8** 

###### **8.5 Spindle Options** 

###### **8.5.1 High Speed Spindle Options** 

Several options are available for high speed spindles including: 

|**PN**|**Description**|**Coolant Compatible**|
|---|---|---|
|31890|Kress Companion Spindle Kit (vertical)|No|
|32444|Kress Companion Spindle Kit, Horizontal Adaptor|—|
|31350|Tormach Speeder<sup>™</sup>|Yes|
|35178|High-speed Spindle Kit for PCNC 1100|Yes|





**Figure 8.9** 



**Figure 8.10** 

UM10349_PCNC1100_Manual_0520A 

Chapter 8 

167 

### **<mark>Accessories</mark>** 

###### **8.5.1.1 Kress Companion Spindle Kit** 

This high-quality, electric-die grinder is designed to be mounted as a companion spindle to the primary mill spindle (see **Figure 8.9** ). Maximum speed is 29,000 RPM; suitable for light milling and engraving. 

**_NOTE:_** _The Kress spindle is not compatible with flood or mist coolant._ 

A horizontal mounting kit is available (see **Figure 8.10** ); useful for light-end work on long parts. 

###### **8.5.1.2 Tormach Speeder** 

The Tormach Speeder<sup>™</sup> is a mechanical speed increaser for PCNC mills (see **Figure 8.11** ). A pulley and belt system multiplies the input speed from the primary mill spindle by a factor of three. Speeder tool retention is accomplished via ER16 collets. Continuous operational speed of up to 30,000  RPM for shortduty cycles. Flood or mist coolant compatible. 

###### **8.5.1.3 High-speed Spindle** 

The High-speed Spindle, rated for continuous operation at 24,000 RPM, is typically used for general purpose machining of aluminum, brass, plastic, wood. Other applications include surface contouring with a ball-end mill for mold making, as well as engraving (see **Figure 8.12** ). 

###### **8.5.2 Other Spindle Options** 

###### **8.5.2.1 BT30 Spindle Cartridge** 

This drop-in replacement BT30 taper spindle cartridge kit is used in place of factory installed R8 spindle cartridge (see **Figure 8.13** ). 

**_NOTE:_** _BT30 Spindle Cartridge is not compatible with pullstud type BT30 tool holders, power drawbar or automatic tool changer (ATC)._ 

|**PN**|**Description**|
|---|---|
|30505|BT30 Spindle Cartridge for PCNC 1100|





**Figure 8.11** 



**Figure 8.12** 



**Figure 8.13** 

Chapter 8 

UM10349_PCNC1100_Manual_0520A 

168 

**<mark>Accessories</mark>** 

###### **8.5.2.2  Spindle Load Meter** 

- Operator-panel-mounted gauge measures instantaneous spindle amperage and provides the operator with a visual guide for determining spindle load (see **Figure 8.14** ); top mounts to electrical cabinet of any PCNC mill. 

|**PN**|**Description**|
|---|---|
|32096|PCNC 1100 Spindle Load Meter|
|31101|PCNC 770 Spindle Load Meter|



###### **8.5.2.3  LED Spindle Light** 

This is a bright LED work light that mounts to the spindle nose of any PCNC mill. 



**Figure 8.14** 

|**PN**|**Description**|
|---|---|
|34846|LED Spindle Light Kit|



###### **8.6 Power Drawbar and ATC** 

###### **8.6.1 Power Drawbar** 

A pneumatic power drawbar system can be fitted to any PCNC mill (see **Figure 8.15** ). The power drawbar system can be used alone, or in conjunction with a ATC. 

|**PN**|**Description**|
|---|---|
|31706|PCNC 1100 Power Drawbar Kit|
|32436|PCNC 770 Power Drawbar Kit|



The power drawbar system must be supplied with air pressure between 90 psi and 120 psi. The air supply must be dried and lubricated using a filter-regulator lubricator (FRL). Only use oil that is specifically designed for air tools. The following components are recommended for use with the power drawbar system: 

|**PN**|**Description**|
|---|---|
|31945|UltraQuiet Air Compressor|
|32457|FRL Filter-Regulator-Lubricator|
|31991|Pneumatic Hose Kit for PDB/ATC/Fogbuster|





**Figure 8.15** 

UM10349_PCNC1100_Manual_0520A 

Chapter 8 

169 

**<mark>Accessories</mark>** 

The power drawbar system is only compatible with Tormach Tooling System® (TTS) tool holders. If needed, the power drawbar system can be temporarily disabled to allow any PCNC mill to be used with standard R8 tool holders. 

An optional foot pedal can be added for hands-free activation of the power drawbar. This is not only convenient but helpful when manually changing tools where two hands are required. 

|**PN**|**Description**|
|---|---|
|31728|Power Drawbar Foot Pedal Kit|



###### **8.6.2 Automatic Tool Changer (ATC)** 

A 10-station ATC provides automatic changing of tools via program command (see **Figure 8.16** ). The ATC is only compatible with TTS tool holders. 

|**PN**|**Description**|
|---|---|
|32279|ATC for PCNC 1100|
|32570|ATC for PCNC 770|



**_NOTE:_** _The power drawbar system is required to install the ATC._ 

An optional Pressure Sensor for the ATC (PN 32329) prevents the ATC from actuating if supply air pressure drops below 90 psi. Recommended for most installations. The ATC system can also be integrated with the electronic Tool Setter (PN 31875) to automate tool touch off. 



**Figure 8.16** 

###### **8.7 Auxiliary Electronic Options** 

###### **8.7.1 External Contactor Kit** 

The optional External Contactor Kit allows for control of high-current devices (greater than 1 A) using M7/M8/M9 program commands via the controlled outlet marked _Coolant_ on the underside of the electrical cabinet. Rated operational current is 95 A (AC3 usage @ 380 VAC). 

|**PN**|**Description**|
|---|---|
|33044|External Contactor Kit|



Chapter 8 

UM10349_PCNC1100_Manual_0520A 

170 

**<mark>Accessories</mark>** 

###### **8.7.2 Switchable Convenience Outlet Kit** 

Adds an additional switched outlet for low-current devices. Recommended for toggling mill between flood coolant and mist coolant. 

**PN Description** 33043 Switchable Convenience Outlet 

**_NOTE:_** _Can be used in conjunction with External Contactor Kit to interface devices with currents exceeding 1 A._ 

###### **8.7.3 USB M-code I/O Interface Kit** 

This device allows the user to assign custom M-code commands to three optically isolated inputs and four relay contact outputs. This is useful for integrating a beacon light, auto part loader, or pneumatic vise via program command. 

|**PN**|**Description**|
|---|---|
|32616|USB M-code I/O Interface Module|



###### **8.7.4 Integrated Remote E-stop Kit** 

Adds an additional E-stop button to any mill. Multiple Remote E-stop Kits can be linked together in series to provide multiple stop locations. 

|**PN**|**Description**|
|---|---|
|30790|Integrated Remote E-stopKit|
|30785|E-stopInterface Kit|



**_NOTE:_** _Each PCNC mill requires one Remote E-stop Interface. Multiple E-stops can share a single interface._ 

###### **8.8 Controller Options** 

###### **8.8.1 USB Bulkhead Port Assembly** 

Provides a convenient USB port on any PCNC mill stand to load programs into any PCNC mill controller without the need to open the controller cabinet. 

**PN Description** 31289 USB Bulkhead Port Assembly 

UM10349_PCNC1100_Manual_0520A 

Chapter 8 

171 

**<mark>Accessories</mark>** 

###### **8.9 Prototyping Accessories** 

###### **8.9.1 Injection Molder** 

The Tormach Injection Molder turns any PCNC mill into a small (maximum 1 oz. shot size) injection molder for prototyping and short-run molding (see **Figure 8.17** ). PID temperature control up to 800°F. Computer controlled ram speed and dwell time allows fine tuning of the molding process for a perfect shot every time. 

|**PN**|**Description**|
|---|---|
|32079|Tormach Injection Molder|



###### **8.9.2 CNC Scanner** 

The CNC Scanner<sup>™</sup> is a digital microscope (see **Figure 8.18** ) that interfaces with any PCNC mill to collect dimensionally accurate, ultra-high resolution photos of 2D surfaces (see **Figure 8.19** ). Applications include measurement, reverse engineering, and quality control. 



**Figure 8.17** 

|**PN**|**Description**|
|---|---|
|33308|Tormach CNC Scanner V2 Package|





**Figure 8.18** 



**Figure 8.19** 

Chapter 8 

UM10349_PCNC1100_Manual_0520A 

172 

**<mark>Accessories</mark>** 

###### **8.9.3 Probe** 

Tormach’s two probe options are used to: 

- Digitize a surface 

- Probe a Z surface 

- Probe X or Y surface 

|**PN**|**Description**|**Polarity**|
|---|---|---|
|31858|DigitizingProbe|Active-High|
|32309|Passive Probe w/10 mm TTS Mount|Passive-Low|



In addition, automated probing functions are available to: 

- Find the center of a bore 

- Find the center of a circular boss 

- Find the corner of a vise 



**Figure 8.20** 

###### **8.9.3.1 Probe/Tool Setter Polarity** 

Probe polarity must be set in the controller to match the polarity of the probing device being used. Refer to the following table to determine the correct polarity for probe or tool setter. 

|**PN**|**Description**|**Polarity**|
|---|---|---|
|31875|Electronic Tool Setter (ETS)|Active-High|
|31858|DigitizingProbe|Active-High|
|32309|Passive Probe w/10 mm TTS Mount|Passive-Low|



UM10349_PCNC1100_Manual_0520A 

Chapter 8 

173 

### **<mark>Accessories</mark>** 

###### **Digitizing Probe Set Screws** 

###### **Passive Probe Set Screws** 



<!-- Start of picture text -->
(C not visible)<br>B A<br>A<br>B<br>C<br><!-- End of picture text -->

**Figure 8.21** 

**Figure 8.22** 

###### **8.9.3.2 Setting Probe/Tool Setter Polarity** 

1. Click on the _Settings_ tab (see **Figure 8.20** ). 

2. Select the appropriate option from the two probe types. 

###### **8.9.3.3 Calibrating Probe Tip** 

For best results, the probe must be routinely calibrated so the center line of the probe tip is coaxial to the centerline of the PCNC mill spindle. The calibration procedure should be done: 

- Prior to first use 

- After tip replacement 

- Periodically after extended usage 

**_NOTE:_** _The probe has three adjustment set screws 120° apart (see_ **_Figure 8.21_** _and_ **_Figure 8.22_** _)._ 

Calibrate the probe as follows (see **Figure 8.23** ): 

1. Choose the _Probe_ tab, then choose _Probe/ETS Setup_ tab. 

2. Refer to the _Probe Tip Adjustment_ screen instructions as shown in **Figure 8.23** . 

Chapter 8 

UM10349_PCNC1100_Manual_0520A 

174 

**<mark>Accessories</mark>** 



**Figure 8.23** 

- **a.** Orient the probe in the spindle so one of three adjustment screws is opposite the machine column (see **Figure 8.24** ). Label this _Screw A_ . 

- **b.** Press _Y+_ button next to _A._ 

- **c.** Rotate spindle 120° clockwise (as viewed from above the probe) so next screw is opposite machine column. Press _Y+_ button next to _B_ . 

- **d.** Similarly, rotate spindle a third time until final screw is opposite machine column. Press _Y+_ button next to _C_ . 

- **e.** Tighten the screw corresponding to the largest DRO value ( _A, B,_ or _C)_ . Alternatively, if the screw cannot be tightened, loosen the other two screws. 



**Figure 8.24** 

- **f.** Iterate this process until all DROs read the same value. All screws should be tight. 

UM10349_PCNC1100_Manual_0520A 

Chapter 8 

175 

### **<mark>Accessories</mark>** 

After calibration, mark the spindle pulley with a marker or paint pen at a location that corresponds to the angular position of the probe cord. This allows the probe to be removed and replaced in the exact spindle orientation it was calibrated for — and eliminate error stackup. 

###### **8.9.3.4 Measuring Probe Tip Diameter** 

Use a micrometer to directly measure probe tip diameter. Enter this data into tool table for Tool #99. 

###### **8.9.4 Tool Setter** 

The Electronic Tool Setter (ETS) can be interfaced to the accessory port of either the PCNC 770 mill or the PCNC 1100 mill (see **Figure 8.25** ). 

|**PN**|**Description**|
|---|---|
|31875|Electronic Tool Setter|



This device can be used for two functions: 

- Precision work setting (Z-plane only) 

- Precision tool setting 



**Figure 8.25** 

###### **8.9.4.1 Tool Setter Trigger Height** 

The trigger height of the ETS is 80 mm (3.1496”). This is the default value in the _ETS Height_ DRO on the _Probe/ETS Setup_ tab in PathPilot<sup>®</sup> (see **Figure 8.23** ). If using a non-Tormach tool setter, consult the manufacturer for trigger height and enter this value in the _ETS Height_ DRO. If in G20 (imperial units) enter the height in inches; if in G21 (metric units) enter the height in millimeters. 

Once trigger height of tool setter is established, it can be used to assign different Z work offsets as follows: 

1. Click _Offsets_ tab, then _Tool_ tab (see **Figure 8.26** ). 

2. Place tool setter on surface where work offset is to be located (e.g., top of workpiece, top of vise, or top of mill table). 

3. Confirm desired work offset (i.e., G54, G55, G56) is active in the control. 

4. Confirm that tool number _T_ DRO corresponds to tool currently in spindle. 

5. Click _Move & Set Work Offset_ (see **Figure 8.26** ). 



**Figure 8.26** 

Chapter 8 

UM10349_PCNC1100_Manual_0520A 

176 

**<mark>Maintenance</mark>** 

#### **9. Maintenance** 

###### **9.1 Regular Maintenance** 

Scheduled maintenance intervals are detailed in the table below. 

###### **Mill Maintenance Schedule** 

|**Frequency**|**Completed**|**Item**|
|---|---|---|
|||Check coolant level (PCNC 1100: 7-gallon capacity, PCNC 770: 5-gallon capacity)|
|||Check oiler level and top off as needed (Auto Oiler capacity 2.1 quarts / Manual Oiler<br>0.25 quart)|
|**Daily**||Retract and release manual oiler plunger each time mill is powered on and after every<br>four hours of operation|
|||Clean chips from ways, carriage, and bellows’ covers|
|||Sprayexposed, non-painted metal surfaces with WD-40<sup>®</sup>or similar toprevent rust|
|||Check drawbar for wear;grease and adjust if needed|
|||Clean chipbasket on coolant tank|
|**Weekly**||Check airgauge/regulator forproper PSI(90 PSI minimum)|
|||Use mild cleaner to clean all exterior surfaces(no solvents)|
|||Remove coolant tank pump. Clean out sediment buildup in tank; reinstall|
|**Monthly**||Inspect electrical cabinet vent(s) for dust build up; if necessary wipe vents with clean<br>cloth. If dust accumulation is excessive, use compressed air to remove|
|||Pull back way covers and inspect ways and ball screw for proper lubrication (on<br>all axes)|
|||Inspect spindle belt for nicks, fraying, or other noticeable signs of wear|
|||Inspect way covers as needed to ensure proper operation; replace as needed|
|**Every Six**<br>**Months**||Inspect oil system for blockages; clean/replace as needed|
|||Check lubrication hoses for signs of wear or cracking; replace as needed|
|||Check X-axis flex conduit for signs of wear or cracking; replace as needed|
|**Every 12**||Check limit switches for proper function; replace as needed|
|**Months**||Check door switches for proper function; replace as needed|



UM10349_PCNC1100_Manual_0520A 

Chapter 9 

177 

**<mark>Maintenance</mark>** 

###### **9.1.1 Rust Prevention** 

Exposed iron and steel surfaces will rust if proper care is not taken to protect them. The following recommendations will slow or reduce the onset of surface rust. 

- If possible, install the PCNC mill in a temperature- and humidity-controlled environment. 

- Always use a flood coolant recommended for machining; never use water or a coolant that does not contain rust inhibitors. When using a water-based coolant, always mix the coolant concentrate to the dilution ratio recommended by the coolant manufacturer. 

- If the mill is not used for more than 72 hours, apply a light mist of water repellent oil such as WD-40 to the exposed bare metal surfaces. 

- Trapped areas are susceptible to rust. Apply way oil or machine oil directly to the table surface under the trapped area when you mount a vise or fixture on the mill. 

**_NOTE:_** _Light surface rust on the table can be removed with a machinist’s stone._ 

###### **9.1.2 Way Covers** 

Way covers serve an important function – they keep chips and abrasive debris from damaging the slideways. Clean and inspect the way covers per maintenance schedule. 

###### **9.1.3 Flood Coolant System** 

Regular maintenance of the flood coolant system will prolong the service life of the coolant pump. 

- Collect tramp oil with an absorbent pillow or a mechanical oil skimmer. Replace pillows as needed. 

|**PN**|**Description**|
|---|---|
|31925|FloatingTrampOil Collection Pillow|
|35244|Oil Skimmer Kit|



- Coolant can scum if allowed to sit for a prolonged period. Replace coolant as needed. 

- Check the impeller for obstructions. 

- Clean coolant reservoir regularly. 

**_NOTE:_** _Check with local authorities on proper handling and disposal of new and used coolant._ 

Chapter 9 

UM10349_PCNC1100_Manual_0520A 

178 

**<mark>Maintenance</mark>** 

###### **9.1.4 Lubrication System** 

The lubrication system distributes oil to 15 points throughout the mill. This includes the 12 sliding surfaces (four each on the three axes) and three ball screw nuts – some of the most critical and expensive mechanical parts of the mill. Any dirt or foreign material suspended in the oil is going to be delivered directly to these parts and can dramatically shorten the operational service of the mill. 

- Use only new, high quality ISO VG 68 grade Machine Oil. 

**PN Description** 31386 Tormach WL-68 

- Alternative choices include Perkins Perlube WL-68, Tonna 68 (Shell), Vactra No. 2 (Mobil), Way-lube 68 (Sunoco), WayLube 68 (Texaco), Febis 68 (Esso) or equivalent oil. 

- Be sure to clean off the cover and surrounding area to remove debris before refilling the oil reservoir. The strainer at the top of the reservoir is not a filter. 

- Periodically inspect way surfaces and ball screws to confirm a proper oil film is present. Absence of an oil film can be an indicator of clog oil lines or fittings. 

The X, Y, and Z slideways have a thin layer of PTFE-filled acetyl plastic bonded to each sliding surface. The material is commonly known under the trade names of Turcite® or Rulon®. 

This is state of the art technology for oil lubricated slideways and superior to plain ground surfaces or hardened and chromed surfaces. No data is available on how long the material will last on the PCNC, but there have been no reports of appreciable wear, even on mills that are reported to have seen more than 5000 hours of operation. If you use the lubrication system and keep the protective bellows in good shape, the slideways are not normally maintenance items. 

A shot of lubrication should be given after every four hours of operation and after the mill has stood unused for 48 hours or longer. 

If the mill’s lubrication system becomes clogged, brass oil system fittings can be cleaned by soaking them overnight in a degreaser or solvent like WD-40. Replace clogged plastic oil line tubing. 

###### **9.1.4.1 Manual Pump Specifics** 

- The manual pump is spring loaded. Retract and release the plunger and the spring force creates light hydraulic pressure to push oil through the lines. You can get the oil out quicker by pushing the plunger a bit, but too much force can pop off oil lines. A shot of lubrication should be given after every four hours of operation and each time the mill is powered on. 

- You will have a more uniform distribution of oil if the mill is moving when the hydraulic pressure is applied. 

- The manual pump draws oil from the reservoir on the pull stroke and delivers it to the mill on the push stroke. If at some point the oil pump seems much easier on the push stroke then make certain that you do not have a broken oil line. 

UM10349_PCNC1100_Manual_0520A 

Chapter 9 

179 

### **<mark>Maintenance</mark>** 

- Extreme axis positions can expose the oil distribution channels that are cut into the way support saddle surfaces. If the pump is used in those positions, the hydraulic force of the oil will not apply it throughout the mill as intended. Instead, the oil will simply squirt out at the point where the oil channel is exposed. 

- After a long period of inactivity (or in cold conditions), the oil system may become clogged. For more information, refer to Tormach service bulletin _Flushing the Lubrication System_ . 

###### **9.1.5 Drawbar and TTS Collet** 

The drawbar, drawbar thrust washer and TTS collet are wear items and should be replaced regularly. Proper lubrication and maintenance of the drawbar and TTS collet will maximize tool holding force and prolong the service life of these components. 

- Clean tool holder shanks as needed with a degreaser 

- Keep the inside of the collet clean and dry. Collets must be cleaned of preservative shipping oil when first received 

- Lubricate outside of collet and inside of spindle taper with Anti-seize Grease (PN 31273). Use sparingly to avoid risk of the lubricant migrating to the inside of the collet. Only the first inch of the spindle taper needs to be lubricated; remove excess lubricant with a degreaser 

|**PN**|**Description**|
|---|---|
|31273|Anti-seize Grease|



- Lubricate the threaded section of the drawbar, the thrust shoulder of the drawbar, and the thrust washer with Anti-seize Grease (PN 31273) 

- Do not overtighten the drawbar. The recommended drawbar torque is 30 ft-lbs. Exceeding 40 ft-lbs of torque will reduce the operational service of the collet and drawbar 

- Visually inspect the drawbar, thrust washer, and collet for signs of wear such as damaged or galled threads and replace as needed. It is recommended that the drawbar, thrust washer, and collet be replaced as a set 

###### **9.2 Spindle Belt** 

Inspect the spindle belt as indicated in the maintenance schedule. Replace if necessary. 

|**PN**|**Description**|
|---|---|
|30389|PCNC 1100 Replacement Spindle Belt|
|31435|PCNC 770 Replacement Spindle Belt|



Chapter 9 

UM10349_PCNC1100_Manual_0520A 

180 

**<mark>Maintenance</mark>** 

###### **9.3 Advanced Maintenance** 

###### **9.3.1 Overview** 

Each PCNC is tuned at the factory to meet or exceed certain precision metrics. These metrics are indicated on the _Certificate of Inspection_ that is included with each mill, along with the actual values measured for each metric as part of Tormach’s Quality Assurance program. The following advanced maintenance procedures may become necessary over the ownership lifetime to maintain the original factory precision: 

- Gib adjustment 

- Angular contact bearing preload adjustment 

- Geometry adjustment (tram) 

These adjustments are generally used to address component wear-in over time, but may also be needed to correct misalignment resulting from misuse, a hard crash of the system, or when some components are removed or replaced due to damage. The frequency of these procedures depends on both how the mill is used and how often. 

The adjustments in this section should not be considered lightly as a wrong adjustment can adversely affect mill precision. Before making any of the adjustments in this section ask: 

- Why am I making this adjustment? 

- How will I measure the effect of this adjustment? 

- What unintended consequences may result from this adjustment? 

If you do decide to make an adjustment, do not assume where the error is from. The error could be attributed to a specific problem, or from the combined effect of several problems. Mistakenly making the wrong adjustment can make matters worse. As a practical example, if the Z-axis gib is too loose, it will cause the spindle head to tilt slightly downwards, toward the column. It would be fairly easy to incorrectly assume that the issue is with the column and base connection (often referred to as tram), and make an adjustment by inserting shims between the column and base. Instead of correcting the real issue, this adjustment causes the column to slant back to correct for the head leaning down. Now, the mill is running in a slight parallelogram in addition to a loose head. 

###### **9.3.2 Definitions** 

The following definitions are important to the advanced maintenance discussion. 

Lost motion: the difference between commanded motion and observed motion. This is sometimes referred to as apparent backlash. There are a number of components of lost motion, including conventional backlash, bearing compressibility, sliding friction, and thermal expansion. 

UM10349_PCNC1100_Manual_0520A 

Chapter 9 

181 

### **<mark>Maintenance</mark>** 

Backlash: the major component of lost motion in a machine tool axis. It results from the clearance between moving mechanisms. This is sometimes referred to as play. There are two sources of conventional backlash that can be adjusted on the PCNC: 

- Space between gib and way needed to support an oil film. This is tuned by tightening the gib. 

- The space between the ball bearings and races in the angular contact bearing pair that supports the ball screw. This is tuned by increasing the angular contact bearing pair preload. 

###### **9.3.2.1 How to Measure Lost Motion** 

Correctly measuring lost motion is critical to successfully undertaking any of advanced maintenance procedures detailed in the following sections. Mill setup and tuning is done under no-load conditions. The precision measurements recorded in the Tormach _Certificate of Inspection_ are taken under no-load conditions. The accuracy of a machined feature is not an indicator of machine precision. Tool flex, workpiece flex, fixture flex, thermal expansion, and other factors contribute to the overall machined-part accuracy. 

The following tools are essential: 

- Dial indicator 

- Dial test indicator 

- Magnetic dial stand 

The following method describes the proper procedure to measure X-axis backlash. An analogous procedure is used to measure Y- and Z-axis backlash. 

1. Mount a dial indicator to the mill table along the X-axis to the left of the spindle, with the tip pointing at the spindle. 

**_NOTE:_** _If your indicator only reads in increments of .001”, then the best you can hope for a reading is +/- .0005”. For best results, use an indicator that has increments less than .001”._ 

2. Jog the Y- and Z-axis to position the spindle head so the indictor tip contacts the outer diameter of the spindle cartridge (see **Figure 9.1** ). 

3. Carefully jog the X-axis in the positive direction until the indictor contacts the spindle. After initial contact, continue to jog the X-axis in the positive direction so that the dial makes at least one complete revolution; stop when dial reads 0. 

4. Zero the _X DRO_ field in PathPilot<sup>®</sup> . 



**Figure 9.1** 

Chapter 9 

UM10349_PCNC1100_Manual_0520A 

182 

**<mark>Maintenance</mark>** 

5. In MDI field, program a positive X move of .01” at a feed rate of 5 IPM: G01 X.01 F5. The spindle head moves slightly in +X direction. When finished, indictor should read .010”. 

6. Program an X move back to 0: G01 X0 F5. The spindle head moves slightly in the -X direction. The X DRO should say 0; however, the dial indicator should read a number very close to 0. This value is the measured lost motion. 

###### **9.3.3 Gib Adjustment** 

###### **9.3.3.1 Overview** 

PCNC mills use dovetail-gibbed ways to guide the X-, Y-, and Z-axis motion. 

Over time, the dovetail ways and gibs wear from sliding friction and it may be necessary to tighten the gib to reduce axis backlash. To compensate for wear, the design of a dovetail-gibbed way allows for the position of the gib to be adjusted to maintain an appropriate sliding clearance. 

A properly adjusted gib minimizes lost motion by balancing conventional backlash and sliding friction. A gib that is too loose results in excessive conventional backlash; a gib that is too tight cannot adequately support an oil film resulting in excessive sliding friction. 

The position of the tapered gib plate is controlled by two screws on either end of the gib that capture the position of the gib with respect to the saddle. These screws can be adjusted (as a pair) to tune the tightness and sliding of the dovetail friction way for each axis. **Figure 9.2** shows the Y-axis gib mechanical detail; the X- and Z-axis have similar detail. 



<!-- Start of picture text -->
Gib for X slide<br>Counterclockwise on<br>Clockwise on screw  screw loosens slide<br>tightens slide<br>Thick end of gib Tapered gib<br><!-- End of picture text -->

**Figure 9.2** 

UM10349_PCNC1100_Manual_0520A 

Chapter 9 

183 

### **<mark>Maintenance</mark>** 

###### **9.3.3.2 Adjustment Procedure** 

The gib tightening adjustment procedure for each linear axis is detailed in the table below. 

|**Gib Plate**|**Tighten**<sup>**1**</sup>|**Notes**|
|---|---|---|
|X-axis<br>(PCNC 1100)|Left screw clockwise/right screw counterclockwise|No cover removal required|
|X-axis<br>(PCNC 770)|Left screw counterclockwise/right screw clockwise|No cover removal required|
|Y-axis|Front screw clockwise/rear screw counterclockwise|Remove front and rear way covers to<br>access gib screws|
|Z-axis|Upper screw clockwise/lower screw counterclockwise|Support spindle head with wooden<br>block on table|



1To loosen, reverse rotation direction indicated in table. 

**_NOTE:_** _It is difficult to assess the correct clearance for the gib, as a very small adjustment can create a dramatic change in sliding fiction._ 

The recommended method for gib adjustment is to measure axis lost motion while incrementally tightening the gibs to arrive at the correct setting. The following procedure describes this method for the Z-axis. A similar procure can be used to adjust the X-axis and Y-axis gibs; however, it should be noted that the X- and Y-axis gib adjustments cannot be considered in isolation. Tightening or loosening a gib on either axis also has an effect on the opposing axis. 

1. Loosen the upper gib screw eight rotations and tighten the lower gib screw eight rotations. This ensures that the gib clearance is quite loose. 

2. Use a dial indicator to measure lost motion in the Z-axis (refer to _How to Measure Lost Axis Motion_ earlier in this chapter). With a very loose gib, the majority of the measured lost motion is attributable to the backlash in the angular contact bearing pair. On a new mill, this value measured should be less than 0.0015” on the Z-axis and less than .0013” on X- and Y-axis. 

3. Tighten the gib by one turn by loosening the lower screw first, then tightening the upper screw. Measure the backlash again. 

4. Repeat this procedure until the measured backlash begins to increase. At this point, the gib setting is slightly too tight. 

Chapter 9 

UM10349_PCNC1100_Manual_0520A 

184 

### **<mark>Maintenance</mark>** 

5. Back the adjustment off to the point just before you saw the increased backlash. That is the ideal setting for the axis (see **Figure 9.3** ). 

**_NOTE:_** _After any gib adjustment, ensure that both adjustment screws are tight or the gib may move out of adjustment._ 



<!-- Start of picture text -->
Backlash Versus Turns of Adjusting Screw<br>0.004<br>0.0035<br>0.003<br>0.0025<br>0.002<br>0.0015<br>0.001<br>0.0005<br>0<br>0    0.5         1 1.5      2         2.5   3      3.5          4   4.5<br>Number of Turns of Adjusting Screw<br>(0 represents a loose gib, 5 represents a tight gib)<br>Backlash (in)<br><!-- End of picture text -->

**Figure 9.3** 

###### **9.3.4 Angular Contact Bearing Preload Adjustment** 

- **9.3.4.1 Overview** 

Each axis utilizes a double-nut, pre-loaded ball screw. The pre-load in the ball nut is set at the factory by placing a precision ground spacer between the two ball nuts. Lost motion attributable to the ball screw assembly is less than 0.0004”. Ball nut preload is not operator-adjustable. 

The ball screw mount bearings are located near the driven (motor) end of each ball screw. These are a pre-loaded angular contact bearing pair and are operator-adjustable. Under typical use, these bearings should be adjusted so that observable lost motion is between 0.0005” to 0.0013”. 

**Figure 9.4** and **Figure 9.5** show a cross section of a typical ball screw shaft mount. The ball screw shaft is in the center and the crosshatched section in **Figure 9.5** is the axis motor mount that houses the bearings. There are two angular contact ball bearings, forming a pre-loaded pair. The ball screw _Cover Plate_ holds the two outer races together, along with the _Spacer_ that is between them. 

The inner races are held between the _Sleeve_ (left side) and the shoulder cut into the ball screw shaft (right side). The _Sleeve_ is held against the left inner bearing race by the _Adjustment Nut_ and a _Lock Nut_ . When the _Adjustment Nut_ is screwed tighter toward the bearing pair, the preload increases. 

Over time, it may become necessary to adjust the ball screw bearing preload to account for bearing wear. The bearing preload will also need to be adjusted if a bearing replacement becomes necessary. 

Improper ball screw bearing preload will result in either excessive backlash in the mill if it is too loose, or rapid wear and excessive friction if it is too tight. It should be noted that if your ball screw, ball nut, or angular contact bearings are worn, or if your gibs are adjusted too tight, you will not achieve appropriate lost motion values. 

UM10349_PCNC1100_Manual_0520A 

Chapter 9 

185 

**<mark>Maintenance</mark>** 



<!-- Start of picture text -->
Bearing Pair<br>Bearing Adjustment Nuts Ball Screw<br>Motor<br>Figure 9.4<br>Spacer<br>Bearing Outer Race<br>Cover Plate<br>Sleeve<br>Adjustment Nut<br>Lock Nut<br><!-- End of picture text -->



<!-- Start of picture text -->
Figure 9.5<br><!-- End of picture text -->

Chapter 9 

UM10349_PCNC1100_Manual_0520A 

186 

**<mark>Maintenance</mark>** 

**Figure 9.6** shows how the force of preload is transmitted through the bearings, from the inner race to the outer race. In a preload pair, this force is then transmitted back to the inner race by an opposed bearing. It should be apparent that the correct orientation of the angular contact bearing is critical to the operation. 

###### **9.3.4.2 Adjustment Procedure** 

To adjust the angular contact bearing pair preload, the following kit is required (see **Figure 9.7** ): 

|**PN**|**Description**|
|---|---|
|35355|AC BearingService Tool Kit|





**Figure 9.6** 

There are two nuts: the adjustment nut and the lock nut. The nut nearer the bearing housing is the adjustment nut, and the one nearer the axis motor is the lock nut (see **Figure 9.5** ). 

**_NOTE:_** _When working on the Z-axis, remove any tooling from the spindle and support the head by resting the spindle nose on a block of wood._ 

1. Loosen the lock nut and back it off about two turns. 

2. Hold the ball screw to prevent it from rotating with a pair of pliers on the coupling and tighten the adjustment nut until there is slightly more backlash than you ultimately want to achieve. Tightening the lock nut will slightly increase the bearing preload. 



**Figure 9.7** 

###### **9.3.4.3 Determining Proper Angular Contact Bearing Preload** 

To properly estimate the torque needed to overcome angular contact bearing friction, the bearings must be isolated from the stepper motor detent torque. Use the following procedure: 

1. For adjusting the X-axis, position the table near the right hand end of its travel (i.e., X near to zero). This ensures that the bearing is near to the ball nut to minimize bending of the screw during tests. 

UM10349_PCNC1100_Manual_0520A 

Chapter 9 

187 

### **<mark>Maintenance</mark>** 



**Figure 9.8** 



**Figure 9.9** 

2. Remove X-axis motor mount cover plate (see **Figure 9.8** ). 

3. Loosen two screws clamping the coupling between the stepper motor shaft and ball screw end. 

4. Remove four cap screws holding the axis motor to the motor mount and remove axis motor. Take care not to put any strain on the motor wires. 

5. Insert a 1/2” diameter rod (included in AC Bearing Service Tool Kit, PN 35355) or drill blank into the coupling. This will effectively extend the ball screw shaft outside of the motor mount. 

6. Clamp a handwheel or vise grip on the end of the rod; this allows sensitive feel for the torque caused by the preload on the bearings. Rotation should be smooth with a small perceptible drag; this corresponds to a medium preload of about 150 pounds. If the rotation feels tight, you have too much preload and will dramatically shorten the life of the bearings. If the rotation is free, you have little or no preload and backlash will be excessive. This test should be done with the lock nut tight. 

7. Using kit’s spanner wrenches as shown **Figure 9.9** , adjust preload (refer to _Adjustment Procedure_ section earlier in this chapter). 

8. Re-mount box and motor; ensure that coupling is symmetrically fitted to the motor shaft and the screw end and is fully tightened (see **Figure 9.9)** . 

###### **9.3.5 Geometry Adjustment of Precision Mating Surfaces** 

All precision mating surfaces are pinned together with tapered dowels during assembly at the factory. The pinned connection ensures that factory alignment is maintained in the event of a tool crash. Each dowel pin has a small metric threaded hole in the center that can be used to extract the dowel should it be required for disassembly. 

Under typical usage, no adjustment of pinned connections should be necessary. In the event of a hard crash, shims can be used to make minor alignment adjustments between pinned components. Small adjustments (less than .010”) will generally not require a full disassembly of the pinned connection. In these cases, the alignment dowels can be left in place, and the shims can be inserted into a small opening created by loosening the bolted connections. 

Chapter 9 

UM10349_PCNC1100_Manual_0520A 

188 

**<mark>Maintenance</mark>** 

###### **9.4 Spindle Bearing Adjustment** 

###### **PCNC 1100 only** 

When correctly adjusted for preload, sustained high spindle speed will bring the spindle bearings to about 155°F (68°C). This is a normal condition. Higher preload in the spindle bearings will result in even higher temperatures and excessive wear. 

**_NOTE:_** _For information on rebuilding PCNC 1100 spindle cartridges, refer to Tormach service bulletin PCNC 1100 Spindle Rebuild._ 

###### **PCNC 770 only** 

During operation, sustained high spindle speed will bring the spindle bearings to about 155°F (68°C). This is a normal condition. Spindle bearing preload is set at the factory and is not operator-adjustable 

**_IMPORTANT!_** _Do not attempt to adjust spindle bearing preload on PCNC 770 spindles. Failure to do so will adversely impact spindle balance._ 

###### **9.5 Spindle Calibration** 

To improve spindle speed accuracy, calibrate the speed control signal. This procedure is not necessary for mill operation. 

This procedure requires access to the electrical cabinet while the mill is powered on. 

**_CAUTION! Electric Shock Risk:_** _Points within the electrical cabinet contain high voltage. Do not make contact with any part of electrical cabinet unless specifically instructed to do so. Failure to do so could result in serious injury._ 

1. In the PathPilot interface, toggle the spindle belt position by clicking _Spindle Range_ until the LED light is illuminated next to LO. 

**_IMPORTANT!_** _Ensure the spindle belt is in the low position. A mismatch between the spindle range button in PathPilot and the actual spindle belt position will result in the commanded speed being different from the indicated RPMs._ 

2. Set the spindle speed to 500 RPM. Depending on your workflow, do one of the following: 

   - Type `S500` in the MDI line and press _Enter_ on the keyboard 

   - Type `500` into the _S_ DRO and press _Enter_ on the keyboard. 

UM10349_PCNC1100_Manual_0520A 

Chapter 9 

189 

### **<mark>Maintenance</mark>** 

###### **PCNC 1100 Frequency Range** 



**Figure 9.10** 

###### **PCNC 770 Frequency Range** 



**Figure 9.11** 

**_WARNING! Moving Parts Hazard:_** _Keep hands, feet, hair, and clothing away from moving parts. Failure to do so could result in serious injury or death._ 

3. Ensure there are no tools in the spindle; start the spindle. 

4. Inspect the value displayed on the front panel of the VFD; the recommended range is detailed in the following table: 

|PCNC 1100|34-36 Hz(see**Figure 9.10**)|
|---|---|
|PCNC 770|17.5-18.5 Hz(see**Figure 9.11**)|



5. If the value is outside of the recommended range, use a small, flat-bladed screwdriver to adjust the Trim Potentiometer Screw on the Machine Control Board (see **Figure 9.12** ) until the value on the front panel of the VFD displays within range. 

**_NOTE:_** _If better accuracy is needed, use a tachometer to measure actual spindle speed._ 

###### **Machine Control Board** 



<!-- Start of picture text -->
Trim<br>Potentiometer<br>Screw<br><!-- End of picture text -->

**Figure 9.12** 

Chapter 9 

UM10349_PCNC1100_Manual_0520A 

190 

**<mark>Maintenance</mark>** 

###### **9.6 Mill Transportation** 

Follow these steps when preparing mill for transport to a new location: 

1. Place a solid block of wood on the table underneath the spindle and lower the Z-axis so that the wood is slightly compressed. 

2. All bare metal surfaces should be oiled before moving the mill to protect against corrosion. 

3. If required, the Y-axis motor can be removed by loosening the motor coupling and removing the four motor mounting screws. Likewise, the Z-axis motor can also be removed to reduce the overall height of the mill. 

**_IMPORTANT!_** _Take care to secure motors after removal from mill so wiring is not damaged during transport._ 

4. Remove the PCNC mill from the stand and secure to a shipping pallet for vehicle transport. 

**_IMPORTANT!_** _PCNC mill must be removed from the Tormach stand (if equipped) for transport. The stand is not designed to support the weight of the mill during transport._ 

###### **PCNC 1100 only** 

Warranty is void if the mill is disassembled. Tormach recognizes that there are situations where operators need to disassemble their mill and has made provisions in the design of the mill to facilitate this. Nevertheless, Tormach cannot be held responsible for alignment, precision and operating functions after the mill has been disassembled. Test your mill before disassembling it. 

The major sub-assemblies of spindle head, column and base are bolted and dowelled together so the mill can be separated into smaller components to meet very challenging transport problems. Note, however, that this entails disconnecting wiring and the lubrication lines. We recommend taking photographs from all angles, including detailed photos of any wires or oil lines that will be taken apart. Dowel pins must be removed before the bolts on disassembly. Dowel pins must be installed before the bolts on re-assembly. 

Tormach strongly recommends that all precision sliding and rotating joints remain intact during disassembly. This means that you should not remove ball screws, bearings, or separate sliding joints. For example, in reference to the _Upper Mill Assembly_ (exploded view), located in chapter 11, _Diagrams and Parts Lists_ , you should not separate item 82 (Z-axis saddle) from item 75 (machine column). Instead you should separate item 19 (head casting) from item 82 (Z-axis saddle). 

Any additional, more detailed advice should be sought from Tormach Technical Support. 

###### **PCNC 770 only** 

For information on mill disassembly, refer to documentation that ships with Moving Kit (PN 31333). 

UM10349_PCNC1100_Manual_0520A 

Chapter 9 

191 

**<mark>Troubleshooting</mark>** 

#### **10.  Troubleshooting** 

###### **10.1 Troubleshooting Basics** 

The PCNC 1100, like many modern machines, is an integration of mechanical and electrical components, a controller, and an operating system. Taken as a whole, the PCNC is a sophisticated mill; however, the mill is comprised of several subsystems, each of which is much easier to understand than the mill as a whole. Troubleshooting involves five key principles: 

|1|Divide and conquer|Work on oneproblem at a time; focus on related issues only|
|---|---|---|
|2|Know your mill|Be familiar with how mill functions under normal circumstances|
|3|Environmental changes|Determine if any changes occurred in mill environment including:<br>•<br>The mill was moved<br>•<br>A fuse blew or breaker tripped causing electronics to malfunction<br>•<br>Water/moisture entered machine area<br>•<br>Major temperature change in unheated facility<br>•<br>Unauthorized mill use occurred|
|4|Work smart|Draft a list of tests to perform by level of difficulty;try simplest, most<br>likelytests first to determine causes ofproblem; record results|
|5|One step at a time|Take time to complete one test before starting another, thereby not making<br>the problem worse by conducting random troubleshooting.|



This chapter builds on these key principles by providing a description of each of the subsystems on the PCNC mill. This will serve to help the operator understand how the mill should work and provide an overview of the components that are involved in the subsystem. We will also list some guidelines for equipment and procedures used in troubleshooting. 

As in most electromechanical machines, it is frequently easier to identify problems in mechanical systems than in electrical and controller systems. With this in mind, most of the details in the troubleshooting section will address non-mechanical areas. 

See the flowchart in **Figure 10.1** which outlines the recommended order to use this chapter. 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

192 

### **<mark>Troubleshooting</mark>** 



<!-- Start of picture text -->
Tips and Tools for<br>Troubleshooting<br>Frequently Found Problems<br>Find Appropriate Subsystem<br>Read Subsystem Overview<br>Yes<br>Would an electrical  Proceed to details section<br>schematic prove useful? in the relevant sub-section<br>No<br>Apply your knowledge and<br>try to resolve problem<br>Was problem resolved?<br>No<br>Proceed to Problem  Yes<br>Resolution Checklist in<br>the relevant sub-section<br>Yes<br>Was problem resolved? Congratulations, job well done!<br>No<br>Call Tormach Technical Support<br><!-- End of picture text -->



<!-- Start of picture text -->
Figure 10.1<br><!-- End of picture text -->

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

193 

### **<mark>Troubleshooting</mark>** 

###### **10.2 Tips and Tools for Troubleshooting (equipment and procedures)** 

###### **10.2.1 Safety** 

During troubleshooting, the operator is exposed to more hazards than during normal operation: electrical tests may have to be done on live circuits; guards may have to be removed; a safety switch may have to be overridden in order to make an observation. Take things slow and be extra cautious. 

**_IMPORTANT!_** _For complete safety information, refer to the Safety Overview starting on page 2._ 

###### **10.2.2 Tips on Controller Diagnostics** 

The PathPilot<sup>®</sup> operating system provides a status screen that is useful for troubleshooting. If calling Tormach Technical Support, make sure you know what version of the operating system you are running and you have recorded information from the _Status_ screen and the error line. 

To email the log file to Tormach Technical Support, use the _File_ tab in the PathPilot interface to transfer the relevant information to a USB flash drive. 

1. Insert a USB flash drive into controller. 

2. In the PathPilot interface, click the _File_ tab (see **Figure 10.2** ). 

3. Click the _Home_ button in the upper right-hand corner (see **Figure 10.2** ). 

4. Locate and click the _logfile_ folder (see **Figure 10.2** ); inside this folder, locate and highlight the _pathpilotlog.txt_ file. 

5. Click the _Copy to USB_ button (see **Figure 10.2** ). 

6. After the file transfers, remove the USB flash drive from controller and email the file to Technical Support. 



**Figure 10.2** 

###### **10.2.3 Troubleshooting Tools** 

The following are some basic tools to have on hand for troubleshooting: 

- Good lighting such as a trouble light, headlamp or flashlight 

- A digital multimeter that can test for AC volts up to 300 V, DC volts up to 100V and resistance from 0 to 1M ohms (Ω) 

- Assorted screwdrivers: #2 and #3 Phillips, 1/8” and 3/16” flat blade 

- A wire stripper 

- Measuring tools like a tape measure, calipers or dial indicator with magnetic base 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

194 

**<mark>Troubleshooting</mark>** 

###### **10.2.4 Using Digital Multimeter for Electrical Tests** 

Almost all digital multimeters have the capability of measuring AC volts, DC volts, and resistance. These are the important functions used when troubleshooting a PCNC mill. Two test leads are required to measure these three functions. While many meters have more than two receptacles in which to plug leads, for our purposes the leads will always remain in the same two receptacles. One receptacle is almost universally labeled COM (for common) and the black lead is to be plugged into this receptacle. The other lead, most often red in color, is plugged into the receptacle labeled VΩ (for volts and ohms). 

###### **10.2.4.1 Measuring DC Voltage** 

Select the DC voltage scale on the meter. The scale may be labeled DCV or DC voltage has polarity, so if the common lead on the meter is not placed on the common signal, the voltage reads as a negative number. This does not harm the meter, but could be confusing in certain cases. We strive to define the common terminal when asking you to take a measurement. 

###### **10.2.4.2 Measuring AC Voltage** 

Select the AC voltage scale on the meter. The scale may be labeled ACV or There is no polarity to AC voltage so either lead can be placed on either location being measured. 

###### **10.2.4.3 Measuring Resistance** 

Ohms are the units in which resistance is measured. 

Select the resistance scale on the meter, most often labeled Ω. There is no polarity to resistance so either lead can be placed on either location we are having you measure; however, resistance measurements are always taken with power off. 

**_NOTE:_** _When making resistance measurements on motors and other devices with low resistance, always take a tare, or zero, reading on the meter before doing the resistance measurement on the motor or device. A tare reading is a reading using only the instrument. In the case of using a digital multimeter to measure resistance, touch the probes together to get the tare reading. Subtract the tare reading from the meter reading when measuring the resistance of the motor to get a true value._ 

###### **10.2.5 Contacting Technical Support** 

Always try to resolve any issue by first reviewing this chapter ( _Troubleshooting_ ). If this effort does not produce results – and you do need to contact Tormach Technical Support – please review the list below prior to calling. This will make the problem resolution process go smoother. 

1. Record mill serial number and have it available. 

2. We use a case management database system to track problems. Be sure to inform Technical Support staff if the problem was experienced before, as this allows us to review the history of the mill. If possible, please have your case management number ready. 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

195 

### **<mark>Troubleshooting</mark>** 

3. If the mill was purchased from someone else, please have that person’s name available. This way we can reference the specific machine in our case management database system and identify any problems the previous owner experienced. 

4. Analyze what might have changed since the mill last worked correctly and have that information available. 

5. Review the troubleshooting-related subsystem you are having problems with to gain a better understanding of that subsystem. 

6. Make sure you can repeat the problem(s). Do this several times and record the results to determine if you can repeat the problem(s) exactly. 

7. Record any pertinent information from the Status screen in the PathPilot interface and have it available. 

8. Try to define the problem as clearly and concisely as possible by writing it down. Often times by doing this you may help pinpoint the problem or find the solution to the problem yourself. 

9. Consider sending Technical Support an email first, as this may help define the problem better. Communicating via email has the added benefit of documenting the issue, thus eliminating the need to interpret any hastily transcribed notes made during the phone conversation later on. Even if you do need to speak with Technical Support, sending an email first can help the conversation go smoother. 

###### **Tormach Technical Support** 

|**Email contact** (preferred)|info@tormach.com|
|---|---|
|**Phone contact** (8:00 – 5:00 CST)|608-849-8381|



###### **10.3 Frequently Found Problems** 

There are several frequently found problems with all electromechanical machinery including the PCNC mills. It is not that the problems are frequent, but among the problems that have occurred, these are more frequent than others. 

The first four items in this list fall into the category of machinery in general, while the last item is specific to PCNC mills. These frequently found problems are important to keep in mind when troubleshooting. 

###### **10.3.1  Loose Wires** 

Try as we might, it seems that on occasion we find a poor wire connection. This can be the wire in a screw clamp terminal where the clamp is loose or a problem with a crimp spade or ring connector where the connector is tight in the screw clamp terminal, but the wire is loose in the crimp connector. 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

196 

**<mark>Troubleshooting</mark>** 

This is most frequently found during the initial startup of the mill. The vibration that occurs during travel tends to loosen connections. In this case, use the two finger pull test: grasp the wire close to its termination point between your thumb and index finger, and gently but firmly tug each wire. If the wire comes loose, re-terminate it before moving on to other wires. 

###### **10.3.2 Wire Hairs** 

Sometimes with stranded wire we find that a stray strand, or wire hair, from the stripped end of the wire may be sticking out and touching another wire or the mill frame; this can cause short circuits. 

###### **10.3.3 Poor Cable Connections** 

There are a number of cables on a PCNC mill. Some are flat cables connecting the control board to the axis drives (or other devices), and some cables connect to the controller. An improperly seated cable can allow some functions to work and cause others not to. We have found that the ribbon cables’ plug connections can become loose during the shipping process. 

###### **10.3.4 Sensors (Limit Switches)** 

Sensors are one of the most common sources of problems any mill. On the PCNC, the X and Y axes have one limit switch which actuates at the end of travel in each direction of both axes. The Z-axis on earlier mills has two limit switches: one for each upward and downward movement. Newer mills have one limit switch for upward movement. For more information, refer to _Axis Troubleshooting_ . 

###### **10.3.5 Unexplained Stop or Limit Switch Error While Running** 

Electrical noise can often cause strange and unrepeatable problems. Adding a ferrite noise suppressor to the DB-25 cable going from the controller to the mill eliminates many of these problems. In addition, adding a second DB-25 cable in series with the existing cable reduces electrical noise problems. We recommend using quality IEEE parallel cables. 

If extension cables are used frequently there are exposed metal parts on the connectors. If these metal parts contact other metal objects such as the mill frame, noise problems may occur. To fix the problem, tape off the exposed metal parts of the connectors to prevent contact. 

###### **10.4 Electrical Maintenance** 

###### **10.4.1 Electrical Service** 

Certain service and troubleshooting operations require access to the electrical cabinet while power is on. Only qualified electrical technicians should perform such operations. 

Many electrical problems are self-apparent. Tracing electrical problems can be done with a combination of the mill operating system, the LED indicators within the electrical cabinet, and the mill actions. 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

197 

**<mark>Troubleshooting</mark>** 

The operating system has colored rectangular indicators, referred as LEDs, on various screens to indicate output or functional status. The diagnostics screen also has indicators for X, Y and Z home/ limit switches and accessory input status. These are useful to determine if the input is operational. 

There are also various physical LED indicators within the electrical cabinet. Among these are: 

- DC power LED – Indicates voltage on the DC bus, power to axis drivers 

- X-, Y-, Z-drivers – Green indicates power to each individual drive, red indicates a fault 

- A-driver – Green indicates power to the drive, red indicates a fault 

- Control board LED1 – Indicates power to the control board 

- Control board D10 – Blinking indicates speed signal from operating system, while manual speed demand is not shown 

- Control board D15 – Brightness indicates speed signal to spindle driver 

###### **10.5 System Troubleshooting** 

Use the flowchart in **Figure 10.3** to determine where to start troubleshooting the electrical system. 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

198 

### **<mark>Troubleshooting</mark>** 



<!-- Start of picture text -->
Start<br>Yes<br>Is there any electrical No<br>power in the machine, Refer to  Power Distribution Subsystem .<br>coolant pump, and/or<br>controller?<br>Yes<br>Can you turn on  No<br>control power  Refer to  Control Power Subsystem .<br>(Machine LED is On)?<br>Yes<br>Can you turn on  No Refer to  Controller Communication<br>controller LED? Subsystem .<br>Yes<br>Are the X, Y, Z and A No<br>axes functioning Refer to  Axis Drive Subsystem .<br>properly?<br>Yes<br>No<br>Is the spindle drive Refer to  Spindle Drive Subsystem .<br>functioning properly?<br>Yes<br>End<br><!-- End of picture text -->

**Figure 10.3** 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

199 

### **<mark>Troubleshooting</mark>** 

###### **10.5.1 Power Distribution Subsystem** 

###### **10.5.1.1 Overview** 

Operator supplied electrical power is run through the _Main Disconnect_ on the mill (see **Figure 10.4** ). This switch controls all power to the mill and the controller. 

Below is the _Problem Resolution Checklist_ section. For more in depth explanation of this subsystem, refer to the details section that follows. 



<!-- Start of picture text -->
Main<br>Disconnect<br><!-- End of picture text -->

**Figure 10.4** 

###### **Contents of Power Distribution Subsystem Problem Resolution Checklist** 

|Table 1.1|GFI in customer supplyforpower for the controller and coolantpumptrips|
|---|---|
|Table 1.2|Controller will notpower on|
|Table 1.3a|Coolantpumpwill not run when coolant switch is in the onposition|
|Table 1.3b|Coolantpumpwill not run when coolant switch is in the autoposition|



###### **Power Distribution Subsystem Checklist** 

**Table 1.1** 

**GFI in customer supply for power for the controller and coolant pump trips** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|GFI circuit<br>defective|High|Test a device such as a drill or other<br>portable tool on the circuit.|If the tool works, the circuit is<br>likely OK.|
|Loose wires in<br>circuit|Medium|Power off the mill following the<br>power off/on procedure detailed in<br>chapter 3,_Installation_, and test for<br>loose wires.|Use the two finger tug test. Refer<br>to_Frequently Found Problems._|
|||Power off the mill following the<br>power off/on procedure detailed in<br>chapter 3, _Installation_.|You can also unplug the power<br>cord for the mill.|
|Defective control<br>board|Low|Remove wires 202 and 205 from<br>the control board. Tape each wire<br>individually so it cannot short out, and<br>power the mill on following power<br>off/on procedure detailed in chapter<br>3, _Installation_..|If the problem disappears, a control<br>board problem is indicated. You<br>can run the mill by controlling the<br>coolant pump in manual until your<br>are able to replace the control board.|



Chapter 10 

UM10349_PCNC1100_Manual_0520A 

200 

**<mark>Troubleshooting</mark>** 

###### **Power Distribution Subsystem Checklist** 

###### **Table 1.2** 

###### **Controller will not power on** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|Controller switch<br>(SW6) on_Operator_<br>_Panel_turned off|High|Check the switch|Turn it on if required|
|_Main Disconnect_in<br>off position|Medium|Check the switch|Turn it on if required|
|Breaker<br>turned<br>off in wall panel<br>supplying PCNC<br>or GFI (if used)<br>tripped|Medium|Check the breaker and GFI|Turn it on and/or reset if<br>required|
|Controller not<br>plugged into<br>outlet|Medium|Check the plug|Plug it in if required|
|Fuse in FU6<br>cabinet is blown|Low|Check fuse|Replace as needed|



###### **Power Distribution Subsystem Checklist Table 1.3a** 

###### **Coolant pump will not run when coolant switch is in the** **_On_ position** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|Coolant pump<br>not plugged into<br>outlet|High|Check the plug|Plug it in if required|
|Breaker turned<br>off in electrical<br>cabinet supplying<br>PCNC or GFI (if<br>used) tripped|Medium|Check the breaker and GFI|Turn it on and/or reset<br>if required|
|_Main Disconnect_<br>in off position|Low|Check the switch|Turn it on if required|
|Fuse in FU6<br>cabinet is blown|Low|Check fuse|Replace as needed|



UM10349_PCNC1100_Manual_0520A 

Chapter 10 

201 

**<mark>Troubleshooting</mark>** 

###### **Power Distribution Subsystem Checklist** 

###### **Table 1.3b** 

###### **Coolant pump will not run when coolant switch is in auto position Note: Review Table 1.3a first** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|DB-25 controller<br>cable not plugged<br>in|Medium|Re-seat DB-25 controller cable|Likely<br>this<br>symptom<br>will<br>accompany<br>other<br>motion<br>symptoms such as no axis or<br>spindle control. If you can hear<br>the small relay on the main<br>control board clicking when<br>turning the coolant on and off<br>with the controller, then cables<br>are seated and working fine.|
|Fuse on control<br>board blown|Low|Check fuse F2 on the main control<br>board.|Remove existing fuse and check<br>continuity. Replace as needed.|
|Auto coolant<br>control relay on<br>main control<br>board has failed|Low|With auxiliary input power removed,<br>measure continuity from wire 202 to<br>205 while switch pump in auto.|If the relay on the main control<br>board is not good, then there<br>should be continuity from 202<br>to 205 when the pump is on.<br>**_NOTE:_**_This relay will fail_<br>_if too high of a current draw_<br>_passes through it. This is_<br>_common when electrical loads_<br>_much larger than the Tormach_<br>_coolant pump are plugged into_<br>_the coolant outlet._|



Chapter 10 

UM10349_PCNC1100_Manual_0520A 

202 

**<mark>Troubleshooting</mark>** 



<!-- Start of picture text -->
Power Distribution Subsystem<br><!-- End of picture text -->

**Figure 10.5** 



<!-- Start of picture text -->
Machine Cabinet Component Locations (Power Distribution)<br><!-- End of picture text -->

**Figure 10.6** 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

203 

### **<mark>Troubleshooting</mark>** 

###### **10.5.1.2 Details of Power Distribution Subsystem** 

The PCNC mill is powered by an operator provided nominal 230/1/60 (230 V single phase, 60 HZ) 20 amp, 3-wire electrical circuit in North America and a 220/1/50 20 amp, 3-wire electrical circuit in most other parts of the world. Tormach allows the voltage range to be from 200 VAC to 250 VAC. The two current carrying conductors of this supply are connected to the _Main Disconnect_ , located on the right side of the electrical panel. When the _Main Disconnect_ is in the off position, no power is supplied to the mill. Find the relevant portion of the electrical schematic highlighted in **Figure 10.5** and **Figure 10.6** . For more information, view electrical schematic inside back cover. 

In addition to the main electrical supply to the mill, provisions are included so the operator can supply a second electrical circuit to the cabinet. The second circuit is used to provide power to the controller, monitor, and coolant pump. The power source for this circuit is 110/1/50, 115/1/60 or 220/1/50 single phase power with one leg of the two current carrying conductors grounded. Normally, a 115 VAC circuit would be supplied in North America. A third wire ground must also be provided. The ungrounded leg of this supply is connected to a third pole on the _Main Disconnect_ described above. Running the circuit in this manner allows the coolant pump outlet to be controlled either automatically by the mill controller or manually depending on the position of the coolant switch, SW5, on the _Operator Panel_ (see **Figure 10.7** ). The circuit also provides power to two outlets that are used for the controller and monitor. These outlets are controlled by SW6, labeled Controller, on the _Operator Panel_ . This allows turning off of the controller when mill power is still on. Turning the _Main Disconnect_ to the off position powers off the coolant and controller outlets. 

###### **Operator Panel** 



<!-- Start of picture text -->
Coolant Start<br>Controller<br>Machine<br>LED<br> E-stop<br><!-- End of picture text -->

**Figure 10.7** 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

204 

**<mark>Troubleshooting</mark>** 

###### **10.5.2 Control Power Subsystem** 

Control power enables running of the mill. When control power is off, some components in the cabinet are live but none of the motors and drives are powered on. Turn control power on when you desire to run the mill by pressing the green _Start_ button, and power off control power by pressing the red _E-stop_ when you are not running. The red _E-stop_ is a twist-lock device and must be released by turning it clockwise until it pops out. The _Machine LED_ illuminates when control power is on (see **Figure 10.7** ). 

###### **Control Power Subsystem Checklist Table 2.1** 

**Control power cannot be turned on** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|Stop button is in<br>the lock position|High|Twist the head of the button to<br>release|—|
|Breaker turned off<br>in electrical cabinet<br>supplying PCNC|Medium|Check the breaker|Turn it on if required|
|Disconnect switch<br>in off position|Low|Check the switch|Turn it on if required. Measure<br>for 230 VAC nominal between<br>wires L1 and L2 if required.|
|Fuse FU1 and/or<br>FU2 blown|Low|Measure for 230 VAC nominal<br>between wires L11 and L21.|Power off the mill following<br>power off/on procedure detailed<br>in chapter 3,_Installation_, before<br>checkingor replacingfuses.|
|Fuse 3 or 7 blown|Low|Measure for 115 VAC nominal<br>between wires 102 and 100.|Power off the mill following<br>power off/on procedure detailed<br>in chapter 3,_Installation_, before<br>checkingor replacingfuses.|
|Transformer XFM1<br>defective|Low|First ensure fuse 3 is not blown<br>then measure for 115 VAC nominal<br>between wires 102 and 100.|Power off the mill following<br>power off/on procedure detailed<br>in chapter 3,_Installation_, before<br>replacingtransformer.|
|Contactor C1 has<br>a defective coil|Low|Push the manual override button on<br>middle of contactor.|If the control power turns on then<br>the C1 contactor coil is defective.|
|Contactor C1<br>contacts are<br>defective|Low|Measure continuity across the<br>contacts.|If high resistance is found, the<br>contactor is defective.|



Find the relevant portion of the electrical schematic highlighted in **Figure 10.8** and **Figure 10.9** . For more detail, view electrical schematic inside back cover. 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

205 

**<mark>Troubleshooting</mark>** 



<!-- Start of picture text -->
Control Power Subsystem<br><!-- End of picture text -->

**Figure 10.8** 



<!-- Start of picture text -->
Machine Cabinet Component Locations (Control Power)<br><!-- End of picture text -->

**Figure 10.9** 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

206 

**<mark>Troubleshooting</mark>** 

###### **10.5.2.1 Details of Control Power Subsystem** 

The control power circuit is that circuit which is powered on when in a ready to run state, and which powers off when the red _E-stop_ is in the depressed position. The circuit does not power on until the red _E-stop_ is released and the green _Start_ button is momentarily depressed. When control power is off, the mill is in an _Off_ state, however some components in the electrical cabinet are still powered on including the main fuses FU1 and FU2, the control power transformer (XFM1), fuse FU3, and wires 102 and 103 on the red _E-stop_ and green _Start_ button. Additionally, the filter is powered by L11 and L21 and the filter passes power on wires L23 and L24 to contacts on the contactors C1 and C2. 



<!-- Start of picture text -->
Tormach<br>Machine<br>Control<br>Board<br>Jog Shuttle Control<br>Ribbon Cable<br>DB-25 Cable<br>Bulkhead Connector<br>Controller<br>in Bottom of Cabinet<br><!-- End of picture text -->

**Figure 10.10** 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

207 

**<mark>Troubleshooting</mark>** 

Should main power be lost to the mill when the control power circuit is on, the control power circuit turns off and stays off until power is restored and the green _Start_ button is pressed. 

This prevents the mill from restarting without operator action after any power outage, natural or man-made. Transformer XFM1 reduces the incoming voltage from a nominal 230 (or 220) VAC to a nominal 115 (or 110) VAC. 115 V control circuits are industry standard in North America (this allows the use of readily available push buttons, contactors, and other control circuit components). 

If your wall breaker consistently trips whenever you power on the spindle, you should verify that mill power is not coming through a ground fault interrupter (GFI, or RCCB in Europe). The filters in the spindle drive can allow minor current leakage to ground that, while considered safe, may also be sufficient to trip a normal GFI. 

###### **10.5.3 Controller Communication Subsystem** 

###### **10.5.3.1 Overview** 

PathPilot is the operating system for the PCNC mill. It allows for manual jogging of the X- ,Y- ,Z- , and A-axis, spindle speed, and the coolant pump through the PathPilot interface. It also allows the mill to run automatically with operator supplied programs. PathPilot communicates with the control board to provide mill control. The controller LED on the _Operator Panel_ must be illuminated before the controller can control the mill. 

###### **10.5.3.2 Details on Controller Communication Subsystem** 

The operating system allows the operator to jog or position the X-, Y-, Z-, and A-axis and to control the spindle speed and coolant pump operation by use of the keyboard, mouse, and the jog shuttle. The operating system also accepts G-code programs that automatically control the mill. 

The controller’s interface port communicates with the control board via a printer cable which has a DB-25 connector on each end. In order for the controller to control the mill, the PathPilot operating system must be running, the _Machine LED_ must be on, and communication must be established between the controller and the control board. Communication is established by clicking the _Reset_ button on the screen. This causes the _Reset_ button to stop blinking and also powers on the controller LED on the mill _Operator Panel_ . Once communication is established, the PathPilot controller can control mill operation (see **Figure 10.7** ). 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

208 

**<mark>Troubleshooting</mark>** 

###### **Controller Communications Subsystem Checklist Table 3.1** 

###### **Controller communication cannot be established (Controller LED cannot be turned on)** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|Control power is off|Medium|Power on control power following<br>power off/on procedure detailed in<br>chapter 3, _Installation_.|Refer to_Control Power Subsystem_<br>earlier in this chapter_._|
|Ribbon cable J4<br>between bulkhead<br>connector and the<br>control board is<br>not plugged in|Medium|Check the connections on both ends<br>and ensure they are firmly seated.|<br>The connection at the control<br>board has been known to<br>loosen up during shipping.|
|DB-25 cable is<br>not connected<br>properly between<br>the controller and<br>the mill|Medium|Check the cable connections. Check the<br>cable and connector (pins) for damage.|<br>Swap out old cable for new<br>cable, if possible.|
|Mill interface board<br>defective|Low|Try a new mill interface board.|—|
|Control board<br>defective|Low|Swap boards|Likelihood of defective board<br>is slim.|



UM10349_PCNC1100_Manual_0520A 

Chapter 10 

209 

**<mark>Troubleshooting</mark>** 

###### **10.5.4 Axes Drive Subsystem** 

###### **10.5.4.1 Overview of Axis Drive Subsystem** 

The axis motors (otherwise known as stepper motors) are used to move the X-, Y-, Z-, and A-axis. The motors are powered by electronic driver modules (also referred to as axis drivers) which receive control signals from the control board. The electronic driver modules get power from the DC bus board (see **Figure 10.11** ). Motion is limited in the extremes of travel by end of travel limit switches. 

||**Contents of Axis Drive Subsystem Problem Resolution Checklist**|
|---|---|
|Table 4.1|Axes will not move when commanded|
|Table 4.2|One axis will not move or moves in onlyone direction;other axes operateproperly|
|Table 4.3|Axis motor windingresistance|
|Table 4.4|DC buspower distribution|
|Table 4.5|Axis movement is extremelynoisy|
|Table 4.6|Cannot reference all axes or end of travel limits do not work(limit switchproblems)|
|Table 4.7|Testinglimit switchproblems|
|Table 4.8|Steps are lost on axis travel|



###### **Axes Drive Subsystem Checklist** 

**Table 4.1** 

###### **Axes will not move when commanded** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|Operating system<br>not commanding<br>the move or<br>controller problem|High|Jog the axis and observe the mill<br>coordinate display.|If the displayed position does<br>not change while jogging,<br>there is a operating system/<br>controller<br>problem.<br>Try<br>restarting the controller.|
|Control signals||Problem with DB-25 cable from<br>controller to mill.|Check the connections on|
|not reaching the<br>electronic driver<br>modules|Medium|Problem with cable J4 bottom of<br>machine cabinet to control board.<br>Problem with cable J6 from control<br>board to axis drives.|both ends and ensure they are<br>firmly seated, and check for<br>bent pins in the connectors.|
|A malfunction of<br>the DC bus|Low|Refer to_Details of the Axes Drive Subsystem_<br>later in this chapter.|—|



Chapter 10 

UM10349_PCNC1100_Manual_0520A 

210 

**<mark>Troubleshooting</mark>** 



<!-- Start of picture text -->
Control<br>Signal<br>X-axis Drive X-axis Command<br>Power<br>Tormach<br>M Machine Control<br>Board<br>DC Bus Board X Limit<br>Y-axis Drive Y-axis Command<br>Power<br>Control<br>Signal<br>M<br>Y Limit<br>Z-axis Drive Z-axis Command<br>Power<br>Control<br>Signal<br>M<br>Z Upper Limit<br>Z Lower Limit<br>Brake<br>A-axis Command<br>A-axis Drive<br>Power Control<br>Signal<br>M<br>DB-25 Cable<br>Controller<br><!-- End of picture text -->

**Figure 10.11** 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

211 

**<mark>Troubleshooting</mark>** 



**Figure 10.12** 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

212 

**<mark>Troubleshooting</mark>** 

###### **Axes Drive Subsystem Checklist Table 4.2** 

###### **One axis will not move or moves in only one direction; other axes operate properly** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|DB-25 cable not<br>fully plugged in<br>or pin bent on<br>connector|High|Investigate connections.|If not tightened down, DB-25<br>cables will come loose, also<br>look for any bent pins at the<br>connection point.|
|Loose wires or<br>ribbon cables|High|Power off the mill following power off/<br>on procedure detailed in chapter 3,<br>_Installation_, and check the ribbon cable<br>and the wires from the DC bus board.|After completion, power on<br>the mill following power off/on<br>procedure detailed in chapter<br>3,_Installation_, and check for<br>operation.|
|A loose axis<br>motor coupling|Medium|Jog the axis and listen to determine if<br>you can hear the motor run.|Remove the cover plate over<br>the coupling and observe if the<br>motor is turning but the screw<br>is not.|



(continued on next page...) 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

213 

### **<mark>Troubleshooting</mark>** 

###### **Axes Drive Subsystem Checklist** 

###### **Table 4.2 (...continued)** 

**One axis will not move or moves in only one direction; other axes operate properly** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|||Swap the ribbon cable connector for<br>the control signals, and the motor/DC<br>supply connector between a known<br>functioning drive (X-axis in**Figure**<br>**10.12**) and the malfunctioning drive<br>(Y-axis in**Figure 10.12**).<br>**_NOTE:_**_Do not swap any wires on a live_<br>_system. Power off the mill following power_<br>_off/on procedure detailed in chapter 3,_<br>_Installation._|Since there are at least three<br>identical<br>electronic<br>driver<br>modules in the axis drive<br>subsystem, swapping control<br>signals between modules is very<br>helpful during troubleshooting.<br>One must recognize that if<br>control signals are switched<br>from the electronic driver<br>modules on the non-functioning<br>axis to a module on a functioning<br>axis, the end of travel limit<br>switch on the non-functioning<br>axis will not work. Take care to<br>avoid reaching the end of travel<br>when moving an axis.|
|A defective<br>electronic driver<br>module|Medium|Jog the Y-axis in both directions.|If the X-axis moves properly,<br>the control signals are good<br>then it is likely the Y-axis driver<br>is defective.|
||||A defective Y-axis driver is<br>confirmed if the Y-axis does<br>not move or moves in only one<br>direction.|
|||Jog the X-axis in both directions.|If commanding the X-axis<br>moves the Y-axis, it’s likely there<br>was a poor connection in the<br>ribbon cable connector to the<br>axis driver module. Swap the<br>ribbon cables back and repeat<br>the test. Inspect the ribbon cable<br>connectors. Wiggling them may<br>be worthwhile to try. It is also<br>possible that there is a damaged<br>ribbon cable J4, DB-25 cable,<br>or mill interface board in the<br>controller.|



(continued on next page...) 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

214 

**<mark>Troubleshooting</mark>** 

###### **Axes Drive Subsystem Checklist** 

###### **Table 4.2 (...continued)** 

**One axis will not move or moves in only one direction; other axes operate properly** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|||Power off the mill following power off/<br>on procedure detailed in chapter 3,<br>_Installation_, and remove the motor leads<br>from the axis drive; inspect motor.|Unplug the power connector<br>from the board. Check<br>motor for signs of coolant<br>contamination.|
|A defective<br>motor or motor<br>connection|Low|Measure resistance of windings. See<br>**Table 4.3**.|When<br>making<br>resistance<br>measurements on motors and<br>other devices with low resistance,<br>always take a tare reading on<br>the meter before doing the<br>resistance measurement on the<br>motor or device. Refer to_Using_<br>_the Digital Multimeter for Electrical_<br>_Tests_earlier in this chapter.|
|||If the resistance is out of range, check<br>the wiring carefully. If the wiring is good<br>and the resistance readings are out of<br>range, the motor is defective.|Disconnect the motor leads from<br>the wiring and measure resistance<br>at the motor. Also check the wiring<br>(which is now disconnected) for<br>shorts wire-to-wire or wire-to-<br>ground and also for wire breaks.|
|A blown fuse on<br>the DC bus board|Low|Monitor DC voltage from the DC bus<br>board. See**Table 4.4.**|A blown fuse usually is the result<br>of a defective drive. If you replace<br>a fuse and it immediately blows,<br>suspect a defective axis drive or<br>wiringto the drive.|
|||Gibs too tight or too loose|Adjust<br>using<br>_Gib Adjustment_<br>procedure described in chapter<br>9,_Maintenance_. Too tight results<br>in too much friction in the ways.<br>Too loose can cause binding.|
|Mechanical<br>problem|Low|Oil not getting to ways and ball screw|Investigate oiling system for lack<br>of oil and/or plugged lines. Refer<br>to Service Bulletin SB0031.|
|||Oil residue from long-term storage|Repeatedly pump oil and slowly<br>jog axis.|
|||Debris on ball screw|Clean ball screw|
|Thermal trip on<br>a drive|Low|Look at the LEDs on the axis drivers. If<br>there is a red LED lit on the drive, then<br>it has tripped.|Cycle power to the mill, and<br>the trip should reset. If problem<br>persists, replace drive.|



(continued on next page...) 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

215 

### **<mark>Troubleshooting</mark>** 

###### **Axes Drive Subsystem Checklist Table 4.2 (...continued)** 

**One axis will not move or moves in only one direction; other axes operate properly** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|Electrical short<br>on a drive|Low|Look at the LEDs on the axis drivers. If<br>there is a red LED lit on the drive, then<br>it has tripped.|Cycle power to the mill, and the<br>trip should reset. If it persists,<br>then inspect the wiring for<br>shorts, test motor resistance<br>(see**Table 4.3**). If problem<br>persists, replace drive.|



###### **Axes Drive Subsystem Checklist Table 4.3 Axis Motor Winding Resistance** 

|**X-a**|**xis**|**Y-a**|**xis**|**Z-a**|**xis**|**A-a**|**xis**|**Resistance**<br>**Ω Above**<br>**Tare**|
|---|---|---|---|---|---|---|---|---|
|From<br>(black<br>probe)|To<br>(red<br>probe)|From<br>(black<br>probe)|To<br>(red<br>probe)|From<br>(black<br>probe)|To<br>(red<br>probe)|From<br>(black<br>probe)|To<br>(red<br>probe)||
|308|309<br>310|312|313<br>314|316|317<br>318|320|321<br>322|0.5-2.0 Ω<br>0.5-2.0 Ω<br>>1 M Ω|
|310|309|314|313|318|317|322|323<br>321|0.5-2,0 Ω<br>1 M Ω|
|**_NOTE:_**<br>_should     i_<br>_(this d_|_Resistanc_<br>_be about t  i_<br>_oes not ap_|_e across lea_<br>_he same. Di_<br>_ply to A-axi_|_ds on all_<br>_eviation m_<br>_s)._|_phases for X_<br>_i ay indicate_|_, Y and Z_<br>_i   a problem_|—|—|—|
|All wires<br>above|Ground<br>bar|All wires<br>above|Ground<br>bar|All wires<br>above|Ground<br>bar|All wires<br>above|Ground<br>bar|>1 M Ω|



Chapter 10 

UM10349_PCNC1100_Manual_0520A 

216 

**<mark>Troubleshooting</mark>** 

###### **Axes Drive Subsystem Checklist Table 4.4** 

###### **DC Bus Power Distribution** 

The DC bus board contains four fuses which are used to individually fuse power to the axis driver modules. A fifth fuse is provided on the supply boards for the Z-axis brake. Fuses are noted on the circuit board. Note that the control power circuit must be on ( _Machine LED_ is on). 

|**Fuse Number on DC**<br>**Bus Board**|**Function**|**Wire numbers to monitor**<br>**with common lead (0V)**<br>**listed first**|**Voltage when DC**<br>**bus is OK and when**<br>**fuse isgood**|
|---|---|---|---|
|F1 X|X-axis|303 302|55-75 VDC|
|F2 Y|Y-axis|305 304|55-75 VDC|
|F3 Z|Z-axis|307 306|55-75 VDC|
|F4 A|A-axis|325 324|55-75 VDC|
|F5 Brake|Brake for Z-axis|327 326|55-75 VDC|



###### **Axes Drive Subsystem Checklist Table 4.5** 

###### **Axis movement is extremely noisy or bumps** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|Loose wire<br>connection or<br>failed connector|High/Low|Power off the mill following power off/<br>on procedure in chapter 3,_Installation_,<br>and tighten all screw connections|Inspect green power<br>connector for signs<br>of overheating.|
|Defective axis<br>driver module|Medium|See**Table 4.2**|There have been cases of<br>a noisy axis relating to a<br>defective driver. This may be<br>temperature dependant.|
|Failing controller,<br>or controller not<br>suited for M3|Low|Contact Tormach Technical Support|A flaky controller will not<br>produce smooth step signals<br>for good axis motion.|
|Loose sheet metal|High|Feel for vibrating sheet metal|Often loose sheet metal is<br>mistakenly diagnosed as a noisy<br>axis motor. On some systems,<br>certain axis motor speeds can<br>cause excessive vibration in<br>the sheet metal stands. Identify<br>problem areas and treat with<br>butyl tape or silicone sealer.|



(continued on next page...) 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

217 

### **<mark>Troubleshooting</mark>** 

###### **Axes Drive Subsystem Checklist** 

###### **Table 4.5 (...continued) Axis movement is extremely noisy or bumps** 

|**Possible Cause**|**Probability **|**Action to Identify Cause of Problem **|**Discussion**|
|---|---|---|---|
|||Power off control power following<br>power off/on procedure in chapter 3,<br>_Installation_, and unplug the lower wire<br>connectors on all the axis drives (X, Y,<br>Z and A).|—|
|||With the electrical cabinet door open,<br>power on control power following<br>power off/on procedure detailed in<br>chapter 3, _Installation_.|Observe the green LED on<br>the DC bus board illuminate.|
|Defective<br>capacitor for DC|Low|While observing the green LED on the<br>DC bus board, press the red_E-stop._|If the LED extinguishes in two<br>seconds or less, the capacitor<br>is defective and must be<br>replaced. If the LED takes five<br>seconds or more to extinguish,<br>the capacitor is good.|
|bus board||If the results are not conclusive, power<br>off control power following power off/<br>on procedure in chapter 3,_Installation_,<br>and unplug the power connectors from<br>the axis drives if not already.|—|
|||Power on control power following<br>power off/on procedure detailed in<br>chapter 3,_Installation_, and measure DC<br>voltage on wires 300 (common) and<br>301 on DC bus board.|A DC voltage of a nominal<br>65 VDC (55-75) indicates the<br>capacitor is OK.|
|||Power off control power following<br>power off/on procedure in chapter<br>3,_Installation_, and plug the power<br>connectors back on the axis drives.|A DC voltage of a nominal<br>40 VDC (35-45) indicates the<br>capacitor is defective.|



Chapter 10 

UM10349_PCNC1100_Manual_0520A 

218 

**<mark>Troubleshooting</mark>** 

###### **Axes Drive Subsystem Checklist** 

###### **Table 4.6** 

|**Cannot refer**|**ence all axes**|**or end of travel limits do not work (**|**limit switch problems)**|
|---|---|---|---|
|**Possible Cause**|**Probability **|**Action to Identify Cause of Problem **|**Discussion**|
|Limit switch stuck<br>in the on state||||
|or<br>Limit switch<br>wire broken or<br>wire connection<br>defective|High|Consult the PathPilot_Status_screen to<br>see if a limit switch has actuated, even<br>though no axis is at the end of its travel.|See**Table 4.7**|
|Limit switch<br>contacts stuck in<br>the off state|Medium|Consult the PathPilot_Status_screen to<br>see if a limit switch is being reported as<br>not actuated even though the axis is at<br>the end of its travel.|See**Table 4.7**|
|Limit switch not<br>being contacted at<br>end of travel|Medium|Check to see if the limit switch is<br>loose or if the actuating cam is actually<br>contacting the switch.|If it looks like the switch is<br>being actuated properly but<br>the_Status_screen does not<br>report the switch as being<br>made, go to next step.|
|Control board<br>defective|Low|See**Table 4.7**|A defective control board will<br>report no change in the state<br>of the limit switch even though<br>the switch and wiring are<br>functioning properly.|



UM10349_PCNC1100_Manual_0520A 

Chapter 10 

219 

**<mark>Troubleshooting</mark>** 

|**A**<br>|**xes Drive Subsystem Checklis**<br>**Table 4.7**<br>**Testing limit switch problems**|**t**|
|---|---|---|
|**Diagnostic Screen Inputs**<br>**Status Reported**|**Test to Perform on Wiring**<br>**at the Control Board**|**Results and Conclusions**|
|X limit and home light is always<br>on even though the switch is not<br>actuated|Jumper J2-1 to J2-4 at the<br>control board.|If the light does not go out when the<br>terminals are jumped, the control<br>board is defective. If the light|
|Y limit and home light is always<br>on even though the switch is not<br>actuated|Jumper J2-2 to J2-4 at the<br>control board.|goes out when the terminals are<br>jumped, the wiring has a break or<br>the limit switch is defective. Power<br>off the mill following the power off/<br>on procedure detailed in chapter<br>3,<br>_Installation_,<br>and<br>disconnect<br>wires from the switch and tie the<br>two wires together; tape over to|
|Z limit and home light is always<br>on even though neither the up or<br>down limit switch is not actuated|Jumper J2-3 to J2-4 at the control<br>board.|prevent short circuits. Power on<br>the mill following power off/on<br>procedure detailed in chapter 3,<br>_Installation_. If the diagnostic light is<br>off, the wiring is OK and the switch<br>is defective. If the diagnostic light<br>is on, the wiring has a break or<br>defective connection.|
|X limit and home light is never on<br>even though the switch<br>is actuated|Remove wire J2-1 at the<br>control board.|If the light does not go on when<br>the wire is removed, the control<br>board is defective. If the light goes|
|Y limit and home light is never on<br>even though the switch<br>is actuated|Remove wire J2-2 at the<br>control board.|on when wire is removed, the<br>wiring has a short or the limit<br>switch is defective. Power off the|
|Z limit and home light is never on<br>even though either the up or down<br>limit switch is actuated|Remove wire J2-3 at the<br>control board.|mill following the power off/on<br>procedure detailed in chapter 3,<br>_Installation_, and disconnect wires<br>from the switch; tape the end<br>of each wire to prevent shorts.<br>Power on following power off/on<br>procedure detailed in chapter 3,<br>_Installation_. If the diagnostic light is<br>on, the wiring is OK and the switch<br>is defective. If the diagnostic light is<br>off,the wiringhas a short circuit.|



**_NOTE:_** _Often times a defective switch can be cleaned with compressed air and sprayed with WD-40® to fix a problem._ 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

220 

**<mark>Troubleshooting</mark>** 

**_NOTE:_** _If the stainless steel bed pan does not sit tight against the front edge of the mill bed, coolant and chips are allowed to converge on the X-limit switch. Using butyl tape or silicone sealer between the pan and bed will prevent this from occurring._ 

**Axes Drive Subsystem Checklist Table 4.8 — Steps are lost on axis travel NOTE: Consult Table 4.2 and Table 4.5 for more information on lost steps.** 

|**Possible Cause**|**Probability **|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|Improper use of tool<br>offset (G43), work<br>offset (G54-59), or<br>cutter compensation<br>(G41-42)|High|See_Motion Test_later in this chapter.|Common<br>cause<br>of<br>a<br>perceived loss of position or<br>lost steps is operator error.<br>Please refer to chapter 7,<br>_Programming_, for details on<br>using mill offsets in PathPilot.|
|Spindle tooling not<br>properly locked<br>down(Z-axis only)|High|Inspect to insure the cutter is not slipping<br>in the holder or that the tool holder is<br>notpullingout of the spindle collet.|—|
|Motor coupling loose<br>or cracked|Low|Inspect|You may find it useful to<br>run the axis with the cover<br>removed. A paint line from<br>shaft through coupling to<br>screw can be used to see if<br>there is any movement over<br>time. Use caution; keep away<br>from the rotating parts.|
|Holding brake not<br>releasing (Z-axis only)|Low|Z-axis will usually move down properly<br>but will not move up.|You should be able to hear<br>motor cogging whenever<br>you command the axis to<br>move. It should be noted<br>that usually the brake alone<br>does not have the torque to<br>cause a loss of step. Typically<br>a condition such as poor<br>lubrication combined with<br>a defective Z brake are<br>required to actually lose<br>position.|
|Controller or<br>operating system<br>problem|Low|Restart the controller and send the<br>log file in the log files directory to<br>info@tormach.com.|—|



(continued on next page...) 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

221 

### **<mark>Troubleshooting</mark>** 

**Axes Drive Subsystem Checklist Table 4.8 — Steps are lost on axis travel (...continued) NOTE: Consult Table 4.2 and Table 4.5 for more information on lost steps.** 

|**Possible Cause**|**Probability **|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
||||If you lose steps, it is<br>normally many steps. You<br>should be able to hear the<br>motor cogging; mechanical<br>issues most often result<br>in losing a large number<br>of steps or stalling. Typical<br>mechanical issues include|
|Obstruction or<br>excessive friction<br>(gibs not adjusted<br>properly or poor<br>lubrication) or<br>high load in the<br>mechanical system|Low|Jog the axis with the jog/shuttle control<br>and carefully observe the motion.|an increase in friction due<br>to lack of oil at the way<br>surfaces or ball screw and/<br>or<br>improperly<br>adjusted<br>gibs. They also come from<br>excessive load on the system<br>due to chips or debris on the<br>way surfaces or ball screw,<br>a sticking Z-axis brake or<br>an<br>end-of-travel<br>bumper<br>wedged against the motor<br>mount casting. This occurs<br>sometimes after a limit<br>switch failure and is more<br>common on the Z-axis.|
|Axis drivers have<br>wrong DIP<br>switch settings|Low|See electrical schematic in the back of<br>this manual. Note: New axis drivers<br>require the operator set these DIP<br>switches at installation.|—|



###### **10.5.4.2 Details of Axis Drive Subsystem** 

Axis drivers are mounted in the electrical cabinet left to right in the sequence X, Y, Z, A. Motion for the X-, Y-, Z-, and optionally the A-axis are provided by DC axis motors. Each motor is powered by an electronic driver module. The driver module receives nominal 65 VDC power from the DC bus board and receives control signals from the control board which processes and formats information sent by the controller. Find the relevant portion of the electrical schematic highlighted in **Figure 10.14** and **Figure 10.15** . For more detail, view electrical schematic inside back cover. 

When control power is on, contacts from contactor C1 pass the nominal 230 VAC input power to XFM2, the DC bus power transformer. XMF2 reduces the voltage to a nominal 48 VAC which is sent to the DC bus board on wires L15 and L25. 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

222 

**<mark>Troubleshooting</mark>** 

A full wave bridge rectifier on the DC bus board in conjunction with a 15,000 μF (micro-Farad) capacitor connected (wires 300 {common} and 301) to the DC bus board provide a nominal 65 VDC supply for the electronic driver modules that are measured on wires 300 and 301. This supply is individually fused for each axis and distributed to each axis. See **Table 4.4** . 

Control signals to move the axes are created by the PathPilot controller. The controller sends the axis commands via the mill interface board to the main control board, which processes these signals and distributes them to the individual axes through a ribbon cable which plugs into the axis drivers. The X, Y, and Z axes each have one limit switch which actuates at the end of travel in each direction. These limit switches are used to stop the travel of an axis before the mechanical limit is reached. The limit switches are also used to stop an axis near its extreme travel position during a reference procedure. 

Sensors such as limit switches are the most common source of problems on a mill. By necessity they need to be mounted where they are detecting events such as end of travel. This makes them vulnerable to damage. They can get fouled by coolant, chips, or by physical contact. Sticking and wire damage are also common problems. 

PCNC mill electronics are such that if any one limit switch is actuated, or the control board thinks the switch is actuated, the mill will not come out of reset. In order to temporarily work around a faulty limit switch, you may check the _Disable Home Switches_ checkbox on the _Settings_ tab. This will allow you to jog the mill to the home position and reference the axes manually by pressing the _Ref_ buttons. This will establish soft limits, and allow you to use the mill until you repair the faulty switch. 

The limit switches are all wired normally closed. Therefore, a broken wire or defective connections results in the control board detecting a limit switch is actuated. The _Status_ screen shows the status of the switches. 

The axes are driven by axis motors that have no feedback. It is possible that an axis can be commanded to move but will not move as far as it is commanded to. This is commonly referred to as losing steps. Excessive friction or load in the mechanical system will cause the loss of steps. When losing steps it is usually possible to hear a cogging noise from the motor. The probability of losing a single step or a few steps from a mechanical problem is very low. Mechanical issues most often result in losing a large number of steps or stalling the motor. 

###### **Additional Notes on Lost Steps** 

In the spirit and philosophy of this guide, divide and conquer has no better application than in the case of trouble shooting loss of position, or lost steps. As a general rule, a properly operating PCNC mill being used in overloaded cutting situations should experience a spindle stall (or a broken cutting tool) long before an axis sees so high a cutting force that it stalls or skips. Keeping this in mind, it is worth mentioning that the vast majority of problems that are mistakenly associated with lost steps are actually due to one or more of the following: 

- Improper use or call-out of mill offsets such as G54/55, as well as G43 

- Tool pull out as a result of a cutter or holder not secured properly 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

223 

### **<mark>Troubleshooting</mark>** 

- The wrong diameter tool used in the CAM program (i.e., many 1/2” end mills are not actually .500”) 

- Mill referencing to the part was performed improperly and/or relying on the end of travel limit switches to set mill offsets 

- Fixturing does not secure work, or does not facilitate repeatable mounting of work from one piece to the next 

These are what we call process errors, which have little to do with a problem residing with the mill itself. The scope of this portion of the troubleshooting guide does not cover solutions to process errors. 

It is imperative to divide a given set up into manageable portions so one can focus on where the problem really lies. Is it a process problem, or is it a mill problem? In order to isolate mill problems from process problems, the process must be removed from the set up. 

###### **Motion Test** 

The goal of this test is to measure mill motion explicitly, thus eliminating process-based problems. In this instance, the X-axis is checked, but a similar process can be used on the Y- and Z-axis as well: 

1. Be sure that G40 and G49 show up in the status line at the bottom of the screen. 

2. Mount a quality dial indicator on the mill bed, orienting the plunger along the X-axis. Place it near the end of travel. 

3. Orienting the axis such that the indicator plunger contacts an appropriate surface on the spindle head, move the X-axis such that the indicator is zeroed, then zero the X-axis DRO. 

4. After moving the spindle head away from the indicator, proceed with exercising the axis: using manual moves, or a very simple G-code program, move the axis at varying speeds (particularly focus on rapid speed). The more steps you run the axis through, the higher the probability that a step is missed if there is a mill problem. 

5. Return the axis to indicator zero, and read what the DRO says. Allowing for some lost motion (about .001”), the value indicated on the DRO should be 0. If not, then the mill is missing steps. 

The Z-axis brake has a manual release (see **Figure 10.13** ) to disengage the brake. Do not run mill in the disengaged position. 



<!-- Start of picture text -->
Engaged  Disengaged<br>(normal  (maintenance<br>mode) mode)<br><!-- End of picture text -->

**Figure 10.13** 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

224 

**<mark>Troubleshooting</mark>** 



<!-- Start of picture text -->
Axis Drive Subsystem<br><!-- End of picture text -->

**Figure 10.14** 



<!-- Start of picture text -->
Machine Cabinet Component Locations (Axis Drive)<br><!-- End of picture text -->

**Figure 10.15** 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

225 

**<mark>Troubleshooting</mark>** 

###### **10.5.5 Spindle Drive Subsystem** 

###### **10.5.5.1 Overview** 

The spindle on the PCNC mill is driven by an AC motor whose speed is controlled by a variable frequency drive (VFD). 



**Figure 10.16** 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

226 

### **<mark>Troubleshooting</mark>** 

The spindle is in a ready-to-run condition when the control power is on, the _Spindle Lockout Key_ is on, and the spindle door is closed. 

When the _Spindle Mode Switch_ is set to _Manual_ , the drive is turned on and off with the _Spindle Start Switch_ and _Spindle Stop Switch_ . The spindle speed is set with the _Spindle Speed Dial_ . 

When the _Spindle Mode Switch_ is set to _Auto_ , the start, stop and spindle speed is controlled through the PathPilot interface. 

Find the relevant portion of the electrical schematic highlighted in **Figure 10.18** and **Figure 10.19** . For more detail, view electrical schematic inside back cover. 



<!-- Start of picture text -->
Spindle  Spindle Mode  Spindle Start  Spindle Stop  Spindle Forward/<br>Speed Dial Switch Switch Switch Reverse Switch<br>Spindle Lockout<br>Key<br><!-- End of picture text -->

**Figure 10.17** 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

227 

### **<mark>Troubleshooting</mark>** 

||**Contents of Spindle Drive Subsystem Problem Resolution Checklist**|
|---|---|
|Table 5.1|Spindle will not turn on in manual or auto|
|Table 5.2a|Run and direction commands to drive|
|Table 5.2b|Main control board LED indicators for run and speed commands to drive|
|Table 5.3|Spindle VFD TripCodes|



###### **Spindle Drive Subsystem Checklist Table 5.1** 

###### **Spindle will not turn on in manual or auto** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|No power to spindle|Medium|Inspect spindle belt|If the display on the VFD is<br>on, the belt may be loose or<br>broken**.**|
|No power to VFD|—|The VFD has power if the digital display<br>lights up.|When power is removed, the<br>VFD display will remain active<br>until the internal capacitors<br>dissipate their energy, usually<br>about 15 seconds or so.|



(continued on next page...) 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

228 

**<mark>Troubleshooting</mark>** 

###### **Spindle Drive Subsystem Checklist** 

###### **Table 5.1 (...continued)** 

###### **Spindle will not turn on in manual or auto** 

|**Possible Cause**|**Probability**<br>High|**Action to Identify Cause of Problem**<br>_Spindle Lockout Key_off or defective.|**Discussion**<br>115 VAC measured from wire<br>100 to wire 105 when OK.|
|---|---|---|---|
||Medium|Spindle cover door not holding spindle<br>door switch closed or switch defective.|115 VAC measured from wire<br>100 to wire 106 when OK.|
||High|Loose wires in circuit|Power off the mill following<br>power off/on procedure<br>detailed in chapter 3,<br>_Installation_; search for loose<br>wires. When finished, power<br>on the mill following power<br>off/on procedure detailed<br>in chapter 3,_Installation_, and|
|No power to VFD|||check operation.|
|because contactor C2<br>is not energizing. This<br>can be checked by<br>checking the voltage<br>across L16 and L26 at<br>the VFD. Meter should<br>read 200-250 VAC.|Low|Control board not providing run<br>command or holding contact on C2<br>between wires 106 and 107 defective.<br>In manual mode, press the_Spindle Stop_<br>_Switch_. With the door open, press the<br>_Spindle Start Switch_and listen for a soft<br>audible click on the control board.<br>If you hear this click (from a relay<br>contact on the board), the board is<br>functioning properly.|Ensure you have 115 VAC<br>measured from wire 100<br>to wire 106. Make a jumper<br>wire and, using proper care<br>associated with live circuits,<br>momentarily jumper wires<br>106 and 107. If contactor<br>C2 pulls in (you will hear an<br>audible clunk) while you have<br>the jumper on but drops out<br>as soon as you remove the<br>jumper, the holding contact<br>on C2 is defective. If C2 stays<br>powered on, the control<br>board is not passing the run<br>signal to the circuit. Make<br>certain you are commanding<br>the VFD to run. If so, the<br>control board is defective.|



(continued on next page...) 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

229 

### **<mark>Troubleshooting</mark>** 

###### **Spindle Drive Subsystem Checklist** 

###### **Table 5.1 (...continued) Spindle will not turn on in manual or auto** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**<br>VFD trips may be cleared by<br>removing power from the<br>VFD for 30 seconds by use of<br>the_Spindle Lockout Key._|
|---|---|---|---|
|VFD has tripped|Low|The display will show if the VFD has<br>tripped. Record the information from<br>the display should the trip be happening<br>frequently or should the trip not clear.|The letters_tr_on the left side<br>of the display indicate a VFD<br>trip and the letters on the<br>right define the type of trip.|
||||See**Table 5.3**for a list of<br>Spindle VFD Trips.|
|Err 0 occurs|Low|Check wiring to braking resistor.|Spindle takes a long time to<br>slow down.|
|Belt is loose or broken<br>or<br>Sheaves are not fixed<br>to motor or spindle|Low|Check the mechanical system.|Power off the mill following<br>power<br>off/on<br>procedure<br>detailed<br>in<br>chapter<br>3,<br>_Installation_, before investigating.|
|Defective VFD|Low|If the display is not on and there is<br>nominal 230 VAC between wires L16<br>and L26, the VFD is defective.|If the VFD displays a trip<br>condition that does not clear<br>with removal of power, the<br>VFD may be defective.|



(continued on next page...) 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

230 

**<mark>Troubleshooting</mark>** 

###### **Spindle Drive Subsystem Checklist** 

###### **Table 5.1 (...continued) Spindle will not turn on in manual or auto** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|VFD is not<br>programmed or<br>is programmed<br>incorrectly|Low|Push the M button on the front panel<br>of the VFD momentarily. The display<br>will change to 01___0.0 with the 01<br>blinking. Momentarily push the up<br>arrow key to the right of the M key,<br>the 01 changes to 02. Take note of the<br>number to the right of the 02. Your<br>VFD should read 170.X, where X<br>designates the VFD program version. If<br>it does not display this value then your<br>VFD requires reprogramming. To exit<br>this mode, push and hold the M button<br>until the display reverts.|Reprogramming a VFD is<br>a simple operation, but<br>requires a programming stick<br>from Tormach.|



(continued on next page...) 

UM10349_PCNC1100_Manual_0520A 

Chapter 10 

231 

### **<mark>Troubleshooting</mark>** 

###### **Spindle Drive Subsystem Checklist** 

###### **Table 5.1 (...continued) Spindle will not turn on in manual or auto** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**<br>Check that all cables are seated properly<br>in their connectors on the board.|**Discussion**<br>—|
|---|---|---|---|
|Defective control<br>board<br>or|Low|Attempt to run the VFD. If the display<br>reads Fr xy.z or Ld xy.z where xy and<br>z are numbers between 0 and 9, the<br>control board is sending a run (enable)<br>signal to the VFD. A reading of rd 0.0<br>indicates the VFD is ready but not<br>receiving a run command. Note that<br>the VFD may be displaying numbers on<br>the left side of the display. If the digits<br>on the right side of the display are<br>flashing, momentarily press and release<br>the M button just below the display to<br>cause the left side digits to flash. With<br>the left side digits flashing, press and<br>hold the M button for three seconds<br>and the display will change to Fr, Ld or<br>rd as described below.|If the display reads rd 0.0, see<br>**Table 5.2**to measure DC<br>voltage. Be sure to measure<br>at both the control board<br>and at the VFD to determine<br>if there is a problem with the<br>wiring. It is not critical that<br>the measurement for reverse<br>be made, as it is not required<br>to make the spindle turn;<br>however, it may aid in further<br>troubleshooting.<br>If<br>your<br>measurements match those<br>in**Table 5.2**, the control<br>board and wiring to the VFD<br>|
|Defective cables<br>between the control<br>board and the|||are good.|
|spindle VFD||Attempt to run in manual with the_Spindle_<br>_Speed Dial_in a mid-range position.|2-3.5 VDC measured on the<br>control board between wires<br>J1-2 (common) and J1-1<br>indicates the control board<br>speed output signal is OK.<br>Turning the_Spindle Speed Dial_<br>from minimum to maximum<br>should cause the voltage to<br>range from <1 to >4.5 VDC.<br>Return_Spindle Speed Dial_to<br>mid-position.|
|||Determination of defective VFD or<br>control board.|If the voltage measurements<br>in the two tests above are<br>not good, the control board<br>is defective; if correct the<br>VFD is defective.|



(continued on next page...) 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

232 

**<mark>Troubleshooting</mark>** 

###### **Spindle Drive Subsystem Checklist** 

###### **Table 5.1 (...continued)** 

###### **Spindle will not turn on in manual or auto** 

|**Possible Cause**|**Probability**|**Action to Identify Cause of Problem**|**Discussion**|
|---|---|---|---|
|Defective motor|Low|Power off the VFD using the key<br>switch. Wait 30 seconds and measure<br>resistance between the leads of the<br>motor which are wire numbers 400,<br>401, and 402. Remember to take a tare<br>reading with your meter. Refer to_Using_<br>_the Digital Multimeter for Electrical Tests_<br>earlier in this chapter_._|Resistance should be in the<br>range of 2-4 Ω. 0 Ω would<br>indicate the winding is shorted<br>and >1M Ω would indicate the<br>winding is open, both cases<br>indicate a defective motor or<br>compromised wiring to the<br>motor from the VFD.|



###### **Spindle Drive Subsystem Checklist** 

###### **Table 5.2a** 

###### **Run and direction commands to drive** 

|**Command**<br>**From Card**|**Monitoring Points One**|**Probe on Each**|**Voltage**|**Measured**|
|---|---|---|---|---|
||Common wire number|Wire number|Voltage when control<br>board command is on|Voltage when control<br>board command is<br>not on|
|Run|J1-2|J1-3|20-28 VDC|0 VDC|
|Reverse|J1-2|J1-6|0 VDC|20-28 VDC|



###### **Spindle Drive Subsystem Checklist** 

###### **Table 5.2b** 

###### **Main control board LED indicators for run and speed commands to drive** 

|**Mode**|**Setting**|**Indicator**|
|---|---|---|
|Manual (front panel switch<br>turned to manual)|_Spindle Start_switch on_Operator_<br>_Panel_engaged.|Yellow LED D15 lights. Brightness is<br>proportional to speed.|
|||Yellow LED D15 lights. Brightness is|
|Auto (front panel switch<br>turned to auto)|_Spindle FWD_button on controller<br>screen engaged.|proportional to speed. Green LED D10<br>lights and blinks at a rate proportional to<br>speed.|



UM10349_PCNC1100_Manual_0520A 

Chapter 10 

233 

**<mark>Troubleshooting</mark>** 



<!-- Start of picture text -->
Spindle Drive Subsystem<br><!-- End of picture text -->

**Figure 10.18** 



<!-- Start of picture text -->
Machine Cabinet Component Locations (Spindle Drive)<br><!-- End of picture text -->

**Figure 10.19** 

Chapter 10 

UM10349_PCNC1100_Manual_0520A 

234 

**<mark>Troubleshooting</mark>** 

Power is supplied to the drive through a contactor that allows power to pass when the drive is commanded to run by the operator. When the red _E-stop_ is pressed, the _Spindle Lockout Key_ S7 is turned off, or when the spindle door LS5 is opened, contactor C2 de-energizes and interrupts power to the VFD and prevents the motor from running. 

**_NOTE:_** _After a power off, the VFD will only power back on when first commanded to spin in either manual or auto mode. The VFD will not power on by pushing the green Start button on the Operator Panel. Once the VFD is powered on, it will stay on until one of the above conditions occurs._ 

Control signals are sent to the VFD from the main control board which gets commands from the controller in automatic mode or from the _Operator Panel_ in manual mode. When _Manual_ is selected with the _Spindle Mode_ switch, the _Start_ and _Spindle Stop_ switches, the _Spindle Forward/Reverse_ switch and the _Spindle Speed Dial_ are used to control the spindle speed. In the auto mode, none of these controls are functional and all control for the spindle is provided by the controller and mill operating system. 

The control board provides a five second contact closure pulse between wires 106 and 107 to cause power to be applied to the drive. It also provides a run command, a direction command, and an analogue voltage in the range of 0-5 VDC to wires J1-1 (com) and J1-2 proportional to desired speed. See **Table 5.1** and **Table 5.2** . 

The display on the VFD provides valuable information for troubleshooting. The display will provide diagnostics which include: 

Frequency output (proportional to speed. Range is ~7 HZ to 142 HZ). 



Load percentage (load is proportional to the torque the motor is outputting). 



Status ( _rd_ for ready, _ih_ for inhibit which will occur when there is no jumper between terminals B2 and B4 on the drive). 

Fault information ( _tr_ for trip) and a code for the fault. 







There are several VFD trip scenarios noted in **Table 5.3** . 

The drive can also provide parameter information. This is information from the Tormach program of the drive and is usually not important from an operator standpoint. If the drive is displaying this sort of information, which always has two-digit numbers displayed on the left side of the display, the operator must take action to allow the drive to display the diagnostic information (above). 



UM10349_PCNC1100_Manual_0520A 

Chapter 10 

235 

### **<mark>Troubleshooting</mark>** 

If the right side digits are flashing, momentarily press and release the M button just below the display to cause the left side digits to flash. Now with the left side digits flashing, press and hold the M button for three seconds and the display will change to display diagnostics. 

If frequency is displayed and it is desired to display load, or vice versa, press and hold the M button for three seconds. 

Do not change any parameter values in the VFD. There are no operator settable parameters available. 

||**Spindle Drive**<br>**T**<br>**Spind**|**Subsystem Checklist**<br>**able 5.3**<br>**le VFD Trips**|
|---|---|---|
|**Trip Code **|**Condition**|**Likely Cause**|
|UU|DC bus undervoltage|This happens every time the VFD is powered down.|
|OU|DC bus overvoltage|Braking resistor failed open or wiring connection<br>open between the VFD and the resistor. Resistance to<br>measure 75 ohms.|
|OI.AC|VFD output instantaneous over<br>current.|Phase to phase or phase to ground short on output of<br>VFD to motor.|
|OI.br|Braking resistor instantaneous over<br>current.|Braking resistor shorted or partially shorted out<br>or short in wiring between the VFD and the resistor.<br>Resistance to measure 75 ohms.|
|It.br|I<sup>2</sup>t (power) on braking resistor|Excessive braking resistor energy caused by too frequent<br>and too severe deceleration cycles or AC supply voltage<br>too high.|
|It.AC|I<sup>2</sup>t (power) on VFD output current<br>(used to protect motor).|You are working the spindle motor too hard. Consider<br>running the spindle motor at half speed for 10 minutes<br>with no load to cool the motor down.|
|O.ht1|VFD is working too hard and stops<br>to cool power electronics down to<br>prevent failure.|Spindle motor working too hard. Stop running the<br>spindle but leave the VFD power on and let the power<br>electronics cool down.|
|O.ht2|Heat sink temperature is too high<br>because the VFD is working too<br>hard and stops to cool power<br>electronics down to prevent failure.<br>Cabinet may also be too hot.|Spindle motor working too hard or it is too hot in work<br>location. Stop running the spindle but leave the VFD power<br>on and let the power electronics cool down. Check to see<br>if the fan on the VFD is running and check filters on the<br>cabinet. Cool work location down if required.|
|Hf.29|Cooling fan is not cooling.|Failed drive|



Chapter 10 

UM10349_PCNC1100_Manual_0520A 

236 

**<mark>Diagrams and Parts List</mark>** 

#### **11. Diagrams and Parts List** 

###### **11.1 Upper Mill Assembly (exploded view)** 



<!-- Start of picture text -->
17 37 38 91 39 40 41 22 23 21 42 43 44 45 46 47 48 49 50 51 24 52 53 54 55<br>18<br>56<br>36<br>57<br>35<br>58<br>34<br>59<br>33<br>32 60<br>31 59<br>30 62<br>29 22<br>28 4<br>85 61<br>27<br>21<br>26 63<br>25 64<br>24 65<br>23 66<br>22 67<br>21 53<br>20 68<br>19 69<br>70<br>18<br>69<br>17<br>71<br>16<br>95<br>15<br>53<br>14<br>92<br>13 4<br>73 72<br>12 74<br>75<br>12<br>76<br>77<br>11<br>17<br>7 18<br>6<br>8<br>5<br>57<br>4 9<br>3<br>93<br>4<br>2<br>78<br>1<br>79<br>1 90 89 88 87 49 94 10 79 86 84 83 82 81 80<br><!-- End of picture text -->

UM10349_PCNC1100_Manual_0520A 

Chapter 11 

237 

### **<mark>Diagrams and Parts List</mark>** 

###### **Upper Mill Assembly Parts List** 

|**ID**|**PN**|**Description**|**ID**|**PN**|**Description**|
|---|---|---|---|---|---|
|1|30303|Lower Spindle Bearing<sup>1</sup>|35|30339|Spindle Motor Handle|
|2|30304|Screw,M8 x 30|36|30340|Pivot Plate Pin,6 x 45|
|3|30305|Spindle Cartridge|37|30341|Spindle Motor Pivot Plate|
|3A|30306|Spindle Cartridge Assembly<sup>2</sup>|38|30342|Pivot Plate ClampBolt|
|4|30307|Screw,M5 x 12 mm|39|30343|Pin|
|5|31198|Screw,M3 x 12|40|30344|Spring,1 x 4.8 x 20|
|6|31199|Latch|41|30345|Pivot Plate ClampHandle|
|6A|31217|Latch Kit<sup>3</sup>|42|30346|Spindle Motor|
|7|31200|Nut,M3|42a|32872|Spindle Motor Fan|
|8|31201|Nut,M5|43|30347|Spindle Motor PulleySpacer|
|9|31202|Screw,M5 x 16|44|30348|Key,8 x 40|
|10|31203|Screw,M6 x 16|45|30349|Screw,M12 x 45|
|11|30315|Spindle Motor Cover|46|30350|Sleeve|
|12|30316|Upper Spindle Bearing<sup>4</sup>|47|30351|PulleyWasher|
|13|30317|Nut,M33 x 1.5|48|30352|Screw,M8 x 20|
|14|30318|Screw,M5 x 8|49|30353|Screw,M6 x 30|
|15|30319|Screw,12 x 50|50|30354|Spring|
|16|30320|Pin,8 x 35|51|30355|Screw,M6 x 40|
|17|30321|Washer,12 mm|52|30356|Screw,M6 x 60|
|18|30322|Washer,12 mm|53|30357|Screw,M5 x 20|
|19|30323|Head Casting|54|32002|Z-axis Motor w/Brake|
|20|30324|Spindle Motor Mount|55|30359|Screw,M5 x 26|
|21|30325|Washer,10 mm|56|30360|Washer|
|22|30326|Washer,10 mm|57|30361|Washer|
|23|30327|Screw,M10 x 30|58|30362|Z-axis Motor Coupler|
|24|30328|Nut,M6|59|30363|Nut,M14 x 1.5|
|25|30329|Pin,5 x 35|60|30364|Lock Washer,14 mm|
|26|30330|Spindle Lock|61|30365|Z-axis Motor Mount Cover<br>Plate|
|27|30331|Spindle Lock|62|30366|Screw,M10 x 40|
|28|30332|Spindle Pulley|63|30367|Z-axis Motor Mount|
|29|30333|Nut,M27 x 1.5|64|30368|Pin,6 x 30|
|30|30334|Screw,M4 x 8|65|30369|Screw,M16 x 12|
|31|30335|Spindle Motor Pulley|66|30370|Screw,M16|
|32|30336|Handle Pin|67|30371|Spacer|
|33|30337|Set Screw,M5 x 8|68|30372|Z-axis Ball Screw Cover Plate|
|34|30338|Spring,1 x 4.8 x 20|69|30373|Z-axis Ball Screw Bearing<sup>5</sup>|



Chapter 11 

UM10349_PCNC1100_Manual_0520A 

238 

### **<mark>Diagrams and Parts List</mark>** 

###### **Upper Mill Assembly Parts List** 

|**ID**|**PN**|**Description**|**ID**|**PN**|**Description**|
|---|---|---|---|---|---|
|70|30374|Spacer|85|30389|Spindle Belt<sup>6</sup>|
|71|30375|Z-axis Ball Screw Upper<br>Bumper|86|30390|Z-axis Lower Bumper Washer|
|72|30376|Column Cover Plate|87|30391|Spindle|
|73|30377|Spacer|88|30392|Pin|
|74|30378|Z-axis WayCover|89|30393|Key,8x26|
|75|30379|Machine Column|90|30394|Lower Spindle Spacer|
|76|30380|Screw,M12x60|91|30395|Cylindrical Pin,4x16|
|77|30381|Pin,10x55|92|30396|Washer|
|78|30382|Z-axis Ball Screw and Nut|93|31204|Z-axis Lower Way Cover<br>Bracket|
|79|30383|Washer|94|31205|Pin,M6 x 35|
|80|30384|Z-axis Gib|95|31206|Screw,M5 x 12|
|81|30385|Screw|(not shown)|31320|Drawbar for R8 Taper –<br>original equipment|
|82|30386|Z-axis Saddle|(not shown)|30506|Drawbar for BT30 Taper|
|83|30387|Z Ball Screw Nut Housing|(not shown)|30560|Thrust Washer for Drawbar|
|84|30388|Z-axis Ball Screw Lower<br>Bumper|(not shown)|31320|Drawbar for Power Drawbar|



1 Annular Bearing Engineering Council identification: 7008C/DT (double tandem pair- ORDERED AS A PAIR) 2 Spindle Cartridge Assembly for R8 includes callout numbers 1,3, 12,13,14,73, 87, 88, and 90. For BT30 Spindle Cartridge Assembly, use PN 30505 

3 Latch Kit Assembly includes callout numbers 5,6,7 

4 Annular Bearing Engineering Council identification: 7007C/DT (double tandem pair –ORDERED AS A PAIR) 5 Annular Bearing Engineering Council identification: ABEC7202B/Angular Contact 7201B (qty 2 needed per axis) 

6 3V280 Gates 

UM10349_PCNC1100_Manual_0520A 

Chapter 11 

239 

### **<mark>Diagrams and Parts List</mark>** 

###### **11.2 Lower Mill Assembly (exploded view)** 



<!-- Start of picture text -->
45 46 47 14 16 5 24 12 48 21 16 22 7 54 24 23 25 15 26 6 29 6 27 28 35 34 33 31 30 32 50<br>7 15<br>1 38<br>51<br>39<br>11<br>15 27<br>53<br>44<br>40<br>43<br>42 60<br>56<br>41<br>57<br>39<br>58<br>4 54<br>38 55<br>15 43<br>37 44<br>36<br>42<br>35 1<br>33<br>32 2<br>31 3<br>30<br>34 4<br>28<br>49 5<br>27 24<br>29<br>12<br>6<br>26<br>8<br>25<br>9<br>23<br>24<br>54<br>15 6 22 21 15 16 20 19 18 59 21 7 52 7 17 16 40 11 10<br><!-- End of picture text -->

Chapter 11 

UM10349_PCNC1100_Manual_0520A 

240 

### **<mark>Diagrams and Parts List</mark>** 

###### **Lower Mill Assembly Parts List** 

|**ID**|**PN**|**Description**|
|---|---|---|
|1|30397|Screw,M6 x 25|
|2|30398|Splitter Manifold|
|3|30399|Machine Base|
|4|30400|Ball Screw Bumper|
|5|30401|Washer|
|6|30402|Nut,M14 x 1.5|
|7|30403|Screw,M4 x 12|
|8|30404|Y-axis Bellows/Spacer|
|9|30405|Screw,M6 x 40|
|10|30406|Y-axis Bellows MountingPlate|
|11|30578|Y-axis Bellows Front or Rear|
|14|31207|Ball Screw Bumper|
|15|30411|Screw,M5 x 20|
|16|30412|Screw|
|17|30413|Y-axis Gib|
|18|30414|Y-axis Saddle|
|19|32753|Front DripGuard|
|20|30416|Screw,M5 x 8|
|21|30417|Screw,M5 x 10|
|22|30418|X-axis Motor Mount Cover Plate|
|23|30419|Washer|
|24|30420|Washer|
|25|32001|X- and Y-axis Motor|
|26|30421|X- and Y-axis Motor Coupling|
|27|30422|Screw,M5 x 16|
|28|30423|X and Y Ball Screw Cover Plate|
|29|30424|Washer|
|30|30425|Washer 8 mm|
|31|30426|Lock Washer,8 mm|
|32|30427|Screw,M8 x 40|



|**ID**|**PN**|**Description**|
|---|---|---|
|33|30428|Pin,8 x 30|
|34|30429|X- and Y-axis Spacer|
|35|30430|X- and Y-axis Bearing<sup>1</sup>|
|36|30431|X-axis Ball Screw and Nut|
|37|32401|X-axis Motor Base|
|37A|32402|Table Tray (not shown)|
|38|30433|Ball Screw Clamp|
|39|31208|Limit Switch Block,X-axis|
|40|31209|Screw,M4 x 8|
|41|30436|Machine Table|
|42|30437|Screw,6 x 26|
|43|30438|Washer|
|44|30439|Pin,6 x 25|
|45|30440|Table Drain Screen|
|46|30441|X Ball Screw Nut Housing|
|47|30442|Manifold|
|48|30443|X-axis Gib|
|49|30444|Sleeve|
|50|30445|Y-axis Motor Mount|
|51|30446|Ball Screw Bumper|
|52|31210|X-axis Limit Switch Cover Plate|
|53|30448|Y-axis Ball Screw and Nut|
|54|30449|Screw,M5 x 25|
|55|31208|Block|
|56|30451|Screw,M5 x 8|
|57|30452|Y-axis Limit Switch Housing|
|58|30453|Y-axis Ball Screw Nut Housing|
|59|31211|X-axis Limit Switch Housing|
|60|31212|Y-axis Limit Switch Plate|



1 Annular Bearing Engineering Council identification: ABEC7202B Angular Contact (two needed per axis) 

UM10349_PCNC1100_Manual_0520A 

Chapter 11 

241 

**<mark>Diagrams and Parts List</mark>** 

###### **11.3 Electrical Cabinet** 



<!-- Start of picture text -->
INSIDE BOX<br>32<br>RIGHT SIDE 22 15 41 31 1 28 INSIDE DOOR<br>FAN<br>DC BUSBOARD32005 CAP STEPPERDRIVER32000 STEPPERDRIVER32000 STEPPERDRIVER32000 STEPPERDRIVER32793 39<br>X AXIS  Y AXIS  Z AXIS  (OPTION)A AXIS<br>16<br>Fuse FU7 Fwd/RevSW 112 J12 12 SW2Stop SW3Start 12 Auto/ManSW4 12 J11    12   3 POT1<br>6 (30459)XFM2 filter XFM131097 30465C2 30465C1 LED ASSYP/N 31040 DIN CONNECTOR ASSY31039<br>Fuse FU3<br>5 20B 30<br>2,3<br>Holes for arm mount VFD<br>MainDisconnect 4 TORMACH MACHINECONTROL BOARD31045 SEE MOUNTING BOLT PATTERN 31036 12, 8<br>IN DETAIL<br>7 Fuse F1Fuse F2 BELOW  13, 8<br>34<br>7A<br>4th Axis  7B<br>21<br>20 in 42 33<br>E-stop Port<br>OUTSIDE DOOR<br>37<br>26<br>40<br>38 26 25 10.5 CM<br>25 25<br>18,19 27<br>35, 23<br>10<br>B<br>36 BOTTOM 17 11 20 9<br>20A<br>14<br>R W B G R W B G<br>fuse fuse fuse<br>31049<br>BRAKING RESISTOR<br><!-- End of picture text -->

Chapter 11 

UM10349_PCNC1100_Manual_0520A 

242 

### **<mark>Diagrams and Parts List</mark>** 

||||**Electr**|**ical Ca**|**binet Parts List**|||
|---|---|---|---|---|---|---|---|
|**ID**|**PN**|**Description**|**ID**|**PN**|**Description**|**PN**|**Description**|
|1|31120|Fuse FU7<sup>1</sup>|20|31040|LED Assembly|30627|Flex Conduit 16 mm OD<sup>12</sup>|
|1A|31213|Fuse Holder for FU7|20A|31043|LED Mounting Clip|30628|Connector for 16 mm Flex<br>(Mill End)|
|2|30455|Fuse FU1, FU2<sup>2</sup>|20B|31044|LED Retaining Ring|31369|Connector for 16 mm Flex<br>(Motor End)|
|2A|30510|Double Fuse Block|21|31036|VFD Motor Driver<sup>9</sup>|30722|Flex Conduit 12 mm OD<sup>12</sup>|
|3|30456|Fuse FU6<sup>3</sup>|22|32005|DC Bus Board|30723|Connector for 12 mm Flex|
|3A|30511|Single Fuse Block|22A|31655|DC Bus Fuse F1,2,3,4,7,8<sup>10.1</sup>|30728|Flex Conduit 10 mm OD<sup>12</sup>|
|4|31119|Fuse FU3<sup>4</sup>|22B|31123|DC Bus Fuse F5<sup>10.2</sup>|30729|Connector for 10 mm flex|
|4A|31213|Fuse Holder for FU3|22C|32404|DC Bus Fuse F6<sup>10.3</sup>|30470|Tormach Logo – Decal|
|5|31097|Transformer XFM1<sup>5</sup>|23|33063|Suppressor for Outlet|32405|Series 3 Logo – Decal|
|6|30459|Transformer XFM2<sup>6</sup>|25|32007|On-Off Rocker|30222|Label, Belt Position|
|7|31045|Machine Control Board|26|32008|On/Off MomentaryRocker|30223|Label, Machine Safety|
|7A|31877|Control Board Fuse F1<sup>7</sup>|27|32006|On-Off-On Rocker|30224|Label, Dual Power Safety|
|7B|30182|Control Board Fuse F2<sup>8</sup>|28|32668|Side Terminal Strip|30225|Label, Voltage Safety|
|8|33062|Suppressor for Coil|30|32097|Operator Panel|30742|Z Limit Switch LS3|
|9|30462|E-stopPB1|31|32000|Stepper Driver|31860|X Limit Switch(sealed)LS1|
|10|30463|Push Button PB2|32|30626|Fan, 115 VAC|30461|Y Limit Switch LS2|
|11|30464|KeySwitch w/Keys SW7|33|31104|Terminal Block<sup>11</sup>|30536|Y Limit Switch w/Enclosure|
|12|30466|RelayContactor C1|34|31049|BrakingResistor|30577|Spindle Cover Switch LS5|
|13|30466|RelayContactor C2|35|30177|AC Power Outlet|||
|14|30467|Cabinet Latch and Key|36|30210|I/O Mount Plate|||
|15|30468|Capacitor|37|30258|AC Power Inlet|||
|16|32350|Filter|38|30165|I/O Mount Plate|||
|17|31039|Accessory/ Probe Port|39|30685|J3 Cable(Operator Panel)|||
|18|31041|Potentiometer|40|30684|J4 Cable(Controller)|||
|19|30181|Knob|41|30686|J6 Ribbon Cable (Axis<br>Drivers)|||
||||42|30454|Disconnect Switch|||



1 Metric size is 5 x 20 mm, 3 amp. Use Bussmann GMD-3A, Littlefuse 239003.P, or Ferraz GSC -3A 

2 Metric size is 10 x 38 mm, 15A. Use Bussmann KTK-15, Littlefuse KLK-15, or Ferraz ATM-15 

3 Metric size is 10 x 38 mm, 6A. Use Bussmann KTK-6, Littlefuse KLK-6, or Ferraz ATM-6 

4 Metric size is 5 x 20 mm .75A. Use Bussmann GMD-750mA, Littlefuse 239.75P 

- 5 Control Transformer is 230/115 - 100 VA 

- 6 Axis Power Transformer is 230/48 - 500 VA 

- 7 Inch size is 1.25 x. 25, 1 amp. Use JVP AGC 1 

8 Inch size is 1.25 x .25, 6.3 amp. Use JVP AGC 6.3 

9 Pre-programmed with current PCNC software 

10.1 Fuse for dc bus board, F1, 2, 3, 4, 7,8. Use Bussmann GMD-8A, Littlefuse 239008.P, or Ferraz GSC -8A 

10.2 Fuse for dc bus board, F5. Use Bussmann GMD-2A, Littlefuse 239002.P, or Ferraz GSC -2A 

10.3 Fuse for dc bus board, F6. Use Bussmann GMD-15A, Littlefuse 239015.P, or Ferraz GSC -15A 

11 Some newer mills will have discrete terminal blocks, 32667, instead of a terminal strip 

12 Flex conduit; 12 mm used for the electrical cabinet to the Y limit switch, 10 mm used for the Y limit switch to the X limit switch, 16 mm used for all axis motors and spindle motor use 16 mm 

UM10349_PCNC1100_Manual_0520A 

Chapter 11 

243 

### **<mark>Diagrams and Parts List</mark>** 

###### **11.4 Connections** 



<!-- Start of picture text -->
32005 DC BUS<br>Lables and wire numbers<br>DAUGHTERBOARD 502 Optional PDB +<br>FOR OPTIONAL PDB 501 Optional PDB -<br>J1-48VAC  L25 White Wire 200<br>CAP- 300<br>J2-48VAC  L15 F1 = X AXISF2 = Y AXIS Black Wire 206<br>F3 = Z AXIS 30258 AC Inlet<br>CAP+  301 F4 = A AXISF5 = DC BRAKE Back View GRN/YEL Wire<br>BRAKE RLY+ 328 F6 = MAIN<br>503 Optional ATC + F7 = PDB Ground<br>F8 = ATC<br>504 Optional ATC -<br>White Wire 200<br>BRK-  327 X-  303X+  302 30177 AC Outlet 204 or 203Black Wire<br>BRAKE RLY-  329 Y-   305Y+  304 Back View<br>BRK+  326<br>A+ 324 Z-   307Z+  306 Green/Yellow Wire<br>A- 325 Ground<br>WIRE COLORS/GAUGE<br>VFD WIRING DETAIL<br>31039 DIN CONNECTOR ASSY 31036 WIRE  COLOR SIZE<br>Solder side of Panel Mount J1-1 J1-4 NUMBER (AWG)<br>DIN Connector on Mill cabinet NOTE ORDER  100 WHITE 14/16<br>J1-2 OF WIRES 101-199 RED 16<br>3 5 2 4 1 FROM T5 TO B2 TO B4 200 WHITE 16<br>T1  T2  T3  T4  T5  T6 201 GREEN/YELLOW 16<br>B1  B2  B3  B4  B5  B6  B7 202-299 BLACK 16<br>+12VD C Pin 3   12 VDC J1-6 300-399 MULTI COLOR 16<br>J1-3<br>400 400-499 BLACK 14<br>+5VDC Pin 1  5  VDC L26 401 J1-1 - J1-6 BLUE 18<br>L16 L1  L2 L3/N U    V   W 402 L00-L99 BROWN/BLUE 14<br>-    +    0   PE  PE  GND<br>403<br>40 4 PIN 1 J6<br>Fairchild 4N35optoisolator Pin 5   Input (sinking) J6 J1-10J1-9J1-8<br>0 VDC  Pin 4   common J1-7J1-6<br>Common LOAD METER -32096(OPTIONAL) PIN 1 J4 J1-5J1-4J1-3J1-2<br>LM1 LM 2(J1-2) J4 TORMACH MACHINE31045 J1-1<br>T1 to LM1 (J1-2)B1 to LM2 "-" "+" CONTROL BOARD J3<br>J5-1 C J2-1J2-2<br>J5-2 C J2-3<br>J5-3 P J2-4<br>J5-4 P J2-5<br>J5-5 D J2-6<br>J5-6 D PIN 1<br>5 8 5 9<br>F6 F7<br>15 A 8 A<br>F8 F5 F4 F3 F2 F1<br>8 A 2 A 8 A 8 A 8 A 8 A<br>470<br>6 1 0 6<br>1 2<br>25 26<br>1 2<br>16 15<br>25 26 2 1 Console<br>J5<br><!-- End of picture text -->

Chapter 11 

UM10349_PCNC1100_Manual_0520A 

244 

**<mark>Diagrams and Parts List</mark>** 

###### **11.5 Stepper Connections** 

##### STEPPER MOTORS 



<!-- Start of picture text -->
X, Y, and Z Axis are 3-Phase<br>3-Phase Schematic<br><!-- End of picture text -->



<!-- Start of picture text -->
off<br>on<br>off<br>on<br>on<br>on<br>on<br>on<br>SWITCH SETTINGS FOR<br>X, Y, Z<br>Connector Function<br>1 PWR GND<br>2 VDC<br>3 U<br>4 V<br>5 W<br>8<br>7<br>6<br>5<br>4<br>3<br>2<br>1<br><!-- End of picture text -->







UM10349_PCNC1100_Manual_0520A 

Chapter 11 

245 

### **<mark>Diagrams and Parts List</mark>** 

###### **11.6 Operator Panel** 

DETAILS: POT1 CONNECTIONS 



<!-- Start of picture text -->
1<br>2<br>2 POT1 3<br>3 POT1<br>1<br>PHYSICAL<br>SCHEMATIC (THEORY) BACK SIDE VIEW<br>POT1 (PN 31041)<br>205 J3<br>203<br>202<br>204<br>202<br>Fwd/RevSW 1 1 1 SW2Stop SW3Start 1 Auto/ManSW4 1    12 POT1<br>2 J12 2 2 2 J11    3<br>DIN CONNECTOR ASSY<br>31039<br>LED ASSYP/N 31040<br>CONNECTION BOARD<br>32089<br>R W B G R W B G<br><!-- End of picture text -->

OPERATOR PANEL with wire identification BACK SIDE 

OPERATOR PANEL with components identification (32097) 



<!-- Start of picture text -->
32089 PCB for Spindle Control(not shown -see page 2) 32007 Switch On-Off<br>32007 Switch On-Off<br>32008 Switch (on)-Off Momentary 32006 Switch, On-Off-On<br>32008 Switch (on)-Off Momentary 30463 Push Button PB2<br>32007 Switch On-Off<br>30179 Potentiometer<br>30181 Knob<br>31040 LED Assembly<br>(31043 LED Mounting Clip<br>and 31044 LED Retaining Ring)<br>31039 Accessory/Probe<br>Port Assembly 31040 LED Assembly<br>(31043 LED Mounting Clip<br>30464 Key Switch w/Keys and 31044 LED Retaining Ring)<br>32099 Front Panel Mounting Plate 30462 Estop Button PB1<br><!-- End of picture text -->

Chapter 11 

UM10349_PCNC1100_Manual_0520A 

246 

**<mark>Diagrams and Parts List</mark>** 

###### **11.7 Ribbon Cable and Miscellaneous** 



<!-- Start of picture text -->
OUTLET COOLANT (PN 30177)<br>30684<br>J4 - DB25 MALE OUTLET COMPUTER (PN 30177)<br>IDC-26     30168 4-40 STANDOFF (PN 30211)<br>CABLE-26   30170DB25 MALE  30166DB25 MALE  30166 4-40 NUT (PN 30212)<br>30685<br>J3 - CONNECTION BOARD<br>IDC-16     30167 (2)<br>CABLE-16  30169<br>I/O MOUNT PLATE - 30210<br>OUTLET COMPUTER (PN 30177)<br>POWER INLET (PN 30258)<br><!-- End of picture text -->



<!-- Start of picture text -->
J4 - DB25 MALE<br>IDC-26     30168<br>CABLE-26   30170DB25 MALE  30166DB25 MALE  30166 4-40 NUT (PN 30212)<br>30685<br>J3 - CONNECTION BOARD<br>IDC-16     30167 (2)<br>CABLE-16  30169<br>I/O MOUNT PLATE - 30210<br>OUTLET COMPUTER (PN 30177)<br>30686<br>J6 - STEPPER DRIVERS<br>X-Axis<br>Y-Axis<br>26 Pin IDC Connector<br>Z-Axis<br>A-Axis<br>2 wires not connected<br>4 empty<br>E-STOP INTERFACE PORTOn side of cabinet 4TH AXIS EXPANSIONOn side of cabinet PIN 2<br>PIN 1<br>24.6 i n<br>21.4 in<br>TRIANGLE<br>3.5mm<br>3.5mm 21.4 in 24.6 in PIN 1 is next to the triangle<br>Example IDC-26, IDC-16 and IDC-10<br><!-- End of picture text -->

UM10349_PCNC1100_Manual_0520A 

Chapter 11 

247 

### **<mark>Diagrams and Parts List</mark>** 

###### **Tools and Related Items** 

|**PN**|**Description**|
|---|---|
|30409|Manual Oil Pump|
|31374|Automatic Oiler|
|31386|Machine WayOil|
|30485|<sup>Spanner Wrench 25-28 mm -DIN 1804 applications, DIN 1810 form A standard. Used for setting preload on</sup><br>ball screw mount bearings. Two wrenches are needed|
|31118|Adjustable Pin Spanner. 4 mmpins(for adjustingspindle bearing preload)|
|30527|Optical laser tachometer 100,000 RPM; five-digit digital display. Useful for spindle speed calibration; includes case.|
|35426|Operator Manual: Update to latest version; spiral bound. PDF can also be downloaded at www.tormach.com|
|30572|Latex Touch-upPaint – Dark Gray2.5 oz matchinglower section of stand(originalpaint is oil based).|
|30571|Latex Touch-up Paint – Light Gray 2.5 oz matching upper section of stand (original paint is oil based). Paint<br>cannot be shipped during cold weather.<br>**_NOTE:_**_Valspar Tractor and Implementpaint #5339-13 Ford Gray is a close match._|
|30624|DIN Connector – 5pin. This is aplugthat will fit in the accessory jack on the front of the machine cabinet.|
|30482|<sup>CPC Connector – Reverse Gender. This plug is on the end of the 4th axis and connects to the side of the</sup><br>PCNC cabinet.|
|30712|Machine Stand Door Latch Left|
|30713|Machine Stand Door Latch Right|
|30714|Machine Stand Door Latch Center|
|30725|Coolant Hose, armored(1/2” NPS-14)|
|32746|Coolant Pump, 120 VAC|
|31105|Coolant Hose Mount Bracket|
|32833|Segmented SprayHose(blue/orange)1/4” NPT|
|31107|Coolant MountingCoupling (old)|
|32832|Coolant MountingCoupling1/4” NPT(new)|
|31366|Coolant Refractometer|
|31101|Spindle Load Meter TopMounted|
|32096|Spindle Load Meter Face Mounted|
|31706|Pneumatic Power Drawbar|
|31728|Foot Pedal for Power Drawbar|
|33215|Coolant AccessoryKit|
|33068|Coolant Adaptor and Hose Upgrade Kit(for those machines equipped with 31107)|



Chapter 11 

UM10349_PCNC1100_Manual_0520A 

248 

**<mark>Diagrams and Parts List</mark>** 

###### **11.8 Lubrication System** 



<!-- Start of picture text -->
P-26<br>PCNC 1100 - Lubrication System<br>30409 or 31374<br>P-24<br>33955<br>33954<br>34707<br><!-- End of picture text -->

UM10349_PCNC1100_Manual_0520A 

Chapter 11 

249 



<!-- Start of picture text -->
PCNC 1100 ELECTRICAL SCHEMATIC<br>Ribbon cable connects J4 to DB25<br>March 2015 LABEL: COOLANT POWER LABEL: COMPUTER LABEL: COMPUTER MONITOR connector on cabinet.  External<br>connection is made to computer<br>POWER INLET OUTLET OUTLET OUTLET<br>DB25  MALE<br>I/O MOUNT PLATE<br>30210<br>SW6<br>COOLANT SW5<br>COMPUTER<br>ALL THICK LINES = 14GA WIRE (BROWN/BLUE)<br>206 Suppressor* 204 203<br>202 (33063) 202 202<br>FU6 - 6 AMP NOTE: FU3, FU5, AND FU7  PB2 201<br>206 207 MOUNTED TO TRANSFORMER E-STOPPB1 START 205 200 30684<br>1 2 202<br>(BroL01 w n Wire) L1 L11 FU5 - 2-3 AMP XFM1 FU3 - 0.75 AM P KEY SWITCH J5-1 F2 - 7 AMP F1- 1 AMP<br>230 VAC LINEL02 3 4 FU1 - 15 AMP 102 103 C1 104 DISABLE SPINDLE DOORSWITCH 30577 J5-3J5-2 J4<br>(Blue Wire) 5 6 L2 L21 100 C1 SW7 105 106 J5-4J5-5J5-6 Tormach Machine Control Board31045 J3 30685<br>DISCONNECT FU2 - 15 AMP FU7 -2-3 AMP Suppressor* 30465 FAN LS5 C2 107 J5<br>230/120  PRIMARY/SECONDARY 33062 J1<br>CONTROL POWER TRANSFORMER<br>MACHINE FRAME J2 J7 J6<br>C2 Suppressor*<br>BONDED TO EARTH GROUND FILTER 30465 33062<br>PN 32350 100 100<br>230/48 PRIMARY/SECONDARY<br>L13 L23 C1 L24 DC BUS POWER L25 DC BUS BOARD 30686<br>32005 X+<br>X-<br>OPTIONAL AUTO OILER (31374) L14 L15 48VACF1, F2, F3, F4, F7, F8 - 8 AMP Y+Y- J2-1 J2-2 J2-3 J2-4 J3 COMPUTERLED2<br>XMF2 CAP - 15,000 uF301 +CAPF6 - 15 AMPF5 - 2 AMP Z+Z- LS1 LS2 LS3<br>C1 -CAPDB+ A+A- SW1 FWD/REV J12 LED1<br>ALL THICK LINES = 14GA WIRE C2 L26C2 (FUTURE ADDITION)300 DB- ATC+ ATC- Brake RLY+Brake+Brake-Brake RLY+ X LIMIT Y LIMIT Z UPPER SW2 STOP LED ASSYP/N 31040MACHINE<br>(BLACK) L16 POWER DRAWBAR (FUTURE ADDITION)AUTOMATIC 329 328<br>(OPTIONAL 4TH AXIS DRIVER) TOOL CHANGER C1 SW3 START<br>VFD (CONVENTIONAL BIPOLAR J11<br>MOTOR AND DRIVER- SEE 326 (connects to J1-7 on control board)<br>31036 4TH AXIS MANUAL FOR PROPER<br>400 CONNECTION INFORMATION) 327 330 (connects to J1-8 on control board) SW4 AUTO/MAN DIN CONNECTOR ASSY31039<br>-    +    0   PE  PE  GNDL1  L2 L3/N U    V   W 402401 M1 A DRIVE 325 324 PN 32000 Z DRIVEP1P2 306307 PN 32000 Y DRIVEP1P2 305 304 PN 32000 X DRIVEP1P2 303 302 ACCESSORY<br>320321322 Motor P3P4P5 316317318 Motor32002 Brake Wires P3P4P5 314313312 Motor32001 P3P4P5 308309310 Motor32001<br>403 323 Motor Wires<br>404 J6-19 thru J6-24 J6-13 thru J6-18 J6-6 thru J6-12 J6-1 thru J6-6 POT1 (31041)<br>NOTE: RESISTOR  J1-1 MANUAL SPEED<br>COMES PRE WIRED<br>All control wires 18GA Wire (Blue)<br>LM1 (J1-2) J1-2 T2 to J1-1<br>T1 to J1-2<br>B5 to J1-3<br>T5 to B2 to B4 to J1-4<br>B6 to J1-6<br>B1  B2  B3  B4  B5  B6  B7 (J1-4 jumpered to J1-5)<br>J1-3<br>LM2 Notes:<br>J1-4 *Supressors added to Series 3 PCNC 1100<br>in Spring of 2013<br>J1-6<br>OPTIONAL<br>LOAD METER<br>(32096)<br>T1 to LM1 (J1-2)<br>B1 to LM2 250<br>J2-1 J2-2 J2-3 J2-4 J2-5 J2-6 J1-1 J1-2 J1-3 J1-4 J1-5 J1.6 J1-7 J1-8 J1-9 J1-10<br>Connection Board PN 30667 version 1.3<br>31049 RESISTOR DYNAMIC BRAKE<br>T1  T2  T3  T4  T5  T6<br><!-- End of picture text -->

## PCNC 1100 ELECTRICAL SCHEMATIC 

## March 2015 

