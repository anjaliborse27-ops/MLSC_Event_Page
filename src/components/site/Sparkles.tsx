const SPARKS = [
  { x: 12, y: 18, s: 16, d: 0.2 },
  { x: 82, y: 14, s: 22, d: 0.5 },
  { x: 26, y: 72, s: 14, d: 0.9 },
  { x: 70, y: 78, s: 20, d: 1.2 },
  { x: 50, y: 8, s: 26, d: 0.05 },
  { x: 92, y: 52, s: 12, d: 1.5 },
  { x: 6, y: 46, s: 18, d: 1.1 },
  { x: 60, y: 40, s: 12, d: 1.8 },
];

export function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {SPARKS.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width={s.s}
          height={s.s}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animation: `sparkle-burst 2.4s ease-out ${s.d}s infinite`,
            filter: "drop-shadow(0 0 8px rgba(255,200,80,0.85))",
          }}
        >
          <path
            d="M12 0c1.2 7 4.8 10.6 12 12-7.2 1.4-10.8 5-12 12-1.2-7-4.8-10.6-12-12C7.2 10.6 10.8 7 12 0z"
            fill="rgb(255,206,110)"
          />
        </svg>
      ))}
    </div>
  );
}
