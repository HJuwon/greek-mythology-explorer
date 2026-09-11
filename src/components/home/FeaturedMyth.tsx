import { featuredMyth } from "@/data/myths";

export default function FeaturedMyth() {
  const artwork = featuredMyth.featuredArtwork;

  return (
    <section className="bg-[#eeeae3] px-8 pb-32 md:px-16 md:pb-48">
      <div className="mb-12 border-t border-black/15 pt-5">
        <p className="text-xs tracking-[0.3em] text-black/40">
          FEATURED MYTH
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="order-2 md:order-1">
          <p className="mb-6 text-xs tracking-[0.3em] text-black/40">
            A STORY OF TRANSFORMATION
          </p>

          <h2 className="text-6xl font-light leading-[0.85] tracking-[-0.05em] md:text-8xl">
            APOLLO
            <br />
            & DAPHNE
          </h2>

          <p className="mt-10 max-w-md text-sm leading-7 text-black/60">
            {featuredMyth.description}
          </p>

          <a
            href={`/myths/${featuredMyth.id}`}
            className="mt-12 inline-flex items-center gap-4 border-b border-black pb-2 text-xs tracking-[0.2em] transition-opacity hover:opacity-50"
          >
            ENTER THE STORY
            <span>→</span>
          </a>
        </div>

        <div className="order-1 md:order-2">
          {artwork && (
            <>
              <div className="group relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-24 text-white">
                  <p className="text-sm">{artwork.title}</p>

                  <p className="mt-1 text-xs text-white/60">
                    {artwork.artist}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex justify-between text-[10px] tracking-[0.15em] text-black/40">
                <span>{artwork.museum}</span>
                <span>01 / FEATURED</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}