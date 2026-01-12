import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Leistungen', 'Gutscheine', 'Über uns', 'Kontakt'].map((item, index) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-[#8B2F5F] group ${
                  isScrolled ? 'text-[#2B2B2B]' : 'text-white'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B2F5F] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Logo */}
          <motion.a 
            href="/" 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_newsoul-replica/artifacts/7xzy0yki_604e73fc94532bf2c5ad6522_logoo-p-500-1.png" 
              alt="Prakun Thai Massage" 
              className={`h-12 md:h-14 transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
            />
          </motion.a>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                className="relative overflow-hidden bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#8B2F5F]/30 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Termin buchen</span>
              </Button>
            </motion.div>
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-sm font-medium hover:text-[#8B2F5F] transition-colors ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-white'
              }`}>
                DE <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/80 backdrop-blur-xl border-white/20">
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/90 backdrop-blur-xl border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {['Leistungen', 'Gutscheine', 'Über uns', 'Kontakt'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-[#2B2B2B] font-medium py-2 hover:text-[#8B2F5F] transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <hr className="border-[#E5E2DD]" />
              <Button className="w-full bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white rounded-full">
                Termin buchen
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;