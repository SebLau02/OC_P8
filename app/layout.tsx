import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./mono.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollEffects } from "@/components/ScrollEffects";
import { site, status } from "@/lib/site";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const description =
  status === "recherche"
    ? `${site.name}, développeur full stack (React, Next.js, Ruby on Rails). Disponible à partir de ${site.availability.toLowerCase()}.`
    : `${site.name}, développeur full stack (React, Next.js, Ruby on Rails) chez ${site.employer}.`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sebastienlau.dev",
  ),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: `${site.name} — ${site.role}`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <ScrollEffects />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
