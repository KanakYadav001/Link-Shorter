import React from "react";
import InputButton from "../Common/InputButton";
import UrlShortnerDemo from "../Common/UrlShortnerDemo";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router";

function HeroSection() {
  const { data: user, isLoading, isError } = useUser();

  const navigate = useNavigate();

  const handleShortenClick = (e) => {
    e.preventDefault();

    if (!user?.data) {
      navigate("/login");
      return;
    }

    // TODO: Implement the URL shortening logic here
    alert("Shorten button clicked! Implement the shortening logic here.");
  };

  return (
    <section className="w-full my-6 flex justify-center items-center pt-7 flex-col">
      <UrlShortnerDemo className="my-4" />

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
        onSubmit={handleShortenClick}
      />
    </section>
  );
}

export default HeroSection;
