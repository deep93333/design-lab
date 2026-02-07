import { getCompanyScreenshotUrl } from "../utils/screenshot";

type CachedImageProps = {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
};

export const CachedImage = ({
  src,
  alt,
  className,
  onLoad,
  onError,
}: CachedImageProps) => {
  const cachedUrl = getCompanyScreenshotUrl(src);

  return (
    <img
      src={cachedUrl}
      alt={alt}
      className={className}
      loading="lazy"
      onLoad={onLoad}
      onError={onError}
      crossOrigin="anonymous"
    />
  );
};
