import { useState, useEffect, useRef, RefObject } from 'react';

export const useInView = <T extends HTMLElement>(options: IntersectionObserverInit): [ref: RefObject<T>, boolean] => {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      options,
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, inView];
};