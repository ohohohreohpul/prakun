import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { benefits } from '../data/mockData';
import { Button } from './ui/button';

const BenefitsSection = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
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
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] leading-tight">
            Entspannung.
            <br />
            <span className="text-[#8B2F5F]">Im Herzen von Hamburg.</span>
          </h2>
        </motion.div>

        {/* Benefits Cards Carousel */}
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
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-72 md:w-80 group snap-start"
              >
                <div className="relative rounded-3xl overflow-hidden bg-[#E5E2DD] aspect-[3/4] mb-5 shadow-lg shadow-black/5 transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-black/10">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                    }}
                  />
                  {/* Glassmorphism Card Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 border border-white/50 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-lg font-bold text-[#2B2B2B] mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-[#666666] leading-relaxed line-clamp-2">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link to="/buchen">
            <Button className="group relative overflow-hidden bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base px-10 py-6 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B2F5F]/30 hover:-translate-y-1">
              <span className="relative z-10">Jetzt Termin buchen</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;