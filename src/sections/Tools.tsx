import React from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  Cloud,
  FileSpreadsheet,
  Layers,
  Video
} from 'lucide-react';
import { Youtube, Facebook } from '../components/SocialIcons';

export const Tools: React.FC = () => {
  const tools = [
    { name: 'YouTube Studio', icon: Youtube, desc: 'Analytics & Channel Optimization', color: 'text-red-500' },
    { name: 'Meta Business Suite', icon: Facebook, desc: 'Facebook & Instagram Moderation', color: 'text-blue-500' },
    { name: 'Canva', icon: Palette, desc: 'Thumbnail mockups & graphics', color: 'text-pink-400' },
    { name: 'Google Workspace', icon: Cloud, desc: 'Collaborative script documents', color: 'text-yellow-500' },
    { name: 'Microsoft Office', icon: FileSpreadsheet, desc: 'Reporting & editorial plans', color: 'text-emerald-500' },
    { name: 'CMS Platforms', icon: Layers, desc: 'WordPress & digital publishing portals', color: 'text-indigo-400' },
    { name: 'Video Editing Tools', icon: Video, desc: 'Final Cut / Premiere storyboard checks', color: 'text-cyan-400' }
  ];

  return (
    <section
      id="tools"
      className="relative py-20 px-6 sm:px-8 bg-[#111827]/30 border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-[0.3em] text-[#38BDF8] uppercase block mb-3 font-semibold">
            Tech Stack
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
            Professional Toolkit
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mt-3 rounded-full w-[60px]" />
        </div>

        {/* Tools Badges Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative glass-card px-6 py-4 rounded-xl flex items-center gap-4 cursor-default border border-white/5 hover:border-[#38BDF8]/20 bg-slate-950/20"
                whileHover={{ y: -3, scale: 1.03 }}
              >
                <div className={`${tool.color} group-hover:scale-115 transition-transform duration-300`}>
                  <Icon size={22} />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold text-white font-display">
                    {tool.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-light">
                    {tool.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
