import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const LymphaticSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-32 md:py-44 overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/60" />
      </motion.div>

      {/* Floating Glass Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-[5%] w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-1/4 right-[5%] w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#C4A77D] text-sm font-medium mb-8"
        >
          TRADITIONELLE THAI MASSAGE • 60-120 MIN
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
        >
          Körper und Geist{' '}
          <span className="italic font-light text-[#C4A77D]">in Einklang bringen.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-base md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Druckpunktmassage mit Dehnung, Akupressur und Energiearbeit – Ideal bei Verspannungen und Stress. 
          Spüren Sie, wie neue Energie durch Ihren Körper fließt.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/buchen">
            <Button className="group relative overflow-hidden bg-white hover:bg-white/90 text-[#2B2B2B] text-base px-10 py-6 rounded-full font-medium transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1">
              <span className="relative z-10">Jetzt buchen</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LymphaticSection;