import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const MembershipSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/85" />
      </div>

      {/* Floating Glass Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-[#8B2F5F]/20 blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-20 right-[10%] w-60 h-60 rounded-full bg-[#C4A77D]/20 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#C4A77D] text-sm font-medium mb-6"
            >
              WELLNESS PAKETE
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] tracking-tight">
              Gönnen Sie sich{' '}
              <span className="italic font-light text-[#C4A77D]">das Besondere.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-4 leading-relaxed">
              Entdecken Sie unsere exklusiven Wellness-Pakete für maximale Entspannung. 
              Kombinieren Sie verschiedene Behandlungen und sparen Sie dabei.
            </p>
            <p className="text-white/70 text-base md:text-lg mb-8">
              Zeit zu Zweit: Genießen Sie gemeinsame Auszeiten mit Ihren Liebsten in entspannter Atmosphäre.
            </p>
            <Link to="/buchen">
              <Button className="group relative overflow-hidden bg-white hover:bg-white/90 text-[#2B2B2B] text-base px-8 py-6 rounded-full font-medium transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1">
                <span className="relative z-10">Pakete entdecken</span>
              </Button>
            </Link>
          </motion.div>

          {/* Image with Glassmorphism Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Glass Frame */}
              <div className="absolute -inset-4 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10" />
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=800&fit=crop"
                  alt="Wellness Paket"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                  }}
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50"
              >
                <p className="text-[#8B2F5F] font-bold text-2xl">-20%</p>
                <p className="text-[#666666] text-sm">auf Pakete</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;