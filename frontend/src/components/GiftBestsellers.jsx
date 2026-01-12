import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Package } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { giftProducts } from '../data/mockData';
import { Button } from './ui/button';

const GiftBestsellers = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B2F5F]/10 text-[#8B2F5F] text-sm font-medium mb-4"
          >
            <Package className="h-4 w-4" />
            UNSERE PAKETE
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B]">
            Wellness Pakete & Extras
          </h2>
          <p className="text-[#666666] mt-4 max-w-2xl mx-auto">
            Kombinieren Sie verschiedene Behandlungen für ein ganzheitliches Wellness-Erlebnis
          </p>
        </motion.div>

        {/* Gift Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -bottom-20 right-0 flex gap-3 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-4 shadow-lg shadow-black/5 transition-all border border-white/50 ${
                canScrollLeft ? 'opacity-100' : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="h-5 w-5 text-[#2B2B2B]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-4 shadow-lg shadow-black/5 transition-all border border-white/50 ${
                canScrollRight ? 'opacity-100' : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="h-5 w-5 text-[#2B2B2B]" />
            </motion.button>
          </div>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {giftProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex-shrink-0 w-60 md:w-72 group snap-start cursor-pointer"
              >
                <Link to="/buchen">
                  <div className="relative rounded-3xl overflow-hidden bg-[#E5E2DD] aspect-[3/4] mb-5 shadow-lg shadow-black/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/10">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                      }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                    
                    {product.isNew && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 right-4 bg-[#8B2F5F] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                      >
                        NEU
                      </motion.span>
                    )}
                    
                    {/* Glassmorphism Price Tag */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/80 backdrop-blur-xl rounded-xl p-3 border border-white/50 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-[#8B2F5F] font-bold text-lg">ab {product.price} €</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#2B2B2B] mb-1 group-hover:text-[#8B2F5F] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#666666]">
                    <span className="font-semibold text-[#2B2B2B]">ab {product.price} €</span> inkl. MwSt.
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-24"
        >
          <Link to="/buchen">
            <Button className="group relative overflow-hidden bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base px-8 py-5 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-[#8B2F5F]/30 hover:-translate-y-1">
              <span className="relative z-10">Paket buchen</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftBestsellers;