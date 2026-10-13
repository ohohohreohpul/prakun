# SEO + GEO Analysis — prakunthaimassage.de

**Date:** 2026-10-13 · **Data:** DataForSEO API (Labs, SERP, Business Data, Backlinks, AI Optimization), live crawl of the site · **SERP location:** Hamburg, mobile, German

---

## 1. GEO Readiness Score: 58/100

| Area | Score | Why |
|---|---|---|
| Citability | 16/25 | Homepage has good self-contained fact blocks and a price table; service pages are thin (e.g. Aromaöl: 539 words, only 2 H2s) |
| Structure | 14/20 | Clean H1/H2, FAQs, tables. Homepage H2s are slogans ("Gönnen Sie sich das Besondere."), not questions people ask |
| Multi-modal | 8/15 | Real service photos exist, but neighborhood pages use Unsplash stock images. GBP has only 5 photos |
| Authority & brand | 8/20 | Ratings on the site contradict Google (see §3). 98 referring domains, spam score 45. Zero mentions in Google AI Overviews |
| Technical | 12/20 | SSR is fine and AI crawlers are allowed, llms.txt exists. But there were duplicate URLs, a 404 internal link, a missing favicon, and review schema that doesn't match Google (fixed or flagged below) |

### Platform breakdown (measured)
| Platform | Result |
|---|---|
| **ChatGPT search** | ✅ **Strong.** Prakun was named in both test prompts: #2 for "beste Thai Massage Hamburg" and #1 for "Massage Winterhude". Sources cited: prakunthaimassage.de and treatwell.de. But ChatGPT repeats the site's own "4,9/5 · 200+" claim, flagged as *"laut Anbieter"* (according to the business) |
| **Google AI Overviews** | ❌ No AIO showed up on the 6 money keywords tested. DataForSEO's LLM-mention index has **0** mentions of the domain |
| **Google organic** | ❌ **Page 2–3** for every money keyword (table below) |
| **Google local pack** | ❌ **Missing from all 5 local packs tested.** That's where the bookings come from |

## 2. Where you rank right now (Hamburg, mobile, live)

| Keyword | Monthly vol. (DE) | Prakun position | Who wins |
|---|---|---|---|
| massage hamburg | 9,900 | **23** | relax.express, hamburg.de, ploy-massage.de, treatwell |
| thaimassage hamburg | 8,100 | **18** | samui-thai-spa.de, thaimassagehamburg.de, w-smile.de |
| thai massage hamburg | – | **16** | hamburg.de, reddit, baansiam-hamburg.de |
| massage winterhude | 390 | **23** | samui-thai-spa.de, tripadvisor, hamburg.de |
| lomi lomi massage hamburg | – | **24** | youtube, treatwell |
| massage gutschein hamburg | 320 | **not in top 30** | treatwell, ploy-massage.de |

294 keywords rank in total, but only 9 are in the top 10, and almost all of those are brand searches. Estimated organic traffic is about 425 visits/month. The homepage ranks for nearly everything, while the 12 neighborhood pages barely rank at all.

## 3. 🚨 Critical: your facts contradict your Google Business Profile

| Fact | Website (title, schema, llms.txt, text) | Google Business Profile (live) |
|---|---|---|
| Rating | **4,9 / 5 · 200+ reviews** | **4,7 / 5 · 89 reviews** |
| Saturday | 10:00–18:00 | **11:00–18:00** |
| Sunday | **11:00–17:00** | **closed** |

This hurts you three ways:
- **Local ranking.** Google cross-checks the website against the GBP. Inconsistent facts weaken the trust signal for the local pack.
- **AI answers.** ChatGPT is already spreading "4,9/5 · 200+". If someone checks Google and sees 4.7 / 89, trust drops.
- **Legal risk (DE).** Advertising a rating you can't back up can be challenged as misleading under §5 UWG.

**✅ Resolved (2026-10-13):** the whole site now follows the Google Business Profile: 4,7★ with 89 Google reviews, Mo–Fr 10–20, Sa 11–18, closed on Sunday. That covers titles, meta descriptions, page text, FAQs, the schema `openingHoursSpecification`, the voucher-page schema and llms.txt. **Review count:** the site shows the honest combined count, **4,7★ from 1.000+ reviews (Google 89 + Treatwell 929)**, always labelled "bei Google und Treatwell". Never present it as Google-only. Keep it in sync via `studio.reviewCount` in `mockData.js` and the text.

## 4. Local pack gap (the biggest lever)

Competitors in the packs have **120–320 Google reviews**. Prakun has **89 reviews and 5 photos**.

1. **Reviews.** Send a review link (QR code at the till, plus a link in the Planity confirmation email) after every visit. Target: 150+ reviews within 90 days. Reply to every review.
2. **Photos.** Upload 30–50 real photos: rooms, team, treatments, the outside of the building, the street. Add new ones every week.
3. **Hours.** Bring the GBP and the website into line (see §3).
4. **GBP description.** It starts with an invisible zero-width character ("‍Erleben Sie…"). Rewrite it and include "Thai Massage Hamburg", "Uhlenhorst/Winterhude" and "U3 Mundsburg".
5. **GBP extras.** Add services with prices, link the Planity booking URL, and post weekly updates.

