import type { Metadata } from "next";
import "./globals.css";
import { Raleway, Cutive_Mono } from "next/font/google";
import { Footer } from "./_components/footer";

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
  title: "Sébastien LAU - Portfolio déveoppeur",
  description:
    "Voici mon portfolio de développeur, vous y trouverez tout les informations dont vous avez besoin",
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
      "Voici mon portfolio de développeur, vous y trouverez tout les informations dont vous avez besoin",
    url: "https://sebastienlau-dev.vercel.app/",
    image:
      "https://res.cloudinary.com/dw7tgqocy/image/upload/v1735297776/Designer_1_ykr6sh.jpg",
    creator: {
      "@type": "Person",
      name: "Sébastien LAU",
    },
  };

  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <head>
        <meta name="apple-mobile-web-app-title" content="seb-dev" />
        {/* Open Graph meta tags **START** */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sébastien, développeur web" />
        <meta
          property="og:description"
          content="Voici mon portfolio de développeur, vous y trouverez tout les informations dont vous avez besoin"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dw7tgqocy/image/upload/v1735297776/Designer_1_ykr6sh.jpg"
        />
        <meta
          property="og:url"
          content="https://sebastien-dev-portfolio.vercel.app/"
        />
        <meta
          property="og:site_name"
          content="Sébastien LAU - Portfolio développeur"
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
        <Footer />
      </body>
    </html>
  );
}
