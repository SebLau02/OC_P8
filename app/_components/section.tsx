import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<{ className?: string }> {
  size?: keyof typeof sizeProps;
}

const sizeProps = {
  small: "max-w-2xl",
  medium: "max-w-3xl",
  large: "max-w-4xl",
};

const Section = ({ className, children, size = "medium", ...props }: Props) => {
  return (
    <section
      className={`px-3 m-auto ${sizeProps[size]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
