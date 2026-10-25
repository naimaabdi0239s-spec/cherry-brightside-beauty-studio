import logo from "@/assets/sienna-logo.png";
import { BOOK_HREF, SOCIALS } from "./data";

export function Footer() {
  return (
    <footer className="bg-cola text-pink">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1.3fr_1.2fr]">
        <div>
          <div className="inline-flex rounded-2xl bg-pink px-8 py-5">
            <img src={logo} alt="Sienna" className="w-32" loading="lazy" />
          </div>
          <p className="eyebrow mt-6 text-sm text-cream">Make beauty fun again.</p>
          <p className="mt-1 text-xs text-pink/70">Nails · Lashes · Brows · Makeup</p>
          <a href={BOOK_HREF} className="eyebrow mt-6 inline-block rounded-full bg-pink px-5 py-3 text-cola hover:bg-lime">
            Book a look →
          </a>
        </div>
        <div>
          <p className="font-mono text-lg text-lime">// navigate</p>
          <ul className="eyebrow mt-3 space-y-3 text-xs">
            {[["Gallery", "#gallery"], ["Services", "#services"], ["Studio", "#studio"], ["Visit", "#visit"], ["Book", BOOK_HREF]].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-cream">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-lg text-lime">// visit</p>
          <p className="mt-3 text-sm text-cream">14 Cherry Lane, Studio 3<br />Shoreditch, London E2 7DJ</p>
          <p className="mt-4 font-mono text-base leading-tight">Tue–Fri 10:00–19:00<br />Sat 09:00–18:00<br />Sun–Mon closed (resting our hands)</p>
        </div>
        <div>
          <p className="font-mono text-lg text-lime">// say hi</p>
          <p className="mt-3 text-sm text-cream">
            <a href="mailto:hello@siennastudio.co" className="hover:text-pink">hello@siennastudio.co</a><br />
            <a href="tel:+442071234567" className="hover:text-pink">020 7123 4567</a>
          </p>
          <ul className="eyebrow mt-4 space-y-2 text-xs">
            {SOCIALS.map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-cream">{s.name} ↗</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-pink/20">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-4 font-mono text-base text-pink/70">
          <span>© 2026 Sienna Studio</span>
          <span>made with cherries</span>
        </div>
      </div>
    </footer>
  );
}
