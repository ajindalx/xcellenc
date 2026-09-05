import type { MetadataRoute } from "next";

const routes = [
  "",
  "/life",
  "/work",
  "/practice",
  "/connections",
  "/circle",
  "/journal",
  "/about",
  "/join",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://xcellenc.com${route}`,
    lastModified: new Date(),
  }));
}
