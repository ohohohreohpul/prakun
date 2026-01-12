import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { faqItems } from '../data/mockData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="bg-[#F7F6F4] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-[#8B2F5F]/10 text-[#8B2F5F] text-sm font-medium mb-4"
            >
              HILFE & FAQ
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
              Wie können wir
              <br />
              <span className="text-[#8B2F5F]">Ihnen helfen?</span>
            </h2>
            <p className="text-[#666666] mb-8 leading-relaxed text-lg">
              Bei Fragen steht Ihnen unser Team gerne zur Verfügung. Montag - Sonntag von 10:00 bis 20:00 Uhr.
            </p>
            
            {/* Contact Card - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg"
            >
              <p className="text-[#666666] mb-2 text-sm">Kontaktieren Sie uns per E-Mail:</p>
              <a
                href="mailto:info@prakunmassage.de"
                className="text-[#8B2F5F] font-bold text-xl hover:underline transition-all"
              >
                info@prakunmassage.de
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${item.id}`}
                    className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline text-left font-semibold text-[#2B2B2B] hover:text-[#8B2F5F] transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-[#666666] leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;