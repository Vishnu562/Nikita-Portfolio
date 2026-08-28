import React from 'react';
import { motion } from 'framer-motion';

export const AboutMe: React.FC = () => {
  const qualities = [
    { title: "Research & Topic Selection", desc: "Verifying facts, parsing government circulars, and tracking financial trends to extract what matters." },
    { title: "Scriptwriting & Hooks", desc: "Crafting narratives with high-retention structural hooks, translating complex jargon into Marathi." },
    { title: "Anchoring & Presentation", desc: "Clean, engaging, and authoritative on-camera presence that establishes immediate trust with the viewer." },
    { title: "Post-Production QC", desc: "Collaborating with editors, managing final quality control, and optimizing titles, descriptions, and packaging." }
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-light"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Large Copy */}
        <div className="lg:col-span-7 text-left">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-3 font-sans"
          >
            THE WORKFLOW OWNER
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-text-primary mb-8 leading-tight"
          >
            More than just being on camera.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-text-secondary leading-relaxed font-light mb-8 space-y-6"
          >
            <p>
              I join content pipelines not just to deliver lines, but to engineer the complete presentation. Being a native Marathi speaker based in Bengaluru, I specialize in building content structures from scratch. I research the policy guidelines, structure the script for maximum audience retention, and drive the production value through systematic post-production checks.
            </p>
            <p>
              From explaining complex farm loan waivers and tax brackets to mapping out car ownership finances or post office small saving programs, my content focuses on consumer clarity. I believe that digital-first audiences deserve premium production, authoritative journalism, and authentic local delivery.
            </p>
          </motion.div>

          {/* Grid of Qualities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {qualities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-5 border border-border-light bg-bg-secondary/40 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif font-bold text-base text-text-primary mb-2">{item.title}</h3>

                  <p className="text-xs text-text-secondary leading-relaxed font-sans font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
