export default function TerminalCard({
  command,
  title,
  children,
  className = "",
}) {
  return (
    <article
      className={`
        group rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-6
        transition duration-300
        hover:border-green-500/20
        hover:bg-white/[0.04]
        ${className}
      `}
    >

      {/* Terminal Header */}
      <div className="mb-5 flex items-center gap-2">

        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />

        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />

        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

        <span className="ml-3 font-mono text-xs text-gray-600">
          {command}
        </span>

      </div>

      <h2 className="mb-4 text-xl font-semibold text-white">
        {title}
      </h2>

      <div className="text-sm leading-7 text-gray-400">
        {children}
      </div>

    </article>
  );
}