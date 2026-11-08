"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => isActivePath(pathname, href);

  return (
    <NavigationMenu
      align="center"
      className="w-full min-w-full max-w-full text-nowrap px-1"
    >
      <NavigationMenuList className="w-full justify-center gap-0 sm:gap-4">
        <NavigationMenuItem className="min-w-0">
          <NavigationMenuLink
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={`px-1.5 py-2 text-2xl min-[400px]:text-xl sm:p-3 sm:text-2xl md:text-4xl ${
              isActive("/") ? "link" : ""
            }`}
          >
            HOME
          </NavigationMenuLink>
        </NavigationMenuItem>
        <span
          className="text-foreground select-none text-xl sm:text-3xl"
          aria-hidden="true"
        >
          //
        </span>
        <NavigationMenuItem className="min-w-0">
          <NavigationMenuLink
            href="/about"
            aria-current={isActive("/about") ? "page" : undefined}
            className={`px-1.5 py-2 text-2xl min-[400px]:text-xl sm:p-3 sm:text-2xl md:text-4xl ${
              isActive("/about") ? "link" : ""
            }`}
          >
            ABOUT
          </NavigationMenuLink>
        </NavigationMenuItem>
        <span
          className="text-foreground select-none text-xl sm:text-3xl"
          aria-hidden="true"
        >
          //
        </span>
        <NavigationMenuItem className="min-w-0">
          <NavigationMenuLink
            href="https://www.outsavvy.com/organiser/plastyk#live_events:~:text=on%20OutSavvy%20recently-,Events,-UPCOMING%201"
            aria-current={isActive("/tickets") ? "page" : undefined}
            className={`px-1.5 py-2 text-2xl min-[400px]:text-xl sm:p-3 sm:text-2xl md:text-4xl ${
              isActive("/tickets") ? "link" : ""
            }`}
          >
            TICKETS
          </NavigationMenuLink>
        </NavigationMenuItem>
        <span
          className="text-foreground select-none text-xl sm:text-3xl"
          aria-hidden="true"
        >
          //
        </span>
        <NavigationMenuItem className="min-w-0">
          <NavigationMenuLink
            href="/accessibility"
            aria-current={isActive("/accessibility") ? "page" : undefined}
            className={`px-1.5 py-2 text-2xl min-[400px]:text-xl sm:p-3 sm:text-2xl md:text-4xl ${
              isActive("/accessibility") ? "link" : ""
            }`}
          >
            ACCESS
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}