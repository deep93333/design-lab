import { cn } from "../lib/utils";

export const BoldIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 12H6M13 12C15.2091 12 17 10.2091 17 8C17 5.79086 15.2091 4 13 4H9C7.34315 4 6 5.34315 6 7V12M13 12H14C16.2091 12 18 13.7909 18 16C18 18.2091 16.2091 20 14 20H9C7.34315 20 6 18.6569 6 17V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};
