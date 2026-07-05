import React from "react";
import { NavLink } from "react-router";
import Button from "./Button";
import Logo from "./Logo";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Features",
    link: "/features",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

function Header() {
  return (
    <header className="w-full max-w-350 rounded-xl shadow-[0_8px_10px_rgba(0,0,0,0.25)] shadow-zinc-100 mx-auto py-5 px-6 flex items-center justify-between my-2">
      <Logo />

      <nav className="hidden md:flex items-center gap-6 text-zinc-700 font-medium">
        {navLinks.map((link) => (
          <NavLink
            to={link.link}
            className={({ isActive }) =>
              `text-lg hover:text-blue-500 duration-200 ${isActive ? "text-blue-500" : ""}`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Button isPrimary={false}>Login</Button>
        <Button isPrimary={true}>Signup</Button>
      </div>
    </header>
  );
}

export default Header;
