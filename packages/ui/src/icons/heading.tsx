import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export const HeadingIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 4H4M6 4H8M6 4V12M6 20H8M6 20H4M6 20V12M18 4H16M18 4H20M18 4V12M18 20H16M18 20H20M18 20V12M18 12H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
