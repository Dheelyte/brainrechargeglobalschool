"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery, galleryCategories } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items =
    filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  // Keyboard controls for the lightbox.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % items.length);
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, items.length]);

  return (
    <section id="gallery" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Life at BRGS"
          title="Moments that make us smile"
          subtitle="Take a peek inside our classrooms, events and play - the everyday joy of life at our school."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === cat
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                  : "bg-brand-50 text-brand-700 hover:bg-brand-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <div className="mt-10 columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:columns-4">
          {items.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightbox(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={i % 3 === 0 ? 800 : 600}
                sizes="(max-width: 640px) 50vw, 25vw"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                <span className="text-xs font-semibold text-white">{img.alt}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i! - 1 + items.length) % items.length);
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <div
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[lightbox].src.replace("w=1200", "w=1600")}
              alt={items[lightbox].alt}
              width={1600}
              height={1067}
              className="mx-auto max-h-[85vh] w-auto rounded-2xl object-contain"
            />
            <p className="mt-3 text-center text-sm text-white/80">
              {items[lightbox].alt}
            </p>
          </div>
          <button
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i! + 1) % items.length);
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
