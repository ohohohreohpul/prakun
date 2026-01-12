import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { benefits } from '../data/mockData';
import { Button } from './ui/button';

const BenefitsSection = () => {
  const scrollRef = useRef(null);

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
    <section className="bg-[#F7F6F4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-12">
          Entspannung.{' '}
          <span className="font-bold">Im Herzen von Hamburg.</span>
        </h2>

        {/* Benefits Cards Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all -ml-4 hidden md:block"
          >
            <ChevronLeft className="h-5 w-5 text-[#2B2B2B]" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all -mr-4 hidden md:block"
          >
            <ChevronRight className="h-5 w-5 text-[#2B2B2B]" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex-shrink-0 w-64 md:w-72 group snap-start"
              >
                <div className="rounded-2xl overflow-hidden bg-[#E5E2DD] aspect-[3/4] mb-4">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2 group-hover:text-[#8B2F5F] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button className="bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base px-8 py-6 rounded-full">
            Jetzt Termin buchen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;