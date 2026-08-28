import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Brands', href: '#brands' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-bg-primary border-t border-border-light pt-16 pb-12 px-6 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Segment */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start select-none text-left">
            <span className="text-lg font-bold tracking-[0.2em] font-serif text-text-primary uppercase">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[8px] tracking-[0.3em] text-text-muted uppercase font-semibold font-sans mt-1">
              {PERSONAL_INFO.roles[0]} & {PERSONAL_INFO.roles[1]}
            </span>
            <span className="text-[9px] text-text-secondary font-sans font-light mt-0.5">
              {PERSONAL_INFO.contact.location}
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest font-semibold font-sans">
            {footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[#4E4E4E] hover:text-[#8C6C53] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={handleScrollToTop}
            className="p-3 border border-[#121212]/10 hover:border-[#121212] text-[#4E4E4E] hover:text-[#121212] bg-[#F4EFE3]/20 hover:bg-[#F4EFE3] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#121212]/5 w-full mb-8" />

        {/* Bottom Segment */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-[10px] text-[#7A7A7A] uppercase tracking-wider font-semibold font-sans">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          {/* Collaboration CTA */}
          <div>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="text-text-secondary hover:text-accent transition-colors font-sans text-[11px] font-bold tracking-wider uppercase"
              aria-label="Let's collaborate"
            >
              LET'S COLLABORATE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
