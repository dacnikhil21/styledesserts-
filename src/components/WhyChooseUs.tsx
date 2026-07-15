"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "Luxury Swiss Tents",
    image: "/images/tent.png",
    description: "Spacious, elegantly designed tents combining traditional aesthetics with modern comforts.",
  },
  {
    title: "Camel & Jeep Safari",
    image: "/images/camel.png",
    description: "Explore the vast Thar desert on an authentic safari over golden dunes.",
  },
  {
    title: "Pure Vegetarian Dining",
    image: "/images/food.png",
    description: "Savor the rich flavors of traditional Rajasthani cuisine in an exquisite setting.",
  },
  {
    title: "Traditional Cultural Nights",
    image: "/images/hero.png",
    description: "Experience the vibrant heritage of Rajasthan through captivating folk performances.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Animate cards staggering in
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      }
    );

    // Deep Parallax for images
    cardsRef.current.forEach(card => {
      if (!card) return;
      const img = card.querySelector("img");
      if (img) {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    });

  }, []);

  return (
    <section className={`section-padding ${styles.whyChooseUs}`} ref={sectionRef}>
      <div className="container">
        <div className="text-center">
          <h2 className="text-h2">Why Choose Style Desert Camp</h2>
          <p className="text-body" style={{ margin: "0 auto 2rem" }}>
            A sanctuary of peace in the heart of the Thar Desert.
            Every detail is crafted to provide a truly royal experience.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={styles.card}
              ref={el => { cardsRef.current[index] = el; }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ transform: "scale(1.2)" }} // Scale up slightly to prevent edges showing during parallax
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className="text-h3">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
