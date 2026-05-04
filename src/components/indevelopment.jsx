import { useEffect } from "react";
import useTypeWriter from "../hooks/useTypeWriter";

function InDevelopment() {
  const { lines, typeLine } = useTypeWriter();

  useEffect(() => {
    async function run() {
      await typeLine("Initializing Page...", 50);
      await typeLine("Status: Under Development 🚧", 40);
      await typeLine("Please check back later.", 40);
    }
    run();
  }, []);

  return (
    <div className="h-screen bg-black text-green-400 font-mono p-10">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default InDevelopment;