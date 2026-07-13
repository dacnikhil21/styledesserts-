"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Rooms.module.css";
import Footer from "@/components/Footer";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "910000000000";

const roomsData = [
  {
    id: "royal-swiss-1",
    title: "Royal Swiss Tent Suite",
    category: "Luxury",
    description: "Premium tent featuring a private sit-out, attached washroom, and exquisite royal decor.",
    image: "/images/photo-1.jpg", 
  },
  {
    id: "family-tent-1",
    title: "Maharaja Family Tent",
    category: "Family",
    description: "Spacious multi-bed tent designed for families, offering comfort and breathtaking views.",
    image: "/images/photo-2.jpg", 
  },
  {
    id: "couple-suite-1",
    title: "Romantic Desert Suite",
    category: "Couples",
    description: "Secluded suite for couples featuring romantic lighting and a private stargazing deck.",
    image: "/images/photo-3.jpg", 
  },
  {
    id: "royal-swiss-2",
    title: "Heritage Swiss Tent",
    category: "Luxury",
    description: "Authentic Rajasthani architecture combined with modern cooling systems and plush bedding.",
    image: "/images/photo-4.jpg", 
  },
  {
    id: "family-tent-2",
    title: "Oasis Family Villa Tent",
    category: "Family",
    description: "Two interconnected tents providing privacy for parents and fun for the children.",
    image: "/images/photo-5.jpg", 
  },
  {
    id: "couple-suite-2",
    title: "Dune View Couple Tent",
    category: "Couples",
    description: "Wake up to the golden sunrise over the dunes right from your luxurious king-sized bed.",
    image: "/images/photo-6.jpg", 
  }
];

const categories = ["All", "Luxury", "Family", "Couples"];

export default function RoomsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRooms = activeCategory === "All" 
    ? roomsData 
    : roomsData.filter(room => room.category === activeCategory);

  const handleWhatsApp = (title: string) => {
    const text = `Hello Style Desert Camp! I would like to inquire about booking the ${title}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="text-h1" style={{ color: "var(--color-dark-charcoal)" }}>Our Accommodations</h1>
          <p className="text-body" style={{ maxWidth: "600px", margin: "1rem auto 0", color: "#555" }}>
            Experience the ultimate comfort in the heart of the desert. Browse our range of premium Swiss tents.
          </p>
        </div>
      </header>

      <section className={styles.roomsSection}>
        <div className="container">
          {/* Categories Filter */}
          <div className={styles.filterContainer}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Rooms Grid */}
          <div className={styles.grid}>
            {filteredRooms.map((room) => (
              <div key={room.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className={`${styles.image} enhance-image`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.categoryBadge}>{room.category}</div>
                </div>
                
                <div className={styles.content}>
                  <h3 className="text-h4">{room.title}</h3>
                  <p className="text-body" style={{ fontSize: "0.95rem", color: "#666" }}>
                    {room.description}
                  </p>
                  
                  <div className={styles.actions}>
                    <Link href={`/room/${room.id}`} className={styles.detailsBtn}>
                      View Details <ArrowRight size={16} />
                    </Link>
                    
                    <button 
                      onClick={() => handleWhatsApp(room.title)}
                      className={styles.whatsappBtn}
                    >
                      <MessageCircle size={18} /> WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
