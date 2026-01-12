import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const BookingPage = () => {
  useEffect(() => {
    // Initialize Planity widget
    const container = document.getElementById('planity-container');
    
    if (container && !window.planityInitialized) {
      window.planity = {
        key: '-NKx60jJwMpeJjjW_s8g',
        primaryColor: '#8B2F5F',
        container: container,
        options: {
          countryCode: 'DE',
        }
      };

      // Load Planity scripts
      const polyfillScript = document.createElement('script');
      polyfillScript.src = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js';
      document.body.appendChild(polyfillScript);

      const appScript = document.createElement('script');
      appScript.src = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js';
      document.body.appendChild(appScript);

      window.planityInitialized = true;
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="bg-[#F7F6F4] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B2F5F]/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B2F5F]/20 text-[#C4A77D] text-sm font-medium mb-4">
              ONLINE BUCHEN
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Termin{' '}
              <span className="italic font-light text-[#C4A77D]">buchen</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Wählen Sie Ihre gewünschte Behandlung und buchen Sie direkt online Ihren Wunschtermin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Planity Widget Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl shadow-black/5 overflow-hidden border border-[#E5E2DD]"
          >
            {/* Planity Container */}
            <div id="planity-container" className="min-h-[600px]">
              {/* Loading state */}
              <div className="flex items-center justify-center h-[600px] text-[#666666]">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-[#8B2F5F]/20 border-t-[#8B2F5F] rounded-full animate-spin mx-auto mb-4"></div>
                  <p>Buchungssystem wird geladen...</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-[#666666]">
              Fragen zur Buchung? Rufen Sie uns an:{' '}
              <a href="tel:+4940123456" className="text-[#8B2F5F] font-medium hover:underline">
                +49 40 123 456
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Custom Planity Styles */}
      <style>{`
        #planitywl {
          background-color: #F7F6F4 !important;
        }
        @media (min-width: 768px) {
          #planitywl h3 {
            color: #2B2B2B !important;
          }
        }
        #planitywl .planity_bookappointment-button-choose {
          background-color: #8B2F5F !important;
          border-radius: 9999px !important;
        }
        #planitywl .planity_bookappointment-button-choose:hover {
          background-color: #6B1F4F !important;
        }
        .planity_ui_appointment_background > div:nth-child(2) {
          padding: 10px;
        }
        .planity-gift-voucher-button-choose {
          background-color: #8B2F5F !important;
          border-radius: 9999px !important;
        }
        #planitywl > div:nth-child(2) > div:nth-child(2) > div > div > div > div > h2 {
          color: #2B2B2B !important;
        }
        #planitywl > div:nth-child(2) > div:nth-child(2) > div > div > div > h2 {
          color: #2B2B2B !important;
        }
        #planitywl > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > span {
          color: #666666 !important;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default BookingPage;
