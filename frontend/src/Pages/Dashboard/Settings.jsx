import React from "react";
import Button from "../../Components/Common/Button";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLock, CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

function Settings() {
  return (
    <main className="w-full h-full flex justify-center items-center pb-4">
      <form className="w-full max-w-160 p-8 border border-blue-500/10 bg-blue-500/3 rounded-2xl shadow-[0_0px_10px_rgba(0,0,0,0.05)]">
        <h1 className="text-2xl font-semibold text-zinc-800 mb-6 flex gap-2 items-center">
          <IoSettingsOutline className="text-4xl text-blue-500" />
          Profile Settings
        </h1>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="fullName" className="text-lg">
            Full Name
          </label>
          <div className="h-16 md:w-160 max-w-full p-2 rounded-xl border-2 border-zinc-200 flex justify-between items-center focus-within:border-blue-500 duration-200">
            <CiUser className="text-2xl text-blue-500" />
            <input
              placeholder="Enter your full name"
              className="w-full h-full outline-0 border-0 px-4 text-xl"
              type="text"
              id="fullName"
              name="fullName"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <div className="h-16 md:w-160 max-w-full p-2 rounded-xl border-2 border-zinc-200 flex justify-between items-center focus-within:border-blue-500 duration-200">
            <CiMail className="text-2xl text-blue-500" />
            <input
              placeholder="Enter your email"
              className="w-full h-full outline-0 border-0 px-4 text-xl"
              type="email"
              id="email"
              name="email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <div className="h-16 md:w-160 max-w-full p-2 rounded-xl border-2 border-zinc-200 flex justify-between items-center focus-within:border-blue-500 duration-200">
            <CiLock className="text-2xl text-blue-500" />
            <input
              placeholder="Enter your password"
              className="w-full h-full outline-0 border-0 px-4 text-xl"
              type="password"
              id="password"
              name="password"
            />
          </div>
        </div>

        <Button isPrimary={true} className="w-full mt-4">
          Save Changes
        </Button>
      </form>
    </main>
  );
}

export default Settings;
