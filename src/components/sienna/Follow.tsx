import { IMG, SOCIALS } from "./data";

const POSTS = [IMG.lashWispy, IMG.nChrome, IMG.mPastel, IMG.nButtons, IMG.lashFlower, IMG.mPearl];

export function Follow() {
  return (
    <section className="bg-blush py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-cherry-deep">Instagram</p>
            <h2 className="font-display mt-3 text-5xl md:text-6xl">Follow along.</h2>
            <p className="mt-2 text-sm text-muted-foreground">New sets, recent work and updates from the studio.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {SOCIALS.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="rounded-full border-2 border-cherry-deep px-4 py-1.5 text-xs font-bold text-cherry-deep hover:bg-cherry-deep hover:text-cream">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
          {POSTS.map((src, i) => (
            <a key={i} href={SOCIALS[0].href} target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden rounded-lg">
              <img src={src} alt="Sienna on Instagram" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 flex items-center justify-center bg-cherry-deep/60 text-sm font-bold text-cream opacity-0 transition-opacity group-hover:opacity-100">
                ♥ {120 + i * 37}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
