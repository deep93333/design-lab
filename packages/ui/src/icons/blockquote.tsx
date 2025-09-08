import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export const BlockquoteIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14.0111 14.5C14.0111 12.567 15.5765 11 17.5075 11C19.4384 11 21.0038 12.567 21.0038 14.5C21.0038 16.433 19.4384 18 17.5075 18C15.5765 18 14.0111 16.433 14.0111 14.5ZM14.0111 14.5C13.7614 9.75 16.009 8 19.0059 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.01895 14.5C3.01895 12.567 4.58431 11 6.51527 11C8.44623 11 10.0116 12.567 10.0116 14.5C10.0116 16.433 8.44623 18 6.51527 18C4.58431 18 3.01895 16.433 3.01895 14.5ZM3.01895 14.5C2.76922 9.75 5.01685 8 8.01369 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
