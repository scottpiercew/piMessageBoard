const NAME = {
  fullName: `Unit Full Name`,
  shortName: "Unit Abbreviation",
};

const LOGO = {
  logoBlackBG: "images/mc-flag.png",
  logoWhiteBG: "images/mc-seal.png",
};

// Display individual day's schedule or calendar
const SCHEDULE = {
  15: {
    title: "Saturday, 15th",
    schedule: "images/mc-flag.png",
    label: "Schedule"
  },
  16: {
    title: "Sunday, 16th",
    schedule: "images/mc-flag.png",
    label: "Schedule"
  },
};

// Array of pages to rotate through
const IMAGES = [
  { id: 1, url: "images/stinger-missile.jpg", label: "Stinger" },
  { id: 2, url: "images/harrier.jpg", label: "Harrier" },
  { id: 3, url: "images/f-35.jpg", label: "F-35" },
];

const EVENTNAME = {
  title: "2021 Commander's Cup"
};

const SECTIONS = [
  { name: "HQ", points: 100 },
  { name: "1st PLT", points: 350 },
  { name: "2nd PLT", points: 225 },
];

// List of events completed during commander's cup to 
// clarify the section points
const EVENTS = {
  title: "Events Scored",
  events: ["Combat Fitness Test", "Rifle Range", "PME"],
}

const UNIT = {
  NAME,
  LOGO,
  SCHEDULE,
  IMAGES,
  EVENTNAME,
  SECTIONS,
  EVENTS,
};

export default UNIT;
