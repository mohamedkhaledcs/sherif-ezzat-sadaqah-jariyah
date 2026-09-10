"use client";

import { useCallback, useMemo, useState } from "react";
import type { CategoryId } from "@/data/categories";
import { duas, getDuasByCategory, type Dua } from "@/data/duas";
import { quranVerses, type QuranVerse } from "@/data/quran";
import { getRandomItemExcept } from "@/lib/random";

export function useRandomContent(category: CategoryId) {
  const [verse, setVerse] = useState<QuranVerse>(() => quranVerses[0]!);
  const [duaId, setDuaId] = useState<string>("da-1");

  const duaPool = useMemo(() => {
    if (
      category === "dua-quran" ||
      category === "dua-athar" ||
      category === "dua-general"
    ) {
      return getDuasByCategory(category);
    }
    return getDuasByCategory("all");
  }, [category]);

  const dua: Dua = useMemo(() => {
    const match = duaPool.find((item) => item.id === duaId);
    return match ?? duaPool[0] ?? duas[0]!;
  }, [duaId, duaPool]);

  const nextVerse = useCallback(() => {
    setVerse((current) =>
      getRandomItemExcept(quranVerses, current, (a, b) => a.id === b.id),
    );
  }, []);

  const nextDua = useCallback(() => {
    const pool = duaPool.length ? duaPool : duas;
    setDuaId((currentId) => {
      const current = pool.find((item) => item.id === currentId) ?? null;
      return getRandomItemExcept(pool, current, (a, b) => a.id === b.id).id;
    });
  }, [duaPool]);

  const showQuran = category === "all" || category === "quran";
  const showDua =
    category === "all" ||
    category === "dua-quran" ||
    category === "dua-athar" ||
    category === "dua-general";

  return {
    verse,
    dua,
    nextVerse,
    nextDua,
    showQuran,
    showDua,
  };
}
