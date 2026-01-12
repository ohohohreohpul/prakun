import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { servicesDetailed, serviceCategories } from '../data/mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const megaMenuTimeoutRef = useRef(null);
  const resourcesTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setIsResourcesOpen(false);
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const handleResourcesEnter = () => {
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setIsMegaMenuOpen(false);
    setIsResourcesOpen(true);
  };

  const handleResourcesLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 150);
  };

  const textColorClass = isScrolled || isMegaMenuOpen || isResourcesOpen 
    ? 'text-white' 
    : 'text-white';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMegaMenuOpen || isResourcesOpen
          ? 'bg-[#1a1a1a]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[#C4A77D]/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1">
            {/* Mega Menu Trigger - Leistungen */}
            <div
              className="relative"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:text-[#8B2F5F] ${textColorClass}`}
              >
                Leistungen
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Ressourcen Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:text-[#8B2F5F] ${textColorClass}`}
              >
                Ressourcen
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Ressourcen Dropdown Menu */}
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden"
                    onMouseEnter={handleResourcesEnter}
                    onMouseLeave={handleResourcesLeave}
                  >
                    <div className="py-2">
                      <Link
                        to="/ueber-uns"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-[#2B2B2B] hover:bg-[#8B2F5F]/5 hover:text-[#8B2F5F] transition-colors"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        Über uns
                      </Link>
                      <Link
                        to="/kontakt"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-[#2B2B2B] hover:bg-[#8B2F5F]/5 hover:text-[#8B2F5F] transition-colors"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        Kontakt
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Centered Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Link to="/" className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_newsoul-replica/artifacts/7xzy0yki_604e73fc94532bf2c5ad6522_logoo-p-500-1.png" 
                alt="Prakun Thai Massage" 
                className="h-9 md:h-10 transition-all duration-300 brightness-0 invert"
              />
            </Link>
          </motion.div>

          {/* Right Navigation - Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-1 justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/gutscheine">
                <Button
                  variant="outline"
                  className={`text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
                    isScrolled || isMegaMenuOpen || isResourcesOpen
                      ? 'border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white'
                      : 'border-white text-white hover:bg-white hover:text-[#2B2B2B]'
                  }`}
                >
                  Gutscheine
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                className="relative overflow-hidden bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#8B2F5F]/30 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Termin buchen</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-[#2B2B2B] hover:bg-black/5' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl shadow-black/10"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-4 gap-8">
                {/* Wellness Massage */}
                <div>
                  <h3 className="text-sm font-bold text-[#8B2F5F] uppercase tracking-wider mb-4">
                    Wellness Massage
                  </h3>
                  <ul className="space-y-2">
                    {serviceCategories.wellness.services.map((serviceId) => {
                      const service = servicesDetailed[serviceId];
                      if (!service) return null;
                      return (
                        <li key={serviceId}>
                          <Link
                            to={`/massage/${service.slug}`}
                            className="group flex items-center justify-between py-1.5 text-[#2B2B2B] hover:text-[#8B2F5F] transition-colors"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <span className="text-sm">{service.title}</span>
                            <span className="text-xs text-[#666666] group-hover:text-[#8B2F5F]">
                              ab {service.priceFrom}€
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Thai Massage */}
                <div>
                  <h3 className="text-sm font-bold text-[#8B2F5F] uppercase tracking-wider mb-4">
                    Thailändische Massage
                  </h3>
                  <ul className="space-y-2">
                    {serviceCategories.thai.services.map((serviceId) => {
                      const service = servicesDetailed[serviceId];
                      if (!service) return null;
                      return (
                        <li key={serviceId}>
                          <Link
                            to={`/massage/${service.slug}`}
                            className="group flex items-center justify-between py-1.5 text-[#2B2B2B] hover:text-[#8B2F5F] transition-colors"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <span className="text-sm flex items-center gap-2">
                              {service.title}
                              {service.isNew && (
                                <span className="text-[10px] bg-[#8B2F5F] text-white px-1.5 py-0.5 rounded-full">NEU</span>
                              )}
                            </span>
                            <span className="text-xs text-[#666666] group-hover:text-[#8B2F5F]">
                              ab {service.priceFrom}€
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Ayurveda */}
                <div>
                  <h3 className="text-sm font-bold text-[#8B2F5F] uppercase tracking-wider mb-4">
                    Ayurveda Massage
                  </h3>
                  <ul className="space-y-2">
                    {serviceCategories.ayurveda.services.map((serviceId) => {
                      const service = servicesDetailed[serviceId];
                      if (!service) return null;
                      return (
                        <li key={serviceId}>
                          <Link
                            to={`/massage/${service.slug}`}
                            className="group flex items-center justify-between py-1.5 text-[#2B2B2B] hover:text-[#8B2F5F] transition-colors"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <span className="text-sm">{service.title}</span>
                            <span className="text-xs text-[#666666] group-hover:text-[#8B2F5F]">
                              ab {service.priceFrom}€
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Featured Service / CTA */}
                <div className="bg-[#F7F6F4] rounded-2xl p-6">
                  <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=300&fit=crop"
                      alt="Featured Massage"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <div>
                        <span className="text-[#C4A77D] text-xs font-medium">BELIEBT</span>
                        <h4 className="text-white font-bold">Hot Stone Massage</h4>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#666666] mb-4">
                    Tiefenwärme durch Lavasteine für maximale Entspannung.
                  </p>
                  <Link
                    to="/massage/hot-stone-massage"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#8B2F5F] hover:gap-3 transition-all"
                    onClick={() => setIsMegaMenuOpen(false)}
                  >
                    Mehr erfahren <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <Link
                  to="/leistungen"
                  className="text-sm font-medium text-[#8B2F5F] hover:underline"
                  onClick={() => setIsMegaMenuOpen(false)}
                >
                  Alle Leistungen ansehen →
                </Link>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-[#666666]">Fragen? Rufen Sie uns an:</span>
                  <a href="tel:+4940123456" className="text-sm font-medium text-[#2B2B2B] hover:text-[#8B2F5F]">
                    +49 40 123 456
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Service Categories */}
              <div>
                <h3 className="text-xs font-bold text-[#8B2F5F] uppercase tracking-wider mb-3">Leistungen</h3>
                <div className="space-y-2">
                  {Object.values(servicesDetailed).slice(0, 8).map((service) => (
                    <Link
                      key={service.id}
                      to={`/massage/${service.slug}`}
                      className="flex items-center justify-between py-2 text-[#2B2B2B] hover:text-[#8B2F5F] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-sm">{service.title}</span>
                      <span className="text-xs text-[#666666]">ab {service.priceFrom}€</span>
                    </Link>
                  ))}
                </div>
              </div>

              <hr className="border-[#E5E2DD]" />

              {/* Ressourcen */}
              <div>
                <h3 className="text-xs font-bold text-[#8B2F5F] uppercase tracking-wider mb-3">Ressourcen</h3>
                <Link
                  to="/ueber-uns"
                  className="block text-[#2B2B2B] font-medium py-2 hover:text-[#8B2F5F] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Über uns
                </Link>
                <Link
                  to="/kontakt"
                  className="block text-[#2B2B2B] font-medium py-2 hover:text-[#8B2F5F] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>

              <hr className="border-[#E5E2DD]" />

              {/* Buttons */}
              <div className="flex gap-3">
                <Link to="/gutscheine" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full">
                    Gutscheine
                  </Button>
                </Link>
                <Button className="flex-1 bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white rounded-full">
                  Termin buchen
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
