import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export const ItalicIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 4L14.5 4M19 4L14.5 4M14.5 4L9.5 20M9.5 20H5M9.5 20H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
