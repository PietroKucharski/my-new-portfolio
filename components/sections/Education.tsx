import data from '@/data';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Education() {
  return (
    <section id="educacao" className="relative bg-ink2 border-y border-line">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-28 md:py-36">
        <SectionHeader index="04" label="Formação" title="Educação." />

        <div className="border-t border-line">
          {data.education.map((ed, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                data-hot
                className="group grid md:grid-cols-12 gap-4 md:gap-8 items-center border-b border-line py-8 md:py-10 hover:bg-card/60 transition-colors px-2 -mx-2"
              >
                <div className="md:col-span-2 font-mono text-sm text-acid">{ed.period}</div>
                <div className="md:col-span-7">
                  <h3 className="font-display font-bold text-2xl text-paper group-hover:text-acid transition-colors">
                    {ed.course}
                  </h3>
                  <div className="text-dim mt-1">{ed.school}</div>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <span
                    className={`font-mono text-xs px-3 py-1.5 border ${
                      ed.status === 'Cursando'
                        ? 'border-acid text-acid'
                        : 'border-line text-dim'
                    }`}
                  >
                    {ed.status}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
