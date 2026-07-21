import React from "react";
import Image from "next/image";
import styles from "./Explore.module.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Explore | Style Desert Camp",
  description: "Discover our premium desert experiences, from camel safaris to cultural evenings.",
};

export default function ExplorePage() {
  const experiences = [
    {
      title: "Romantic Candle Dinner",
      description: "A private, magical evening in the dunes. Enjoy a custom candlelit setup with your loved one, complete with traditional decor, camels resting nearby, and the beautiful desert sunset.",
      image: "/images/candle-3.jpg",
    },
    {
      title: "Premium Tent Stays",
      description: "Relax in our luxurious Swiss tents, blending traditional Rajasthani design with modern comfort. Enjoy plush beds, premium amenities, and attached luxury washrooms.",
      image: "/images/luxury-tent-3.jpg",
    },
    {
      title: "Starry Night & Milky Way",
      description: "Experience the breathtaking beauty of the Thar desert at night. With zero light pollution, stargazing under the magnificent Milky Way becomes an unforgettable memory.",
      image: "/images/night-1.jpg",
    },
    {
      title: "Campfire Evenings",
      description: "Gather around a private warm campfire during chilly desert nights, sharing stories, enjoying authentic snacks, and watching the stars.",
      image: "/images/candle-4.jpg",
    },
    {
      title: "Luxury Washrooms",
      description: "We believe luxury shouldn't be compromised in the desert. Our tents feature premium attached bathrooms with modern fixtures, hot water, and elegant tile work.",
      image: "/images/luxury-tent-1.jpg",
    },
    {
      title: "Green Tent Camping",
      description: "For the adventurous souls, experience our specialized green tents set directly on the dunes, offering an intimate connection with the desert night sky.",
      image: "/images/night-2.jpg",
    },
    {
      title: "Golden Camel Safari",
      description: "Traverse the majestic sand dunes on camelback just as the sun sets, painting the sky in hues of gold and crimson.",
      image: "/images/photo-7.jpg",
    },
    {
      title: "Oasis Pool Relaxation",
      description: "Cool off during the desert afternoons in our stunning swimming pool.",
      image: "/images/photo-2.jpg",
    }
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="text-h1" style={{ color: "var(--color-dark-charcoal)" }}>Explore the Experience</h1>
          <p className="text-body" style={{ maxWidth: "600px", margin: "1rem auto 0", color: "#555" }}>
            A journey into the heart of the Thar Desert. Curated for the discerning traveler seeking authenticity and luxury.
          </p>
        </div>
      </header>

      <section className={styles.experiencesList}>
        <div className="container">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`${styles.experienceCard} ${idx % 2 !== 0 ? styles.reversed : ""}`}>
              <div className={styles.imageWrapper} data-cursor="view">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className={`${styles.image} enhance-image`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.content}>
                <h2 className="text-h2">{exp.title}</h2>
                <p className="text-body">{exp.description}</p>
                <a
                  href={`https://wa.me/918209879234?text=${encodeURIComponent(`Hello Style Desert Camp! I would like to book the ${exp.title} experience.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ marginTop: "1.25rem", textDecoration: "none", display: "inline-block", fontSize: "0.8rem", padding: "0.75rem 1.5rem" }}
                >
                  Book Experience via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
