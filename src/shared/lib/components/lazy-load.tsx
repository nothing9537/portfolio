import { FC, ReactNode, Suspense } from 'react';

import { useInView } from '../hooks/use-in-view';
import { cn } from '../utils/cn';

interface LazyLoadProps {
  children: ReactNode;
  loader: ReactNode;
  id?: string;
  className?: string;
}

export const LazyLoad: FC<LazyLoadProps> = ({ children, loader, id, className }) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref} id={id} className={cn(className)}>
      {inView && (
        <Suspense fallback={loader}>
          {children}
        </Suspense>
      )}
    </div>
  );
};