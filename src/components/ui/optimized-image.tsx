import React, { useState, useEffect, useRef, memo } from "react";
import { nanoid } from "nanoid";
import { Skeleton } from "@/components/ui/skeleton";
import { getWebPUrl, generateSrcSet, getResponsiveSizes } from "@/utils/imageOptimization";
import { ImageIcon } from "lucide-react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** URL to use if both WebP and original fail */
  fallbackSrc?: string;
  /** Eager load immediately */
  priority?: boolean;
  /** Blur placeholder data URI */
  blurDataUrl?: string;
  /** IntersectionObserver rootMargin */
  lazyBoundary?: string;
  /** sizes attribute for srcSet */
  sizes?: string;
}

const OptimizedImageComponent = ({
  src,
  alt,
  fallbackSrc,
  priority = false,
  blurDataUrl,
  lazyBoundary = "200px",
  sizes = "",
  width,
  height,
  className = "",
  style,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [imgSrc, setImgSrc] = useState<string | undefined>(
    priority ? getWebPUrl(src as string) : undefined
  );
  const [imgSrcSet, setImgSrcSet] = useState<string | undefined>(
    priority ? generateSrcSet(src as string) : undefined
  );
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriedFallback = useRef(false);
  const idRef = useRef<string>(nanoid());

  const effectiveFallback = fallbackSrc ?? (src as string);

  useEffect(() => {
    if (priority || typeof window === "undefined") {
      const webp = getWebPUrl(src as string);
      setImgSrc(webp);
      setImgSrcSet(generateSrcSet(src as string) || "");
      setIsLoading(false);
      return;
    }
    observerRef.current?.disconnect();
    const options = { rootMargin: lazyBoundary, threshold: 0 };
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
        const webp = getWebPUrl(src as string);
        setImgSrc(webp);
        setImgSrcSet(generateSrcSet(src as string) || "");
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = webp;
        link.id = `preload-${idRef.current}`;
        document.head.appendChild(link);
        observerRef.current?.disconnect();
      }
    }, options);
    const el = elementRef.current;
    if (el) observerRef.current.observe(el);
    return () => {
      observerRef.current?.disconnect();
      const preloadLink = document.getElementById(`preload-${idRef.current}`);
      if (preloadLink) document.head.removeChild(preloadLink);
    };
  }, [src, priority, lazyBoundary]);

  const handleLoad = () => {
    setIsLoading(false);
    if (typeof window !== "undefined" && window.performance?.mark) {
      window.performance.mark(`image-loaded-${idRef.current}`);
    }
  };

  const handleError = () => {
    if (!hasTriedFallback.current) {
      hasTriedFallback.current = true;
      if (imgSrc && imgSrc !== (src as string)) {
        setImgSrc(src as string);
      } else {
        setImgSrc(effectiveFallback);
      }
      setImgSrcSet("");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setError(true);
      console.warn(`Failed to load image: ${src}`);
    }
  };

  const widthNum = typeof width === "number" ? width : undefined;
  const heightNum = typeof height === "number" ? height : undefined;

  const wrapperStyle: React.CSSProperties =
    widthNum && heightNum
      ? { position: "relative", width: `${widthNum}px`, paddingBottom: `${(heightNum / widthNum) * 100}%` }
      : { position: "relative", width: widthNum ? `${widthNum}px` : "100%" };

  const imgStyle: React.CSSProperties =
    widthNum && heightNum
      ? { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", ...style }
      : { width: "100%", height: "auto", ...style };

  const imageSrcValue = error || !imgSrc ? effectiveFallback : imgSrc;
  const imageSrcSetValue = error ? "" : imgSrcSet || "";

  return (
    <div
      ref={elementRef}
      className="overflow-hidden"
      style={wrapperStyle}
      aria-label={alt || "Image"}
    >
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-[inherit] bg-gray-200 animate-pulse" />
      )}
      {blurDataUrl && isLoading && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blurDataUrl})`, filter: "blur(10px)", transform: "scale(1.1)" }}
          aria-hidden="true"
        />
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <ImageIcon className="w-10 h-10 text-gray-300" />
        </div>
      )}
      {(priority || isIntersecting) && (
        <img
          src={imageSrcValue}
          srcSet={imageSrcSetValue}
          sizes={sizes || getResponsiveSizes()}
          alt={alt || ""}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onLoad={handleLoad}
          onError={handleError}
          className={className}
          style={imgStyle}
          {...(widthNum ? { width: widthNum } : {})}
          {...(heightNum ? { height: heightNum } : {})}
          {...props}
        />
      )}
    </div>
  );
};

export const OptimizedImage = memo(
  OptimizedImageComponent,
  (prev, next) =>
    prev.src === next.src &&
    prev.priority === next.priority &&
    prev.className === next.className &&
    prev.width === next.width &&
    prev.height === next.height
);

OptimizedImage.displayName = "OptimizedImage";
