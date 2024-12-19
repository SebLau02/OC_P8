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
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Sébastien Lau" />
      </head>
      <body
        className={`${RalewayMono.variable} ${CutiveMono.variable} font-sans h-full`}
      >
        {children}
      </body>
    </html>
  );
}
