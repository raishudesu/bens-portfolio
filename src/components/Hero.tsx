import Image from "next/image";
import HeroImg from "../assets/hero.svg";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <div className="w-full max-w-screen-xl grid md:grid-cols-2 items-center gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Crafting Seamless Digital Experiences
        </h1>
        <p className="leading-7">
          Elevating User Interaction and Design Expertise
        </p>
        <Button className="self-start">Explore</Button>
      </div>
      <div className="flex justify-end">
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
