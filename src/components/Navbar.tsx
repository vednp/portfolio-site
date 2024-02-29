import React, { useState, useEffect } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navigation from "./Navigation";
import Social from "./Social";
import { Oswald } from "next/font/google";
import { cn } from "@/utils/cn";
// import Switcher from "./Switcher";
const oswald = Oswald({ subsets: ["latin"] });
function Nav() {
  return (
    <>
      <div className="flex justify-around sticky  bg-black py-7 top-0 z-50">
        <h1
          className={cn(
            "dark:text-[#93B1A6] text-2xl tracking-wider font-extralight",
            oswald.className
          )}
        >
          Ved Pahune
        </h1>
        <Navigation />
        <div className="flex md:space-x-12 space-x-4 font-thin">
          <div className="hidden sm:block">
            <Social />
          </div>
          {/* <Switcher /> */}
        </div>
      </div>
    </>
  );
}

export default Nav;
