"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { inquiryWhatsAppUrl } from "@/lib/inquiry";

const steps = [
  { n: "01", title: "Send an inquiry", body: "Fill the form and tell us about your child." },
  { n: "02", title: "Book a tour", body: "Visit our school and meet our friendly team." },
  { n: "03", title: "Simple assessment", body: "A relaxed, age-appropriate placement chat." },
  { n: "04", title: "Welcome aboard", body: "Complete enrolment and join the BRGS family." },
];

type Status = "idle" | "success";

export default function Admissions() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    window.open(inquiryWhatsAppUrl(new FormData(form)), "_blank", "noopener,noreferrer");
    setStatus("success");
    form.reset();
  }

  const field =
    "w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-ink/35 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

  return (
    <section id="admissions" className="section-fade relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="blob -left-10 top-20 h-72 w-72 bg-brand-200" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-2 lg:px-8">
        {/* Left: steps */}
        <div>
          <span className="inline-block rounded-full bg-accent-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-600">
            Admissions Open
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink text-balance sm:text-4xl lg:text-[2.75rem]">
            Give your child a head start
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/65">
            Joining {site.name} is simple. Send us an inquiry and our team will
            reach out within 24 hours to help you every step of the way.
          </p>

          <ol className="mt-8 space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 font-display text-sm font-extrabold text-white">
                  {s.n}
                </span>
                <div>
                  <p className="font-bold text-ink">{s.title}</p>
                  <p className="text-sm text-ink/60">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: form card */}
        <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-cream p-6 shadow-xl ring-1 ring-brand-100 sm:p-8">
          {status === "success" ? (
            <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-500/15 text-3xl">
                🎉
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                Thank you!
              </h3>
              <p className="mt-2 max-w-sm text-ink/65">
                WhatsApp has opened with your inquiry ready — just press send,
                and our admissions team will reply within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              // action/method/target make the form work even when JS never
              // runs: the server route redirects the new tab to WhatsApp.
              action="/api/inquiry"
              method="get"
              target="_blank"
              rel="noopener"
              className="space-y-4"
            >
              <h3 className="font-display text-xl font-bold text-ink">
                Request information
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="parentName" required placeholder="Parent / guardian name *" className={field} />
                <input name="childAge" placeholder="Child's age" className={field} />
              </div>
              <input type="email" name="email" required placeholder="Email address *" className={field} />
              <input name="phone" required placeholder="Phone number *" className={field} />
              <textarea
                name="message"
                rows={4}
                placeholder="Anything you'd like us to know? (optional)"
                className={field}
              />

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-accent-500/30 transition hover:-translate-y-0.5"
              >
                Send my inquiry via WhatsApp
              </button>
              <p className="text-center text-xs text-ink/50">
                Opens WhatsApp with your message ready to send. Prefer to talk?
                Call{" "}
                <a href={`tel:${site.phone}`} className="font-semibold text-brand-700">
                  {site.phone}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
