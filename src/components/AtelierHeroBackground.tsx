"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "@/app/atelier.module.css";

export default function AtelierHeroBackground() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = layer.current;
    if (!element) return;
    const media = window.matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = element.parentElement;
      if (!hero || !media.matches) {
        element.style.transform = "translate3d(0, 0, 0)";
        return;
      }
      const rect = hero.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
      const image = element.querySelector("img");
      const ratio = image?.naturalWidth && image.naturalHeight
        ? image.naturalWidth / image.naturalHeight
        : 1983 / 793;
      const renderedHeight = Math.min(rect.height, rect.width / ratio);
      const availableTravel = Math.max(0, (rect.height - renderedHeight) / 2 - 1);
      const limit = Math.min(32, availableTravel);
      const offset = Math.max(-limit, Math.min(limit, -rect.top * 0.08));
      element.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
    };
  }, []);

  return <div className={styles.heroBackground} ref={layer} aria-hidden="true">
    <Image src="/images/atelier-vintage-banner.webp" alt="" fill priority sizes="100vw" className={styles.heroBackgroundImage} />
  </div>;
}
