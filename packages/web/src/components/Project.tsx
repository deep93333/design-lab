import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useHoverSound } from "../hooks/useHoverSound";
import { useSharedPopover } from "./SharedPopover";
import { fadeUp } from "../constants/animations";

type ProjectProps = {
  title: string;
  description: string;
  href: string;
  ogImage?: string;
  year: string;
  index?: number;
};

export const Project = ({
  title,
  description,
  href,
  ogImage,
  year,
  index = 0,
}: ProjectProps) => {
  const { playHoverSound } = useHoverSound();
  const { show, hide, isActive } = useSharedPopover();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const showingForUrlRef = useRef<string | null>(null);

  const showPopover = useCallback(() => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const topY = rect.bottom + 12;

      show({
        name: title,
        url: href,
        ogImage: ogImage ?? href,
        useOgImage: true,
        position: { x: centerX, y: topY },
      });
      showingForUrlRef.current = href;
    }
  }, [title, href, ogImage, show]);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (isActive && showingForUrlRef.current === href) {
        return;
      }
      e.preventDefault();
      showPopover();
    },
    [isActive, href, showPopover]
  );

  return (
    <motion.a
      ref={linkRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.4,
        delay: 0.6 + index * 0.1,
        ease: "easeOut",
      }}
      className="group relative flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4 py-3 px-6 md:px-8 w-full transition-opacity duration-150"
      onMouseEnter={() => {
        playHoverSound();
        showPopover();
      }}
      onMouseLeave={hide}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center gap-4">
        <span className="text-sm text-foreground/40 tabular-nums shrink-0 w-10">{year}</span>
        <span className="text-sm text-foreground/90 inline-flex items-center gap-1.5 group-hover:opacity-100 transition-opacity duration-150">
          <img
            src={`https://www.google.com/s2/favicons?domain=${new URL(ogImage ?? href).hostname}&sz=128`}
            alt=""
            className="w-3.5 h-3.5 rounded-sm"
          />
          {title}
        </span>
      </div>
      <span className="text-sm text-foreground/40 md:text-right pl-14 md:pl-0">{description}</span>
    </motion.a>
  );
};
