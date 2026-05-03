import { useState, useEffect } from "react";
export default function useTypeWriter(){
  const [lines, setLines] = useState([""]);

  const typeLine = (text, speed = 5) => {
      return new Promise((resolve) => {
          let i = 0;
  
          const interval = setInterval(() => {
              if (i >= text.length) {
                  clearInterval(interval);
  
                  setLines((prev) => [...prev, ""]); // new empty line
                  resolve();
                  return; // 🚀 STOP execution
              }
  
              setLines((prev) => {
                  const last = prev[prev.length - 1] || "";
                  return [
                    ...prev.slice(0, -1),
                    last + text[i-1]
                  ];
              });
  
              i++;
          }, speed);
      });
    };

    return{lines, setLines, typeLine}
}