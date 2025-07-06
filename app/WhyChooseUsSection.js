"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4">
      <motion.h2
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-white font-[Orbitron] text-4xl md:text-5xl font-bold mb-12 text-center"
        style={{ letterSpacing: 2 }}
      >
        WHY CHOOSE US?
      </motion.h2>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white text-lg md:text-xl max-w-3xl leading-relaxed text-center"
        style={{ margin: '0 auto' }}
      >
        We provide expert guidance and start to end services from choosing project till the date of submission with best quality of product at better pricing than entire market, that too on punctual time without any time delay.
      </motion.p>
    </section>
  );
} 