"use client";

import type { CategoryId } from "@/data/categories";
import { categories } from "@/data/categories";

interface CategoryTabsProps {
  active: CategoryId;
  onChange: (id: CategoryId) => void;
}

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-x-hidden px-4 sm:px-6">
      <div
        className="scrollbar-hide flex max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-1 pt-1 sm:justify-center sm:gap-2.5"
        role="tablist"
        aria-label="تصنيفات المحتوى"
      >
        {categories.map((category) => {
          const isActive = category.id === active;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(category.id)}
              className={
                isActive
                    ? "min-h-11 shrink-0 rounded-full bg-sage-deep px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(63,92,76,0.22)] transition-all sm:px-5"
                    : "min-h-11 shrink-0 rounded-full border border-[var(--border-soft)] bg-ivory/90 px-4 py-2.5 text-sm font-medium text-forest shadow-[0_2px_8px_rgba(47,70,60,0.04)] transition-all hover:bg-sage-pale/50 sm:px-5"
              }
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
