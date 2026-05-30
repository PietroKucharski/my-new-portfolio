export default function TopBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-[160] mix-blend-difference">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display font-extrabold text-lg tracking-tight">
          PK<span className="text-acid">.</span>
        </a>
        <a
          href="#contato"
          data-hot
          className="font-mono text-xs tracking-[0.25em] uppercase border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition-colors"
        >
          Contato
        </a>
      </div>
    </header>
  );
}
