import Image, { StaticImageData } from "next/image";
import React from "react";
import Stack from "./Stack";
import { Button } from "@/components/ui/button";

type THeading = {
  author: string;
  image: StaticImageData;
  role: string;
  bio: string;
  about: string;
};

const PortfolioHeading = ({ author, image, role, bio, about }: THeading) => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {author}
      </h1>

      <Image
        src={image}
        alt="member-image"
        className="rounded-full w-full max-w-[200px]"
      />

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {role}
      </h2>
      <Stack />
      <p className=" leading-7 [&:not(:first-child)]:mt-6">{bio}</p>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        About me
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{about}</p>
      <Button>Download CV</Button>
    </>
  );
};

export default PortfolioHeading;
