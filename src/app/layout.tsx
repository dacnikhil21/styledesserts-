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
    default: "Style Desert Camp | Luxury Desert Camp in Jaisalmer | Sam Sand Dunes",
    template: "%s | Style Desert Camp Jaisalmer",
  },
  description:
    "Experience luxury desert camping in Jaisalmer at Style Desert Camp. Enjoy premium tents, camel safari, jeep safari, Rajasthani cultural nights, bonfire, delicious food, sunset views, and unforgettable stays at Sam Sand Dunes.",
  keywords: [
    "Desert Camp Jaisalmer",
    "Luxury Desert Camp Jaisalmer",
    "Best Desert Camp Jaisalmer",
    "Sam Sand Dunes Camp",
    "Luxury Camp Sam Sand Dunes",
    "Camel Safari Jaisalmer",
    "Jeep Safari Jaisalmer",
    "Royal Tent Jaisalmer",
    "Luxury Tent Stay Jaisalmer",
    "Desert Safari Jaisalmer",
    "Family Desert Camp",
    "Romantic Desert Camp",
    "Luxury Camp Rajasthan",
    "Thar Desert Camp",
    "Camping in Jaisalmer",
    "Best Camp in Sam Sand Dunes",
    "Glamping Jaisalmer",
    "Premium Desert Camp",
    "Luxury Safari Camp",
    "Rajasthani Cultural Camp",
    "Style Desert Camp",
  ],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
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
  verification: {
    google: "google92d2b63222ff41b0",
  },
  openGraph: {
    title: "Style Desert Camp | Luxury Desert Camp in Jaisalmer | Sam Sand Dunes",
    description:
      "Experience luxury desert camping in Jaisalmer at Style Desert Camp. Enjoy premium tents, camel safari, jeep safari, Rajasthani cultural nights, bonfire, delicious food, sunset views, and unforgettable stays at Sam Sand Dunes.",
    url: "https://www.styledesertcamp.in",
    siteName: "Style Desert Camp Jaisalmer",
    images: [
      {
        url: "/images/super-deluxe-tent.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Desert Camp in Jaisalmer - Style Desert Camp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Style Desert Camp | Luxury Desert Camp in Jaisalmer | Sam Sand Dunes",
    description:
      "Experience luxury desert camping in Jaisalmer at Style Desert Camp. Premium tents, camel safari, jeep safari, Rajasthani cultural nights & bonfire at Sam Sand Dunes.",
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

