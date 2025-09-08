import type { IconProps } from "./types";


export function ImageFilledIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
      aria-hidden="true"
    >
      <path
        d="M14.5 7C13.1193 7 12 8.11929 12 9.5C12 10.8807 13.1193 12 14.5 12C15.8807 12 17 10.8807 17 9.5C17 8.11929 15.8807 7 14.5 7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.525 19.8622 20.7842 18.3892 20.975L18.4142 21H6C4.34315 21 3 19.6569 3 18V6ZM16.4142 19L10.1213 12.7071C8.94975 11.5355 7.05025 11.5355 5.87868 12.7071L5 13.5858V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H16.4142Z"
        fill="currentColor"
      />
    </svg>
  );
}
