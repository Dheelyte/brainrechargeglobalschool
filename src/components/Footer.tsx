import { site } from "@/lib/site";

const contactCards = [
  { icon: "📍", label: "Visit us", value: site.address },
  { icon: "📞", label: "Call us", value: site.phone, href: `tel:${site.phone}` },
  { icon: "✉️", label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: "🕘", label: "Open hours", value: site.hours },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink text-white">
      <div className="blob -left-10 top-0 h-72 w-72 bg-brand-600/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        {/* Contact band */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <span className="text-2xl">{c.icon}</span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/50">
                {c.label}
              </p>
              {c.href ? (
                <a href={c.href} className="mt-1 block font-medium text-white hover:text-accent-300">
                  {c.value}
                </a>
              ) : (
                <p className="mt-1 font-medium text-white/90">{c.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-10 text-center shadow-2xl sm:px-10">
          <h3 className="font-display text-2xl font-extrabold text-balance sm:text-3xl">
            Ready to give your child the best start?
          </h3>
          <p className="max-w-xl text-white/85">
            Book a personal tour of {site.name} and see why families love it here.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#admissions"
              className="rounded-full bg-white px-7 py-3 font-bold text-brand-700 shadow-lg transition hover:-translate-y-0.5"
            >
              Book a Tour
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal-500 px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-extrabold text-white">
              B
            </span>
            <div className="leading-tight">
              <p className="font-display font-bold">{site.name}</p>
              <p className="text-xs text-white/50">{site.tagline}</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/60">
            {site.nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {[
              ["YouTube", site.socials.youtube, "▶"],
              ["Facebook", site.socials.facebook, "f"],
              ["Instagram", site.socials.instagram, "◎"],
            ].map(([label, href, icon]) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm transition hover:bg-white/20"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
