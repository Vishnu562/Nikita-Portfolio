import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/portfolioData';
import { Mic, Video, FileText, Sparkles, Volume2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "01": <Mic size={20} />,
  "02": <Video size={20} />,
  "03": <FileText size={20} />,
  "04": <Sparkles size={20} />,
  "05": <Volume2 size={20} />
};

export const Services: React.FC = () => {
  return (
  <section
    id="services"
    className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-light bg-bg-primary"
    >
      {/* Editorial Header */}
      <div className="text-left mb-16">
        <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-3 font-sans">
          CAPABILITIES
        </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-text-primary mb-4">
          What I Bring to the Screen
        </h2>
      <p className="text-sm sm:text-base text-text-secondary font-light max-w-xl leading-relaxed">
          From script preparation to final voice delivery, I manage content pipelines that turn view metrics into loyal audiences.
        </p>
      </div>

      {/* Grid of Capability Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          className="p-8 border border-border-light bg-bg-secondary/40 flex flex-col justify-between hover:bg-bg-secondary hover:border-accent/30 transition-all duration-300 relative group min-h-[220px]"
          >
            {/* Minimal line decoration */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500 ease-out" />
            
            <div className="flex justify-between items-start">
              <span className="font-mono text-2xl font-bold text-accent/35 group-hover:text-accent transition-colors duration-300">
                {service.number}
              </span>
              <span className="text-accent/50 group-hover:text-accent transition-colors duration-300">
                {iconMap[service.number]}
              </span>
            </div>

            <div className="mt-8">
            <h3 className="font-serif font-bold text-lg text-text-primary mb-2 uppercase tracking-wide">
                {service.title}
              </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans font-light">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
