"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

const contents = [
  {
    content: "Project summary",
    id: "project-summary",
  },
  {
    content: "Project statement",
    id: "project-statement",
  },
  {
    content: "Customer journey mapping",
    id: "customer-mapping",
  },
  {
    content: "Design solutions",
    id: "design-solutions",
  },
  {
    content: "User flow",
    id: "user-flow",
  },
  {
    content: "Visual UI design",
    id: "visual-design",
  },
  {
    content: "Prototype",
    id: "prototype",
  },
  {
    content: "Results/Conclusions",
    id: "results",
  },
];

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const NavContent = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col items-start">
        {contents.map(({ content, id }, index) => (
          <NavigationMenuItem key={index}>
            <Button variant={"ghost"} onClick={() => scrollTo(id)}>
              {content}
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavContent;
