import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CachedImage } from "./CachedImage";

type CompanyPopoverProps = {
  name: string;
  url: string;
  inlineIcon: React.ReactNode;
  ogImage?: string;
  children: React.ReactNode;
};

export const CompanyPopover = ({
  name,
  url,
  inlineIcon,
  ogImage,
  children,
}: CompanyPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!popoverRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        popoverRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: -10,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(popoverRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground px-2 inline-flex items-center gap-1 underline decoration-foreground/20 underline-offset-4 underline-w-full"
      >
        {inlineIcon}
        {children}
      </a>

      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-[9999] pointer-events-none"
          style={{ opacity: 0 }}
        >
          <div className="w-[480px] rounded-xl overflow-hidden bg-popover shadow-2xl ring-[0.8px] ring-foreground/10">
            {ogImage && !imageError && (
              <div className="w-full aspect-[16/10] overflow-hidden bg-foreground/5 relative">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
                  </div>
                )}
                <CachedImage
                  src={url}
                  alt={`${name} preview`}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
