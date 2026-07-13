import React from "react";
import Link from "next/link";
import { Camera, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ 
      background: "linear-gradient(to top, var(--color-dark-charcoal), #4A3022)", 
      color: "var(--color-soft-white)", 
      padding: "var(--spacing-2xl) var(--spacing-lg) var(--spacing-lg)",
      textAlign: "center"
    }}>
      <div className="container">
        <h2 className="text-h3" style={{ marginBottom: "var(--spacing-md)", color: "var(--color-golden-dunes)" }}>Style Desert Camp<br/>with swimming pool</h2>
        <p style={{ maxWidth: "400px", margin: "0 auto var(--spacing-xl)", opacity: 0.8 }}>
          Experience the ultimate luxury under the starry skies of the Thar Desert. 
          An award-winning sanctuary.
        </p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", marginBottom: "var(--spacing-xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MapPin size={18} />
            <span style={{ fontSize: "0.875rem" }}>RDS Road, Sam Sand Dunes, Jaisalmer Rajasthan 345001</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Phone size={18} />
            <span style={{ fontSize: "0.875rem" }}>+91 8209879234</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "var(--spacing-lg)", marginBottom: "var(--spacing-xl)" }}>
          <Link href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="hover-gold">
            <MessageCircle size={20} /> <span style={{ fontSize: "0.875rem" }}>WhatsApp</span>
          </Link>
          <Link href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="hover-gold">
            <Camera size={20} /> <span style={{ fontSize: "0.875rem" }}>Instagram</span>
          </Link>
          <Link href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="hover-gold">
            <Phone size={20} /> <span style={{ fontSize: "0.875rem" }}>Contact</span>
          </Link>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "var(--spacing-lg)", fontSize: "0.75rem", opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          © {new Date().getFullYear()} Style Desert Camp. All Rights Reserved.
        </div>
      </div>
      <style>{`
        .hover-gold:hover { color: var(--color-golden-dunes); }
      `}</style>
    </footer>
  );
}
