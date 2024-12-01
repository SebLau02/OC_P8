import Image, { StaticImageData } from "next/image";

type ProjectIconButtonType = {
  url: string | StaticImageData;
  label: string;
};

export const ProjectIconButton = ({ url, label }: ProjectIconButtonType) => {
  return (
    <div className="bg-input min-w-12 w-12 h-12 p-1 rounded-sm">
      <Image src={url} alt={label} className="w-full object-cover" />
    </div>
  );
};
