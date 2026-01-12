import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { studios } from '../data/mockData';
import { Button } from './ui/button';

const StudioLocations = () => {
  const scrollRef = useRef(null);
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
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="bg-[#F7F6F4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#C4A77D] text-sm tracking-wider uppercase mb-3">LOCATIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">
            Discover our new: soul{' '}
            <span className="italic font-normal text-[#8B7355]">studios</span>
          </h2>
          <p className="text-[#666666] mt-4 max-w-2xl mx-auto">
            Designed for your well-being, equipped with natural and high-quality interiors and meeting the highest sustainability standards.
          </p>
        </div>

        {/* Studios Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -bottom-16 right-0 flex gap-2 z-10">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`bg-white hover:bg-[#F7F6F4] rounded-full p-3 shadow-md transition-all ${
                canScrollLeft ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="h-5 w-5 text-[#2B2B2B]" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`bg-white hover:bg-[#F7F6F4] rounded-full p-3 shadow-md transition-all ${
                canScrollRight ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="h-5 w-5 text-[#2B2B2B]" />
            </button>
          </div>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {studios.map((studio) => (
              <div
                key={studio.id}
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow snap-start"
              >
                {/* Studio Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={studio.image}
                    alt={studio.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-xs font-medium text-[#2B2B2B]">{studio.code}</span>
                  </div>
                </div>

                {/* Studio Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#2B2B2B]">{studio.city}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
                      <span className="text-sm font-medium text-[#2B2B2B]">{studio.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#666666] mb-3">{studio.name}</p>
                  
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#888888]">Address</span>
                      <span className="text-[#2B2B2B]">{studio.address}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#888888]">Next available spot</span>
                      <span className="text-[#2B2B2B]">{studio.nextAvailable}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#2B2B2B] hover:bg-[#3B3B3B] text-white text-sm py-3 rounded-full">
                    Book now - from 69€
                  </Button>
                </div>
              </div>
            ))}

            {/* Coming Soon Cards */}
            <div className="flex-shrink-0 w-80 md:w-96 bg-[#E5E2DD] rounded-2xl overflow-hidden snap-start">
              <div className="relative h-48 bg-[#D5D2CD] flex items-center justify-center">
                <span className="text-[#888888] text-sm">Coming Soon</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#2B2B2B] mb-2">Berlin</h3>
                <p className="text-sm text-[#666666] mb-3">Studio Kreuzberg...coming soon</p>
                <div className="text-sm text-[#888888]">
                  <p>Address will be announced soon</p>
                  <hr className="my-3 border-[#C5C2BD]" />
                  <p className="font-medium">expected to open from March 2026</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-80 md:w-96 bg-[#E5E2DD] rounded-2xl overflow-hidden snap-start">
              <div className="relative h-48 bg-[#D5D2CD] flex items-center justify-center">
                <span className="text-[#888888] text-sm">Coming Soon</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#2B2B2B] mb-2">Frankfurt am Main</h3>
                <p className="text-sm text-[#666666] mb-3">Studio Frankfurt-Westend...coming soon</p>
                <div className="text-sm text-[#888888]">
                  <p>Address will be announced soon</p>
                  <hr className="my-3 border-[#C5C2BD]" />
                  <p className="font-medium">expected to open from March 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioLocations;