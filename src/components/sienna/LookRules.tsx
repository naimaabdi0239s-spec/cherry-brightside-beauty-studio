import { useScrollProgress } from "./hooks";

export function LookRules() {
  const { ref, p } = useScrollProgress<HTMLDivElement>();
  // lines slide in from opposite sides and overlap as you scroll
  const shift = (1 - Math.min(1, p * 2.2)) * 40;
  return (
    <section id="studio" className="overflow-hidden bg-pink py-20 md:py-24">
      <div ref={ref} className="font-display leading-[0.82]">
        <p
          className="whitespace-nowrap text-[clamp(4rem,12vw,10rem)] font-black uppercase text-cola"
          style={{ transform: `translateX(${-shift - 4}%)` }}
        >
          Your look.
        </p>
        <p
          className="relative -mt-[0.12em] whitespace-nowrap pl-[18%] font-sans text-[clamp(4rem,12vw,10rem)] font-bold uppercase tracking-tighter text-cola"
          style={{ transform: `translateX(${shift}%)` }}
        >
          Your <span className="text-cherry">rules.</span>
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-2xl px-6 text-center">
        <p className="eyebrow text-cherry">About the studio</p>
        <p className="mt-5 text-xl font-medium leading-relaxed md:text-2xl">
          From your usual set to something completely different, Sienna is a space to try a new look,
          stick to your favourites and leave feeling like yourself — <em className="font-display">just with a little extra.</em>
        </p>
        <dl className="mx-auto mt-10 flex max-w-md justify-center gap-10 border-t-2 border-cola pt-6">
          {[
            ["2.4k", "happy clients"],
            ["4.9★", "average rating"],
            ["180+", "nail colours"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="font-display whitespace-nowrap pr-2 text-4xl font-black italic">{v}</dt>
              <dd className="font-mono text-base text-cola/70">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
