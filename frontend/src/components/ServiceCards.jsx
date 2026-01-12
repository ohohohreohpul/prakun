import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { services } from '../data/mockData';

const ServiceCards = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
            Unsere Leistungen
          </motion.span>
          <p className="text-[#666666] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Traditionelle Techniken, erfahrene Therapeuten und höchste Qualität. Nur bei{' '}
            <span className="font-semibold text-[#8B2F5F]">Prakun Thai Massage</span>.
          </p>
        </motion.div>

        {/* Service Cards Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg shadow-black/5 transition-all -ml-4 hidden md:flex items-center justify-center border border-white/50"
          >
            <ChevronLeft className="h-5 w-5 text-[#2B2B2B]" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg shadow-black/5 transition-all -mr-4 hidden md:flex items-center justify-center border border-white/50"
          >
            <ChevronRight className="h-5 w-5 text-[#2B2B2B]" />
          </motion.button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <motion.a
                key={service.id}
                href={service.link}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-40 md:w-48 group snap-start"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#E5E2DD] aspect-[4/3.5] shadow-lg shadow-black/5 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-black/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                    }}
                  />
                  {/* Glassmorphism Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  
                  {service.isViewAll && (
                    <div className="absolute inset-0 bg-[#8B2F5F]/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-sm font-medium text-center px-4">
                        Alle Massagen ansehen
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-[#2B2B2B] group-hover:text-[#8B2F5F] transition-colors duration-300">
                    {service.title}
                  </p>
                  {service.price && (
                    <p className="text-xs text-[#666666] mt-1 font-medium">{service.price}</p>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;