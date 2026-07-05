import React from "react";
import Button from "../Components/Common/Button";
import { IoSettingsOutline } from "react-icons/io5";

function Settings() {
  return (
    <main className="w-full h-full flex justify-center items-center pb-4">
      <form className="w-full max-w-160 p-8 border border-blue-500/10 bg-blue-500/5 rounded-2xl">
        <h1 className="text-2xl font-semibold text-zinc-800 mb-6 flex gap-2 items-center">
          <IoSettingsOutline className="text-4xl text-blue-500" />
          Profile Settings
        </h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-lg">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full p-2 border rounded-md mb-4 bg-white border-blue-500/20 focus:outline-none focus:border-blue-500/90"
            placeholder="Enter your full name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded-md mb-4 bg-white border-blue-500/20 focus:outline-none focus:border-blue-500/90"
            placeholder="Enter your email"
            disabled
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded-md mb-4 bg-white border-blue-500/20 focus:outline-none focus:border-blue-500/90"
            placeholder="Enter your password"
          />
        </div>

        <Button isPrimary={true} className="w-full mt-4">
          Save Changes
        </Button>
      </form>
    </main>
  );
}

export default Settings;
