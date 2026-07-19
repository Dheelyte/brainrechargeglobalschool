import type { StaticImageData } from "next/image";

import g1 from "@/photos/graduation/1.jpeg";
import g2 from "@/photos/graduation/2.jpeg";
import g3 from "@/photos/graduation/3.jpeg";
import g4 from "@/photos/graduation/4.jpeg";
import g5 from "@/photos/graduation/5.jpeg";
import g6 from "@/photos/graduation/6.jpeg";
import g7 from "@/photos/graduation/7.jpeg";
import g8 from "@/photos/graduation/8.jpeg";
import g9 from "@/photos/graduation/9.jpeg";
import g10 from "@/photos/graduation/10.jpeg";
import g11 from "@/photos/graduation/11.jpeg";
import g12 from "@/photos/graduation/12.jpeg";
import g13 from "@/photos/graduation/13.jpeg";
import g14 from "@/photos/graduation/14.jpeg";
import g15 from "@/photos/graduation/15.jpeg";
import g16 from "@/photos/graduation/16.jpeg";
import g17 from "@/photos/graduation/17.jpeg";
import g18 from "@/photos/graduation/18.jpeg";
import g19 from "@/photos/graduation/19.jpeg";
import g20 from "@/photos/graduation/20.jpeg";
import g21 from "@/photos/graduation/21.jpeg";
import g22 from "@/photos/graduation/22.jpeg";
import g23 from "@/photos/graduation/23.jpeg";
import g24 from "@/photos/graduation/24.jpeg";
import g25 from "@/photos/graduation/25.jpeg";
import g26 from "@/photos/graduation/26.jpeg";
import g27 from "@/photos/graduation/27.jpeg";

export type GradLevel = "Kindergarten" | "Primary";
export type GraduationPhoto = {
  image: StaticImageData;
  set: string;
  name: string;
  level: GradLevel;
};

type Entry = { image: StaticImageData; name: string; level: GradLevel };

/**
 * 👉 Fill in each graduand's real `name` and `level` ("Nursery" or "Primary").
 *    Order matches the photo files (1–27). The names/levels below are
 *    PLACEHOLDERS — replace them with the real details.
 */
const set2526: Entry[] = [
  { image: g1, name: "ADESANYA OLUWATOBILOBA D.", level: "Primary" },
  { image: g2, name: "ADEYEYE GOD'SWILL O.", level: "Primary" },
  { image: g3, name: "IFEANYI CHINEMEREMU D.", level: "Primary" },
  { image: g4, name: "LINUS DAVID CHIMDINDU", level: "Primary" },
  { image: g5, name: "ILECHUKWU DAVID C.", level: "Kindergarten" },
  { image: g6, name: "SHOFOLAHAN IREMIDE", level: "Kindergarten" },
  { image: g7, name: "OCHUKO SHINDARA V.", level: "Kindergarten" },
  { image: g8, name: "FALANA OREOLUWA D.", level: "Kindergarten" },
  { image: g9, name: "KUMODE CLEMENCE A.", level: "Kindergarten" },
  { image: g10, name: "CLAUDE DORCAS O.", level: "Kindergarten" },
  { image: g11, name: "ADELAGAN ANUOLUWAPO A.", level: "Kindergarten" },
  { image: g12, name: "ADEGA ADEBUSAYO A.", level: "Kindergarten" },
];

const set2425: Entry[] = [
  { image: g13, name: "FOLORUNSHO REBECCA", level: "Primary" },
  { image: g14, name: "OYELADE ABDULALEEM O.", level: "Primary" },
  { image: g15, name: "SAKA ABDULBASIT A.", level: "Primary" },
  { image: g16, name: "ANISIOBI PRECIOUS A.", level: "Primary" },
  { image: g17, name: "OKAFOR CHISOM A.", level: "Primary" },
  { image: g18, name: "ADONIS WINNIE O.", level: "Primary" },
  { image: g19, name: "ADEGBOYEGA PAUL", level: "Primary" },
  { image: g20, name: "RAHEEM AYOMIDE K.", level: "Primary" },
  { image: g21, name: "OGUNTOYINBO JOHNSON O.", level: "Kindergarten" },
  { image: g22, name: "ADESANYA OLUWATIMILEHIN E.", level: "Kindergarten" },
  { image: g23, name: "ADEYEYE GOD'SGIFT A.", level: "Kindergarten" },
  { image: g24, name: "IGWEBUIKE GIANNA O.", level: "Kindergarten" },
  { image: g25, name: "ADEKANBI ISRAEL O.", level: "Kindergarten" },
  { image: g26, name: "OKAFOR SOMTOCHUKWU E.", level: "Kindergarten" },
  { image: g27, name: "ODEYINKA ADEOLA", level: "Kindergarten" },
];

export const graduationPhotos: GraduationPhoto[] = [
  ...set2526.map((e) => ({ ...e, set: "2025/2026" })),
  ...set2425.map((e) => ({ ...e, set: "2024/2025" })),
];