## 5. AI crawler access ✅
robots.txt allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot and PerplexityBot. Nothing is blocked. No change needed.

## 6. llms.txt ✅ (updated)
The file exists and is well structured. I changed its URLs to the canonical trailing-slash versions. **Still to fix:** it contains the disputed rating and hours, so update it once §3 is decided.

## 7. Brand mention analysis
- **Treatwell:** listed, and ChatGPT already uses it as a source. Keep the profile complete and keep reviews coming in.
- **hamburg.de:** shows up in the top 10 for *every* keyword tested. Get a listing or an editorial mention there (business directory, "Massage in Hamburg" guides).
- **Reddit:** ranks #2 for "thai massage hamburg". Genuine mentions in r/hamburg threads carry a lot of weight with Perplexity and ChatGPT. Don't post spam there.
- **Facebook:** the `sameAs` URL `facebook.com/prakunmassage` returns HTTP 400. Check that the page exists, or remove it from the schema.
- **YouTube:** the strongest AI-visibility signal. A 60-second studio tour plus short technique clips, titled "Thai Massage Hamburg".
- **Backlinks:** 98 referring domains, but a spam score of 45. Audit them and disavow obvious junk.

## 8. Server-side rendering ✅
Astro renders all text into the static HTML, so AI crawlers can read the H1, the FAQs and the price table without running JavaScript.

---

## 9. ✅ Fixed in code (this session)

| Fix | Files |
|---|---|
| Homepage, Gutscheine and footer linked to **`/massage/thai-massage` → 404**. Now point to `/thai-massage/` | `index.astro`, `gutscheine.astro`, `mockData.js` |
| **Duplicate URLs:** `/x` and `/x/` both returned 200, and `/thai-massage` had a no-slash canonical that contradicted the sitemap. Now Vercel 308-redirects to the slash version, Astro uses `trailingSlash: 'always'`, and all internal links, canonicals and schema URLs use the slash | `vercel.json`, `astro.config.mjs`, 35 source files, `llms.txt` |
| Removed **self-serving `aggregateRating` (4.9/200)** and the `Review` markup built from on-site testimonials. Google doesn't accept these for a LocalBusiness on its own site, and the numbers contradicted the GBP | `structuredData.ts`, `index.astro` |
| Removed the dead `SearchAction`: Google retired the sitelinks search box, and `/leistungen?q=` has no search behind it | `structuredData.ts` |
| Removed the unverifiable claim "Über 10.000 zufriedene Kunden, 4,9 Sterne bei Google" from the schema description | `structuredData.ts` |

`astro build` passes (37 pages). The built HTML has no internal links without a trailing slash and no broken internal links except the favicon below.

## 9b. ✅ Image attribution fix (ChatGPT showed Prakun's photo for Dara's Thai Wellness)

**Root cause:** `og-image.jpg` (the image every page and the schema declared as *the* Prakun image) was a 281-byte text placeholder, not a JPG. The hero photo was only a CSS background with no alt text. Crawlers had nothing that tied the photo to the Prakun brand, so ChatGPT's image matching gave it to another Winterhude studio.

**Fixed:**
- A real 1200×630 OG image `prakun-thai-massage-hamburg-og.jpg`, with `og:image:width/height/alt` and `twitter:image:alt` on every page. `og-image.jpg` was also replaced with a real JPG.
- Photos now have branded filenames: `prakun-thai-massage-hamburg-behandlung.jpg` and `prakun-thai-massage-hamburg-studio.jpg`.
- The hero is now a real `<img>` with the alt text "Thai-Massage bei Prakun Thai Massage Hamburg, Winterhuder Weg 24" and `fetchpriority="high"`.
- The LocalBusiness schema `image` is now a set of `ImageObject`s with captions naming the business and its address.

**Still to do (you):**
- Upload the **same photos to the Google Business Profile, Treatwell and Instagram**. The same image on several Prakun-owned profiles is the strongest attribution signal.
- If the hero and studio images are AI-generated or stock rather than photos of your real studio, replace them with real photos. AI and Google can never reliably tie generic images to one place.
- Once ChatGPT re-crawls, report the wrong image through the feedback button on the answer.

## 10. Top 5 highest-impact changes still to do

1. ~~Fix the facts (§3)~~ ✅ done. **New:** the monthly-offer popup still says "September 2026" in mid-October; update it or swap in the October offer.
2. **Push the GBP (§4):** reviews, photos, hours. This decides the local pack, which matters more for bookings than organic rank.
3. **Stop the cannibalization.** The homepage *and* `/thai-massage/` both have "Thai Massage Hamburg" as the title target. Make `/thai-massage/` purely informational ("Was ist Thai Massage? Wirkung, Ablauf, Unterschied zu Ölmassage") and link it to the homepage with the anchor text "Thai Massage Hamburg".
4. **Neighborhood pages (12):** they are near-duplicates with stock photos, which carries doorway-page risk, and they barely rank. Keep and enrich the 4 that are really nearby (**Uhlenhorst**, where the studio actually is at 22085, plus Winterhude, Barmbek and Hohenfelde/Eilbek), each with its own walking route, photos and local details. Noindex or 301 the rest (Steilshoop, Bramfeld, Hamm, Wandsbek, Alsterdorf, Eppendorf).
5. **Add a favicon.** `/favicon.svg` is referenced on every page and returns 404, so Google shows a generic globe in mobile results. While you're at it, move the logo off the third-party `customer-assets.emergentagent.com` CDN into `/public`.

