# Tactil

Inclusive tactile robotics education — launched by Overtime FTC #33611.

## Stack

- **Next.js** (App Router), TypeScript, Tailwind CSS
- **Supabase** — Auth, PostgreSQL, Storage (optional for guides)

## Setup

1. **Install and run**
   ```bash
   npm install
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

2. **Supabase**
   - Create a project at [supabase.com](https://supabase.com).
   - Copy `.env.example` to `.env.local` and set:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - In Supabase SQL Editor, run the migration:
     - `supabase/migrations/001_initial.sql`
   - Optional: create a Storage bucket `guides` and upload `recreation-guide.pdf` and `translation-guide.pdf`; then update `lib/guides.ts` to use signed URLs if you want access control.

3. **Guides**
   - Place PDFs in `public/guides/` as `recreation-guide.pdf` and `translation-guide.pdf`, or serve from Supabase Storage and point `lib/guides.ts` to those URLs.

## Structure

- **Home** — Hero, What is Tactil, Flagship Product, Why It Matters, Proof/Credibility, Overtime Origin, CTA
- **Shop** — FIRST Series (+ Incoming teasers), product page with request purchase and guide links
- **Community** — Teams, Chapters, Partners, Map (Leaflet), Apply (Partner / Chapter), Resources
- **Profile** — Account, purchase requests, application status, resource links (requires login)
- **Login / Register** — Supabase Auth

Content is driven by `content/home.ts`, `content/shop.ts`, and `content/community.ts` for easy edits.
