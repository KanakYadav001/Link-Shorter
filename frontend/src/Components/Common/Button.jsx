import React from "react";

function Button({ children, isPrimary = true, className = "" }) {
  return (
    <button
      className={`px-4 py-2 rounded-md cursor-pointer duration-200 ${
        isPrimary
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-transparent text-gray-700 hover:bg-gray-100"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
