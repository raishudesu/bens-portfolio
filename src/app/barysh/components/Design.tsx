import React from "react";
import { solutions } from "./data";

const Design = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Design solutions
      </h3>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {solutions.map(({ content }, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </>
  );
};

export default Design;
