/**
 * Central site configuration.
 * 👉 Edit the values here to update contact details, links, and nav.
 */
export const site = {
  name: "Brain Recharge Global School",
  shortName: "BRGS",
  tagline: "Where Bright Minds Begin",
  description:
    "Brain Recharge Global School nurtures curious, confident children through joyful learning, caring teachers and a safe, modern campus. Book a tour today.",
  url: "https://brainrechargeglobalschool.com",

  // 👉 Replace with your real details
  email: "admissions@brainrechargeglobalschool.com",
  phone: "+234 800 000 0000",
  whatsapp: "2348000000000", // digits only, with country code
  address: "123 Learning Avenue, Lagos, Nigeria",
  hours: "Mon – Fri · 7:30am – 4:00pm",

  socials: {
    youtube: "https://youtube.com/@yourchannel", // 👉 your channel
    facebook: "#",
    instagram: "#",
  },

  // Anchor links used by the sticky nav (all on one page).
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Staff", href: "#staff" },
    { label: "Gallery", href: "#gallery" },
    { label: "Videos", href: "#videos" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
