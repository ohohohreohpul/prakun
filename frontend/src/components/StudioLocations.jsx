import React from 'react';
import { Star, MapPin, Clock, Phone } from 'lucide-react';
import { studio } from '../data/mockData';
import { Button } from './ui/button';

const StudioLocations = () => {
  return (
    <section className="bg-[#F7F6F4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#8B2F5F] text-sm tracking-wider uppercase mb-3">STANDORT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">
            Besuchen Sie unser{' '}
            <span className="italic font-normal text-[#8B2F5F]">Studio</span>
          </h2>
          <p className="text-[#666666] mt-4 max-w-2xl mx-auto">
            Zentral gelegen im Herzen von Hamburg – einfach erreichbar mit öffentlichen Verkehrsmitteln.
          </p>
        </div>

        {/* Studio Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2">
              {/* Studio Image */}
              <div className="relative h-64 md:h-full">
                <img
                  src={studio.image}
                  alt={studio.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://customer-assets.emergentagent.com/job_ac9fa09c-ab26-447d-aeb4-5da562c35d15/artifacts/sg5qkt1c_default-fallback-image.png';
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
                  <span className="text-sm font-semibold text-[#2B2B2B]">{studio.rating}</span>
                  <span className="text-xs text-[#666666]">({studio.reviewCount} Bewertungen)</span>
                </div>
              </div>

              {/* Studio Info */}
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_newsoul-replica/artifacts/0gkkkubd_pklogo.png" 
                    alt="Prakun Logo" 
                    className="h-16"
                  />
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#8B2F5F] mt-0.5" />
                    <div>
                      <p className="text-[#2B2B2B] font-medium">{studio.address}</p>
                      <p className="text-[#666666] text-sm">{studio.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#8B2F5F]" />
                    <p className="text-[#2B2B2B]">{studio.hours}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#8B2F5F]" />
                    <p className="text-[#2B2B2B]">{studio.phone}</p>
                  </div>
                </div>

                <Button className="w-full bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base py-6 rounded-full">
                  Jetzt Termin buchen
                </Button>
                
                <p className="text-center text-sm text-[#666666] mt-4">
                  {studio.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioLocations;