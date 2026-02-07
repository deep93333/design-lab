import { useRef, useCallback } from "react";
import { useSharedPopover } from "./SharedPopover";
import { ArrowUpRight } from "lucide-react";

type CompanyLinkProps = {
  name: string;
  url: string;
  inlineIcon: React.ReactNode;
  ogImage?: string;
  children: React.ReactNode;
};

export const CompanyLinkWithSharedPopover = ({
  name,
  url,
  inlineIcon,
  ogImage,
  children,
}: CompanyLinkProps) => {
  const { show, hide, isActive } = useSharedPopover();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const showingForUrlRef = useRef<string | null>(null);

  const showPopover = useCallback(() => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const topY = rect.bottom + 12;

      show({
        name,
        url,
        ogImage,
        position: { x: centerX, y: topY },
      });
      showingForUrlRef.current = url;
    }
  }, [name, url, ogImage, show]);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (isActive && showingForUrlRef.current === url) {
        return;
      }

      e.preventDefault();
      showPopover();
    },
    [isActive, url, showPopover]
  );

  return (
    <span className="inline-flex items-center gap-0.5 relative">
      <a
        ref={linkRef}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground px-2 inline-flex items-center gap-1 underline decoration-foreground/20 underline-offset-4 underline-w-full group"
        onMouseEnter={showPopover}
        onMouseLeave={hide}
        onTouchEnd={handleTouchEnd}
      >
        {inlineIcon}
        {children}
        <ArrowUpRight className="w-3 h-3 text-foreground/30" strokeWidth={1.5} />
      </a>
    </span>
  );
};
