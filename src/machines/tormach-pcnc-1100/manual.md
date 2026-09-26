# Tormach PCNC 1100 Operator's Manual

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

### **<mark>Preface</mark>** 

##### **Table of Contents** 

|1.**Overview**|**_22_**|
|---|---|
|1.1 Specifications (PCNC 1100)|**_23_**|
|2.**Site Planning and Prep**|**_24_**|
|2.1 General Site Requirements|**_24_**|
|2.1.1 Space Requirements|**_24_**|
|2.2 Electrical Requirements|**_24_**|
|2.2.1 Grounding|**_24_**|
|2.2.2 Plug Pattern|**_24_**|
|2.2.3 Ground Fault Interrupter (GFI) Use|**_25_**|
|2.2.4 Electrical Noise|**_25_**|
|2.2.5 Options for Electrically Non-conforming Sites|**_25_**|
|2.2.5.1 Buck-Boost Transformer|**_25_**|
|2.2.5.2 Step-up/Step-down Transformer|**_25_**|
|2.2.5.3 Quick 220<sup>™</sup>Voltage Converter Power Supply|**_25_**|
|3.**Installation**|**_26_**|
|3.1 Receiving, Uncrating, and Initial Inspection|**_26_**|
|3.1.1 Shipment Arrival|**_26_**|
|3.1.2 Moving the Crate|**_26_**|
|3.1.3 Initial Uncrating|**_27_**|
|3.1.4 Shipping Damage or Shortages|**_27_**|
|3.2 Installation Sequence|**_27_**|
|3.3 Basic Installation Procedure|**_27_**|
|3.3.1 Partial Stand Assembly|**_27_**|
|3.3.2 Remove Tool Tray (PCNC 1100 only)|**_28_**|
|3.3.3 Remove Accessory Tool Box|**_28_**|
|3.3.4 Assembling Y-Axis (PCNC 1100 only)|**_28_**|



Chapter 1 

UM10349_PCNC1100_Manual_0520A 

8 

### **<mark>Preface</mark>** 

|3.3.5 Lift and Move Mill|**_29_**|
|---|---|
|3.3.5.1 Remove Mill from Pallet|**_29_**|
|3.3.5.2 Lifting Bar Kit|**_29_**|
|3.3.5.3 Lifting from Below|**_29_**|
|3.3.5.4 Moving Kit (PCNC 770 Only)|**_30_**|
|3.3.5.5 Lowering Mill onto Stand|**_30_**|
|3.3.6 Install Tool Tray (PCNC 1100 only)|**_30_**|
|3.3.7 Install Drip Tray|**_30_**|
|3.3.8 Install PathPilot Controller|**_31_**|
|3.4 Installation of Add-ons|**_33_**|
|3.4.1 Stand|**_33_**|
|3.4.2 Machine Arm|**_33_**|
|3.4.2.1 Mouse, Keyboard, and Jog Shuttle|**_33_**|
|3.4.3 USB Bulkhead Port|**_33_**|
|3.4.4 Manual or Automatic Oiler|**_33_**|
|3.4.5 Coolant System|**_33_**|
|3.5 Essential Controls Overview|**_34_**|
|3.5.1 E-stop, Start, Reset, and Power|**_34_**|
|3.6 Power Off/Power On Procedure|**_35_**|
|3.6.1 Initial PathPilot Controller Configuration|**_36_**|
|3.7 Validate Basic Installation|**_36_**|
|3.7.1 Verify Spindle Function|**_36_**|
|3.7.2 Verify Limit Switch Function|**_37_**|
|3.7.3 Verify Axis Function|**_38_**|
|3.7.4 Coolant On/Off|**_39_**|
|3.7.5 Installation Troubleshooting|**_39_**|
|3.8 Controller Customization|**_39_**|



UM10349_PCNC1100_Manual_0520A 

Chapter 1 

9 

### **<mark>Preface</mark>** 

|4.**Operation**|**_41_**|
|---|---|
|4.1 Control Locations|**_41_**|
|4.1.1 Operator Panel|**_41_**|
|4.1.2  PathPilot Interface|**_41_**|
|4.2 Initializing the Mill|**_42_**|
|4.2.1 Vital Reference|**_42_**|
|4.3 Jogging|**_42_**|
|4.3.1 Manual Control Group|**_42_**|
|4.4 Spindle Controls|**_43_**|
|4.4.1 Manual Spindle Control Via Operator Panel|**_43_**|
|4.4.2 Automated Spindle Control Via PathPilot Interface|**_44_**|
|4.4.3 Changing Spindle Speed Range|**_44_**|
|4.5 Tool Holders|**_45_**|
|4.6 Part Setup/Workholding|**_47_**|
|5.**Intro to PathPilot**|**_48_**|
|5.1 Making Your First Part|**_48_**|
|5.1.1 Reference the Mill|**_48_**|
|5.1.2 Prepare the Workpiece|**_49_**|
|5.1.3 Prepare the Tools|**_49_**|
|5.1.4 Understand Mill Position, Work Offsets and Tool Offsets|**_49_**|
|5.1.5 Set the Length Units|**_50_**|
|5.1.5.1 Programming in Inches|**_50_**|
|5.1.5.2 Programming in Millimeters|**_50_**|
|5.1.6 Touch Off the Workiece to Set Work Offsets|**_51_**|
|5.1.6.1 Setting the Z Work Offset|**_51_**|
|5.1.6.2 Setting the X and Y Work Offsets|**_52_**|
|5.1.7 Touch Off the Workpiece to Set Tool Length Offsets|**_52_**|



Chapter 1 

UM10349_PCNC1100_Manual_0520A 

10 

### **<mark>Preface</mark>** 

|5.1.8 Write the G-code|**_54_**|
|---|---|
|5.1.8.1 Operation 1|**_54_**|
|5.1.8.2 Operation 2|**_56_**|
|6.**PathPilot Interface**|**_58_**|
|6.1 Overall Layout|**_58_**|
|6.2 Persistent Controls|**_59_**|
|6.2.1 Program Control Group<br>i|**_59_**|
|6.2.2 Position Status Group|**_61_**|
|6.2.3 Manual Control Group|**_62_**|
|6.2.4 Keyboard Shortcuts|**_65_**|
|6.3 Main Tab|**_65_**|
|6.3.1 Selecting a Recent G-code Program File|**_66_**|
|6.3.2 Working in the G-code Window|**_66_**|
|6.3.2.1 Setting a New Start Line|**_66_**|
|6.3.2.2 Expanding the G-code Window|**_67_**|
|6.3.3 Manually Entering Commands|**_67_**|
|6.3.3.1 Searching in the Code|**_68_**|
|6.3.4 Working in the Tool Path Window|**_69_**|
|6.3.4.1 Changing the View of the Tool Path Window|**_69_**|
|6.4 File Tab|**_69_**|
|6.4.1 Managing Files|**_70_**|
|6.4.1.1 Transferring Files or Folders from a USB Drive|**_70_**|
|6.4.2 Loading G-code|**_71_**|
|6.4.3 Editing G-code|**_71_**|
|6.4.3.1 Editing G-code with a Text Editor|**_71_**|
|6.4.3.2 Editing G-code with Conversational Programming|**_71_**|
|6.5 Settings Tab|**_73_**|



UM10349_PCNC1100_Manual_0520A 

Chapter 1 

11 

### **<mark>Preface</mark>** 

|6.5.1 Specifying the Tool Change Method|**_73_**|
|---|---|
|6.5.2 Selecting the Spindle Type|**_74_**|
|6.5.3 Changing the Network Name|**_74_**|
|6.5.4 Disabling Limit Switches<br>i|**_74_**|
|6.5.5 Limiting a G30/M998 Move|**_74_**|
|6.5.6 Enabling Feeds and Speeds Suggestions in Conversational Programming|**_74_**|
|6.5.7 Enabling Accessories|**_75_**|
|6.5.7.1 4th Axis Homing|**_75_**|
|6.5.7.2 Enabling CNC Scanner|**_75_**|
|6.5.7.3 Enabling Enclosure Door Switch|**_75_**|
|6.5.7.4 Enabling Injection Molder|**_75_**|
|6.5.7.5 Enabling Soft Keyboard|**_75_**|
|6.5.7.6 Enabling Probes|**_76_**|
|6.5.7.7 Enabling USB I/O Board|**_76_**|
|6.5.7.8 Switching to RapidTurn|**_76_**|
|6.6 Offsets Tab|**_76_**|
|6.6.1 Tool Tab|**_77_**|
|6.6.1.1 Tool Measuring Techniques|**_77_**|
|6.6.1.2 Creating Tool Descriptions|**_78_**|
|6.6.2 Work Tab|**_81_**|
|6.6.3 Working with Backups|**_81_**|
|6.7 Conversational Tab|**_82_**|
|6.7.1 Using Feeds and Speeds Suggestions|**_82_**|
|6.7.1.1 Adjusting DRO Values|**_83_**|
|6.7.1.2 Refreshing DRO Values|**_84_**|
|6.7.1.3 Using Additional Provided Information|**_84_**|
|6.7.2 Face Tab|**_85_**|



Chapter 1 

UM10349_PCNC1100_Manual_0520A 

12 

### **<mark>Preface</mark>** 

|6.7.3 Profile Tab|**_87_**|
|---|---|
|6.7.4 Pocket Tab|**_88_**|
|6.7.4.1 Rectangular|**_88_**|
|6.7.4.2 Circular|**_89_**|
|6.7.5 Drill/Tap Tab|**_91_**|
|6.7.5.1 Drill|**_93_**|
|6.7.5.2 Tap|**_93_**|
|6.7.6 Thread Mill Tab|**_94_**|
|6.7.7 Engrave Tab|**_96_**|
|6.7.8 DXF Tab|**_98_**|
|6.7.8.1 Working with Layers and Shapes|**_98_**|
|6.7.8.2 Working in the Preview Window|**_99_**|
|6.8 Probe Tab|**_99_**|
|6.8.1 XYZ Probe Tab|**_100_**|
|6.8.2 Rect/Circ Tab|**_101_**|
|6.8.3 Probe/ETS Setup Tab|**_102_**|
|6.9 ADMIN Commands|**_102_**|
|7.**Programming**|**_103_**|
|7.1 Definitions|**_103_**|
|7.2 G-code Programming Language|**_106_**|
|7.2.1 Overview|**_106_**|
|7.2.2 Block|**_106_**|
|7.2.3 Real Value|**_106_**|
|7.2.4 Number|**_106_**|
|7.2.5 Formatting G-code Blocks|**_107_**|
|7.2.6 Optional Program Stop Control – (M01 BREAK)|**_110_**|
|7.2.7 Additional G-code Formatting Notes|**_111_**|



UM10349_PCNC1100_Manual_0520A 

Chapter 1 

13 

### **<mark>Preface</mark>** 

|7.2.7.1 Repeated Items|**_111_**|
|---|---|
|7.2.7.2 Order of Execution|**_111_**|
|7.2.7.3 Error Handling|**_112_**|
|7.2.7.4 Modality and Modal Commands|**_113_**|
|7.2.7.5 Modal Groups|**_113_**|
|7.2.7.6 Default Modes|**_114_**|
|7.3 G-codes<br>i|**_114_**|
|7.3.1 Rapid Linear Motion – G00|**_116_**|
|7.3.2 Linear Motion at Feed Rate – G01|**_117_**|
|7.3.3 Arc at Feed Rate – G02, G03|**_118_**|
|7.3.3.1 Radius Format Arc|**_118_**|
|7.3.3.2 Center Format Arc|**_119_**|
|7.3.4 Dwell – G04|**_122_**|
|7.3.5 Set Offsets – G10|**_122_**|
|7.3.5.1 Set Tool Table – G10 L1|**_122_**|
|7.3.5.2 Set Coordinate System – G10 L2|**_123_**|
|7.3.5.3 Set Tool Table – G10 L10|**_123_**|
|7.3.5.4 Set Tool Table – G10 L11|**_124_**|
|7.3.5.5 Set Coordinate System – G10 L20|**_124_**|
|7.3.6 Plane Selection – G17, G18, and G19|**_125_**|
|7.3.7 Length Units – G20, G21|**_125_**|
|7.3.8 Return to Pre-defined Position – G28, G28.1|**_125_**|
|7.3.9 Return to Pre-defined Position – G30, G30.1|**_126_**|
|7.3.10 Straight Probe – G38.x|**_126_**|
|7.3.10.1 Using the Straight Probe Command|**_127_**|
|7.3.11 Cutter Compensation – G40, G41, and G42|**_128_**|
|7.3.12 Dynamic Cutter Compensation – G41.1, G42.1|**_129_**|



Chapter 1 

UM10349_PCNC1100_Manual_0520A 

14 

### **<mark>Preface</mark>** 

|7.3.13 Apply Tool Length Offset – G43|**_130_**|
|---|---|
|7.3.14 Engrave Sequential Serial Number – G47|**_131_**|
|7.3.15 Cancel Tool Length Compensation – G49|**_131_**|
|7.3.16 Absolute Coordinates – G53|**_132_**|
|7.3.17 Select Work Offset Coordinate System – G54 to G59.3|**_132_**|
|7.3.18 Set Exact Path Control Mode – G61|**_132_**|
|7.3.19 Set Blended Path Control Mode – G64|**_133_**|
|7.3.20 Distance Mode – G90, G91|**_133_**|
|7.3.21 Arc Distance Mode – G90.1, G91.1|**_133_**|
|7.3.22 Temporary Work Offsets – G92, G92.1, G92.2, and G92.3|**_134_**|
|7.3.23 Feed Rate Mode – G93, G94, and G95|**_134_**|
|7.3.24 Spindle Control Mode – G96, G97|**_135_**|
|7.4 Canned Cycles|**_136_**|
|7.4.1 High Speed Peck Drilling Cycle – G73|**_138_**|
|7.4.2 Cancel Active Canned Cycle – G80|**_138_**|
|7.4.3 Simple Drilling Cycle – G81|**_139_**|
|7.4.4 Simple Drilling Cycle (dwell) – G82|**_141_**|
|7.4.5 Peck Drilling Cycle – G83|**_142_**|
|7.4.6 Tapping Cycle – G84|**_142_**|
|7.4.7 Boring Cycle (feedrate out) – G85|**_144_**|
|7.4.8 Boring Cycle (stop, rapid out) – G86|**_144_**|
|7.4.9 Boring Cycle (stop, manual out) – G88|**_144_**|
|7.4.10 Boring Cycle (dwell, feedrate out) – G89|**_145_**|
|7.5 Built-in M-codes|**_145_**|
|7.5.1 Program Stop and Program End – M00, M01, M02, and M30|**_146_**|
|7.5.2 Spindle Control – M03, M04, and M05|**_146_**|
|7.5.3 Tool Change – M06|**_147_**|



UM10349_PCNC1100_Manual_0520A 

Chapter 1 

15 

### **<mark>Preface</mark>** 

|7.5.4 Coolant Control – M07, M08, and M09|**_147_**|
|---|---|
|7.5.5 Override Control – M48, M49|**_147_**|
|7.5.6 Feed Override Control – M50|**_147_**|
|7.5.7 Spindle Speed Override Control – M51|**_148_**|
|7.5.8 Set Current Tool Number – M61|**_148_**|
|7.5.9 Set Output State – M64, M65|**_148_**|
|7.5.10 Wait on Input – M66|**_149_**|
|7.6 Other Input Codes|**_149_**|
|7.6.1 Feed Rate – F|**_149_**|
|7.6.2 Spindle Speed – S|**_149_**|
|7.6.3 Change Tool Number – T|**_150_**|
|7.7 Advanced Programming with Parameters and Expressions|**_150_**|
|7.7.1 Parameters|**_150_**|
|7.7.2 Parameter Types|**_152_**|
|7.7.2.1 Numbered Parameters|**_152_**|
|7.7.2.2 Subroutine Parameters|**_153_**|
|7.7.2.3 Named Parameters|**_154_**|
|7.7.3 Expressions|**_154_**|
|7.7.3.1 Binary Operators|**_155_**|
|7.7.3.2 Functions|**_156_**|
|7.8 Programming with Subroutines|**_156_**|
|7.8.1 Subroutine Labels and Subroutine Keywords|**_156_**|
|7.8.1.1 Defining a Subroutine|**_157_**|
|7.8.1.2 Calling a Subroutine|**_158_**|
|7.8.1.3 Conditional Subroutines|**_159_**|
|7.8.1.4 Repeating Subroutines|**_159_**|
|7.8.1.5 Looping Subroutines|**_160_**|



Chapter 1 

UM10349_PCNC1100_Manual_0520A 

16 

### **<mark>Preface</mark>** 

|8.**Accessories**|**_162_**|
|---|---|
|8.1 4th Axis Kits|**_162_**|
|8.1.1 Standard Rotary Table 4th Axis Kits|**_162_**|
|8.1.2 Tilting Rotary Table 4th Axis Kits|**_163_**|
|8.1.3 Super Spacer Rotary Table 4th Axis Kits|**_163_**|
|8.1.4 4th Axis Homing Kit|**_164_**|
|8.2 Enclosures, Stands, and Machine Arms|**_164_**|
|8.2.1 Full Enclosure Kits|**_164_**|
|8.2.2 Stands|**_165_**|
|8.2.3 Machine Arms|**_165_**|
|8.3 Tapping Options|**_165_**|
|8.4 Oil And Coolant System Options|**_166_**|
|8.4.1 Automatic Oiler|**_166_**|
|8.4.2 Spray Coolant|**_166_**|
|8.4.3 Chip Flap Kit|**_166_**|
|8.4.4 Coolant Hose and Accessories|**_167_**|
|8.4.5 Tramp Oil Pillow|**_167_**|
|8.5 Spindle Options|**_167_**|
|8.5.1 High Speed Spindle Options|**_167_**|
|8.5.1.1 Kress Companion Spindle Kit|**_168_**|
|8.5.1.2 Tormach Speeder|**_168_**|
|8.5.1.3 High-speed Spindle|**_168_**|
|8.5.2 Other Spindle Options|**_168_**|
|8.5.2.1 BT30 Spindle Cartridge|**_168_**|
|8.5.2.2  Spindle Load Meter|**_169_**|
|8.5.2.3LED Spindle Light|**_169_**|
|8.6 Power Drawbar and ATC|**_169_**|



UM10349_PCNC1100_Manual_0520A 

Chapter 1 

17 

### **<mark>Preface</mark>** 

|8.6.1 Power Drawbar|**_169_**|
|---|---|
|8.6.2 Automatic Tool Changer (ATC)|**_170_**|
|8.7 Auxiliary Electronic Options|**_170_**|
|8.7.1 External Contactor Kit|**_170_**|
|8.7.2 Switchable Convenience Outlet Kit|**_171_**|
|8.7.3 USB M-code I/O Interface Kit|**_171_**|
|8.7.4 Integrated Remote E-stop Kit|**_171_**|
|8.8 Controller Options|**_171_**|
|8.8.1 USB Bulkhead Port Assembly|**_171_**|
|8.9 Prototyping Accessories|**_172_**|
|8.9.1 Injection Molder|**_172_**|
|8.9.2 CNC Scanner|**_172_**|
|8.9.3 Probe|**_173_**|
|8.9.3.1 Probe/Tool Setter Polarity|**_173_**|
|8.9.3.2 Setting Probe/Tool Setter Polarity|**_174_**|
|8.9.3.3 Calibrating Probe Tip|**_174_**|
|8.9.3.4 Measuring Probe Tip Diameter|**_176_**|
|8.9.4 Tool Setter|**_176_**|
|8.9.4.1 Tool Setter Trigger Height|**_176_**|
|9.**Maintenance**|**_177_**|
|9.1 Regular Maintenance|**_177_**|
|9.1.1 Rust Prevention|**_178_**|
|9.1.2 Way Covers|**_178_**|
|9.1.3 Flood Coolant System|**_178_**|
|9.1.4 Lubrication System|**_179_**|
|9.1.4.1 Manual Pump Specifics|**_179_**|
|9.1.5 Drawbar and TTS Collet|**_180_**|



Chapter 1 

UM10349_PCNC1100_Manual_0520A 

18 

### **<mark>Preface</mark>** 

|9.2 Spindle Belt|**_180_**|
|---|---|
|9.3 Advanced Maintenance|**_181_**|
|9.3.1 Overview<br>ii|**_181_**|
|9.3.2 Definitions|**_181_**|
|9.3.2.1 How to Measure Lost Motion|**_182_**|
|9.3.3 Gib Adjustment|**_183_**|
|9.3.3.1 Overview|**_183_**|
|9.3.3.2 Adjustment Procedure|**_184_**|
|9.3.4 Angular Contact Bearing Preload Adjustment|**_185_**|
|9.3.4.1 Overview|**_185_**|
|9.3.4.2 Adjustment Procedure|**_187_**|
|9.3.4.3 Determining Proper Angular Contact Bearing Preload|**_187_**|
|9.3.5 Geometry Adjustment of Precision Mating Surfaces|**_188_**|
|9.4 Spindle Bearing Adjustment|**_189_**|
|9.5 Spindle Calibration|**_189_**|
|9.6 Mill Transportation|**_191_**|
|10.**Troubleshooting**|**_192_**|
|10.1 Troubleshooting Basics|**_192_**|
|10.2 Tips and Tools for Troubleshooting (equipment and procedures)|**_194_**|
|10.2.1 Safety|**_194_**|
|10.2.2 Tips on Controller Diagnostics|**_194_**|
|10.2.3 Troubleshooting Tools|**_194_**|
|10.2.4 Using Digital Multimeter for Electrical Tests|**_195_**|
|10.2.4.1 Measuring DC Voltage|**_195_**|
|10.2.4.2 Measuring AC Voltage|**_195_**|
|10.2.4.3 Measuring Resistance|**_195_**|
|10.2.5 Contacting Technical Support|**_195_**|
|10.3 Frequently Found Problems|**_196_**|



UM10349_PCNC1100_Manual_0520A 

Chapter 1 

19 

### **<mark>Preface</mark>** 

|10.3.1  Loose Wires|**_196_**|
|---|---|
|10.3.2 Wire Hairs|**_197_**|
|10.3.3 Poor Cable Connections|**_197_**|
|10.3.4 Sensors (Limit Switches)|**_197_**|
|10.3.5 Unexplained Stop or Limit Switch Error While Running|**_197_**|
|10.4 Electrical Maintenance|**_197_**|
|10.4.1 Electrical Service|**_197_**|
|10.5 System Troubleshooting|**_198_**|
|10.5.1 Power Distribution Subsystem|**_200_**|
|10.5.1.1 Overview|**_200_**|
|10.5.1.2 Details of Power Distribution Subsystem|**_204_**|
|10.5.2 Control Power Subsystem|**_205_**|
|10.5.2.1 Details of Control Power Subsystem|**_207_**|
|10.5.3 Controller Communication Subsystem|**_208_**|
|10.5.3.1 Overview|**_208_**|
|10.5.3.2 Details on Controller Communication Subsystem|**_208_**|
|10.5.4 Axes Drive Subsystem|**_210_**|
|10.5.4.1 Overview of Axis Drive Subsystem|**_210_**|
|10.5.4.2 Details of Axis Drive Subsystem|**_222_**|
|10.5.5 Spindle Drive Subsystem|**_226_**|
|10.5.5.1 Overview|**_226_**|
|11.**Diagrams and Parts List**|**_237_**|
|11.1 Upper Mill Assembly (exploded view)|**_237_**|
|11.2 Lower Mill Assembly (exploded view)|**_240_**|
|11.3 Electrical Cabinet|**_242_**|
|11.4 Connections|**_244_**|
|11.5 Stepper Connections|**_245_**|
|11.6 Operator Panel|**_246_**|



