export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h8M2 12h5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-display font-700 text-[var(--text)] tracking-tight text-[17px]">
            Meeting<span className="text-accent">Mirror</span>
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
          <a href="#how-it-works" className="hover:text-[var(--text)] transition-colors">How it works</a>
          <a href="#workspace"    className="hover:text-[var(--text)] transition-colors">Try it</a>
        </nav>

        {/* CTA */}
        <a
          href="#workspace"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium
            hover:bg-accent-dk transition-colors shadow-sm"
        >
          Try for free
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </header>
  );
}
