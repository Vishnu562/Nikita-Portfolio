import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data/portfolioData';
import { MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-light bg-bg-primary"
    >
      {/* Editorial Header */}
      <div className="text-left mb-16">
        <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-3 font-sans">
          CAREER PATHWAY
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-text-primary mb-4">
          Experience
        </h2>
        <p className="text-sm sm:text-base text-text-secondary font-light max-w-xl leading-relaxed">
          Detailed timeline of content creator positions, corporate ownership, and social media manager history.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-border-light ml-4 md:ml-12 pl-6 md:pl-12 space-y-16">
        {EXPERIENCE.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Dot on the timeline */}
            <span className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </span>

            {/* Content Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Job Details */}
              <div className="lg:col-span-4 text-left">
                <span className="inline-block text-[10px] font-bold tracking-widest bg-accent/15 text-accent px-2 py-1 uppercase rounded mb-2 font-sans">
                  {job.period}
                </span>
                
                <h3 className="font-serif font-bold text-xl text-text-primary leading-snug">
                  {job.company}
                </h3>
                
                <p className="text-sm font-semibold text-accent mt-1 font-sans">
                  {job.role}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-text-muted mt-3 font-sans">
                  <MapPin size={12} />
                  <span>{job.location}</span>
                </div>
              </div>

              {/* Right Column: Description & Responsibilities */}
              <div className="lg:col-span-8 text-left">
                {job.description && (
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 font-light font-sans bg-accent/10 p-4 border-l-2 border-accent">
                    {job.description}
                  </p>
                )}

                <h4 className="text-[10px] font-bold tracking-wider text-text-primary uppercase mb-3 font-sans">
                  Key Responsibilities
                </h4>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 text-xs text-text-secondary leading-relaxed list-inside list-disc font-light">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="font-sans">
                      {resp}
                    </li>
                  ))}
                </ul>

                {job.contentAreas && (
                  <div>
                    <h4 className="text-[10px] font-bold tracking-wider text-text-primary uppercase mb-2.5 font-sans">
                      Content Domains
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.contentAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-bold tracking-widest text-text-secondary bg-bg-tertiary px-2.5 py-1 uppercase"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
