"use client";

import { useEffect, useRef, useState } from "react";

const TOP_THRESHOLD = 12;
const HIDE_AFTER = 72;

/**
 * Hides a fixed header when scrolling down, shows it when scrolling up.
 * Always visible at the top of the page. Skips hide while `locked` (e.g. mobile menu).
 */
export function useHideOnScroll(locked = false) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const hiddenRef = useRef(false);
  const lockedRef = useRef(locked);

  useEffect(() => {
    lockedRef.current = locked;
    if (locked && hiddenRef.current) {
      hiddenRef.current = false;
      setHidden(false);
    }
  }, [locked]);

  useEffect(() => {
    lastY.current = window.scrollY;

    const apply = (next: boolean) => {
      if (hiddenRef.current === next) return;
      hiddenRef.current = next;
      setHidden(next);
    };

    const update = () => {
      ticking.current = false;
      const y = window.scrollY;
      const previous = lastY.current;
      lastY.current = y;

      if (lockedRef.current || y <= TOP_THRESHOLD) {
        apply(false);
        return;
      }

      const delta = y - previous;
      if (Math.abs(delta) < 4) return;

      if (delta > 0 && y > HIDE_AFTER) {
        apply(true);
      } else if (delta < 0) {
        apply(false);
      }
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hidden;
}
