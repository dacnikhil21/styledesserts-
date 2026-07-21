"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./SplashScreen.module.css";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Lock body scroll while splash screen is active
  useEffect(() => {
    if (isVisible && !isExiting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible, isExiting]);

  // Autoplay video on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.warn("Autoplay was prevented:", err);
      });
    }

    // Safety fallback: dismiss after max 8 seconds if video stalls
    const safetyTimer = setTimeout(() => {
      handleDismiss();
    }, 8000);

    return () => clearTimeout(safetyTimer);
  }, []);

  const handleDismiss = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 800);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.splashContainer} ${isExiting ? styles.exiting : ""}`}
      onClick={handleDismiss}
      aria-label="Welcome Splash Screen"
      role="dialog"
      aria-modal="true"
    >
      {/* Fullscreen Video Only */}
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.bgVideo}
          src="/splash-video.mp4"
          playsInline
          autoPlay
          muted
          preload="auto"
          onEnded={handleDismiss}
        />
      </div>
    </div>
  );
}
