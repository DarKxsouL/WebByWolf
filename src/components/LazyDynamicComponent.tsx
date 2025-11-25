'use client'
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

interface LazyDynamicComponentProps {
  importFunc: () => Promise<any>;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  minHeight?: string;
}

export const LazyDynamicComponent = ({
  importFunc,
  fallback = null,
  threshold = 0.1,
  rootMargin = '-50px',
  minHeight = '100vh',
}: LazyDynamicComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [Component, setComponent] = useState<any>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !loadedRef.current) {
          loadedRef.current = true;
          try {
            const module = await importFunc();
            const ComponentToRender = module.default;
            setComponent(() => ComponentToRender);
            setIsLoaded(true);
          } catch (error) {
            console.error('Error loading component:', error);
          }
          
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
  }, [importFunc, threshold, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isLoaded ? 'auto' : minHeight }}>
      {Component ? <Component /> : fallback}
    </div>
  );
};
