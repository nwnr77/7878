import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["cyrillic", "latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "Maison Massage — профессиональные курсы массажа с практикой",
  description: "Премиальная школа массажа: 80% практики, сертификат, опытные преподаватели, помощь с трудоустройством.",
  keywords: ["курсы массажа", "школа массажа", "обучение массажу", "сертификат массажиста"],
  openGraph: { title: "Профессиональные курсы массажа с практикой", description: "Освойте востребованную профессию за несколько недель.", type: "website", locale: "ru_RU" },
};

/** Root layout with automatic light/dark theme via system preference. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={manrope.variable}>{children}</body></html>;
}
