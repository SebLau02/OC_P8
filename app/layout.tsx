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
  title: "Sébastien LAU - Portfolio déveoppeur",
  description:
    "Voici mon portfolio de développeur, vous y trouverez tout les informations que vous avez besoin",
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
      "Voici mon portfolio de développeur, vous y trouverez tout les informations que vous avez besoin",
    url: "https://sebastien-dev-portfolio.vercel.app/",
    image:
      "https://asset.cloudinary.com/dw7tgqocy/3f8ebf9c5cb17a0d2249f2dddc09f89e",
    creator: {
      "@type": "Person",
      name: "Sébastien LAU",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Sébastien Lau" />
        {/* Open Graph meta tags **START** */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sébastien, développeur web" />
        <meta
          property="og:description"
          content="Voici mon portfolio de développeur, vous y trouverez tout les informations que vous avez besoin"
        />
        <meta
          property="og:image"
          content="https://asset.cloudinary.com/dw7tgqocy/3f8ebf9c5cb17a0d2249f2dddc09f89e"
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
      </body>
    </html>
  );
}
