import { cn } from "../lib/utils";

export const CameraIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.77735 4.7812C8.51921 3.6684 9.76814 3 11.1056 3H12.8944C14.2319 3 15.4808 3.6684 16.2226 4.7812L16.4619 5.14002C16.82 5.67729 17.423 6 18.0688 6C20.2399 6 22 7.76008 22 9.93124V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V9.93125C2 7.76008 3.76008 6 5.93125 6C6.57696 6 7.17996 5.67729 7.53814 5.14002L7.77735 4.7812ZM12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9Z"
        fill="currentColor"
      />
    </svg>
  );
};
