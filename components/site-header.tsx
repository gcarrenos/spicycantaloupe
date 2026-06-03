import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";
import { APP_STORE_URL } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="block shrink-0">
        <AnimatedLogo size="header" />
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
        <Link href="/#how" className="transition-colors hover:text-purple-light">
          How it works
        </Link>
        <Link href="/#features" className="transition-colors hover:text-purple-light">
          Features
        </Link>
        <Link href="/privacy" className="transition-colors hover:text-purple-light">
          Privacy
        </Link>
        <Link href="/terms" className="transition-colors hover:text-purple-light">
          Terms
        </Link>
      </nav>
      <a
        href={APP_STORE_URL}
        className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold text-text transition"
      >
        Download
      </a>
    </header>
  );
}
