import React, { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

interface LazyIframeProps {
  src: string;
  title: string;
  thumbnail?: string;
}

export const LazyIframe = ({ src, title, thumbnail }: LazyIframeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {!isLoaded && isInView ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="text-center">
            <div className="mb-4 bg-white/20 backdrop-blur-sm rounded-full p-6 inline-flex items-center justify-center hover:bg-white/30 transition-colors">
              <Play className="w-12 h-12 text-white fill-white" />
            </div>
            <p className="text-white text-sm">Click to load video</p>
          </div>
        </div>
      ) : isLoaded ? (
        <iframe
          allowTransparency={true}
          title={title}
          allowFullScreen
          frameBorder="0"
          scrolling="no"
          className="wistia_embed w-full h-full"
          name="wistia_embed"
          src={src}
          loading="lazy"
        />
      ) : null}
    </div>
  );
};
