// components/navbar.tsx

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  HeartFilledIcon,
  LinkedInIcons,
  TwitterIcon,
} from "@/components/icons";

export const Navbar = () => {
  return (
    <nav className="animate-slideDown bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-500">
      <NextUINavbar maxWidth="xl">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <p className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-500">
                TriForMine
              </p>
            </NextLink>
          </NavbarBrand>
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    "text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-300",
                    "data-[active=true]:text-indigo-600 data-[active=true]:font-medium",
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
            >
              <TwitterIcon className="text-blue-500 dark:text-blue-400" />
            </Link>
            <Link
              isExternal
              aria-label="LinkedIn"
              href={siteConfig.links.linkedin}
            >
              <LinkedInIcons className="text-blue-700 dark:text-blue-500" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-gray-800 dark:text-gray-300" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-red-600 bg-red-100 hover:bg-red-200 transition-colors duration-300"
              href={siteConfig.links.sponsor}
              startContent={<HeartFilledIcon className="text-red-500" />}
              variant="flat"
            >
              Sponsor
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-gray-800 dark:text-gray-300" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </nav>
  );
};
