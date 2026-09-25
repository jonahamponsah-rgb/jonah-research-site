import type { Metadata } from "next";

export const siteUrl = "https://jonahamponsah.com";
export const homeTitle = "Jonah Kwesi Amponsah, PhD | Statistics, Machine Learning & Implementation Science";
export const homeDescription = "Personal research website of Jonah Kwesi Amponsah, PhD, featuring work in biostatistics, explainable AI, predictive modeling, implementation science, oncology, and population health.";

export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  const fullTitle = pathname === "/" ? title : `${title} | Jonah Kwesi Amponsah, PhD`;
  const url = new URL(pathname, siteUrl).toString();
  const image = { url: `${siteUrl}/social/jonah-amponsah.png`, width: 1200, height: 630, alt: "Jonah Kwesi Amponsah, PhD — Methods. Implementation. Impact." };
  return {
    title: { absolute: fullTitle }, description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "en_US", siteName: "Jonah Kwesi Amponsah, PhD", title: fullTitle, description, url, images: [image] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}
