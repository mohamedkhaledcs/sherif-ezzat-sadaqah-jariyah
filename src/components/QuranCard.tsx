"use client";

import { Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { FloralCorner } from "@/components/icons/FloralCorner";
import { IslamicBook } from "@/components/icons/IslamicBook";
import { QuranOrnament } from "@/components/icons/QuranOrnament";
import type { QuranVerse } from "@/data/quran";
import { copyText } from "@/lib/share";

interface QuranCardProps {
  verse: QuranVerse;
  onNext: () => void;
}

export function QuranCard({ verse, onNext }: QuranCardProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(t);
  }, [copied]);

  async function handleCopy() {
    const payload = `${verse.text}\n\nسورة ${verse.surah} — آية ${verse.ayah}`;
    const ok = await copyText(payload);
    if (ok) setCopied(true);
  }

  return (
    <article className="relative flex min-h-[340px] w-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] bg-sage-pale p-5 shadow-[var(--shadow-soft)] sm:min-h-[380px] sm:rounded-[2rem] sm:p-7 md:p-8">
      <FloralCorner className="pointer-events-none absolute bottom-0 left-0 text-sage opacity-[0.22]" size={180} />

      <div className="relative z-10 mb-6 flex justify-start">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft/90 px-3 py-1.5 text-xs font-semibold text-forest sm:text-sm">
          <IslamicBook size={15} className="text-forest" />
          آية من القرآن
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-2 text-center sm:px-4">
        <div className="mb-4 flex w-full items-center justify-center gap-2 sm:gap-3">
          <QuranOrnament className="hidden shrink-0 text-sage opacity-45 sm:block" size={26} />
          <p
            key={verse.id}
            className="font-naskh animate-fade-in max-w-md flex-1 break-words text-lg leading-[2] text-forest sm:text-xl md:text-[1.35rem] md:leading-[2.1]"
          >
            {verse.text}
          </p>
          <QuranOrnament className="hidden shrink-0 text-sage opacity-45 sm:block" size={26} />
        </div>

        <p className="text-sm text-forest-muted">
          سورة {verse.surah}
          <span className="mx-2 text-sage/50">·</span>
          آية {verse.ayah}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-forest-muted transition-colors hover:text-forest"
          aria-label="نسخ الآية"
        >
          {copied ? (
            <Check className="h-4 w-4 text-sage" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          {copied ? "تم النسخ" : "نسخ الآية"}
        </button>

        <button
          type="button"
          onClick={onNext}
          className="min-h-11 rounded-full bg-sage-deep px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-forest active:scale-[0.98] sm:px-6"
        >
          آية أخرى
        </button>
      </div>
    </article>
  );
}
