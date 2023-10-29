import Image from "next/image";
import Sitex from "../../../assets/barysh/sitex-logo.png";
import { themes } from "./data";

const Visual = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Visual UI Design
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The primary color of the user interface is #16BC25 which is a green
        color. This resembles the color used in the logo of SITE organization.
        The atom represents the fundamental building block of the digital
        universe and symbolizes the core elements of information technology that
        drive our community&apos;s passion and curiosity.
      </p>
      <figure className="flex flex-col items-center mt-6">
        <Image src={Sitex} alt="sitex-logo" className="shadow-md rounded-lg" />
        <figcaption className="text-muted-foreground text-sm">
          SITEX logo
        </figcaption>
      </figure>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Key features
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {themes.map((theme, index) => (
          <li key={index}>{theme}</li>
        ))}
      </ul>
    </>
  );
};

export default Visual;
