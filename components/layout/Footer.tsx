import data from '@/data';

const row = [
  'FULL STACK',
  'TYPESCRIPT',
  'NEXT.JS',
  'NODE.JS',
  'REACT',
  'NESTJS',
  'PRISMA',
  'DOCKER',
];

export default function Footer() {
  return (
    <footer className="border-t border-line overflow-hidden">
      <div className="py-6 whitespace-nowrap overflow-hidden border-b border-line">
        <div className="marquee-track inline-flex">
          {[0, 1].map((d) => (
            <div key={d} className="inline-flex items-center">
              {row.map((t, i) => (
                <span
                  key={i}
                  className="font-display font-extrabold text-2xl md:text-3xl text-paper/8 mx-6"
                >
                  {t}
                  <span className="text-acid/30"> ✦ </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row gap-3 justify-between items-center font-mono text-xs text-dim">
        <span>© 2026 {data.fullName}</span>
        <span>Balneário Camboriú, SC · Brasil</span>
        <span>
          Feito com <span className="text-acid">&lt;/&gt;</span> + café
        </span>
      </div>
    </footer>
  );
}
