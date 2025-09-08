import type { IconProps } from "./types";


export const PlayIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M11.1967 2.71828C8.53683 0.970354 5 2.8783 5 6.0611V17.9387C5 21.1215 8.53684 23.0294 11.1967 21.2815L20.234 15.3427C22.6384 13.7627 22.6384 10.2371 20.234 8.65706L11.1967 2.71828Z"
      fill="currentColor"
    />
  </svg>
);
