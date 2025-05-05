
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = "",
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  // Determine which source to use
  const imageSrc = error && fallbackSrc ? fallbackSrc : src;

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-[inherit] bg-gray-200 animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={alt || ""}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        fetchPriority={priority ? "high" : "auto"}
        {...props}
      />
    </div>
  );
}
