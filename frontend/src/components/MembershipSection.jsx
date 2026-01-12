import React from 'react';
import { Button } from './ui/button';

const MembershipSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[#2B2B2B]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <p className="text-[#C4A77D] text-sm tracking-wider uppercase mb-4">NEW: SOUL</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Make your routine{' '}
              <span className="italic font-normal text-[#C4A77D]">your priority</span>
            </h2>
            <p className="text-[#B0B0B0] text-base md:text-lg mb-8 leading-relaxed">
              Time to make massages part of your self-care routine. Members save up to 50%* and benefit from free upgrades for special treatments such as Deep Tissue or Stress Recovery (former Inner Balance) Massage and much more.
            </p>
            <p className="text-[#B0B0B0] text-base md:text-lg mb-8">
              Bonus: you can easily carry over unused monthly inclusive minutes to the next month.
            </p>
            <Button className="bg-white hover:bg-[#F7F6F4] text-[#2B2B2B] text-base px-8 py-6 rounded-full">
              Become a member
            </Button>
            <p className="text-[#888888] text-xs mt-6">
              *Based on a 12-month membership for €65 per month compared to one standard booking per month
            </p>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=800&fit=crop"
                alt="Massage membership"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;