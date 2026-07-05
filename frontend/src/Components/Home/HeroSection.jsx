import React from "react";
import InputButton from "../Common/InputButton";

function HeroSection() {
  return (
    <section className="w-full my-12 flex justify-center items-center pt-7 flex-col">
      <h1 className="text-5xl md:text-6xl font-semibold text-center text-zinc-900 flex flex-col gap-2">
        <p>Shorten URLS.</p>
        <p>Track Every Click.</p>
        <p className="text-blue-500">Grow Smarter.</p>
      </h1>

      <p className="text-center text-xl text-zinc-500 my-6 w-full max-w-md">
        The all-in-one link management platform for marketers, developers, and
        teams.
      </p>

      <InputButton
        className=""
        placeholder="Enter your URL here"
        buttonText="Shorten Link"
      />
    </section>
  );
}

export default HeroSection;
