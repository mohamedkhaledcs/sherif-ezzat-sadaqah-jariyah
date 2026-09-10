interface IconProps {
  className?: string;
  size?: number;
}

/** Soft background illustration of cupped hands for the dua card. */
export function DuaHandsWatermark({ className = "", size = 220 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M70 150C52 132 42 108 46 82C50 56 70 42 90 48C102 52 110 64 112 78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M150 150C168 132 178 108 174 82C170 56 150 42 130 48C118 52 110 64 108 78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M78 158C90 176 104 186 110 188C116 186 130 176 142 158"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M96 96C100 88 108 84 110 92C112 84 120 88 124 96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M60 70C48 58 44 40 52 30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M160 70C172 58 176 40 168 30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
