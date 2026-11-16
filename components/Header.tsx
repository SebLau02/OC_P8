"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CvButton } from "./CvButton";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const current = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);
  const close = () => setOpen(false);

  return (
    <header className={`ds-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="ds-header-inner">
        <Logo onClick={close} />
        <nav className="ds-nav" aria-label="Navigation principale">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={current(l.href) ? "page" : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ds-header-actions">
          <span className="ds-nav-cv">
            <CvButton size="sm" />
          </span>
          <button
            className="ds-menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="ds-menu-icon" aria-hidden="true" />
            Menu
          </button>
        </div>
      </div>
      <div className={`ds-menu${open ? " is-open" : ""}`} id="menu-mobile">
        <div>
          <ul>
            {links.map((l, i) => (
              <li key={l.href}>
                <Link href={l.href} onClick={close} aria-current={current(l.href) ? "page" : undefined}>
                  {l.label}
                  <span className="ds-mono">0{i + 1}</span>
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: "var(--space-4)" }}>
              <CvButton />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
