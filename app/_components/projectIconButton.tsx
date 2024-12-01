import Image, { StaticImageData } from "next/image";

type ProjectIconButtonType = {
  url: string | StaticImageData;
  label: string;
  className?: string;
};

export const ProjectIconButton = ({
  url,
  label,
  className,
}: ProjectIconButtonType) => {
  return (
    <div className={`bg-input min-w-8 w-8 h-8 p-1 rounded-sm ${className}`}>
      <Image src={url} alt={label} className="w-full object-cover" />
    </div>
  );
};
