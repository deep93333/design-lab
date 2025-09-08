import { type IconProps } from "./index";

export function FilterIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M6 3C4.34315 3 3 4.34315 3 6V7.17157C3 7.96722 3.31607 8.73028 3.87868 9.29289L8.70711 14.1213C8.89464 14.3089 9 14.5632 9 14.8284V20.057C9 21.4534 10.3947 22.42 11.7022 21.9297L13.7022 21.1797C14.4829 20.8869 15 20.1407 15 19.307V14.8284C15 14.5632 15.1054 14.3089 15.2929 14.1213L20.1213 9.29289C20.6839 8.73028 21 7.96722 21 7.17157V6C21 4.34315 19.6569 3 18 3H6Z"
        fill="currentColor"
      />
    </svg>
  );
}
