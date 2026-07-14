import { whyUs } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Parents Choose Us"
          title="A school that feels like a second home"
          subtitle="Everything we do is built around one goal - happy, confident children who genuinely love to learn."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="group h-full rounded-3xl border border-brand-100/70 bg-cream p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:bg-white hover:shadow-2xl hover:shadow-brand-900/10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-2xl transition group-hover:scale-110">
                  {item.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-ink/65">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
