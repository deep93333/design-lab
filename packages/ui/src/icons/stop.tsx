import type { FC, SVGProps } from "react";

export const StopIcon: FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  </svg>
);
