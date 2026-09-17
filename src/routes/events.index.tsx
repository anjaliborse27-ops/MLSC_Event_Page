import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { events, accentVar } from "@/data/events";
import { Belt } from "@/components/site/Belt";
import { FooterSpace } from "@/components/site/FooterSpace";
import { Typewriter } from "@/components/site/Typewriter";
import guide from "@/assets/mascot-fly.png";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Event Roadmap — MLSC PCCOE" },
      {
        name: "description",
        content:
          "The MLSC PCCOE event roadmap: Inauguration, Tech Room, Praxis, Datathon, Code Sprint and the Bluebit Hackathon.",
      },
      { property: "og:title", content: "Event Roadmap — MLSC PCCOE" },
      {
        property: "og:description",
        content: "Six milestones, one path. Walk the MLSC PCCOE event journey.",
      },
    ],
  }),
  component: Roadmap,
});

const NODES = events.map((e, i) => ({
  x: i % 2 === 0 ? 26 : 74,
  y: 70 + i * 92,
}));
const VIEW_H = 70 + (events.length - 1) * 92 + 70;

function buildPath() {
  const first = NODES[0];
  if (!first) return "";
  let d = `M ${first.x} ${first.y}`;
  for (let i = 1; i < NODES.length; i++) {
    const a = NODES[i - 1];
    const b = NODES[i];
    if (!a || !b) continue;
    const mid = (a.y + b.y) / 2;
    d += ` C ${a.x} ${mid}, ${b.x} ${mid}, ${b.x} ${b.y}`;
  }
  return d;
}

function pointOnPath(progress: number) {
  const segment = progress * (NODES.length - 1);
  const index = Math.min(NODES.length - 2, Math.floor(segment));
  const t = Math.min(1, segment - index);
  const from = NODES[index] ?? NODES[0] ?? { x: 0, y: 0 };
  const to = NODES[index + 1] ?? from;
  const middleY = (from.y + to.y) / 2;
  const inverse = 1 - t;

  return {
    x:
      inverse ** 3 * from.x +
      3 * inverse ** 2 * t * from.x +
      3 * inverse * t ** 2 * to.x +
      t ** 3 * to.x,
    y:
      inverse ** 3 * from.y +
      3 * inverse ** 2 * t * middleY +
      3 * inverse * t ** 2 * middleY +
      t ** 3 * to.y,
  };
}

function Roadmap() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const firstNode = (NODES[0]?.y ?? 0) / VIEW_H;
      const lastNode = (NODES.at(-1)?.y ?? VIEW_H) / VIEW_H;
      const start = r.top + r.height * firstNode;
      const finish = r.top + r.height * lastNode;
      const p = (vh * 0.58 - start) / Math.max(1, finish - start);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const guidePoint = pointOnPath(progress);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grain opacity-30" />

      <section className="relative z-10 mx-auto max-w-5xl px-5 pt-20 text-center sm:px-8 sm:pt-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.55em] text-muted-foreground">
          The journey so far
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-[26px] leading-[1.25] font-extrabold sm:text-5xl">
          <Typewriter text="We don't just attend events. We leave marks on the map." speed={38} />
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Six milestones. Tap any one of them to open its story.
        </p>
      </section>

      <Belt
        className="mt-14"
        items={["Inauguration", "Tech Room", "Praxis", "Datathon", "Code Sprint", "Bluebit"]}
      />

      <div ref={trackRef} className="relative mx-auto mt-16 w-full max-w-4xl px-4 sm:px-8">
        <div className="relative h-[1150px] sm:h-[1500px]">
          <svg
            viewBox={`0 0 100 ${VIEW_H}`}
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pathGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--ms-blue)" />
                <stop offset="35%" stopColor="var(--ms-green)" />
                <stop offset="70%" stopColor="var(--ms-yellow)" />
                <stop offset="100%" stopColor="var(--ms-red)" />
              </linearGradient>
            </defs>
            <path
              d={buildPath()}
              fill="none"
              stroke="oklch(1 0 0 / 10%)"
              strokeWidth={14}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={buildPath()}
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray="10 14"
              vectorEffect="non-scaling-stroke"
              style={{ animation: "dash-flow 6s linear infinite" }}
            />
          </svg>

          <div
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-150 ease-out"
            style={{ left: `${guidePoint.x}%`, top: `${(guidePoint.y / VIEW_H) * 100}%` }}
            aria-hidden="true"
          >
            <img
              src={guide}
              alt=""
              width={1024}
              height={1024}
              className="animate-float-soft h-16 w-16 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.7)] sm:h-24 sm:w-24"
              style={{ animationDuration: "7.2s", animationDelay: "-2.3s" }}
            />
          </div>

          {events.map((ev, idx) => (
            <Link
              key={ev.slug}
              to="/events/$slug"
              params={{ slug: ev.slug }}
              className="node-hover absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${NODES[idx]?.x ?? 0}%`,
                top: `${((NODES[idx]?.y ?? 0) / VIEW_H) * 100}%`,
              }}
            >
              <div className="node-art flex flex-col items-center gap-3 transition-transform duration-300">
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl glass sm:h-20 sm:w-20"
                  style={{ boxShadow: `0 0 34px -8px ${accentVar[ev.accent]}` }}
                >
                  <span
                    className="absolute inset-0 rounded-2xl border"
                    style={{ borderColor: accentVar[ev.accent] }}
                  />
                  <img
                    src={ev.mascot}
                    alt={`${ev.name} mascot`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                  />
                  <span
                    className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px] font-medium text-background"
                    style={{ background: accentVar[ev.accent] }}
                  >
                    {ev.index}
                  </span>
                </div>
                <div className="w-36 rounded-xl glass px-3 py-2 text-center sm:w-44">
                  <p className="font-display text-[11px] leading-tight font-semibold sm:text-sm">
                    {ev.name}
                  </p>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.25em] text-muted-foreground">
                    {ev.tag}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Belt
        className="mt-20"
        reverse
        items={["Learn", "Build", "Share", "Repeat", "MLSC PCCOE"]}
      />

      <FooterSpace />
    </main>
  );
}
