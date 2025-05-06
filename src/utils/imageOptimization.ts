
/**
 * Image optimization utility functions
 */

/**
 * Get the WebP version of an image URL if available, otherwise return the original
 * @param imageUrl Original image URL
 * @returns WebP version of the image or original if WebP not available
 */
export const getWebPUrl = (imageUrl: string): string => {
  // Skip if URL is already WebP or is a data URL
  if (!imageUrl || imageUrl.endsWith('.webp') || imageUrl.startsWith('data:')) {
    return imageUrl;
  }

  // Handle external URLs that might not support WebP
  if (imageUrl.startsWith('http') && !imageUrl.includes('lovable-uploads')) {
    return imageUrl;
  }

  // Extract the path and extension
  const lastDotIndex = imageUrl.lastIndexOf('.');
  
  // If no extension found, return original
  if (lastDotIndex === -1) {
    return imageUrl;
  }

  // Replace extension with .webp
  return imageUrl.substring(0, lastDotIndex) + '.webp';
};

/**
 * Calculate responsive image srcset based on original URL
 * @param imageUrl Original image URL
 * @param widths Array of widths to generate srcset for
 * @returns srcset string for responsive images
 */
export const generateSrcSet = (
  imageUrl: string, 
  widths: number[] = [640, 960, 1280, 1600]
): string => {
  // Skip if URL is a data URL
  if (!imageUrl || imageUrl.startsWith('data:')) {
    return '';
  }

  // Get WebP version of the URL
  const webpUrl = getWebPUrl(imageUrl);
  
  // Generate srcset attribute value
  return widths
    .map(width => `${webpUrl} ${width}w`)
    .join(', ');
};

/**
 * Get appropriate sizes attribute for responsive images
 */
export const getResponsiveSizes = (): string => {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
};
