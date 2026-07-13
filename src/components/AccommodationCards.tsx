"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AccommodationCards.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Users, BedDouble, Bath, Wind, Coffee } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    id: "royal-suite",
    name: "Royal Swiss Tent Suite",
    price: "₹12,500",
    capacity: "2 Guests",
    bed: "King Size Premium",
    bathroom: "Attached Luxury Bath",
    ac: "Air Conditioned",
    meals: "Breakfast & Dinner Included",
    image: "/images/tent.png",
  },
  {
    id: "premium-tent",
    name: "Premium Desert Tent",
    price: "₹9,500",
    capacity: "2 Guests (1 Extra)",
    bed: "Queen Size",
    bathroom: "Attached Modern Bath",
    ac: "Air Conditioned",
    meals: "Breakfast Included",
    image: "/images/tent.png",
  }
];

export default function AccommodationCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
            Sleep beneath millions of stars in absolute comfort. 
            Our tents combine traditional Rajasthani aesthetics with modern premium amenities.
          </p>
        </div>

        <div className={styles.grid}>
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              className={styles.card}
              ref={el => { cardsRef.current[index] = el; }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={styles.priceTag}>
                  Starts at <span>{room.price}</span> / night
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
                  <Link href={`/room/${room.id}`} className="btn-secondary" style={{ color: 'var(--color-dark-charcoal)', borderColor: 'var(--color-dark-charcoal)' }}>
                    View Details
                  </Link>
                  <button className="btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
