import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Star, Clock, Check, ArrowRight, ArrowLeft, Phone, Calendar, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { servicesDetailed, studio } from '../data/mockData';
import Header from './Header';
import Footer from './Footer';

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesDetailed[slug];
  
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F7F6F4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2B2B2B] mb-4">Service nicht gefunden</h1>
          <Link to="/" className="text-[#8B2F5F] hover:underline">Zurück zur Startseite</Link>
        </div>
      </div>
    );
  }

  // Get related services (same category)
  const relatedServices = Object.values(servicesDetailed)
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="bg-[#F7F6F4] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        {/* Floating Glass Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hidden lg:block"
        />
        
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Übersicht
              </Link>
            </motion.div>
            
            {/* Category Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#C4A77D] text-sm font-medium mb-4"
            >
              {service.category === 'wellness' ? 'WELLNESS MASSAGE' : 
               service.category === 'thai' ? 'THAILÄNDISCHE MASSAGE' : 'AYURVEDA MASSAGE'}
            </motion.span>
            
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {service.title}
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl"
            >
              {service.subtitle}
            </motion.p>
            
            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="h-5 w-5" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-2xl font-bold text-[#C4A77D]">ab {service.priceFrom}€</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
                ))}
                <span className="text-white/70 text-sm ml-2">4.9 ({studio.reviewCount} Bewertungen)</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content - Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#8B2F5F]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-[#8B2F5F]" />
                      </div>
                      <span className="text-[#2B2B2B] font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Description */}
                <div className="prose prose-lg max-w-none">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[#666666] leading-relaxed space-y-6"
                  >
                    {service.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sticky top-24"
              >
                {/* Pricing Card - Glassmorphism */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl shadow-black/5">
                  <h3 className="text-xl font-bold text-[#2B2B2B] mb-6">Preise & Dauer</h3>
                  
                  <div className="space-y-3 mb-8">
                    {service.pricing.map((option, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-[#F7F6F4] hover:bg-[#8B2F5F]/5 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-[#8B2F5F]" />
                          <span className="font-medium text-[#2B2B2B]">{option.duration}</span>
                        </div>
                        <span className="text-lg font-bold text-[#8B2F5F] group-hover:scale-105 transition-transform">
                          {option.price}€
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <Link to="/buchen">
                    <Button className="w-full group relative overflow-hidden bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base py-6 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-[#8B2F5F]/30 mb-4">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Jetzt Termin buchen
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Button>
                  </Link>

                  <a href={`tel:${studio.phone}`}>
                    <Button variant="outline" className="w-full border-2 border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white py-6 rounded-full transition-all duration-300">
                      <Phone className="h-5 w-5 mr-2" />
                      Telefonisch buchen
                    </Button>
                  </a>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-[#E5E2DD]">
                    <p className="text-sm text-[#666666] text-center">
                      {studio.phone}<br />
                      {studio.hours}
                    </p>
                  </div>
                </div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-6 p-4 rounded-2xl bg-[#8B2F5F]/5 border border-[#8B2F5F]/10 text-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#C4A77D] text-[#C4A77D]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#666666]">
                    Über <span className="font-bold text-[#2B2B2B]">{studio.reviewCount}</span> zufriedene Kunden
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B2F5F]/10 text-[#8B2F5F] text-sm font-medium mb-4">
                WEITERE EMPFEHLUNGEN
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">
                Das könnte Ihnen auch gefallen
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((relService, index) => (
                <motion.div
                  key={relService.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link 
                    to={`/massage/${relService.slug}`}
                    className="group block bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relService.cardImage}
                        alt={relService.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                      {relService.isNew && (
                        <span className="absolute top-4 right-4 bg-[#8B2F5F] text-white text-xs font-bold px-3 py-1 rounded-full">
                          NEU
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#2B2B2B] mb-2 group-hover:text-[#8B2F5F] transition-colors">
                        {relService.title}
                      </h3>
                      <p className="text-sm text-[#666666] mb-4 line-clamp-2">
                        {relService.subtitle}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#8B2F5F]">ab {relService.priceFrom}€</span>
                        <span className="text-sm text-[#666666]">{relService.duration}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="h-12 w-12 text-[#8B2F5F] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">
              Bereit für Ihre Auszeit?
            </h2>
            <p className="text-lg text-[#666666] mb-8 max-w-2xl mx-auto">
              Buchen Sie jetzt Ihre {service.title} bei Prakun Thai Massage und gönnen Sie sich die Entspannung, die Sie verdienen.
            </p>
            <Link to="/buchen">
              <Button className="group relative overflow-hidden bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-lg px-10 py-6 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B2F5F]/30 hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  Termin buchen
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;