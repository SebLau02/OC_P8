import Link from "next/link";
import { site } from "@/lib/site";

/** Logo « chemin » : ~/seblau */
export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      className="ds-logo"
      href="/"
      onClick={onClick}
      aria-label={`${site.name} — accueil`}
    >
      <span className="logo-dim" aria-hidden="true">
        ~/
      </span>
      seblau
    </Link>
  );
}
