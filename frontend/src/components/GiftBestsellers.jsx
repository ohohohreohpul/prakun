import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { giftProducts } from '../data/mockData';
import { Button } from './ui/button';

const GiftBestsellers = () => {
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
      const scrollAmount = 300;
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
          <p className="text-[#8B2F5F] text-sm tracking-wider uppercase mb-3">GESCHENKIDEEN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">
            Unsere Gutscheine & Pakete
          </h2>
        </div>

        {/* Gift Products Carousel */}
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
            {giftProducts.map((product) => (
              <a
                key={product.id}
                href={product.link}
                className="flex-shrink-0 w-56 md:w-64 group snap-start"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#E5E2DD] aspect-[3/4] mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                    }}
                  />
                  {product.isNew && (
                    <span className="absolute top-3 right-3 bg-[#8B2F5F] text-white text-xs font-medium px-2 py-1 rounded">
                      NEU
                    </span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-[#2B2B2B] mb-1 group-hover:text-[#8B2F5F] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-[#666666]">
                  <span className="font-semibold text-[#2B2B2B]">{product.price} €</span> inkl. MwSt.
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20">
          <Button className="bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base px-6 py-5 rounded-full">
            Alle Gutscheine ansehen
          </Button>
          <Button
            variant="outline"
            className="border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white text-base px-6 py-5 rounded-full"
          >
            Firmen-Gutscheine
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GiftBestsellers;