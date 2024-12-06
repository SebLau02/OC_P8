import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono, Cutive_Mono } from "next/font/google";

const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
const CutiveMono = Cutive_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cutive-mono",
});

export const metadata: Metadata = {
  title: "Sébastien LAU",
  description:
    "Développeur React freelance basé sur Rennes, disponible pour des missions 100% distanciel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${RobotoMono.variable} ${CutiveMono.variable} font-sans h-full`}
      >
        {children}
      </body>
    </html>
  );
}
