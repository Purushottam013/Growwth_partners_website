
import React, { useEffect, useRef, useState } from 'react';

type AnimationTypes = 'fade-in' | 'slide-up' | 'slide-in-right' | 'scale-in' | 'none';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: AnimationTypes;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  disabled?: boolean;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
  once = true,
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Skip animations if they're disabled
  if (disabled || animation === 'none') {
    return <div className={className}>{children}</div>;
  }

  useEffect(() => {
    // Clean up previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (once && observerRef.current) {
            observerRef.current.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '10px' }
    );

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [once, threshold]);

  // Generate CSS for animation
  const getAnimationStyle = () => {
    const baseStyle = {
      opacity: 0,
      transform: 'translateY(0)',
      transition: `opacity ${duration}s ease, transform ${duration}s ease`,
      transitionDelay: `${delay}s`,
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return { ...baseStyle, opacity: 0 };
        case 'slide-up':
          return { ...baseStyle, opacity: 0, transform: 'translateY(20px)' };
        case 'slide-in-right':
          return { ...baseStyle, opacity: 0, transform: 'translateX(20px)' };
        case 'scale-in':
          return { ...baseStyle, opacity: 0, transform: 'scale(0.95)' };
        default:
          return baseStyle;
      }
    }

    return {
      ...baseStyle,
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1)',
    };
  };

  return (
    <div ref={elementRef} className={className} style={getAnimationStyle()}>
      {children}
    </div>
  );
};
