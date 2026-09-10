interface IconProps {
  className?: string;
  size?: number;
}

/** Half flourish — mirror with `-scale-x-100` for the opposite side. */
export function HeroOrnament({ className = "", size = 56 }: IconProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.4)}
      viewBox="0 0 80 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M76 16H28"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M28 16C22 16 18 10 12 10C8 10 5 12 3 16C5 20 8 22 12 22C18 22 22 16 28 16Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M28 16L22 10L28 4L34 10Z"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="16" r="1.5" fill="currentColor" />
      <path
        d="M48 12C52 10 56 10 60 12"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M48 20C52 22 56 22 60 20"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
