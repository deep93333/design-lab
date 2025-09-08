import type { FC, SVGProps } from "react";

export const ImageIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M16 20L10.1213 14.1214C8.94975 12.9498 7.05025 12.9498 5.87868 14.1214L4 16"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M14.5 11.5C15.6046 11.5 16.5 10.6046 16.5 9.5C16.5 8.39543 15.6046 7.5 14.5 7.5C13.3954 7.5 12.5 8.39543 12.5 9.5C12.5 10.6046 13.3954 11.5 14.5 11.5Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
