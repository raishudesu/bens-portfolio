import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Atom } from "lucide-react";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="bg-background w-full flex justify-center shadow-md dark:shadow-slate-900">
      <div className="w-full max-w-screen-xl flex justify-between items-center h-16 px-2">
        <Link
          href={"/"}
          className="flex items-center gap-1 scroll-m-20 text-2xl font-bold tracking-tight transition-colors first:mt-0"
        >
          <Atom color="#2563eb" />
          bens
        </Link>
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
