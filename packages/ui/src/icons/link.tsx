import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export const LinkIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 5.5L10.7514 4.75837C13.0959 2.41387 16.8971 2.41388 19.2416 4.75837C21.5861 7.10287 21.5861 10.9041 19.2416 13.2486L18.5 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18.5L13.2486 19.2416C10.9041 21.5861 7.10287 21.5861 4.75838 19.2416C2.41388 16.8971 2.41387 13.0959 4.75837 10.7514L5.5 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14L14 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
