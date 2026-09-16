export function Belt({
  items,
  reverse = false,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const row = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden border-y border-border/60 py-3 ${className}`}
      aria-hidden="true"
    >
      <div className={reverse ? "belt-track-reverse" : "belt-track"}>
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 px-6 font-mono text-[11px] uppercase tracking-[0.42em] text-muted-foreground"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-ms-yellow" />
          </span>
        ))}
      </div>
    </div>
  );
}
