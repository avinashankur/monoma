import Link from "next/link";
import { Navigation } from "./navigation";
import { Dropdown } from "./dropdown";

export const Header = () => {
  return (
    <header className="margin py-4 flex items-center justify-between">
      <Link href="/" className="font-semibold text-lg sm:text-base">Monoma.</Link>
      <Navigation />
      <Dropdown />
    </header>
  );
};
