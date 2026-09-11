interface IconProps {
  className?: string;
  size?: number;
}

/** Small prayer-beads (مسبحة) icon for the tasbeeh badge. */
export function TasbeehBeads({ className = "", size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main loop of beads */}
      <circle cx="12" cy="5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="7" cy="7.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="5" cy="12.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="7" cy="17" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="19" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="17" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="19" cy="12.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="7.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      {/* Tassel / connector */}
      <line
        x1="12"
        y1="3.2"
        x2="12"
        y2="1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
