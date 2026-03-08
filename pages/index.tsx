import { useState } from 'react';
import Head from 'next/head';
import type { AnalysisResult } from '@/lib/types';

import Header          from '@/components/layout/Header';
import Footer          from '@/components/layout/Footer';
import Hero            from '@/components/sections/Hero';
import HowItWorks      from '@/components/sections/HowItWorks';
import TranscriptInput from '@/components/sections/TranscriptInput';
import ResultsPanel    from '@/components/results/ResultsPanel';

export default function Home() {
  const [result, setResult] = useState<AnalysisResult | null>(null);

  function handleResult(data: AnalysisResult) {
    setResult(data);
  }

  function handleReset() {
    setResult(null);
    // Scroll back to workspace
    setTimeout(() => {
      document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  return (
    <>
      <Head>
        <title>MeetingMirror — AI Meeting Analysis</title>
        <meta
          name="description"
          content="Turn messy meeting transcripts into clear decisions, action items, and a meeting clarity score. Powered by Claude AI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col bg-[var(--bg)]">
        <Header />

        <main className="flex-1 pt-16">
          {/* Only show Hero + HowItWorks when there's no result yet */}
          {!result && (
            <>
              <Hero />
              <HowItWorks />
            </>
          )}

          {/* Transcript input is always visible (for reset flow) */}
          <TranscriptInput
            onResult={handleResult}
            onReset={handleReset}
            hasResult={!!result}
          />

          {/* Results — rendered once analysis is complete */}
          {result && (
            <ResultsPanel result={result} onReset={handleReset} />
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}
