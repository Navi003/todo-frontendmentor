import React from "react";
import { Toaster } from "react-hot-toast";

function layout({ children }) {
  return (
    <div className="w-[360px] sm:w-[420px] md:w-[680px] mx-auto   mt-20">
      {children}
    </div>
  );
}

export default layout;
