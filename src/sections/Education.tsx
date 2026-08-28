import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-light bg-bg-primary"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Section Title */}
        <div className="lg:col-span-4 text-left">
          <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-3 font-sans">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif text-text-primary mb-4">
            Education
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans font-light max-w-xs">
            A solid foundation in media, communication, and digital journalism guiding an audience-first content workflow.
          </p>
        </div>

        {/* Right column: Education List */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
          {EDUCATION.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 border border-border-light bg-bg-secondary/35 flex flex-col justify-between hover:bg-bg-secondary/70 hover:border-accent/35 transition-all duration-300 relative group min-h-[170px]"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-accent bg-accent/5 p-2 rounded-sm border border-accent/10">
                    <GraduationCap size={16} />
                  </div>
                  <span className="font-mono text-[9px] font-semibold text-accent uppercase tracking-wider">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-text-primary mb-1.5 leading-snug">
                  {item.degree}
                </h3>
                
                <p className="text-xs text-text-secondary font-sans font-medium mb-3">
                  {item.school}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[9px] tracking-wider uppercase text-text-muted font-sans font-bold border-t border-border-light pt-3">
                <span>{item.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
