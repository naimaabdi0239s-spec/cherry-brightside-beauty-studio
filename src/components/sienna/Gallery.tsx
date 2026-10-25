import { useState } from "react";
import { GALLERY, type Category } from "./data";
import { useInView, useScrollProgress } from "./hooks";
import { PlaidMarquee } from "./PlaidMarquee";

const FILTERS: ("All" | Category)[] = ["All", "Nails", "Lashes", "Brows", "Makeup"];

export function Gallery() {
  const [f, setF] = useState<(typeof FILTERS)[number]>("All");
  const { ref: viewRef, inView } = useInView<HTMLDivElement>(0.3);
  const { ref: progRef } = useScrollProgress<HTMLElement>();
  const items = GALLERY.filter((g) => f === "All" || g.cat === f);
  const cols = [0, 1, 2, 3].map((c) => items.filter((_, i) => i % 4 === c));

  return (
    <section id="gallery" ref={progRef} className="relative overflow-hidden bg-blush">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-24">
        <div ref={viewRef} className={`relative ${inView ? "is-in" : ""}`}>
          <p className="stamp relative text-cherry">The work</p>
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

        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-5">
              {col.map((g, i) => (
                <figure key={g.title} className={`group relative bg-cream p-2 pb-9 shadow-hard transition-transform hover:z-10 hover:rotate-0 hover:scale-[1.03] ${(ci + i) % 2 ? "rotate-[1.2deg]" : "-rotate-[1.4deg]"}`}>
                  {(ci + i) % 3 === 0 && <span className="tape -top-2 left-1/2 -translate-x-1/2 rotate-[-4deg]" />}
                  <img
                    src={g.src}
                    alt={`${g.title} — ${g.cat}`}
                    loading="lazy"
                    className={`w-full object-cover ${(ci + i) % 3 === 0 ? "aspect-[3/4]" : (ci + i) % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}
                  />
                  <figcaption className="absolute inset-x-2 bottom-1.5 flex items-baseline justify-between">
                    <span className="font-display text-sm font-bold italic">{g.title}</span>
                    <span className="font-mono text-base text-cherry">{g.cat.toUpperCase()} {String(ci * 3 + i + 1).padStart(2, "0")}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
      <PlaidMarquee reverse />
    </section>
  );
}
