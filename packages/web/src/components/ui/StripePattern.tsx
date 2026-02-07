import { cn } from "@deep-design-lab/capture";
import { motion } from "framer-motion";

type StripePatternProps = {
  width?: string | number;
  height?: string | number;
  stripeColor?: string;
  backgroundColor?: string;
  stripeWidth?: string | number;
  stripeSpacing?: string | number;
  angle?: number;
  className?: string;
};

export const StripePattern = ({
  width = "100%",
  height = "200px",
  stripeColor = "#e1e1e1",
  backgroundColor = "#ffffff",
  stripeWidth = "1px",
  stripeSpacing = "20px",
  angle = 45,
  className,
}: StripePatternProps) => {
  const stripePattern = {
    backgroundImage: `repeating-linear-gradient(
      ${angle}deg,
      ${backgroundColor} 0px,
      ${backgroundColor} ${stripeSpacing},
      ${stripeColor} ${stripeSpacing},
      ${stripeColor} calc(${stripeSpacing} + ${stripeWidth}),
      ${backgroundColor} calc(${stripeSpacing} + ${stripeWidth}),
      ${backgroundColor} calc(${stripeSpacing} * 2)
    )`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.6,
        delay: 1,
        ease: "easeOut",
      }}
      style={{
        width,
        height,
        ...stripePattern,
      }}
      className={cn("relative ring-[0.65px] ring-foreground/10", className)}
    />
  );
};
