import { useLang } from '@/lib/LanguageContext';
import { useT } from '@/lib/i18n';

export default function Footer() {
  const { lang } = useLang();
  const t = useT(lang);

  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h8M2 12h5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-display font-semibold text-[var(--text)] text-sm">
            Meeting<span className="text-accent">Mirror</span>
          </span>
        </div>
        <p className="text-xs text-[var(--muted)] text-center">{t.footerTagline}</p>
        <p className="text-xs text-[var(--muted)]">{t.footerPowered}</p>
      </div>
    </footer>
  );
}
