import { useRef, useCallback } from "react";
import { useHoverSound } from "../hooks/useHoverSound";
import { useSharedPopover } from "./SharedPopover";

type ProjectProps = {
  title: string;
  description: string;
  href: string;
  ogImage?: string;
  year: string;
};

export const Project = ({
  title,
  description,
  href,
  ogImage,
  year,
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
    <a
      ref={linkRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between gap-4 py-3 px-4 md:px-8 w-full transition-opacity duration-150"
      onMouseEnter={() => {
        playHoverSound();
        showPopover();
      }}
      onMouseLeave={hide}
      onTouchEnd={handleTouchEnd}
    >
      <span className="text-sm text-foreground/40 tabular-nums shrink-0 w-10">{year}</span>
      <span className="text-sm text-foreground/90 flex-1 inline-flex items-center gap-1.5 group-hover:opacity-100 transition-opacity duration-150">
        <img
          src={`https://www.google.com/s2/favicons?domain=${new URL(ogImage ?? href).hostname}&sz=128`}
          alt=""
          className="w-3.5 h-3.5 rounded-sm"
        />
        {title}
      </span>
      <span className="text-sm text-foreground/40 text-right shrink-0">{description}</span>
    </a>
  );
};
