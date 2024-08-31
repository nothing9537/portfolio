import { ClassValue } from 'clsx';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

interface VisibilityHandlerProps {
  children: ReactNode;
  delay?: number;
  className?: ClassValue;
}

export const VisibilityHandler: FC<VisibilityHandlerProps> = ({ children, delay = 0, className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setTimeout(() => {
              setIsVisible(false);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={containerRef} className={cn(className)}>
      {isVisible && children}
    </div>
  );
};
