"use client";

import useTheme from "@/context/ThemeProvider";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
// import Image from "next/image";
import { themes } from "@/constants";
import SunIcon from "@/public/assets/icons/sun.svg"; // Import the sun icon
import MoonIcon from "@/public/assets/icons/moon.svg";

const Theme = () => {
  const { mode, setMode } = useTheme();
  console.log(mode);
  return (
    <Menubar className="relative border-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200 ">
          {mode === "light" ? (
            <SunIcon
            //   alt="sun"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <MoonIcon
            //   src={MoonIcon}
              alt="moon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute -right-12  mt-3 flex min-w-[120px] justify-between border-none py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              onClick={() => {
                setMode(item.value);
                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <item.icon
                
                alt={item.value}
                width={16}
                height={16}
                className={`${mode === item.value && "active-theme"}`}
              />
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
