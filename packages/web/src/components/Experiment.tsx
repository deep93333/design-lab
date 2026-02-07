import { cn } from "@deep-design-lab/capture";
import { motion } from "framer-motion";
import { fadeUp } from "../constants/animations";

type ExperimentProps = {
  title: string;
  description: string;
  component: React.ReactNode;
  className?: string;
};

export const Experiment = ({
  title,
  description,
  component,
  className,
}: ExperimentProps) => {
  return (
    <div
      className={cn(
        "flex px-6 md:px-8 flex-col items-start justify-start w-full",
        className,
      )}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          delay: 3.5,
          ease: "easeOut",
        }}
        className="w-full overflow-hidden bg-[#f1f1f1] relative aspect-[16/12] flex flex-col items-start justify-start"
      >
        {component}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          delay: 2.9,
          ease: "easeOut",
        }}
        className="flex pt-4 pb-8 flex-col items-start justify-start gap-1 w-full"
      >
        <motion.p className="text-sm font-medium text-foreground/90 leading-relaxed">
          {title}
        </motion.p>
        <p className="text-sm text-foreground/60 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};
