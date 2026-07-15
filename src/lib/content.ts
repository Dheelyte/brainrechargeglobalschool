import photo4 from "@/photos/photo4.jpeg"
import photo5 from "@/photos/photo5.jpeg"
import photo6 from "@/photos/photo6.jpeg"
import photo7 from "@/photos/photo7.jpeg"
import photo8 from "@/photos/photo8.jpeg"
import photo9 from "@/photos/photo9.jpeg"
import photo10 from "@/photos/photo10.jpeg"
import kindergarten from "@/photos/kindergarten.jpeg"
import grade1 from "@/photos/grade1.jpeg"
import grade4 from "@/photos/grade4.jpeg"
import photo11 from "@/photos/photo11.jpeg"
import photo12 from "@/photos/photo12.jpeg"
import photo13 from "@/photos/photo13.jpeg"
import photo14 from "@/photos/photo14.jpeg"
import photo15 from "@/photos/photo15.jpeg"


export type WhyUsItem = { icon: string; title: string; body: string };
export type Program = {
  name: string;
  age: string;
  blurb: string;
  image: any;
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
  category: "Environment" | "Classrooms" | "Events" | "Sports" | "Arts";
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
    title: "Safe & Secure Environment",
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
    image: photo10,
    color: "text-coral-500",
  },
  {
    name: "Kindergarten",
    age: "Ages 4 – 5",
    blurb:
      "Foundational reading, numeracy and social skills through songs, stories and joyful hands-on exploration.",
    image: kindergarten,
    color: "text-accent-500",
  },
  {
    name: "Lower Primary",
    age: "Ages 6 – 8",
    blurb:
      "Strong literacy and numeracy foundations paired with science, creativity and good character.",
    image: grade1,
    color: "text-teal-500",
  },
  {
    name: "Upper Primary",
    age: "Ages 9 – 11",
    blurb:
      "Confident, independent learners prepared for secondary school through rich academics and leadership.",
    image: grade4,
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
  { src: photo4, alt: "Bright, welcoming entrance", category: "Environment" },
  { src: photo5, alt: "Engaged pupils in a classroom", category: "Classrooms" },
  { src: photo10, alt: "Cultural day celebration", category: "Events" },
  { src: photo13, alt: "Cultural day celebration", category: "Events" },
  { src: photo6, alt: "Colourful learning materials", category: "Classrooms" },
  { src: photo8, alt: "School sports day", category: "Sports" },
  { src: photo12, alt: "Cultural day celebration", category: "Events" },
  { src: photo9, alt: "Music and arts class", category: "Arts" },
  { src: photo7, alt: "Cultural day celebration", category: "Events" },
  { src: photo11, alt: "Cultural day celebration", category: "Events" },  
  { src: photo14, alt: "Cultural day celebration", category: "Events" },
  { src: photo15, alt: "Cultural day celebration", category: "Events" },
];

export const galleryCategories = [
  "All",
  "Environment",
  "Classrooms",
  "Events",
  "Sports",
  "Arts",
] as const;
