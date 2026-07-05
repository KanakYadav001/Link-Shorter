import React from "react";

function Avatar({ children, className }) {
  return (
    <div
      className={`p-4 aspect-square border border-blue-500/10 rounded-full text-blue-500 font-semibold text-5xl flex justify-center items-center bg-white/30 ${className}`}
    >
      {children}
    </div>
  );
}

export default Avatar;
