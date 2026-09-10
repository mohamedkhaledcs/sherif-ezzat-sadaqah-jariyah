import { HeroOrnament } from "@/components/icons/HeroOrnament";

export function Hero() {
  return (
    <section
      className="relative mx-auto flex w-full max-w-4xl flex-col items-center overflow-x-hidden px-4 pb-8 pt-8 text-center sm:pt-14 md:pb-10 md:pt-16"
      aria-labelledby="memorial-name"
    >
      <div className="mb-5 flex w-full max-w-full items-center justify-center gap-1.5 sm:gap-3 md:mb-7">
        <HeroOrnament className="hidden shrink-0 text-sage opacity-80 min-[380px]:block sm:hidden" size={40} />
        <HeroOrnament className="hidden shrink-0 text-sage opacity-80 sm:block" size={52} />
        <p className="min-w-0 font-naskh text-[0.95rem] leading-relaxed text-forest sm:text-lg md:text-xl">
          إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
        </p>
        <HeroOrnament
          className="hidden shrink-0 text-sage opacity-80 -scale-x-100 min-[380px]:block sm:hidden"
          size={40}
        />
        <HeroOrnament
          className="hidden shrink-0 text-sage opacity-80 -scale-x-100 sm:block"
          size={52}
        />
      </div>

      <h1
        id="memorial-name"
        className="max-w-full text-4xl font-extrabold leading-tight tracking-wide text-forest sm:text-5xl md:text-6xl lg:text-[4.25rem]"
      >
        شريف عزت
      </h1>

      <p className="mt-4 max-w-full text-base font-medium text-forest-muted sm:text-lg md:mt-5 md:text-xl">
        رحمه الله وأسكنه فسيح جناته
      </p>

      <p className="mt-2 max-w-full text-sm text-text-muted sm:text-[15px] md:mt-3">
        ويبقى الأثر الطيب.. بالدعاء والقرآن
      </p>
    </section>
  );
}
