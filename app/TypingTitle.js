"use client";
import React, { useState, useEffect } from "react";

export default function TypingTitle() {
  const lines = [
    "NEXUS",
    "ABHIYANTRIKI",
    "Everything you need",
    "We can provide",
  ];
  const [displayed, setDisplayed] = useState(["", "", "", ""]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx < lines.length) {
      if (charIdx < lines[lineIdx].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => {
            const newArr = [...prev];
            newArr[lineIdx] += lines[lineIdx][charIdx];
            return newArr;
          });
          setCharIdx((c) => c + 1);
        }, 70);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLineIdx((l) => l + 1);
          setCharIdx(0);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIdx, lineIdx, lines]);

  return (
    <div style={{ minHeight: '18vw' }}>
      <div className="main-title" style={{ minHeight: '7vw' }}>{displayed[0]}<br />{displayed[1]}</div>
      <div className="subtext" style={{ minHeight: '5vw' }}>{displayed[2]}<br />{displayed[3]}</div>
    </div>
  );
} 