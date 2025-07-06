"use client";
import React from "react";

const specializations = [
  "IOT",
  "Arduino",
  "Micro-Controllers",
  "ESP",
  "Web Development",
  "App Development",
  "Rasberry Pi",
  "PCB's",
];

export default function SpecializedSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24">
      <h2
        className="text-white text-center font-[Orbitron] text-4xl md:text-5xl font-bold mb-10 animate-fade-in-up"
        style={{ letterSpacing: 2 }}
      >
        WE ARE <br className="md:hidden" /> SPECIALIZED IN
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {specializations.slice(0, 3).map((item, i) => (
          <div
            key={item}
            className="border border-gray-300 bg-transparent text-white font-[Orbitron] text-xl py-8 px-4 text-center hover:scale-105 transition-transform duration-300 animate-fade-in rounded-xl"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 w-full max-w-5xl mt-6">
        {specializations.slice(3, 6).map((item, i) => (
          <div
            key={item}
            className="border border-gray-300 bg-transparent text-white font-[Orbitron] text-xl py-8 px-4 text-center hover:scale-105 transition-transform duration-300 animate-fade-in rounded-xl"
            style={{ animationDelay: `${(i + 3) * 0.1}s` }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-3xl mt-6">
        {specializations.slice(6).map((item, i) => (
          <div
            key={item}
            className="border border-gray-300 bg-transparent text-white font-[Orbitron] text-xl py-8 px-4 text-center hover:scale-105 transition-transform duration-300 animate-fade-in rounded-xl"
            style={{ animationDelay: `${(i + 6) * 0.1}s` }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
} 