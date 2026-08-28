import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Video,
  PenTool,
  BookOpen,
  Play,
  Mic,
  Share2,
  Users,
  Globe,
  Megaphone,
  MessageCircle,
  Lightbulb
} from 'lucide-react';

export const CoreExpertise: React.FC = () => {
  const expertises = [
    {
      title: 'Content Strategy',
      description: 'Designing data-driven content blueprints that align with brand goals and audience interests.',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Creative Production',
      description: 'Overseeing projects from ideation and storyboarding to shooting and final cut execution.',
      icon: Video,
      color: 'from-sky-500 to-blue-500'
    },
    {
      title: 'Script Writing',
      description: 'Drafting high-retention, engaging scripts with structured hooks for video and audio content.',
      icon: PenTool,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Storytelling',
      description: 'Formatting complex messages into memorable narratives that build long-term subscriber trust.',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'YouTube Content',
      description: 'Optimizing retention curves, video SEO, tags, titles, and formats for organic growth.',
      icon: Play,
      color: 'from-red-500 to-rose-500'
    },
    {
      title: 'Video Hosting & Anchoring',
      description: 'Engaging viewers on camera with strong screen presence, clear diction, and confident delivery.',
      icon: Mic,
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Social Media',
      description: 'Managing cross-platform reach across Instagram Reels, Facebook, and emerging digital channels.',
      icon: Share2,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Audience Research',
      description: 'Analyzing demographics, feedback, trends, and viewing behaviors to shape content topics.',
      icon: Users,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Content Publishing',
      description: 'Publishing optimized articles, scripts, and video metadata across major CMS portals.',
      icon: Globe,
      color: 'from-cyan-500 to-sky-500'
    },
    {
      title: 'Digital Marketing',
      description: 'Driving organic impressions, brand alignment campaigns, and performance marketing outreach.',
      icon: Megaphone,
      color: 'from-sky-500 to-cyan-500'
    },
    {
      title: 'Brand Communication',
      description: 'Formulating consistent tone of voice and clear brand messaging for corporate collaborators.',
      icon: MessageCircle,
      color: 'from-teal-500 to-emerald-500'
    },
    {
      title: 'Creative Ideation',
      description: 'Facilitating brainstorming sessions to generate fresh viral video formats and hooks.',
      icon: Lightbulb,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section
      id="expertise"
      className="relative py-24 px-6 sm:px-8 bg-[#0B1120] overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#38BDF8] uppercase block mb-3 font-semibold">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Core Expertise
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mt-4 rounded-full w-[80px]" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-5 font-light">
            A comprehensive suite of production and strategic skills built over half a decade in high-performance media.
          </p>
        </div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {expertises.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative glass-card p-6 rounded-2xl flex flex-col items-start text-left cursor-default"
                whileHover={{ y: -8 }}
              >
                {/* Glow border overlay effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2563EB]/0 to-[#38BDF8]/0 group-hover:from-[#2563EB]/10 group-hover:to-[#38BDF8]/10 transition-colors duration-500 -z-10 pointer-events-none" />

                {/* Icon Circle */}
                <div className={`p-3.5 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 text-white shadow-md group-hover:scale-110 transition-transform duration-300 mb-5`}>
                  <IconComponent size={20} />
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC] font-display mb-2 group-hover:text-[#38BDF8] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
