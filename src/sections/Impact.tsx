import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    // Parse the value, e.g. "38.6K+", "1L+", "1M+" or non-numeric like "End-to-End"
    const match = value.match(/^([\d.]+)([A-Za-z+]+)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const suffix = match[2];
    const duration = 1200; // ms (fast and premium animation)
    const startTime = performance.now();

    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quad
      const easeProgress = progress * (2 - progress);
      
      const currentNum = targetNum * easeProgress;
      
      // Format number to match precision of input
      const hasDecimal = match[1].includes('.');
      const formattedNum = hasDecimal 
        ? currentNum.toFixed(1) 
        : Math.round(currentNum).toString();

      setDisplayValue(`${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // ensure precise final value
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, isInView]);

  return (
    <h3 ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#121212] tracking-tight mb-2">
      {displayValue}
    </h3>
  );
};

export const Impact: React.FC = () => {
  const stats = [
    { value: "38.6K+", label: "Subscribers" },
    { value: "1L+", label: "Video Views" },
    { value: "1M+", label: "Shorts Views" },
    { value: "End-to-End", label: "Content Ownership" }
  ];

  return (
    <section
      id="impact"
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-light bg-bg-primary"
    >
      <div className="bg-bg-secondary border border-border-light p-8 md:p-16 flex flex-col items-center text-center">
        <span className="text-[10px] font-bold tracking-[0.25em] text-accent uppercase block mb-4 font-sans">
          MEASURED RESULTS
        </span>
        
        {/* Large Stats Display */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-4 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <AnimatedCounter value={stat.value} />
              <p className="text-[10px] tracking-[0.15em] text-text-muted uppercase font-sans font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl border-t border-border-light pt-8"
        >
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed italic font-light font-sans">
            "Built from scratch as the first Marathi Anchor & Content Creator at BossWallah."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
