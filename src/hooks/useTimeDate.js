import { useEffect, useState } from "react";

export default function useTimeDate() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setTime(now.toLocaleTimeString());
    setDate(now.toDateString());
  }, []);
  return {time, date};
}