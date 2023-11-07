"use client";

import { usePathname } from "next/navigation";
import NavContent from "./NavContent";
import { Separator } from "./ui/separator";

const StudyNav = () => {
  const pathname = usePathname();
  if (
    pathname === "/" ||
    pathname === "/barysh" ||
    pathname === "/justine" ||
    pathname === "/ric" ||
    pathname === "/raven"
  )
    return null;

  return (
    <>
      <h4 className="ml-4 scroll-m-20 text-xl font-semibold tracking-tight">
        Contents
      </h4>
      <NavContent />
    </>
  );
};

export default StudyNav;
