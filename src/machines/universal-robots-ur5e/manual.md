# Universal Robots UR5e User Manual

> Curated reference: installation/commissioning and programming documentation has been excluded. Remaining manufacturer text is retained verbatim, including safety, operation, maintenance, repair, and troubleshooting where present. Original page/section numbering is preserved and may have gaps; any original page count describes the full source, not this excerpt. Follow references to excluded sections in the linked original manual.


Source: [https://www.universal-robots.com/manuals/EN/PDF/SW5_19/user-manual-UR5e-PDF_online/710-965-00_UR5e_User_Manual_en_Global.pdf](https://www.universal-robots.com/manuals/EN/PDF/SW5_19/user-manual-UR5e-PDF_online/710-965-00_UR5e_User_Manual_en_Global.pdf)

Converted from official manufacturer PDF documentation.

---



# **User Manual UR5e** 

Original instructions (en) 

PolyScope 5 



UR5e 

User Manual 



The information contained herein is the property of Universal Robots A/S and shall not be reproduced in whole or in part without prior written approval of Universal Robots A/S. The information herein is subject to change without notice and should not be construed as a commitment by Universal Robots A/S. This document is periodically reviewed and revised. 

Universal Robots A/S assumes no responsibility for any errors or omissions in this document. 

Copyright © 2009–2024 by Universal Robots A/S. 

The Universal Robots logo is a registered trademark of Universal Robots A/S. 

User Manual 

UR5e 



UR5e 

User Manual 



## 1. Liability and Intended Use 

### 1.1. Limitation of Liability 

Description Any information provided in this manual must not be construed as a warranty, by UR, that the industrial robot will not cause injury or damage, even if the industrial robot complies with all safety instructions and information for use. 

### 1.2. Intended Use 

###### Description 

###### READ MANUAL 

Failure to use the robot in accordance with the intended use can result in hazardous situations. 

- Read and follow the recommendations for intended use and the specifications provided in the User Manual. 

Universal Robots robots are intended for industrial use, to handle tools/end effectors and fixtures, or to process or transfer components or products. For details about the conditions under which the robot should operate, see Declarations and Certificates and the technical specifications. 

All UR robots are equipped with safety functions, which are purposely designed to enable collaborative applications, where the robot application operates together with a human. The safety function settings must be set to the appropriate values as determined by the robot application risk assessment. 

Collaborative applications are only intended for non-hazardous applications, where the complete application, including tool/end effector, work piece, obstacles and other machines, is low risk according to the risk assessment of the specific application. 

11 

UR5e 

User Manual 

1. Liability and Intended Use 



###### WARNING 

Using UR robots or UR products outside of the intended uses can result in injuries, death and/or property damage. Do not use the UR robot or products for any of the below unintended uses and applications: 

- Medical use, i.e. uses relating to disease, injury or disability in humans including the following purposes: 

   - Rehabilitation 

   - Assessment 

   - Compensation or alleviation 

   - Diagnostic 

   - Treatment 

   - Surgical 

   - Healthcare 

   - Prosthetics and other aids for the physically impaired 

   - Any use in proximity to patient/s 

- Handling, lifting, or transporting people 

- Any application requiring compliance with specific hygienic and/or sanitation standards, such as proximity or direct contact with food, beverage, pharmaceutical, and /or cosmetic products. 

   - UR joint grease can be released into the air (vapor), or drip. 

- Any use, or any application, deviating from the intended use, specifications, and certifications of UR robots or UR products. 

- Misuse is prohibited as the result could be death, personal injury, and /or property damage 

UNIVERSAL ROBOTS EXPRESSLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR ANY PARTICULAR USE. 

###### WARNING 

Do not modify the robot. Do not modify or alter e-Series end caps. A modification can create unforeseen hazards. All authorized disassembling and reassembling shall be done at a UR service center, or can be done according to the newest version of all relevant service manuals by skilled persons. 

###### WARNING 

Failure to consider the added risks due to the reach, payloads, operating torques and speeds associated with robot application, can result in injury or death. 

- Your application risk assessment shall include the risks associated with the application's reach, motion, payload and speed of the robot, end effector and workpiece. 

12 

User Manual 

UR5e 

2. Your Robot 



## 2. Your Robot 

Introduction Congratulations on the purchase of your new Universal Robots robot, which consists of the robot arm (manipulator), Control Box and the Teach Pendant. 

Originally designed to mimic the range of motion of a human arm, the robot arm is composed of aluminium tubes, articulated by six joints, allowing for a high range of flexibility in your automation installation. 

The Universal Robots patented programming interface, PolyScope, allows you to create, load and run your automation applications. 

###### In the boxes 

- Robot arm 

- Control Box 

- Teach Pendant or a 3PE Teach Pendant 

- Mounting bracket for the Control Box 

- Mounting bracket for the 3PE Teach Pendant 

- Key for opening the Control Box 

- Cable for connecting the robot arm and the Control Box (multiple options available depending on robot size) 

- Mains cable or power cable compatible with your region 

- Round sling or lifting sling (depending on robot size) 

- Tool cable adapter (depending on robot version) 

- This manual 

13 

UR5e 

User Manual 

2. Your Robot 



###### About the robot arm 

The Joints, Base and Tool Flange are the main components of the robot arm. The controller coordinates joint motion to move the robot arm. 

Attaching an end effector (tool) to the Tool Flange at the end of the robot arm, allows the robot to manipulate a workpiece. Some tools have a specific purpose beyond manipulating a part, for example, QC inspection, applying adhesives and welding. 



###### 1.1:  The main components of the robot arm. 

- Base : where the robot arm is mounted. 

- Shoulder and Elbow : make larger movements. 

- Wrist 1 and Wrist 2 : make finer movements. 

- Wrist 3 : where the tool is attached to the Tool Flange. 

The robot is partly completed machinery, as such a Declaration of Incorporation is provided. A risk assessment is required for each robot application. 

About the This manual contains safety information, guidelines for safe use, and instructions to mount manual the robot arm, Control Box and Teach Pendant. You can also find instructions for how to begin to install and how to start programming the robot. 

Read and adhere to the intended uses. Perform a risk assessment. Install and use in accordance with the electrical and mechanical specifications provided in this user manual. 

Risk assessment requires an understanding of the hazards, risks and risk reduction 

measures for the robot application. Robot integration can require a basic level of mechanical and electrical training. 

14 

User Manual 

UR5e 

2. Your Robot 



Content Universal Robots A/S continues to improve the reliability and performance of its products, disclaimer and as such reserves the right to upgrade products, and product documentation, without prior warning. Universal Robots A/S takes every care to ensure the content of the User Manual/s is precise and correct, but takes no responsibility for any errors or missing information. 

This manual does not contain warranty information. 

myUR The myUR portal allows you to register all your robots, keep track of service cases and answer general support questions. 

Sign into <u>myur.universal-robots.com</u> to access the portal. 

In the myUR portal, your cases are handled either by your preferred distributor, or escalated to Universal Robots Customer Service teams. You can also subscribe to robot monitoring and manage additional user accounts in your company. 

Support The support site <u>www.universal-robots.com/support</u> contains other language versions of this manual 

UR+ The online showroom UR+www.universal-robots.com/plus provides cutting-edge products to customize your UR robot application. You can find everything you need in one place — from tools and accessories to software. 

UR+ products connect to and work with UR robots to ensure simple set-up and an overall smooth user experience. All UR+ products are tested by UR. 

You can also access the UR+ Partner Program via our software platform <u>plus.universalrobots.com</u> to design more user-friendly products for UR robots. 

UR forums The UR Forum <u>forum.universal-robots.com</u> allows robot enthusiasts of all skill levels to connect to UR and each other, to ask questions and to exchange information. While the UR Forum was created by UR+ and our admins are UR employees, the majority of the content is created by you, the UR Forum user. 

Academy The UR Academy site <u>academy.universal-robots.com</u> offers a variety of training opportunities. 

Developer The UR Developer Suite <u>universal-robots.com/products/ur-developer-suite</u> is a collection suite of all the tools needed to build an entire solution, including developing URCaps, adapting end-effectors, and integrating hardware. 

15 

UR5e 

User Manual 

2. Your Robot 



###### Online manuals 

Manuals, guides and handbooks can be read online. We have gathered a large number of documents at <u>https://www.universal-robots.com/manuals</u> 

- PolyScope Software Handbook with descriptions and instructions for the software 

- The Service Handbook with instructions for troubleshooting, maintenance and repair 

- The Script Directory with scripting for in depth programming 

16 

User Manual 

UR5e 

2. Your Robot 



### 2.1. Technical Specifications UR5e 

|Robot type|UR5e|
|---|---|
|Robot weight|20.7 kg/ 45.7 lb|
|Maximum payload|5 kg/ 11 lb|
|Reach|850 mm / 33.5 in|
|Joint ranges|Unlimited rotation of tool flange, ± 360 ° for all other joints<br>± 360 ° for alljoints|
|Speed|Joints: Max 180 °/s .<br>Tool: Approx. 1 m/s / Approx. 39.4 in/s.|
|System update frequency|500 Hz|
|Force Torque sensor accuracy|4 N|
|Pose repeatability|± 0.03 mm / ± 0.0011 in(1.1 mils)per ISO 9283|
|Footprint|Ø149 mm / 5.9 in|
|Degrees of freedom|6 rotating joints|
|Control Box size (W × H × D)|460 mm × 449 mm × 254 mm / 18.2 in × 17.6 in × 10 in|
|Control Box I/O ports|16 digital in, 16 digital out, 2 analogin, 2 analogout|
|Tool I/O ports|2 digital in, 2 digital out, 2 analogin|
|Tool Communication|RS|
|Tool I/O power supply & voltage|12 V/24 V 1.5 A(Dualpin)1 A(Singlepin)|
|Control Box I/O power supply|24 V 2 A in Control Box|
|Communication|TCP/IP 1000 Mbit: IEEE 802.3ab, 1000BASE-T Ethernet<br>socket, MODBUS TCP & EtherNet/IP Adapter, Profinet|
|Programming<br>Noise|PolyScopegraphical user interface on 12" touchscreen<br>Robot Arm: Less than 60dB(A) Control Box: Less than<br>50dB(A)<br>Robot Arm: Less than 65dB(A) Control Box: Less than<br>50dB(A)|
|IP classification|IP54|
|Cleanroom classification|Robot Arm: ISO Class 5, Control Box: ISO Class 6|
|Power consumption (average)|570 W|
|Power consumption|Approx. 250 W usinga typicalprogram|
|Short-Circuit Current Rating (SCCR)|200A|
|Collaboration operation|17 advanced safety functions. In compliance with: EN ISO<br>13849-1, PLd, Cat.3 and EN ISO 10218-1|
|Materials|Aluminium, PC/ASAplastic|
|Ambient temperature range|0-50 °C. At ambient temperatures above 35°C, the robot<br>mayoperate at reduced speed andperformance.|
|Control Box power source|100-240 VAC, 47-440 Hz|
|TP cable: Teach Pendant to Control Box|4.5 m / 177 in|
||Standard (PVC) 6 m/236 in x 13.4 mm|
|Robot Cable: Robot Arm to Control Box|Standard (PVC) 12 m/472.4 in x 13.4 mm|
|(options)|Hiflex (PUR) 6 m/236 in x 12.1 mm|
||Hiflex (PUR) 12 m/472.4 in x 12.1 mm|



17 

UR5e 

User Manual 

2. Your Robot 



### 2.2. Maximum Payload 

Description The rated robot arm payload depends on the center of gravity (CoG) offset of the payload, as shown below. The CoG offset is defined as the distance from the center of the tool flange to the center of gravity of the attached payload. 

The robot arm can accommodate a long center of gravity offset, if the payload is placed below the tool flange. For example when computing the payload mass in a pick and place application, consider both the gripper and the workpiece. 

The robot's capacity to accelerate can be reduced if the payload CoG exceeds the robot's reach and payload. You can verify the reach and payload of your robot in the Technical Specifications. 



<!-- Start of picture text -->
Payload [kg]<br>6<br>5<br>4<br>3<br>2<br>1<br>0 100 200 300 400 500 600<br>Center of gravity offset [mm]<br><!-- End of picture text -->

The relationship between the rated payload and the center of gravity offset. 

18 

User Manual 

UR5e 

2. Your Robot 



###### Payload inertia 

You can configure payloads with high inertia, if the payload is set correctly. The controller software automatically adjusts accelerations when the following parameters are correclty configured: 

- Payload mass 

- Center of gravity 

- Inertia 

You can use the URSim to evaluate the accelerations and cycle times of the robot motions with a specific payload. 

### 2.3. Stopping Time and Stopping Distance 

###### Description 

###### NOTICE 

You can set user-defined safety rated maximum stopping time and distance. 

If user-defined settings are used, the program speed is dynamically adjusted to always comply with the selected limits. 

The graphical data provided for Joint 0 (base) , Joint 1 (shoulder) and Joint 2 (elbow) is valid for stopping distance and stopping time: 

- Category 0 

- Category 1 

- Category 2 

The Joint 0 test was carried out using a horizontal movement, where the rotational axis was perpendicular to the ground. For the Joint 1 and Joint 2 tests, the robot followed a vertical trajectory, where the rotational axes were parallel to the ground, and the stop was done while the robot was moving downward. 

The Y-axis is the distance from where the stop is initiated to the final position. The payload CoG is at the tool flange. 

###### Joint 0 (BASE) 

Stopping distance in meters for 33% of 5kg 



19 

UR5e 

User Manual 

2. Your Robot 





<!-- Start of picture text -->
Stopping<br>distance in<br>meters for<br>66% of 5kg<br>Stopping<br>distance in<br>meters for<br>maximum<br>payload of 5kg<br>Joint 0<br>(BASE)<br>Stopping time<br>in seconds for<br>33% of 5kg<br>Stopping time<br>in seconds for<br>66% of 5kg<br><!-- End of picture text -->









20 

User Manual 

UR5e 

2. Your Robot 



Stopping time in seconds for maximum payload of 5kg 



<!-- Start of picture text -->
Joint 1<br>(SHOULDER)<br>Stopping<br>distance in<br>meters for 33%<br>of 5kg<br>Stopping<br>distance in<br>meters for<br>66% of 5kg<br>Stopping<br>distance in<br>meters for<br>maximum<br>payload of 5kg<br><!-- End of picture text -->









21 

UR5e 

User Manual 

2. Your Robot 





<!-- Start of picture text -->
Joint 1<br>(SHOULDER)<br>Stopping time in<br>seconds for 33%<br>of 5kg<br>Stopping time<br>in seconds for<br>66% of 5kg<br>Stopping time<br>in seconds for<br>maximum<br>payload of 5kg<br>Joint 2<br>(ELBOW)<br>Stopping<br>distance in<br>meters for<br>33% of 5kg<br><!-- End of picture text -->









22 

User Manual 

UR5e 

2. Your Robot 





<!-- Start of picture text -->
Stopping<br>distance in<br>meters for<br>66% of 5kg<br>Stopping<br>distance in<br>meters<br>maximum<br>payload of 5kg<br>Joint 2<br>(ELBOW)<br>Stopping time<br>in seconds for<br>33% of 5kg<br>Stopping time<br>in seconds for<br>66% of 5kg<br><!-- End of picture text -->









23 

UR5e 

User Manual 

2. Your Robot 



Stopping time in seconds for maximum payload of 5kg 



24 

User Manual 

UR5e 

2. Your Robot 



25 

UR5e 

User Manual 



### 2.4. PolyScope Overview 

Description PolyScope is the Graphical User Interface (GUI) on the Teach Pendant that operates the robot arm via a touch screen. You create, load and execute programs for the robot in PolyScope. The PolyScope interface is divided as shown in the following illustration: 

- A: Header with icons/tabs that make interactive screens available to you. 

- B: Footer with buttons that control your loaded program/s. 

- C: Screen with fields and options to manage and monitor robot actions. 



###### Using the The touch sensitivity is designed to avoid false selections on PolyScope, and to prevent Touch unexpected motion of the robot. Screen 

The Teach Pendant touch screen is optimized for use in industrial environments. Unlike consumer electronics, Teach Pendant touch screen sensitivity is, by design, more resistant to environmental factors such as: 

- water droplets and/or machine coolant droplets 

- radio wave emissions 

- other conducted noise from the operating environment. 

For best results, use the tip of your finger to make a selection on the screen. In this manual, this is referred to as a "tap". 

A commercially available stylus may be used to make selections on the screen if desired. 

26 

User Manual 

UR5e 



#### 2.4.1. Icons/Tabs On PolyScope 

Description The following section lists and defines the icons/tabs and buttons in the PolyScope interface. 

Header Icons / Functions Run is a simple means of operating the robot using pre-written programs. Program creates and/or modifies robot programs. Installation configures robot arm settings and external equipment e.g. mounting and safety. Move controls and/or regulates robot movement. I/O monitors and sets live Input/Output signals to and from robot control box. Log indicates robot health as well as any warning or error messages. Program and Installation Manager selects and displays active program and installation. The Program and Installation Manager includes: File Path, New, Open and Save. New... creates a new Program or Installation. Open... opens a previously created and saved Program or Installation. Save... saves a Program, Installation or both at the same time. 

Operational modes Automatic indicates the operational mode of the robot is set to Automatic. Tap it to switch to the Manual operational mode. 

Manual indicates the operational mode of the robot is set to Manual. Tap it to switch to the Automatic operational mode. 

Remote The Local mode and Remote mode icons only become accessible if you enable Remote Control Control. 

27 

UR5e 

User Manual 





Local indicates the robot can be controlled locally. Tap it to switch to Remote control. 

Remote indicates the robot can be controlled from a remote location. Tap it to switch to Local control. 



Safety Checksum displays the active safety configuration. 



Hamburger Menu accesses PolyScope Help, About and Settings. 

Footer Icons / Functions 



Initialize manages robot state. When RED, press it to make the robot operational. 

Speed Slider shows in real time the relative speed at which the robot arm moves, taking safety settings into account. 

Simulation button toggles a program execution between Simulation Mode and the Real Robot. When running in Simulation Mode, the Robot Arm does not move. Therefore, the robot cannot damage itself or nearby equipment in a collision. If you are unsure what the Robot Arm will do, use Simulation Mode to test 

programs. 







Play starts current loaded robot Program. 

Step allows a Program to be run single-stepped. 

Stop halts current loaded robot Program. 

High Speed High Speed Manual Mode is a hold-to-run function, only available in Manual mode when a Manual Three-Position Enabling Device is configured. Mode 

High Speed Manual Mode allows both tool speed and elbow speed to temporarily exceed 250mm/s. 

28 

User Manual 

UR5e 

3. Safety 



## 3. Safety 

Description 

Review the content here to understand the key safety guidelines, including important safety messages and your responsibilities when working with the robot. Note that system design and installation are not covered here. 

### 3.1. General 

###### Description 

Read the general safety information and the instructions and guidance pertaining to the risk assessment and intended use provided. Give particular attention to text accompanied by warning symbols. Subsequent sections describe and define safetyrelated functions particularly relevant for collaborative applications. 

Read and understand the specific engineering data relevant to mounting and installation, in order to understand the integration of UR robots before the robot is powered on for the first time. 

It is essential to observe and follow all assembly instructions in the following sections of this manual. 

###### NOTICE 

Universal Robots disclaims any and all liability if the robot (arm Control Box with or without Teach Pendant) is damaged, changed or modified in any way. Universal Robots cannot be held responsible for any damages caused to the robot or any other equipment due to programming errors, unauthorized access to the UR robot and its contents, or malfunctioning of the robot. 

29 

UR5e 

User Manual 

3. Safety 



### 3.2. Safety Message Types 

Description Safety messages are used to emphasize important information. Read all the messages to help ensure safety and to prevent injury to personnel and product damage. The safety message types are defined below. 

###### WARNING 

Indicates a hazardous situation that, if not avoided, can result in death or serious injury. 

###### WARNING: ELECTRICITY 

Indicates a hazardous electrical situation that, if not avoided, can result in death or serious injury. 

###### WARNING: HOT SURFACE 

Indicates a hazardous hot surface where injury can result from contact and non-contact proximity. 

###### CAUTION 

Indicates a hazardous situation that, if not avoided, can result in injury. 

###### GROUND 

Indicates grounding. 

###### PROTECTIVE GROUND 

Indicates protective grounding. 

###### NOTICE 

Indicates the risk of damage to equipment and/or information to be noted. 

###### READ MANUAL 

Indicates more detailed information that should be consulted in the manual. 

30 

User Manual 

UR5e 

3. Safety 



### 3.3. General Warnings and Cautions 

Description The following warnings messages can be repeated, explained or detailed in subsequent sections. 

###### WARNING 

Failure to adhere to the general safety practices, listed below, can result in injury or death. 

- Verify the robot arm and tool/end effector are properly and securely bolted in place. 

- Verify the robot application has ample space to operate freely. 

- Verify the personnel are protected during the lifetime of the robot application including transport, installation, commissioning, programming/ teaching, operation and use, dismantling and disposing. 

- Verify robot safety configuration parameters are set to protect personnel, including those who can be within reach of the robot application. 

- Avoid using the robot if it is damaged. 

- Avoid wearing loose clothing or jewelry when working with the robot. Tie back long hair. 

- Avoid placing any fingers behind the internal cover of the Control Box. 

- Inform users of any hazardous situations and the protection that is provided, explain any limitations of the protection and the residual risks. 

- Inform users of the location of the emergency stop button(s) and how to activate the emergency stop in case of an emergency or an abnormal situation. 

- Warn people to keep outside the reach of the robot, including when the robot application is about to start-up. 

- Be aware of robot orientation to understand the direction of movement when using the Teach Pendant. 

- Adhere to the requirements and guidance in ISO 10218-2. 

###### WARNING 

Handling tools/end effectors with sharp edges and/or pinch points can result in injury. 

- Make sure tools/end effectors have no sharp edges or pinch points. 

- Protective gloves and/or protective eyeglasses could be required. 

31 

UR5e 

User Manual 

3. Safety 



###### WARNING: HOT SURFACE 

Prolonged contact with the heat generated by the robot arm and the Control Box, during operation, can lead to discomfort resulting in injury. 

- Do not handle or touch the robot while in operation or immediately after operation. 

- Check the temperature on the log screen before handling or touching the robot. 

- Allow the robot to cool down by powering it off and waiting one hour. 

###### CAUTION 

Failure to perform a risk assessment prior to integration and operation can increase risk of injury. 

- Perform a risk assessment and reduce risks prior to operation. 

- If determined by the risk assessment, do not enter the range of the robot movement or touch the robot application during operation. Install safeguarding. 

- Read the risk assessment information. 

###### CAUTION 

Using the robot with untested external machinery, or in an untested application, can increase the risk of injury to personnel. 

- Test all functions and the robot program separately. 

- Read the commissioning information. 

###### NOTICE 

Very strong magnetic fields can damage the robot. 

- Do not expose the robot to permanent magnetic fields. 

###### READ MANUAL 

Verify all mechanical and electrical equipment is installed according to relevant specifications and warnings. 

32 

User Manual 

UR5e 

3. Safety 



### 3.4. Integration and Responsibility 

###### Description 

The information in this manual does not cover designing, installing, integrating and operating a robot application, nor does it cover all peripheral equipment that can influence the safety of the robot application. The robot application must be designed and installed in accordance with the safety requirements set forth in the relevant standards and regulations of the country where the robot is installed. 

The person/s integrating the UR robot are responsible for ensuring that the applicable regulations in the country concerned are observed and that any risks in the robot application are adequately reduced. This includes, but is not limited to: 

- Performing a risk assessment for the complete robot system 

- Interfacing other machines and additional safeguarding if required by the risk assessment 

- Setting the correct safety settings in the software 

- Ensuring safety measures are not modified 

- Validating the robot application is designed, and installed and integrated 

- Specifying instructions for use 

- Marking the robot installation with relevant signs and contact information of the integrator 

- Retaining all documentation; including the application risk assessment, this manual and additional relevant documentation. 

### 3.5. Stop Categories 

Description Depending on the circumstances, the robot can initiate three types of stop categories defined according to IEC 60204-1. These categories are defined in the following table. 

|Stop<br>Category|Description|
|---|---|
|0|Stopthe robot byimmediate removal ofpower.|
|1|Stop the robot in an orderly, controlled manner. Power is removed once<br>the robot is stopped.|
|2|*Stop the robot with power available to the drives, while maintaining the<br>trajectory. Drive power is maintained after the robot is stopped.|



*Universal Robots robots’ Category 2 stops are further described as SS1 or as SS2 type stops according to IEC 61800-5-2. 

33 

UR5e 

User Manual 

4. Risk Assessment 



## 4. Risk Assessment 

Description The risk assessment is a requirement that shall be performed for the application. The application risk assessment is the responsibility of the integrator. The user can also be the integrator. 

The robot is partly completed machinery, as such the safety of the robot application depends on the tool/end effector, obstacles and other machines. The party performing the integration must use ISO 12100 and ISO 10218-2 to conduct the risk assessment. Technical Specification ISO/TS 15066 can provide additional guidance for collaborative applications. The risk assessment shall consider all tasks throughout the lifetime of the robot application, including but not limited to: 

- Teaching the robot during set-up and development of the robot application 

- Troubleshooting and maintenance 

- Normal operation of the robot application 

A risk assessment must be conducted before the robot application is powered on for the first time. The risk assessment is an iterative process. After physically installing the robot, verify the connections, then complete the integration. A part of the risk assessment is to determine the safety configuration settings, as well as the need for additional emergency stops and/or other protective measures required for the specific robot application. 

34 

User Manual 

UR5e 

4. Risk Assessment 



###### Safety configuration settings 

Identifying the correct safety configuration settings is a particularly important part of developing robot applications. Unauthorized access to the safety configuration must be prevented by enabling and setting password protection. 

###### WARNING 

Failure to set password protection can result in injury or death due to purposeful or inadvertent changes to configuration settings. 

- Always set password protection. 

- Set up a program for managing passwords, so that access is only by persons who understand the effect of changes. 

Some safety functions are purposely designed for collaborative robot applications. These are configurable through the safety configuration settings. They are used to address risks identified in the application risk assessment. 

The following limit the robot and as such can affect the energy transfer to a person by the robot arm, end effector and workpiece. 

- Force and power limiting : Used to reduce clamping forces and pressures exerted by the robot in the direction of movement in case of collisions between the robot and the operator. 

- Momentum limiting : Used to reduce high transient energy and impact forces in case of collisions between robot and operator by reducing the speed of the robot. 

- Speed limitation : Used to ensure the speed is less that the configured limit. 

The following orientation settings are used to avoid movements and reduce exposure of sharp edges and protrusions to a person. 

- Joint, elbow and tool/end effector position limiting : Used to reduce risks associated with certain body parts: Avoid movement towards head and neck. 

- Tool/end effector orientation limiting : Used to reduce risks associated with certain areas and features of the tool/end effector and work-piece: Avoid sharp edges being pointed towards the operator, by turning the sharp edges inward towards the robot. 

Stopping Some safety functions are purposely designed for any robot application. These features performance are configurable through the safety configuration settings. They are used to address risks risks associated with the stopping performance of the robot application. 

The following limit the robot stopping time and stopping distance to ensure stopping will occur before reaching the configured limits. Both settings automatically affect the speed of the robot to ensure the limit is not exceeded. 

- Stopping Time Limit : Used to limit the stopping time of the robot. 

- Stopping Distance Limit : Used to limit the stopping distance of the robot. 

If either of the above is used, there is no need for manually performed periodic stopping performance testing. The robot safety control does continuous monitoring. 

35 

UR5e 

User Manual 

4. Risk Assessment 



If the robot is installed in a robot application where hazards cannot be reasonably eliminated or risks cannot be sufficiently reduced by use of the built-in safety-related functions (e.g. when using a hazardous tool/end effector,or hazardous process), then safeguarding is required. See ISO 10218-2. 

###### WARNING 

Failure to conduct a application risk assessment can increase risks. 

- Always conduct an application risk assessment for foreseeable risks and reasonably foreseeable misuse. 

For collaborative applications, the risk assessment includes the foreseeable risks due to collisions and to reasonably foreseeable misuse. 

The risk assessment shall address: 

- Severity of harm 

- Likelihood of occurrence 

- Possibility to avoid the hazardous situation 

###### Potential Hazards 

Universal Robots identifies the potential significant hazards listed below for consideration by the integrator. Other significant hazards can be associated with a specific robot application. 

- Penetration of skin by sharp edges and sharp points on tool/end effector or tool/end effector connector. 

- Penetration of skin by sharp edges and sharp points on nearby obstacles. 

- Bruising due to contact. 

- Sprain or bone fracture due to impact. 

- Consequences due to loose bolts that hold the robot arm or tool/end effector. 

- Items falling out of, or flying from the tool/end effector, e.g. due to a poor grip or power interruption. 

- Mistaken understanding of what is controlled by multiple emergency stop buttons. 

- Incorrect setting of the safety configuration parameters. 

- Incorrect settings due to unauthorized changes to the safety configuration parameters. 

### 4.1. Pinch Hazard 

36 

User Manual 

UR5e 

4. Risk Assessment 



###### Description 

You can avoid pinching hazards by removing obstacles in these areas, by placing the robot differently, or by using a combination of safety planes and joint limits to eliminate the hazards by preventing the robot moving into this area of its workspace. 

###### CAUTION 

Placing the robot in certain areas can create pinching hazards that can lead to injury. 



Due to the physical properties of the robot arm, certain workspace areas require attention regarding pinching hazards. One area (left) is defined for radial motions when the wrist 1 joint is at least 750 mm from the base of the robot. The other area (right) is within 200 mm of the base of the robot, when moving tangentially. 

37 

UR5e 

User Manual 

5. Lifting and Handling 



## 5. Lifting and Handling 

Description The robot arms come in different sizes and weights, so it is important to use the appropriate lifting and handling techniques for each model. Here you can find information on how to safely lift and handle the robot. 

### 5.1. Control Box and Teach Pendant 

Description The Control Box and the Teach Pendant can each be carried by one person. While in use, all cables are to be coiled and held to prevent tripping hazards. 

### 5.2. Robot Arm 

Description The robot arm, depending upon weight, can be carried by one or two people unless the sling is provided. If the sling is provided, equipment for lifting and transport is required. 

38 

User Manual 

UR5e 

6. Assembly 



###### WARNING 

Failure to secure the robot arm to a sturdy surface can lead to injury caused by the robot falling. 

- Ensure the robot arm is secured to a sturdy surface 

39 

UR5e 

User Manual 

6. Assembly 



### 6.1. Workspace and Operating Space 

Description The workspace is the range of the fully extended robot arm, horizontally and vertically. The operating space is the location where the robot is expected to function. 

###### NOTICE 

Disregard for the robot workspace and operating space can result in the damage to property. 

- Consider the information below when choosing the operating space for the robot. 

###### NOTICE 

Moving the tool close to the cylindrical volume can cause the joints to move too fast, leading to loss of functionality and damage to property. 

- Do not move the tool close to the cylindrical volume, even when the tool is moving slowly. 

Workspace The cylindrical volume is both directly above and directly below the robot base. The robot extends 850 mm from the base joint. 







<!-- Start of picture text -->
Front Tilted<br><!-- End of picture text -->

40 

User Manual 

UR5e 

6. Assembly 



### 6.2. Dimensioning the Stand 

Dimensioning the Stand 

The structure (stand) on which the robot arm is mounted is a crucial part of the robot installation. The stand must be sturdy and free of any vibrations from external sources. 

Each robot joint produces a torque that moves and stops the robot arm. During normal uninterrupted operation and during stopping motion, the joint torques are transferred to the robot stand as: 

- Mz: Torque around the base z axis. 

- Fz: Forces along base z axis. 

- Mxy: Tilting torque in any direction of the base xy plane. 

- Fxy: Force in any direction in the base xy plane. 



Definition of force and moment at the base flange. 

41 

UR5e 

User Manual 

6. Assembly 



Dimensionin g the Stand 

The magnitude of the loads depends on robot model, program and multiple other factors. Dimensioning of the stand shall account for the loads that the robot arm generates during normal uninterrupted operation and during category 0, 1 and 2 stopping motion. 

During stopping motion, the joints are allowed to exceed the maximum nominal operating torque. The load during stopping motion is independent of the stop category type. The values stated in the following tables are maximum nominal loads in worst-case movements multiplied with a safety factor of 2.5. The actual loads will not exceed these values. 

|Robot Model|Mz [Nm]|Fz[N]|Mxy[Nm]|Fxy [N]|
|---|---|---|---|---|
|UR5e|450|1090|750|910|
||Maximum joint torque|s during categ|ory 0, 1 and 2 stops.||
|Robot Model|Mz [Nm]|Fz[N]|Mxy[Nm]|Fxy [N]|
|UR5e|380|950|630|750|



Maximum joint torques during normal operation. 

The normal operating loads can generally be reduced by lowering the acceleration limits of the joints. Actual operating loads are dependent on the application and robot program. You can use URSim to evaluate the expected loads in your specific application. 

42 

User Manual 

UR5e 

6. Assembly 



###### Dimensioning the Stand 

Users have the option to incorporate added safety margins, factoring in the following design considerations: 

- Static stiffness : A stand that is not sufficiently stiff will deflect during robot motion, resulting in the robot arm not hitting the intended waypoint or path. Lack of static stiffness can also result in a poor freedrive teaching experience or protective stops. 

- Dynamic stiffness : If the eigenfrequency of the stand matches the movement frequency of the robot arm, the entire system can resonate, creating the impression that the robot arm is vibrating. Lack of dynamic stiffness can also result in protective stops. The stand should have a minimum resonance frequency of 45 Hz. 

- Fatigue : The stand shall be dimensioned to match the expected operating lifetime and load cycles of the complete system. 

###### CAUTION 

- If the robot is mounted on an external axis, the accelerations of this axis must not be too high. You can let the robot software compensate for the acceleration of external axes by using the script command set_base_acceleration() 

- High accelerations might cause the robot to make safety stops. 

###### WARNING 

- Potential for tip-over Hazards. 

- The robot arm's operational loads may cause movable platforms, such as tables or mobile robots, to tip over, resulting in possible accidents. 

- Prioritize safety by implementing adequate measures to prevent the tipping of movable platforms at all times. 

###### Warning: IP rating 

###### CAUTION 

Mounting and operating the robot in environments exceeding the recommended IP rating can result in injury. 

- Mount the robot in an environment suited to the IP rating. The robot must not be operated in environments that exceed those corresponding to the IP ratings of the robot (IP54), Teach Pendant (IP54) and Control Box (IP44) 

###### Warning: Mounting 

###### WARNING 

Unstable mounting can lead to accidents. 

- Always make sure the robot parts are properly and securely mounted and bolted in place. 

#### 6.3.1. Singularity Prevention 

Description A singularity is a pose that restricts the motion and the ability to position the robot. The robot arm can stop moving or have very sudden and fast movements if it approaches a singularity. As the robot arm approaches a singularity position, resistance increases making it feel heavy to position. 

###### WARNING 

Singularity can cause injury to a person within reach of motion of the robot arm, end effector and workpiece. 

- Avoid programming motions that result in any poses that can cause a singularity. 



44 

User Manual 

UR5e 

6. Assembly 



###### To power down the robot arm 



<!-- Start of picture text -->
WARNING<br><!-- End of picture text -->

Unexpected start-up and/or movement can lead to injury 

   - Power down the robot arm to prevent unexpected start-up during mounting and dismounting. 

1. Press the power button on the Teach Pendant to turn off the robot. 

2. Unplug the mains cable / power cord from the wall socket. 

3. Allow 30 seconds for the robot to discharge any stored energy. 

### 6.5. Control Box Clearance 

Description The flow of hot air in the Control Box can result in equipment malfunction. The Control Box requires a minimum clearance of 50 mm on each side for sufficient cool airflow. The recommended Control Box clearance is 200 mm. 



###### WARNING 

A wet Control Box can cause fatal injury. 

- Make sure the Control Box and cables do not come into contact with liquids. 

- Place the Control Box (IP44) in an environment suited for the IP rating. 

48 

User Manual 

UR5e 

6. Assembly 



### 6.6. Robot Connections: Base Flange Cable 

Description 

This subsection describes the connection for a robot arm configured with a Base Flange Cable connector. 

###### CAUTION 

The maximum robot connection from the robot arm to the Control Box is 6 m. Improper robot connection can result in loss of power to the robot arm. 

- Do not extend a 6 m Robot Cable. 

###### NOTICE 

Connecting the Base Flange Cable directly to any Control Box can result in equipment or property damage. 

- Do not connect the Base Flange Cable directly to the Control Box. 

### 6.7. Robot Connections: Robot Cable 

Description This subsection describes the connection for a robot arm configured with a fixed 6 meter Robot Cable. 

49 

UR5e 

User Manual 

6. Assembly 



###### CAUTION 

Improper robot connection can result in loss of power to the robot arm. 

- Do not disconnect the Robot Cable when the robot arm is turned on. 

- Do not extend or modify the original Robot Cable. 

50 

User Manual 

UR5e 

6. Assembly 



### 6.8. Mains Connections 

###### NOTICE 

- IEC 61000-6-4:Chapter 1 scope: “This part of IEC 61000 for emission requirement applies to electrical and electronic equipment intended for use within the environment of existing at industrial (see 3.1.12) locations.” 

- IEC 61000-6-4:Chapter 3.1.12 industrial location: “Locations characterized by a separate power network, supplied from a high- or medium-voltage transformer, dedicated for the supply of the installation” 

###### NOTICE 

Always use a power cord with a country specific wall plug when connecting to the Control Box. Do not use an adapter. 

As a part of the electrical installation, provide the following: 

- Connection to ground 

- Main fuse 

- Residual current device 

- A lockable (in the OFF position) switch 

A main switch shall be installed to power off all equipment in the robot application as an easy means for lockout. The electrical specifications are shown in the table below. 

|Parameter|Min|Typ|Max|Unit|
|---|---|---|---|---|
|Input voltage|90|-|264|VAC|
|External mains fuse (90-200V)|8|-|16|A|
|External mains fuse (200-264V)|8|-|16|A|
|Input frequency|47|-|440|Hz|
|Stand-by power|-|-|<1.5|W|
|Nominal operating power|90|150|325|W|



51 

UR5e 

User Manual 

6. Assembly 



###### WARNING: ELECTRICITY 

Failure to follow any of the below can result in serious injury or death due to electrical hazards. 

- Ensure the robot is grounded correctly (electrical connection to ground). Use the unused bolts associated with grounding symbols inside the Control Box to create common grounding of all equipment in the system. The grounding conductor shall have at least the current rating of the highest current in the system. 

- Ensure the input power to the Control Box is protected with a Residual Current Device (RCD) and a correct fuse. 

- Lockout all power for the complete robot installation during service. 

- Ensure other equipment shall not supply power to the robot I/O when the robot is locked out. 

- Ensure all cables are connected correctly before the Control Box is powered. Always use the original power cord. 

52 

User Manual 

UR5e 

7. First Boot 



###### CAUTION 

Failure to verify the payload and installation before starting up the robot arm can lead to injury to personnel and/or property damage. 

- Always verify the actual payload and installation are correct before starting up the robot arm. 

###### CAUTION 

Incorrect payload and installation settings prevent the robot arm and Control Box functioning correctly. 

- Always verify the payload and installation setting are correct. 

###### NOTICE 

Verify the robot arm has ample space to operate freely. 

###### NOTICE 

Starting up the robot in lower temperatures can result in lower performance, or stops, due to temperature dependent oil and grease viscosity. 

- Starting up the robot in low temperatures can require a warm-up phase. 

53 

UR5e 

User Manual 

7. First Boot 



###### To start the robot 

1. Tap the ON button with the green LED to start the initialization process. Then, the LED turns yellow to indicate the power is on and in Idle . 

2. Tap the START button to release the breaks. 

3. Tap the OFF button with the red LED to power off the robot arm. 

- When the PolyScope starts, tap the ON button once to power the robot arm. Then, the status changes to yellow to indicate the robot is on and idle. 

- When the robot arm state is Idle , tap the START button to start robot arm. At this point, sensor data is checked against the configured mounting of the robot arm. 

   - If a mismatch is found (with a tolerance of 30<sup>∘</sup> ), the button is disabled and an error message is displayed below it. 

- If the mounting is verified, tap Start to release all joint brakes and the robot arm is ready for normal operation. 

Robot arm start up is accompanied by sound and slight movements as joint brakes are released. 

Turning the control box on/off 

The Control Box mainly contains the physical electrical Input/Output that connects the robot arm, the Teach Pendant and any peripherals. You must turn on the Control Box to be able to power on the robot arm. 

1. On your Teach Pendant, press the power button to turn on the control box. 

2. Wait as text from the underlying operating system, followed by buttons, appear on the screen. 

3. A Getting Started screen can appear, prompting you to begin programming the robot. 



###### To power down the robot arm 

###### WARNING 

Unexpected start-up and/or movement can lead to injury 

   - Power down the robot arm to prevent unexpected start-up during mounting and dismounting. 

1. Press the power button on the Teach Pendant to turn off the robot. 

2. Unplug the mains cable / power cord from the wall socket. 

3. Allow 30 seconds for the robot to discharge any stored energy. 

UR5e 

55 

User Manual 



### 7.1. Freedrive 

###### Description 

Freedrive allows the robot arm to be manually pulled into desired positions and/or poses. 

The joints move with little resistance because the brakes are released. While the robot arm is being moved manually, it is in Freedrive. 

As the robot arm in Freedrive approaches a predefined limit or plane (see Software Safety Restrictions), resistance increases. This makes pulling the robot into position feel heavy. 

###### WARNING 

Injury to personnel can occur due to unexpected motion. 

- Verify the configured payload is the payload being used. 

- Verify the correct payload is securely attached to the tool flange. 

###### Enabling Freedrive 

You can enable Freedrive in the following ways: 

- Use the 3PE Teach Pendant. 

- Use the Freedrive on robot. 

- Use I/O Actions. 

###### NOTICE 

Enabling Freedrive while you are moving the robot arm, can cause it to drift leading to faults. 

- Do not enable Freedrive while you are pushing or touching the robot. 

###### 3PE Teach 

###### Pendant 

To use the 3PE TP button to freedrive the robot arm: 

1. Rapidly light-press, release, light-press again and keep holding the 3PE button in this position. 

Now you can pull the robot arm into a desired position, while the light-press is maintained. 

56 

User Manual 

UR5e 



Freedrive on robot 

To use Freedrive on robot to freedrive the robot arm: 

1. Press-and-hold the button of switch configured for Freedrive on robot . 

2. When the Freedrive panel appears in PolyScope, select the desired movement type for the robot arm’s joints. Or use the list of axes to customize the movement type. 

3. You can define the type of feature if required, by selecting an option from the Feature dropdown list. 

The robot arm can stop moving if it approaches a singularity scenario. Tap All axes are free in the Freedrive panel to resume movement. 

4. Move the robot arm as desired. 

###### Backdrive 

During initialization of the robot arm, minor vibrations may be observed when the robot brakes are released. In some situations, such as when the robot is close to collision, these vibrations are undesirable. Use Backdrive to force specific joints to a desired position without releasing all brakes in the robot arm. 

UR5e 

57 

User Manual 



#### 7.1.1. Freedrive Panel 

Description When the robot arm is in Freedrive, a panel appears on PolyScope, as illustrated below. 



58 

User Manual 

UR5e 



###### LED Freedrive panel 

The LED on the status bar of the Freedrive panel indicates: 

- When one or more joints are approaching their joint limits. 

- When the robot arm’s positioning is approaching singularity. Resistance increases as the robot approaches singularity, making it feel heavy to position. 



Icons You can lock one or more of the axes allowing the TCP to move in a particular direction, as defined in the table below. 

||Movement is allowed through all axes.|
|---|---|
|All axes are free||
|Plane|Movement is only allowed through the X-axis and<br>Y-axis.|
|Translation|Movement is allowed through all axes, without<br>rotation.|
|Rotation|Movement is allowed through all axes, in a<br>spherical motion, around the TCP.|



###### CAUTION 

Moving the robot arm in some axes when a tool is attached, can present a pinch point. 

- Use caution when moving the robot arm in any axis. 

59 

UR5e 

User Manual 

8. Installation 



### 8.1. Electrical Warnings and Cautions 

Warnings Observe the following warnings for all the interface groups, including when you design and install an application. 

###### WARNING 

Failure to follow any of the below can result in serious injury or death, as the safety functions could be overridden. 

- Never connect safety signals to a PLC that is not a safety PLC with the correct safety level. It is important to keep safety interface signals separated from the normal I/O interface signals. 

- All safety-related signals shall be constructed redundantly (two independent channels). 

- Keep the two independent channels separate so a single fault cannot lead to loss of the safety function. 

###### WARNING: ELECTRICITY 

Failure to follow any of the below can result in serious injury or death due to electrical hazards. 

- Make sure all equipment not rated for water exposure remain dry. If water is allowed to enter the product, lockout-tagout all power and then contact your local Universal Robots service provider for assistance. 

- Only use the original cables supplied with the robot only. Do not use the robot for applications where the cables are subject to flexing. 

- Use caution when installing interface cables to the robot I/O. The metal plate in the bottom is intended for interface cables and connectors. Remove the plate before drilling holes. Make sure that all shavings are removed before reinstalling the plate. Remember to use correct gland sizes. 

60 

User Manual 

UR5e 

8. Installation 



###### CAUTION 

Disturbing signals with levels higher than those defined in the specific IEC standards can cause unexpected behaviors from the robot. Be aware of the following: 

- The robot has been tested according to international IEC standards for ElectroMagnetic Compatibility (EMC) . Very high signal levels or excessive exposure can damage the robot permanently. EMC problems are found to happen usually in welding processes and are normally prompted by error messages in the log. Universal Robots cannot be held responsible for any damages caused by EMC problems. 

- I/O cables going from the Control Box to other machinery and factory equipment may not be longer than 30m, unless additional tests are performed. 

###### GROUND 

Negative connections are referred to as Ground (GND) and are connected to the casing of the robot and the Control Box. All mentioned GND connections are only for powering and signalling. For PE (Protective Earth) use the M6-size screw connections marked with earth symbols inside the Control Box. The grounding conductor shall have at least the current rating of the highest current in the system. 

###### READ MANUAL 

Some I/Os inside the Control Box can be configured for either normal or safetyrelated I/O. Read and understand the complete Electrical Interface chapter. 

61 

UR5e 

User Manual 

8. Installation 



### 8.2. Safety I/O 

Safety I/O This section describes dedicated safety input (Yellow terminal with red text) and configurable I/O (Yellow terminals with black text) when configured as safety I/O. 

Safety devices and equipment must be installed according to the safety instructions and the risk assessment in chapter Safety. 

All safety I/O are paired (redundant), so a single fault does not cause loss of the safety function. However, the safety I/O must be kept as two separate branches. 

The permanent safety input types are: 

- Robot Emergency Stop for emergency stop equipment only 

- Safeguard Stop for protective devices 

- 3PE Stop for protective devices 

###### Table 

The functional difference is shown below. 

||Emergency<br>Stop|Safeguard Stop|3PE Stop|
|---|---|---|---|
|Robot stops moving|Yes|Yes|Yes|
|Program execution|Pauses|Pauses|Pauses|
|Drive power|Off|On|On|
|Reset|Manual|Automatic or<br>manual|Automatic or<br>manual|
|Frequency of use|Infrequent|Every cycle to<br>infrequent|Every cycle to<br>infrequent|
|Requires re-initialization|Brake release<br>only|No|No|
|Stop Category (IEC 60204-1)|1|2|2|
|Performance level of monitoring<br>function (ISO 13849-1)|PLd|PLd|PLd|



Safety Use the configurable I/O to set up additional safety I/O functionality, e.g. Emergency Stop caution Output. Configuring a set of configurable I/O for safety functions are done through the GUI, (see part Part II PolyScope Manual). 

###### CAUTION 

Failure to verify and test the safety functions regularly can lead to hazardous situations. 

- Safety functions shall be verified before putting the robot into operation. 

- Safety functions shall be tested regularly. 

62 

User Manual 

UR5e 

8. Installation 



###### OSSD signals 

All configured and permanent safety inputs are filtered to allow the use of OSSD safety equipment with pulse lengths under 3ms. The safety input is sampled every millisecond and the state of the input is determined by the most frequently seen input signal over the last 7 milliseconds. 

OSSD Safety Signals 

You can configure the Control Box to output OSSD pulses when a safety output is inactive/high. OSSD pulses detect the ability of the Control Box to make safety outputs active/low. When OSSD pulses are enabled for an output, a 1ms low pulse is generated on the safety output once every 32ms. The safety system detects when an output is connected to a supply and shuts down the robot. 

The illustration below shows: the time between pulses on a channel (32ms), the pulse length (1ms) and the time from a pulse on one channel to a pulse on the other channel (18ms) 



###### Safeguard stop with automatic resume 

This configuration is only intended for applications where the operator cannot go through the door and close it behind him. The configurable I/O is used to setup a reset button outside the door to reactivate robot motion. The robot resumes movement automatically when the signal is re-established. 

###### WARNING 

Do not use this configuration if signal can be re-established from the inside of the safety perimeter. 



<!-- Start of picture text -->
Safety<br>24V<br>EI0<br>Safety<br>24V 24V 24V 0V<br>EI1 24VEI0 24V0V<br>24V EI1<br>SI0 24VSI0<br>24V 24V<br>SI1 SI1<br>This example illustrates a door switch This example illustrates a safety mat is a safety<br>is a basic safeguard device where the device where automatic resume is appropriate.<br>robot is stopped when the door is This example is also valid for a safety laser<br>opened. scanner.<br>Emergency Stop<br>Emergency Stop<br>Safeguard Stop<br>Safeguard Stop<br><!-- End of picture text -->

64 

User Manual 

UR5e 

8. Installation 



Safeguard Stop with reset button 

If the safeguard interface is used to interact with a light curtain, a reset outside the safety perimeter is required. The reset button must be a two channel type. In this example the I/O configured for reset is CI0-CI1 (see below). 



<!-- Start of picture text -->
Safety Configurable7Inputs<br>24V 24V 24V 24V 0V<br>EI0 CI0 CI4 24V<br>24V 24V 24V 0V<br>EI1 CI1 CI5<br>24V 24V 24V<br>SI0 CI2 CI6<br>24V 24V 24V<br>SI1 CI3 CI7<br>Emergency7Stop<br>Safeguard7Stop<br><!-- End of picture text -->

65 

UR5e 

User Manual 



#### 8.2.1. I/O Signals 

Description The I/O are divided between inputs and outputs and are paired up so that each function provides a Category 3 and PLd I/O. 



###### Input The following Safety Functions can be used with the input signals: Signals 

|System<br>Emergency<br>Stop|This is an emergency stop button alternative to the one on the Teach<br>Pendant, providing the same functionality if the device complies with<br>ISO 13850.|
|---|---|
|Reduced|All safety limits can be applied while the robot is using aNormal<br>configuration, or aReducedconfiguration (see Software Safety<br>Modes). When configured, a low signal sent to the inputs causes the<br>safety system to transition to the reduced configuration. The robot arm<br>decelerates to satisfy the reduced parameters.<br>The safety system guarantees the robot is within reduced limits less<br>than 0.5s after the input is triggered. If the robot arm continues to<br>violate any of the reduced limits, a Stop Category 0 is triggered. Trigger<br>planes can also cause a transition to the reduced configuration. The<br>safetysystem transitions to the normal configuration in the same way.|
|3-Position<br>Enabling<br>Device|In Manual Mode, an external 3-Position Enabling Device must be<br>pressed and held in the center-on position to move the robot. If you are<br>using a built-in 3-Position Enabling Device, the button must be pressed<br>and held in the midposition to move the robot.|
||You can configure the Freedrive input to enable and use Freedrive|
|Freedrive on<br>robot|without pressing the Freedrive button on a standard TP, or without<br>having to press-and-hold any of the buttons on the 3PE TP in the light-<br>press position.|



66 

User Manual 

UR5e 



###### Input Signals 

|Operational<br>Mode|When defined, this input can be used to switch betweenAutomatic<br>ModeandManual Mode.|
|---|---|
|Safeguard|When a Safeguard Stop occurs, this output ensures that the|
|Reset|Safeguard Stopstate continues until a reset is triggered.|
|Automatic<br>Mode<br>Safeguard<br>Stop|Once configured, anAutomatic Mode Safeguard Stopperforms a<br>Safeguard Stop when the input pins are low and ONLY when the<br>robot is in Automatic mode.|



###### WARNING 

- If you disable the default Safeguard Reset input, the Robot Arm is no longer Safeguard Stop stopped as soon as the input is high. A program paused only by the Safeguard stop resumes. 

- Similar to the Safeguard Reset, if the default Automatic Mode Safeguard Reset is disabled, the Robot Arm is no longer Safeguard Stop stopped once the Automatic Mode Safeguard Stop input is high. A program paused only by the Automatic Mode Safeguard Stop resumes. 

67 

UR5e 

User Manual 



###### Output Signals 

You can apply the following Safety functions for output signals. All signals return to low when the state which triggered the high signal has ended: 

|System<br>Emergency<br>Stop|Signal is Low when the safety system has been triggered into an<br>Emergency Stopped state by the Robot Emergency Stop input or the<br>Emergency Stop Button. To avoid deadlocks, if the Emergency<br>Stopped state is triggered by the System Emergency Stop input, low<br>signal will not begiven.|
|---|---|
|Robot Moving|Signal is Low if the robot is moving, otherwise high.|
|Robot Not<br>Stopping|Signal is High when the robot is stopped or in the process of stopping<br>due to an emergency stop or safeguard stop. Otherwise it will be logic<br>low.|
|Reduced|Signal is Low when the robot arm uses reduced parameters or if the<br>safety input is configured with a reduced input and the signal is<br>currentlylow. Otherwise the signal is high.|
|Not Reduced|This is the inverse of Reduced, defined above.|
|Safe Home|Signal is High if the Robot Arm is stopped in the configured Safe<br>Home Position. Otherwise, the signal is Low.|



###### NOTICE 

Any external machinery receiving its Emergency Stop state from the robot through the System Emergency Stop output must comply with ISO 13850. This is particularly necessary in setups where the Robot Emergency Stop input is connected to an external Emergency Stop device. In such cases, the System Emergency Stop output becomes high when the external Emergency Stop device is released. This implies that the emergency stop state at the external machinery will be reset with no manual action needed from the robot’s operator. Hence, to comply with safety standards, the external machinery must require manual action in order to resume. 

68 

User Manual 

UR5e 



###### NOTICE 

When starting programs from an I/O or fieldbus input, the robot can begin movement from the position it has, there will not be any manual movement to the first waypoint via PolyScope required. 

###### I/O Actions and I/O Tab Control 

I/O Tab Control 

###### Available Input Actions 

You can use Physical and Fieldbus digital I/Os to trigger actions or react to the status of a program. 

Use I/O Tab Control to specify whether an output is controlled on the I/O tab (by either programmers, or both operators and programmers), or if it is controlled by the robot programs. 

|Command|Action|
|---|---|
|Start|Starts or resumes the current program on a rising edge (only enabled<br>in Remote Control, seeSettings)|
|Stop|Stops the currentprogram on a risingedge|
|Pause|Pauses the currentprogram on a risingedge|
|Freedrive|When the input is high, the robot goes into freedrive (similar to the<br>freedrive button).<br>The input is ignored if other conditions disallow freedrive.|



###### WARNING 

If the robot is stopped while using the Start input action, the robot slowly moves to the first waypoint of the program before executing that program. If the robot is paused while using the Start input action, the robot slowly moves to the position from where it was paused before resuming that program. 

70 

User Manual 

UR5e 



###### Available Output Actions 

|Action|Output<br>state|Program state|
|---|---|---|
|Low when not running|Low|Stopped or<br>paused|
|High when not running|High|Stopped or<br>paused|
|High when running, low when stopped|Low<br>High|Running,<br>Stopped or<br>paused|
|Low on unscheduled stop|Low|Program<br>terminated<br>unscheduled|
|Low on unscheduled stop, otherwise High|Low<br>High|Program<br>terminated<br>unscheduled<br>Running,<br>stopped or<br>paused|
|Continuous Pulse|Alternates<br>between<br>high and<br>low|Running<br>(pause or stop<br>the program to<br>maintain the<br>pulse state)|



###### Program Termination Cause 

An unscheduled program termination can occur for any of the reasons listed below: 

- Robot stop 

- Fault 

- Violation 

- Runtime exception 

71 

UR5e 

User Manual 



### 8.3. Control Box Connection Ports 

###### Description 

The underside of the I/O interface groups is equipped with external connection ports, as illustrated below. There are capped openings at the base of the Control Box cabinet to run external connector cables to access the ports. 

###### External connection ports 

The Mini Displayport supports monitors using Displayport. This requires an active Mini Display to DVI or HDMI converter. Passive converters do not work with DVI/HDMI ports. The Fuse must be a UL marked, Mini Blade type with maximum current rating: 10A and minimum voltage rating: 32V 



###### NOTICE 

Connecting or disconnecting a Teach Pendant while the Control Box is powered on can cause damage. 

   - Do not connect a Teach Pendant while the Control Box is on. 

- Power off the Control Box before you connect a Teach Pendant. 

- Do not connect or disconnect the Teach Pendant while Control Box is 

- powered on. This can cause damage to Control Box. 

###### NOTICE 

Failure to plug in the active adapter before powering on the Control Box can hinder the display output. 

- Plug in the active adapter before powering on the Control Box. 

- In some cases the external monitor must be powered on before the Control Box. 

- Use an active adapter that supports revision 1.2 as not all adapters function out-of-the-box. 

72 

User Manual 

UR5e 



#### 8.3.1. Ethernet 

###### Description 

The Ethernet interface can be used for: 

- MODBUS, EtherNet/IP and PROFINET. 

- Remote access and control. 

The electrical specifications are shown in the table below. 

|Parameter|Min|Typ<br>Max|Unit|
|---|---|---|---|
|Communication speed|10|-<br>1000|Mb/s|



73 

UR5e 

User Manual 



### 8.4. Controller I/O 

Description You can use the I/O inside the Control Box for a wide range of equipment including pneumatic relays, PLCs and emergency stop buttons. 

The illustration below shows the layout of electrical interface groups inside the Control Box. 



<!-- Start of picture text -->
Safety Remote Power Configurable Inputs Configurable Outputs Digital Inputs Digital Outputs Analog<br>24V 12V PWR 24V 24V 0V 0V 24V 24V 0V 0V AG<br>EI0 GND GND CI0 CI4 CO0 CO4 DI0 DI4 DO0 DO4 AI0<br>24V ON 24V 24V 24V 0V 0V 24V 24V 0V 0V AG<br>EI1 OFF 0V CI1 CI5 CO1 CO5 DI1 DI5 DO1 DO5 AI1<br>24V 24V 24V 0V 0V 24V 24V 0V 0V AG<br>SI0 CI2 CI6 CO2 CO6 DI2 DI6 DO2 DO6 AO0<br>24V 24V 24V 0V 0V 24V 24V 0V 0V AG<br>SI1 CI3 CI7 CO3 CO7 DI3 DI7 DO3 DO7 AO1<br>You can use the horizontal Digital Inputs block (DI8-DI11), illustrated below, for<br>quadrature encoding Conveyor Tracking.<br>Emergency Stop Analog Inputs<br>DI11 DI10 DI9 DI8 24V 0V<br>Safeguard Stop Analog Outputs<br><!-- End of picture text -->

The meaning of the color schemes listed below must be observed and maintained. 

|Yellow with red text|Dedicated safetysignals|
|---|---|
|Yellow with black text|Configurable for safety|
|Gray with black text|Generalpurpose digital I/O|
|Green with black text|General purpose analog I/O|



In the GUI, you can set up configurable I/O as either safety-related I/O or general purpose I/O . 

74 

User Manual 

UR5e 



###### Common specifications for all digital I/O 

This section defines electrical specifications for the following 24V digital I/O of the Control Box. 

- Safety I/O. 

- Configurable I/O. 

- General purpose I/O. 

###### NOTICE 

The word configurable is used for I/O configured as either safetyrelated I/O or normal I/O. These are the yellow terminals with black text. 

Install the robot according to the electrical specifications which are the same for all three inputs. 

It is possible to power the digital I/O from an internal 24V power supply or from an external power source by configuring the terminal block called Power . This block consists of four terminals. The upper two (PWR and GND) are 24V and ground from the internal 24V supply. The lower two terminals (24V and 0V) in the block are the 24V input to supply the I/O. The default configuration uses the internal power supply (see below). 

The electrical specifications for both the internal and external power supply are shown below. 

|Terminals|Parameter|Min|Typ|Max|Unit|
|---|---|---|---|---|---|
|Internal 24V power supply||||||
|[PWR - GND]|Voltage|23|24|25|V|
|[PWR - GND]|Current|0|-|2*|A|
|External 24V input requirements||||||
|[24V - 0V]|Voltage|20|24|29|V|
|[24V - 0V]|Current|0|-|6|A|



*3.5A for 500ms or 33% duty cycle. 

UR5e 

75 

User Manual 



###### Digital I/Os 

The digital I/O are constructed in compliance with IEC 61131-2. The electrical specifications are shown below. 

|Terminals|Parameter|Min|Typ|Max|Unit|
|---|---|---|---|---|---|
|Digital Outputs||||||
|[COx / DOx]|Current*|0|-|1|A|
|[COx / DOx]|Voltage drop|0|-|0.5|V|
|[COx / DOx]|Leakage current|0|-|0.1|mA|
|[COx / DOx]|Function|-|PNP|-|Type|
|[COx / DOx]|IEC 61131-2|-|1A|-|Type|
|Digital Inputs||||||
|[EIx/SIx/CIx/DIx]|Voltage|-3|-|30|V|
|[EIx/SIx/CIx/DIx]|OFF region|-3|-|5|V|
|[EIx/SIx/CIx/DIx]|ON region|11|-|30|V|
|[EIx/SIx/CIx/DIx]|Current (11-30V)|2|-|15|mA|
|[EIx/SIx/CIx/DIx]|Function|-|PNP +|-|Type|
|[EIx/SIx/CIx/DIx]|IEC 61131-2|-|3|-|Type|



*For resistive loads or inductive loads of maximum 1H. 

### 8.5. Teach Pendant with 3-Position Enabling Device 

Description Depending on the robot generation, your Teach Pendant can be with or without a 3- Position Enabling device (3PE). 

UR20 and UR30 robots have the built-in 3PE called a 3-Position Enabling Teach Pendant (3PE TP). The Teach Pendant without the 3PE will not work with the UR20 and UR30. 

The enabling buttons are on the underside of the Teach Pendant, as illustrated below. You can use either button, according to your preference. If the Teach Pendant is disconnected, an external 3PE device must be connected and configured. The 3PE TP functionality extends to the PolyScope interface, where there are additional functions in the Header. 

###### NOTICE 

The 3PE Teach Pendant is not included with the purchase of the OEM Control Box, so enabling device functionality is not provided. Using a UR20, or a UR30, requires an external enabling device or a 3PE Teach Pendant when programming, or teaching, within the reach of the robot application. See ISO 10218-2. 

76 

User Manual 

UR5e 



###### Overview of TP 

1. Power button 

2. Emergency Stop button 

3. USB port (comes with a dust cover) 

4. 3PE buttons 



###### Freedrive 

- A Freedrive robot symbol is located under each 3PE button, as illustrated below. 



UR5e 

77 

User Manual 



###### NOTICE 

Replacing the Teach Pendant can result in the system reporting a fault on start-up. 

- Always select the correct configuration for the type of Teach Pendant. 

There is always a length of cable with the Teach Pendant that can present a tripping hazard if it is not stored properly. 

- Always store the Teach Pendant and the cable properly to avoid tripping hazards. 

79 

UR5e 

User Manual 



8.5.2. 3PE Teach Pendant Button Functions 

80 

User Manual 

UR5e 



###### Description 

###### NOTICE 

The 3PE buttons are only active in Manual mode. In Automatic mode, robot movement does not require 3PE button action. 

The table below describes the functions of the 3PE buttons. 

|Posit|ion|Description|Action|
|---|---|---|---|
|1|Release|There is no pressure on<br>the 3PE button. It is not<br>pressed.|Robot movement is stopped in Manual<br>mode. Power is not removed from the<br>robot arm and the brakes remain<br>released.|
|2|Light-<br>press<br>(Grip<br>lightly)|There is some pressure<br>on the 3PE button. It is<br>pressed to a middle<br>point.|Allows your program to play when the<br>robot is in Manual mode.|
|3|Tight-<br>press<br>(Grip<br>tightly)|There is full pressure on<br>the 3PE button. It is<br>pressed all the way<br>down.|Robot movement is stopped in Manual<br>mode. Robot is in 3PE Stop.|





1 Button release 



2 Button press 

81 

UR5e 

User Manual 



#### 8.5.3. Using the 3PE Buttons 

Using the 3PE 

To play a program 

1. On PolyScope, ensure the robot is set to Manual mode , or switch to Manual mode . 

2. Maintain a light-press on the 3PE button. 

3. On PolyScope, tap Play to run the program. 

The program runs if the robot arm is in the first position of the program. If the robot is not in the first position of the program, the Move Robot into Position screen appears. 

To stop a program 

1. Release the 3PE button or, on PolyScope, tap Stop . 

To pause a program 

1. Release the 3PE button, or, in PolyScope, tap Pause . 

To continue the program execution, keep the 3PE button light pressed and tap Resume in PolyScope. 

##### **Freedrive with 3PE Buttons** 

Description Freedrive allows the robot arm to be manually pulled into desired positions and/or poses. 

To use the 3PE button to freedrive the robot arm 

1. Rapidly light-press, release, light-press again and keep holding the 3PE button in this position. 

Now you can pull the robot arm into a desired position, while the light-press is maintained. 

##### **Using Move Robot into Position** 

Description Move Robot into Position allows the robot arm to move to that start position, after you complete a program. The robot arm must be in the start position before you can run the program. 

82 

User Manual 

UR5e 



###### Move into position 

To use the 3PE button to move the robot arm into position: 

1. When your program is complete, press Play . 

2. Select Play from beginning . 

On PolyScope, the Move Robot into Position screen appears displaying robot arm movement. 

3. Light-press and hold the 3PE button. 

4. Now, on PolyScope, press and hold Automove for the robot arm to move to the start position. 

The Play Program screen appears. 

5. Maintain a light-press on the 3PE button to run your program. 

Release the 3PE button to stop your program. 

#### 8.5.4. Teach Pendant Storage 

Description 

The operator needs to have a clear understanding about what the e-Stop on the Teach Pendant affects when pressed. For example there can be confusion with a multi-robot installation. It should be made clear if the e-Stop on the Teach Pendant stops the whole installation or only its connected robot. 

If there could be confusion, store the Teach Pendant such that the e-Stop button is not visible or usable. 

83 

UR5e 

User Manual 



### 8.6. Three Position Enabling Device 

Description The robot arm is equipped with an enabling device in the form of the 3PE Teach Pendant. 

The Control Box supports the following enabling device configurations: 

- 3PE Teach Pendant 

- External Three-Position Enabling device 

- External Three-Position device and 3PE Teach Pendant 

Note: The two input channels for the Three-Position Enabling Device input have a disagreement tolerance of 1 second. 

###### NOTICE 

The UR robot safety system does not support multiple external ThreePosition Enabling Devices. 

###### Operational Using a Three-Position Enabling device requires the use of an Operational Mode switch. Mode Switch 

Description The end effector can also be referred to as the tool and the workpiece in this manual. 

#### 8.7.1. Tool I/O 

###### Tool 

###### Connector 

The tool connector illustrated below provides power and control signals for the grippers and sensors used on a specific robot tool. The tool connector has eight holes and is located next to the tool flange on Wrist 3. 

The eight wires inside the connector have different functions, as listed in the table: 



<!-- Start of picture text -->
Pin # Signal Description<br>1 AI3 / RS485- Analog in 3 or RS485-<br>2 AI2 / RS485+ Analog in 2 or RS485+<br>3 TO0/PWR Digital Outputs 0 or 0V/12V/24V<br>4 TO1/GND Digital Outputs 1 or Ground<br>5 POWER 0V/12V/24V<br>6 TI0 Digital Inputs 0<br>7 TI1 Digital Inputs 1<br>8 GND Ground<br><!-- End of picture text -->

###### NOTICE 

The Tool Connector must be manually tightened up to a maximum of 0.4 Nm. 

###### Tool I/O Accessories 

The UR20 tool I/O can require an accessory element to facilitate connection with tools. Depending on the tool, you can use the following tool I/O accessories: Tool Flange Adapter (see Tool Flange Accessories) and/or Tool Cable Adapter. 

86 

User Manual 

UR5e 



Tool Cable Adapter 

The Tool Cable Adapter is the electronic accessory that allows compatibility between the tool I/O and e-Series tools. 



###### WARNING 

Connecting the Tool Cable Adapter to a robot that is powered on can lead to injury. 

- Connect the adapter to the tool/end effector before connecting the adapter to the robot. 

- Do not power on the robot if the Tool Cable Adapter is not connected to the tool/end effector. 

The eight wires inside the Tool Cable Adapter have different functions, as listed in the table below: 

|Pin #|Signal|Description|
|---|---|---|
|1|AI2 / RS485+|Analogin 2 or RS485+|
|2|AI3 / RS485-|Analogin 3 or RS485-|
|3|TI1|Digital Inputs 1|
|4|TI0|Digital Inputs 0|
|5|POWER|0V/12V/24V|
|6|TO1/GND|Digital Outputs 1 or Ground|
|7|TO0/PWR|Digital Outputs 0 or 0V/12V/24V|
|8|GND|Ground|



###### GROUND 

The tool flange is connected to GND (Ground). 

87 

UR5e 

User Manual 



#### 8.7.2. General Purpose Analog I/O 

Description The analog I/O interface is the green terminal. It is used to set or measure voltage (010V) or current (4-20mA) to and from other equipment. 

The following directions is recommended to achieve the highest accuracy. 

- Use the AG terminal closest to the I/O. The pair share a common mode filter. 

- Use the same GND (0V) for equipment and Control Box. The analog I/O is not galvanically isolated from the Control Box. 

- Use a shielded cable or twisted pairs. Connect the shield to the GND terminal at the terminal called Power . 

- Use equipment that works in current mode. Current signals are less sensitive to interferences. 

Electrical In the GUI you can select input modes (see part Part II PolyScope Manual). The electrical Specifications specifications are shown below. 

|Terminals|Parameter|Min|Typ|Max|Unit|
|---|---|---|---|---|---|
|Analog Input in current mode||||||
|[AIx - AG]|Current|4|-|20|mA|
|[AIx - AG]|Resistance|-|20|-|ohm|
|[AIx - AG]|Resolution|-|12|-|bit|
|Analog Input in voltage mode||||||
|[AIx - AG]|Voltage|0|-|10|V|
|[AIx - AG]|Resistance|-|10|-|Kohm|
|[AIx - AG]|Resolution|-|12|-|bit|
|Analog Output in current mode||||||
|[AOx - AG]|Current|4|-|20|mA|
|[AOx - AG]|Voltage|0|-|24|V|
|[AOx - AG]|Resolution|-|12|-|bit|
|Analog Output in voltage mode||||||
|[AOx - AG]|Voltage|0|-|10|V|
|[AOx - AG]|Current|-20|-|20|mA|
|[AOx - AG]|Resistance|-|1|-|ohm|
|[AOx - AG]|Resolution|-|12|-|bit|



88 

User Manual 

UR5e 



#### 8.7.3. General Purpose Digital I/O 

Description The Startup screen contains settings for automatically loading and starting a default program, and for auto-initializing the Robot arm during power up. 

General purpose digital I/O 

This section describes the general purpose 24V I/O (Gray terminals) and the configurable I/O (Yellow terminals with black text) when not configured as safety I/O. The common specifications in section 8.7.3 General Purpose Digital I/O above must be observed. 

The general purpose I/O can be used to drive equipment like pneumatic relays directly or for communication with other PLC systems. All Digital Outputs can be disabled automatically when program execution is stopped, see part Part II PolyScope Manual. 

In this mode, the output is always low when a program is not running. Examples are shown in the following subsections. 

#### 8.7.4. Remote ON/OFF control 

###### Description 

Use remote ON/OFF control to turn the Control Box on and off without using the Teach Pendant. It is typically used: 

- When the Teach Pendant is inaccessible. 

- When a PLC system must have full control. 

- When several robots must be turned on or off at the same time. 

Remote The remote ON/OFF control provides a auxiliary 12V supply, kept active when the Control Box Control is turned off. The ON input is intended only for short time activation and works in the same way as the POWER button. The OFF input can be held down as desired. Use a software feature to load and start programs automatically (see part Part II PolyScope Manual). The electrical specifications are shown below. 

|Terminals|Parameter|Min|Typ|Max|Unit|
|---|---|---|---|---|---|
|[12V - GND]|Voltage|10|12|13|V|
|[12V - GND]|Current|-|-|100|mA|
|[ON / OFF]|Inactive voltage|0|-|0.5|V|
|[ON / OFF]|Active voltage|5|-|12|V|
|[ON / OFF]|Input current|-|1|-|mA|
|[ON]|Activation time|200|-|600|ms|



###### CAUTION 

Maintaining a press and hold on the power button switches the Control Box OFF without saving. 

- Do not press and hold the ON input or the POWER button without saving. 

- Use the OFF input for remote off control to allow the Control Box to save open files and shut down correctly. 

91 

UR5e 

User Manual 



###### CAUTION 

Very long M8 bolts can press against the bottom of the tool flange and short circuit the robot. 

- Do not use bolts that extend beyond 10 mm to mount the tool. 

###### WARNING 

Failure to tighten bolts properly cause injury due to loss of the adapter flange and/or end effector. 

- Ensure the tool is properly and securely bolted in place. 

- Ensure the tool is constructed such that it cannot create a hazardous situation by dropping a part unexpectedly. 

92 

User Manual 

UR5e 



#### 8.7.6. Tool I/O Installation Specifications 

Description The electrical specifications are shown below. Access Tool I/O in the Installation Tab (see part Part II PolyScope Manual) to set the internal power supply to 0V, 12V or 24V. 

|Parameter|Min|Typ|Max|Unit|
|---|---|---|---|---|
|Supply voltage in 24V mode|23.5|24|24.8|V|
|Supply voltage in 12V mode|11.5|12|12.5|V|
|Supply current (single pin)*|-|600|2000**|mA|
|Supply current (dual pin)*|-|600|2000**|mA|
|Supply capacitive load|-|-|8000***|uF|



* It is highly recommended to use a protective diode for inductive loads. 

** Peak for max 1 second, duty cycle max: 10%. Average current over 10 seconds must not exceed typical current. 

*** When tool power is enabled, a 400 ms soft start time begins allowing a capacitive load of 8000 uF to be connected to the tool power supply at start-up. Hot-plugging the capacitive load is not allowed. 

93 

UR5e 

User Manual 



#### 8.7.7. Tool Power Supply 

Description Access Tool I/O in the Installation Tab to set the internal power supply to 0V, 12V or 24V. 



###### NOTICE 

Once the robot makes an Emergency Stop, the voltage is set to 0V for both Power Pins (power is off). 

94 

User Manual 

UR5e 



#### 8.7.8. Tool Digital Outputs 

Description Digital Outputs support three different modes: 

|Mode|Active|Inactive|
|---|---|---|
|Sinking (NPN)|Low|Open|
|Sourcing (PNP)|High|Open|
|Push / Pull|High|Low|



Access Tool I/O in the Installation Tab to configure the output mode of each pin. The electrical specifications are shown below: 

|Parameter|Min|Typ|Max|Unit|
|---|---|---|---|---|
|Voltage when open|-0.5|-|26|V|
|Voltage when sinking 1A|-|0.08|0.09|V|
|Current when sourcing/sinking|0|600|1000|mA|
|Current through GND|0|1000|3000*|mA|



###### NOTICE 

Once the robot makes an Emergency Stop, the Digital Outputs (DO0 and DO1) are deactivated (High Z). 

###### CAUTION 

The Digital Outputs in the tool are not current-limited. Overriding the specified data can cause permanent damage. 

Using Tool Digital Outputs 

This example illustrates turning on a load using the internal 12V or 24V power supply. The output voltage at the I/O tab must be define. There is voltage between the POWER connection and the shield/ground, even when the load is turned off. 



<!-- Start of picture text -->
POWER<br>TO0<br><!-- End of picture text -->

It is recommended to use a protective diode for inductive loads, as shown below. 



<!-- Start of picture text -->
POWER<br>TO0<br><!-- End of picture text -->

95 

UR5e 

User Manual 



#### 8.7.9. Tool Digital Inputs 

Description The Startup screen contains settings for automatically loading and starting a default program, and for auto-initializing the Robot arm during power up. 

Table The Digital Inputs are implemented as PNP with weak pull-down resistors. This means that a floating input always reads as low. The electrical specifications are shown below. 

|Parameter|Min|Type|Max|Unit|
|---|---|---|---|---|
|Input voltage|-0.5|-|26|V|
|Logical low voltage|-|-|2.0|V|
|Logical high voltage|5.5|-|-|V|
|Input resistance|-|47k|-|Ω|



#### 8.7.10. Tool Analogue Inputs 

Description Tool Analogue Input are non-differential and can be set to either voltage (0-10V) or current (4-20mA) on the I/O tab. The electrical specifications are shown below. 

|Parameter|Min|Type|Max|Unit|
|---|---|---|---|---|
|Input voltage in voltage mode|-0.5|-|26|V|
|Input resistance @ range 0V to 10V|-|10.7|-|kΩ|
|Resolution|-|12|-|bit|
|Input voltage in current mode|-0.5|-|5.0|V|
|Input current in current mode|-2.5|-|25|mA|
|Input resistance @ range 4mA to 20mA|-|182|188|Ω|
|Resolution|-|12|-|bit|



Two examples of using Analog Input are shown in the following subsections. 

96 

User Manual 

UR5e 



###### Caution 

###### CAUTION 

Analog Inputs are not protected against over voltage in current mode. Exceeding the limit in the electrical specification can cause permanent damage to the input. 

#### 8.7.11. Tool Communication I/O 

###### Description 

- Signal requests The RS485 signals use internal fail-safe biasing. If the attached device does not support this fail-safe, signal biasing must either be done in the attached tool, or added externally by adding pull-up resistors to RS485+ and pulldown to RS485-. 

- Latency The latency of messages sent via the tool connector ranges from 2ms to 4ms, from the time the message is written on the PC to the start of the message on the RS485. A buffer stores data sent to the tool connector until the line goes idle. Once 1000 bytes of data have been received, the message is written on the device. 

|Baud Rates|9.6k, 19.2k, 38.4k, 57.6k, 115.2k, 1M, 2M, 5M|
|---|---|
|Stop Bits|1, 2|
|Parity|None, Odd, Even|



97 

UR5e 

User Manual 

9. Commissioning 



## 9. Commissioning 

Descri The following tests must be conducted before using the robot application for the first time or after ption making any modifications. 

- Verify all safety inputs and outputs are correctly connected. 

- Test all connected safety input and output, including devices common to multiple machines or robots, are functioning as intended. 

- Test emergency stop buttons and inputs to verify the robot stops and the brakes engage. 

- Test safeguard inputs to verify the robot motion stops. If safeguard reset is configured, check that it functions as intended. 

- Look at the initialization screen, activate the reduced input and verify the screen changes. 



- Change the operational mode to verify the mode icon changes in top right corner of PolyScope screen. 

- Test the 3-position enabling device to verify that pressing to the center on position enables motion in manual mode at a reduced speed. 

- If the Emergency Stop outputs are used, press the Emergency Stop push-button and verify that there is a stop of the whole system. 

- Test the system connected to Robot Moving output, Robot Not Stopping output, Reduced Mode output, or Not Reduced Mode output to verify the output changes are detected. 

- Determine the commissioning requirements of your robot application. 

98 

User Manual 

UR5e 

10. First Time Use 



## 10. First Time Use 

###### Description 

This section describes how you get started using the robot. Among other things, it covers easy start-up, an overview of the Polyscope user interface and how to set up your first program. Additionally, it covers free drive mode and basic operation. 

### 10.1. Quick System Start-up 

Quick System Start 

###### MANDATORY ACTION 

Before using the PolyScope, verify the robot arm and Control Box are correctly installed. 

This is how you quickly start up the robot. 

1. On the Teach Pendant , press the emergency stop button. 

2. On the Teach Pendant, press the power button and allow the system to start, displaying text on the PolyScope . 

3. A popup appears on the touch screen indicating that the system is ready and that the robot must be initialized. 

4. In the popup dialog, tap Go to Initialize Screen to access the Initialize screen. 

5. Unlock the emergency stop button to change robot state from Emergency Stopped to Power off . 

6. Step outside the reach (workspace) of the robot. 

7. On the Initialize Robot screen, tap the ON button and allow robot state to change to Idle . 

8. In the Payload field, in Active Payload , verify the payload mass. You can also verify the mounting position is correct, in the Robot field. 

9. Tap the Start button, for the robot to release its brake system. The robot vibrates and makes clicking sounds indicating it is ready to be programmed. 

99 

UR5e 

User Manual 

10. First Time Use 



### 10.2. Safety-related Functions and Interfaces 

###### Description 

Universal Robots robots are equipped with a range of built-in safety functions as well as safety I/O, digital and analog control signals to or from the electrical interface, to connect to other machines and additional protective devices. Each safety function and I/O is constructed according to EN ISO13849-1 (see Certifications) with Performance Level d (PLd) using a category 3 architecture. 

See Software Safety Configuration for configuration of the safety functions, inputs and outputs in the user interface. See Safety I/O for descriptions on how to connect safety devices to I/O. 

###### WARNING 

The use of safety configuration parameters different from those determined as necessary for risk reduction, can result in hazards that are not reasonably eliminated, or risks that are not sufficiently reduced. 

- Ensure tools and grippers are connected correctly to avoid hazards due to interruption of power. 

###### WARNING: ELECTRICITY 

Programmer and/or wiring errors can cause the voltage to change from 12V to 24V leading to fire damage to equipment. 

- Verify the use of 12V and proceed with caution. 

###### Additional Information 

###### NOTICE 

- The use and configuration of safety functions and interfaces must follow the risk assessment procedures for each robot application. (see chapter Safety section Safety-related Functions and Interfaces ) 

- The stopping time should be taken into account as part of the application risk assessment 

- If the robot detects a fault or violation in the safety system (e.g. if one of the wires in the Emergency Stop circuit is cut or a safety limit is exceeded), then a Stop Category 0 is initiated. 

###### NOTICE 

The end effector is not protected by the UR safety system. The functioning of the end effector and/or connection cable is not monitored 

100 

User Manual 

UR5e 

10. First Time Use 



#### 10.2.1. Configurable Safety Functions 

###### Description 

Universal Robots robot safety functions, as listed in the table below, are in the robot but are meant to control the robot system i.e. the robot with its attached tool/end effector. The robot safety functions are used to reduce robot system risks determined by the risk assessment. Positions and speeds are relative to the base of the robot. 

|Safety<br>Function|Description|
|---|---|
|Joint Position<br>Limit|Sets upper and lower limits for the allowed joint positions.|
|Joint Speed<br>Limit|Sets an upper limit for joint speed.|
|Safety<br>Planes|Defines planes, in space, that limit robot position. Safety planes limit<br>either the tool/end effector alone or both the tool/end effector and the<br>elbow.|
|Tool<br>Orientation|Defines allowable orientation limits for the tool.|
||Limits maximum robot speed. The speed is limited at the elbow, at the|
|Speed Limit|tool/end effector flange, and at the center of the user-defined tool/end<br>effectorpositions.|
|Force Limit|Limits maximum force exerted by the robot tool/end effector and elbow<br>in clamping situations. The force is limited at the tool/end effector,<br>elbow flange and center of the user-defined tool/end effectorpositions.|
|Momentum<br>Limit|Limits maximum momentum of the robot.|
|Power Limit|Limits mechanical workperformed bythe robot.|
|Stopping<br>Time Limit|Limits maximum time the robot uses for stopping after a robot stop is<br>initiated.<sup>1</sup>|
|Stopping<br>Distance<br>Limit|Limits maximum distance travelled by the robot after a robot stop is<br>initiated.|



###### Safety Function 

When performing the application risk assessment, it is necessary to take into account the motion of the robot after a stop has been initiated. In order to ease this process, the safety functions Stopping Time Limit and Stopping Distance Limit can be used. 

These safety functions dynamically reduces the speed of the robot motion such that it can always be stopped within the limits. The joint position limits, the safety planes and the tool/end effector orientation limits take the expected stopping distance travel into account i.e. the robot motion will slow down before the limit is reached. The functional safety can be summarized as: 

> 1Robot stop was previously known as "Protective stop". 

101 

UR5e 

User Manual 

10. First Time Use 



|Safety Function|Accuracy|Performance Level|Category|
|---|---|---|---|
|Emergency Stop|–|d|3|
|Safeguard Stop|–|d|3|
|Joint Position Limit|5 °|d|3|
|Joint Speed Limit|1.15 °/s|d|3|
|Safety Planes|40 mm|d|3|
|Tool Orientation|3 °|d|3|
|Speed Limit|50 mm/s|d|3|
|Force Limit|25 N|d|3|
|Momentum Limit|3 kg m/s|d|3|
|Power Limit|10 W|d|3|
|Stopping Time Limit|50 ms|d|3|
|Stopping Distance Limit|40 mm|d|3|
|Safe Home|1.7 °|d|3|



###### Warnings 

###### CAUTION 

Failure to configure the maximum speed limit can result in hazardous situations. 

- If the robot is used in manual hand-guiding applications with linear movements, the speed limit must be set to maximum 250 mm/s for the tool/end effector and elbow unless a risk assessment shows that higher speeds are acceptable. This will prevent fast movements of the robot elbow near singularities. 

###### NOTICE 

There are two exceptions to the force limiting function that are important when designing an application. 

As the robot stretches out, the knee-joint effect can give high forces in the radial direction (away from the base) at low speeds. Similarly, the short leverage arm, when the tool/end effector is close to the base and moving around the base, can cause high forces at low speeds. 

102 

User Manual 

UR5e 

10. First Time Use 



###### Workspace 



<!-- Start of picture text -->
Front Tilted<br><!-- End of picture text -->

Due to the physical properties of the robot arm, certain workspace areas require attention regarding pinching hazards. One area (left) is defined for radial motions when the wrist 1 joint is at least 450 mm from the base of the robot. The other area (right) is within 200 mm of the base of the robot, when moving tangentially. 

Placing the robot in certain areas can create pinching hazards that can lead to injury. 

103 

UR5e 

User Manual 

10. First Time Use 



###### Safety The robot also has the following safety inputs: inputs 

|Safety Input|Description|
|---|---|
|Emergency<br>Stop Button|Performs a Stop Category 1 (IEC 60204-1) informing other machines using<br>the System Emergency Stop output, if that output is defined. A stop is<br>initiated in anythingconnected to the output.|
|Robot<br>Emergency<br>Stop|Performs a Stop Category 1 (IEC 60204-1) via Control Box input, informing<br>other machines using the System Emergency Stop output, if that output is<br>defined.|
|System<br>Emergency<br>Stop|Performs a Stop Category 1 (IEC 60204-1) on robot only, in all modes and<br>takes precedence over all other commands.|
|Safeguard<br>Stop|Performs a Stop Category 2 (IEC 60204-1) in all modes, except when using<br>a 3-Position Enabling Device and a mode selector - then when in Manual<br>Mode, the Safeguard Stopcan be set to onlyfunction in Automatic Mode.|
|Automatic<br>Mode<br>Safeguard<br>Stop|Performs a Stop Category 2 (IEC 60204-1) in Automatic mode ONLY.<br>Automatic Mode Safeguard Stop can only be selected when a Three-<br>Position Enabling Device is configured and installed.|
|Safeguard<br>Reset|Returns from the Safeguard Stop state, when a rising edge on the<br>Safeguard Reset input occurs.|
|Reduced<br>Mode|Transitions the safety system to use the Reduced mode limits.|
|Three-<br>Position<br>Enabling<br>Device|Initiates a Stop Category 2 (IEC 60204-1) when the enabling device is fully<br>pressed or fully released in manual mode only. Three-Position Enabling<br>Device Stop is triggered when an input goes low. It is unaffected by a<br>Safeguard Reset.|
|Freedrive on<br>robot|Enables freedrive, when the robot is not in Automatic Mode.|
|Operational<br>Mode|Switches between Operational modes. The robot is in Automatic mode<br>when input is low, Manual mode when input is high.|
|Automatic<br>Mode<br>Safeguard<br>Reset|Returns from the Automatic Mode Safeguard Stop state, when a rising<br>edge on the Automatic Mode Safeguard Reset input occurs.|



104 

User Manual 

UR5e 

10. First Time Use 



###### Safety For interfacing with other machines, the robot is equipped with the following safety outputs: outputs 

|Safety<br>Output|Description|
|---|---|
|System<br>Emergency<br>Stop|While this signal is logic low, the Robot Emergency Stop input is logic low<br>or the Emergency Stop button is pressed.|
|Robot<br>Moving|While this signal is logic high, no single joint of the robot moves more than<br>0.1 rad/s.|
|Robot Not|Logic high when the robot is stopped or in the process of stopping due to|
|Stopping|an EmergencyStopor Safeguard Stop. Otherwise it will be logic low.|
|Reduced|Logic low when the safetysystem is in Reduced Mode.|
|Not Reduced|Logic low when the system is not in Reduced Mode.|
|Safe Home|Logic high when robot is in the configured Safe Home Position.|



All safety I/O are dual channel, meaning they are safe when low (e.g., the Emergency Stop is active when the signals are low). 

#### 10.2.2. Safety Functions 

Description The safety system acts by monitoring if any of the safety limits are exceeded or if an Emergency Stop or a Safeguard Stop is initiated. The reactions of the safety system are: 

|Trigger|Reaction|
|---|---|
|Emergency Stop|StopCategory1|
|Safeguard Stop|StopCategory2|
|3PE Stop (if a 3-Position Enabling device is connected)|StopCategory2|
|Limit Violation|StopCategory0|
|Fault Detection|Stop Category 0|



###### NOTICE 

If the safety system detects any fault or violation, all safety outputs reset to low. 

105 

UR5e 

User Manual 

10. First Time Use 



#### 10.2.3. Safety Parameter Set 

###### Description 

The safety system has the following set of configurable safety parameters: 

- Normal 

- Reduced 

###### Normal and Reduced 

You can set up the safety limits for each set of safety parameters, creating distinct configurations for normal, or higher settings, and reduced. The reduced configuration is active when the tool/end effector is positioned on the reduced side of a Trigger Reduced Plane, or when the reduced configuration is externally triggered by a safety input. Using a plane to trigger the Reduced configuration: When the robot arm moves from the side of the trigger plane configured with reduced safety parameters, to the side that is configured with normal safety parameters, there is a 20 mm area around the trigger plane where both normal and reduced limits are allowed. This area around the trigger plane prevents nuisance safety stops when the robot is exactly at the limit. 

Using an input to trigger the Reduced configuration: When a safety input starts, or stops, the reduced configuration, up to 500 ms can elapse before the new limit values become active. This can happen in either of the following circumstances: 

- Switching from the reduced configuration to normal 

- Switching from the normal configuration to reduced 

The robot arm adapts to the new safety limits within the 500 ms. 

106 

User Manual 

UR5e 

10. First Time Use 



###### Recovery 

When a safety limit is exceeded, the safety system must be restarted. For example, if a joint position limit is outside a safety limit, at start-up, Recovery is activated. 

You cannot run programs for the robot when recovery is activated, but the robot arm can be manually moved back within limits using Freedrive, or by using the Move tab in PolyScope. The safety limits for Recovery are: 

|Safety Function|Limit|
|---|---|
|Joint Speed Limit|30 °/s|
|Speed Limit|250 mm/s|
|Force Limit|100 N|
|Momentum Limit|10 kgm/s|
|Power Limit|80 W|



The safety system issues a Stop Category 0 if a violation of these limits appears. 

###### WARNING 

Failure to use caution when moving the robot arm in recovery mode can lead to hazardous situations. 

- Use caution when moving the robot arm back within the limits, as limits for the joint positions, the safety planes, and the tool/end effector orientation are all disabled in recovery mode. 

107 

UR5e 

User Manual 

10. First Time Use 



### 10.3. Software Safety Configuration 

Description This section covers how to access the robot safety settings. It is made up of items that help you set up the robot Safety Configuration. 

###### WARNING 

Before you configure your robot safety settings, your integrator must conduct a risk assessment to guarantee the safety of personnel and equipment around the robot. A risk assessment is an evaluation of all work procedures throughout the robot lifetime, conducted in order to apply correct safety configuration settings. You must set the following in accordance with the integrator’s risk assessment. 

1. The integrator must prevent unauthorized persons from changing the safety configuration e.g. installing password protection. 

2. Use and configuration of the safety-related functions and interfaces for a specific robot application. 

3. Safety configuration settings for set-up and teaching before the robot arm is powered on for the first time. 

4. All safety configuration settings accessible on this screen and sub-tabs. 

5. The integrator must ensure that all changes to the safety configuration settings comply with the risk assessment. See Hardware Installation Manual. 

108 

User Manual 

UR5e 

10. First Time Use 



###### Accessing Software Safety Settings 

Safety Settings are password protected and can only be configured once a password is set and subsequently used. 

To access the software safety settings 

1. In your PolyScope header, tap the Installation icon. 

2. In the Side Menu on the left of the screen, tap Safety . 

3. Observe that the Robot Limits screen displays, but settings are inaccessible. 

4. If a Safety password was previously set, enter the password and press Unlock to make settings accessible. Note: Once Safety settings are unlocked, all settings are now active. 

5. Press Lock tab or navigate away from the Safety menu to lock all Safety item settings again. 



109 

UR5e 

User Manual 



#### 10.3.1. Setting a Software Safety Password 

Description You must set a password to Unlock all safety settings that make up your Safety Configuration. If no safety password is applied, you are prompted to set it up. 

To set a Software Safety password 

You can tap the Lock tab to lock all Safety settings again or simply navigate to a screen outside of the Safety menu. 

1. In your PolyScope header right corner, press the Hamburger menu and select Settings . 

2. On the left of the screen, in the blue menu, press Password and select Safety . 

3. In New password , type a password. 

4. Now, in Confirm new password , type the same password and press Apply . 

5. In the bottom left of the blue menu, press Exit to return to previous screen. 



110 

User Manual 

UR5e 



#### 10.3.2. Changing the Software Safety Configuration 

Description 

Changes to the Safety Configuration settings must comply with the risk assessment conducted by the integrator. 

Recommended procedure for the integrator: 

To change the safety configuration 

1. Verify that changes comply with the risk assessment conducted by the integrator. 

2. Adjust safety settings to the appropriate level defined by the risk assessment conducted by the integrator. 

3. Verify that the settings are applied. 

4. Place following text in the operators’ manuals: 

Before working near the robot, make sure that the safety configuration is as expected. This can be verified e.g. by inspecting the Safety Checksum in the top right corner of PolyScope for any changes. (See Safety Checksum). 

111 

UR5e 

User Manual 



#### 10.3.3. Applying a New Software Safety Configuration 

###### Description 

The robot is powered off while you make changes to the configuration. Your changes only take effect after you tap the Apply button. 

The robot cannot be powered on again until you select Apply and Restart to visually inspect your robot Safety Configuration which, for safety reasons, is displayed in SI Units in a popup. 

You can select Revert Changes to return to the previous configuration. When your visual inspection is complete you can select Confirm Safety Configuration and the changes are automatically saved as part of the current robot installation. 

##### **Safety Checksum** 

###### Description 

The Safety Checksum icon displays your applied robot safety configuration. 



It could be four or eight digits. 

A four-digit Checksum should be read from top to bottom and left to right, while an eightdigit Checksum is read left to right, top row first. Different text and/or colors indicate changes to the applied safety configuration. 

The Safety Checksum changes if you change the Safety Functions settings, because the Safety Checksum is only generated by the safety settings. 

You must apply your changes to the Safety Configuration for the Safety Checksum to reflect your changes. 

112 

User Manual 

UR5e 



113 

UR5e 

User Manual 



#### 10.3.4. Safety Configuration without Teach Pendant 

###### Description 

You can use the robot without attaching the Teach Pendant. Removing the Teach Pendant requires defining another Emergency Stop source. You must specify if the Teach Pendant is attached to avoid triggering a safety violation. 

###### CAUTION 

If the Teach Pendant is detached or disconnected from the robot, the Emergency Stop button is no longer active. You must remove the Teach Pendant from the vicinity of the robot. 

To safely The robot can be used without PolyScope as the programming interface. remove the To configure the robot without a Teach Pendant Teach 

1. In the Header tap Installation . 

###### Pendant 

2. In the Side Menu on left tap Safety and select Hardware . 

3. Input Safety password and Unlock the screen. 

4. Deselect Teach Pendant to use robot without PolyScope interface. 

5. Press Save and restart to implement changes. 

114 

User Manual 

UR5e 



#### 10.3.5. Software Safety Modes 

Description Under normal conditions, i.e. when no robot stop is in effect, the safety system operates in a Safety Mode associated with a set of safety limits<sup>1</sup> : 

- Normal mode is the safety mode that is active by default 

- Reduced mode is active when the robot Tool Center Point (TCP) is positioned beyond a Trigger Reduced mode plane (see Software Safety Restrictions), or when triggered using a configurable input. 

- Recovery mode activates when a safety limit from the active limit set is violated, the robot arm performs a Stop Category 0. If an active safety limit, such as a joint position limit or a safety boundary, is violated already when the robot arm is powered on, it starts up in Recovery mode. This makes it possible to move the robot arm back within the safety limits. While in Recovery mode, the movement of the robot arm is restricted by a fixed limit that you cannot customize. 

###### WARNING 

Limits for joint position , tool position and tool orientation are disabled in Recovery mode, so take caution when moving the robot arm back within the limits. 

The menu of the Safety Configuration screen enables the user to define separate sets of safety limits for Normal and Reduced mode. For the tool and joints, Reduced mode limits for speed and momentum are required to be more restrictive than their Normal mode counterparts. 

#### 10.3.6. Software Safety Limits 

Description In the Safety Configuration the safety system limits are specified. The Safety System receives the values from the input fields and detects any violation if any these values are exceeded. The robot controller attempts to prevent any violations by making a robot stop or by reducing the speed. 

##### **Robot Limits** 

Description Robot Limits restrict general robot movements. The Robot Limits screen has two configuration options: Factory Presets and Custom . 

> 1Robot stop was previously known as "Protective Stop" for Universal Robots robots. 

115 

UR5e 

User Manual 



###### Factory Presets 

Factory Presets is where you can use the slider to select a predefined safety setting . The values in the table are updated to reflect the preset values ranging from Most Restricted to Least Restricted 

###### NOTICE 

Slider values are only suggestions and do not substitute a proper risk assessment. 



116 

User Manual 

UR5e 



###### Custom 

Custom is where you can set Limits on how the robot functions and monitor the associated Tolerance. 

|Power|Limits maximum mechanical work produced by the robot in the<br>environment. This limit considers the payload a part of the robot and<br>not of the environment.|
|---|---|
|Momentum|Limits maximum robot momentum.|
|Stopping<br>Time|Limits maximum time it takes the robot to stop e.g. when an<br>emergencystopis activated.|
||Limits maximum distance the robot tool or elbow can travel while<br>stopping.|
|Stopping<br>Distance|NOTICE<br>Restricting stopping time and distance affect overall<br>robot speed. For example, if stopping time is set to<br>300 ms, the maximum robot speed is limited<br>allowing the robot to stop within 300 ms.|
|Tool Speed|Limits maximum robot tool speed.|
|Tool Force|Limits maximum force that the robot tool exerts on the environment to<br>prevent clampingsituations.|
|Elbow Speed|Limits maximum robot elbow speed.|
|Elbow Force|Limits maximum force that the elbow exerts on the environment to<br>prevent clamping situations.|



117 

UR5e 

User Manual 



The tool speed and force are limited at the tool flange and the center of the two user-defined tool positions, (see Tool Position Restriction). 



###### NOTICE 

You can switch back to Factory Presets for all robot limits to reset to their default settings. 

##### **Joint Limits** 

Description Joint limits allow you to restrict individual robot joint movements in joint space i.e. joint rotational position and joint rotational speed. Joint limiting can also be called software based axis limiting. The joint limit options are: Maximum speed and Position range . 



118 

User Manual 

UR5e 



119 

UR5e 

User Manual 



#### 10.3.7. Safe Home Position 

Description Safe Home is a return position defined by using the user-defined Home Position. Safe Home I/Os are active when the Robot Arm is in the Safe Home Position and a Safe Home I/O is defined. 

The Robot Arm is in the Safe Home Position if the joint positions are at the specified joint angles or a multiple of 360 degrees thereof. 

The Safe Home Safety Output is active when the robot is standing still at the Safe Home Position. 



Syncing To sync from Home 

###### from Home 

1. In the Header, tap Installation . 

2. In the Side Menu on the left of the screen, tap Safety and select Safe Home . 

3. Under Safe Home , tap Sync from Home . 

4. Tap Apply and in the dialog box that appears, select Apply and restart . 

###### Safe Home Output 

The Safe Home Position must be defined before the Safe Home Output (see I/O). 

Defining To define Safe Home Output Safe Home 1. In the Header, tap Output 

1. In the Header, tap Installation . 

2. In the Side Menu on the left of the screen, under Safety , select I/O . 

3. On the I/O screen in the Output Signal, under Function Assignment, in drop-down menu, select Safe Home . 

4. Tap Apply and in the dialog box that appears, select Apply and restart . 

120 

User Manual 

UR5e 



###### Editing Safe Home 

###### To edit Safe Home 

Editing Home does not automatically modify a previously defined Safe Home position. While these values are out of sync, Home program node is undefined. 

1. In the Header, tap Installation . 

2. In the Side Menu on the left of the screen, under General , select Home . 

3. Tap Edit Position and set the new robot arm position and tap OK . 

4. In the Side Menu, under Safety , select Safe Home . You need a Safety password to Unlock the Safety Settings (See Setting a Software Safety Password). 

5. Under Safe Home , tap Sync from Home 

121 

UR5e 

User Manual 



### 10.4. Software Safety Restrictions 

###### Description 

###### NOTICE 

Configuring planes is entirely based on features. We recommend you create and name all features before editing the safety configuration, as the robot is powered off once the Safety Tab has been unlocked and moving the robot will be impossible. 

Safety planes restrict robot workspace. You can define up to eight safety planes, restricting the robot tool and elbow. You can also restrict elbow movement for each safety plane and disable by deselecting the checkbox. Before configuring safety planes, you must define a feature in the robot installation. The feature can then be copied into the safety plane screen and configured. 

###### WARNING 

Defining safety planes only limits the defined Tool spheres and elbow, not the overall limit for the robot arm. This means that specifying a safety plane, does not guarantee that other parts of the robot arm will obey this restriction. 

|Saf<br>ety<br>You can|configure each plane w|ith restrictiveModesusing the icons listed below.|
|---|---|---|
|Pl|||
|a<br>|Disabled|The safety plane is never active in this state.|
|nes<br>Mod<br>|Normal|When the safety system is in Normal mode, a normal plane is<br>active and it acts as a strict limit on the position.|
|es|Reduced|When the safety system is in Reduced mode, a reduced mode<br>plane is active and it acts as a strict limit on the position.|
||Normal & Reduced|When the safety system is either in Normal or Reduced mode,<br>a normal and reduced mode plane is active and acts as a strict<br>limit on the position.|
||Trigger Reduced<br>Mode|The safety plane causes the safety system to switch to<br>Reduced mode if the robot Tool or Elbow is positioned beyond<br>it.|
||Show|Pressing this icon hides or shows the safety plane in the<br>graphics pane.|
||Delete|Deletes the created safety plane. There is no undo/redo<br>action. If a plane is deleted in error, it must be remade.|
||Rename|Pressing this icon allows you to rename the plane.|



122 

User Manual 

UR5e 



###### Configuring safety planes 

1. In your PolyScope header, tap Installation . 

2. In the Side Menu on the left of the screen, tap Safety and select Planes . 

3. On the top right of the screen, in the Planes field, tap Add plane . 

4. On the bottom right of the screen, in the Properties field, set up Name, Copy Feature and Restrictions. 

###### Copy Feature 

In Copy Feature , only Undefined and Base are available. You can reset a configured safety plane by selecting Undefined 

If the copied feature is modified in the Features screen, a warning icon appears to the right of the Copy Feature text. This indicates that the feature is out of sync i.e. the information in the properties card is not updated to reflect the modifications that may have been made to the Feature. 



123 

UR5e 

User Manual 



###### Col or Cod es 

|Gray|Plane is configured but disabled(A)|
|---|---|
|Yellow & Black|Normal Plane(B)|
|Blue & Green|Trigger Plane(C)|
|Black Arrow|The side of the plane the tool and/or elbow is allowed to be on (For<br>Normal Planes)|
|Green Arrow|The side of the plane the tool and/or elbow is allowed to be on (For<br>Trigger Planes)|
|Gray Arrow|The side of the plane the tool and/or elbow is allowed to be on (For<br>Disabled Planes)|





124 

User Manual 

UR5e 



###### Elbow 

###### Restriction 

You can enable Restrict Elbow to prevent robot elbow joint from passing through any of your defined planes. Disable Restrict Elbow for elbow to pass through planes. The diameter of the ball that restricts the elbow is different for each size of robot. 

|UR3e|0.1 m|
|---|---|
|UR5e|0.13 m|
|UR10e / UR16e|0.15 m|
|UR20 / UR30|0.19 m|



The information about the specific radius can be found in the urcontrol.conf file on the robot under the section [Elbow]. 



###### Tool Flange Restriction 

Restricting the tool flange prevents the tool flange and the attached tool from crossing a safety plane. When you restrict the tool flange, the unrestricted area is the area inside of the safety plane, where the tool flange can operate normally. 

The tool flange cannot cross the restricted area, outside of the safety plane. 

Removing the restriction allows the tool flange to go beyond the safety plane, to the restricted area, while the attached tool remains inside of the safety plane. 

You can remove the tool flange restriction when working with a large tool off-set. This will allow extra distance for the tool to move. 

Restricting the tool flange requires the creation of a plane feature. The plane feature is used to set up a safety plane later in the safety settings. 

125 

UR5e 

User Manual 



###### Adding a plane feature example 

Displacement offsets the plane in either the positive or negative direction along the plane normal (Z-axis of the plane feature). 

Deselect the checkbox for the Elbow and the Tool Flange so they do not trigger the safety plane. The Elbow can remain checked as needed by your application. 



The unrestricted tool flange can cross a safety plane, even when no tool is defined. If no tool is added, a warning on the Tool Position button prompts you to correctly define the tool. 

When working with an unrestricted tool flange and a defined tool, it is ensured that the dangerous part of the tool can't go above and/or beyond certain area. The unrestricted tool flange can be used for any application where safety planes are needed, like Welding or Assembly. 

126 

User Manual 

UR5e 



###### Tool flange restriction example 

In this example, an X-Y-plane is created with an offset of 300mm along the positive Z-axis with reference to the base feature. 

The Z-axis of the plane can be thought of as “pointing” towards the restricted area. If the safety plane is needed on e.g., the surface of a table, rotate the plane 3.142 rad or 180° around either the X- or Y-axis so the restricted area is under the table. 

(TIP: Change the display of rotation from “Rotation Vector [rad]” to “RPY [°]”) 



If needed it is possible to offset the plane in either positive or negative Z-direction later in the safety settings. 

When satisfied with the position of the plane, tap OK. 

127 

UR5e 

User Manual 



#### 10.4.1. Tool Direction Restriction 

###### Description 

The Tool Direction screen can be used to restrict the angle in which the tool is pointing. The limit is defined by a cone that has a fixed orientation with respect to the robot arm Base. As the robot arm moves around, tool direction is restricted so it remains within the defined cone. The default direction of the tool coincides with the Z-axis of the tool output flange. It can be customized by specifying tilt and pan angles. Before configuring the limit, you must define a point or plane in the robot installation. The feature can then be copied and its Z axis used as the center of the cone defining the limit. 

###### NOTICE 

Configuration of the tool direction is based on features. We recommend you create desired feature(s) before editing the safety configuration, as once the Safety Tab has been unlocked, the robot arm powers off making it impossible to define new features. 



128 

User Manual 

UR5e 



###### Limit Prope rties 

The Tool Direction limit has three configurable properties: 

1. Cone center : You can select a point or plane feature from the drop-down menu, to define the center of the cone. The Z axis of the selected feature is used as the direction around which the cone is centred. 

2. Cone angle : You can define how many degrees the robot is allowed to deviate from center. 

|Disabled Tool direction limit|Never active|
|---|---|
|Normal Tool direction limit|Active only when safety system is inNormal mode|
|Reduced Tool direction limit|Active only when the safety system is inReduced mode|
|Normal & Reduced Tool|Active when the safety system is inNormal modeas|
|direction limit|well as when it is inReduced mode.|



You can reset the values to default or undo the Tool Direction configuration by setting the copy feature back to "Undefined". 

Tool By default, the tool points in the same direction as the Z axis of the tool output flange. This can be Prope modified by specifying two angles: rties 

- Tilt angle : How much to tilt the Z axis of the output flange towards the X axis of the output flange 

- Pan angle : How much to rotate the tilted Z axis around the original output flange Z axis. 

Alternatively, the Z axis of an existing TCP can be copied by selecting that TCP from the drop-down menu. 

129 

UR5e 

User Manual 



#### 10.4.2. Tool Position Restriction 

Description The Tool Position screen enables more controlled restriction of tools and/or accessories placed on the end of the robot arm. 

- Robot is where you can visualize your modifications. 

- Tool is where you can define and configure a tool up to two tools. 

- Tool_1 is the default tool defined with values x=0.0, y= 0.0, z=0.0 and radius=0.0. These values represent the robot tool flange. 

Under Copy TCP, you can also select Tool Flange and cause the tool values to go back to 0. 

A default sphere is defined at the tool flange. 



130 

User Manual 

UR5e 



###### User defined tools 

For the user defined tools, the user can change: 

- Radius to change the radius of the tool sphere. The radius is considered when using safety planes. When a point in the sphere passes a reduced mode trigger plane, the robot switches to Reduced mode. The safety system prevents any point on the sphere from passing a safety plane (see Software Safety Restrictions). 

- Position to change the position of the tool with respect to the tool flange of the robot. The position is considered for the safety functions for tool speed, tool force, stopping distance and safety planes. 

You can use an existing Tool Center Point as a base for defining new tool positions. A copy of the existing TCP, predefined in General menu, in TCP screen, can be accessed in Tool Position menu, in Copy TCP drop-down list. 

When you edit or adjust the values in the Edit Position input fields, the name of the TCP visible in the drop down menu changes to custom , indicating that there is a difference between the copied TCP and the actual limit input. The original TCP is still available in the drop down list and can be selected again to change the values back to the original position. The selection in the copy TCP drop down menu does not affect the tool name. 

Once you apply your Tool Position screen changes, if you try to modify the copied TCP in the TCP configuration screen, a warning icon appears to the right of the Copy TCP text. This indicates that the TCP is out of sync i.e. the information in the properties field is not updated to reflect modifications that may have been made to the TCP. The TCP can be synced by pressing the sync icon (see ). 

The TCP does not have to be synced in order to define and use a tool successfully. You can rename the tool by pressing the pencil tab next to the displayed tool name. You can also determine the Radius with an allowed range of 0-300 mm. The limit appears in the graphics pane as either a point or a sphere depending on radius size. 



131 

UR5e 

User Manual 



Tool Position You must set a Tool Position within the safety settings, for the safety plane to trigger Warning correctly when the tool TCP approaches the safety plane. The warning remains on the Tool Position if: 

- You fail to add a new tool under Tool Flange. 

To configure the tool position 

1. In the Header tap Installation . 

2. On the left side of the screen, under Safety, tap Tool Position . 

3. On the right side of the screen, select Add Tool . 

   - The newly added tool has a default name: Tool_x . 

4. Tap the edit button to rename Tool_x to something more identifiable. 

5. Edit the Radius and Position to match that of the tool you are currently using, or use the Copy TCP drop-down and choose a TCP from the General>TCP settings if such is defined. 

132 

User Manual 

UR5e 



Tool Position Warning example 

In this example, a Radius of 0.8mm is set and the TCP position to XYZ [20, 0, 400] in millimeters respectively. Optionally you can choose to ”Copy TCP” by using the drop-down menu if one has already been set in the ->General/TCP settings. Once the Apply is tapped in the bottom right corner of the screen, you are DONE. 

The warning on the Tool Position button indicates a tool is not added under Tool Flange. 



Tool Position button without the warning indicates a tool (other than the Tool Flange) is added. 



133 

UR5e 

User Manual 



###### NOTICE 

1. Do not drive the robot into itself or anything else as this may cause damage to the robot. 

2. This is only a quick start guide to show how easy it is to use a UR robot. It assumes a harmless environment and a very careful user. Do not increase the speed or acceleration above the default values. Always conduct a risk assessment before placing the robot into operation. 

###### WARNING 

Keep your head and torso outside the reach (workspace) of the robot. Do not place fingers where they can be caught. 

135 

UR5e 

User Manual 



#### 10.5.1. Run Tab 

###### Description 

The Run tab allows you to do simple operations and monitor the state of your robot. You can load, play, pause and stop a program, as well as monitor variables. The Run Tab is most useful when the program is created and the robot is ready for operation. 



###### Program 

The Program pane displays the name and status of the current program. 

To load a new program 

1. In the Program pane, tap Load Program . 

2. Select your desired program from the list. 

3. Tap Open to load the new program. 

The variables, if present, are displayed when you play the program. 

###### Variables 

The Variables pane displays the list of variables used by programs to store and update values during runtime. 

- Program variables belong to programs. 

- Installation variables belong to installations that can be shared among different programs. The same installation can be used with multiple programs. 

All program variables and installation variables in your program are displayed in the Variables pane as a list showing the Name, Value and Description of the variable. 

136 

User Manual 

UR5e 



Variable descriptions 

You can add information to your variables by adding variable descriptions in the Description column. You can use the variable descriptions to convey the purpose of the variable and/or the meaning of its value to operators using the Run tab screen and/or other programmers. 

Variable descriptions (if used) can be up to 120 characters, displayed in the Description column of the variables list on the Run tab screen and the Variables tab screen. 

Favorite variables 

You can display selected variables by using the Show only favorite variables option. To show favorite variables 

1. Under Variables, check the Show only favorite variables box. 

2. Check Show only favorite variables again to show all variables. 

You cannot designate favorite variables in the Run Tab, you can only display them. Designating favorite variables depends on the variable type. 

To designate favorite program variables 

1. In the Header, tap Program . 

The variables are listed under Variable Setup . 

2. Select the desired variables. 

3. Check the Favorite variable box. 

4. Tap Run to return to your variable display. 

To designate favorite installation variables 

1. In the Header, tap Installation . 

2. Under General, select Variables . The variables are listed under Installation Variables . 

3. Select the desired variables. 

4. Check the Favorite variable box. 

5. Tap Run to return to your variable display. 

Collapse/expand A variable description spans multiple lines to fit the width of the Description column if the Description necessary. You can also collapse and expand the Description column by using the column buttons shown below. 

To collapse/expand the Description column 

1. Tap to collapse the Description column. 

2. Tap to expand the Description column. 

here 

137 

UR5e 

User Manual 



Collapsed Description column 

Expanded Description column 





138 

User Manual 

UR5e 



Control 

The Control pane allows you to control the running program. You can play and stop, or pause and resume a program, using the buttons listed in the table below: 

- The Play button, Pause button and the Resume Button are combined. 

- The Play button changes to Pause when the program is running. 

- The Pause button changes to Resume. 



<!-- Start of picture text -->
Button Function<br>To play a program<br>Play<br>1. Under Control, tap  Play  to start running a<br>program from the beginning.<br>To resume a paused program<br>Resume<br>1. Tap  Resume  to continue running the<br>paused program.<br>To stop a program<br>1. Tap  Stop  to stop the running program<br>Stop<br>You cannot resume a stopped program.<br>You can tap  Play  to restart the program.<br>To pause a program<br>1. Tap  Pause  to pause a program at a specific<br>Pause<br>point.<br>You can resume a paused program.<br><!-- End of picture text -->

139 

UR5e 

User Manual 



#### 10.5.2. Move Robot into Position 

###### Description 

Access the Move Robot into Position screen when the Robot Arm must move to a particular start position before running a program, or when the Robot Arm is moving to a waypoint while modifying a program. 

In cases where the Move Robot into Position screen cannnot move the Robot Arm to the program start position, it moves to the first waypoint in the program tree. The Robot Arm can move to an incorrect pose if: 

- The TCP, feature pose or waypoint pose of the first movement is altered during program execution before the first move is executed. 

- The first waypoint is inside an If or Switch program tree node. 

Accessing the Move Robot into Position Screen 

1. Tap the Run tab in the header. 

2. In the Footer , tap Play to access the Move Robot into Position screen. 

3. Follow the on-screen instructions to interact with the animation and the real robot. 

Move robot to Hold down Move robot to: to move the Robot Arm to a start position. The animated Robot Arm displayed on-screen shows the desired movement about to be performed. 

###### NOTICE 

Collision can damage the robot or other equipment. Compare the animation with the position of the real Robot Arm to ensure the Robot Arm can safely perform the movement without colliding with any obstacles. 

###### Manual 

Tap Manual to access the Move screen where the Robot Arm can be moved by using the Move Tool arrows and/or configuring Tool Position and Joint Position coordinates. 

140 

User Manual 

UR5e 



#### 10.5.9. Set Payload 

Description The Set Payload command allows you to configure the payload for the robot. Payload is the combined weight of everything attached to the robot tool flange. When to use: 

- When adjusting the payload weight to prevent the robot from triggering a robot stop. A correctly configured payload weight ensures optimal robot movement. Setting the payload correctly ensures optimal motion performance and avoids robot stops. 

Payload Transition Time 

This is the time it takes the robot to adjust for a given payload. At the bottom of the screen, you can set the transition time between different payloads. You can add a payload transition time in seconds. 

Setting a transition time larger than zero, prevents the robot from doing a small "jump", when the payload changes. The program continues while the adjustment is taking place. Using the Payload Transition Time is recommended when 

picking up or releasing heavy objects or using a vacuum gripper. 

151 

UR5e 

User Manual 



#### 10.5.10. Payload 

Description You must set the Payload, the CoG and the inertia for the robot to perform optimally. You can define multiple Payloads, and switch between them in your program. This is useful in Pick and Place applications, for example, where the robot picks up and releases an object. 



You can start configuring a new Payload with the following actions: 

- Adding, You can start configuring a new Payload with the following actions: Renaming, • Tap the to define a new Payload with a unique name. The new payload is 

- Modfying and available in the drop-down menu. 

- Removing • Tap the to rename a Payload. 

- Payloads 

   - Tap the to remove a selected Payload. You cannot remove the last Payload. 

Active The checkmark in the drop-down indicates which payload is active . The Payload active Payload can be changed using the . 

Default The default Payload is set as the active Payload before the program starts. Payload • Select the desired Payload and tap Set as default to set a Payload as the default. 

The green icon in the drop-down menu indicates the default configured Payload 



Setting the Tap the fields CX, CY and CZ to set the center of gravity. The settings apply to the selected Center of Payload. Gravity 

152 

User Manual 

UR5e 



###### Payload Estimation 

This feature allows the robot to help set the correct Payload and Center of Gravity (CoG). 

###### Using the Payload Estimation Wizard 

1. In the Installation Tab, under General, select Payload . 

2. On the Payload screen, tap Measure . 

3. In the Payload Estimation Wizard tap Next . 

4. Follow the steps in the Payload Estimation Wizard to set the four positions. Setting the four positions requires moving the robot arm into four different positions. The load of the payload is measured at each position. 

5. Once all measurements are complete, you can verify the result and tap Finish . 

###### NOTICE 

Follow the these guidelines for best Payload Estimation results: 

- Ensure the TCP positions are as different as possible from each other 

- Perform the measurements within a short timespan 

- Avoid pulling on the tool and/or attached payload before and during estimation 

- Robot mounting and angle must be correctly defined in the installation 

153 

UR5e 

User Manual 



###### Setting Inertia Values 

You can select Use custom Inertia Matrix to set inertia values. 

Tap the fields: IXX, IYY, IZZ, IXY, IXZ and IYZ to set the inertia for the selected Payload. The inertia is specified in a coordinate system with the origin at the Center of Gravity (CoG) of the payload and the axes aligned with the tool flange axes. 

The default inertia is calculated as the inertia of a sphere with the user specified mass, and a mass density of 1g/cm<sup>3</sup> 



154 

User Manual 

UR5e 



#### 10.5.11. Mounting 

###### Description 

Specifying the mounting of the Robot arm serves two purposes: 

1. Making the Robot arm appear correctly on screen. 

2. Telling the controller about the direction of gravity. 

An advanced dynamics model gives the Robot arm smooth and precise motions, as well as allows the Robot arm to hold itself in Freedrive Mode . For this reason, it is important to mount the Robot arm correctly. 

###### WARNING 

Failure to mount the Robot’s arm correctly may result in frequent robot stops, and/or the Robot arm will move when pressing the Freedrive button. 

###### WARNING 

Use the correct installation settings. Save and load the installation files with the program. 



156 

User Manual 

UR5e 



#### 10.5.12. Using the I/O Tab 

###### Description 

Use the I/O Tab screen to monitor and set the live I/O signals from/to the Control Box. 

The screen displays the current state of the I/O, including during program execution. The program stops if anything is changed during execution. At program stop, all output signals retain their states. The screen updates at 10Hz, so a very fast signal might not display properly. 

Configurable I/Os can be reserved for special safety settings defined in the safety I/O configuration section of the installation (see I/O); those which are reserved will have the name of the safety function in place of the default or user defined name. Configurable outputs that are reserved for safety settings are not togglable and will be displayed as LED’s only. 



###### Voltage 

When the Tool Output is controlled by the user, you can configure Voltage. Selecting a URCap removes access to Voltage. 

###### Analog Domain Settings 

The analog I/O’s can be set to either current [4-20mA] or voltage [0-10V] output. These settings are persistent over restarts of the robot controller and saved in the installation. Control over the tool I/Os could be assigned to a URCap in Tool I/O of the Installation tab. Selecting a URCap removes user’s control over tool’s analog I/O. 

157 

UR5e 

User Manual 



###### Tool Communication Interface 

When the Tool Communication Interface TCI is enabled, the tool analog input becomes unavailable. On the I/O screen, the Tool Input field appears as shown. 



###### Dual Pin power 

When Dual Pin Power is enabled, the tool digital outputs must be named as follows: 

- tool_out[0] (Power) 

- tool_out[1] (GND) 



#### 10.5.13. Analog Input: Communication Interface 

Description The Tool Communication Interface (TCI) enables the robot to communicate with an attached tool via the robot tool analog input. This removes the need for external cabling. Once the Tool Communication Interface is enabled, all tool analog inputs are unavailable 

   1. Tap the Installation tab and under General tap Tool I/O. 

- Tool 1. Tap the Installation tab and under General tap Tool I/O. Communication 2. Select Communication Interface to edit TCI settings. Interface Once the TCI is enabled, the tool analog input is unavailable for the I/O Setup of the Installation and does not appear in the input list. Tool analog input is also unavailable for programs as Wait For options and expressions. 

   3. In the drop-down menus under Communication Interface, select required values. Any changes in values are immediately sent to the tool. If any installation values differ from what the tool is using, a warning appears. 

#### 10.5.14. Digital Output 

158 

User Manual 

UR5e 



###### Description 

The tool communication interface allows two digital outputs to be independently configured. In PolyScope, each pin has a drop-down menu that allows the output mode to be set. The following options are available: 

- Sinking: This allows the pin to be configured in an NPN or Sinking configuration. When the output is off, the pin allows a current to flow to the ground. This can be used in conjunction with the PWR pin to create a full circuit. 

- Sourcing: This allows the pin to be configured in a PNP or Sourcing configuration. When the output is on, the pin provides a positive voltage source (configurable in the IO Tab). This can be used in conjunction with the GND pin to create a full circuit. 

- Push / Pull: This allows the pin to be configured in a Push / Pull configuration. When the output is on, the pin provides a positive voltage source (configurable in IO Tab). This can be used in conjunction with the GND pin to create a full circuit When the output is off, the pin allows a current to flow to the ground. 

After selecting a new output configuration, the changes take effect. The currently loaded installation is modified to reflect the new configuration. After verifying the tool outputs are working as intended, make sure to save the installation to prevent losing changes. 

Dual Pin Dual Pin Power is used as a source of power for the tool. Enabling Dual Pin Power disables Power default tool digital outputs. 

#### 10.5.15. Using the Move Tab 

Description Use the Move Tab screen to move (jog) the robot arm directly, either by translating/rotating the robot tool, or by moving robot joints individually. 



159 

UR5e 

User Manual 



###### To use the Move Tool arrows 

Hold down any of the Move Tool arrows to move the robot arm in the corresponding direction. 

- The Translate arrows (upper) move the tool flange in the direction indicated. 

- The Rotate arrows (lower) change the orientation of the tool in the indicated direction. The rotation point is the Tool Center Point (TCP), i.e.the point at the end of the robot arm that gives a characteristic point on the tool. The TCP is shown as a small blue ball. 

Robot If the current position of the TCP approaches a safety plane, a trigger plane, or the orientation of robot tool is near the tool orientation boundary limit , a 3D representation of the proximate boundary limit is shown. The visualization of boundary limits is disabled during program execution. 

Safety planes display in yellow and black with an arrow indicating which side of the plane, the robot TCP is allowed to be positioned. 

Trigger planes display in blue and green with an arrow indicating the side of the plane, where the Normal mode limits are active. 

The tool orientation boundary limit is visualized with a spherical cone together with a vector indicating the current orientation of the robot tool. The inside of the cone represents the allowed area for the tool orientation (vector). 

When the robot TCP is no longer in proximity of the limit, the 3D representation disappears. If the TCP is in violation or very close to violating a boundary limit, the visualization of the limit turns red. 

Feature Under Feature , you can define how to control the robot arm relative to View , Base or Tool features. For the best feel for controlling the robot arm you can select the View feature, then use Rotate arrows to change the viewing angle of the 3D image to match your view of the real robot arm. 

Active TCP In the Robot field, under Active TCP , the name of the current active Tool Center Point (TCP) is displayed. 

Home The Home button accesses the Move Robot into Position screen, where you can hold down the Auto button to move robot into position previously defined under Installation. The Home button’s default setting returns the Robo Arm to an upright position . 

Freedrive The on-screen Freedrive button allows the Robot Arm to be pulled into desired positions/poses. 

Align The Align button allows the Z axis of the active TCP to align to a selected feature. 

160 

User Manual 

UR5e 



###### Tool Position 

The text boxes display the full coordinate values of the TCP relative to the selected feature. You can configure several named TCPs (see ). You can also tap Edit pose to access the Pose Editor screen. 

###### Joint Position 

The Joint Position field allows you to directly control individual joints. Each joint moves along a default joint limit range from −360<sup>∘</sup> to + 360<sup>∘</sup> , defined by a horizontal bar. Once the limit is reached you cannot move a joint any further. You can configure joints with a position range different from the default, this new range is indicated with red zone inside the horizontal bar. 

###### Using Freedrive in the Move tab 

The Freedrive button shall only be used in applications if allowed by the risk assessment. 

###### WARNING 

Failure to correctly configure the mounting setting can result in unwanted robot arm movement when you use the Freedrive button. 

- Payload settings and robot mounting settings shall be set correctly before using Freedrive. 

- All personnel shall remain outside the reach of the robot arm, when Freedrive is in use. 

###### WARNING 

Failure to correctly configure the installation settings, can increase the risk of the robot arm falling during Freedrive , due to payload errors. 

- Verify the installation settings are correct (e.g. Robot mounting angle, payload mass and payload center of gravity offset) . Save and load the installation files along with the program. 

- Save and load the installation files along with the program. 

161 

UR5e 

User Manual 



#### 10.5.16. Pose Editor 

Description Once you access the Pose Editor screen, you can precisely configure a target joint positions, or a target pose (position and orientation) for the TCP. Note: This screen is offline and does not control the Robot Arm directly. 



Robot The 3D image shows the current Robot Arm position. The shadow shows the Robot Arm target position controlled by the specified values on the screen. Press the magnifying glass icons to zoom in/out or drag a finger across it to change the view. 

If the specified target position of the robot TCP is close to a safety or trigger plane, or the orientation of robot tool is near the tool orientation boundary limit, a 3D representation of the proximate boundary limit is shown. Safety planes are visualized in yellow and black with a small arrow representing the plane normal, which indicates the side of the plane on which the robot TCP is allowed to be positioned. Trigger planes are displayed in blue and green and a small arrow pointing to the side of the plane, where the Normal mode limits are active. The tool orientation boundary limit is visualized with a spherical cone together with a vector indicating the current orientation of the robot tool. The inside of the cone represents the allowed area for the tool orientation (vector). When the target robot TCP is no longer in proximity of the limit, the 3D representation disappears. If the target TCP is in violation or very close to violating a boundary limit, the visualization of the limit turns red. 

162 

User Manual 

UR5e 



Feature and Tool Position 

The active TCP and coordinate values of the selected feature are displayed. The X , Y , Z coordinates specify tool position. The RX , RY , RZ coordinates specify orientation. Use the drop down menu above the RX , RY and RZ boxes to choose the orientation representation type: 

- Rotation Vector **[rad]** The orientation is given as a rotation vector. The length of the axis is the angle to be rotated in radians, and the vector itself gives the axis about which to rotate. This is the default setting. 

- Rotation Vector **[**<sup>∘</sup> **]** The orientation is given as a rotation vector, where the length of the vector is the angle to be rotated in degrees. 

- RPY **[rad]** Roll, pitch and yaw (RPY) angles, where the angles are in radians. The RPY-rotation matrix (X, Y’, Z” rotation) is given by: Rrpy(γ, β, α) = RZ(α) ⋅ RY(β) ⋅ RX(γ) 

- RPY **[**<sup>∘</sup> **]** Roll, pitch and yaw (RPY) angles, where angles are in degrees. 

You can tap the values to edit the coordinates. You can also tap the + or - buttons to the right of a box to add/subtract an amount to/from the current value. Or you can hold down a button to directly increase/decrease the value. 

###### Joint Positions 

Individual joint positions are specified directly. Each joint position can have Joint Limit range from −360<sup>∘</sup> to + 360<sup>∘</sup> . You can configure Joint Positions as follows: 

- Tap the joint position to edit the values. 

- Tap the + or - buttons to the right of a box to add or subtract an amount to/from the current value. 

- Hold down a button to directly increase/decrease the value. 

###### OK Button 

If you activate this screen from the Move screen (see ), tap the OK button to return to the Move screen. The Robot Arm moves to the specified target. If the last specified value was a tool coordinate, the Robot Arm moves to the target position using movement type MoveL ; or it uses movement type MoveJ if a joint position was specified last. 

###### Cancel Button 

The Cancel button exits the screen discarding all changes. 

163 

UR5e 

User Manual 



#### 10.5.17. I/O Interface Control 

###### Description 

The I/O Interface Control allows you to switch between user control and URcap control. 



I/O Interface Control 

1. Tap the Installation tab and under General, tap Tool I/O 

2. Under I/O Interface Control, select User to access the Tool Analog Inputs and/or Digital Output Mode settings. Selecting a URCap removes access to the Tool Analog Inputs and the Digital Output Mode settings. 

###### NOTICE 

If a URCap controls an end-effector, such as a gripper, then the URCap requires control of the Tool IO Interface. Select the URCap in the list, to allow it to control the Tool IO Interface. 

###### UR Connect URCap Update 

You can find the URCaps on the Installation Tab. 

1. Go to the Installation tab. 

2. Hit the tab URCaps in the left side of the screen. 

3. Hit the button Check for Updates in the bottom right corner. 

4. You can now download, dismiss or delay the update. 

   - a. If you delay or dismiss, the update will only refresh when there is a new version. 

5. Follow the update steps. 

6. Restart PolyScope when the update is complete. 

###### NOTICE 

You can still update UR Connect even if it is NOT installed. 

165 

UR5e 

User Manual 

11. Cybersecurity Threat Assessment 



## 11. Cybersecurity Threat Assessment 

Description 

This section provides information to help you strengthen the robot against potential cybersecurity threats. It outlines requirements for addressing cybersecurity threats and provides security hardening guidelines. 

### 11.1. General Cybersecurity 

Description Connecting a Universal Robots robot to a network can introduce cybersecurity risks. These risks can be mitigated by using qualified personnel and implementing specific measures for protecting the robot's cybersecurity. 

Implementing cybersecurity measures requires conducting a cybersecurity threat assessment. 

The purpose is to: 

- Identify threats 

- Define trust zones and conduits 

- Specify the requirements of each component in the application 

###### WARNING 

Failure to conduct a cybersecurity risk assessment can place the robot at risk. 

- The integrator or competent, qualified personnel shall conduct a cybersecurity risk assessment. 

###### NOTICE 

Only competent, qualified personnel shall be responsible for determining the need for specific cybersecurity measures and for providing the required cybersecurity measures. 

### 11.2. Cybersecurity Requirements 

###### Description 

Configuring your network and securing your robot requires you to implement the threat measures for cybersecurity. 

Follow all the requirements before you start configure your network, then verify the robot setup is secure. 

166 

User Manual 

UR5e 

11. Cybersecurity Threat Assessment 



###### Cybersecurity 

- Operating personnel must have a thorough understanding of general cybersecurity principles and advanced technologies as used in the UR robot. 

- Physical security measures must be implemented to allow only authorized personnel physical access to the robot. 

- There must be adequate control of all access points. For example: locks on doors, badge systems, physical access control in general. 

###### WARNING 

Connecting the robot to a network that is not properly secured, can introduce security and safety risks. 

- Only connect your robot to a trusted and properly secured network. 

###### Network configuration requirements 

- Only trusted devices are to be connected to the local network. 

- There must be no inbound connections from adjacent networks to the robot. 

- Outgoing connections from the robot are to be restricted to allow the smallest relevant set of specific ports, protocols and addresses. 

- Only URCaps and magic scripts from trusted partners can be used, and only after verifying their authenticity and integrity 

###### Robot setup security requirements 

- Change the default password to a new, strong password. 

- Disable the "Magic Files" when not actively used (PolyScope 5). 

- Disable SSH access when not needed. Prefer key-based authentication over password-based authentication 

- Set the robot firewall to the most restrictive usable settings and disable all unused interfaces and services, close ports and restrict IP addresses 

167 

UR5e 

User Manual 

11. Cybersecurity Threat Assessment 



### 11.3. Cybersecurity Hardening Guidelines 

Description Although PolyScope includes many features for keeping the network connection secure, you can harden security by observing to following guidelines: 

- Before connecting your robot to any network, always change the default password to a strong password. 

NOTICE 

You cannot retrieve or reset a forgotten or lost password. 

      - Store all passwords securely. 

- Use the built-in settings to restrict the network access to the robot as much as possible. 

- Some communication interfaces have no method of authenticating and encrypting communication. This is a security risk. Consider appropriate mitigating measures, based on your cybersecurity threat assessment. 

- SSH tunneling (Local port forwarding) must be used to access robot interfaces from other devices if the connection crosses the trust zone boundary. 

- Remove sensitive data from the robot before it is decommissioned. Pay particular attention to the URCaps and data in the program folder. 

   - To ensure secure removal of highly sensitive data, securely wipe or destroy the SD card. 

For information about setting an admin password and local port forwarding, see the Hamburger Menu. 

You can also read Secure Setup on <u>www.universal-robots.com/articles</u> 

168 

User Manual 

UR5e 

11. Cybersecurity Threat Assessment 



### 11.4. Passwords 

Description 

You can create and manage different types of password in PolyScope. An initial password must be set to access the full safety settings. The following password types are described below: 

- Administrator 

- Operational 

### 11.5. Password Settings 

###### To set a Password 

You must set a password to Unlock all safety settings that make up your Safety Configuration. If no safety password is applied, you are prompted to set it up. 

1. In your PolyScope header right corner, press the Hamburger menu and select Settings . 

2. On the left of the screen, in the blue menu, press Password and select Safety . 

3. In New password , type a password. 

4. Now, in Confirm new password , type the same password and press Apply . 

5. In the bottom left of the blue menu, press Exit to return to previous screen. 

You can press the Lock tab to lock all Safety settings again or simply navigate to a screen outside of the Safety menu. 



169 

UR5e 

User Manual 

11. Cybersecurity Threat Assessment 



### 11.6. Administrator Password 

###### Description 

Use the Administrator (Admin) Password to change the security configuration of the system, including network access. 

The Admin password is equal to the password used for the root user account on the Linux system running on the robot, which may be needed in some network use cases such as SSH or SFTP. 

###### WARNING 

You cannot recover a lost Admin password. 

- Take the appropriate steps to ensure your admin password is not lost. 



###### To set the Admin Password 

1. In the Header, tap the Hamburger menu icon and select Settings . 

2. Under Password , tap Admin . 

3. Under Current password , put in the default password: easybot . 

4. Under New password , create a new password. 

   - Creating a strong, secret password obtains the best security for your system. 

5. Under Confirm new password , repeat your new password. 

6. Tap Apply to confirm your password change. 

Safety 

The Safety password prevents unauthorized modification of the Safety settings. 

170 

User Manual 

UR5e 

11. Cybersecurity Threat Assessment 



### 11.7. Operational Password 

###### Description 

The Operational Mode Password, or mode password, creates two different user roles on PolyScope: 

- Manual 

- Automatic 

When the mode password is set, programs and installations can only be created and edited in Manual mode. Automatic mode only allows the operator to load pre-made programs . Once a password has been set, a new Mode icon appears in the Header. 

Switching operational modes, from Manual to Automatic and from Automatic to Manual, causes PolyScope to prompt for the new password. 



###### To set the Mode Password 

1. In the Header, tap the Hamburger menu icon and select Settings . 

2. Under Password , tap Mode . 

3. Under New password , create a new password. 

Creating a strong, secret password obtains the best security for your system. 

4. Under Confirm new password , repeat your new password. 

5. Tap Apply to confirm your password change. 

171 

UR5e 

User Manual 

12. Communication Networks 



## 12. Communication Networks 

### 12.1. Fieldbus 

Description You can use the Fieldbus options to define and configure the family of industrial computer network protocols used for real-time distributed control accepted by PolyScope: 

- MODBUS 

- Ethernet/IP 

- PROFINET 

- PROFIsafe 

172 

User Manual 

UR5e 

12. Communication Networks 



### 12.2. MODBUS 

Refresh Push this button to refresh all MODBUS connections. Refreshing disconnects all modbus units, and connects them back again. All statistics are cleared. 

Sequential Available only when Show Advanced Options selected. Selecting this checkbox forces the mode modbus client to wait for a response before sending the next request. This mode is required by some fieldbus units. Turning this option on may help when there are multiple signals, and increasing request frequency results in signal disconnects. The actual signal frequency may be lower than requested when multiple signals are defined in sequential mode. Actual signal frequency can be observed in signal statistics. The signal indicator turns yellow if the actual signal frequency is less than half of the value selected from the Frequency drop-down list. 

Signal value 

Here, the current value of the signal is shown. For register signals, the value is expressed as an unsigned integer. For output signals, the desired signal value can be set using the button. Again, for a register output, the value to write to the unit must be supplied as an unsigned integer. 

174 

User Manual 

UR5e 

12. Communication Networks 



Signal connec tivity status 

This icon shows whether the signal can be properly read/written (green), or if the unit responds unexpected or is not reachable (gray). If a MODBUS exception response is received, the response code is displayed. The MODBUS-TCP Exception responses are: 

|E1|ILLEGAL FUNCTION (0x01) The function code received in the<br>queryis not an allowable action for the server(or slave).|
|---|---|
|E2|ILLEGAL DATA ADDRESS (0x02) The function code received in<br>the query is not an allowable action for the server (or slave), check<br>that the entered signal address corresponds to the setup of the<br>remote MODBUS server.|
|E3|ILLEGAL DATA VALUE (0x03) A value contained in the query data<br>field is not an allowable value for server (or slave), check that the<br>entered signal value is valid for the specified address on the remote<br>MODBUS server.|
|E4|SLAVE DEVICE FAILURE (0x04) An unrecoverable error occurred<br>while the server (or slave) was attempting to perform the requested<br>action.|
|E5|ACKNOWLEDGE (0x05) Specialized use in conjunction with<br>programmingcommands sent to the remote MODBUS unit.|
|E6|SLAVE DEVICE BUSY (0x06) Specialized use in conjunction with<br>programming commands sent to the remote MODBUS unit, the<br>slave (server) is not able to respond now.|



Show Advanced Options 

This check box shows/hides the advanced options for each signal. 

175 

UR5e 

User Manual 

12. Communication Networks 



|Advan<br>ced<br>Optio<br>ns|Update Frequency|This menu can be used to change the update frequency of the<br>signal. This means the frequency with which requests are sent to<br>the remote MODBUS unit for either reading or writing the signal<br>value. When the frequency is set to 0, then modbus requests are<br>initiated on demand using a modbus_get_signal_status,<br>modbus_set_output_register, and modbus_set_output_signal<br>script functions.|
|---|---|---|
||Slave Address|This text field can be used to set a specific slave address for the<br>requests corresponding to a specific signal. The value must be in<br>the range 0-255 both included, and the default is 255. If you<br>change this value, it is recommended to consult the manual of<br>the remote MODBUS device to verify its functionality when<br>changingslave address.|
||Reconnect count|Number of times TCP connection was closed, and connected<br>again.|
||Connection status|TCP connection status.|
||Response time [ms]|Time between modbus request sent, and response received -<br>this is updated onlywhen communication is active.|
||Modbus packet errors|Number of received packets that contained errors (i.e. invalid<br>length, missingdata, TCP socket error).|
||Timeouts|Number of modbus requests that didn’t get response.|
||Requests failed|Number of packets that could not be sent due to invalid socket<br>status.|
||Actual freq.|The average frequency of client (master) signal status updates.<br>This value is recalculated each time the signal receives a<br>response from the server (or slave).|



All counters count up to 65535, and then wrap back to 0. 

176 

User Manual 

UR5e 

12. Communication Networks 



### 12.3. EtherNet/IP 

Description EtherNet/IP is a network protocol that enables the connection of the robot to an industrial EtherNet/IP Scanner Device. 

If the connection is enabled, you can select the action that occurs when a program loses EtherNet/IP Scanner Device connection. Those actions are: 

|None|PolyScope ignores the loss of EtherNet/IP connection and the<br>program continues to run.|
|---|---|
|Pause|PolyScope pauses the current program. The program resumes from<br>where it stopped.|
|Stop|PolyScope stops the current program.|



### 12.4. PROFINET 

###### Description 

The PROFINET network protocol enables or disables the connection of the robot to an industrial PROFINET IO-Controller. 

If the connection is enabled, you can select the action that occurs when a program loses PROFINET IO-Controller connection. Those actions are: 

|None|PolyScope ignores the loss of PROFINET connection and the<br>program continues to run.|
|---|---|
|Pause|PolyScope pauses the current program. The program resumes from<br>where it stopped.|
|Stop|PolyScope stops the current program.|



If the PROFINET engineering tool (e.g. TIA portal) emits a DCP Flash signal to the robot's PROFINET or PROFIsafe device, a popup in PolyScope is displayed. 

177 

UR5e 

User Manual 

12. Communication Networks 



### 12.5. PROFIsafe 

###### Description 

The PROFIsafe network protocol (implemented as version 2.6.1) allows the robot to communicate with a safety PLC according to ISO 13849, Cat 3 PLd requirements. The robot transmits safety state information to a safety PLC, then receives information to trigger safety related functions, such as: emergency stop or enter reduced mode. The PROFIsafe interface provides a safe, network-based alternative to connecting wires to the safety IO pins of the robot control box. 

PROFIsafe is only available on robots that have an enabling license, which you can obtain by contacting your local sales representative, once obtained, the license can be downloaded on <u>myUR.</u> 

Please refer to Robot Registration and URCap License files for information regarding robot registration and license activation. 

###### Adva A control message received from the safety PLC contains the information in the table below. nced Optio Signal Description ns 

|Signal|Description|
|---|---|
|E-Stop by system|Asserts the system e-stop.|
|Safeguard stop|Asserts the safeguard stop.|
|Reset safeguard stop|Resets safeguard stop state (on low-to-high transition in<br>automatic mode) if the safeguard stop input is cleared<br>beforehand.|
|Safeguard stop auto|Asserts safeguard stop if the robot is operating in Automatic<br>mode.<br>Safeguard stop auto shall only be used when a 3-Position<br>Enabling (3PE) Device is configured. If no 3PE Device is<br>configured, the safeguard stop auto acts as a normal<br>safeguard stopinput.|
|Reset safeguard stop<br>auto|Resets safeguard stop auto state (on low-to-high transition<br>when in automatic mode) if safeguard stop auto inputs are<br>cleared beforehand.|
|Reduced mode|Activates the Reduced mode safetylimits.|
|Operational mode|Activates either manual or automatic operational mode. If the<br>safety configuration "Operational mode selection via<br>PROFIsafe" is disabled, this field shall be omitted from the<br>PROFIsafe control message.|



178 

User Manual 

UR5e 

12. Communication Networks 



###### Advan A status message sent to the safety PLC contains the information in the table below. ced Optio Signal Description ns 

|Signal|Description|
|---|---|
|Stop, cat. 0|Robot is performing, or it has completed, a safety stop of category<br>0; A hard stop by immediate removal of power to the arm and the<br>motors.|
|Stop, cat. 1|Robot is performing, or it has completed, a safety stop of category<br>1; A controlled stop after which the motors are left in a power off<br>state with brakes engaged.|
|Stop, cat. 2|Robot is performing, or it has completed, a safety stop of category<br>2; A controlled stop after which the motors are left in a power on<br>state.|
|Violation|Robot is stopped because the safety system failed to comply with<br>the safetylimits currentlydefined.|
|Fault|Robot is stopped because of an unexpected exceptional error in<br>the safetysystem.|
||Robot is stopped because of one of the following conditions:<br>• a safety PLC connected via PROFIsafe has asserted<br>system level e-stop.|
|E-stop by system|• an IMMI module connected to the control box has asserted<br>a system level e-stop.<br>• a unit connected to the system e-stop configurable safety<br>input of the control box has asserted system level e-stop.|
||The robot is stopped because of one of the following conditions:|
|E-stop by robot|• The e-stop button of the teach pendant is pressed.<br>• An e-stop button connected to the robot e-stop non-<br>configurable safetyinput of the control box ispressed.|
||The robot is stopped due to one of the following conditions:<br>• A safety PLC connected via PROFIsafe has asserted the<br>safeguard stop.<br>• A unit connected to the safeguard stop non-configurable<br>input of the control box has asserted the safeguard stop.|
|Safeguard stop|• A unit connected to the safeguard stop configurable safety<br>input of the control box has asserted the safeguard stop.<br>The signal follows the safeguard reset semantics. A configured<br>safeguard stop reset functionality shall be used to reset this<br>signal.<br>PROFIsafe implies use of the safeguard reset functionality.|



179 

UR5e 

User Manual 

12. Communication Networks 



|Advan<br>ced|Signal|Description|
|---|---|---|
|Optio<br>ns|Safeguard stop auto|The robot is stopped because it is operating in Automatic mode<br>and because of one of the following conditions:<br>• A safety PLC connected via PROFIsafe has asserted<br>safeguard stop auto.<br>• A unit connected to a safeguard stop auto configurable<br>safety input of the control box has asserted safeguard<br>stop auto.<br>The signal follows the safeguard reset semantics. A configured<br>safeguard stop reset functionality shall be used to reset this<br>signal<br>PROFIsafe implies use of the safeguard reset functionality|
||3PE stop|Robot is stopped because it is operating in Manual mode and<br>because of one of the following conditions:<br>• You are using a 3PE TP and none of the buttons are in the<br>middle position.|
|||• A 3-position enabling device connected to a configurable<br>safetyinput of the control box has asserted the 3PE stop.|
||Operational mode|Indication of the current operational mode of the robot.<br>This mode can be: Disabled(0), Automatic(1), or Manual(2).|
||Reduced mode|Reduced mode safetylimits are currentlyactive.|
||Active limit set|The active set of safety limits.<br>This can be: Normal(0), Reduced(1), or Recovery (2).|
||Robot moving|Robot is moving. If any joint moves at a velocity of 0.02 rad/s or<br>higher the robot is considered in motion.|
||Safe home position|Robot is at rest (robot not moving), and in the position defined as<br>the Safe Home Position.|



180 

User Manual 

UR5e 

12. Communication Networks 



Only one source can control the operational mode of the robot. Therefore other sources of mode selection are disabled when operational mode selection via PROFIsafe is enabled. 

You cannot release the robot's brakes if the PLC is not responding or if it is misconfigured. 

181 

UR5e 

User Manual 

13. Emergency Events 



## 13. Emergency Events 

Description Follow the instructions here to handle emergency situations, such as activating the emergency stop using the red push-button. This section also describes how to manually move the system without power. 

### 13.1. Emergency Stop 

Description The Emergency Stop or E-stop is the red push-button located on the Teach Pendant. Press the emergency stop push-button to stop all robot motion. Activating the emergency stop push-button causes a stop category one (IEC 60204-1). Emergency stops are not safeguards (ISO 12100). 

Emergency stops are complementary protective measures that do not prevent injury. The risk assessment of the robot application determines if additional emergency stop push-buttons are required. The emergency stop function and the actuating device must comply with ISO 13850. 

After an emergency stop is actuated, the push-button latches in that setting. As such, each time an emergency stop is activated, it must be manually reset at the push-button that initiated the stop. 

Before resetting the emergency stop push-button, you must visually identify and assess the reason the E-stop was first activated. Visual assessment of all the equipment in the application is required. Once the problem is solved, reset the emergency stop pushbutton. 

To reset the emergency stop push-button 

1. Hold the push-button and twist clockwise until the latching disengages. 

You should feel when the latching is disengaged, indicating the push-button is reset. 

2. Verify the situation and whether to reset the emergency stop. 

3. After resetting the emergency stop, restore power to the robot and resume operation. 

182 

User Manual 

UR5e 

13. Emergency Events 



### 13.2. Movement Without Drive Power 

###### Description 

In the unlikely event of an emergency, when powering the robot is either impossible or unwanted, you can use forced back-driving to move the robot arm. 

To perform forced back-driving you must push, or pull, the robot arm hard to move the joint. Each joint brake has a friction clutch that enables movement during high forced torque. 

Performing forced back-driving requires high force and cannot be performed by one person alone. In clamping situations, two or more people are required to do the forced back-driving. In some situations, two or more people are required to disassemble the robot arm. 

See the Service Manual for information about how to disassemble the robot. 

###### WARNING 

Risks due to an unsupported robot arm breaking or falling can cause injury or death. 

- Support the robot arm before removing power. 

###### NOTICE 

Moving the robot arm manually is intended for emergency and service purposes only. Unnecessary moving of the robot arm can lead to property damage. 

- Do not move the joint more than 160 degrees, to ensure the robot can find its original physical position. 

- Do not move any joint more than necessary. 

183 

UR5e 

User Manual 



### 13.3. Modes 

###### Description 

You access and activate different modes using Teach Pendant or the Dashboard Server. If an external mode selector is integrated, it control the modes - not PolyScope or the Dashboard Server. 

Automatic Mode Once activated, the robot can only execute a program of pre-defined tasks. You cannot modify or save programs and installations. Manual Mode Once activated, you can program the robot. You can modify and save programs and installations. 

High Speed Manual Mode can be used. It allows both tool speed and elbow speed to temporarily exceed 250 mm/s, while a hold-to-run is used. Hold-to-run is performed by continuous contact with the Speed Slider. 

The robot performs a Safeguard Stop in Manual mode, if a Three-Position Enabling Device is configured, and either released (not pressed) or it is fully compressed. 

Switching between Automatic mode to Manual mode requires the Three-Position Enabling Device to be fully released and pressed again to allow the robot to move. When using High Speed Manual Mode, use safety joint limits (see Joint Limits) or safety planes (see Safety Planes) to restrict the robot’s moving space. 

###### Mode 

###### switching 

|Operational mode<br>Manual|Automatic|
|---|---|
|Freedrive<br>x|*|
|Move robot with arrows on Move Tab<br>x|*|
|Edit & save program & installation<br>x||
|Execute Programs<br>Reduced<br>speed**|*|
|Start program from selected node<br>x||
|*Only when no Three-Position Enabling Device is configured.<br>** If a Three-Position Enabling Device is configured, the robot opera|tes at Manual|
|Reduced Speed unless High Speed Manual Mode is activated.||



184 

User Manual 

UR5e 



Notice when switching mode 

###### NOTICE 

- Some UR robot sizes might not be equipped with a Three-Position Enabling Device. If the risk assessment requires the enabling device, a 3PE Teach Pendant must be used. 

###### WARNING 

- Any suspended safeguards must be returned to full functionality before selecting Automatic Mode. 

- Wherever possible, Manual Mode shall only be used with all persons located outside the safeguarded space. 

- If an external mode selector is used, it must be placed outside the safeguarded space. 

- No-one is to enter, or be within, the safeguarded space in Automatic Mode, unless safeguarding is used or the collaborative application is validated for power and force limiting (PFL). 

To Switch Modes: PolyScope 

1. In the Header, select the profile icon. 

   - Automatic indicates the operational mode of the robot is set to Automatic. 

   - Manual indicates the operational mode of the robot is set to Manual. 

###### Using the Dashboard Server 

1. Connect to the Dashboard server. 

2. Use the Set Operational Mode commands. 

   - Set Operational Mode Automatic 

   - Set Operational Mode Manual 

   - Clear Operational Mode 

Three-Position When a Three-Position Enabling Device is used and the robot is in Manual Mode, Enabling movement requires pressing the Three-Position Enabling Device to the center-on Device position. The Three-Position Enabling Device has no effect in Automatic Mode. 

A 3PE Teach Pendant is recommended for programming. If another person can be within the safeguarded space when in Manual Mode, an additional device can be integrated and configured for the additional person's use. 

185 

UR5e 

User Manual 



#### 13.3.1. Recovery Mode 

###### Description 

When a safety limit is exceeded, Recovery Mode is automatically activated, allowing the robot arm to be moved. Recovery Mode is a type of Manual Mode . You cannot run robot programs when Recovery Mode is active. 

During Recovery Mode, the robot arm is moved to be within joint limits, using either Freedrive or the Move tab in PolyScope. 

###### Safety limits of Recovery Mode 

|Safety Function|Limit|
|---|---|
|Joint Speed Limit|30 °/s|
|Speed Limit|250 mm/s|
|Force Limit|100 N|
|Momentum Limit|10 kgm/s|
|Power Limit|80 W|



The safety system issues a Stop Category 0 if a violation of these limits appears. 

###### WARNING 

Failure to use caution when moving the robot arm in recovery mode can lead to hazardous situations. 

- Use caution when moving the robot arm back within the limits, as limits for the joint positions, the safety planes, and the tool/end effector orientation are all disabled in recovery. 

#### 13.3.2. Backdrive 

Description Backdrive is a Manual Mode used to force specific joints to a desired position without releasing all brakes in the robot arm. 

This is sometimes necessary if the robot arm is close to collision and the vibrations that accompany a full restart are not desired. 

The robot joints feel heavy to move, while Backdrive is in use. 

You can use any of the following sequences to enable Backdrive: 

- 3PE Teach Pendant 

- 3PE device/switch 

- Freedrive on robot 

186 

User Manual 

UR5e 



###### 3PE Teach Pendant 

To use the 3PE TP button to backdrive the robot arm. 

1. On the Initialize screen, tap ON to start the power up sequence. 

2. When the robot state is Teach Pendant 3PE Stop , light-press, then light-pressand-hold, the 3PE TP button. 

The robot state changes to Backdrive . 

3. Now you can apply significant pressure to release the brake in a desired joint to move the robot arm. 

As long as light-press is maintained on the 3PE button, Backdrive is enabled, allowing the arm to move. 

###### 3PE device/switch 

To use a 3PE device/switch to backdrive the robot arm. 

1. On the Initialize screen, tap ON to start the power up sequence. 

2. When the robot state is Teach Pendant 3PE Stop , light-press, then light-pressand-hold, the 3PE TP button. 

The robot state changes to System 3PE Stop . 

3. Press and hold the 3PE device/switch. 

   - The robot state changes to Backdrive . 

4. Now you can apply significant pressure to release the brake in a desired joint to move the robot arm. 

As long as the hold is maintained on both the 3PE device/switch and the 3PE TP button, Backdrive is enabled, allowing the arm to move. 

###### Freedrive on robot 

To use Freedrive on robot to backdrive the robot arm. 

1. On the Initialize screen, tap ON to start the power up sequence. 

2. When the robot state is Teach Pendant 3PE Stop , press and hold the Freedrive on robot . 

The robot state changes to Backdrive . 

3. Now you can apply significant pressure to release the brake in a desired joint to move the robot arm. 

As long as the hold is maintained on the Freedrive on robot, Backdrive is enabled, allowing the arm to move. 

187 

UR5e 

User Manual 



##### **Backdrive Inspection** 

Description If the robot is close to colliding with something, you can use Backdrive to move the robot arm to a safe position before initializing. 

3PE Teach Pendant 



188 

User Manual 

UR5e 



###### Enable Backdrive 



<!-- Start of picture text -->
1. Press ON to enable power. Status changes to Robot Active<br><!-- End of picture text -->



2. Press and hold Freedrive. Status changes to Backdrive 



3. Move robot as in Freedrive mode. Joint brakes are released where needed once the Freedrive button is activated. NOTICE In Backdrive Mode the robot is “heavy” to move around. MANDATORY ACTION You must test Backdrive mode on all joints. 

###### Safety settings 

Verify the robot safety settings comply with the robot installation risk assessment. 

Additional safety inputs Check which safety inputs and outputs are active and that they can be triggered via and outputs PolyScope or external devices. are still functioning 

189 

UR5e 

User Manual 



190 

User Manual 

UR5e 

14. Transportation 



## 14. Transportation 

###### Description 

Only transport the robot in its original packaging. Save the packaging material in a dry place if you want to move the robot later. 

When moving the robot from its packaging to the installation space, hold both tubes of the robot arm at the same time. Hold the robot in place until all mounting bolts are securely tightened at the base of the robot. Lift the Control Box by its handle. 

###### Warning: Lifting 

###### WARNING 

Incorrect lifting techniques, or using improper lifting equipment, can lead to injury. 

- Avoid overloading your back or other body parts when lifting the equipment. 

- Use proper lifting equipment. 

- All regional and national lifting guidelines shall be followed. 

- Make sure to mount the robot according to the instructions in Mechanical Interface. 

###### NOTICE 

If the robot is attached to 3rd-party application / installation during transport, please refer to the following: 

- Transporting the robot without its original packaging will void all warranties from Universal Robots A/S. 

- If the robot is transported attached to a 3rd-party application / installation, follow the recommendations for transporting the robot without the original transport packaging. 

###### Disclaimer 

Universal Robots cannot be held responsible for any damage caused by transportation of the equipment. 

You can see the recommendations for transportation without packaging at: <u>universalrobots.com/manuals</u> 

191 

UR5e 

User Manual 

14. Transportation 



###### Description 

Universal Robots always recommends transporting the robot in its original packaging. These recommendations are written to reduce unwanted vibrations in joints and brake systems and reduce joint rotation. 

If the robot is transported without its original packaging, then please refer to the following guidelines: 

- Fold the robot as much as possible – do not transport the robot in the singularity position. 

- Move the center of gravity in the robot as close to the base as possible. 

- Secure each tube to a solid surface on two different points on the tube. 

- Secure any attached end effector rigidly in 3 axes. 

###### Transport 

Fold the robot as much as possible. Do not transport extended. (singularity position) Secure the tubes to a solid surface. Secure attached end effector in 3 axes. 







192 

User Manual 

UR5e 

15. Maintenance and Repair 



## 15. Maintenance and Repair 

###### Description 

Perform any inspection in compliance with all safety instructions in this manual and according with local requirements. 

Conduct all maintenance, inspection, calibration and repair work according to the latest version of Service Manual on the documentation website: <u>http://www.universal-</u> 

###### <u>robots.com/manuals</u> 

Repair work should only be done by Universal Robots. Client designated, trained individuals can do repair work, provided they follow the Service Manual. See the Service Manual: Chapter 5 for full inspection plan for trained individuals All parts returned to Universal Robots shall be returned according to terms in the Service Manual. 

###### Safety for Maintenance 

After maintenance and repair work, checks must be done to ensure the required safety level. Checks must adhere to valid national or regional work safety regulations. The correct functioning of all safety functions shall also be tested. 

The purpose of maintenance and repair work is to ensure that the system is kept operational or, in the event of a fault, to return the system to an operational state. Repair work includes troubleshooting in addition to the actual repair itself. 

When working on the robot arm or control box, you must observe the procedures and warnings below. 

###### Warning 

###### WARNING 

Failure to adhere to any of the safety practices, listed below, can result in injury. 

- Unplug the main power cable from the bottom of the Control Box to ensure that it is completely unpowered. Power off any other source of energy connected to the robot arm or Control Box. Take necessary precautions to prevent other persons from powering on the system during the repair period. 

- Check the earth connection before re-powering the system. 

- Observe ESD regulations when parts of the robot arm or Control Box are disassembled. 

- Prevent water and dust from entering the robot arm or Control Box. 

###### Warning: Electricity 

###### WARNING: ELECTRICITY 

Disassembling the Control Box power supply too quickly after switching off, can result in injury due to electrical hazards. 

- Avoid disassembling the power supply inside the Control Box, as high voltages (up to 600 V) can be present inside these power supplies for several hours after the Control Box has been switched off. 

193 

UR5e 

User Manual 

15. Maintenance and Repair 



### 15.1. Testing Stopping Performance 

Description Test periodically to determine if stopping performance is degraded. Increased stopping times can require safeguarding to be modified, possibly with changes to the installation. If stop time and/or stop distance safety functions are used and are the basis of the risk reduction strategy, no monitoring or testing of stopping performance is required. The robot does continuous monitoring. 

### 15.2. Robot Arm Cleaning and Inspection 

Description As part of regular maintenance the robot arm can be cleaned, in accordance with the recommendations in this manual and local requirements. 

Cleaning To address the dust, dirt, or oil on the robot arm and/or Teach Pendant, simply use a cloth Methods alongside one of the cleaning agents provided below. 

Surface Preparation : Before applying the below solutions, surfaces may need to be prepared by removing any loose dirt or debris. 

Cleaning agents : 

- Water 

- 70% Isopropyl alcohol 

- 10% Ethanol alcohol 

- 10% Naphtha (Use to remove grease.) 

Application : The solution is typically applied to the surface that needs cleaning using a spray bottle, brush, sponge, or cloth. It can be applied directly or diluted further depending on the level of contamination and the type of surface being cleaned. Agitation : For stubborn stains or heavily soiled areas, the solution may be agitated using a brush, scrubber, or other mechanical means to help loosen the contaminants. Dwell Time : If necessary, the solution is allowed to dwell on the surface for a up to 5 minutes to penetrate and dissolve the contaminants effectively. Rinsing : After the dwell time, the surface is typically rinsed thoroughly with water to remove the dissolved contaminants and any remaining cleaning agent residue. It's essential to ensure thorough rinsing to prevent any residue from causing damage or posing a safety hazard. 

Drying : Finally, the cleaned surface may be left to air dry or dried using towels. 

###### WARNING 

DO NOT USE BLEACH in any diluted cleaning solution. 

194 

User Manual 

UR5e 

15. Maintenance and Repair 



###### WARNING 

Grease is an irritant and can cause an allergic reaction. Contact, inhalation or ingestion can cause illness or injury. To prevent illness or injury, adhere to the following: 

- PREPARATION: 

   - Ensure that the area is well ventilated. 

   - Have no food or beverages around the robot and cleaning agents. 

   - Ensure that an eye wash station is nearby. 

   - Gather the required PPE (gloves, eye protection) 

- WEAR : 

   - Protective gloves: Oil resistant gloves (Nitrile) impermeable and resistant to product. 

   - Eye protection is recommended to prevent accidental contact of grease with eyes. 

- DO NOT INGEST. 

- In the event of 

   - contact with skin, wash with water and a mild cleaning agent 

   - a skin reaction, get medical attention 

   - contact with the eyes, use an eyewash station, get medical attention. 

   - inhalation of vapors or ingestion of grease, get medical attention 

- After grease work 

   - clean contaminated work surfaces. 

   - dispose responsibly of any used rags or paper used for cleaning. 

- Contact with children and animals is prohibited. 

195 

UR5e 

User Manual 

15. Maintenance and Repair 



###### Robot Arm Inspection Plan 

The table below is a checklist of the type of inspections recommended by Universal Robots. Perform inspections regularly as advised in the table. Any referenced parts found to be in an unacceptable state must be rectified or replaced. 

|Insp|ection action type||Timeframe|||
|---|---|---|---|---|---|
||||Monthly|Biannually|Annually|
|1|Check flat rings|V||✘||
|2|Check robot cable|V||✘||
|3|Check robot cable connection|V||✘||
|4|Check Robot Arm mounting bolts<br>*|F|✘|||
|5|Check Tool mounting bolts*|F|✘|||
|6|Round Sling|F|||✘|



196 

User Manual 

UR5e 

15. Maintenance and Repair 



###### Robot Arm Inspection Plan 

###### NOTICE 

Using compressed air to clean the robot arm can damage the robot arm components. 

- Never use compressed air to clean the robot arm. 



197 

UR5e 

User Manual 

15. Maintenance and Repair 



###### Robot Arm Inspection Plan 

1. Move the Robot Arm to ZERO position, if possible. 

2. Turn off and disconnect the power cable from Control Box. 

3. Inspect the cable between Control Box and Robot Arm for any damage. 

4. Check the base mounting bolts are properly tightened. 

5. Check the tool flange bolts are properly tightened. 

6. Inspect the flat rings for wear and damage. 

   - Replace the flat rings if they are worn out or damaged. 

###### NOTICE 

If any damage is observed on a robot within the warranty period, contact the distributor where the robot was purchased. 

###### Inspection 

1. Unmount any tool/s or attachment/s or set the TCP/Payload/CoG according to tool specifications. 

2. To move the robot arm in Freedrive: 

   - On a 3PE Teach Pendant, rapidly light-press, release, light-press again and keep holding the 3PE button in this position. 



###### Power button 



3PE button 

3. Pull/Push the robot to a horizontally elongated position and release. 



4. Verify the robot arm can maintain the position without support and without activating Freedrive. 

198 

User Manual 

UR5e 

15. Maintenance and Repair 



### 15.3. Log Tab 

Description 

The Log tab displays information about the robot arm and Control Box. 



###### Readings and Joint Load 

The Readings pane displays Control Box information. The Joint Load pane displays information for each robot arm joint. 

Each joint displays: 

- Temperature 

- Load 

- Status 

- Voltage 

###### Date Log 

The first column displays log entries, categorized by the severity. The second column shows a paperclip if there is an Error Report associated with the log entry. The next two columns display the messages’ time of arrival and the source of the message. The last column shows a short description of the message itself. 

Some log messages are designed to provide more information that is displayed on the right side, after selecting the log entry. 

199 

UR5e 

User Manual 

15. Maintenance and Repair 



Message You can filter messages by selecting the toggle buttons that correspond to the severity of the Severity log entry or by whether an attachment is present. The following table describes message severity. 



|Provides general information, such as status of a program, changes of<br>the controller and controller version.|
|---|
|Issues that may have occurred but the system was able to recover.|
|A violation occurs if the safety limit is exceeded. This causes the robot<br>toperform a safetyrated stop.|
|A fault occurs if there is an unrecoverable error in the system. This<br>causes the robot to perform a safety rated stop.|



When you select a log entry, additional information appears on the right side of the screen. Selecting the attachments filter either displays entry attachments exclusively or, displays all entries. 

###### Saving Error A detailed status report is available when a paper clip icon appears on the log line. Reports 

NOTICE The oldest report is deleted when a new one is generated. Only the five most recent reports are stored. 

1. Select a log line and tap the Save Report button to save the report to a USB drive. 

   - You can save the report while a program is running. 

You can track and export the following list of errors: 

- Emergency stop 

- Fault 

- Internal PolyScope exceptions 

- 1Robot Stop 

- Unhandled exception in URCap 

- Violation 

The exported report contains: a user program, a history log, an installation and a list of running services. 

> 1Robot stop was previously known as "Protective Stop" for Universal Robots robots. 

200 

User Manual 

UR5e 

15. Maintenance and Repair 



Technical Support File 

The report file contains information that is helpful to diagnose and reproduce issues. The file contains records of previous robot failures, as well as current robot configurations, programs and installations. The report file can be saved to external USB drive. On the Log screen, tap Support file and follow the on-screen instructions to access the function. 

###### NOTICE 

The export process can take up to 10 minutes depending on USB drive speed and the size of files collected from robot file system. The report is saved as a regular zip file, that is not password protected, and can be edited before sending to technical support. 

201 

UR5e 

User Manual 

15. Maintenance and Repair 



### 15.4. Program and Installation Manager 

###### Description 

The Program and Installation Manager refers to three icons that allow you to create, load and configure Programs and Installations: 

- New... Allows you to create a new Program and/or Installation. 

- Open... Allows you to load a Program and/or Installation. 

- Save... Offers saving options for a Program and/or Installation. 

The File Path displays your current loaded Program name and the type of Installation. File Path changes when you create or load a new Program or Installation. You can have several installation files for a robot. Programs created load and use the active installation automatically. 



###### To load a 

progra m 

1. In the Program and Installation Manager, tap Open... and select Program. 

2. On the Load Program screen, select an existing program and tap Open. 

3. In the File Path, verify that the desired program name is displayed. 



202 

User Manual 

UR5e 

15. Maintenance and Repair 



To load an installat ion 

1. In the Program and Installation Manager, tap Open... and select Installation. 

2. On the Load Robot Installation screen, select an existing installation and tap Open. 

3. In the Safety Configuration box, select Apply and restart to prompt robot reboot. 

4. Select Set Installation to set installation for the current Program. 

5. In the File Path, verify that the desired installation name is displayed. 

###### To use the save options 

Save... Depending on the program/installation you load-create, you can: 

- Save All to save the current Program and Installation immediately, without the system prompting to save to a different location or different name. If no changes are made to the Program or Installation, the Save All... button appears deactivated. 

- Save Program As... to change the new Program name and location. The current Installation is also saved, with the existing name and location. 

- Save Installation As... to change the new Installation name and location. The current Program is saved, with the existing name and location. 



### 15.5. Accessing Robot Data 

Description Use the About option to access and display different types of data about the robot. You can display the following types of robot data: 

- General 

- Version 

- Legal 

204 

User Manual 

UR5e 

15. Maintenance and Repair 



###### To display data about the robot 

1. In the Header, tap the Hamburger menu. 

2. Select About . 

3. Tap General to access the robot's software version, network settings and serial number. 

For the other data types you can: 

   - Tap Version to display more detailed data about the robot's software version. 

   - Tap Legal to display data about the robot's software license/s. 

4. Tap Close to return to your screen. 

205 

UR5e 

User Manual 

16. Disposal and Environment 



## 16. Disposal and Environment 

Description Universal Robots robots must be disposed of in accordance with the applicable national laws, regulations and standards. this responsibility rests with the owner of the robot. 

UR robots are produced in compliance with restricted use of hazardous substances to protect the environment; as defined by the European RoHS directive 2011/65/EU. If robots (robot arm, Control Box, Teach Pendant) are returned to Universal Robots Denmark, then the disposal is arranged by Universal Robots A/S. 

The disposal fee for UR robots sold on the Danish market is prepaid to DPA-system by Universal Robots A/S. Importers in countries covered by the European WEEE Directive 2012/19/EU must make their own registration to the national WEEE register of their country. The fee is typically less than 1€/robot. 

You can find a list of national registers here: <u>https://www.ewrn.org/national-registers.</u> Search for Global Compliance here: <u>https://www.universal-robots.com/download.</u> 

206 

User Manual 

UR5e 

16. Disposal and Environment 



###### Substances in the UR robot 

###### Robot arm 

- Tubes, Base Flange, Tool mounting bracket: Anodized aluminum 

- Joint housings: Powder coated aluminum 

- Black band sealing rings: AEM rubber 

   - additional slip ring under black band: moulded black plastic 

- Endcaps/ lids: PC/ASA Plastic 

- Minor mechanical components e.g. screws, nuts, spacers (steel, brass, and plastic) 

- Wire bundles with copper wires and minor mechanical components e.g. screws, nuts, spacers (steel, brass, and plastic) 

###### Robot arm joints (internal) 

- Gears: Steel and grease (see the Service Manual) 

- Motors: Iron core with copper wires 

- Wire bundles with copper wires, PCB's, various electronic components and minor mechanical components 

- Joint seals and O-rings contain a small amount of PFAS which is a compound within PTFE (commonly known as Teflon<sup>TM</sup> ). 

- Grease: synthetic + mineral oil with a thickener of either lithium complex soap or Urea. Contains molybdenum. 

   - Depending on model and date of production, the color of the grease could be yellow, magenta, dark pink, red, green. 

   - See the Service Manual for handling precautions and to get Grease Safety Data Sheets 

###### Control box 

- Cabinet (enclosure): Powder coated steel 

   - Standard Control Box 

- Aluminum sheet metal housing (internal to the cabinet). This is also the housing of the OEM controller. 

   - Standard Control Box and OEM controller. 

- Wire bundles with copper wires, PCB's, various electronic components, plastic connectors, and minor mechanical components e.g. screws, nuts, spacers (steel, brass, and plastic) 

- A lithium battery is mounted to a PCB. See the Service Manual for how to remove. 

207 

UR5e 

User Manual 

17. Declarations and Certificates (original EN) 



## 17. Declarations and Certificates (original EN) 

|EU Declaration of Incorp|oration (DOI) (in accordance with 2006/42/EC Annex II B) original EN|
|---|---|
|Manufacturer|Universal Robots A/S<br>Energivej 51,<br>DK-5260 Odense S Denmark|
|Person in the Community<br>Authorized to Compile the<br>Technical File|David Brandt<br>Technology Officer, R&D<br>Universal Robots A/S, Energivej 25, DK-5260 Odense S|
|Description and Identification|of the Partially-Completed Machine(s)|
|Product and Function:|Industrial robot multi-purpose multi-axis manipulator with control box &<br>with or without teach pendant Function is determined by the completed<br>machine (robot application or cell with end-effector, intended use and<br>applicationprogram).|
||UR3e, UR5e, UR10e, UR16e (e-Series): Below cited certifications and<br>this declaration include:|
|Model:|•<br>Effective October 2020: Teach Pendants with 3-Position Enabling (3PE TP) &<br>standard Teach Pendants (TP).<br>•<br>Effective May 2021: UR10e specification improvement to 12.5kg maximum<br>payload.|
|Note: This Declaration of Incorporat|ion is NOT applicable when the UR OEM Controller is used.<br>|
||Starting20235000000 and higher|
|Serial Number:|yeare-Series3=UR3e, 5=UR5e, 3=UR3e, 0=UR10e (10kg), 2=UR10e(12.5),<br>6=UR16esequential numbering, restarting at 0 each year|
|Incorporation:|Universal Robots e-Series (UR3e, UR5e, UR10e and UR16e) shall only<br>be put into service upon being integrated into a final complete machine<br>(robot application or cell), which conforms with the provisions of the<br>MachineryDirective and other applicable Directives.|



It is declared that the above products fulfil, for what is supplied, the following directives as detailed below: When this incomplete machine is integrated and becomes a complete machine, the integrator is responsible for determining that completed machine fulfils all applicable Directives and providing the Declaration of Conformity. 

The following essential requirements have been fulfilled: I. Machinery Directive 1.1.2, 1.1.3, 1.1.5, 1.2.1, 1.2.4.3, 1.2.5, 1.2.6, 1.3.2, 1.3.4, 1.3.8.1, 1.3.9, 1.5.1, 1.5.2, 2006/42/EC 1.5.5, 1.5.6, 1.5.10, 1.6.3, 1.7.2, 1.7.4, 4.1.2.3, 4.1.3 Annex VI. It is declared that the relevant technical documentation has been II. Low-voltage Directive compiled in accordance with Part B of Annex VII of the Machinery 2014/35/EU Directive. III. EMC Directive 2014/30/EU Reference the LVD and the harmonized standards used below. Reference the EMC Directive and the harmonized standards used below. 

Reference to the harmonized standards used, as referred to in Article 7(2) of the MD & LV Directives and Article 6 of the EMC Directive: 

208 

User Manual 

UR5e 

17. Declarations and Certificates (original EN) 



|(I) EN ISO 10218-1:2011 TÜV Nord|(I) (II) EN 60204-1:2018 as|(II) EN 60664-1:2007 (III) EN 61000-3-3:|
|---|---|---|
|Certificate # 44 708 14097607 (I) EN ISO|applicable (II) EN|<br>2013 (III) EN 61000-6-1:2019 UR3e &|
|13732-1:2008 as applicable (I) EN ISO|60529:1991+A1:2000+A2:2013 (I)|<br>UR5e ONLY (III) EN 61000-6-2:2019 (III)|
|13849-1:2015 TÜV Nord Certificate # 44 207<br>14097610 (I) EN ISO 13849-2:2012 (I) EN<br>ISO 13850:2015|EN 60947-5-5:1997+A1:2005<br>+A11:2013+A2:2017 (I) EN 60947-5-<br>8:2020 (III) EN 61000-3-2:2019|<br>EN 61000-6-3:2007+A1: 2011 UR3e &<br>UR5e ONLY (III) EN 61000-6-4:2019|
|Reference to other technical standards|and technical specifications used|:|
|(I) ISO 9409-1:2004 [Type 50-4-M6] (I)|(II) EN 60320-1:2021 (III) EN 60068-|(II) EN 61784-3:2010 [SIL2] (III) EN|
|ISO/TS 15066:2016 as applicable (III) EN|2-27:2008 (III) EN 60068-2-|61326-3-1: 2017 [Industrial locations SIL|
|60068-2-1: 2007 (III) EN 60068-2-2:2007|64:2008+A1:2019|2]|



The manufacturer, or his authorised representative, shall transmit relevant information about the partly completed machinery in response to a reasoned request by the national authorities. Approval of full quality assurance system (ISO 9001), by the notified body Bureau Veritas, certificate #DK015892. 



209 

UR5e 

User Manual 

18. Declarations and Certificates 



## 18. Declarations and Certificates 

|EU Declaration of Incorp|oration (DOI) (in accordance with 2006/42/EC Annex II B) original EN|
|---|---|
|Manufacturer|Universal Robots A/S<br>Energivej 25,<br>DK-5260 Odense S Denmark|
|Person in the Community|David Brandt|
|Authorized to Compile the|Technology Officer, R&D|
|Technical File|Universal Robots A/S, Energivej 25, DK-5260 Odense S|
|Description and Identification o|f the Partially-Completed Machine(s)|
|Product and Function:|Industrial robot multi-purpose multi-axis manipulator with control box &<br>with or without teach pendant Function is determined by the completed<br>machine (robot application or cell with end-effector, intended use and<br>applicationprogram).|
|Model :|UR3e, UR5e, UR10e, UR16e (e-Series): Below cited certifications and<br>this declaration include:|
||• Effective October 2020: Teach Pendants with 3-Position Enabling<br>(3PE TP) & standard Teach Pendants (TP).<br>• Effective May 2021: UR10e specification improvement to 12.5kg<br>maximumpayload.|
||Note: This Declaration of Incorporation is NOT applicable when the UR OEM Controller<br>is used.|
|Serial Number:|Starting20235000000 and higher<br>yeare-Series3=UR3e, 5=UR5e, 3=UR3e, 0=UR10e (10kg), 2=UR10e(12.5),<br>6=UR16esequential numbering, restarting at 0 each year|
|Incorporation:|Universal Robots e-Series (UR3e, UR5e, UR10e and UR16e) shall only<br>be put into service upon being integrated into a final complete machine<br>(robot application or cell), which conforms with the provisions of the<br>MachineryDirective and other applicable Directives.|
|It is declared that the above pr|oducts fulfil, for what is supplied, the following directives as detailed below:|
|When this incomplete machine<br>for determining that completed<br>Conformity.|is integrated and becomes a complete machine, the integrator is responsible<br>machine fulfils all applicable Directives and providing the Declaration of|
|I. Machinery Directive<br>2006/42/EC|The following essential requirements have been fulfilled: 1.1.2, 1.1.3,<br>1.1.5, 1.2.1, 1.2.4.3, 1.2.5, 1.2.6, 1.3.2, 1.3.4, 1.3.8.1, 1.3.9, 1.5.1, 1.5.2,<br>1.5.5, 1.5.6, 1.5.10, 1.6.3, 1.7.2, 1.7.4, 4.1.2.3, 4.1.3, Annex VI. It is<br>declared that the relevant technical documentation has been compiled in<br>accordance with Part B of Annex VII of the MachineryDirective.|
|II. Low-voltage Directive<br>2014/35/EU<br>III. EMC Directive 2014/30/EU|Reference the LVD and the harmonized standards used below.<br>Reference the EMC Directive and the harmonized standards used below.|



Reference to the harmonized standards used, as referred to in Article 7(2) of the MD & LV Directives and Article 6 of the EMC Directive: 

210 

User Manual 

UR5e 

18. Declarations and Certificates 



(I) EN ISO 10218-1:2011 TÜV (I) (II) EN 60204-1:2018 as (II) EN 60664-1:2007 (III) EN 61000-3Nord Certificate # 44 708 applicable (II) EN 3: 2013 (III) EN 61000-6-1:2019 UR3e 14097607 60529:1991+A1:2000+A2:2013 (I) & UR5e ONLY (III) EN 61000-6-2:2019 (I) EN ISO 13732-1:2008 as EN 60947-5-5:1997+A1:2005 (III) EN 61000-6-3:2007+A1: 2011 applicable (I) EN ISO 13849+A11:2013+A2:2017 (I) EN 60947UR3e & UR5e ONLY (III) EN 61000-61:2015 TÜV Nord Certificate # 5-8:2020 (III) EN 61000-3-2:2019 4:2019 44 207 14097610 (I) EN ISO 13849-2:2012 (I) EN ISO 13850:2015 Reference to other technical standards and technical specifications used: (I) ISO 9409-1:2004 [Type 50(II) EN 60320-1:2021 (III) EN (II) EN 61784-3:2010 [SIL2] (III) EN 4-M6] (I) ISO/TS 15066:2016 60068-2-27:2008 (III) EN 60068-261326-3-1: 2017 [Industrial locations as applicable (III) EN 60068-264:2008+A1:2019 SIL 2] 1: 2007 (III) EN 60068-22:2007 

The manufacturer, or his authorised representative, shall transmit relevant information about the partly completed machinery in response to a reasoned request by the national authorities.Approval of full quality assurance system (ISO 9001), by the notified body Bureau Veritas, certificate #DK015892. 



211 

UR5e 

User Manual 

19. Safety Functions Table 



## 19. Safety Functions Table 

Description 

Universal Robots safety functions and safety I/O are PLd Category 3 (ISO 13849-1), where each safety function has a PFHD value less than 1.8E-07. The PFHD values are updated to include greater design flexibility for supply chain resilience. 

For Safety Function (SF) Descriptions see: Safety-related Functions and Interfaces. For safety I/O the resulting safety function including the external device, or equipment, is determined by the overall architecture and the sum of all PFHDs, including the UR robot safety function PFHD. 

###### NOTICE 

The Safety Functions tables presented in this chapter are simplified. You can find the comprehensive versions of them here: <u>https://www.universal-robots.com/support</u> 

SF# and Safety Function 

|SF1<br>Emergency<br>|Description|What<br>happens?|Tolerance<br>and PFHD|Affects|
|---|---|---|---|---|
|Stop<br>(according to<br>ISO 13850)|Pressing the Estop PB on the pendant<sup>1 </sup>or the<br>External Estop (if using the Estop Safety<br>Input) results in a Stop Cat 1 <sup>3</sup>with power||||
|See footnotes|removed from the robot actuators and the tool<br>I/O. Command<sup>1 </sup>all joints to stop and upon all<br>joints coming to a monitored standstill state,<br>power is removed.<br>For the integrated functional safety rating with<br>an external safety-related control system or<br>an external emergency stop device that is<br>connected to the Emergency Stop input, add<br>the PFHDof this safety-related input to the<br>PFHDof this safety function’s PFHDvalue<br>(less than 1.8E-07).|Category 1<br>stop (IEC<br>60204-1)|Tol: --<br>PFHD: 1.8E-<br>07|Robot<br>including<br>robot tool<br>I/O|



212 

User Manual 

UR5e 

19. Safety Functions Table 



|SF2<br>Safeguard<br>|Description||What<br>happens?|Tolerance<br>and PFHD|Affects|
|---|---|---|---|---|---|
|Stop 4<br>(Robot Stop<br>according to<br>ISO 10218-1)|This safety function is initiated by an extern<br>protective device using safety inputs that in<br>a Cat 2 stop<sup>3</sup>. The tool I/O are unaffected b<br>safeguard stop. Various configurations are<br>provided. If an enabling device is connecte<br>possible to configure the safeguard stop to<br>function in automatic mode ONLY. See the<br>Time and Stop Distance Safety Functions<sup>4</sup>.<br>the functional safety of the complete integra<br>safety function, add the PFHd of the extern<br>protective device to the PFHd of the Safegu<br>Stop.|al<br>itiate<br>y the<br>d, it's<br>Stop<br>For<br>ted<br>al<br>ard|Category 2<br>stop (IEC<br>60204-1)<br>SS2 stop<br>(as<br>described in<br>IEC 61800-<br>5-2)|Tol: --<br>PFHD: 1.8E-<br>07|Robot|
|SF3 Joint<br>Position<br>|Description|Wha|t happens?|Tolerance<br>and PFHD|Affects|
|Limit (soft<br>axis<br>limiting)|Sets upper and lower limits for the allowed<br>joint positions. Stopping time and distance is<br>not a considered as the limit(s) will not be<br>violated. Each joint can have its own limits.<br>Directly limits the set of allowed joint<br>positions that the joints can move within. It is<br>set in the safety part of the User Interface. It<br>is a means of safety-rated soft axis limiting<br>and space limiting, according to ISO 10218-<br>1:2011, 5.12.3.|W<br>moti<br>any<br>Sp<br>r<br>mo<br>exc<br>A r<br>be<br>ex|ill not allow<br>on to exceed<br>limit settings.<br>eed could be<br>educed so<br>tion will not<br>eed any limit.<br>obot stop will<br>initiated to<br>prevent<br>ceeding any<br>limit.|Tol: 5°<br>PFHD: 1.8E-<br>07|Joint<br>(each)|
|SF4 Joint<br>Speed<br>|Description|What|happens?|Tolerance<br>and PFHD|Affects|
|Limit|Sets an upper limit for the joint speed. Each<br>joint can have its own limit. This safety<br>function has the most influence on energy<br>transfer upon contact (clamping or<br>transient). Directly limits the set of allowed<br>joint speeds which the joints are allowed to<br>perform. It is set in the safety setup part of<br>the User Interface. Used to limit fast joint<br>movements, e.g. risks related to|Wi<br>moti<br>any li<br>Spe<br>reduc<br>will no<br>limit.<br>will b<br>preve|ll not allow<br>on to exceed<br>mit settings.<br>ed could be<br>ed so motion<br>t exceed any<br>A robot stop<br>e initiated to<br>nt exceeding|Tol: 1.15 °/s<br>PFHD: 1.8E-<br>07|Joint<br>(each)|
||singularities.||any limit.|||
|Joint|Exceeding the internal joint torque limit (each|joint) r|esults in a Cat|0<sup>3</sup>. This is not|accessible|
|Torque<br>Limit|to the user; it is a factory setting. It is NOT sho<br>there are no user settings and no user configu|wn as<br>ration|an e-Series sa<br>s.|fety function b|ecause|



213 

UR5e 

User Manual 

19. Safety Functions Table 



|SF5 Called<br>various<br>|Description|What<br>happens?|Tolerance<br>and PFHD|Affects|
|---|---|---|---|---|
|names: Pose<br>Limit, Tool<br>Limit,<br>Orientation<br>Limit, Safety<br>Planes,<br>Safety<br>Boundaries|Monitors the TCP Pose (position and<br>orientation) and will prevent exceeding a<br>safety plane or TCP Pose Limit. Multiple<br>pose limits are possible (tool flange, elbow,<br>and up to 2 configurable tool offset points<br>with a radius) Orientation restricted by the<br>deviation from the feature Z direction of the<br>tool flange OR the TCP. This safety function<br>consists of two parts. One is the safety<br>planes for limiting the possible TCP<br>positions. The second is the TCP<br>orientation limit, which is entered as an<br>allowed direction and a tolerance. This<br>provides TCP and wrist inclusion/ exclusion<br>zones due to the safety planes.|Will not allow<br>motion to<br>exceed any<br>limit settings.<br>Speed or<br>torques could<br>be reduced so<br>motion will not<br>exceed any<br>limit. A robot<br>stop will be<br>initiated to<br>prevent<br>exceeding any<br>limit. Will not<br>allow motion to<br>exceed any<br>limit settings.|Tol: 3° 40<br>mm<br>PFHD: 1.8E-<br>07|TCP<br>Tool<br>flange<br>Elbow|



|SF6<br>Speed<br>|Description|What happens?||Tolerance<br>and PFHD|Affects|
|---|---|---|---|---|---|
|Limit TCP||||||
|& Elbow|Monitors the<br>TCP and<br>elbow speed<br>to prevent<br>exceeding a<br>speed limit.|Will not allow motion to excee<br>Speed or torques could be r<br>will not exceed any limit. A r<br>initiated to prevent exceeding<br>allow motion to exceed an|d any limit settings.<br>educed so motion<br>obot stop will be<br>any limit. Will not<br>y limit settings.|Tol:50 mm/s<br>PFHD: 1.8E-<br>07|TCP|
|SF7<br>Force<br>|Description||What happens?|Tolerance<br>and PFHD|Affects|
|Limit<br>(TCP)|The Force Limi<br>robot at the TC<br>“elbow”. The sa<br>calculates the t<br>stay within the<br>TCP & the elbo<br>torque output to<br>range. This me<br>or elbow will sta<br>When a monito<br>Force Limit SF,<br>off” to a position<br>exceeded. The|t is the force exerted by the<br>P (tool center point) and<br>fety function continuously<br>orques allowed for each joint to<br>defined force limit for both the<br>w. The joints control their<br>stay within the allowed torque<br>ans that the forces at the TCP<br>y within the defined force limit.<br>red stop is initiated by the<br>the robot will stop, then “back-<br>where the force limit was not<br>n it will stop again.|Will not allow<br>motion to exceed<br>any limit settings.<br>Speed or torques<br>could be reduced<br>so motion will not<br>exceed any limit.<br>A robot stop will<br>be initiated to<br>prevent<br>exceeding any<br>limit. Will not<br>allow motion to<br>exceed any limit<br>settings.|Tol: 25N<br>PFHD: 1.8E-<br>07|TCP|



214 

User Manual 

UR5e 

19. Safety Functions Table 



###### SF8 Momentum Limit 

|Description|What happens?|Tolerance<br>and PFHD|Affects|
|---|---|---|---|
|The momentum<br>limit is very useful<br>for limiting<br>transient impacts.<br>The Momentum<br>Limit affects the<br>entire robot.|Will not allow motion to exceed any limit<br>settings. Speed or torques could be<br>reduced so motion will not exceed any<br>limit. A robot stop will be initiated to<br>prevent exceeding any limit. Will not<br>allow motion to exceed any limit settings.|Tol: 3kg m/s<br>PFHD: 1.8E-<br>07|Robot|



|SF9<br>Power<br>Liit|Description|What<br>happens?|Tolerance<br>and PFHD|Affects|
|---|---|---|---|---|
|m|This function monitors the mechanical work<br>(sum of joint torques times joint angular||||
||speeds) performed by the robot, which also<br>affects the current to the robot arm as well as<br>the robot speed. This safety function<br>dynamically limits the current/ torque but<br>maintains the speed.|Dynamic<br>limiting of the<br>current/torque|Tol: 10W<br>PFHD:1.8E-<br>07|Robot|



|SF10 UR<br>Robot<br>|Description|What<br>Happens|PFHD|Affects|
|---|---|---|---|---|
|Estop<br>Output|When configured for a Robot <Estop> output and<br>there is a robot stop, the dual outputs are LOW. If<br>there is no Robot <Estop> Stop initiated, dual<br>outputs are high. Pulses are not used but they are<br>tolerated.<br>These dual outputs change state for any external<br>Estop that is connected to configurable safety<br>inputs where this input is configured as an<br>Emergency Stop input.<br>For the integrated functional safety rating with an<br>external safety-related control system, add the<br>PFHD of this safety-related output to the PFHD of<br>the external safety-related control system.<br>For the Estop Output, validation is performed at<br>the external equipment, as the UR output is an<br>input to this external Estop safety function for<br>external equipment.<br>NOTE: If the IMMI (Injection Moulding Machine<br>Interface) is used, the UR Robot Estop output is<br>NOT connected to the IMMI. There is no Estop<br>output signal sent sent from the UR robot to the<br>IMMI.This is a feature to prevent an<br>unrecoverable stop condition.|Dual outputs<br>go low in event<br>of an Estop if<br>configurable<br>outputs are set|1.8E-<br>07|External<br>connection<br>to logic<br>and/or<br>equipment|



215 

UR5e 

User Manual 

19. Safety Functions Table 



|SF11 UR<br>|Description|What Happens|PFHD|Affects|
|---|---|---|---|---|
|Robot<br>Moving:<br>Digital<br>Output|Whenever the robot is moving (motion<br>underway), the dual digital outputs are<br>LOW. Outputs are HIGH when no<br>movement. The functional safety rating is<br>for what is within the UR robot. The<br>integrated functional safety performance<br>requires adding this PFHd to the PFHd of<br>the external logic (if any) and its<br>components.|If configurable<br>outputs are set:<br>• When the<br>robot is<br>moving<br>(motion<br>underway),<br>the dual<br>digital<br>outputs are<br>LOW.<br>• Outputs are<br>HIGH when<br>no<br>movement.|1.8E-<br>07|External<br>connection<br>to logic<br>and/or<br>equipment|
|SF12 UR<br>RbtNt|Description||PFHD|Affects|
|oo o<br>stopping:<br>Digital<br>Output|When the robot is STOPPING (in process<br>stand-still condition) the dual digital output<br>outputs are LOW, robot is NOT in the proc<br>NOT in a stand-still condition. The function<br>what is within the UR robot. The integrated<br>performance requires adding this PFHd to<br>external logic (if any) and its components.|of stopping or in a<br>s are HIGH. When<br>ess or stopping and<br>al safety rating is for<br>functional safety<br>the PFHd of the|1.8E-<br>07|External<br>connection<br>to logic<br>and/or<br>equipment|
|SF13 UR<br>|Description||PFHD|Affects|
|Robot|||||
|Reduced<br>Mode:<br>Digital<br>Output|When the robot is in reduced mode (or red<br>initiated), the dual digital outputs are LOW.<br>functional safety rating is for what is within<br>integrated functional safety performance re<br>PFHd to the PFHd of the external logic (if a<br>components.|uced mode is<br>See below. The<br>the UR robot. The<br>quires adding this<br>ny) and its|1.8E-<br>07|External<br>connection<br>to logic<br>and/or<br>equipment|
|SF14 UR<br>|Description||PFHD|Affects|
|Robot Not|||||
|Reduced<br>Mode:<br>Digital<br>Output|Whenever the robot is NOT in reduced mo<br>mode is not initiated), the dual digital outpu<br>functional safety rating is for what is within<br>integrated functional safety performance re<br>PFHd to the PFHd of the external logic (if a<br>components.|de (or the reduced<br>ts are LOW. The<br>the UR robot. The<br>quires adding this<br>ny) and its|1.8E-<br>07|External<br>connection<br>to logic<br>and/or<br>equipment|



216 

User Manual 

UR5e 

19. Safety Functions Table 



###### SF15 Stopping Time Limit 

|Description|What happens?|Tolerances<br>and PFHD:|Affects|
|---|---|---|---|
|Real time monitoring of conditions such that<br>the stopping time limit will not be exceeded.<br>Robot speed is limited to ensure that the<br>stop time limit is not exceeded.<br>The stopping capability of the robot in the<br>given motion(s) is continuously monitored<br>to prevent motions that would exceed the<br>stopping limit. If the time needed to stop the<br>robot is at risk of exceeding the time limit,<br>the speed of motion is reduced to ensure<br>the limit is not exceeded. A robot stop will<br>be initiated to prevent exceeding the limit.<br>The safety function performs the same<br>calculation of the stopping time for the<br>given motion(s) and initiates a cat 0 stop if<br>the stopping time limit will be or is<br>exceeded.|Will not allow the<br>actual stopping<br>time to exceed<br>the limit setting.<br>Causes<br>decrease in<br>speed or a robot<br>stop so as NOT<br>to exceed the<br>limit|TOL: 50 ms<br>PFHD: 1.8E-<br>07|Robot|



|SF16<br>Stopping<br>|Description|What happens?|Tolerances<br>and PFHD:|Affects|
|---|---|---|---|---|
|Distance<br>Limit|Real time monitoring of conditions such that<br>the stopping distance limit will not be<br>exceeded. Robot speed is limited to ensure<br>that the stop distance limit will not be<br>exceeded.<br>The stopping capability of the robot in the<br>given motion(s) is continuously monitored<br>to prevent motions that would exceed the<br>stopping limit. If the time needed to stop the<br>robot is at risk of exceeding the time limit,<br>the speed of motion is reduced to ensure<br>the limit is not exceeded. A robot stop will<br>be initiated to prevent exceeding the limit.<br>The safety function performs the same<br>calculation of the stopping distance for the<br>given motion(s) and initiates a cat 0 stop if<br>stopping time limit will be or is exceeded.|Will not allow the<br>actual stopping<br>time to exceed<br>the limit setting.<br>Causes<br>decrease in<br>speed or a robot<br>stop so as NOT<br>to exceed the<br>limit|TOL: 40 mm<br>PFHD: 1.8E-<br>07|Robot|



217 

UR5e 

User Manual 

19. Safety Functions Table 



|SF17 Safe<br>Home|Description|What happens?|Tolerances<br>and PFHD:|Affects|
|---|---|---|---|---|
|Position<br>"monitored<br>position"|Safety function which monitors a<br>safety rated output, such that it<br>ensures that the output can only be<br>activated when the robot is in the<br>configured and monitored “safe<br>home position”.<br>A stop cat 0 is initiated if the output<br>is activated when the robot is not in<br>the configured position.|The “safe home<br>output” can only be<br>activated when the<br>robot is in the<br>configured “safe<br>home position”|TOL: 1.7 °<br>PFHD: 1.8E-<br>07|External<br>connection<br>to logic<br>and/or<br>equipment|



Table 1 1Communications between the Teach Pendant, controller and within the robot (between footnotes joints) are SIL 2 for safety data, per IEC 61784-3. 

2Estop validation: the pendant Estop pushbutton is evaluated within the pendant, then communicated¹ to the safety controller by SIL2 communications. To validate the pendant Estop functionality, press the Pendant Estop pushbutton and verify that an Estop results. This validates that the Estop is connected within the pendant, the estop functions as intended, and the pendant is connected to the controller. 

3Stop Categories according to IEC 60204-1 (NFPA79). For the Estop, only stop category 0 and 1 are allowed according to IEC 60204-1. 

- Stop Category 0 and 1 result in the removal of drive power, with stop cat 0 being IMMEDIATE and stop cat 1 being a controlled stop (e.g. decelerate to a stop then removal of drive power). With UR robots, a stop category 1 is a controlled stop where power is removed when a monitored standstill is detected. 

- Stop Category 2 is a stop where drive power is NOT removed. Stop category 2 is defined in IEC 60204-1. Descriptions of STO, SS1 and SS2 are in IEC 61800-5-2. With UR robots, a stop category 2 maintains the trajectory, then retains power to the drives after stopping. 

4It is recommended to use the UR Stop Time and Stop Distance Safety Functions. These limits should be used for your application stop time/ safety distance values. 5Robot stop was previously known as "Protective stop" for Universal Robots robots. 

218 

User Manual 

UR5e 

19. Safety Functions Table 



### 19.1. Table 1a 

###### Reduced Mode SF parameter settings change 

###### Safeguard Reset 

|Description|PFHD|Affects|
|---|---|---|
|Reduced Mode can be initiated by a safety plane/ boundary<br>(starts at 2cm of the plane and reduced mode settings are<br>achieved within 2cm of the plane) or by use of an input to initiate<br>(will achieve reduced settings within 500ms). When the external<br>connections are Low, Reduced Mode is initiated. Reduced Mode<br>means that ALL reduced mode limits are ACTIVE.<br>Reduced mode is not a safety function, rather it is a state change<br>affecting the settings of the following safety function limits: joint<br>position, joint speed, TCP pose limit, TCP speed, TCP force,<br>momentum, power, stopping time, and stopping distance.<br>Reduced mode is a means of parametrization of safety functions<br>in accordance with ISO 13849-1. All parameter values need to be<br>verified and validated as to whether they are appropriate for the<br>robot application.|Less<br>than<br>1.8E-<br>07|Robot|
|Description|PFHD|Affects|
|When configured for Safeguard Reset and the external connections<br>transition from low to high, the safeguard stop RESETS. Safety<br>input to initiate a reset of safeguard stop safety function.|Less<br>than<br>1.8E-<br>07<br>Input to<br>SF2|Robot|



###### 3-Position Enabling Device INPUT 

|Description|PFHD|Affects|
|---|---|---|
|When the external Enabling Device connections are Low, a|||
|Safeguard Stop (SF2) is initiated. Recommendation: Use with a<br>mode switch as a safety input. If a mode switch is not used and<br>connected to the safety inputs, then the robot mode will be<br>determined by the User Interface. If the User Interface is in:<br>• “running mode”, the enabling device will not be active.|Less<br>than<br>1.8E-<br>07<br>Input to|Robot|
|• “programming mode”, the enabling device will be active. It is<br>possible to use password protection for changing the mode by<br>the User Interface.|SF2||



219 

UR5e 

User Manual 

19. Safety Functions Table 



|Mode<br>|
|---|
|switch<br>INPUT|



|Description|PFHD|Affects|
|---|---|---|
|When the external connections are Low, Operation Mode (running/<br>automatic operation in automatic mode) is in effect. When High, mode<br>is programming/ teach. Recommendation: Use with an enabling<br>device, for example a UR e-Series Teach Pendant with an integrated<br>3-position enabling device.|Less<br>than<br>1.8E-<br>07|Robot|
|When in teach/program, initially both TCP speed and elbow speed will<br>be limited to 250mm/s. The speed can manually be increased by using<br>the pendant user interface “speed-slider”, but upon activation of the|Input to<br>SF2||
|enabling device, the speed limitation will reset to 250mm/s.|||



###### Freedrive INPUT 

|Description|PFHD|Affects|
|---|---|---|
|Recommendation: Use with 3PE TP and/or 3 Position Enabling|Less||
|Device INPUT. When Freedrive INPUT is High, the robot will only<br>enter Freedrive if the following conditions are satisfied:<br>• 3PE TP button is not pressed<br>• 3 Position Enabling Device INPUT either not configured or<br>not pressed (INPUT Low)|than<br>1.8E-<br>07<br>Input to<br>SF2|Robot|



### 19.2. Table 2 

Description UR e-Series robots comply with ISO 10218-1:2011 and the applicable portions of ISO/TS 15066. It is important to note that most of ISO/TS 15066 is directed towards the integrator and not the robot manufacturer. ISO 10218-1:2011, clause 5.10 collaborative operation details 4 collaborative operation techniques as explained below. It is very important to understand that collaborative operation is of the APPLICATION when in AUTOMATIC mode. 

Collaborative Operation 2011 edition, clause 5.10.2 

|Technique|Explanation|UR e-Series|
|---|---|---|
|Safety-rated<br>monitored<br>stop|Stop condition where position is held at a<br>standstill and is monitored as a safety<br>function. Category 2 stop is permitted to<br>auto reset. In the case of resetting and<br>restarting operation after a safety -rated<br>monitored stop, see ISO 10218-2 and|UR robots’ safeguard<br>stop is a safety-rated<br>monitored stop, See SF2<br>on page 1. It is likely, in<br>the future, that “safety-<br>rated monitored stop” will|
||ISO/TS 15066 as resumption shall not<br>cause hazardous conditions.|not be called a form of<br>collaborative operation.|



220 

User Manual 

UR5e 

19. Safety Functions Table 



|Collaborative<br>|Technique|Explanation|UR e-Series|
|---|---|---|---|
|Operation 2011<br>edition, clause<br>5.10.3|Hand-<br>guiding|This is essentially individual<br>and direct personal control<br>while the robot is in automatic<br>mode. Hand guiding<br>equipment shall be located<br>close to the end-effector and<br>shall have:<br>• an Emergency Stop<br>pushbutton<br>• a 3-position enabling<br>device<br>• a safety-rated<br>monitored stop<br>function<br>• a settable safety-rated<br>monitored speed<br>function|UR robots do not provide hand-guiding<br>for collaborative operation. Hand-<br>guided teach (free drive) is provided<br>with UR robots but this is for<br>programming in manual mode and not<br>for collaborative operation in automatic<br>mode.|



221 

UR5e 

User Manual 

19. Safety Functions Table 



|Collaborative<br>|Technique|Explanation|UR e-Series|
|---|---|---|---|
|Operation 2011<br>edition, clause<br>5.10.4|Speed and<br>separation<br>monitoring<br>(SSM) safety<br>functions|SSM is the robot<br>maintaining a separation<br>distance from any<br>operator (human). This is<br>done by monitoring of the<br>distance between the<br>robot system and<br>intrusions to ensure that<br>the MINIMUM<br>PROTECTIVE<br>DISTANCE is assured.<br>Usually, this is<br>accomplished using<br>Sensitive Protective<br>Equipment (SPE), where<br>typically a safety laser<br>scanner detects intrusion<br>(s) towards the robot<br>system.<br>This SPE causes:<br>1. dynamic changing<br>of the parameters<br>for the limiting<br>safety functions; or<br>2. a safety-rated<br>monitored stop<br>condition.<br>Upon detection of the<br>intrusion exiting the<br>protective device’s<br>detection zone, the robot<br>is permitted to:<br>1. resume the<br>“higher” normal<br>safety function<br>limits in the case of<br>1) above<br>2. resume operation<br>in the case of 2)<br>above<br>In the case of 2) 2),<br>restarting operation after<br>a safety -rated monitored<br>stop, see ISO 10218-2<br>and ISO/TS 15066 for<br>requirements.|To facilitate SSM, UR robots have the<br>capability of switching between two sets of<br>parameters for safety functions with<br>configurable limits (normal and reduced).<br>See Reduced Mode on page 4. Normal<br>operation can be when no intrusion is<br>detected. It can also be caused by safety<br>planes/ safety boundaries. Multiple safety<br>zones can be readily used with UR robots.<br>For example, one safety zone can be used<br>for “reduced settings” and another zone<br>boundary is used as a safeguard stop input<br>to the UR robot. Reduced limits can also<br>include a reduced setting for the stop time<br>and stop distance limits – to reduce the<br>work area and floorspace.|



