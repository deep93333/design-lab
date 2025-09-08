import { cn } from "../lib/utils";
import type { IconProps } from "./types";
export const UnderlineIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 21H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M6 4V12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12V4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
