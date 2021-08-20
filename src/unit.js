const NAME = {
  fullName: `Unit Full Name`,
  shortName: "Unit Abbreviation",
};

const LOGO = {
  logoBlackBG: "images/mc-flag.png",
  logoWhiteBG: "images/mc-seal.png",
};

// Display a schedule or calendar
const SCHEDULE = {
  schedule: "images/schedule.png",
  daySchedule: "images/future-drill-dates.png",
  day: "Future Drill Dates",
  dates: [
    "September: End FY Training, CFT",
    "October: FY Training",
    "November: Birthday Ball Celebration",
    "December: End CY Training, CFT",
  ],
  label: "Events Scored",
  events: [
    "Combat Fitness Test",
    "Rifle Range",
    "Medical/Dental",
    "Officer PME",
    "Physical Fitness Test",
    "Ball Fundraiser",
  ],
};

// Array of pages to rotate through
const IMAGES = [
  { id: 1, url: "images/stinger-missile.jpg", label: "Stinger" },
  { id: 2, url: "images/harrier.jpg", label: "Harrier" },
  { id: 3, url: "images/f-35.jpg", label: "F-35" },
];

const COMMANDERS_CUP = {
  title: "2021 Commander's Cup",
};

const SECTIONS = [
  { name: "HQ", points: 100 },
  { name: "1st PLT", points: 350 },
  { name: "2nd PLT", points: 225 },
];

const UNIT = {
  NAME,
  LOGO,
  SCHEDULE,
  IMAGES,
  COMMANDERS_CUP,
  SECTIONS,
};

export default UNIT;
