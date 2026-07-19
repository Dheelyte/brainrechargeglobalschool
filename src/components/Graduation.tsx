"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { graduationPhotos } from "@/lib/graduation";
import SectionHeading from "./SectionHeading";

export default function Graduation() {
  const viewportRef = useRef<HTMLDivElement>(null);
  // Sliding by default so the strip still moves if JS never runs; the
  // observer pauses it until the strip is fully scrolled into view.
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setPlaying(entry.intersectionRatio >= 0.98),
      { threshold: [0.98] },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="graduation" className="overflow-hidden bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Graduation"
          title="Celebrating our graduands"
          subtitle="Proud moments from graduation day — our newest 2025/2026 set and the stars of the set before them."
        />
      </div>

      <div ref={viewportRef} className="grad-viewport relative mt-14">
        {/* Soft fade at the edges of the strip */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cream to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream to-transparent sm:w-20" />

        <div
          className="grad-track flex w-max"
          style={{ animationPlayState: playing ? "running" : "paused" }}
        >
          {/* The list is doubled so the -50% marquee loops seamlessly. */}
          {[...graduationPhotos, ...graduationPhotos].map((photo, i) => {
            const isDuplicate = i >= graduationPhotos.length;
            return (
              <figure
                key={i}
                aria-hidden={isDuplicate || undefined}
                className={`relative mr-5 shrink-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-brand-100 ${
                  isDuplicate ? "grad-dup" : ""
                }`}
              >
                <Image
                  src={photo.image}
                  alt={isDuplicate ? "" : `${photo.name} — ${photo.level} graduand, ${photo.set} set`}
                  sizes="14rem"
                  className="h-64 w-auto object-cover sm:h-72"
                />
                {/* Level pill (top) */}
                <span className="absolute right-2.5 top-2.5 rounded-full bg-brand-600/90 px-2.5 py-0.5 text-[11px] font-bold text-white backdrop-blur-sm">
                  {photo.level}
                </span>
                {/* Name + set (bottom) */}
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent px-3 pb-3 pt-8 text-left">
                  <p className="truncate font-display text-sm font-bold text-white">
                    {photo.name}
                  </p>
                  <p className="text-[11px] font-semibold text-white/70">
                    {photo.set} Set
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
