import { useEffect, type ReactNode } from "react";
import { stagger, useAnimate, useInView, useReducedMotion } from "motion/react";

// Small island: fades up every [data-reveal-item] inside it, staggered, once, when scrolled into view.
// Animates only opacity + transform.
export default function Reveal({ children, className = "" }: { children?: ReactNode; className?: string }) {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || reduce) return;
    animate("[data-reveal-item]", { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, ease: [0.2, 0.7, 0.1, 1], delay: stagger(0.08) });
  }, [inView, reduce]);

  return <div ref={scope} className={className}>{children}</div>;
}
