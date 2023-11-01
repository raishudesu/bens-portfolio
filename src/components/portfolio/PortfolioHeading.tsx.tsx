import Image, { StaticImageData } from "next/image";
import React, { JSXElementConstructor, ReactElement } from "react";
import { Button } from "@/components/ui/button";

type THeading = {
  author: string;
  image: StaticImageData;
  role: string;
  bio: string;
  about: string;
  cv: string | undefined;
};

const PortfolioHeading = ({
  author,
  image,
  role,
  bio,
  about,
  cv,
}: THeading) => {
  return (
    <>
      <Image
        src={image}
        alt="member-image"
        className="rounded-full w-full max-w-[200px] self-center"
      />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        {author}
      </h1>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
        {role}
      </h2>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Introduction
      </h3>
      <p className=" leading-7 [&:not(:first-child)]:mt-6">{bio}</p>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        About me
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{about}</p>
      <Button className="self-stretch md:self-start p-0">
        <a
          href={cv}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-4"
        >
          Download CV
        </a>
      </Button>
    </>
  );
};

export default PortfolioHeading;
