import React, { useState } from 'react';
import { Instagram, Mail } from 'lucide-react';
import { navigationLinks } from '../data/mockData';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#2B2B2B] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#C4A77D]">Company</h3>
            <ul className="space-y-3">
              {navigationLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#B0B0B0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studios Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#C4A77D]">Studios</h3>
            <ul className="space-y-3">
              {navigationLinks.studios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#B0B0B0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#C4A77D]">Legal</h3>
            <ul className="space-y-3">
              {navigationLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#B0B0B0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-semibold mb-4 text-[#C4A77D]">Sign up for our newsletter</h3>
            <p className="text-sm text-[#B0B0B0] mb-4">
              Stay updated with the latest offers, new studio openings, and wellness tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#3B3B3B] border-[#4B4B4B] text-white placeholder:text-[#888888] rounded-full px-4"
              />
              <Button
                type="submit"
                className="bg-white hover:bg-[#F7F6F4] text-[#2B2B2B] rounded-full px-6"
              >
                Subscribe
              </Button>
            </form>

            {/* Opening Hours */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-2 text-white">Opening Hours</h4>
              <p className="text-sm text-[#B0B0B0]">
                Monday - Sunday | 08:00 - 22:00 | hours vary per studio
              </p>
            </div>

            {/* Contact */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2 text-white">Contact</h4>
              <p className="text-sm text-[#B0B0B0]">
                new: soul Massage Studios GmbH<br />
                Lottumstraße 15, 10119 Berlin<br />
                Mail: contact@newsoul.de
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3B3B3B] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold">
              <span className="text-[#C4A77D]">new:</span> soul
            </span>
            <span className="text-sm text-[#888888]">
              Follow our journey
            </span>
            <a
              href="https://instagram.com/newsoul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B0B0B0] hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#888888]">
            © {new Date().getFullYear()} new: soul Massage Studios GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;