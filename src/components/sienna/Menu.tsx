import { useState } from "react";
import { BOOK_HREF, MENU } from "./data";

export function Menu() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-cola pb-6">
          <h2 className="font-display text-5xl font-black uppercase leading-none md:text-6xl">
            The <span className="font-normal italic text-cherry">Menu</span>
          </h2>
          <p className="max-w-[16rem] text-sm text-muted-foreground">
            Choose a service to see times and prices. Not sure? Ask us when you book.
          </p>
        </div>

        {MENU.map((m, i) => {
          const isOpen = open === i;
          return (
            <div key={m.name} className="border-b-2 border-cola">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-baseline gap-5 py-3 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-mono text-lg text-muted-foreground">0{i + 1}</span>
                <span className={`font-display text-4xl font-black uppercase leading-none transition-colors md:text-5xl ${isOpen ? "text-cherry" : "group-hover:text-cherry"}`}>
                  {m.name}
                </span>
                <span className="eyebrow ml-auto">{isOpen ? "—" : "View"}</span>
              </button>
              <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="grid gap-8 pt-2 md:grid-cols-[1fr_220px] md:pl-11">
                    <div>
                      <p className="max-w-md text-sm text-muted-foreground">{m.blurb}</p>
                      <ul className="mt-5">
                        {m.items.map(([n, t, p]) => (
                          <li key={n} className="flex items-baseline gap-4 border-t border-cola/20 py-2 text-sm">
                            <span className="font-medium">{n}</span>
                            <span className="ml-auto text-muted-foreground">{t}</span>
                            <span className="w-16 text-right font-bold">{p}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={BOOK_HREF} className="eyebrow mt-5 inline-block rounded-full bg-cherry px-5 py-2.5 text-cream hover:bg-cherry-deep">
                        Book {m.name.toLowerCase()} →
                      </a>
                    </div>
                    <img src={m.img} alt={`${m.name} by Sienna`} loading="lazy" className="aspect-[4/5] w-full rotate-2 border-4 border-cola object-cover" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
