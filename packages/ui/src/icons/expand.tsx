import type { IconProps } from "./types";

export function ExpandIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5H19V12H17V7H12V5ZM7 12V17H12V19H5V12H7Z"
        fill="currentColor"
      />
    </svg>
  );
}
