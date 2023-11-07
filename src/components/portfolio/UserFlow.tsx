import Image, { StaticImageData } from "next/image";
import React from "react";

const UserFlow = ({ src }: { src: StaticImageData }) => {
  return (
    <>
      <h3
        id="user-flow"
        className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6"
      >
        User flow
      </h3>
      <figure className="flex flex-col items-center mt-3">
        <Image
          src={src}
          alt="userflow"
          className="shadow-md rounded-lg"
          loading="lazy"
        />
        <figcaption className="text-muted-foreground text-sm">
          User flow
        </figcaption>
      </figure>
    </>
  );
};

export default UserFlow;
