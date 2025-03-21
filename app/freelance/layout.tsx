import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Création d'Applications Web Performantes - Rennes & Remote - Sébastien",
  description:
    "Vous avez besoin d'un site pour mettre en avant vos produits, entreprise ou d'une personne supplémentaire en renfort à votre équipe ? Contactez Sébastien dès maintenant !",
  openGraph: {
    title:
      "Création d'Applications Web Performantes - Rennes & Remote - Sébastien",
    description:
      "Vous avez besoin d'un site pour mettre en avant vos produits, entreprise ou d'une personne supplémentaire en renfort à votre équipe ? Contactez Sébastien dès maintenant !",
    url: "https://wild-fox-labs.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dw7tgqocy/image/upload/v1735297776/Designer_1_ykr6sh.jpg",
        width: 1200,
        height: 630,
        alt: "WildFox Labs - Création d'Applications Web",
      },
    ],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      provider: {
        "@type": "Person",
        name: "Sébastien Lau",
        image:
          "https://res.cloudinary.com/dw7tgqocy/image/upload/v1739543219/schema_pebbzo.png",
        jobTitle: "Développeur Web Freelance",
        worksFor: {
          "@type": "Organization",
          name: "WildFox Labs",
          url: "https://wild-fox-labs.vercel.app/",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "sebastien.lau2021@gmail.com",
          telephone: "+33 60 37 09 37 7",
          availableLanguage: ["French"],
        },
      },
      serviceType: "Développement web, Maintenance et SEO",
      description:
        "Services de développement web, maintenance de sites internet et optimisation SEO pour améliorer la performance et la visibilité en ligne.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services proposés",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Développement web",
              description:
                "Création de sites vitrines, e-commerce et applications web adaptées à vos besoins.",
              serviceType: "Web Development",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "EUR",
              price: "Sur devis",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Maintenance de site",
              description:
                "Ajout de fonctionnalités, corrections de bugs et refonte visuelle pour faire évoluer votre projet.",
              serviceType: "Website Maintenance",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "EUR",
              price: "Sur devis",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Optimisation SEO",
              description:
                "Amélioration des performances et du référencement pour une meilleure visibilité sur Google.",
              serviceType: "SEO Optimization",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "EUR",
              price: "Sur devis",
            },
          },
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "France",
      },
    }),
  },
};
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="bg-primary-2">
        <nav className="flex justify-between shadow-md items-center md:px-20 px-6 py-6">
          <div className="h-14 rounded-sm overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dw7tgqocy/image/upload/v1742592143/logoseb_agrnoz.png"
              alt="logo de wild fox labs"
              className="h-full w-full cover"
              width={60}
              height={60}
            />
          </div>
          <ul className="flex flex-wrap justify-end text-primary-12 gap-4 md:gap-6">
            <li>
              <a href="#about">À propos</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;
