import { IconProps } from "./types";

export function ChevronLeftIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.41436 12.0001L15.7073 4.70718L14.293 3.29297L5.58594 12.0001L14.293 20.7072L15.7073 19.293L8.41436 12.0001Z"
        fill="currentColor"
      />
    </svg>
  );
}
