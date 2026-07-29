export default function AboutIntro({
  lines,
  done,
  intro,
  about,
}) {
  return (
    <header className="pb-24">

      <div className="mb-16 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          About
        </span>

        <span className="font-mono text-xs text-neutral-600">
          01 / 03
        </span>
      </div>

      <h1 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
        {done ? (
          intro
        ) : (
          <>
            {lines[0] || ""}
            <span className="ml-1 animate-pulse">_</span>
          </>
        )}
      </h1>

      <div className="mt-10 max-w-2xl border-l border-white/20 pl-5">
        <p className="text-base leading-7 text-neutral-400 md:text-lg">
          {done ? about : lines[1] || ""}
        </p>
      </div>

    </header>
  );
}