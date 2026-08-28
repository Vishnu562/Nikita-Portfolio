import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, Briefcase } from 'lucide-react';

interface Job {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  details: string[];
}

export const WorkExperience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const jobs: Job[] = [
    {
      id: 0,
      company: 'Boss Wallah Media',
      role: 'Anchor & Script Writer',
      period: '2023 - Present',
      description: 'Serving as the lead face and voice for finance, education, and social policy media channels.',
      details: [
        'Researched, scripted, and hosted viral video essays and explainers, yielding a significant increase in subscriber retention and digital reach.',
        'Wrote highly structural scripts incorporating hook theories, keeping viewers engaged and optimizing YouTube algorithm metrics.',
        'Collaborated with video editing and graphics teams to deliver premium production quality and timely uploads.',
        'Authored over 80+ comprehensive video blueprints on smart cards, schemes, banking systems, and public programs.'
      ]
    },
    {
      id: 1,
      company: 'Maha Sports',
      role: 'Senior Content Editor & Publisher',
      period: '2022 - 2023',
      description: 'Managed the editorial team and directed cross-platform publishing pipelines.',
      details: [
        'Oversaw daily editorial output, editing and refining scripts and web articles for accuracy, SEO alignment, and brand voice.',
        'Designed high-performance social strategies that led to a substantial growth in organic video views.',
        'Organized content calendars, coordinate writers, and direct production workflows under tight news-cycle schedules.'
      ]
    },
    {
      id: 2,
      company: 'Navi Arthkranti',
      role: 'Content Writer & Anchor',
      period: '2021 - 2022',
      description: 'Researched business topics and anchored financial and economic report programs.',
      details: [
        'Created educational content breaking down business news, stock market updates, and government policies.',
        'Conducted video interviews with entrepreneurs and finance specialists, editing and distributing scripts across web platforms.',
        'Grew Navi Arthkranti channel base through interactive community engagement and trend-based script hooks.'
      ]
    },
    {
      id: 3,
      company: 'Dainik Bombabomb',
      role: 'Senior Content Writer & Publisher',
      period: '2020 - 2021',
      description: 'Produced entertainment and local interest features for high-traffic media channels.',
      details: [
        'Drafted creative human-interest stories, scripts, and local news digests, increasing daily traffic.',
        'Handled publishing operations through CMS panels, optimising keywords, headlines, and thumbnails.',
        'Tracked page views and audience metrics to refine monthly storytelling directions.'
      ]
    },
    {
      id: 4,
      company: 'Sakal Media',
      role: 'Social Media Executive',
      period: '2019 - 2020',
      description: 'Orchestrated organic distribution and community build across multi-channel media.',
      details: [
        'Curated and published content across Sakal Media Group\'s YouTube, Instagram, and Facebook handles.',
        'Boosted overall organic impressions through targeted hashtag tracking, comment moderation, and story features.',
        'Analyzed channel performance parameters to advise content production departments on trending formats.'
      ]
    }
  ];

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="relative py-24 bg-[#111827]/40 px-6 sm:px-8 border-y border-white/5"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#38BDF8] uppercase block mb-3 font-semibold">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Work Experience
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mt-4 rounded-full w-[80px]" />
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mt-5 font-light">
            Click on any position to expand and view my roles, responsibilities, and achievements.
          </p>
        </div>

        {/* Vertical Timeline Accordion */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-10 space-y-6 text-left">
          {jobs.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <div key={job.id} className="relative group">
                {/* Timeline Icon */}
                <div
                  className={`absolute -left-[53px] md:-left-[61px] top-2.5 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 border ${
                    isExpanded
                      ? 'bg-[#2563EB] border-[#38BDF8] text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                      : 'bg-[#111827] border-slate-700 text-slate-400 group-hover:border-slate-500'
                  }`}
                >
                  <Briefcase size={16} />
                </div>

                {/* Experience Card */}
                <div
                  onClick={() => handleToggle(job.id)}
                  className={`glass-card p-6 rounded-2xl cursor-pointer select-none transition-all duration-300 ${
                    isExpanded
                      ? 'border-[#38BDF8]/30 shadow-lg shadow-blue-500/5'
                      : 'hover:border-white/15'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-mono text-[#38BDF8] font-semibold flex items-center gap-1.5 mb-1">
                        <Calendar size={12} />
                        {job.period}
                      </span>
                      <h3 className="text-xl font-bold font-display text-[#F8FAFC]">
                        {job.role}
                      </h3>
                      <p className="text-sm font-semibold text-slate-400 font-display">
                        {job.company}
                      </p>
                    </div>

                    <div className="self-end sm:self-center">
                      <button
                        className={`p-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-all ${
                          isExpanded ? 'rotate-180 bg-[#2563EB]/25 text-[#38BDF8]' : ''
                        }`}
                        aria-label="Expand position details"
                      >
                        <ChevronDown size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Collapsed short description */}
                  {!isExpanded && (
                    <p className="text-sm text-[#CBD5E1] mt-3 font-light leading-relaxed line-clamp-1">
                      {job.description}
                    </p>
                  )}

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/5 space-y-4">
                          <p className="text-sm text-[#CBD5E1] font-light leading-relaxed">
                            {job.description}
                          </p>
                          <ul className="space-y-2.5">
                            {job.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light"
                              >
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
