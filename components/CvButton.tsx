import { site } from "@/lib/site";
import { DownloadIcon } from "./Icons";

type Props = {
  variant?: "outline" | "secondary";
  size?: "sm" | "lg";
};

export function CvButton({ variant = "outline", size }: Props) {
  const cls = ["ds-btn", `ds-btn-${variant}`, size ? `ds-btn-${size}` : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <a className={cls} href={site.cv} download>
      <DownloadIcon />
      Télécharger mon CV
    </a>
  );
}
