import { cn } from "../lib/utils";

export const CropIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 9H9V14C9 14.5523 9.44772 15 10 15H15V10C15 9.44772 14.5523 9 14 9Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 2C6.55228 2 7 2.44772 7 3V5H15C17.2091 5 19 6.79086 19 9V17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H19V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V19H9C6.79086 19 5 17.2091 5 15V7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H5V3C5 2.44772 5.44772 2 6 2ZM7 15V7H15C16.1046 7 17 7.89543 17 9V17H9C7.89543 17 7 16.1046 7 15Z"
        fill="currentColor"
      />
    </svg>
  );
};
