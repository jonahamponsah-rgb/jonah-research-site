import { siteUrl, homeTitle, homeDescription, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { metadataBase: new URL(siteUrl), authors: [{ name: "Jonah Kwesi Amponsah" }], ...pageMetadata(homeTitle, homeDescription, "/") };

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

