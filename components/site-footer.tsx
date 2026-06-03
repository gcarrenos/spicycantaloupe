import Link from "next/link";
import { APP_STORE_URL } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-muted/10 px-6 py-10 text-center text-sm text-muted-dim">
      <p>
        © {new Date().getFullYear()} CLONE-UR-OWN ·{" "}
        <Link href="/privacy" className="transition-colors hover:text-purple-light">
          Privacy
        </Link>
        {" · "}
        <Link href="/terms" className="transition-colors hover:text-purple-light">
          Terms
        </Link>
        {" · "}
        <a
          href={APP_STORE_URL}
          className="transition-colors hover:text-purple-light"
        >
          App Store
        </a>
      </p>
    </footer>
  );
}
