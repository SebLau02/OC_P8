"use client";

import { usePathname } from "next/navigation";

export function PathLabel() {
  const pathname = usePathname();
  return (
    <p className="ds-mono" style={{ margin: 0, color: "var(--foreground-secondary)", wordBreak: "break-all" }}>
      {pathname}
    </p>
  );
}
