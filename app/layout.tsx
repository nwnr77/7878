import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vesper.ai — Operational AI Infrastructure",
};

/** Root layout for the Vesper.ai landing page. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body style={{ background: "#000", color: "#fff" }}>{children}</body></html>;
}
