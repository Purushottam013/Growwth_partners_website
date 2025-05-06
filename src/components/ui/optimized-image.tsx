
import React, { useState, useEffect, useRef, memo, useId } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  priority?: boolean;
  blurDataUrl?: string;
  lazyBoundary?: string;
}

export const OptimizedImage = memo(({
  src,
  alt,
  className,
  fallbackSrc = "",
  priority = false,
  blurDataUrl,
  lazyBoundary = "200px",
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [imgSrc, setImgSrc] = useState(priority ? src : undefined);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const uniqueId = useId();
  
  // Set up intersection observer only once
  useEffect(() => {
    // Skip observer setup for priority images
    if (priority) {
      setImgSrc(src);
      return;
    }
    
    // Clean up previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Create new observer with better parameters
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
        setImgSrc(src);
        // Mark the image for preloading after detection
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src || '';
        link.id = `preload-${uniqueId}`;
        document.head.appendChild(link);
        
        observerRef.current?.disconnect();
      }
    }, {
      rootMargin: lazyBoundary, // Configurable root margin
      threshold: 0.01 // Lower threshold for quicker loading
    });
    
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
  };
  
  // Handle image load error
  const handleError = () => {
    setIsLoading(false);
    setError(true);
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };
  
  // Determine which source to use
  const imageSrc = error && fallbackSrc ? fallbackSrc : imgSrc;
  
  // Generate correct image dimensions for width and height if provided
  const dimensions = {
    width: props.width || undefined,
    height: props.height || undefined
  };

  return (
    <div 
      ref={elementRef}
      className={`relative ${className}`}
      style={{
        // Prevent layout shift by maintaining aspect ratio if dimensions are available
        aspectRatio: dimensions.width && dimensions.height 
          ? `${dimensions.width} / ${dimensions.height}` 
          : undefined
      }}
      aria-label={alt || "Image"}
    >
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-[inherit] bg-gray-200 animate-pulse" />
      )}
      
      {/* Use blur placeholder for better user experience */}
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

      {(priority || isIntersecting) && (
        <img
          src={imageSrc}
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
