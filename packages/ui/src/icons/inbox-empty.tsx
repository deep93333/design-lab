import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export const InboxEmptyIcon = ({ className }: IconProps) => {
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
        d="M4.26799 6.01544C4.98017 4.76914 6.30554 4 7.74097 4H16.259C17.6945 4 19.0198 4.76914 19.732 6.01544L22.473 10.8121C22.8183 11.4165 23 12.1006 23 12.7967V16C23 18.2091 21.2091 20 19 20H5C2.79086 20 1 18.2091 1 16V12.7967C1 12.1006 1.18166 11.4165 1.52703 10.8121L4.26799 6.01544ZM21 13H16.75C16.2779 13 15.8333 13.2223 15.55 13.6C14.889 14.4813 13.8517 15 12.75 15H11.25C10.1483 15 9.11099 14.4813 8.45 13.6C8.16672 13.2223 7.72214 13 7.25 13H3V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V13Z"
        fill="currentColor"
      />
    </svg>
  );
};
