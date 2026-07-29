import { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";
import useTimeDate from "../hooks/useTimeDate";
import useTerminal from "../hooks/useTeminal";
import { runBoot } from "../utils/Boot";
import useTypeWriter from "../hooks/useTypeWriter";

function Loader({ onComplete }) {

  const { lines, setLines, typeLine } = useTypeWriter();

  const [showVisitor, setShowVisitor] = useState(false);
  const [slideUp, setslideUp] = useState(false);
  
  const {time, date} = useTimeDate();

  const location = useLocation();

  //Type Writer
  const { input, setInput, handleKeyDown } =
    useTerminal(() => {
      setslideUp(true);
    }, { lines, setLines });

  //RunBoot and Show Screen
  useEffect(() => {
    const bootCompleted = sessionStorage.getItem("bootCompleted");

    if (bootCompleted) {
      onComplete();
      return;
    }

    runBoot(typeLine, setShowVisitor);
  }, []);

  useEffect(() => {
    if (!slideUp) return;

    sessionStorage.setItem("bootCompleted", "true");

    const timer = setTimeout(() => {
      onComplete();
    }, 1200);

    return () => clearTimeout(timer);
  }, [slideUp, onComplete]);

  // After Command Hello
  useEffect(() => {
    if (slideUp) {
      setTimeout(() => {
        onComplete(); 
      }, 1200);
    }
  }, [slideUp]);

  return (
  <>
    <div
        className={`fixed inset-0 bg-black text-green-400 font-mono p-6 text-sm transition-transform duration-700 ease-in-out ${
        slideUp ? "-translate-y-full opacity-0 blur-sm" : "translate-y-0 opacity-100"}`}
    >
    <div className="bg-black text-green-400 font-mono h-screen p-6 text-sm">

      {/* Terminal lines */}
      {lines.slice(0, 3).map((line, index) => (
        <p key={index}>{line}</p>
      ))}

      {/* Visitor Info */}
      {showVisitor && (
        <div className="mt-4 mb-4 text-yellow-400">
          <p>Visitor Detected:</p>
          <p>📍 {location}</p>
          <p>🕒 {time}</p>
          <p>📅 {date}</p>
        </div>
      )}
      <div className="mb-4">
      {lines.slice(3,7).map((line, index) => (
          <p key={index}>{line}</p>
      ))}
      </div>
      {lines.slice(8).map((line, index) => (
        <p key={index}>{line}</p>
      ))} 

      {/* Input line */}
      <div className="mt-4 flex items-center">
        <span>
            {lines.slice(7,8).map((line, index) => (
            <p key={index}>{line}</p>
            ))} 
        </span>

        <input
        className="bg-transparent outline-none text-green-400 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        />

        <span className="animate-blink ml-1">|</span>
      </div>
    </div>
    </div>
  </>
  );
}

export default Loader;