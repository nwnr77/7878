"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Accessible glass accordion powered by Radix UI. */
export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
      {items.map((item, index) => (
        <AccordionPrimitive.Item value={`item-${index}`} key={item.question} className="liquid-glass rounded-3xl px-6">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-bold">
              {item.question}<ChevronDown className="size-5 transition group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden pb-6 text-[var(--muted)] data-[state=closed]:animate-none">
            {item.answer}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
