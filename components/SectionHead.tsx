import type { ReactNode } from "react";

export function SectionHead({
  label,
  title,
  action,
}: {
  label: string;
  title?: string;
  action?: ReactNode;
}) {
  return (
    <div className="ds-section-head">
      <div className="ds-section-head-row">
        <p className="ds-label">{label}</p>
        {action}
      </div>
      {title && <h2 className="ds-h2">{title}</h2>}
    </div>
  );
}
