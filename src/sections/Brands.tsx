import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BRAND_VIDEOS, BRANDS } from '../data/portfolioData';

export const Brands: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState(BRANDS[0]);
  const selectedVideos = BRAND_VIDEOS.filter(
    (video) => video.brand.toLowerCase() === selectedBrand.toLowerCase()
  );

  return (
    <section
      id="brands"
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-light bg-bg-primary"
    >
      {/* Editorial Header */}
      <div className="text-left mb-12">
        <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-3 font-sans">
          PARTNERSHIPS
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif text-text-primary mb-2">
          Brands I've Worked With
        </h2>
      </div>

      {/* Brand filter */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border border-border-light divide-x divide-y divide-border-light bg-bg-secondary/20">
        {BRANDS.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex min-h-[90px] items-center justify-center px-4 py-8 text-center group hover:bg-bg-secondary transition-colors duration-300"
          >
            <button
              type="button"
              onClick={() => setSelectedBrand(brand)}
              aria-pressed={selectedBrand === brand}
              className={`w-full font-serif font-extrabold text-base tracking-[0.15em] uppercase transition-colors duration-300 cursor-pointer ${
                selectedBrand === brand
                  ? 'text-accent'
                  : 'text-text-muted group-hover:text-text-primary'
              }`}
            >
              {brand}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {selectedVideos.map((video, index) => (
            <motion.article
              key={video.fileName}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group min-w-0"
            >
              <div className="relative aspect-video overflow-hidden border border-border-light bg-black">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="absolute inset-0 h-full w-full object-contain"
                  aria-label={`${video.brand} video ${video.title}`}
                >
                  <source src={`/videos/${encodeURIComponent(video.fileName)}`} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-base font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                  {video.title}
                </h3>
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
                  {video.brand}
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
