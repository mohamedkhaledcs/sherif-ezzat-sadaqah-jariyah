"use client";

import { BookOpen, Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";

const links = [
  { href: "#top", label: "الرئيسية", active: true, icon: true },
  { href: "#share", label: "صدقة جارية" },
  { href: "#content", label: "مكتبة الأدعية" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const hidden = useHideOnScroll(open);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[var(--border-soft)] bg-[rgba(250,247,242,0.86)] backdrop-blur-md transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav
        className="mx-auto flex h-[var(--nav-height)] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
        aria-label="القائمة الرئيسية"
      >
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  link.active
                    ? "inline-flex min-h-10 items-center gap-1.5 rounded-full bg-sage-soft px-4 py-2 text-sm font-semibold text-forest"
                    : "inline-flex min-h-10 items-center rounded-full px-4 py-2 text-sm font-medium text-forest-muted transition-colors hover:bg-sage-pale/60"
                }
              >
                {link.icon ? (
                  <Home className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                ) : null}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-ivory text-forest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>

        <a
          href="#top"
          className="flex min-w-0 items-center gap-2 text-forest transition-opacity hover:opacity-80"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-soft/70 text-forest">
            <BookOpen className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <span className="truncate text-sm font-semibold tracking-wide text-forest sm:text-[15px]">
            كل قراءة.. دعاء يصل
          </span>
        </a>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-[var(--border-soft)] bg-ivory px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    link.active
                      ? "flex min-h-11 items-center gap-2 rounded-xl bg-sage-soft px-4 py-3 text-sm font-semibold text-forest"
                      : "flex min-h-11 items-center rounded-xl px-4 py-3 text-sm font-medium text-forest-muted"
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.icon ? <Home className="h-4 w-4" aria-hidden="true" /> : null}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
