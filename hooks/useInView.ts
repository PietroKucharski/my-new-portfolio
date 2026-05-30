'use client';

import { useRef, useState, useEffect } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView<T extends Element = HTMLDivElement>(opts: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (opts.once !== false) obs.unobserve(el);
        }
      },
      {
        threshold: opts.threshold ?? 0.18,
        rootMargin: opts.rootMargin ?? '0px 0px -8% 0px',
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView] as const;
}
