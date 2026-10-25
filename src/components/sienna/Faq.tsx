import { useState } from "react";
import { FAQ } from "./data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-blush pb-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="flex items-center gap-4">
          <span className="eyebrow rounded-full border-2 border-cherry-deep px-3 py-0.5 text-cherry-deep">FAQ</span>
          <span className="eyebrow text-cherry-deep">Good to know</span>
          <span className="h-0.5 flex-1 bg-cherry-deep" />
        </div>
        <div className="mt-4">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b-2 border-cherry-deep">
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between py-5 text-left">
                  <span className="font-display text-2xl text-cherry-deep">{f.q}</span>
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-cherry-deep text-cherry-deep transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
