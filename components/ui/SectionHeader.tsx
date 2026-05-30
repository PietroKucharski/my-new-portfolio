import { type ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: ReactNode;
  kicker?: string;
}

export default function SectionHeader({
  index,
  label,
  title,
  kicker,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal className="flex items-center gap-4 mb-5">
        <span className="font-mono text-acid text-sm tracking-widest">
          {index}
        </span>
        <span className="h-px w-10 bg-line" />
        <span className="font-mono text-dim text-xs tracking-[0.3em] uppercase">
          {label}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2.4rem,6vw,4.6rem)]">
          {title}
        </h2>
      </Reveal>
      {kicker && (
        <Reveal delay={140}>
          <p className="mt-5 text-dim text-lg leading-relaxed">{kicker}</p>
        </Reveal>
      )}
    </div>
  );
}