## 11. Schema recommendations
- Once the rating is verified, show it as **visible text** with its source ("4,7 ★ bei Google, 89 Bewertungen") and link to the GBP. Don't add `aggregateRating` back.
- Add `Organization` and `founderSchema` (they're already defined in `structuredData.ts` but not used on any page) to `/ueber-uns/`.
- Fix the `openingHoursSpecification` after §3.
- Give every service page an FAQ about the effect, who it's for and who shouldn't have it (contraindications).

## 12. Content reformatting suggestions
- **Homepage H2s:** swap the slogans for questions, e.g. "Entspannung. Im Herzen von Hamburg." → **"Was kostet eine Thai Massage in Hamburg?"** "Gönnen Sie sich das Besondere." → **"Welche Massage passt zu mir?"**
- **Service pages** (start with Aromaöl, Hot Stone, Lomi Lomi): add 3 blocks of 130–170 words each. "Was ist eine [X]-Massage?" (definition in the first 50 words), "Für wen eignet sich…?", and "Ablauf & Preise bei Prakun" with a price table. Target: 1,000+ words per page.
- **/gutscheine/** (not ranking for "massage gutschein hamburg"): put "Massage Gutschein Hamburg ab 49 € – 3 Jahre gültig, sofort per E-Mail" in the first 60 words, add a table of voucher amounts → treatments, and a section answering "Last-Minute-Geschenk?".
- **Location wording:** Winterhuder Weg 24, 22085 is Uhlenhorst, and ChatGPT already calls it that. Say "Hamburg-Uhlenhorst, an der Grenze zu Winterhude" so the address and the claims agree.

---

## 13. Progress log – 2026-10-13 (afternoon)

### Google Business Profile (via Zernio API)
- ✅ October offer post published (Ayurveda Abhyanga 60 Min., 67 € instead of 72 €, valid until 31.10., "Buchen" button).
- ✅ Description rewritten. It now mentions Uhlenhorst/Winterhude, U3 Mundsburg, all treatments and the option "auf Wunsch ohne Öl". The invisible character at the start is gone.
- ✅ 15 services with prices taken from Planity. Before there were 0.
- ❌ Menu URL attribute: Google doesn't allow editing it for this category (INVALID_ATTRIBUTE_NAME).
- ⚠️ Photos: only 2 of your own (the 2022 cover at 540px, plus the logo). Google removed photos on 13.10. Brand photos are **not** suitable for Google, so the profile needs real phone photos.

### Google Maps baseline (DataForSEO, 13.10., mobile, zoom 15)
| Keyword | Studio | Winterhude | Barmbek | Eppendorf | Innenstadt | Eilbek |
|---|---|---|---|---|---|---|
| massage hamburg | #1 | >20 | >20 | >20 | >20 | >20 |
| thai massage hamburg | #1 | >20 | >20 | >20 | >20 | >20 |
| thaimassage | #1 | >20 | >20 | >20 | >20 | >20 |
| massage | #1 | >20 | >20 | >20 | >20 | >20 |

**What this means:** Prakun is #1 at the studio, but only ~2 km away it isn't in the top 20 anywhere. The competitors that win in those areas have 137–322 Google reviews. **Re-measure in 3–4 weeks** with `scratchpad/grid.sh` (≈ €0.05).

### Website (not deployed yet)
- ✅ All 13 service pages now have a visible "Was ist eine …?" answer block (≈105–125 words) and an FAQ on price (generated from `pricing`), suitability and location. The visible FAQ and the FAQPage schema come from the same list. Before, the schema had 3 FAQs that weren't visible on the page. Pages went from ~540 to 760–1,060 words.
- ✅ `/thai-massage/` now has a purely informational title and H1 ("Was ist Thai Massage? Wirkung, Ablauf & Techniken"). Internal links to it use the anchor "Was ist Thai Massage?", so it no longer competes with the homepage.
- ✅ `/gutscheine/`: a direct answer in the first sentence, plus a table of voucher amounts → treatments using Planity prices.
- ✅ Prices corrected to match Planity: Fußmassage 45 Min. 49 € (was 52 €); llms.txt Kräuterstempel ab 75 €, plus Schröpfmassage and Wellness-Pakete added.
- ✅ Brand-photo alt texts and captions no longer claim to show the treatment room at Winterhuder Weg 24.
- ✅ `favicon.svg` added (placeholder "P" monogram in plum; replace with the real logo when available).
- ✅ `scripts-indexnow.md` now reads URLs from the live sitemap. Run it after every deploy.
- Note: Organization + founder schema were already on `/ueber-uns/` (§11 was wrong about that).
