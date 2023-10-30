import { TbBrandNextjs } from "react-icons/tb";
import {
  BiLogoReact,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoFirebase,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const Stack = () => {
  return (
    <div className="flex gap-1 justify-center flex-wrap text-[#2563eb]">
      <TbBrandNextjs size={30} />
      <BiLogoTypescript size={30} />
      <BiLogoMongodb size={30} />
      <SiExpress size={30} />
      <BiLogoReact size={30} />
      <BiLogoNodejs size={30} />
      <BiLogoTailwindCss size={30} />
      <BiLogoFirebase size={30} />
    </div>
  );
};

export default Stack;
