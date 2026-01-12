import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '../data/mockData';

const ServiceCards = () => {
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
        <div className="text-center mb-12">
          <p className="text-[#666666] text-sm md:text-base max-w-3xl mx-auto">
            Traditionelle Techniken, erfahrene Therapeuten und höchste Qualität. Nur bei{' '}
            <span className="font-semibold text-[#8B2F5F]">Prakun Thai Massage</span>.
          </p>
        </div>

        {/* Service Cards Carousel */}
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
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => (
              <a
                key={service.id}
                href={service.link}
                className="flex-shrink-0 w-36 md:w-44 group snap-start"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#E5E2DD] aspect-[4/3.5]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                    }}
                  />
                  {service.isViewAll && (
                    <div className="absolute inset-0 bg-[#8B2F5F]/80 flex items-center justify-center">
                      <span className="text-white text-sm font-medium text-center px-2">
                        Alle Massagen ansehen
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-3 text-sm font-medium text-[#2B2B2B] text-center group-hover:text-[#8B2F5F] transition-colors">
                  {service.title}
                </p>
                {service.price && (
                  <p className="text-xs text-[#666666] text-center">{service.price}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;