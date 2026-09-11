interface IconProps {
  className?: string;
  size?: number;
}

/** Soft background illustration of prayer beads for the tasbeeh card. */
export function TasbeehBeadsWatermark({ className = "", size = 200 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Large prayer-bead ring */}
      <circle cx="100" cy="36" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="62" cy="52" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="40" cy="86" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="42" cy="124" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="64" cy="154" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="168" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="136" cy="154" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="158" cy="124" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="160" cy="86" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="138" cy="52" r="14" stroke="currentColor" strokeWidth="2" />
      {/* Tassel */}
      <line
        x1="100"
        y1="22"
        x2="100"
        y2="6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="100" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </svg>
  );
}
