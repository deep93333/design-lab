import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export const TagIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5C2 3.34315 3.34315 2 5 2H11.1716C11.9672 2 12.7303 2.31607 13.2929 2.87868L21.0429 10.6287C22.2145 11.8003 22.2145 13.6997 21.0429 14.8713L14.8713 21.0429C13.6997 22.2145 11.8003 22.2145 10.6287 21.0429L2.87868 13.2929C2.31607 12.7303 2 11.9672 2 11.1716V5ZM7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9Z"
        fill="currentColor"
      />
    </svg>
  );
};
