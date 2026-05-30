import data from '@/data';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Skills() {
  return (
    <section id="skills" className="relative bg-ink2 border-y border-line">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-28 md:py-36">
        <SectionHeader
          index="02"
          label="Stack"
          title={
            <>
              Ferramentas do
              <br />
              dia a dia.
            </>
          }
          kicker="Tecnologias que uso para construir aplicações web completas, do banco de dados à interface."
        />

        <div className="space-y-10">
          {data.skills.map((group, gi) => (
            <div
              key={gi}
              className="grid md:grid-cols-12 gap-4 md:gap-8 items-baseline border-t border-line pt-8"
            >
              <Reveal x className="md:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ember">0{gi + 1}</span>
                  <h3 className="font-display font-bold text-xl text-paper">{group.cat}</h3>
                </div>
              </Reveal>
              <div className="md:col-span-9 flex flex-wrap gap-3">
                {group.items.map((t, ti) => (
                  <Reveal key={ti} delay={ti * 70}>
                    <span
                      data-hot
                      className="group inline-flex items-center gap-2 font-mono text-sm px-4 py-2.5 border border-line bg-card text-paper/85 hover:border-acid hover:text-acid hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      <span className="text-acid/60 group-hover:text-acid">&lt;/&gt;</span>
                      {t}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
