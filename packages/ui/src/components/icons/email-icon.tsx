import * as React from 'react'
import { type IconProps } from './types'

const EmailIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.8582 6.94061C21.3939 5.2456 19.8424 4 18 4H6C4.15761 4 2.60615 5.2456 2.14179 6.94061C4.67197 9.44994 8.15496 11 12 11C15.845 11 19.328 9.44994 21.8582 6.94061Z"
          fill="currentColor"
        />
        <path
          d="M22 9.49074C19.2608 11.6866 15.7838 13 12 13C8.21621 13 4.7392 11.6866 2 9.49074V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V9.49074Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)

EmailIcon.displayName = 'EmailIcon'

export { EmailIcon }


