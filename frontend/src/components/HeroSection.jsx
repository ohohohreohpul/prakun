import React from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1696841212541-449ca29397cc?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Floating Glass Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hidden lg:block"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-1/3 right-[20%] w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-xl lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          {/* Rating Badge - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
              ))}
            </div>
            <span className="text-white/60">|</span>
            <span className="text-sm text-white font-medium">4.9/5 · 200+ Bewertungen</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
          >
            Weil Sie mehr
            <br />
            verdienen{' '}
            <span className="italic font-light text-[#C4A77D]">als nur</span>
            <br />
            <span className="italic font-light text-[#C4A77D]">eine Pause.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Professionelle Thai-Massage im Herzen von Hamburg. 
            Massagen mit Wirkung seit 2012.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button 
              className="group relative overflow-hidden bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base px-8 py-6 rounded-full font-medium transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B2F5F]/40 hover:-translate-y-1"
            >
              <span className="relative z-10">Termin buchen</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Button>
            <Button
              variant="outline"
              className="group border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#2B2B2B] text-base px-8 py-6 rounded-full font-medium transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              Gutscheine kaufen
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Entdecken</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;