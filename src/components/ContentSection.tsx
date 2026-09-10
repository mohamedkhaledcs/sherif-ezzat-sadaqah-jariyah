"use client";

import { useState } from "react";
import { CategoryTabs } from "@/components/CategoryTabs";
import { DuaCard } from "@/components/DuaCard";
import { QuranCard } from "@/components/QuranCard";
import type { CategoryId } from "@/data/categories";
import { useRandomContent } from "@/hooks/useRandomContent";

export function ContentSection() {
  const [category, setCategory] = useState<CategoryId>("all");
  const { verse, dua, nextVerse, nextDua, showQuran, showDua } =
    useRandomContent(category);

  const both = showQuran && showDua;

  return (
    <section
      id="content"
      className="relative z-10 mx-auto mt-6 w-full max-w-5xl scroll-mt-28 overflow-x-hidden sm:mt-8"
      aria-label="محتوى الآيات والأدعية"
    >
      <CategoryTabs active={category} onChange={setCategory} />

      {/* dir=ltr on the grid so visual left=Quran, right=Dua (matches design); cards stay RTL */}
      <div
        dir="ltr"
        className={
          both
            ? "mt-6 grid w-full min-w-0 grid-cols-1 gap-5 px-4 sm:mt-8 sm:gap-6 sm:px-6 lg:grid-cols-2 lg:gap-7"
            : "mx-auto mt-6 grid w-full min-w-0 max-w-2xl grid-cols-1 gap-5 px-4 sm:mt-8 sm:px-6"
        }
      >
        {showQuran ? (
          <div dir="rtl" className="min-w-0">
            <QuranCard verse={verse} onNext={nextVerse} />
          </div>
        ) : null}
        {showDua ? (
          <div dir="rtl" className="min-w-0">
            <DuaCard dua={dua} onNext={nextDua} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
