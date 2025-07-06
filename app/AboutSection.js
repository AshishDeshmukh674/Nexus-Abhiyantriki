"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-24 px-4 gap-12">
      {/* Animated Circles Graphic */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
        >
          <div className="absolute left-0 top-0 w-full h-full rounded-full bg-gradient-to-br from-[#7b2ff2] to-[#1e2a78] opacity-90"></div>
          <div className="absolute left-10 top-10 w-3/4 h-3/4 rounded-full bg-[#e0aaff] opacity-80"></div>
        </motion.div>
      </div>
      {/* About Text */}
      <div className="flex-1 max-w-2xl">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-white font-[Orbitron] text-4xl md:text-5xl font-bold mb-6"
        >
          About<br />Nexus Abhiyantriki
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white text-lg md:text-xl leading-relaxed"
        >
          Your trusted partner for all your engineering academic and project needs. At Nexus Abhinyatriki, we specialize in delivering comprehensive support for micro, mini, and mega engineering projects, along with expert assistance in project reports, research papers, PPTs, and more.<br /><br />
          We are dedicated to helping students and professionals bring their ideas to life through guided project development, documentation services, and academic submissions support—including drawing sheets and written work. Whether you're working on an individual project or a team assignment, our end-to-end consultancy and guidance ensure your success from concept to completion.<br /><br />
          Start your journey with us and experience engineering made simple, effective, and impactful.
        </motion.p>
      </div>
    </section>
  );
} 