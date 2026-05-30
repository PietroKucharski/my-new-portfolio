'use client';

import { useState, useEffect } from 'react';

const NAV = [
  { id: 'hero', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'skills', label: 'Stack' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'educacao', label: 'Educação' },
  { id: 'contato', label: 'Contato' },
];

export default function SideNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: '-45% 0px -45% 0px' }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="hidden lg:flex flex-col gap-5 fixed right-8 top-1/2 -translate-y-1/2 z-[150]">
      {NAV.map((n) => (
        <a
          key={n.id}
          href={`#${n.id}`}
          data-hot
          className="group flex items-center gap-3 justify-end"
        >
          <span
            className={`font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${
              active === n.id
                ? 'text-acid opacity-100 translate-x-0'
                : 'text-dim opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
            }`}
          >
            {n.label}
          </span>
          <span
            className={`h-px transition-all duration-300 ${
              active === n.id ? 'w-8 bg-acid' : 'w-4 bg-line group-hover:bg-dim'
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
