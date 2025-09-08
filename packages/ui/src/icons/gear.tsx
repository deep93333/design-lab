import { cn } from "../lib/utils";
import type { IconProps } from "./types";

export function GearIcon({ className }: IconProps) {
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
        d="M3 9.25434C3 7.80924 3.77946 6.4765 5.03898 5.76803L10.039 2.95558C11.2566 2.27067 12.7434 2.27067 13.961 2.95558L18.961 5.76805C20.2206 6.47652 21 7.80926 21 9.25437V14.7452C21 16.1904 20.2206 17.5231 18.961 18.2316L13.961 21.044C12.7434 21.7289 11.2566 21.7289 10.039 21.0441L5.03908 18.2319C3.7795 17.5234 3 16.1906 3 14.7455V9.25434ZM8.50003 12C8.50003 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.50003 13.933 8.50003 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
