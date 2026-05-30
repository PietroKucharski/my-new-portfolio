import data from "@/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36"
    >
      <SectionHeader
        index="01"
        label="Sobre"
        title={
          <>
            Quem está
            <br />
            por trás do código.
          </>
        }
      />

      <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        <Reveal className="md:col-span-4" x>
          <div
            data-hot
            className="relative border border-line bg-card aspect-square flex items-center justify-center overflow-hidden group"
          >
            <div className="absolute inset-0 gridbg opacity-30" />
            <span className="font-display font-extrabold text-[7rem] text-paper relative z-10">
              PK
            </span>
            <div className="absolute inset-0 bg-acid/0 group-hover:bg-acid/6 transition-colors" />
            <span className="absolute bottom-4 left-4 font-mono text-[11px] text-dim z-10">
              // dev.full_stack
            </span>
            <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-ember z-10" />
          </div>
        </Reveal>

        <div className="md:col-span-8">
          <Reveal delay={80}>
            <p className="text-[clamp(1.15rem,2vw,1.5rem)] leading-relaxed text-paper/90">
              {data.bio}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-dim leading-relaxed text-lg">{data.bio2}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line">
            {data.stats.map((s, k) => (
              <Reveal
                key={k}
                delay={120 + k * 90}
                className="bg-ink2 p-5 md:p-6"
              >
                <div className="font-display font-extrabold text-acid text-[clamp(1.8rem,4vw,2.8rem)] leading-none">
                  {s.n}
                </div>
                <div className="mt-2 font-mono text-[11px] text-dim uppercase tracking-wider whitespace-pre-line leading-snug">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
