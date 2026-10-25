import lashBlue from "@/assets/lash-blue-tips.jpg";
import lashFlower from "@/assets/lash-flower.jpg";
import lashSpikes from "@/assets/lash-pink-spikes.jpg";
import lashWispy from "@/assets/lash-pink-wispy.jpg";
import mBronze from "@/assets/makeup-bronze-glow.jpg";
import mCat from "@/assets/makeup-cat-eye.jpg";
import mHibiscus from "@/assets/makeup-hibiscus.jpg";
import mPastel from "@/assets/makeup-pastel-gems.jpg";
import mPearl from "@/assets/makeup-pearl-blue.jpg";
import mSoft from "@/assets/makeup-soft-glam.jpg";
import nButtons from "@/assets/nails-buttons.jpg";
import nCharacter from "@/assets/nails-character.jpg";
import nChrome from "@/assets/nails-chrome-flower.jpg";
import nSwag from "@/assets/nails-swag.jpg";
import nTropical from "@/assets/nails-tropical.jpg";
import cherryHand from "@/assets/cherry-hand.jpg";

export const IMG = {
  lashBlue, lashFlower, lashSpikes, lashWispy,
  mBronze, mCat, mHibiscus, mPastel, mPearl, mSoft,
  nButtons, nCharacter, nChrome, nSwag, nTropical, cherryHand,
};

export const BOOK_HREF = "mailto:hello@siennastudio.co?subject=Booking%20request";

export type Category = "Nails" | "Lashes" | "Brows" | "Makeup";

export const GALLERY: { title: string; cat: Category; src: string }[] = [
  { title: "Swag Era", cat: "Nails", src: nSwag },
  { title: "Papaya Season", cat: "Nails", src: nTropical },
  { title: "Button Up", cat: "Nails", src: nButtons },
  { title: "Gilded Garden", cat: "Nails", src: nChrome },
  { title: "Ice Tips", cat: "Lashes", src: lashBlue },
  { title: "Petal Wisp", cat: "Lashes", src: lashFlower },
  { title: "Berry Ombré", cat: "Lashes", src: lashWispy },
  { title: "Clean Lami", cat: "Brows", src: mBronze },
  { title: "Daydream", cat: "Makeup", src: mPastel },
  { title: "Cocoa Glow", cat: "Makeup", src: mSoft },
  { title: "Pearl Drop", cat: "Makeup", src: mPearl },
  { title: "Cherry Chrome", cat: "Nails", src: cherryHand },
];

export const MENU: {
  name: Category;
  blurb: string;
  img: string;
  items: [string, string, string][];
}[] = [
  {
    name: "Nails",
    blurb: "From simple manicures to detailed nail art. Every set starts with your shape, your colour and your ideas.",
    img: nCharacter,
    items: [
      ["The Classic Gel Mani", "45 min", "£35"],
      ["BIAB Builder Overlay", "60 min", "£45"],
      ["Sculpted Extensions", "90 min", "£60"],
      ["Freestyle Art Set", "2 hr", "from £75"],
      ["Handmade Press-On Box", "made to order", "£55"],
    ],
  },
  {
    name: "Lashes",
    blurb: "A little definition or a fuller look. We'll help you find the style that works for you.",
    img: lashSpikes,
    items: [
      ["Lash Lift & Tint", "50 min", "£48"],
      ["Classic Set", "90 min", "£65"],
      ["Wispy Hybrid", "2 hr", "£78"],
      ["Colour Pop Add-on", "+15 min", "£12"],
      ["Infill (2–3 weeks)", "60 min", "£40"],
    ],
  },
  {
    name: "Brows",
    blurb: "Shaping, tinting and lamination to suit your features and your preferred look.",
    img: mCat,
    items: [
      ["Wax & Shape", "20 min", "£18"],
      ["Shape & Tint", "35 min", "£28"],
      ["Brow Lamination", "50 min", "£45"],
      ["Lami + Lash Lift Combo", "90 min", "£82"],
    ],
  },
  {
    name: "Makeup",
    blurb: "Soft glam, full glam, special occasions or simply because you feel like it.",
    img: mHibiscus,
    items: [
      ["Soft Glam", "60 min", "£65"],
      ["Full Glam + Lashes", "75 min", "£85"],
      ["Editorial / Creative Look", "90 min", "£110"],
      ["Bridal Trial", "90 min", "£95"],
      ["Learn Your Face (1:1 lesson)", "2 hr", "£120"],
    ],
  },
];

export const REVIEWS = [
  { q: "I walked in with three Pinterest boards and zero plan. Left with the best nails of my life and a new best friend.", n: "Amara O.", s: "Freestyle Art Set" },
  { q: "The lashes are so fluffy I keep catching myself in shop windows. Booking my infill before I've even left.", n: "Jess T.", s: "Wispy Hybrid" },
  { q: "Finally brows that match my personality. The studio playlist alone is worth the trip.", n: "Priya K.", s: "Brow Lamination" },
  { q: "Did my makeup for my 25th and every single photo is a keeper. Sienna gets it.", n: "Lola M.", s: "Full Glam + Lashes" },
  { q: "My press-ons arrived wrapped like a gift with a cherry sticker. I nearly didn't want to open it.", n: "Zainab R.", s: "Press-On Box" },
  { q: "Calm, fun and so talented. My bridesmaids all booked separately after.", n: "Chloé D.", s: "Bridal Trial" },
];

export const FAQ = [
  { q: "Do I need a deposit?", a: "Yes, a £15 deposit secures your spot and comes off your final bill." },
  { q: "Can I bring inspo?", a: "Please do. Screenshots, sketches, a vibe, a colour from a sweet wrapper — all welcome." },
  { q: "What if I'm running late?", a: "Text us! We hold your slot for 15 minutes, after that we may need to simplify the design." },
  { q: "Do you do group bookings?", a: "Birthdays, hens and 'just because' parties — up to 6 people on Saturdays." },
];

export const SOCIALS = [
  { label: "@sienna.studio", href: "https://instagram.com/sienna.studio", name: "Instagram" },
  { label: "@siennabeautyclub", href: "https://tiktok.com/@siennabeautyclub", name: "TikTok" },
  { label: "/siennastudio", href: "https://pinterest.com/siennastudio", name: "Pinterest" },
];
