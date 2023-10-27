import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="bg-background w-full flex justify-center shadow-md dark:shadow-slate-900">
      <div className="w-full max-w-screen-2xl flex justify-center items-center h-16 px-2">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
