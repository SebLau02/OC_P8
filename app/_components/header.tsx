import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-evenly align-center py-3">
      <Link href="#works">contributions</Link>
      <Link href="#about">à propos</Link>
      <Link href="#contact">contact</Link>
    </header>
  );
};
