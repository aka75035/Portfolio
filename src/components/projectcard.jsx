import { useRef } from "react";
import useTypeWriter from "../hooks/useTypeWriter";

function ProjectCard({ title, desc, tech, GitHub, link, clicked, setClicked }) {
  const { lines, setLines, typeLine } = useTypeWriter();
  const isTyping = useRef(false);

  const handleClick = async (type, url) => {
    // second click → open link (allow during typing)
    
    if (isTyping.current) return;
    
    setLines([]); // clear only when starting
    setClicked({ title, type });
    
    isTyping.current = true;
    
    await typeLine(`> Opening ${title}...`);
    await typeLine(`> Launching ${type}...`);
    // await typeLine(`Please Allow Pop`);
    window.location.href = url;
    
    isTyping.current = false;
    console.log(url);
  };
  
  const isClicked = clicked?.title === title;

  return (
    <div
      className="border p-5 
                 bg-black text-green-400 font-mono
                 hover:bg-green-500/10 transition 
                 hover:shadow-[0_0_15px_#22c55e]
                 hover:-translate-y-1
                 h-[300px] flex flex-col justify-between cursor-pointer"
    >

      {!isClicked ? (
        <>
  {/* Terminal header */}
  <div className="flex gap-2 mb-3">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
  </div>

  <h2 className="text-lg mb-2 text-green-300">
    {">"} {title}
  </h2>

  <p className="text-sm mb-3 text-green-400/80">
    {desc}
  </p>

  <div className="flex flex-wrap gap-2 mb-4">
    {tech.map((t, i) => (
      <span key={i} className="text-xs border border-green-400 px-2 py-1 rounded">
        {t}
      </span>
    ))}
  </div>

  {/* ✅ SHOW TYPING BELOW (NOT REPLACING UI) */}
  {isClicked && (
    <div className="text-sm mb-3">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  )}

  {/* ✅ LINKS ALWAYS VISIBLE */}
  <a
    href={link}
    onClick={(e) => {
      e.preventDefault();
      handleClick("Live Project", link);
    }}
    className="block text-sm text-green-300 hover:underline"
  >
    View Live Project →
  </a>

  <a
    href={GitHub}
    onClick={(e) => {
      e.preventDefault();
      handleClick("GitHub", GitHub);
    }}
    className="block mt-2 text-sm text-green-300 hover:underline"
  >
    View GitHub →
  </a>
</>
      ) : (
        <div className="text-sm">
          {lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}

    </div>
  );
}

export default ProjectCard;