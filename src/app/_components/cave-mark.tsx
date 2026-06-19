// src/app/_components/cave-mark.tsx
// The official cloudbats "Cave Mark" (abstract geometric — never an illustrated bat).
// Inherits color from `currentColor`; size via className (e.g. "h-7 w-7").
type CaveMarkProps = {
  className?: string;
  title?: string;
};

export function CaveMark({ className, title = "cloudbats" }: CaveMarkProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      role="img"
      aria-label={title}
      fill="currentColor"
      fillRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M112 72 H400 V352 Q400 400 376 424 Q356 440 336 424 Q316 400 296 400 H216 Q196 400 176 424 Q156 440 136 424 Q112 400 112 352 Z M312 136 A40 40 0 0 1 352 176 V304 A40 40 0 0 1 312 344 A40 40 0 0 1 272 304 V176 A40 40 0 0 1 312 136 Z" />
    </svg>
  );
}
