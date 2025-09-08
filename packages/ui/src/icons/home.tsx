import { IconProps } from "./types";

export function HomeIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M13.8918 1.99862C12.7896 1.10308 11.2104 1.10308 10.1082 1.99862L4.10822 6.87362C3.40709 7.44329 3 8.29858 3 9.20197V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V9.20197C21 8.29858 20.5929 7.44329 19.8918 6.87362L13.8918 1.99862Z"
        fill="currentColor"
      />
    </svg>
  );
}
