import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Youtube } from '../components/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const emailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message
    ].join('\n');
    const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: PERSONAL_INFO.contact.email,
      href: `mailto:${PERSONAL_INFO.contact.email}`,
      icon: Mail
    },
    {
      label: 'Phone',
      value: PERSONAL_INFO.contact.phone,
      href: `tel:${PERSONAL_INFO.contact.phone}`,
      icon: Phone
    },
    {
      label: 'Location',
      value: PERSONAL_INFO.contact.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(PERSONAL_INFO.contact.location)}`,
      icon: MapPin
    }
  ];

  const socials = [
    { name: 'Youtube-Bosswallah Marathi', icon: Youtube, href: PERSONAL_INFO.contact.socials.youtube, color: 'hover:text-accent' }
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-light bg-bg-primary"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        
        {/* Left Side: Large Headline & Direct Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-between text-left">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase block mb-3 font-sans">
              GET IN TOUCH
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-serif text-text-primary mb-6 leading-tight">
              Let's create something people want to watch.
            </h2>
            
            <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed mb-8 max-w-md">
              Available for brand collaborations, UGC campaigns, anchoring, voiceover and digital content opportunities.
            </p>

            {/* Primary CTA button */}
            <div className="mb-10">
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-bg-secondary text-text-primary font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-bg-primary transition-all duration-300 active:scale-[0.98] shadow-sm"
              >
                <span>LET'S COLLABORATE</span>
              </a>
            </div>

            {/* Contact Details Stack */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group p-4 border border-border-light bg-bg-secondary/20 hover:bg-bg-secondary/60 transition-colors duration-300"
                  >
                    <div className="p-2.5 bg-accent/5 text-accent border border-accent/10">
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className="text-[9px] text-text-muted font-bold block uppercase tracking-wider mb-0.5 font-sans">
                        {info.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary group-hover:text-accent transition-colors font-sans">
                        {info.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Icons Strip */}
          <div className="mt-12 lg:mt-6">
            <h4 className="text-[9px] font-bold uppercase tracking-widest text-text-muted mb-4 font-sans">
              Follow My Work
            </h4>
            <div className="flex gap-4">
              {socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-3 border border-border-light bg-transparent text-text-secondary ${social.color} hover:border-accent hover:scale-105 transition-all duration-300 font-sans text-[11px] font-bold tracking-wider uppercase`}
                    aria-label={`Visit Nikita's ${social.name}`}
                  >
                    <Icon size={16} />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Minimalist Inquiry Form */}
                <div className="lg:col-span-7 border border-border-light p-6 sm:p-10 bg-bg-secondary/30 relative flex flex-col justify-center">
              <h3 className="text-2xl font-bold font-serif text-text-primary text-left mb-6">
            Send an Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="text-[10px] font-bold text-text-muted block mb-2 uppercase tracking-wide font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-bg-tertiary border ${
                    errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-border-light focus:border-accent'
                  } text-text-primary focus:outline-none transition-colors text-xs font-sans`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1 font-sans">
                    <AlertCircle size={10} />
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-[10px] font-bold text-text-muted block mb-2 uppercase tracking-wide font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-bg-tertiary border ${
                    errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-border-light focus:border-accent'
                  } text-text-primary focus:outline-none transition-colors text-xs font-sans`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1 font-sans">
                    <AlertCircle size={10} />
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="text-[10px] font-bold text-text-muted block mb-2 uppercase tracking-wide font-sans">
                Subject / Campaign Type
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-bg-tertiary border ${
                  errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-border-light focus:border-accent'
                } text-text-primary focus:outline-none transition-colors text-xs font-sans`}
                placeholder="e.g. Brand Sponsorship, UGC Video, Host Role"
              />
              {errors.subject && (
                <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1 font-sans">
                  <AlertCircle size={10} />
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="text-[10px] font-bold text-text-muted block mb-2 uppercase tracking-wide font-sans">
                Campaign / Project Scope
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className={`w-full px-4 py-3 bg-bg-tertiary border ${
                  errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-border-light focus:border-accent'
                } text-text-primary focus:outline-none transition-colors text-xs font-sans resize-none`}
                placeholder="Briefly describe what content we'll be collaborating on..."
              />
              {errors.message && (
                <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1 font-sans">
                  <AlertCircle size={10} />
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-accent text-white hover:bg-accent-dark font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.005] active:scale-[0.99] flex items-center justify-center gap-2 font-sans border border-accent-light/10"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={12} />
                </>
              )}
            </button>
          </form>

          {/* Success Banner */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="absolute inset-0 bg-bg-secondary border border-accent flex flex-col items-center justify-center p-8 z-20 text-center"
              >
                <div className="p-3 bg-accent/10 text-accent mb-4 border border-accent/20">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold font-serif text-text-primary mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-text-secondary text-xs max-w-xs font-light leading-relaxed font-sans">
                  Thank you for reaching out. Nikita will review your inquiry and get back to you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
