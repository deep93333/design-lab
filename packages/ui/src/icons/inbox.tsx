import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export const InboxIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 7C21 4.79086 19.2092 3 17 3L7.00003 3C4.7909 3 3.00004 4.79086 3.00003 6.99999L3 17C2.99999 19.2091 4.79086 21 7 21H17C19.2092 21 21 19.2091 21 17V7ZM7.00003 5L17 5C18.1046 5 19 5.89543 19 7V12H15.874C15.4177 12 15.0193 12.3089 14.9055 12.7507C14.5724 14.0449 13.3965 15 12 15C10.6035 15 9.42753 14.0449 9.09445 12.7507C8.98071 12.3089 8.58229 12 8.12601 12H5.00002L5.00003 7C5.00004 5.89543 5.89546 5 7.00003 5Z"
        fill="currentColor"
      />
    </svg>
  );
};
