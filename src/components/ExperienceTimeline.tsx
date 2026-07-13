"use client";

import React, { useEffect, useRef } from "react";
import styles from "./ExperienceTimeline.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  { time: "06:00 AM", title: "Wake up with sunrise", desc: "Experience the golden hues of the desert dawn." },
  { time: "08:00 AM", title: "Traditional breakfast", desc: "Start your day with authentic Rajasthani flavors." },
  { time: "10:00 AM", title: "Camel Safari", desc: "Venture into the endless dunes." },
  { time: "01:00 PM", title: "Relax in Luxury Tent", desc: "Unwind in your private, air-conditioned sanctuary." },
  { time: "05:00 PM", title: "Sunset Point", desc: "Witness the breathtaking desert sunset." },
  { time: "07:30 PM", title: "Folk Dance", desc: "Enjoy vibrant cultural performances." },
  { time: "08:30 PM", title: "Dinner Buffet", desc: "Indulge in our pure vegetarian feast." },
  { time: "10:00 PM", title: "Bonfire", desc: "Gather around the warmth under the open sky." },
  { time: "11:00 PM", title: "Star Gazing", desc: "Marvel at millions of stars before a peaceful sleep." },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const direction = index % 2 === 0 ? -50 : 50;
        
        gsap.fromTo(
          item,
          { opacity: 0, x: direction },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={`section-padding ${styles.timelineSection}`} ref={containerRef}>
      <div className="container">
        <div className="text-center">
          <h2 className="text-h2" style={{ color: "var(--color-sand)" }}>A Day in the Desert</h2>
          <p className="text-body" style={{ margin: "0 auto", color: "var(--color-ivory)", opacity: 0.8 }}>
            Immerse yourself in a carefully curated journey from sunrise to starlight.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line}></div>
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
              ref={el => { itemsRef.current[index] = el; }}
            >
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <span className={styles.time}>{event.time}</span>
                <h3 className={styles.title}>{event.title}</h3>
                <p className={styles.desc}>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
