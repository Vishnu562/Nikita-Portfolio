import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Search,
  Hourglass,
  Layout,
  MessageCircle,
  Video,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const strengths = [
    {
      title: 'Audience-first Storytelling',
      description: 'Placing viewer requirements and comprehension at the core of every script, resulting in high satisfaction and sharing rates.',
      icon: Users
    },
    {
      title: 'Research-backed Content',
      description: 'Zero speculation. Information is gathered from source documents, government sheets, and official portals to guarantee high accuracy.',
      icon: Search
    },
    {
      title: 'High Audience Retention Scripts',
      description: 'Using structural loops, micro-hooks, and interactive questions that prevent drop-offs in the first critical minutes of streaming.',
      icon: Hourglass
    },
    {
      title: 'Platform-specific Strategy',
      description: 'Understanding unique formatting preferences, title structures, and thumbnail layouts that spark click-throughs on YouTube, Facebook, and Instagram.',
      icon: Layout
    },
    {
      title: 'Strong Communication',
      description: 'Exhibiting clear narration style, on-camera delivery control, and collaborative team communication across editorial desks.',
      icon: MessageCircle
    },
    {
      title: 'End-to-end Production Experience',
      description: 'Handling initial subject research, narrative scripting, video recording, editing feedback, metadata SEO, and CMS publishing.',
      icon: Video
    },
    {
      title: 'Creative Thinking',
      description: 'Formulating original visual illustrations, jokes, examples, and editing hooks to make technical topics (like Smart Cards) fun.',
      icon: Sparkles
    },
    {
      title: 'Fast Turnaround Time',
      description: 'Delivering scripts and audio files under tight deadlines, matching rapid news-cycles without sacrificing details.',
      icon: Zap
    }
  ];

  return (
    <section
      id="strengths"
      className="relative py-24 px-6 sm:px-8 bg-[#0B1120] overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#38BDF8]/5 rounded-full blur-[90px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Block */}
          <div className="lg:col-span-4 text-left">
            <span className="text-xs font-mono tracking-[0.3em] text-[#38BDF8] uppercase block mb-3 font-semibold">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white leading-tight">
              Why Work With Me
            </h2>
            <div className="h-[3px] bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mt-4 mb-6 rounded-full w-[80px]" />
            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-6">
              I do not just write scripts or host videos. I study the digital landscape to design content assets that build authority, educate audiences, and drive organic results.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle2 size={16} className="text-[#10B981]" />
                <span>6+ Years of Industry Trust</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle2 size={16} className="text-[#10B981]" />
                <span>Accurate Fact-Checked Reporting</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle2 size={16} className="text-[#10B981]" />
                <span>Audience Engagement Focus</span>
              </div>
            </div>
          </div>

          {/* Right Strengths Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.map((strength, idx) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card p-5 rounded-2xl flex gap-4 text-left border border-white/5 bg-slate-950/10 hover:border-[#38BDF8]/10"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-[#38BDF8] h-fit">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display mb-1.5">
                      {strength.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
