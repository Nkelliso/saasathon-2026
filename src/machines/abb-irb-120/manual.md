# ABB IRB 120 Product Manual

> Curated reference: installation/commissioning and programming documentation has been excluded. Remaining manufacturer text is retained verbatim, including safety, operation, maintenance, repair, and troubleshooting where present. Original page/section numbering is preserved and may have gaps; any original page count describes the full source, not this excerpt. Follow references to excluded sections in the linked original manual.


Source: [https://library.e.abb.com/public/35c8d30aebad4d13b945a1943e354ac5/3HAC035728%20PM%20IRB%20120-en.pdf](https://library.e.abb.com/public/35c8d30aebad4d13b945a1943e354ac5/3HAC035728%20PM%20IRB%20120-en.pdf)

Converted from official manufacturer PDF documentation.

---

#### ROBOTICS 

# **Product manual** 

# IRB 120 



Trace back information: Workspace 22B version a4 Checked in 2022-06-01 Skribenta version 5.5.019 

Product manual IRB 120 - 3/0.6 IRB 120T - 3/0.6 IRC5 

Document ID: 3HAC035728-001 

Revision: W 

© Copyright 2009-2022 ABB. All rights reserved. Specifications subject to change without notice. 

The information in this manual is subject to change without notice and should not be construed as a commitment by ABB. ABB assumes no responsibility for any errors that may appear in this manual. 

Except as may be expressly stated anywhere in this manual, nothing herein shall be construed as any kind of guarantee or warranty by ABB for losses, damage to persons or property, fitness for a specific purpose or the like. 

In no event shall ABB be liable for incidental or consequential damages arising from use of this manual and products described herein. 

This manual and parts thereof must not be reproduced or copied without ABB's written permission. 

Keep for future reference. 

Additional copies of this manual may be obtained from ABB. Original instructions. 

© Copyright 2009-2022 ABB. All rights reserved. Specifications subject to change without notice. 

**Table of contents** 

## **Overview of this manual** 

#### **About this manual** 

This manual contains instructions for: 

- mechanical and electrical installation of the robot 

- maintenance of the robot 

- mechanical and electrical repair of the robot. 

#### **Usage** 

This manual should be used during: 

- installation, from lifting the robot to its work site and securing it to the foundation, to making it ready for operation 

- maintenance work 

- repair work and calibration. 

#### **Who should read this manual?** 

This manual is intended for: 

- installation personnel 

- maintenance personnel 

- repair personnel. 

#### **Prerequisites** 

Maintenance/repair/installation personnel working with an ABB Robot must: 

- be trained by ABB and have the required knowledge of mechanical and electrical installation/repair/maintenance work. 

#### **Product manual scope** 

The manual covers covers all variants and designs of the IRB 120. Some variants and designs may have been removed from the business offer and are no longer available for purchase. 

#### **Organization of chapters** 

The manual is organized in the following chapters: 

|**Chapter**|**Contents**|
|---|---|
|Safety|Safety information that must be read through before performing<br>any installation or service work on the robot. Contains general<br>safety aspects as well as more specific information on how to<br>avoid personal injuries and damage to the product.|
|Installation and commis-<br>sioning|Required information about lifting and installation of the robot.|
|Maintenance|Step-by-step procedures that describe how to perform mainten-<br>ance of the robot. Based on a maintenance schedule that may<br>be used to plan periodical maintenance.|
|Repair|Step-by-step procedures that describe how to perform repair<br>activities of the robot. Based on available spare parts.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

9 

© Copyright 2009-2022 ABB. All rights reserved. 

**Overview of this manual** 

#### _Continued_ 

|**Chapter**|**Contents**|
|---|---|
|Calibration information|Procedures that do not require specific calibration equipment.<br>General information about calibration.|
|Decommissioning|Environmental information about the robot and its components.|
|Reference information|Useful information when performing installation, maintenance<br>or repair work. Includes lists of necessary tools, additional doc-<br>uments, safety standards etc.|
|Spare part / part list|Complete spare part list and complete list of robot components,<br>shown in exploded views.|
|Exploded views|Detailed illustrations of the robot with reference numbers to the<br>part list.|
|Circuit diagram|Reference to the circuit diagram for the robot.|



#### **References** 

|**Reference**|**Document ID**|
|---|---|
|_Product specification - IRB 120_|_3HAC035960-001_|
|_Product manual, spare parts - IRB 120_|_3HAC049098-001_|
|_Product manual - IRC5_<br>IRC5 with main computer DSQC 639.|_3HAC021313-001_|
|_Product manual - IRC5_<br>IRC5 with main computer DSQC1000.|_3HAC047136-001_|
|_Product manual - IRC5 Compact_|_3HAC035738-001_|
|_Product manual - IRC5 Panel Mounted Controller_|_3HAC027707-001_|
|_Technical reference manual - Lubrication in gearboxes_|_3HAC042927-001_|
|_Operating manual - IRC5 with FlexPendant_|_3HAC050941-001_|
|_Operating manual - Emergency safety information_|_3HAC027098-001_<br>Same document num-<br>ber regardless of lan-<br>guage.|
|_Safety manual for robot - Manipulator and IRC5 or OmniCore con-_<br>_troller_ <sup>i</sup>|_3HAC031045-001_|



i This manual contains all safety instructions from the product manuals for the manipulators and the controllers. 

#### **Revisions** 

|**Revision**|**Description**|
|---|---|
|-|First edition|
|A|This revision includes the following additions and/or changes:<br>•<br>Section "_Product documentation, M2004_" added.<br>•<br>Section "_How to read the product manual_" added.<br>•<br>**Safety chapter-**Updated safety signal graphics for levels Danger! and<br>Warning! See section_Safety signals in the manual on page 21_.<br>•<br>**Safety chapter**- New safety labels on the manipulators, see_Safety_<br>_symbols on manipulator labels on page 23_.<br>•<br>**Safety chapter**- Revised terminology:_robot_replaced with_manipulator_.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

10 

© Copyright 2009-2022 ABB. All rights reserved. 

**Overview of this manual** 

_Continued_ 

- **Revision Description** • **Safety chapter** - Information not applicable to IRB 120 in _WARNING - Safety risks during work with gearbox lubricants (oil or grease)_ removed. 

- • **Installation chapter** - Illustration updated in _Risk of tipping/stability on page 48_ . 

- • **Installation chapter** - Attachment screws added in _Lifting the robot with roundslings on page 52_ . 

- • **Installation chapter** - Value in illustration updated in _Orienting and securing the robot on page 59_ . 

- • **Installation chapter** - Section _Setting the system parameters for a suspended or tilted robot on page 64_ new. 

- • **Installation chapter** - Section _Robot cabling and connection points on page 74_ updated. 

- • **Installation chapter** - Section _Customer connections on the robot on page 76_ art. no. on connection at upper arm updated. 

- • **Maintenance chapter** - Value for timing belt tension axis 5 updated. • **Repair chapter** - New chapter. • **Calibration chapter** - Section _Calibrating with manual calibration method on page 234_ updated. 

- • **Calibration chapter** - Section _Synchronization marks and synchronization position for axes on page 222_ updated. 

- • **Reference information chapter** - New chapter. • **Spare parts chapter** - Article numbers and illustrations updated. 

- B This revision includes the following additions and/or changes: • **Installation chapter** - Lifting capacity of roundslings updated. See: _Lifting the robot with roundslings on page 52_ . 

- • **Installation chapter** - New illustration showing IRB 120 added. See: _Setting the system parameters for a suspended or tilted robot on page 64_ . 

- • **Repair chapter** - Illustrations xx0900001009 and xx0900000782 updated. See: _Removing the cable harness on page115_ and _Refitting the cable harness on page 129_ . 

- • **Repair chapter** - Illustration xx0900000924 updated. See: _Replacing the upper arm on page 150_ . 

- • **Repair chapter** - Motor axis 4 now delivered as part of the upper arm. The procedures Removal and Refitting are updated accordingly. See: _Replacing the upper arm on page 150_ . 

- • **Repair chapter** - Motor axis 4 now delivered as part of the upper arm. The section is updated accordingly. See: _Replacing motor axis 4, with gearbox on page 205_ . 

- • **Repair chapter** - Illustration xx0900001009 updated. See: _Replacing motor axis 5 on page 206_ . 

- • **Calibration chapter** updated. See sections: _Calibrating with manual calibration method on page 234_ and _Synchronization marks and synchronization position for axes on page 222_ . 

- • **Reference information chapter** - " _Other standards_ " added. See: _Applicable standards on page 248_ . 

- • **Reference information chapter** - Standard toolkit updated. See: _Standard toolkit on page 252_ . 

- • **Spare parts chapter** - Motor axis 4 (art. no. 3HAC037282-001) removed. Now part of the upper arm. See _Spare parts - Upper arm unit_ in _Product manual, spare parts - IRB 120_ . 

- • **Circuit diagram** - Updated after circuit diagrams now are delivered as separate files. See: _Circuit diagrams on page 257_ . 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

11 

© Copyright 2009-2022 ABB. All rights reserved. 

**Overview of this manual** 

#### _Continued_ 

|**Revision**|**Description**|
|---|---|
|C|This revision includes the following additions and/or changes:<br>•<br>**Repair chapter**- Text added on how to position axis 5. See section<br>_Removing the cable harness on page 115_.<br>•<br>**Repair chapter**- Text added on how to position axis 5. See section<br>_Refitting the cable harness on page 129_.<br>•<br>**Repair chapter**- Text added on how to position axis 5. See section<br>_Replacing the upper arm on page 150_.<br>•<br>**Calibration chapter**- Text added about updating the revolution<br>counters. See section_Calibrating with manual calibration method on_<br>_page 234_.<br>•<br>**Calibration chapter**- Introduction updated. See section_Synchroniza-_<br>_tion marks and synchronization position for axes on page 222_.<br>•<br>**Spare parts chapter**- Illustration xx0900000544 updated. See_Spare_<br>_parts - Upper arm unit_in_Product manual, spare parts - IRB 120_.|
|D|This revision includes the following additions and/or changes:<br>•<br>A new block, about general illustrations, added in section_How to read_<br>_the product manual on page 17_.<br>•<br>Clean Room protection added.<br>•<br>Illustrations updated throughout the manual.<br>•<br>**Calibration chapter**- Text removed:_Updating the revolution counters_.<br>•<br>Added section_Handling of batteries_.|
|E|This revision includes the following additions and/or changes:<br>•<br>Section_Expected component life_removed from the manual.<br>•<br>Added inspection activity for regular/daily inspection of robot to the<br>maintenance schedule, see_Maintenance schedule on page 83_.<br>•<br>Added the spare part number for the gearbox grease in section Type<br>of grease, gearboxes.<br>•<br>Changed the working range of axis 3, see_Working range and type of_<br>_motion on page 46_.<br>•<br>Changed the illustration that shows the mounting surface of the tool<br>flange, see_Fitting equipment on robot on page 61_.<br>•<br>Added variant IRB 120T - 3/0.6 to the manual.|
|F|This revision includes the following additions and/or changes:<br>•<br>Information regarding disassembly of_Clean Room_robots added to<br>concerned repair instructions.<br>•<br>All data about type of lubrication in gearboxes is moved from the<br>manual to a separate lubrication manual, see_Type of lubrication in_<br>_gearboxes on page 101_.<br>•<br>Added data for extended working range of axis 6, see_Working range_<br>_and type of motion on page 46_.|
|G|This revision includes the following additions and/or changes:<br>•<br>Added information about brake release for other controller variants<br>than IRC5 Compact, see_Manually releasing the brakes on page 55_.<br>•<br>Procedure how to replace the axis-1 motor with gearbox has been<br>updated. See_Replacing axis-1 motor with gearbox on page 164_.<br>•<br>Procedure how to replace the axis-2 motor with gearbox has been<br>updated. See_Replacing axis-2 motor with gearbox on page 185_.|
|H|This revision includes the following additions and/or changes:<br>•<br>Changed torque value in instruction for refitting the axis-5 motor, see<br>_Replacing motor axis 5 on page 206_.<br>•<br>Added information about risks when scrapping a decommissioned<br>robot, see_Scrapping of robot on page 246_.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

12 

© Copyright 2009-2022 ABB. All rights reserved. 

**Overview of this manual** 

_Continued_ 

|**Revision**|**Desc**|**ription**|
|---|---|---|
||•<br>•|Added information about how to update the revolution counters, see<br>_Updating revolution counters on IRC5 robots on page 225_, and<br>_Checking the synchronization position on page 241_.<br>_Spare parts and exploded views_are not included in this document<br>but delivered as a separate document. See_Spare part lists_in_Product_<br>_manual, spare parts - IRB 120_|
|J|This r<br>•|evision includes the following additions and/or changes:<br>The list of applicable safety standards is updated. The IRB 120 does<br>not comply with the CSA/UL standards, see_id(19755)Applicable safety_<br>_standards_en.xml_.|
|K|This r<br>•<br>•<br>•<br>•<br>•|evision includes the following additions and/or changes:<br>Procedure how to change Cable harness has been updated.<br>Procedure how to change axis-1 motor with gearbox has been updated.<br>_Replacing axis-1 motor with gearbox on page 164_.<br>Release holes in swing plate and lower arm housing added (repair<br>instructions motor axis-1 and motor axis-2 changed)<br>Tightening torque for axis-3 motor changed<br>Updated timing belt tension for axis-3 motor and axis-5 motor|
|L|This r<br>•<br>•<br>•<br>•<br>•|evision includes the following additions and/or changes:<br>Removed information about signal lamp from the manual since it is<br>not a valid option for IRB 120.<br>Information about manual break release added to installation chapter.<br>New standard calibration method is introduced (Axis Calibration). See<br>_Calibration on page 219_.<br>Information about Absolute Accuracy removed from the robot.<br>Food grade lubrication option added.|
|M|Publi<br>•<br>•|shed in release R16.2. The following updates are done in this revision:<br>Information of some attachment screws and washers added.<br>Modified specification of attachment screws from M4x8 to M4x10 for<br>fitting the bracket securing the upper arm to the base.|
|N|Publi<br>•<br>•<br>•<br>•<br>•<br>•|shed in release R17.2. The following updates are done in this revision:<br>Location and replacing procedure of lower arm have been updated.<br>_Lower arm on page 159_.<br>Procedure about how to replace axis-1 motor with gearbox has been<br>updated._Replacing axis-1 motor with gearbox on page 164_.<br>Information about minimum resonance frequency added.<br>Bending radius for static floor cables added.<br>Updated list of applicable standards.<br>Section_Start of robot in cold environments on page 79_added.|
|P|Publi<br>•<br>•<br>•<br>•|shed in release R18.1. The following updates are done in this revision:<br>Added sections in_General procedures on page 110_.<br>Safety section restructured.<br>Updated description about Clean Room class.<br>Information about myABB Business Portal added.|
|Q|Publi<br>•<br>•<br>•|shed in release R18.2. The following updates are done in this revision:<br>Added section for inspection of labels in maintenance chapter.<br>Added CP/CS cable information.<br>Updated customer connector description.|
|R|Publi<br>•|shed in release R18.2. The following updates are made in this revision:<br>Updated references.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

13 

© Copyright 2009-2022 ABB. All rights reserved. 

**Overview of this manual** 

#### _Continued_ 

|**Revision**|**Desc**|**ription**|
|---|---|---|
|S|Publi<br>•<br>•<br>•|shed in release 19B. The following updates are made in this revision:<br>New touch up color Graphite White available. See_Cut the paint or_<br>_surface on the robot before replacing parts on page 113_.<br>New article numbers for manipulator cables in section_Robot cable,_<br>_signal on page 74_.<br>Added adjustment procedures for axis-3 and -5 timing belts.|
|T|Publi<br>•|shed in release 19D. The following updates are made in this revision:<br>Note added about the need to calibrate if the robot is other than floor<br>mounted. See_When to calibrate on page 221_.|
|U|Publi<br>•<br>•<br>•<br>•<br>•|shed in release 20D. The following updates are made in this revision:<br>Clarified and added information in mounting instructions for rotating<br>sealings, see_Mounting instructions for sealings on page 110_.<br>Clarified text about position of robot and added table with dependen-<br>cies between axes during Axis Calibration.<br>Added information about maintenance activity of robot overhaul.<br>Replaced article number and name of grease, previously 3HAB3537-<br>1.<br>Replaced cable grease name for food grade lubrication, previously<br>Mobil FM2222, to LUBRIPLATE SYNXTREME FG-0.|
|V|Publi<br>•<br>•|shed in release 21B. The following updates are done in this revision:<br>Text regarding fastener quality is updated, see_Fastener quality on_<br>_page 63_.<br>Text regarding diameter of air hoses is updated, see_Customer con-_<br>_nections on the robot on page 76_.|
|W|Publi<br>•<br>•|shed in release 22B. The following updates are done in this revision:<br>Updated information about Gleitmo treated screws, see_Screw joints_<br>_on page 250_.<br>Added cleaning instructions for robots with protection type Clean<br>Room.|



Product manual - IRB 120 3HAC035728-001 Revision: W 

14 

© Copyright 2009-2022 ABB. All rights reserved. 

**Product documentation** 

## **Product documentation** 

#### **Categories for user documentation from ABB Robotics** 

The user documentation from ABB Robotics is divided into a number of categories. This listing is based on the type of information in the documents, regardless of whether the products are standard or optional. 

#### **Tip** 

All documents can be found via myABB Business Portal, _<u>www.abb.com/myABB</u>_ <u>.</u> 

#### **Product manuals** 

Manipulators, controllers, DressPack/SpotPack, and most other hardware is delivered with a **Product manual** that generally contains: 

- Safety information. 

- Installation and commissioning (descriptions of mechanical installation or electrical connections). 

- Maintenance (descriptions of all required preventive maintenance procedures including intervals and expected life time of parts). 

- Repair (descriptions of all recommended repair procedures including spare parts). 

- Calibration. 

- Decommissioning. 

- Reference information (safety standards, unit conversions, screw joints, lists of tools). 

- Spare parts list with corresponding figures (or references to separate spare parts lists). 

- References to circuit diagrams. 

#### **Technical reference manuals** 

The technical reference manuals describe reference information for robotics products, for example lubrication, the RAPID language, and system parameters. 

#### **Application manuals** 

Specific applications (for example software or hardware options) are described in **Application manuals** . An application manual can describe one or several applications. 

An application manual generally contains information about: 

- The purpose of the application (what it does and when it is useful). 

- What is included (for example cables, I/O boards, RAPID instructions, system parameters, software). 

- How to install included or required hardware. 

- How to use the application. 

- Examples of how to use the application. 

_Continues on next page_ 

Product manual - IRB 120 

15 

3HAC035728-001 Revision: W 

© Copyright 2009-2022 ABB. All rights reserved. 

**Product documentation** 

_Continued_ 

#### **Operating manuals** 

The operating manuals describe hands-on handling of the products. The manuals are aimed at those having first-hand operational contact with the product, that is production cell operators, programmers, and troubleshooters. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

16 

© Copyright 2009-2022 ABB. All rights reserved. 

**How to read the product manual** 

## **How to read the product manual** 

#### **Reading the procedures** 

The procedures contain references to figures, tools, material, and so on. The references are read as described below. 

#### References to figures 

The procedures often include references to components or attachment points located on the manipulator/controller. The components or attachment points are marked with _italic text_ in the procedures and completed with a reference to the figure where the current component or attachment point is shown. 

The denomination in the procedure for the component or attachment point corresponds to the denomination in the referenced figure. 

The table below shows an example of a reference to a figure from a step in a procedure. 

||**Action**|**Note/Illustration**|
|---|---|---|
|8.|Remove the_rear attachment screws, gearbox._|Shown in the figure_Location of_<br>_gearbox on page xx_.|



#### References to required equipment 

The procedures often include references to equipment (spare parts, tools, etc.) required for the different actions in the procedure. The equipment is marked with _italic text_ in the procedures and completed with a reference to the section where the equipment is listed with further information, that is article number and dimensions. 

The designation in the procedure for the component or attachment point corresponds to the designation in the referenced list. 

The table below shows an example of a reference to a list of required equipment from a step in a procedure. 

||**Action**|**Note/Illustration**|
|---|---|---|
|3.|Fit a new_sealing, axis 2_to the gearbox.|Art. no. is specified in_Required_<br>|
|||_equipment on page xx._|



#### **Safety information** 

The manual includes a separate safety chapter that must be read through before proceeding with any service or installation procedures. All procedures also include specific safety information when dangerous steps are to be performed. 

Read more in the chapter _Safety on page 19_ . 

#### **Illustrations** 

The robot is illustrated with general figures that does not take painting or protection type in consideration. 

Likewise, certain work methods or general information that is valid for several robot models, can be illustrated with illustrations that show a different robot model than the one that is described in the current manual. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

17 

© Copyright 2009-2022 ABB. All rights reserved. 

This page is intentionally left blank 

**1 Safety** 

#### 1.1.1 Limitation of liability 

## **1 Safety** 

### **1.1 Safety information** 

### **1.1.1 Limitation of liability** 

#### **Limitation of liability** 

Any information given in this manual regarding safety must not be construed as a warranty by ABB that the industrial robot will not cause injury or damage even if all safety instructions are complied with. 

The information does not cover how to design, install and operate a robot system, nor does it cover all peripheral equipment that can influence the safety of the robot system. 

In particular, liability cannot be accepted if injury or damage has been caused for any of the following reasons: 

- Use of the robot in other ways than intended. 

- Incorrect operation or maintenance. 

- Operation of the robot when the safety devices are defective, not in their intended location or in any other way not working. 

- When instructions for operation and maintenance are not followed. 

- Non-authorized design modifications of the robot. 

- Repairs on the robot and its spare parts carried out by in-experienced or non-qualified personnel. 

- Foreign objects. 

- Force majeure. 

#### **Spare parts and equipment** 

ABB supplies original spare parts and equipment which have been tested and approved. The installation and/or use of non-original spare parts and equipment can negatively affect the safety, function, performance, and structural properties of the robot. ABB is not liable for damages caused by the use of non-original spare parts and equipment. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

19 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.1.2 Requirements on personnel 

### **1.1.2 Requirements on personnel** 

#### **General** 

Only personnel with appropriate training are allowed to install, maintain, service, repair, and use the robot. This includes electrical, mechanical, hydraulics, pneumatics, and other hazards identified in the risk assessment. 

Persons who are under the influence of alcohol, drugs or any other intoxicating substances are not allowed to install, maintain, service, repair, or use the robot. 

The plant liable must make sure that the personnel is trained on the robot, and on responding to emergency or abnormal situations. 

#### **Personal protective equipment** 

Use personal protective equipment, as stated in the instructions. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

20 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

1.2.1 Safety signals in the manual 

### **1.2 Safety signals and symbols** 

### **1.2.1 Safety signals in the manual** 

#### **Introduction to safety signals** 

This section specifies all safety signals used in the user manuals. Each signal consists of: 

- A caption specifying the hazard level (DANGER, WARNING, or CAUTION) and the type of hazard. 

- Instruction about how to reduce the hazard to an acceptable level. 

- A brief description of remaining hazards, if not adequately reduced. 

#### **Hazard levels** 

The table below defines the captions specifying the hazard levels used throughout this manual. 

|**Symbol**|**Designation**|**Significance**|
|---|---|---|
||DANGER|Signal word used to indicate an imminently hazard-<br>ous situation which, if not avoided, will result in ser-<br>ious injury.|
||WARNING|Signal word used to indicate a potentially hazardous<br>situation which, if not avoided, could result in serious<br>injury.|
||ELECTRICAL<br>SHOCK|Signal word used to indicate a potentially hazardous<br>situation related to electrical hazards which, if not<br>avoided, could result in serious injury.|
||CAUTION|Signal word used to indicate a potentially hazardous<br>situation which, if not avoided, could result in slight<br>injury.|
||ELECTROSTATIC<br>DISCHARGE (ESD)|Signal word used to indicate a potentially hazardous<br>situation which, if not avoided, could result in severe<br>damage to the product.|
||NOTE|Signal word used to indicate important facts and<br>conditions.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

21 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.2.1 Safety signals in the manual _Continued_ 

|**Symbol**|**Designation**|**Significance**|
|---|---|---|
||TIP|Signal word used to indicate where to find additional<br>information or how to do an operation in an easier<br>way.|



Product manual - IRB 120 3HAC035728-001 Revision: W 

22 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.2.2 Safety symbols on manipulator labels 

### **1.2.2 Safety symbols on manipulator labels** 

#### **Introduction to symbols** 

This section describes safety symbols used on labels (stickers) on the manipulator. Symbols are used in combinations on the labels, describing each specific warning. The descriptions in this section are generic, the labels can contain additional information such as values. 

#### **Note** 

The symbols on the labels on the product must be observed. Additional symbols added by the integrator must also be observed. 

#### **Types of symbols** 

Both the manipulator and the controller are marked with symbols, containing important information about the product. This is important for all personnel handling the robot, for example during installation, service, or operation. 

The safety labels are language independent, they only use graphics. See _Symbols on safety labels on page 23_ . 

The information labels can contain information in text. 

#### **Symbols on safety labels** 

|**Symbol**|**Description**|
|---|---|
|xx0900000812|**Warning!**<br>Warns that an accident_may_occur if the instructions are not<br>followed that can lead to serious injury, possibly fatal, and/or<br>great damage to the product. It applies to warnings that apply<br>to danger with, for example, contact with high voltage electrical<br>units, explosion or fire risk, risk of poisonous gases, risk of<br>crushing, impact, fall from height, etc.|
|xx0900000811|**Caution!**<br>Warns that an accident may occur if the instructions are not<br>followed that can result in injury and/or damage to the product.<br>It also applies to warnings of risks that include burns, eye injury,<br>skin injury, hearing damage, crushing or slipping, tripping, im-<br>pact, fall from height, etc. Furthermore, it applies to warnings<br>that include function requirements when fitting and removing<br>equipment where there is a risk of damaging the product or<br>causing a breakdown.|
|xx0900000839|**Prohibition**<br>Used in combinations with other symbols.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

23 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.2.2 Safety symbols on manipulator labels _Continued_ 



<!-- Start of picture text -->
Symbol Description<br>See user documentation<br>Read user documentation for details.<br>Which manual to read is defined by the symbol:<br>• No text:  Product manual .<br>• EPS:  Application manual - Electronic Position Switches .<br>xx0900000813<br>Before disassembly, see product manual<br>xx0900000816<br>Do not disassemble<br>Disassembling this part can cause injury.<br>xx0900000815<br>Extended rotation<br>This axis has extended rotation (working area) compared to<br>standard.<br>xx0900000814<br>Brake release<br>Pressing this button will release the brakes. This means that<br>the robot arm can fall down.<br>xx0900000808<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

24 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.2.2 Safety symbols on manipulator labels _Continued_ 



<!-- Start of picture text -->
Symbol Description<br>Tip risk when loosening bolts<br>The robot can tip over if the bolts are not securely fastened.<br>xx0900000810<br>xx1500002402<br>Crush<br>Risk of crush injuries.<br>xx0900000817<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

25 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.2.2 Safety symbols on manipulator labels _Continued_ 



<!-- Start of picture text -->
Symbol Description<br>Heat<br>Risk of heat that can cause burns. (Both signs are used)<br>xx0900000818<br>!<br>xx1300001087<br>Moving robot<br>3 4 5 6 The robot can move unexpectedly.<br>2<br>1<br>xx0900000819<br>xx1000001141<br>4<br>2 3<br>1<br>xx1500002616<br>3HAC 4431-1/06<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

26 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.2.2 Safety symbols on manipulator labels _Continued_ 



<!-- Start of picture text -->
Symbol Description<br>Brake release buttons<br>xx0900000820<br>xx1000001140<br>Lifting bolt<br>xx0900000821<br>Chain sling with shortener<br>xx1000001242<br>Lifting of robot<br>xx0900000822<br>Oil<br>Can be used in combination with prohibition if oil is not allowed.<br>xx0900000823<br>Mechanical stop<br>xx0900000824<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

27 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.2.2 Safety symbols on manipulator labels _Continued_ 



<!-- Start of picture text -->
Symbol Description<br>No mechanical stop<br>xx1000001144<br>Stored energy<br>Warns that this part contains stored energy.<br>Used in combination with  Do not disassemble  symbol.<br>xx0900000825<br>Pressure<br>Warns that this part is pressurized. Usually contains additional<br>text with the pressure level.<br>xx0900000826<br>Shut off with handle<br>Use the power switch on the controller.<br>xx0900000827<br>Do not step<br>Warns that stepping on these parts can cause damage to the<br>parts.<br>xx1400002648<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

28 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

1.3 Robot stopping functions 

### **1.3 Robot stopping functions** 

#### **Protective stop and emergency stop** 

The protective stops and emergency stops are described in the product manual for the controller. 

For more information see: 

- _Product manual - IRC5_ 

- _Product manual - IRC5 Compact_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

29 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.4 Safety during installation and commissioning 

### **1.4 Safety during installation and commissioning** 

#### **National or regional regulations** 

The integrator of the robot system is responsible for the safety of the robot system. The integrator is responsible that the robot system is designed and installed in accordance with the safety requirements set forth in the applicable national and regional standards and regulations. 

The integrator of the robot system is required to perform a risk assessment. 

#### **Layout** 

The robot integrated to a robot system shall be designed to allow safe access to all spaces during installation, operation, maintenance, and repair. 

If robot movement can be initiated from an external control panel then an emergency stop must also be available. 

If the manipulator is delivered with mechanical stops, these can be used for reducing the working space. 

A perimeter safeguarding, for example a fence, shall be dimensioned to withstand the following: 

- The force of the manipulator. 

- The force of the load handled by the robot if dropped or released at maximum speed. 

- The maximum possible impact caused by a breaking or malfunctioning rotating tool or other device fitted to the robot. 

The maximum TCP speed and the maximum velocity of the robot axes are detailed in the section _Robot motion_ in the product specification for the respective manipulator. 

Consider exposure to hazards, such as slipping, tripping, and falling. 

Hazards due to the working position and posture for a person working with or near the robot shall be considered. 

Hazards due to noise emission from the robot needs to be considered. 

Consider hazards from other equipment in the robot system, for example, that guards remain active until identified hazards are reduced to an acceptable level. 

#### **Allergenic material** 

See _Environmental information on page244_ for specification of allergenic materials in the product, if any. 

#### **Securing the robot to the foundation** 

The robot must be properly fixed to its foundation/support, as described in the respective product manual. 

When the robot is installed at a height, hanging, or other than mounted directly on the floor, there will be additional hazards. 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

30 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.4 Safety during installation and commissioning 

#### _Continued_ 

#### **Electrical safety** 

Incoming mains must be installed to fulfill national regulations. 

The power supply wiring to the robot must be sufficiently fused and if necessary, it must be possible to disconnect it manually from the mains power. 

The power to the robot must be turned off with the main switch and the mains power disconnected when performing work inside the controller cabinet. Lock and tag shall be considered. 

Harnesses between controller and manipulator shall be fixed and protected to avoid tripping and wear. 

Wherever possible, power on/off or rebooting the robot controller shall be performed with all persons outside the safeguarded space. 

#### **Note** 

Use a CARBON DIOXIDE (CO2) extinguisher in the event of a fire in the robot. 

#### **Safety devices** 

The integrator is responsible for that the safety devices necessary to protect people working with the robot system are designed and installed correctly. 

When integrating the robot with external devices to a robot system: 

- The integrator of the robot system must ensure that emergency stop functions are interlocked in accordance with applicable standards. 

- The integrator of the robot system must ensure that safety functions are interlocked in accordance with applicable standards. 

#### **Other hazards** 

A robot may perform unexpected limited movement. 

#### **WARNING** 

Manipulator movements can cause serious injuries on users and may damage equipment. 

The risk assessment should also consider other hazards arising from the application, such as, but not limited to: 

- Water 

- Compressed air 

- Hydraulics 

End-effector hazards require particular attention for applications which involve close human collaboration with the robot. 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

31 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.4 Safety during installation and commissioning _Continued_ 

#### **Pneumatic or hydraulic related hazards** 

#### **Note** 

The pressure in the complete pneumatic or hydraulic systems must be released before service and maintenance. 

All components in the robot system that remain pressurized after switching off the power to the robot must be marked with clearly visible drain facilities and a warning sign that indicates the hazard of stored energy. 

Loss of pressure in the robot system may cause parts or objects to drop. Dump valves should be used in case of emergency. 

Shot bolts should be used to prevent tools, etc., from falling due to gravity. 

All pipes, hoses, and connections have to be inspected regularly for leaks and damage. Damage must be repaired immediately. 

#### **Verify the safety functions** 

Before the robot system is put into operation, verify that the safety functions are working as intended and that any remaining hazards identified in the risk assessment are mitigated to an acceptable level. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

32 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

1.5 Safety during operation 

### **1.5 Safety during operation** 

#### **Automatic operation** 

Verify the application in the operating mode manual reduced speed, before changing mode to automatic and initiating automatic operation. 

#### **Unexpected movement of robot arm** 

#### **WARNING** 

Hazards due to the use of brake release devices and/or gravity beneath the manipulator shall be considered. 

A robot may perform unexpected limited movement. 

#### **WARNING** 

Manipulator movements can cause serious injuries on users and may damage equipment. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

33 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.6.1 Safety during maintenance and repair 

### **1.6 Safety during maintenance and repair** 

### **1.6.1 Safety during maintenance and repair** 

#### **General** 

Corrective maintenance must only be carried out by personnel trained on the robot. Maintenance or repair must be done with all electrical, pneumatic, and hydraulic power switched off, that is, no remaining hazards. 

Hazards due to stored mechanical energy in the manipulator for the purpose of counterbalancing axes must be considered before maintenance or repair. 

Never use the robot as a ladder, which means, do not climb on the controller, manipulator, including motors, or other parts. There are hazards of slipping and falling. The robot might be damaged. 

Make sure that there are no loose screws, turnings, or other unexpected parts remaining after work on the robot has been performed. 

When the work is completed, verify that the safety functions are working as intended. 

#### **Hot surfaces** 

Surfaces can be hot after running the robot, and touching these may result in burns. Allow the surfaces to cool down before maintenance or repair. 

#### **Allergic reaction** 

|**Warning**|**Description**|**Elimination/Action**|
|---|---|---|
||When working with lubricants<br>there is a risk of an allergic reac-<br>tion.|Make sure that protective gear<br>like goggles and gloves are al-<br>ways worn.|
|**Allergic reaction**|||



#### **Gearbox lubricants (oil or grease)** 

When handling oil, grease, or other chemical substances the safety information of the respective manufacturer must be observed. 

#### **Note** 

Take special care when handling hot lubricants. 

|**Warning**|**Description**|**Elimination/Action**|
|---|---|---|
||Changing and draining gearbox<br>oil or grease may require hand-<br>ling hot lubricant heated up to<br>90 °C.|Make sure that protective gear<br>like goggles and gloves are al-<br>ways worn during this activity.|
|**Hot oil or grease**|||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

34 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.6.1 Safety during maintenance and repair _Continued_ 

|**Warning**|**Description**|**Elimination/Action**|
|---|---|---|
||When working with lubricants<br>there is a risk of an allergic reac-<br>tion.|Make sure that protective gear<br>like goggles and gloves are al-<br>ways worn.|
|**Allergic reaction**|||
|**Possible pressure**<br>**build-up in gearbox**|When opening the oil or grease<br>plug, there may be pressure<br>present in the gearbox, causing<br>lubricant to spray from the<br>opening.|Open the plug carefully and keep<br>away from the opening. Do not<br>overfill the gearbox when filling.|
|**Do not overfill**|Overfilling of gearbox lubricant<br>can lead to internal over-pres-<br>sure inside the gearbox which in<br>turn may:<br>•<br>damage seals and gas-<br>kets<br>•<br>completely press out<br>seals and gaskets<br>•<br>prevent the robot from<br>moving freely.|Make sure not to overfill the<br>gearbox when filling it with oil or<br>grease.<br>After filling, verify that the level<br>is correct.|
|**Specified amount de-**<br>**pends on drained**<br>**volume**|The specified amount of oil or<br>grease is based on the total<br>volume of the gearbox. When<br>changing the lubricant, the<br>amount refilled may differ from<br>the specified amount, depending<br>on how much has previously<br>been drained from the gearbox.|After filling, verify that the level<br>is correct.|
||For lifetime reasons always drain<br>as much oil as possible from the<br>gearbox. The magnetic oil plugs<br>will gather residual metal chips.||
|**Contaminated oil in**<br>**gearboxes**|||



#### **Hazards related to batteries** 

Under rated conditions, the electrode materials and liquid electrolyte in the batteries are sealed and not exposed to the outside. 

There is a hazard in case of abuse (mechanical, thermal, electrical) which leads to the activation of safety valves and/or the rupture of the battery container. As a result under certain circumstances, electrolyte leakage, electrode materials reaction with moisture/water or battery vent/explosion/fire may follow. 

Do not short circuit, recharge, puncture, incinerate, crush, immerse, force discharge or expose to temperatures above the declared operating temperature range of the product. Risk of fire or explosion. 

Operating temperatures are listed in _Operating conditions, robot on page 45_ . 

See safety instructions for the batteries in _Material/product safety data sheet - Battery pack_ ( _3HAC043118-001_ ). 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

35 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.6.1 Safety during maintenance and repair _Continued_ 

#### **Unexpected movement of robot arm** 

#### **WARNING** 

Hazards due to the use of brake release devices and/or gravity beneath the manipulator shall be considered. 

A robot may perform unexpected limited movement. 

#### **WARNING** 

Manipulator movements can cause serious injuries on users and may damage equipment. 

#### **Related information** 

See also the safety information related to installation and operation. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

36 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.6.2 Emergency release of the robot axes 

### **1.6.2 Emergency release of the robot axes** 

#### **Description** 

In an emergency situation, the brakes on a robot axis can be released manually by pushing a brake release button. 

How to release the brakes is described in the section: 

- _Manually releasing the brakes on page 55_ . 

The robot may be moved manually on smaller robot models, but larger models may require using an overhead crane or similar equipment. 

#### **Increased injury** 

Before releasing the brakes, make sure that the weight of the manipulator does not result in additional hazards, for example, even more severe injuries on a trapped person. 

#### **DANGER** 

When releasing the holding brakes, the robot axes may move very quickly and sometimes in unexpected ways. 

Make sure no personnel is near or beneath the robot. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

37 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.6.3 Brake testing 

### **1.6.3 Brake testing** 

#### **When to test** 

During operation, the holding brake of each axis normally wears down. A test can be performed to determine whether the brake can still perform its function. 

#### **How to test** 

The function of the holding brake of each axis motor may be verified as described below: 

- 1 Run each axis to a position where the combined weight of the manipulator and any load is maximized (maximum static load). 

- 2 Switch the motor to the MOTORS OFF. 

- 3 Inspect and verify that the axis maintains its position. 

   - If the manipulator does not change position as the motors are switched off, then the brake function is adequate. 

#### **Note** 

It is recommended to run the service routine _BrakeCheck_ as part of the regular maintenance, see the operating manual for the robot controller. 

For robots with the option SafeMove, the _Cyclic Brake Check_ routine is recommended. See the manual for SafeMove in _References on page 10_ . 

Product manual - IRB 120 3HAC035728-001 Revision: W 

38 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

#### 1.7 Safety during troubleshooting 

### **1.7 Safety during troubleshooting** 

#### **General** 

When troubleshooting requires work with power switched on, special considerations must be taken: 

- Safety circuits might be muted or disconnected. 

- Electrical parts must be considered as _live_ . 

- The manipulator can move unexpectedly at any time. 

#### **DANGER** 

Troubleshooting on the controller while powered on must be performed by personnel trained by ABB or by ABB field engineers. 

A risk assessment must be done to address both robot and robot system specific hazards. 

#### **WARNING** 

Hazards due to the use of brake release devices and/or gravity beneath the manipulator shall be considered. 

A robot may perform unexpected limited movement. 

#### **WARNING** 

Manipulator movements can cause serious injuries on users and may damage equipment. 

#### **Related information** 

See also the safety information related to installation, operation, maintenance, and repair. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

39 

© Copyright 2009-2022 ABB. All rights reserved. 

**1 Safety** 

- 1.8 Safety during decommissioning 

### **1.8 Safety during decommissioning** 

#### **General** 

See section _Decommissioning on page 243_ . 

If the robot is decommissioned for storage, take extra precaution to reset safety devices to delivery status. 

#### **Unexpected movement of robot arm** 

#### **WARNING** 

Hazards due to the use of brake release devices and/or gravity beneath the manipulator shall be considered. 

A robot may perform unexpected limited movement. 

#### **WARNING** 

Manipulator movements can cause serious injuries on users and may damage equipment. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

40 

© Copyright 2009-2022 ABB. All rights reserved. 

#### **Safety information** 

Before any installation work is commenced, all safety information must be observed. There are general safety aspects that must be read through, as well as more specific safety information that describes the danger and safety risks when performing the procedures. Read the chapter _Safety on page19_ before performing any installation work. 

#### **Note** 

Always connect the IRB 120 and the robot to protective earth and residual current device (RCD) before connecting to power and starting any installation work. For more information see: 

- _Product manual - IRC5_ 

- _Product manual - IRC5 Compact_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

41 

© Copyright 2009-2022 ABB. All rights reserved. 

#### **Weight, robot** 

#### The table shows the weight of the robot. 

|**Robot model**<br>IRB 120|**Weight**<br>25 kg|
|---|---|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

42 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

2.2.1 Pre-installation procedure _Continued_ 

#### **Note** 

The weight does not include tools and other equipment fitted on the robot. 

#### **Loads on foundation, robot** 

The illustration shows the directions of the robots stress forces. 

The directions are valid for all floor mounted, suspended and inverted robots. 





<!-- Start of picture text -->
T xy<br>F z<br>F xy<br>T z<br>xx1100000521<br><!-- End of picture text -->

|Fxy|Force in any direction in the XY plane|
|---|---|
|Fz|Force in the Z plane|
|Txy|Bending torque in any direction in the XY plane|
|Tz|Bending torque in the Z plane|



The table shows the various forces and torques working on the robot during different kinds of operation. 

#### **Note** 

These forces and torques are extreme values that are rarely encountered during operation. The values also never reach their maximum at the same time! 

#### **WARNING** 

The robot installation is restricted to the mounting options given in following load table(s). 

#### Floor mounted 

|**Force**|**Endurance load (in operation)**|**Max. load**|**(emergency stop)**|
|---|---|---|---|
|Force xy|±265 N|±515 N||
||||_Continues on nextpage_|
|0|||43|



Product manual - IRB 120 

3HAC035728-001 Revision: W 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.2.1 Pre-installation procedure 

#### _Continued_ 

|**Force**|**Endurance load (in operation)**|**Max. load (emergency stop)**|
|---|---|---|
|Force z|-265 ±200 N|-265 ±365 N|
|Torque xy|±195 Nm|±400 Nm|
|Torque z|±85 Nm|±155 Nm|



#### Wall mounted 

|**Force**|**Endurance load (in operation)**|**Max. load (emergency stop)**|
|---|---|---|
|Force xy|±470 N|±735 N|
|Force z|0 ±200 N|0 ±630 N|
|Torque xy|±240 Nm|±450 Nm|
|Torque z|±90 Nm|±175 Nm|



#### Suspended 

|**Force**|**Endurance load (in operation)**|**Max. load (emergency stop)**|
|---|---|---|
|Force xy|±265 N|±515 N|
|Force z|265 ±200 N|265 ±365 N|
|Torque xy|±195 Nm|±400 Nm|
|Torque z|±85 Nm|±155 Nm|



#### **Requirements, foundation** 

The table shows the requirements for the foundation where the weight of the installed robot is included: 

|**Requirement**|**Value**|**Note**|
|---|---|---|
|Flatness of foundation<br>surface|0.1/500 mm|Flat foundations give better repeatability of the<br>resolver calibration compared to original settings<br>on delivery from ABB.<br>The value for levelness aims at the circumstance<br>of the anchoring points in the robot base.|
|Maximum tilt|5°||
|Minimum resonance<br>frequency|22 Hz<br>**Note**<br>It may affect the<br>manipulator life-<br>time to have a<br>lower resonance<br>frequency than<br>recommended.|The value is recommended for optimal perform-<br>ance.<br>Due to foundation stiffness, consider robot mass<br>including equipment.<sup>i</sup><br>For information about compensating for founda-<br>tion flexibility, see the application manual of the<br>controller software, section_Motion Process_<br>_Mode_.|



i The minimum resonance frequency given should be interpreted as the frequency of the robot mass/inertia, robot assumed stiff, when a foundation translational/torsional elasticity is added, i.e., the stiffness of the pedestal where the robot is mounted. The minimum resonance frequency should not be interpreted as the resonance frequency of the building, floor etc. For example, if the equivalent mass of the floor is very high, it will not affect robot movement, even if the frequency is well below the stated frequency. The robot should be mounted as rigid as possibly to the floor. Disturbances from other machinery will affect the robot and the tool accuracy. The robot has resonance frequencies in the region 10 – 20 Hz and disturbances in this region will be amplified, although somewhat damped by the servo control. This might be a problem, depending on the requirements from the applications. If this is a problem, the robot needs to be isolated from the environment. 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

44 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

2.2.1 Pre-installation procedure _Continued_ 

#### **Storage conditions, robot** 

The table shows the allowed storage conditions for the robot: 

|**Parameter**|**Value**|
|---|---|
|Minimum ambient temperature|-25° C|
|Maximum ambient temperature|+55° C|
|Maximum ambient temperature (less than 24 hrs)|+70° C|
|Maximum ambient humidity|95% at constant temperature<br>(gaseous only)|



#### **Operating conditions, robot** 

The table shows the allowed operating conditions for the robot: 

|**Parameter**|**Value**|
|---|---|
|Minimum ambient temperature|+5ºC <sup>i</sup>|
|Maximum ambient temperature|+45ºC|
|Maximum ambient temperature|+35ºC <sup>ii</sup>|
|for robots with food grade lubrication||
|Maximum ambient humidity|Max 95% at constant temperature|



- i At low environmental temperature < 10ºC is, as with any other machine, a warm-up phase recommended to be run with the robot. Otherwise there is a risk that the robot stops or run with lower performance due to temperature dependent oil and grease viscosity. 

- ii For robots with food grade lubrication If environment temperature > 35ºC, contact ABB for further information. 

#### **Protection classes, robot** 

The table shows the available protection types of the robot, with the corresponding protection class. 

|**Protection type**|**Protection class**<sup>**I**</sup>|
|---|---|
|Manipulator, protection type Standard|IP 30|
|Manipulator, protection type Clean Room|IP 30|



Product manual - IRB 120 3HAC035728-001 Revision: W 

45 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.2.2 Working range and type of motion 

### **2.2.2 Working range and type of motion** 

#### **Working range** 

The figures show the working ranges of the robot. 

The extreme positions of the robot arm are specified at the wrist center (dimensions in mm). 

#### **Working range** 

The illustration shows the unrestricted working range of the robot. 

Pos 1 



<!-- Start of picture text -->
Z<br>Pos 0<br>Pos 6<br>Pos 7 Pos 2 Pos 3<br>Pos 8 Pos 4<br>Pos 5 X<br>580 580<br>R 556,1<br>982<br>112<br><!-- End of picture text -->

xx0900000263 

|**Posi-**<br>|**Position at wr**|**ist center (mm)**|**Angle (degrees)**||
|---|---|---|---|---|
|**tion**|**X**|**Z**|**Axis 2**|**Axis 3**|
|A|302 mm|630 mm|0°|0°|
|B|0 mm|870 mm|0°|-77°|
|C|169 mm|300 mm|0°|+70°|
|D|580 mm|270 mm|+90°|-77°|
|E|545 mm|91 mm|+110°|-77°|
|F|-440 mm|-50 mm|-110°|-110°|
|G|-67 mm|445 mm|-110°|+70°|
|H|-580 mm|270 mm|-90°|-77°|
|J|-545 mm|91 mm|-110°|-77°|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

46 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

2.2.2 Working range and type of motion _Continued_ 

#### **Turning radius** 

#### The turning radius of robot is shown in the figure. 



<!-- Start of picture text -->
A B<br>C<br>165°<br>165°<br><!-- End of picture text -->

xx0900000157 

|**Robot variant**|**Pos. A**|**Pos. B**|**Pos. C**|
|---|---|---|---|
|IRB 120-3/0.6|R121 <sup>i</sup>|R580|R169.4|
|i<br>Minimum turning|radius axis 1.|||



#### **Robot motion** 

The table specifies the types and ranges of motion in every axes. 

|**Location of motion**|**Type of motion**|**Range of movement**|
|---|---|---|
|Axis 1|Rotation motion|+165° to -165°|
|Axis 2|Arm motion|+110° to -110°|
|Axis 3|Arm motion|+70° to -110°|
|Axis 4|Wrist motion|+160° to -160°|
|Axis 5|Bend motion|+120° to -120°|
|Axis 6|Turn motion|+400° to -400° (default)<br>+242 revolutions to -242 re-<br>volutions maximum <sup>i</sup>|



- i The default working range for axis 6 can be extended by changing parameter values in the software. Option 610-1 Independent axis can be used for resetting the revolution counter after the axis has been rotated (no need for "rewinding" the axis). 

Product manual - IRB 120 3HAC035728-001 Revision: W 

47 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

2.2.3 Risk of tipping/stability 

### **2.2.3 Risk of tipping/stability** 

#### **Risk of tipping** 

Do not change the robot position before securing it to the foundation. The shipping position is the most stable position. 

#### **Shipping and transportation position** 

This figure shows the robot in its shipping position and transportation position. 



<!-- Start of picture text -->
A<br>20°<br><!-- End of picture text -->

xx0900000580 

#### **WARNING** 

The robot will be mechanically unstable if not properly secured to the foundation. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

48 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

2.2.4 The unit is sensitive to ESD 

### **2.2.4 The unit is sensitive to ESD** 

#### **Description** 

ESD (electrostatic discharge) is the transfer of electrical static charge between two bodies at different potentials, either through direct contact or through an induced electrical field. When handling parts or their containers, personnel not grounded may potentially transfer high static charges. This discharge may destroy sensitive electronics. 

#### **Safe handling** 

Use one of the following alternatives: 

- Use a wrist strap. 

Wrist straps must be tested frequently to ensure that they are not damaged and are operating correctly. 

- Use an ESD protective floor mat. 

The mat must be grounded through a current-limiting resistor. 

- Use a dissipative table mat. 

The mat should provide a controlled discharge of static voltages and must be grounded. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

49 

© Copyright 2009-2022 ABB. All rights reserved. 

#### 2.3.2 Test run after installation, maintenance, or repair 

### **2.3.2 Test run after installation, maintenance, or repair** 

#### **Safe handling** 

Use the following procedure after installation, maintenance, or repair, before initiating motion. 

#### **DANGER** 

Initiating motion without fulfilling the following aspects, may increase the risk for injury or cause damage to the robot. 

- **Action** 

- 1 Remove all tools and foreign objects from the robot and its working area. 2 Verify that the robot is properly secured to its position by all screws, before it is powered up. 

- 3 Verify that any safety equipment installed to secure the position or restrict the robot motion during service activity is removed. 

- 4 Verify that the fixture and work piece are well secured, if applicable. 5 Verify that all safety equipment is installed, as designed for the application. 6 Verify that no personnel are inside the safeguarded space. 7 If maintenance or repair has been done, verify the function of the part that was maintained. 

- 8 Verify the application in the operating mode manual reduced speed. 

#### **Collision risks** 

#### **CAUTION** 

When programming the movements of the robot, always identify potential collision risks before initiating motion. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

51 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.3.3.1 Lifting the robot with roundslings 

### **2.3.3 Lifting the robot** 

### **2.3.3.1 Lifting the robot with roundslings** 

#### **Introduction** 

This procedure details how to lift the robot using roundslings. 

#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Overhead crane|-|
|Roundslings|(Circle) Length: 3 m<br>Lifting capacity: 100 kg|
|Lifting tool, set|The set includes:<br>•<br>bracket<br>•<br>attachment screws<br>•<br>washers.<br>For art. no. and details see chapter_Reference_<br>_information_section:<br>•<br>_Special tools on page 253_|



#### **Lifting** 

Attach the roundslings as shown in the figure. 

#### **CAUTION** 

Use a thick cloth between round sling and robot where robot surface directly contact with round sling. 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

52 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

_Continued_ 

#### 2.3.3.1 Lifting the robot with roundslings 



<!-- Start of picture text -->
B<br>B<br>B<br>A<br>xx0900000496<br>A Bracket<br>B Thick cloth<br>20°<br><!-- End of picture text -->

#### **Lifting instructions** 

Use this procedure to lift the robot in a safe way. 

||**Action**|**Note**|
|---|---|---|
|1|**CAUTION**<br>The IRB 120 robot weighs 25 kg.<br>All lifting accessories used must be sized<br>accordingly!||
|2|**CAUTION**<br>Attempting to lift the robot in any other pos-<br>ition than that recommended may result in<br>the robot tipping over and causing severe<br>damage or injury!||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

53 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.3.3.1 Lifting the robot with roundslings 

#### _Continued_ 



<!-- Start of picture text -->
Action Note<br>3<br>WARNING<br>Personnel must not, under any circum-<br>stances, be present under the suspended<br>load!<br>4 Move the robot to its most stable position. Detailed in section:<br>• Risk of tipping/stability on page 48<br>5<br>DANGER<br>Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!<br>6 Fit the  bracket  with its attachment screws See  Required equipment on page 52 .<br>and washers, in order to secure the upper E<br>arm to the base.<br>A B C D<br>xx0900000636<br>Parts:<br>• A: Attachment screws M4x10 qual-<br>ity steel 8.8 ELZN (2 pcs)<br>• B: Base<br>• C: Bracket<br>• D: Attachment screws M5x12 qual-<br>ity 8.8-A2F (2 pcs)<br>• E: Upper arm<br>7 Attach the  roundsling . See the figure in:<br>• Lifting on page 52<br>8 Lift the robot with an overhead crane.<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

54 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

2.3.4 Manually releasing the brakes 

### **2.3.4 Manually releasing the brakes** 

#### **Introduction to manually releasing the brakes** 

This section describes how to release the holding brakes for the motors of each axis. 

This can be done in three ways: 

- using the brake release unit (placed on the front of the IRC5 Compact controller) when the robot is connected to the controller. For other controller variants, the placing depends on the design of the cell. 

- using the brake release unit when the robot is disconnected from the controller, but connected to an external power supply at the connector R1.MP. 

- using an external voltage supply directly on the motor connector. 

#### **Note** 

On the single controller there is no brake release button. The customer or integrator is responsible to ensure that it in case of emergency is possible to release the brakes to move the manipulator axes without using motion power. 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

55 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.3.4 Manually releasing the brakes 

#### _Continued_ 

#### **Brake release button at the front of IRC5 Compact controller** 

The **IRB 120** robot has no brake release button, instead use the brake release button on the IRC5 Compact controller. For other controller variants, the placing depends on the design of the cell. 



xx0900000559 



<!-- Start of picture text -->
A Brake release button (beneath the cover)<br><!-- End of picture text -->

#### **Using the brake release unit when the robot is connected to the controller** 

Use this procedure to release the holding brakes using the internal brake release unit in the controller cabinet. 

||**Action**|**Note**|
|---|---|---|
|1|The_brake release button_is located on the<br>front of the IRC5 Compact controller.<br>**Note**|See the figure in:<br>•<br>_Brake release button at the front of_<br>_IRC5 Compact controller on_<br>_page 56_|
||The single brake release button, is used to<br>release the brakes on all axes.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

56 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.3.4 Manually releasing the brakes 

#### _Continued_ 

||**Action**|**Note**|
|---|---|---|
|2|**DANGER**||
||When releasing the holding brakes, the ro-<br>bot axes may move very quickly and some-<br>times in unexpected ways!<br>Make sure no personnel is near the robot<br>when brakes are released!||
|3|Release the holding brakes by pushing the<br>brake release button.<br>The brake will function again as soon as the<br>button is released.|**Note**<br>The controller must be powered on!|



#### **Using the brake release unit with an external power supply** 

Use this procedure to release the holding brakes, when the robot is not connected to the controller. 

|**Action**|**Note**|
|---|---|
|**Note**<br>1||
|Do not interchange the 24V and 0V pins.<br>If they are mixed up, damage can be caused<br>to the brake release unit and to the system<br>board.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

57 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.3.4 Manually releasing the brakes 

#### _Continued_ 



<!-- Start of picture text -->
Action Note<br>2 Connect an external 24VDC power supply<br>to connector R1.MP on the robot base.<br>xx0900000638<br>Connect to connector R1.MP:<br>• A: 0V to pin 12<br>• B: 24V to pin 13<br>3<br>CAUTION<br>The holding brakes are released to all axes<br>when power is connected to the pins.<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

58 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### **Specification, attachment screws and pins** 

The table specifies the type of securing screws and washers to be used to secure the robot directly to the foundation. It also specifies the type of pins to be used. 

|Suitable screws|M10x25|
|---|---|
|Quantity|4 pcs|
|Quality|8.8-A3F|
|Suitable washer|10 mm|
|Guide pins|2 pcs, D6x20<br>ISO 2338-6 m6x30 - A1|
|Tightening torque|35 Nm|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

59 

© Copyright 2009-2022 ABB. All rights reserved. 

#### **Note** 

All equipment and cables used on the robot, must be designed and fitted not to damage the robot and/or its parts. 

#### **Note** 

Never drill a hole in the robot without first consulting ABB! 

#### **Maximum loads** 

The table shows the maximum permitted loads for any extra equipment fitted in the holes intended for this purpose. See figure in _Fitting equipment on base and upper arm on page 62_ . 

|**Robot**|**Max load A**|**Max load B**|
|---|---|---|
||**(base, on each side)**|**(upper arm)**|
|IRB 120|0.5 kg|0.3 kg|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

61 

© Copyright 2009-2022 ABB. All rights reserved. 

#### **Fastener quality** 

When fitting tools on the tool flange, only use screws with quality 12.9. For other equipment use suitable screws and tightening torque for your application. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

63 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### **System parameters** 

#### **Note** 

The mounting angle must be configured correctly in the system parameters so that the robot system can control the movements in the best possible way. An incorrect definition of the mounting angle will result in: 

- Overloading the mechanical structure. 

- Lower path performance and path accuracy. 

- Some functions will not work properly, for example _Load Identification_ and _Collision detection_ . 

2.3.8 Loads fitted to the robot, stopping time and braking distances 

### **2.3.8 Loads fitted to the robot, stopping time and braking distances** 

#### **General** 

Any loads mounted on the robot must be defined correctly and carefully (with regard to the position of center of gravity and mass moments of inertia) in order to avoid jolting movements and overloading motors, gears and structure. 

#### **CAUTION** 

Incorrectly defined loads may result in operational stops or major damage to the robot. 

#### **References** 

Load diagrams, permitted extra loads (equipment) and their positions are specified in the product specification. The loads must be defined in the software. 

- _Operating manual - IRC5 with FlexPendant_ 

#### **Stopping time and braking distances** 

The performance of the motor brake depends on if there are any loads attached to the robot. For more information, see product specification for the robot. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

69 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

- 2.4.1 Axes with restricted working range 

### **2.4 Restricting the working range** 

### **2.4.1 Axes with restricted working range** 

#### **General** 

When installing the robot, make sure that it can move freely within its entire working space. If there is a risk that it may collide with other objects, its working space should be limited. 

The working range of the following axes may be restricted: 

This section describes how to install hardware that restricts the working range. 

#### **Note** 

Adjustments must also be made in the robot configuration software (system parameters). References to relevant manuals are included in the installation procedures. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

70 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

2.4.2 Mechanically restricting the working range 

### **2.4.2 Mechanically restricting the working range** 

#### **Location of mechanical stops** 

The figures shows where the mechanical stops are placed on the robot. 



xx1000000002 

A Mechanical stop axis 1 (base) B Mechanical stop axis 1 (swing plate) 



xx0900000583 

A Mechanical stop axis 2 (swing housing) 

B Mechanical stops axis 2 (upper arm) 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

71 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.4.2 Mechanically restricting the working range _Continued_ 



xx1000000003 

A Mechanical stop axis 3 (lower arm) B Mechanical stops axis 2 (lower arm) 

Product manual - IRB 120 3HAC035728-001 Revision: W 

72 

© Copyright 2009-2022 ABB. All rights reserved. 

#### **General** 

Robots with protection type Clean Room are specially designed to work in a clean room environment. 

Clean Room robots are designed to prevent from particle emission from the robot. For example, the maintenance work possible to perform without cracking the paint. The robot is painted with four layers of polyurethane paint. The last layer being a varnish over labels to simplify cleaning. The paint has been tested regarding outgassing of Volatile Organic Compounds (VOC) and been classified in accordance with ISO 14644-8. 

Any Clean Room parts that are replaced must be replaced with parts designed for use in Clean Room environments. 

#### **Clean Room class 5** 

According to **IPA test result** , the robot IRB 120 is suitable for use in Clean Room environment. 

#### **Classification of airborne molecular contamination** 

|**Parameter**||||**Outgassing**|**amount**||
|---|---|---|---|---|---|---|
|Area (m<sup>2</sup>)|Test dura-<br>tion (s)|Temp (°C)|Performed<br>test|Total detec-<br>ted (ng)|Norm based<br>on 1m<sup>2</sup>and<br>1s(g)|Classifica-<br>tion in ac-<br>cordance to<br>ISO 14644-<br>8|
|4.5E-03|3600|23|TVOC|2848|1.7E-07|-6.8|
|4.5E-03|60|90|TVOC|46524|1.7E-04|-3.8|



Do not apply force on the plastic covers when lifting the robot! This may result in damage or cracks in the paint around the plastic cover. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

73 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.6.1 Robot cabling and connection points 

### **2.6 Electrical connections** 

### **2.6.1 Robot cabling and connection points** 

#### **Connection point locations** 

For information about the connection point locations, see the chapter _Circuit diagram_ . 

#### **Main cable categories** 

All cables between the robot and controller are divided into the following categories: 

|**Cable category**|**Description**|
|---|---|
|Robot cables|Handles power supply to, and the control of the robot’s motors<br>as well as feedback from the encoder interface board.|
||Specified in the table in_Robot cable, power on page 74_.|



The cable categories are divided into sub-categories. See _Robot cables on page74_ . 

#### **Robot cables** 

The robot cable is included in the standard delivery of the robot. They are completely pre-manufactured and ready to plug in. 

|**Cable sub-category**|**Description**|**Connection**<br>**point, cabinet**|**Connection**<br>**point, robot**|
|---|---|---|---|
|Robot cable, power|Transfers drive power<br>from the drive units in<br>the control cabinet to the<br>robot motors|XS1|R1.MP|
|Robot cable, signal|Transfers encoder data<br>from and power supply<br>to the encoder interface<br>board.|XS2|R1.SMB|



#### Robot cable, power 

|**Cable**|**Art. no.**|
|---|---|
|Robot cable, power: L=3 m|3HAC032694-001|
|Robot cable, power: L=7 m|3HAC032695-001|
|Robot cable, power: L=15 m|3HAC032696-001|



#### Robot cable, signal 

|**Cable**|**Art. no.**|
|---|---|
|Robot cable, signal: L=3 m|3HAC068916-001|
|Robot cable, signal: L=7 m|3HAC068917-001|
|Robot cable, signal: L=15 m|3HAC068918-001|



#### _Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

74 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

2.6.1 Robot cabling and connection points _Continued_ 

#### **Bending radius for static floor cables** 

The minimum bending radius is 10 times the cable diameter for static floor cables. 



<!-- Start of picture text -->
A<br>B<br><!-- End of picture text -->

xx1600002016 



<!-- Start of picture text -->
A Diameter<br>B Diameter x10<br><!-- End of picture text -->

#### **Customer cables - CP/CS cable (option)** 

|**CP/CS cable length**|**Article number**|
|---|---|
|3 m (IRC5)|3HAC049089-001|
|7 m (IRC5)|3HAC049089-004|
|15 m (IRC5)|3HAC049089-005|
|22 m (IRC5)|3HAC049089-006|
|30 m (IRC5)|3HAC049089-007|
|3 m (IRC5C)|3HAC049186-001|
|7 m (IRC5C)|3HAC049186-004|
|15 m (IRC5C)|3HAC049186-005|
|22 m (IRC5C)|3HAC049186-006|
|30 m (IRC5C)|3HAC049186-007|



Product manual - IRB 120 3HAC035728-001 Revision: W 

75 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.6.2 Customer connections on the robot 

### **2.6.2 Customer connections on the robot** 

#### **Introduction** 

The customer cables are integrated in the robot and the connectors are placed on the upper arm housing and at the base. 

#### **Connectors** 

The tables describes the connectors on base and upper arm housing. 

Connectors, base 

|**Position**|**Description**|**Art. no.**|
|---|---|---|
|Robot|Pin connector 10p, bulkhead|3HAC022117-002|
|Customer connector|Connector set R1.CP/CS|3HAC037038-001|



Connectors, upper arm housing 

Air, connector 

|**Position**|**Description**|**Art. no.**|
|---|---|---|
|Robot|Socket connector 10p, flange mounted|3HAC023624-002|
|Customer connector|Connector set R3.CP/CS|3HAC037070-001|
|**Position**|**Description**|**Art. no.**|
|Robot|4xM5||
|Customer cable|Air connector|3HAC032049-001|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

76 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

2.6.2 Customer connections on the robot _Continued_ 

#### **Customer connections** 

The location of the customer connections on the base and at the upper arm housing, are shown in the figures: 

#### Customer connections, base 

#### Customer connections, base. 



<!-- Start of picture text -->
B<br>A<br><!-- End of picture text -->

xx0900000639 

|**Pos**|**Connection**|**Description**|**Number**|**Value**|
|---|---|---|---|---|
|A|R1.CP/CS|Customer power/signal|10|49 V, 500 mA|
|B|Air|Max 5 bar|4|Outer diameter of air hose: 4<br>mm|



#### Customer connections, upper arm housing 

Customer connections, upper arm housing. 



<!-- Start of picture text -->
A B<br><!-- End of picture text -->





<!-- Start of picture text -->
xx0900000640<br><!-- End of picture text -->

|**Pos**|**Connection**|**Description**|**Number**|**Value**|
|---|---|---|---|---|
|A|R3.CP/CS|Customer power/signal|10|49 V, 500 mA|



_Continues on next page_ 

Product manual - IRB 120 

77 

3HAC035728-001 Revision: W 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.6.2 Customer connections on the robot _Continued_ 

|**Pos**|**Connection**|**Description**|**Number**|**Value**|
|---|---|---|---|---|
|B|Air|Max 5 bar|4|Outer diameter of air hose: 4<br>mm|



Product manual - IRB 120 3HAC035728-001 Revision: W 

78 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.7 Start of robot in cold environments 

### **2.7 Start of robot in cold environments** 

#### **Introduction** 

This section describes how to start the robot in a cold environment if it is not starting the normal way. 

#### **Problems with starting the robot** 

#### Event message from Motion Supervision 

Use this procedure if an event message indicates a problem with Motion supervision at start-up. More information about Motion Supervision is found in _Technical reference manual - System parameters_ . 

||**Action**|**Note**|
|---|---|---|
|1|Turn off Motion Supervision.||
|2|Start the robot.||
|3|When the robot has reached normal working temper-<br>ature, the Motion Supervision can be turned on<br>again.||



Robot stopping with other event message 

Use this procedure if the robot is not starting. 

||**Action**|**Note**|
|---|---|---|
|1|Start the robot with its normal program but<br>with reduced speed.|The speed can be regulated with the<br>RAPID instruction`VelSet`.|



#### **Adjusting the speed and acceleration during warm-up** 

Depending on how cold the environment is and what program is being used, the speed might need to be ramped up until reached maximum. The table shows examples of how to adjust the speed: 

|**Work cycles**|**`AccSet`**|**Speed/velocity**|
|---|---|---|
|3 Work cycles|20, 20|v100 (100 mm/s)|
|5 Work cycles|40, 40|v400 (400 mm/s)|
|5 Work cycles|60, 60|v600 (600 mm/s)|
|5 Work cycles|100, 100|v1000 (1000 mm/s)|
|More than 5 Work cycles|100, 100|Max.|



If the program consists of large wrist movements, it is possible that the reorientation velocity, which is always high in predefined velocities, needs to be included in the ramping up. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

79 

© Copyright 2009-2022 ABB. All rights reserved. 

**2 Installation and commissioning** 

#### 2.8 Test run after installation, maintenance, or repair 

### **2.8 Test run after installation, maintenance, or repair** 

#### **Safe handling** 

Use the following procedure after installation, maintenance, or repair, before initiating motion. 

#### **DANGER** 

Initiating motion without fulfilling the following aspects, may increase the risk for injury or cause damage to the robot. 

##### **Action** 

- 1 Remove all tools and foreign objects from the robot and its working area. 

- 2 Verify that the robot is properly secured to its position by all screws, before it is powered up. 

- 3 Verify that any safety equipment installed to secure the position or restrict the robot motion during service activity is removed. 

- 4 Verify that the fixture and work piece are well secured, if applicable. 

- 5 Verify that all safety equipment is installed, as designed for the application. 

- 6 Verify that no personnel are inside the safeguarded space. 

- 7 If maintenance or repair has been done, verify the function of the part that was maintained. 

- 8 Verify the application in the operating mode manual reduced speed. 

#### **Collision risks** 

#### **CAUTION** 

When programming the movements of the robot, always identify potential collision risks before initiating motion. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

80 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

3.1 Introduction 

## **3 Maintenance** 

### **3.1 Introduction** 

#### **Structure of this chapter** 

This chapter describes all the maintenance activities recommended for the IRB 120. 

It is based on the maintenance schedule found at the beginning of the chapter. The schedule contains information about required maintenance activities including intervals, and refers to procedures for the activities. 

Each procedure contains all the information required to perform the activity, including required tools and materials. 

The procedures are gathered in different sections and divided according to the maintenance activity. 

#### **Safety information** 

Observe all safety information before conducting any service work. 

There are general safety aspects that must be read through, as well as more specific safety information that describes the danger and safety risks when performing the procedures. Read the chapter _Safety on page 19_ before performing any service work. 

The maintenance must be done by qualified personnel in accordance with the safety requirements set forth in the applicable national and regional standards and regulations. 

#### **Note** 

If the IRB 120 is connected to power, always make sure that the IRB 120 is connected to protective earth and a residual current device (RCD) before starting any maintenance work. 

For more information see: 

- _Product manual - IRC5_ 

- _Product manual - IRC5 Compact_ 

- _Robot cabling and connection points on page 74_ . 

Product manual - IRB 120 3HAC035728-001 Revision: W 

81 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.2.1 Specification of maintenance intervals 

### **3.2 Maintenance schedule** 

### **3.2.1 Specification of maintenance intervals** 

#### **Introduction** 

The intervals are specified in different ways depending on the type of maintenance activity to be carried out and the working conditions of the IRB 120: 

- Calendar time: specified in months regardless of whether the system is running or not. 

- Operating time: specified in operating hours. More frequent running means more frequent maintenance activities. 

- SIS: specified by the robot's SIS (Service Information System). A typical value is given for a typical work cycle, but the value will differ depending on how hard each part is run. 

The SIS used in M2004 is further described in the _Operating manual - Service Information System_ . 

Robots with the functionality _Service Information System_ activated can show active counters in the device browser in RobotStudio, or on the FlexPendant. 

#### **Overhaul** 

Depending on application and operational environment a complete overhaul may be necessary in average around 30000 hours. 

ABB Connected Services and its Assessment tools can help you to identify the real stress level of your robot, and define the optimal ABB support to maintain your robot working. 

Contact your local ABB Customer Service to get more information. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

82 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.2.2 Maintenance schedule 

### **3.2.2 Maintenance schedule** 

#### **General** 

The robot, consisting of robot and controller cabinet, must be maintained regularly to ensure its function. The maintenance activities and their respective intervals are specified in the table below. 

Non-predictable situations also give rise to inspections of the robot. Any damage must be attended to immediately. 

The inspection intervals _do not_ specify the life of each component. 

#### **Activities and intervals, standard equipment** 

The sections referred to in the table can be found in the different chapters for every maintenance activity. 

The table below specifies the required maintenance activities and intervals: 

|**Maintenance**<br>**activity**|**Equipment**|**Interval**|**Detailed in section:**|
|---|---|---|---|
|Inspection|Robot|Regularly <sup>_i_</sup><br>For Clean Room robots:<br>Daily|Check for abnormal wear<br>or contamination|
|Inspection|Damper, axes 1, 2<br>and 3|Regularly <sup>i</sup>|_Inspecting dampers on_<br>_page 89_|
|Inspection|Cable harnesses|Regularly <sup>_i_</sup>|_Inspecting the robot_<br>_cabling on page 85_|
|Inspection|Timing belts|36 mths<br>ii|_Inspecting timing belts on_<br>_page 91_|
|Inspection|Plastic covers|Regularly <sup>_i_</sup>|_Inspecting plastic covers_<br>_on page 97_|
|Inspection|Mechanical stop<br>pins|Regularly <sup>_i_</sup>|_Inspecting mechanical_<br>_stops on page 86_|
|Inspection|Information labels|12 months|Replace any damaged,<br>missing or unreadable la-<br>bels.<br>Replace any damaged,<br>missing or unreadable la-<br>bels.<br>_Inspecting information la-_<br>_bels on page 99_|
|Replacement|Battery pack,<br>measurement<br>system of type<br>RMU101 or<br>RMU102 (3-pole<br>battery contact)|36 months or battery low<br>alert <sup>iii</sup>|_Replacing the battery_<br>_pack on page 103_|
|Replacement|Battery pack,<br>measurement<br>system with 2-<br>pole battery con-<br>tact, e.g.<br>DSQC633A|Battery low alert <sup>iv</sup>|_Replacing the battery_<br>_pack on page 103_|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

83 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.2.2 Maintenance schedule _Continued_ 

|**Maintenance**<br>**activity**|**Equipment**|**Interval**|**Detailed in section:**|
|---|---|---|---|
|Cleaning|Complete robot|Regularly <sup>_i_</sup>|_Cleaning the IRB 120 on_<br>_page 106_|



- i "Regularly" implies that the activity is to be performed regularly, but the actual interval may not be specified by the robot manufacturer. The interval depends on the operation cycle of the robot, its working environment and movement pattern. Generally, the more contaminated environment, the shorter intervals. The more demanding movement pattern (sharper bending cable harness), the shorter intervals. 

- ii Service inspection including dismounting of robot parts shall always be done outside the clean room area. 

- iii The battery low alert (38213 **Battery charge low** ) is displayed when the battery needs to be replaced. The recommendation to avoid an unsynchronized robot is to keep the power to the controller turned on until the battery is to be replaced. See the replacement instruction for more details. 

- iv The battery low alert (38213 **Battery charge low** ) is displayed when remaining backup capacity (robot powered off) is less than 2 months. The typical lifetime of a new battery is 36 months if the robot is powered off 2 days/week or 18 months if the robot is powered off 16 h/day. The lifetime can be extended with a battery shutdown service routine. See _Operating manual - IRC5 with FlexPendant_ for instructions. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

84 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.1 Inspecting the robot cabling 

### **3.3 Inspection activities** 

### **3.3.1 Inspecting the robot cabling** 

#### **Introduction** 

#### **CAUTION** 

#### **For robots with protection type Clean Room** 

Always read the specific instructions before doing any repair work, see _Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **Location of robot cabling** 

The robot cabling comprises the cabling between the robot and controller cabinet. 

#### **Required tools and equipment** 

Visual inspection, no tools are required. 

Other tools and procedures may be required if the spare part needs to be replaced. These are specified in the replacement procedure. 

#### **Inspection, robot cabling** 

Use this procedure to inspect the robot cabling. 

||**Action**|**Note**|
|---|---|---|
|1|**DANGER**||
||Turn off all:<br>•<br>electric power supply to the robot<br>•<br>hydraulic pressure supply to the robot<br>•<br>air pressure supply to the robot<br>Before entering the robot working area.||
|2|Visually inspect:<br>•<br>the control cabling between the robot and<br>control cabinet<br>Look for abrasions, cuts or crush damage.||
|3|Replace the cabling if wear or damage is detected.||



Product manual - IRB 120 3HAC035728-001 Revision: W 

85 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.2 Inspecting mechanical stops 

### **3.3.2 Inspecting mechanical stops** 

#### **Location of mechanical stops** 

The mechanical stops on axes 1, 2 and 3 are located as shown in the figures. 

Axis 1 



xx1000000002 

A Mechanical stop axis 1 (base) B Mechanical stop axis 1 (swing plate) 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

86 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

3.3.2 Inspecting mechanical stops _Continued_ 

Axis 2 



###### xx0900000583 

A Mechanical stops axis 2 (swing housing) 

B Mechanical stop axis 3 (upper arm) 

Axis 3 



xx1000000003 

A Mechanical stop axis 3 (lower arm) B Mechanical stops axis 2 (lower arm) 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

87 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.2 Inspecting mechanical stops _Continued_ 

#### **Required spare parts** 

#### **Note** 

The spare part numbers that are listed in the table can be out of date. See the latest spare parts of the IRB 120 via myABB Business Portal, _<u>www.abb.com/myABB</u>_ <u>.</u> 

|**Spare part**|**Article number**|**Note**|
|---|---|---|
|Mechanical stop set|See_Spare parts on_<br>_page 255_.||
|Mechanical stop set|See_Spare parts on_<br>_page 255_.||
|Mechanical stop set|See_Spare parts on_<br>_page 255_.||



#### **Required tools and equipment** 

Visual inspection, no tools are required. 

Other tools and procedures may be required if the spare part needs to be replaced. These are specified in the replacement procedure. 

#### **Inspecting mechanical stops** 

Use this procedure to inspect mechanical stops on axes 1, 2 and 3. 



<!-- Start of picture text -->
Action Information<br>1<br>DANGER<br>Turn off all:<br>• electric power supply<br>• hydraulic pressure supply<br>• air pressure supply<br>to the robot, before entering the robot working area.<br>2 Inspect the  mechanical stops . See the figures in:<br>• Location of mechanical<br>stops on page 86<br>3 Replace if the mechanical stop is:<br>• bent<br>• loose<br>• damaged.<br>Note<br>The expected life of gearboxes can be reduced as<br>a result of collisions with the mechanical stop.<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

88 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.3 Inspecting dampers 

### **3.3.3 Inspecting dampers** 

#### **Location of dampers** 

The location of dampers are shown in the figures. 



xx0900000579 



<!-- Start of picture text -->
A Damper, axis 1<br>B Mechanical stop axis 1 (swing plate)<br><!-- End of picture text -->



xx0900000582 

A Damper, axis 3 B Dampers, axis 2 

#### **Required equipment** 

|**Equipment**|**Art. no.**|**Note**|
|---|---|---|
|Standard toolkit|-|The content is defined in the section_Standard toolkit on_<br>_page 252_.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

89 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.3 Inspecting dampers _Continued_ 

#### **Inspecting dampers** 

#### Use this procedure to inspect the dampers. 



<!-- Start of picture text -->
Action Information<br>1<br>DANGER<br>Turn off all electric power, hydraulic and pneu-<br>matic pressure supplies to the robot!<br>2 Check all  dampers  for damage such as: See the figure in:<br>• cracks • Location of dampers on<br>• existing impressions larger than 1 mm. page 89<br>3 Check all  attachment screws  for deformation.<br>4 If any damage is detected, the damper must be<br>replaced with a new one!<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

90 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.4 Inspecting timing belts 

### **3.3.4 Inspecting timing belts** 

#### **Introduction** 

#### **CAUTION** 

Always read the section "General procedures" before doing any repair work. _Cut the paint or surface on the robot before replacing parts on page 113_ . 

#### **Location of timing belts** 

The timing belts are located as shown in the figures. 

Axis 3 



xx0900000610 

|A|Timing belt, axis 3|
|---|---|
|B|Timing belt pulley (2 pcs)|
|C|Lower arm cover|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

91 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.4 Inspecting timing belts _Continued_ 

Axis 5 



xx0900000611 

A Wrist side cover B Timing belt pulley (2 pcs) C Timing belt, axis 5 

#### **Required tools and equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section_Stand-_<br>_ard toolkit on page 252_.|
|Other tools and procedures may be required<br>if the spare part needs to be replaced. These<br>are specified in the replacement procedure.||



#### **Timing belt tension** 

The table describes the timing belt tension. 

|**Axis**|**Timing belt tension**|
|---|---|
|Axis 3|New belt: F = 18-19.7N|
||Used belt: F = 12.5-14.3N|
|Axis 5|New belt: F = 7.6-8.4N|
||Used belt: F = 5.3-6.1N|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

92 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.4 Inspecting timing belts _Continued_ 

#### **Inspecting timing belts** 

Use this procedure to inspect timing belts. 



<!-- Start of picture text -->
Action Information<br>1<br>DANGER<br>Turn off all:<br>• electric power supply<br>• hydraulic pressure supply<br>• air pressure supply<br>to the robot, before entering the robot<br>working area.<br>2 Gain access to each  timing belt  by removing<br>the cover.<br>3 Check the timing belts for damage or wear.<br>xx1300002286<br>xx1300002287<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

93 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.4 Inspecting timing belts 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>4 Check the  timing belt pulleys  for damage.<br>xx1300002288<br>xx1300002289<br>5 If any damage or wear is detected, the part<br>must be replaced!<br>6 Check each belt for tension. Axis 3: .<br>If the belt tension is not correct, adjust it! New belt: F = 18-19.7N<br>Used belt: F = 12.5-14.3N<br>Axis 5: .<br>New belt: F = 7.6-8.4N<br>Used belt: F = 5.3-6.1N<br><!-- End of picture text -->

#### **Adjusting timing belts** 

#### Adjusting axis-3 timing belt 

Use this procedure to adjust the axis-3 timing belt. 

|**Action**|**Note**|
|---|---|
|Jog the robot to the specified position:<br>•<br>Axis 2: -90°<br>1||
|•<br>Axis 3: move the upper arm until the<br>mechanical stop is reached.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

94 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.4 Inspecting timing belts _Continued_ 

||**Action**|**Note**|
|---|---|---|
|2|**DANGER**<br>Turn off all:<br>•<br>electric power supply<br>•<br>hydraulic pressure supply<br>•<br>air pressure supply<br>to the robot, before entering the robot working<br>area.||
|3|Loosen the_attachment screws_securing the_motor_<br>_axis 3_.||
|4|Fit the timing belt tension adjustment tool to the<br>_lower arm_by pressing the two pins into the bores<br>on the_lower arm_.|Axis-3 timing belt adjustment tool:<br>3HAC053095-001|
|5|Rotate the knob of the adjustment tool to tension<br>the timing belt gradually, and at the same time,<br>measure the belt tension using a tension meter.||
|6|Measure the belt tension three times and record<br>the average value as the measured value.<br>The measured value should be within a reference<br>range of 22-24N.||
|7|Secure the_axis-3 motor_with its_attachment_<br>_screws_and_washers_.<br>**Tip**<br>Do not move the adjustment tool.|Tightening torque: 4 Nm.|
|8|Rotate the knob to loosen the adjustment tool.||
|9|Measure the belt tension for three times and re-<br>cord the average value as the measured value.<br>The measured value should be within the allowed<br>range.|New belt: F = 18-19.7N<br>Used belt: F = 12.5-14.3N|
|10|Remove the adjustment tool.||



#### Adjusting axis-5 timing belt 

Use this procedure to adjust the axis-5 timing belt. 

||**Action**|**Note**|
|---|---|---|
|1|Jog the axis 5 of the robot to the vertical position.||
|2|**DANGER**||
||Turn off all:<br>•<br>electric power supply<br>•<br>hydraulic pressure supply<br>•<br>air pressure supply<br>to the robot, before entering the robot working<br>area.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

95 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.4 Inspecting timing belts 

#### _Continued_ 

||**Action**|**Note**|
|---|---|---|
|3|Loosen the_attachment screws_securing the_motor_<br>_axis 5_.||
|4|Fit the timing belt tension adjustment tool to the<br>_upper arm_using a M3x10 screw.|Axis-5 timing belt adjustment tool:<br>3HAC053098-001|
|5|Rotate the knob of the adjustment tool to tension<br>the timing belt gradually, and at the same time,<br>measure the belt tension using a tension meter.||
|6|Measure the belt tension three times and record<br>the average value as the measured value.<br>The measured value should be within a reference<br>range of 10-11N.||
|7|Secure the_axis-5 motor_with its_attachment_<br>_screws_and_washers_.<br>**Tip**<br>Do not move the adjustment tool.|Tightening torque: 4 Nm.|
|8|Rotate the knob to loosen the adjustment tool.||
|9|Measure the belt tension for three times and re-<br>cord the average value as the measured value.<br>The measured value should be within the allowed<br>range.|New belt: F = 7.6-8.4N<br>Used belt: F = 5.3-6.1N|
|10|Remove the adjustment tool.||



Product manual - IRB 120 3HAC035728-001 Revision: W 

96 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.5 Inspecting plastic covers 

### **3.3.5 Inspecting plastic covers** 

#### **Introduction** 

#### **CAUTION** 

Always read the section "General procedures" befor doing any repair work. _Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **Location of plastic covers** 

Plastic covers are located as shown in the figure. 



xx0900000607 

|A|Lower arm cover (2 pcs)|
|---|---|
|B|Wrist side cover (2 pcs)|
|C|Wrist support|
|D|Housing cover|
|E|Tilt cover|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

97 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.5 Inspecting plastic covers 

#### _Continued_ 

#### **Inspecting plastic covers** 

Use this procedure to inspect the plastic covers on the robot. 



<!-- Start of picture text -->
Action Information<br>1<br>DANGER<br>Turn off all electric power, hydraulic and pneumatic<br>pressure supplies to the robot!<br>2 Check the plastic covers for:<br>• cracks<br>• other kind of damage.<br>3 Replace the plastic cover if cracks or damage is<br>detected.<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

98 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

3.3.6 Inspecting information labels 

### **3.3.6 Inspecting information labels** 

#### **Location of information labels** 

The figure shows the location of the information labels to be inspected. 



<!-- Start of picture text -->
A A A<br>   <br>H<br>C F<br>F<br>B<br>J<br>ABB Robotics Products AB<br>Axis   Resolver values LUBRICATIONFOOD GRADE<br>Warning label Lifting instruction label<br>G<br>F<br>D E<br>F F<br>xx1800000641<br>R1.MP<br><!-- End of picture text -->

|A|ABB logotype|
|---|---|
|B|Rating label|
|C|Calibration label|
|D|Warning label - Risk of tipping|
|E|Lifting instruction label|
|F|Warning label - Electricity (symbol of flash) (5 pcs)|
|G|Label stock robots|
|H|Clean Room label|
|J|Food grade lubrication label|



#### **Required equipment** 

|**Equipment**|**Spare part number**|**Note**|
|---|---|---|
|Labels|See_Spare parts on page 255_.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

99 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.3.6 Inspecting information labels _Continued_ 

#### **Inspecting labels** 

Use this procedure to inspect the labels on the robot. 

||**Action**|**Note**|
|---|---|---|
|1|**DANGER**||
||Turn off all:<br>•<br>electric power supply<br>•<br>hydraulic pressure supply<br>•<br>air pressure supply<br>to the robot, before entering the robot work-<br>ing area.||
|2|Check all labels.|See the figure in_Location of information_<br>_labels on page 99_.|
|3|Replace any missing or damaged labels.||



Product manual - IRB 120 3HAC035728-001 Revision: W 

100 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

3.4.1 Type of lubrication in gearboxes 

### **3.4 Replacement/changing activities** 

### **3.4.1 Type of lubrication in gearboxes** 

#### **Introduction** 

This section describes where to find information about the type of lubrication, article number and the amount of lubrication in the specific gearbox. It also describes the equipment needed when working with lubrication. 

#### **Type and amount of oil in gearboxes** 

Information about the type of lubrication, article number as well as the amount in the specific gearbox can be found in _Technical reference manual - Lubrication in gearboxes_ available for registered users on myABB Business Portal, _<u>www.abb.com/myABB</u>_ <u>.</u> 

#### **Location of gearboxes** 

The figure shows the location of the gearboxes. 



xx0900000612 

A Gearbox, axis 1 (inside the base) B Gearbox, axis 2 C Gearbox, axis 3 D Gearbox, axis 4 E Gearbox, axis 5 F Gearbox, axis 6 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

101 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.4.1 Type of lubrication in gearboxes _Continued_ 

#### **Equipment** 

|**Equipment**|**Note**|
|---|---|
|Oil dispenser|Includes pump with outlet pipe.<br>Use the suggested dispenser or a similar one:<br>•<br>Orion OriCan article number 22590<br>(pneumatic)|
|Nipple for quick connect fitting, with o-ring||



Product manual - IRB 120 3HAC035728-001 Revision: W 

102 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

3.4.2 Replacing the battery pack 

### **3.4.2 Replacing the battery pack** 

#### **Introduction** 

The section describes how to replace the battery pack on the robot. 

#### **CAUTION** 

Always read the section "General procedures" befor doing any repair work. _Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **WARNING** 

See _Hazards related to batteries on page 35_ . 

#### **Location of the battery pack** 

The location of the battery pack is inside the base cover as shown in the figure. 



<!-- Start of picture text -->
B<br>A<br>C<br><!-- End of picture text -->

xx0900000588 



<!-- Start of picture text -->
A Cable strap<br>B Battery pack<br>C Base cover<br><!-- End of picture text -->

#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section_Standard_<br>_toolkit on page 252_.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

103 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.4.2 Replacing the battery pack _Continued_ 

|**Equipment**|**Note**|
|---|---|
|Other tools and procedures may be re-<br>quired. See references to these proced-<br>ures in the step-by-step instructions be-<br>low.|These procedures include references to the tools<br>required.|



#### **Removing the battery pack** 

Use this procedure to remove the battery pack. 



<!-- Start of picture text -->
Action Information<br>1<br>DANGER<br>Turn off all electric power, hydraulic and pneu-<br>matic pressure supplies to the robot!<br>2<br>CAUTION<br>Always cut the paint with a knife and grind the<br>paint edge when disassembling parts. See  Cut<br>the paint or surface on the robot before repla-<br>cing parts on page 113 .<br>3 Remove the  base cover  from the robot by re- The  battery pack  is located inside the<br>moving its attachment screws. base cover as shown in the figure in:<br>• Location of the battery pack on<br>page 103<br>4 Disconnect the battery cable from the Encoder<br>Interface Board.<br>5 Cut the cable strap.<br>6 Remove the battery pack.<br><!-- End of picture text -->

#### **Refitting the battery pack** 

Use this procedure to refit the battery pack. 



<!-- Start of picture text -->
Action Information<br>1 Clean the joints that have been opened. See  Cut<br>the paint or surface on the robot before replacing<br>parts on page 113<br>2 Fit the new battery pack with a  cable strap . See the figure in:<br>• Location of the battery<br>pack on page 103<br>3 Connect the battery cable to the Encoder Interface<br>Board.<br>4 Refit the  base cover  to the robot with its attachment See the figure in:<br>screws. • Location of the battery<br>pack on page 103<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

104 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.4.2 Replacing the battery pack _Continued_ 



<!-- Start of picture text -->
Action Information<br>5 Seal and paint the joints that have been opened.<br>See  Cut the paint or surface on the robot before<br>replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free from<br>particles with spirit on a lint free cloth.<br>6 Update the revolution counters.<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

105 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.5.1 Cleaning the IRB 120 

### **3.5 Cleaning activities** 

### **3.5.1 Cleaning the IRB 120** 

#### **DANGER** 

Turn off all: 

- electric power supply 

- hydraulic pressure supply 

- air pressure supply 

to the robot, before entering the safeguarded space. 

#### **General** 

To secure high uptime it is important that the IRB 120 is cleaned regularly. The frequency of cleaning depends on the environment in which the product works. Different cleaning methods are allowed depending on the type of protection of the IRB 120. 

#### **Note** 

Always verify the protection type of the robot before cleaning. 

#### **Special cleaning considerations** 

This section specifies some special considerations when cleaning the robot. 

- Always use cleaning equipment as specified. Any other cleaning equipment may shorten the life of the robot. 

- Always check that all protective covers are fitted to the robot before cleaning. 

- Do not use compressed air to clean the robot. 

- Never use solvents that are not approved by ABB to clean the robot. 

- Do not spray from a distance closer than 0.4 m. 

- Do not remove any covers or other protective devices before cleaning the robot. 

#### **Cleaning methods** 

The following table defines what cleaning methods are allowed depending on the protection type. 

|**Protection**<br>|**Cleaning**|**method**|||
|---|---|---|---|---|
|**type**|**Vacuum**<br>**cleaner**|**Wipe with cloth**|**Rinse with water**|**High pressure water or**<br>**steam**|
|**Standard**|Yes|Yes. With light<br>cleaning deter-<br>gent.|No|No|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

106 

© Copyright 2009-2022 ABB. All rights reserved. 

**3 Maintenance** 

#### 3.5.1 Cleaning the IRB 120 _Continued_ 

|**Protection**<br>**type**|**Cleaning**<br>|**method**<br>|||
|---|---|---|---|---|
||**Vacuum**<br>**cleaner**|**Wipe with cloth**|**Rinse with water**|**High pressure water or**<br>**steam**|
|**Clean room**|Yes|Yes. With light<br>cleaning deter-<br>gent.<br>See_Additional_<br>_cleaning instruc-_<br>_tions for Clean_<br>_Room robots on_<br>_page 107_.|No|No|



#### **Wiping with cloth** 

#### Additional cleaning instructions for Clean Room robots 

ABB robots with protection types _Clean Room_ are designed to be cleaned at a low cleaning frequency, before entering the cleanroom environment, after robot commissioning or during cleanroom maintenance. 

Wipe-down cleaning method is recommended. Robot surfaces shall be wiped with clean and low particle emission cleanroom cloth which is soaked in 70% ethanol 

Use the following procedure to clean Clean Room robots: 

- 1 Before cleaning, use the lint free cloth to remove dirt, debris or any other contaminant from the to-be cleaned surfaces. 

   - Make sure no visible residues left. 

   - Never apply hard forces on or rub against the robot surfaces to remove dirt or debris; otherwise, protective paint layers may be damaged. 

- 2 Wet a clean cloth with the cleaning detergent and then wipe the robot painting surfaces. 

   - Make sure no cleaning agents are sprayed onto robot surfaces or into the robot structure. 

   - Wipe from the surface center to edge and always in the same direction. 

- 3 Wait a few minutes for detergent volatilization. 

   - Make sure no residue of cleaning agents left on the robot surfaces after wipe down cleaning. 

Additional cleaning instructions for robots with food grade lubrication 

Make sure that no liquid flows into the robot or stagnates in any gap or surface after cleaning. 

#### **Cables** 

Movable cables need to be able to move freely: 

- Remove waste material, such as sand, dust and chips, if it prevents cable movement. 

- Clean the cables if they have a crusty surface, for example from dry release agents. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

107 

© Copyright 2009-2022 ABB. All rights reserved. 

This page is intentionally left blank 

**4 Repair** 

4.1 Introduction 

## **4 Repair** 

### **4.1 Introduction** 

#### **Structure of this chapter** 

This chapter describes repair activities for the IRB 120. Each procedure contains the information required to perform the activity, for example spare parts numbers, required special tools, and materials. 

#### **WARNING** 

Repair activities not described in this chapter must only be carried out by ABB. 

#### **Report replaced units** 

#### **Note** 

When replacing a part on the IRB 120, report to your local ABB the serial number, the article number, and the revision of both the replaced unit and the replacement unit. 

This is particularly important for safety equipment to maintain the safety integrity of the installation. 

#### **Safety information** 

Make sure to read through the chapter _Safety on page 19_ before commencing any service work. 

#### **Note** 

If the IRB 120 is connected to power, always make sure that the IRB 120 is connected to protective earth and a residual current device (RCD) before starting any repair work. 

For more information see: 

- _Product manual - IRC5_ 

- _Product manual - IRC5 Compact_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

109 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.2.1 Mounting instructions for sealings 

### **4.2 General procedures** 

### **4.2.1 Mounting instructions for sealings** 

#### **General** 

This section describes how to mount different types of sealings. 

#### **Equipment** 

|**Consumable**|**Article number**|**Note**|
|---|---|---|
|Grease|3HAC042536-001|Shell Gadus S2|
|Grease|3HAC043771-001|LUBRIPLATE SYNXTREME FG-<br>0<br>Used for robots with food grade<br>lubrication.|



#### **Rotating sealings** 

The procedure below describes how to fit rotating sealings. 

#### **CAUTION** 

Please observe the following before commencing any assembly of sealings: 

- Protect the sealing during transport and mounting, especially the main lip. 

- Keep the sealing in its original wrappings or protect it well before actual mounting. 

- The fitting of sealings and gears must be carried out on clean workbenches. 

- Use a protective sleeve for the main lip during mounting, when sliding over threads, keyways or other sharp edges. 

||**Action**|**Note**|
|---|---|---|
|1|Check the sealing to ensure that:<br>•<br>The sealing is of the correct type.<br>•<br>There is no damage on the main lip.||
|2|Inspect the shaft surface before mounting. If scratches<br>or damage are found, the shaft must be replaced since<br>it may result in future leakage. Do not try to grind or<br>polish the shaft surface to get rid of the defect.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

110 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.2.1 Mounting instructions for sealings _Continued_ 



<!-- Start of picture text -->
Action Note<br>3 Lubricate the sealing with grease just before fitting. Article number is specified in<br>(Not too early - there is a risk of dirt and foreign Equipment on page 110 .<br>particles adhering to the sealing.)<br>Fill 2/3 of the space between the dust lip and the main<br>lip with grease. If the sealing is without dust lip, just<br>lubricate the main lip with a thin layer of grease.<br>A B C<br>xx2000000071<br>A Main lip<br>B Grease<br>C Dust lip<br>4 Mount the sealing correctly with a mounting tool. A<br>Never hammer directly on the sealing as this may<br>result in leakage.<br>xx2000000072<br>A Gap<br>5 Make sure that no grease is left on the robot surface.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

111 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.2.1 Mounting instructions for sealings 

#### _Continued_ 

#### **Flange sealings and static sealings** 

The following procedure describes how to fit flange sealings and static sealings. 

##### **Action** 

- 1 Check the flange surfaces. They must be even and free from pores. It is easy to check flatness using a gauge on the fastened joint (without sealing compound). If the flange surfaces are defective, the parts may not be used because leakage could occur. 

- 2 Clean the surfaces properly in accordance with the recommendations of ABB. 

- 3 Distribute the sealing compound evenly over the surface, preferably with a brush. 

- 4 Tighten the screws evenly when fastening the flange joint. 

#### **O-rings** 

The following procedure describes how to fit o-rings. 

||**Action**|**Note**|
|---|---|---|
|1|Ensure that the correct o-ring size is used.||
|2|Check the o-ring for surface defects, burrs,<br>shape accuracy, or deformation.|Defective o-rings, including damaged<br>or deformed o-rings, may not be used.|
|3|Check the o-ring grooves.<br>The grooves must be geometrically correct and<br>should be free of pores and contamination.||
|4|Lubricate the o-ring with grease.||
|5|Tighten the screws evenly while assembling.||
|6|Check that the o-ring is not squashed outside<br>the o-ring groove.||
|7|Make sure that no grease is left on the robot<br>surface.||



Product manual - IRB 120 3HAC035728-001 Revision: W 

112 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

4.2.2 Cut the paint or surface on the robot before replacing parts 

### **4.2.2 Cut the paint or surface on the robot before replacing parts** 

#### **General** 

Follow the procedures in this section whenever breaking the paint of the robot during replacement of parts. 

For robots with protection type Clean Room 

For robots with food grade lubrication 

When replacing parts on the robot, it is important to make sure that after the replacement, no particles will be emitted from the joint between the structure and the new part, and that the easy cleaned surface is retained. 

#### **Required equipment** 

|**Equipment**|**Spare parts**|**Note**|
|---|---|---|
|Sealing compound|3HAC026759-001|Sikaflex 521 FC. Color white.|
|Tooling pin||Width 6-9 mm, made of wood.|
|Cleaning agent||Ethanol|
|Knife|||
|Lint free cloth|||
|Touch up paint Clean Room/Hy-<br>gienic|3HAC036639-001|White|
|Touch up paint Standard/Foundry<br>Plus|3HAC067974-001|Graphite White|
|Touch up paint Standard/Foundry<br>Plus|3HAC037052-001|ABB Orange|



#### **Removing** 



<!-- Start of picture text -->
Action Description<br>1 Cut the paint with a knife in the joint between<br>the part that will be removed and the struc-<br>ture, to avoid that the paint cracks.<br>CAUTION<br>Be careful not to damage the plastic covers<br>when cutting.<br>CAUTION<br>xx0900000121<br>Seal glue is filled in the gap between lower<br>arm cover and lower arm (axis 3 timing belt<br>side). The glue should be removed and the<br>surface cleaned.<br>2 Carefully grind the paint edge that is left on<br>the structure to a smooth surface.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

113 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.2.2 Cut the paint or surface on the robot before replacing parts _Continued_ 

#### **Refitting** 



<!-- Start of picture text -->
Action Description<br>1 Before the parts are refitted, clean the joint Use ethanol on a lint free cloth.<br>so that it is free from oil and grease.<br>2 Place the tooling pin in hot water.<br>3 Seal all refitted joints with sealing compound.<br>xx0900000122<br>4 Use the tooling pin to even out the surface<br>of the sealing compound.<br>xx0900000125<br>5 For robots with protection type Clean Room For robots with protection type Clean<br>For robots with food grade lubrication Room<br>Wait 10 minutes. For robots with food grade lubrication<br>Sikaflex 521FC skin dry time (10 minutes).<br>6 Use Touch up paint Clean Room/Hygienic, 3HAC036639-001<br>white to paint any damaged surfaces.<br>Note<br>Always read the instruction in the product<br>data sheet in the paint repair kit for Clean<br>Room/Hygienic.<br>Note<br>After all repair work, wipe the robot free from particles with spirit on a lint free<br>cloth.<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

114 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness 

### **4.3 Cable harness** 

### **4.3.1 Removing the cable harness** 

#### **Introduction** 

These procedures describes how to remove the complete cable harness in: 

- 1 the wrist - _Removing the cable harness in the wrist on page 116_ 

- 2 the upper arm housing - _Removing the cable harness in the upper arm housing on page 121_ 

- 3 the lower arm and swing plate - _Removing the cable harness in the lower arm on page 123_ 

- 4 the base - _Removing the cable harness in the base on page 125_ . 

#### **Note** 

It is necessary to perform the removal in the order as listed above! 

#### **CAUTION** 

Always read the section "General procedures" before doing any repair work. 

_Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **Location of the cable harness.** 

The cable harness is located as shown in the figure. 



xx0900000905 

|A|Motor axis 6|
|---|---|
|B|Motor axis 5|



_Continues on next page_ 

Product manual - IRB 120 

115 

3HAC035728-001 Revision: W 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness 

#### _Continued_ 

|C|Motor axis 4|
|---|---|
|D|Cable harness|
|E|Motor axis 3|
|F|Motor axis 2|
|G|Plate (part of the cable harness)|
|H|Motor axis 1|



#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section_Standard_<br>_toolkit on page 252_.|
|Other tools and procedures may be re-<br>quired. See references to these proced-<br>ures in the step-by-step instructions be-<br>low.|These procedures include references to the tools<br>required.|
|Flange sealant|for example Loctite 574|
|Cable grease|Shell Gadus S2|
|Cable grease, for food grade lubrication|LUBRIPLATE SYNXTREME FG-0. Used for lub-<br>rication of cable contact areas for robots with<br>food grade lubrication.|



#### **Removing the cable harness in the** _wrist_ 



<!-- Start of picture text -->
Action Information<br>1 Jog axis 1 to 90° position.<br>2 Unscrew  two attachment screws  securing<br>the swing housing to the base, not possible<br>to reach with axis 1 in 0° position.<br>xx1300001598<br>3 Jog<br>• axis 1 to 0° position<br>• axis 2 to -50° position<br>• axis 3 to +50° position<br>• axis 4 to 0° position<br>• axis 5 to +90° position<br>• axis 6 - no significance<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

116 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness _Continued_ 



<!-- Start of picture text -->
Action Information<br>4<br>DANGER<br>Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!<br>5<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>6 Remove the  wrist side covers  on both sides.<br>xx1400002899<br>Parts:<br>• Wrist side covers (2 pcs)<br>• Attachment screws (6 pcs)<br>7 Remove the  tilt cover .<br>xx1400002900<br>Parts:<br>• Attachment screws(4 pcs)<br>• Tilt cover<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

117 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>8 Unscrew the  attachment screw securing<br>the  clamp  at motor axis 5.<br>B<br>A<br>xx0900000912<br>Parts:<br>• A: Attachment screw<br>• B: Clamp<br>9 Disconnect customer contact R2.CP/CS<br>10 Remove the  connector support  at axis 5.<br>xx0900000888<br>Parts:<br>• A: Attachment screws (2 pcs)<br>• B: Connector support<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

118 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness _Continued_ 



<!-- Start of picture text -->
Action Information<br>11 Remove the  connector cover .<br>xx0900000902<br>Parts:<br>• A: Attachment screw<br>• B: Connector cover<br>• C: Axis 5 shall be in 90° position<br>12 Unscrew the  attachment screw  securing the<br>clamp  at motor axis 6.<br>xx0900001000<br>Parts:<br>• A: Attachment screw<br>• B: Clamp<br>13 Disconnect connectors:<br>• R2.MP5 and R2. ME5, motor axis 5<br>• R2.MP6 and R2. ME6, motor axis 6.<br>14 Gently pull the cables from motor axis 5 and<br>motor axis 6 out of the wrist housing.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

119 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>15 Remove the  wrist housing (plastic) .<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>C<br>A B<br>xx0900000900<br>Parts:<br>• A: Attachment screws (3 pcs)<br>• B: Wrist housing (plastic)<br>• (C: Axis 5 shall be in 90° position)<br>16 Unscrew the  attachment screws  securing<br>motor axis 5 .<br>xx1400002901<br>Parts:<br>• Attachment screws and washers (2<br>pcs)<br>17 Tilt the  motor axis 5  to be able to remove<br>the  timing belt .<br>xx0900001019<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

120 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness _Continued_ 



<!-- Start of picture text -->
Action Information<br>18 Carefully remove  motor axis 5 .<br>xx1400002906<br>19 Disconnect air hoses.<br><!-- End of picture text -->

#### **Removing the cable harness in the** _upper arm housing_ 



<!-- Start of picture text -->
Action Information<br>1<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>2 Unscrew the  two attachment screws  secur-<br>ing the  cable harness  in the bracket. Leave<br>the bracket fastened in the housing.<br>xx0900001018<br>Parts:<br>• A: Attachment screws (4 pcs)<br>• B: Cable bracket<br>• (C: Axis 5 shall be in 90° position)<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

121 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>3 Remove the housing cover .<br>xx1400002909<br>Parts:<br>• Housing cover<br>• Attachment screws (8 pcs)<br>4 Carefully pull the cable harness out of the<br>wrist housing to axis 4.<br>5 Cut cable ties at cable bracket A.<br>xx0900001023<br>Parts:<br>• A: Cable bracket<br>• B: Cable bracket<br>6 Disconnect connectors:<br>• R2.MP4<br>• R2.ME4.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

122 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness _Continued_ 



<!-- Start of picture text -->
Action Information<br>7 Cut cable ties at cable bracket B.<br>xx0900001023<br>Parts:<br>• A: Cable bracket<br>• B: Cable bracket<br>8 Carefully pull the cable harness out of the<br>upper arm housing.<br><!-- End of picture text -->

#### **Removing the cable harness in the** _lower arm_ 



<!-- Start of picture text -->
Action Information<br>1<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>2 Remove the  lower arm cover .<br>xx0900000848<br>3 Cut  cable ties  for motor axis 3 cables.<br>4 Pull the  cable harness  out through the upper<br>arm housing to axis 3.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

123 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>5 Disconnect connectors:<br>• R2.MP3<br>• R2.ME3.<br>6 Detach the  cable bracket  from the lower arm<br>plate.<br>A B<br>xx0900000879<br>Parts:<br>• A: Cable bracket<br>• B: Attachment screws (2 pcs)<br>7 Remove six remaining  attachment screws<br>between swing housing and base.<br>xx1300001604<br>8 Carefully lift the robot and put it down close<br>to the base of the robot.<br>CAUTION<br>Do not stretch the cable harness.<br>9 Cut  cable ties  at motor axis 2.<br>10 Disconnect connectors:<br>• R2.MP2<br>• R2.ME2<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

124 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness _Continued_ 



<!-- Start of picture text -->
Action Information<br>11 Remove  cable guide .<br>xx0900000857<br>Parts:<br>• A: Attachment screws (2 pcs)<br>• B: Cable guide<br><!-- End of picture text -->

#### **Removing the cable harness in the** _base_ 



<!-- Start of picture text -->
Action Information<br>1<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>2 If the cable harness is being reused: The picture will be good help when assem-<br>• Take a picture of the bracket (from bling the bracket again.<br>the wrist) mounted on the harness<br>• Place a cable tie close to the bracket<br>• Cut old cable ties<br>xx1500000001<br>3 Remove the bracket (from the wrist) on the<br>cable harness.<br>4 Tighten the screw after removal of bracket.<br>5 Guide the cable harness and pull it carefully<br>in below motor in axis 2.<br>6<br>Tip<br>Take a picture of cable harness placement<br>in the swing housing before removal.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

125 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>7 Cut the  cable ties  securing the cable har-<br>ness and the air hoses on the  swing plate<br>at motor axis 1.<br>xx0900000884<br>Parts:<br>• A: Swing plate<br>• B: Cable holder<br>• C: Attachment screws (2 pcs)<br>• D: Cable ties (4 pcs)<br>8 Remove the  base cover  from the robot by<br>removing its attachment screws. F<br>E<br>D<br>C<br>B<br>A<br>xx0900000842<br>A Base cover<br>B Plate<br>C Encoder Interface Board (EIB board)<br>D Bracket<br>E Battery pack<br>F Cable tie<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

126 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness 

#### _Continued_ 

||**Action**|**Information**|
|---|---|---|
|9|Disconnect connector cables from the<br>power source, motor cables and SMB.<br>•<br>R1.A1<br>•<br>R1.A2<br>•<br>R1.A3<br>•<br>R1.A4||
|10|Disconnect the battery cables.||
|11|Remove attachment screws securing<br>_bracket with the battery pack_.|D in figure above. Do not remove the bat-<br>tery pack from the bracket.|
|12|Remove attachment screws securing the<br>_plate_.||
|13|Disconnect connectors from EIB board:<br>•<br>R1.ME4-6 (J4)<br>•<br>R1.ME1-3 (J3)<br>•<br>R2.EIB||
|14|Remove the_EIB board_.<br>**ELECTROSTATIC DISCHARGE**<br>**(ESD)**<br>Put the board in an ESD protective bag.||
|15|Cut_cable tie_.||
|16|Disconnect connectors:<br>•<br>R2.MP1<br>•<br>R2.ME1.||
|17|Disconnect_earth connection_.||
|18|Unscrew the_attachment screws_securing<br>the cable harness to the_cable holder_.|xx0900000884<br>Parts:<br>•<br>A: Swing plate<br>•<br>B: Cable holder<br>•<br>C: Attachment screws (2 pcs)<br>•<br>D: Cable ties (4 pcs)|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

127 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.1 Removing the cable harness _Continued_ 

||**Action**|**Information**|
|---|---|---|
|19|**CAUTION**||
||Cable harness and hoses are sensitive<br>equipment. Use caution when handling<br>cable harness.||
|20|Carefully push and pull the_complete cable_<br>_harness_past motor axis 1.||



Product manual - IRB 120 3HAC035728-001 Revision: W 

128 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness 

### **4.3.2 Refitting the cable harness** 

#### **Introduction** 

These procedures describes how to refit the complete cable harness in: 

- 1 the base - _Refitting the cable harness in the base on page 130_ 

- 2 the lower arm - _Refitting the cable harness in the lower arm on page 133_ 

- 3 the upper arm housing and swing plate - _Refitting the cable harness in the upper arm housing on page 136_ 

- 4 the wrist - _Refitting the cable harness in the wrist on page 137_ . 

#### **Note** 

It is necessary to perform the refitting in the order as listed above! 

#### **CAUTION** 

Always read the section "General procedures" befor doing any repair work. _Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **Location of the cable harness** 

The cable harness is located as shown in the figure. 



xx0900000905 

|A|Motor axis 6|
|---|---|
|B|Motor axis 5|
|C|Motor axis 4|
|D|Cable harness|
|E|Motor axis 3|
|F|Motor axis 2|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

129 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness 

#### _Continued_ 

G Plate (part of the cable harness) H Motor axis 1 

#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section<br>_Standard toolkit on page 252_.|
|Other tools and procedures may be required.<br>See references to these procedures in the step-<br>by-step instructions below.|These procedures include references to<br>the tools required.|
|Flange sealant|For example Loctite 574|
|Cable grease|Shell Gadus S2|
|Cable grease, for food grade lubrication|LUBRIPLATE SYNXTREME FG-0. Used<br>for lubrication of cable contact areas for<br>robots with food grade lubrication.|



#### **Note** 

Apply some cable grease on the cable harness where wear exists and also on the plastic parts of the robot. 

#### **Refitting the cable harness in the** _base_ 

#### Use this procedure to refit the cable harness in the _base_ . 



<!-- Start of picture text -->
Action Information<br>1 Clean the joints that have been opened. See<br>Cut the paint or surface on the robot before<br>replacing parts on page 113<br>2 Check that:<br>• the cable harness and its parts are<br>clean and without damage.<br>3 Remove the bracket from the cable harness The picture will be good help when assem-<br>and mark the position. bling the bracket again.<br>• Take a picture of the bracket mounted<br>on the harness<br>• Place a cable tie close to the bracket<br>• Cut old cable ties<br>xx1500000001<br>4 Refit the  plate  with EIB board.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

130 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness _Continued_ 



<!-- Start of picture text -->
Action Information<br>5 Carefully pull the cable harness through the<br>swing plate.<br>CAUTION<br>Cable harness and hoses are sensitive<br>equipment. Use caution when handling<br>cable harness.<br>6 Place the  cables  from cable harness on the<br>right side in frame, and the  air hoses  on the<br>left side in the frame.<br>xx0900000836<br>7 Secure the cable harness to the  cable holder Tightening torque: 1 Nm.<br>with the  attachment screws .<br>xx0900000884<br>Parts:<br>• A: Swing plate<br>• B: Cable holder<br>• C: Attachment screws (2 pcs)<br>• D: Cable ties (4 pcs)<br>8 Carefully push and pull the cable harness<br>out from the frame.<br>CAUTION<br>Cable harness and hoses are sensitive<br>equipment. Use caution when handling<br>cable harness.<br>9 Put some cable grease on the cable harness<br>(including air hoses).<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

131 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>10 Place the cable harness inside the cable<br>holder.<br>11 Loosen the  cable bracket  next to motor axis<br>1.<br>xx1500000002<br>12 Reconnect connectors:<br>• R2.MP1<br>• R2.ME1.<br>13 Secure the  motor cables  to the cable<br>bracket with cable ties.<br>14 Fasten  cable bracket . M3x8 (2 pcs)<br>15 Refit the  PE cable . Är detta earth connection? Om inte, vad<br>är det för kabel?<br>16 Refit the  EIB board . Attachment screw (4 pcs) M3x8<br>Note<br>Use ESD protective equipment.<br>17 Connect  board .<br>• R1.ME4-6 (J4)<br>• R1.ME1-3 (J3)<br>• R2.EIB.<br>18 Connect  battery cables .<br>19 Refit the  battery plate . Attachment screw (4 pcs) M3x8<br>20 Refit the  EIB plate . Attachment screw (4 pcs) M3x8<br>CAUTION<br>Cables are sensitive equipment. Use caution<br>when handling cables.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

132 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>21 Refit the  base cover . Tightening torque: 4 Nm<br>A<br>B<br>xx0900000829<br>22 Seal and paint the joints that have been<br>opened. See  Cut the paint or surface on the<br>robot before replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free from<br>particles with spirit on a lint free cloth.<br><!-- End of picture text -->

#### **Refitting the cable harness in the** _lower arm_ 



<!-- Start of picture text -->
Action Information<br>1 Clean the joints that have been opened. See<br>Cut the paint or surface on the robot before<br>replacing parts on page 113<br>2 Place the  cable harness  in the  holder  on the<br>swing plate.<br>• Put cable R2.MP2 towards back<br>• Put cable R2.ME2 towards front<br>3 Tighten screws in bracket. Attachment screw M3x8 (2 pcs)<br>4 Secure  air hoses  on the  swing plate  with<br>cable ties .<br>5 Secure the  cable harness  on the  swing plate<br>with  cable ties .<br>6 Put cable ties on the motor connections to<br>ease the mounting in axis-2 motor.<br>xx1500000003<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

133 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness _Continued_ 



<!-- Start of picture text -->
Action Information<br>7 Carefully push and pull cable harness past<br>the axis-2 motor.<br>CAUTION<br>Cables are sensitive equipment. Use cau-<br>tion when handling cables.<br>8 Fit lower arm on the swing plate while<br>pulling the cable harness out.<br>CAUTION<br>Be careful not to squeeze the cables.<br>9 Tighten attachment screws on the swing M4x25 (6 pcs)<br>plate.<br>10 Refit the  cable bracket  on the cable harness.<br>Use the picture to localize the correct posi-<br>tion.<br>xx1500000001<br>11 Fasten the bracket at axis-3 motor. M3x8 (2 pcs)<br>12 Remove the cable ties on the motor connect-<br>ors at axis-2 motor.<br>13 Reconnect connectors:<br>• R2.MP3<br>• R2.ME3.<br>14 Place the connector cables by the motor<br>and fasten the connectors with cable ties<br>around the motor.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

134 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>15 Fit the  cable guide . Tightening torque: 1 Nm.<br>CAUTION<br>The plastic will crack if screws are tightened<br>too hard.<br>xx0900000857<br>Parts:<br>• A: Attachment screws (2 pcs)<br>• B: Cable guide<br>16 Reconnect  the motor connections, axis-3<br>motor<br>• R2.ME3<br>• R2.MP3.<br>17 Fasten  motor cables  with cable ties on the<br>cable bracket.<br>18 Fit the  cable bracket  to the lower arm plate. Tightening torque: 1 Nm.<br>A B<br>xx0900000879<br>Parts:<br>• A: Cable bracket<br>• B: Attachment screws (2 pcs)<br>19 Pull the  cable harness  through the upper<br>arm housing.<br>20 Verify that the cable harness is not twisted.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

135 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness _Continued_ 



<!-- Start of picture text -->
Action Information<br>21<br>22 Seal and paint the joints that have been<br>opened. See  Cut the paint or surface on the<br>robot before replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free<br>from particles with spirit on a lint free cloth.<br><!-- End of picture text -->

#### **Refitting the cable harness in the** _upper arm housing_ 

Use this procedure to refit the cable harness in the _upper arm housing_ . 



<!-- Start of picture text -->
Action Information<br>1 Clean the joints that have been opened. See<br>Cut the paint or surface on the robot before<br>replacing parts on page 113<br>2 Reconnect connectors:<br>• R2.MP4<br>• R2.ME4.<br>3 Fasten motor cables with a cable tie.<br>4 Fasten the cable harness with cable ties on Tightening torque: 1 Nm.<br>the cable bracket. Adjust the lenght on the<br>cable harness so the motor cables reaches<br>its connectors.<br>xx0900001023<br>Parts:<br>• A: Cable bracket<br>• B: Cable bracket<br>5 Push the  cable harness  in through the  wrist<br>housing .<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

136 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness _Continued_ 



<!-- Start of picture text -->
Action Information<br>6 Refit the  cable bracket in the housing with Tightening torque: 1 Nm.<br>its  attachment screws .<br>xx0900001018<br>Parts:<br>• A: Attachment screws (2 pcs)<br>• B: Cable bracket<br>7 Seal and paint the joints that have been<br>opened. See  Cut the paint or surface on the<br>robot before replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free from<br>particles with spirit on a lint free cloth.<br><!-- End of picture text -->

#### **Refitting the cable harness in the** _wrist_ 

Use this procedure to refit the cable harness in the _wrist_ . 

||**Action**|**Information**|
|---|---|---|
|1|Clean the joints that have been opened. See<br>_Cut the paint or surface on the robot before_<br>_replacing parts on page 113_||
|2|Reconnect_air hoses_. Put them flat to make<br>room for the motor.||
|3|Reconnect customer contact R2.CS||
|4|Place the_motor_in axis 5.||
|5|Refit the_timing belt_.||
|6|Fasten the motor just enough to still be able<br>to move the motor.|M5x16 (2 pcs) and washers|
|7|Tension the timing belt to 7.6 - 8.4 Nm.<br>**Note**|For details about how to adjust the timing<br>belt, see_Adjusting axis-5 timing belt on_<br>_page 95_.|
||Do not stretch the timing belt too much!||
|8|Tighten motor_attachment screws_.|Tightening torque: 5.5 Nm|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

137 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>9 Refit the  wrist housing (plastic) . Tightening torque: 2 Nm<br>C<br>A B<br>xx0900000900<br>• A: Attachment screws, M3x25 (3<br>pcs)<br>• B: Wrist housing (plastic)<br>• C: (Axis 5 shall be in 90° position)<br>10 Reconnect connectors:<br>• R2.MP5<br>• R2.ME5.<br>11 Put the cables around the motor.<br>12 Refit  connector support (plastic) . Tightening torque: 1 Nm.<br>xx0900000888<br>Parts:<br>• A: Attachment screws, M3x8 (2<br>pcs)<br>• B: Connector support (plastic)<br>13 Fasten  cables  to axis 6 in the connector<br>support.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

138 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness _Continued_ 



<!-- Start of picture text -->
Action Information<br>14 Secure the cable harness with  cable ties .<br>xx0900001009<br>Parts:<br>• A: Cable ties<br>15 Refit the  attachment screw  securing the Tightening torque: 1 Nm.<br>clamp  at motor axis 5.<br>CAUTION<br>Make sure that the cables run loose from<br>the circular edge into motor axis 6.<br>B<br>A<br>xx0900000912<br>Parts:<br>• A: Attachment screw<br>• B: Clamp<br>16 Reconnect connectors:<br>• R2.MP6<br>• R2.ME6.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

139 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>17 Refit the  attachment screw  securing the Tightening torque: 1 Nm.<br>clamp  at motor axis 6.<br>xx0900001000<br>Parts:<br>• A: Attachment screw<br>• B: Clamp<br>18 Refit the  connector cover . Tightening torque: 1 Nm.<br>xx0900000902<br>Parts:<br>• A: Attachment screw M3x8 (1 pcs)<br>• B: Connector cover<br>• C: (Axis 5 shall be in 90° position)<br>19 Put  cable grease  on the cable harness in<br>the wrist.<br>20 Clean all the  covers  if they are dirty.<br>21 Put  cable grease  inside the covers.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

140 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>22 Refit the  wrist side covers . Tightening torque: 1 Nm.<br>Attachment screw M3x8 (3 pcs)<br>23 Refit the  tilt cover . Tightening torque: 1 Nm.<br>A<br>B<br>C<br>xx0900000901<br>Parts:<br>• A: Attachment screw M3x8 (4 pcs)<br>• B: Tilt cover<br>• C: Motor axis 6<br>24 Put cable grease on the sleeve in axis 4.<br>25 Refit the  housing cover  at axis 4. Tightening torque: 1 Nm<br>• housing cover  and Attachment screw M3x8 (8 pcs)<br>• lower arm cover .<br>26 Put cable grease on the cable harness and<br>sleeve in lower arm.<br>27 Refit the  lower arm cover  at axis 4. Tightening torque: 1 Nm<br>Attachment screw M3x8 (4 pcs)<br>28 Connect the robot to the  power  source.<br>DANGER<br>Make sure all safety requirements are met<br>when performing the first test run. These<br>are further detailed in the section  Test run<br>after installation, maintenance, or repair on<br>page 51 .<br>29 Jog the robot to 90° in axis 1.<br>30 Fasten the two remaining screws at swing<br>plate/base.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

141 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.2 Refitting the cable harness 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>31 Seal and paint the joints that have been<br>opened. See  Cut the paint or surface on the<br>robot before replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free<br>from particles with spirit on a lint free cloth.<br>32 Recalibrate the robot. See chapter:<br>• Calibration<br>33<br>DANGER<br>Make sure all safety requirements are met<br>when performing the first test run. These<br>are further detailed in the section  Test run<br>after installation, maintenance, or repair on<br>page 51 .<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

142 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.3 Replacing the Encoder Interface board 

### **4.3.3 Replacing the Encoder Interface board** 

#### **Introduction** 

This procedure describes how to replace the Encoder Interface board. 

#### **Location of the Encoder Interface board** 



<!-- Start of picture text -->
F<br>E<br>D<br>C<br>B<br>A<br><!-- End of picture text -->

xx0900000842 

|A|Base cover|
|---|---|
|B|Plate|
|C|Encoder Interface Board (EIB board)|
|D|Bracket|
|E|Battery pack|
|F|Cable strap|



#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard tools|The content is defined in the section_Standard_<br>_toolkit on page 252_.|
|Other tools and procedures may be required.<br>See references to these procedures in the<br>step-by-step instructions below.|These procedures include references to the<br>tools required.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

143 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.3.3 Replacing the Encoder Interface board _Continued_ 

#### **Removing the EIB board** 

Use this procedure to remove the EIB board. 

||**Action**|**Information**|
|---|---|---|
|1|**DANGER**<br>Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!||
|2|**CAUTION**<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See_Cut the paint or surface on the robot_<br>_before replacing parts on page 113_.||
|3|Remove the_base cover_.|See the figure in :<br>•<br>_Location of the Encoder Interface_<br>_board on page 143_|
|4|Remove the attachment screws securing<br>the_plate_.|See the figure in:<br>•<br>_Location of the Encoder Interface_<br>_board on page 143_|
|5|Pull carefully out the cable harnesss main<br>a little in order to reach the EIB board.||
|6|Disconnect the battery cable.||
|7|Remove the_bracket_where the battery is<br>fitted.|See the figure in:<br>•<br>_Location of the Encoder Interface_<br>_board on page 143_|
|8|Disconnect connectors:<br>•<br>R1.ME1-3<br>•<br>R1.ME4-6<br>•<br>R2.EIB.||
|9|Remove the_EIB board_.|See the figure in:<br>•<br>_Location of the Encoder Interface_<br>_board on page 143_|



#### **Refitting the EIB board** 

Use this procedure to refit the EIB board. 

||**Action**|**Information**|
|---|---|---|
|1|Clean the joints that have been opened. See<br>_Cut the paint or surface on the robot before_<br>_replacing parts on page 113_||
|2|Fit the EIB board.|Tightening torque: 2 Nm.<br>See the figure in:<br>•<br>_Location of the Encoder Interface_<br>_board on page 143_|
|3|Reconnect connectors:<br>•<br>R1.ME1-3<br>•<br>R1.ME4-6<br>•<br>R2.EIB.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

144 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

_Continued_ 

#### 4.3.3 Replacing the Encoder Interface board 

||**Action**|**Information**|
|---|---|---|
|4|Fit the_plate_where the battery is fitted.|See the figure in:<br>•<br>_Location of the Encoder Interface_<br>_board on page 143_|
|5|Reconnect the battery cable.||
|6|Push the cable harness main carefully into<br>the_base_.|**CAUTION**<br>Arrange the cable harness inside correctly<br>in a way that:<br>•<br>it is not damaged in the continued<br>refitting process<br>•<br>extra wear will not occur after pro-<br>duction is restarted, which will<br>shorten the life of the harness.<br>See section<br>•<br>_Refitting the cable harness on_<br>_page 129_.|
|7|Secure the_plate_with its attachment screws.|Tightening torque: 2 Nm.<br>See the figure in:<br>•<br>_Location of the Encoder Interface_<br>_board on page 143_|
|8|Refit the_base cover_.|Tightening torque: 4 Nm.<br>See the figure in:<br>•<br>_Location of the Encoder Interface_<br>_board on page 143_|
|9|Seal and paint the joints that have been<br>opened. See_Cut the paint or surface on the_<br>_robot before replacing parts on page 113_<br>**Note**<br>After all repair work, wipe the robot free<br>from particles with spirit on a lint free cloth.||
|10|Recalibrate the robot.|See chapter:<br>•<br>_Calibration on page 219_|
|11|**DANGER**<br>Make sure all safety requirements are met<br>when performing the first test run. These<br>are further detailed in the section_Test run_<br>_after installation, maintenance, or repair on_<br>_page 51_.||



Product manual - IRB 120 3HAC035728-001 Revision: W 

145 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.4.1 Replacing plastic covers 

### **4.4 Plastic covers** 

### **4.4.1 Replacing plastic covers** 

#### **Introduction** 

The section describes how to replace the plastic covers on the robot. 

#### **CAUTION** 

Always read the section "General procedures" before doing any repair work. _Cut the paint or surface on the robot before replacing parts on page 113_ 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

146 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

4.4.1 Replacing plastic covers _Continued_ 

#### **Location of the plastic covers** 



xx0900000607 

|A|Lower arm cover (2 pcs.)|
|---|---|
|B|Wrist side cover (2 pcs.)|
|C|Wrist housing (plastic)|
|D|Housing cover|
|E|Tilt cover|



#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard tools|The content is defined in the section_Standard_<br>_toolkit on page 252_.|
|Other tools and procedures may be re-<br>quired. See references to these procedures<br>in the step-by-step instructions below.|These procedures include references to the<br>tools required.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

147 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.4.1 Replacing plastic covers _Continued_ 

#### **Attachment screws and tightening torques** 

The table shows what attachment screws and tightening torques to be used. 

|**Cover**|**Attachment**<br>**screw**|**Screw quality**|**Qty.**|**Tightening**<br>**torque**|
|---|---|---|---|---|
|Lower arm cover|M3x16|Steel 12.9 Black oxide|4+4|1 Nm|
|Wrist side cover|M3x8|Steel 12.9 Black oxide|3+3|1 Nm|
|Wrist housing (plastic)|M3x25|Steel 12.9 Black oxide|3|1 Nm|
|Housing cover|M3x8|Steel 12.9 Black oxide|8|1 Nm|
|Tilt cover|M3x8|Steel 12.9 Black oxide|4|1 Nm|



#### **Removing plastic covers** 

Use this procedure to remove the plastic covers. 



<!-- Start of picture text -->
Action Information<br>1<br>DANGER<br>Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!<br>2<br>CAUTION<br>Always cut the paint with a knife and grind the<br>paint edge when disassembling parts. See  Cut<br>the paint or surface on the robot before repla-<br>cing parts on page 113 .<br>3 Remove the attachment screws securing the<br>plastic cover.<br>4 Remove the plastic cover.<br>5 If the cover shall be reused, keep it clean and<br>put in a safe place.<br><!-- End of picture text -->

#### **Refitting plastic covers** 

Use this procedure to refit the plastic covers. 

||**Action**|**Information**|
|---|---|---|
|1|Clean the joints that have been opened. See<br>_Cut the paint or surface on the robot before re-_<br>_placing parts on page 113_||
|2|Before fitting the plastic cover, check it for<br>cracks or any other damage.|If the plastic cover is cracked or has<br>any other damage it must be replaced<br>with a new one.|
|3|Fit the plastic cover and secure it with its_attach-_<br>_ment screws_.<br>Which attachment screws to use is described<br>in the table:<br>•<br>_Attachment screws and tightening_<br>_torques on page 148_||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

148 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.4.1 Replacing plastic covers 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>4 For  tightening torques , see the table:<br>• Attachment screws and tightening<br>torques on page 148<br>5 Seal and paint the joints that have been opened.<br>See  Cut the paint or surface on the robot before<br>replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free from<br>particles with spirit on a lint free cloth.<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

149 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.5.1 Replacing the upper arm 

### **4.5 Upper arm** 

### **4.5.1 Replacing the upper arm** 

#### **Introduction** 

This procedure describes how to replace the upper arm. 

**CAUTION** Always read the section "General procedures" befor doing any repair work. _Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **Location of upper arm** 

The upper and lower arms are located as shown in the figure. 





<!-- Start of picture text -->
xx0900000924<br>A Upper arm, complete with wrist<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

150 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

4.5.1 Replacing the upper arm _Continued_ 

|B|Attachment screws (16 pcs)|
|---|---|
|C|Gearbox, axis 3|
|D|Lower arm|



#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section_Standard_<br>_toolkit on page 252_.|
|Other tools and procedures may be re-<br>quired. See references to these proced-<br>ures in the step-by-step instructions be-<br>low.|These procedures include references to the tools<br>required.|
|Loctite 7063|For removing residues of Loctite.|
|Loctite 574||



#### **Removing the upper arm** 

Use this procedure to remove the upper arm. 

||**Action**|**Information**|
|---|---|---|
|1|Move axis 5 to a 90° position.||
|2|**DANGER**||
||Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!||
|3|**CAUTION**<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See_Cut the paint or surface on the robot_<br>_before replacing parts on page 113_.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

151 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.5.1 Replacing the upper arm 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>4 Remove the  wrist covers . A<br>B<br>C<br>B<br>xx0900000999<br>Parts:<br>• A: Wrist covers (2 pcs)<br>• B: Attachment screws (3+3 pcs)<br>• C: Axis 5 shall be in 90° position<br>5 Remove  motor axis 5 . See section<br>• Replacing motor axis 5 on page206<br>6 Remove the  cable harness  in the  wrist . See section<br>• Removing the cable harness on<br>page 115 .<br>7 Pull the  cable harness  out of the  wrist<br>housing .<br>8 Remove the  wrist housing (plastic) .<br>C<br>A B<br>xx0900000900<br>Parts:<br>• A: Attachment screws (3 pcs)<br>• B: Wrist housing (plastic)<br>• C: Axis 5 shall be in 90° position<br>9 Remove the  cable harness  in the  upper arm See section<br>housing . • Removing the cable harness on<br>page 115 .<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

152 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.5.1 Replacing the upper arm _Continued_ 



<!-- Start of picture text -->
Action Information<br>10 Unscrew the attachment screws securing<br>the  cable brackets  on both sides of motor<br>axis 4.<br>xx0900001023<br>Parts:<br>• A: Cable bracket<br>• B: Cable bracket<br>11 Remove the  lower arm covers  on both sides<br>of the robot.<br>xx0900000848<br>12 Remove the  cable harness  in the  lower arm . See section<br>• Removing the cable harness on<br>page 115 .<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

153 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.5.1 Replacing the upper arm 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>13 Unscrew the  attachment screws  securing<br>the  lower arm plate  to the  motor cover .<br>xx0900000851<br>Parts:<br>• A: Cable harness<br>• B: Lower arm plate<br>• C: Motor cover<br>• D: Attachment screws (4 pcs)<br>• E: Holes for attachment screws (4<br>pcs)<br>• F: Cable guide<br>14 Pull out the cable harness through the upper<br>arm housing.<br>15 Secure the upper arm by holding it firmly.<br>16 Unscrew the  attachment screws  securing See the figure in:<br>the  upper arm with wrist  to  gearbox axis 3 . • Location of upper arm on page 150<br>17 Remove the upper arm.<br><!-- End of picture text -->

#### **Refitting the upper arm** 

Use this procedure to refit the upper arm. 



<!-- Start of picture text -->
Action Information<br>1 Clean the joints that have been opened. See<br>Cut the paint or surface on the robot before<br>replacing parts on page 113<br>2 Check that:<br>• All assembly surfaces are clean and<br>without damage.<br>3 Remove old residues of Loctite from the Also see<br>assembly surfaces on gearbox axis 3 and • Required equipment on page 151<br>upper arm, using  Loctite 7063 .<br>4 Apply  Loctite 574  on the assembly surfaces<br>on  gearbox axis 3  and the  upper arm .<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

154 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.5.1 Replacing the upper arm 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>5 Secure the  upper arm including wrist  to Tightening torque: 2 Nm.<br>gearbox axis 3  with its  attachment screws . Attachment screws M3x20 q12.9 and<br>washers (16 + 16 pcs)<br>See the figure in:<br>• Location of upper arm on page 150<br>6 Push the  cable harness  into the  upper arm See section<br>housing . • Refitting the cable harness on<br>page 129<br>7 Refit the  lower arm plate . Tightening torque: 4 Nm.<br>xx0900000851<br>Parts:<br>• A: Cable harness<br>• B: Lower arm plate<br>• C: Motor cover<br>• D: Attachment screws M4x16 q12.9<br>and washers (4 + 4 pcs)<br>• E: Holes for attachment screws (4<br>pcs)<br>• F: Cable guide<br>8 Secure the  cable harness  to the  lower arm See section<br>plate . • Refitting the cable harness on<br>page 129<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

155 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.5.1 Replacing the upper arm 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>9 Refit the  lower arm covers . Tightening torque: 1 Nm.<br>xx0900000848<br>10 Secure the  cable harness  in the  upper arm See section<br>housing . • Refitting the cable harness on<br>page 129<br>11 Refit the two  cable brackets  on either side Tightening torque: 1 Nm.<br>of motor axis 4.<br>xx0900001023<br>Parts:<br>• A: Cable bracket<br>• B: Cable bracket<br>12 Push the cable harness into the wrist.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

156 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.5.1 Replacing the upper arm _Continued_ 



<!-- Start of picture text -->
Action Information<br>13 Refit the  cable bracket . Tightening torque: 1 Nm.<br>xx0900001018<br>Parts:<br>• A: Attachment screws (4 pcs)<br>• B: Cable bracket<br>• C: Axis 5 shall be in 90° position<br>14 Refit the  cable harness  in the  wrist . See section<br>• Refitting the cable harness on<br>page 129<br>15 Refit the  wrist housing (plastic) . Tightening torque: 1 Nm.<br>C<br>A B<br>xx0900000900<br>Parts:<br>• Attachment screws (3 pcs)<br>• B: Wrist housing (plastic)<br>• C: Axis 5 shall be in 90° position<br>16 Refit  motor axis 5 . See section<br>• Replacing motor axis 5 on page206<br>17 Seal and paint the joints that have been<br>opened. See  Cut the paint or surface on the<br>robot before replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free<br>from particles with spirit on a lint free cloth.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

157 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.5.1 Replacing the upper arm _Continued_ 



<!-- Start of picture text -->
Action Information<br>18 Recalibrate the robot. See chapter:<br>• Calibration on page 219.<br>19<br>DANGER<br>Make sure all safety requirements are met<br>when performing the first test run. These<br>are further detailed in the section  Test run<br>after installation, maintenance, or repair on<br>page 51 .<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

158 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.6.1 Replacing the lower arm 

### **4.6 Lower arm** 

### **4.6.1 Replacing the lower arm** 

#### **Introduction** 

This procedure describes how to replace the lower arm. Gearbox axis 3 is included in the lower arm. 

#### **CAUTION** 

Always read the section "General procedures" befor doing any repair work. 

_Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **Location of the lower arm** 

The lower arm is located as shown in the figure. 



xx1100000961 

#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section<br>_Standard toolkit on page 252_.|
|Other tools and procedures may be required.<br>See references to these procedures in the step-<br>by-step instructions below.|These procedures include references to<br>the tools required.|
|Flange sealant|for example Loctite 574|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

159 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.6.1 Replacing the lower arm _Continued_ 

#### **Removing the lower arm** 

Use this procedure to remove the lower arm. 



<!-- Start of picture text -->
Action Information<br>1<br>DANGER<br>Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!<br>2<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>3 Remove the  lower arm covers on both<br>sides of the robot.<br>xx0900000848<br>4 Remove the  cable harness  in the  lower arm . See section<br>• Removing the cable harness in the<br>wrist on page 116<br>5 Unscrew the attachment screws securing<br>the lower and upper arms and separate the<br>two.<br>6 Unscrew the attachment screws securing<br>the motor cover to the lower arm plate.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

160 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.6.1 Replacing the lower arm _Continued_ 



<!-- Start of picture text -->
Action Information<br>7 Unscrew the  attachment screws  securing A B<br>the  lower arm  to  axis-2 gearbox .<br>C D<br>xx0900000859<br>Parts:<br>• A: Swing housing<br>• B: Gearbox axis 2<br>• C: Lower arm<br>• D: Attachment screws (16 pcs)<br>8 Remove the  lower arm .<br>9 Remove  axis-3 motor  and  timing belt . See section<br>• Replacing axis-3 motor with gear-<br>box on page 197<br><!-- End of picture text -->

#### **Refitting the lower arm** 

#### Use this procedure to refit the lower arm. 



<!-- Start of picture text -->
Action Information<br>1 Clean the joints that have been opened. See<br>Cut the paint or surface on the robot before<br>replacing parts on page 113<br>2 Check that:<br>• all assembly surfaces are clean and<br>without damage.<br>3 Remove old residues of Loctite from the Also see<br>assembly surfaces on gearbox axis 2 and • Required equipment on page 159<br>lower arm, using  Loctite 7063 .<br>4 Apply  flange sealant  on the assembly sur-<br>faces on axis-2 gearbox and lower arm.<br>5 Remove the screw from the air release hole<br>of lower arm housing.<br>xx1700000766<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

161 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.6.1 Replacing the lower arm 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>6 Refit the  lower arm  to  axis-2 gearbox  with Tightening torque: 4 Nm.<br>its  attachment screws . A B<br>C D<br>xx1700000767<br>Parts:<br>• A: Swing housing<br>• B: Gearbox axis 2<br>• C: Lower arm<br>• D: Attachment screws M4x25 q12.9<br>and washers (16 + 16 pcs)<br>7 Refit the screw in the air release hole on the<br>lower arm housing, and apply Loctite 243<br>on this screw.<br>xx1700000768<br>8 Refit the  motor cover . Tightening torque: 4 Nm.<br>9 Refit  axis-3 motor . See section<br>• Replacing axis-3 motor with gear-<br>box on page 197<br>10 Secure the  upper  and  lower arms  with the Tightening torque: 2 Nm.<br>attachment screws (16 pcs).<br>11 Refit the  cable harness  in the  lower arm . See section<br>• Refitting the cable harness on<br>page 129<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

162 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.6.1 Replacing the lower arm 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>12 Refit the  lower arm covers . Tightening torque: 1 Nm.<br>xx0900000848<br>13 Seal and paint the joints that have been<br>opened. See  Cut the paint or surface on the<br>robot before replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free<br>from particles with spirit on a lint free cloth.<br>14 Recalibrate the robot. See chapter:<br>• Calibration on page 219 .<br>15<br>DANGER<br>Make sure all safety requirements are met<br>when performing the first test run. These<br>are further detailed in the section  Test run<br>after installation, maintenance, or repair on<br>page 51 .<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

163 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox 

### **4.7 Motors and motors with gearboxes** 

### **4.7.1 Replacing axis-1 motor with gearbox** 

#### **Introduction** 

This procedure describes how to replace: 

- axis-1 motor with gearbox. 

Axis-1 gearbox is part of axis-1 motor when ordered as a spare part. The procedure below describes the replacement of axis-1 motor and gearbox as one unit. For further information, please **contact ABB** . 

#### **CAUTION** 

Always read the section "General procedures" before doing any repair work. 

_Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **Location of axis-1 motor with gearbox** 

The axis-1 motor with gearbox is located as shown in the figure. 





<!-- Start of picture text -->
A<br><!-- End of picture text -->

xx0900000871 

A Axis-1 motor with gearbox 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

164 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 

There are two different designs of the swing plate, inside the base. One of the designs has an air release hole and the other does not. 



xx1500000112 

#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section<br>_Standard toolkit on page 252_.|
|Other tools and procedures may be required.<br>See references to these procedures in the step-<br>by-step instructions below.|These procedures include references to<br>the tools required.|
|Flange sealant, for example Loctite 574|Amount 2 ml|
|Cable grease|Shell Gadus S2|
|Cable grease, for food grade lubrication|LUBRIPLATE SYNXTREME FG-0. Used<br>for lubrication of cable contact areas for<br>robots with food grade lubrication.|
|Loctite 243||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

165 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 

#### **Removing the axis-1 motor with gearbox** 

Use these procedures to remove the axis-1 motor, with gearbox. 

#### Removal, step 1 - Preparations 



<!-- Start of picture text -->
Action Information<br>1<br>Note<br>If the robot is fitted in any other position<br>than floor mounted, it must first be removed<br>from this position. The replacing procedure<br>of the axis-1 motor with gearbox is best<br>performed with the robot in an upright posi-<br>tion.<br>2<br>CAUTION<br>Use caution performing these procedures.<br>The cable harness will still be fitted or partly<br>fitted during the procedures.<br>3 The two most back screws that secure the<br>swing house, are difficult to reach with axis-<br>1 in calibration position. Therefore jog axis-<br>1 to be able to reach those screws.<br>4 Jog axis 1 to 90° position.<br>5 Remove the two attachment screws secur-<br>ing the swing housing to the base. (Not<br>possible to reach with axis 1 in 0° position.)<br>xx1300001598<br>xx1300001599<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

166 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>6 Jog<br>• axis 1 to 0° position<br>• axis 2 to -50° position<br>• axis 3 to +50° position<br>• axis 4 to 0° position<br>• axis 5 to +90° position<br>• axis 6 - no significance<br>xx1300001600<br>7<br>DANGER<br>Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!<br>8<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>9 Remove the lower arm cover on the side of<br>the lower arm plate.<br>xx1300001124<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

167 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 

#### Removal, step 2 - Swing housing 



<!-- Start of picture text -->
Action Information<br>1<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>2 Remove the  cable bracket  from the lower<br>arm.<br>A B<br>xx0900000879<br>A Bracket<br>B Attachment screws (2 pcs)<br>3 Cut  cable ties  at motor axis 2.<br>4 Disconnect  connectors :<br>• R2.MP2<br>• R2.ME2<br>5 Remove the remaining  attachment screws<br>securing the swing housing.<br>xx1300001604<br>6 If needed, use two screws to press the<br>swing housing out.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

168 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>7 Remove both  cable guides .<br>xx0900000857<br>A Attachment screws (2 pcs)<br>B Cable guides (2 pcs)<br>8 Carefully pull the axis 2 motor cables out<br>as long as possible.<br>9 Guide the cable harness and carefully<br>push/pull it in below motor in axis2, as long<br>as possible, without damaging any cables.<br>Note<br>Do not use excessive force!<br>10 Carefully  lift the upper arm, lower arm, and<br>swing housing  and put it down close to the<br>Tip<br>base of the robot as far as the (still connec-<br>ted) cable harness permit.<br>Use a solid box in a suitable size made of<br>a material that will not damage the robot<br>CAUTION<br>in any way. Some plastic in the bottom of<br>the box makes a good "bed" for the robot<br>Do not stretch the cable harness. to rest on.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

169 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>11 Remove the attachment screws securing C<br>the cable bracket on the swing plate.<br>Note<br>Leave cable ties and clamps fitted! B<br>A<br>xx1300001596<br>A Swing plate<br>B Cable bracket<br>C Attachment screws (2+2 pcs)<br>12<br>CAUTION<br>Make sure the cable harness is not dam-<br>aged in the process!<br><!-- End of picture text -->

#### Removal, step 3 - Base 



<!-- Start of picture text -->
Action Information<br>1<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>2 Remove the  base cover .<br>A<br>B<br>xx0900000829<br>A Base cover<br>B Attachment screws (4 pcs)<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

170 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>3 Remove the plate with the EIB board and<br>battery fitted, and pull it out in order to reach<br>the connector of the battery cable.<br>xx0900000831<br>A Plate<br>B Attachment screws (4 pcs)<br>4<br>CAUTION<br>Disconnect the battery cable connector very<br>carefully! If too much force is used there is<br>a risk of damaging the connector!<br>5 Loosen  attachment screws  holding cable<br>bracket with connectors.<br>xx1500000002<br>6 Cut the cable ties connecting the axis-1<br>motor cables to the base.<br>7 Disconnect the axis-1 motor cables.<br><!-- End of picture text -->

#### Removal, step 4 - Axis-1 motor with gearbox 



<!-- Start of picture text -->
Action Information<br>1<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

171 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>2 Remove the attachment screws securing<br>the swing plate.<br>xx1300001605<br>A Attachment screws and washers (16<br>+ 16 pcs)<br>B Swing plate<br>C Base<br>3<br>Tip<br>Make a note of the position of the swing<br>plate before removing it.<br>xx1400002558<br>4 Use caution and lift the swing plate up and<br>put it close to the rest of the removed arm<br>system of the robot. Use the protrude holes<br>to force the swing plate loose.<br>CAUTION<br>Do not damage the cable harness!<br>xx1300001606<br>5<br>CAUTION<br>Protect the gearbox from dust and/or foreign<br>particles.<br>6 Remove screw from swing plate centre.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

172 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>7 Remove the attachment screws securing<br>the cable guide.<br>xx1300001607<br>8 Use caution and lift the cable guide up,<br>moving it over the cable harness and pla-<br>cing it close to the rest of the removed parts<br>of the robot.<br>CAUTION<br>Do not damage the cable harness in the<br>process!<br>xx1300001608<br>9 Remove the attachment screws securing<br>the axis-1 motor with gearbox.<br>xx0900001054<br>A Attachment screws (12 pcs)<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

173 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>10 Use caution and push the axis-1 motor<br>cables through the recess, while at the same CAUTION<br>time lifting the the axis-1 motor with gearbox<br>up. Connectors can get stuck in the cramp<br>space through the recess!<br>CAUTION<br>Lift with a firm grip on both motor and<br>gearbox, in order not to damage any parts.<br><!-- End of picture text -->

#### **Refitting the motor and gearbox axis 1** 

Use these procedures to refit both motor and gearbox axis 1. 

#### **CAUTION** 

Use extreme caution performing these procedures. The cable harness will still be fitted or be partly fitted during the procedures. 

#### Refitting, step 1 - Axis-1 motor with gearbox 



<!-- Start of picture text -->
Action Information<br>1 Wipe the contact surfaces between motor<br>flange and base clean from old residues of<br>Loctite and other contamination.<br>Make sure that:<br>• all assembly surfaces are clean from<br>old residues of Loctite and other<br>contamination, and are without dam-<br>age<br>• motor and gearbox are clean and<br>without damage.<br>2 Clean the joints that have been opened. See<br>Cut the paint or surface on the robot before<br>replacing parts on page 113<br>3 If robot has an air release hole: Remove the<br>screw in the air release hole on the swing<br>plate to release pressure inside the base.<br>xx1500000112<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

174 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>4 Remove the two screws with nuts securing<br>the axis-1 motor and gearbox during trans-<br>port.<br>xx0900001050<br>A Securing screws and nuts (2 pcs),<br>used during transport<br>5<br>Tip<br>Extend the motor connection cables with<br>cable ties to ease pulling the cables through<br>the base.<br>xx1500000003<br>6 Hold the axis-1 motor, and carefully push<br>the motor cables through the recess in the<br>bottom of the base.<br>xx1300001117<br>7 Before fitting the axis-1 motor with gearbox,<br>find the position for the attachment screws,<br>where the motor cables reaches out as long<br>as possible into the base. With motor and<br>gearbox fitted and motorcables out of the<br>hole, remove the cable ties.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

175 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>8 Secure the axis-1 motor with gearbox. Tightening torque: 4 Nm<br>xx0900001054<br>A Attachment screw, M4x40 q12.9 (12<br>pcs)<br>9 Use caution and move the cable guide over<br>the cable harness and fit it in the base.<br>CAUTION<br>Make sure not to damage the cable pack-<br>age.<br>xx1300001608<br>xx0900000800<br>A Attachment screws M3x8 q12.9 (3<br>pcs)<br>B Cable guide<br>C Base<br>10 Secure the cable guide with its attachment Tightening torque: 2 Nm.<br>screws.<br>11 Apply cable grease on the inside surfaces<br>of the cable guide.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

176 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 

#### Refitting, step 2 - Base 



<!-- Start of picture text -->
Action Information<br>1 Clean the joints that have been opened. See<br>Cut the paint or surface on the robot before<br>replacing parts on page 113<br>2 Wipe clean the contact surfaces between<br>base and swing plate from old residues of<br>Loctite and other contamination.<br>3 Wipe clean countersink hole in swing plate<br>and screw.<br>4 Apply flange sealant (Loctite 574) on the<br>assembly surfaces on swing plate and gear.<br>A<br>xx0900000835<br>A Area where to apply Loctite 574<br>5 Apply a thin layer of cable grease on the<br>plastic surface of the part of the cable guide<br>fitted on the swing plate.<br>xx1300001125<br>6 Apply cable grease on cables and hoses<br>before running the package in through the<br>cable guide.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

177 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>7 Fit the swing plate while at the same time Tightening torque: 4 Nm.<br>arranging the cable harness in the cable A<br>guide.<br>B<br>xx1300001606<br>CAUTION C<br>Be careful not to damage the cable harness.<br>xx0900000799<br>A Attachment screws and washers<br>M4x25 q 12.8 (16+16 pcs)<br>B Swing plate<br>C Base<br>8 Refit the screw in the air release hole on the<br>swing plate, and apply Loctite 243 on this<br>screw.<br>xx1700000769<br>9 Connect connectors:<br>• R2.MP1<br>• R2.ME1<br>10<br>Tip<br>To facilitate assembly of cable ties, loosen<br>the screws holding the plate a little bit.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

178 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>11 Secure the connectors to the plate with<br>cable ties.<br>xx1400002559<br>12 Refit the attachment screws that secure the<br>cable plate, if removed.<br>13 Use caution and reconnect the battery cable<br>connector.<br>CAUTION<br>If too much force is used when the battery<br>cable is connected, there is a risk of dam-<br>aging the connector.<br>Tip<br>Leaving the attachment screws securing<br>the bracket with battery unscrewed, will<br>make it easier to connect the battery cable.<br>14 Secure the bracket with battery (if it has<br>been removed).<br>15 Make sure the earth cable is connected and<br>undamaged.<br>16 Use caution and push in the plate with the<br>EIB board and battery into the base.<br>Note<br>Make sure that the cables are placed cor-<br>rectly and that no cables are damaged!<br>xx0900000836<br>Parts:<br>• A: Plate<br>• B: Attachment screws M3x8 q12.8<br>(4 pcs)<br>17 Secure the plate with its attachment screws. Tightening torque: 2 Nm.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

179 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>18 Use caution and refit the base cover. Tightening torque: 4 Nm.<br>CAUTION<br>Make sure not to damage the cables in the<br>process.<br>A<br>B<br>xx0900000829<br>Parts:<br>• A: Base cover<br>• B: Attachment screws M4x25 q12.8<br>(4 pcs)<br><!-- End of picture text -->

#### Refitting, step 3 - Swing house 



<!-- Start of picture text -->
Action Information<br>1 Clean the joints that have been opened. See<br>Cut the paint or surface on the robot before<br>replacing parts on page 113<br>2 Lift swing house and armsystem (upper and<br>lower arms) and hold the parts in an angle<br>in order to be able to fit the cable holder on<br>the swing plate.<br>Tip<br>The easiest and most safe way to do this,<br>is with two persons working together:<br>• Person 1 holding the armsystem in<br>an angle<br>• Person 2 fitting the cable holder.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

180 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>3 Secure the cable holder. C<br>B<br>A<br>xx1300001596<br>A Swing plate<br>B Cable bracket<br>C Attachment screws M4x25 q12.8<br>(2+2 pcs)<br>4 While still holding the armsystem lifted in<br>an angle, use caution and push the axis-2<br>motor cables into the swing house, one on<br>each side of the motor.<br>5<br>Tip<br>Extend the motor connection cables with<br>cable ties to ease pulling the cables through<br>the base.<br>xx1500000003<br>Figure 4.1:<br>6 Use caution and push the rest of the cables<br>into the swing house.<br>7 Wipe clean the contact surfaces between<br>swing plate and swing house from old<br>residues of Loctite and other contamination.<br>8 Use caution and move the swing house over<br>the cable harness and put it into fitting pos-<br>ition.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

181 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>9 Secure the swing house with the six attach- Tightening torque: 4 Nm.<br>ment screws possible to reach at this point.<br>xx1300001604<br>M4x25 (6 pcs)<br>Attachment screws M4x25 q12.9 (6 pcs)<br><!-- End of picture text -->

#### Refitting, step 4 - Concluding procedure 

||**Action**|**Information**|
|---|---|---|
|1|Seal and paint the joints that have been<br>opened. See_Cut the paint or surface on the_<br>_robot before replacing parts on page 113_||
||**Note**||
||After all repair work, wipe the robot free<br>from particles with spirit on a lint free cloth.||
|2|Connect connectors:<br>•<br>R2.MP2<br>•<br>R2.ME2||
|3|Arrange the axis-2 motor cables so that they<br>will not be damaged.||
|4|Secure the motor cables around the axis-2<br>motor with a cable tie.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

182 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>5 Fit the two cable guides. Tightening torque: 1 Nm.<br>xx0900000857<br>A Attachment screws M3x8 (2 pcs)<br>B Cable guides (2 pcs)<br>6 Fit the cable bracket on the lower arm plate.<br>A B<br>xx0900000879<br>A Cable bracket<br>B Attachment screws M3x8 (2 pcs)<br>7 Lubricant the inside of the lower arm cover<br>with cable grease.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

183 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.1 Replacing axis-1 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>8 Fit the lower arm cover. Tightening torque: 2 Nm<br>xx1300001124<br>9 Power up the robot.<br>10 Turn on the controller and jog the robot to<br>calibration position.<br>11<br>DANGER<br>Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!<br>12 Jog axis-1 to 90° position in order to be able<br>to reach the remaining two attachment<br>screws securing the swing house.<br>13 Recalibrate the robot. See chapter:<br>• Calibration on page 219.<br>14<br>DANGER<br>Make sure all safety requirements are met<br>when performing the first test run. These<br>are further detailed in the section  Test run<br>after installation, maintenance, or repair on<br>page 51 .<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

184 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox 

### **4.7.2 Replacing axis-2 motor with gearbox** 

#### **Introduction** 

This procedure describes how to replace: 

- motor axis 2 with gearbox. 

Gearbox axis 2 is a part of motor axis 2 when ordered as a spare part. The procedure below describes the replacement of motor and gearbox axis 2 as one unit. For information how to replace gearbox axis 2, please **contact ABB** . 

#### **CAUTION** 

Always read the section "General procedures" before doing any repair work. _Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **Location of motor axis-2 with gearbox** 

Axis-2 motor with gearbox is located as shown in the figure. 



<!-- Start of picture text -->
B<br>A<br>C<br><!-- End of picture text -->



xx0900000847 



<!-- Start of picture text -->
A Cable harness<br>B Motor axis-3<br>C Motor axis-2 with gearbox<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

185 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 

There are two different designs of the lower arm housing. One of the designs has an air release hole and the other does not. 





xx1500000113 

#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section_Stand-_<br>_ard toolkit on page 252_.|
|Other tools and procedures may be required.<br>See references to these procedures in the<br>step-by-step instructions below.|These procedures include references to the<br>tools required.|
|Loctite 7063|For removing residues of Loctite.|
|Loctite 574|Amount: 2 ml.|



#### **Removing axis-2 motor with gearbox** 

Use this procedure to remove axis-2 motor with gearbox. 

#### **CAUTION** 

Use extreme caution performing these procedures. The cable harness will still be fitted or be partly fitted during the procedures. 

|**Action**|**Information**|
|---|---|
|Jog the robot to calibration position.<br>1||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

186 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>2<br>DANGER<br>Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!<br>3<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>4 Remove the lower arm covers on both sides<br>of the lower arm.<br>xx0900000848<br>5 Disconnect connectors:<br>• R2.MP3<br>• R2.ME3<br>A<br>xx0900000850<br>Parts:<br>• A: Connectors<br><!-- End of picture text -->



<!-- Start of picture text -->
Continues on next page<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

187 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>6 Unscrew the attachment screws securing<br>the cable bracket in order to disconnect the<br>cable harness from the lower arm.<br>A B<br>xx0900000879<br>Parts:<br>• A: Cable bracket<br>• B: Attachment screws (2 pcs)<br>7 Remove both cable guides.<br>xx0900000857<br>Parts:<br>• A: Attachment screws (2+2 pcs)<br>• B: Cable guides (2 pcs)<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

188 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>8 Unscrew the attachment screws securing<br>the lower arm plate to the motor cover.<br>xx1300001123<br>9 Use caution, pull out the cable harness as<br>far as possible without causing damage and<br>put the lower arm plate in an angle.<br>xx0900000851<br>Parts:<br>• A: Cable harness<br>• B: Lower arm plate<br>• C: Motor cover<br>• D: Attachment screws (4 pcs)<br>• E: Holes for attachment screws (4<br>pcs)<br>• F: Cable guide<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

189 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>10 Leave two attachment screws fitted and<br>unscrew the remaining screws, that secure<br>the lower arm to the axis-2 gearbox.<br>xx1300001121<br>11 Take a hold of the upper and lower arm in<br>a firm grip.<br>12 Use caution and unscrew the two remaining<br>attachment screws that secure the lower<br>arm to the axis-2 gearbox.<br>xx1300001119<br>13 Air hole design:<br>Remove screw from swing plate.<br>14 Use caution and put the lower and upper<br>arms beside the swing housing and base,<br>making sure not to damage the cable har-<br>ness.<br>Tip<br>Place the armsystem on some plastic or in<br>a box with soft edges. The armsystem must<br>be placed in a way that it will not be able to<br>move or be moved.<br>15 Disconnect connectors:<br>• R2.MP2<br>• R2.ME2<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

190 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>16 Unscrew the attachment screws and plain<br>washers that secure the axis-2 motor with<br>gearbox to the swing housing, use caution<br>and remove the axis-2 motor.<br>CAUTION<br>In order not to damage any parts, hold the<br>two parts in a firm grip when removing the<br>motor with gearbox.<br>xx1300001120<br><!-- End of picture text -->

#### **Refitting motor axis 2 with gearbox** 

Use this procedure to refit motor axis 2 with gearbox. 

#### **CAUTION** 

Use extreme caution performing these procedures. The cable harness will still be fitted or be partly fitted during the procedures. 



<!-- Start of picture text -->
Action Information<br>1 Clean the joints that have been opened. See<br>Cut the paint or surface on the robot before<br>replacing parts on page 113<br>2 Before refitting, make sure that:<br>• all assembly surfaces are clean and<br>Tip<br>without damage<br>• motor and gearbox are clean and<br>Use Loctite 7063 (Superclean).<br>without damage.<br>3 Remove the two screws with nuts securing<br>motor axis 2 with gearbox while being<br>transported.<br>xx0900001050<br>Parts:<br>• A: Screws with nuts, used during<br>transport (2 pcs)<br>4 Remove old residues of Loctite and other<br>contamination, from the assembly surfaces<br>of the lower arm.<br>5 Wipe clean screw and countersink hole on<br>swing plate.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

191 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>6 Refill the same amount of grease in the<br>gearbox, that has been wiped off.<br>7 If the robot has an air release hole: Remove<br>the screw in the air release hole on the<br>lower arm housing to release pressure in-<br>side the lower arm.<br>xx1500000113<br>8 Apply flange sealant (Loctite 574) on the<br>assembly surfaces of the lower arm and<br>gearbox.<br>9 Place the axis-2 motor with gearbox in the<br>swing housing.<br>CAUTION<br>In order not to damage any parts, hold the<br>two parts in a firm grip when refitting the<br>motor with gearbox.<br>xx1300001120<br>10 Secure the axis-2 motor with gearbox to the Tightening torque: 4 Nm.<br>swing housing with its attachment screws.<br>xx1300001122<br>Attachment screws M4x20 q12.9 (12 pcs)<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

192 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>11 While holding the upper and lower arms,<br>secure the lower arm to the axis-2 motor<br>with gearbox with two of the attachment<br>screws.<br>xx1300001119<br>12 Secure the axis-2 motor with gearbox to the Tightening torque: 4 Nm.<br>lower arm with the remaining attachment<br>screws. Tighten all screws.<br>xx1300001121<br>Attachment screws M4x25 q12.9 and<br>washers (16 + 16 pcs)<br>13 If the robot has an air release hole: Add<br>Loctite 243 and refit the screw in the air re-<br>lease hole on the lower arm housing.<br>xx1500000113<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

193 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>14 Refit the lower arm plate. Tightening torque: 4 Nm.<br>Note<br>Make sure that the lower arm plate is<br>centered!<br>xx1300001123<br>Attachment screws M4x16 q12.9 and<br>washers (4 + 4 pcs)<br>15 Reconnect the axis-2 motor cables:<br>• R2.MP2<br>• R2.ME2<br>16 Secure the motor cables around the axis-2<br>motor with cable ties.<br>Note<br>Put the tie on the side in order to make the<br>lower arm cover fit well.<br>17 Refit the two cable guides. Tightening torque : 1 Nm.<br>xx0900000857<br>Parts:<br>• A: Attachment screws M3x8 (2 pcs)<br>• B: Cable guides (2 pcs)<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

194 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>18 Reconnect connectors:<br>• R2.MP3<br>• R2.ME3.<br>A<br>xx0900000850<br>Connectors:<br>• A: R2.ME3<br>• B: R2.MP3<br>19 Refit the cable bracket on the lower arm.<br>A B<br>xx0900000879<br>Parts:<br>• A: Cable bracket<br>• B: Attachment screws M3x8 (2 pcs)<br>20<br>DANGER<br>Check that the cable harness is intact and<br>connected correctly on all axes!<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

195 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.2 Replacing axis-2 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>21 Refit the  lower arm covers . Tightening torque: 2 Nm.<br>xx0900000848<br>22 Seal and paint the joints that have been<br>opened. See  Cut the paint or surface on the<br>robot before replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free<br>from particles with spirit on a lint free cloth.<br>23 Recalibrate the robot. See chapter:<br>• Calibration on page 219.<br>24<br>DANGER<br>Make sure all safety requirements are met<br>when performing the first test run. These<br>are further detailed in the section  Test run<br>after installation, maintenance, or repair on<br>page 51 .<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

196 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.3 Replacing axis-3 motor with gearbox 

### **4.7.3 Replacing axis-3 motor with gearbox** 

#### **Introduction** 

This procedure describes how to replace axis-3 motor. 

How to replace axis-3 gearbox, see section: 

- _Replacing gearbox axis 3 on page 215_ 

#### **CAUTION** 

Always read the section "General procedures" before doing any repair work. _Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **Location of axis-3 motor** 

The axis-3 motor is located as shown in the figure. 



<!-- Start of picture text -->
B<br>A<br>C<br><!-- End of picture text -->



xx0900000847 

|A|Cable harness|
|---|---|
|B|Motor axis 3|
|C|Motor axis 2|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

197 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.3 Replacing axis-3 motor with gearbox 

#### _Continued_ 

#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section_Standard_<br>_toolkit on page 252_.|
|Other tools and procedures may be re-<br>quired. See references to these procedures<br>in the step-by-step instructions below.|These procedures include references to the<br>tools required.|
|Flange sealant (Loctite 574)|Amount: 2 ml.|



#### **Removing axis-3 motor** 

Use this procedure to replace axis-3 motor. 



<!-- Start of picture text -->
Action Information<br>1 Secure the arm system before removing<br>motor axis 3.<br>2<br>DANGER<br>Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!<br>3<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>4 Remove the  lower arm covers  on both sides<br>of the of the lower arm.<br>xx0900000848<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

198 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.3 Replacing axis-3 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>5 Cut the  cable straps  securing the connect-<br>ors.<br>xx0900000849<br>Parts:<br>• A: Cable straps (2 pcs)<br>6 Disconnect connectors:<br>• R2.MP3<br>• R2.ME3.<br>A<br>xx0900000850<br>Parts:<br>• A: Connectors R2.MP3 and R2.ME3<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

199 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.3 Replacing axis-3 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>7 Unscrew the  attachment screws  securing<br>the  cable bracket .<br>A B<br>xx0900000879<br>Parts:<br>• A: Cable bracket<br>• B: Attachment screws (2 pcs)<br>8 Move the  cable harness  a little to the side.<br>9 Unscrew the  attachment screws  securing<br>the  motor axis 3 .<br>10 Remove the  timing belt  from the  pulleys  on<br>the motor axis.<br>xx0900000876<br>Parts:<br>• A: Timing belt<br>• B: Pulleys (2 pcs)<br>11 Remove the motor.<br><!-- End of picture text -->

#### **Refitting axis-3 motor** 

Use this procedure to refit axis-3 motor. 



<!-- Start of picture text -->
Action Information<br>1 Clean the joints that have been opened. See<br>Cut the paint or surface on the robot before<br>replacing parts on page 113<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

200 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

4.7.3 Replacing axis-3 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>2 Make sure that:<br>• all assembly surfaces are clean and<br>without damage<br>• motor and gearbox are clean and<br>undamaged.<br>3 Place the  axis-3 motor  in the  motor cover .<br>4 Refit the  timing belt  on the  pulleys .<br>xx0900000876<br>Parts:<br>• A: Timing belt<br>• B: Pulleys (2 pcs)<br>5 Tighten the  attachment screws  and  washers<br>securing the motor, just enough to still be<br>able to move the motor.<br>6 Move the motor to a position where a good For details about how to adjust the timing<br>timing belt tension  is reached. belt, see  Adjusting axis-3 timing belt on<br>page 94 .<br>Note New belt: F = 18-19.7N<br>Used belt: F = 12.5-14.3N<br>Do not stretch the timing belt too much!<br>7 Secure the  axis-3 motor  with its  attachment Tightening torque: 4 Nm.<br>screws  and  washers .<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

201 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.3 Replacing axis-3 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>8 Refit the  lower arm plate . Tightening torque: 4 Nm.<br>xx0900000851<br>Parts:<br>• A: Cable harness<br>• B: Lower arm plate<br>• C: Motor cover<br>• D: Attachment screws (4 pcs)<br>• E: Holes for attachment screws (4<br>pcs)<br>• F: Cable guide<br>9 Reconnect connectors:<br>• R2.MP3<br>• R2.ME3.<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

202 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.3 Replacing axis-3 motor with gearbox 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>10 Secure the cable harness by refitting the Tightening torque: 1 Nm.<br>cable bracket  to the lower arm plate.<br>A B<br>xx0900000879<br>Parts:<br>• A: Cable bracket<br>• B: Attachment screws (2 pcs)<br>11 Secure the connectors with  cable ties .<br>Note<br>Put the strap tie on the side in order to make<br>the lower arm cover fit well.<br>xx0900000849<br>Parts:<br>• A: Cable ties (2 pcs)<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

203 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.3 Replacing axis-3 motor with gearbox _Continued_ 



<!-- Start of picture text -->
Action Information<br>12 Refit the  lower arm covers . Tightening torque: 1 Nm.<br>xx0900000848<br>13 Seal and paint the joints that have been<br>opened. See  Cut the paint or surface on the<br>robot before replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free<br>from particles with spirit on a lint free cloth.<br>14 Recalibrate the robot. See chapter:<br>• Calibration on page 219.<br>15<br>DANGER<br>Make sure all safety requirements are met<br>when performing the first test run. These<br>are further detailed in the section  Test run<br>after installation, maintenance, or repair on<br>page 51 .<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

204 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

4.7.4 Replacing motor axis 4, with gearbox 

### **4.7.4 Replacing motor axis 4, with gearbox** 

#### **Introduction** 

Motor axis 4 is delivered as part of the upper arm when ordered as a spare part. 

- How to replace the complete upper arm is described in section: 

   - _Replacing the upper arm on page 150_ 

#### **Location of motor axis 4, with gearbox** 

Motor axis 4, with gearbox is located as shown in the figure: 



xx0900000785 

Product manual - IRB 120 3HAC035728-001 Revision: W 

205 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.5 Replacing motor axis 5 

### **4.7.5 Replacing motor axis 5** 

#### **Introduction** 

This procedure describes how to replace: 

- motor axis 5 with pulley. 

#### **CAUTION** 

Always read the section "General procedures" befor doing any repair work. _Cut the paint or surface on the robot before replacing parts on page 113_ 

#### **Location of motor axis 5** 

The motor axis 5 is located as shown in the figure. 



xx0900000890 

#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section<br>_Standard toolkit on page 252_.|
|Other tools and procedures may be required.<br>See references to these procedures in the step-<br>by-step instructions below.|These procedures include references to<br>the tools required.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

206 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.5 Replacing motor axis 5 _Continued_ 

#### **Removing motor axis 5 with pulley** 

Use this procedure to remove motor axis 5 with pulley. 



<!-- Start of picture text -->
Action Information<br>1<br>DANGER<br>Turn off all electric power, hydraulic and<br>pneumatic pressure supplies to the robot!<br>2<br>CAUTION<br>Always cut the paint with a knife and grind<br>the paint edge when disassembling parts.<br>See  Cut the paint or surface on the robot<br>before replacing parts on page 113 .<br>3 Remove the  wrist side covers  on both sides<br>of the wrist.<br>xx0900000886<br>Parts:<br>• A: Wrist side covers (2 pcs)<br>4 Loosen the  attachment screw  securing the<br>clamp .<br>xx0900000887<br>Parts:<br>• A: Attachment screw<br>• B: Clamp<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

207 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.5 Replacing motor axis 5 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>5 Remove the  connector support .<br>xx0900000888<br>Parts:<br>• A: Attachment screws (2 pcs)<br>• B: Connector support<br>6 Cut the  cable straps .<br>xx0900001009<br>Parts:<br>• A: Cable straps (2 pcs)<br>7 Disconnect connectors for motor axis 5:<br>• R2.MP5<br>• R2.ME5<br>8 Unscrew the  attachment screws  securing<br>motor axis 5 .<br>xx1100000960<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

208 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.5 Replacing motor axis 5 _Continued_ 



<!-- Start of picture text -->
Action Information<br>9 Remove the  timing belt  from the  pulleys .<br>xx0900000611<br>Parts:<br>• A: Wrist side cover<br>• B: Pulley (2 pcs)<br>• C: Timing belt<br>10 Remove the motor with pulley.<br><!-- End of picture text -->

#### **Refitting motor axis 5** 

Use this procedure to refit motor axis 5. 

||**Action**|**Information**|
|---|---|---|
|1|Clean the joints that have been opened. See<br>_Cut the paint or surface on the robot before_<br>_replacing parts on page 113_||
|2|Check that:<br>•<br>all assembly surfaces are clean and<br>without damage<br>•<br>the motor is clean and undamaged.||
|3|Place the motor in the wrist housing.||
|4|Reconnect connectors:<br>•<br>R2.MP5<br>•<br>R2.ME5||
|5|Refit the_timing belt_on the_pulleys_.|xx0900000611<br>Parts:<br>•<br>A: Wrist side cover<br>•<br>B: Pulley (2 pcs)<br>•<br>C: Timing belt|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

209 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.5 Replacing motor axis 5 

#### _Continued_ 



<!-- Start of picture text -->
Action Information<br>6 Tighten the  attachment screws  and  washers<br>securing the  motor , just enough (2 Nm) to<br>still be able to move the motor.<br>xx1100000960<br>Attachment screws M5x16 q12.9 and<br>washers (2 + 2 pcs)<br>7 Move the motor to a position where a good For details about how to adjust the timing<br>timing belt tension is reached. belt, see  Adjusting axis-5 timing belt on<br>page 95 .<br>Note New belt: F = 7.6-8.4N<br>Used belt: F = 5.3-6.1N<br>Do not stretch the timing belt too much!<br>8 Secure  motor axis 5  with its  attachment Tightening torque: 4 Nm.<br>screws  and  washers .<br>9 Refit the  connector support . Tightening torque: 1 Nm.<br>xx0900000888<br>Parts:<br>• A: Attachment screws (2 pcs)<br>• B: Connector support<br>10 Refit the  clamp  with its  attachment screw . Tightening torque: 1 Nm.<br>xx0900000887<br>Parts:<br>• A: Attachment screw<br>• B: Clamp<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

210 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.5 Replacing motor axis 5 _Continued_ 



<!-- Start of picture text -->
Action Information<br>11 Secure the cables with  cable straps .<br>xx0900001009<br>Parts:<br>• A: Cable straps (2 pcs)<br>12 Refit the  wrist side covers . Tightening torque: 1 Nm.<br>xx0900000886<br>Parts:<br>• A: Wrist side covers (2 pcs)<br>13 Seal and paint the joints that have been<br>opened. See  Cut the paint or surface on the<br>robot before replacing parts on page 113<br>Note<br>After all repair work, wipe the robot free<br>from particles with spirit on a lint free cloth.<br>14 Recalibrate the robot. See chapter:<br>• Calibration on page 219.<br>15<br>DANGER<br>Make sure all safety requirements are met<br>when performing the first test run. These<br>are further detailed in the section  Test run<br>after installation, maintenance, or repair on<br>page 51 .<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

211 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.7.6 Replacing motor axis 6 

### **4.7.6 Replacing motor axis 6** 

#### **Introduction** 

The motor axis 6 is delivered as part of the upper arm. How to replace the upper arm see section _Replacing the upper arm on page 150_ . 

Motor axis 6 is a part of the upper arm when ordered as a spare part. For more information how to replace motor axis 6, please **contact ABB** . 

#### **Location of motor axis 6** 

Motor axis 6 is located as shown in the figure. 



<!-- Start of picture text -->
A B<br><!-- End of picture text -->

xx0900000910 



<!-- Start of picture text -->
A Motor axis 6<br>B Gearbox axis 6<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

212 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

4.8.1 Replacing gearbox axis 1 

### **4.8 Gearboxes** 

### **4.8.1 Replacing gearbox axis 1** 

#### **Introduction** 

The gearbox axis 1 is delivered as a part of motor axis 1. For information how to replace motor with gearbox axis 1, see section _Replacing axis-1 motor with gearbox on page 164_ . 

Product manual - IRB 120 3HAC035728-001 Revision: W 

213 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.8.2 Replacing gearbox axis 2 

### **4.8.2 Replacing gearbox axis 2** 

#### **Introduction** 

The gearbox axis 2 is delivered as a part of motor axis 2. For information how to replace motor with gearbox axis 2, see section _Replacing axis-2 motor with gearbox on page 185_ . 

Product manual - IRB 120 3HAC035728-001 Revision: W 

214 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

4.8.3 Replacing gearbox axis 3 

### **4.8.3 Replacing gearbox axis 3** 

#### **Overview** 

Gearbox axis 3 is delivered as a part of the lower arm. For more information how to replace gearbox axis 3, please **contact ABB** . 

#### **Location of gearbox axis 3** 

Gearbox axis 3 is located as shown in the figure. 





<!-- Start of picture text -->
xx0900001040<br><!-- End of picture text -->



<!-- Start of picture text -->
A Gearbox axis 3<br>B Lower arm<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

215 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.8.4 Replacing gearbox axis 4 

### **4.8.4 Replacing gearbox axis 4** 

#### **Introduction** 

Gearbox axis 4 is delivered as a part of the upper arm. 

- How to replace the upper arm see: 

   - _Replacing the upper arm on page 150_ 

- For more information how to replace gearbox axis 4, please **contact ABB** . 

Product manual - IRB 120 3HAC035728-001 Revision: W 

216 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

4.8.5 Replacing gearbox axis 5 

### **4.8.5 Replacing gearbox axis 5** 

#### **Overview** 

Gearbox axis 5 is delivered as a part of the upper arm. How to replace the upper arm is decribed in section _Replacing the upper arm on page 150_ . 

For more information how to replace gearbox axis 5, please **contact ABB** . 

#### **Location of gearbox axis 5** 

Gearbox axis 5 is located as shown in the figure. 



xx0900001041 

A Gearbox axis 5 

Product manual - IRB 120 3HAC035728-001 Revision: W 

217 

© Copyright 2009-2022 ABB. All rights reserved. 

**4 Repair** 

#### 4.8.6 Replacing gearbox axis 6 

### **4.8.6 Replacing gearbox axis 6** 

#### **Introduction** 

The gearbox axis 6 is delivered as part of the upper arm. How to replace the upper arm is described in section _Replacing the upper arm on page 150_ . 

For more information how to replace gearbox axis 6, please **contact ABB** . 

#### **Location of gearbox axis 6** 

Gearbox axis 6 is located as shown in the figure: 



<!-- Start of picture text -->
A B<br><!-- End of picture text -->

xx0900000910 

A Motor axis 6 B Gearbox axis 6 

Product manual - IRB 120 3HAC035728-001 Revision: W 

218 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.1.1 Introduction and calibration terminology 

## **5 Calibration** 

### **5.1 Introduction to calibration** 

### **5.1.1 Introduction and calibration terminology** 

#### **Calibration information** 

This chapter includes general information about the recommended calibration methods and also the detailed procedures for updating the revolution counters, checking the calibration position etc. 

Detailed instructions of how to perform Axis Calibration are given on the FlexPendant during the calibration procedure. To prepare calibration with Axis Calibration method, see _Calibrating with Axis Calibration method on page 229_ . 

#### **Calibration terminology** 

|**Term**|**Definition**|
|---|---|
|Calibration method|A collective term for several methods that might be<br>available for calibrating the ABB robot. Each method<br>contains calibration routines.|
|Synchronization position|Known position of the complete robot where the<br>angle of each axis can be checked against visual<br>synchronization marks.|
|Calibration position|Known position of the complete robot that is used<br>for calibration of the robot.|
|Standard calibration|A generic term for all calibration methods that aim<br>to move the robot to calibration position.|
|Fine calibration|A calibration routine that generates a new zero posi-<br>tion of the robot.|
|Reference calibration|A calibration routine that in the first step generates<br>a reference to current zero position of the robot. The<br>same calibration routine can later on be used to re-<br>calibrate the robot back to the same position as when<br>the reference was stored.<br>This routine is more flexible compared to fine calib-<br>ration and is used when tools and process equipment<br>are installed.<br>Requires that a reference is created before being<br>used for recalibrating the robot.<br>Requires that the robot is dressed with the same<br>tools and process equipment during calibration as<br>during creation of the reference values.|
|Update revolution counter|A calibration routine to make a rough calibration of<br>each manipulator axis.|
|Synchronization mark|Visual marks on the robot axes. When marks are<br>aligned, the robot is in synchronization position.|



Product manual - IRB 120 3HAC035728-001 Revision: W 

219 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.1.2 Calibration methods 

### **5.1.2 Calibration methods** 

#### **Overview** 

This section specifies the different types of calibration and the calibration methods that are supplied by ABB. 

#### **Types of calibration** 

|**Type of calibration**|**Description**|**Calibration method**|
|---|---|---|
|Standard calibration|The calibrated robot is positioned at calibration<br>position.<br>Standard calibration data is found on the SMB<br>(serial measurement board) or EIB in the robot.<br>For robots with RobotWare 5.04 or older, the<br>calibration data is delivered in a file, calib.cfg,<br>supplied with the robot at delivery. The file<br>identifies the correct resolver/motor position<br>corresponding to the robot home position.|Axis Calibration or<br>manual calibration<sup>i</sup>|



i The robot is calibrated by either manual calibration or Axis Calibration at factory. Always use the same calibration method as used at the factory. Information about valid calibration method is found on the calibration label or in the calibration menu on the FlexPendant. 

If no data is found related to standard calibration, manual calibration is used as default. 

#### **Brief description of calibration methods** 

#### Axis Calibration method 

Axis Calibration is a standard calibration method for calibration of IRB 120. It is the recommended method in order to achieve proper performance. 

The following routines are available for the Axis Calibration method: 

- Fine calibration 

- Update revolution counters 

The calibration equipment for Axis Calibration is delivered as a toolkit. 

An introduction to the calibration method is given in this manual, see _Calibrating with Axis Calibration method on page 229_ . 

The actual instructions of how to perform the calibration procedure and what to do at each step is given on the FlexPendant. You will be guided through the calibration procedure, step by step. 

#### Manual calibration method 

Manual calibration method is a method based on releasing the motor brakes of the robot and manually moving the robot into a calibration position. The manual calibration is using the manual methods for fine calibration and updating revolution counters. See _Calibrating with manual calibration method on page 234_ . 

#### **References** 

Article numbers for the calibration tools are listed in the section _Special tools on page 253_ . 

Product manual - IRB 120 3HAC035728-001 Revision: W 

220 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

5.1.3 When to calibrate 

### **5.1.3 When to calibrate** 

#### **When to calibrate** 

The system must be calibrated if any of the following situations occur. 

The resolver values are changed 

If resolver values are changed, the robot must be re-calibrated using the calibration methods supplied by ABB. Calibrate the robot carefully with standard calibration, according to information in this manual. 

The resolver values will change when parts affecting the calibration position are replaced on the robot, for example motors or parts of the transmission. 

The revolution counter memory is lost 

If the revolution counter memory is lost, the counters must be updated. See _Updating revolution counters on page 225_ . This will occur when: 

- The battery is discharged 

- A resolver error occurs 

- The signal between a resolver and measurement board is interrupted 

- A robot axis is moved with the control system disconnected 

The revolution counters must also be updated after the robot and controller are connected at the first installation. 

The robot is rebuilt 

If the robot is rebuilt, for example, after a crash or when the reachability of a robot is changed, it needs to be re-calibrated for new resolver values. 

Robot is not floor mounted 

The original calibration data delivered with the robot is generated when the robot is floor mounted. If the robot is not floor mounted, then the robot accuracy could be affected. The robot needs to be calibrated after it is mounted. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

221 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.2.1 Synchronization marks and synchronization position for axes 

### **5.2 Synchronization marks and axis movement directions** 

### **5.2.1 Synchronization marks and synchronization position for axes** 

#### **Introduction** 

This section shows the position of the synchronization marks and the synchronization position for each axis. 

#### **Synchronization marks, IRB 120** 







<!-- Start of picture text -->
xx0900000574<br>A Calibration mark axis 1<br>B Calibration mark axis 2<br>C Calibration mark axis 3<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

222 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.2.1 Synchronization marks and synchronization position for axes _Continued_ 





<!-- Start of picture text -->
xx0900000575<br>D Calibration marks axis 4<br>E Calibration marks axis 5<br>F Calibration marks axis 6<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

223 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.2.2 Calibration movement directions for all axes 

### **5.2.2 Calibration movement directions for all axes** 

#### **Overview** 

When calibrating, the axis must consistently be run towards the calibration position in the same direction in order to avoid position errors caused by backlash in gears and so on. Positive directions are shown in the graphic below. 

Calibration service routines will handle the calibration movements automatically and these might be different from the positive directions shown below. 

#### **Manual movement directions** 



<!-- Start of picture text -->
Axis 3<br>- Axis 4<br>Axis 5<br>+<br>-<br>+<br>-<br>+ - Axis 6<br>+<br>+<br>- Axis 2<br>Axis 1<br>-<br>+<br><!-- End of picture text -->



<!-- Start of picture text -->
xx0900000262<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

224 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.3.1 Updating revolution counters on IRC5 robots 

### **5.3 Updating revolution counters** 

### **5.3.1 Updating revolution counters on IRC5 robots** 

#### **Introduction** 

This section describes how to do a rough calibration of each manipulator axis by updating the revolution counter for each axis, using the FlexPendant. 

#### **Step 1 - Manually running the manipulator to the synchronization position** 

Use this procedure to manually run the manipulator to the synchronization position. 

||**Action**|**Note**|
|---|---|---|
|1|Select axis-by-axis motion mode.||
|2|Jog the manipulator to align the synchron-<br>ization marks.|See_Synchronization marks and synchron-_<br>_ization position for axes on page 222_.|
|3|When all axes are positioned, update the<br>revolution counter.|_Step 2 - Updating the revolution counter_<br>_with the FlexPendant on page 226_.|



#### **Correct calibration position of axis 4 and 6** 

When jogging the manipulator to synchronization position, it is extremely important to make sure that axes 4 and 6 of the following mentioned manipulators are positioned correctly. The axes can be calibrated at the wrong turn, resulting in an incorrect manipulator calibration. 

Make sure the axes are positioned according to the correct calibration values, not only according to the synchronization marks. The correct values are found on a label, located either on the lower arm, underneath the flange plate on the base or on the frame. 

At delivery the manipulator is in the correct position. Do NOT rotate axis 4 or 6 at power up before the revolution counters are updated. 

If one of the following mentioned axes are rotated one or more turns from its calibration position before updating the revolution counter, the correct calibration position will be lost due to non-integer gear ratio. This affects the following manipulators: 

|**Manipulator variant**|**Axis 4**|**Axis 6**|
|---|---|---|
|IRB 120|No|Yes|



If the synchronization marks seem to be wrong (even if the motor calibration data is correct), try to rotate the axis one turn, update the revolution counter and check the synchronization marks again (try both directions, if needed). 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

225 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.3.1 Updating revolution counters on IRC5 robots _Continued_ 

#### **Step 2 - Updating the revolution counter with the FlexPendant** 

Use this procedure to update the revolution counter with the FlexPendant (IRC5). 



<!-- Start of picture text -->
Action<br>1 On the  ABB  menu, tap  Calibration .<br>xx1500000942<br>2 All mechanical units connected to the system are shown with their calibration status.<br>Tap the mechanical unit in question.<br>xx1500000943<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

226 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.3.1 Updating revolution counters on IRC5 robots _Continued_ 



<!-- Start of picture text -->
Action<br>3 This step is valid for RobotWare 6.02 and later.<br>Calibration method used at factory for each axis is shown, as well as calibration<br>method used during last field calibration.<br>Tap  Manual Method (Advanced) .<br>xx1500000944<br>4 A screen is displayed, tap  Rev. Counters .<br>en0400000771<br><!-- End of picture text -->

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

227 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.3.1 Updating revolution counters on IRC5 robots _Continued_ 

||**Action**|
|---|---|
|5|Tap**Update Revolution Counters...**.<br>A dialog box is displayed, warning that updating the revolution counters may change<br>programmed robot positions:<br>•<br>Tap**Yes**to update the revolution counters.<br>•<br>Tap**No**to cancel updating the revolution counters.<br>Tapping**Yes**displays the axis selection window.|
|6|Select the axis to have its revolution counter updated by:<br>•<br>Ticking in the box to the left<br>•<br>Tapping**Select all**to update all axes.<br>Then tap**Update**.|
|7|A dialog box is displayed, warning that the updating operation cannot be undone:<br>•<br>Tap**Update**to proceed with updating the revolution counters.<br>•<br>Tap**Cancel**to cancel updating the revolution counters.<br>Tapping**Update**updates the selected revolution counters and removes the tick from<br>the list of axes.|
|8|**CAUTION**<br>If a revolution counter is incorrectly updated, it will cause incorrect manipulator posi-<br>tioning, which in turn may cause damage or injury!<br>Check the synchronization position very carefully after each update. See_Checking_<br>_the synchronization position on page 241_.|



Product manual - IRB 120 3HAC035728-001 Revision: W 

228 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.4.1 Description of Axis Calibration 

### **5.4 Calibrating with Axis Calibration method** 

### **5.4.1 Description of Axis Calibration** 

#### **Instructions for Axis Calibration procedure given on the FlexPendant** 

The actual instructions of how to perform the calibration procedure and what to do at each step is given on the FlexPendant. You will be guided through the calibration procedure, step by step. 

This manual contains a brief description of the method, additional information to the information given on the FlexPendant, article number for the tools and images of where to fit the calibration tools on the robot. 

#### **Overview of the Axis Calibration procedure** 

The Axis Calibration procedure applies to all axes, and is performed on one axis at the time. The robot axes are both manually and automatically moved into position, as instructed on the FlexPendant. 

A fixed calibration pin/bushing is installed on each robot axis at delivery. 

The Axis Calibration procedure described roughly: 

- 1 The calibration tool/element is prepared by the operator. Any protection needs to be removed prior to starting calibration. 

- 2 During the calibration procedure, RobotWare moves the robot axis chosen for calibration so that the calibration tools get into contact. RobotWare records values of the axis position and repeats the coming-in-contact procedure several times to get an exact value of the axis position. 

#### **WARNING** 

Risk of pinching! The contact force for large robots can be up to 150 kg. Keep a safe distance to the robot. 

- 3 The axis position is stored in RobotWare with an active choice from the operator. 

#### **Routines in the calibration procedure** 

The following routines are available in the Axis Calibration procedure, given at the beginning of the procedure on the FlexPendant. 

Fine calibration routine 

Choose this routine to calibrate the robot when there are no tools, process cabling or equipment fitted to the robot. 

#### Update revolution counters 

Choose this routine to make a rough calibration of each manipulator axis by updating the revolution counter for each axis, using the FlexPendant. 

#### Validation 

In the mentioned routines, it is also possible to validate the calibration data. 

_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

229 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.4.1 Description of Axis Calibration 

#### _Continued_ 

#### **Position of robot axes** 

The robot axes should be positioned close to 0 degrees before commencing the calibration program. The axis chosen for calibration is then automatically run by the calibration program to its exact calibration position during the calibration procedure. 

It is possible to position some of the other axes in positions different from 0 degrees. Information about which axes are allowed to be jogged is given on the FlexPendant. These axes are marked with **Unrestricted** in the FlexPendant window. Also the following table shows the dependencies between the axes. 

#### Requirements for axis positioning during calibration 

||**Axis to c**|**alibrate**|||||
|---|---|---|---|---|---|---|
|**Required**<br>**position of**<br>**axis**|**Axis 1**<br>|**Axis 2**|**Axis 3**|**Axis 4**|**Axis 5**|**Axis 6**|
|Axis 1|-|*|*|*|*|*|
|Axis 2|0|-|0|*|*|*|
|Axis 3|0|X|-|*|*|*|
|Axis 4|*|*|*|-|*|*|
|Axis 5|*|*|*|*|-|X|
|Axis 6|*|*|*|*|X|-|
|<br>-|Axis to be c|alibrated|||||
|<br>*|Unrestricted|. Axis is allo|wed to be jogge|d to other p|osition than|0 degrees.|
|<br>0|Axis must b|e put in posit|ion 0 degrees.||||
|<br>X|Special req|uirement|||||



#### **How to calibrate a suspended or wall mounted robot** 

The IRB 120 is fine calibrated floor standing in factory, prior to shipping. 

To calibrate a suspended or wall mounted robot with the fine calibration routine, the robot must first be taken down and mounted standing on the floor. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

230 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

5.4.2 Axis Calibration - Running the calibration procedure 

### **5.4.2 Axis Calibration - Running the calibration procedure** 

#### **Required tools** 

The calibration tools used for Axis Calibration are designed to meet requirements for calibration performance and durability. 

#### **WARNING** 

Calibrating the robot with Axis Calibration requires special calibration tools from ABB. Using other pins in the calibration holes may cause severe damage to the robot and/or personnel. 

|**Equipment, etc.**|**Article number**|**Note**|
|---|---|---|
|Calibration tool set|3HAC037305-001|Includes:<br>•<br>Calibration tool axes 5 and 6|
|||•<br>Attachment screws M5x12 qual-<br>ity Steel 8.8-A2F (4 pcs)<br>•<br>Guide pin|



#### **Required consumables** 

|**Consumable**|**Article number**|**Note**|
|---|---|---|
|Clean cloth|-||



#### **Spare parts** 

|**Spare part**|**Article number**|**Note**|
|---|---|---|
|N/A|||



#### **Overview of the calibration procedure on the FlexPendant** 

The actual instructions of how to perform the calibration procedure and what to do at each step is given on the FlexPendant. You will be guided through the calibration procedure, step by step. 

Use the following list to learn about the calibration procedure before running the RobotWare program on the FlexPendant. It gives you a brief overview of the calibration procedure. 

After the calibration method has been started on the FlexPendant, the following sequence will be run. 

- 1 Choose calibration routine. The routines are described in _Routines in the calibration procedure on page 229_ . 

- 2 Choose which axis/axes to calibrate. 

- 3 The robot moves to synchronization position. 

- 4 Validate the synchronization marks. 

- 5 The robot moves to preparation position. 

- 6 Remove the protective cover from the fixed pin and the protection plug from the bushing, if any, and install the calibration tool. 

Axes 1, 2 and 3 are fitted with dampers that need to be removed. 

_Continues on next page_ 

Product manual - IRB 120 

231 

3HAC035728-001 Revision: W 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.4.2 Axis Calibration - Running the calibration procedure _Continued_ 

- 7 The robot performs a measurement sequence by rotating the axis back and forth. 

- 8 Remove the calibration tool and reinstall the protective cover on the fixed pin and the protection plug in the bushing, if any. 

   - Refit the dampers on axes 1, 2 and 3. 

- 9 Choose whether to save the calibration data or not. 

Calibration of the robot is not finished until the calibration data is saved, as last step of the calibration procedure. 

#### **Preparation prior to calibration** 

The calibration procedure is described in the FlexPendant while conducting it. 

||**Action**|**Note**|
|---|---|---|
|1|**DANGER**||
||While conducting the calibration, the robot needs<br>to be connected to power.<br>Make sure that the robot's working area is empty,<br>as the robot can make unpredictable movements.||
|2|Wipe the calibration tool clean.<br>**Note**|Use a clean cloth.|
||The calibration method is exact. Dust, dirt or color<br>flakes will affect the calibration value.||



#### **Starting the calibration procedure** 

Use this procedure to start the Axis Calibration routine on the FlexPendant. 

||**Action**|**Note**|
|---|---|---|
|1|Tap the calibration icon and enter the calibration<br>main page.||
|2|All mechanical units connected to the system are<br>shown with their calibration status.<br>Tap the mechanical unit in question.||
|3|The calibration method used at ABB factory for<br>each axis is shown, as well as calibration method<br>used for the robot during last field calibration.|The FlexPendant will give all inform-<br>ation needed to proceed with Axis<br>Calibration.|
|4|**Valid for RobotWare 6**<br>Tap**Call Calibration Method**. The software will<br>automatically call for the procedure for the valid<br>calibration method. If not, tap**Call Routine**and<br>then tap**Axis calibration**.||
|5|Follow the instructions given on the FlexPendant.|A brief overview of the sequence<br>that will be run on the FlexPendant<br>is given in_Overview of the calibra-_<br>_tion procedure on the FlexPendant_<br>_on page 231_.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

232 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.4.2 Axis Calibration - Running the calibration procedure _Continued_ 

#### **Restarting an interrupted calibration procedure** 

If the Axis Calibration procedure is interrupted before the calibration is finished, the RobotWare program needs to be started again. Use this procedure to take required action. 

|**Situation**|**Action**|
|---|---|
|The three-position enabling device on the<br>FlexPendant has been released during robot<br>movement.|Press and hold the three-position enabling<br>device and press**Play**.|
|The RobotWare program is terminated with<br>**PP to Main**.|Remove the calibration tool, if it is installed,<br>and restart the calibration procedure from<br>the beginning. See_Starting the calibration_<br>_procedure_.<br>If the calibration tool is in contact the robot<br>axis needs to be jogged in order to release<br>the calibration tool. Jogging the axis in wrong<br>direction will cause the calibration tool to<br>break. Directions of axis movement is shown<br>in_Calibration movement directions for all_<br>_axes on page 224_|



#### **After calibration** 

||**Action**|**Note**|
|---|---|---|
|1|Check that all dampers are refitted on axes 1, 2<br>and 3.||
|2|Remove the tool on axis 6.|B<br>C<br>A<br>xx1000000005<br>Parts:<br>A<br>Attachment screws (4 pcs)<br>B<br>Calibration tool<br>C<br>Guide pin|



Product manual - IRB 120 3HAC035728-001 Revision: W 

233 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.5 Calibrating with manual calibration method 

### **5.5 Calibrating with manual calibration method** 

#### **Introduction** 

This section describes how to calibrate the robot manually and how to use the calibration pins when calibrating. 

#### **Note** 

Calibration can be done in the following ways: 

- axis 1, 2 and 3 at the same time using the FlexPendant 

- axis 4, 5 and 6 at the same time using the FlexPendant 

- each axis separately. 

#### **Location of calibration pins** 

The figure shows the position of the calibration pins on axes 1 - 6. 



<!-- Start of picture text -->
1 2 3<br>B<br>A<br>C<br>4 5-6 E<br>D<br>F<br><!-- End of picture text -->

xx0900000627 

|1|Calibration, axis 1. (Rotate axis 1 -170.2°)|
|---|---|
|A|Calibration pins, axis 1|
|2|Calibration, axis 2. (Rotate axis 2 -115.1°)|
|B|Calibration pins, axis 2|
|3|Calibration, axis 3. (Rotate axis 3 75.8°)|
|C|Calibration pins, axis 3|
|4|Calibration, axis 4. (Rotate axis 4 -174.7°)|
|D|Calibration pins, axis 4|
|5-6|Calibration, axis 5-6. (Rotate axis 5 -90° and axis 6 90°)|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

234 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.5 Calibrating with manual calibration method _Continued_ 

E Calibration pin, axis 5-6 F Calibration tool, axis 5-6 

#### **Required equipment** 

|**Equipment**|**Note**|
|---|---|
|Standard toolkit|The content is defined in the section_Standard_<br>_toolkit on page 252_.|
|Calibration tool set|3HAC037305-001<br>Includes:<br>•<br>Calibration tool axes 5 and 6<br>•<br>Attachment screws M5x12 quality Steel<br>8.8-A2F (4 pcs)<br>•<br>Guide pin|



#### **Calibration using the FlexPendant** 

This procedure describes how to calibrate the robot using the FlexPendant. 

||**Action**|**Note**|
|---|---|---|
|1|**DANGER**<br>Turn off all electric power, hydraulic and pneu-<br>matic pressure supplies to the robot!||
|2|Remove all dampers from the_calibration pins_.|See the figure in:<br>•<br>_Location of calibration pins on_<br>_page 234_|
|3|Fit the_calibration tool_on axis 6.|B<br>C<br>A<br>xx1000000005<br>Parts:<br>•<br>A: Attachment screws (4 pcs)<br>•<br>B: Calibration tool<br>•<br>C: Guide pin|
|4|Release the brakes.|How to release the brakes see section:<br>•<br>_Manually releasing the brakes_<br>_on page 55_|
|5|Rotate axes 4, 5 and 6 manually until the two<br>calibration pins of each axis are in contact with<br>each other.|See the figure in:<br>•<br>_Location of calibration pins on_<br>_page 234_|
|6<br>7|Choose**fine calibration**from**Calib menu**.<br>Choose**Calibrate**on the FlexPendant.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

235 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.5 Calibrating with manual calibration method _Continued_ 

||**Action**|**Note**|
|---|---|---|
|8|Choose**axes 4, 5 and 6**on the FlexPendant<br>and**Calibrate**.||
|9|After calibration is done, use the FlexPendant<br>to jog each axis to zero degree.||
|10|Rotate axes 1, 2 and 3 manually until the two<br>calibration pins of each axis are in contact with<br>each other.|See the figure in:<br>•<br>_Location of calibration pins on_<br>_page 234_|
|11|Choose**fine calibration**from**Calib menu**.||
|12|Choose**axes 1, 2 and 3**on the FlexPendant<br>and**Calibrate**.||
|13|The_synchronisation marks_on each axis shall<br>now be matched.|See section<br>•<br>_Synchronization marks and_<br>_synchronization position for_<br>_axes on page 222_|
|14|Choose_Update Revolution counters_from the<br>_Calib menu_.||
|15|Choose_Axis 1 to 6_on the FlexPendant and<br>**update the revoultion counters**.||



#### **Calibration of axis 1 separately** 

Use this procedure when calibrating axis 1 separately. 

||**Action**|**Information**|
|---|---|---|
|1|**DANGER**<br>Turn off all electric power, hydraulic and pneu-<br>matic pressure supplies to the robot!||
|2|Remove the dampers from the_calibration pins_.|See the figure in:<br>•<br>_Location of calibration pins on_<br>_page 234_|
|3|Release the brakes.|See section<br>•<br>_Manually releasing the brakes_<br>_on page 55_|
|4|Rotate axis 1 manually until the two_calibration_<br>_pins_are in contact with each other.|See figure in:<br>•<br>_Location of calibration pins on_<br>_page 234_|
|5|Choose fine calibration from Calib menu.||
|6|Choose Calibrate on the the FlexPendant.||
|7|Choose axis 1 on the FlexPendant and Calib-<br>rate.||
|8|After calibration is done use the FlexPendant<br>to jog each axis to zero degree.||
|9|The_synchronisation marks_on axis 1 shall now<br>be matched.|See section<br>•<br>_Synchronization marks and_<br>_synchronization position for_<br>_axes on page 222_|
|10|Choose_Update Revolution counters_from the<br>_Calib menu_.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

236 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.5 Calibrating with manual calibration method _Continued_ 

||**Action**|**Information**|
|---|---|---|
|11|Choose_Axis 1_on the FlexPendant and**update**||
||<br>**the revoultion counters**.||



#### **Calibration of axis 2 separately** 

Use this procedure when calibrating axis 2 separately. 

||**Action**|**Information**|
|---|---|---|
|1|**DANGER**<br>Turn off all electric power, hydraulic and pneu-<br>matic pressure supplies to the robot!||
|2|Remove the dampers from the_calibration pins_.|See the figure in:<br>•<br>_Location of calibration pins on_<br>_page 234_|
|3|Release the brakes.|See section<br>•<br>_Manually releasing the brakes_<br>_on page 55_|
|4|Rotate axis 2 manually until the two_calibration_<br>_pins_are in contact with each other.|See figure 2 in:<br>•<br>_Location of calibration pins on_<br>_page 234_|
|5|Choose fine calibration from Calib menu.||
|6|Choose Calibrate on the the FlexPendant.||
|7|After calibration is done use the FlexPendant<br>to jog each axis to zero degree.||
|8|The_synchronisation marks_on axis 2 shall now<br>be matched|See section<br>•<br>_Synchronization marks and_<br>_synchronization position for_<br>_axes on page 222_|
|9|Choose_Update Revolution counters_from the<br>_Calib menu_.||
|10|Choose_Axis 2_ on the FlexPendant and**update**<br>**the revoultion counters**.||



#### **Calibration of axis 3 separately** 

Use this procedure when calibrating axis 3 separately. 

||**Action**|**Information**|
|---|---|---|
|1|**DANGER**<br>Turn off all electric power, hydraulic and pneu-<br>matic pressure supplies to the robot!||
|2|Remove the dampers from the_calibration pins_.|See the figure in:<br>•<br>_Location of calibration pins on_<br>_page 234_|
|3|Release the brakes.|See section<br>•<br>_Manually releasing the brakes_<br>_on page 55_|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

237 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.5 Calibrating with manual calibration method _Continued_ 

||**Action**|**Information**|
|---|---|---|
|4|Rotate axis 3 manually until the two_calibration_<br>_pins_are in contact with each other.|See figure 3 in:<br>•<br>_Location of calibration pins on_<br>_page 234_|
|5|Choose fine calibration from Calib menu.||
|6|Choose Calibrate on the the FlexPendant.||
|7|After calibration is done use the FlexPendant<br>to jog each axis to zero degree.||
|8|The_synchronisation marks_on axis 3 shall now<br>be matched.|See section<br>•<br>_Synchronization marks and_<br>_synchronization position for_<br>_axes on page 222_|
|9|Choose_Update Revolution counters_from the<br>_Calib menu_.||
|10|Choose_Axis 3_ on the FlexPendant and**update**<br>**the revoultion counters**.||



#### **Calibration of axis 4 separately** 

Use this procedure when calibrating axis 4 separately. 

||**Action**|**Information**|
|---|---|---|
|1|**DANGER**<br>Turn off all electric power, hydraulic and pneu-<br>matic pressure supplies to the robot!||
|2|Release the brakes.|See section<br>•<br>_Manually releasing the brakes_<br>_on page 55_|
|3|Rotate axis 4 manually until the two_calibration_<br>_pins_ are in contact with each other.|See the figure 4 in:<br>•<br>_Location of calibration pins on_<br>_page 234_|
|4|Choose fine calibration from Calib menu.||
|5|Choose Calibrate on the the FlexPendant.||
|6|After calibration is done use the FlexPendant<br>to jog each axis to zero degree||
|7|The_synchronisation marks_on axis 4 shall now<br>be matched.|See section<br>•<br>_Synchronization marks and_<br>_synchronization position for_<br>_axes on page 222_|
|8|Choose_Update Revolution counters_from the<br>_Calib menu_.||
|9|Choose_Axis 4_ on the FlexPendant and**update**<br>**the revoultion counters**.||



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

238 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.5 Calibrating with manual calibration method _Continued_ 

#### **Calibration of axes 5 and 6 using the calibration tool** 

Use this procedure when calibrating axes 5 and 6 separately. 



<!-- Start of picture text -->
Action Information<br>1<br>DANGER<br>Turn off all electric power, hydraulic and pneu-<br>matic pressure supplies to the robot!<br>2 Fit the  calibration tool  on the wrist with its  at- B<br>tachment screws .<br>C<br>A<br>xx1000000005<br>Parts:<br>• A: Attachment screws (4 pcs)<br>• B: Calibration tool<br>• C: Guide pin<br>3 Release the brakes. See section<br>• Manually releasing the brakes<br>on page 55<br>4 Rotate axes 5 and 6 manually until the  calibra- See figure 5-6 in:<br>tion pin  on the wrist and the  fork  of the tool are • Location of calibration pins on<br>in contact with each other. page 234<br>5 Choose fine calibration from Calib menu.<br>6 Choose Calibrate on the the FlexPendant.<br>7 After calibration is done use the FlexPendant<br>to jog each axis to zero degree.<br>8 The  synchronisation marks  on axes 5 and 6 See section<br>shall now be matched. • Synchronization marks and<br>synchronization position for<br>axes on page 222<br>9 Choose  Update Revolution counters  from the<br>Calib menu .<br>10 Choose  Axis 5 to 6  on the FlexPendant and<br>update the revoultion counters .<br><!-- End of picture text -->

Product manual - IRB 120 3HAC035728-001 Revision: W 

239 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.6 Verifying the calibration 

### **5.6 Verifying the calibration** 

#### **Introduction** 

Always verify the results after calibrating _any_ robot axis to verify that all calibration positions are correct. 

#### **Verifying the calibration** 

Use this procedure to verify the calibration result. 

||**Action**|**Note**|
|---|---|---|
|1|Run the calibration home position program twice.<br>Do not change the position of the robot axes after running<br>the program!|See_Checking the synchron-_<br>_ization position on page241_.|
|2|Adjust the_synchronization marks_when the calibration is<br>done, if necessary.|This is detailed in section<br>_Synchronization marks and_<br>_synchronization position for_<br>_axes on page 222_.|
|3|Write down the values on a new label and stick it on top<br>of the calibration label.<br>xx||



Product manual - IRB 120 3HAC035728-001 Revision: W 

240 

© Copyright 2009-2022 ABB. All rights reserved. 

**5 Calibration** 

#### 5.7 Checking the synchronization position 

### **5.7 Checking the synchronization position** 

#### **Introduction** 

Check the synchronization position of the robot before beginning any programming of the robot system. This may be done: 

- Using a `MoveAbsJ` instruction with argument zero on all axes. 

- Using the **Jogging** window on the FlexPendant. 

#### **Using a** **`MoveAbsJ` instruction** 

Use this procedure to create a program that runs all the robot axes to their synchronization position. 

||**Action**|**Note**|
|---|---|---|
|1|On ABB menu tap**Program editor**.||
|2|Create a new program.||
|3|Use**MoveAbsJ**in the**Motion&Proc**menu.||
|4|Create the following program:<br>`MoveAbsJ [[0,0,0,0,0,0],`<br>`[9E9,9E9,9E9,9E9,9E9,9E9]]`<br>`\NoEOffs, v1000, fine, tool0`||
|5|Run the program in manual mode.||
|6|Check that the synchronization marks for the axes<br>align correctly. If they do not, update the revolu-<br>tion counters.|See_Synchronization marks and_<br>_synchronization position for axes on_<br>_page 222_and_Updating revolution_<br>_counters on page 225_.|



#### **Using the jogging window** 

Use this procedure to jog the robot to the synchronization position of all axes. 

||**Action**|**Note**|
|---|---|---|
|1|On the**ABB**menu, tap**Jogging**.||
|2|Tap**Motion mode**to select group of axes<br>to jog.||
|3|Tap to select the axis to jog, axis 1, 2, or<br>3.||
|4|Manually run the robots axes to a position<br>where the axis position value read on the<br>FlexPendant, is equal to zero.||
|5|Check that the synchronization marks for<br>the axes align correctly. If they do not, up-<br>date the revolution counters.|See_Synchronization marks and synchron-_<br>_ization position for axes on page 222_and<br>_Updating revolution counters on page225_.|



Product manual - IRB 120 3HAC035728-001 Revision: W 

241 

© Copyright 2009-2022 ABB. All rights reserved. 

This page is intentionally left blank 

**6 Decommissioning** 

6.1 Introduction to decommissioning 

## **6 Decommissioning** 

### **6.1 Introduction to decommissioning** 

#### **Introduction** 

This section contains information to consider when taking a product, robot or controller, out of operation. 

It deals with how to handle potentially dangerous components and potentially hazardous materials. 

#### **Note** 

The decommissioning process shall be preceded by a risk assessment. 

#### **General** 

All used grease/oils and dead batteries **must** be disposed of in accordance with the current legislation of the country in which the robot and the control unit are installed. 

If the robot or the control unit is partially or completely disposed of, the various parts **must** be grouped together according to their nature (which is all iron together and all plastic together), and disposed of accordingly. These parts **must** also be disposed of in accordance with the current legislation of the country in which the robot and control unit are installed. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

243 

© Copyright 2009-2022 ABB. All rights reserved. 

**6 Decommissioning** 

#### 6.2 Environmental information 

### **6.2 Environmental information** 

#### **Introduction** 

ABB robots contain components in different materials. During decommissioning, all materials should be dismantled, recycled, or reused responsibly, according to the relevant laws and industrial standards. Robots or parts that can be reused or upcycled helps to reduce the usage of natural resources. 

#### **Symbol** 

The following symbol indicates that the product must not be disposed of as common garbage. Handle each product according to local regulations for the respective content (see table below). 



xx1800000058 

#### **Materials used in the product** 

The table specifies some of the materials in the product and their respective use throughout the product. 

Dispose components properly according to local regulations to prevent health or environmental hazards. 

|**Material**|**Example application**|
|---|---|
|Aluminium|Structure|
|Batteries, Lithium|Encoder Interface Board|
|Cast iron/nodular iron|Upper arm|
|Copper|Cables, motors|
|Neodymium|Brakes, motors|
|Oil, grease|Gearboxes|
|Plastic/rubber|Cables, connectors, drive belts, covers, and so on.|
|Steel|Gears, screws, shafts, brackets, and so on.|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

244 

© Copyright 2009-2022 ABB. All rights reserved. 

**6 Decommissioning** 

#### 6.2 Environmental information _Continued_ 

#### **Oil and grease** 

Where possible, arrange for oil and grease to be recycled. Dispose of via an authorized person/contractor in accordance with local regulations. Do not dispose of oil and grease near lakes, ponds, ditches, down drains, or onto soil. Incineration must be carried out under controlled conditions in accordance with local regulations. Also note that: 

- Spills can form a film on water surfaces causing damage to organisms. Oxygen transfer could also be impaired. 

- Spillage can penetrate the soil causing ground water contamination. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

245 

© Copyright 2009-2022 ABB. All rights reserved. 

**6 Decommissioning** 

#### 6.3 Scrapping of robot 

### **6.3 Scrapping of robot** 

#### **Note** 

The decommissioning process shall be preceded by a risk assessment. 

#### **Important when scrapping the robot** 

#### **DANGER** 

The risk assessment should consider hazards arising in the decommissioning, such as, but not limited to: 

- Always remove all batteries. If a battery is exposed to heat, for example from a blow torch, it will explode. 

- Always remove all oil/grease in gearboxes. If exposed to heat, for example from a blow torch, the oil/grease will catch fire. 

- When motors are removed from the robot, the robot will collapse if it is not properly supported before the motor is removed. 

- A used robot does not have the same performance as on delivery. Springs, brakes, bearings, and other parts might be worn or broken. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

246 

© Copyright 2009-2022 ABB. All rights reserved. 

**7 Reference information** 

7.1 Introduction 

## **7 Reference information** 

### **7.1 Introduction** 

#### **General** 

This chapter includes general information, complementing the more specific information in the different procedures in the manual. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

247 

© Copyright 2009-2022 ABB. All rights reserved. 

**7 Reference information** 

#### 7.2 Applicable standards 

### **7.2 Applicable standards** 

#### **Note** 

The listed standards are valid at the time of the release of this document. Phased out or replaced standards are removed from the list when needed. 

#### **General** 

The product is designed in accordance with ISO 10218-1:2011, Robots for industrial environments - Safety requirements -Part 1 Robots, and applicable parts in the normative references, as referred to from ISO 10218-1:2011. In case of deviations from ISO 10218-1:2011, these are listed in the declaration of incorporation which is part of the product delivery. 

#### **Normative standards as referred to from ISO 10218-1** 

|**Standard**|**Description**|
|---|---|
|ISO 9283:1998|Manipulating industrial robots - Performance criteria and related<br>test methods|
|ISO 10218-2|Robots and robotic devices - Safety requirements for industrial<br>robots - Part 2: Robot systems and integration|
|ISO 12100|Safety of machinery - General principles for design - Risk as-<br>sessment and risk reduction|
|ISO 13849-1:2006|Safety of machinery - Safety related parts of control systems<br>- Part 1: General principles for design|
|ISO 13850|Safety of machinery - Emergency stop - Principles for design|
|IEC 60204-1|Safety of machinery - Electrical equipment of machines - Part<br>1: General requirements|



#### **Other standards used in design** 

|**Standard**|**Description**|
|---|---|
|ISO 9787:2013|Robots and robotic devices -- Coordinate systems and motion<br>nomenclatures|
|IEC 61000-6-2|Electromagnetic compatibility (EMC) – Part 6-2: Generic<br>standards – Immunity standard for industrial environments|
|IEC 61000-6-4|Electromagnetic compatibility (EMC) – Part 6-4: Generic<br>standards – Emission standard for industrial environments|
|ISO 13732-1:2006|Ergonomics of the thermal environment - Part 1|
|IEC 60974-1:2012<sup>i</sup>|Arc welding equipment - Part 1: Welding power sources|
|IEC 60974-10:2014<sup>_i_</sup>|Arc welding equipment - Part 10: EMC requirements|
|ISO 14644-1:2015<sup>ii</sup>|Classification of air cleanliness|
|IEC 60529:1989 + A2:20|Degrees of protection provided by enclosures (IP code)<br>13|



> i Only valid for arc welding robots. Replaces IEC 61000-6-4 for arc welding robots. 

ii Only robots with protection Clean Room. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

248 

© Copyright 2009-2022 ABB. All rights reserved. 

**7 Reference information** 

7.3 Unit conversion 

### **7.3 Unit conversion** 

#### **Converter table** 

Use the following table to convert units used in this manual. 

|**Quantity**|**Units**|||
|---|---|---|---|
|Length|1 m|3.28 ft.|39.37 in|
|Weight|1 kg|2.21 lb.||
|Weight|1 g|0.035 ounces||
|Pressure|1 bar|100 kPa|14.5 psi|
|Force|1 N|0.225 lbf||
|Moment|1 Nm|0.738 lbf-ft||
|Volume|1 L|0.264 US gal||



Product manual - IRB 120 3HAC035728-001 Revision: W 

249 

© Copyright 2009-2022 ABB. All rights reserved. 

**7 Reference information** 

#### 7.4 Screw joints 

### **7.4 Screw joints** 

#### **General** 

This section describes how to tighten the various types of screw joints on ABB robots. 

The instructions and torque values are valid for screw joints comprised of metallic materials and do _not_ apply to soft or brittle materials. 

#### **UNBRAKO screws** 

UNBRAKO is a special type of screw recommended by ABB for certain screw joints. It features special surface treatment (Gleitmo as described below) and is extremely resistant to fatigue. 

Whenever used, this is specified in the instructions, and in such cases, _no other type of replacement screw_ is allowed. Using other types of screws will void any warranty and may potentially cause serious damage or injury. 

#### **Gleitmo treated screws** 

Gleitmo is a special surface treatment to reduce the friction when tightening the screw joint. It is recommended by ABB for M6-M20 screw joints. Screws treated with Gleitmo may be reused 3-4 times before the coating disappears. After this the screw must be discarded and replaced with a new one. 

When handling screws treated with Gleitmo, protective gloves of **nitrile rubber** type should be used. 

Generally, screws are lubricated with _Gleitmo 603_ mixed with _Geomet 500_ or _Geomet 702_ in proportion 1:3. _Geomet_ thickness varies according to screw dimensions, refer to the following. 

|**Dimension**|**Lubricant**|**Geomet thickness**|
|---|---|---|
|M6-M20 (any length except<br>M20x60)|_Gleitmo 603_+_Geomet 500_|3-5 μm|
|M6-M20 (any length except<br>M20x60)|_Gleitmo 603_+_Geomet 720_|3-5 μm|
|M20x60|_Gleitmo 603_+_Geomet 500_|8-12 μm|
|M20x60|_Gleitmo 603_+_Geomet 720_|6-10 μm|



#### **Screws lubricated in other ways** 

Screws lubricated with Molykote 1000 or Molykote P1900 should _only_ be used when specified in the repair, maintenance or installation procedure descriptions. 

In such cases, proceed as follows: 

- 1 Apply lubricant to the screw thread. 

- 2 Apply lubricant between the plain washer and screw head. 

- 3 Tighten to the torque as described in the procedures. 

|**Lubricant**|**Article number**|
|---|---|
|Molykote 1000 (molybdenum disulphide grease)|3HAC042472-001|
|Molykote P1900 (molybdenum disulphide grease)|3HAC070875-001|



Product manual - IRB 120 3HAC035728-001 Revision: W 

250 

© Copyright 2009-2022 ABB. All rights reserved. 

**7 Reference information** 

#### 7.5 Weight specifications 

### **7.5 Weight specifications** 

#### **Definition** 

In installation, repair, and maintenance procedures, weights of the components handled are sometimes specified. All components exceeding 22 kg (50 lbs) are highlighted in this way. 

To avoid injury, ABB recommends the use of a lifting accessory when handling components with a weight exceeding 22 kg. A wide range of lifting accessories and devices are available for each manipulator model. 

#### **Example** 

Following is an example of a weight specification in a procedure: 

|**Action**|**Note**|
|---|---|
|**CAUTION**||
|The arm weighs 25 kg.||
|All lifting accessories used must be sized accord-<br>ingly.||



Product manual - IRB 120 3HAC035728-001 Revision: W 

251 

© Copyright 2009-2022 ABB. All rights reserved. 

**7 Reference information** 

#### 7.6 Standard toolkit 

### **7.6 Standard toolkit** 

#### **General** 

All service (repairs, maintenance, and installation) procedures contains lists of tools required to perform the specified activity. 

All special tools required are listed directly in the procedures while all the tools that are considered standard are gathered in the standard toolkit and defined in the following table. 

This way, the tools required are the sum of the standard toolkit and any tools listed in the instruction. 

#### **Contents, standard toolkit** 

|**Qty**|**Tool**|
|---|---|
|1|Socket head cap 2.5-17 mm|
|1|Torque wrench 0.5-10 Nm|
|1|Small screwdriver|
|1|Plastic mallet|
|1|Ratchet head for torque wrench 1/2|
|1|Socket head cap no. 2.5, socket 1/2" bit L 110 mm|
|1|Small cutting plier|
|1|T-handle with ball head|



Product manual - IRB 120 3HAC035728-001 Revision: W 

252 

© Copyright 2009-2022 ABB. All rights reserved. 

**7 Reference information** 

7.7 Special tools 

### **7.7 Special tools** 

#### **General** 

All service instructions contain lists of tools required to perform the specified activity. The required tools are a sum of standard tools, defined in the section _Standard toolkit on page 252_ , and of special tools, listed directly in the instructions and also gathered in this section. 

#### **Calibration tool set** 

The following table specifies the calibration equipment needed when calibrating axes 5 and 6 of the robot. 

|**Equipment, etc.**|**Article number**|**Note**|
|---|---|---|
|Calibration tool set|3HAC037305-001|Includes:|
|||•<br>Calibration tool axes 5 and 6<br>•<br>Attachment screws M5x12 qual-<br>ity Steel 8.8-A2F (4 pcs)<br>•<br>Guide pin|



#### **Lifting tool set** 

The following table specifies the lifting tool set needed when lifting the complete robot. 

|**Description**|**Art. no.**|**Note**|
|---|---|---|
|Lifting tool set|3HAC037304-001|Includes:<br>•<br>Bracket<br>•<br>Attachment screws (wrist) M5x12 quality<br>steel 8.8-A2F (2 pcs)<br>•<br>Spring washers, conical (wrist) 5.3x11x1.2<br>quality Steel-mZn12c (2 pcs)<br>•<br>Attachment screws DIN912 (swing hous-<br>ing) M4x8 quality Steel 8.8-ELZN (2 pcs)<br>•<br>Conical spring washers 4 mm (swing<br>housing) 4.3x9x1.3 quality Steel-MZn12C<br>(2 pcs)|



Product manual - IRB 120 3HAC035728-001 Revision: W 

253 

© Copyright 2009-2022 ABB. All rights reserved. 

**7 Reference information** 

- 7.8 Lifting equipment and lifting instructions 

### **7.8 Lifting equipment and lifting instructions** 

#### **General** 

Many repair and maintenance activities require different pieces of lifting equipment, which are specified in each procedure. 

The use of each piece of lifting equipment is _not_ detailed in the activity procedure, but in the instruction delivered with each piece of lifting equipment. 

This implies that the instructions delivered with the lifting equipment should be stored for later reference. 

Product manual - IRB 120 3HAC035728-001 Revision: W 

254 

© Copyright 2009-2022 ABB. All rights reserved. 

**8 Spare parts** 

8.1 Spare part lists and illustrations 

## **8 Spare parts** 

### **8.1 Spare part lists and illustrations** 

#### **Location** 

Spare parts and exploded views are not included in the manual but delivered as a separate document for registered users on myABB Business Portal, _<u>www.abb.com/myABB</u>_ <u>.</u> 

#### **Tip** 

All documents can be found via myABB Business Portal, _<u>www.abb.com/myABB</u>_ <u>.</u> 

Product manual - IRB 120 3HAC035728-001 Revision: W 

255 

© Copyright 2009-2022 ABB. All rights reserved. 

This page is intentionally left blank 

**9 Circuit diagrams** 

#### 9.1 Circuit diagrams 

## **9 Circuit diagrams** 

### **9.1 Circuit diagrams** 

#### **Overview** 

The circuit diagrams are not included in this manual, but are available for registered users on myABB Business Portal, _<u>www.abb.com/myABB</u>_ <u>.</u> 

See the article numbers in the tables below. 

#### **Controllers** 

|**Product**|**Article numbers for circuit diagrams**|
|---|---|
|_Circuit diagram - IRC5_|_3HAC024480-011_|
|_Circuit diagram - IRC5 Compact_|_3HAC049406-003_|
|_Circuit diagram - Euromap 67, design 14_|_3HAC024120-005_|
|_Circuit diagram - Spot welding cabinet_|_3HAC057185-001_|



#### **Manipulators** 

|**Product**|**Article numbers for circuit diagrams**|
|---|---|
|_Circuit diagram - IRB 120_|_3HAC031408-003_|
|_Circuit diagram - IRB 140 type C_|_3HAC6816-3_|
|_Circuit diagram - IRB 260_|_3HAC025611-001_|
|_Circuit diagram - IRB 360_|_3HAC028647-009_|
|_Circuit diagram - IRB 460_|_3HAC036446-005_|
|_Circuit diagram - IRB 660_|_3HAC025691-001_|
|_Circuit diagram - IRB 760_|_3HAC025691-001_|
|_Circuit diagram - IRB 1200_|_3HAC046307-003_|
|_Circuit diagram - IRB 1410_|_3HAC2800-3_|
|_Circuit diagram - IRB 1600/1660_|_3HAC021351-003_|
|_Circuit diagram - IRB 1520_|_3HAC039498-007_|
|_Circuit diagram - IRB 2400_|_3HAC6670-3_|
|_Circuit diagram - IRB 2600_|_3HAC029570-007_|
|_Circuit diagram - IRB 4400/4450S_|_3HAC9821-1_|
|_Circuit diagram - IRB 4600_|_3HAC029038-003_|
|_Circuit diagram - IRB 6620_|_3HAC025090-001_|
|_Circuit diagram - IRB 6620 / IRB 6620LX_|_3HAC025090-001_|
|_Circuit diagram - IRB 6640_|_3HAC025744-001_|
|_Circuit diagram - IRB 6650S_|_3HAC13347-1_<br>_3HAC025744-001_|
|_Circuit diagram - IRB 6660_|_3HAC025744-001_<br>_3HAC029940-001_|



_Continues on next page_ 

Product manual - IRB 120 3HAC035728-001 Revision: W 

257 

© Copyright 2009-2022 ABB. All rights reserved. 

**9 Circuit diagrams** 

#### 9.1 Circuit diagrams 

#### _Continued_ 

|**Product**|**Article numbers for circuit diagrams**|
|---|---|
|_Circuit diagram - IRB 6700 / IRB 6790_|_3HAC043446-005_|
|_Circuit diagram - IRB 7600_|_3HAC13347-1_<br>_3HAC025744-001_|
|_Circuit diagram - IRB 14000_|_3HAC050778-003_|
|_Circuit diagram - IRB 910SC_|_3HAC056159-002_|



Product manual - IRB 120 3HAC035728-001 Revision: W 

258 

© Copyright 2009-2022 ABB. All rights reserved. 

###### **ABB AB** 

**Robotics & Discrete Automation** S-721 68 VÄSTERÅS, Sweden Telephone +46 (0) 21 344 400 

###### **ABB AS** 

**Robotics & Discrete Automation** Nordlysvegen 7, N-4340 BRYNE, Norway Box 265, N-4349 BRYNE, Norway Telephone: +47 22 87 2000 

**ABB Engineering (Shanghai) Ltd.** Robotics & Discrete Automation No. 4528 Kangxin Highway PuDong New District SHANGHAI 201319, China Telephone: +86 21 6105 6666 

**ABB Inc. Robotics & Discrete Automation** 1250 Brown Road Auburn Hills, MI 48326 USA Telephone: +1 248 391 9000 

###### **abb.com/robotics** 

© Copyright 2009-2022 ABB. All rights reserved. Specifications subject to change without notice. 

