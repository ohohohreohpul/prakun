import React, { useState } from 'react';
import { Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { navigationLinks, studio } from '../data/mockData';
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & About */}
          <div className="col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_newsoul-replica/artifacts/7xzy0yki_604e73fc94532bf2c5ad6522_logoo-p-500-1.png" 
              alt="Prakun Thai Massage" 
              className="h-14 mb-4 brightness-0 invert"
            />
            <p className="text-sm text-[#B0B0B0] mb-4 max-w-xs">
              Professionelle Thai-Massage im Herzen von Hamburg. Mit Wärme, Respekt und Sorgfalt seit 2012.
            </p>
            <a
              href="https://instagram.com/prakunmassage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#B0B0B0] hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm">Folgen Sie uns</span>
            </a>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#C4A77D]">Leistungen</h3>
            <ul className="space-y-3">
              {navigationLinks.services.map((link) => (
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
            <h3 className="text-sm font-semibold mb-4 text-[#C4A77D]">Rechtliches</h3>
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

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#C4A77D]">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-[#B0B0B0]">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{studio.address}<br />{studio.city}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>{studio.hours}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${studio.email}`} className="hover:text-white transition-colors">
                  {studio.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-[#3B3B3B] pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold mb-2 text-white">Newsletter</h3>
            <p className="text-sm text-[#B0B0B0] mb-4">
              Erhalten Sie exklusive Angebote und Wellness-Tipps.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Ihre E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#3B3B3B] border-[#4B4B4B] text-white placeholder:text-[#888888] rounded-full px-4"
              />
              <Button
                type="submit"
                className="bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white rounded-full px-6"
              >
                Anmelden
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3B3B3B] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#888888]">
            © {new Date().getFullYear()} Prakun Thai Massage. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-[#888888]">
            Professionelle Thai-Massage seit 2012
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;