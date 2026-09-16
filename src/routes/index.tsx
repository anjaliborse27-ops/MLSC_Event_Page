import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import mascot from "@/assets/mascot-wave.png";
import { Sparkles } from "@/components/site/Sparkles";
import { Typewriter } from "@/components/site/Typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MLSC PCCOE — The Event Journey" },
      {
        name: "description",
        content:
          "Meet the MLSC PCCOE mascot and step into the roadmap of every chapter event, from inauguration to the Bluebit Hackathon.",
      },
      { property: "og:title", content: "MLSC PCCOE — The Event Journey" },
      {
        property: "og:description",
        content: "Step into the roadmap of every MLSC PCCOE event.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const ref = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 42 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPointer({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(520px circle at ${pointer.x}% ${pointer.y}%, oklch(0.85 0.16 85 / 12%), transparent 68%)`,
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grain opacity-40" />

      <section className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <div className="relative">
          <div
            aria-hidden="true"
            className="animate-halo absolute inset-0 -z-10 rounded-full blur-3xl"
            style={{ background: "oklch(0.85 0.16 85 / 35%)" }}
          />
          <div className="relative animate-drop-in">
            <div className="relative rounded-full glass p-6 shadow-2xl sm:p-8">
              <img
                src={mascot}
                alt="MLSC PCCOE dragon mascot waving"
                width={1024}
                height={1024}
                className="animate-float-soft h-48 w-48 object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.6)] sm:h-64 sm:w-64"
              />
            </div>
            <Sparkles />
          </div>
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.55em] text-muted-foreground">
          Microsoft Learn Student Chapter · PCCOE
        </p>

        <h1 className="mt-5 font-display text-3xl leading-tight font-extrabold sm:text-5xl">
          <Typewriter text="Hi, I'm your guide." delay={900} speed={55} />
        </h1>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Follow me along the path and every event we have lived through will
          unfold, one milestone at a time.
        </p>

        <Link
          to="/events"
          className={`mt-10 inline-flex items-center gap-3 rounded-full border border-border px-7 py-3 font-mono text-[11px] uppercase tracking-[0.35em] text-foreground glass transition-all duration-300 hover:-translate-y-1 hover:border-ms-yellow ${
            ready ? "animate-rise opacity-100" : "opacity-0"
          }`}
        >
          Enter the roadmap
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
