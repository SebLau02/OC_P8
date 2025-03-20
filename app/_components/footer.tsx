import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { socials } from "../config/data";

export const Footer = () => {
  return (
    <div className="flex flex-col bg-card justify-center w-full gap-3 items-center lg:px-28 px-3 py-3 sm:gap-6 sm:px-12 sm:py-6">
      <div className="flex flex-col justify-center w-full gap-12 items-center md:flex-row md:gap-2">
        <div className="flex flex-1 order-0 gap-2 md:order-1">
          {socials.map((social, i) => (
            <>
              <Link
                target={social.url === "#contact" ? "" : "_blank"}
                href={social.url}
                key={i}
              >
                {React.cloneElement(social.icon, {
                  className: "!w-10",
                })}
              </Link>
            </>
          ))}
        </div>
        <ul className="flex-1 order-0">
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
        <a
          href="/assets/Sébastien Lau_CV.pdf"
          className="flex-1 order-2 underline"
          download
        >
          Télécharger le CV
        </a>
      </div>
      <p>© {new Date().getFullYear()} Sébastien Lau - Tous droits réservés</p>
    </div>
  );
};
