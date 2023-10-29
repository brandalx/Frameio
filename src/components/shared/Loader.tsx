import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex-center w-full ">
      <Loader2 className="  text-light-1 animate-spin h-[16px]" />
    </div>
  );
};

export default Loader;
