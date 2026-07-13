"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Morning", "Night", "Food"];

const images = [
  { id: 1, src: "/images/photo-11.jpg", category: "Morning", alt: "Desert Sunrise" },
  { id: 2, src: "/images/photo-2.jpg", category: "Night", alt: "Starry Night" },
  { id: 3, src: "/images/photo-9.jpg", category: "Food", alt: "Local Cuisine" },
  { id: 4, src: "/images/photo-8.jpg", category: "Morning", alt: "Camel Safari" },
  { id: 5, src: "/images/photo-1.jpg", category: "Night", alt: "Campfire" },
  { id: 6, src: "/images/photo-3.jpg", category: "Food", alt: "Dining" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  useEffect(() => {
    // Animate grid items when category changes
    if (gridRef.current && gridRef.current.children.length > 0) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    // Initial scroll animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    // Deep Parallax for images
    if (gridRef.current) {
      const items = gridRef.current.children;
      Array.from(items).forEach(item => {
        const img = item.querySelector("img");
        if (img) {
          gsap.to(img, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        }
      });
    }

  }, []);

  return (
    <section className={`section-padding ${styles.gallerySection}`} ref={sectionRef}>
      <div className="container">
        <div className="text-center">
          <h2 className="text-h2">A Visual Journey</h2>
          <p className="text-body" style={{ margin: "0 auto", marginBottom: "var(--spacing-xl)" }}>
            Explore the beauty and tranquility of Style Desert Camp through our carefully curated gallery.
          </p>
        </div>

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

        <div className={styles.grid} ref={gridRef}>
          {filteredImages.map((img) => (
            <div key={img.id} className={styles.imageWrapper} data-cursor="view">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`${styles.image} enhance-image`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ transform: "scale(1.25)" }}
              />
              <div className={styles.overlay}>
                <span>{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
