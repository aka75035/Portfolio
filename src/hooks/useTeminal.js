import { useState } from "react";

export default function useTerminal(onSuccess, external = {}){
  const [input, setInput] = useState("");
  // allow sharing lines state from outside (e.g., useTypeWriter)
  const hasExternal = external && external.lines && external.setLines;
  const [internalLines, internalSetLines] = useState([""]);
  const lines = hasExternal ? external.lines : internalLines;
  const setLines = hasExternal ? external.setLines : internalSetLines;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        const command = input.trim().toLowerCase();

        // show typed command in terminal
        setLines((prev) => [...prev, "Here> " + input, ""]);

        if (command === "hello") {
        setLines((prev) => [
            ...prev,
            "Building portfolio","Fetching Data from Resume", "Launching in","5","4","3","2","1",
            ""
        ]);
        onSuccess?.(); //this Akash writing this trigger loader
        } 
        else {
        setLines((prev) => [
            ...prev,
            "Command not found",
            ""
        ]);
        }

        setInput("");
    }
  };
  return { input, setInput, handleKeyDown, lines, setLines };
}