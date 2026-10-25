export function PlaidMarquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className="pause-hover relative h-10 overflow-hidden border-y-2 border-cola bg-pink md:h-12"
      aria-hidden="true"
    >
      <div className={`plaid-motion ${reverse ? "plaid-motion--reverse" : ""}`} />
    </div>
  );
}
