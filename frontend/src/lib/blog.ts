const GERMAN_DATE = new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const formatGermanDate = (date: Date): string => GERMAN_DATE.format(date);

const WORDS_PER_MINUTE = 200;

/** Rough reading time in minutes for a Markdown body. */
export const readingMinutes = (markdown: string | undefined): number =>
  Math.max(1, Math.round((markdown ?? '').split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE));
