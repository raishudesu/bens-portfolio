import React, { ReactNode } from "react";

const JustineLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
      {children}
    </section>
  );
};

export default JustineLayout;
