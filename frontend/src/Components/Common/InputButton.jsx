import React from "react";
import Button from "./Button";

function InputButton({ className, placeholder }) {
  return (
    <form
      className={`h-16 md:w-160 max-w-full p-2 rounded-xl border-2 border-zinc-100 flex justify-between items-center ${className} focus-within:border-blue-500 duration-200`}
    >
      <input
        placeholder={placeholder}
        className="w-full h-full outline-0 border-0 px-4 text-xl"
        type="url"
      />

      <Button isPrimary={true} className="shrink-0 h-full">
        Shorten URL
      </Button>
    </form>
  );
}

export default InputButton;
