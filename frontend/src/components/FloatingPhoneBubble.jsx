import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const FloatingPhoneBubble = ({ phoneNumber = "040 22697033" }) => {
  const formattedPhone = phoneNumber.replace(/\s/g, '');
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={`tel:${formattedPhone}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="
          flex items-center gap-3 px-5 py-3
          bg-gradient-to-r from-[#8B2F5F] to-[#6B1F4F]
          backdrop-blur-xl
          rounded-xl
          shadow-lg shadow-[#8B2F5F]/30
          border border-[#C4A77D]/30
          cursor-pointer
          group
        "
      >
        {/* Phone Icon with gold accent */}
        <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center border border-[#C4A77D]/30">
          <Phone className="w-5 h-5 text-[#C4A77D]" />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col">
          <span className="text-[#C4A77D] text-xs font-medium uppercase tracking-wider">
            Jetzt anrufen
          </span>
          <span className="text-white font-semibold text-lg group-hover:text-[#C4A77D] transition-colors">
            {phoneNumber}
          </span>
        </div>
      </motion.a>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 -z-10 rounded-xl bg-[#8B2F5F]/20 blur-xl opacity-50"></div>
    </div>
  );
};

export default FloatingPhoneBubble;
