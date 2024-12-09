import { Progress } from "@/components/ui/progress";
import React from "react";

type CustSepType = {
  progress: number;
};
export const CustSeparator = ({ progress }: CustSepType) => {
  return (
    <div className="relative h-14">
      <Progress
        value={progress}
        className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-14"
      />
      <span
        className={`absolute z-20 bottom-0 left-1/2 -translate-x-1/2 block w-3 h-3 rounded-full delay-100 ${
          progress === 100 ? "bg-primary" : " bg-secondary"
        }`}
      ></span>
    </div>
  );
};
