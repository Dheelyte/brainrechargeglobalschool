# Brain Recharge Global School - Website

A single-page, photo-forward marketing site built to turn visiting parents into
enrolled families. Next.js 16 (App Router) + Tailwind CSS v4.

## Sections (all on one scrolling page)

Hero → Why Us → About → Programs → Staff → Gallery → Videos (+ Shorts) →
Testimonials → Admissions (inquiry form) → Contact / Footer

## Run it locally

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm start        # run the production build
```

## Where to edit content (no deep coding needed)

| What | File |
| --- | --- |
| School name, contact, phone, email, address, social links, nav | `src/lib/site.ts` |
| Why-Us points, programs, staff, testimonials, gallery photos | `src/lib/content.ts` |
| Colours & fonts (design system) | `src/app/globals.css` |

### Using your own photos
All images are stock placeholders from Unsplash. To use yours: drop files in
`/public` (e.g. `public/classroom.jpg`) and reference them as `/classroom.jpg`
in `src/lib/content.ts` (and the image constants in `Hero.tsx` / `About.tsx`).

## YouTube auto-pull

Videos and Shorts load automatically from your channel. Until configured, the
site shows clearly-labelled **Sample** tiles.

1. Copy `.env.example` to `.env.local`.
2. Create a free **YouTube Data API v3** key in Google Cloud Console.
3. Set `YOUTUBE_API_KEY` and your channel's `YOUTUBE_CHANNEL_ID` (starts `UC…`).

Shorts are detected automatically (videos ≤ 60s) and shown in their own rail.
Results are cached and refresh hourly.

## Admissions inquiries (email)

The form at `#admissions` works out of the box (logs to the server console).
To receive inquiries by email, set `RESEND_API_KEY` and `INQUIRY_TO_EMAIL` in
`.env.local` (free account at [resend.com](https://resend.com)).

## Deploy (free)

Push to GitHub and import the repo at [vercel.com](https://vercel.com). Add the
same environment variables in the Vercel dashboard. Add a custom domain when
ready.
