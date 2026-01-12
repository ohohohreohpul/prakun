import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  return (
    <section className="bg-[#F7F6F4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#C4A77D] text-sm tracking-wider uppercase mb-3">REVIEWS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">
            What patients say about us
          </h2>
          <p className="text-[#666666]">
            We're proud of over 20,000 satisfied patients and an average rating of{' '}
            <span className="font-semibold text-[#2B2B2B]">4.9 out of 5</span> stars.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#2B2B2B] text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <hr className="border-[#E5E2DD] mb-4" />

              {/* Author */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#E5E2DD] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#888888]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <span className="text-sm text-[#666666]">
                  {testimonial.author} via {testimonial.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;