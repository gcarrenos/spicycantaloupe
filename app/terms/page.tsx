import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LEGAL_CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use — CloneUrOwn",
  description: "Terms and conditions for using the CloneUrOwn app and related services.",
};

const sections = [
  {
    title: "Agreement",
    body: `These Terms of Use ("Terms") govern your access to and use of the CloneUrOwn mobile application and related services (collectively, the "Service") operated by Spicerack Market, Inc. ("we," "us," or "our"). By downloading, accessing, or using the Service, you agree to these Terms. If you do not agree, do not use the Service.`,
  },
  {
    title: "Eligibility and access",
    body: `The Service is intended for adults 18 years of age or older who have placed an order that includes a custom 3D replica workflow. You may need a valid order ID and email address to sign in. We may use a third-party service to verify your age at purchase or before you use the app. You are responsible for keeping your login information accurate and for activity that occurs under your account.`,
  },
  {
    title: "The Service",
    body: `CloneUrOwn provides guided photo capture, 3D model generation, in-app preview, approval tools, and communication related to fulfilling your custom replica order. We may update, suspend, or discontinue features at any time. Availability may vary by device, operating system version, and region.`,
  },
  {
    title: "Your content",
    body: `You may upload photographs and other materials ("User Content") to generate your 3D model. You represent that you have the rights needed to submit User Content and that it does not violate any law or third-party rights. You grant us a license to use, store, reproduce, modify, and process User Content solely to provide the Service, fulfill your order, and improve our workflows.`,
  },
  {
    title: "Model review and approval",
    body: `When your 3D preview is ready, you may review it in the app and approve it for production. Approval confirms that the model is acceptable for manufacturing your replica under the terms of your underlying purchase. If you request changes, production may be delayed until issues are resolved. We are not responsible for delays caused by incomplete photos, rejected approvals, or requests for revisions.`,
  },
  {
    title: "Orders and payment",
    body: `Purchases, pricing, refunds, shipping, and delivery of physical replicas are governed by the terms presented at checkout and any order confirmation you receive outside the app. The app itself is provided free of charge for eligible orders unless otherwise stated.`,
  },
  {
    title: "Acceptable use",
    body: `You agree not to misuse the Service, including by attempting unauthorized access, interfering with systems, uploading unlawful or harmful content, impersonating others, or using the Service for purposes unrelated to your order. We may suspend or terminate access if we reasonably believe you have violated these Terms.`,
  },
  {
    title: "Intellectual property",
    body: `The Service, including its software, design, branding, and documentation, is owned by us or our licensors and is protected by intellectual property laws. These Terms do not grant you any rights to our trademarks, logos, or other brand features except as needed to use the Service as intended.`,
  },
  {
    title: "Disclaimers",
    body: `The Service is provided "as is" and "as available" without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that 3D previews will exactly match final manufactured products, that the Service will be uninterrupted, or that defects will be corrected immediately.`,
  },
  {
    title: "Limitation of liability",
    body: `To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits, data, or goodwill, arising from your use of the Service. Our total liability for any claim relating to the Service will not exceed the amount you paid us for the specific order giving rise to the claim during the twelve months before the event, or one hundred U.S. dollars if no such payment applies, whichever is greater.`,
  },
  {
    title: "Privacy",
    body: `Our collection and use of personal information is described in our Privacy Policy. By using the Service, you acknowledge that you have read our Privacy Policy.`,
  },
  {
    title: "Changes",
    body: `We may modify these Terms from time to time. When we do, we will update the "Last updated" date below. Material changes may also be communicated through the app or by email where appropriate. Continued use of the Service after changes become effective constitutes acceptance of the revised Terms.`,
  },
  {
    title: "Contact",
    body: `Questions about these Terms may be sent to the contact below.`,
  },
];

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-muted-dim">Last updated: June 3, 2026</p>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            Our{" "}
            <Link
              href="/privacy"
              className="text-purple-light underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            explains how we handle your data. For questions about these Terms,
            contact us at{" "}
            <a
              href={`mailto:${LEGAL_CONTACT_EMAIL}`}
              className="text-purple-light underline-offset-2 hover:underline"
            >
              {LEGAL_CONTACT_EMAIL}
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
