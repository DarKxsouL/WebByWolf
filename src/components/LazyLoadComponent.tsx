'use client'
import { useEffect, useRef, useState } from 'react';

interface LazyLoadComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  minHeight?: string;
}

export const LazyLoadComponent = ({
  children,
  fallback = null,
  threshold = 0.1,
  rootMargin = '200px',
  minHeight = '100vh',
}: LazyLoadComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoaded) return;

    // Create observer with a small delay to ensure it triggers properly
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay to ensure render
          setTimeout(() => {
            setIsLoaded(true);
          }, 50);
          
          if (ref.current && observerRef.current) {
            observerRef.current.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observerRef.current = observer;
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && observerRef.current) {
        observerRef.current.unobserve(currentRef);
      }
    };
  }, [isLoaded, threshold, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isLoaded ? 'auto' : minHeight }}>
      {isLoaded ? children : fallback}
    </div>
  );
};
