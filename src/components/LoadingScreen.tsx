import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1000; // ms (fast and understated)
    const interval = 20; // update speed
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const nextProgress = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress === 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF6EE] text-[#121212]"
    >
      <div className="flex flex-col items-center max-w-sm w-full px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] text-[#8C6C53] uppercase block mb-3 font-sans">
            RESEARCH • SCRIPT • ANCHOR • EDIT
          </span>
          <h1 className="text-3xl font-bold tracking-[0.1em] font-serif text-[#121212] uppercase">
            Nikita Tupe
          </h1>
          <p className="text-[11px] tracking-[0.15em] text-[#4E4E4E] uppercase mt-2 font-sans font-light">
            Marathi Creator & Anchor
          </p>
        </motion.div>

        {/* Minimal Progress Bar */}
        <div className="w-full h-[1px] bg-[#EBE5D6] rounded-full overflow-hidden relative mb-3">
          <div
            className="h-full bg-[#8C6C53] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between w-full text-[#7A7A7A] font-mono text-[9px] tracking-wider">
          <span>LOADING PORTFOLIO</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
