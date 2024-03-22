"use client";
import { GearIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

interface FloatProps {
  children?: React.ReactNode;
  position?: string;
}

const FloatButton = ({ children, position = "bottom-10 left-10" }: FloatProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`z-50 fixed ${position} cursor-pointer`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered && <div className="flex flex-col items-center gap-2 mb-2">{children}</div>}
      <div className={`p-3 bg-blue-500 text-white rounded-full`}>
        <GearIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default FloatButton;
