import React from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/mockData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  return (
    <section className="bg-[#F7F6F4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <p className="text-[#8B2F5F] text-sm tracking-wider uppercase mb-3">HILFE & FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6">
              Wie können wir Ihnen helfen?
            </h2>
            <p className="text-[#666666] mb-6 leading-relaxed">
              Bei Fragen steht Ihnen unser Team gerne zur Verfügung. Montag - Sonntag von 10:00 bis 20:00 Uhr.
            </p>
            <p className="text-[#666666] mb-2">Kontaktieren Sie uns per E-Mail:</p>
            <a
              href="mailto:info@prakunmassage.de"
              className="text-[#8B2F5F] font-medium hover:underline"
            >
              info@prakunmassage.de
            </a>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${item.id}`}
                  className="bg-white rounded-xl border-none shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                    <span className="text-[#2B2B2B] font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-[#666666]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;