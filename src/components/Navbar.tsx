import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Brands', href: '#brands', id: 'brands' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const scrollPosition = window.scrollY + 200;
      
      // Check if we are near the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const elements = navLinks.map(link => document.getElementById(link.id));
      
      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-bg-primary/95 backdrop-blur-md border-b border-border-light shadow-sm'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => handleNavLinkClick(e, '#about')}
            className="flex flex-col select-none group"
          >
            <span className="text-lg font-bold tracking-[0.15em] font-serif text-text-primary transition-transform duration-300">
              NIKITA TUPE
            </span>
            <span className="text-[8px] tracking-[0.3em] text-text-secondary uppercase font-sans mt-0.5 font-medium">
              Creator & Anchor
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.id} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                      activeSection === link.id
                        ? 'text-accent'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-accent"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, '#contact')}
              className="text-[10px] font-bold uppercase tracking-[0.2em] border border-border-dark px-4 py-2 hover:bg-accent hover:text-bg-primary hover:border-accent transition-all duration-300"
            >
              Collaborate
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary hover:text-accent transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 top-[70px] z-30 md:hidden w-full h-[calc(100vh-70px)] bg-bg-primary border-t border-border-light flex flex-col justify-between p-8"
          >
            <ul className="flex flex-col gap-6 text-xl font-medium tracking-wider font-serif mt-6">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className={`flex items-center justify-between py-2 border-b border-border-light text-sm uppercase tracking-widest ${
                      activeSection === link.id
                        ? 'text-accent'
                        : 'text-text-secondary'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] font-mono text-text-muted">0{idx + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 mb-16">
              <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, '#contact')}
                className="w-full py-3.5 text-center bg-accent text-bg-primary font-bold text-xs uppercase tracking-widest hover:bg-accent-dark transition-colors"
              >
                Let's Collaborate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
