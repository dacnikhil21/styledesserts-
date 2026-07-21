import React from "react";

export default function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "Resort", "Campground"],
    "name": "Style Desert Camp",
    "alternateName": ["Style Desert Camp Jaisalmer", "Style Desert Camp with Swimming Pool"],
    "description": "Luxury Swiss Tents, Camel Safaris, Swimming Pool, and Folk Performances in Sam Sand Dunes, Jaisalmer, Rajasthan.",
    "url": "https://www.styledesertcamp.in",
    "logo": "https://www.styledesertcamp.in/images/logo.png",
    "image": [
      "https://www.styledesertcamp.in/images/super-deluxe-tent.jpg",
      "https://www.styledesertcamp.in/images/luxury-tent-3.jpg",
      "https://www.styledesertcamp.in/images/candle-3.jpg"
    ],
    "telephone": "+918209879234",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RDS Road, Sam Sand Dunes",
      "addressLocality": "Jaisalmer",
      "addressRegion": "Rajasthan",
      "postalCode": "345001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.818826776701886,
      "longitude": 70.52840457497268
    },
    "hasMap": "https://share.google/7QNmz34kg697oFV4A",
    "openingHours": "Mo-Su 00:00-23:59",
    "checkinTime": "16:00",
    "checkoutTime": "10:00",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.9"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Swimming Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioning",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Camel Safari & Jeep Safari",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Folk Dance & Musical Nights",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Pure Vegetarian Dining",
        "value": true
      }
    ],
    "sameAs": [
      "https://wa.me/918209879234",
      "https://share.google/7QNmz34kg697oFV4A"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
