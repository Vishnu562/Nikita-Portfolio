import React from 'react';
import { motion } from 'framer-motion';
import { BRANDS } from '../data/portfolioData';

export const Brands: React.FC = () => {
  return (
    <section
      id="brands"
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-light bg-bg-primary"
    >
      {/* Editorial Header */}
      <div className="text-left mb-12">
        <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-3 font-sans">
          PARTNERSHIPS
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif text-text-primary mb-2">
          Brands I've Worked With
        </h2>
      </div>

      {/* Monochrome Text Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 border border-[#121212]/10 divide-x divide-y divide-[#121212]/10 bg-[#F4EFE3]/20">
        {BRANDS.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex items-center justify-center py-8 px-4 text-center group hover:bg-[#FAF6EE] transition-colors duration-300 min-h-[90px]"
          >
            <span className="font-serif font-extrabold text-base tracking-[0.15em] text-text-muted uppercase group-hover:text-text-primary transition-colors duration-300">
              {brand}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
