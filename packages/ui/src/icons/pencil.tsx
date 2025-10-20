import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export function PencilIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={cn("size-full", className)}
      aria-hidden="true"
    >
      <path
        d="M14.5429 3.54323C16.1761 1.91007 18.8239 1.91007 20.4571 3.54323C22.0903 5.1764 22.0903 7.82428 20.4571 9.45745L8.5 21.4146C8.12493 21.7896 7.61622 22.0003 7.08579 22.0003H3C2.44772 22.0003 2 21.5526 2 21.0003V16.9146C2 16.3841 2.21071 15.8754 2.58579 15.5003L12.086 6.00017L18 11.9142L19.4142 10.5L13.5002 4.58596L14.5429 3.54323Z"
        fill="currentColor"
      />
    </svg>
  );
}
