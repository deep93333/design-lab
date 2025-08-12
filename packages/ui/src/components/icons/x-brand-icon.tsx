import * as React from 'react'
import { type IconProps } from './types'

const XBrandIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = '1em', title, className, ...props }, ref) => {
    const ariaHidden = title ? undefined : true

    return (
      <svg
        ref={ref}
        role="img"
        aria-hidden={ariaHidden}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...props}
      >
        {title ? <title>{title}</title> : null}
        <path
          d="M17.4033 3.5H20.2852L13.989 10.701L21.396 20.5H15.5964L11.054 14.557L5.85637 20.5H2.97269L9.70709 12.7977L2.60156 3.5H8.54839L12.6544 8.93215L17.4033 3.5ZM16.3918 18.7738H17.9887L7.68067 5.13549H5.96702L16.3918 18.7738Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)

XBrandIcon.displayName = 'XBrandIcon'

export { XBrandIcon }


