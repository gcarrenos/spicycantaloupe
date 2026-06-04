import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SUPPORT_CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support — CloneUrOwn",
  description:
    "Get help with CloneUrOwn: sign-in, photo capture, 3D previews, approvals, and your custom replica order.",
};

const faqs = [
  {
    q: "How do I sign in to the app?",
    a: "Open CloneUrOwn and enter the order ID and email address from your purchase confirmation. Both must match the order on file. If sign-in fails, email us with your order number and the email you used at checkout.",
  },
  {
    q: "When will my 3D model be ready?",
    a: "After you upload your photos, our team processes your scan. You will receive a notification when your 3D preview is ready to review in the app. Processing time depends on photo quality and current volume.",
  },
  {
    q: "My photos were rejected or I need to retake them",
    a: "The app provides real-time guidance during capture. If photos do not meet quality requirements, follow the in-app prompts to retake specific angles. Contact us if you are unsure which shots to redo.",
  },
  {
    q: "How do I approve or request changes to my model?",
    a: "When your preview is ready, open the 3D viewer in the app, inspect the model, and tap approve when you are satisfied. To request changes, reply through the app or email support with your order ID and a short description of what to adjust.",
  },
  {
    q: "Questions about my order, shipping, or refund",
    a: "Purchases, delivery, and refunds are handled under the terms of your original order. Email support with your order ID and we will route your request to the right team.",
  },
  {
    q: "Privacy or account deletion requests",
    a: "For privacy-specific requests, you may also contact privacy@spicerack.market. See our Privacy Policy for details on your rights and how we handle your data.",
  },
];

export default function SupportPage() {
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
            Support
          </h1>
          <p className="mt-3 text-sm text-muted-dim">Last updated: June 4, 2026</p>

          <section className="mt-10 rounded-2xl border border-purple/25 bg-surface p-8">
            <h2
              className="font-display text-xl font-bold text-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact us
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              CloneUrOwn is operated by{" "}
              <strong className="font-semibold text-text">Spicerack Market, Inc.</strong>{" "}
              We are here to help with the app, your 3D preview, photo capture, and
              order-related questions.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Email{" "}
              <a
                href={`mailto:${SUPPORT_CONTACT_EMAIL}`}
                className="font-medium text-purple-light underline-offset-2 hover:underline"
              >
                {SUPPORT_CONTACT_EMAIL}
              </a>{" "}
              and include your <strong className="font-semibold text-text">order ID</strong>{" "}
              and the <strong className="font-semibold text-text">email</strong> used at
              checkout so we can find your account quickly.
            </p>
            <p className="mt-4 text-sm text-muted-dim">
              We typically respond within 1–2 business days. Urgent production or
              approval deadlines? Mention that in your subject line.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="font-display text-xl font-bold text-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What we can help with
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted">
              <li>Signing in with your order ID and email</li>
              <li>Guided photo capture and retakes</li>
              <li>3D model preview, approval, and revision requests</li>
              <li>App crashes, login errors, or notification issues</li>
              <li>Order status, shipping, and refund inquiries</li>
            </ul>
          </section>

          <section className="mt-12 space-y-8">
            <h2
              className="font-display text-xl font-bold text-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently asked questions
            </h2>
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-display text-lg font-semibold text-text">
                  {item.q}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </section>

          <section className="mt-12 border-t border-muted/10 pt-10">
            <p className="leading-relaxed text-muted">
              See also our{" "}
              <Link
                href="/privacy"
                className="text-purple-light underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="text-purple-light underline-offset-2 hover:underline"
              >
                Terms of Use
              </Link>
              .
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
