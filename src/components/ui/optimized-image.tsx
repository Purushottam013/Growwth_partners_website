
import React, { useState, useEffect, useRef, memo, useId } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getWebPUrl, generateSrcSet, getResponsiveSizes } from "@/utils/imageOptimization";
import { ImageIcon } from "lucide-react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  priority?: boolean;
  blurDataUrl?: string;
  lazyBoundary?: string;
  sizes?: string;
}

export const OptimizedImage = memo(({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.svg",
  priority = false,
  blurDataUrl,
  lazyBoundary = "200px",
  sizes = "",
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [imgSrc, setImgSrc] = useState(priority ? getWebPUrl(src as string) : undefined);
  const [imgSrcSet, setImgSrcSet] = useState(priority ? generateSrcSet(src as string) : undefined);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const uniqueId = useId();
  const hasTriedFallback = useRef(false);
  
  // Enhanced intersection observer with better performance
  useEffect(() => {
    // Skip observer setup for priority images
    if (priority) {
      setImgSrc(getWebPUrl(src as string));
      setImgSrcSet(generateSrcSet(src as string));
      return;
    }
    
    // Clean up previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Create new observer with better parameters
    const options = {
      rootMargin: lazyBoundary, 
      threshold: 0.01
    };
    
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
        setImgSrc(getWebPUrl(src as string));
        setImgSrcSet(generateSrcSet(src as string));
        
        // Preload the image once detected
        if (src) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = getWebPUrl(src as string);
          link.id = `preload-${uniqueId}`;
          document.head.appendChild(link);
        }
        
        observerRef.current?.disconnect();
      }
    }, options);
    
    // Start observing if element exists
    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }
    
    // Clean up observer and preload link on unmount
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      const preloadLink = document.getElementById(`preload-${uniqueId}`);
      if (preloadLink) {
        document.head.removeChild(preloadLink);
      }
    };
  }, [src, priority, lazyBoundary, uniqueId]);
  
  // Handle image load complete
  const handleLoad = () => {
    setIsLoading(false);
    
    // Log successful image load to performance monitoring
    if (window.performance && window.performance.mark) {
      window.performance.mark(`image-loaded-${uniqueId}`);
    }
  };
  
  // Handle image load error
  const handleError = () => {
    // If we haven't tried the fallback yet and there is a fallbackSrc, use it
    if (!hasTriedFallback.current && fallbackSrc) {
      hasTriedFallback.current = true;
      setImgSrc(fallbackSrc);
      setImgSrcSet("");
      return;
    }
    
    // If we've already tried the fallback or there isn't one, show the error state
    setIsLoading(false);
    setError(true);
    
    console.warn(`Failed to load image: ${src}`);
  };
  
  // Determine which source to use
  const imageSrc = error || !imgSrc ? fallbackSrc : imgSrc;
  const imageSrcSet = error ? "" : imgSrcSet;
  
  // Generate correct image dimensions for width and height if provided
  const dimensions = {
    width: props.width || undefined,
    height: props.height || undefined
  };

  // Calculate aspect ratio for preventing layout shift
  const aspectRatio = dimensions.width && dimensions.height 
    ? `${dimensions.width} / ${dimensions.height}` 
    : undefined;

  return (
    <div 
      ref={elementRef}
      className={`relative ${className}`}
      style={{
        aspectRatio,
        width: dimensions.width ? `${dimensions.width}px` : undefined
      }}
      aria-label={alt || "Image"}
    >
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-[inherit] bg-gray-200 animate-pulse" />
      )}
      
      {/* Blur placeholder for better user experience */}
      {blurDataUrl && isLoading && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${blurDataUrl})`,
            filter: 'blur(10px)',
            transform: 'scale(1.1)'
          }}
          aria-hidden="true"
        />
      )}

      {/* Fallback icon for truly broken images */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-[inherit]">
          <ImageIcon className="w-10 h-10 text-gray-300" />
        </div>
      )}

      {(priority || isIntersecting) && !error && (
        <img
          src={imageSrc}
          srcSet={imageSrcSet}
          sizes={sizes || getResponsiveSizes()}
          alt={alt || ""}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          onError={handleError}
          {...dimensions}
          {...props}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = "OptimizedImage";
