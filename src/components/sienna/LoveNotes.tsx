import { IMG, REVIEWS } from "./data";

const FORMS = ["note", "polaroid", "postcard", "note", "postcard", "polaroid"] as const;
const TILTS = ["-rotate-[4deg]", "rotate-[2.5deg]", "-rotate-[2deg]", "rotate-[4.5deg]", "-rotate-[5deg]", "rotate-[1.5deg]"];
const POLAROID_IMAGES = [IMG.lashWispy, IMG.mSoft];

export function LoveNotes() {
  const row = [...REVIEWS, ...REVIEWS];

  return (
    <section className="overflow-hidden bg-pink py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="stamp text-cherry-deep">Fan mail</p>
        <h2 className="font-display mt-3 text-4xl md:text-6xl">
          Notes from the <em className="text-cherry">chair.</em>
        </h2>
        <p className="mt-3 max-w-md text-sm text-cola/75">
          Little notes from the studio noticeboard.
        </p>
      </div>

      <div className="pause-hover mt-8">
        <div className="fan-mail-track animate-marquee-slow flex w-max items-start gap-7 px-5 py-8">
          {row.map((review, i) => {
            const form = FORMS[i % FORMS.length];
            const photo = POLAROID_IMAGES[i % 6 === 1 ? 0 : 1];

            return (
              <div
                key={i}
                aria-hidden={i >= REVIEWS.length}
                className={`fan-mail-wrap relative w-[min(84vw,22rem)] shrink-0 ${TILTS[i % TILTS.length]} ${i % 2 ? "mt-0" : "mt-5"}`}
              >
                <span
                  aria-hidden="true"
                  className={`fan-mail-fastener fan-mail-fastener--${form}`}
                />
                <article className={`fan-mail-card fan-mail-card--${form} fan-mail-card--paper-${i % 6}`}>
                  {form === "polaroid" && (
                    <div className="fan-mail-photo">
                      <img src={photo} alt="" loading="lazy" />
                    </div>
                  )}

                  {form === "postcard" && (
                    <span aria-hidden="true" className="fan-mail-postmark">S</span>
                  )}

                  <p className="eyebrow text-cherry-deep">{review.s}</p>
                  <p className="fan-mail-quote font-hand">
                    “{review.q}”
                  </p>
                  <div className="fan-mail-signoff">
                    <p className="font-hand text-2xl font-semibold leading-none">{review.n}</p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
