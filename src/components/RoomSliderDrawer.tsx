"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Users, BedDouble, Bath, Wind, Coffee, MessageCircle } from "lucide-react";
import styles from "./RoomSliderDrawer.module.css";

interface Room {
  id: string;
  name: string;
  capacity: string;
  bed: string;
  bathroom: string;
  ac: string;
  meals: string;
  images: string[];
  description: string;
}

interface RoomSliderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  room: Room | null;
  initialSlideIndex?: number;
}

export default function RoomSliderDrawer({
  isOpen,
  onClose,
  room,
  initialSlideIndex = 0,
}: RoomSliderDrawerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialSlideIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Sync initial slide index when room or openness changes
  useEffect(() => {
    if (isOpen && room) {
      setCurrentIndex(initialSlideIndex);
    }
    // We explicitly only want to run this when the drawer opens or room changes,
    // NOT when currentIndex changes, to allow sliding!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, room?.id]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent body scroll
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!room) return null;

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleThumbnailClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleWhatsApp = () => {
    const text = `Hello Style Desert Camp! I would like to book the ${room.name} staying with you.`;
    window.open(`https://wa.me/918209879234?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
      onClick={onClose}
    >
      <div
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{room.name}</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close details">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className={styles.content}>
          {/* Main Image Slider */}
          <div 
            className={styles.sliderContainer} 
            onClick={(e) => nextSlide(e)} 
            style={{ cursor: "pointer" }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={styles.slidesWrapper}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {room.images.map((img, i) => (
                <div key={i} className={styles.slide}>
                  <Image
                    src={img}
                    alt={`${room.name} view ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className={styles.slideImg}
                    priority={i === initialSlideIndex}
                  />
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            {room.images.length > 1 && (
              <>
                <button
                  className={`${styles.arrowBtn} ${styles.leftArrow}`}
                  onClick={prevSlide}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className={`${styles.arrowBtn} ${styles.rightArrow}`}
                  onClick={nextSlide}
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails list */}
          {room.images.length > 1 && (
            <div className={styles.thumbnails}>
              {room.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumbBtn} ${currentIndex === i ? styles.thumbActive : ""}`}
                  onClick={(e) => handleThumbnailClick(i, e)}
                >
                  <Image
                    src={img}
                    alt={`${room.name} thumbnail ${i + 1}`}
                    fill
                    sizes="80px"
                    className={styles.thumbImg}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Details Section */}
          <div className={styles.infoSection}>
            <p className={styles.description}>{room.description}</p>

            <div className={styles.divider}></div>

            {/* Features/Amenities */}
            <h3 className={styles.subTitle}>Room Amenities</h3>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <Users size={18} />
                <span>{room.capacity}</span>
              </div>
              <div className={styles.featureItem}>
                <BedDouble size={18} />
                <span>{room.bed}</span>
              </div>
              <div className={styles.featureItem}>
                <Bath size={18} />
                <span>{room.bathroom}</span>
              </div>
              <div className={styles.featureItem}>
                <Wind size={18} />
                <span>{room.ac}</span>
              </div>
              <div className={styles.featureItem}>
                <Coffee size={18} />
                <span>{room.meals}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={styles.footer}>
          <button className={styles.whatsappBookBtn} onClick={handleWhatsApp}>
            <MessageCircle size={20} />
            <span>Book on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
