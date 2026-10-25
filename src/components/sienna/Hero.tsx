import { useEffect, useState } from "react";
import logo from "@/assets/sienna-logo.png";
import tapeFace from "@/assets/tape-face.mp4.asset.json";
import { BOOK_HREF, IMG } from "./data";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Studio", href: "#studio" },
  { label: "Visit", href: "#visit" },
];

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-end gap-8 px-6 py-5">
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="eyebrow text-cola transition-colors hover:text-cream">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={BOOK_HREF} className="eyebrow rounded-full bg-cola px-5 py-2.5 text-cream transition-transform hover:-translate-y-0.5">
          Book
        </a>
      </nav>
    </header>
  );
}

function RecCam() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const clock = `0:${String(Math.floor(t / 60) % 60).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
  return (
    <div className="relative w-full max-w-[400px] rotate-[2deg]">
      {/* camcorder flip-screen housing */}
      <div className="rounded-[14px] bg-cola p-3 pb-9 shadow-soft">
        <div className="cam-screen relative aspect-[9/14] overflow-hidden rounded-md bg-cola">
          <video
            src={tapeFace.url}
            poster={IMG.mPastel}
            autoPlay
            muted
            loop
            playsInline
            className="cam-footage absolute inset-0 h-full w-full object-cover"
          />
          <div className="cam-scanlines" />
          <div className="cam-grain" />
          <div className="cam-tracking" />
          <div className="cam-vignette" />
          <div className="pointer-events-none absolute inset-0 font-mono text-xl uppercase text-cream [text-shadow:1px_0_0_var(--cherry),-1px_0_0_oklch(80%_0.12_220)]">
            <span className="absolute left-3 top-2 flex items-center gap-2">
              <span className="animate-rec h-3 w-3 rounded-full bg-cherry" /> REC
            </span>
            <span className="absolute right-3 top-2">SP ▮▮▮▯</span>
            <span className="absolute left-3 top-8 text-base opacity-80">AF · 16:9 · x2.4</span>
            <span className="absolute bottom-8 left-3 text-base">OCT 25 2026</span>
            <span className="absolute bottom-2 left-3 text-lime">CAM 1 · FACE</span>
            <span className="absolute bottom-2 right-3">{clock}</span>
            <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 border border-cream/50" />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between px-1 font-mono text-sm text-pink/70">
          <span>SIENNA·HANDYCAM</span>
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cherry" />
            <span className="h-2 w-2 rounded-full bg-pink/40" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Polaroid({ src, label, className, r }: { src: string; label: string; className: string; r: string }) {
  return (
    <figure
      className={`animate-float absolute z-20 hidden bg-cream p-1.5 pb-5 shadow-hard md:block ${className}`}
      style={{ ["--r" as string]: r }}
    >
      <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
      <figcaption className="absolute bottom-0.5 left-2 font-mono text-sm text-cola">{label}</figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid md:grid-cols-2">
        <div className="bg-pink" />
        <div className="hidden bg-cherry md:block" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-6 pb-16 pt-24 md:grid-cols-2">
        <div className="relative z-10">
          <p className="eyebrow text-cola/80">Nails · Lashes · Brows · Makeup — London</p>
          <h1 className="mt-6">
            <img src={logo} alt="Sienna" className="w-[min(340px,80%)]" width={1671} height={898} />
          </h1>
          <p className="mt-6 max-w-xs text-sm text-cola/85">
            A beauty studio in Shoreditch for your usual set, or something completely different.
          </p>
          <p className="font-display mt-6 text-[clamp(3.5rem,8.5vw,7.5rem)] font-black uppercase leading-[0.85] tracking-tight">
            <span className="block text-cherry">Make</span>
            <span className="block text-cherry">Beauty</span>
            <span className="block font-normal italic text-cherry">Fun</span>
            <span className="block text-cola">Again.</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href={BOOK_HREF} className="eyebrow rounded-full bg-lime px-6 py-3.5 text-cola shadow-hard transition-transform hover:-translate-y-0.5">
              Book an appointment →
            </a>
            <a href="#gallery" className="eyebrow text-cola hover:text-cherry">See the work ↓</a>
          </div>
        </div>

        <div className="relative hidden justify-center md:flex">
          <RecCam />
        </div>
      </div>

      <Polaroid src={IMG.lashBlue} label="LASHES 00:14" className="left-[44%] top-[14%] h-36 w-28" r="-8deg" />
      <Polaroid src={IMG.nTropical} label="NAILS 00:22" className="bottom-[8%] left-[46%] h-32 w-28" r="6deg" />
      <Polaroid src={IMG.mSoft} label="FACE 00:31" className="right-[4%] top-[12%] h-32 w-24" r="9deg" />
      <Polaroid src={IMG.lashWispy} label="LASHES 00:47" className="bottom-[10%] right-[6%] h-28 w-24" r="-5deg" />
    </section>
  );
}
