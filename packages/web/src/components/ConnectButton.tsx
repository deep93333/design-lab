import { ArrowUpRightIcon, Button } from "@deep-design-lab/ui";
import { motion } from "framer-motion";
import { useHoverSound } from "../hooks/useHoverSound";

type ConnectButtonProps = {
  label: string;
  href: string;
  icon: React.ElementType;
  delay: number;
};

export const ConnectButton = ({
  label,
  href,
  icon,
  delay,
}: ConnectButtonProps) => {
  const MotionButton = motion(Button);
  const Icon = icon;
  const { playHoverSound } = useHoverSound();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className="w-full relative"
    >
      <MotionButton
        variant="ghost"
        size="lg"
        className="w-full group px-4 md:px-8 py-2 rounded-none"
        onClick={() => window.open(href, "_blank")}
        onMouseEnter={playHoverSound}
      >
        <Icon className="!size-5 text-zinc-400 group-hover:text-foreground/90 transition-colors duration-200" />
        <span>{label}</span>
        <div className="flex-1" />
        <ArrowUpRightIcon className="!size-4 text-zinc-400 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
        <div className="absolute inset-0 -z-10 bg-foreground/10 group-hover:bg-foreground/10 transition-colors duration-300" />
      </MotionButton>
    </motion.div>
  );
};
