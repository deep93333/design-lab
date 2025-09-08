import type { IconProps } from "./types";

export function ChevronUpIcon({ className, ...props }: IconProps) {
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
        d="M12.0001 5.58569L20.7072 14.2928L19.293 15.707L12.0001 8.41412L4.70718 15.707L3.29297 14.2928L12.0001 5.58569Z"
        fill="currentColor"
      />
    </svg>
  );
}