Chapter 1 

UM10349_PCNC1100_Manual_0520A 

20 

**<mark>Preface</mark>** 

|11.7 Ribbon Cable and Miscellaneous|**_247_**|
|---|---|
|11.8 Lubrication System|**_249_**|



UM10349_PCNC1100_Manual_0520A 

Chapter 1 

21 

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

### **<mark>Site Planning and Prep</mark>** 

#### **2. Site Planning and Prep** 

This section covers required site preparations prior to placing PCNC mill in service. 

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

###### **2.2.2 Plug Pattern** 

The PCNC 1100 is shipped with a 3-wire conductor; no electrical plug is included. There are several different NEMA (National Electric Manufacturers Association) and non-NEMA plug patterns that can be used. The PCNC 770 is shipped with a 5-20P plug. This plug is designed to be used with a 5-20R receptacle. 

Chapter 2 

UM10349_PCNC1100_Manual_0520A 

24 

**<mark>Site Planning and Prep</mark>** 

###### **2.2.3 Ground Fault Interrupter (GFI) Use** 

Primary power for PCNC mills should not be protected by a ground fault interrupter (GFI), as this interferes with the proper operation of the PCNC mill’s Variable Frequency Drive (VFD) spindle controller. A ground fault interrupter (GFI) is recommended for the secondary power supply to the PCNC 1100; PCNC 770 does not have a secondary power supply. 

###### **2.2.4 Electrical Noise** 

Both primary and secondary power should be provided by dedicated circuits. At the minimum, circuits should be isolated from electrically-noisy devices. In particular, high-inductive loads from vacuum cleaners, air compressors, etc., can be troublesome and the source of controller malfunction. 

At sites where this is not possible, a dual-conversion power supply should be considered for 115 VAC circuits. 

###### **2.2.5 Options for Electrically Non-conforming Sites** 

The following options can be considered for sites that do not conform to the electrical requirements detailed in this section. Consult with an electrician to determine suitability for the specific site. 

###### **2.2.5.1 Buck-Boost Transformer** 

While the PCNC 1100 will run on line voltages between 200-250 VAC, best performance is achieved with a minimum of 230 VAC. A Buck-Boost Transformer (PN 32554) is recommended for minor adjustments of stable line voltages below 230 VAC to ensure no reduction in spindle performance. 

###### **2.2.5.2 Step-up/Step-down Transformer** 

If needed, a Step-Up/Step-Down Transformer (PN 32009) can be used to reduce 230 VAC line voltage to 115 VAC, as required by the PCNC 770. This device is commonly used for PCNC 770 mills located outside of the USA and Canada. 

###### **2.2.5.3 Quick 220**<sup>**™**</sup> **Voltage Converter Power Supply** 

A Quick 220™ voltage converter can be used to convert voltages from two out-of-phase 115 VAC circuits to a single 230 VAC output. This option may be of interest to PCNC 1100 owners with sites that do not allow for 230 VAC service (PN 33972). 

UM10349_PCNC1100_Manual_0520A 

Chapter 2 

25 

### **<mark>Installation</mark>** 

#### **3. Installation** 

This chapter covers basic installation of a PCNC mill, which takes approximately half a day. This estimate does not include optional accessories like enclosures, power drawbars, or automatic tool changers (ATC). 

Scan the QR code (at right) to view a list of related technical documentation, operator manuals, and support videos: torma.ch/install 

###### **Recommended for Installation** 

   - 4 mm Hex Wrench (included) 

- Gloves 

- Eye Protection 

   - Pallet Jack 

   - Engine Hoist 

- Pry Bar 

   - Socket Set 

- Strap Snips 

   - Lifting Bar Kit 

- Screwdriver (included) 



###### **3.1 Receiving, Uncrating, and Initial Inspection** 

**_WARNING! Transport and Lift Hazard:_** _The transport, lifting, and moving of mill should be done by qualified professionals. Failure to do so may result in mill damage, serious injury or death._ 

###### **3.1.1 Shipment Arrival** 

Depending on products and options ordered, the PCNC system arrives in one or more shipments: 

- PCNC mill (freight) 

- Stand (freight) 

- Accessory shipment (freight or parcel service, depending on size) 

**_IMPORTANT!_** _Specific shipping information is displayed on packing list. Wait until all shipments are received before beginning installation._ 

###### **3.1.2 Moving the Crate** 

The PCNC mill is loaded on a standard pallet and can be off-loaded from a truck with a tailgate lift and moved (on smooth surfaces) using a hydraulic pallet jack to the installation location (see **Figure 3.1** ). 



**Figure 3.1** 

Chapter 3 

UM10349_PCNC1100_Manual_0520A 

26 

**<mark>Installation</mark>** 

###### **3.1.3 Initial Uncrating** 

**_CAUTION! Sharp Objects:_** _Be sure to wear gloves when uncrating mill. Failure to do so may result in serious injury._ 

Use strap snips and a small pry bar to open and disassemble shipping crate. Remove top of crate first, followed by four sides. **Figure 3.2** shows crate removed. 

###### **3.1.4 Shipping Damage or Shortages** 

Once received, inspect and note any shipping damage that may have occurred during transit. Also check received goods against packing list. Any damage claims or shortages must be addressed within 30 days of receipt. 

###### **3.2 Installation Sequence** 

If PCNC mill was purchased with additional accessories or optional kits, the following installation sequence is recommended: 

1. Basic installation (see _Basic Installation Procedure_ later in this chapter) 

2. Installation validation (see _Validate Basic Installation_ later in this chapter) 

3. 4th Axis 

4. Power Drawbar 

5. Automatic Tool Changer (ATC) 

6. Load Meter 

7. Full Enclosure 

**_NOTE:_** _For installation items 3-7 (see above), refer to product-specific instructions._ 

###### **3.3 Basic Installation Procedure** 

Follow the steps below to complete basic mill installation. 

###### **3.3.1 Partial Stand Assembly** 

The pedestal of the stand should be assembled first. Refer to documentation that ships with the stand for information on assembly. Do not install chip pans or backsplash until after mill has been lifted onto the stand. 



<!-- Start of picture text -->
Shipping<br>Block<br>Tool<br>Box<br><!-- End of picture text -->

**Figure 3.2** 

UM10349_PCNC1100_Manual_0520A 

Chapter 3 

27 

### **<mark>Installation</mark>** 

###### **3.3.2 Remove Tool Tray (PCNC 1100 only)** 

Carefully remove the Tool Tray from the pallet and set aside for installation later (see **Figure 3.7** ). 

###### **3.3.3 Remove Accessory Tool Box** 

A wooden Tool Box is nailed to the pallet (see **Figure 3.2** ). This box contains tools that are required for installation. Carefully remove box from pallet using pry bar. 

**_NOTE:_** _The Spindle Lockout Key – used to lock or unlock the spindle – is located in the Tool Box. The spindle with not rotate without the key inserted in the Operator Panel location shown in_ **_Figure 3.13_** _._ 

###### **3.3.4 Assembling Y-Axis (PCNC 1100 only)** 

The PCNC 1100 is supplied with the Y-axis Motor mechanically disconnected; install it before attempting to remove mill from pallet (see **Figures 3.3** and **3.4** ). 

**_IMPORTANT!_** _Damage to mill may occur if Y-axis Motor weight is supported by motor wires._ 

   1. Unstrap _Y-axis Motor_ from pallet (see **Figure 3.3** ). 

   2. Remove _Y-axis Motor Mount Cover Plate_ from _Y-axis Motor Mount_ (see **Figure 3.3** ). 

   3. Using 4 mm hex wrench (included), loosen two _Motor Shaft Coupling_ screws on end of _Ball Screw_ (see **Figure 3.4** ). 

4. Remove four cap head screws from _Y-axis Motor Mount_ (see **Figure 3.3** ). 

**_NOTE:_** _Remove any paint around motor mount that could cause misalignment._ 

   5. Use four cap head screws from step 4 to mount _Y-axis Motor_ onto _Y-axis Motor Mount_ . Wire loom should face toward floor (see **Figure 3.3** ). Make sure motor and motor mount faces are flush. 

   6. After tightening four cap head screws, back them off one-quarter turn so motor is free to self align. 



<!-- Start of picture text -->
Wire Loom<br>Y-axis<br>Motor<br>Y-axis Motor<br>Y-axis Motor Mount<br>Mount<br>Cover Plate<br><!-- End of picture text -->

**Figure 3.3** 



<!-- Start of picture text -->
Coupling  Ball Screw<br>Box<br>Motor Shaft<br>Coupling<br><!-- End of picture text -->

**Figure 3.4** 

Chapter 3 

UM10349_PCNC1100_Manual_0520A 

28 

**<mark>Installation</mark>** 

7. Ensure coupling is centrally positioned between motor shaft and machined end of _Ball Screw_ ; tighten cap screws on coupling. 

8. Tighten cap screws holding motor to motor mount securely. 

###### **3.3.5 Lift and Move Mill** 

**_WARNING! Transport and Lift Hazard:_** _The transport, lifting, and moving of PCNC mill should be done by qualified professionals. Failure to do so may result in mill damage, serious injury or death._ 

###### **3.3.5.1 Remove Mill from Pallet** 

The mill is secured to the shipping pallet with four bolts. Before attempting to lift mill, use wrench to remove nuts holding mill to pallet. This allows mill to be separated from shipping pallet when lifting. 

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

###### **3.3.5.4 Moving Kit (PCNC 770 Only)** 

The PCNC 770 can be temporarily disassembled using the Moving Kit (PN 31333). This allows the machine to be broken down into several smaller subcomponents. Refer to documentation that ships with Moving Kit for more information on use. 

**_WARNING! Crush Hazard:_** _Keep hands and body parts clear when lowering mill onto stand. Failure to do so could result in serious injury or death._ 

###### **3.3.5.5 Lowering Mill onto Stand** 

Position mill above stand and align one mill casting hole with one stand base hole; insert stud and thread into place. Repeat process for remaining three holes and loosely screw on four washers/nuts. 

When mill is completely supported by stand, remove lifting tackle and tighten nuts to approximately 10 ft-lbs of torque. 

###### **3.3.6 Install Tool Tray (PCNC 1100 only)** 

Install the cast iron Tool Tray using provided screws to attach it to left side of machine table (see **Figure 3.7** ). 

###### **3.3.7 Install Drip Tray** 

Unstrap stainless steel Drip Tray from pallet; use provided screws to install (see **Figure 3.8** ). 



<!-- Start of picture text -->
Tool<br>Tray<br><!-- End of picture text -->

**Figure 3.7** 



<!-- Start of picture text -->
Drip<br>Tray<br><!-- End of picture text -->

**Figure 3.8** 

Chapter 3 

UM10349_PCNC1100_Manual_0520A 

30 

**<mark>Installation</mark>** 

###### **3.3.8 Install PathPilot Controller** 

Review the connections on the front and rear of the PathPilot<sup>®</sup> controller as shown in **Figures 3.9** and **3.12** . When all the connections are complete, place controller in the controller compartment located on the right side of the stand. 

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

**<mark>Installation</mark>** 

Set up and connect the PathPilot controller as follows: 

