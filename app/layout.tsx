import type { Metadata } from "next";
import "./globals.css";
import { Raleway, Cutive_Mono } from "next/font/google";

const RalewayMono = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway-mono",
});
const CutiveMono = Cutive_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cutive-mono",
});

export const metadata: Metadata = {
  title: "Sébastien LAU - Développeur freelance",
  description:
    "Développeur React freelance basé sur Rennes, disponible pour des missions 100% distanciel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projectSchema = {
    "@context": "http://schema.org",
    "@type": "Project",
    name: "Portfolio Développeur web Sébastien LAU",
    description:
      "Voici mon portfolio de développeur, vous trouverez y trouverez tout les informations que vous avez besoin",
    url: "https://sebastien-dev-portfolio.vercel.app/",
    image: "@/public/assets/profile.png",
    creator: {
      "@type": "Person",
      name: "Jean Dupont",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Sébastien Lau" />
        {/* Open Graph meta tags **START** */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mon Portfolio" />
        <meta
          property="og:description"
          content="Sébastien, Développeur freelance basé Rennes et dispo en full-remote"
        />
        <meta property="og:image" content="@/public/assets/profile.png" />
        <meta
          property="og:url"
          content="https://sebastien-dev-portfolio.vercel.app/"
        />
        <meta
          property="og:site_name"
          content="Sébastien LAU - Développeur freelance"
        />
        <meta property="og:locale" content="fr_FR" />
        {/* Open Graph meta tags **END** */}
        {/* Schema.org **START** */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectSchema),
          }}
        />
        {/* Schema.org **END** */}
      </head>
      <body
        className={`${RalewayMono.variable} ${CutiveMono.variable} font-sans h-full`}
      >
        {children}
      </body>
    </html>
  );
}
