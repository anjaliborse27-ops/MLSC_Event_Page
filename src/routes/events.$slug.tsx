import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { accentVar, events, getEvent } from "@/data/events";
import { Belt } from "@/components/site/Belt";
import { FooterSpace } from "@/components/site/FooterSpace";
import { Typewriter } from "@/components/site/Typewriter";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — MLSC PCCOE" }, { name: "robots", content: "noindex" }],
      };
    }
    const { event } = loaderData;
    const title = `${event.name} — MLSC PCCOE`;
    return {
      meta: [
        { title },
        { name: "description", content: event.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: event.intro },
      ],
    };
  },
  component: EventPage,
});

function EventPage() {
  const { event } = Route.useLoaderData();
  const accent = accentVar[event.accent];
  const next = events[event.index % events.length];

  if (!next) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grain opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: accent, opacity: 0.16 }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-10 sm:px-8 sm:pt-14">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to roadmap
        </Link>

        <header className="mt-10 grid items-center gap-8 sm:grid-cols-[1fr_auto]">
          <div>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.5em]"
              style={{ color: accent }}
            >
              Milestone {String(event.index).padStart(2, "0")} · {event.tag}
            </p>
            <h1 className="mt-4 font-display text-[30px] leading-[1.1] font-extrabold sm:text-6xl">
              {event.name}
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              <Typewriter text={event.intro} speed={38} />
            </p>
          </div>
          <img
            src={event.mascot}
            alt={`${event.name} mascot`}
            width={1024}
            height={1024}
            className="animate-float-soft mx-auto h-36 w-36 object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.6)] sm:h-52 sm:w-52"
            style={{
              animationName: "float-soft",
              animationDuration: event.floatDuration,
              animationDelay: event.floatDelay,
            }}
          />
        </header>

        <figure className="mt-12 rounded-3xl glass p-6 sm:p-10">
          <blockquote className="font-display text-lg leading-snug font-semibold sm:text-2xl">
            “{event.quote}”
          </blockquote>
        </figure>
      </div>

      <Belt className="mt-14" items={event.belt} />

      <section className="relative z-10 mx-auto mt-14 max-w-5xl px-5 sm:px-8">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
          About the event
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-[1.9] text-muted-foreground sm:text-base">
          {event.about}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {event.highlights.map((h) => (
            <div key={h.title} className="rounded-2xl glass px-5 py-4">
              <span className="block h-1 w-8 rounded-full" style={{ background: accent }} />
              <p className="mt-3 font-display text-sm font-semibold">{h.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {h.line}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-16 max-w-5xl px-5 sm:px-8">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
          Moments
        </h2>

        <div className="mt-6 columns-1 gap-1 sm:columns-2 lg:columns-3">
          {event.photos.map((src, i) => (
            <figure
              key={src}
              className="animate-rise mb-1 break-inside-avoid overflow-hidden rounded-md border border-border/70"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <img
                src={src}
                alt={`${event.name} photograph ${i + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-16 max-w-5xl px-5 sm:px-8">
        <Link
          to="/events/$slug"
          params={{ slug: next.slug }}
          className="flex items-center justify-between rounded-3xl glass px-6 py-6 transition-transform duration-300 hover:-translate-y-1 sm:px-10"
        >
          <span>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Next milestone
            </span>
            <span className="mt-2 block font-display text-lg font-semibold sm:text-2xl">
              {next.name}
            </span>
          </span>
          <span aria-hidden="true" className="text-2xl">
            →
          </span>
        </Link>
      </section>

      <FooterSpace />
    </main>
  );
}
