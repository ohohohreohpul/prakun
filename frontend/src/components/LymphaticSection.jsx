import React from 'react';
import { Button } from './ui/button';

const LymphaticSection = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[#2B2B2B]/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#C4A77D] text-sm tracking-wider uppercase mb-4 font-medium">
          TRADITIONELLE THAI MASSAGE • 60-120 MIN
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
          Körper und Geist{' '}
          <span className="italic font-light text-[#C4A77D]">in Einklang bringen.</span>
        </h2>
        <p className="text-[#C5C5C5] text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Druckpunktmassage mit Dehnung, Akupressur und Energiearbeit – Ideal bei Verspannungen und Stress. 
          Spüren Sie, wie neue Energie durch Ihren Körper fließt.
        </p>
        <Button className="bg-white hover:bg-[#F7F6F4] text-[#2B2B2B] text-base px-8 py-6 rounded-full font-medium">
          Jetzt buchen
        </Button>
      </div>
    </section>
  );
};

export default LymphaticSection;