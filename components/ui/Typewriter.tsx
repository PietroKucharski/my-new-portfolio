'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  phrases: string[];
  className?: string;
}

export default function Typewriter({ phrases, className = '' }: TypewriterProps) {
  const [txt, setTxt] = useState('');
  const phraseIndex = useRef(0);
  const deleting = useRef(false);
  const charIndex = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const full = phrases[phraseIndex.current];

      if (!deleting.current) {
        charIndex.current++;
        setTxt(full.slice(0, charIndex.current));
        if (charIndex.current === full.length) {
          deleting.current = true;
          timer = setTimeout(tick, 1700);
          return;
        }
        timer = setTimeout(tick, 62 + Math.random() * 60);
      } else {
        charIndex.current--;
        setTxt(full.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          timer = setTimeout(tick, 360);
          return;
        }
        timer = setTimeout(tick, 30);
      }
    };

    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className={className}>
      {txt}
      <span className="caret">|</span>
    </span>
  );
}
