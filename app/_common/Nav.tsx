"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function ChannelCta() {
  return (
    <h2 className="text-2xl">
      Join our <b>BROADCAST CHANNEL</b> 
    </h2>
  )
}

export default function Nav() {
  return (
    <>
    <ChannelCta />
      <NavigationMenu className="w-full text-nowrap">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="">
              ABOUT/GALLERY
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
    </>
  );
}
