import React from "react";
import styles from "./Tariff.module.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { 
  Compass, 
  HeartHandshake, 
  Coffee, 
  Users, 
  Music, 
  Flame, 
  Speaker, 
  Utensils, 
  Sun, 
  Droplets,
  Tent
} from "lucide-react";

export const metadata = {
  title: "Premium Tariff | Style Desert Camp",
  description: "Transparent pricing for unforgettable luxury desert experiences at Style Desert Camp Jaisalmer.",
};

const includedFacilities = [
  { name: "Camel Safari", icon: <Compass size={20} /> },
  { name: "Traditional Welcome", icon: <HeartHandshake size={20} /> },
  { name: "Tea & Snacks", icon: <Coffee size={20} /> },
  { name: "Folk Dance", icon: <Users size={20} /> },
  { name: "Live Music", icon: <Music size={20} /> },
  { name: "Camp Fire", icon: <Flame size={20} /> },
  { name: "DJ Night", icon: <Speaker size={20} /> },
  { name: "Buffet Dinner", icon: <Utensils size={20} /> },
  { name: "Morning Breakfast", icon: <Sun size={20} /> },
  { name: "Complimentary Water", icon: <Droplets size={20} /> },
  { name: "Luxury Swiss Tent", icon: <Tent size={20} /> }
];

export default function TariffPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Luxury Desert Camp Pricing</h1>
          <p className={styles.heroSubtitle}>
            Transparent pricing for unforgettable desert experiences.
          </p>
          <a href="https://wa.me/918209879234?text=Hello%20Style%20Desert%20Camp!%20I%20would%20like%20to%20book%20a%20stay." target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryLuxury}>
            Book Your Stay
          </a>
        </div>
      </section>

      {/* Pricing Sections */}
      <section className={styles.pricingContainer}>
        
        {/* Regular Season */}
        <div className={styles.seasonBlock}>
          <div className={styles.seasonHeader}>
            <h2 className={styles.seasonTitle}>Regular Season</h2>
            <div className={styles.seasonDates}>Standard Rates</div>
          </div>
          
          <div className={styles.cardsGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.cardImageWrapper}>
                <Image src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Super Deluxe Tent" fill className={styles.cardImage} unoptimized />
              </div>
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.cardTitle}>Super Deluxe Tent</h3>
                  <div className={styles.priceContainer}>
                    <div className={styles.price}>₹3,500</div>
                    <div className={styles.perUnit}>Per Tent</div>
                  </div>
                </div>
                <a href="https://wa.me/918209879234?text=Hello!%20I%20want%20to%20book%20a%20Super%20Deluxe%20Tent." target="_blank" rel="noopener noreferrer" className={styles.btnSecondaryLuxury}>
                  Book Now
                </a>
              </div>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.cardImageWrapper}>
                <Image src="/activities/tent-stay.jpeg" alt="Luxury Tent" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.cardTitle}>Luxury Tent</h3>
                  <div className={styles.priceContainer}>
                    <div className={styles.price}>₹4,500</div>
                    <div className={styles.perUnit}>Per Tent</div>
                  </div>
                </div>
                <a href="https://wa.me/918209879234?text=Hello!%20I%20want%20to%20book%20a%20Luxury%20Tent." target="_blank" rel="noopener noreferrer" className={styles.btnSecondaryLuxury}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Peak Season */}
        <div className={styles.seasonBlock}>
          <div className={styles.seasonHeader}>
            <h2 className={styles.seasonTitle}>Peak Season</h2>
            <div className={styles.seasonDates}>20 December – 31 December</div>
          </div>
          
          <div className={styles.cardsGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.cardImageWrapper}>
                <Image src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Super Deluxe Tent Peak Season" fill className={styles.cardImage} unoptimized />
              </div>
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.cardTitle}>Super Deluxe Tent</h3>
                  <div className={styles.priceContainer}>
                    <div className={styles.price}>₹7,500</div>
                    <div className={styles.perUnit}>Per Tent</div>
                  </div>
                </div>
                <a href="https://wa.me/918209879234?text=Hello!%20I%20want%20to%20book%20a%20Super%20Deluxe%20Tent%20during%20Peak%20Season." target="_blank" rel="noopener noreferrer" className={styles.btnSecondaryLuxury}>
                  Book Now
                </a>
              </div>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.cardImageWrapper}>
                <Image src="/activities/tent-stay.jpeg" alt="Luxury Tent Peak Season" fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div>
                  <h3 className={styles.cardTitle}>Luxury Tent</h3>
                  <div className={styles.priceContainer}>
                    <div className={styles.price}>₹10,500</div>
                    <div className={styles.perUnit}>Per Tent</div>
                  </div>
                </div>
                <a href="https://wa.me/918209879234?text=Hello!%20I%20want%20to%20book%20a%20Luxury%20Tent%20during%20Peak%20Season." target="_blank" rel="noopener noreferrer" className={styles.btnSecondaryLuxury}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Included Facilities */}
      <section className={styles.facilitiesSection}>
        <div className={styles.facilitiesContainer}>
          <div className={styles.facilitiesHeader}>
            <h2 className={styles.facilitiesTitle}>Included Facilities</h2>
          </div>
          <div className={styles.facilitiesGrid}>
            {includedFacilities.map((item, index) => (
              <div key={index} className={styles.facilityItem}>
                <div className={styles.facilityIcon}>{item.icon}</div>
                <div className={styles.facilityText}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>Ready for an unforgettable desert experience?</h2>
          <div className={styles.ctaButtons}>
            <a href="https://wa.me/918209879234?text=Hello%20Style%20Desert%20Camp!%20I%20would%20like%20to%20book%20a%20stay." target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryLuxury}>
              Book Your Stay
            </a>
            <Link href="/contact" className={styles.btnSecondaryLuxury}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
