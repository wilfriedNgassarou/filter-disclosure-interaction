export function TaskSVG({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="fill-none stroke-gray-600/70"
      viewBox="0 0 24 24"
    >
      <rect width="6" height="6" x="3" y="5" rx="1"></rect>
      <path d="m3 17 2 2 4-4M13 6h8M13 12h8M13 18h8"></path>
    </svg>
  )
}