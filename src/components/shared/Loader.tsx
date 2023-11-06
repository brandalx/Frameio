// @ts-nocheck
import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";

interface ILoaderProps {
  h?: number;
}

const Loader = ({ h = 16 }: ILoaderProps) => {
  return (
    <div className="flex-center w-full ">
      <Loader2 className={` text-light-1 animate-spin h-[${h}px]`} />
    </div>
  );
};

export default Loader;
