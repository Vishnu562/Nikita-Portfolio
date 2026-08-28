import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-bg-secondary/30 rounded-full blur-[100px]" />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6 border border-accent/20 px-3 py-1 bg-accent/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase font-sans">
              Available for Brand Collabs & UGC
            </span>
          </motion.div>

          {/* Large Editorial Title */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight font-serif text-text-primary uppercase"
            >
              {PERSONAL_INFO.name}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-6"
          >
            <p className="text-lg sm:text-xl font-medium tracking-wide text-accent uppercase font-sans">
              Marathi Content Creator & Anchor
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-base leading-relaxed text-text-secondary max-w-xl mb-10 font-light"
          >
            "{PERSONAL_INFO.tagline}"
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={() => handleScrollTo('work')}
              className="flex items-center justify-center gap-3 px-7 py-4 bg-text-primary text-bg-primary font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-bg-primary transition-all duration-300 group shadow-sm active:scale-[0.98] border border-transparent"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center justify-center gap-3 px-7 py-4 border border-text-primary/20 hover:border-accent text-text-primary hover:text-accent bg-transparent font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-[0.98]"
            >
              <Mail size={14} />
              <span>BRAND COLLABS</span>
            </button>
          </motion.div>

          {/* Credibility Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="w-full border-t border-border-light pt-6 flex flex-wrap items-center justify-start gap-x-8 gap-y-4"
          >
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold font-serif text-text-primary">{PERSONAL_INFO.stats.subscribers}</span>
              <span className="text-[10px] tracking-[0.15em] text-text-muted uppercase font-sans font-bold">Subscribers</span>
            </div>
            <div className="h-8 w-[1px] bg-border-light hidden sm:block" />
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold font-serif text-text-primary">{PERSONAL_INFO.stats.videoViews}</span>
              <span className="text-[10px] tracking-[0.15em] text-text-muted uppercase font-sans font-bold">Video Views</span>
            </div>
            <div className="h-8 w-[1px] bg-border-light hidden sm:block" />
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold font-serif text-text-primary">{PERSONAL_INFO.stats.shortsViews}</span>
              <span className="text-[10px] tracking-[0.15em] text-text-muted uppercase font-sans font-bold">Shorts Views</span>
            </div>
            <div className="h-8 w-[1px] bg-border-light hidden sm:block" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold font-sans text-accent tracking-wider uppercase bg-accent/10 px-2 py-1 rounded">
                {PERSONAL_INFO.stats.languages.join(' · ')}
              </span>
              <span className="text-[10px] tracking-[0.15em] text-text-muted uppercase font-sans font-bold mt-1">Delivery Languages</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side Portrait Placeholder */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-[340px] aspect-[3/4] group"
          >
            <div className="relative w-full h-full border border-border-light bg-bg-secondary overflow-hidden shadow-sm">
              <img
                src="/Nikita.jpeg"
                alt="Nikita Tupe presenting from her workspace"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
