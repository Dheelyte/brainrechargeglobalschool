import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span
        className={`inline-block rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${
          light ? "bg-white/15 text-white" : "bg-brand-50 text-brand-700"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/80" : "text-ink/65"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
