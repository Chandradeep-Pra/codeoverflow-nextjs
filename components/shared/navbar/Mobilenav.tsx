"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";

const TempNavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex flex-col gap-2 pt-16">
         {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              key={item.label}
              href={item.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <item.icon
                width={20}
                height={20}
                aria-label={item.label}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
   
  );
};

const Mobilenav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        
         <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="codeflow"
          />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            Code <span className="text-primary-500">Cycle</span>
          </p>
        </Link>
        {/* <div> */}
          <SheetClose asChild>
            <TempNavContent />
          </SheetClose>
          <SignedOut>
            {/* <h1 className="text-4xl">Hi</h1> */}
             <div className="flex flex-col gap-3 pt-12">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient font-bold ">
                      Log In
                    </span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium btn-secondary min-h[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient font-bold ">
                      Sign Up
                    </span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        {/* </div>   */}
      </SheetContent>
    </Sheet>
  );
};

export default Mobilenav;
