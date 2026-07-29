export default function AboutBio() {
  return (
    <section className="grid gap-8 border-t border-white/15 py-16 md:grid-cols-[180px_1fr]">

      <div>
        <span className="font-mono text-xs text-neutral-500">
          01
        </span>

        <h2 className="mt-2 text-sm font-medium">
          About
        </h2>
      </div>

      <div className="max-w-2xl space-y-5 text-lg leading-8 text-neutral-300">
        <p>
          I'm a Computer Science Engineering student and
          full-stack developer. I work across frontend and
          backend development, with most of my work centered
          around React, Node.js and MongoDB.
        </p>

        <p className="text-neutral-500">
          I enjoy taking products from an idea to something
          people can actually use — designing the interface,
          building APIs, working with databases and deploying
          the final application.
        </p>
      </div>

    </section>
  );
}