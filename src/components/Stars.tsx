"use client";

import { useMemo } from "react";

type Star = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  accent: boolean;
};

function generateStars(count: number, seed: number): Star[] {
  const stars: Star[] = [];
  let x = seed;
  const rand = () => {
    // Simple xorshift-like pseudo-random for deterministic generation
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    // Keep in range 0..1
    return ((x >>> 0) % 1000) / 1000;
  };
  for (let i = 0; i < count; i++) {
    const leftVal = (rand() * 100).toFixed(1);
    const topVal = (rand() * 100).toFixed(1);
    const delayVal = (rand() * 3).toFixed(2);
    const durationVal = (2 + rand() * 3).toFixed(2);
    stars.push({
      left: `${leftVal}%`,
      top: `${topVal}%`,
      size: Math.max(1, Math.round(rand() * 2)),
      delay: `${delayVal}s`,
      duration: `${durationVal}s`,
      accent: rand() > 0.85,
    });
  }
  return stars;
}

export default function Stars({ seed = 42 }: { seed?: number }) {
  const stars = useMemo(() => generateStars(80, seed), [seed]);
  const shooters = useMemo(() => generateStars(3, seed + 1000), [seed]);

  return (
    <div className="starfield">
      {stars.map((s, i) => (
        <div
          key={`star-${i}`}
          className={`star ${s.accent ? "star--accent" : ""}`}
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
      {shooters.map((s, i) => (
        <div
          key={`shoot-${i}`}
          className="shooting-star"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: `${(i * 1.2).toFixed(1)}s`,
          }}
        />
      ))}
    </div>
  );
}




