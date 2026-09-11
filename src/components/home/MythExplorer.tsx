"use client";

import { useState } from "react";
import { myths } from "@/data/myths";

export default function MythExplorer() {
  const [activeMyth, setActiveMyth] = useState(myths[0]);

  const categories = ["ALL", "GODS", "HEROES", "STORIES"];

  const [category, setCategory] = useState("ALL");

  const filteredMyths =
    category === "ALL"
      ? myths
      : myths.filter((myth) => myth.category === category);

  return (
    <section className="bg-[#eeeae3] px-8 py-32 md:px-16 md:py-48">
      {/* Header */}
      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-xs tracking-[0.3em] text-black/40">
            EXPLORE
          </p>

          <h2 className="text-5xl font-light tracking-[-0.04em] md:text-7xl">
            THE MYTHS
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-black/50">
          Gods, heroes, lovers and monsters.
          <br />
          Enter a story and discover the art behind it.
        </p>
      </div>

      {/* Category */}
      <div className="mb-12 flex gap-6 border-b border-black/15 pb-4">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`text-xs tracking-[0.2em] transition-opacity ${
              category === item
                ? "opacity-100"
                : "opacity-30 hover:opacity-70"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Myth list */}
      <div className="grid md:grid-cols-[1fr_0.8fr]">
        <div>
          {filteredMyths.map((myth, index) => (
            <a
              key={myth.id}
              href={`/myths/${myth.id}`}
              onMouseEnter={() => setActiveMyth(myth)}
              className="group flex items-baseline gap-6 border-b border-black/10 py-5 transition-all hover:pl-4"
            >
              <span className="w-8 text-xs text-black/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-2xl font-light tracking-tight md:text-4xl">
                {myth.title}
              </span>

              <span className="ml-auto hidden text-xs tracking-[0.15em] text-black/30 md:block">
                {myth.category}
              </span>

              <span className="text-xl opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Preview */}
        <div className="relative mt-12 hidden min-h-[500px] md:ml-16 md:mt-0 md:block">
          <div className="sticky top-32">
            <div className="overflow-hidden">
              <img
                src={
                  activeMyth.id === "apollo-daphne"
                    ? "https://images.metmuseum.org/CRDImages/es/original/DP-14954-001.jpg"
                    : "https://images.metmuseum.org/CRDImages/es/original/DP-14954-001.jpg"
                }
                alt=""
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="mt-4 flex justify-between text-xs">
              <span className="tracking-[0.15em]">
                {activeMyth.title}
              </span>

              <span className="text-black/40">
                EXPLORE →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* All myths */}
      <div className="mt-20 border-t border-black/10 pt-6 text-right">
        <a
          href="/myths"
          className="text-xs tracking-[0.2em] transition-opacity hover:opacity-50"
        >
          VIEW ALL MYTHS →
        </a>
      </div>
    </section>
  );
}