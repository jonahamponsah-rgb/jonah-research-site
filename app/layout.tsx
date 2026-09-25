import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  ...(process.env.SITE_URL ? { metadataBase: new URL(process.env.SITE_URL) } : {}),
  authors: [{ name: "Jonah Kwesi Amponsah" }],
  title: {
    default: "Jonah Kwesi Amponsah, PhD",
    template: "%s · Jonah Amponsah",
  },
  description:
    "Statistician, machine learning researcher, and implementation scientist working across explainable AI, oncology, and population health.",
  openGraph: {
    title: "Jonah Kwesi Amponsah, PhD",
    description:
      "Statistics, machine learning, implementation science, oncology, and population health research.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
