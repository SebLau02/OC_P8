import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex-col bg-card w-full flex justify-center items-center py-3 sm:py-6 px-3 sm:px-48 gap-3 sm:gap-6">
      <div className="flex justify-between items-center w-full flex-wrap gap-3">
        <ul className="self-start">
          <li>
            <h3>Contact</h3>
          </li>
          <li>
            <ChevronRight className="inline" size={16} />{" "}
            <a href="mailto:sebastien.lau2021@gmail.com">
              sebastien.lau2021@gmail.com
            </a>{" "}
            <Mail className="inline" size={16} />
          </li>
          <li>
            <ChevronRight className="inline" size={16} />{" "}
            <Link href="/#contact">Formulaire</Link>
          </li>
        </ul>
        <a href="/assets/Sébastien Lau_CV.pdf" className="underline" download>
          Télécharger le CV
        </a>
      </div>
      <p>© {new Date().getFullYear()} Sébastien Lau - Tous droits réservés</p>
    </div>
  );
};
