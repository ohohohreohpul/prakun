import React, { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg shadow-black/5 border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/10 group-hover:bg-white/90">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 w-12 h-12 rounded-full bg-[#8B2F5F]/10 flex items-center justify-center">
                  <Quote className="h-5 w-5 text-[#8B2F5F]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="h-5 w-5 fill-[#C4A77D] text-[#C4A77D]" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#2B2B2B] text-base leading-relaxed mb-6">
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
    </section>
  );
};

export default Testimonials;