import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const BrandCollaborations: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="collaborate"
      className="relative py-28 px-6 sm:px-8 bg-[#111827]/40 overflow-hidden border-y border-white/5"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-600/10 to-sky-400/10 rounded-full blur-[130px] rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-[0.3em] text-[#38BDF8] uppercase block mb-4 font-semibold"
        >
          Partnerships
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-6xl font-black font-display text-white leading-tight mb-6"
        >
          Let's Create Content That Makes an Impact
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Whether you're a startup, media company, financial brand, educational platform, or digital agency, I'm available for script writing, content strategy, anchoring, video production, and creative collaborations.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/45 transition-all duration-300 hover:scale-105 active:scale-95 group font-display"
          >
            <MessageSquare size={18} className="group-hover:rotate-6 transition-transform" />
            <span>Let's Work Together</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
