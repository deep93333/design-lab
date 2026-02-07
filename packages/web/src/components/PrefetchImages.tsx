import { useEffect } from "react";

type PrefetchImagesProps = {
  urls: string[];
};

export const PrefetchImages = ({ urls }: PrefetchImagesProps) => {
  useEffect(() => {
    // Prefetch images on mount
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      // Images are now cached by the browser
    });
  }, [urls]);

  // This component doesn't render anything
  return null;
};
