import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { inquiryWhatsAppUrl } from "@/lib/inquiry";

/**
 * No-JS fallback for the admissions form: a plain form GET lands here and we
 * bounce the visitor to WhatsApp with the same pre-filled message the
 * client-side handler builds.
 */
export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  return NextResponse.redirect(inquiryWhatsAppUrl(searchParams), 303);
}

/**
 * Handles admission inquiry submissions.
 *
 * If RESEND_API_KEY + INQUIRY_TO_EMAIL are set in the environment, the inquiry
 * is emailed to the school. Otherwise it's logged to the server console so the
 * form still works out of the box during development.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { parentName, email, phone, childAge, message } = data ?? {};

    if (!parentName || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Please fill in your name, email and phone." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.INQUIRY_TO_EMAIL || site.email;

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Admissions <onboarding@resend.dev>",
          to: [to],
          reply_to: email,
          subject: `New admission inquiry - ${parentName}`,
          html: `
            <h2>New admission inquiry</h2>
            <p><strong>Parent:</strong> ${parentName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Child's age:</strong> ${childAge || "-"}</p>
            <p><strong>Message:</strong><br/>${(message || "-").replace(/\n/g, "<br/>")}</p>
          `,
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        console.error("[inquiry] Resend error:", err);
        return NextResponse.json(
          { ok: false, error: "Could not send right now. Please call us." },
          { status: 502 },
        );
      }
    } else {
      console.log("[inquiry] New admission inquiry (no email configured):", {
        parentName,
        email,
        phone,
        childAge,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry] error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
