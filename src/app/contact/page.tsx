import React from "react";
import styles from "./Contact.module.css";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export const metadata = {
  title: "Contact Us | Style Desert Camp",
  description: "Get in touch to book your premium desert experience in Jaisalmer.",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="text-h1" style={{ color: "var(--color-dark-charcoal)" }}>Contact Us</h1>
          <p className="text-body" style={{ maxWidth: "600px", margin: "1rem auto 0", color: "#555" }}>
            We are here to help you plan your perfect desert escape. Reach out to us for bookings, special requests, or inquiries.
          </p>
        </div>
      </header>

      <section className={styles.contactSection}>
        <div className={`container ${styles.grid}`}>
          
          {/* Contact Information */}
          <div className={styles.infoColumn}>
            <h2 className="text-h3" style={{ marginBottom: "var(--spacing-xl)" }}>Get in Touch</h2>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Phone size={24} /></div>
                <div>
                  <h4 className="text-h4">Phone & WhatsApp</h4>
                  <p>+91 8209879234</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Mail size={24} /></div>
                <div>
                  <h4 className="text-h4">Email</h4>
                  <p>bookings@styledesertcamp.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                <div>
                  <h4 className="text-h4">Location</h4>
                  <p>RDS Road, Sam Sand Dunes,<br />Jaisalmer Rajasthan 345001</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Clock size={24} /></div>
                <div>
                  <h4 className="text-h4">Check-in / Check-out</h4>
                  <p>Check-in: 2:00 PM</p>
                  <p>Check-out: 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formColumn}>
            <form className={styles.form}>
              <h2 className="text-h3" style={{ marginBottom: "var(--spacing-xl)" }}>Send an Inquiry</h2>
              
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 00000 00000" />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Your Message or Special Requests</label>
                <textarea id="message" rows={5} placeholder="I would like to inquire about..." required></textarea>
              </div>

              <MagneticButton type="button" className={`btn-primary ${styles.submitBtn}`}>
                Send Message
              </MagneticButton>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
