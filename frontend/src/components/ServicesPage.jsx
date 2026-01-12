import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';
import { servicesDetailed } from '../data/mockData';

const serviceCategories = [
  {
    id: 'thai',
    title: 'Thai Massage',
    description: 'Traditionelle Techniken aus Thailand',
    services: ['teilkoerpermassage', 'ganzkoerpermassage', 'thai-warrior-massage']
  },
  {
    id: 'wellness',
    title: 'Wellness Massage',
    description: 'Entspannung für Körper und Geist',
    services: ['aromaoel-massage', 'hot-stone-massage', 'kraeuterstempel-massage']
  },
  {
    id: 'spezial',
    title: 'Spezial Massagen',
    description: 'Besondere Behandlungen für individuelle Bedürfnisse',
    services: ['lomi-lomi-massage', 'ayurveda-abhyanga', 'bambus-massage']
  },
  {
    id: 'teilkoerper',
    title: 'Teilkörper & Gesicht',
    description: 'Gezielte Behandlung einzelner Bereiche',
    services: ['fussmassage', 'gesichtsmassage', 'schwangerschaftsmassage']
  }
];

const ServicesPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true, margin: '-100px' });

  return (
    <div className="bg-[#F7F6F4] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=600&fit=crop"
            alt="Massage Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/50 to-[#1a1a1a]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B2F5F]/20 text-[#C4A77D] text-sm font-medium mb-4">
              UNSERE LEISTUNGEN
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Alle{' '}
              <span className="italic font-light text-[#C4A77D]">Massagen</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Entdecken Sie unser vielfältiges Angebot an traditionellen Thai-Massagen und modernen Wellness-Behandlungen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2B2B2B] mb-2">
                  {category.title}
                </h2>
                <p className="text-[#666666]">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((serviceSlug, index) => {
                  const service = servicesDetailed[serviceSlug];
                  if (!service) return null;
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    >
                      <Link to={`/massage/${service.slug}`} className="group block h-full">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-[#E5E2DD] h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={service.cardImage || service.heroImage}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            
                            {/* Price Badge */}
                            <div className="absolute bottom-4 left-4">
                              <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-[#8B2F5F]">
                                ab {service.priceFrom}€
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h3 className="text-lg font-bold text-[#2B2B2B] mb-2 group-hover:text-[#8B2F5F] transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-[#666666] text-sm mb-4 line-clamp-2">
                              {service.shortDescription}
                            </p>
                            
                            {/* Duration & CTA */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 text-[#666666] text-sm">
                                <Clock className="h-4 w-4" />
                                <span>{service.duration}</span>
                              </div>
                              <span className="text-[#8B2F5F] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                Details
                                <ArrowRight className="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Nicht sicher, welche Massage?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Rufen Sie uns an oder schreiben Sie uns – wir beraten Sie gerne und finden gemeinsam die perfekte Behandlung für Sie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/buchen">
                <Button className="group relative overflow-hidden bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base px-8 py-6 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-[#8B2F5F]/30 hover:-translate-y-1">
                  <span className="relative z-10">Jetzt Termin buchen</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-[#2B2B2B] text-base px-8 py-6 rounded-full transition-all duration-500 hover:-translate-y-1">
                  Beratung anfragen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
