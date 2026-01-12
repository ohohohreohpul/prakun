import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const MonthlyOfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup this session
    const hasSeenPopup = sessionStorage.getItem('seenMonthlyOffer');
    
    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('seenMonthlyOffer', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=1000&fit=crop')`,
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B2F5F]/90 via-[#6B1F4F]/85 to-[#4a1535]/95" />

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#C4A77D]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#C4A77D]/10 rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative p-8 md:p-10 text-center">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Logo */}
                <motion.img
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  src="https://customer-assets.emergentagent.com/job_newsoul-replica/artifacts/0gkkkubd_pklogo.png"
                  alt="Prakun"
                  className="h-12 mx-auto mb-6 brightness-0 invert"
                />

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#C4A77D]/20 border border-[#C4A77D]/30 text-[#C4A77D] text-sm font-medium mb-4">
                    ANGEBOT DES MONATS
                  </span>
                </motion.div>

                {/* Month */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#C4A77D] text-lg font-medium mb-2"
                >
                  Januar 2026
                </motion.p>

                {/* Main Offer */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    60 Minuten
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-white italic">
                    Aromaöl Massage
                  </h3>
                </motion.div>

                {/* Price */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="mb-4"
                >
                  <p className="text-[#C4A77D] text-sm mb-1">nur</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-6xl md:text-7xl font-bold text-white">60€</span>
                  </div>
                  <p className="text-white/60 text-sm mt-2">
                    statt <span className="line-through">65€</span>
                  </p>
                </motion.div>

                {/* Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-[#C4A77D]/80 text-xs mb-8"
                >
                  (Nur Barzahlung oder PayPal)
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                >
                  <Link to="/buchen" onClick={handleClose}>
                    <Button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#8B2F5F] font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5">
                      <Calendar className="h-5 w-5 mr-2" />
                      Jetzt buchen
                    </Button>
                  </Link>
                  <a 
                    href="https://shop.prakunthaimassage.de/hamburg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleClose}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto border-2 border-[#C4A77D] text-[#C4A77D] hover:bg-[#C4A77D] hover:text-[#1a1a1a] font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Gift className="h-5 w-5 mr-2" />
                      Gutschein kaufen
                    </Button>
                  </a>
                </motion.div>

                {/* Dismiss Text */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  onClick={handleClose}
                  className="mt-6 text-white/40 text-xs hover:text-white/60 transition-colors"
                >
                  Nein danke, später
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MonthlyOfferPopup;
