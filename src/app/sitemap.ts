import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.styledesertcamp.in";

  const routes = [
    "",
    "/rooms",
    "/room/super-luxury-tent",
    "/room/super-deluxe-tent",
    "/room/luxury-tent",
    "/room/candle-night-dinner",
    "/tariff",
    "/gallery",
    "/activities",
    "/contact",
    "/explore",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/room") ? 0.9 : 0.8,
  }));
}
