import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Camera, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ 
      background: "linear-gradient(to top, var(--color-dark-charcoal), #4A3022)", 
      color: "var(--color-soft-white)", 
      padding: "var(--spacing-2xl) var(--spacing-lg) var(--spacing-lg)",
      textAlign: "center"
    }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image
          src="/images/logo.png"
          alt="Style Desert Camp Logo"
          width={70}
          height={70}
          style={{ objectFit: "contain", borderRadius: "50%", marginBottom: "1rem", border: "1px solid rgba(201, 151, 91, 0.4)" }}
        />
        <h2 className="text-h3" style={{ marginBottom: "var(--spacing-md)", color: "var(--color-golden-dunes)" }}>Style Desert Camp<br/>with swimming pool</h2>
        <p style={{ maxWidth: "400px", margin: "0 auto var(--spacing-xl)", opacity: 0.8 }}>
          Experience the ultimate luxury under the starry skies of the Thar Desert. 
          An award-winning sanctuary.
        </p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginBottom: "var(--spacing-xl)" }}>
          <div style={{ width: "100%", maxWidth: "400px", height: "200px", borderRadius: "8px", overflow: "hidden", border: "2px solid rgba(255,255,255,0.1)" }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.0435850989047!2d70.52840457497268!3d26.818826776701886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3947ca7fba15f9b9%3A0xe781ab7911e8dd2!2sStyle%20Desert%20Camp%20Jaisalmer!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Style Desert Camp Map Location"
            ></iframe>
          </div>
          <a href="https://share.google/7QNmz34kg697oFV4A" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "inherit" }} className="hover-gold">
            <MapPin size={18} />
            <span style={{ fontSize: "0.875rem" }}>RDS Road, Sam Sand Dunes, Jaisalmer Rajasthan 345001</span>
          </a>
          <a href="tel:+918209879234" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "inherit" }} className="hover-gold">
            <Phone size={18} />
            <span style={{ fontSize: "0.875rem" }}>+91 8209879234</span>
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "var(--spacing-lg)", marginBottom: "var(--spacing-xl)" }}>
          <a href="https://wa.me/918209879234?text=Hello%20Style%20Desert%20Camp!%20I%20would%20like%20to%20inquire%20about%20booking." target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "inherit" }} className="hover-gold">
            <MessageCircle size={20} /> <span style={{ fontSize: "0.875rem" }}>WhatsApp</span>
          </a>
          <a href="https://wa.me/918209879234?text=Hello%20Style%20Desert%20Camp!" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "inherit" }} className="hover-gold">
            <Camera size={20} /> <span style={{ fontSize: "0.875rem" }}>Instagram</span>
          </a>
          <a href="tel:+918209879234" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "inherit" }} className="hover-gold">
            <Phone size={20} /> <span style={{ fontSize: "0.875rem" }}>Call Us</span>
          </a>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "var(--spacing-lg)", width: "100%", fontSize: "0.75rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.1em", display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }}>
          <div>© {new Date().getFullYear()} Style Desert Camp. All Rights Reserved.</div>
          <div style={{ fontSize: "0.75rem", opacity: 0.85, textTransform: "none", letterSpacing: "0.05em" }}>
            Developed by <a href="https://codtechitsolutions.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-golden-dunes)", textDecoration: "underline", fontWeight: 500 }}>Codtech IT Solutions</a>
          </div>
        </div>
      </div>
      <style>{`
        .hover-gold:hover { color: var(--color-golden-dunes); }
      `}</style>
    </footer>
  );
}
