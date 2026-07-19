import Image from "next/image";
import { site } from "@/lib/site";
import BannerImg from "@/photos/photo5.jpeg";

export default function Welcome() {
  return (
    <section id="welcome" className="relative isolate overflow-hidden">
      {/* Banner photo */}
      <Image
        src={BannerImg}
        alt="Pupils learning together at Brain Recharge Global School"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark scrim so the overlaid text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/90" />
      <div className="absolute inset-0 bg-brand-950/35 mix-blend-multiply" />
      {/* Extra darkening under the transparent nav so it stays legible over
          any part of the photo (some images are light at the top). */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-4xl flex-col items-center justify-center px-5 pt-28 pb-20 text-center lg:min-h-[42rem]">
        {/* Logo medallion */}
        <div className="hero-pop grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-white shadow-2xl ring-4 ring-white/70 sm:h-28 sm:w-28">
          <Image
            src="/apple-touch-icon.png"
            alt={`${site.name} logo`}
            width={224}
            height={256}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </div>

        <h1
          className="hero-rise mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-white text-balance [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "0.15s" }}
        >
          Welcome to {site.name}
        </h1>

        <p
          className="hero-rise mt-5 max-w-2xl text-lg leading-relaxed text-white/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.4)] sm:text-xl"
          style={{ animationDelay: "0.25s" }}
        >
          We are committed to raising a generation of pupils that can stand shoulder to shoulder with their peers all over the world.
        </p>

        {/* School motto */}
        <p
          className="hero-rise mt-6 flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-accent-300 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="h-px w-6 bg-accent-300/60" />
          {site.tagline}
          <span className="h-px w-6 bg-accent-300/60" />
        </p>
      </div>
    </section>
  );
}
