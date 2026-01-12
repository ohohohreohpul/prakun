import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesDetailed } from '../data/mockData';

// Featured services to display
const featuredServices = [
  'teilkoerpermassage',
  'ganzkoerpermassage', 
  'aromaoel-massage',
  'hot-stone-massage',
  'kraeuterstempel-massage',
  'lomi-lomi-massage'
];

const ServiceCards = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-[#1a1a1a] py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B2F5F]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C4A77D]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10"
        >
          <div>
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-[#C4A77D]/20 text-[#C4A77D] text-sm font-medium mb-3"
            >
              UNSERE LEISTUNGEN
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Beliebte{' '}
              <span className="italic font-light text-[#C4A77D]">Massagen</span>
            </h2>
          </div>
          
          <Link 
            to="/leistungen"
            className="hidden md:flex items-center gap-2 text-[#C4A77D] hover:text-white transition-colors mt-4 md:mt-0 group"
          >
            <span className="text-sm font-medium">Alle ansehen</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Service Cards */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all -ml-2 hidden md:flex items-center justify-center border border-white/10"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all -mr-2 hidden md:flex items-center justify-center border border-white/10"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </motion.button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredServices.map((serviceSlug, index) => {
              const service = servicesDetailed[serviceSlug];
              if (!service) return null;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
                >
                  <Link to={`/massage/${service.slug}`} className="group block">
                    <div className="relative rounded-2xl overflow-hidden bg-[#2a2a2a] border border-white/10 hover:border-[#C4A77D]/30 transition-all duration-500">
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={service.cardImage}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                        
                        {/* Popular Badge */}
                        {service.isPopular && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#C4A77D] text-[#1a1a1a] text-xs font-bold rounded-full">
                            BELIEBT
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-lg font-bold text-white group-hover:text-[#C4A77D] transition-colors line-clamp-1">
                            {service.title}
                          </h3>
                          <span className="flex-shrink-0 text-[#C4A77D] font-bold">
                            ab {service.priceFrom}€
                          </span>
                        </div>
                        
                        <p className="text-white/50 text-sm mb-4 line-clamp-2">
                          {service.subtitle}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white/40 text-xs">
                            {service.duration}
                          </span>
                          <span className="text-[#C4A77D] text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Mehr erfahren
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* View All Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
            >
              <Link to="/leistungen" className="group block h-full">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#8B2F5F] to-[#6B1F4F] border border-[#8B2F5F]/50 h-full min-h-[320px] flex flex-col items-center justify-center p-8 text-center hover:shadow-xl hover:shadow-[#8B2F5F]/20 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Alle Massagen
                  </h3>
                  <p className="text-white/70 text-sm">
                    Entdecken Sie unser komplettes Angebot
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:hidden mt-6 text-center"
        >
          <Link 
            to="/leistungen"
            className="inline-flex items-center gap-2 text-[#C4A77D] hover:text-white transition-colors"
          >
            <span className="text-sm font-medium">Alle Massagen ansehen</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
