import { cn } from "../lib/utils";

export const Heading3Icon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 5V12M13 12V19M13 12H3M3 12V5M3 12V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2656 18C18.6114 18.5978 19.2578 19 19.9981 19C21.1026 19 21.9981 18.1046 21.9981 17C21.9981 15.8954 21.1026 15 19.9981 15C21.1026 15 21.9981 14.1046 21.9981 13C21.9981 11.8954 21.1026 11 19.9981 11C19.2578 11 18.6114 11.4022 18.2656 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
