import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="block shrink-0">
        <Image
          src="/clone-ur-own-logo.png"
          alt="CLONE-UR-OWN"
          width={193}
          height={70}
          className="logo-wordmark h-9 w-auto md:h-10"
          priority
        />
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
        <Link href="/#how" className="transition-colors hover:text-purple-light">
          How it works
        </Link>
        <Link href="/#features" className="transition-colors hover:text-purple-light">
          Features
        </Link>
        <Link href="/#uses" className="transition-colors hover:text-purple-light">
          Use cases
        </Link>
        <Link href="/privacy" className="transition-colors hover:text-purple-light">
          Privacy
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
