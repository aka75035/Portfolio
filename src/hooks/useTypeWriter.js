import { useState, useEffect } from "react";
export default function useTypeWriter(){
  const [lines, setLines] = useState([]);

  const typeLine = (text, speed = 80) => {
      return new Promise((resolve) => {
          let i = 0;
  
          const interval = setInterval(() => {
              if (i >= text.length) {
                  clearInterval(interval);
  
                  setLines((prev) => [...prev, ""]); // new empty line
                  resolve();
                  return; // 🚀 STOP execution
              }
              
              const char = text[i];
  
              setLines((prev) => {
                  const last = prev[prev.length - 1] || "";
                  const updated = last + char;
                  return [
                    ...prev.slice(0, -1),
                    updated
                  ];
              });
  
              i++;
          }, speed);
      });
    };

    return{lines, setLines, typeLine}
}