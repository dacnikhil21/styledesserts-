"use client";

import React from "react";
import styles from "./Contact.module.css";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* Premium Hero Section for Contact */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="text-h1" style={{ color: "var(--color-soft-white)" }}>Get in Touch</h1>
          <p className="text-body" style={{ maxWidth: "600px", margin: "1.5rem auto 0", color: "rgba(255,255,255,0.8)", fontSize: "1.1rem" }}>
            Ready to experience the ultimate luxury under the starry skies of the Thar Desert? We are here to craft your perfect getaway.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.grid}`}>
          
          {/* Contact Information Card */}
          <div className={styles.infoCard}>
            <h2 className="text-h3" style={{ marginBottom: "var(--spacing-xl)", color: "var(--color-golden-dunes)" }}>Contact Information</h2>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Phone size={22} /></div>
                <div>
                  <h4 className="text-h5" style={{ color: "var(--color-soft-white)", marginBottom: "0.25rem" }}>Phone & WhatsApp</h4>
                  <p>
                    <a href="tel:+918209879234" style={{ color: "inherit", textDecoration: "none" }}>+91 8209879234</a>
                    {" • "}
                    <a href="https://wa.me/918209879234?text=Hello%20Style%20Desert%20Camp!%20I%20have%20an%20inquiry." target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-golden-dunes)", textDecoration: "underline" }}>Chat on WhatsApp</a>
                  </p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Mail size={22} /></div>
                <div>
                  <h4 className="text-h5" style={{ color: "var(--color-soft-white)", marginBottom: "0.25rem" }}>Email</h4>
                  <p><a href="mailto:bookings@styledesertcamp.com" style={{ color: "inherit", textDecoration: "none" }}>bookings@styledesertcamp.com</a></p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><MapPin size={22} /></div>
                <div>
                  <h4 className="text-h5" style={{ color: "var(--color-soft-white)", marginBottom: "0.25rem" }}>Location</h4>
                  <p>RDS Road, Sam Sand Dunes,<br />Jaisalmer Rajasthan 345001</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Clock size={22} /></div>
                <div>
                  <h4 className="text-h5" style={{ color: "var(--color-soft-white)", marginBottom: "0.25rem" }}>Check-in / Check-out</h4>
                  <p>Check-in: 2:00 PM</p>
                  <p>Check-out: 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formColumn}>
            <form className={styles.form} onSubmit={(e) => {
              e.preventDefault();
              window.open("https://wa.me/918209879234?text=Hello%20Style%20Desert%20Camp!%20I%20would%20like%20to%20send%20an%20inquiry.", "_blank");
            }}>
              <h2 className="text-h3" style={{ marginBottom: "var(--spacing-xl)", color: "var(--color-dark-charcoal)" }}>Send an Inquiry</h2>
              
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 8209879234" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Your Message or Special Requests</label>
                <textarea id="message" rows={5} placeholder="I would like to inquire about..." required></textarea>
              </div>

              <MagneticButton type="submit" className={`btn-primary ${styles.submitBtn}`}>
                Send Inquiry via WhatsApp
              </MagneticButton>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
