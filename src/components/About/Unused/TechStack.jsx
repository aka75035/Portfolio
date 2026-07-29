import SectionHeading from "./SectionHeading";
import { skills } from "../../../utils/data";

export default function TechStack() {
  return (
    <section className="border-t border-white/10 py-10">

      <SectionHeading
        command="ls ./skills"
        title="Tech Stack"
      />

      <div className="mt-7 flex flex-wrap gap-3">

        {skills.map((skill) => (
          <div
            key={skill}
            className="
              group cursor-default rounded-lg
              border border-white/10
              bg-white/[0.025]
              px-4 py-2.5
              font-mono text-sm text-gray-400
              transition duration-300
              hover:-translate-y-1
              hover:border-green-500/40
              hover:bg-green-500/10
              hover:text-green-300
            "
          >
            <span className="mr-2 text-green-500/50 group-hover:text-green-400">
              #
            </span>

            {skill}

          </div>
        ))}

      </div>

    </section>
  );
}