import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
  accentCol?: string;
}

const Rendertags = ({
  _id,
  name,
  totalQuestions,
  showCount,
  accentCol,
}: Props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge
        style={{
          borderColor: accentCol || "transparent", // Set border color based on accentCol
          color: accentCol || "inherit", // Set text color based on accentCol
          backgroundColor: accentCol ? "transparent" : "inherit", // Set background based on accentCol
        }}
        className={`subtle-medium rounded-md border border-solid px-4 py-2 uppercase 
          ${accentCol ? "hover:bg-[rgba(" + accentCol.slice(1) + ", 0.6)]" : "background-light800_dark300 text-light400_light500"}
          transition-colors duration-300`}
      >
        {name}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default Rendertags;
