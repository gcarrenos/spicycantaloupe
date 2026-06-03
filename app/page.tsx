import Image from "next/image";
import { AnimatedLogo } from "@/components/animated-logo";
import { BananaModelViewer } from "@/components/banana-model-viewer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { APP_STORE_URL } from "@/lib/constants";

const features = [
  {
    title: "Guided capture",
    body: "Step-by-step prompts and real-time feedback help you photograph your subject from every angle—up to 40 photos per scan.",
    icon: "◎",
  },
  {
    title: "3D preview",
    body: "When your model is ready, rotate, zoom, and inspect every detail in the app before you approve it for production.",
    icon: "◈",
  },
  {
    title: "One-tap approval",
    body: "Happy with the result? Approve with a single tap and we start your custom replica. Need changes? Our team can help.",
    icon: "⬡",
  },
];

const steps = [
  {
    n: "01",
    label: "Sign in",
    detail: "Enter your order ID and email to link the app to your purchase.",
  },
  {
    n: "02",
    label: "Upload photos",
    detail: "Use the in-app camera or photo library with guided capture tips.",
  },
  {
    n: "03",
    label: "Review & approve",
    detail: "Preview your 3D model, then approve it when you're ready for production.",
  },
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
              <AnimatedLogo size="hero" className="mb-8" />
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-light backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green" />
                Custom 3D replicas on iPhone
              </p>
              <h1
                className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Capture photos.
                <br />
                <span className="text-purple-light">Approve your 3D model.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                CloneUrOwn walks you through photo capture, builds your 3D preview,
                and lets you approve your replica for production—all from your
                iPhone.
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
                Free on iPhone · Secure, guided photo capture
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="pulse-ring absolute h-72 w-72 rounded-full bg-purple/20 md:h-96 md:w-96" />
              <div className="float-slow relative w-full max-w-md rounded-3xl border border-muted/15 bg-surface p-8 shadow-2xl shadow-bg-deep/80">
                <div className="mb-6 flex items-center justify-between text-xs font-medium text-muted">
                  <span>Interactive preview</span>
                  <span className="rounded-full bg-purple-deep/60 px-2 py-0.5 text-purple-light">
                    Drag to rotate
                  </span>
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl bg-bg-deep">
                  <BananaModelViewer />
                </div>
                <p className="mt-4 text-center text-xs text-muted-dim">
                  Sample 3D model — your replica preview works the same way in the
                  app.
                </p>
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
              Everything in one app
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
              From your first photo to final approval—clear guidance, a 3D viewer,
              and direct communication with our team when you need it.
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
            <p className="mt-4 max-w-2xl text-muted">
              After you place an order, download CloneUrOwn and follow these three
              steps. We&apos;ll notify you when your 3D model is ready to review.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="relative rounded-2xl border border-muted/10 bg-surface p-8"
                >
                  <span className="font-display text-5xl font-extrabold text-purple/35">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-text">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-muted">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-muted/10 bg-surface px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-display text-3xl font-bold text-text md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Secure & private
            </h2>
            <p className="mt-4 text-muted">
              Your photos and personal data are encrypted and handled with care
              throughout capture, model generation, and production. Read our{" "}
              <a
                href="/privacy"
                className="text-purple-light underline-offset-2 hover:underline"
              >
                privacy policy
              </a>{" "}
              for details.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
