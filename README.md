# Spicy Cantaloupe — Landing Page

Marketing site for [spicycantaloupe.com](https://spicycantaloupe.com): 3D scanning with LiDAR and photogrammetry.

## Local preview

```bash
cd ~/spicycantaloupe
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Fastest way to publish on Vercel

### Option A — Deploy from this folder (fastest, ~2 minutes)

1. Install the CLI once: `npm i -g vercel`
2. From this directory:

```bash
cd ~/spicycantaloupe
vercel
```

3. Accept defaults (creates a new project). For production:

```bash
vercel --prod
```

4. In the [Vercel dashboard](https://vercel.com/dashboard) → your project → **Settings → Domains** → add `spicycantaloupe.com` and `www.spicycantaloupe.com`.
5. At your domain registrar, set DNS as Vercel instructs (usually `A` → `76.76.21.21` and `CNAME` `www` → `cname.vercel-dns.com`).

### Option B — GitHub + auto deploy (best for updates)

1. Create a new repo (or monorepo) containing only the `spicycantaloupe/` folder—or push this folder as the repo root.
2. [vercel.com/new](https://vercel.com/new) → Import the repo.
3. Leave **Root Directory** empty (this repo is the app root).
4. Framework preset: **Next.js**. Deploy.
5. Add custom domain in project settings.

### Option C — One-click (if you use Vercel’s Git integration)

Push to `main` on a connected repo; every push redeploys automatically.

## Customization checklist

- [ ] Swap waitlist `mailto:` form for [Vercel KV waitlist](https://vercel.com/templates/next.js/waitlist), Formspree, or Resend.
- [ ] Add App Store / TestFlight links when ready.
- [ ] Add `app/opengraph-image.png` (1200×630) for social previews.
- [ ] Point `hello@spicycantaloupe.com` to your inbox.

## Project structure

```
spicycantaloupe/
├── app/
│   ├── globals.css   # Brand tokens (melon, rind, seed)
│   ├── layout.tsx    # SEO metadata
│   └── page.tsx      # Landing page
├── package.json
└── README.md
```

Deploy as its own Vercel project (root directory is this folder).
