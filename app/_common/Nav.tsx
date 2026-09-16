"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  return (
      <NavigationMenu align="center" className="w-full min-w-full text-nowrap">
        <NavigationMenuList className="w-full justify-center gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="">
              ABOUT
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/tickets" className=" ">
              TICKETS
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/accessibility" className=" ">
              ACCESS
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  );
}
