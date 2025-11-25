import { useInView } from '@/lib/useInView';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animationClass: string;
  threshold?: number;
  rootMargin?: string;
}

export const AnimatedElement = ({
  children,
  className = '',
  animationClass,
  threshold = 0.1,
  rootMargin = '0px',
}: AnimatedElementProps) => {
  const { ref, isInView } = useInView({ threshold, rootMargin, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? animationClass : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};
