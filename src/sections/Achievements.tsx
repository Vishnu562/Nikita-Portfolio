import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, FileText, Globe, MessageSquare } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    const totalSteps = duration / 16;
    const stepIncrement = (end - start) / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

export const Achievements: React.FC = () => {
  const achievements = [
    {
      label: 'Years of Experience',
      value: 6,
      suffix: '+',
      icon: Award,
      description: 'Active contribution in writing, hosting, and publishing digital media.'
    },
    {
      label: 'Organic Views Generated',
      value: 500,
      suffix: 'K+',
      icon: Eye,
      description: 'Aggregated viewership across high-performing policy and financial scheme videos.'
    },
    {
      label: 'Content Pieces Authored',
      value: 100,
      suffix: '+',
      icon: FileText,
      description: 'Comprehensive scripts, detailed reports, and informational articles published.'
    },
    {
      label: 'Digital Brands Served',
      value: 5,
      suffix: '+',
      icon: Globe,
      description: 'Collaborating with prominent Marathi news outlets and media agencies.'
    },
    {
      label: 'Audience Interactions',
      value: 10000,
      suffix: '+',
      icon: MessageSquare,
      description: 'Direct queries resolved in video comments, providing educational clarity.'
    }
  ];

  return (
    <section
      id="achievements"
      className="relative py-24 px-6 sm:px-8 bg-[#0B1120] overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#2563EB]/5 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-mono tracking-[0.3em] text-[#38BDF8] uppercase block mb-3 font-semibold">
              Milestones
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white leading-tight">
              Achievements That Drive Impact
            </h2>
            <div className="h-[3px] bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mt-4 mb-6 rounded-full w-[80px]" />
            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-6">
              In digital content, figures tell stories. Over my career, I've focused on translating complex public details into easily understandable formats, driving significant organic reach and user engagement.
            </p>
            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
              Every view represent a citizen learning about a saving scheme, a smart card application, or an FD interest rate. My focus is on value-first storytelling.
            </p>
          </div>

          {/* Right Cards with Counters */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`glass-card p-6 rounded-2xl text-left border border-white/5 hover:border-[#38BDF8]/15 ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-[#38BDF8]">
                      <Icon size={20} />
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-white font-display">
                      <Counter target={item.value} suffix={item.suffix} />
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-300 font-display mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
