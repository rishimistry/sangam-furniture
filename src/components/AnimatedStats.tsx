'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  number: string;
  label: string;
}

interface AnimatedStatsProps {
  stats: Stat[];
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

function parseStatNumber(numStr: string): { value: number; suffix: string } {
  // Extract number and suffix (like +, K, etc.)
  const match = numStr.match(/^([\d,]+)(.*)$/);
  if (match) {
    const value = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2] || '';
    return { value, suffix };
  }
  return { value: 0, suffix: numStr };
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <div className="relative py-12 bg-[#8B7355]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => {
            const { value, suffix } = parseStatNumber(stat.number);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedNumber value={value} suffix={suffix} />
                </p>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
