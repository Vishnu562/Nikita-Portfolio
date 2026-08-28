import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import { LONG_FORM_VIDEOS, SHORT_FORM_VIDEOS } from '../data/portfolioData';
import type { VideoItem } from '../data/portfolioData';

export const FeaturedPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'long' | 'short'>('long');

  const videos = activeTab === 'long' ? LONG_FORM_VIDEOS : SHORT_FORM_VIDEOS;

  return (
    <section
      id="work"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-light bg-bg-primary"
    >
      {/* Editorial Header */}
      <div className="text-left mb-16">
        <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-3 font-sans">
          SELECTED VIDEOS
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-text-primary mb-4">
          Work I've Created
        </h2>
        <p className="text-sm sm:text-base text-text-secondary font-light max-w-2xl leading-relaxed">
          From financial explainers and government schemes to consumer awareness and everyday money decisions.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex border-b border-border-light mb-12">
        <button
          onClick={() => setActiveTab('long')}
          className={`pb-4 text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 relative mr-10 cursor-pointer ${
            activeTab === 'long'
              ? 'text-text-primary'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          LONG-FORM
          {activeTab === 'long' && (
            <motion.span
              layoutId="portfolioTabIndicator"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}
        </button>

        <button
          onClick={() => setActiveTab('short')}
          className={`pb-4 text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 relative cursor-pointer ${
            activeTab === 'short'
              ? 'text-text-primary'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          SHORT-FORM
          {activeTab === 'short' && (
            <motion.span
              layoutId="portfolioTabIndicator"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}
        </button>
      </div>

      {/* Portfolio Grid */}
      <motion.div
        layout
        className={`grid gap-8 ${
          activeTab === 'long'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        }`}
      >
        <AnimatePresence mode="popLayout">
          {videos.map((video: VideoItem, index: number) => (
            <motion.div
              layout
              key={video.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className="group flex flex-col h-full justify-between"
            >
              <div>
                {/* Thumbnail Wrapper */}
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full overflow-hidden border border-border-light mb-4 bg-bg-tertiary cursor-pointer"
                  style={{
                    aspectRatio: activeTab === 'long' ? '16/9' : '9/16'
                  }}
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback if maxresdefault doesn't exist
                      const img = e.target as HTMLImageElement;
                      if (img.src.includes('maxresdefault')) {
                        img.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }
                    }}
                  />
                  {/* Overlay play button */}
                  <div className="absolute inset-0 bg-bg-primary/10 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-bg-primary flex items-center justify-center text-text-primary group-hover:bg-accent group-hover:text-bg-primary transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-md">
                      <Play size={16} fill="currentColor" className="ml-0.5" />
                    </span>
                  </div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 text-[9px] font-bold tracking-[0.15em] bg-bg-primary text-text-primary px-2 py-1 uppercase shadow-sm border border-border-light">
                    {video.category}
                  </span>
                </a>

                {/* Video Info */}
                <h3 className="font-serif font-bold text-lg text-text-primary mb-2 leading-snug group-hover:text-accent transition-colors duration-300">
                  <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                    {video.title}
                  </a>
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed font-light mb-4 line-clamp-3">
                  {video.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-accent hover:text-text-primary uppercase transition-colors"
                >
                  <span>WATCH VIDEO</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
