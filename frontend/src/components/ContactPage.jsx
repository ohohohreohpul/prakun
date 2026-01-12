import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Winterhuder Weg 24", "22085 Hamburg"],
    link: "https://maps.google.com/?q=Winterhuder+Weg+24+22085+Hamburg"
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["+49 40 123 456"],
    link: "tel:+4940123456"
  },
  {
    icon: Mail,
    title: "E-Mail",
    lines: ["info@prakunthaimassage.de"],
    link: "mailto:info@prakunthaimassage.de"
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    lines: ["Mo - So: 10:00 - 20:00", "Termine nach Vereinbarung"]
  }
];

const ContactPage = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#F7F6F4] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B2F5F]/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B2F5F]/20 text-[#C4A77D] text-sm font-medium mb-4">
              KONTAKT
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Wir freuen uns auf{' '}
              <span className="italic font-light text-[#C4A77D]">Sie</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Kontaktieren Sie uns – wir sind gerne für Sie da.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.link ? (
                  <a 
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block h-full"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-[#E5E2DD] h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <item.icon className="h-8 w-8 text-[#8B2F5F] mb-4" />
                      <h3 className="font-bold text-[#2B2B2B] mb-2">{item.title}</h3>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-[#666666] text-sm">{line}</p>
                      ))}
                    </div>
                  </a>
                ) : (
                  <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-[#E5E2DD] h-full">
                    <item.icon className="h-8 w-8 text-[#8B2F5F] mb-4" />
                    <h3 className="font-bold text-[#2B2B2B] mb-2">{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-[#666666] text-sm">{line}</p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section ref={formRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl shadow-black/10 h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.5!2d10.0!3d53.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDM0JzQ4LjAiTiAxMMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sde!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prakun Thai Massage Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Address Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#8B2F5F] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#2B2B2B]">Prakun Thai Massage</p>
                    <p className="text-[#666666] text-sm">Winterhuder Weg 24, 22085 Hamburg</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 border border-[#E5E2DD]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2B2B2B] mb-2">
                  Schreiben Sie uns
                </h2>
                <p className="text-[#666666] mb-8">
                  Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">Nachricht gesendet!</h3>
                    <p className="text-[#666666]">Wir melden uns in Kürze bei Ihnen.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#2B2B2B] mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#E5E2DD] focus:border-[#8B2F5F] focus:ring-2 focus:ring-[#8B2F5F]/20 outline-none transition-all"
                          placeholder="Ihr Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2B2B2B] mb-2">Telefon</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#E5E2DD] focus:border-[#8B2F5F] focus:ring-2 focus:ring-[#8B2F5F]/20 outline-none transition-all"
                          placeholder="+49 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2B2B2B] mb-2">E-Mail *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E2DD] focus:border-[#8B2F5F] focus:ring-2 focus:ring-[#8B2F5F]/20 outline-none transition-all"
                        placeholder="ihre@email.de"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2B2B2B] mb-2">Betreff</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E2DD] focus:border-[#8B2F5F] focus:ring-2 focus:ring-[#8B2F5F]/20 outline-none transition-all bg-white"
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="termin">Terminanfrage</option>
                        <option value="gutschein">Gutschein-Frage</option>
                        <option value="firmenkunden">Firmenkunden</option>
                        <option value="sonstiges">Sonstiges</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2B2B2B] mb-2">Nachricht *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E2DD] focus:border-[#8B2F5F] focus:ring-2 focus:ring-[#8B2F5F]/20 outline-none transition-all resize-none"
                        placeholder="Ihre Nachricht..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full group relative overflow-hidden bg-[#8B2F5F] hover:bg-[#6B1F4F] text-white text-base py-6 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-[#8B2F5F]/30"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" />
                        Nachricht senden
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Booking CTA */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Lieber direkt einen Termin buchen?
            </h2>
            <p className="text-white/60 mb-8">
              Nutzen Sie unser Online-Buchungssystem für eine schnelle und unkomplizierte Terminvereinbarung.
            </p>
            <Link to="/buchen">
              <Button className="group bg-[#C4A77D] hover:bg-[#B39A6E] text-[#1a1a1a] text-base px-8 py-6 rounded-full font-semibold transition-all duration-500 hover:shadow-xl hover:shadow-[#C4A77D]/30 hover:-translate-y-1">
                <span>Online Termin buchen</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
