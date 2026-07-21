"use client";

import React, { useState } from "react";
import styles from "./BookingWidget.module.css";
import { Calendar } from "lucide-react";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <div className={styles.bookingWrapper}>
      <div className={styles.bookingContainer}>
        <div className={styles.inputsRow}>
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              className={styles.dateInput} 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              placeholder="Jul 17 2026"
            />
            <Calendar className={styles.calendarIcon} size={18} />
          </div>
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              className={styles.dateInput}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              placeholder="Jul 18 2026"
            />
            <Calendar className={styles.calendarIcon} size={18} />
          </div>
        </div>
        
        <a 
          href={`https://wa.me/918209879234?text=${encodeURIComponent(`Hello Style Desert Camp! I would like to book a stay${checkIn ? ` from ${checkIn}` : ''}${checkOut ? ` to ${checkOut}` : ''}.`)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.bookBtn}
          style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
        >
          BOOK NOW VIA WHATSAPP
        </a>
        
        <a 
          href="https://wa.me/918209879234?text=Hello%20Style%20Desert%20Camp!%20I%20would%20like%20to%20inquire%20about%20modifying%20or%20canceling%20a%20reservation."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.modifyLink}
        >
          MODIFY/CANCEL RESERVATION
        </a>
      </div>
    </div>
  );
}
