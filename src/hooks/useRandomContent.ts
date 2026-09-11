"use client";

import { useCallback, useMemo, useState } from "react";
import type { CategoryId } from "@/data/categories";
import { duas, getDuasByCategory, type Dua } from "@/data/duas";
import { quranVerses, type QuranVerse } from "@/data/quran";
import { tasbeehItems, type Tasbeeh } from "@/data/tasbeeh";
import { getRandomItemExcept } from "@/lib/random";

export function useRandomContent(category: CategoryId) {
  const [verse, setVerse] = useState<QuranVerse>(() => quranVerses[0]!);
  const [duaId, setDuaId] = useState<string>("da-1");
  const [tasbeehId, setTasbeehId] = useState<string>("t-1");

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

  const tasbeeh: Tasbeeh = useMemo(() => {
    const match = tasbeehItems.find((item) => item.id === tasbeehId);
    return match ?? tasbeehItems[0]!;
  }, [tasbeehId]);

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

  const nextTasbeeh = useCallback(() => {
    setTasbeehId((currentId) => {
      const current =
        tasbeehItems.find((item) => item.id === currentId) ?? null;
      return getRandomItemExcept(
        tasbeehItems,
        current,
        (a, b) => a.id === b.id,
      ).id;
    });
  }, []);

  const showQuran = category === "all" || category === "quran";
  const showDua =
    category === "all" ||
    category === "dua-quran" ||
    category === "dua-athar" ||
    category === "dua-general";
  const showTasbeeh = category === "all" || category === "tasbeeh";

  return {
    verse,
    dua,
    tasbeeh,
    nextVerse,
    nextDua,
    nextTasbeeh,
    showQuran,
    showDua,
    showTasbeeh,
  };
}
