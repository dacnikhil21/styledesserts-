import Link from "next/link";
import React from "react";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--color-soft-white)", color: "var(--color-dark-charcoal)" }}>
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ fontSize: "5rem", fontWeight: 700, color: "var(--color-golden-dunes)", lineHeight: 1, marginBottom: "1rem" }}>
          404
        </div>
        <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", marginBottom: "1rem" }}>
          Page Not Found
        </h1>
        <p style={{ maxWidth: "500px", fontSize: "1.1rem", color: "#666", marginBottom: "2rem", lineHeight: 1.6 }}>
          Oops! The oasis you are searching for seems to have shifted with the desert dunes. Let us help you find your way back.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" className="btn-primary" style={{ padding: "0.85rem 2rem", textDecoration: "none" }}>
            Back to Home
          </Link>
          <Link href="/rooms" className="btn-secondary" style={{ padding: "0.85rem 2rem", textDecoration: "none", color: "var(--color-dark-charcoal)", borderColor: "var(--color-dark-charcoal)" }}>
            Explore Rooms
          </Link>
          <Link href="/tariff" className="btn-secondary" style={{ padding: "0.85rem 2rem", textDecoration: "none", color: "var(--color-dark-charcoal)", borderColor: "var(--color-dark-charcoal)" }}>
            View Tariff
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
