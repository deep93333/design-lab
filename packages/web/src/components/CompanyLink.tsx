import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@deep-design-lab/ui";
import { useState } from "react";
import { CachedImage } from "./CachedImage";

type CompanyLinkProps = {
  name: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  inlineIcon: React.ReactNode;
  ogImage?: string;
};

export const CompanyLink = ({
  name,
  url,
  inlineIcon,
  ogImage,
}: CompanyLinkProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground px-2 inline-flex items-center gap-1 underline decoration-foreground/20 underline-offset-4 underline-w-full"
        >
          {inlineIcon}
          {name}
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-[480px] p-0 overflow-hidden">
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
      </HoverCardContent>
    </HoverCard>
  );
};
