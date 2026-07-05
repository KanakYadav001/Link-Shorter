import React from "react";
import { IoMdLink } from "react-icons/io";
import { IoLockClosedOutline } from "react-icons/io5";
import Button from "../../Components/Common/Button";

function CreateLink() {
  return (
    <main className="w-full h-full flex justify-center items-center pb-4">
      <form className="w-full max-w-160 p-8 border border-blue-500/10 bg-blue-500/3 rounded-2xl shadow-[0_0px_10px_rgba(0,0,0,0.05)]">
        <h1 className="text-2xl font-semibold text-zinc-800 mb-6 flex gap-2 items-center">
          <IoMdLink className="text-4xl text-blue-500" />
          Create New Link
        </h1>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="originalUrl" className="text-lg">
            Original Url <span className="text-red-500">*</span>
          </label>
          <div className="h-16 md:w-160 max-w-full p-2 rounded-xl border-2 border-zinc-200 flex justify-between items-center focus-within:border-blue-500 duration-200">
            <IoMdLink className="text-2xl text-blue-500" />
            <input
              placeholder="Enter your original url"
              className="w-full h-full outline-0 border-0 px-4 text-xl"
              type="url"
              id="originalUrl"
              name="originalUrl"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="customSlug" className="text-lg">
            Custom Slug <span className="text-gray-500">(Optional)</span>
          </label>
          <div className="h-16 md:w-160 max-w-full p-2 rounded-xl border-2 border-zinc-200 flex justify-between items-center focus-within:border-blue-500 duration-200">
            <div className="text-lg text-zinc-500 bg-zinc-200/50 p-2 rounded-lg">
              lnk.sh/
            </div>
            <input
              placeholder="Enter your custom slug"
              className="w-full h-full outline-0 border-0 px-4 text-xl"
              type="text"
              id="customSlug"
              name="customSlug"
            />
          </div>
        </div>

        <div className="w-full bg-zinc-100/20 p-4 rounded-xl border border-zinc-200 my-8">
          <h3 className="font-medium text-zinc-700 text-xl mb-4">
            Advanced Options
          </h3>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="passwordProtected" className="text-lg">
              Password Protected{" "}
              <span className="text-gray-500">(Optional)</span>
            </label>
            <div className="h-16 md:w-160 max-w-full p-2 rounded-xl border-2 border-zinc-200 flex justify-between items-center focus-within:border-blue-500 duration-200">
              <IoLockClosedOutline className="text-2xl text-blue-500" />
              <input
                placeholder="Enter your password"
                className="w-full h-full outline-0 border-0 px-4 text-xl"
                type="password"
                id="passwordProtected"
                name="passwordProtected"
              />
            </div>
          </div>

          <div className="flex gap-2 mb-4 items-center">
            <input
              type="checkbox"
              id="oneTimeUse"
              name="oneTimeUse"
              className="w-5 h-5 accent-blue-500 cursor-pointer"
            />
            <label htmlFor="oneTimeUse" className="text-lg">
              One Time Link (expires after first use){" "}
              <span className="text-gray-500">(Optional)</span>
            </label>
          </div>
        </div>

        <Button className="w-full">Create Link</Button>
      </form>
    </main>
  );
}

export default CreateLink;
