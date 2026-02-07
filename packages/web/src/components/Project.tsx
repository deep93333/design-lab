import { ArrowUpRightIcon } from "@deep-design-lab/ui";
import { motion } from "framer-motion";
import { useHoverSound } from "../hooks/useHoverSound";
import { fadeUp } from "../constants/animations";

type ProjectProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
  comingSoon?: boolean;
};

export const Project = ({
  title,
  description,
  icon,
  href,
  comingSoon,
}: ProjectProps) => {
  const { playHoverSound } = useHoverSound();

  return (
    <button
      className="flex py-4 px-4 md:px-8 relative group hover:bg-[#f1f1f1]  cursor-pointer flex-row items-start justify-start gap-3 w-full text-left"
      onClick={() => {
        window.open(href, "_blank");
      }}
      onMouseEnter={playHoverSound}
      type="button"
    >
      <motion.div className="flex items-center justify-center !w-10 !h-10 shrink-0 relative"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          delay: 2.9,
          ease: "easeOut",
        }}
      >
        <img src={icon} alt={title} className="w-full h-full rounded-lg" />
        <div className="absolute inset-0 rounded-lg ring-[0.65px] ring-foreground/10 ring-inset" />
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
        className="flex flex-col items-start justify-center gap-0 w-full"
      >
        <div className="flex flex-row items-center gap-2">
          <motion.p className="text-sm text-foreground/90 leading-relaxed">
            {title}
          </motion.p>
          {comingSoon && (
            <span className="text-[10px] font-mono bg-foreground/10 text-zinc-600 tracking-widest text-cyan-500 leading-relaxed px-1.5 py-0.5 rounded-md">
              COMING SOON
            </span>
          )}
        </div>
        <p className="text-sm text-foreground/60 leading-relaxed">
          {description}
        </p>
        <div className="flex-1" />
      </motion.div>
      <ArrowUpRightIcon className="!size-5 text-zinc-400 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
    </button>
  );
};
