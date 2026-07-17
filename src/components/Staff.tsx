import Image from "next/image";
import { staff } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Staff() {
  return (
    <section id="staff" className="section-fade relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="blob -left-10 bottom-10 h-72 w-72 bg-accent-200" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="Caring teachers who know every child by name"
          subtitle="Experienced, warm and endlessly patient - the people who make our school feel like family."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {staff.map((person, i) => (
            <Reveal key={person.name} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand-100/70 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/10">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <p className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-sm text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    {person.bio}
                  </p>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {person.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-brand-600">
                    {person.role}
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
