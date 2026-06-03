import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PRIVACY_CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — CloneUrOwn",
  description: "How CloneUrOwn handles your order information, photos, and personal data.",
};

const sections = [
  {
    title: "Overview",
    body: `CloneUrOwn is operated by Spicerack Market, Inc. ("we," "us," or "our"). This policy describes how we handle information when you use the CloneUrOwn iPhone app and related services to capture photos, generate 3D models, and approve replicas tied to your order.`,
  },
  {
    title: "Information you provide",
    body: `To use the app, you may provide an order ID and email address to verify your purchase. You may also upload photographs of your subject from multiple angles for 3D model generation, along with any messages or approvals you send through the app.`,
  },
  {
    title: "How we use information",
    body: `We use this information to authenticate your order, guide photo capture, build and display your 3D preview, process your approval for production, send status notifications you opt into, and communicate with you about your replica. We do not use your content for unrelated advertising.`,
  },
  {
    title: "Storage and security",
    body: `Photos and account-related data are transmitted over encrypted connections and stored using industry-standard safeguards. Access is limited to personnel and systems that need it to fulfill your order. No method of transmission or storage is completely secure; we work to protect your data and review our practices regularly.`,
  },
  {
    title: "Sharing",
    body: `We do not sell your personal information. We may share data with service providers who help us host, process, or deliver 3D models and replicas, under contracts that require confidentiality and appropriate use. We may also disclose information if required by law or to protect rights, safety, and security.`,
  },
  {
    title: "Retention",
    body: `We keep order and model data for as long as needed to complete your replica, provide support, and meet legal obligations. You may contact us to ask about deletion where applicable law allows.`,
  },
  {
    title: "Your choices",
    body: `You can decline optional notifications in your device settings. Questions about access, correction, or deletion requests can be sent to the contact below. Depending on your location, you may have additional privacy rights under local law.`,
  },
  {
    title: "Children",
    body: `CloneUrOwn is not directed at children. We do not knowingly collect personal information from children.`,
  },
  {
    title: "Changes",
    body: `We may update this policy from time to time. The "Last updated" date below will change when we do. Continued use of the app after changes means you accept the revised policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="mesh-bg min-h-screen">
      <SiteHeader />
      <main className="px-6 py-12 md:py-16">
        <article className="prose-policy mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-purple-light"
          >
            ← Back to home
          </Link>
          <h1
            className="mt-6 font-display text-4xl font-bold text-text md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-dim">Last updated: June 3, 2026</p>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            If you have questions about this policy or your data, contact us at{" "}
            <a
              href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
              className="text-purple-light underline-offset-2 hover:underline"
            >
              {PRIVACY_CONTACT_EMAIL}
            </a>
            .
          </p>
          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2
                  className="font-display text-xl font-bold text-text"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
