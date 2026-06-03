# CloneUrOwn — Marketing Site

Landing page for [CloneUrOwn](https://apps.apple.com/ca/app/cloneurown/id6756492557), hosted at [spicycantaloupe.com](https://spicycantaloupe.com).

## Local preview

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Deploy (Vercel)

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Framework: **Next.js**. Deploy.
3. Add `spicycantaloupe.com` under **Settings → Domains**.

Or from the CLI:

```bash
vercel --prod
```

## Project structure

```
├── app/
│   ├── page.tsx          # Home
│   ├── privacy/page.tsx  # Privacy policy
│   ├── globals.css       # Brand colors & effects
│   └── layout.tsx        # SEO metadata
├── components/
│   ├── animated-logo.tsx
│   ├── banana-model-viewer.tsx
│   ├── site-header.tsx
│   └── site-footer.tsx
├── public/
│   ├── clone-ur-own-logo.png
│   └── models/banana/banana.glb
└── lib/constants.ts      # App Store URL, privacy email
```

## Customization

- Replace `public/models/banana/banana.glb` with a customer-approved sample model when available.
- Update `PRIVACY_CONTACT_EMAIL` in `lib/constants.ts` if needed.
- Add `app/opengraph-image.png` (1200×630) for richer social previews.
