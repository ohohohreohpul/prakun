import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials as curatedTestimonials, studio } from '../data/mockData';

const VIDEO_ID = 'vkoWPuPb9lc';
const AUTOPLAY_MS = 6000;
const GOOGLE_REVIEWS_URL = 'https://maps.google.com/?cid=13843017141683311872';

const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' }) : null;

const Stars = ({ count, size = 'h-4 w-4' }) => (
  <div className="flex gap-1" role="img" aria-label={`${count} von 5 Sternen`}>
    {Array.from({ length: count }, (_, i) => (
      <Star key={i} className={`${size} fill-[#C4A77D] text-[#C4A77D]`} aria-hidden="true" />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <article className="relative h-full bg-white rounded-3xl p-6 md:p-7 shadow-lg shadow-black/5 border border-[#E5E2DD] flex flex-col">
    <div className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-[#7B2958]/10 flex items-center justify-center">
      <Quote className="h-4 w-4 text-[#7B2958]" aria-hidden="true" />
    </div>
    <div className="pt-2 mb-4">
      <Stars count={review.rating} />
    </div>
    <blockquote className="text-[#2B2B2B] text-base leading-relaxed mb-6 flex-1 line-clamp-[8]">
      „{review.text}“
    </blockquote>
    <footer className="flex items-center gap-3 pt-4 border-t border-[#E5E2DD]">
      <div className="w-10 h-10 bg-[#7B2958]/10 rounded-full flex items-center justify-center shrink-0">
        <span className="text-[#7B2958] font-bold text-sm">{review.author.charAt(0)}</span>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#2B2B2B] truncate">
          {review.authorUrl ? (
            <a href={review.authorUrl} target="_blank" rel="noopener nofollow" className="hover:underline">
              {review.author}
            </a>
          ) : (
            review.author
          )}
        </p>
        <p className="text-xs text-[#666666]">
          via {review.source}
          {review.date && ` · ${formatDate(review.date)}`}
        </p>
      </div>
    </footer>
  </article>
);

const VideoCard = ({ onOpen }) => (
  <button
    type="button"
    onClick={onOpen}
    className="group relative h-full w-full text-left rounded-3xl overflow-hidden bg-white border border-[#E5E2DD] shadow-lg shadow-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2958]"
    aria-label="Video-Kundenstimme abspielen"
  >
    <div className="relative aspect-[4/3]">
      <img
        src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
        alt="Kundenstimme als Video – Prakun Thai Massage Hamburg"
        loading="lazy"
        width="480"
        height="360"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
          <Play className="h-7 w-7 text-[#7B2958] ml-1" fill="#7B2958" aria-hidden="true" />
        </span>
      </div>
      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#7B2958] text-white text-xs font-medium shadow-lg">
        VIDEO
      </span>
    </div>
    <div className="p-6">
      <Stars count={5} />
      <p className="text-[#2B2B2B] font-semibold mt-3">„Eine wunderbare Erfahrung“</p>
      <p className="text-xs text-[#666666] mt-1">Video-Kundenstimme</p>
    </div>
  </button>
);

const usePrefersReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(query.matches);
    const onChange = (e) => setPrefersReduced(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);
  return prefersReduced;
};

const useAutoplay = (emblaApi, isPaused) => {
  useEffect(() => {
    if (!emblaApi || isPaused) return undefined;
    const timer = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [emblaApi, isPaused]);
};

const Testimonials = ({
  reviews = curatedTestimonials,
  rating = studio.rating,
  ratingCount = null,
  mapsUrl = null,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useAutoplay(emblaApi, isHovered || isVideoOpen || prefersReducedMotion);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return undefined;
    onSelect();
    emblaApi.on('select', onSelect).on('reInit', onSelect);
    return () => emblaApi.off('select', onSelect).off('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const ratingLabel = rating.toLocaleString('de-DE', { minimumFractionDigits: 1 });
  const reviewsLink = mapsUrl || GOOGLE_REVIEWS_URL;

  return (
    <section
      className="bg-[#F7F6F4] py-20 md:py-32 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7B2958]/10 text-[#7B2958] text-sm font-medium mb-4">
              BEWERTUNGEN
            </span>
            <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-[#666666] text-lg max-w-2xl">
              Gäste bewerten uns im Durchschnitt mit{' '}
              <span className="font-bold text-[#2B2B2B]">{ratingLabel} von 5</span> Sternen
              {ratingCount
                ? ` (${ratingCount} Bewertungen bei Google, über 1.000 inkl. Treatwell).`
                : ' (über 1.000 Bewertungen bei Google und Treatwell).'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-full bg-white border border-[#E5E2DD] flex items-center justify-center text-[#2B2B2B] hover:border-[#7B2958] hover:text-[#7B2958] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2958]"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full bg-[#7B2958] text-white flex items-center justify-center hover:bg-[#5e1f43] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7B2958]"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden -mx-2 pt-4"
          ref={emblaRef}
          role="region"
          aria-roledescription="Karussell"
          aria-label="Kundenbewertungen"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setIsHovered(true)}
          onBlurCapture={() => setIsHovered(false)}
        >
          <div className="flex">
            <div className="flex-[0_0_88%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-2">
              <VideoCard onOpen={() => setIsVideoOpen(true)} />
            </div>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-[0_0_88%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-2"
                role="group"
                aria-roledescription="Bewertung"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2" aria-hidden="true">
            {Array.from({ length: snapCount }, (_, i) => (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? 'w-8 bg-[#7B2958]' : 'w-2 bg-[#7B2958]/25'
                }`}
              />
            ))}
          </div>
          <a
            href={reviewsLink}
            target="_blank"
            rel="noopener"
            className="text-sm font-medium text-[#7B2958] hover:underline"
          >
            Alle Bewertungen auf Google ansehen →
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Video-Kundenstimme"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
                title="Kundenbewertung - Prakun Thai Massage"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Video schließen"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
