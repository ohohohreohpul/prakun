import React, { useRef, useState } from 'react';
import { Star, Quote, Play, X } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
            BEWERTUNGEN
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-[#666666] text-lg">
            Wir sind stolz auf über 200 zufriedene Kunden und eine durchschnittliche Bewertung von{' '}
            <span className="font-bold text-[#2B2B2B]">4.9 von 5</span> Sternen.
          </p>
        </motion.div>

        {/* Video Testimonial + Written Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Video Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
          >
            <div className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
              {/* Video Thumbnail */}
              <div className="relative aspect-[4/3]">
                <img
                  src="https://img.youtube.com/vi/vkoWPuPb9lc/maxresdefault.jpg"
                  alt="Kundenbewertung Video"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://img.youtube.com/vi/vkoWPuPb9lc/hqdefault.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white transition-all duration-300"
                  >
                    <Play className="h-8 w-8 text-[#8B2F5F] ml-1" fill="#8B2F5F" />
                  </motion.div>
                </div>

                {/* Video Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-[#8B2F5F] text-white text-xs font-medium shadow-lg">
                    VIDEO
                  </span>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#C4A77D] text-[#C4A77D]" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">
                  "Eine wunderbare Erfahrung"
                </h3>
                <p className="text-[#666666] mb-4">
                  Sehen Sie, was unsere Kunden über ihre Massage-Erlebnisse bei Prakun Thai Massage berichten.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B2F5F]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#8B2F5F] font-bold text-sm">K</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2B2B2B]">Kundenstimme</p>
                    <p className="text-xs text-[#666666]">Video Testimonial</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#8B2F5F]/10 to-[#C4A77D]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </motion.div>

          {/* Written Testimonials Stack */}
          <div className="space-y-6">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Glass Card */}
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/5 border border-white/50 transition-all duration-500 group-hover:shadow-xl group-hover:bg-white/90">
                  {/* Quote Icon */}
                  <div className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-[#8B2F5F]/10 flex items-center justify-center">
                    <Quote className="h-4 w-4 text-[#8B2F5F]" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 pt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#2B2B2B] text-base leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E5E2DD]">
                    <div className="w-10 h-10 bg-[#8B2F5F]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#8B2F5F] font-bold text-sm">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2B2B2B]">{testimonial.author}</p>
                      <p className="text-xs text-[#666666]">via {testimonial.source}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Third Testimonial - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
          className="group relative"
        >
          <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg shadow-black/5 border border-white/50 transition-all duration-500 group-hover:shadow-xl group-hover:bg-white/90">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-full bg-[#8B2F5F]/10 flex items-center justify-center flex-shrink-0">
                <Quote className="h-8 w-8 text-[#8B2F5F]" />
              </div>
              
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonials[2].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#C4A77D] text-[#C4A77D]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-[#2B2B2B] text-lg leading-relaxed mb-4">
                  "{testimonials[2].text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B2F5F]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#8B2F5F] font-bold text-sm">
                      {testimonials[2].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2B2B2B]">{testimonials[2].author}</p>
                    <p className="text-xs text-[#666666]">via {testimonials[2].source}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube.com/embed/vkoWPuPb9lc?autoplay=1"
                title="Kundenbewertung - Prakun Thai Massage"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;