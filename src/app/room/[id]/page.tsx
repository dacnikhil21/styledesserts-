import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./Room.module.css";
import Footer from "@/components/Footer";
import { Check, Calendar, Users, BedDouble, Bath, Wind, ArrowLeft, Star, Coffee } from "lucide-react";

const roomsData = [
  {
    id: "super-deluxe-tent",
    name: "Super Deluxe Tent",
    capacity: "2 Guests",
    bed: "King Size Bed",
    bathroom: "Attached Modern Bath",
    ac: "Air Conditioned",
    meals: "Breakfast & Dinner Included",
    description:
      "Our Super Deluxe Tent offers authentic desert elegance with supreme comfort — featuring handcrafted wooden furnishings, plush bedding, attached modern bathroom, and private veranda.",
    images: [
      "/images/super-deluxe-tent.jpg",
      "/images/super-deluxe-tent-2.jpg",
      "/images/luxury-tent-1.jpg",
      "/images/luxury-tent-2.jpg",
    ],
    coverIndex: 0,
    amenities: [
      { icon: <Wind size={20}/>, text: "Air Conditioning" },
      { icon: <Bath size={20}/>, text: "Modern Bathroom" },
      { icon: <Check size={20}/>, text: "Pure Veg Breakfast & Dinner" },
      { icon: <Check size={20}/>, text: "Camel Safari Included" },
      { icon: <Check size={20}/>, text: "Folk Dance & DJ Night" },
      { icon: <Check size={20}/>, text: "Private Veranda" },
    ]
  },
  {
    id: "luxury-tent",
    name: "Luxury Tent",
    capacity: "2 Guests",
    bed: "King Size Premium",
    bathroom: "Attached Luxury Bath",
    ac: "Air Conditioned",
    meals: "Breakfast & Dinner Included",
    description:
      "Experience the pinnacle of desert luxury in our Luxury Tent. Blending authentic Rajasthani heritage with modern indulgence — handcrafted furniture, premium cooling, and a serene canvas tent ceiling that transports you to a regal era.",
    images: [
      "/images/luxury-tent-1.jpg",
      "/images/luxury-tent-2.jpg",
      "/images/luxury-tent-3.jpg",
      "/images/luxury-tent-4.jpg",
    ],
    coverIndex: 2,
    amenities: [
      { icon: <Wind size={20}/>, text: "Air Conditioning" },
      { icon: <Bath size={20}/>, text: "Premium Toiletries" },
      { icon: <Check size={20}/>, text: "Pure Veg Breakfast & Dinner" },
      { icon: <Check size={20}/>, text: "Camel Safari Access" },
      { icon: <Check size={20}/>, text: "Evening Cultural Show" },
      { icon: <Check size={20}/>, text: "High-Speed Wi-Fi" },
    ]
  },
  {
    id: "candle-night-dinner",
    name: "Candle Night Dinner",
    capacity: "2 Guests",
    bed: "Special Setup",
    bathroom: "Included Essentials",
    ac: "Open Desert Air",
    meals: "Romantic Dinner Included",
    description:
      "A magical evening under the open desert sky — a private candlelit dinner surrounded by camels, a warm bonfire, and a breathtaking Milky Way overhead. The most romantic experience the Thar Desert has to offer.",
    images: [
      "/images/night-1.jpg",
      "/images/night-2.jpg",
      "/images/night-3.jpg",
      "/images/candle-3.jpg",
      "/images/candle-4.jpg",
    ],
    coverIndex: 3,
    amenities: [
      { icon: <Coffee size={20}/>, text: "Private Candlelit Dinner" },
      { icon: <Check size={20}/>, text: "Traditional Floor Seating" },
      { icon: <Check size={20}/>, text: "Exclusive Bonfire Setup" },
      { icon: <Check size={20}/>, text: "Camel Companions" },
      { icon: <Star size={20}/>, text: "Unobstructed Stargazing" },
    ]
  },
];

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = roomsData.find(r => r.id === id);
  if (!room) return notFound();

  return (
    <div style={{ position: "relative", backgroundColor: "var(--color-soft-white)" }}>
      {/* Header / Nav */}
      <header className={styles.header}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={20} /> Back
          </Link>
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--color-golden-dunes)" }}>Style Desert Camp</span>
        </div>
      </header>

      {/* Hero Gallery */}
      <section className={styles.heroGallery}>
        <div className={styles.mainImage}>
          <Image src={room.images[room.coverIndex]} alt={room.name} fill className={styles.img} sizes="60vw" priority />
        </div>
        <div className={styles.sideImages}>
          {room.images.map((img, i) => {
            if (i === room.coverIndex || i > room.coverIndex + 2) return null; 
            return (
              <div className={styles.sideImage} key={i}>
                <Image src={img} alt={`${room.name} ${i}`} fill className={styles.img} sizes="40vw" />
              </div>
            );
          })}
        </div>
      </section>

      <div className={`container ${styles.layout}`}>
        {/* Main Content */}
        <div className={styles.content}>
          <h1 className="text-h2" style={{ marginBottom: "var(--spacing-sm)" }}>{room.name}</h1>
          <div className={styles.reviewsSummary}>
            <Star size={18} fill="var(--color-golden-dunes)" color="var(--color-golden-dunes)" />
            <Star size={18} fill="var(--color-golden-dunes)" color="var(--color-golden-dunes)" />
            <Star size={18} fill="var(--color-golden-dunes)" color="var(--color-golden-dunes)" />
            <Star size={18} fill="var(--color-golden-dunes)" color="var(--color-golden-dunes)" />
            <Star size={18} fill="var(--color-golden-dunes)" color="var(--color-golden-dunes)" />
            <span style={{ marginLeft: "0.5rem", fontSize: "0.9rem", color: "#666" }}>4.9 (128 reviews)</span>
          </div>

          <div className={styles.quickInfo}>
            <span><Users size={16} /> {room.capacity}</span>
            <span><BedDouble size={16} /> {room.bed}</span>
            <span><Bath size={16} /> {room.bathroom}</span>
          </div>

          <section className={styles.section}>
            <h2 className="text-h3">Description</h2>
            <p className="text-body">{room.description}</p>
          </section>

          <section className={styles.section}>
            <h2 className="text-h3">Experience & Included</h2>
            <div className={styles.amenitiesGrid}>
              {room.amenities.map((item, i) => (
                <div className={styles.amenityItem} key={i}>
                  {item.icon} {item.text}
                </div>
              ))}
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
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-dark-charcoal)" }}>{room.name}</h3>
            
            <div className={styles.calendarPlaceholder}>
              <Calendar size={20} />
              <span>Select Dates</span>
            </div>
            
            <div className={styles.guestsPlaceholder}>
              <Users size={20} />
              <span>{room.capacity}</span>
            </div>

            <a 
              href={`https://wa.me/918209879234?text=${encodeURIComponent(`Hello Style Desert Camp! I would like to book the ${room.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary ${styles.bookBtn}`}
              style={{ display: "block", textAlign: "center" }}
            >
              Book via WhatsApp
            </a>
            
            <p className={styles.widgetFooter}>We will confirm availability instantly.</p>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
