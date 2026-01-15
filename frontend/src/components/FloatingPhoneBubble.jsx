import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

const FloatingPhoneBubble = ({ phoneNumber = "040 22697033" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const formattedPhone = phoneNumber.replace(/\s/g, '');
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 right-0 mb-2"
          >
            <div className="bg-white rounded-xl shadow-2xl p-4 min-w-[200px] border border-gray-100">
              <p className="text-gray-600 text-sm mb-2">Jetzt anrufen:</p>
              <a 
                href={`tel:${formattedPhone}`}
                className="text-lg font-semibold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {phoneNumber}
              </a>
              <p className="text-xs text-gray-400 mt-2">Mo-So: 10:00 - 20:00</p>
            </div>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          w-14 h-14 rounded-full shadow-lg flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isExpanded 
            ? 'bg-gray-700 hover:bg-gray-800' 
            : 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800'
          }
        `}
        aria-label={isExpanded ? "Schließen" : "Anrufen"}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isExpanded ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Phone className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>
      
      {/* Pulse animation when not expanded */}
      {!isExpanded && (
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 pointer-events-none"></span>
      )}
    </div>
  );
};

export default FloatingPhoneBubble;
