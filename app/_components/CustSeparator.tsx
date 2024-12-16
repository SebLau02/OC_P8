import { Progress } from "@/components/ui/progress";
import React from "react";

type CustSepType = {
  progress: number;
  clicked: boolean;
};

export const CustSeparator = ({ progress, clicked }: CustSepType) => {
  return (
    <div className="relative h-24">
      <Progress
        value={progress}
        className={`absolute z-10 top-0 left-1/2 translate-y-[268%] rotate-90 w-12 duration-[25ms] transition-transform ${
          clicked ? "-translate-x-[130px]" : "-translate-x-1/2"
        }`}
      />
      <Progress
        value={progress}
        delay={25}
        className={`absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-[97%] w-[113px] duration-[25ms] transition-transform origin-right ${
          clicked ? "scale-x-25" : "scale-x-0"
        }`}
      />
      <Progress
        value={progress}
        delay={160}
        className={`absolute z-10 bottom-0 left-1/2 -translate-y-[303%] -translate-x-1/2 rotate-90 w-12 transition-transform border-0`}
      />
      <span
        className={`absolute z-20 bottom-0 left-1/2 -translate-x-1/2 block w-3 h-3 rounded-full ${
          progress === 100 ? "bg-primary" : " bg-secondary"
        }`}
      ></span>
    </div>
  );
};
