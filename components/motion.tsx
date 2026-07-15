"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

/** Scroll-reveal wrapper with fade and lift animation. */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 34, scale: .98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .75, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

/** Magnetic-feeling hover wrapper for cards and buttons. */
export function HoverLift({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div whileHover={{ y: -8, scale: 1.015 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className={className}>{children}</motion.div>;
}

/** Lightweight parallax container for decorative hero media. */
export function Parallax({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return <motion.div style={{ y }} className={className}>{children}</motion.div>;
}
