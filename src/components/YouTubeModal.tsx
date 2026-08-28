import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { getYouTubeEmbedUrl } from '../utils/youtube';

interface YouTubeModalProps {
  isOpen: boolean;
  videoUrl: string;
  videoTitle: string;
  onClose: () => void;
}

export const YouTubeModal: React.FC<YouTubeModalProps> = ({
  isOpen,
  videoUrl,
  videoTitle,
  onClose,
}) => {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-4xl glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 bg-slate-900/60 border-b border-white/5">
              <h3 className="text-lg font-semibold tracking-wide truncate max-w-[80%] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#CBD5E1]">
                {videoTitle}
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors flex items-center gap-1 text-xs font-medium"
                >
                  <span>Open YouTube</span>
                  <ExternalLink size={14} />
                </a>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-1.5 rounded-full transition-all"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={videoTitle}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                  <p>Unable to load video preview.</p>
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[#38BDF8] underline"
                  >
                    Watch directly on YouTube
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
