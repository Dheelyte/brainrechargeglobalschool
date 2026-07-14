"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades + slides its children into view on scroll.
 * Respects prefers-reduced-motion via the CSS in globals.css.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Cancel the CSS failsafe animation - the observer is in charge now.
    el.setAttribute("data-observed", "");
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        // Also reveal when the element sits above the viewport: a fast scroll can
        // carry it from below to above between two callbacks, and it would
        // otherwise stay hidden forever having never been seen as intersecting.
        if (entry.isIntersecting || entry.boundingClientRect.bottom <= 0) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
