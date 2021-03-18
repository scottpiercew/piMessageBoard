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
  label: "Unit Schedule",
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
