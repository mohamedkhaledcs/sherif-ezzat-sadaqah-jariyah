"use client";

import { Copy, Check, Plus, Minus, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { TasbeehBeads } from "@/components/icons/TasbeehBeads";
import { TasbeehBeadsWatermark } from "@/components/icons/TasbeehBeadsWatermark";
import type { Tasbeeh } from "@/data/tasbeeh";
import { copyText } from "@/lib/share";

interface TasbeehCardProps {
  tasbeeh: Tasbeeh;
  onNext: () => void;
}

export function TasbeehCard({ tasbeeh, onNext }: TasbeehCardProps) {
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(0);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(t);
  }, [copied]);

  useEffect(() => {
    if (!showReset) return;
    const t = window.setTimeout(() => setShowReset(false), 2000);
    return () => window.clearTimeout(t);
  }, [showReset]);

  async function handleCopy() {
    const ok = await copyText(tasbeeh.text);
    if (ok) setCopied(true);
  }

  function handleNext() {
    onNext();
    setCount(0);
  }

  function handleReset() {
    if (count === 0) return;
    setCount(0);
    setShowReset(true);
  }

  return (
    <article className="relative flex min-h-[340px] w-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] bg-sage-pale p-5 shadow-[var(--shadow-soft)] sm:min-h-[380px] sm:rounded-[2rem] sm:p-7 md:p-8">
      <TasbeehBeadsWatermark className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-sage opacity-[0.15] sm:bottom-6" size={200} />

      {/* Badge */}
      <div className="relative z-10 mb-6 flex justify-start">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft/90 px-3 py-1.5 text-xs font-semibold text-forest sm:text-sm">
          <TasbeehBeads size={15} className="text-forest" />
          تسبيح
        </span>
      </div>

      {/* Tasbeeh text */}
      <div className="relative z-10 flex flex-col items-center justify-center px-2 text-center sm:px-4">
        <p
          key={tasbeeh.id}
          className="font-naskh animate-fade-in max-w-md break-words text-lg leading-[2] text-forest sm:text-xl md:text-[1.35rem] md:leading-[2.1]"
        >
          {tasbeeh.text}
        </p>
      </div>

      {/* Counter section */}
      <div className="relative z-10 mt-6 flex flex-col items-center gap-4">
        {/* Counter display */}
        <p className="text-4xl font-bold tabular-nums text-forest sm:text-5xl" aria-live="polite">
          {count}
        </p>

        {/* Main counter button */}
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="min-h-14 w-full max-w-[240px] rounded-full bg-sage-deep px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(63,92,76,0.22)] transition-all hover:bg-forest active:scale-[0.95] sm:text-lg"
          aria-label={`اضغط للتسبيح — العدد الحالي ${count}`}
        >
          اضغط للتسبيح
        </button>

        {/* +/- / reset controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCount((c) => Math.max(0, c - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-ivory/90 text-forest-muted transition-colors hover:bg-sage-pale/60"
            aria-label="تقليل العداد"
          >
            <Minus className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[var(--border-soft)] bg-ivory/90 px-3.5 py-2 text-sm font-medium text-forest-muted transition-colors hover:bg-sage-pale/60"
            aria-label="تصفير العداد"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            {showReset ? "تم التصفير" : "إعادة"}
          </button>

          <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-ivory/90 text-forest-muted transition-colors hover:bg-sage-pale/60"
            aria-label="زيادة العداد"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Copy & next buttons */}
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-forest-muted transition-colors hover:text-forest"
          aria-label="نسخ التسبيح"
        >
          {copied ? (
            <Check className="h-4 w-4 text-sage" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          {copied ? "تم النسخ" : "نسخ التسبيح"}
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="min-h-11 rounded-full bg-sage-deep px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-forest active:scale-[0.98] sm:px-6"
        >
          تسبيح آخر
        </button>
      </div>
    </article>
  );
}
