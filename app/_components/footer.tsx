import React from "react";

export const Footer = () => {
  return (
    <div className="flex-col bg-card w-full flex justify-center items-center py-3 sm:py-6 px-3 sm:px-48 gap-3 sm:gap-6">
      <ul className="self-start">
        <li>
          <h3>Contact</h3>
        </li>
        <li>📧: sebastien.lau2021@gmail.com</li>
        <li>📞: +33 603 709 377</li>
      </ul>
      <p>© 2024 Sébastien Lau- Tous droits réservés</p>
    </div>
  );
};
