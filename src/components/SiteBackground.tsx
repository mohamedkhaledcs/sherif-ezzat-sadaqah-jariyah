export function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- local public asset; avoid image optimizer so PWA can cache the exact file */}
      <img
        src="/bg-site.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_18%] sm:object-[center_22%] lg:object-center"
      />
      <div className="absolute inset-0 bg-[#f7f3ec]/20" />
    </div>
  );
}
