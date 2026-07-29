import { useEffect, useRef, useState } from "react";
import useTypeWriter from "../hooks/useTypeWriter";
import ProjectCard from "../components/projectcard";
import { projectsData } from "../utils/project";

function Projects() {
  const { lines, typeLine } = useTypeWriter();

  const [finished, setFinished] = useState(false);
  const [clicked, setClicked] = useState(null);

  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;

    started.current = true;

    let timer;

    async function run() {
      await typeLine(
        "These are some of the projects I have built."
      );

      timer = setTimeout(() => {
        setFinished(true);
      }, 500);
    }

    run();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Terminal Heading */}
      <section className="px-6 pt-24 text-center lg:pt-28">

        <div className="min-h-[60px] font-mono text-xl text-green-400 md:text-2xl lg:text-4xl">
          {lines.map((line, index) => (
            <p key={index}>

              {line}

              {index === lines.length - 1 && !finished && (
                <span className="ml-1 animate-pulse">
                  _
                </span>
              )}
            </p>
          ))}
        </div>

      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 lg:px-8">

        {finished && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.GitHub || project.title || index}
                {...project}
                clicked={clicked}
                setClicked={setClicked}
              />
            ))}

          </div>
        )}

      </section>

    </main>
  );
}

export default Projects;