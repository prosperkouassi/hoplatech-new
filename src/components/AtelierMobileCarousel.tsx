"use client";

import {
  Children,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import styles from "./AtelierMobileCarousel.module.css";

type Props = { children: ReactNode; label: string; desktopClassName?: string };

export default function AtelierMobileCarousel({
  children,
  label,
  desktopClassName = "",
}: Props) {
  const track = useRef<HTMLDivElement>(null);
  const id = useId();
  const count = Children.count(children);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const items = Array.from(element.children) as HTMLElement[];
        const left = element.getBoundingClientRect().left;
        let nearest = 0;
        let distance = Infinity;
        items.forEach((item, index) => {
          const current = Math.abs(
            item.getBoundingClientRect().left - left - 6,
          );
          if (current < distance) {
            distance = current;
            nearest = index;
          }
        });
        setActive(nearest);
      });
    };
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      element.removeEventListener("scroll", update);
    };
  }, []);

  const goTo = (index: number) => {
    const element = track.current;
    const item = element?.children[index] as HTMLElement | undefined;
    if (!element || !item) return;
    const left =
      item.getBoundingClientRect().left -
      element.getBoundingClientRect().left +
      element.scrollLeft -
      6;
    element.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <div className={styles.host}>
      <div
        ref={track}
        id={id}
        className={`${styles.track} ${desktopClassName}`}
        role="group"
        aria-label={label}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo(Math.min(count - 1, active + 1));
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(Math.max(0, active - 1));
          }
        }}
      >
        {children}
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          aria-label={`Carte précédente — ${label}`}
          aria-controls={id}
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
        >
          Précédent
        </button>
        <span role="status" aria-live="polite" aria-atomic="true">
          {active + 1} / {count}
        </span>
        <button
          type="button"
          aria-label={`Carte suivante — ${label}`}
          aria-controls={id}
          disabled={active >= count - 1}
          onClick={() => goTo(active + 1)}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
