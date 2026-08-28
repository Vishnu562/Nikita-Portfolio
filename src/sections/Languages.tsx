import React from 'react';
import { motion } from 'framer-motion';

export const Languages: React.FC = () => {
  const languages = ['MARATHI', 'HINDI', 'ENGLISH'];

  return (
    <section className="py-12 bg-bg-secondary/20 border-t border-b border-border-light select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 md:gap-16">
          <span className="text-[9px] font-bold tracking-[0.25em] text-accent uppercase font-sans">
            Broadcast Languages
          </span>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12">
            {languages.map((lang, index) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2.5"
              >
                <span className="w-1.5 h-1.5 bg-accent" />
              <span className="font-serif font-bold text-sm sm:text-base tracking-[0.2em] text-text-primary">
                  {lang}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
