'use client';

import { type HTMLAttributes } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  x?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  x = false,
  className = '',
  style,
  ...rest
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const base = x ? 'reveal-x' : 'reveal';

  return (
    <div
      ref={ref}
      className={`${base} ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
