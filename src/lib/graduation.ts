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

export type GraduationPhoto = { image: StaticImageData; set: string };

const set2526 = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];
const set2425 = [g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, g23, g24, g25, g26, g27];

export const graduationPhotos: GraduationPhoto[] = [
  ...set2526.map((image) => ({ image, set: "2025/2026" })),
  ...set2425.map((image) => ({ image, set: "2024/2025" })),
];
