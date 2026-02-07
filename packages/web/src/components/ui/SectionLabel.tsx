import { motion } from "framer-motion";
import { fadeUp } from "../../constants/animations";

type SectionLabelProps = {
  label: string;
  delay: number;
};

export const SectionLabel = ({ label, delay }: SectionLabelProps) => {
  return (
    <motion.p
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
      className="text-sm px-6 md:px-8 py-4 text-foreground/40"
    >
      {label}
    </motion.p>
  );
};
