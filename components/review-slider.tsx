"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

/** Animated testimonial slider for graduate reviews. */
export function ReviewSlider({ reviews }: { reviews: string[][] }) {
  const [active, setActive] = useState(0);
  const current = reviews[active];
  const controls = useMemo(() => ({
    next: () => setActive((value) => (value + 1) % reviews.length),
    prev: () => setActive((value) => (value - 1 + reviews.length) % reviews.length),
  }), [reviews.length]);

  return (
    <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
      <GlassCard className="flex flex-col justify-between gap-10 p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[.24em] text-[#c7a45b]">Голос выпускников</p>
          <h3 className="mt-4 text-4xl font-black tracking-[-.05em]">Истории учеников после практики</h3>
          <p className="mt-5 text-[var(--muted)]">Слайдер подготовлен для подключения реальных отзывов из CMS и поддерживает клавиатурную навигацию через кнопки.</p>
        </div>
        <div className="flex gap-3">
          <Button type="button" variant="ghost" aria-label="Предыдущий отзыв" onClick={controls.prev}><ChevronLeft className="size-5" /></Button>
          <Button type="button" aria-label="Следующий отзыв" onClick={controls.next}>Следующий <ChevronRight className="size-5" /></Button>
        </div>
      </GlassCard>
      <div className="relative min-h-[420px] overflow-hidden rounded-[32px]">
        <AnimatePresence mode="wait">
          <motion.article
            key={current[0]}
            initial={{ opacity: 0, x: 80, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -80, scale: 0.96 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <GlassCard className="grid h-full content-between p-8">
              <div className="flex items-center gap-5">
                <Image src={current[3]} alt={current[0]} width={96} height={96} className="size-20 rounded-full object-cover shadow-2xl shadow-black/10" />
                <div>
                  <h3 className="text-2xl font-black">{current[0]}</h3>
                  <p className="text-[var(--muted)]">{current[2]}</p>
                </div>
              </div>
              <p className="my-10 text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl">“{current[1]}”</p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex text-[#c7a45b]" aria-label="Оценка 5 из 5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-6 fill-current" />)}</div>
                <span className="text-sm font-bold text-[var(--muted)]">{active + 1} / {reviews.length}</span>
              </div>
            </GlassCard>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
