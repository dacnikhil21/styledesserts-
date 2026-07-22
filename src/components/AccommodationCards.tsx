"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./AccommodationCards.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Users, BedDouble, Bath, Wind, Coffee } from "lucide-react";
import RoomSliderDrawer from "./RoomSliderDrawer";

gsap.registerPlugin(ScrollTrigger);

const rooms = [
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

export default function AccommodationCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = (room: typeof rooms[0]) => {
    setSelectedRoom(room);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => setSelectedRoom(null), 500);
  };

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section className={`section-padding ${styles.accommodationSection}`} ref={sectionRef}>
      <div className="container">
        <div className="text-center">
          <h2 className="text-h2">Luxury Accommodations</h2>
          <p className="text-body" style={{ margin: "0 auto", marginBottom: "var(--spacing-xl)" }}>
            Sleep beneath millions of stars in absolute comfort.{" "}
            Our tents combine traditional Rajasthani aesthetics with modern premium amenities.
          </p>
        </div>

        <div className={styles.grid}>
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={styles.card}
              ref={(el) => { cardsRef.current[index] = el; }}
              onClick={() => openDrawer(room)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={room.images[room.coverIndex]}
                  alt={`${room.name} - Luxury Desert Camp in Jaisalmer at Sam Sand Dunes`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={styles.viewGalleryHint}>
                  <span>View Details</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.title}>{room.name}</h3>

                <div className={styles.features}>
                  <div className={styles.feature}><Users size={18} /> {room.capacity}</div>
                  <div className={styles.feature}><BedDouble size={18} /> {room.bed}</div>
                  <div className={styles.feature}><Bath size={18} /> {room.bathroom}</div>
                  <div className={styles.feature}><Wind size={18} /> {room.ac}</div>
                  <div className={styles.feature}><Coffee size={18} /> {room.meals}</div>
                </div>

                <div className={styles.actions}>
                  <button
                    className="btn-secondary"
                    style={{ color: "var(--color-dark-charcoal)", borderColor: "var(--color-dark-charcoal)" }}
                    onClick={(e) => { e.stopPropagation(); openDrawer(room); }}
                  >
                    View Details
                  </button>
                  <a
                    href={`https://wa.me/918209879234?text=${encodeURIComponent(`Hello Style Desert Camp! I would like to book the ${room.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <RoomSliderDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        room={selectedRoom}
        initialSlideIndex={selectedRoom?.coverIndex ?? 0}
      />
    </section>
  );
}
