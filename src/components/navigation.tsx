"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="!bg-transparent">
              Platform
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-[40rem] p-4 !bg-slate-100 dark:!bg-black !text-sm rounded-lg">
              <NavigationMenuLink>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2 flex-1">
                    <Link
                      href="/"
                      className="hover:bg-slate-200 dark:hover:bg-zinc-900 p-2 transition rounded-lg"
                    >
                      <h1 className="font-medium">Alert Dialog</h1>
                      <p className="text-zinc-500 font-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita illo.
                      </p>
                    </Link>
                    <Link
                      href="/"
                      className="hover:bg-slate-200 dark:hover:bg-zinc-900 p-2 transition rounded-lg"
                    >
                      <h1 className="font-medium">Progress</h1>
                      <p className="text-zinc-500 font-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita illo.
                      </p>
                    </Link>
                    <Link
                      href="/"
                      className="hover:bg-slate-200 dark:hover:bg-zinc-900 p-2 transition rounded-lg"
                    >
                      <h1 className="font-medium">Tabs</h1>
                      <p className="text-zinc-500 font-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita illo.
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col gap-4 flex-1">
                    <Link
                      href="/"
                      className="hover:bg-slate-200 dark:hover:bg-zinc-900 p-2 transition rounded-lg"
                    >
                      <h1 className="font-medium">Hover Card</h1>
                      <p className="text-zinc-500 font-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita illo.
                      </p>
                    </Link>
                    <Link
                      href="/"
                      className="hover:bg-slate-200 dark:hover:bg-zinc-900 p-2 transition rounded-lg"
                    >
                      <h1 className="font-medium">Scroll-area</h1>
                      <p className="text-zinc-500 font-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita illo.
                      </p>
                    </Link>
                    <Link
                      href="/"
                      className="hover:bg-slate-200 dark:hover:bg-zinc-900 p-2 transition rounded-lg"
                    >
                      <h1 className="font-medium">Tooltip</h1>
                      <p className="text-zinc-500 font-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita illo.
                      </p>
                    </Link>
                  </div>
                </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="!bg-transparent">
              Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-[40rem] p-4 !bg-slate-100 dark:!bg-black !text-sm rounded-lg">
              <NavigationMenuLink>
                <div className="flex gap-4">
                  <div className=" dark:bg-teal-900 bg-teal-200 rounded w-40"></div>
                  <div className="flex-1 flex flex-col gap-2">
                    <Link
                      href=""
                      className="hover:bg-slate-200 dark:hover:bg-zinc-900 p-2 transition rounded-lg"
                    >
                      <h1 className="font-medium">Introduction</h1>
                      <p className="text-zinc-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Temporibus, eligendi?
                      </p>
                    </Link>
                    <Link
                      href=""
                      className="hover:bg-slate-200 dark:hover:bg-zinc-900 p-2 transition rounded-lg"
                    >
                      <h1 className="font-medium">Installation</h1>
                      <p className="text-zinc-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut, vitae.
                      </p>
                    </Link>
                    <Link
                      href=""
                      className="hover:bg-slate-200 dark:hover:bg-zinc-900 p-2 transition rounded-lg"
                    >
                      <h1 className="font-medium">Typography</h1>
                      <p className="text-zinc-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos, vero!
                      </p>
                    </Link>
                  </div>
                </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/integrations" className="font-medium text-sm">
              Integrations
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="!mx-4">
            <Link href="/plans" className="font-medium text-sm">
              Plans
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/resources" className="font-medium text-sm">
              Resources
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
