import { useState } from "react";
import { GALLERY, type Category } from "./data";
import { useInView, useScrollProgress } from "./hooks";
import { PlaidMarquee } from "./PlaidMarquee";

const FILTERS: ("All" | Category)[] = ["All", "Nails", "Lashes", "Brows", "Makeup"];

export function Gallery() {
  const [f, setF] = useState<(typeof FILTERS)[number]>("All");
  const { ref: viewRef, inView } = useInView<HTMLDivElement>(0.3);
  const { ref: progRef, p } = useScrollProgress<HTMLElement>();
  const items = GALLERY.filter((g) => f === "All" || g.cat === f);
  const cols = [0, 1, 2, 3].map((c) => items.filter((_, i) => i % 4 === c));

  return (
    <section id="gallery" ref={progRef} className="relative overflow-hidden bg-blush">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-24">
        <div ref={viewRef} className={`relative ${inView ? "is-in" : ""}`}>
          <span
            aria-hidden
            className="font-display pointer-events-none absolute -top-6 left-1/4 whitespace-nowrap text-[clamp(6rem,16vw,14rem)] italic leading-none text-pink"
            style={{ transform: `translateX(${(0.5 - p) * 40}%)` }}
          >
            the gallery the gallery
          </span>
          <p className="eyebrow relative inline-block border border-cherry px-2 py-1 text-cherry">The work</p>
          <h2 className="font-display relative mt-4 text-[clamp(3.5rem,9vw,7rem)] font-black uppercase leading-[0.85]">
            <span className="reveal-line"><span>A</span></span>
            <span className="reveal-line"><span>Closer</span></span>
            <span className="reveal-line"><span className="italic text-cherry">Look</span></span>
          </h2>
        </div>

        <div className="relative mt-8 flex flex-wrap gap-2">
          {FILTERS.map((x) => (
            <button
              key={x}
              onClick={() => setF(x)}
              className={`eyebrow rounded-full border-2 border-cherry-deep px-4 py-2 transition-colors ${f === x ? "bg-cherry-deep text-cream" : "text-cherry-deep hover:bg-cherry-deep/10"}`}
            >
              {x}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((g, i) => (
                <figure key={g.title} className="group relative overflow-hidden rounded-xl">
                  <img
                    src={g.src}
                    alt={`${g.title} — ${g.cat}`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${(ci + i) % 3 === 0 ? "aspect-[3/4]" : (ci + i) % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}
                  />
                  <figcaption className="absolute inset-x-2 bottom-2 flex translate-y-2 items-center justify-between rounded-lg bg-cream/90 px-3 py-1.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="font-display italic">{g.title}</span>
                    <span className="eyebrow text-cherry">{g.cat}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
      <PlaidMarquee words={["Fresh sets weekly", "Cherry on top", "Your next look starts here", "Swipe-worthy, always"]} reverse />
    </section>
  );
}
