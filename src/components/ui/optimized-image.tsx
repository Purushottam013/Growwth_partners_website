
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  priority?: boolean;
  blurDataUrl?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = "",
  priority = false,
  blurDataUrl,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [imgSrc, setImgSrc] = useState(priority ? src : undefined);
  const [elementId] = useState(`image-${Math.random().toString(36).substring(7)}`);

  // Use IntersectionObserver for better lazy loading
  useEffect(() => {
    if (priority) {
      setImgSrc(src);
      return;
    } // Skip observer for priority images
    
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
        setImgSrc(src);
        observer.disconnect();
      }
    }, {
      rootMargin: '200px', // Start loading when image is 200px from viewport
      threshold: 0.1
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [src, priority, elementId]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  // Determine which source to use
  const imageSrc = error && fallbackSrc ? fallbackSrc : imgSrc;

  return (
    <div 
      id={elementId}
      className={`relative ${className}`}
    >
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-[inherit] bg-gray-200 animate-pulse" />
      )}
      
      {/* Use blur placeholder for LCP optimization */}
      {blurDataUrl && isLoading && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${blurDataUrl})`,
            filter: 'blur(10px)',
            transform: 'scale(1.1)'
          }}
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
          {...props}
        />
      )}
    </div>
  );
}
