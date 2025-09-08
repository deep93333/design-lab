import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export const Heading2Icon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13 5V12M13 12V19M13 12H3M3 12V5M3 12V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 19H18L21.4948 14.5683C21.8202 14.2022 22 13.7294 22 13.2396V13C22 11.8954 21.1046 11 20 11C19.2597 11 18.6134 11.4022 18.2676 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
