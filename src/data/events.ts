import mascotWave from "@/assets/mascot-wave.png";
import mascotLaptop from "@/assets/mascot-laptop.png";
import mascotFly from "@/assets/mascot-fly.png";
import mascotBook from "@/assets/mascot-book.png";

import p1 from "@/assets/image.png.asset.json";
import p2 from "@/assets/image-2.png.asset.json";
import p3 from "@/assets/image-3.png.asset.json";
import p4 from "@/assets/image-4.png.asset.json";
import p5 from "@/assets/image-5.png.asset.json";
import p6 from "@/assets/image-6.png.asset.json";
import p7 from "@/assets/image-7.png.asset.json";
import p8 from "@/assets/image-8.png.asset.json";
import p9 from "@/assets/image-9.png.asset.json";
import p10 from "@/assets/image-10.png.asset.json";
import p11 from "@/assets/image-11.png.asset.json";
import p12 from "@/assets/image-12.png.asset.json";
import p13 from "@/assets/image-13.png.asset.json";
import p14 from "@/assets/image-14.png.asset.json";
import p15 from "@/assets/image-15.png.asset.json";

export type EventItem = {
  slug: string;
  index: number;
  name: string;
  tag: string;
  accent: "red" | "green" | "blue" | "yellow";
  mascot: string;
  mascotAnim: string;
  quote: string;
  intro: string;
  about: string;
  highlights: string[];
  photos: string[];
};

export const accentVar: Record<EventItem["accent"], string> = {
  red: "var(--ms-red)",
  green: "var(--ms-green)",
  blue: "var(--ms-blue)",
  yellow: "var(--ms-yellow)",
};

export const events: EventItem[] = [
  {
    slug: "mlsc-inauguration",
    index: 1,
    name: "MLSC Inauguration",
    tag: "The beginning",
    accent: "blue",
    mascot: mascotWave,
    mascotAnim: "animate-float-soft",
    quote: "Every community starts with one open door.",
    intro: "The day the chapter opened its wings.",
    about:
      "Add the story of the inauguration here — the welcome, the first address, and how the chapter was introduced to the campus. This space is ready for your final write-up.",
    highlights: ["Chapter launch", "Welcome address", "First member meet"],
    photos: [p1.url, p2.url, p3.url],
  },
  {
    slug: "tech-room",
    index: 2,
    name: "Tech Room",
    tag: "Hands on",
    accent: "green",
    mascot: mascotLaptop,
    mascotAnim: "animate-float-soft",
    quote: "A room is just a room until someone starts building in it.",
    intro: "Where curiosity turned into keyboards.",
    about:
      "Add the Tech Room description here — what was taught, who led it, and what participants walked away with.",
    highlights: ["Hands-on lab", "Peer mentoring", "Live builds"],
    photos: [p4.url, p5.url],
  },
  {
    slug: "praxis",
    index: 3,
    name: "Praxis",
    tag: "Practice over theory",
    accent: "yellow",
    mascot: mascotBook,
    mascotAnim: "animate-float-soft",
    quote: "Knowledge earns its worth the moment it is practised.",
    intro: "Theory stepped aside and practice took the stage.",
    about:
      "Add the Praxis description here — the sessions, the mentors, and the skills the participants practised.",
    highlights: ["Guided sessions", "Skill drills", "Mentor feedback"],
    photos: [p6.url, p7.url, p8.url],
  },
  {
    slug: "datathon",
    index: 4,
    name: "Datathon",
    tag: "Data in motion",
    accent: "red",
    mascot: mascotLaptop,
    mascotAnim: "animate-float-soft",
    quote: "Numbers whisper. Teams that listen, win.",
    intro: "Raw data, sharp minds, one clock.",
    about:
      "Add the Datathon description here — the problem statements, the datasets, and how the teams competed.",
    highlights: ["Problem statements", "Team analysis", "Live leaderboard"],
    photos: [p9.url, p10.url],
  },
  {
    slug: "code-sprint",
    index: 5,
    name: "Code Sprint",
    tag: "Speed round",
    accent: "green",
    mascot: mascotFly,
    mascotAnim: "animate-float-soft",
    quote: "Fast hands, calm head, clean code.",
    intro: "A sprint measured in commits, not metres.",
    about:
      "Add the Code Sprint description here — the rounds, the difficulty curve, and the winners.",
    highlights: ["Timed rounds", "Algorithm duels", "Sprint winners"],
    photos: [p11.url, p12.url],
  },
  {
    slug: "bluebit-hackathon",
    index: 6,
    name: "Bluebit Hackathon",
    tag: "The finale",
    accent: "blue",
    mascot: mascotFly,
    mascotAnim: "animate-float-soft",
    quote: "Build through the night, ship before the sun.",
    intro: "The longest night and the loudest finish.",
    about:
      "Add the Bluebit Hackathon description here — the themes, the mentors, the final pitches, and the winning teams.",
    highlights: ["Overnight build", "Mentor rounds", "Final pitches"],
    photos: [p13.url, p14.url, p15.url],
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
