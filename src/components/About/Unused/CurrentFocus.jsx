export default function CurrentFocus() {
  return (
    <section className="border-t border-white/10 py-10">

      <div className="relative overflow-hidden rounded-2xl border border-green-500/15 bg-green-500/[0.035] p-6 sm:p-8">

        {/* Glow */}
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-green-500/10 blur-3xl" />

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
          Current Focus
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-white">
          Learning. Building. Improving.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
          Focused on full-stack development, backend
          architecture, artificial intelligence, and building
          products that solve real-world problems.
        </p>

        <div className="mt-6 flex items-center gap-2 font-mono text-sm text-green-400">

          <span>$</span>

          <span>status --active</span>

          <span className="h-4 w-2 animate-pulse bg-green-400" />

        </div>

      </div>

    </section>
  );
}