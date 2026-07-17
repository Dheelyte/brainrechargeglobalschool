"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { YTVideo } from "@/lib/youtube";

function PlayIcon({ big = false }: { big?: boolean }) {
  return (
    <span
      className={`grid place-items-center rounded-full bg-white/95 text-brand-700 shadow-lg transition group-hover:scale-110 ${
        big ? "h-16 w-16 text-2xl" : "h-12 w-12 text-lg"
      }`}
    >
      ▶
    </span>
  );
}

export default function VideoWall({
  videos,
  shorts,
  isLive,
}: {
  videos: YTVideo[];
  shorts: YTVideo[];
  isLive: boolean;
}) {
  const [active, setActive] = useState<YTVideo | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const open = (v: YTVideo) => {
    if (v.placeholder) return; // sample tiles aren't playable
    setActive(v);
  };

  return (
    <>
      {/* Featured videos grid */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <button
            key={v.id}
            onClick={() => open(v)}
            className="group relative block overflow-hidden rounded-2xl bg-ink text-left shadow-sm ring-1 ring-white/10 transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative aspect-video">
              <Image
                src={v.thumbnail}
                alt={v.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover opacity-90 transition group-hover:scale-105 group-hover:opacity-100"
              />
              <span className="absolute inset-0 grid place-items-center bg-ink/20">
                <PlayIcon />
              </span>
              {v.placeholder && (
                <span className="absolute right-2 top-2 rounded-full bg-accent-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Sample
                </span>
              )}
            </div>
            <p className="line-clamp-2 px-4 py-3 text-sm font-semibold text-white">
              {v.title}
            </p>
          </button>
        ))}
      </div>

      {/* Shorts rail */}
      {shorts.length > 0 && (
        <div className="mt-14">
          <div className="mb-4 flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-coral-500 text-sm text-white">
              ⚡
            </span>
            <h3 className="font-display text-xl font-bold text-white">Shorts</h3>
          </div>
          <div className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0">
            {shorts.map((v) => (
              <button
                key={v.id}
                onClick={() => open(v)}
                className="group relative aspect-[9/16] w-40 shrink-0 overflow-hidden rounded-2xl bg-ink ring-1 ring-white/10 transition hover:-translate-y-1 sm:w-48"
              >
                <Image
                  src={v.thumbnail}
                  alt={v.title}
                  fill
                  // The tile is ~192px wide but object-cover crops a landscape
                  // thumbnail to portrait, painting it ~3x wider (~620px), so
                  // request that resolution to keep it sharp on retina screens.
                  sizes="640px"
                  quality={90}
                  className="object-cover opacity-90 transition group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <PlayIcon />
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-3 text-left text-xs font-semibold text-white">
                  {v.title}
                </span>
                {v.placeholder && (
                  <span className="absolute right-2 top-2 rounded-full bg-accent-500 px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                    Sample
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {!isLive && (
        <p className="mt-10 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-center text-sm text-white/70">
          👋 These are sample tiles. Add your{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-white">
            YOUTUBE_API_KEY
          </code>{" "}
          and{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-white">
            YOUTUBE_CHANNEL_ID
          </code>{" "}
          to display your channel&apos;s real videos automatically.
        </p>
      )}

      {/* Player modal — portaled to <body> so it escapes the Videos section's
          transform/stacking context and paints above the fixed header. */}
      {mounted &&
        active &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
              aria-label="Close"
            >
              ✕
            </button>
            <div
              className={`w-full ${active.isShort ? "max-w-sm" : "max-w-4xl"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-black ${
                  active.isShort ? "aspect-[9/16]" : "aspect-video"
                }`}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="mt-3 text-center text-sm font-medium text-white/80">
                {active.title}
              </p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
