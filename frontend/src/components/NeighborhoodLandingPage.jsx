import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Clock, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const services = [
  { name: 'Teilkörpermassage', price: 'ab 24 €', duration: '20–60 min', slug: 'teilkoerpermassage' },
  { name: 'Ganzkörpermassage', price: 'ab 49 €', duration: '45–120 min', slug: 'ganzkoerpermassage' },
  { name: 'Aromaöl-Massage', price: 'ab 36 €', duration: '30–120 min', slug: 'aromaoel-massage' },
  { name: 'Hot Stone Massage', price: 'ab 55 €', duration: '60–90 min', slug: 'hot-stone-massage' },
  { name: 'Kräuterstempel', price: 'ab 75 €', duration: '60–90 min', slug: 'kraeuterstempel-massage' },
  { name: 'Lomi Lomi Nui', price: 'ab 72 €', duration: '60–90 min', slug: 'lomi-lomi-massage' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 }
  })
};

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-white font-medium text-lg group-hover:text-[#C4A77D] transition-colors pr-4">
          {question}
        </span>
        {open
          ? <ChevronUp className="h-5 w-5 text-[#C4A77D] shrink-0" />
          : <ChevronDown className="h-5 w-5 text-white/50 shrink-0 group-hover:text-[#C4A77D] transition-colors" />
        }
      </button>
      {open && (
        <div className="pb-5 text-white/70 leading-relaxed text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

const NeighborhoodLandingPage = ({ neighborhood }) => {
  const {
    name,           // e.g. "Winterhude"
    slug,           // e.g. "winterhude"
    distance,       // e.g. "5 Minuten"
    transport,      // e.g. "U3 Mundsburg"
    description,    // 2-3 sentences about the area
    faq,            // Array of { question, answer }
    heroImage,      // Unsplash URL
  } = neighborhood;

  return (
    <div className="bg-[#F7F6F4] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#C4A77D] text-[#C4A77D]" />
              ))}
              <span className="text-white/60">|</span>
              <span className="text-sm text-white font-medium">4.9/5 · 200+ Bewertungen</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight"
            >
              Thai Massage{' '}
              <span className="italic font-light text-[#C4A77D]">{name}</span>
              <br />– Prakun Hamburg
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed"
            >
              Professionelle Thai-Massage in Ihrer Nähe. Nur {distance} von {name} entfernt –
              authentisch, zertifiziert, seit 2012.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                className="bg-[#8B2F5F] hover:bg-[#7a2852] text-white px-8 py-6 text-base font-semibold rounded-xl"
              >
                <a href="/buchen">Termin buchen</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-xl backdrop-blur-sm"
              >
                <a href="tel:+494022697033">040 22697033</a>
              </Button>
            </motion.div>

            {/* Transport pill */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="mt-8 inline-flex items-center gap-2 text-white/60 text-sm"
            >
              <MapPin className="h-4 w-4 text-[#C4A77D]" />
              Erreichbar über {transport} · Winterhuder Weg 24, Hamburg
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY PRAKUN FOR THIS NEIGHBORHOOD ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B2F5F]/10 text-[#8B2F5F] text-sm font-medium mb-4">
                Thai Massage in {name}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6 leading-tight">
                Die beste Thai-Massage{' '}
                <span className="text-[#8B2F5F]">in der Nähe von {name}</span>
              </h2>
              <p className="text-[#4a4a4a] text-lg leading-relaxed mb-6">
                {description}
              </p>
              <p className="text-[#4a4a4a] leading-relaxed mb-8">
                In unserem Studio am Winterhuder Weg 24 erwartet Sie eine Oase der Ruhe –
                nur {distance} von {name} entfernt. Unsere 100 % zertifizierten Therapeuten
                verbinden jahrtausendealte Thai-Heilkunst mit modernem Wellness-Verständnis.
              </p>
              <ul className="space-y-3">
                {[
                  `Nur ${distance} von ${name} (${transport})`,
                  '4.9 ★ Google-Bewertung – über 200 Gäste',
                  '100 % zertifizierte Therapeuten',
                  'Buchung online & telefonisch möglich',
                  'Täglich 10–20 Uhr geöffnet',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#8B2F5F] mt-0.5 shrink-0" />
                    <span className="text-[#4a4a4a]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stats block */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: '12+', label: 'Jahre Erfahrung', sub: 'Seit 2012 in Hamburg' },
                { value: '4.9★', label: 'Google-Bewertung', sub: 'Über 200 Rezensionen' },
                { value: '10.000+', label: 'Zufriedene Gäste', sub: 'In ganz Hamburg' },
                { value: '100%', label: 'Zertifiziert', sub: 'Alle Therapeuten' },
              ].map((stat) => (
                <div key={stat.value} className="bg-[#F7F6F4] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#8B2F5F] mb-1">{stat.value}</div>
                  <div className="font-semibold text-[#1B2A4A] text-sm">{stat.label}</div>
                  <div className="text-xs text-[#6a6a6a] mt-1">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-[#F7F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B2F5F]/10 text-[#8B2F5F] text-sm font-medium mb-4">
              Unsere Angebote
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A]">
              Massagen für Gäste aus {name}
            </h2>
            <p className="mt-4 text-[#6a6a6a] max-w-xl mx-auto">
              Von der klassischen Thai-Massage bis zur luxuriösen Kräuterstempel-Behandlung –
              alle Angebote buchbar für Ihren Besuch aus {name}.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.a
                key={svc.slug}
                href={`/massage/${svc.slug}`}
                variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.05} viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 border border-[#E8E4DF] hover:border-[#8B2F5F]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-[#1B2A4A] text-lg group-hover:text-[#8B2F5F] transition-colors">
                    {svc.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-[#C4A77D] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6a6a6a]">
                  <span className="font-semibold text-[#8B2F5F] text-base">{svc.price}</span>
                  <span>·</span>
                  <Clock className="h-3.5 w-3.5" />
                  <span>{svc.duration}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button asChild className="bg-[#8B2F5F] hover:bg-[#7a2852] text-white px-10 py-6 text-base font-semibold rounded-xl">
              <a href="/buchen">Jetzt Termin buchen</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── HOW TO GET THERE ── */}
      <section className="py-20 bg-[#1B2A4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <MapPin className="h-8 w-8 text-[#C4A77D] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Adresse</h3>
              <p className="text-white/70">Winterhuder Weg 24<br />22085 Hamburg</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
              <Clock className="h-8 w-8 text-[#C4A77D] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Öffnungszeiten</h3>
              <p className="text-white/70">Mo–Fr: 10–20 Uhr<br />Sa: 10–18 Uhr · So: 11–17 Uhr</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
              <Phone className="h-8 w-8 text-[#C4A77D] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Kontakt</h3>
              <p className="text-white/70">
                <a href="tel:+494022697033" className="hover:text-[#C4A77D] transition-colors">040 22697033</a>
                <br />
                <a href="mailto:info@prakunthaimassage.de" className="hover:text-[#C4A77D] transition-colors text-sm">
                  info@prakunthaimassage.de
                </a>
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-12 rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              title={`Anfahrt Thai Massage ${name} Hamburg`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.3!2d10.0153!3d53.5753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDM0JzMxLjEiTiAxMMKwMDAnNTUuMSJF!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="280"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B2F5F]/20 text-[#C4A77D] text-sm font-medium mb-4">
              Häufige Fragen
            </span>
            <h2 className="text-3xl font-bold text-white">
              Thai Massage {name} – FAQ
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="divide-y divide-white/10"
          >
            {faq.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#8B2F5F] to-[#6a2347] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Bereit für Ihre Auszeit?
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
            className="text-white/80 mb-8 text-lg"
          >
            Nur {distance} von {name} – buchen Sie jetzt Ihren Termin bei Prakun Thai Massage Hamburg.
          </motion.p>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild className="bg-white text-[#8B2F5F] hover:bg-white/90 px-10 py-6 text-base font-semibold rounded-xl">
              <a href="/buchen">Jetzt buchen</a>
            </Button>
            <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10 px-10 py-6 text-base rounded-xl">
              <a href="/leistungen">Alle Massagen ansehen</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeighborhoodLandingPage;
