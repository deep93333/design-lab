import { cn } from "@deep-design-lab/capture";
import { motion } from "framer-motion";

type ContentBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export const ContentBox = ({ children, className }: ContentBoxProps) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  
  return (
    <div className={cn("relative flex flex-col items-start justify-start w-full py-4 md:py-8", className)}>
      <motion.div className="w-1.5 h-1.5 z-10 border-l border-l-foreground/30 border-t border-t-foreground/30 absolute left-[-0.5px] bg-transparent top-[-0.5px] " initial={initial} animate={animate} transition={{ delay: 1 }}></motion.div>
      <motion.div className="w-1.5 h-1.5 z-10 border-l border-l-foreground/30 border-b border-b-foreground/30 absolute left-[-0.5px] bg-transparent bottom-[-0.5px]" initial={initial} animate={animate} transition={{ delay: 1 }}></motion.div>
      {children}
      <motion.div className="w-1.5 h-1.5 z-10 border-r border-r-foreground/30 border-t border-t-foreground/30 absolute right-[-0.5px] bg-transparent top-[-0.5px]" initial={initial} animate={animate} transition={{ delay: 1 }}></motion.div>
      <motion.div className="w-1.5 h-1.5 z-10 border-r border-r-foreground/30 border-b border-b-foreground/30 absolute right-[-0.5px] bg-transparent bottom-[-0.5px]" initial={initial} animate={animate} transition={{ delay: 1 }}></motion.div>
    </div>
  );
};
