"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  return (
      <NavigationMenu className="w-full text-nowrap mb-2">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="">
              ABOUT / GALLERY
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/tickets" className=" ">
              TICKETS
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/accessibility" className=" ">
              ACCESS INFO
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  );
}
