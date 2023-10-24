"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcher from "./ToggleButton";
import {BiSolidLogIn, BiSolidUser} from "react-icons/bi"

export const Dropdown = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-base md:text-sm  border-2 border-zinc-400 dark:border-zinc-500 dark:hover:border-zinc-200 hover:border-zinc-500 duration-300 font-medium py-1 px-2 rounded-lg">
          Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:!bg-black !bg-slate-100 rounded-lg p-4 w-[13rem]">
          <DropdownMenuItem className="hover:!bg-slate-200 dark:hover:!bg-zinc-900 transition rounded p-2 cursor-pointer text-lg md:text-sm flex gap-4 border-b dark:border-zinc-600">
            <BiSolidLogIn className="text-3xl p-1 bg-zinc-300 dark:bg-zinc-800 rounded-md"/>
            Login
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:!bg-slate-200 dark:hover:!bg-zinc-900 transition rounded p-2 cursor-pointer text-lg md:text-sm flex gap-4 border-b dark:border-zinc-600">
            <BiSolidUser className="text-3xl p-1 bg-zinc-300 dark:bg-zinc-800 rounded-md" />
            Sign Up
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:!bg-slate-200 dark:hover:!bg-zinc-900 transition rounded p-2 flex gap-4 text-lg md:text-sm">
            <ThemeSwitcher />
            <p>Theme</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
