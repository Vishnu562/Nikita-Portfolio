import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Users,
  Compass,
  Layers,
  FileText,
  Video,
  Send,
  BarChart2
} from 'lucide-react';

interface ProcessStep {
  name: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  description: string;
  details: string;
}

export const ContentProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      name: 'Research',
      icon: Search,
      description: 'Fact-checking and gathering raw source documents.',
      details: 'Deep diving into government bulletins, regulatory announcements, schemes, and direct banking policies to gather absolute facts before scripting.'
    },
    {
      name: 'Audience Analysis',
      icon: Users,
      description: 'Understanding viewer requirements and queries.',
      details: 'Reading comments, tracking community FAQs, and mapping target demographic needs to ensure the script directly answers viewer concerns.'
    },
    {
      name: 'Topic Selection',
      icon: Compass,
      description: 'Pinpointing high-intent keywords and themes.',
      details: 'Filtering concepts based on search volume, seasonal policy updates (e.g. Union Budget, FY endings), and trend potential.'
    },
    {
      name: 'Content Strategy',
      icon: Layers,
      description: 'Formulating structure, visual assets, and pacing.',
      details: 'Structuring content blocks (Problem → Hook → Breakdown → Solution → CTA) and sketching out graphical references to aid editors.'
    },
    {
      name: 'Script Writing',
      icon: FileText,
      description: 'Drafting text with high-retention hook structures.',
      details: 'Writing scripts word-for-word, creating conversational hooks in the first 30 seconds, and ensuring high-density explanation without filler.'
    },
    {
      name: 'Production',
      icon: Video,
      description: 'On-camera hosting, recording, and tone check.',
      details: 'Anchoring the segment with high energy, clear diction, and clean camera presence, and maintaining an authoritative yet accessible tone.'
    },
    {
      name: 'Publishing',
      icon: Send,
      description: 'SEO optimization and cross-platform uploads.',
      details: 'Designing descriptions, title variations, keyword tags, and coordinating with designer to pair the video with a high-CTR thumbnail.'
    },
    {
      name: 'Performance Analysis',
      icon: BarChart2,
      description: 'Reviewing metrics and audience retention curves.',
      details: 'Evaluating CTR, average percentage viewed (APV), drop-off points, and direct comments to iteratively improve the next production cycle.'
    }
  ];

  return (
    <section
      id="process"
      className="relative py-24 px-6 sm:px-8 bg-[#111827]/30 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#38BDF8] uppercase block mb-3 font-semibold">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Content Creation Process
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mt-4 rounded-full w-[80px]" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-5 font-light">
            My step-by-step framework to transition an idea into a viral, high-retention digital video asset. Click on any step to see details.
          </p>
        </div>

        {/* Step Stepper Layout */}
        {/* Desktop Pipeline (Horizontal Scrollable/Responsive) */}
        <div className="hidden lg:flex items-center justify-between relative mb-12 py-6 px-4 border border-white/5 bg-slate-950/20 rounded-2xl overflow-x-auto gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <React.Fragment key={idx}>
                {/* Step node */}
                <div
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center cursor-pointer select-none group min-w-[110px]"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      borderColor: isActive ? '#38BDF8' : 'rgba(255, 255, 255, 0.08)',
                      backgroundColor: isActive ? 'rgba(37, 99, 235, 0.15)' : 'rgba(17, 24, 39, 0.6)'
                    }}
                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-slate-300 group-hover:text-white transition-all shadow-md`}
                  >
                    <Icon size={20} className={isActive ? 'text-[#38BDF8]' : 'text-slate-400 group-hover:text-[#38BDF8] transition-colors'} />
                  </motion.div>
                  
                  <span className={`text-xs font-semibold tracking-wide font-display mt-3 text-center transition-colors duration-300 ${
                    isActive ? 'text-[#38BDF8]' : 'text-slate-400 group-hover:text-slate-300'
                  }`}>
                    {step.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-600 mt-1">Step 0{idx + 1}</span>
                </div>

                {/* Connector line (not for the last step) */}
                {idx < steps.length - 1 && (
                  <div className="flex-grow h-[2px] bg-slate-800 relative min-w-[20px]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: activeStep > idx ? '100%' : '0%' }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]"
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Stepper Layout (Vertical Stacked) */}
        <div className="lg:hidden flex flex-col gap-4 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`glass-card p-4 rounded-xl flex items-center justify-between cursor-pointer border ${
                  isActive ? 'border-[#38BDF8]/40' : 'border-white/5'
                }`}
              >
                <div className="flex items-center gap-4 text-left">
                  <div className={`p-2.5 rounded-lg ${isActive ? 'bg-[#2563EB]/25 text-[#38BDF8]' : 'bg-white/5 text-slate-400'}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold font-display ${isActive ? 'text-[#38BDF8]' : 'text-white'}`}>
                      {step.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{step.description}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-600 font-bold">0{idx + 1}</span>
              </div>
            );
          })}
        </div>

        {/* Expanded Description Details Box */}
        <div className="relative glass-card rounded-2xl p-6 sm:p-8 border border-[#38BDF8]/20 bg-gradient-to-br from-[#111827]/80 to-[#0B1120] text-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#2563EB]/25 text-[#38BDF8]">
                STAGE 0{activeStep + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {steps[activeStep].name}
              </h3>
            </div>
            <span className="text-xs text-slate-500 italic">
              {steps[activeStep].description}
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-light mt-2">
            {steps[activeStep].details}
          </p>
        </div>
      </div>
    </section>
  );
};
