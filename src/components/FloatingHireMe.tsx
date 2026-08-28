import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const FloatingHireMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3.5 bg-[#121212] text-[#FAF6EE] font-bold text-xs uppercase tracking-widest hover:bg-[#8C6C53] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-lg border border-[#FAF6EE]/15 font-sans"
          >
            <MessageSquare size={13} />
            <span>Collab</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FAF6EE] group-hover:scale-125 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
