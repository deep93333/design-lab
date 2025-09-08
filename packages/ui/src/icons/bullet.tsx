import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export const BulletIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 7C8 8.10457 7.10457 9 6 9C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5C7.10457 5 8 5.89543 8 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 17C8 18.1046 7.10457 19 6 19C4.89543 19 4 18.1046 4 17C4 15.8954 4.89543 15 6 15C7.10457 15 8 15.8954 8 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M13 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
