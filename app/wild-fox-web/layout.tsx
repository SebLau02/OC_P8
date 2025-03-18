import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Création de site web - WildFox Web",
  description:
    "Vous avez besoin d'un site internet pour booster votre activité ? Commençons ensemble dès maintenant !",
};
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="bg-primary-2">
        <nav className="flex justify-between items-center px-6 md:px-20 py-6 shadow-md">
          <div className="h-14 rounded-sm overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dw7tgqocy/image/upload/v1739716414/Groupblueu_m0as9w.svg"
              alt="logo de wild fox labs"
              className="h-full cover"
              width={100}
              height={100}
            />
          </div>
          <ul className="flex justify-end flex-wrap md:gap-6 gap-4 text-primary-12">
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
