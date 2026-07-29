const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "REST APIs",
];

export default function Skills() {
  return (
    <section className="grid gap-8 border-t border-white/15 py-16 md:grid-cols-[180px_1fr]">

      <div>
        <span className="font-mono text-xs text-neutral-500">
          03
        </span>

        <h2 className="mt-2 text-sm font-medium">
          Tools
        </h2>
      </div>

      <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3">

        {skills.map((skill) => (
          <div
            key={skill}
            className="border-b border-r border-white/10 px-4 py-5 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}