"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Project Support",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    color: "#e75480",
    bullets: [
      "Micro Projects",
      "Mini Projects",
      "Mega Projects",
      "PCB designing",
      "PCB Printing",
      "App Development",
      "Web Development",
    ],
  },
  {
    title: "Documentation Support",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    color: "#a259ff",
    bullets: [
      "Project Reports",
      "Black Book Reports",
      "PPTs",
      "Research Papers",
    ],
  },
  {
    title: "Student Help",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
    color: "#ff6f91",
    bullets: [
      "Written Assignment",
      "Drawing Sheet",
      "Lab Manuals, Submission",
    ],
  },
];

export default function OurServicesSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-white font-[Orbitron] text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Our Services
      </motion.h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col h-full bg-white/90 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
                draggable="false"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-center text-xl font-bold mb-2"
                  style={{ color: service.color, fontFamily: 'Orbitron' }}
                >
                  {service.title}
                </h3>
                <ul className="text-black text-base list-disc list-inside">
                  {service.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 