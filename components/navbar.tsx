import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/react";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">MAQE Forum</p>
            <ThemeSwitch />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};
