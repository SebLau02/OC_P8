import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-evenly align-center py-3 shadow-md">
      <Link className="text-base sm:text-3xl;" href="#works">
        contributions
      </Link>
      <Link className="text-base sm:text-3xl;" href="#about">
        à propos
      </Link>
      <Link className="text-base sm:text-3xl;" href="#contact">
        contact
      </Link>
    </header>
  );
};
