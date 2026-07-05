import React from "react";
import InputButton from "../../Components/Common/InputButton";
import { IoMdLink } from "react-icons/io";
import { MdDeleteOutline, MdOutlineContentCopy } from "react-icons/md";

function MyLink() {
  const links = [
    {
      shortLink: "https://linkshorter.com/abc123",
      originalLink:
        "https://www.example.com/very/long/url/that/needs/to/be/shortened",
      clicks: 123,
      uniqueVisitors: 45,
    },
    {
      shortLink: "https://linkshorter.com/xyz456",
      originalLink: "https://www.example.com/another/long/url/to/shorten",
      clicks: 456,
      uniqueVisitors: 78,
    },
    {
      shortLink: "https://linkshorter.com/def789",
      originalLink: "https://www.example.com/yet/another/long/url/to/shorten",
      clicks: 789,
      uniqueVisitors: 12,
    },
    {
      shortLink: "https://linkshorter.com/ghi012",
      originalLink: "https://www.example.com/short/url",
      clicks: 101,
      uniqueVisitors: 34,
    },
    {
      shortLink: "https://linkshorter.com/jkl345",
      originalLink: "https://www.example.com/another/short/url",
      clicks: 202,
      uniqueVisitors: 56,
    },
    {
      shortLink: "https://linkshorter.com/mno678",
      originalLink: "https://www.example.com/yet/another/short/url",
      clicks: 303,
      uniqueVisitors: 78,
    },
    {
      shortLink: "https://linkshorter.com/abc123",
      originalLink:
        "https://www.example.com/very/long/url/that/needs/to/be/shortened",
      clicks: 123,
      uniqueVisitors: 45,
    },
    {
      shortLink: "https://linkshorter.com/xyz456",
      originalLink: "https://www.example.com/another/long/url/to/shorten",
      clicks: 456,
      uniqueVisitors: 78,
    },
    {
      shortLink: "https://linkshorter.com/def789",
      originalLink: "https://www.example.com/yet/another/long/url/to/shorten",
      clicks: 789,
      uniqueVisitors: 12,
    },
    {
      shortLink: "https://linkshorter.com/ghi012",
      originalLink: "https://www.example.com/short/url",
      clicks: 101,
      uniqueVisitors: 34,
    },
    {
      shortLink: "https://linkshorter.com/jkl345",
      originalLink: "https://www.example.com/another/short/url",
      clicks: 202,
      uniqueVisitors: 56,
    },
    {
      shortLink: "https://linkshorter.com/mno678",
      originalLink: "https://www.example.com/yet/another/short/url",
      clicks: 303,
      uniqueVisitors: 78,
    },
    ,
  ];

  return (
    <main className="w-full pb-4">
      <InputButton
        placeholder="Search links by slug, URL, or title..."
        className="md:w-full"
        buttonText="Search Links"
      />

      <div className="w-full mt-8 border border-zinc-200 rounded-xl overflow-hidden">
        {links.length === 0 ? (
          <p className="text-zinc-500 text-center py-8">
            No recent links found.
          </p>
        ) : (
          links.map((link, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 border-t border-b border-zinc-200 hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <span className="p-3 bg-blue-500/10 text-blue-500 rounded-xl text-xl">
                <IoMdLink />
              </span>

              <div className="flex flex-col gap-2">
                <p className="text-zinc-800 font-medium">{link.shortLink}</p>

                <p className="text-zinc-500 text-sm truncate">
                  {link.originalLink}
                </p>
              </div>

              <div className="flex flex-col gap-2 ml-auto">
                <p className="text-zinc-800 font-medium">
                  {link.clicks} Clicks
                </p>

                <p className="text-zinc-500 text-sm truncate">
                  {link.uniqueVisitors} Unique Visitors
                </p>
              </div>

              <div className="flex items-center gap-2 ml-4 text-xl">
                <button className="text-red-400 hover:text-red-500 transition-colors cursor-pointer">
                  <MdDeleteOutline />
                </button>
                <button className="text-blue-500 hover:text-blue-600 transition-colors cursor-pointer">
                  <MdOutlineContentCopy />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default MyLink;
