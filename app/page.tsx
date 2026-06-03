import Image from "next/image";
import { BananaModelViewer } from "@/components/banana-model-viewer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { APP_STORE_URL } from "@/lib/constants";

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
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-8 md:pb-32 md:pt-16">
          <div className="scan-grid pointer-events-none absolute inset-0 opacity-80" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Image
                src="/clone-ur-own-logo.png"
                alt="CLONE-UR-OWN"
                width={280}
                height={101}
                className="logo-wordmark mb-8 h-14 w-auto md:h-[4.25rem]"
                priority
              />
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-light backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green" />
                3D scanning — now in your pocket
              </p>
              <h1
                className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Scan anything.
                <br />
                <span className="text-purple-light">Ship a 3D model.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                Spicy Cantaloupe blends{" "}
                <strong className="font-semibold text-text">LiDAR</strong> and{" "}
                <strong className="font-semibold text-text">photogrammetry</strong>{" "}
                so you can capture objects, spaces, and products—and share
                production-ready 3D assets in minutes, not days.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={APP_STORE_URL}
                  className="btn-primary inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-text transition"
                >
                  <Image
                    src="/cloneurown-icon.jpg"
                    alt=""
                    width={28}
                    height={28}
                    className="rounded-[22%]"
                    aria-hidden
                  />
                  Download on the App Store
                </a>
                <a
                  href="#how"
                  className="rounded-full border border-muted/25 bg-surface px-8 py-4 text-base font-semibold text-text transition hover:border-purple/40"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-dim">
                Free on iPhone · Guided photo capture for your 3D replica
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="pulse-ring absolute h-72 w-72 rounded-full bg-purple/20 md:h-96 md:w-96" />
              <div className="float-slow relative w-full max-w-md rounded-3xl border border-muted/15 bg-surface p-8 shadow-2xl shadow-bg-deep/80">
                <div className="mb-6 flex items-center justify-between text-xs font-medium text-muted">
                  <span>Model preview</span>
                  <span className="rounded-full bg-purple-deep/60 px-2 py-0.5 text-purple-light">
                    Drag to rotate
                  </span>
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl bg-bg-deep">
                  <BananaModelViewer />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-xl bg-surface-raised p-3">
                    <p className="font-display text-lg font-bold text-green">2.4M</p>
                    <p className="text-muted-dim">points</p>
                  </div>
                  <div className="rounded-xl bg-surface-raised p-3">
                    <p className="font-display text-lg font-bold text-green">4K</p>
                    <p className="text-muted-dim">texture</p>
                  </div>
                  <div className="rounded-xl bg-surface-raised p-3">
                    <p className="font-display text-lg font-bold text-green">&lt;3m</p>
                    <p className="text-muted-dim">scan time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-muted/10 bg-bg-deep/50 px-6 py-20 backdrop-blur"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              className="font-display text-center text-3xl font-bold text-text md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Two technologies. One tap.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
              LiDAR gives you accurate depth instantly; photogrammetry adds
              rich color and fine surface detail. We handle the fusion—you get
              the model.
            </p>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {features.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl border border-muted/10 bg-surface p-8 transition hover:border-purple/30 hover:shadow-lg hover:shadow-purple/10"
                >
                  <span className="text-3xl text-purple-light" aria-hidden>
                    {f.icon}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-text">
                    {f.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2
              className="font-display text-3xl font-bold text-text md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How it works
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="relative rounded-2xl border border-muted/10 bg-surface p-8"
                >
                  <span className="font-display text-5xl font-extrabold text-purple/35">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-text">{s.label}</h3>
                  <p className="mt-2 text-muted">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="uses"
          className="border-t border-muted/10 bg-surface px-6 py-20"
        >
          <div className="mx-auto max-w-6xl md:flex md:items-start md:justify-between md:gap-16">
            <div className="md:max-w-md">
              <h2
                className="font-display text-3xl font-bold text-text md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Built for makers & teams
              </h2>
              <p className="mt-4 text-muted">
                From solo creators to studios—if you need a faithful digital
                twin without a $50k rig, you&apos;re in the right place.
              </p>
            </div>
            <ul className="mt-10 grid flex-1 gap-3 sm:grid-cols-2 md:mt-0">
              {useCases.map((u) => (
                <li
                  key={u}
                  className="flex items-center gap-3 rounded-xl border border-muted/15 bg-bg/60 px-4 py-3 text-sm font-medium text-text"
                >
                  <span className="text-green" aria-hidden>
                    ✓
                  </span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
