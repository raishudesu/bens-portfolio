import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TItem } from "@/lib/types";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const NavDropdown = ({ button, items }: { button: string; items: TItem[] }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="max-w-max flex gap-1 justify-start">
          {button} <ChevronDown size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup className="flex flex-col">
          {items.map(({ name, link }, index) => (
            <DropdownMenuItem key={index}>
              <Link href={link} className="w-full">
                {name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
