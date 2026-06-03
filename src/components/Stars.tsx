"use client";

import { useMemo } from "react";

type Star = {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  accent: boolean;
};

function generateStars(count: number, seed: number): Star[] {
  const stars: Star[] = [];
  let x = seed;
  const rand = () => {
    // Simple xorshift-like pseudo-random for deterministic client-side gen
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    // Keep in range 0..1
    return ((x >>> 0) % 1000) / 1000;
  };
  for (let i = 0; i < count; i++) {
    stars.push({
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      size: Math.max(1, Math.round(rand() * 2)),
      delay: rand() * 3,
      duration: 2 + rand() * 3,
      accent: rand() > 0.85,
    });
  }
  return stars;
}

export default function Stars() {
  const stars = useMemo(() => generateStars(80, Date.now() & 0xffff), []);
  const shooters = useMemo(() => generateStars(3, (Date.now() >> 8) & 0xffff), []);

  return (
    <div className="starfield">
      {stars.map((s, i) => (
        <div
          key={`star-${i}`}
          className={`star ${s.accent ? "star--accent" : ""}`}
          style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s` }}
        />
      ))}
      {shooters.map((s, i) => (
        <div
          key={`shoot-${i}`}
          className="shooting-star"
          style={{ left: s.left, top: s.top, animationDelay: `${i * 1.2}s` }}
        />
      ))}
    </div>
  );
}




