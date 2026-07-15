"use client";

import { useEffect, useState } from "react";

/** Returns true after hydration, useful for client-only interactions. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
