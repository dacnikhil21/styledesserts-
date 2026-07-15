"use client";

import React, { useEffect, useRef } from "react";
import styles from "./ExperienceTimeline.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: "🌅", label: "Sunrise Safari" },
  { icon: "🐪", label: "Camel Ride" },
  { icon: "🍽️", label: "Rajasthani Feast" },
  { icon: "🔥", label: "Desert Bonfire" },
  { icon: "🌌", label: "Stargazing" },
  { icon: "🕯️", label: "Candle Dinner" },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.timelineSection} ref={containerRef}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: "var(--spacing-xl)" }}>
          <h2 className="text-h2" style={{ color: "var(--color-sand)" }}>A Day in the Desert</h2>
          <p className="text-body" style={{ margin: "0 auto", color: "var(--color-ivory)", opacity: 0.75 }}>
            Immerse yourself in a carefully curated journey from sunrise to starlight.
          </p>
        </div>

        <div className={styles.highlights}>
          {highlights.map((h, i) => (
            <div
              key={i}
              className={styles.highlight}
              ref={(el) => { itemsRef.current[i] = el; }}
            >
              <div className={styles.iconCircle}>{h.icon}</div>
              <span className={styles.hlLabel}>{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
