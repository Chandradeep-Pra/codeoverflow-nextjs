"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


interface FilterProps {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClass?: string;
}

const Filter = ({ filters, otherClasses, containerClass }: FilterProps) => {
  return (
    <div className={`relative ${containerClass}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter.." />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((fil) => (
              <SelectItem key={fil.value} value={fil.value} className="cursor-pointer">
                {fil.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
