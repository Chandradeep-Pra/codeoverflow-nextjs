import React from "react";
// import { SidebarLink } from "@/types";
import HomeIcon from "@/public/assets/icons/home.svg";
import UsersIcon from "@/public/assets/icons/users.svg";
import StarIcon from "@/public/assets/icons/star.svg";
import SuitcaseIcon from "@/public/assets/icons/suitcase.svg";
import TagIcon from "@/public/assets/icons/tag.svg";
import QuestionIcon from "@/public/assets/icons/question.svg";
import SunIcon from "@/public/assets/icons/sun.svg"; // Import the sun icon
import MoonIcon from "@/public/assets/icons/moon.svg"; // Import the moon icon
import ComputerIcon from "@/public/assets/icons/computer.svg"; // Import the computer icon


// SidebarLink Interface
interface SidebarLink {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  route: string;
  label: string;
}


// themes array with SVG icons as components
export const themes = [
  { value: "light", label: "Light", icon: SunIcon }, // Use the imported SunIcon
  { value: "dark", label: "Dark", icon: MoonIcon }, // Use the imported MoonIcon
  { value: "system", label: "System", icon: ComputerIcon }, // Use the imported ComputerIcon
];

// sidebarLinks using SidebarLink
export const sidebarLinks: SidebarLink[] = [
  {
    icon: HomeIcon,
    route: "/",
    label: "Home",
  },
  {
    icon: UsersIcon,
    route: "/community",
    label: "Community",
  },
  {
    icon: StarIcon,
    route: "/collection",
    label: "Collections",
  },
  {
    icon: SuitcaseIcon,
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    icon: TagIcon,
    route: "/tags",
    label: "Tags",
  },
  {
    icon: UsersIcon,
    route: "/profile",
    label: "Profile",
  },
  {
    icon: QuestionIcon,
    route: "/ask-question",
    label: "Ask a question",
  },
];





// export const BADGE_CRITERIA = {
//   QUESTION_COUNT: {
//     BRONZE: 10,
//     SILVER: 50,
//     GOLD: 100,
//   },
//   ANSWER_COUNT: {
//     BRONZE: 10,
//     SILVER: 50,
//     GOLD: 100,
//   },
//   QUESTION_UPVOTES: {
//     BRONZE: 10,
//     SILVER: 50,
//     GOLD: 100,
//   },
//   ANSWER_UPVOTES: {
//     BRONZE: 10,
//     SILVER: 50,
//     GOLD: 100,
//   },
//   TOTAL_VIEWS: {
//     BRONZE: 1000,
//     SILVER: 10000,
//     GOLD: 100000,
//   },
// };
