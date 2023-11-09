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
import { Separator } from "./ui/separator";
import ShowNavContent from "./ShowNavContent";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        onCloseAutoFocus={(event) => event.preventDefault()}
        className="overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle className="flex gap-1">
            <Atom color="#2563eb" />
            bens
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col justify-center gap-2">
          <Separator />
          <SideNavMenu />
          <NavDropdown button="Portfolios" items={membersNav} />
          <NavDropdown button="Case studies" items={studiesNav} />
          <ShowNavContent />
          <div className="ml-4">
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
