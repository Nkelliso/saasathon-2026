"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { MachineModelId } from "@/lib/machines";

const HeroMachineModelViewer = dynamic(
  () =>
    import("@/components/landing-page/HeroMachineModelViewer").then(
      (module) => module.HeroMachineModelViewer,
    ),
  { ssr: false },
);

const heroModels: MachineModelId[] = [
  "tormach-1300pl",
  "abb-irb-120",
  // "universal-robots-ur5e",
  "tormach-pcnc-1100",
  "tormach-1100mx",
  "tormach-15l-slant-pro",
  "tormach-24r",
  "tormach-770mx",
];

const transition = { duration: 1, ease: [0.16, 1, 0.3, 1] as const };
const cycleInterval = 8500;

type HeroModelCarouselProps = {
  className?: string;
};

/** Cycles through Torque's supported hero models without enabling viewer input. */
export function HeroModelCarousel({ className = "" }: HeroModelCarouselProps) {
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    void import("@/components/landing-page/HeroMachineModelViewer").then(
      ({ preloadHeroMachineModels }) => preloadHeroMachineModels(heroModels),
    );
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveModelIndex(
        (currentIndex) => (currentIndex + 1) % heroModels.length,
      );
    }, cycleInterval);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const activeModelId = heroModels[activeModelIndex];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={activeModelId}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -28 }}
          transition={transition}
          className="absolute inset-0"
        >
          <HeroMachineModelViewer
            modelId={activeModelId}
            autoRotate
            className="h-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
