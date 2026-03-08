import { useLang } from '@/lib/LanguageContext';
import { useT } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';

export default function Header() {
  const { lang, setLang } = useLang();
  const t = useT(lang);

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
          <span className="font-display font-bold text-[var(--text)] tracking-tight text-[17px]">
            Meeting<span className="text-accent">Mirror</span>
          </span>
        </div>

        {/* Nav + language toggle */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
            <a href="#how-it-works" className="hover:text-[var(--text)] transition-colors">{t.navHowItWorks}</a>
            <a href="#workspace"    className="hover:text-[var(--text)] transition-colors">{t.navTryIt}</a>
          </nav>

          {/* Language toggle */}
          <div className="flex items-center bg-[var(--border)]/60 rounded-lg p-0.5">
            {(['en', 'fr'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  lang === l
                    ? 'bg-[var(--surface)] text-[var(--text)] shadow-sm'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {l === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="#workspace"
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium
            hover:bg-accent-dk transition-colors shadow-sm"
        >
          {t.tryForFree}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </header>
  );
}
