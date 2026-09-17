import mascotWave from "@/assets/mascot-wave.png";
import mascotLaptop from "@/assets/mascot-laptop.png";
import mascotFly from "@/assets/mascot-fly.png";
import mascotBook from "@/assets/mascot-book.png";

import p1 from "@/assets/image.png";
import p2 from "@/assets/image-2.png";
import p3 from "@/assets/image-3.png";
import p4 from "@/assets/image-4.png";
import p5 from "@/assets/image-5.png";
import p6 from "@/assets/image-6.png";
import p7 from "@/assets/image-7.png";
import p8 from "@/assets/image-8.png";
import p9 from "@/assets/image-9.png";
import p10 from "@/assets/image-10.png";
import p11 from "@/assets/image-11.png";
import p12 from "@/assets/image-12.png";
import p13 from "@/assets/image-13.png";
import p14 from "@/assets/image-14.png";
import p15 from "@/assets/image-15.png";

export type EventItem = {
  slug: string;
  index: number;
  name: string;
  tag: string;
  accent: "red" | "green" | "blue" | "yellow";
  mascot: string;
  mascotAnim: string;
  floatDuration: string;
  floatDelay: string;
  quote: string;
  intro: string;
  about: string;
  note: string;
  highlights: { title: string; line: string }[];
  belt: string[];
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
    tag: "Where it started",
    accent: "blue",
    mascot: mascotWave,
    mascotAnim: "animate-float-soft",
    floatDuration: "7.4s",
    floatDelay: "-1.1s",
    quote: "A chapter is only a name until people show up for it.",
    intro: "The morning our chapter stopped being an idea.",
    about:
      "This is the day the chapter opened its doors at PCCOE. A hall, a handful of nervous introductions, and a team that had spent weeks preparing for one hour. By the time it ended, people who had never spoken to each other were already arguing about what to build next.",
    note: "Write-up in progress — the team is still collecting notes from that day.",
    highlights: [
      { title: "Chapter launch", line: "The first official word from MLSC PCCOE." },
      { title: "Welcome address", line: "Why the chapter exists, said out loud." },
      { title: "First member meet", line: "Names, laptops, and a lot of curiosity." },
    ],
    belt: ["Day one", "Open doors", "First hello", "MLSC PCCOE"],
    photos: [p1.url, p2.url, p3.url],
  },
  {
    slug: "tech-room",
    index: 2,
    name: "Tech Room",
    tag: "Hands on the keys",
    accent: "green",
    mascot: mascotLaptop,
    mascotAnim: "animate-float-soft",
    floatDuration: "6.2s",
    floatDelay: "-2.6s",
    quote: "A room is just a room until somebody starts building in it.",
    intro: "Fewer slides. More keyboards.",
    about:
      "Tech Room was the session where nobody stayed in the audience for long. Seniors sat next to first years, screens got turned around, and the questions got better as the evening went on. Most people left with something half-built and a reason to finish it.",
    note: "Write-up in progress — session notes coming from the mentors.",
    highlights: [
      { title: "Hands-on lab", line: "Everyone had a machine and something running." },
      { title: "Peer mentoring", line: "Seniors walking rows, not lecturing." },
      { title: "Live builds", line: "Started in the room, finished at home." },
    ],
    belt: ["Build", "Break", "Ask", "Build again"],
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
    floatDuration: "8.1s",
    floatDelay: "-0.4s",
    quote: "Knowledge earns its worth the moment somebody uses it.",
    intro: "Theory stepped aside and practice took the chair.",
    about:
      "Praxis was built around one rule: whatever gets explained has to get attempted the same day. The sessions ran long because people kept asking for one more round, and the mentors kept saying yes.",
    note: "Write-up in progress — the session list is being finalised.",
    highlights: [
      { title: "Guided sessions", line: "Explained once, attempted immediately." },
      { title: "Skill drills", line: "Short rounds, repeated until they stuck." },
      { title: "Mentor feedback", line: "Blunt, useful, in person." },
    ],
    belt: ["Learn it", "Try it", "Get it wrong", "Try again"],
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
    floatDuration: "5.6s",
    floatDelay: "-3.2s",
    quote: "Numbers whisper. The teams that listen are the ones that win.",
    intro: "Raw data, sharp minds, one clock running.",
    about:
      "Datathon handed every team the same messy dataset and a deadline that did not move. The lab stayed loud for hours — half the room debugging, half the room defending a chart nobody else believed yet.",
    note: "Write-up in progress — problem statements and results being compiled.",
    highlights: [
      { title: "Problem statements", line: "Same data, six different readings." },
      { title: "Team analysis", line: "Arguing over the number until it made sense." },
      { title: "Final presentations", line: "Five minutes to defend the whole day." },
    ],
    belt: ["Clean it", "Question it", "Chart it", "Defend it"],
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
    floatDuration: "4.8s",
    floatDelay: "-1.9s",
    quote: "Fast hands, calm head, clean code. Pick all three.",
    intro: "A sprint measured in commits, not metres.",
    about:
      "Code Sprint was the shortest event and the loudest one. Timed rounds, rising difficulty, and a scoreboard that changed often enough to keep everyone leaning forward. Nobody checked their phone once.",
    note: "Write-up in progress — round details and winners to be added.",
    highlights: [
      { title: "Timed rounds", line: "The clock did most of the talking." },
      { title: "Algorithm duels", line: "Two approaches, one that survives." },
      { title: "Sprint winners", line: "Decided in the final minutes." },
    ],
    belt: ["Ready", "Set", "Commit", "Repeat"],
    photos: [p11.url, p12.url],
  },
  {
    slug: "bluebit-hackathon",
    index: 6,
    name: "Bluebit Hackathon",
    tag: "The long night",
    accent: "blue",
    mascot: mascotFly,
    mascotAnim: "animate-float-soft",
    floatDuration: "9s",
    floatDelay: "-4.5s",
    quote: "Build through the night. Ship before the sun does.",
    intro: "The longest night of the year, and the loudest finish.",
    about:
      "Bluebit was the one everything else had been building towards. Teams took over the floor overnight, mentors moved table to table, and by morning the pitches were rough, honest and a lot better than anyone expected at 3 a.m.",
    note: "Write-up in progress — themes, mentors and winning teams to be added.",
    highlights: [
      { title: "Overnight build", line: "Lights on from evening to sunrise." },
      { title: "Mentor rounds", line: "Hard questions, table by table." },
      { title: "Final pitches", line: "Tired teams, finished products." },
    ],
    belt: ["All night", "One idea", "Ship it", "Bluebit"],
    photos: [p13.url, p14.url, p15.url],
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