1. Confirm Voltage Setting Switch (#15) is set to proper voltage for the geographic location before connecting power. Plug the power cord into the AC Power Connector (#17) on the PathPilot controller. 

2. Connect ferrite end of DB-25 interface cable to Mill Interface Port (#14). 

3. Plug controller, monitor, loose end of DB-25 interface cable (included), and secondary power cord (included with PCNC 1100 only) into _Power Connection Panel_ (see **Figure 3.10** and **Figure 3.11** ), located under the electrical cabinet. 

4. Connect monitor to either the DVI Connector (#7) or the VGA Connector (#8). 

5. Connect keyboard, optional jog shuttle, optional ATC, and optional USB I/O board to Blue USB Connectors (#11). 

6. Connect other USB devices to any USB Connectors (#2, #6, or #11); do not use wireless keyboard/mouse. 



<!-- Start of picture text -->
5<br>6<br>7<br>8<br>9 10<br>11<br>12<br>13<br>14<br>16<br>17<br>15<br>Figure 3.12<br><!-- End of picture text -->

Chapter 3 

UM10349_PCNC1100_Manual_0520A 

32 

**<mark>Installation</mark>** 

###### **3.4 Installation of Add-ons** 

###### **3.4.1 Stand** 

Attach the stand’s chip pans, backsplash, and stainless steel wear guard to complete stand assembly. Refer to documentation that ships with the stand for more information. 

- Stand for PCNC 1100 (PN 30297) • Stand for PCNC 770 (PN 31191) 

If planning on installing a full enclosure (optional), do not install the backsplash. Refer to documentation that ships with the stand for more information on assembly. 

- Full Enclosure for PCNC 1100 (PN 34427) • Full Enclosure for PCNC 770 (PN 34442) 

###### **3.4.2 Machine Arm** 

Use the provided bolts to attach the optional machine arm to the electrical cabinet or spindle column; use the provided screws to attach monitor to end of machine arm. Refer to documentation that ships with the machine arm for more information on installation. 

- Machine Arm for PCNC 1100 or PCNC 770 (PN 30286) 

- Machine Arm for PCNC 1100 or PCNC 770 with Full Enclosure (PN 34668) 

###### **3.4.2.1 Mouse, Keyboard, and Jog Shuttle** 

Carefully route the USB device cables inside the machine arm and into the controller compartment. 

- Mouse – included (PN 31372) 

- Jog Shuttle – optional (PN 30616) 

- Mini Keyboard – optional (PN 31371) 

- Cover for Mini Keyboard – optional (PN 31384) 

###### **3.4.3 USB Bulkhead Port** 

For installation instructions, refer to documentation that ships with the optional USB Bulkhead Port. 

- USB Bulkhead Port Assembly (PN 31289) 

###### **3.4.4 Manual or Automatic Oiler** 

Fill the reservoir with ISO VG68 grade Machine Oil (PN 31386). For more information on installation and use, refer to documentation that ships with the optional automatic oiler or refer to documentation that ships with the stand (manual oiler). 

To begin use of manual oiler, retract and release plunger until oil is pushed through system. After that, pull plunger each time mill is powered on and after every four hours of operation. Refer to chapter 9, _Maintenance_ , for more information on the lubrication system. 

###### **3.4.5 Coolant System** 

Fill the reservoir with pre-mixed coolant; refer to dilution instructions for coolant product. Refer to documentation that ships with stand and/or optional coolant system for more information on installation and use. 

UM10349_PCNC1100_Manual_0520A 

Chapter 3 

33 

### **<mark>Installation</mark>** 



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







###### **3.6.1 Initial PathPilot Controller Configuration** 

**_WARNING! Unattended Operation:_** _Machine is not designed to operate unattended. Do not leave machine unattended during operation. When machine is not in use, turn the main disconnect off. Failure to do so could result in death, serious injury, and/or machine damage._ 

Turn the _Main Disconnect_ switch to _On_ (see **Figure 3.13** ). Turn the operator panel-based _Controller_ switch, used to power the controller on and off, to the _On_ position (see **Figure 3.14** ). 

The first time the PathPilot controller is powered on it starts a configuration process that allows the operator to configure the PathPilot operating system to the particular machine (PCNC 1100 mill, PCNC 770 mill, PCNC 440 mill, or 15L Slant-PRO lathe). Follow the on-screen instructions to complete controller configuration. After configuration, PathPilot automatically launches; the controller automatically loads PathPilot for the selected machine when the controller is powered on in the future. 

###### **3.7 Validate Basic Installation** 

Validate the basic setup prior to installing any accessory kits. 

**_IMPORTANT!_** _Follow the Power Off/On Procedure detailed earlier in this chapter. After powering on, jog the Z-axis up to remove shipping block between spindle nose and bed._ 

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

### **<mark>Intro to PathPilot</mark>** 

#### **5. Intro to PathPilot** 

###### **5.1 Making Your First Part** 

This chapter outlines how to make your first part with a Tormach mill. It assumes that you have no prior experience running a part program on a CNC (computer numerically controlled) mill. Even if you have previous CNC experience, following this tutorial gives you an introduction to the controls of the mill. After reading this chapter, read chapters 6 and 7 for details on the PathPilot<sup>®</sup> operating system. This chapter is only intended to be an introduction to the PathPilot interface and several basic tasks. 



**Figure 5.1** 

The first part program uses two tools – a 3/8” end mill and a 1/8” end mill – to make a shallow circular pocket and engrave the text _PCNC_ in a wood 2” x 4” (see **Figure 5.1** ). Two tools are used to give you an introduction to tool changes and the difference between work offsets and tool length offsets. For operators with the optional automatic tool changer (ATC), we recommend using manual tool changes for this first part to keep things simple. 

###### **5.1.1 Reference the Mill** 

Follow the power off/on procedure in chapter 3, _Installation_ , to turn the PathPilot controller and mill on. After clicking the flashing _Reset_ button, you can reference the X-, Y-, and Z-axes. You should reference the Z-axis first to help avert a crash as it moves the tooling as far as possible from a workpiece or vise. All three axes can be referenced simultaneously by pressing the _Ref_ buttons in rapid succession (see **Figure 5.2** ). 

The axes should be referenced before operating the mill to establish soft limits to protect the mill from over travel and to give meaning to work offset values. After referencing the axes, the LEDs on the _Ref X, Ref Y,_ and _Ref Z_ buttons turn green, indicating that the mill has been referenced. While you can jog the mill before referencing, you should not run parts until the mill has been referenced. Should a home or limit switch fail to work, manually reference the mill as discussed in chapter 10, _Troubleshooting_ . 



**Figure 5.2** 

Chapter 5 

UM10349_PCNC1100_Manual_0520A 

48 

**<mark>Intro to PathPilot</mark>** 

E-stopping the mill de-references the axes; be sure to reference again after an E-stop. 

###### **5.1.2 Prepare the Workpiece** 

For this introduction to using the mill, use a scrap piece of wood as a workpiece; a 2” x 4” that is at least 4” long will suffice. Using a piece of wood minimizes the chance an end mill is damaged should you get a work or tool offset command wrong while using this tutorial. 

###### **5.1.3 Prepare the Tools** 

For this tutorial you will need a 3/8” diameter end mill to machine the shallow circular pocket and a 1/8” or smaller diameter end mill to engrave the text (see **Figure 5.3** ). You will also need a way to hold these tools. Tormach’s High Speed Steel End Mill Kit (PN 33465) includes both end mills. You can hold them using TTS3/8” Set Screw Holders (PN 31820) as shown, or using ER16 or ER20 collet chucks. The 3/8” end mill will be _Tool 1_ and the 1/8” end mill _Tool 2_ . 



<!-- Start of picture text -->
Tool 1<br>Tool 2<br><!-- End of picture text -->

**Figure 5.3** 

###### **5.1.4 Understand Mill Position, Work Offsets and Tool Offsets** 

###### **Work Offsets** 

Work offsets are a concept that allows the operator to think in terms of X/Y/Z coordinates with respect to the part, instead of thinking of them with respect to the mill position – work offsets allow you to assign an origin to any location within the work envelope. 

When referencing the mill, it moves to the limit switches and stops at its home position; this is (X, Y, Z) = (0, 0, 0) in mill coordinates – however, these coordinates are not useful to the operator or programmer who wants to think in terms of program coordinates. In this case, when you tell the mill to drill a hole one inch from the left hand side of your workpiece, you would rather use program coordinates (for example, X = 1.000”) than mill coordinates (for example, X = -6.5889”). 

By moving the mill to a location on your part (often the top face, center of your part or the top left hand rear corner) and zeroing the digital readouts (DRO), you define a relationship between the mill coordinates and the program coordinates. This general term for this relationship is work offsets. 

UM10349_PCNC1100_Manual_0520A 

Chapter 5 

49 

**<mark>Intro to PathPilot</mark>** 

###### **Tool Offsets** 

Tool offsets allow the operator to use tools of different length and (in the case of cutter radius compensation) different diameters. In the program you will create during this tutorial, you will use two different tools. Because it is extremely unlikely that these tools will be exactly the same length, the control needs to account for the difference in tool length when switching tools. 

If you measure your tools when you put them in TTS holders, then the PathPilot operating system allows you to switch tools quickly and without the need to do anything more when you run a program using them. Each tool and its holder only needs to be measured once, either offline or on the mill. 

Once a tool has been measured, the tool length offset must still be applied. Tool length offsets are not applied automatically – on virtually all CNC milling machines the tool length offset is applied with the G43 command. When running a G-code program, the G43 G-code command must be called out to apply a tool length offset – tool offsets will not be applied with just a tool change command. While operating manually, the _M6 G43_ button does this for you. The code you generate using the _Conversational_ screens later in this tutorial will include the G43 command in the appropriate place in the G-code. Use of cutter compensation (G41/42) is a more advanced topic which is covered in chapter 7, _Programming_ . 

###### **5.1.5 Set the Length Units** 

You can program your machine in either inches or in millimeters. The machine uses the defined setting until you program a different command (G20 or G21). The settings are also retained after a power cycle, once the machine is out of reset. 

###### **5.1.5.1 Programming in Inches** 

Depending on your workflow, do one of the following: 

- Type `G20` in the MDI line and press _Enter_ on your keyboard 

- Program `G20` in your G-code program 

###### **5.1.5.2 Programming in Millimeters** 

Depending on your workflow, do one of the following: 

- Type `G21` in the MDI line and press _Enter_ on your keyboard 

- Program `G21` in your G-code program 

Chapter 5 

UM10349_PCNC1100_Manual_0520A 

50 

**<mark>Intro to PathPilot</mark>** 

###### **5.1.6 Touch Off the Workiece to Set Work Offsets** 

There are many ways of conceptualizing tool and work offsets, but we use the idea of a true positive tool length to demonstrate this first part program. When using this method we will touch the face of the spindle to the top of the workpiece to set the work Z zero (see **Figure 5.4** ). If you set your work Z zero using the face of the empty spindle then touch your tools off to the same work zero, the tool length offsets are equal in value to the length of the tool. True positive tool length has a few benefits over other methods (e.g., relative tool lengths) of measuring tool offsets: 

- You can easily look at the tool length offset value and estimate whether it is correct for a given tool by checking that tool with a ruler or calipers. 

- You can mix tools that have been touched off on the mill with tools that have been measured using a digital height gauge. 



**Figure 5.4** 

- It is conceptually easier to understand than the alternatives. 

###### **5.1.6.1 Setting the Z Work Offset** 

1. If a tool is in the spindle, remove the tool from the spindle. 

2. Type 0 in the tool DRO and press the _M6 G43_ button to tell the PathPilot operating system that we are changing tools and applying a tool length offset. Tool zero represents an empty spindle, and there is no offset to apply. We press the _M6 G43_ button to make sure there is no tool length offset applied before we set the work offset (see **Figure 5.5** ). 

3. Place a piece of scrap 2” x 4” in vise. Make sure that the top of 2” x 4” is at least 1/4” above the top of the vise jaws. 



**Figure 5.5** 

UM10349_PCNC1100_Manual_0520A 

Chapter 5 

51 

### **<mark>Intro to PathPilot</mark>** 

4. Place a piece of paper on the 2” x 4” and jog the spindle down carefully until the spindle nose just makes contact with the top of the 2” x 4”. You will be able to feel when the paper is pinched (see **Figure 5.6** ). 

5. Press the _Zero Z_ button to set the work offset Z to zero. 

**_NOTE:_** _This is just like typing 0.0 into the Z DRO and pressing Enter. To account for the thickness of the paper used in touching off the work offset, you could type 0.003 in the Z DRO and press Enter._ 



**Figure 5.6** 

- **5.1.6.2 Setting the X and Y Work Offsets** 

- Common positions for the X and Y part zeros are: 

   - The back left of the workpiece 

   - The center of the workpiece 

   - A feature (i.e., a hole or a boss) that already exists on the workpiece 

For the first part tutorial, we will use the X/Y center of the workpiece as the zero point. To set the X and Y work offsets for this part: 

1. Using a straight edge, draw two lines on the 2” x 4” from corner to corner, creating an _X_ in the center of the workpiece. 

2. Put the tool holder with the 3/8” end mill in it into the spindle. 

3. Jog the mill so that the 3/8” end mill is approximately centered over the _X_ on the workpeice. 4. Click the _Zero X_ button next to the X DRO. 

5. Click the _Zero Y_ button next to the Y DRO. 

###### **5.1.7 Touch Off the Workpiece to Set Tool Length Offsets** 

This section assumes that you have already set the work offset _Z zero_ to the top surface of the part using the steps in _Setting Work Offset by Touching off Workpiece_ . The steps below describe an alternative to using the TTS height gauge. If you have the 8” Digital Height Gauge (PN 31761), it may be easier to measure the tools offline and enter their lengths directly into the tool table on the _Offsets_ tab. 

Chapter 5 

UM10349_PCNC1100_Manual_0520A 

52 

### **<mark>Intro to PathPilot</mark>** 

To touch off the tool offsets: 

1. The 3/8” tool used to set X and Y work offsets earlier in this chapter should still be in the spindle; this is _Tool 1_ . Type _1_ in the tool DRO and click the _M6 G43_ button to tell the mill that you have changed tools and want to apply the tool length offset. 

2. Jog the mill down so that the tool just touches the top of the 2” x 4” (see **Figure 5.7** ). 

3. On the _Offsets_ tab, enter _0.0_ in the _Touch DRO_ and click the _Touch Z_ button (see **Figure 5.8** ). If you were not touching on the top of the workpiece, but instead using a feeler gauge or piece of paper between the workpiece and the tool, you could enter the thickness of the gauge or paper in the _Touch DRO_ before clicking _Touch Z_ to account for the gauge thickness. 

4. Look at the length value in the tool table for _Tool 1_ . Verify that it is correct by measuring the length of the tool from the spindle nose to the tool tip with a ruler or calipers. 

5. Enter the diameter of the tool in the tool table (see **Figure 5.9** ) and press _Enter_ . 

**_NOTE:_** _Fractions entered in these entry fields are converted to their decimal equivalents._ 

6. Put the 1/8” end mill tool holder into the spindle. 

7. Type _2_ in the tool DRO and click the _M6 G43_ button (see **Figure 5.5** ). 

8. Repeat steps 3-6 to measure the tool length for _Tool 2_ . 



**Figure 5.7** 



**Figure 5.8** 



**Figure 5.9** 

UM10349_PCNC1100_Manual_0520A 

Chapter 5 

53 

### **<mark>Intro to PathPilot</mark>** 



**Figure 5.10** 

###### **5.1.8 Write the G-code** 

Now use Conversational programming capabilities of the PathPilot interface to generate G-code to produce our part. This is broken down into two operations: 

1. Mill a 0.100” deep, 3.25” diameter pocket in the face of the workpiece. 

2. Engrave the letters _PCNC_ in the pocket. 

###### **5.1.8.1 Operation 1** 

To write code for the first operation, click the _Conversational_ tab (see **Figure 5.10** ). The _Conversational_ screen is divided into two sections: parameters common to most operations are displayed on the left and operation-specific parameters (including part geometry) are displayed on the right. 

Click the _Pocket_ tab to bring up the pocketing screen. Click the _Rect/Circ_ button to bring up the circular pocket screen (see **Figure 5.10** ). Use this screen to generate code to create a shallow pocket (0.1000” deep and 3.250” in diameter). The conversational DRO fields should be self-explanatory and are covered in detail in chapter 6, _PathPilot Interface_ , but for now, enter the values seen in **Figure 5.10** . 

Make note of a few things: 

- Units are expressed according to the current G20/21 setting. If you are in G21 (metric), the feed rates will be in mm/min and the coordinates in mm. For the purposes of this tutorial, use imperial units (G20). You can check the current G20/21 setting by inspecting the string of active G-codes next to the word _Status_ at the bottom middle of the screen (see **Figure 5.12** ). 

- To enter values in a DRO, simply click the mouse inside the DRO and type a number, then click _Enter_ on the keyboard. Pressing _Enter_ in the conversational DROs is not required, but is recommended as the control will automatically move your cursor to the next DRO in the sequence and will perform validation to make sure you have not entered an illegal value. 

Chapter 5 

UM10349_PCNC1100_Manual_0520A 

54 

**<mark>Intro to PathPilot</mark>** 

- After the values from **Figure 5.10** are entered, click the _Post to File_ button to save the G-code. 

- When you click _Save_ , it also automatically loads into the control and displays the tool path (see **Figure 5.11** ). 

To run the program: 

1. Grab the _Maxvel_ slider (lower left hand corner of screen) by clicking on and drag it down to zero (see **Figure 5.11** ). 

**_NOTE:_** _If your mill is equipped with an ATC, setting Maxvel to zero stops all motion and will prevent the mill from changing tools._ 

2. Click _Cycle Start_ button (see **Figure 5.11** ). If the current tool is not _Tool 1_ and you have configured the mill for manual tool changes, the _Cycle Start_ button LED may blink requesting a tool change. Change the tool and confirm by clicking the _Cycle Start_ button again. If equipped with an ATC, tool changes happen automatically without operator interaction. 



**Figure 5.11** 

UM10349_PCNC1100_Manual_0520A 

Chapter 5 

55 

### **<mark>Intro to PathPilot</mark>** 

3. Grab _Maxvel_ slider again and slowly increase allowed velocity (see **Figure 5.11** ). Bring velocity back down to zero when you get close to the part and double check values in the DROs to make sure that tool position looks correct. For example, if tool is  1/4” above the workpiece, Z DRO should read 0.2500. If everything looks correct, move _Maxvel_ slider back up to resume part program. 

###### **5.1.8.2 Operation 2** 

Go back to the _Conversational_ screen and click on the _Engrave_ tab (see **Figure 5.10** ) and the Engrave screen opens (see **Figure 5.12)** . Enter the values shown in **Figure 5.12** , _Conversational DROs_ **.** Make sure to enter _PCNC_ in the text field. 



<!-- Start of picture text -->
Conversational DROs<br><!-- End of picture text -->

**Figure 5.12** 

1. Select the _FreeMonoOblique.ttf_ font (see **Figure 5.12** ) and change the _Tool_ DRO to _2_ for the engraving operation. 

2. Press the _Append to File_ button (see **Figure 5.12** ). A file chooser dialog opens that allows you to select the file to which you want to add the engraving G-code. 

Chapter 5 

UM10349_PCNC1100_Manual_0520A 

56 

**<mark>Intro to PathPilot</mark>** 



**Figure 5.13** 



**Figure 5.14** 

3. Click on the name of the file you created when you made the facing G-code, then click _Append to File_ (see **Figure 5.13** ). The changes to your file are loaded into the control, and you should see a tool path that looks something like **Figure 5.14** . 

4. Run the completed program using the method descibed in _Operation 1_ section earlier in this chapter. 

**_NOTE:_** _When you run this code, it will recut the pocket that you created in the first operation. If you wanted to, you could have posted this code to a separate file._ 

UM10349_PCNC1100_Manual_0520A 

Chapter 5 

57 

**<mark>PathPilot Interface</mark>** 

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

###### **6.4.3 Editing G-code** 

The _G-code File Preview_ window displays the contents of the selected .nc file (see **Figure 6.14** ). You can edit G-code in two ways on your PathPilot controller: 

- Using a text editor 

- Using the _Conversational_ tab to edit a file created in PathPilot's conversational programming **_NOTE:_** _For information, refer to Conversational Tab section later in this chapter._ 

###### **6.4.3.1 Editing G-code with a Text Editor** 

1. Highlight the file and click _Edit G-code_ (see **Figure 6.14** ). 

2. A text editor opens the file in a new window for editing the contents of the file. Make the appropriate changes to the file and click _Save_ . 

3. Click the _X_ in the upper right-hand corner of the screen to close the text editor. 

4. Click _OK_ when asked to re-load the file. 

###### **6.4.3.2 Editing G-code with Conversational Programming** 

1. From the _File_ tab, select the file and click _Conv. Edit_ (see **Figure 6.14** ). 

A job assignment editor opens the file in a new window. The left window displays job assignments of a program. The right window displays a preview of the program (see **Figure 6.15** ). 



**Figure 6.15** 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

71 

**<mark>PathPilot Interface</mark>** 

2. Edit the file contents as needed: 

   - To change the order in which the steps of the program occur: Click _Move Up_ , _Move Down_ , _Duplicate_ , or _Remove_ . 

   - To create a new job assignment using conversational programming: 

      - _i._ Click _Insert Step._ PathPilot creates the job assignment and opens the _Conversational_ tab. 

      - _ii._ Click _Insert_ . 

_iii._ If necessary, edit the job assignment order in the program. 

- To load an existing G-code file into the program: 

   - _i._ Click _Insert File_ . G-code files that are hand-written, or generated from CAM software or conversational programming in PathPilot, can be inserted. 

   - _ii._ Navigate to and select the _.nc_ file that you want to insert. 

_iii._ Click _Open_ . 

_iv._ If necessary, edit the job assignment order in the program. 

- To edit a job assignment that was created in conversational programming: 

   - _i._ Select the job assignment and click _Conv. Edit._ In the _Conversational_ tab, PathPilot opens the relevant tab. 

   - _ii._ Make the desired changes to the job assignment. 

_iii._ Click _Finish Editing_ . 

3. Click _Save._ 

The G-code program file is updated. 

###### **Tips** 

- To restore an edited job assignment to its original parameters: Click _Revert._ 

   - **_NOTE:_** _Revert_ is only available for individual job assignments created in conversational programming. 

- To undo all changes made to an entire G-code program: Click _Close._ When prompted, _Close Without Saving_ . 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

72 

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

###### **6.5.6 Enabling Feeds and Speeds Suggestions in Conversational Programming** 

Select _Conversational Feeds and Speeds_ to enable feeds and speeds suggestions in PathPilot when using conversational programming. For more information on use, refer to _Using Feeds and Speeds Suggestions_ later in this chapter. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

74 

### **<mark>PathPilot Interface</mark>** 

###### **6.5.7 Enabling Accessories** 

Use the _Settings_ tab to enable optional accessories that work with PathPilot. 

###### **6.5.7.1 4th Axis Homing** 

Select _4th Axis Homing_ if you are using an optional 4th Axis Homing Kit (PN 31921). For information on installation and use, refer to the documentation that ships with the product. 

###### **6.5.7.2 Enabling CNC Scanner** 

Select _CNC Scanner_ if you are using an optional CNC Scanner. The _Scanner_ tab displays. For information on installation and use, refer to the documentation that ships with the product. 

###### **6.5.7.3 Enabling Enclosure Door Switch** 

Select _Enclosure Door Switch_ if you are using an optional Enclosure Door Switch Kit (PN 35550). The installed enclosure door switch is activated, and, when the front doors are opened: 

- All axis motion stops 

- Spindle speed reduces to 1000 RPM 

For more information on installation and use, refer to the documentation that ships with the product. 

###### **6.5.7.4 Enabling Injection Molder** 

Select _Injection Molder_ if you are using an optional Injection Molder. The _Injection_ tab displays. For information on installation and use, refer to the documentation that ships with the product. 

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

###### **6.5.7.7 Enabling USB I/O Board** 

Select _Use USB IO Kit_ if you are using an optional USB M-code I/O Interface Kit (PN 32616). For information on installation and use, refer to the documentation that ships with the product. 

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

###### **6.7 Conversational Tab** 

The _Conversational_ tab provides an interface for programming at the controller. Use _Conversational_ to machine simple parts without the use of CAD/CAM. 

###### **6.7.1 Using Feeds and Speeds Suggestions** 

You can use PathPilot to automatically calculate feeds and speeds: from the _Conversational_ tab, in the _Conversational DROs_ group, select a material, a sub-type, and a tool (see **Figure 6.23** ). 



**Figure 6.23** 

To calculate feeds and speeds, you must first make sure PathPilot has relevant details about the tooling. For more information, go to the section _Creating Tool Descriptions_ earlier in this chapter. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

82 

### **<mark>PathPilot Interface</mark>** 

1. From the PathPilot interface, on the _Conversational_ tab, locate the _Material_ dropdowns in the _Conversational DROs_ group. 

2. From the _Material_ dropdown, select your material. Examples: 

   - Aluminum 

   - Plastic 

3. If required, from the _Sub-type_ dropdown, select the material sub-type. Examples: 

   - -any- 

   - 6061 

4. In the _Tool_ DRO, type the assigned tool number. 

5. Click _Refresh_ (to the right of the _Sub-type_ dropdown). 

The following machining-related DROs are calculated: 

- _Spindle RPM_ 

- _Feedrate_ 

- _Z Feedrate_ 

- _Depth of Cut_ (if milling) 

- _Stepover_ (if milling) 

- _Peck_ (if drilling) 

**_NOTE:_** _After PathPilot calculates values for the machining-related DROs, the background turns green (see_ **_Figure 6.23_** _)._ 

###### **6.7.1.1 Adjusting DRO Values** 

After selecting the material and tool, you can adjust the values in the calculated DROs, like _Feedrate_ or _Stepover_ . Adjusting the value in one of these DROs does not change the value in the other machiningrelated DROs. 

Once you adjust the value in the DRO, the background switches from green back to white (see **Figure 6.24** ). This helps you identify which DROs have suggested values (those with a green background), and which DROs have values you've supplied (white background). 



**Figure 6.24** 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

83 

**<mark>PathPilot Interface</mark>** 

###### **6.7.1.2 Refreshing DRO Values** 

The suggested feeds and speeds are no longer valid if: 

- You select different material or sub-type values, or if you type a new value in to the _Tool_ DRO. The suggested feeds and speeds are made by taking into account all of these values. Changing any value requires you to refresh. 

- You select a different _Conversational_ tab. 

The suggested feeds and speeds are made by taking into account the current, specific conversational operation — like Face, or Pocket. Changing your conversational operation requires you to refresh. 

When the feeds and speeds are no longer valid, the _Refresh_ button turns green, and the machining-related DRO backgrounds switch from green to white (see **Figure 6.25** ). 



**Figure 6.25** 

###### **6.7.1.3 Using Additional Provided Information** 

On the _Conversational_ tab, in the based on the calculations that PathPilot is performing (see 

_Conversational DROs_ group, there are tips that are displayed **Figure 6.26** ): 

- Chip load information 



Chip load — the amount of material removed per tooth — is based on the number of flutes, RPM, and feedrate. 

Chip thinning takes the stepover (the horizontal depth of cut into the workpiece) into account, and provides the actual chip load. 

As the stepover value decreases, the actual chip load decreases. If the stepover is too small, the cutter may not have enough contact with the material to cut — effectively resulting in pre-mature tool wear. 

**Figure 6.26** 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

84 

### **<mark>PathPilot Interface</mark>** 

- Cutting speed information 

Cutting speed is the speed that a given tooth (flute) on the cutter will be moving when it cuts through the material. All materials have a documented cutting speed. 

In imperial units, cutting speed is measured as surface feet per minute (SFM). 

In metric units, cutting speed is measured as surface meters per minute (SMM). 

- Material removal information 

The material removal rate (MRR) indicates how much material is removed by the tool per minute while cutting. 

In imperial units, cutting speed is measured as cubic inches per minute. 

In metric units, cutting speed is measured as cubic centimeters per minute. 

###### **6.7.2 Face Tab** 

_Face_ is generally used for cutting an accurate top surface from rough stock, cutting successive XY-planes over a Z range (see **Figure 6.27** ). 



**Figure 6.27** 

It is assumed that the top of the stock is free of any clamps or other work holding devices, such as when the stock is held in a vise. The start of each Z pass is intended to be off to the side of the workpiece then move in XY to start cutting at the _X Start, Y Start_ corner. This avoids the need for plunging the Z _Depth of Cut_ move into the workpiece. 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

85 

**<mark>PathPilot Interface</mark>** 

Therefore, the area around this corner must be clear of obstructions down to _Z End_ . The tool diameter also extends beyond the workpiece X and Y edges by an amount dependent on the tool diameter and the stepover values, so _Z End_ must be above the vise jaws. 

The G-code routine starts with a move to G30, which typically is the park, or tool change position. Next comes a tool change if needed, a rapid move in XY to the workpiece start, and a rapid down in Z to _Z Clear_ . An XY pass starts with an adjusted Z _Depth of Cut_ , then a rectangular spiral from the workpiece perimeter, ending at the center. If a finish pass with different parameters is needed, save the current file, edit the current screen to the finish configuration and append to the saved file. 

###### **XY DROs** 

**Start and End** – These DROs should be set to the location of the workpiece edges. Tool paths, such as a lead-in, that are normally outside of the workpiece area are set in reference to these values, so no adjusting beyond the actual location of these edges should be needed. 

**Stepover** – This is the space between spiral tool paths. To prevent uncut areas in the spiral corners, the stepover value should be limited to 80 percent of the tool diameter (see **Figure 6.28** ). A stepover of 0 may be entered which invokes a center only cut. This is more formally called by X or Y values that create a workpiece width less than 70 percent of the tool diameter. 



**Figure 6.28** 

###### **Z DROs** 

**Z Start and End** – The first Z pass will cut at _Z Start_ – _Depth of Cut_ adjusted. The last Z pass will cut at the _Z End_ location. For a single Z pass at Z End, enter 0 or a full Z range value into the Depth of Cut DRO. 

**Depth of Cut** – The _Depth of Cut_ entered into the DRO is later adjusted within the Z range, _Z End_ – _Z Start_ , so each Z pass has the same depth instead of having a short depth on the last pass. For a single pass at Z End enter 0 or a full Z range value into the _Depth of Cut_ DRO. 

**Z Clear** – This is the Z location the tool moves or retracts to when starting or ending a Z pass. This should be set to clear any obstructions in the path between the end of one Z pass and the beginning of the next. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

86 

### **<mark>PathPilot Interface</mark>** 



**Figure 6.29** 

###### **6.7.3 Profile Tab** 

_Profile_ cuts an XY area with successive Z _Depth of Cuts_ to form a rectangular island (see **Figure 6.29** ). 

The outer bound of the area is the stock material's outer edges. The inner bound is the island perimeter. For the cutting routine, the area is divided into four sections (north, east, south, and west). As with _Face_ , the starting position for cutting each section is off the workpiece with an X or Y feed into the workpiece, thus avoiding a Z plunge cut. Cutting paths are restricted to climb cutting, so the tool is retracted to _Z Clear_ at the end of each sweep of a section, with a rapid move to the beginning of the section for the next sweep. After each section is cut, the corner radii, if any, are cut with a tool path that travels around the perimeter of the island. This process is repeated for each Z _Depth of Cut_ pass. If a finish pass is needed, leave enough material, then append your finishing G-code (usually a single pass around the perimeter) to this file later. Feed rate on the radius cuts are adjusted to compensate for the difference between the tool control point rate (at the tool center) and the actual rate at the radius surface. 

###### **X and Y Start and End DROs** 

**Start and End** – These DROs should be set to the location of the workpiece edges. Tool paths outside of the workpiece area are set in reference to these values so no adjusting beyond the actual location of these edges should be needed. 

**Profile Start and End** – The tool radius is used to create the tool path, so these DROs should be set to the location of the profile outer edges. 

**Radius** – Enter _0_ if no corner radius is desired. Valid radii values are from _0_ to one half of the island’s narrow width (or limited to full radii on the long ends of the island). 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

87 

**<mark>PathPilot Interface</mark>** 

**Stepover** – This is the tool path offset between section sweeps. A stepover of 0 creates a single pass (or rectangular slot) around the perimeter (outside) of the boss. 

**Z Start and End** – The first Z pass cuts at Z Start – Depth of Cut adjusted. The last Z pass will cut at the Z End location. For a single Z pass at Z End, enter 0 or a full Z range value into the Depth of Cut DRO. 

**Depth of Cut** – The _Depth of Cut_ entered into the DRO is later adjusted to fit evenly within the Z range ( _Z End_ – _Z Start_ ), so each Z pass has the same depth instead of having a short depth on the last pass. For a single Z pass at Z End, enter 0 or a full Z range value into the _Depth of Cut_ DRO. 

**Z Clear** – Z location the tool moves or retracts to when starting or ending a Z pass, a section sweep, or a section change. This should be set to clear any obstructions between path changes. 



**Figure 6.30** 

###### **6.7.4 Pocket Tab** 

_Pocket_ cuts a rectangular or circular pocket (cavity). The rectangular pocket can have a corner radius specified, or otherwise the tool paths have sharp corners (see **Figure 6.30** ). 

###### **6.7.4.1 Rectangular** 

The general tool path pattern for Pocket-Rectangular depends on the size of the width (width being considered the smaller of X or Y widths) and length of the pocket relative to tool diameter. The pattern within each Z _Depth of Cut_ pass is repeated within the Z range ( _Z End_ – _Z Start_ ), but the entry and clearing patterns may be different. There are three sub-patterns: entry, clear (out material), and perimeter. 

If tool diameter is bigger than pocket width no G-code being produced, an error appears on the _Status_ tab. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

88 

### **<mark>PathPilot Interface</mark>** 

If the tool just fits within the pocket width and length, a straight Z plunge in the pocket center is used, therefore a center cutting end mill is needed. Next comes a single pass around the perimeter. This is repeated for each Z _Depth of Cut_ pass. 

If the tool just fits within the pocket width, but length is greater than 2x tool diameter, this allows a linear ramp entry which also does the material clearing. The linear ramp is limited to a Z slope of 2° or less (the angle is adjusted smaller to fit the slot length). A single perimeter cut is done next. 

If the pocket width and length are greater than 2x tool diameter, this allows a helical entry which cuts a hole of 2x tool diameter in the center of the pocket. Material clearing is done by squaring up the hole, then cutting wings to each side of the pocket length. Finally, a perimeter cut is done. 

###### **X and Y Start and End DROs** 

**Start and End** – These DROs should be set to the location of the pocket edges. 

**Radius** – Enter _0_ if no corner radius is desired. Valid radii values are from _0_ up to one half of the pocket’s narrow width (or limited to full radii on the long ends of the pocket). The actual corner radii must be larger than or equal to the tool’s radius, but _Pocket_ tolerates radius entries less than the tool radius – the tool path will just be a sharp corner. 

**Stepover** – This is the offset between adjacent tool paths. A stepover of 0 creates a single pass (or rectangular slot) around the perimeter (inside) of the pocket. 

###### **Z DROs** 

**Z Start and End** – The first Z pass will cut at _Z Start_ – _Depth of Cut_ adjusted. The last Z pass cuts at the _Z End_ location. For a single Z pass at Z End, enter 0 or a full Z range value into the Depth of Cut DRO. 

**Depth of Cut** – The _Depth of Cut_ entered into the DRO is later adjusted to fit evenly within the Z range ( _Z End_ – Z Start), so each Z pass has the same depth instead of having a short depth on the last pass. For a single Z pass at Z End, enter 0 or a full Z range value into the _Depth of Cut_ DRO. 

**Z Clear** – Z location the tool moves or retracts to when starting or ending the _Pocket_ routine. 

###### **6.7.4.2 Circular** 

Pocket-Circular has a different entry for cutting a circular pocket dependent on the pocket diameter and the tool diameter (see **Figure 6.31** ). 

- If the tool diameter is bigger than pocket diameter: 

   - This produces an error with no G-code being produced. 

- If the tool just fits within the pocket diameter: 

   - A straight Z plunge in the pocket center is used, therefore a center cutting end mill is needed. Next comes a single pass around the perimeter. This is repeated for each Z _Depth of Cut_ pass. 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

89 

**<mark>PathPilot Interface</mark>** 



**Figure 6.31** 

- If the pocket diameter is greater than 2x tool diameter: 

   - This allows a helical entry which cuts a hole of 2 x tool diameter in center of pocket. Material clearing is done with a spiral cut out to the pocket diameter, plus a cut around the perimeter. 

###### **XY DROs** 

**X and Y Center** – These DROs should be set to the location of the pocket center. 

**Pocket Dia.** – Enter the value of the pocket diameter. The tool radius is used to set the tool path diameter. 

**Stepover** – This is the tool path offset between each rotation of the spiral cut. A stepover of 0 creates a single pass (or circular slot) around the perimeter (inside) of the pocket. 

###### **Z DROs** 

**Z Start and End** – The first Z pass cuts at _Z Start_ – _Depth of Cut_ adjusted; last Z pass cuts at the _Z End_ location. For a single Z pass at Z End, enter 0 or a full Z range value into the Depth of Cut DRO. 

**Depth of Cut** – The _Depth of Cut_ entered into the DRO is later adjusted to fit evenly within the Z range ( _Z End_ – _Z Start_ ), so each Z pass has the same depth instead of having a short depth on the last pass. For a single Z pass at Z End, enter 0 or a full Z range value into the Depth of Cut DRO. 

**Z Clear** – Z location the tool moves or retracts to when starting or ending the Pocket routine. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

90 

### **<mark>PathPilot Interface</mark>** 



<!-- Start of picture text -->
Hole Location Table<br><!-- End of picture text -->

**Figure 6.32** 

###### **6.7.5 Drill/Tap Tab** 

_Drill/Tap_ provides a means to create a hole location list, then, based on DRO entries, configures an appropriate canned cycle G-code to create holes – either _Pattern_ or _Circular_ (see **Figure 6.32** ). 

The _Drill/Tap_ tab contains a separate, smaller notebook consisting of two tabs: _Pattern_ and _Circular_ . 

###### **Pattern DROs** 

**Hole Location Table** – This table should be used for making a list of X and Y locations for each hole using the same tool, Z, and common DRO entries (see **Figure 6.32** ). To create holes using different tools or other parameters, post the first group, clear the table, enter the next group of locations and other parameters, then append the new list to the existing posted file. 

Holes in a list are completed in order from top to bottom. You can rearrange the row order by using the _Raise_ and _Lower_ buttons. To move a row, first activate it by clicking anywhere on the desired row, which highlights it in blue, then select either _Raise_ or _Lower_ . To edit an X or Y cell, click on the desired row, then click the desired cell. An active cell shows up as a white box with a cursor marker (which looks like | ) on a blue row. If there is already a number in the selected cell, it is blocked in blue and is replaced with any number typed in. 

To edit an existing number, click on the number until a cursor appears. The _Clear All_ button clears all entries in the table. Leaving a cell checks the entry to see if it is a valid number. If not, the entry is erased and an error shows up in the _Status_ tab. Rows are checked when _Post to File_ is clicked. Any missing entries (an X without a Y, a Y without an X, or an empty row before the last row with an entry) stop the posting and insert the text “??” in the cells with missing entries. Fill in the missing entries, delete any “??” entries and _Lower_ any empty rows past the last row with an entry, then try posting again. 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

91 

### **<mark>PathPilot Interface</mark>** 



**Figure 6.33** 

The _Circular_ tab creates a specific hole pattern of evenly spaced holes around a circumference, also know as a bolt pattern (see **Figure 6.33** ). As with the _Pattern_ tab, all features and corresponding DROs, like _Spot_ and _Peck_ , are retained. 

###### **Circular DROs** 

**Number of Holes** – Specifies the number of holes in the pattern. This must be greater than zero. 

**Start Angle** – Specifies the angle from angle 0. Angle 0 is a base (horizontal) line from the center point going right (east) to the circumference. The angle from the base line can be either positive or negative, up to 90 degrees (or -90 degrees) and rotates the pattern either clockwise or counterclockwise. A negative angle produces a clockwise rotation; a positive angle produces a counterclockwise rotation. For example, to create a hex pattern with flats on the top and bottom, enter _0_ into the _Start Angle_ DRO. To create a hex pattern with flats on the left and right sides, enter _30_ (or _-30_ ) into the _Start Angle_ DRO. 

**Diameter** – The size of the circular pattern as defined by a line through the center point of each hole. **Center X, Center Y** – Defines the center point of the circular pattern. 

**Spot Tool #** – If this DRO contains a valid tool number when _Post To File_ is clicked, a spot drilling sequence using this tool number will occur prior to the drilling sequence. The _Feedrate_ , _Spindle RPM_ , and _Z Clear_ from the drilling sequence will be used for the spot drilling operation. The depth of cut for the spot drilling will be taken from the _Spot Drill DOC_ DRO. 

**Spot Tool DOC** – If the drilling operation includes spot drilling, this DRO will be used to determine the depth of cut for the spot drilling operation (for more information on defining a tool for a spot drilling operation, refer to _Spot Tool #_ earlier in this section). 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

92 

### **<mark>PathPilot Interface</mark>** 

###### **6.7.5.1 Drill** 

The _Drill_ tab uses one of the canned G8x cycles to drill a hole at each location called out in the Hole Location Table (see **Figure 6.32** ). The drill cycles available are: G81 – Drill, G82 – Drill with Dwell, and G83 – Drill with Peck (features can not be combined; peck cancels dwell). 

Since it is usually more convenient to touch-off a drill on its point, that configuration is presented in the graphics. Hole depth is usually defined as the full diameter portion of the hole, so the Z length from the drill point to the corner may need to be considered. 

**Dwell** – An entry greater than _0_ replaces G81 with G82 in the G-code, unless there is an entry greater than 0 in Peck. The G82 routine feeds at the Z Feedrate (a DRO in the left panel) until reaching the bottom of the hole, then the position is maintained during the period set by _Dwell_ . 

This is usually used to let the tool complete the cutting of the hole bottom before retracting. A revolution calculation is presented in the graphics to aid in setting an appropriate dwell value (such as half revolution for a two flute drill). 

**Peck** – An entry greater than 0 replaces G81 with G83 in the G-code. The G83 routine feeds at the Z Feedrate starting from _Z Clear_ down a Peck distance, then rapid retracts to _Z Clear_ , and rapid returns to start the next peck. The peck distance is not adjusted so the first and last peck will likely be shorter than the _Peck_ setting. 

###### **Z DROs** 

**Z Start and End** – G8x starts at the _Z Clear_ location and ends at _Z End_ location. 

**Z Clear** – This is the Z location the tool moves or retracts to at the start, end, and while pecking, as well as moving between holes, so it must clear any obstructions along the path between holes. 

###### **6.7.5.2 Tap** 

_Tap_ uses the G84 canned cycle which is similar to the G81 drill cycle, except a spindle reversal is commanded at the bottom of the hole (see **Figure 6.34** ). It is important that the _Z Feedrate_ matches the spindle RPM and tap pitch, so the rate is calculated from the pitch and RPM DRO entries. The result is displayed in the _Z Feedrate_ DRO (in the left panel) after the _Enter_ key is pressed in one of the _RPM_ , _Pitch_ , or _TPU_ DROs. Note that an auto-reversing tapping head typically uses a drilling cycle. 

**Dwell** – Allows for tapping with a tension/compression tapping head. A calculation is presented as a guide to how much the tapping head may need to extend while the Z-axis is stopped during spindle reversal at the bottom of the hole. Dwell travel is half the distance the tap would travel at the selected RPM. This assumes half the dwell time is on the down stroke and half up. It is also assumed the RPM is constant during the down stroke, but since the spindle is actually decelerating to a stop, the actual travel should be considerably less. 

**Pitch and Threads/Unit** – These DROs are linked; enter whichever value is handy. When the _Enter_ key is pressed, the corresponding DRO is calculated and updated. 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

93 

### **<mark>PathPilot Interface</mark>** 



**Figure 6.34** 

###### **Z DROs** 

**Z Start and End** – G84 starts at the _Z Clear_ location, reverses the spindle at the _Z End_ location, and ends back at the _Z Clear_ location. Note that the tap continues a little bit beyond _Z End_ during the dwell period. 

**Z Clear** – This is the Z location the tool moves or retracts to at the start and end of a hole, as well as moving between holes, so it must clear any obstructions along the path between holes. 

###### **6.7.6 Thread Mill Tab** 

The thread milling routine produces helical tool paths needed for milling straight external or internal right-handed threads based on pitch, diameter, and length (see **Figures 6.35** and **6.36** ). 

**Thread Table** – Contains values for some common threads. The threads listed follow the current unit setting (inch or millimeter). Once a selection is made, the data from the selected thread is copied to the appropriate DROs. This table is stored in user-editable text files found in the _thread_data_ subdirectory of the G-code folder on the controller's hard drive; to edit (e.g., to add to or modify the defaults), highlight the file and click _Edit G-code_ . For more information on files stored on the controller's hard drive, refer to _File Tab_ section earlier in this chapter. 

**_NOTE:_** _The values entered in these tables assume a full form thread tool. If using a fine point threading tool to cut coarse threads, the root diameter must be modified to account for the smaller tool nose radius of the fine point threading tool._ 

###### **XY DROs** 

**X and Y** – These DROs locate the center of the threaded stud or hole. 

**Major and Minor Diameter** – Sets the start and end diameter of the thread peak and valley. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

94 

**<mark>PathPilot Interface</mark>** 



**Figure 6.35** 



**Figure 6.36** 

**Depth of Cut** – Sets the amount of material cut in each helical pass. The value entered is the distance (change in radius) the tool is fed on the first pass. This first pass cuts a triangular area which is related to the chip load. Subsequent cut depths are set to cut the same amount of area, so the linear feed gets smaller for each pass. The tool is also fed in on a compound angle of 30°, keeping the cuts to one face of the tool. The number of passes that fit in a thread depth is calculated and presented in the _Number of Passes_ DRO. 

**Number of Passes** – This DRO value is either calculated from the _Depth of Cut_ value or can be entered here, which invokes (upon pressing the _Enter_ key) a calculation and entry to the _Depth of Cut_ DRO. 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

95 

**<mark>PathPilot Interface</mark>** 

###### **Z DROs** 

**Z Start and End** – Sets the location of the thread start and end. The tool will actually go beyond _Z End_ due to the cutting tip width and the Z component of the compound feed angle and thread depth. 

**Z Clear** – This is the Z location the tool moves or retracts to when starting or ending a Z pass. This should be set to clear any obstructions in the path between the end of one Z pass and the beginning of the next. 

**Threads/Unit and Pitch** – Pitch is used to set the helix feed in Z per turn. An entry in one of these DROs will invoke a calculation and entry into the other, so enter whichever type of setting that is handy. 

###### **6.7.7 Engrave Tab** 

The _Engrave_ tab (see **Figure 6.37** ) contains functions to engrave a single line of text cut in a single horizontal pass (along the X-axis). This is a basic text engraving routine best suited for engraving True Type stick or outline fonts into things like simple plaques, control panels, or data plates. 

Fonts describe paths of the tool control point; therefore, the tool’s effective cutting diameter may need to be considered for overall character size. 

Serial numbers – a number that sequentially increases with each Cycle Start – can be engraved alone or added to the end of any desired text. Serial numbers use their own non-proportional font and are scaled to match the defined font extents. For more information on adding serial numbers to an engraving routine, refer to _SN Start_ later in this section. 

**X and Y Start** – Sets the location of the left side of the first character’s baseline. If any characters in the text have descenders, such as _y_ or _g_ , they extend down below the baseline. The tool’s effective cutting diameter may cut an area before or beyond the start location (see **Figure 6.38** ). 



**Figure 6.37** 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

96 

### **<mark>PathPilot Interface</mark>** 

**Height** – Sets the Y distance from bottom to top of text. This includes ascenders and descenders, but not the tool cutting diameter (subtract this diameter from the overall desired height to get a more accurate value to enter). Height is used with the font data to calculate a scale value that is applied to the character paths in the G-code. The actual height may vary and need adjustment. 

**Text DRO** – Is the text to be engraved. A sample of the text in the selected font is updated when the _Enter_ key is pressed. 

**SN Start** – Sets a starting serial number. Add zeros in front of the first digit as a hint to the number of decimals to be engraved in the series (including leading zeros). For example, if '0012' is entered, '0012,' '0013,' '0014,' '…' will be engraved. If '99' is entered, '99,' '100,' '101,' '…' will be engraved. The current serial number is stored internally; to view, hover over the _SN Start_ DRO. 

**_NOTE:_** _Leave the Text DRO blank to only engrave a set of sequential serial numbers; likewise, leave SN Start blank to only engrave a line of text. It is an error if both the Text DRO and SN Start are blank._ 

**Font** – Lists the True Type font files found in the font directory. Scroll through and click on the desired font; clicking presents a sample in the _Text_ DRO. Some font files do not render in this box, but may be viewed by posting the file and checking the font in the _Main_ tab’s preview window (see **Figure 6.38** ). True Type font files may be added to the _Font_ list by transferring font files to the _gcode/engraving_ fonts_ sub-directory in the controller's home directory (for more information, refer to _File Tab_ section earlier in this chapter). Power the controller off and back on to refresh new files in the _Font_ list. 



**Figure 6.38** 

Chapter 6 

UM10349_PCNC1100_Manual_0520A 

97 

**<mark>PathPilot Interface</mark>** 

###### **Z DROs** 

**Z Start** – Sets the location of the surface to engrave. 

**Depth of Cut** – Is the depth the cutter is fed into the workpiece. 

**Z Clear** – This is the Z location the tool moves or retracts to at the start and end of the engraving routine, and when moving between characters. 

###### **6.7.8 DXF Tab** 

You can import a .dxf file (Drawing Exchange Format) into PathPilot to generate G-code, which can then cut the shape (or shapes) described in the .dxf file. For example, you could use this feature to engrave logos or artwork. 

1. Click the _File_ DRO. 

The _File Selector_ dialog box opens. 

2. Select the .dxf file, and then click _Open_ . 

The shapes from the selected file are loaded into the _Preview_ window in the _DXF_ tab. 

**_NOTE:_** _The .dxf file must already be transferred to the PathPilot controller._ 

3. Set the offsets: In the _X Offset_ DRO and the _Y Offset_ DRO, type the offset value added in the XY direction from the bottom left corner of the .dxf drawing. 

4. In the _Scale_ DRO, type the scale factor for the drawing. The value typed in the _Scale_ DRO is used as a multiplier for the .dxf dimensions. 

**_NOTE:_** _The scale factor is applied to the entire drawing. For example, if you type_ 1.0 _in the_ Scale _DRO, the .dxf is scaled at 100 percent. If you type_ 2.0 _in the_ Scale _DRO, the .dxf is scaled at 200 percent._ 

5. In the _Rotate_ DRO, type the rotation angle in degrees. 

The rotation angle is applied around the Z-axis of the drawing’s origin. 

   6. Select the cutter compensation to be applied to the tool path: Click one of the following radio buttons: 

      - _On_ : the tool moves along the path. 

      - _Outside / Right_ : offsets the tool path right of the drawing path, seen from the direction where the tool enters the path. 

      - _Inside / Left_ : is the opposite of _Outside / Right_ . 

- **6.7.8.1 Working with Layers and Shapes** 

The .dxf file contains shapes grouped into layers. 

In the _Shape Selection_ tree view window, you can enable or disable individual layers and complete layers. You can select shapes either from the tree view window or in the _Preview_ window. 

UM10349_PCNC1100_Manual_0520A 

Chapter 6 

98 

### **<mark>PathPilot Interface</mark>** 

###### **To Change the Layer or Shape Cut Order** 

To change the shape order, use the _Up Arrow_ and _Down Arrow_ buttons above the shape selection tree view window. Shapes or layers higher in the tree view window are cut earlier than those below it. 

The order in which the shapes are cut matches the order of the enabled shapes in the tree view window and the cyan path in the _Preview_ window. 

If a layer is selected, the whole layer is moved up or down. Shapes can’t be moved between layers. 

###### **To Adjust the Tree View Window** 

Use the _Fold_ and _Unfold_ buttons to collapse and expand the layer and shape tree in the tree view window. 

###### **6.7.8.2 Working in the Preview Window** 

The _Preview_ window uses the following colors: 

- Selected paths are **cyan** 

- Disabled paths are **gray** 

- The drawing path is **white** 

- The cut path is **magenta** 

- The tool path between cuts is a **dark cyan stippled line** 

- The coordinates are identified as follows: 

   - The X-axis is **red** 

   - The Y-axis is **green** 

   - The Z-axis is **blue** 

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

**<mark>Programming</mark>** 

#### **7. Programming** 

This chapter defines the languages (G-codes, etc.) that are understood and interpreted by the PathPilot<sup>®</sup> operating system, and is intended for reference purposes. If you want to learn about the principles of the control language so you can write programs by hand from first principles, consult an introductory textbook on G-code programming. 

###### **7.1 Definitions** 

The following terms are defined as follows: 

###### **PathPilot** 

This is the Tormach motion controller. 

###### **PathPilot Operating System (OS)** 

This is the PathPilot controller operating system. 

###### **Coordinate System** 

A coordinate system identifies the position of geometric features like points, lines, etc., in space. The default coordinate system in PathPilot is a standard right-hand coordinate system. This coordinate system is also known as a Cartesian coordinate system. 

###### **Linear Axes** 

The X-, Y- and Z-axes are the orthogonal lines that define a Cartesian Coordinate System. Position is measured in the active unit length specified by G20 (inches) or G21 (millimeters). 

###### **Origin** 

An origin is the location in a coordinate system where the position of each axis is equal to zero (X0 Y0 Z0). Each coordinate system can have only one origin. 

###### **Active Plane** 

There is always an active plane, which must be the XY-plane, the YZ-plane or the XZ-plane of the machining system. The Z-axis is perpendicular to the XY-plane, the X-axis to the YZ-plane and the Y-axis to the XZ-plane. Changing the active plane changes the interpretation of certain G-codes. 

###### **Units** 

The length units used to describe a position along the X-, Y- and Z-axes may be measured in either inches (G20 mode) or millimeters (G21 mode). Units for all other quantities involved in mill control cannot be changed. Different quantities use different specific units. Spindle speed is measured in revolutions per minute; rotational axes positions are measured in degrees; feed rates are expressed in current length units per minute, or in degrees per minute, as described above. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

103 

**<mark>Programming</mark>** 

###### **Rotational Axis** 

The A-axis is a rotational axis. In general, the axis of rotation can be collinear to a primary linear axis, or arbitrary. In usual practice, the axis of rotation of the A-axis is typically collinear to the X-axis. Position is measured in degrees. It is treated as a wrapped linear axis, meaning that the angular position increases without limit (goes toward plus infinity) as the axis turns counterclockwise and decreases without limit (goes toward minus infinity) as the axis turns clockwise. The direction of positive rotation is counterclockwise when viewed from the positive end of the corresponding X-, Y- or Z-axis. 

###### **Controlled Point** 

The controlled point is the point whose position and rate of motion are controlled. In practical application, this point is located somewhere along the spindle axis (Z-axis). The location of the controlled point can be moved out along the spindle axis by specifying some positive value for the tool length offset. This value is normally the length of the cutting tool in use, so that the controlled point is effectively located at the bottom center of the cutting tool. 

###### **Work Envelope** 

The work envelope is defined by the space that can be reached by the controlled point. 

###### **Current Position** 

The controlled point is always at a location called the current position and the operating system always knows where that is. Moving the controlled point changes the current location. The current position is defined by the values displayed on the digital readouts (DRO). 

The current position can also be changed without any actual movement of the controlled point if any of several events take place: 

- Length unit mode (G20/G21) is changed 

- Tool length offset is changed 

- Work offset is changed 

Each of these events can change the values displayed in the DROs. 

###### **Coordinated Linear Motion** 

Coordinated linear motion describes a situation in which, nominally, each linear axis (X-, Y-, or Z-axis) moves at a constant speed and all axes move from their starting positions to their end positions at the same time. This produces motion in a straight line. Coordinated linear motion can be performed either at the prevailing feed rate or at rapid traverse rate. If physical limits on axis speed make the desired rate unobtainable, all axes are slowed to maintain the desired path. 

In actual motion, it is often not possible to maintain constant speed because acceleration or deceleration is required at the beginning and/or end of the motion. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

104 

**<mark>Programming</mark>** 

It is possible, however, to control the axes so that, at all times, each axis has completed the same fraction of its required motion (as the other axes) and the tool maintains a straight line motion. 

###### **Arc and Helical Motion** 

Any pair of the linear axes (XY, YZ, and XZ) can be controlled to move in a circular arc in the plane of that pair of axes. While this is occurring, the third linear axis and/or the rotational axes can be controlled to move simultaneously at a constant rate. As in coordinated linear motion, these motions can be coordinated so that acceleration and deceleration do not affect the path. If the third linear axis moves simultaneously with arc motion, the trajectory of the controlled point forms a helix. 

###### **Feed Rate** 

The feed rate is the nominally steady rate at which the controlled point moves. Feed rates are programmed by the operator. The interpretation of the feed rate is detailed in the table below. 

|**Motion**|**Feed Rate**|
|---|---|
|Coordinated linear motion of one or more axis (X-, Y-, or<br>Z-axis)|Inches per minute (G20 mode) or<br>millimeters per minute (G21 mode)|
|Rotational axis motion of one axis (A-axis)|Degrees per minute|
|Coordinated linear motion of one or more axis (X-, Y-, or|This type of motion is usually programmed|
|Z-axis) with simultaneous rotational axis motion (A-axis)|in inverse time feed rate mode (G93)|



###### **Dwell** 

Commanding a dwell pauses the motion of the axes for a specific amount of time. The units in which you specify dwell are seconds; a decimal value is used to get less than one second. 

###### **Work Offsets** 

Work offsets allow you assign an origin to any location within the work envelope. 

Up to nine different work offsets can be saved in the mill memory, but only one can be active at any given time. The default work offset is G54. The position of each work offset origin is stored in the Work Offset Table. 

###### **Tool Number** 

The tool number is used to identify a tool in a program. Each tool used in the program must have a unique tool number between 1 and 256. 

###### **Tool Table** 

The tool table stores the tool diameter value and tool length offset value associated with each tool number. The diameter value is used for cutter radius compensation. The tool length offset value is used to adjust the position of the controlled point for differences in the lengths among tools. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

105 

**<mark>Programming</mark>** 

###### **Feed and Speed Override Controls** 

The operating system has commands which enable (M48) or disable (M49) the feed and speed override slider controls. It is useful to be able to override these for some machining operations. Default settings in the program are set and the operator should not change them. 

###### **7.2 G-code Programming Language** 

**_IMPORTANT!_** _Do not use a word processor to create or edit G-code files. A word processor leaves unseen codes that cause problems and may prevent a G-code file from working. Use a text editor like Gedit or Notepad++ to create or edit files._ 

###### **7.2.1 Overview** 

The programming language of the mill is known as G-code. A G-code program is composed of one or more lines of code. Each line (called a block) may include commands to the machining system to do several different things. Blocks may be collected in a file to make a program. 

A typical block consists of an optional line number at the beginning followed by one or more words. A word consists of a letter followed by a number (or strictly speaking, something that evaluates to a number). A word may either give a command or provide an argument to a command. For example, G01 X3 is a valid line of code with two words. G01 is a command meaning move in a straight line at the programmed feed rate, and X3 provides an argument value (the value of X should be 3 at the end of the move). Most commands start with either G (general) or M (miscellaneous). The words for these commands are called G-codes and M-codes. 

The language has two commands (M02 or M30), execution of either of which ends a program. A program may end before the end of a file. Lines of a file that occur after the end of a program are not to be executed in the normal flow, so generally they’re parts of subroutines. 

###### **7.2.2 Block** 

A block (or equivalently line) of code is a section of programming language elements that are grouped together into a single statement. A program consists of one or more blocks, each separated by a line break. Blocks in a program are executed sequentially from top to bottom or until an end command (M02 or M30) is encountered. 

###### **7.2.3 Real Value** 

A real value may be an explicit number (such as 341 or -0.8807), a parameter value, an expression or a unary operation value. Definitions of these follow in the _Word Initial Letters_ table. 

###### **7.2.4 Number** 

Numbers are a subset of real values. Processing a real value to come up with a number is called evaluating. An explicit number evaluates to itself. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

106 

**<mark>Programming</mark>** 

The following rules are used for explicit numbers. In these rules a digit is a single character between 0 and 9. 

- A number consists of the following, in order: (1) an optional plus or minus sign, followed by (2) zero to many digits, followed, possibly, by (3) one decimal point, followed by (4) zero to many digits. 

- There must be at least one digit somewhere in the number. 

- There are two kinds of numbers: integers and decimals. An integer does not have a decimal point in it; a decimal does. 

- Numbers may have any number of digits, subject to line length limitations. PathPilot only retains 17 significant figures. This is enough for all known applications. 

- A non-zero number with no sign as the first character is assumed to be positive. 

Initial zeros (before the decimal point and the first non-zero digit) and trailing zeros (after the decimal point and the last non-zero digit) are allowed but not required. A number written with initial or trailing zeros has the same value when it is read as if the extra zeros were not there. 

Numbers used for specific purposes by the operating system are often restricted to some finite set of values or some to some range of values. In many uses, decimal numbers must be close enough to an integer to be accepted as input. A decimal number which is supposed to be close to an integer is considered close enough if it is within 0.0001 of an integer. 

###### **7.2.5 Formatting G-code Blocks** 

A permissible block of input code consists of the following programming elements, in order, with the restriction that there is a maximum (currently 256) to the number of characters allowed on a line: 

- Optional block delete character (/) 

- Optional line number 

- Any number of words, parameter settings, and comments 

- End of line marker (carriage return or line break) 

Any input not explicitly allowed is illegal and causes the interpreter to signal an error or to ignore the line. 

Programs are limited to 999,999 lines of code. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

107 

**<mark>Programming</mark>** 

Spaces and tabs are allowed anywhere on a line of code and do not change the meaning of the line, except inside comments. For example, the line: 

```
G00 x +0. 12 34y 7
```

is equivalent to: 

```
G00 x+0.1234 y7
```

Blank lines are allowed in the input, but are ignored. 

Input is not case sensitive, except in comments, therefore any letter outside a comment may be in uppercase or lowercase without changing the meaning of a line. 

###### **Block Delete Character** 

The operating system omits blocks of code that are prefixed with the forward slash symbol (/). 

###### **Line Number** 

A line number is indicated by the letter N followed by an integer (with no sign) between 0 and 99,999,999 and written without commas. 

Line numbers may be repeated or used out of order, although normal practice is to avoid such usage. A line number is not required and often omitted. 

###### **Word** 

A word is a letter other than N or O followed by a real value. Words may begin with any of the letters shown in the table below. The table includes N and O for completeness, even though, as defined above, line numbers are not words. Several letters (I, J, K, L, P and R) may have different meanings in different contexts. 

||**Word Initial Leters**|
|---|---|
|**Letter**|**Meaning**|
|A|A-axis of mill|
|B|B-axis of mill|
|C|C-axis of mill|
|D|Tool radius compensation number|
|F|Feed rate|
|G|General function|
|H|Tool length offset index|
|I|X-axis offset for arcs<br>X offset in G87 canned cycle|
|J|Y-axis offset for arcs<br>Y offset in G87 canned cycle|



(continued on next page...) 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

108 

**<mark>Programming</mark>** 

###### **Word Initial Leters (...continued)** 

|**Letter**|**Meaning**|
|---|---|
|K|Z-axis offset for arcs<br>Z offset in G87 canned cycle|
|L|Number of repetitions in canned cycles/subroutines<br>Keyused with G10|
|M|Miscellaneous function|
|N|Line number|
|O|Subroutine label number|
|P|Dwell time in canned cycles<br>Dwell time with G04<br>Key used with G10<br>Tappingdepth in M871 – M874|
|Q|Feed increment in G83 canned cycle<br>Repetitions of subroutine call|
|R|Arc radius<br>Canned cycle retract level|
|S|Spindle speed|
|T|Tool selection|
|U|Synonymous with A|
|V|Synonymous with B|
|W|Synonymous with C|
|X|X-axis of mill|
|Y|Y-axis of mill|
|Z|Z-axis of mill|



###### **Parameter** 

Parameter programming is a special subset of the part programming language. For more details on the use of parameters, see _Advanced Programming with Parameters and Expressions_ later in this chapter. 

###### **Comments and Messages** 

To help clarify the intention of the programmer, you can add comments to lines of G-code. Comments can be embedded in a line using parentheses ( ) or for the remainder of a line using a semicolon. The semicolon is not treated as the start of a comment when enclosed in parentheses. 

Comments may appear between words, but not between words and their corresponding parameter. So: 

> `S100(set speed)F200(feed)is OK while` 

> `S(speed)100F(feed) is not.` 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

109 

### **<mark>Programming</mark>** 

If the comment occurs on a line with `M00` or `M01` and contains a file name with a .jpg or .png extension, PathPilot displays the image in the tool path window when it reaches a programmed M00 or M01 break. 

1. Move an image file with a .jpg or .png extension to your PathPilot controller in one of the following locations: 

   - In the same folder as the G-code program file 

   - In a folder called images within the G-code program file’s folder 

   - In a folder called images within the home directory 

2. Program an `M00` or `M01` break. 

3. Using parentheses ( ), embed a comment within the line of G-code. 

4. Type the file name of the image within the comment. 

**_NOTE:_** _Ensure the file name has either a .jpg or .png extension._ 

###### **Example:** 

```
M01 (photo_of_my_setup.jpg)
```

###### **Display a Message - (MSG)** 

(MSG, …) - displays a message if MSG appears after the left parenthesis and before any other printing characters. Variants of MSG which include white space and lowercase characters are allowed. The rest of the characters before the right parenthesis are considered to be a message. Messages are displayed on the _Status_ screen. 

###### **Example:** 

(MSG, your message here) prints _your message here_ to the _Status_ screen. 

###### **7.2.6 Optional Program Stop Control – (M01 BREAK)** 

The optional program stop control (M01 BREAK) works as follows. If M01 break is on (indicated by an illuminated LED on the _M01 Break_ button on the PathPilot interface) and a line in the G-code program contains an `M01` code, program execution is stopped when the M01 line is reached. To resume the program from the M01 line, click _Cycle Start_ . 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

110 

**<mark>Programming</mark>** 

###### **7.2.7 Additional G-code Formatting Notes** 

###### **7.2.7.1 Repeated Items** 

A line may have any number of G words, but two G words from the same modal group may not appear on the same line. For more information, see _Modal Groups_ later in this chapter. 

A line may have zero to four M words. Two M words from the same modal group may not appear on the same line. 

For all other legal letters, a line may have only one word beginning with that letter. 

If a parameter setting of the same parameter is repeated on a line, #3=15 #3=6, for example, only the last setting takes effect. It is illogical but not illegal to set the same parameter twice on the same line. 

###### **7.2.7.2 Order of Execution** 

The order of items on a line does not determine the order of execution on the commands. For more information, see table _Order of Execution_ later in this chapter. 

The three types of items whose order may vary on a line (as given at the beginning of this section) are word, parameter setting, and comment. Imagine that these three types of items are divided into three groups by type. 

The first group (the words) may be reordered in any way without changing the meaning of the line which is as defined above. 

If the second group (the parameter settings) is reordered, there is no change in the meaning of the line unless the same parameter is set more than once. In this case, only the last setting of the parameter takes effect. For example, after the line: 

- `#3=15 #3=6` 

has been interpreted, the value of parameter 3 is 6. If the order is reversed to 

- `#3=6 #3=15` 

and the line is interpreted, the value of parameter 3 is 15. 

If the third group (the comments) contains more than one comment and is reordered, only the last comment is used. If each group is kept in order or reordered without changing the meaning of the line, then the three groups may be interleaved in any way without changing the meaning of the line. 

For example, the line: 

```
G40 G01 #3=15 (foo) #4=-7.0
```

has five items and means exactly the same thing in any of the 120 possible orders, such as `#4=7.0 G01 #3=15 G40 (foo)` , for the five items. The order of execution of items on a line is critical to safe and effective mill operation. If items occur on the same line, they are executed in a particular order. For more information, see _Order of Execution_ table later in this chapter. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

111 

### **<mark>Programming</mark>** 

To impose a different order (e.g. to turn coolant off before the spindle is stopped), code the commands on separate blocks. 

**Order of Execution** 

|**Order**|**Item**|
|---|---|
|1|Comment(includingmessage)|
|2|Set feed rate mode(G93, G94, G95)|
|3|Set feed rate(F)|
|4|Set spindle speed(S)|
|5|Special I/O(M62 to M68)– currentlynot supported|
|6|Change tool(T)|
|7|Spindle on/off(M03, M04, M05)|
|8|Save State(M70, M73, restore state(M72), invalidate state(M71)|
|9|Coolant on/off(M07, M08, M09)|
|10|Enable/disable overrides(M48, M49, M50, M51, M52, M53)|
|11|Operator defined commands(M100 to M199)|
|12|Dwell(G04)|
|13|Set activeplane(G17, G18, G19)|
|14|Set length units(G20, G21)|
|15|Cutter radius compensation on/off(G40, G41, G42)|
|16|Tool table offset on/off(G43, G49)|
|17|Fixture table select(G54 – G58 and G59 P~)|
|19|Setpath control mode(G61, G61.1, G64)|
|19|Set distance mode(G90, G91)|
|20|Set canned cycle return level mode(G98, G99)|
|21|Home, change coordinate system data(G10)or set offsets(G92, G94)|
|22|Perform motion(G00 to G03, G12, G13, G80 to G89 as modified byG53)|
|23|Stop (M00, M01, M02, M30, M60)|



###### **7.2.7.3 Error Handling** 

This section describes error handling in PathPilot. This operating system sometimes ignores things it does not understand. If a command does not work as expected or does nothing, check it was typed correctly. The operating system does not check for excessively high machining feeds or speeds. Nor does it detect situations where a legal command does something unfortunate, such as machining a fixture. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

112 

**<mark>Programming</mark>** 

###### **7.2.7.4 Modality and Modal Commands** 

G-codes and M-codes are, generally speaking, modal. Modal commands cause the machining system to change from one mode to another. The mode stays active until another command changes it implicitly or explicitly. For example, if coolant is turned on (M07 or M08) it stays on until it is explicitly turned off in the program (M09). A few G-codes and M-codes are non-modal. These codes have effect only on the lines on which they occur. For example, dwell (G04) is non-modal. 

###### **7.2.7.5 Modal Groups** 

Modal commands are arranged in sets called modal groups, and only one member of a modal group may be in force at any given time. In general, a modal group contains commands for which it is logically impossible for two members to be in effect at the same time – for example inch units (G20) vs. millimeter units (G21).  A machining system may be in many modes at the same time, with one mode from each modal group being in effect. 

###### **Modal Groups for G-codes** 

|Group 1 =|{G00, G01, G02, G03, G33, G38.x, G73, G76, G80, G81, G82, G84, G85, G86, G87, G88, G89}<br>motion|
|---|---|
|Group2 =|{G17, G18, G19, G17.1, G17.2, G17.3} plane selection|
|Group3 =|{G90,G91}distance mode|
|Group4 =|{G90.1,G91.1}arc IJK distance mode|
|Group5 =|{G93,G94}feed rate mode|
|Group6 =|{G20,G21}units|
|Group7 =|{G40,G41,G42,G41.1,G42.1}cutter radius compensation|
|Group8 =|{G43,G43.1,G49}tool length offset|
|Group10 =|{G98,G99}return mode in canned cycles|
|Group12 =|{G54,G55,G56,G57,G58,G59,G59.1,G59.2,G59.3}coordinate system selection|
|Group13 =|{G61,G61.1,G64} path control mode|
|Group14 =|{G96,G97}spindle speed mode|
|Group15 =|{G07,G08}lathe diameter mode|



###### **Modal Groups for M-codes** 

|Group4 =|{M00, M01, M02, M30, M60}stopping|
|---|---|
|Group7 =|{M03,M04,M05}spindle turning|
|Group8 =|{M07,M08,M09}coolant(special case: M07 and M08 maybe active at the same time)|
|Group9 =|{M48,M49}enable/disable feed and speed override controls<br>i|
|Group10 =|{operator defined M100 to M199}|



|||**Non-modal G-codes**|
|---|---|---|
|Group 0 =|{G04, G10, G28, G30, G53,|G92, G92.1, G92.2, G92.3}|



UM10349_PCNC1100_Manual_0520A 

Chapter 7 

113 

**<mark>Programming</mark>** 

###### **7.2.7.6 Default Modes** 

For all G-code modal groups, when a machining system is ready to accept commands, one member of the modal group must be in effect. There are default settings for these modal groups. When the machining system is turned on or re-initialized, default values are automatically in effect. 

Group 1, the first group on the table is a group of G-codes for motion. One of these is always in effect. That one is called the current motion mode. 

###### **7.3 G-codes** 

The supported G-codes are shown and described in more detail in this section. The descriptions contain command examples set in `Courier` type font. 

||**Summary of G-codes**|
|---|---|
|G00|Rapidpositioning|
|G01|Linear interpolation|
|G02|Clockwise circular interpolation|
|G03|Counter-clockwise circular interpolation|
|G04|Dwell|
|G07,G08|Diameter/radius mode – Do not use G08|
|G10 L1|Set tool table entry|
|G10 L10|Set tool table – calculated – workpiece|
|G10L11|Set tool table – calculated – fixture|
|G10 L2|Set work offset origin|
|G10 L20|Set work offset origin – calculated|
|G17,G18,G19|Plane selection|
|G20/G21|Inch/millimeter unit|
|G28|Return home|
|G28.1|Reference axes|
|G30|Return home|
|G33|Spindle sync. motion(e.g. threading)|
|G33.1|Rigid tapping|
|G40|Cancel cutter radius compensation|
|G41/G42|Start cutter radius compensation left/right|
|G41.1,G42.1|Dynamic_Cutter Compensation_|
|G43|Applytool length offset|
|G49|Cancel tool length offset|
|G53|Move in absolute machine coordinate system<br>i|
|G54|Use fixture offset 1|
|G55<br>i|Use fixture offset 2<br>i|



(continued on next page...) 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

114 

**<mark>Programming</mark>** 

||**Summary of G-codes**<br>**(...continued)**|
|---|---|
|G56-58|Use fixture offset 3,4,5|
|G59|Use fixture offset 6 / usegeneral fixture number|
|G61/G61.1|Path control mode|
|G64|Path control with optional tolerance|
|G73|Canned cycle –peck drilling|
|G76|Multi-pass threadingcycle|
|G80|Cancel motion mode(includingcanned cycles)|
|G81|Canned cycle – drilling|
|G82|Canned cycle – drillingwith dwell|
|G83|Canned cycle –peck drilling|
|G85|Canned cycle – boring,no dwell,feed out|
|G86|Canned cycle – boring,spindle stop,rapid out|
|G88|Canned cycle – boring,spindle stop,manual out|
|G89|Canned cycle – boring,dwell,feed out|
|G90,G90.1|Absolute distance mode|
|G91,G91.1|Incremental distance mode|
|G92|Offset coordinates and setparameters|
|G92.x|Cancel G92 etc.|
|G93,G94,G95|Feed modes|
|G96,G97|CSS,RPM modes|
|G98|Initial level return / R-point level after canned cycles|



In the command examples, the tilde symbol (~) stands for a real value. If L~ is written in an example, the ~ is often referred to as the L number. Similarly the ~ in H~ may be called the H number, and so on for any other letter. As described in detail elsewhere, a real value may be one of the following: 

- An explicit number. For example: `4.4` 

- An expression. For example: `[2+2.4]` 

- A parameter value, For example: `#88` 

- A unary function value. For example: `acos[0]` 

Many commands require axis words (X~,Y~,Z~, or A~) as an argument. Unless explicitly stated otherwise, the following assumptions can be made: 

- Axis words specify a destination point 

- Axis words relate to the currently active coordinate system, unless explicitly described as being in the absolute coordinate system 

- Where axis words are optional, any omitted axes retain their current value 

Any items in the command examples not explicitly described as optional are required. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

115 

**<mark>Programming</mark>** 

###### **7.3.1 Rapid Linear Motion – G00** 

For rapid linear motion, program: `G00 X~ Y~ Z~ A~` 

|**Word**|**Definition**|
|---|---|
|X~|**i**<br>X-axis coordinate|
|Y~|Y-axis coordinate|
|Z~|Z-axis coordinate|
|A~|A-axis coordinate|



This produces coordinated linear motion to the destination point at the current traverse rate (or slower if the mill does not go that fast). It is expected that cutting won’t take place when a G00 command is executing. It is an error if all axis words are omitted. The axis words are optional, except that at least one must be used. The G00 is optional if the current motion mode is G00. 

If cutter radius compensation is active, the motion differs from the above; see _Cutter Compensation_ later in this chapter. If G53 is programmed on the same line, the motion also differs; see _Absolute Coordinates_ later in this chapter. Depending on where the tool is located, there are two basic rules to follow: If the Z value represents a cutting move in the positive direction (i.e. out of a hole), the X axis should be moved last. If the Z value represents a move in the negative direction, the X-axis should be executed first. It is an error if: 

- All axis words are omitted 

- G10, G28, G30 or G92 appear in the same block 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

116 

**<mark>Programming</mark>** 

###### **7.3.2 Linear Motion at Feed Rate – G01** 

For linear motion at feed rate (for cutting or not), program: `G01 X~ Y~ Z~ A~ F~` 

|**Word**|**Definition**|
|---|---|
|X~|**i**<br>X-axis coordinate|
|Y~|Y-axis coordinate|
|Z~|Z-axis coordinate|
|A~|A-axis coordinate|
|F~|Feed rate|



This produces coordinated linear motion to the destination point at the current feed rate (or slower if the mill won’t go that fast). 

The axis words are optional, except that at least one must be used. The G01 is optional if the current motion mode is G01. If cutter radius compensation is active, the motion differs from the above; see _Cutter Compensation_ later in this chapter. If G53 is programmed on the same line, the motion also differs; see _Absolute Coordinates_ later in this chapter. 

It is an error if: 

- All axis words are omitted 

- G10, G28, G30 or G92 appear in the same block 

- No F word is specified 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

117 

**<mark>Programming</mark>** 

###### **7.3.3 Arc at Feed Rate – G02, G03** 

A circular or helical arc is specified using either G02 (clockwise arc) or G03 (counterclockwise arc) as shown in **Figure 7.1** and **Figure 7.2** . The axis of the circle or helix must be parallel to the X-, Y- or Z-axis of the mill coordinate system. The axis (or equivalently, the plane perpendicular to the axis) is selected with G17 (Z-axis, XY-plane), G18 (Y-axis, XZ-plane) or G19 (X-axis, YZ-plane). If the arc is circular, it lies in a plane parallel to the selected plane. 

If a line of code makes an arc and includes rotational axis motion, the rotational axes turn at a constant rate so that the rotational motion starts and finishes when the XYZ motion starts and finishes. Lines of this sort are hardly ever programmed. 

If cutter radius compensation is active, the motion will differ from the above; see _Cutter Compensation_ later in this chapter. 

Two formats are allowed for specifying an arc: the center format and the radius format. In both formats the G02 or G03 is optional if it is the current motion mode. 

###### **7.3.3.1 Radius Format Arc** 

For an arc in radius format, program: `G02 X~ Y~ Z~ A~ R~` (for a clockwise arc) or `G03 X~ Y~ Z~ A~ R~` (for a counterclockwise arc). 

|**Word**|**Definition**|
|---|---|
|X~|X-axis coordinate|
|Y~|Y-axis coordinate|
|Z~|Z-axis coordinate|
|A~|A-axis coordinate|
|R~|Radius of arc|





<!-- Start of picture text -->
Y<br>3<br>2<br>1<br>X<br>1 2 3<br>Center Center<br><!-- End of picture text -->

**Figure 7.1** 



<!-- Start of picture text -->
Y<br>3<br>Center Center<br>2<br>1<br>X<br>1 2 3<br><!-- End of picture text -->

**Figure 7.2** 

In radius format, the coordinates of the end point of the arc in the selected plane are specified along with the radius of the arc. R is the radius. The axis words are all optional except that at least one of the two words for the axes in the selected plane must be used. The R number is the radius. A positive radius indicates that the arc turns through 180 degrees or less, while a negative radius indicates a turn of 180 degrees to 359.999 degrees. 

If the arc is helical, the value of the end point of the arc on the coordinate axis parallel to the axis of the helix is also specified. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

118 

**<mark>Programming</mark>** 

It is an error if: 

- Both of the axis words for the axes of the selected plane are omitted 

- No R word is given 

- End point of the arc is the same as the current point 

- G10, G28, G30 or G92 appear in the same block 

It is not good practice to program radius format arcs that are nearly full circles or are semicircles (or nearly semicircles) because a small change in the location of the end point produces a much larger change in the location of the center of the circle (and, hence, the middle of the arc). The magnification effect is large enough that rounding error in a number can produce out-of-tolerance cuts. Nearly full circles are outrageously bad, semicircles (and nearly so) are only very bad. Other size arcs (in the range tiny to 165 degrees or 195 to 345 degrees) are OK. 

Here is an example of a radius format command to mill an arc: 

```
G17 G02 X 1.0 Y 1.5 R 2.0 Z 0.5
```

That means to make a clockwise (as viewed from the positive Z-axis) circular or helical arc whose axis is parallel to the Z-axis, ending where X=1.0, Y=1.5 and Z=0.5, with a radius of 2.0. If the starting value of Z is 0.5, this is an arc of a circle parallel to the XY-plane; otherwise it is a helical arc. 

###### **7.3.3.2 Center Format Arc** 

For an arc in center format, program: `G02 X~ Y~ Z~ I~ J~` (for a clockwise arc) or `G03 X~ Y~ Z~ I~ J~` (for a counterclockwise arc). 

|**Word**|**Definition**|
|---|---|
|X~|X-axis coordinate|
|Y~|Y-axis coordinate|
|Z~|Z-axis coordinate|
|A~|A-axis coordinate|
|I~|Center of arc(X coordinate)|
|J~|Center of arc(Y coordinate)|
|K~|Center of arc(Z coordinate)|



In the center format, the coordinates of the end point of the arc in the selected plane are specified along with the offsets of the center of the arc from the current location. In this format, it is OK if the end point of the arc is the same as the current point. 

The center is specified using the two I , J, K words associated with the active plane. These specify the center relative to the current point at the start of the arc, defined in incremental coordinates from the start point. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

119 

### **<mark>Programming</mark>** 

It is an error if: 

- When the arc is projected on the selected plane, the distance from the current point to the center differs from the distance from the end point to the center by more than 0.0002 inches (if inches are being used) or 0.002 millimeters (if millimeters are being used) 

- G10, G28, G30 or G92 appear in the same block 

###### **Arc in XY Plane** 

When the XY-plane is selected, program: `G02 X~ Y~ Z~ A~ I~ J~` (or use G03 instead of G02). The axis words are all optional except that at least one of X and Y must be used. I and J are the offsets from the current location or coordinates – depending on arc distance mode (G90.1/G91.1) of the center of the circle (X and Y directions, respectively). I and J are optional except that at least one of the two must be used. 

It is an error if: 

- X and Y are both omitted 

- I and J are both omitted 

###### **Arc in XZ Plane** 

When the XZ-plane is selected, program: `G02 X~ Y~ Z~ A~ I~ K~` (or use G03 instead of G02). The axis words are all optional except that at least one of X and Z must be used. I and K are the offsets from the current location or coordinates – depending on arc distance mode (G90.1/G91.1) of the center of the circle (X and Z directions, respectively). I and K are optional except that at least one of the two must be used. 

It is an error if: 

- X and Z are both omitted 

- I and K are both omitted 

###### **Arc in YZ Plane** 

When the YZ-plane is selected, program: `G02 X~ Y~ Z~ A~ J~ K~` (or use G03 instead of G02). The axis words are all optional except that at least one of Y and Z must be used. J and K are the offsets from the current location or coordinates – depending on depending on arc distance mode (G90.1/G91.1) of the center of the circle (Y and Z directions, respectively). J and K are optional except that at least one of the two must be used. 

It is an error if: 

- Y and Z are both omitted 

- J and K are both omitted 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

120 

**<mark>Programming</mark>** 

Here is an example of a center format command to mill an arc in incremental arc distance mode (G91.1): 

```
G17 G02 X1.0 Y1.6 I0.3 J0.4 Z0.9
```

That means to make a clockwise (as viewed from the positive Z-axis) circular or helical arc whose axis is parallel to the Z-axis, ending where X=1.0, Y=1.6 and Z=0.9, with its center offset in the X direction by 0.3 units from the current X location and offset in the Y direction by 0.4 units from the current Y location. If the current location has X=0.7, Y=0.7 at the outset, the center is at X=1.0, Y=1.1. If the starting value of Z is 0.9, this is a circular arc; otherwise it is a helical arc. The radius of this arc would be 0.5. 

In the center format, the radius of the arc is not specified, but it may be found easily as the distance from the center of the circle to either the current point or the end point of the arc. 

```
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
N35 G02 X2 Y2 I1 J0 F20 (ARC FEED CW, RADIUS I1,J0 AT 20 IPM)
N40 G01 X3.5
N45 G02 X3 Y0.5 R2 (ARC FEED CW, RADIUS 2)
N50 X1 Y1 R2 (ARC FEED CW, RADIUS 2)
N55 G00 Z0.1
N60 X2 Y1.5
N65 G01 Z-0.25
N70 G02 X2 Y1.5 I0.25 J-0.25 (FULL CIRCLE ARC FEED MOVE CW)
N75 G00 Z1
N80 X0 Y0
N85 M05
N90 M30
```

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

121 

### **<mark>Programming</mark>** 

###### **7.3.4 Dwell – G04** 

For a dwell, program: `G04 P~` 

|**Word**|**Definition**|
|---|---|
|P~|**i**<br>Dwell time(measured in seconds)|



Dwell keeps the axes unmoving for the period of time in seconds specified by the P number. 

**Example:** `G04 P4.2 (to wait 4.2 seconds)` 

It is an error if: 

- The P number is negative 

###### **7.3.5 Set Offsets – G10** 

Use the buttons and DROs on the _Offsets_ screen to set offsets; they can be set programmatically via the G10 G-code command. 

###### **7.3.5.1 Set Tool Table – G10 L1** 

To define an entry in the tool table, program: `G10 L1 P~ X~ Y~ R~ I~ J~ Q~` 

|**Word**|**Definition**|
|---|---|
|P~|**i**<br>Tool number|
|R~|Radius of tool|



G10 L1 sets the tool table for the P tool number to the values of the words. 

A valid G10 L1 rewrites and reloads the tool table. 

**Example:** `G10 L1 P2 R0.015 Q3` (setting tool 2 radius to 0.015 and orientation to 3). It is an error if: 

- _Cutter Compensation_ is on 

- The P number is unspecified 

- The P number is not a valid tool number from the tool table 

- The P number is 0 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

122 

**<mark>Programming</mark>** 

###### **7.3.5.2 Set Coordinate System – G10 L2** 

To define the origin of a work offset coordinate system, program: `G10 L2 P-` 

|**Word**|**Definition**|
|---|---|
|P~|**i**<br>Number of coordinate system to use(G54 = 1,G59.3 = 9)|



###### **Important Concepts:** 

The G10 L2 PN command does not change from the current coordinate system to the one specified by P, use G54-59.3 to select a coordinate system. 

If a G92 origin offset was in effect before G10 L2, it continues to be in effect afterwards. 

The coordinate system whose origin is set by a G10 command may be active or inactive at the time the G10 is executed. If it is currently active, the new coordinates take effect immediately. 

It is an error if: 

- The P number does not evaluate to an integer in the range 0 to 9 

- An axis other than X or Z is programmed 

###### **7.3.5.3 Set Tool Table – G10 L10** 

To change the tool table entry for tool P so that if the tool offset is reloaded, with the mill in its current position and with the current G5x and G92 offsets active, program: `G10 L10 P- Z~ R~ I~ J~ Q~` 

|**Word**|**Definition**|
|---|---|
|P~|**i**<br>Tool number|
|R~|Radius of tool|



The current coordinates for the given axes become the given values. The axes that are not specified in the G10 L10 command are not changed. This could be useful with a probe move as described in the G38 section. 

It is an error if: 

- _Cutter Compensation_ is on 

- The P number is unspecified 

- The P number is not a valid tool number from the tool table 

- The P number is 0 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

123 

### **<mark>Programming</mark>** 

###### **7.3.5.4 Set Tool Table – G10 L11** 

G10 L11 is just like G10 L10 except that instead of setting the entry according to the current offsets, it is set so that the current coordinates would become the given value if the new tool offset is reloaded and the mill is placed in the G59.3 coordinate system without any G92 offset active. This allows the operator to set the G59.3 coordinate system according to a fixed point on the mill, and then use that fixture to measure tools without regard to other currently active offsets. 

Program: `G10 L11 P~ X~ Z~ R~ I~ J~ Q~` 

|**Word**|**Definition**|
|---|---|
|P~|**i**<br>Tool number|
|R~|Radius of tool|



It is an error if: 

- _Cutter Compensation_ is on 

- The P number is unspecified 

- The P number is not a valid tool number from the tool table 

- The P number is 0 

###### **7.3.5.5 Set Coordinate System – G10 L20** 

G10 L20 is similar to G10 L2 except that instead of setting the offset/entry to the given value, it is set to a calculated value that makes the current coordinates become the given value. 

Program: `G10 L20 P~ X~ Y~ Z~ A~` 

|**Word**|**Definition**|
|---|---|
|P~|**i**<br>Number of coordinate system to use(G54 = 1,G59.3 = 9)|
|X~|X-axis coordinate|
|Y~|Y-axis coordinate|
|Z~|Z-axis coordinate|
|A~|A-axis coordinate|



It is an error if: 

- The P number does not evaluate to an integer in the range 0 to 9 

- An axis other than X or Z is programmed 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

124 

### **<mark>Programming</mark>** 

###### **7.3.6 Plane Selection – G17, G18, and G19** 

To select the XY-plane as active, program: `G17` (see **Figure 7.3** ). 

To select the XZ-plane as active, program: `G18` (see **Figure 7.4** ) 

To select the YZ-plane as active, program: `G19` 

The active plane determines how the  tool path of an arc (G02 or G03) or canned cycle (G73, G81-G89) is interpreted. 



**Figure 7.3** 

###### **7.3.7 Length Units – G20, G21** 

To set length units to inches, program: `G20` 

To set length units to millimeters, program: `G21` 

It is best practice to program either G20 or G21 near the beginning of a program, before any motion occurs. Also, avoid using either one anywhere else in the program. It is the responsibility of the operator to make sure all numbers are appropriate for use with the current length units. 



**Figure 7.4** 

###### **7.3.8 Return to Pre-defined Position – G28, G28.1** 

To make a rapid linear move to the G28.1 position, program: `G28` 

To make a rapid linear move to the G28.1 position by first going to the intermediate position specified by the X~, Y~, and Z~ words, program: `G28 X~Y~Z~` 

To store the current location of the tool in the G28.1 setting, program: `G28.1` 

G28 uses the values stored in parameters 5161, 5162, and 5163 as the X,Y,and Z final points to move to. The parameter values are absolute mill coordinates in the native machine units of inches. 

G28.1 stores the current absolute position into parameters 5161-5163. 

It is an error if: 

- _Cutter Compensation_ is turned on 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

125 

### **<mark>Programming</mark>** 

###### **7.3.9 Return to Pre-defined Position – G30, G30.1** 

G30 uses the values stored in parameters 5181 and 5183 as the X and Z final point to move to. The parameter values are absolute mill coordinates in the native machine units of inches. 

G30 makes a rapid traverse move from the current position to the absolute position of the values in parameters. 

`G30 X~ Z~` makes a rapid traverse move to the position specified by axes including any offsets, then makes a rapid traverse move to the absolute position of the values in parameters 5181 and/or 5183. Any axis not specified won’t move. 

G30.1 stores the current absolute position into parameters 5181-5183. 

It is an error if: 

- _Cutter Compensation_ is turned on 

###### **7.3.10 Straight Probe – G38.x** 

G38.2 – probe toward workpiece, stop on contact, signal error if failure 

G38.3 – probe toward workpiece, stop on contact 

G38.4 – probe away from workpiece, stop on loss of contact, signal error if failure 

G38.5 – probe away from workpiece, stop on loss of contact 

G38.6 – move away from the workpiece ignoring probe input 

To perform a straight probe operation program: `G31 X~ Y~ Z~ A~` 

The probe will conventionally be tool #99. The rotational axis words are allowed, but it is better to omit them. If rotational axis words are used, the numbers must be the same as the current position numbers so that the rotational axes do not move. The linear axis words are optional, except that at least one of them must be used.  The tool in the spindle must be a probe. It is an error if: 

- The current point is less than 0.01 inch (0.254 millimeter) from the programmed point; 

- G38 is used in inverse time feed rate mode; 

- Any rotational axis is commanded to move; 

- No X-, Y- or Z-axis word is used. 

- Feed rate is zero 

- Probe is already tripped 

In response to this command, the mill moves the controlled point (which should be at the end of the probe tip) in a straight line at the current feed rate toward the programmed point; if the probe trips, then the probe decelerates. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

126 

**<mark>Programming</mark>** 

After successful probing, parameters 5061 to 5064 will be set to the coordinates of the location of the controlled point at the time the probe tripped (not where it stopped), or if it does not trip to the coordinates at the end of the move and a triplet giving X, Y and Z at the trip is written to the triplet file. 

###### **7.3.10.1 Using the Straight Probe Command** 

Using the straight probe command, if the probe shank is kept nominally parallel to the Z-axis (i.e., any rotational axes are at zero) and the tool length offset for the probe is used, so that the controlled point is at the end of the tip of the probe: 

- Without additional knowledge about the probe, the parallelism of a face of a part to the XYplane may, for example, be found; 

- If the probe tip radius is known approximately, the parallelism of a face of a part to the YZ or XZ-plane may, for example, be found; 

- If the shank of the probe is known to be well-aligned with the Z-axis and the probe tip radius is known approximately, the center of a circular hole, may, for example, be found; 

- If the shank of the probe is known to be well-aligned with the Z-axis and the probe tip radius is known precisely, more uses may be made of the straight probe command, such as finding the diameter of a circular hole. 

###### Example code: 

`o<probe_pocket> sub` (probe to find center of circular or rectangular pocket) `#<x_start> = #5420   (Current X Location) #<y_start> = #5421   (Current Y Location) #<x_max> = 1 #<x_min> = -1 #<y_max> = 1 #<y_min> = -1 #<feed_rate> = 30    (30 IPM)` 

`F #<feed_rate> G38.3 X #<x_max>     (rough probe +X side of hole) F [#<feed_rate>/30]` G38.5 X #<x_start>   (finish probe) `#<x_plus>=#5061      (save results) G00 X #<x_start>      (return to start) F #<feed_rate> G38.3 X #<x_min>                          (probe -X side of hole) F [#<feed_rate>/30]` 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

127 

### **<mark>Programming</mark>** 

```
G38.5 X #<x_start>
#<x_minus>=#5061                          (save results)
G00 X #<x_start>
#<x_center> = [[#<x_plus>+#<x_minus>]/2]
G00 X #<x_center>                          (go to middle)
F #<feed_rate>
G38.3 Y #<y_max>     (probe +Y side of hole)
F [#<feed_rate>/30]
G38.5 Y #<y_start>
#<y_plus>=#5062      (save results)
G00 Y #<y_start>      (return to start)
F #<feed_rate>
G38.3 Y #<y_min>                          (probe -Y side of hole)
F [#<feed_rate>/30]
G38.5 Y #<y_start>
#<y_minus>=#5062                          (save results)
G00 Y #<y_start>
#<y_center> = [[#<y_plus>+#<y_minus>]/2]
G00 Y #<y_center>                          (go to middle)
G10 L20 P1 X 0 Y 0  (set current location to zero)
F #<feed_rate>  (restore original feed rate)
o<probe_pocket> endsub
M02
```

###### **7.3.11 Cutter Compensation – G40, G41, and G42 Cutter Compensation OFF – G40** 

To turn _Cutter Compensation_ off, program: `G40` 

It is OK to turn compensation off when it is already off. 

It is an error if: 

- A G02/G03 arc move is programmed next after a G40 

- The linear move after turning compensation off is less than twice the tool tip radius 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

128 

**<mark>Programming</mark>** 

###### **Cutter Compensation ON – G41, G42** 

To program _Cutter Compensation_ to the left of the programmed tool path, program: `G41 D~` 

To program _Cutter Compensation_ to the right of the programmed tool path, program: `G42 D~` 

|**Word**|**Definition**|
|---|---|
|D~|Tool number associated with the diameter offset to be applied|



The D word is optional; if there is no D word the radius of the currently loaded tool is used (if no tool is loaded and no D word is given, a radius of 0 is used). 

If supplied, the D word is the tool number to use. 

To start _Cutter Compensation_ to the left of the part profile, use G41. G41 starts _Cutter Compensation_ to the left of the programmed line as viewed looking down on the mill. 

To start _Cutter Compensation_ to the right of the part profile, use G42. G42 starts _Cutter Compensation_ to the right of the programmed line as viewed looking down on the mill. 

The lead in move must be at least as long as the tool radius. The lead in move can be a rapid move. Operator M100-M199 commands are allowed when _Cutter Compensation_ is on. 

It is an error if: 

- The D number is not a valid tool number or 0 

- _Cutter Compensation_ is commanded to turn on when it is already on 

###### **7.3.12 Dynamic Cutter Compensation – G41.1, G42.1** 

To program dynamic _Cutter Compensation_ to the left of the programmed tool path, program: `G41.1 D~` 

To program dynamic _Cutter Compensation_ to the right of the programmed tool path, program: `G42.1 D~` 

|**Word**|**Definition**|
|---|---|
|D~|Tipradius multiplied by2|



G41.1 and G42.1 function the same as G41 and G42 with the added scope of being able to ignore the tool table and to program the tool diameter. 

- It is an error if: 

   - _Cutter Compensation_ is commanded to turn on when it is already on 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

129 

**<mark>Programming</mark>** 

###### **7.3.13 Apply Tool Length Offset – G43** 

To apply a tool length offset from a stored value in the tool table, program: `G43 H~` 

###### **Word Definition** 

Tool number associated with the length offset to be applied. Generally speaking, the H~ value of the H~ Word should match the active tool number (T~ Word) 

It is an error if: 

- The H number is not an integer, or 

- The H number is negative, or 

- The H number is not a valid tool number 

It is OK to program using the same offset already in use. It is also OK to program without a tool length offset if none is currently being used. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

130 

**<mark>Programming</mark>** 

###### **7.3.14 Engrave Sequential Serial Number – G47** 

To engrave a serial number, either alone or added to the end of any desired text, program: `Z~ R~ X~ Y~ P~ Q~ D~` 

|**Word **|**Definition**|
|---|---|
|Z~|The depth of cut of the engraving.|
|R~|The retract height between character segments in the numbers.|
|X~|If present, specifies the starting ‘X’ position, or the left side of the serial number. If omitted, the<br>current Xposition is assumed.|
|Y~|If present, specifies the starting ‘Y’ position, or the bottom side of the serial number. If omitted, the<br>current Yposition is assumed.|
|P~|Ifpresent,is the ‘X’ extent(width)in current units(inches or millimeters)of the engraved number.|
|Q~|Ifpresent,is the ‘Y’ extent(height)in current units(inches or millimeters)of the engraved number.|
|D~|If present, is the requested number of decimals of the engraved number. If the requested D value<br>exceeds the number of decimals in the serial number, the serial number will show leading zeros. If<br>the requested D value is less than the number of decimals in the serial number, only the digits of<br>the serial number will show. For example: a serial number of_10_where D = 4 engraves as_0010_; a<br>serial number of_9056_where D = 3 engraves as_9056_.|



It is an error if: 

- Cutter Compensation is on 

- The Z number is unspecified 

- The R number is unspecified 

- The Z number is greater than the R number 

- The P number is too small (determined by the font used) 

- The Q number is too small (determined by the font used) 

###### **7.3.15 Cancel Tool Length Compensation – G49** 

To cancel tool length compensation, program: `G49` 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

131 

**<mark>Programming</mark>** 

###### **7.3.16 Absolute Coordinates – G53** 

For rapid linear motion to a point expressed in absolute coordinates, program: 

`G01 G53 X~ Y~ Z~` (or similarly with G00 instead of G01), where all the axis words are optional, except that at least one must be used. The G00 or G01 is optional if it is in the current motion mode. G53 is not modal and must be programmed on each line on which it is intended to be active. This produces coordinated linear motion to the programmed point. If G01 is active, the speed of motion is the current feed rate (or slower if the mill won’t go that fast). If G00 is active, the speed of motion is the current traverse rate (or slower if the mill won’t go that fast). 

It is an error if: 

- G53 is used without G00 or G01 being active 

- G53 is used while cutter radius compensation is on 

###### **7.3.17 Select Work Offset Coordinate System – G54 to G59.3** 

To select a work offset coordinate system, program: G54, G55, etc, as defined in the table below. 

|**GXX**|**Definition**|
|---|---|
|G54|Select Coordinate System 1|
|G55|Select Coordinate System 2|
|G56|Select Coordinate System 3|
|G57|Select Coordinate System 4|
|G58|Select Coordinate System 5|
|G59|Select Coordinate System 6|
|G59.1|Select Coordinate System 7|
|G59.2|Select Coordinate System 8|
|G59.3|Select Coordinate System 9|



It is an error if: 

- One of these G-codes is used while cutter radius compensation is on 

The X- and Z-axis work offset values are stored in parameters corresponding to the system in use (e.g. System 1 X=5221, Z=5223; System 2 X=5141, Z=5143; up to System 9 X= 5381, Z = 5383). 

###### **7.3.18 Set Exact Path Control Mode – G61** 

To put the machining system into exact path mode, program: `G61` 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

132 

**<mark>Programming</mark>** 

###### **7.3.19 Set Blended Path Control Mode – G64** 

To attempt to maintain the defined feed velocity, program: `G64 P~ Q~` 

|**Word**|**Definition**|
|---|---|
|P~|If present, specifies the maximum acceptable tool path deviation to round corners to maintain speed.<br>If P is omitted then the speed is maintained however far from the programmed path the tool cuts.|
|Q~|If present, specifies the maximum deviation from collinearity that will collapse a series of linear G01<br>moves at the same feed rate into a single linear move.|



**_NOTE:_** _It is OK to program for the mode that is already active._ 

###### **7.3.20 Distance Mode – G90, G91** 

Interpretation of the operating system-code can be in one of two distance modes: absolute (see **Figure 7.5** ) or incremental (see **Figure 7.6** ). 

To go into absolute distance mode, program: `G90` . In absolute distance mode, axis numbers (X, Y, Z, A) usually represent positions in terms of the currently active coordinate system. Any exceptions to that rule are described explicitly in this section. 

To go into incremental distance mode, program: `G91` . In incrementa ~~l~~ distance mode, axis numbers (X, Y, Z, A) usually represent increments from the current values of the numbers. I and J numbers always represent increments, regardless of the distance mode setting. K numbers represent increments. 

**Figure 7.5** 

**Figure 7.6** 

###### **7.3.21 Arc Distance Mode – G90.1, G91.1** 

G90.1 – Absolute distance mode for I, and K offsets. When G90.1 is in effect I and K both must be specified with G02/3 for the XZ plane or it is an error. 

G91.1 – Incremental distance mode for I, and K offsets. G91.1 Returns I and K to their default behavior. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

133 

**<mark>Programming</mark>** 

###### **7.3.22 Temporary Work Offsets – G92, G92.1, G92.2, and G92.3** 

To apply a temporary work offset, program: `G92 X~ Y~ Z~ A~` 

|**Word**|**Definition**|
|---|---|
|X~|X-axis coordinate|
|Y~|Y-axis coordinate|
|Z~|Z-axis coordinate|
|A~|A-axis coordinate|



This is a legacy feature. Most modern programming methods do not use temporary work offsets. 

G92 reassigns the current controlled point to the coordinates specified by the axis words (X~, Y~,Z~, and/or A~). No motion takes place. 

The axis words are optional, except that at least one must be used. If an axis word is not used for a given axis, the coordinate on that axis of the current point is not changed. Incremental distance mode (G91) has no effect on the action of G92. 

When G92 is executed, it is applied to the origins of all coordinate systems (G54-G59.3). For example, suppose the current controlled point is at X=4 and there is currently no G92 offset active. Then G92 X7 is programmed. This reassigns the current controlled point to X=7, effectively moving the origin of the active coordinate system -3 units in X. The origins of all inactive coordinate systems also move -3 units in X. This -3 is saved in parameter 5211. 

G92 offsets may be already be in effect when the G92 is called. If this is the case, the offset is replaced with a new offset that makes the current point become the specified value. It is an error if: 

- All axis words are omitted 

The operating system stores the G92 offsets and reuses them on the next run of a program. To prevent this, one can program a G92.1 (to erase them), or program a G92.2 (to stop them being applied – they are still stored). 

G92.1 – Reset axis offsets to zero and sets parameters 5211 - 5219 to zero 

G92.2 – Reset axis offsets to zero 

G92.3 – Sets the axis offset to the values saved in parameters 5211 to 5219 

###### **7.3.23 Feed Rate Mode – G93, G94, and G95** 

To set the active feed rate mode to inverse time, program: `G93` 

Inverse time is used to program simultaneous coordinated linear and coordinated rotary motion. In inverse time feed rate mode, an F word means the move should be completed in [one divided by the F number] minutes. For example, if the F number is 2.0, the move should be completed in half a minute. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

134 

**<mark>Programming</mark>** 

When the inverse time feed rate mode is active, an F word must appear on every line which has a G01, G02, or G03 motion, and an F word on a line that does not have G01, G02, or G03 is ignored. Being in inverse time feed rate mode does not affect G00 (rapid traverse) motions. 

To set the active feed rate mode to units per minute mode, program: `G94` 

In units per minute feed rate mode, an F word is interpreted to mean the controlled point should move at a certain number of inches per minute, or millimeters per minute, depending upon what length units are being used. 

To set the active feed rate mode to units per revolution mode, program: `G95` 

In units per revolution mode, an F word is interpreted to mean the controlled point should move a certain number of inches per revolution of the spindle, depending on what length units are being used. G95 is not suitable for threading, for threading use G33 or G76. 

It is an error if: 

- Inverse time feed rate mode is active and a line with G01, G02, or G03 (explicitly or implicitly) does not have an F word 

- A new feed rate is not specified after switching to G94 or G95 canned cycle return level – G98 and G99 

###### **7.3.24 Spindle Control Mode – G96, G97** 

To set constant surface speed mode, program: `G96 D~ S~` 

|**Word**|**Definition**|
|---|---|
|D~|Maximum spindle RPM. This word is optional|
|S~|Surface speed. If G20 is active mode, the value is interpreted as feet per minute.|
||If G21 is active mode,the value is interpreted as metersper minute|



###### **Example:** 

`G96 D2500 S250` (set constant surface speed with a maximum rpm of 2500 and a surface speed of 250). 

It is an error if: 

- S is not specified with G96 

- A feed move is specified in G96 mode while the spindle is not turning 

When using G96 (the most common mode of mill operation), X0 in the current coordinate system (including offsets and tool lengths) must be the spindle axis. 

To set RPM mode, program: `G97` 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

135 

**<mark>Programming</mark>** 

###### **7.4 Canned Cycles** 

The canned cycles described in the table below are implemented in PathPilot. 

|**Canned Cycle**|**Description**|
|---|---|
|G80|Cancel active canned cycle|
|G81|Simple drillingcycle|
|G82|Simple drillingwith dwell cycle|
|G83|Peck drillingcycle|
|G73|High speedpeck drillingcycle|
|G84|Tappingcycle|
|G85|Boringcycle – feedrate out|
|G86|Boringcycle – stop,rapid out|
|G88|Boringcycle – stop,manual out|
|G89|Boringcycle – dwell,feedrate out|



All canned cycles are performed with respect to the active plane. The descriptions in this section assume the XY-plane has been selected. The behavior is always analogous if the YZ- or XZ-plane is selected. 

|**Word**|**Definition**|
|---|---|
|X~|X-axis coordinate|
|Y~|Y-axis coordinate|
|Z~|Z-axis coordinate|
|A~|A-axis coordinate|
|R~|Retract position along the axis perpendicular to the currently selected plane (Z-axis for XY-<br>plane,X-axis for YZ-plane,Y-axis for XZ-plane)|
|L~|L number is optional and represents the number of repeats|



All canned cycles use X, Y, Z, and R words. The R word sets the retract position; this is along the axis perpendicular to the currently selected plane (Z-axis for XY-plane, X-axis for YZ-plane, Y-axis for XZplane). Some canned cycles use additional arguments. 

Rotational axis (A-axis) words are allowed in canned cycles, but it is better to omit them. If rotational axis words are used, the numbers must be the same as the current position numbers so that the rotational axes do not move. 

The R number is always sticky. Sticky numbers keep their value on subsequent blocks if they are not explicitly programmed to be different. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

136 

**<mark>Programming</mark>** 

In absolute distance mode (G90), the X, Y, R and Z numbers are absolute positions in the current coordinate system. In incremental distance mode (G91), when the XY-plane is selected, X, Y, and R numbers are treated as increments to the current position and Z as an increment from the Z-axis position before the move involving Z takes place; when the YZ- or XZ-plane is selected, treatment of the axis words is analogous. 

Many canned cycles use the L word. The L word is optional and represents the number of repeats. L0 is not allowed. The L word is not sticky. The interpretation of the L word depends on the active distance mode: 

- In incremental distance mode (G91), L > 1 in incremental mode means (with the XY-plane selected), that the X and Y positions are determined by adding the given X and Y numbers either to the current X and Y positions (on the first iteration) or to the X and Y positions at the end of the previous go-around (on the subsequent repetitions). The R and Z positions do not change during the repeats 

- In absolute distance mode (G90), L > 1 means do the same cycle in the same place several times. Omitting the L word is equivalent to specifying L=1 

The height of the retract move at the end of each repeat (called clear Z in the descriptions below) is determined by the setting of the retract mode: either to the original Z position (if that is above the R position and the retract mode is G98) or otherwise to the R position. 

It is an error if: 

- X, Y, and Z words are all missing during a canned cycle 

- A P number is required and a negative P number is used 

- An L number is used that does not evaluate to a positive integer 

- Rotational axis motion is used during a canned cycle 

- Inverse time feed rate is active during a canned cycle 

- Cutter radius compensation is active during a canned cycle 

When the XY plane is active, the Z number is sticky and it is an error if: 

- The Z number is missing and the same canned cycle was not already active 

- The R number is less than the Z number 

When the XZ plane is active, the Y number is sticky and it is an error if: 

- The Y number is missing and the same canned cycle was not already active 

- The R number is less than the Y number 

When the YZ plane is active, the X number is sticky and it is an error if: 

- The X number is missing and the same canned cycle was not already active 

- The R number is less than the X number 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

137 

### **<mark>Programming</mark>** 

At the very beginning of the execution of any of the canned cycles (with the XY-plane selected), if the current Z position is below the R position, the Z-axis will move in rapid motion to the R position. This happens only once, regardless of the value of L. In addition, at the beginning of the first cycle and each repeat, the following one or two moves are made: 

   - A straight traverse parallel to the XY-plane to the given XY-position 

   - A straight traverse of the Z-axis only to the R position, if it is not already at the R position 

- If the XZ- or YZ-plane is active, the preliminary and in-between motions are analogous. 

###### **7.4.1 High Speed Peck Drilling Cycle – G73** 

The G73 cycle is intended for deep drilling with chip breaking (see **Figure 7.7** ). The retracts in this cycle break the chip but do not totally retract the drill from the hole. It is suitable for tools with long flutes which clear the broken chips from the hole. This cycle takes a Q number which represents a delta increment along the Z-axis. 

Program: `G73 X~ Z~ R~ L~ Q~` 

|**Word**|**Definition**|
|---|---|
|Q~|Delta increment alongZ axis|
|**Step #**|**Description**|
|1|Preliminarycanned cycle motion|
|2|Move the Z-axis only at the current feed rate downward by delta or<br>to the Zposition,whichever is less deep.|
|3|Rapid back incrementallyin Z 0.010”|
|4|Repeat steps 1,2 and 3 until the Zposition is reached at step1|
|5|Rapid back down to the current hole bottom,backed off a bit|
|6|Retract the Z-axis at traverse rate to clear Z|





**Figure 7.7** 

It is an error if: 

- The Q number is negative or zero 

- The R number is not specified 

###### **7.4.2 Cancel Active Canned Cycle – G80** 

The G80 cycle cancels all canned cycles. 

Program: `G80` 

It is OK to program G80 if no canned cycles are in effect. After a G80, the motion mode must be set with G00 or any other motion mode G word. If motion mode is not set after G80, this error message appears: _Cannot use axis values without a g code that uses them_ . 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

138 

**<mark>Programming</mark>** 

###### **7.4.3 Simple Drilling Cycle – G81** 

The G81 cycle is intended for drilling. 

Program: `G81 X~ Y~ Z~ A~ R~ L~` 

|**Step #**|**Description**|
|---|---|
|1|Preliminarycanned cycle motion|
|2|Move the Z-axis onlyat the current feed rate to the Zposition|
|3|Retract the Z-axis at traverse rate to clear Z|



The following examples demonstrate how the G81 canned cycle works in detail. Other canned cycles work in a similar manner. 

**Example 1:** Suppose the current position is (1, 2, 3) and the XY-plane has been selected and the following line of NC-code is interpreted. 

```
G90 G81 G98 X4 Y5 Z1.5 R2.8
```

This calls for absolute distance mode (G90), old “Z” retract mode (G98) and calls for the G81 drilling cycle to be performed once. The X number and X position are 4. The Y number and Y position are 5. The Z number and Z position are 1.5. The R number and clear Z are 2.8. The following moves take place: 

|**Step #**|**Description**|
|---|---|
|1|G00 motionparallel to the XY-plane to(4,5,3)|
|2|G00 motionparallel to the Z-axis to(4,5,2.8)|
|3|G01 motionparallel to the Z-axis to(4,5,1.5)|
|4|G00 motionparallel to the Z-axis to(4,5,3)|



**Example 2:** Suppose the current position is (1, 2, 3) and the XY-plane has been selected and the following line of NC-code is interpreted. 

- `G91 G81 G98 X4 Y5 Z-0.6 R1.8 L3` 

This calls for incremental distance mode (G91), old “Z” retract mode and calls for the G81 drilling cycle to be repeated three times. The X number is 4, the Y number is 5, the Z number is -0.6 and the R number is 1.8. The initial X position is 5 (=1+4), the initial Y position is 7 (=2+5), the clear Z position is 4.8 (=1.8+3) and the Z position is 4.2 (=4.8-0.6). Old Z is 3.0. 

The first move is a traverse along the Z-axis to (1,2,4.8), since old Z < clear Z. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

139 

### **<mark>Programming</mark>** 

The first repeat consists of three moves. 

|**Step # **|**Description**|
|---|---|
|1|G00 motionparallel to the XY-plane to(5,7,4.8)|
|2|G01 motionparallel to the Z-axis to(5,7,4.2)|
|3|G00 motionparallel to the Z-axis to(5,7,4.8)|



The second repeat consists of three moves. The X position is reset to 9 (=5+4) and the Y position to 12 (=7+5). 

|**Step #**|**Description**|
|---|---|
|1|G00 motionparallel to the XY-plane to(9,12,4.8)|
|2|G01 motionparallel to the Z-axis to(9,12, 4.2)|
|3|G00 motionparallel to the Z-axis to(9,12,4.8)|



The third repeat consists of three moves. The X position is reset to 13 (=9+4) and the Y position to 17 (=12+5). 

|**Step #**|**Description**|
|---|---|
|1|G00 motionparallel to the XY-plane to(13,17,4.8)|
|2|G01 motionparallel to the Z-axis to(13,17, 4.2)|
|3|G00 motionparallel to the Z-axis to(13,17,4.8)|



Chapter 7 

UM10349_PCNC1100_Manual_0520A 

140 

**<mark>Programming</mark>** 

###### **Example Code using G81 Cycle:** 

```
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
N50 X2
N55 X1
N60 G80 G00 Z1 (Cancel Canned Cycles)
N65 X0 Y0
N70 M05
N75 M30
```

###### **7.4.4 Simple Drilling Cycle (dwell) – G82** 

The G82 cycle is intended for drilling. 

Program: `G82 X~ Y~ Z~ A~ R~ L~ P~` 

|**Step # **|**Description**|
|---|---|
|1|Preliminarycanned cycle motion|
|2|Move the Z-axis onlyat the current feed rate to the Zposition|
|3|Dwell for the P number of seconds|
|4|Retract the Z-axis at traverse rate to clear Z|



UM10349_PCNC1100_Manual_0520A 

Chapter 7 

141 

### **<mark>Programming</mark>** 

###### **7.4.5 Peck Drilling Cycle – G83** 

The G83 cycle (often called peck drilling) is intended for deep drilling or milling with chip breaking. See also G73. The retracts in this cycle clear the hole of chips and cut off any long stringers (which are common when drilling in aluminum). This cycle takes a Q number which represents a delta increment along the Z-axis. Program: `G83 X~ Y~ Z~ A~ R~ L~ Q~` 

|**Word**|**Definition**|
|---|---|
|Q~|**i**<br>This cycle takes a Q number which represents a delta increment alongthe Z-axis|



|**Step # **|**Description**|
|---|---|
|1|Preliminarycanned cycle motion|
|2|Move the Z-axis only at the current feed rate downward by delta or to the Z position, whichever<br>is less deep|
|3|Rapid back out to the clear Z|
|4|Repeat steps 1,2 and 3 until the Zposition is reached at step1|
|5|Rapid back down to the current hole bottom,backed off a bit|
|6|Retract the Z-axis at traverse rate to clear Z|



It is an error if: 

- The Q number is negative or zero 

###### **7.4.6 Tapping Cycle – G84** 

The G84 cycle is intended for tapping. This cycle rotates the spindle clockwise to tap a pre-drilled hole; when the bottom of the hole is reached, the spindle rotates in the reverse direction and exits the hole. 

This cycle uses a P word, where P specifies the number of seconds to dwell. The P word is optional – if it is not included, PathPilot calculates a dwell for you (half of a second per 1000 RPM). 

Program: `G84 X~ Y~ Z~ R~ P~ F~` 

|**Word**|**Definition**|
|---|---|
|P~|**i**<br>The number of seconds to dwell.|
|F~|The federate.|



|**Step # **|**Description**|
|---|---|
|1|Preliminarycanned cycle motion|
|2|Start the spindle forward|
|3|Move the Z-axis at theprogrammed feedrate(F~)to the Z-depth|
|4|Reverse the spindle|
|5|Dwell for the P number of seconds|
|6|Retract the Z-axis at theprogrammed feedrate(F~)to the R-plane|



Chapter 7 

UM10349_PCNC1100_Manual_0520A 

142 

**<mark>Programming</mark>** 

- Spindle speed must be commanded before calling a G84 cycle. 

- Feedrate override is ignored during a tapping cycle. 

- Feedhold is ignored until the return operation is executed. 

- After the tapping operation is completed, either a G98 or G99 command controls the return height. G99 returns the tool to the R-plane (see **Figure 7.8** ); G98 returns the tool to the initial height (see **Figure 7.9** ). 

###### **Example Code Using G84 Cycle:** 

```
N40 T51 G43 H51 M6
N45 S400 M3
N50 G54
N55 M8
N65 G0 X0.5 Y-0.75
N70 G43 Z0.6 H51
N80 G0 Z0.2
N85 S400
```

```
N90 G98 G84 X0.5 Y-0.75 Z-0.605
R0.2 F20.
N95 X1.0 Y -1.25
N100 G80
N105 G0 Z0.6
```

###### **G84 with G99** 



<!-- Start of picture text -->
R-plane<br>Spindle FWD Spindle REV<br>Z-depth<br><!-- End of picture text -->

**Figure 7.8** 

###### **G84 with G98** 



<!-- Start of picture text -->
R-plane<br>Spindle FWD Spindle REV<br>Z-depth<br><!-- End of picture text -->

**Figure 7.9** 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

143 

### **<mark>Programming</mark>** 

###### **7.4.7 Boring Cycle (feedrate out) – G85** 

The G85 cycle is intended for boring or reaming, but could be used for drilling or milling. 

Program: `G85 X~ Y~ Z~ A~ R~ L~` 

|**Step #**|**Description**|
|---|---|
|1|Preliminarycanned cycle motion|
|2|Move the Z-axis onlyat the current feed rate to the Zposition|
|3|Retract the Z-axis at the current feed rate to clear Z|



###### **7.4.8 Boring Cycle (stop, rapid out) – G86** 

The G86 cycle is intended for boring. This cycle uses a P number for the number of seconds to dwell. 

Program: `G86 X~ Y~ Z~ A~ R~ L~ P~` 

|**Step #**|**Description**|
|---|---|
|1|Preliminarycanned cycle motion|
|2|Move the Z-axis onlyat the current feed rate to the Zposition|
|3|Dwell for the P number of seconds|
|4|Stopthe spindle turning|
|5|Retract the Z-axis at traverse rate to clear Z|
|6|Restart the spindle in the direction it wasgoing|
|7|Move the Z-axis onlyat the current feed rate to the Zposition|



The spindle must be turning before this cycle is used. It is an error if: 

- The spindle is not turning before this cycle is executed 

###### **7.4.9 Boring Cycle (stop, manual out) – G88** 

The G88 cycle is intended for boring and uses a P word, where P specifies the number of seconds to dwell. 

Program: `G88 X~ Y~ Z~ A~ R~ L~ P~` 

|**Step #**|**Description**|
|---|---|
|1|Preliminarycanned cycle motion|
|2|Move the Z-axis onlyat the current feed rate to the Zposition|
|3|Dwell for the P number of seconds|
|4|Stopthe spindle turning|
|5|Stoptheprogram so the operator can retract the spindle manually|
|6|Restart the spindle in the direction it wasgoing|



Chapter 7 

UM10349_PCNC1100_Manual_0520A 

144 

**<mark>Programming</mark>** 

###### **7.4.10 Boring Cycle (dwell, feedrate out) – G89** 

The G89 cycle is intended for boring. This cycle uses a P number, where P specifies the number of seconds to dwell. 

Program: `G89 X~ Y~ Z~ A~ R~ L~ P~` 

|**Step # **|**Description**|
|---|---|
|1|Preliminarycanned cycle motion|
|2|Move the Z-axis onlyat the current feed rate to the Zposition|
|3|Dwell for the P number of seconds|
|4|Retract the Z-axis at the current feed rate to clear Z|



###### **7.5 Built-in M-codes** 

M-codes interpreted directly by the operating system are detailed in the following table. For more information, refer to each M-code definition section later in this chapter. 

|**M-code**|**Meaning**|
|---|---|
|M00|Program stop|
|M01|Optionalprogram stop|
|M02|Program end|
|M03/04|Rotate spindle clockwise/counter clockwise|
|M05|Stopspindle rotation|
|M07 or M08|Coolant on|
|M09|All coolant off|
|M30|Program end and rewind|
|M48|Enable speed and feed override|
|M49|Disable speed and feed override|
|M64*|Activate output relays|
|M65*|Deactivate output relays|
|M66*|Wait on an input|
|M98|Call subroutine|
|M99|Return from subroutine/repeat|
|M100 to M199|Operator defined M-codes|



**_*NOTE:_** _These commands are only useful when the mill is equipped with the USB I/O Module (PN 32616)._ 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

145 

### **<mark>Programming</mark>** 

###### **7.5.1 Program Stop and Program End – M00, M01, M02, and M30** 

To stop a running program temporarily, regardless of the optional stop switch setting, program: `M00` To stop a running program temporarily, but only if the optional stop switch is on, program: `M01` 

It is OK to program M00 and M01 in MDI mode, but the effect probably won’t be noticeable because normal behavior in MDI mode is to stop after each line of input. 

If a program is stopped by an M00, M01, pressing the _Cycle Start_ button restarts the program at the following line of the G-code program. 

To end a program, program: `M02` or `M30` . M02 leaves the next line to be executed as the M02 line. M30 rewinds the G-code file. These commands can have the following effects depending on the options chosen on the Configure>Logic dialog: 

- Axis offsets are set to zero (like G92.2) and origin offsets are set to the default (like G54) 

- Selected plane is set to XY (like G17) 

- Distance mode is set to absolute (like G90) 

- Feed rate mode is set to units per minute mode (like G94) 

- Feed and speed overrides are set to on (like M48) 

- _Cutter Compensation_ is turned off (like G40) 

- The spindle is stopped (like M05) 

- The current motion mode is set to G01 (like G01) 

- Coolant is turned off (like M09) 

No more lines of code in the file are executed after the M02 or M30 command is executed. Pressing _Cycle Start_ starts the program back at the beginning of the file. 

###### **7.5.2 Spindle Control – M03, M04, and M05** 

To start the spindle turning clockwise (forward) at the currently programmed speed, program: `M03` 

To start the spindle turning counterclockwise at the currently programmed speed, program: `M04` The speed is programmed by the S word. 

To stop the spindle from turning, program: `M05` 

It is OK to use M03 or M04 if the spindle speed is set to zero; if this is done (or if the speed override switch is enabled and set to zero), the spindle won’t start turning. If later the spindle speed is set above zero (or the override switch is turned up), the spindle starts turning. It is permitted to use M03 or M04 when the spindle is already turning or to use M05 when the spindle is already stopped. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

146 

**<mark>Programming</mark>** 

###### **7.5.3 Tool Change – M06** 

To execute a tool change sequence, program: `M06` 

M06 behaves differently depending on whether or not a mill is equipped with an ATC (automatic tool changer). 

|Mill is not equipped with an ATC:|M06 commands the mill, stops the spindle, pauses program execution,<br>and prompts operator to change tools by flashing_Tool Change_LED.<br>The program resumes after the operator presses the_Cycle Start_<br>button to confirm that the tool has been changed.|
|---|---|
||If the requested tool (T number) is assigned to the carousel, M06<br>initiates an automatic tool change.|
|Mill is equipped with an ATC:|If the tool is not assigned to the carousel, the operator is prompted<br>to manually change the tool and press_Cycle Start_to confirm the tool<br>change. This resumes the program.|



You are strongly advised to put the T~, the M06 and the G43 H~ on one line (block) of code. See G43 for more details. 

**Example:** `N191 M06 T3 G43 H3` 

###### **7.5.4 Coolant Control – M07, M08, and M09** 

To turn coolant on, program: `M07` 

To turn flood coolant on, program: `M08` 

To turn all coolant off, program: `M09` 

It is always OK to use any of these commands, regardless of what coolant is on or off. 

###### **7.5.5 Override Control – M48, M49** 

To enable the speed and feed override, program: `M48` 

To disable both overrides, program: `M49` 

It is OK to enable or disable the switches when they are already enabled or disabled. 

###### **7.5.6 Feed Override Control – M50** 

To enable the feed rate override control, program: `M50 P1` 

The P1 is optional. 

To disable the feed rate control, program: `M50 P0` 

When feed rate override control is disabled, the feed rate override slider has no influence, and all motion is executed at programmed feed rate (unless there is an adaptive feed rate override active). 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

147 

### **<mark>Programming</mark>** 

###### **7.5.7 Spindle Speed Override Control – M51** 

To enable the spindle speed override control, program: `M51 P1` 

The P1 is optional. 

To disable the spindle speed override control, program: `M51 P0` 

When spindle speed override control is disabled, the spindle speed override slider has no influence, and the spindle speed is equal to the value of the S-word (see _Spindle Speed_ later in this chapter). 

###### **7.5.8 Set Current Tool Number – M61** 

To change the current tool number while in MDI or manual mode, program: `M61 Q~` 

|**Word**|**Definition**|
|---|---|
|Q~|Tool number|



One use is when you power on the system with a tool selected but the tool turret is set for a different tool to that indicated. You can set that tool number without doing a tool change operation. It is an error if: Q~ is not 0 or greater 

###### **7.5.9 Set Output State – M64, M65** 

**_NOTE:_** _These commands are only useful when the mill is equipped with the USB I/O Module (PN 32616)._ 

There are four output relays available on the USB I/O module. 

To activate output relays (contact close), program: `M64` 

To deactivate output relays (contact open), program: `M65` 

There are four contacts, numbered from 0 to 3. The contact is specified by the P word. 

For example: 

- Activating the first relay: `M64 P0` 

- Activating the second relay: `M64 P1` 

The outputs are deactivated using M65 with the P word specifying the relay. 

For example: 

- Deactivating the second relay: `M65 P1` 

- Deactivating the fourth relay: `M65 P3` 

There is only one P word and one relay per line. Each relay command must be done on an individual line. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

148 

**<mark>Programming</mark>** 

The following is legal: 

```
M64 P0
M64 P2
M64 P3
```

The following is not legal: 

```
M64 P023
M64 P0 P2 P3
```

###### **7.5.10 Wait on Input – M66** 

**_NOTE:_** _These commands are only useful when the mill is equipped with the USB I/O Module (PN 32616)._ 

There are four digital inputs available on the USB I/O module. 

```
M66 P- | E- <L->
```

|**Word**|**Definition**|
|---|---|
|P-|Specifies the digital input number from 0 to 3.|
||Specifies the wait mode type:<br>•<br>Mode 0: IMMEDIATE – no waiting, returns immediately. The value of the input at that<br>time is stored in parameter #5399.|
|L-|•<br>Mode 1: RISE – waits for the selected input to perform a rise event.<br>•<br>Mode 2: FALL – waits for the selected input to perform a fall event.<br>•<br>Mode 3: HIGH – waits for the selected input to go to the HIGH state.<br>•<br>Mode 4: LOW – waits for the selected input togo to the LOW state.|
|Q-|Specifies the timeout in seconds for waiting. The Q value is ignored if the L-word is zero<br>(IMMEDIATE). AQvalue of zero is an error if the L-word is non-zero.|



###### **7.6 Other Input Codes** 

###### **7.6.1 Feed Rate – F** 

To set the feed rate, program: `F~` 

Depending on the setting of the feed mode toggle, the rate may be in units-per-minute or units-perrev of the spindle. The units are those defined by the G20/G21 mode. The feed rate may sometimes be overridden as described in M48 and M49 above. 

###### **7.6.2 Spindle Speed – S** 

To set the speed in revolutions per minute (rpm) of the spindle, program: `S~` 

The spindle turns at the commanded speed when it has been programmed to start turning. It is OK to program an S word whether the spindle is turning or not. If the speed override switch is enabled and not set at 100 percent, the speed is different from what is programmed. It is OK to program `S0` , but the spindle does turn if that is done. It is an error if: 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

149 

### **<mark>Programming</mark>** 

- The S number is negative 

###### **7.6.3 Change Tool Number – T** 

It is the programmer’s responsibility to ensure that the carriage is in a safe place for changing tools, for example by using G30. This allows optimization of motion which can save time, especially with gang tooling. A pause for manual intervention can always be provided by an M00 or M01 before the tool change. It is an error if: 

- A negative T number is used or a T number larger than 54 is used 

###### **7.7 Advanced Programming with Parameters and Expressions** 

This section describes the parameter and expression programming language features of PathPilot. These features are not used in common G-code application (hand coding), G-code created by PathPilot conversational programming, or the majority of third-party CAM-programming systems. 

**_NOTE:_** _There are significant differences between controls in the way parameters work. Do not assume that code from another control works in the same way with the operating system. Tormach advises against writing parametric G-code as this is difficult to debug and very difficult for another operator to understand. Modern CAM virtually eliminates the need for it._ 

###### **7.7.1 Parameters** 

The RS274/NGC language supports parameters. Parameters are analogous to variables in other programming languages. PathPilot maintains an array of 10,320 numerical parameters. Many of them have specific uses. The parameters that are associated with fixtures are persistent over time. Other parameters are undefined when the operating system is loaded. The parameters are preserved when the interpreter is reset. Parameters 1 to 1000 can be used by the code of part-programs. 

There are several types of parameters of different purpose and appearance. The only value type supported by parameters is floating-point; there are no string, Boolean or integer types in G-code like in other programming languages. However, logic expressions can be formulated with Boolean operators (AND, OR, XOR, and the comparison operators EQ, NE, GT, GE ,LT, LE), and the MOD, ROUND, FUP and FIX operators support integer arithmetic. 

###### **Parameter Syntax** 

There are three types of parameters, numbered, named local, and named global. The type of the parameter is defined by its syntax: 

```
numbered - #4711
named local - #<localvalue>
named global - #<_globalvalue>
```

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

150 

**<mark>Programming</mark>** 

###### **Parameter Scope** 

The scope of a parameter is either global or local within a subroutine. The scope of each parameter is inferred from its syntax. Subroutine parameters and named local parameters have local scope. Named global parameters and all numbered parameters starting from #31 are global in scope. RS274/NGC uses lexical scoping. In a subroutine, only the local parameters defined therein and any global parameters are visible. The local parameters of a calling procedure are not visible in a called procedure. 

###### **Behavior of Uninitialized Parameters** 

Uninitialized global parameters and unused subroutine parameters return the value zero when used in an expression. Uninitialized named parameters signal an error when used in an expression. 

###### **Parameter Mode** 

The mode of a parameter can either be read/write or read-only. Read/write parameters may be assigned values within an assignment statement. Read-only parameters cannot be assigned values. They may appear in expressions, but not on the left-hand side of an assignment statement. 

###### **Persistence and Volatility** 

Parameters can either be persistent or volatile. When the operating system is powered off, volatile parameters lose their values and are reset to zero. The values of persistent parameters are saved in a disc file and restored to their previous values when the operating system is powered on again. All parameters except numbered parameters in the current persistent range (5163 to 5390) are volatile. 

###### **Intended Usage** 

Numbered parameters in the range #31-#5000, named global, and local parameters are available for general-purpose storage of floating-point values, like intermediate results, flags, etc., throughout program execution. They are read/write (can be assigned a value). Subroutine parameters, numbered parameters #1-#30, and system parameters are read-only and not available for general use. Subroutine parameters are used to hold the actual parameters passed to a subroutine. Numbered parameters in the range of #1-#30 are used to access offsets of coordinate systems. System parameters are used to determine the current running version and are read-only. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

151 

### **<mark>Programming</mark>** 

###### **7.7.2 Parameter Types** 

###### **7.7.2.1 Numbered Parameters** 

A numbered parameter is recognized by the pound symbol (#) followed by an integer between 1 and 5399. The parameter is referred to by this integer, and its value is whatever number is stored in the parameter. A value is stored in a parameter with the (=) operator. 

**Example:** `#3 = 15 (set parameter 3 to 15)` 

A parameter setting does not take effect until after all parameter values on the same line have been found. For example, if parameter 3 has been previously set to 15 and the line: 

```
#3=6 G01 X#3
```

is interpreted, a straight move to a point where X = 15 occurs before the value of parameter 3 is set to 6. 

The # symbol takes precedence over other operations. For example, #1+2 means the number found by adding 2 to the value of parameter 1, not the value found in parameter 3. Of course, #[1+2] does mean the value found in parameter 3. 

The # character may be repeated; for example ##2 means the value of parameter whose index is the (integer) value of parameter 2. PathPilot maintains a number of read-only parameters. Only parameters for the relevant axes are maintained: (X Y Z A) for mill and (X Z) for mill. The remaining parameters for unused axes are undefined. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

152 

**<mark>Programming</mark>** 

|**Read-only**<br>**Parameters**|**Purpose**|
|---|---|
|1-30|Subroutine local parameters of call arguments. These parameters are local to the<br>subroutine. For further information, see_Programming with Subroutines_later in this chapter|
|31-5000|G-code operator parameters. These parameters are global in G-code file|
|5061-5070|Result of G38.2probe(X Y Z A B C U V W)|
|5161-5169|G28 home for(X Y Z A B C U V W)|
|5181-5189|G30 home for(X Y Z A B C U V W)|
|5210|1 if G92 offsets are active, 0 if not|
|5211-5219|G92 offset(X Y Z A B C U V W)|
|5220|Current coordinate system number 1-9 for G54 - G59.3|
|5221-5230|Coordinate System 1, G54 (X Y Z A B C U V W R) – R denotes XY rotation angle around Z-axis|
|5241-5250|Coordinate System 2, G55(X Y Z A B C U V W R)|
|5261-5270|Coordinate System 3, G56(X Y Z A B C U V W R)|
|5281-5290|Coordinate System 4, G57(X Y Z A B C U V W R)|
|5301-5310|Coordinate System 5, G58(X Y Z A B C U V W R)|
|5321-5330|Coordinate System 6, G59(X Y Z A B C U V W R)|
|5341-5350|Coordinate System 7, G59.1(X Y Z A B C U V W R)|
|5361-5370|Coordinate System 8, G59.2(X Y Z A B C U V W R)|
|5381-5390|Coordinate System 9, G59.3(X Y Z A B C U V W R)|
|5399|Result of M66 – check or wait for input|
|5400|Current tool number|
|5401-5409|Tool offset(X Y Z A B C U V W)|
|5410|Current tool diameter|
|5411|Current tool front angle|
|5412|Current tool back angle|
|5413|Current tool orientation|
|5420-5428|Currentposition includingoffsets in currentprogram units(X Y Z A B C U V W)|



###### **7.7.2.2 Subroutine Parameters** 

Subroutine parameters are specifically reserved for call arguments. By definition, these are parameters #1-#30 and are local to the subroutine. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

153 

### **<mark>Programming</mark>** 

###### **7.7.2.3 Named Parameters** 

Named parameters work like numbered parameters but are easier to read and remember. All parameter names are converted to lowercase and have spaces and tabs removed. Named parameters must be enclosed with < > marks. 

#<named parameter here> is a local named parameter. By default, a named parameter is local to the scope in which it is assigned. 

You can’t access a local parameter outside of its subroutine. This is so two subroutines can use the same parameter names without fear of one subroutine overwriting the values in another. 

#<_global named parameter here> (i.e., name starting with an underscore) is a global named parameter. They are accessible from within called subroutines and may set values within subroutines that are accessible to the caller. As far as scope is concerned, they act just like regular numeric parameters. They are not made persistent by storage in a file. 

###### **Examples:** 

```
Declaration of named global variable
#<_endmill_dia> = 0.049
```

```
Reference to previously declared global variable
```

```
#<_endmill_rad> = [#<_endmill_dia>/2.0]
```

**_NOTE:_** _The global parameters _a, _b, _c, . . . _z are reserved for special use. Do not use these parameters._ 

###### **Mixed Literal and Named Parameters** 

```
o100 call [0.0] [0.0] [#<_inside_cutout>-#<_endmill_dia>] [#<_Zcut>] [#<_
feedrate>]
```

###### **7.7.3 Expressions** 

An expression is a set of characters starting with a left bracket ([) and ending with a balancing right bracket (]). Located between the brackets are numbers, parameter values, binary operators, functions, and other expressions. An expression is evaluated to produce a number. An example of an expression is: 

- `[1 + acos[0] - [#3 ** [4.0/2]]]` 

All expressions on a line are evaluated when the line is read and before anything on the line is executed. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

154 

**<mark>Programming</mark>** 

###### **7.7.3.1 Binary Operators** 

Binary operators only appear inside expressions. There are three types of binary operators: mathematical, logical, and relational. 

There are four basic mathematical operations: addition (+), subtraction (-), multiplication (*), and division (/). In addition, the modulus operation (MOD) finds the remainder after division of one number by another number. The power operation (**) of raising the number on the left of the operation to the power on the right. There are three logical operations: non-exclusive or (OR), exclusive or (XOR), and logical and (AND). 

The relational operators are equality (EQ), inequality (NE), strictly greater than (GT), greater than or equal to (GE), strictly less than (LT), and less than or equal to (LE). 

Binary operators are divided into several groups according to their precedence. 

|**Binary Operator**|**Precedence**|
|---|---|
|**|1(highest)|
|* / MOD|2|
|+ -|3|
|EQNE GT GE LT LE|4|
|AND OR XOR|5(lowest)|



If operations in different precedence groups are strung together, operations with a higher precedence are performed before operations with a lower precedence. If an expression contains more than one operation with the same precedence, the operation on the left is performed first. 

###### **Example:** 

`[2.0 / 3 * 1.5 - 5.5 / 11.0]` is equivalent to `[[[2.0 / 3] * 1.5] - [5.5 / 11.0]]` which is equivalent to 

`[1.0 - 0.5]` which is 

```
0.5
```

The logical operations and modulus are to be performed on any real numbers, not just on integers. The number zero is equivalent to logical false, and any non-zero number is equivalent to logical true. 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

155 

### **<mark>Programming</mark>** 

###### **7.7.3.2 Functions** 

Available functions are shown in the table below. 

|**Function Name**|**Function Result**|
|---|---|
|ATAN[Y]/[X]|Fourquadrant inverse tangent|
|ABS[arg]|Absolute value|
|ACOS[arg]|Inverse cosine|
|ASIN[arg]|Inverse sine|
|COS[arg]|Cosine|
|EXP[arg]|e raised to thegivenpower(e<sup>x</sup>)|
|FIX[arg]|Round down to integer|
|FUP[arg]|Round upto integer|
|ROUND[arg]|Round to nearest integer|
|LN[arg]|Base-e logarithm|
|SIN[arg]|Sine|
|SQRT[arg]|Square root|
|TAN[arg]|Tangent|
|EXISTS[arg]|Check namedparameter|



###### **7.8 Programming with Subroutines** 

Subroutines are subprograms that are called from inside another program. The following sections discuss the structure and design of subroutine programming with PathPilot. 

###### **7.8.1 Subroutine Labels and Subroutine Keywords** 

Subroutines are identified in a program by a unique subroutine label. The subroutine label is the letter O followed by an integer (with no sign) between 0 and 99999 written with no more than five digits (000009 is not permitted, for example) or a string of characters surrounded by <> symbols. Examples of valid subroutine labels include: 

```
O123
O99999
```

```
O<my test code>
```

Subroutine labels may be used in any order but must be unique in a program. Each subroutine label must be followed by a subroutine keyword. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

156 

**<mark>Programming</mark>** 

The subroutine keyword defines the action associated with the subroutine label. Valid subroutine keywords and their meanings are detailed in the following table. 

|**Subroutine Keyword**|**Meaning**|
|---|---|
|Sub|Begin subroutine definition|
|Endsub|End of subroutine definition|
|Call|Call the subroutine|
|Do/while/endwhile|Execute the subroutine while a condition is true|
|Repeat/endrepeat|Execute the subroutine while a condition is true|
|If/elseif/else/endif|Conditionallyexecute the subroutine|
|Break|Break out of a while or if/elseif statement|
|Continue|Skipremainingcode and restart at topof while or repeat loop|
|Return|Return a value|



###### **7.8.1.1 Defining a Subroutine** 

The sub and endsub keywords are used to define the beginning and end a subroutine. All lines of code between the sub and endsub keywords are considered to be part of the subroutine. 

###### **Sub, Endsub, Call Example:** 

```
o100 sub
G53 G00 X0 Y0 Z0 (rapid move to machine home)
o100 endsub
...
o100 call (call the subroutine here)
M02
```

Subroutines can either be defined in the program file or in a separate file. If the subroutine is defined in the same file as the main program that calls the subroutine, it must be defined before the call statement. For instance, this is valid: 

```
o100 sub
G53 G00 X0 Y0 Z0 (rapid move to machine home)
o100 endsub
...
o100 call (call the subroutine here)
M02
```

But this is not: 

```
o100 call (call the subroutine here)
M02
o100 sub
 G53 G00 X0 Y0 Z0 (rapid move to machine home)
o100 endsub
...
```

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

157 

### **<mark>Programming</mark>** 

A subroutine can be a separate file, provided the following rules are obeyed: 

- The file must be named the same as your call 

- The file must include a sub and endsub in the file 

- The file must be in the directory _/subroutines_ 

- The file name can include lowercase letters, numbers, dashes, and underscores only 

- The file can contain only a single subroutine definition 

- The file must end with the extension .nc 

###### **7.8.1.2 Calling a Subroutine** 

To execute a subroutine in a program, it must be called. To call a subroutine, program `O~` call where ~ is the subroutine name. The subroutine name may be either a named file, a numbered file, or an expression that evaluates to a valid subroutine label. 

**Expression Example:** `o[#101+2] call` 

**Named File Example:** o<myfile> call 

**Numbered File Example:** `o123 call` 

Optional Arguments to O~call 

O~ call takes up to 30 optional arguments, which are passed to the subroutine as #1, #2 , . . . , #N. Unused parameters from #N+1 to #30 have the same value as in the calling context. 

Parameters #1-#30 are local to the subroutine. On return from the subroutine, the values of parameters #1 through #30 (regardless of the number of arguments) are restored to the values they had before the call. 

The following calls a subroutine with three arguments: 

**O~ Call Example:** `o200 call [1] [2] [3]` 

Because 1 2 3 is parsed as the number 123, the parameters must be enclosed in square brackets. 

Subroutine bodies may be nested. Nested subroutines may only be called after they are defined. They may be called from other functions, and may call themselves recursively if it makes sense to do so. The maximum subroutine nesting level is 10. 

Subroutines do not have return values, but they may change the value of parameters above #30 and those changes are visible to the calling G-code. Subroutines may also change the value of global named parameters. 

**_NOTE:_** _File names are lowercase letters only; o<MyFile> is converted to o<myfile> by the interpreter._ 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

158 

**<mark>Programming</mark>** 

###### **7.8.1.3 Conditional Subroutines** 

Subroutines can be conditionally executed using the if/endif or the if/else/elseif/endif keyword constructs. 

###### **if/endif** 

The if/endif conditional will execute a block of code following _theif_ keyword only when the if argument evaluates to _true_ . 

###### **If/endif Example:** 

`o100 sub` (notice that the if-endif block uses a different number) `o110 if [#2 GT 5] (some code here) o110 endif (some more code here) o100 endsub` 

###### **If/elseif/else/endif** 

The if/elseif/else/endif conditional will execute the block of code following the if keyword when its argument evaluates to true. If the argument evaluates to false, then the code following each elseif is executed as long as the associated elseif argument evaluates to true. If no elseif keywords are present, or if all elseif arguments evaluate to false, than the code following the else keyword is executed. 

###### **If/elseif/endif example:** 

```
o102 if [#2 GT 5] (if parameter #2 is greater than 5 set F100)
 F100
o102 elseif [#2 LT 2] (else if parameter #2 is less than 2 set F200)
 F200
o102 else (else if parameter #2 is 2 through 5 set F150)
 F150
o102 endif
```

###### **7.8.1.4 Repeating Subroutines** 

Subroutines can be repeated a finite number of times using the repeat/endrepeat keyword. 

###### **Repeat example:** 

```
(Mill 5 diagonal shapes)
G91 (Incremental mode)
o103 repeat [5]
... (insert milling code here)
G00 X1 Y1 (diagonal move to next position)
o103 endrepeat
G90 (Absolute mode)
```

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

159 

### **<mark>Programming</mark>** 

###### **7.8.1.5 Looping Subroutines** 

Subroutines can be looped using the Do/while or while/endwhile keyword constructs. 

###### **Do/While Loop** 

The Do/While loop executes a block of code once and continues to execute the code block until the while argument evaluates to _true_ . 

###### **Do/While Loop Example:** 

```
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
```

###### **While/endwhile** 

The while/endwhile repeats a set of statements an indefinite number of times, as long as the while argument evaluates to true. 

Chapter 7 

UM10349_PCNC1100_Manual_0520A 

160 

**<mark>Programming</mark>** 

###### **While/endwhile Example:** 

```
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
```

The following statements cause an error message and abort the interpreter: 

- A return or endsub not within a sub definition 

- A label on repeat which is defined elsewhere 

- A label on while which is defined elsewhere and not referring to a do 

- A label on if defined elsewhere 

- A undefined label on else or elseif 

- A label on else, elseif or endif not pointing to a matching if 

- A label on break or continue which does not point to a matching while or do 

- A label on endrepeat or endwhile no referring to a corresponding while or repeat 

UM10349_PCNC1100_Manual_0520A 

Chapter 7 

161 

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

