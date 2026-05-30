import data from '@/data';
import Reveal from '@/components/ui/Reveal';
import { IconMail, IconLinkedin, IconGithub, IconArrowUR } from '@/components/icons';

const links = [
  {
    label: 'Email',
    value: data.email,
    href: `mailto:${data.email}`,
    icon: <IconMail size={20} />,
    ext: false,
  },
  {
    label: 'LinkedIn',
    value: 'in/pietro-kucharski',
    href: data.linkedin,
    icon: <IconLinkedin size={20} />,
    ext: true,
  },
  {
    label: 'GitHub',
    value: '@PietroKucharski',
    href: data.github,
    icon: <IconGithub size={20} />,
    ext: true,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div
        className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full glow"
        style={{ background: 'radial-gradient(circle, rgba(0,255,135,.10), transparent 60%)' }}
      />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 py-28 md:py-40">
        <Reveal className="flex items-center gap-4 mb-6">
          <span className="font-mono text-acid text-sm tracking-widest">05</span>
          <span className="h-px w-10 bg-line" />
          <span className="font-mono text-dim text-xs tracking-[0.3em] uppercase">Contato</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-extrabold tracking-tight leading-[0.9] text-[clamp(2.6rem,9vw,7rem)]">
            Vamos
            <br />
            construir<span className="text-acid"> algo</span>.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-7 max-w-xl text-dim text-lg leading-relaxed">
            Aberto a oportunidades como Desenvolvedor Full Stack. Me chame para conversar sobre
            projetos, vagas ou colaborações.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-line">
          {links.map((l, i) => (
            <Reveal key={i} delay={i * 90}>
              <a
                href={l.href}
                target={l.ext ? '_blank' : undefined}
                rel="noreferrer"
                className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[180px_1fr_auto] items-center gap-5 border-b border-line py-7 md:py-9 hover:px-3 transition-all"
              >
                <span className="flex items-center gap-3 font-mono text-sm text-dim group-hover:text-acid transition-colors">
                  {l.icon}
                  {l.label}
                </span>
                <span className="font-display font-bold text-xl md:text-3xl text-paper group-hover:text-acid transition-colors truncate">
                  {l.value}
                </span>
                <IconArrowUR
                  size={26}
                  className="text-dim group-hover:text-acid transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
