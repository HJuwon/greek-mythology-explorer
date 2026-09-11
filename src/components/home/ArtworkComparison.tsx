
"use client";

import { useState } from "react";
import { comparisonMyth } from "@/data/myths";

export default function ArtworkComparison() {
  const artworks = comparisonMyth.artworks ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArtwork = artworks[activeIndex];

  if (!activeArtwork || artworks.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#1d1b18] px-8 py-32 text-[#eeeae3] md:px-16 md:py-48">
      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-xs tracking-[0.3em] text-white/40">
            ONE STORY / MANY VISIONS
          </p>

          <h2 className="text-5xl font-light tracking-[-0.04em] md:text-7xl">
            THE SAME
            <br />
            STORY
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-white/50">
          The same myth can become a completely different image
          depending on the artist, the period and the way the story
          is understood.
        </p>
      </div>

      <div className="border-t border-white/15 pt-8">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] text-white/40">
              MYTH
            </p>

            <h3 className="mt-2 text-3xl font-light md:text-5xl">
              {comparisonMyth.title}
            </h3>
          </div>

          <span className="text-xs text-white/30">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(artworks.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div className="flex gap-4 overflow-x-auto pb-4 md:flex-col md:overflow-visible">
            {artworks.map((artwork, index) => (
              <button
                key={artwork.id}
                onClick={() => setActiveIndex(index)}
                className={`group min-w-[180px] text-left transition-opacity md:min-w-0 ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-35 hover:opacity-70"
                }`}
              >
                <div className="flex items-center gap-4 border-b border-white/15 py-4">
                  <span className="text-xs text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="text-sm">
                      {artwork.title}
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      {artwork.artist}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div>
            <div className="overflow-hidden">
              <img
                src={activeArtwork.image}
                alt={activeArtwork.title}
                className="aspect-[4/5] w-full object-cover transition-all duration-700"
              />
            </div>

            <div className="mt-5 flex justify-between gap-6">
              <div>
                <p className="text-sm">
                  {activeArtwork.title}
                </p>

                <p className="mt-1 text-xs text-white/40">
                  {activeArtwork.artist}
                  {activeArtwork.year
                    ? ` · ${activeArtwork.year}`
                    : ""}
                </p>

                {activeArtwork.museum && (
                  <p className="mt-1 text-xs text-white/30">
                    {activeArtwork.museum}
                  </p>
                )}
              </div>

              {activeArtwork.description && (
                <p className="max-w-[180px] text-right text-xs leading-5 text-white/40">
                  {activeArtwork.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-6 text-right">
        <a
          href={`/myths/${comparisonMyth.id}`}
          className="text-xs tracking-[0.2em] transition-opacity hover:opacity-50"
        >
          VIEW ALL ARTWORKS →
        </a>
      </div>
    </section>
  );
}

