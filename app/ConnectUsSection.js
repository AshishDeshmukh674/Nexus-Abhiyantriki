"use client";
import React from "react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "YouTube",
    icon: (
      <svg width="28" height="28" fill="#e75480" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    ),
    url: "#",
  },
  {
    name: "Instagram",
    icon: (
      <svg width="28" height="28" fill="#e75480" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.13 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.374C2.014 5.668 2 6.077 2 12c0 5.923.014 6.332.072 7.613.059 1.282.292 2.394 1.272 3.374.98.98 2.092 1.213 3.374 1.272C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.282-.059 2.394-.292 3.374-1.272.98-.98 1.213-2.092 1.272-3.374.058-1.281.072-1.69.072-7.613 0-5.923-.014-6.332-.072-7.613-.059-1.282-.292-2.394-1.272-3.374-.98-.98-2.092-1.213-3.374-1.272C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
    ),
    url: "#",
  },
];

const chartPoints = [
  { x: 0, y: 120 },
  { x: 40, y: 60 },
  { x: 80, y: 100 },
  { x: 120, y: 80 },
  { x: 160, y: 90 },
  { x: 200, y: 70 },
  { x: 240, y: 100 },
  { x: 280, y: 60 },
  { x: 320, y: 110 },
];

export default function ConnectUsSection() {
  return (
    <section className="connect-section mt-12">
      {/* Left: Contact Info */}
      <div className="connect-info">
        <h2>Connect Us</h2>
        <div>
          <div className="connect-label">PHONE</div>
          <div className="connect-value">+91 95276 41025</div>
          <div className="connect-value">+91 86240 06857</div>
        </div>
        <div>
          <div className="connect-label">EMAIL</div>
          <a href="mailto:nexusabhinyatriki@gmail.com" className="connect-email">nexusabhinyatriki@gmail.com</a>
        </div>
        <div>
          <div className="connect-label">SOCIAL</div>
          <div className="connect-socials">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="connect-tnc">
          T&C* <span>CLICK HERE</span>
        </div>
      </div>
      {/* Right: Animated Chart */}
      <div className="connect-chart">
        <motion.svg
          width="360"
          height="220"
          viewBox="0 0 360 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Gradient background */}
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a259ff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#e75480" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Area under the line */}
          <motion.polygon
            points={chartPoints.map((p) => `${p.x},${p.y}`).join(" ") + " 320,220 0,220"}
            fill="url(#chartGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
          {/* Line */}
          <motion.polyline
            points={chartPoints.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="#e75480"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          />
          {/* Dots */}
          {chartPoints.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="8"
              fill="#a259ff"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
            />
          ))}
        </motion.svg>
      </div>
    </section>
  );
} 