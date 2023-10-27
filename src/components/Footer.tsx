import { Atom } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-20 bg-[#242424] text-[#f0f0f0]">
      <div className="h-full w-full text-sm flex flex-col justify-center items-center gap-3 py-6  ">
        <div className="flex gap-1 items-center">
          <Atom color="#16BC25" />
          <p className="scroll-m-20 text-xl font-bold tracking-tight transition-colors first:mt-0 ">
            bens
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
