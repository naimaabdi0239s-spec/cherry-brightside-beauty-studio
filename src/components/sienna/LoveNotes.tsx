import { REVIEWS } from "./data";
import { Cherry } from "./Cherry";

const TONES = ["bg-cream", "bg-blush", "bg-lime", "bg-cream", "bg-pink", "bg-blush"];
const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-[1.5deg]", "rotate-[1.5deg]"];

export function LoveNotes() {
  const row = [...REVIEWS, ...REVIEWS];
  return (
    <section className="overflow-hidden bg-pink py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow text-cherry-deep">Love notes</p>
        <h2 className="font-display mt-3 text-4xl md:text-6xl">
          Don't take <em className="text-cherry">our</em> word for it.
        </h2>
      </div>
      <div className="pause-hover mt-12">
        <div className="animate-marquee-slow flex w-max gap-6 px-3 py-4">
          {row.map((r, i) => (
            <article
              key={i}
              aria-hidden={i >= REVIEWS.length}
              className={`relative flex w-72 shrink-0 ${TILTS[i % 6]} overflow-hidden rounded-md border-2 border-cola shadow-hard transition-transform hover:rotate-0 ${TONES[i % 6]}`}
            >
              <div className="ticket-edge w-3 shrink-0 border-r-2 border-dashed border-cola/50" />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm tracking-widest text-cherry">★★★★★</span>
                  <span className="font-mono text-base text-cola/60">No. {String((i % 6) + 1).padStart(3, "0")}</span>
                </div>
                <p className="font-display mt-3 flex-1 text-lg italic leading-snug">“{r.q}”</p>
                <div className="mt-4 flex items-center gap-3 border-t-2 border-dotted border-cola/40 pt-3">
                  <Cherry className="h-6 w-6 text-cherry" />
                  <div>
                    <p className="text-sm font-bold">{r.n}</p>
                    <p className="eyebrow text-[0.6rem] text-cola/60">{r.s}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
