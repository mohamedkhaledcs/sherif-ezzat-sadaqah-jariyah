interface IconProps {
  className?: string;
  size?: number;
}

export function FloralCorner({ className = "", size = 160 }: IconProps) {
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
      <path
        d="M12 188C28 160 48 148 78 140C52 136 34 118 28 88C48 108 72 118 98 118C78 96 72 68 78 36C96 62 118 78 148 84C120 90 102 110 98 140C118 128 142 128 168 140C140 148 120 164 112 188"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 170C58 152 74 144 96 142"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M36 140C48 128 64 122 84 122"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M70 156C78 148 90 144 104 146"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M58 112C70 104 86 104 100 112"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle cx="98" cy="140" r="2.2" fill="currentColor" opacity="0.35" />
      <circle cx="78" cy="120" r="1.6" fill="currentColor" opacity="0.3" />
      <path
        d="M90 150C94 146 100 146 104 150C100 154 94 154 90 150Z"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.45"
      />
    </svg>
  );
}
