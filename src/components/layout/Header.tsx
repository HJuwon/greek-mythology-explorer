"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full mix-blend-difference text-white">
      <div className="flex items-center justify-between px-8 py-6 md:px-16">
        <a
          href="/"
          className="text-sm tracking-[0.25em]"
        >
          MYTH / ART
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xs tracking-[0.25em]"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute right-8 top-20 w-48 border border-white/20 bg-black/90 p-6 md:right-16">
          <nav className="flex flex-col gap-5 text-xs tracking-[0.2em]">
            <a
              href="/"
              className="transition-opacity hover:opacity-50"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </a>

            <a
              href="/myths"
              className="transition-opacity hover:opacity-50"
              onClick={() => setMenuOpen(false)}
            >
              MYTHS
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}