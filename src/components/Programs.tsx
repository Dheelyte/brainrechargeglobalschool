import Image from "next/image";
import { programs } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Programs"
          title="A nurturing path for every age"
          subtitle="From first steps to confident pre-teens, our stages are designed to meet children exactly where they are."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-3xl bg-cream shadow-sm ring-1 ring-brand-100/70 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink backdrop-blur">
                    {p.age}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className={`font-display text-lg font-bold ${p.color}`}>
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {p.blurb}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
