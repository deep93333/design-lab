import { useRef } from "react";
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

  const handleMouseEnter = () => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      
      // Calculate center of the link
      const centerX = rect.left + rect.width / 2;
      const topY = rect.bottom + 12;
      
      show({
        name,
        url,
        ogImage,
        position: { x: centerX, y: topY },
      });
    }
  };

  const handleMouseLeave = () => {
    hide();
  };

  return (
    <span className="inline-flex items-center gap-0.5 relative">
      <a
        ref={linkRef}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground px-2 inline-flex items-center gap-1 underline decoration-foreground/20 underline-offset-4 underline-w-full group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {inlineIcon}
        {children}
              <ArrowUpRight className="w-3 h-3 text-foreground/30" strokeWidth={1.5} />

      </a>
    </span>
  );
};
