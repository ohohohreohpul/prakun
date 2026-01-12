import React from 'react';
import { Star } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1696841212541-449ca29397cc?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F4]/80 via-[#F7F6F4]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
              <span className="text-sm font-medium text-[#2B2B2B]">4.9/5</span>
            </div>
            <span className="text-[#666666] text-sm">|</span>
            <span className="text-sm text-[#666666]">1329+ Ratings</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] leading-tight mb-6">
            Make your{' '}
            <br />
            <span className="text-[#2B2B2B]">health</span>{' '}
            <span className="italic font-normal text-[#8B7355]">your priority</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#666666] mb-8 max-w-lg">
            Your massage therapy for holistic health. Now available in your city.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#2B2B2B] hover:bg-[#3B3B3B] text-white text-base px-8 py-6 rounded-full">
              Book now
            </Button>
            <Button
              variant="outline"
              className="border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white text-base px-8 py-6 rounded-full"
            >
              View Memberships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;