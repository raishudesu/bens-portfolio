import Image from "next/image";
import HeroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Crafting Seamless Digital Experiences
      </h1>
      <Image src={HeroImg} alt="heroimg" className="w-full max-w-[500px]" />
    </div>
  );
};

export default Hero;
