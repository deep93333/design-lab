const getCachedImageUrl = (url: string) => {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&cache=7d`;
};

export const getCompanyScreenshotUrl = (url: string) => {
  return getCachedImageUrl(url);
};

export const getOgImageUrl = (url: string) => {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&meta=true&embed=image.url&cache=7d`;
};
