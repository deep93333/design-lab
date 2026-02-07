import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../lib/utils'

const hoverCardContentVariants = cva(
  'z-[9999] w-64 rounded-xl ring-[0.8px] ring-foreground/10 bg-popover p-4 text-popover-foreground shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    variants: {
      size: {
        sm: 'w-48 p-3 text-sm',
        default: 'w-64 p-4 text-sm',
        lg: 'w-80 p-5 text-base',
        xl: 'w-96 p-6 text-base',
      },
      variant: {
        default: 'bg-popover text-popover-foreground border-border',
        dark: 'bg-zinc-900 text-zinc-50 border-zinc-800',
        light: 'bg-white text-zinc-900 border-zinc-200',
        accent: 'bg-accent text-accent-foreground border-accent',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  }
)

export type HoverCardContentProps = {
  className?: string
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  alignOffset?: number
  avoidCollisions?: boolean
  collisionBoundary?: Element | null
  collisionPadding?: number | Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>
  arrowPadding?: number
  sticky?: 'partial' | 'always'
  hideWhenDetached?: boolean
} & React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> &
  VariantProps<typeof hoverCardContentVariants>

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Trigger
    ref={ref}
    className={cn('cursor-pointer', className)}
    {...props}
  />
))
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(({
  className,
  align = 'center',
  side = 'bottom',
  sideOffset = 4,
  size,
  variant,
  ...props
}, ref) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      side={side}
      sideOffset={sideOffset}
      className={cn(hoverCardContentVariants({ size, variant }), className)}
      {...props}
    />
  </HoverCardPrimitive.Portal>
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

const HoverCardArrow = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Arrow
    ref={ref}
    className={cn('fill-popover', className)}
    {...props}
  />
))
HoverCardArrow.displayName = HoverCardPrimitive.Arrow.displayName

export type HoverCardHeaderProps = {
  className?: string
  children: React.ReactNode
}

const HoverCardHeader = React.forwardRef<
  HTMLDivElement,
  HoverCardHeaderProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 pb-3', className)}
    {...props}
  >
    {children}
  </div>
))
HoverCardHeader.displayName = 'HoverCardHeader'

export type HoverCardTitleProps = {
  className?: string
  children: React.ReactNode
}

const HoverCardTitle = React.forwardRef<
  HTMLHeadingElement,
  HoverCardTitleProps
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-sm font-semibold leading-none tracking-tight', className)}
    {...props}
  >
    {children}
  </h3>
))
HoverCardTitle.displayName = 'HoverCardTitle'

export type HoverCardDescriptionProps = {
  className?: string
  children: React.ReactNode
}

const HoverCardDescription = React.forwardRef<
  HTMLParagraphElement,
  HoverCardDescriptionProps
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-xs text-muted-foreground', className)}
    {...props}
  >
    {children}
  </p>
))
HoverCardDescription.displayName = 'HoverCardDescription'

export type HoverCardBodyProps = {
  className?: string
  children: React.ReactNode
}

const HoverCardBody = React.forwardRef<
  HTMLDivElement,
  HoverCardBodyProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm', className)}
    {...props}
  >
    {children}
  </div>
))
HoverCardBody.displayName = 'HoverCardBody'

export type HoverCardFooterProps = {
  className?: string
  children: React.ReactNode
}

const HoverCardFooter = React.forwardRef<
  HTMLDivElement,
  HoverCardFooterProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-3', className)}
    {...props}
  >
    {children}
  </div>
))
HoverCardFooter.displayName = 'HoverCardFooter'

export {
  HoverCard, HoverCardArrow, HoverCardBody, HoverCardContent, hoverCardContentVariants, HoverCardDescription, HoverCardFooter, HoverCardHeader,
  HoverCardTitle, HoverCardTrigger
}