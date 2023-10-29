import Image from "next/image";
import HeroImg from "../assets/hero.svg";
import HeroBtns from "./HeroBtns";

const Hero = () => {
  return (
    <div className="w-full max-w-screen-xl grid md:grid-cols-2 items-center gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Crafting Seamless Digital Experiences
        </h1>
        <p className="leading-7">
          Elevate user interaction and design expertise.
        </p>
        <div className="flex gap-2">
          <HeroBtns />
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <Image
          src={HeroImg}
          alt="heroimg"
          className="w-full max-w-[500px] shadow-md rounded-md"
        />
      </div>
    </div>
  );
};

export default Hero;
