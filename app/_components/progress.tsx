"use client";

import { useState } from "react";

const ProgressSemiCircle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col">
      <div>
        <label>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isChecked}
          />{" "}
          2018 - Bac S
        </label>
      </div>
      <div>
        <svg
          width="150"
          height="100%"
          viewBox="0 0 200 100"
          style={{ transform: "rotate(90deg)" }}
        >
          <path
            d="M 10,100 A 90,90 0 1,1 190,100"
            fill="none"
            stroke="hsl(52 100% 72%)"
            strokeWidth="20"
            strokeDasharray="283"
            strokeDashoffset={isChecked ? "0" : "283"}
            style={{
              transition: "stroke-dashoffset 0.2s ease-in-out",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default ProgressSemiCircle;
