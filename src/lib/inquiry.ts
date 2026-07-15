import { site } from "./site";

/**
 * Builds the wa.me link that opens WhatsApp with the inquiry pre-filled.
 * Accepts anything with a .get() — FormData on the client, URLSearchParams
 * in the no-JS fallback route — so both paths produce the same message.
 */
export function inquiryWhatsAppUrl(fields: {
  get(name: string): unknown;
}): string {
  const get = (key: string) => String(fields.get(key) ?? "").trim();

  // *text* renders bold in WhatsApp once the message is sent.
  const details = [
    `*Parent / Guardian:* ${get("parentName")}`,
    get("childAge") && `*Child's age:* ${get("childAge")}`,
    `*Email:* ${get("email")}`,
    `*Phone:* ${get("phone")}`,
    get("message") && `*Message:* ${get("message")}`,
  ].filter(Boolean);
  const text = [`*New admission inquiry — ${site.shortName}*`, "", ...details].join("\n");

  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
