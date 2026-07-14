/**
 * Site content. Everything here is placeholder copy + stock photos.
 * 👉 Replace the text and image URLs with your school's real content.
 *    To use your own photos, drop them in /public and use "/your-photo.jpg".
 */

import photo4 from "@/photos/photo4.jpeg"
import photo5 from "@/photos/photo5.jpeg"
import photo6 from "@/photos/photo6.jpeg"
import photo7 from "@/photos/photo7.jpeg"
import photo8 from "@/photos/photo8.jpeg"
import photo9 from "@/photos/photo9.jpeg"



export type WhyUsItem = { icon: string; title: string; body: string };
export type Program = {
  name: string;
  age: string;
  blurb: string;
  image: string;
  color: string; // tailwind text color class for the accent
};
export type Staff = {
  name: string;
  role: string;
  image: string;
  bio: string;
};
export type Testimonial = {
  quote: string;
  name: string;
  relation: string;
  image: string;
};
export type GalleryImage = {
  src: any;
  alt: string;
  category: "Campus" | "Classrooms" | "Events" | "Sports" | "Arts";
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const whyUs: WhyUsItem[] = [
  {
    icon: "🌟",
    title: "Small, Caring Classes",
    body: "Low pupil-to-teacher ratios mean every child is seen, known and supported every single day.",
  },
  {
    icon: "🛡️",
    title: "Safe & Secure Campus",
    body: "Gated grounds, trained staff and a warm environment where parents have complete peace of mind.",
  },
  {
    icon: "🧠",
    title: "Brain-Building Curriculum",
    body: "A rich blend of academics, creativity and critical thinking that recharges young minds to love learning.",
  },
  {
    icon: "💻",
    title: "Modern Learning Tools",
    body: "Bright classrooms, ICT, a library and hands-on resources that make lessons come alive.",
  },
  {
    icon: "🎨",
    title: "Arts, Music & Sports",
    body: "Children grow in confidence through dance, drama, music, games and house competitions.",
  },
  {
    icon: "🤝",
    title: "Strong Parent Partnership",
    body: "Regular updates, open days and an active community keep families close to their child's journey.",
  },
];

export const programs: Program[] = [
  {
    name: "Early Years (Crèche & Nursery)",
    age: "Ages 1 – 4",
    blurb:
      "A gentle, play-based start where little ones build language, motor skills and a love of discovery in a nurturing space.",
    image: u("1503454537195-1dcabb73ffb9"),
    color: "text-coral-500",
  },
  {
    name: "Kindergarten",
    age: "Ages 4 – 5",
    blurb:
      "Foundational reading, numeracy and social skills through songs, stories and joyful hands-on exploration.",
    image: u("1587654780291-39c9404d746b"),
    color: "text-accent-500",
  },
  {
    name: "Lower Primary",
    age: "Ages 6 – 8",
    blurb:
      "Strong literacy and numeracy foundations paired with science, creativity and good character.",
    image: u("1427504494785-3a9ca7044f45"),
    color: "text-teal-500",
  },
  {
    name: "Upper Primary",
    age: "Ages 9 – 11",
    blurb:
      "Confident, independent learners prepared for secondary school through rich academics and leadership.",
    image: u("1546410531-bb4caa6b424d"),
    color: "text-brand-500",
  },
];

export const staff: Staff[] = [
  {
    name: "Mrs. Adaeze Okafor",
    role: "Head Teacher",
    image: u("1573496359142-b8d87734a5a2", 600),
    bio: "20+ years shaping confident, kind and curious learners.",
  },
  {
    name: "Mr. Daniel Bello",
    role: "Deputy Head & Maths Lead",
    image: u("1500648767791-00dcc994a43e", 600),
    bio: "Makes numbers click for every child through playful problem-solving.",
  },
  {
    name: "Miss Grace Eze",
    role: "Early Years Coordinator",
    image: u("1544005313-94ddf0286df2", 600),
    bio: "Creates a warm, joyful first experience of school.",
  },
  {
    name: "Mr. Samuel Johnson",
    role: "Arts, Music & Sports",
    image: u("1507003211169-0a1dd7228f2d", 600),
    bio: "Helps children shine on stage, in song and on the field.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "My daughter wakes up excited to go to school every morning. The teachers truly care, and her confidence has soared.",
    name: "Mrs. Folake A.",
    relation: "Parent of a Year 2 pupil",
    image: u("1438761681033-6461ffad8d80", 200),
  },
  {
    quote:
      "We toured several schools, but Brain Recharge felt like family from day one. Safe, warm and academically excellent.",
    name: "Mr. & Mrs. Okoro",
    relation: "Parents of a Kindergarten pupil",
    image: u("1633332755192-727a05c4013d", 200),
  },
  {
    quote:
      "The blend of academics, arts and values is exactly what we wanted. Our son has grown so much this year.",
    name: "Dr. Chidi N.",
    relation: "Parent of a Year 4 pupil",
    image: u("1507591064344-4c6ce005b128", 200),
  },
];

export const gallery: GalleryImage[] = [
  { src: photo4, alt: "Bright, welcoming campus entrance", category: "Campus" },
  { src: photo5, alt: "Engaged pupils in a classroom", category: "Classrooms" },
  { src: photo6, alt: "Colourful learning materials", category: "Classrooms" },
  { src: photo7, alt: "Children celebrating at an event", category: "Events" },
  { src: photo8, alt: "School sports day", category: "Sports" },
  { src: photo9, alt: "Music and arts class", category: "Arts" },
  { src: photo4, alt: "Outdoor play area", category: "Campus" },
  { src: photo5, alt: "Reading time in the library", category: "Classrooms" },
  { src: photo6, alt: "Children painting together", category: "Arts" },
  { src: photo7, alt: "Group science activity", category: "Classrooms" },
  { src: photo8, alt: "Football practice", category: "Sports" },
  { src: photo9, alt: "Cultural day celebration", category: "Events" },
];

export const galleryCategories = [
  "All",
  "Campus",
  "Classrooms",
  "Events",
  "Sports",
  "Arts",
] as const;
