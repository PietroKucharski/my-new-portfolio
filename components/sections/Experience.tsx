import data, { type Experience as ExperienceItem } from '@/data';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';

function ExpCard({ e }: { e: ExperienceItem }) {
  return (
    <div
      data-hot
      className="group relative border border-line bg-card p-6 md:p-8 hover:border-acid/60 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_18px_60px_-20px_rgba(0,255,135,.35)] text-left"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-acid to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="font-mono text-xs text-acid mb-3">{e.period}</div>
      <h3 className="font-display font-extrabold text-2xl md:text-[1.7rem] text-paper leading-tight">
        {e.company}
      </h3>
      <div className="mt-1 text-ember font-medium">{e.role}</div>
      <div className="mt-1 font-mono text-xs text-dim">{e.mode}</div>
      <ul className="mt-5 space-y-2.5">
        {e.points.map((p, k) => (
          <li key={k} className="flex gap-3 text-paper/75 leading-relaxed">
            <span className="text-acid mt-1.5 shrink-0">▹</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {e.stack.map((s, k) => (
          <span
            key={k}
            className="font-mono text-[11px] px-2.5 py-1 border border-line text-dim group-hover:border-line/80"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative max-w-[1280px] mx-auto px-6 md:px-12 py-28 md:py-36"
    >
      <SectionHeader
        index="03"
        label="Trajetória"
        title={
          <>
            Experiência
            <br />
            profissional.
          </>
        }
      />

      <div className="relative">
        <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-line" />
        <div className="space-y-12 md:space-y-20">
          {data.experience.map((e, i) => {
            const right = i % 2 === 1;
            return (
              <div key={i} className="relative grid md:grid-cols-2 gap-x-16">
                <span className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-ink border-2 border-acid z-10 shadow-[0_0_18px_rgba(0,255,135,.6)]" />
                <div
                  className={
                    right
                      ? 'md:col-start-2 pl-10 md:pl-12'
                      : 'pl-10 md:pl-0 md:pr-12 md:text-right'
                  }
                >
                  <Reveal x={!right}>
                    <ExpCard e={e} />
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
