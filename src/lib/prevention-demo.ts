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
    id: "PRV-001",
    machinePk: "MILL-01",
    modelId: "tormach-pcnc-1100",
    title: "Same jam. Five separate repairs.",
    category: "Setup & handover",
    summary: "Five chip-clearance interruptions on MILL-01 in 14 days. Each ticket records a cleanup and restart, but the issue keeps returning.",
    hypothesis: "Four incidents followed a job change. A missing chip-clearance check during setup could be contributing to the repeat jams. The reports suggest a process gap; they do not establish operator error or rule out a mechanical fault.",
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
    machinePk: "COBOT-02",
    modelId: "universal-robots-ur5e",
    title: "Protective stops follow changeovers.",
    category: "Configuration review",
    summary: "Four protective stops on COBOT-02 followed a gripper or part change. Restarting the cell resolved the immediate interruption, but the pattern returned.",
    hypothesis: "Payload and tool configuration may not be consistently reviewed at changeover. The timing suggests a setup mismatch, although contact, tooling, or another fault could also explain these stops.",
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
    machinePk: "ROBOT-03",
    modelId: "abb-irb-120",
    title: "Pick-position drift keeps returning.",
    category: "Fixture inspection",
    summary: "Three pick-position deviations on ROBOT-03 were corrected with local adjustments. All three reports mention the same fixture station.",
    hypothesis: "Fixture movement or wear could be contributing to the recurring offset. Repeated adjustments may be treating the symptom; calibration and part variation still need to be checked.",
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
