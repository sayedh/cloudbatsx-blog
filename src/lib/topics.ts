// A focus area becomes a /blog filter via the ?topic= query (exact match on focusArea).
export function topicHref(area: string): string {
  return `/blog?topic=${encodeURIComponent(area)}`;
}

// The canonical areas of focus, in display order. `area` is what posts tag themselves with.
export const FOCUS_AREAS: { problem: string; area: string; isNew?: boolean }[] = [
  { problem: "Running on AWS without the bill or the blast radius getting away from you", area: "AWS" },
  { problem: "Keeping Oracle systems steady", area: "Oracle" },
  { problem: "Seeing what your systems are actually doing", area: "Splunk" },
  { problem: "Networks you can change without holding your breath", area: "Cisco" },
  { problem: "The everyday IT that keeps a team moving", area: "General IT" },
  { problem: "Putting practical AI to work — honestly, while it's new", area: "AI & agentic", isNew: true },
];
