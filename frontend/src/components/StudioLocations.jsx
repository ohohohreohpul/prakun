import React, { useRef } from 'react';
import { Star, MapPin, Clock, Phone, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { studio } from '../data/mockData';
import { Button } from './ui/button';

const StudioLocations = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="bg-[#F7F6F4] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-[#8B2F5F]/10 text-[#8B2F5F] text-sm font-medium mb-4"
          >
            STANDORT
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mb-4">
            Besuchen Sie unser{' '}
            <span className="italic font-light text-[#8B2F5F]">Studio</span>
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-lg">
            Zentral gelegen im Herzen von Hamburg – einfach erreichbar mit öffentlichen Verkehrsmitteln.
          </p>
        </motion.div>

        {/* Studio Card - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Glass Background */}
            <div className="absolute -inset-4 bg-white/50 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-2xl shadow-black/5" />
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50">
              <div className="grid md:grid-cols-2">
                {/* Studio Image */}
                <div className="relative h-72 md:h-full min-h-[400px] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={studio.image}
                    alt={studio.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                    }}
                  />
                  {/* Rating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-xl rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-white/50"
                  >
                    <Star className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
                    <span className="text-sm font-bold text-[#2B2B2B]">{studio.rating}</span>
                    <span className="text-xs text-[#666666]">({studio.reviewCount})</span>
                  </motion.div>
                </div>

                {/* Studio Info */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <motion.img 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    src="https://customer-assets.emergentagent.com/job_newsoul-replica/artifacts/0gkkkubd_pklogo.png" 
                    alt="Prakun Logo" 
                    className="h-12 w-auto object-contain mb-6"
                  />
                  
                  <div className="space-y-5 mb-8">
                    {[
                      { icon: MapPin, text: `${studio.address}, ${studio.city}` },
                      { icon: Clock, text: studio.hours },
                      { icon: Phone, text: studio.phone },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#8B2F5F]/10 flex items-center justify-center group-hover:bg-[#8B2F5F]/20 transition-colors">
                          <item.icon className="h-5 w-5 text-[#8B2F5F]" />
                        </div>
                        <p className="text-[#2B2B2B] font-medium">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <Button className="group relative overflow-hidden w-full bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base py-6 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-[#8B2F5F]/30">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Jetzt Termin buchen
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Button>
                  
                  <p className="text-center text-sm text-[#666666] mt-4">
                    {studio.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioLocations;