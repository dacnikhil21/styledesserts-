"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./PhotoGallerySection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RoomSliderDrawer from "./RoomSliderDrawer";

gsap.registerPlugin(ScrollTrigger);

const roomCards = [
  {
    id: "luxury-tent",
    name: "Luxury Tent",
    capacity: "2 Guests",
    bed: "King Size Premium",
    bathroom: "Attached Luxury Bath",
    ac: "Air Conditioned",
    meals: "Breakfast & Dinner Included",
    description:
      "Experience the pinnacle of desert luxury. Handcrafted furniture, premium cooling, and a serene canvas tent ceiling that transports you to a regal era.",
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
      "A magical evening under the desert sky — private candlelit dinner surrounded by camels, a warm bonfire, and the breathtaking Milky Way overhead.",
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


const photoCards = [
  { id: "p1", src: "/images/night-1.jpg", alt: "Stargazing under the Milky Way at Sam Sand Dunes Jaisalmer" },
  { id: "p2", src: "/images/night-2.jpg", alt: "Luxury Swiss Tent Stay under Jaisalmer Desert Stars" },
  { id: "p3", src: "/images/night-3.jpg", alt: "Stargazing and Milky Way View at Style Desert Camp Jaisalmer" },
  { id: "p4", src: "/images/candle-3.jpg", alt: "Romantic Candle Night Dinner with Camels in Jaisalmer" },
  { id: "p5", src: "/images/candle-4.jpg", alt: "Desert Bonfire and Campfire Dinner at Sam Sand Dunes" },
  { id: "p6", src: "/images/luxury-tent-3.jpg", alt: "Luxury Tent Interior at Style Desert Camp Jaisalmer" },
  { id: "p7", src: "/images/luxury-tent-4.jpg", alt: "Royal Swiss Tent Bedroom Jaisalmer" },
  { id: "p8", src: "/images/luxury-tent-1.jpg", alt: "Luxury AC Tent Bathroom Jaisalmer" },
];

export default function PhotoGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<typeof roomCards[0] | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openDrawer = (room: typeof roomCards[0]) => {
    setSelectedRoom(room);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => setSelectedRoom(null), 500);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
            delay: (i % 5) * 0.07,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className={styles.section} ref={sectionRef}>
        <div className="container text-center">
          <h2 className="text-h2">Moments at Style Desert Camp</h2>
          <p className="text-body" style={{ margin: "0 auto 2rem" }}>
            Real experiences, real memories — explore our rooms and experiences through the lens.
          </p>
        </div>

        <div className="container">
          <div className={styles.grid}>
            {/* First 2: Room category cards */}
            {roomCards.map((room, i) => (
              <div
                key={room.id}
                className={`${styles.card} ${styles.roomCard}`}
                ref={(el) => { cardsRef.current[i] = el; }}
                onClick={() => openDrawer(room)}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={room.images[room.coverIndex]}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className={styles.img}
                  />
                  <div className={styles.roomOverlay}>
                    <span className={styles.roomLabel}>{room.name}</span>
                    <span className={styles.viewBtn}>View Details →</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Remaining 8: simple photo cards */}
            {photoCards.map((photo, i) => (
              <div
                key={photo.id}
                className={`${styles.card} ${styles.photoCard}`}
                ref={(el) => { cardsRef.current[i + 2] = el; }}
                onClick={() => setLightboxSrc(photo.src)}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className={styles.img}
                  />
                  <div className={styles.photoOverlay}>
                    <span className={styles.zoomIcon}>⊕</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox for photo cards */}
      {lightboxSrc && (
        <div className={styles.lightbox} onClick={() => setLightboxSrc(null)}>
          <button className={styles.lightboxClose} onClick={() => setLightboxSrc(null)}>✕</button>
          <div className={styles.lightboxImage}>
            <Image src={lightboxSrc} alt="Photo" fill sizes="100vw" className={styles.lightboxImg} />
          </div>
        </div>
      )}

      {/* Room drawer */}
      <RoomSliderDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        room={selectedRoom}
        initialSlideIndex={selectedRoom?.coverIndex ?? 0}
      />
    </>
  );
}
