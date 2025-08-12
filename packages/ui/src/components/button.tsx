import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../lib/utils'
import { Tooltip } from './tooltip'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-foreground/10 text-foreground hover:bg-foreground/20',
        ghost: 'hover:bg-foreground/10 hover:text-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        brand: 'bg-brand text-brand-foreground hover:bg-brand/90',
      },
      size: {
        xs: 'h-6 px-1.5 py-1 text-xs rounded-sm',
        sm: 'h-7 px-2 py-1.5 text-xs rounded',
        default: 'h-8 px-2.5 py-2 text-sm rounded-md',
        lg: 'h-9 px-4 py-2.5 text-base rounded-lg',
        xl: 'h-10 px-5 py-3 text-lg rounded-lg',
        icon: 'h-8 w-8 rounded-md',
        'icon-sm': 'h-7 w-7 rounded-md',
        'icon-xs': 'h-6 w-6 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const LoadingSpinner = ({ className }: { className?: string }) => (
  <svg
    className={cn('animate-spin', className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

export type ButtonProps = {
  asChild?: boolean
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  tooltip?: string
  tooltipPlacement?: "left" | "right" | "top" | "bottom"
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
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
  }, ref) => {
    const Comp = asChild ? Slot : 'button'

    const isDisabled = disabled || loading
    const buttonText = loading && loadingText ? loadingText : children

    const buttonElement = (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <LoadingSpinner className="size-4" />
        )}
        {!loading && leftIcon && (
          <span className="flex items-center justify-center">
            {leftIcon}
          </span>
        )}
        {buttonText}
        {!loading && rightIcon && (
          <span className="flex items-center justify-center">
            {rightIcon}
          </span>
        )}
      </Comp>
    )

    if (tooltip) {
      return (
        <Tooltip content={tooltip} side={tooltipPlacement}>
          {buttonElement}
        </Tooltip>
      )
    }

    return buttonElement
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }