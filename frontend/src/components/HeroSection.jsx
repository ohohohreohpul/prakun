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
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-xl lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          {/* Rating Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
              <span className="text-sm font-semibold text-white drop-shadow-md">4.9/5</span>
            </div>
            <span className="text-white/80 text-sm drop-shadow-md">|</span>
            <span className="text-sm text-white/80 drop-shadow-md">200+ Bewertungen</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
            Weil Sie mehr verdienen
            <br />
            <span className="italic font-light text-[#C4A77D]">als nur eine Pause.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg mx-auto lg:mx-0 drop-shadow-md">
            Professionelle Thai-Massage im Herzen von Hamburg. Massagen mit Wirkung seit 2012.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base px-8 py-6 rounded-full font-medium">
              Termin buchen
            </Button>
            <Button
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-[#2B2B2B] text-base px-8 py-6 rounded-full font-medium backdrop-blur-sm"
            >
              Gutscheine kaufen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;