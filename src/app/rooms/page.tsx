"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Rooms.module.css";
import Footer from "@/components/Footer";
import RoomSliderDrawer from "@/components/RoomSliderDrawer";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918209879234";

const roomsData = [
  {
    id: "super-deluxe-tent",
    name: "Super Luxury Tent",
    capacity: "2 Guests",
    bed: "King Size Bed",
    bathroom: "Attached Modern Bath",
    ac: "Air Conditioned",
    meals: "Breakfast & Dinner Included",
    description:
      "Our Super Luxury Tent offers authentic desert elegance with supreme comfort — featuring handcrafted wooden furnishings, plush bedding, attached modern bathroom, and private veranda.",
    images: [
      "/images/super-luxury-tent-1.jpg",
      "/images/super-luxury-tent-2.jpg",
      "/images/super-luxury-tent-3.jpg",
      "/images/super-luxury-tent-4.jpg",
      "/images/super-luxury-tent-5.jpg",
      "/images/super-luxury-tent-6.jpg",
    ],
    coverIndex: 0,
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
      "Experience the pinnacle of desert luxury. Our Luxury Tent blends authentic Rajasthani heritage with modern indulgences — handcrafted furniture, premium cooling, and a serene canvas ceiling that transports you to a regal era.",
    images: [
      "/images/luxury-tent-1.jpg",
      "/images/luxury-tent-2.jpg",
      "/images/luxury-tent-3.jpg",
      "/images/luxury-tent-4.jpg",
    ],
    coverIndex: 2,
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
  },
];

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<typeof roomsData[0] | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = (room: typeof roomsData[0]) => {
    setSelectedRoom(room);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => setSelectedRoom(null), 500);
  };

  const handleWhatsApp = (name: string) => {
    const text = `Hello Style Desert Camp! I would like to inquire about booking the ${name}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className="container">
            <h1 className="text-h1" style={{ color: "var(--color-dark-charcoal)" }}>
              Our Accommodations
            </h1>
            <p className="text-body" style={{ maxWidth: "600px", margin: "1rem auto 0", color: "#555" }}>
              Experience the ultimate comfort in the heart of the desert. Choose from our handpicked luxury tents and exclusive experiences.
            </p>
          </div>
        </header>

        <section className={styles.roomsSection}>
          <div className="container">
            <div className={styles.grid}>
              {roomsData.map((room) => (
                <div
                  key={room.id}
                  className={styles.card}
                  onClick={() => openDrawer(room)}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={room.images[room.coverIndex]}
                      alt={`${room.name} - Luxury Desert Camp in Jaisalmer at Sam Sand Dunes`}
                      fill
                      className={`${styles.image} enhance-image`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className={styles.viewHint}>
                      <span>View Details</span>
                    </div>
                  </div>

                  <div className={styles.content}>
                    <h3 className="text-h4">{room.name}</h3>
                    <p className="text-body" style={{ fontSize: "0.95rem", color: "#666" }}>
                      {room.description}
                    </p>

                    <div className={styles.actions}>
                      <button
                        className={styles.detailsBtn}
                        onClick={(e) => { e.stopPropagation(); openDrawer(room); }}
                      >
                        View Details
                      </button>

                      <button
                        onClick={(e) => { e.stopPropagation(); handleWhatsApp(room.name); }}
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

      <RoomSliderDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        room={selectedRoom}
        initialSlideIndex={selectedRoom?.coverIndex ?? 0}
      />
    </>
  );
}
