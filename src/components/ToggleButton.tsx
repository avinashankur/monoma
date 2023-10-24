"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {BiSolidMoon, BiSolidSun} from "react-icons/bi"

 const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      type="button"
      className="p-1 bg-zinc-300 dark:bg-zinc-800 text-lg rounded-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <BiSolidMoon /> : <BiSolidSun />}
    </button>
  );
};

export default ThemeSwitcher;