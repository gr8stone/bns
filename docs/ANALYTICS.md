# Page tracking & consent: admin guide

## Where to see the numbers

Page views are tracked with **Vercel Web Analytics** (and page speed with **Speed Insights**).

1. Sign in at <https://vercel.com> with an account on the team that owns this project.
2. Open the project → **Analytics** tab: page views, top pages, referrers, countries, devices, browsers.
3. **Speed Insights** tab: real-visitor load times per page.

First-time setup: in the project, open **Analytics → Enable** (and **Speed Insights → Enable**). The code is already in place; it only needs the switch flipped once.

To give someone admin access to the stats, invite them to the Vercel team (Settings → Members). A Viewer role is enough to read analytics.

## What the numbers mean

The site follows the **Data Protection Act, 2019**: analytics load **only after a visitor clicks "Allow analytics"** in the consent banner. Visitors who decline, or never answer, are not counted. Treat the figures as a reliable *trend* (which pages and stories perform), not a full head-count.

Nothing is stored that identifies a visitor: Vercel's analytics are cookieless and aggregate.

## How consent works (for developers)

| Piece | Where |
|---|---|
| Consent store (choice + timestamp + policy version, in the visitor's browser) | `src/lib/consent.ts` |
| Banner, plus the gate that loads analytics only after opt-in | `src/components/common/ConsentBanner.tsx` |
| Banner wording (editable in Sanity under *Site*) | `src/data/content/site.ts` → `consent` |
| "Cookie settings" link (withdraw or change at any time) | Footer, bottom row |
| Public explanation | `/cookies` and `/privacy` |

**When the Cookies or Privacy policy changes in substance** (e.g. a new analytics tool), update both pages and bump `CONSENT_VERSION` in `src/lib/consent.ts`. Every visitor will then be asked again, which keeps the consent record valid for the new terms.

**Adding any new tracker** (Google Analytics, Meta Pixel, Hotjar, etc.) must go through `ConsentedAnalytics` so it loads only after opt-in, and it must be listed on the Cookies page first.
