"use client";

import { Heart, Share2, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { sharePage } from "@/lib/share";

function ShareBox({
  onShare,
  feedback,
}: {
  onShare: () => void;
  feedback: string | null;
}) {
  return (
    <div className="flex w-full max-w-[240px] flex-col items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-ivory/60 px-4 py-5 text-center backdrop-blur-[2px] sm:rounded-3xl sm:px-5 sm:py-6">
      <Heart
        className="h-5 w-5 text-sage"
        strokeWidth={1.6}
        fill="currentColor"
        fillOpacity={0.15}
        aria-hidden="true"
      />
      <p className="text-sm leading-7 text-forest-muted">
        اجعل هذه الصفحة صدقة جارية له وانشرها لتعم الفائدة
      </p>
      <button
        type="button"
        onClick={onShare}
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sage-deep px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-forest active:scale-[0.98]"
        aria-label="مشاركة الصفحة"
      >
        {feedback ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Share2 className="h-4 w-4" aria-hidden="true" />
        )}
        {feedback ?? "مشاركة"}
      </button>
    </div>
  );
}

export function ShareSection() {
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (!feedback) return;
    const t = window.setTimeout(() => setFeedback(null), 2200);
    return () => window.clearTimeout(t);
  }, [feedback]);

  async function handleShare() {
    const url = window.location.href;
    const result = await sharePage(url);
    if (result === "shared") setFeedback("تمت المشاركة");
    else if (result === "copied") setFeedback("تم نسخ الرابط");
    else setFeedback(null);
  }

  return (
    <section
      id="share"
      className="mx-auto mt-14 w-full min-w-0 max-w-5xl scroll-mt-28 overflow-x-hidden px-4 sm:mt-20 sm:px-6"
      aria-labelledby="share-heading"
    >
      <h2 id="share-heading" className="sr-only">
        صدقة جارية ومشاركة الصفحة
      </h2>

      <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
        <div className="flex justify-center lg:justify-start">
          <ShareBox onShare={handleShare} feedback={feedback} />
        </div>

        <div className="order-first px-2 text-center lg:order-none">
          <p className="text-lg font-semibold leading-relaxed text-forest sm:text-xl md:text-2xl">
            اللهم اجعل شريف عزت من أهل الجنة
          </p>
          <p className="mt-3 text-sm text-text-muted sm:text-base">
            رحم الله شريف عزت وجميع موتى المسلمين
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ShareBox onShare={handleShare} feedback={feedback} />
        </div>
      </div>
    </section>
  );
}
