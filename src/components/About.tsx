import Image from "next/image";
import Reveal from "./Reveal";
import photo2 from "@/photos/photo1.jpeg"
import photo3 from "@/photos/photo3.jpeg"

const pillars = [
  { title: "Our Mission", body: "To expose pupils to in-depth cognitive, affective and psychomotor domains of learning." },
  { title: "Our Vision", body: "To raise a new generation of pupils with functional education and morals" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="blob right-0 top-0 h-72 w-72 bg-teal-500/20" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        {/* Images */}
        <Reveal className="relative">
          <div className="relative aspect-[5/6] w-4/5 overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/15 ring-1 ring-black/5">
            <Image src={photo2} alt="Children learning together" fill sizes="40vw" className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 aspect-square w-1/2 overflow-hidden rounded-[1.5rem] border-4 border-cream shadow-xl">
            <Image src={photo3} alt="Outdoor play at the school" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="absolute left-2 top-6 rounded-2xl bg-brand-600 px-5 py-4 text-white shadow-xl">
            <p className="font-display text-3xl font-extrabold leading-none">25+</p>
            <p className="text-xs font-medium text-white/80">years nurturing minds</p>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <span className="inline-block rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
            About Our School
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink text-balance sm:text-4xl lg:text-[2.75rem]">
            More than a school - a place children feel they belong
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Brain Recharge Global School was founded on a simple belief: when
            children feel safe, valued and inspired, they flourish. Our warm
            teachers, vibrant classrooms and well-rounded curriculum give every
            pupil the foundation to succeed - academically and in life.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="rounded-2xl border border-brand-100 bg-white p-5">
                  <h3 className="font-display text-lg font-bold text-brand-700">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <a
            href="#admissions"
            className="mt-8 inline-flex items-center gap-2 font-bold text-brand-700 transition hover:gap-3"
          >
            Start your child&apos;s journey <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
