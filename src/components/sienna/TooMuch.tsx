import cherryLiner from "@/assets/makeup-cherry-liner.jpg";
import limePop from "@/assets/makeup-lime-pop.jpg";
import { BOOK_HREF, IMG } from "./data";

const LOOKS = ["Soft glam", "Full glam", "Editorial", "Bridal", "Graphic liner", "Gems & pearls"];

export function TooMuch() {
  return (
    <section className="edge-zig relative z-10 bg-cola pt-20 text-cream md:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="stamp text-pink">Tape 01 — faces</p>
          <h2 className="font-display mt-4 text-[clamp(3.25rem,7vw,5.5rem)] font-black uppercase leading-[0.85]">
            <span className="block">Too</span>
            <span className="block italic text-pink">Much?</span>
            <span className="block text-lime">Never.</span>
          </h2>
          <p className="mt-6 text-lg font-medium">Your face. Your fantasy. <span className="bg-lime px-1 text-cola">Your rules.</span></p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/75">
            Soft glam to full editorial looks, created around your face and the occasion. Bring a photo,
            a mood or just a colour you love — we'll build the look with you, step by step, so it feels like
            you on your best day. Lashes, gems, graphic liner, a painted flower or two: nothing is off the table.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {LOOKS.map((l) => (
              <li key={l} className="eyebrow rounded-full border border-cream/30 px-3 py-1.5 text-cream/85">{l}</li>
            ))}
          </ul>
          <a href={BOOK_HREF} className="eyebrow mt-8 inline-block rounded-full bg-pink px-6 py-3 text-cola hover:bg-lime">
            Book a makeup look →
          </a>
        </div>

        <div className="grid grid-cols-3 grid-rows-[repeat(4,minmax(0,1fr))] gap-3 md:h-[560px]">
          <img src={IMG.mHibiscus} alt="Painted pink hibiscus makeup" loading="lazy" className="col-span-2 row-span-2 h-full w-full border-2 border-cream/80 object-cover" />
          <img src={limePop} alt="Lime and pink eyeshadow with painted cherries" loading="lazy" width={768} height={1024} className="row-span-2 h-full w-full border-2 border-cream/80 object-cover" />
          <img src={IMG.mPearl} alt="Icy blue shadow with pearls" loading="lazy" className="row-span-2 h-full w-full border-2 border-cream/80 object-cover" />
          <img src={cherryLiner} alt="Cherry red graphic liner with gems" loading="lazy" width={768} height={1024} className="row-span-2 h-full w-full border-2 border-cream/80 object-cover" />
          <img src={IMG.mPastel} alt="Pastel shadow with gems" loading="lazy" className="row-span-2 h-full w-full border-2 border-cream/80 object-cover" />
        </div>
      </div>
    </section>
  );
}
