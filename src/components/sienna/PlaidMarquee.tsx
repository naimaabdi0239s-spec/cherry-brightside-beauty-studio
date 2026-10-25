import { Cherry } from "./Cherry";

const DEFAULT = [
  "Make beauty fun again",
  "No rules, just looks",
  "Play with your look",
  "A little extra never hurt",
  "Glitter is a personality trait",
];

export function PlaidMarquee({ words = DEFAULT, reverse = false }: { words?: string[]; reverse?: boolean }) {
  const row = [...words, ...words];
  return (
    <div className="pause-hover relative overflow-hidden border-y-2 border-cola bg-plaid py-2">
      <div className={`flex w-max items-center ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center" aria-hidden={k === 1}>
            {row.map((w, i) => (
              <span key={i} className="flex items-center">
                <span className="mx-4 rounded-sm bg-cream/90 px-3 py-0.5 font-display text-xl font-black uppercase italic tracking-tight text-cherry md:text-2xl">
                  {w}
                </span>
                <Cherry className="h-5 w-5 text-cherry-deep" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
