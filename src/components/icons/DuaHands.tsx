interface IconProps {
  className?: string;
  size?: number;
}

export function DuaHands({ className = "", size = 18 }: IconProps) {
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
      <path
        d="M8.5 14.5C7.2 13.6 6.2 12.2 6 10.5C5.7 8.2 7.2 6.2 9.2 5.6C10.1 5.3 11.1 5.5 11.8 6.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.5 14.5C16.8 13.6 17.8 12.2 18 10.5C18.3 8.2 16.8 6.2 14.8 5.6C13.9 5.3 12.9 5.5 12.2 6.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 15.5C9.6 17.2 10.7 18.5 12 19C13.3 18.5 14.4 17.2 15 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 6.5V10"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
