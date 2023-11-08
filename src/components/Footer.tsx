import atom from "../assets/atom.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-20 bg-[#1c1917] text-[#f2f2f2]">
      <div className="h-full w-full text-sm flex flex-col justify-center items-center gap-3 py-6  ">
        <div className="flex gap-1 items-center">
          <Image src={atom} alt="atom-icon" className="w-[25px]" />
          <p className="scroll-m-20 text-xl font-bold tracking-tight transition-colors first:mt-0 ">
            bens
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
