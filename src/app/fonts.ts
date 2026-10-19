import localFont from "next/font/local";

export const dmSans = localFont({
  src: [
    { path: "./fonts/font-0.ttf", weight: "400", style: "normal" },
    { path: "./fonts/font-1.ttf", weight: "500", style: "normal" },
    { path: "./fonts/font-2.ttf", weight: "600", style: "normal" },
    { path: "./fonts/font-3.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const manrope = localFont({
  src: [
    { path: "./fonts/font-4.ttf", weight: "400", style: "normal" },
    { path: "./fonts/font-5.ttf", weight: "500", style: "normal" },
    { path: "./fonts/font-6.ttf", weight: "600", style: "normal" },
    { path: "./fonts/font-7.ttf", weight: "700", style: "normal" },
    { path: "./fonts/font-8.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-manrope",
  display: "swap",
});
