import * as React from 'react'
import { type IconProps } from './types'

const ArrowUpRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 6.5C8 5.67157 8.67157 5 9.5 5H17.5C18.3284 5 19 5.67157 19 6.5V14.5C19 15.3284 18.3284 16 17.5 16C16.6716 16 16 15.3284 16 14.5V10.1213L7.56066 18.5607C6.97487 19.1464 6.02513 19.1464 5.43934 18.5607C4.85355 17.9749 4.85355 17.0251 5.43934 16.4393L13.8787 8H9.5C8.67157 8 8 7.32843 8 6.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)

ArrowUpRightIcon.displayName = 'ArrowUpRightIcon'

export { ArrowUpRightIcon }


