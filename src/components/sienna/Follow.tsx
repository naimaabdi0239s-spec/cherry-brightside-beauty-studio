import { IMG, SOCIALS } from "./data";

const POSTS = [
  { src: IMG.lashWispy, alt: "Pink wispy lashes" },
  { src: IMG.nChrome, alt: "Chrome flower nails" },
  { src: IMG.mPastel, alt: "Pastel eye makeup with gems" },
  { src: IMG.nButtons, alt: "Button nail art" },
  { src: IMG.lashFlower, alt: "Lashes with flower detail" },
  { src: IMG.mPearl, alt: "Blue makeup with pearl detail" },
];

export function Follow() {
  return (
    <section className="bg-blush py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="stamp text-cherry-deep">Find us online</p>
            <h2 className="font-display mt-3 text-5xl md:text-6xl">Follow along.</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              More studio work on Instagram, TikTok and Pinterest.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {SOCIALS.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="rounded-full border-2 border-cherry-deep px-4 py-1.5 text-xs font-bold text-cherry-deep hover:bg-cherry-deep hover:text-cream">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-2 bg-cola p-3 pb-7 md:grid-cols-6 [background-image:repeating-linear-gradient(90deg,var(--cream)_0_10px,transparent_10px_22px)] [background-size:100%_6px] [background-repeat:repeat-x] [background-position:0_6px]">
          {POSTS.map((post) => (
            <a key={post.src} href="https://instagram.com/sienna.studio" target="_blank" rel="noreferrer" aria-label={`View ${post.alt} on Instagram`} className="group mt-4 aspect-square overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cherry">
              <img src={post.src} alt={post.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
