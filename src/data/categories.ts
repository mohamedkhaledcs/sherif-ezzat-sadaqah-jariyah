export type CategoryId =
  | "all"
  | "quran"
  | "dua-quran"
  | "dua-athar"
  | "dua-general"
  | "tasbeeh";

export interface Category {
  id: CategoryId;
  label: string;
}

export const categories: Category[] = [
  { id: "all", label: "كل المحتوى" },
  { id: "quran", label: "آيات قرآنية" },
  { id: "dua-quran", label: "أدعية من القرآن" },
  { id: "dua-athar", label: "أدعية مأثورة" },
  { id: "dua-general", label: "أدعية عامة" },
  { id: "tasbeeh", label: "تسبيح" },
];
