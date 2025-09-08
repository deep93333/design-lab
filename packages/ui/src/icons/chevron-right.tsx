import type { IconProps } from "./types";

export function ChevronRightIcon({ className, ...props }: IconProps) {
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
        d="M15.5859 12.0001L8.29297 4.70718L9.70718 3.29297L18.4143 12.0001L9.70718 20.7072L8.29297 19.293L15.5859 12.0001Z"
        fill="currentColor"
      />
    </svg>
  );
}
