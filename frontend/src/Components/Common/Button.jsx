import React from "react";

function Button({ children, isPrimary, className = "" }) {
  return (
    <button
      className={`px-4 py-2 rounded-md cursor-pointer ${
        isPrimary ? "bg-blue-600 text-white" : "bg-transparent text-gray-700"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
