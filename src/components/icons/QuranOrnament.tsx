interface IconProps {
  className?: string;
  size?: number;
}

/** Small diamond/arabesque motif flanking Quran text. */
export function QuranOrnament({ className = "", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.45" />
      <path
        d="M16 8L18 13L23 16L18 19L16 24L14 19L9 16L14 13Z"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
