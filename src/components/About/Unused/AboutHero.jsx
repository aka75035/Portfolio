export default function AboutHero({
  lines,
  done,
  intro,
  about,
}) {
  return (
    <section className="border-b border-white/10 pb-12">

      <p className="mb-4 font-mono text-sm text-green-400">
        root@portfolio:~$ whoami
      </p>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {done ? (
          <>
            {intro}
            <span className="text-green-400">_</span>
          </>
        ) : (
          <>
            {lines[0] || ""}
            <span className="animate-pulse text-green-400">
              |
            </span>
          </>
        )}
      </h1>

      <div className="mt-6 max-w-3xl font-mono text-sm leading-7 text-gray-400 sm:text-base">
        {done ? (
          <p>{about}</p>
        ) : (
          <p>
            {lines[1] || ""}

            <span className="animate-pulse text-green-400">
              |
            </span>
          </p>
        )}
      </div>

    </section>
  );
}