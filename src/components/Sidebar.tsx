"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Atom, Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import NavDropdown from "./NavDropdown";
import SideNavMenu from "./SideNavMenu";
import { membersNav, studiesNav } from "@/lib/members";
import StudyNav from "./StudyNav";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent onCloseAutoFocus={(event) => event.preventDefault()}>
        <SheetHeader>
          <SheetTitle className="flex gap-1">
            <Atom color="#2563eb" />
            bens
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col justify-center gap-2">
          <SideNavMenu />
          <NavDropdown button="Portfolios" items={membersNav} />
          <NavDropdown button="Case studies" items={studiesNav} />
          <div className="flex flex-col gap-4">
            <StudyNav />
          </div>
          <div className="ml-4">
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
