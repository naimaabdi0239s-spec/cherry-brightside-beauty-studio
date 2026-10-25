import { useScrollProgress } from "./hooks";

const SERVICES = [
  ["Nails", "Gel, BIAB, extensions and art"],
  ["Lashes + brows", "Lifts, sets, shaping and tint"],
  ["Makeup", "Soft glam through to editorial"],
];

export function LookRules() {
  const { ref, p } = useScrollProgress<HTMLDivElement>();
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
        <p className="stamp text-cherry">About the studio</p>
        <p className="mt-5 text-xl font-medium leading-relaxed md:text-2xl">
          From your usual set to something completely different, Sienna is a space to try a new look,
          stick to your favourites and leave feeling like yourself — <em className="font-display">just with a little extra.</em>
        </p>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-5 border-t-2 border-cola pt-6 text-left sm:grid-cols-3 sm:gap-8">
          {SERVICES.map(([name, detail]) => (
            <li key={name}>
              <p className="font-display text-2xl font-bold italic">{name}</p>
              <p className="mt-1 text-sm leading-snug text-cola/70">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
