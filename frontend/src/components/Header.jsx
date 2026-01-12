import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingBag, User } from 'lucide-react';
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
              href="/membership"
              className={`text-sm font-medium transition-colors hover:text-[#8B7355] ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-[#2B2B2B]'
              }`}
            >
              Memberships
            </a>
            <a
              href="/careers"
              className={`text-sm font-medium transition-colors hover:text-[#8B7355] ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-[#2B2B2B]'
              }`}
            >
              Careers
            </a>
            <a
              href="/products"
              className={`text-sm font-medium transition-colors hover:text-[#8B7355] ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-[#2B2B2B]'
              }`}
            >
              Products
            </a>
            <a
              href="/gift-cards"
              className={`text-sm font-medium transition-colors hover:text-[#8B7355] ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-[#2B2B2B]'
              }`}
            >
              Gift Cards
            </a>
          </nav>

          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className={`text-xl font-semibold tracking-tight ${
              isScrolled ? 'text-[#2B2B2B]' : 'text-[#2B2B2B]'
            }`}>
              <span className="text-[#C4A77D]">new:</span> soul
            </span>
          </a>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              className="bg-[#2B2B2B] hover:bg-[#3B3B3B] text-white text-sm px-5 py-2 rounded-full"
            >
              Book now
            </Button>
            <a
              href="/login"
              className={`text-sm font-medium transition-colors hover:text-[#8B7355] ${
                isScrolled ? 'text-[#2B2B2B]' : 'text-[#2B2B2B]'
              }`}
            >
              Login
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-[#2B2B2B] hover:text-[#8B7355]">
                EN <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#2B2B2B]"
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
            <a href="/membership" className="block text-[#2B2B2B] font-medium py-2">Memberships</a>
            <a href="/careers" className="block text-[#2B2B2B] font-medium py-2">Careers</a>
            <a href="/products" className="block text-[#2B2B2B] font-medium py-2">Products</a>
            <a href="/gift-cards" className="block text-[#2B2B2B] font-medium py-2">Gift Cards</a>
            <hr className="border-[#E5E2DD]" />
            <a href="/login" className="block text-[#2B2B2B] font-medium py-2">Login</a>
            <Button className="w-full bg-[#2B2B2B] hover:bg-[#3B3B3B] text-white rounded-full">
              Book now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;