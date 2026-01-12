import React, { useState, useRef } from 'react';
import { Instagram, Mail, MapPin, Phone, Clock, ArrowRight, Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { navigationLinks, studio } from '../data/mockData';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer ref={footerRef} className="relative bg-[#1a1a1a] text-white pt-20 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <motion.div
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-20 right-[10%] w-80 h-80 rounded-full bg-[#8B2F5F]/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_newsoul-replica/artifacts/7xzy0yki_604e73fc94532bf2c5ad6522_logoo-p-500-1.png" 
              alt="Prakun Thai Massage" 
              className="h-14 mb-6 brightness-0 invert"
            />
            <p className="text-white/60 mb-6 max-w-xs leading-relaxed">
              Professionelle Thai-Massage im Herzen von Hamburg. Mit Wärme, Respekt und Sorgfalt seit 2012.
            </p>
            <motion.a
              whileHover={{ x: 5 }}
              href="https://instagram.com/prakunmassage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Folgen Sie uns</span>
            </motion.a>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold mb-5 text-[#C4A77D]">Leistungen</h3>
            <ul className="space-y-3">
              {navigationLinks.services.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold mb-5 text-[#C4A77D]">Rechtliches</h3>
            <ul className="space-y-3">
              {navigationLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold mb-5 text-[#C4A77D]">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#8B2F5F]" />
                <span>{studio.address}<br />{studio.city}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Clock className="h-4 w-4 flex-shrink-0 text-[#8B2F5F]" />
                <span>{studio.hours}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#8B2F5F]" />
                <a href={`mailto:${studio.email}`} className="hover:text-white transition-colors">
                  {studio.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter - Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Newsletter abonnieren</h3>
              <p className="text-white/60 text-sm">
                Erhalten Sie exklusive Angebote und Wellness-Tipps.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Ihre E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-full px-5 min-w-[250px] focus:bg-white/20 transition-colors"
              />
              <Button
                type="submit"
                className="bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white rounded-full px-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#8B2F5F]/30"
              >
                Anmelden
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Prakun Thai Massage. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-white/40 flex items-center gap-1">
            Mit <Heart className="h-3 w-3 text-[#8B2F5F] fill-[#8B2F5F]" /> in Hamburg seit 2012
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;