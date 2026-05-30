import data from '@/data';
import ParticleField from '@/components/ui/ParticleField';
import Typewriter from '@/components/ui/Typewriter';
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPin,
  IconArrowUR,
  IconArrowDown,
  IconTerminal,
} from '@/components/icons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 gridbg opacity-70" />
      <ParticleField />
      <div
        className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full glow"
        style={{ background: 'radial-gradient(circle, rgba(0,255,135,.12), transparent 62%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, transparent 55%, #080C10 100%)' }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="flex items-center gap-3 mb-8 reveal in" style={{ transitionDelay: '60ms' }}>
          <span className="w-2 h-2 rounded-full bg-acid animate-pulse" />
          <span className="font-mono text-xs tracking-[0.32em] uppercase text-dim">
            Disponível para novos projetos
          </span>
        </div>

        <h1 className="font-display font-extrabold tracking-tight leading-[0.86] text-paper">
          <span className="block overflow-hidden">
            <span
              className="block reveal in text-[clamp(3rem,12vw,9.5rem)]"
              style={{ transitionDelay: '120ms' }}
            >
              Pietro
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block reveal in text-[clamp(3rem,12vw,9.5rem)]"
              style={{ transitionDelay: '240ms' }}
            >
              Kucharski<span className="text-acid">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-7 reveal in" style={{ transitionDelay: '380ms' }}>
          <div className="font-mono text-acid text-[clamp(1rem,2.6vw,1.7rem)] flex items-center gap-3">
            <IconTerminal size={26} className="shrink-0" />
            <Typewriter phrases={data.roles} />
          </div>
        </div>

        <div
          className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 reveal in"
          style={{ transitionDelay: '520ms' }}
        >
          <span className="flex items-center gap-2 text-dim">
            <IconPin size={18} className="text-ember" />
            {data.location}
          </span>
          <span className="hidden md:inline text-line">/</span>
          <span className="text-dim">{data.age} anos</span>
        </div>

        <div
          className="mt-11 flex flex-wrap gap-4 reveal in"
          style={{ transitionDelay: '660ms' }}
        >
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-7 py-4 bg-acid text-ink font-semibold hover:shadow-[0_0_40px_rgba(0,255,135,.45)] transition-shadow"
          >
            <IconGithub size={20} /> GitHub
            <IconArrowUR
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-7 py-4 border border-line text-paper font-semibold hover:border-acid hover:text-acid transition-colors"
          >
            <IconLinkedin size={20} /> LinkedIn
            <IconArrowUR
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={`mailto:${data.email}`}
            className="group flex items-center gap-3 px-7 py-4 border border-line text-paper font-semibold hover:border-acid hover:text-acid transition-colors"
          >
            <IconMail size={20} /> Email
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-dim hover:text-acid transition-colors reveal in"
        style={{ transitionDelay: '900ms' }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">scroll</span>
        <IconArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
