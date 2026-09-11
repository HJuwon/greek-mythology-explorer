
import Link from "next/link";
import { myths } from "@/data/myths";
import StoryTimeline from "@/components/myth/StoryTimeline";

type MythPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MythPage({ params }: MythPageProps) {
  const { id } = await params;
  const myth = myths.find((item) => item.id === id);

  if (!myth) {
    return (
      <main className="min-h-screen bg-[#eeeae3] px-8 py-32 md:px-16">
        <p className="text-xs tracking-[0.3em] text-black/40">
          MYTH NOT FOUND
        </p>

        <h1 className="mt-6 text-5xl font-light">
          This story does not exist.
        </h1>

        <Link
          href="/myths"
          className="mt-10 inline-block border-b border-black pb-2 text-xs tracking-[0.2em]"
        >
          BACK TO MYTHS →
        </Link>
      </main>
    );
  }

  const artwork = myth.featuredArtwork;
  const artworks = myth.artworks ?? [];
  const characters = myth.characters ?? [];
  const events = myth.events ?? [];

  return (
    <main className="min-h-screen bg-[#eeeae3] text-[#1d1b18]">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-8 md:px-16">
        <Link
          href="/"
          className="text-xs tracking-[0.25em] transition-opacity hover:opacity-50"
        >
          MYTHS
        </Link>

        <Link
          href="/myths"
          className="text-xs tracking-[0.2em] text-black/50 transition-opacity hover:opacity-100"
        >
          ALL MYTHS
        </Link>
      </header>

      {/* HERO */}
      <section className="px-8 pb-32 pt-20 md:px-16 md:pb-48 md:pt-32">
        <div className="max-w-6xl">
          <p className="mb-6 text-xs tracking-[0.3em] text-black/40">
            {myth.category}
          </p>

          <h1 className="max-w-5xl text-6xl font-light leading-[0.9] tracking-[-0.05em] md:text-9xl">
            {myth.title}
          </h1>
        </div>
      </section>

      {/* STORY INTRODUCTION */}
      <section className="border-t border-black/10 px-8 py-20 md:px-16 md:py-32">
        <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <div>
            <p className="mb-6 text-xs tracking-[0.3em] text-black/40">
              THE STORY
            </p>

            <p className="max-w-md text-lg font-light leading-8 md:text-xl">
              {myth.description ??
                "A story passed through generations, interpreted again and again through art."}
            </p>
          </div>

          {artwork && (
            <div>
              <div className="overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full object-cover"
                />
              </div>

              <div className="mt-5 flex flex-col justify-between gap-4 text-xs md:flex-row">
                <div>
                  <p>{artwork.title}</p>

                  <p className="mt-1 text-black/40">
                    {artwork.artist}
                    {artwork.year ? ` · ${artwork.year}` : ""}
                  </p>
                </div>

                {artwork.museum && (
                  <p className="text-black/40">
                    {artwork.museum}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CHARACTERS */}
      {characters.length > 0 && (
        <section className="border-t border-black/10 px-8 py-32 md:px-16 md:py-48">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] text-black/40">
                CHARACTERS
              </p>

              <h2 className="text-5xl font-light tracking-[-0.04em] md:text-7xl">
                WHO
                <br />
                IS WHO
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-black/50">
              The figures behind the story. Understanding who they are makes
              the myth easier to follow.
            </p>
          </div>

          <div className="border-t border-black/15">
            {characters.map((character, index) => (
              <div
                key={character.id}
                className="grid gap-8 border-b border-black/15 py-10 md:grid-cols-[100px_1fr_1.2fr] md:items-start"
              >
                <span className="text-xs text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-3xl font-light md:text-4xl">
                    {character.name}
                  </h3>

                  <p className="mt-2 text-xs tracking-[0.15em] text-black/40">
                    {character.role}
                  </p>
                </div>

                <p className="max-w-md text-sm leading-7 text-black/50">
                  {character.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* STORY EVENTS */}
      <StoryTimeline
        events={events}
        characters={characters}
        artworks={artworks}
      />

      {/* FEATURED ARTWORK */}
      {artwork && (
        <section className="px-8 py-32 md:px-16 md:py-48">
          <div className="mb-16">
            <p className="mb-5 text-xs tracking-[0.3em] text-black/40">
              REPRESENTATIVE ARTWORK
            </p>

            <h2 className="text-5xl font-light tracking-[-0.04em] md:text-7xl">
              THE MYTH
              <br />
              IN ART
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div className="overflow-hidden">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full object-cover"
              />
            </div>

            <div className="pb-2">
              <p className="text-2xl font-light md:text-3xl">
                {artwork.title}
              </p>

              <p className="mt-3 text-sm text-black/50">
                {artwork.artist}
                {artwork.year ? ` · ${artwork.year}` : ""}
              </p>

              {artwork.museum && (
                <p className="mt-1 text-xs text-black/40">
                  {artwork.museum}
                </p>
              )}

              {artwork.description && (
                <p className="mt-8 max-w-md text-sm leading-7 text-black/50">
                  {artwork.description}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* RELATED ARTWORKS */}
      {artworks.length > 0 && (
        <section className="border-t border-black/10 px-8 py-32 md:px-16 md:py-48">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] text-black/40">
                RELATED ARTWORKS
              </p>

              <h2 className="text-5xl font-light tracking-[-0.04em] md:text-7xl">
                MANY
                <br />
                VISIONS
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-black/50">
              The same story, seen through different artists, periods and
              perspectives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {artworks.map((item, index) => (
              <div key={item.id}>
                <div className="group overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="text-sm">{item.title}</p>

                      <p className="mt-1 text-xs text-black/40">
                        {item.artist}
                      </p>
                    </div>

                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {item.year && (
                    <p className="mt-2 text-xs text-black/30">
                      {item.year}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-4 text-xs leading-5 text-black/40">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <section className="border-t border-black/10 px-8 py-12 md:px-16">
        <Link
          href="/"
          className="text-xs tracking-[0.2em] transition-opacity hover:opacity-50"
        >
          ← BACK TO EXHIBITION
        </Link>
      </section>
    </main>
  );
}
