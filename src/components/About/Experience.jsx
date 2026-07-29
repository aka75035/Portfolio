const experience = [
  {
    year: "2026 — NOW",
    role: "Full Stack Development Intern",
    company: "Rhymind Labs Pvt. Ltd.",
  },
  {
    year: "2025",
    role: "Web Developer Intern",
    company: "Meeramaya Jewellers LLP",
  },
  {
    year: "2025",
    role: "Agentic AI Trainee",
    company: "IBM SkillsBuild",
  },
];

export default function Experience() {
  return (
    <section className="grid gap-8 border-t border-white/15 py-16 md:grid-cols-[180px_1fr]">

      <div>
        <span className="font-mono text-xs text-neutral-500">
          02
        </span>

        <h2 className="mt-2 text-sm font-medium">
          Experience
        </h2>
      </div>

      <div>
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="grid gap-3 border-b border-white/10 py-6 first:pt-0 sm:grid-cols-[130px_1fr]"
          >
            <span className="font-mono text-xs text-neutral-600">
              {item.year}
            </span>

            <div>
              <h3 className="text-base font-medium text-neutral-200">
                {item.role}
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                {item.company}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}