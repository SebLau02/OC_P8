import { site } from "@/lib/site";
import { CvButton } from "./CvButton";

export function Footer() {
  return (
    <footer className="ds-footer">
      <div className="ds-footer-inner">
        <div className="ds-footer-col">
          <p className="ds-h4">{site.name}</p>
          <p className="ds-text-sm" style={{ color: "var(--foreground-secondary)" }}>
            Développeur Web
          </p>
          <a className="ds-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <div className="ds-footer-col">
          <p className="ds-label">Liens</p>
          <ul>
            <li>
              <a className="ds-link-arrow" href={site.github} rel="noopener noreferrer">
                GitHub <span className="ds-arrow">↗</span>
              </a>
            </li>
            {site.linkedin && (
              <li>
                <a className="ds-link-arrow" href={site.linkedin} rel="noopener noreferrer">
                  LinkedIn <span className="ds-arrow">↗</span>
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="ds-footer-col">
          <p className="ds-label">CV</p>
          <CvButton />
        </div>
        <div className="ds-footer-bottom">
          <p className="ds-caption">© {new Date().getFullYear()} {site.name}</p>
          <a className="ds-link ds-link-muted ds-mono" href="#top">
            ↑ Haut de page
          </a>
        </div>
      </div>
    </footer>
  );
}
