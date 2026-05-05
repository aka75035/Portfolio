import { useEffect, useRef, useState } from "react";
import useTypeWriter from "../hooks/useTypeWriter";
import ProjectCard from "../components/projectcard";
import { projectsData } from "../utils/project";

function Projects() {
  const { lines, typeLine } = useTypeWriter();
  const [finished, setFinished] = useState(false);
  const started = useRef(false);
  const [clicked, setClicked] = useState(null);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    async function run() {
      await typeLine("These are the projects I have built");
      
    setTimeout(() => {
      setFinished(true);
    }, 500);
    }
    run();
  }, []);


  return (
  <div className="bg-black min-h-screen">
    <div className="lg:pt-10 fixed top-5 lg:top-0 left-0 right-0 mt-14 lg:text-4xl text-xl font-mono text-green-400 text-center z-10">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
    <div className="lg:pt-48 pt-36 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {finished && projectsData.map((p, index)=>(
      <ProjectCard key={index} {...p} clicked={clicked} setClicked={setClicked}/>
    ))}
    </div>
  </div>
  );
}

export default Projects;