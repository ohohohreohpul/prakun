import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Award, Users, Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';

const stats = [
  { icon: Clock, value: "12+", label: "Jahre Erfahrung" },
  { icon: Users, value: "10.000+", label: "Zufriedene Kunden" },
  { icon: Award, value: "100%", label: "Zertifizierte Therapeuten" },
  { icon: Star, value: "4.9", label: "Google Bewertung" },
];

const values = [
  {
    title: "Authentische Tradition",
    description: "Wir praktizieren traditionelle Thai-Massage-Techniken, die seit Jahrhunderten überliefert werden – kombiniert mit modernem Fachwissen."
  },
  {
    title: "Individuelle Betreuung",
    description: "Jede Behandlung wird auf Ihre persönlichen Bedürfnisse abgestimmt. Wir nehmen uns Zeit für Sie."
  },
  {
    title: "Qualität & Sorgfalt",
    description: "Nur die besten Öle und Produkte kommen bei uns zum Einsatz. Ihre Gesundheit und Ihr Wohlbefinden stehen im Mittelpunkt."
  },
  {
    title: "Herzliche Atmosphäre",
    description: "Bei uns fühlen Sie sich wie zu Hause. Unser Studio ist ein Ort der Ruhe und Entspannung."
  }
];

const AboutPage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' });

  return (
    <div className="bg-[#F7F6F4] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&h=800&fit=crop"
            alt="Massage Studio"
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
              ÜBER UNS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Willkommen bei{' '}
              <span className="italic font-light text-[#C4A77D]">Prakun</span>
            </h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Seit 2012 bieten wir im Herzen von Hamburg authentische Thai-Massage auf höchstem Niveau. 
              Unsere Mission: Ihr Wohlbefinden durch traditionelle Heilkunst.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <stat.icon className="h-8 w-8 text-[#C4A77D] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=1000&fit=crop"
                  alt="Thai Massage"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#8B2F5F]/10 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#C4A77D]/10 rounded-3xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B2F5F]/10 text-[#8B2F5F] text-sm font-medium mb-4">
                UNSERE GESCHICHTE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6">
                Tradition trifft{' '}
                <span className="italic font-light text-[#8B2F5F]">Moderne</span>
              </h2>
              <div className="space-y-4 text-[#666666] leading-relaxed">
                <p>
                  Was 2012 als kleine Praxis begann, ist heute ein etabliertes Wellness-Studio im Herzen von Hamburg-Winterhude. 
                  Unsere Gründerin brachte das Wissen und die Leidenschaft für traditionelle Thai-Massage direkt aus Thailand mit.
                </p>
                <p>
                  Bei Prakun Thai Massage verbinden wir jahrhundertealte Heiltraditionen mit modernem Komfort. 
                  Unsere zertifizierten Therapeuten werden kontinuierlich geschult und bringen authentische Techniken in jede Behandlung ein.
                </p>
                <p>
                  Unser Name "Prakun" bedeutet "Dankbarkeit" auf Thai – und genau das möchten wir Ihnen vermitteln: 
                  Dankbarkeit für Ihren Körper und die Zeit, die Sie sich für sich selbst nehmen.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 p-4 bg-[#F7F6F4] rounded-2xl border border-[#E5E2DD]">
                <MapPin className="h-10 w-10 text-[#8B2F5F] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2B2B2B]">Winterhuder Weg 24</p>
                  <p className="text-[#666666] text-sm">22085 Hamburg</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 md:py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C4A77D]/20 text-[#C4A77D] text-sm font-medium mb-4">
              UNSERE WERTE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Was uns{' '}
              <span className="italic font-light text-[#C4A77D]">ausmacht</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C4A77D]/30 transition-all duration-300"
              >
                <Heart className="h-8 w-8 text-[#C4A77D] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6">
              Bereit für Ihre erste Behandlung?
            </h2>
            <p className="text-[#666666] text-lg mb-8 max-w-2xl mx-auto">
              Erleben Sie die heilende Kraft der Thai-Massage. Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/buchen">
                <Button className="group relative overflow-hidden bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base px-8 py-6 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-[#8B2F5F]/30 hover:-translate-y-1">
                  <span className="relative z-10">Jetzt Termin buchen</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button variant="outline" className="border-2 border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white text-base px-8 py-6 rounded-full transition-all duration-500 hover:-translate-y-1">
                  Kontakt aufnehmen
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

export default AboutPage;
