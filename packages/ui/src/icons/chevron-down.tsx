import type { IconProps } from "./types";

export function ChevronDownIcon({ className, ...props }: IconProps) {
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
        d="M12.0001 15.5859L4.70718 8.29297L3.29297 9.70718L12.0001 18.4143L20.7072 9.70718L19.293 8.29297L12.0001 15.5859Z"
        fill="currentColor"
      />
    </svg>
  );
}
