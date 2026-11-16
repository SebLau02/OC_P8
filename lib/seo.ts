import { site, status } from "./site";

/** URL publique du site (à définir via NEXT_PUBLIC_SITE_URL en production). */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sebastienlau.dev"
).replace(/\/$/, "");

export const personId = `${siteUrl}/#person`;

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.name,
    jobTitle: site.role,
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    email: `mailto:${site.email}`,
    sameAs: [site.github, site.linkedin].filter(Boolean),
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Ruby on Rails",
      "PostgreSQL",
      "Développement web full stack",
    ],
    knowsLanguage: ["fr", "en"],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "OpenClassrooms" },
      { "@type": "CollegeOrUniversity", name: "Université d'Artois" },
    ],
    ...(status === "en-poste"
      ? { worksFor: { "@type": "Organization", name: site.employer } }
      : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${site.name} — Portfolio`,
    inLanguage: "fr-FR",
    author: { "@id": personId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteUrl}${it.path}`,
    })),
  };
}
