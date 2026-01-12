import React from 'react';
import { Button } from './ui/button';

const LymphaticSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[#2B2B2B]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#C4A77D] text-sm tracking-wider uppercase mb-4">
          BRAZILIAN LYMPHATIC DRAINAGE • 60-90 MIN
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Bring your body{' '}
          <span className="italic font-normal text-[#C4A77D]">back into balance.</span>
        </h2>
        <p className="text-[#B0B0B0] text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          By massaging your arms, legs and stomach, lymphatic fluid is drained and swelling is reduced. You will feel noticeably lighter, slimmer and firmer.
        </p>
        <Button className="bg-white hover:bg-[#F7F6F4] text-[#2B2B2B] text-base px-8 py-6 rounded-full">
          Book now
        </Button>
      </div>
    </section>
  );
};

export default LymphaticSection;