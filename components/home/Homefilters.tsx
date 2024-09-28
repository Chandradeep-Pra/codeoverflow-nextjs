"use client"

import React from "react";
import { Button } from "../ui/button";
import { HomePageFilters } from "@/constants/filters";

const Homefilters = () => {

    const active = ''
  return <div className="mt-10 hidden flex-wrap gap-3 md:flex">
    {HomePageFilters.map((fil) => (
        <Button key={fil.value} onClick={() => {}} className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === fil.value?'bg-primary-100 text-primary-500':'bg-light-800 text-light-500 dark:bg-dark-300 '} hover:text-primary-500`}>
            {fil.name}
        </Button>
    ))}
  </div>;
};

export default Homefilters;
