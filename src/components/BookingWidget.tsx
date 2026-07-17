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
          href="https://wa.me/918209879234?text=Hello%20Style%20Desert%20Camp!%20I%20would%20like%20to%20book%20a%20stay." 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.bookBtn}
          style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
        >
          BOOK NOW
        </a>
        
        <a href="#" className={styles.modifyLink}>MODIFY/CANCEL RESERVATION</a>
      </div>
    </div>
  );
}
