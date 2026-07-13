"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";
import { SplitText } from "@/lib/SplitText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

    // Initial slow reveal
    tl.fromTo(
      containerRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 2.5 }
    );

    // Advanced Text Reveal
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".split-word");
      tl.to(words, {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out"
      }, "-=1.5");
    }

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      "-=1.2"
    )
    .fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      "-=1"
    );
  }, []);

  return (
    <section className={styles.heroSection} ref={containerRef}>
      <div className={styles.backgroundWrapper}>
        <Image
          src="/images/hero.png"
          alt="Golden Desert Sunrise at Style Desert Camp"
          fill
          priority
          className={styles.backgroundImage}
          sizes="100vw"
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className="text-hero" ref={titleRef} style={{ lineHeight: 1.1 }}>
          <SplitText text="Experience Rajasthan" />
          <br />
          <SplitText text="Beyond Ordinary" className={styles.highlight} />
        </h1>
        
        <p className={styles.subtitle} ref={subtitleRef}>
          Luxury Swiss Tents • Camel Safari • Folk Performances<br/>
          Pure Veg Dining • Desert Adventures
        </p>
        
        <div className={styles.ctaGroup} ref={buttonsRef}>
          <MagneticButton className="btn-primary" data-cursor="view">Book Your Desert Escape</MagneticButton>
          <MagneticButton className="btn-secondary">Explore Experiences</MagneticButton>
        </div>
      </div>
    </section>
  );
}
