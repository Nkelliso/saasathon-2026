import type { MachineModelId } from "@/lib/machines";

// Deliberately fictional fixtures. These are not real maintenance findings or LLM output.
export type PreventionIncident = {
  id: string;
  date: string;
  title: string;
  note: string;
  downtimeMinutes: number;
};

export type PreventionPattern = {
  id: string;
  createdAt: string;
  importance: "High" | "Medium" | "Low";
  machinePk: string;
  modelId: MachineModelId;
  title: string;
  category: string;
  summary: string;
  hypothesis: string;
  action: string;
  owner: string;
  checklist: string[];
  incidents: PreventionIncident[];
};

export const preventionPatterns: PreventionPattern[] = [
  {
    id: "PRV-004",
    createdAt: "2026-09-26T11:00:00Z",
    importance: "High",
    machinePk: "CNC-MX-03",
    modelId: "tormach-1100mx",
    title: "Missed lubrication could cause major damage",
    category: "Lubrication & training",
    summary: "Two reports on CNC-MX-03 mention skipped manual lubrication and recurring table squealing. The machine is held for maintenance review before further operation.",
    hypothesis: "Operators may be mistaking the manual oiler for an automatic system. Skipped lubrication could damage slideways and ball screws; maintenance must also rule out an oil-system fault.",
    action: "Arrange urgent maintenance review before further operation. Verify oil delivery and inspect for damage, then add the correct lubrication routine to operator training and the shift checklist.",
    owner: "Maintenance + shift lead",
    checklist: ["Verify the installed lubrication configuration and its manufacturer procedure.", "Have qualified maintenance verify oil delivery and inspect for damage before clearing the machine.", "For the manual-oiler version, include startup and four-operating-hour lubrication in training and handover, following manufacturer guidance."],
    incidents: [
      { id: "demo-mx-table-squeal", date: "Sep 24 · 10:30", title: "Table squealing again", note: "Table squealing again; restarted and kept running. Shift lead subsequently held the machine for maintenance review.", downtimeMinutes: 0 },
      { id: "demo-mx-missed-oiler", date: "Sep 22 · 07:15", title: "Startup lubrication missed", note: "Didn’t pump the oiler — thought it was automatic.", downtimeMinutes: 0 },
    ],
  },
  {
    id: "PRV-001",
    createdAt: "2026-09-26T08:30:00Z",
    importance: "High",
    machinePk: "MILL-01",
    modelId: "tormach-pcnc-1100",
    title: "Recurring chip jams after setup changes",
    category: "Setup & handover",
    summary: "Five chip-clearance interruptions on MILL-01 in 14 days. Each ticket records a cleanup and restart, but the issue keeps returning.",
    hypothesis: "Four jams followed a job change. A missing chip-clearance check may be contributing; the cause is unconfirmed.",
    action: "Ask the shift lead and maintenance team to review the job-change checklist and inspect the chip-clearance setup before the next production run.",
    owner: "Shift lead + maintenance",
    checklist: ["Compare the setup checklist with the approved operating procedure.", "Have maintenance assess the recurring obstruction and possible equipment causes.", "Record the agreed check in the shift handover and monitor the next five job changes."],
    incidents: [
      { id: "INC-1042", date: "Sep 25 · 14:20", title: "Chip buildup interrupted the next job", note: "Job changed after lunch. Operator reported packed chips; maintenance cleared the obstruction. Setup check was not recorded.", downtimeMinutes: 55 },
      { id: "INC-1036", date: "Sep 23 · 08:45", title: "Repeat jam after fixture change", note: "New fixture installed. Same obstruction reported; cleanup restored operation. No follow-up action captured.", downtimeMinutes: 65 },
      { id: "INC-1029", date: "Sep 20 · 11:10", title: "Cycle paused with chip obstruction", note: "Interruption during a long run. Maintenance cleared accumulated chips; underlying cause was not confirmed.", downtimeMinutes: 40 },
      { id: "INC-1021", date: "Sep 17 · 09:30", title: "Clearance issue on first run", note: "First cycle after a job change stopped. The handover note did not include a chip-clearance check.", downtimeMinutes: 50 },
      { id: "INC-1014", date: "Sep 13 · 15:05", title: "Jam following job change", note: "Operator reported a jam shortly after setup. Cleanup completed; ticket closed without a prevention action.", downtimeMinutes: 60 },
    ],
  },
  {
    id: "PRV-002",
    createdAt: "2026-09-26T10:15:00Z",
    importance: "Medium",
    machinePk: "COBOT-02",
    modelId: "universal-robots-ur5e",
    title: "Protective stops after tooling changes",
    category: "Configuration review",
    summary: "Four protective stops on COBOT-02 followed a gripper or part change. Restarting the cell resolved the immediate interruption, but the pattern returned.",
    hypothesis: "Tool or payload settings may be missed during changeover. A setup mismatch is possible, but unconfirmed.",
    action: "Have the robotics technician review the approved tool and payload configuration for each job, and investigate the stop logs before the next changeover.",
    owner: "Robotics technician",
    checklist: ["Compare the four stop reports with the recorded tooling changes.", "Ask a qualified technician to verify configuration against the approved setup.", "Add the verified setup to the changeover checklist; retain all protective functions."],
    incidents: [
      { id: "INC-1040", date: "Sep 25 · 10:15", title: "Protective stop after gripper swap", note: "Gripper changed for the morning job. The ticket contains no record of a configuration review.", downtimeMinutes: 35 },
      { id: "INC-1033", date: "Sep 22 · 13:40", title: "Stop during first pick of new batch", note: "Part variant changed. Cell stopped on the first pick; technician attended and restored operation.", downtimeMinutes: 30 },
      { id: "INC-1025", date: "Sep 19 · 07:50", title: "Repeated stop after tooling change", note: "Tooling change logged immediately before interruption. Cause marked unconfirmed.", downtimeMinutes: 40 },
      { id: "INC-1017", date: "Sep 15 · 11:25", title: "Changeover followed by protective stop", note: "New job loaded. Operator escalated the stop to the robotics technician; no prevention action recorded.", downtimeMinutes: 30 },
    ],
  },
  {
    id: "PRV-003",
    createdAt: "2026-09-25T16:45:00Z",
    importance: "Low",
    machinePk: "ROBOT-03",
    modelId: "abb-irb-120",
    title: "Repeated pick-position drift at station A",
    category: "Fixture inspection",
    summary: "Three pick-position deviations on ROBOT-03 were corrected with local adjustments. All three reports mention the same fixture station.",
    hypothesis: "Fixture movement or wear may be causing the recurring offset. Position adjustments could be masking the cause.",
    action: "Ask the cell engineer to inspect the fixture and review the recorded offsets before making further position adjustments.",
    owner: "Cell engineer",
    checklist: ["Compare the affected fixture and part references across the incident reports.", "Have the cell engineer inspect fixture condition and assess calibration.", "Document the confirmed cause and track subsequent batches for recurrence."],
    incidents: [
      { id: "INC-1038", date: "Sep 24 · 16:10", title: "Pick offset at fixture station A", note: "Local offset adjustment restored picking. Fixture station A noted again; cause not investigated.", downtimeMinutes: 40 },
      { id: "INC-1027", date: "Sep 19 · 14:00", title: "Part missed at the same station", note: "Missed pick on station A. Operator requested an adjustment; no fixture inspection was recorded.", downtimeMinutes: 35 },
      { id: "INC-1019", date: "Sep 16 · 09:05", title: "Position deviation after batch start", note: "Pick deviation recorded at station A. Cell engineer adjusted the position and resumed the batch.", downtimeMinutes: 25 },
    ],
  },
];

export const preventionIncidentCount = preventionPatterns.reduce((sum, pattern) => sum + pattern.incidents.length, 0);
export const preventionDowntimeHours = preventionPatterns.reduce((sum, pattern) => sum + pattern.incidents.reduce((minutes, incident) => minutes + incident.downtimeMinutes, 0), 0) / 60;
