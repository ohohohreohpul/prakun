import React, { useRef } from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Button } from './ui/button';

const giftVoucherAmounts = [
  { id: 1, amount: 49, description: "Perfekt für eine Teilkörpermassage" },
  { id: 2, amount: 62, description: "Ideal für eine 60-Minuten Massage" },
  { id: 3, amount: 92, description: "Für ein ausgiebiges Wellness-Erlebnis" },
  { id: 4, amount: 114, description: "Das ultimative Verwöhn-Paket", featured: true },
];

const GiftVoucherSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#8B2F5F]/20 blur-3xl"
      />
      <motion.div
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C4A77D]/20 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C4A77D]/20 text-[#C4A77D] text-sm font-medium mb-6"
          >
            <Gift className="h-4 w-4" />
            GESCHENK-GUTSCHEINE
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Schenken Sie{' '}
            <span className="italic font-light text-[#C4A77D]">Wohlbefinden</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Die perfekte Geschenkidee für jeden Anlass. Unsere Gutscheine sind 3 Jahre gültig und flexibel einlösbar.
          </p>
        </motion.div>

        {/* Gift Voucher Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {giftVoucherAmounts.map((voucher, index) => (
            <motion.a
              key={voucher.id}
              href="https://shop.prakunthaimassage.de/hamburg"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className={`relative rounded-2xl p-6 md:p-8 border transition-all duration-500 ${
                voucher.featured 
                  ? 'bg-gradient-to-br from-[#8B2F5F] to-[#6B1F4F] border-[#C4A77D]/50 shadow-xl shadow-[#8B2F5F]/20' 
                  : 'bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#C4A77D]/50 hover:bg-white/10'
              }`}>
                {/* Featured Badge */}
                {voucher.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-[#C4A77D] text-[#1a1a1a] text-xs font-bold rounded-full whitespace-nowrap">
                      BELIEBT
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="text-center mb-4">
                  <span className={`text-4xl md:text-5xl font-bold ${voucher.featured ? 'text-white' : 'text-white'}`}>
                    €{voucher.amount}
                  </span>
                </div>

                {/* Decorative Line */}
                <div className={`w-12 h-px mx-auto mb-4 ${voucher.featured ? 'bg-white/30' : 'bg-white/20'}`} />

                {/* Description */}
                <p className={`text-center text-sm mb-6 min-h-[40px] ${voucher.featured ? 'text-white/80' : 'text-white/60'}`}>
                  {voucher.description}
                </p>

                {/* Button */}
                <div className={`text-center py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                  voucher.featured 
                    ? 'bg-white text-[#8B2F5F] group-hover:bg-[#C4A77D] group-hover:text-[#1a1a1a]' 
                    : 'bg-white/10 text-white group-hover:bg-[#8B2F5F] group-hover:text-white'
                }`}>
                  Jetzt kaufen
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a 
            href="https://shop.prakunthaimassage.de/hamburg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="group bg-transparent hover:bg-[#C4A77D] text-[#C4A77D] hover:text-[#1a1a1a] border-2 border-[#C4A77D] text-base px-8 py-5 rounded-full transition-all duration-500 hover:-translate-y-1">
              <span className="flex items-center gap-2">
                Alle Gutscheine im Shop
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </a>
          <p className="text-white/40 text-sm mt-4">
            Sofortiger Versand per E-Mail · 3 Jahre gültig · Flexibel einlösbar
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftVoucherSection;
