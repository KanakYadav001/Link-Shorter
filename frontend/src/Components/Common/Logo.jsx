import React from "react";
import { Link } from "react-router";

function Logo({ className }) {
  return (
    <Link
      to="/"
      className={`text-2xl font-semibold text-zinc-800 ${className}`}
    >
      <span className="text-blue-500">link</span>shorter
    </Link>
  );
}

export default Logo;
