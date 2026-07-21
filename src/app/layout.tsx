import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.styledesertcamp.in"),
  title: {
    default: "Style Desert Camp | Luxury Desert Camp in Jaisalmer with Swimming Pool",
    template: "%s | Style Desert Camp Jaisalmer",
  },
  description:
    "Book the best luxury desert camp in Jaisalmer at Sam Sand Dunes. Experience AC Royal Swiss Tents, swimming pool, camel safari, jeep safari, Rajasthani folk music dance, and romantic candle light dining.",
  keywords: [
    "Style Desert Camp",
    "Desert Camp in Jaisalmer",
    "Luxury Desert Camp Jaisalmer",
    "Desert Camp with Swimming Pool",
    "Sam Sand Dunes Camp Jaisalmer",
    "Luxury Swiss Tents Jaisalmer",
    "Jaisalmer Camel Safari",
    "Jaisalmer Jeep Safari",
    "Candle Night Dinner Jaisalmer",
    "Best Desert Resort Jaisalmer",
    "Jaisalmer Tourism",
  ],
  authors: [{ name: "Style Desert Camp", url: "https://www.styledesertcamp.in" }],
  creator: "Style Desert Camp",
  publisher: "Style Desert Camp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Style Desert Camp | Luxury Desert Camp in Jaisalmer with Swimming Pool",
    description:
      "Experience royal hospitality in Sam Sand Dunes, Jaisalmer. Luxury AC Swiss Tents, Swimming Pool, Camel Safari, Desert Bonfire & Rajasthani Folk Performances.",
    url: "https://www.styledesertcamp.in",
    siteName: "Style Desert Camp Jaisalmer",
    images: [
      {
        url: "/images/super-deluxe-tent.jpg",
        width: 1200,
        height: 630,
        alt: "Super Deluxe Tent - Style Desert Camp Jaisalmer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Style Desert Camp | Luxury Desert Camp in Jaisalmer",
    description:
      "Luxury AC Tents, Swimming Pool, Camel Safari & Folk Dance at Sam Sand Dunes, Jaisalmer.",
    images: ["/images/super-deluxe-tent.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body>
        <SplashScreen />
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

