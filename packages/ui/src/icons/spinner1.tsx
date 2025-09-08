import type { FC, SVGProps } from "react";

export const Spinner1Icon: FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    className={className}
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
      stroke="currentColor"
      strokeOpacity="0.3"
      strokeWidth="3"
    />
    <path
      d="M20.3681 13.5C19.7463 16.9921 16.9921 19.7463 13.5 20.3681"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);
