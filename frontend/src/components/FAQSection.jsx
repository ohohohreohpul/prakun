import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
            <p className="text-[#C4A77D] text-sm tracking-wider uppercase mb-3">Support & FAQ's</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6">
              How can we help you?
            </h2>
            <p className="text-[#666666] mb-6 leading-relaxed">
              If you have any questions, please contact our Customer Support. Monday - Friday 08:00 to 18:00.
            </p>
            <p className="text-[#666666] mb-2">The best way to contact us is via:</p>
            <a
              href="mailto:contact@newsoul.de"
              className="text-[#2B2B2B] font-medium hover:text-[#8B7355] transition-colors"
            >
              contact@newsoul.de
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