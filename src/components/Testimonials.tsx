import Image from "next/image";
import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="section-fade bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Happy Parents"
          title="Families love it here - and so will yours"
          subtitle="Don't just take our word for it. Here's what parents in our community say."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-100/70">
                <div className="text-4xl leading-none text-accent-400">&ldquo;</div>
                <blockquote className="mt-2 flex-1 leading-relaxed text-ink/75">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-100 pt-5">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-ink">{t.name}</p>
                    <p className="text-sm text-ink/55">{t.relation}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
