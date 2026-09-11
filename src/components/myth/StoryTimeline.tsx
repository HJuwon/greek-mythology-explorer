
"use client";

import { useState } from "react";
import type { Artwork, Character, StoryEvent } from "@/data/myths";

type StoryTimelineProps = {
  events: StoryEvent[];
  characters: Character[];
  artworks: Artwork[];
};

export default function StoryTimeline({
  events,
  characters,
  artworks,
}: StoryTimelineProps) {
  const [activeEventId, setActiveEventId] = useState(events[0]?.id ?? "");

  const activeEvent = events.find(
    (event) => event.id === activeEventId
  );

  const relatedArtworks = artworks.filter(
    (artwork) => artwork.eventId === activeEventId
  );

  if (events.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#1d1b18] px-8 py-32 text-[#eeeae3] md:px-16 md:py-48">
      <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-xs tracking-[0.3em] text-white/40">
            THE STORY
          </p>

          <h2 className="text-5xl font-light tracking-[-0.04em] md:text-7xl">
            FOLLOW
            <br />
            THE MYTH
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-white/40">
          Follow the story and discover the artworks that capture each
          important moment.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
        {/* EVENT LIST */}
        <div className="border-t border-white/15">
          {events.map((event) => {
            const isActive = event.id === activeEventId;

            return (
              <button
                key={event.id}
                type="button"
                onClick={() => setActiveEventId(event.id)}
                className={`group w-full border-b border-white/15 py-6 text-left transition-opacity ${
                  isActive
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-75"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="pt-1 text-xs text-white/30">
                    {String(event.number).padStart(2, "0")}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-xl font-light md:text-2xl">
                      {event.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {event.characters.map((characterId) => {
                        const character = characters.find(
                          (item) => item.id === characterId
                        );

                        if (!character) {
                          return null;
                        }

                        return (
                          <span
                            key={character.id}
                            className="text-[10px] tracking-[0.12em] text-white/35"
                          >
                            {character.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <span
                    className={`text-lg transition-transform ${
                      isActive ? "translate-x-0" : "-translate-x-2"
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* EVENT DETAIL */}
        <div>
          {activeEvent && (
            <>
              <div className="border-t border-white/15 pt-8">
                <p className="text-xs tracking-[0.25em] text-white/30">
                  EVENT {String(activeEvent.number).padStart(2, "0")}
                </p>

                <h3 className="mt-5 text-3xl font-light md:text-5xl">
                  {activeEvent.title}
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
                  {activeEvent.description}
                </p>
              </div>

              {/* RELATED ARTWORKS */}
              {relatedArtworks.length > 0 && (
                <div className="mt-16">
                  <div className="mb-6 flex items-end justify-between">
                    <div>
                      <p className="text-xs tracking-[0.25em] text-white/30">
                        ARTWORKS OF THIS MOMENT
                      </p>

                      <p className="mt-2 text-sm text-white/50">
                        {relatedArtworks.length}{" "}
                        {relatedArtworks.length === 1
                          ? "artwork"
                          : "artworks"}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {relatedArtworks.map((artwork) => (
                      <div key={artwork.id}>
                        <div className="group overflow-hidden">
                          <img
                            src={artwork.image}
                            alt={artwork.title}
                            className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        </div>

                        <div className="mt-4">
                          <p className="text-sm">
                            {artwork.title}
                          </p>

                          <p className="mt-1 text-xs text-white/40">
                            {artwork.artist}
                            {artwork.year
                              ? ` · ${artwork.year}`
                              : ""}
                          </p>

                          {artwork.museum && (
                            <p className="mt-1 text-xs text-white/30">
                              {artwork.museum}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {relatedArtworks.length === 0 && (
                <div className="mt-16 border-t border-white/10 pt-6">
                  <p className="text-xs leading-6 text-white/30">
                    No artwork has been connected to this moment yet.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
