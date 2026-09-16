import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 45,
  delay = 0,
  className = "",
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (started) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay, started]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [count, speed, started, text.length]);

  return (
    <span className={className}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        className="caret-blink ml-0.5 inline-block h-[0.95em] w-[2px] translate-y-[0.12em] bg-current align-baseline"
      />
    </span>
  );
}
