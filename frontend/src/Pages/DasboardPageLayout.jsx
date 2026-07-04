import React from "react";

function DasboardPageLayout({ title, children }) {
  return (
    <main className="h-full w-full">
      <header className="px-6 py-4 flex justify-between items-center border-b border-zinc-200">
        <h1 className="text-2xl font-semibold text-zinc-800">{title}</h1>
      </header>

      <section className="h-full w-full p-4">{children}</section>
    </main>
  );
}

export default DasboardPageLayout;
