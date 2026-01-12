import React from 'react';
import { Star } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1696841212541-449ca29397cc?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F4]/90 via-[#F7F6F4]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-xl lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          {/* Rating Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
              <span className="text-sm font-semibold text-[#2B2B2B]">4.9/5</span>
            </div>
            <span className="text-[#666666] text-sm">|</span>
            <span className="text-sm text-[#666666]">1329+ Ratings</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] leading-[1.1] mb-6 tracking-tight">
            Make your
            <br />
            health{' '}
            <span className="italic font-light text-[#8B7355]">your priority</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#555555] mb-10 max-w-lg mx-auto lg:mx-0">
            Your massage therapy for holistic health. Now available in your city.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-[#2B2B2B] hover:bg-[#3B3B3B] text-white text-base px-8 py-6 rounded-full font-medium">
              Book now
            </Button>
            <Button
              variant="outline"
              className="border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white text-base px-8 py-6 rounded-full font-medium"
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