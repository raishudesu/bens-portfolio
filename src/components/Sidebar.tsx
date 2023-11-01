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
import Link from "next/link";
import SideNavMenu from "./SideNavMenu";

const membersNav = [
  {
    name: "Barysh Nikov Bacaltos",
    link: "/barysh",
  },
  {
    name: "Justine Luis Elorde",
    link: "/justine",
  },
  {
    name: "Ric Ryan Nolasco",
    link: "/ric",
  },
  {
    name: "Raven Salvatierra",
    link: "/raven",
  },
];

const studiesNav = [
  {
    name: "SITEX",
    link: "/barysh/case-study",
  },
  {
    name: "Dentabook",
    link: "/justine/case-study",
  },
  {
    name: "V-Companion",
    link: "/ric/case-study",
  },
  {
    name: "Coursecrafters",
    link: "/raven/case-study",
  },
];

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex gap-1 justify-center">
            <Atom color="#2563eb" />
            bens
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col justify-center items-center gap-2">
          <SideNavMenu />
          <NavDropdown button="Portfolios" items={membersNav} />
          <NavDropdown button="Case studies" items={studiesNav} />
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
