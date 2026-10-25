import { createFileRoute } from "@tanstack/react-router";
import { Hero, Nav } from "@/components/sienna/Hero";
import { PlaidMarquee } from "@/components/sienna/PlaidMarquee";
import { Menu } from "@/components/sienna/Menu";
import { TooMuch } from "@/components/sienna/TooMuch";
import { Gallery } from "@/components/sienna/Gallery";
import { LookRules } from "@/components/sienna/LookRules";
import { Visit } from "@/components/sienna/Visit";
import { LoveNotes } from "@/components/sienna/LoveNotes";
import { Follow } from "@/components/sienna/Follow";
import { Faq } from "@/components/sienna/Faq";
import { Footer } from "@/components/sienna/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sienna — Nails, Lashes, Brows & Makeup in Shoreditch" },
      { name: "description", content: "Nails, lashes, brows and makeup at Sienna, a beauty studio in Shoreditch, London." },
      { property: "og:title", content: "Sienna — Make Beauty Fun Again" },
      { property: "og:description", content: "Nails, lashes, brows and makeup at 14 Cherry Lane, Shoreditch." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <PlaidMarquee />
      <Menu />
      <TooMuch />
      <Gallery />
      <LookRules />
      <Visit />
      <LoveNotes />
      <Follow />
      <Faq />
      <Footer />
    </main>
  );
}
