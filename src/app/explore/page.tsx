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
      title: "Golden Camel Safari",
      description: "Traverse the majestic sand dunes on camelback just as the sun sets, painting the sky in hues of gold and crimson.",
      image: "/images/photo-7.jpg", 
    },
    {
      title: "Cultural Folk Evenings",
      description: "Immerse yourself in the rich Rajasthani heritage with traditional Kalbelia dance and soulful folk music under the stars.",
      image: "/images/photo-8.jpg",
    },
    {
      title: "Starry Night Dining",
      description: "Enjoy our pure vegetarian delicacies crafted by expert chefs, served in an exclusive setup surrounded by lanterns in the open desert.",
      image: "/images/photo-9.jpg",
    },
    {
      title: "Desert Jeep Safari",
      description: "Experience the thrill of dune bashing in a 4x4 jeep, an adrenaline-pumping ride across the vast expanse of the Thar Desert.",
      image: "/images/photo-10.jpg",
    },
    {
      title: "Premium Tent Stays",
      description: "Relax in our luxurious Swiss tents, blending traditional Rajasthani design with modern comfort and attached washrooms.",
      image: "/images/photo-4.jpg",
    },
    {
      title: "Campfire Evenings",
      description: "Gather around the warm campfire during chilly desert nights, sharing stories and enjoying authentic snacks.",
      image: "/images/photo-5.jpg",
    },
    {
      title: "Serene Morning Walks",
      description: "Wake up early to witness the undisturbed beauty of the dunes in the soft morning light.",
      image: "/images/photo-11.jpg",
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
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
