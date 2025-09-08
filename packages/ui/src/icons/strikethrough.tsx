import { cn } from "../lib/utils";

export const StrikethroughIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M3 12L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M17.4203 7C17.1764 5.82762 16.1565 3 11.9949 3C7.99489 3 6.49489 5.60115 6.49489 7.5C6.49489 10.4556 9.22467 11.2273 11.9949 11.9667M6.125 17C6.49925 18.1724 7.83326 21 11.9949 21C15.9949 21 17.7449 18.3988 17.7449 16.5C17.7449 16.3259 17.7354 16.1594 17.717 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
