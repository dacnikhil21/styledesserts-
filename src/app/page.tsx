import Image from "next/image";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AccommodationCards from "@/components/AccommodationCards";
import Gallery from "@/components/Gallery";
import Atmosphere from "@/components/Atmosphere";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Atmosphere />
      <Hero />
      <WhyChooseUs />
      <AccommodationCards />
      <Gallery />
      <ExperienceTimeline />
      <Footer />
    </main>
  );
}
