"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    feedback:
      '"I\'m beyond grateful for the support provided by this organization. Their dedication and generosity have made a significant difference in my life. Thank you for everything that you do."',
    name: "Parker G.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    feedback:
      '"I\'m beyond grateful for the support provided by this organization. Their dedication and generosity have made a significant difference in my life. Thank you for everything that you do."',
    name: "Parker G.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    feedback:
      '"I\'m beyond grateful for the support provided by this organization. Their dedication and generosity have made a significant difference in my life. Thank you for everything that you do."',
    name: "Parker G.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-white font-[Orbitron] text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        TESTIMONIALS
      </motion.h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 p-6">
              <div className="italic text-lg text-black mb-4 font-serif">{t.feedback}</div>
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-40 object-cover rounded"
                draggable="false"
              />
              <div className="mt-4 text-black font-semibold font-serif">{t.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 