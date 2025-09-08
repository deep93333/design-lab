import type { FC, SVGProps } from "react";

export const MacintoshIcon: FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
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
      d="M4 6C4 3.79086 5.79086 2 8 2H16C18.2091 2 20 3.79086 20 6V15C20 16.0144 19.6224 16.9407 19 17.6458V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V17.6458C4.37764 16.9407 4 16.0144 4 15V6ZM8 4C6.89543 4 6 4.89543 6 6V15C6 16.1046 6.89543 17 8 17H16C17.1046 17 18 16.1046 18 15V6C18 4.89543 17.1046 4 16 4H8ZM7 6C7 5.44772 7.44772 5 8 5H16C16.5523 5 17 5.44772 17 6V12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12V6ZM13 15C13 14.4477 13.4477 14 14 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H14C13.4477 16 13 15.5523 13 15Z"
      fill="currentColor"
    />
  </svg>
);


