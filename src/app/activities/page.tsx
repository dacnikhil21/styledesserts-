import React from "react";
import styles from "./Activities.module.css";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Desert Activities & Safaris | Camel Safari & Jeep Safari Jaisalmer",
  description: "Experience thrilling desert adventures in Jaisalmer: Camel Safari in Sam Sand Dunes, Jeep Dune Bashing, Rajasthani Folk Dance, Live Music, and Stargazing under the Thar Desert stars.",
};

const activities = [
  {
    id: "01",
    title: "Camel Safari In Jaisalmer",
    description: "Camel Safari in Desert. Optional at sunset or sunrise. (1 Camel for 2 Persons & Camel Cart for Senior Citizens)",
    image: "/activities/camel-safari.png"
  },
  {
    id: "02",
    title: "Traditional Welcome",
    description: "Experience our warm hospitality with a traditional Tikka Dastori welcome upon arrival.",
    image: "/activities/traditional-welcome.png"
  },
  {
    id: "03",
    title: "Tea, Coffee & Snacks",
    description: "Enjoy evening Tea or Coffee with delicious snacks after sunset at our camp's Dance Area.",
    image: "/activities/tea-snacks.png"
  },
  {
    id: "04",
    title: "Folk Dance Program",
    description: "Mesmerizing Rajasthani cultural folk dance performances to light up your evening.",
    image: "/activities/folk-dance.png"
  },
  {
    id: "05",
    title: "Live Langa Music",
    description: "Soulful live Langa party music echoing the rich traditions of the Thar Desert.",
    image: "/activities/live-music.png"
  },
  {
    id: "06",
    title: "Camp Fire Show",
    description: "Gather around the warmth of our Camp Fire Show (available during the winter season).",
    image: "/activities/camp-fire.jpeg"
  },
  {
    id: "07",
    title: "DJ & Group Dance",
    description: "Celebrate the night with an energetic Group Dance and DJ Party.",
    image: "/activities/dj-party.png"
  },
  {
    id: "08",
    title: "Rajasthani Buffet",
    description: "Savor authentic local flavors with our lavish Buffet Dinner featuring a Rajasthani Food Menu.",
    image: "/activities/buffet-dinner.png"
  },
  {
    id: "09",
    title: "Premium Tent Stay",
    description: "Relax in our Superior Tents featuring attached modern bathrooms with Hot & Cold running water.",
    image: "/activities/tent-stay.jpeg"
  },
  {
    id: "10",
    title: "Morning Breakfast",
    description: "Wake up to a hearty morning breakfast to start your day fresh.",
    image: "/activities/breakfast.png"
  },
  {
    id: "11",
    title: "Complimentary Water",
    description: "Stay hydrated with 2 bottles of complimentary mineral water provided during your stay.",
    image: "/activities/water.png"
  }
];

export default function ActivitiesPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="text-h1" style={{ color: "var(--color-soft-white)" }}>ACTIVITIES & SPORTS</h1>
          <p className="text-body" style={{ maxWidth: "600px", margin: "1.5rem auto 0", color: "rgba(255,255,255,0.8)", fontSize: "1.2rem" }}>
            Discover the magic of the Thar Desert with our curated tour itineraries and premium experiences.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className={styles.activitiesSection}>
        <div className={styles.sectionHeader}>
          <h2>ACTIVITIES & SPORTS</h2>
        </div>

        <div className={styles.grid}>
          {activities.map((activity) => (
            <div key={activity.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image 
                  src={activity.image} 
                  alt={activity.title} 
                  fill 
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.cardDescOverlay}>
                  <p className={styles.cardDesc}>{activity.description}</p>
                </div>
              </div>
              <div className={styles.titleBar}>
                <h3 className={styles.cardTitle}>{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready for the Adventure?</h2>
          <p className={styles.ctaDesc}>
            Book your stay today and experience all these amazing activities in the heart of Jaisalmer.
          </p>
          <a 
            href="https://wa.me/918209879234?text=Hello%20Style%20Desert%20Camp!%20I%20would%20like%20to%20book%20an%20adventure%20activity%20experience." 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: "none" }}
          >
            <MagneticButton type="button" className="btn-primary" style={{ margin: "0 auto" }}>
              Book Your Experience via WhatsApp
            </MagneticButton>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
