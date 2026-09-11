export interface Tasbeeh {
  id: string;
  text: string;
}

/** Common dhikr phrases — local data, works fully offline. */
export const tasbeehItems: Tasbeeh[] = [
  { id: "t-1", text: "استغفر الله" },
  { id: "t-2", text: "سبحان الله وبحمده سبحان الله العظيم" },
  { id: "t-3", text: "صل على محمد" },
  { id: "t-4", text: "الحمد لله" },
  { id: "t-5", text: "لا إله إلا الله" },
  { id: "t-6", text: "الله أكبر" },
  { id: "t-7", text: "سبحان الله" },
];
