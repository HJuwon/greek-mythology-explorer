import { featuredMyth } from "@/data/myths";

export default function Hero() {
  const artwork = featuredMyth.featuredArtwork;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#eeeae3]">
      {artwork && (
        <div className="absolute inset-0">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      <div className="relative flex min-h-screen flex-col justify-end px-8 pb-12 text-white md:px-16 md:pb-16">
        <div className="mb-20">
          <p className="mb-6 text-xs tracking-[0.35em] text-white/60">
            AN INTERACTIVE EXHIBITION
          </p>

          <h1 className="text-[18vw] font-light leading-[0.75] tracking-[-0.07em] md:text-[14vw]">
            MYTH
          </h1>

          <p className="mt-8 max-w-md text-sm leading-7 text-white/70 md:text-base">
            Stories of gods, heroes and humans,
            <br />
            seen through the eyes of artists.
          </p>
        </div>

        <div className="flex items-end justify-between border-t border-white/30 pt-5">
          <p className="text-[10px] tracking-[0.25em] text-white/50">
            GREEK & ROMAN MYTHOLOGY
          </p>

          <p className="text-[10px] tracking-[0.25em] text-white/50">
            SCROLL TO EXPLORE ↓
          </p>
        </div>
      </div>
    </section>
  );
}