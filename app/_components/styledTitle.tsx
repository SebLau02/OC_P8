type StyledTitleTypes = {
  label: string;
  orientation: "positive" | "negative";
  id?: string;
};
export const StyledTitle = ({ label, orientation, id }: StyledTitleTypes) => {
  return (
    <h2 className={`m-auto text-center mt-10 mb-6 relative`} id={id}>
      {label}
      <span
        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-black opacity-[0.2] ${
          orientation === "positive" ? "rotate-6" : "-rotate-6"
        }`}
        style={{ zIndex: "-1" }}
      >
        {label}
      </span>
    </h2>
  );
};
