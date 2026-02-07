// Generate a cacheable URL with proper cache headers
const getCachedImageUrl = (url: string) => {
  // Use Microlink with caching parameters
  // cache=7d means 7 days - reduces API calls significantly
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&cache=7d`;
};

export const getCompanyScreenshotUrl = (url: string) => {
  return getCachedImageUrl(url);
};
