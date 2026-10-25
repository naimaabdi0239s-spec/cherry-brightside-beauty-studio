import studio from "@/assets/studio.jpg";
import { BOOK_HREF } from "./data";

const TEAM = [
  { n: "Sienna Vale", r: "Founder · Nail artist" },
  { n: "Maya Brooks", r: "Lash & brow lead" },
  { n: "Rio Santos", r: "Makeup artist" },
];

export function Visit() {
  return (
    <section id="visit" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="leading-[0.85]">
          <span className="font-display block text-[clamp(3rem,8vw,6.5rem)] font-black uppercase">Come visit</span>
          <span className="block text-[clamp(3rem,8vw,6.5rem)] font-bold uppercase tracking-tighter text-cherry">us.</span>
        </h2>
        <div className="mt-10 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <figure>
            <img src={studio} alt="Inside the Sienna studio" loading="lazy" className="aspect-[4/3] w-full border-[6px] border-cola object-cover" />
            <figcaption className="eyebrow mt-3">14 Cherry Lane · Shoreditch</figcaption>
          </figure>
          <div className="self-center">
            <p className="eyebrow text-cherry">Meet the team</p>
            <ul className="mt-4">
              {TEAM.map((t) => (
                <li key={t.n} className="flex items-baseline justify-between gap-4 border-t-2 border-cola py-4">
                  <span className="font-display text-2xl">{t.n}</span>
                  <span className="text-xs text-muted-foreground">{t.r}</span>
                </li>
              ))}
            </ul>
            <div className="border-t-2 border-cola pt-6 text-sm leading-relaxed">
              <p>14 Cherry Lane, Studio 3 · Shoreditch, London E2 7DJ</p>
              <p className="text-muted-foreground">Tue–Fri 10:00–19:00 · Sat 09:00–18:00</p>
              <a href={BOOK_HREF} className="eyebrow mt-5 inline-block rounded-full bg-cherry px-5 py-3 text-cream hover:bg-cherry-deep">
                Book an appointment →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
