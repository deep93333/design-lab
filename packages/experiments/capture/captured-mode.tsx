import { motion } from "motion/react"
import { Shortcut } from "./shortcut"

export const SpinnerCheckAnimation = () => {

  return (
    <motion.div
      variants={{
        loading: { opacity: 1, scale: 1 },
        complete: { opacity: 0, scale: 0 }
      }}
      transition={{ duration: 0.3 }}
    >
      <svg
        className={"size-5 relative"}
        viewBox="0 0 24 24"
        fill="none"
      >
        {/* Background circle */}
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          className="text-foreground/20"
          fill="none"
        />

        {/* Dotted cross pattern */}
        <g className="text-background/30">
          {/* Horizontal dotted line */}
          <line
            x1="7"
            y1="12"
            x2="17"
            y2="12"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="1,1"
          />
          {/* Vertical dotted line */}
          <line
            x1="12"
            y1="7"
            x2="12"
            y2="17"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="1,1"
          />
        </g>

        {/* Animated progress arc */}
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          className="text-brand"
          style={{
            transformOrigin: "12px 12px",
            transform: "rotate(-90deg)"
          }}
          animate={{
            strokeDasharray: ["0 63", "63 63"],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
        />
        <motion.g
          className="size-4 absolute top-0 left-0 bg-brand rounded-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 2, type: "spring", stiffness: 400, damping: 25 }}
        >
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            fill="currentColor"
            className="text-brand"
          />
          <svg viewBox="0 0 24 24" fill="none" className="bg-background size-2">
            <path d="M6 12.5L9.5 16L18 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </motion.g>
      </svg>

    </motion.div>


  )
}

export const CapturedMode = () => {
  return (
    <motion.div
      className="flex flex-col gap-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.div
        className="flex h-[32px] pl-1.5 pr-3 fleex-row gap-2 items-center"
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SpinnerCheckAnimation />
        <motion.span className="text-sm font-medium text-foreground" layout>Captured</motion.span>
        <Shortcut shortcut="option+S" className="opacity-100 text-foreground/50" />
      </motion.div>
    </motion.div>
  )
} 