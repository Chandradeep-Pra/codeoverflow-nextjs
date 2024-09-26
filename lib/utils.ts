import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  let time: number;
  let unit: string;

  if (diffInSeconds < 60) {
    time = diffInSeconds;
    unit = 'secs';
  } else if (diffInSeconds < 3600) {
    time = Math.floor(diffInSeconds / 60);
    unit = 'mins';
  } else if (diffInSeconds < 86400) {
    time = Math.floor(diffInSeconds / 3600);
    unit = 'hrs';
  } else {
    time = Math.floor(diffInSeconds / 86400);
    unit = 'days';
  }

  return `${time} ${unit} ago`;
};


export const formatNumber = (num: number): string => {
  if (num >= 1e6) {
    return `${(num / 1e6).toFixed(1)}M`; // Format for millions
  } else if (num >= 1e3) {
    return `${(num / 1e3).toFixed(1)}K`; // Format for thousands
  } else {
    return num.toString(); // Return the number as a string if less than 1,000
  }
};

