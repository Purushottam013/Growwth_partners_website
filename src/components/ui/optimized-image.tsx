
import React, { useState, useEffect, useRef, memo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  priority?: boolean;
  blurDataUrl?: string;
}

export const OptimizedImage = memo(({
  src,
  alt,
  className,
  fallbackSrc = "",
  priority = false,
  blurDataUrl,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [imgSrc, setImgSrc] = useState(priority ? src : undefined);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
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
    
    // Create new observer
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
        setImgSrc(src);
        observerRef.current?.disconnect();
      }
    }, {
      rootMargin: '200px', // Increased root margin for earlier loading
      threshold: 0.01 // Lower threshold for quicker loading
    });
    
    // Start observing if element exists
    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }
    
    // Clean up observer on unmount
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [src, priority]);
  
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
