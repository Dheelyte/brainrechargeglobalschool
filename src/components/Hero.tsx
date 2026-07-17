import Image from "next/image";
import { site } from "@/lib/site";
import HeroImg from "@/photos/photo2.jpeg"

const collage = [
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1564429097439-e93896886f0d?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Decorative blobs */}
      <div className="blob -left-24 top-10 h-72 w-72 bg-brand-200" />
      <div className="blob -right-16 top-40 h-80 w-80 bg-accent-200" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        {/* Copy */}
        <div>
          <span className="hero-rise inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-500" />
            Now accepting admissions for the new session
          </span>

          <h1
            className="hero-rise mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            Where bright young{" "}
            <span className="relative whitespace-nowrap text-brand-600">
              minds
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-accent-400"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  className="hero-underline"
                  pathLength={1}
                  d="M2 8c40-6 158-6 196 0"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            begin to shine
          </h1>

          <p
            className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-ink/70"
            style={{ animationDelay: "0.2s" }}
          >
            At {site.name}, every child is known, nurtured and inspired to love
            learning - in a safe, joyful and modern environment they can&apos;t wait
            to come back to.
          </p>

          <div
            className="hero-rise mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#admissions"
              className="rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-accent-500/30 transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Book a Tour
            </a>
            <a
              href="#videos"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-base font-bold text-brand-700 shadow-lg ring-1 ring-brand-100 transition hover:-translate-y-0.5"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-600 text-white transition group-hover:scale-110">
                ▶
              </span>
              Watch our school
            </a>
          </div>

          <div
            className="hero-rise mt-8 flex items-center gap-3 text-sm text-ink/60"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex -space-x-2">
              {collage.map((src, i) => (
                <Image
                  key={i}
                  src={src.replace("w=500", "w=80")}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span>
              Loved by families across the community ·{" "}
              <span className="font-semibold text-accent-500">★★★★★</span>
            </span>
          </div>
        </div>

        {/* Image collage */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="hero-zoom relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20 ring-1 ring-black/5">
            <Image
              src={HeroImg}
              alt="Happy pupils learning at Brain Recharge Global School"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Floating cards */}
          <div className="hero-pop absolute -left-6 top-10 hidden sm:block">
            <div className="animate-float rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500/15 text-xl">
                  🎨
                </span>
                <div className="pr-2">
                  <p className="text-sm font-bold text-ink">Coding & Robotics</p>
                  <p className="text-xs text-ink/50">Computer Literacy</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="hero-pop absolute -right-4 bottom-10 hidden sm:block"
            style={{ animationDelay: "0.85s" }}
          >
            <div
              className="animate-float rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/15 text-xl">
                  🛡️
                </span>
                <div className="pr-2">
                  <p className="text-sm font-bold text-ink">Safe & secure</p>
                  <p className="text-xs text-ink/50">Caring environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
