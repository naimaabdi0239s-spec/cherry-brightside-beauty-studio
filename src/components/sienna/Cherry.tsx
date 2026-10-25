export function Cherry({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 3c-2 5-6 9-9 13M16 3c1 5 4 9 9 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 3c3-1 6 0 8 2-3 1-6 0-8-2z" fill="currentColor" opacity=".7" />
      <circle cx="8" cy="22" r="6" fill="currentColor" />
      <circle cx="24" cy="21" r="6" fill="currentColor" />
    </svg>
  );
}
