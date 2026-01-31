# SEO & Google Search Console Setup for NobleShieldHygiene.com ✅

Follow these steps to get your site indexed and visible in Google search results:

1. Create or log into a Google Search Console account: https://search.google.com/search-console
2. Add your site (use the exact domain `https://nobleshieldhygiene.com/`).
3. Verify ownership:
   - Preferred: Use the HTML meta tag verification. In Search Console you'll get a tag like `<meta name="google-site-verification" content="<code>" />`. Replace `GOOGLE_SITE_VERIFICATION_CODE_HERE` in your `index.html` head with that code and click "Verify".
   - Alternate: Upload the HTML verification file Google provides to the site root (e.g. `googleXXXX.html`).
4. Submit the sitemap: In Search Console, go to "Sitemaps" and submit `https://nobleshieldhygiene.com/sitemap.xml`.
5. Test robots.txt in Search Console -> "Robots.txt Tester" to confirm Googlebot can crawl the site.
6. Use the "URL Inspection" tool to request indexing for the home page and any new pages after major updates.
7. Check Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
8. (Optional but recommended) Set up Google Analytics (GA4) or Google Tag Manager and add tracking: create property and add the measurement ID to the site once available.
9. Monitor Search Console for coverage, indexing errors, and performance reports. Use the Performance report to review top queries and impressions.

Notes & placeholders:
- Replace `GOOGLE_SITE_VERIFICATION_CODE_HERE` in `index.html` with the actual verification code from Search Console.
- If you have social pages, update the `sameAs` array in the JSON-LD block in `index.html` with the real profile URLs.
- Keep `sitemap.xml` up to date when you add new pages; change `<lastmod>` accordingly.

If you want, I can also add a `robots.txt` comment with disallow rules for staging areas, or generate a post-deployment checklist to repeat these steps whenever you add pages.
