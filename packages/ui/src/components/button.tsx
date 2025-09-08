import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Spinner1Icon } from "..";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-foreground/5 text-foreground/90 hover:bg-foreground/5",
        ghost:
          "hover:bg-foreground/5 hover:text-foreground text-foreground/60 hover:text-foreground/90",
        link: "text-primary underline-offset-4 hover:underline",
        brand: "bg-brand text-brand-foreground hover:bg-brand/90",
      },
      size: {
        xs: "h-6 px-1.5 py-1 text-xs rounded-md",
        sm: "h-7 px-2 py-1.5 text-xs rounded-lg",
        default: "h-8 px-2.5 py-2 text-sm rounded-lg",
        lg: "h-9 px-4 py-2.5 text-base rounded-lg",
        xl: "h-10 px-5 py-3 text-lg rounded-lg",
        icon: "h-8 w-8 rounded-lg",
        "icon-sm": "h-7 w-7 rounded-lg",
        "icon-xs": "h-6 w-6 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  tooltip?: string;
  tooltipPlacement?: "left" | "right" | "top" | "bottom";
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      loadingText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      tooltip,
      tooltipPlacement = "top",
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const isDisabled = disabled || loading;
    const buttonText = loading && loadingText ? loadingText : children;

    const buttonElement = (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && "w-full",
          className,
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && <Spinner1Icon className="size-4" />}
        {!loading && leftIcon && (
          <span className="flex items-center justify-center">{leftIcon}</span>
        )}
        {buttonText}
        {!loading && rightIcon && (
          <span className="flex items-center justify-center">{rightIcon}</span>
        )}
      </Comp>
    );

    if (tooltip) {
      return (
        <Tooltip content={tooltip} side={tooltipPlacement}>
          {buttonElement}
        </Tooltip>
      );
    }

    return buttonElement;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
