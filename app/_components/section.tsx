import { PropsWithChildren } from "react";

const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={`max-w-xl px-4 m-auto ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Section;
