const features = [
  {
    title: "LiDAR depth",
    body: "Pro iPhones and iPads capture millimeter-scale geometry in real time—ideal for rooms, furniture, and products.",
    icon: "◎",
  },
  {
    title: "Photogrammetry",
    body: "Walk around your subject and we fuse hundreds of photos into a textured mesh that looks great on the web.",
    icon: "◈",
  },
  {
    title: "Export anywhere",
    body: "Share GLB, USDZ, or point clouds. Drop models into Blender, Unity, Shopify AR, or your own pipeline.",
    icon: "⬡",
  },
];

const steps = [
  { n: "01", label: "Point & scan", detail: "Follow the on-screen guide—LiDAR fills in depth as you move." },
  { n: "02", label: "Refine", detail: "Crop, clean noise, and merge photo detail automatically." },
  { n: "03", label: "Publish", detail: "One tap to preview in AR or download production-ready assets." },
];

const useCases = [
  "E‑commerce product shots",
  "Real estate & interiors",
  "Museums & artifacts",
  "Game & VFX reference",
  "Insurance documentation",
  "Custom manufacturing",
];

export default function Home() {
  return (
    <div className="mesh-bg min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-melon text-lg font-bold text-white shadow-lg shadow-melon/30"
            aria-hidden
          >
            🍈
          </span>
          <span
            className="font-display text-lg font-bold tracking-tight text-rind"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Spicy Cantaloupe
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-rind/80 md:flex">
          <a href="#how" className="hover:text-melon transition-colors">
            How it works
          </a>
          <a href="#features" className="hover:text-melon transition-colors">
            Features
          </a>
          <a href="#uses" className="hover:text-melon transition-colors">
            Use cases
          </a>
        </nav>
        <a
          href="#waitlist"
          className="rounded-full bg-rind px-5 py-2.5 text-sm font-semibold text-frost transition hover:bg-ink"
        >
          Get early access
        </a>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-8 md:pb-32 md:pt-16">
          <div className="scan-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-melon/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-melon backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-melon animate-pulse" />
                3D scanning — now in your pocket
              </p>
              <h1
                className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-rind sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Scan anything.
                <br />
                <span className="text-melon">Ship a 3D model.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-rind/75">
                Spicy Cantaloupe blends{" "}
                <strong className="font-semibold text-rind">LiDAR</strong> and{" "}
                <strong className="font-semibold text-rind">photogrammetry</strong>{" "}
                so you can capture objects, spaces, and products—and share
                production-ready 3D assets in minutes, not days.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#waitlist"
                  className="inline-flex items-center gap-2 rounded-full bg-melon px-8 py-4 text-base font-semibold text-white shadow-xl shadow-melon/35 transition hover:bg-melon-light"
                >
                  Join the waitlist
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#how"
                  className="rounded-full border border-rind/15 bg-white/80 px-8 py-4 text-base font-semibold text-rind backdrop-blur transition hover:border-melon/40"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-6 text-sm text-rind/50">
                Built for iPhone & iPad with LiDAR · No studio required
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="pulse-ring absolute h-72 w-72 rounded-full bg-melon/20 md:h-96 md:w-96" />
              <div className="float-slow relative w-full max-w-md rounded-3xl border border-rind/10 bg-white/90 p-8 shadow-2xl shadow-rind/10 backdrop-blur">
                <div className="mb-6 flex items-center justify-between text-xs font-medium text-rind/50">
                  <span>Live capture</span>
                  <span className="rounded-full bg-seed/30 px-2 py-0.5 text-rind">
                    LiDAR + photos
                  </span>
                </div>
                <div
                  className="aspect-square rounded-2xl bg-gradient-to-br from-rind via-rind/90 to-melon/80 p-6"
                  role="img"
                  aria-label="Stylized 3D wireframe preview"
                >
                  <svg
                    viewBox="0 0 200 200"
                    className="h-full w-full text-white/90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 20 L180 70 L160 160 L40 160 L20 70 Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <path
                      d="M100 20 L100 100 M20 70 L100 100 M180 70 L100 100 M40 160 L100 100 M160 160 L100 100"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.35"
                    />
                    <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.9" />
                    <path
                      d="M60 120 Q100 140 140 120"
                      stroke="var(--color-seed)"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-xl bg-frost p-3">
                    <p className="font-display text-lg font-bold text-melon">2.4M</p>
                    <p className="text-rind/50">points</p>
                  </div>
                  <div className="rounded-xl bg-frost p-3">
                    <p className="font-display text-lg font-bold text-melon">4K</p>
                    <p className="text-rind/50">texture</p>
                  </div>
                  <div className="rounded-xl bg-frost p-3">
                    <p className="font-display text-lg font-bold text-melon">&lt;3m</p>
                    <p className="text-rind/50">scan time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-rind/8 bg-white/60 px-6 py-20 backdrop-blur"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              className="font-display text-center text-3xl font-bold text-rind md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Two technologies. One tap.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-rind/65">
              LiDAR gives you accurate depth instantly; photogrammetry adds
              rich color and fine surface detail. We handle the fusion—you get
              the model.
            </p>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {features.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl border border-rind/8 bg-frost p-8 transition hover:border-melon/30 hover:shadow-lg hover:shadow-melon/5"
                >
                  <span className="text-3xl text-melon" aria-hidden>
                    {f.icon}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-rind">
                    {f.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-rind/70">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2
              className="font-display text-3xl font-bold text-rind md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How it works
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="relative rounded-2xl bg-rind p-8 text-frost"
                >
                  <span className="font-display text-5xl font-extrabold text-melon/40">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">{s.label}</h3>
                  <p className="mt-2 text-frost/75">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="uses"
          className="border-t border-rind/8 bg-rind px-6 py-20 text-frost"
        >
          <div className="mx-auto max-w-6xl md:flex md:items-start md:justify-between md:gap-16">
            <div className="md:max-w-md">
              <h2
                className="font-display text-3xl font-bold md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Built for makers & teams
              </h2>
              <p className="mt-4 text-frost/75">
                From solo creators to studios—if you need a faithful digital
                twin without a $50k rig, you&apos;re in the right place.
              </p>
            </div>
            <ul className="mt-10 grid flex-1 gap-3 sm:grid-cols-2 md:mt-0">
              {useCases.map((u) => (
                <li
                  key={u}
                  className="flex items-center gap-3 rounded-xl border border-frost/10 bg-frost/5 px-4 py-3 text-sm font-medium"
                >
                  <span className="text-melon-light" aria-hidden>
                    ✓
                  </span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="waitlist" className="px-6 py-24">
          <div className="mx-auto max-w-xl rounded-3xl border border-melon/20 bg-white p-10 text-center shadow-xl shadow-melon/10 md:p-14">
            <h2
              className="font-display text-3xl font-bold text-rind"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get early access
            </h2>
            <p className="mt-3 text-rind/70">
              We&apos;re opening beta spots soon. Leave your email and we&apos;ll
              ping you when TestFlight opens.
            </p>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              action="mailto:hello@spicycantaloupe.com"
              method="GET"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="body"
                type="email"
                required
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-full border border-rind/15 px-5 py-3.5 text-rind outline-none ring-melon/40 focus:ring-2"
              />
              <button
                type="submit"
                className="rounded-full bg-melon px-8 py-3.5 font-semibold text-white transition hover:bg-melon-light"
              >
                Notify me
              </button>
            </form>
            <p className="mt-4 text-xs text-rind/45">
              Replace this form with{" "}
              <a
                href="https://vercel.com/templates/next.js/waitlist"
                className="underline hover:text-melon"
              >
                Vercel Waitlist
              </a>
              , Resend, or your CRM when you&apos;re ready.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-rind/8 px-6 py-10 text-center text-sm text-rind/50">
        <p>
          © {new Date().getFullYear()} Spicy Cantaloupe ·{" "}
          <a
            href="https://spicycantaloupe.com"
            className="hover:text-melon transition-colors"
          >
            spicycantaloupe.com
          </a>
        </p>
      </footer>
    </div>
  );
}
