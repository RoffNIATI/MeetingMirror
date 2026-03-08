import { useState, useRef } from 'react';
import { SAMPLE_TRANSCRIPT } from '@/lib/sampleTranscript';
import { getMockResult } from '@/lib/mockResult';
import { useLang } from '@/lib/LanguageContext';
import { useT } from '@/lib/i18n';
import type { AnalysisResult } from '@/lib/types';

const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

interface TranscriptInputProps {
  onResult: (result: AnalysisResult) => void;
  onReset: () => void;
  hasResult: boolean;
}

export default function TranscriptInput({ onResult, onReset, hasResult }: TranscriptInputProps) {
  const { lang } = useLang();
  const t = useT(lang);

  const [transcript, setTranscript] = useState('');
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState<string | null>(null);
  const textareaRef                 = useRef<HTMLTextAreaElement>(null);

  const charCount = transcript.length;
  const isReady   = transcript.trim().length >= 50;

  function loadSample() {
    setTranscript(SAMPLE_TRANSCRIPT);
    setError(null);
    textareaRef.current?.focus();
  }

  function reset() {
    setTranscript('');
    setError(null);
    onReset();
  }

  async function analyze() {
    if (!isReady || loading) return;
    setLoading(true);
    setError(null);

    // Demo mode: return mock data (language-aware) after a realistic delay
    if (DEMO_MODE) {
      await new Promise((r) => setTimeout(r, 2800));
      setLoading(false);
      onResult(getMockResult(lang));
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return;
    }

    // Real mode: call the API route with selected language
    try {
      const res  = await fetch('/api/analyze', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ transcript, lang }),
      });
      const json = await res.json();

      if (!json.success) {
        setError(json.error || 'Analysis failed. Please try again.');
      } else {
        onResult(json.data);
        setTimeout(() => {
          document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="workspace" className="py-20 px-6 border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto">

        {/* Demo mode banner */}
        {DEMO_MODE && (
          <div className="mb-6 flex items-start gap-3 px-4 py-3.5 rounded-xl bg-amber/5 border border-amber/25 text-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-amber">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M8 5v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div>
              <span className="font-semibold text-amber">{t.demoMode}</span>
              <span className="text-[var(--muted)]"> {t.demoBannerText} </span>
              <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-accent-dk">
                console.anthropic.com
              </a>
              <span className="text-[var(--muted)]"> — </span>
              <code className="text-xs bg-[var(--border)] px-1.5 py-0.5 rounded font-mono">{t.demoBannerCode}</code>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">
            {t.analyzeTitle}
          </h2>
          <p className="text-[var(--muted)]">{t.analyzeSub}</p>
        </div>

        {/* Input card */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
          <textarea
            ref={textareaRef}
            value={transcript}
            onChange={(e) => { setTranscript(e.target.value); setError(null); }}
            placeholder={t.placeholder}
            rows={14}
            className="w-full px-6 pt-6 pb-4 bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--muted)]/60
              resize-none outline-none leading-relaxed font-body"
          />

          <div className="px-6 py-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <button onClick={loadSample}
                className="text-xs text-accent hover:text-accent-dk font-medium transition-colors flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v5M3.5 4l2.5 2.5L8.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 9h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                {t.loadExample}
              </button>
              <span className={`text-xs ${charCount > 45000 ? 'text-danger' : 'text-[var(--muted)]'}`}>
                {charCount.toLocaleString()} / 50,000
              </span>
            </div>

            <div className="flex items-center gap-2">
              {(transcript || hasResult) && (
                <button onClick={reset}
                  className="px-3.5 py-2 rounded-lg border border-[var(--border)] text-xs text-[var(--muted)]
                    hover:text-[var(--text)] hover:border-[var(--muted)] transition-colors font-medium">
                  {t.clear}
                </button>
              )}
              <button onClick={analyze} disabled={!isReady || loading}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all
                  ${isReady && !loading
                    ? 'bg-accent text-white hover:bg-accent-dk shadow-sm hover:shadow-md cursor-pointer'
                    : 'bg-[var(--border)] text-[var(--muted)] cursor-not-allowed'
                  }`}>
                {loading ? (
                  <>
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="20 10"/>
                    </svg>
                    {t.analyzing}
                  </>
                ) : (
                  <>
                    {DEMO_MODE ? t.demoAnalyzeBtn : t.analyzeBtn}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-danger/5 border border-danger/20 text-sm text-danger">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M8 5v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-6 p-5 rounded-xl bg-accent/5 border border-accent/15 text-sm text-accent flex items-center gap-3">
            <svg className="animate-spin shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="24 12"/>
            </svg>
            <div>
              <p className="font-medium">{DEMO_MODE ? t.demoLoadingTitle : t.loadingTitle}</p>
              <p className="text-accent/70 text-xs mt-0.5">{t.loadingSub}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
