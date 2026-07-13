import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Room.module.css";
import Footer from "@/components/Footer";
import { Check, Calendar, Users, BedDouble, Bath, Wind, ArrowLeft, Star } from "lucide-react";

export default function RoomPage() {
  return (
    <div style={{ position: "relative", backgroundColor: "var(--color-soft-white)" }}>
      {/* Header / Nav */}
      <header className={styles.header}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--color-golden-dunes)" }}>Style Desert Camp</span>
        </div>
      </header>

      {/* Hero Gallery */}
      <section className={styles.heroGallery}>
        <div className={styles.mainImage}>
          <Image src="/images/tent.png" alt="Royal Swiss Tent Suite" fill className={styles.img} sizes="60vw" priority />
        </div>
        <div className={styles.sideImages}>
          <div className={styles.sideImage}>
            <Image src="/images/tent.png" alt="Tent interior" fill className={styles.img} sizes="40vw" />
          </div>
          <div className={styles.sideImage}>
            <Image src="/images/hero.png" alt="Tent exterior" fill className={styles.img} sizes="40vw" />
          </div>
        </div>
      </section>

      <div className={`container ${styles.layout}`}>
        {/* Main Content */}
        <div className={styles.content}>
          <h1 className="text-h2" style={{ marginBottom: "var(--spacing-sm)" }}>Royal Swiss Tent Suite</h1>
          <div className={styles.reviewsSummary}>
            <Star size={18} fill="var(--color-golden-dunes)" color="var(--color-golden-dunes)" />
            <Star size={18} fill="var(--color-golden-dunes)" color="var(--color-golden-dunes)" />
            <Star size={18} fill="var(--color-golden-dunes)" color="var(--color-golden-dunes)" />
            <Star size={18} fill="var(--color-golden-dunes)" color="var(--color-golden-dunes)" />
            <Star size={18} fill="var(--color-golden-dunes)" color="var(--color-golden-dunes)" />
            <span style={{ marginLeft: "0.5rem", fontSize: "0.9rem", color: "#666" }}>4.9 (128 reviews)</span>
          </div>

          <div className={styles.quickInfo}>
            <span><Users size={16} /> 2 Guests</span>
            <span><BedDouble size={16} /> 1 King Bed</span>
            <span><Bath size={16} /> Attached Bath</span>
          </div>

          <section className={styles.section}>
            <h2 className="text-h3">Room Description</h2>
            <p className="text-body">
              Experience the pinnacle of desert luxury in our Royal Swiss Tent Suite. Spanning over 600 sq.ft, 
              this sanctuary blends authentic Rajasthani heritage with modern indulgence. From the handcrafted 
              rosewood furniture to the premium cooling system, every detail ensures your comfort while you 
              connect with the serene beauty of the Thar Desert.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className="text-h3">Amenities & What's Included</h2>
            <div className={styles.amenitiesGrid}>
              <div className={styles.amenityItem}><Wind size={20}/> Air Conditioning</div>
              <div className={styles.amenityItem}><Bath size={20}/> Premium Toiletries</div>
              <div className={styles.amenityItem}><Check size={20}/> Pure Veg Breakfast & Dinner</div>
              <div className={styles.amenityItem}><Check size={20}/> Camel Safari Access</div>
              <div className={styles.amenityItem}><Check size={20}/> Evening Cultural Show</div>
              <div className={styles.amenityItem}><Check size={20}/> High-Speed Wi-Fi</div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className="text-h3">Policies</h2>
            <div className={styles.policies}>
              <div>
                <h4>Cancellation Policy</h4>
                <p>Free cancellation up to 7 days before check-in. 50% refund for cancellations made within 7 days.</p>
              </div>
              <div>
                <h4>House Rules</h4>
                <p>Check-in: 2:00 PM | Check-out: 11:00 AM. Quiet hours from 11:00 PM to 6:00 AM. No smoking inside the tents.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar / Booking Widget */}
        <aside className={styles.sidebar}>
          <div className={styles.bookingWidget}>
            <div className={styles.priceHeader}>
              <span className={styles.price}>₹12,500</span> <span className={styles.perNight}>/ night</span>
            </div>
            
            <div className={styles.calendarPlaceholder}>
              <Calendar size={20} />
              <span>Select Dates</span>
            </div>
            
            <div className={styles.guestsPlaceholder}>
              <Users size={20} />
              <span>2 Guests</span>
            </div>

            <button className={`btn-primary ${styles.bookBtn}`}>Book Your Stay</button>
            
            <p className={styles.widgetFooter}>You won't be charged yet.</p>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
