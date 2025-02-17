import React from "react";

export const Footer = () => {
  return (
    <div className="flex-col bg-card w-full flex justify-center items-center py-3 sm:py-6 px-3 sm:px-48 gap-3 sm:gap-6">
      <div className="flex justify-between items-center w-full flex-wrap gap-3">
        <ul className="self-start">
          <li>
            <h3>Contact</h3>
          </li>
          <li>📧: sebastien.lau2021@gmail.com</li>
          <li>📞: +33 603 709 377</li>
        </ul>
        <a href="/assets/Sébastien Lau_CV.pdf" className="underline" download>
          Télécharger le CV
        </a>
      </div>
      <p>© {new Date().getFullYear()} Sébastien Lau - Tous droits réservés</p>
    </div>
  );
};
