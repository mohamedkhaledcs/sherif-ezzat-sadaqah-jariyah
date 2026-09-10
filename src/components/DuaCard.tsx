"use client";

import { Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { DuaHands } from "@/components/icons/DuaHands";
import { DuaHandsWatermark } from "@/components/icons/DuaHandsWatermark";
import type { Dua } from "@/data/duas";
import { copyText } from "@/lib/share";

interface DuaCardProps {
  dua: Dua;
  onNext: () => void;
}

export function DuaCard({ dua, onNext }: DuaCardProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(t);
  }, [copied]);

  async function handleCopy() {
    const payload = `${dua.text}\n\n(${dua.source})`;
    const ok = await copyText(payload);
    if (ok) setCopied(true);
  }

  return (
    <article className="relative flex min-h-[340px] w-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] bg-beige-soft p-5 shadow-[var(--shadow-soft)] sm:min-h-[380px] sm:rounded-[2rem] sm:p-7 md:p-8">
      <DuaHandsWatermark className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-[#c4b49a] opacity-[0.28] sm:bottom-6" size={200} />

      <div className="relative z-10 mb-6 flex justify-start">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-beige/80 px-3 py-1.5 text-xs font-semibold text-forest sm:text-sm">
          <DuaHands size={15} className="text-forest" />
          {dua.badge ?? "دعاء مأثور"}
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-1 text-center sm:px-4">
        <p
          key={dua.id}
          className="font-naskh animate-fade-in max-w-lg break-words text-base leading-[2] text-forest sm:text-lg md:text-xl md:leading-[2.05]"
        >
          {dua.text}
        </p>
        <p className="mt-4 text-xs text-text-muted sm:text-sm">{dua.source}</p>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-forest-muted transition-colors hover:text-forest"
          aria-label="نسخ الدعاء"
        >
          {copied ? (
            <Check className="h-4 w-4 text-sage" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          {copied ? "تم النسخ" : "نسخ الدعاء"}
        </button>

        <button
          type="button"
          onClick={onNext}
          className="min-h-11 rounded-full bg-beige-btn px-5 py-2.5 text-sm font-semibold text-forest transition-all hover:brightness-95 active:scale-[0.98] sm:px-6"
        >
          دعاء آخر
        </button>
      </div>
    </article>
  );
}