222 

User Manual 

UR5e 

19. Safety Functions Table 



Collaborative Operation 2011 edition, clause 5.10.5 

|Technique|Explanation|UR e-Series|
|---|---|---|
||How to accomplish PFL is left to the<br>robot manufacturer. The robot<br>design and/or safety functions will<br>limit the energy transfer from the|UR robots are power and force<br>limiting robots specifically<br>designed to enable<br>collaborative applications where|
|Power and<br>force limiting<br>(PFL) by<br>inherent<br>design or<br>control|robot to a person. If any parameter<br>limit is exceeded, a robot stop<br>happens. PFL applications require<br>considering the ROBOT<br>APPLICATION (including the end-<br>effector and workpiece(s), so that<br>any contact will not cause injury. The<br>study performed evaluated<br>pressures to the ONSET of pain, not<br>injury. See Annex A. See ISO/TR<br>20218-1 End-effectors.|the robot could contact a person<br>and cause no injury. UR robots<br>have safety functions that can<br>be used to limit motion, speed,<br>momentum, force, power and<br>more of the robot. These safety<br>functions are used in the robot<br>application to thereby lessen<br>pressures and forces caused by<br>the end-effector and workpiece<br>(s).|



223 

UR5e 

User Manual 

20. Certifications 



## 20. Certifications 

###### Description 

Third party certification is voluntary. However, to provide the best service to robot integrators, Universal Robots chooses to certify its robots at the recognized test institutes listed below. 

You can find copies of all certificates in the chapter: Certificates. 

###### Certification 



|TÜV Rheinland|Certificates by TÜV Rheinland to EN ISO<br>10218-1 and EN ISO 13849-1. TÜV<br>Rheinland stands for safety and quality in<br>virtually all areas of business and life.<br>Founded 150 years ago, the company is<br>one of the world’s leading testing service<br>providers.|
|---|---|
|TÜV Rheinland<br>of North America|In Canada, the Canadian Electrical<br>Code, CSA 22.1, Article 2-024 requires<br>equipment to be certified by a testing<br>organization approved by the Standards<br>Council of Canada.|
|CHINA RoHS|Universal Robots e-Series robots<br>conform to CHINA RoHS management<br>methods for controlling pollution by<br>electronic informationproducts.|
|KCC Safety|Universal Robots e-Series robots have<br>been assessed and conform to KCC<br>mark safety standards.|
|KC Registration|The Universal Robots e-Series robots<br>have been evaluated for conformity<br>assessment for use in a work<br>environment. Therefore, there is a risk of<br>radio interference when used in a<br>domestic environment.|
|Delta|Universal Robots e-Series robots are<br>performance tested by DELTA.|



###### Supplier Third Party Certification 



||As provided by our suppliers, Universal Robots e-|
|---|---|
||Series robots shipping pallets comply with the|
|Environment|ISMPM-15 Danish requirements for producing wood|
||packaging material and are marked in accordance|
||with this scheme.|



224 

User Manual 

UR5e 

20. Certifications 



Manufacturer Test Certification 



Universal Robots e-Series robots undergo continuous internal testing and end of line test Universal procedures. Robots UR testing processes undergo continuous review and improvement. 

Declarations according to EU directives 

Although EU directives are relevant for Europe, some countries outside Europe recognize and/or require EU declarations. European directives are available on the official homepage: http://eur-lex.europa.eu. 

According to the Machinery Directive, Universal Robots’ robots are partly completed machines, as such a CE mark is not to be affixed. 

You can find the Declaration of Incorporation (DOI) according to the Machinery Directive in the chapter: Declarations and Certificates. 

EU REACH 

Our product includes components, specifically the blue plastic lids (cups) and grey plastic parts, that contain substances listed on the EU REACH Candidate List (>0.1% w/w). For reference, please see the Global Compliance Document available for download on our website. 

This information is provided to comply with EU REACH obligations for articles placed on the EU market. Please use our product as intended and follow all operational and safety instructions provided in this manual. For further details, refer to the official REACH Regulation (Consolidated Text: 32006R1907). If you have questions related to product safety, please contact us at: ProductCompliance@teradyne-robotics.com. 

225 

UR5e 

User Manual 

21. Certificates 



## 21. Certificates 

###### TÜV Rheinland 



226 

User Manual 

UR5e 

21. Certificates 

TÜV Rheinland North America 





227 

UR5e 

User Manual 

21. Certificates 



###### China RoHS 

Management Methods for Controlling Pollution by Electronic Information Products Product Declaration Table For Toxic or Hazardous Substances 

表1 有毒有害物 **质或元素名称及含量标识格式** 





<!-- Start of picture text -->
Product/Part<br>Toxic and Hazardous Substances and Elements<br>Name<br>产品 /部件名称 有毒有害物 质或元素<br>六价 多溴二苯 醚<br>汞 镉 多溴 联苯<br>铅 Hexavalent  Polybrominated<br>Mercury  Cadmium  Polybrominated<br>Lead (Pb) Chromium  diphenyl ethers<br>(Hg) (Cd) biphenyls (PBB)<br>(Cr+6) (PBDE)<br>UR Robots<br>机器人：基本系统<br>UR3 / UR5 / UR10 /<br>UR3e / UR5e /  X O X O X X<br>UR10e   UR16e /<br>UR20 / UR30<br>O: Indicates that this toxic or hazardous substance contained in all of the homogeneous materials for this part is below the limit<br>requirement in SJ/T11363‐2006.<br>O: 表示该有毒有害物质在该部件所有均质材料中的含量均在SJ/T 11363‐2006规定的限量要求以下。<br>X: Indicates that this toxic or hazardous substance contained in at least one of the homogeneous materials used for this part is above<br>the limit requirement in SJ/T11363‐2006.<br>X: 表示该有毒有害物质至少在该部件的某一均质材料中的含量超出SJ/T 11363‐2006规定的限量要求。<br>（企业可在此处，根据实际情况对上表中打“X”的技术原因进行进一步说明。）<br>Items below are wear‐out items and therefore can have useful lives less than environmental use period:<br>下列项目是损耗品,因而它们的有用环境寿命可能短于基本系统和可选项目的使用时间:<br>Drives, Gaskets, Probes, Filters, Pins, Cables, Stiffener, Interfaces<br>电子驱动器,  垫圈, 探针, 过滤器, 别针, 缆绳, 加强筋, 接口<br>Refer to product manual for detailed conditions of use.<br>详细使用情况请阅读产品手册.<br>Universal Robots encourages that all Electronic Information Products be recycled but does not assume responsibility or liability.<br>Universal Robots 鼓励回收再循环利用所有的电子信息产品, 但 Universal Robots 不负任何责任或义务<br><!-- End of picture text -->

To the maximum extent permitted by law, Customer shall be solely responsible for complying with, and shall otherwise assume all liabilities that 

may be imposed in connection with, any legal requirements adopted by any governmental authority related to the Management Methods for Controlling Pollution by Electronic Information Products (Ministry of Information Industry Order #39) of the Peoples Republic of China otherwise encouraging the recycle and use of electronic information products.  Customer shall defend, indemnify and hold Universal Robots harmless from any damage, claim or liability relating thereto.  At the time Customer desires to dispose of the Products, Customer shall refer to and comply with the specific waste management instructions and options set forth at www.universal‐robots.com/about‐universal‐robots/social‐responsibility and www.teradyne.com/company/corporate‐social‐responsibility, as the same may be amended by Teradyne or Universal Robots. 

228 

User Manual 

UR5e 

21. Certificates 



###### KC Safety 



229 

UR5e 

User Manual 

21. Certificates 



###### KC Registration 



230 

User Manual 

UR5e 

21. Certificates 



###### Environment 

###### **Climatic and mechanical assessment** 





<!-- Start of picture text -->
Client  Force Technology project no.<br>Universal Robots A/S  117-32120<br>Energivej 25<br>5260 Odense S<br>Denmark<br>Product identification<br>UR 3 robot arms<br>UR 3 control boxes with attached Teach Pendants.<br>UR 5 robot arms<br>UR5 control boxes with attached Teach Pendants.<br>UR10 robot arms:<br>UR10 control boxes with attached Teach Pendants.<br>See reports for details.<br>Force Technology report(s)<br>DELTA project no. 117-28266, DANAK-19/18069<br>DELTA project no. 117-28086, DANAK-19/17068<br>Other document(s)<br>Conclusion<br>The three robot arms UR3, UR5 and UR10 including their control boxes and Teach Pendants have been tested<br>according to the below listed standards. The test results are given in the Force Technology reports listed above. The<br>tests were carried out as specified and the test criteria for environmental tests were fulfilled in general terms with<br>only a few minor issues (see test reports for details).<br>IEC 60068-2-1, Test Ae; -5 ºC, 16 h<br>IEC 60068-2-2, Test Be; +35°C, 16h<br>IEC 60068-2-2, Test Be; +50ºC, 16 h<br>IEC 60068-2-64, Test Fh; 5 – 10 Hz: +12 dB/octave, 10-50 Hz 0.00042 g²/Hz, 50 – 100 Hz: -12 dB/octave, 1,66<br>grms, 3 x 1½ h<br>IEC 60068-2-27, Test Ea, Shock; 11 g, 11 ms, 3 x 18 shocks<br>Date  Assessor<br>Hørsholm, 25 August 2017<br>Andreas Wendelboe Højsgaard<br>M.Sc.Eng.<br><!-- End of picture text -->



<!-- Start of picture text -->
DELTA  – a part of FORCE Technology - Venlighedsvej 4 - 2970 Hørsholm - Denmark - Tel. +45 72 19 40 00 - Fax +45 72 19 40 01 - www.delta.dk<br><!-- End of picture text -->

231 

UR5e 

User Manual 

21. Certificates 



232 

User Manual 

UR5e 

Software Name: PolyScope 5 Software Version: 5.19 Document Version: 10.7.281 

