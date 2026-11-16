import Link from "next/link";
import { PathLabel } from "@/components/PathLabel";

export default function NotFound() {
  return (
    <section className="ds-section not-found">
      <div className="ds-container section-stack-tight" style={{ gap: 24 }}>
        <div className="ds-section-head">
          <div className="ds-section-head-row">
            <p className="ds-label">Erreur 404</p>
            <PathLabel />
          </div>
        </div>
        <h1 className="ds-display">Page introuvable.</h1>
        <p className="ds-text-lg">Cette page n&apos;existe pas ou a été déplacée.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 8 }}>
          <Link className="ds-btn ds-btn-primary ds-btn-lg" href="/">
            Retour à l&apos;accueil <span className="ds-btn-arrow">→</span>
          </Link>
          <Link className="ds-btn ds-btn-outline ds-btn-lg" href="/projets">
            Voir les projets <span className="ds-btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
