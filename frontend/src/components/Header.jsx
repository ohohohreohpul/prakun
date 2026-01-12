import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F7F6F4]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a
              href="/leistungen"
              className={`text-sm font-medium transition-colors hover:text-[#8B2F5F] ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-white'
              }`}
            >
              Leistungen
            </a>
            <a
              href="/gutscheine"
              className={`text-sm font-medium transition-colors hover:text-[#8B2F5F] ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-white'
              }`}
            >
              Gutscheine
            </a>
            <a
              href="/ueber-uns"
              className={`text-sm font-medium transition-colors hover:text-[#8B2F5F] ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-white'
              }`}
            >
              Über uns
            </a>
            <a
              href="/kontakt"
              className={`text-sm font-medium transition-colors hover:text-[#8B2F5F] ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-white'
              }`}
            >
              Kontakt
            </a>
          </nav>

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_newsoul-replica/artifacts/7xzy0yki_604e73fc94532bf2c5ad6522_logoo-p-500-1.png" 
              alt="Prakun Thai Massage" 
              className="h-12 md:h-14"
            />
          </a>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              className="bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-sm px-5 py-2 rounded-full"
            >
              Termin buchen
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-sm font-medium hover:text-[#8B2F5F] ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-white'
              }`}>
                DE <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-[#2B2B2B]' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F6F4] border-t border-[#E5E2DD]">
          <div className="px-4 py-6 space-y-4">
            <a href="/leistungen" className="block text-[#2B2B2B] font-medium py-2">Leistungen</a>
            <a href="/gutscheine" className="block text-[#2B2B2B] font-medium py-2">Gutscheine</a>
            <a href="/ueber-uns" className="block text-[#2B2B2B] font-medium py-2">Über uns</a>
            <a href="/kontakt" className="block text-[#2B2B2B] font-medium py-2">Kontakt</a>
            <hr className="border-[#E5E2DD]" />
            <Button className="w-full bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white rounded-full">
              Termin buchen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;