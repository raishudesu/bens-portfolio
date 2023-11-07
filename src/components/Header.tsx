import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import NavMenu from "./NavMenu";
import Sidebar from "./Sidebar";
import Image from "next/image";
import atom from "../assets/atom.svg";

const Header = () => {
  return (
    <header className="fixed px-6 bg-background w-full flex justify-center shadow-md dark:shadow-slate-900">
      <div className="w-full max-w-screen-xl flex gap-3 md:justify-between  items-center h-16">
        <div className="md:hidden">
          <Sidebar />
        </div>
        <Link
          href={"/"}
          className="flex items-center gap-1 scroll-m-20 text-2xl font-bold tracking-tight transition-colors first:mt-0"
        >
          <Image src={atom} alt="atom-icon" className="w-[25px]" />
          bens
        </Link>
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
