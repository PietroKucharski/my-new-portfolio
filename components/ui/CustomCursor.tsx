'use client';

import { useRef, useState, useEffect } from 'react';

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    document.body.classList.add('cursor-on');
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let dx = rx;
    let dy = ry;
    let raf: number;

    const move = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`;
      }
      const hot = (e.target as Element).closest('a,button,[data-hot]');
      if (ring.current) ring.current.classList.toggle('hot', !!hot);
    };

    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', move);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.body.classList.remove('cursor-on');
    };
  }, []);

  if (!mounted) return null;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return null;

  return (
    <>
      <div ref={ring} className="cur-ring" />
      <div ref={dot} className="cur-dot" />
    </>
  );
}
