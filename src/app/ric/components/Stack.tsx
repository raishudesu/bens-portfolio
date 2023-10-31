import {
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoPython,
  BiLogoAdobe,
} from "react-icons/bi";

import { AiFillHtml5 } from "react-icons/ai";

const Stack = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Tech stack
      </h3>
      <div className="flex gap-1 flex-wrap text-[#2563eb]">
        <AiFillHtml5 size={30} />
        <BiLogoCss3 size={30} />
        <BiLogoJavascript size={30} />
        <BiLogoPython size={30} />
        <BiLogoAdobe size={30} />
      </div>
    </>
  );
};

export default Stack;
