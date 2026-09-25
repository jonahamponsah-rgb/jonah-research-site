import type { MetadataRoute } from "next";
import { projects } from "./data";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/research", "/publications", "/projects", "/talks", "/cv", "/contact", ...projects.map(project => `/projects/${project.slug}`)].map(path => ({ url: `${siteUrl}${path}` }));
}
