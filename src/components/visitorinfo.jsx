import { useEffect, useState } from "react";

function VisitorInfo() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  // Time update
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setDate(now.toDateString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );

        const data = await res.json();
        setLocation(`${data.city}, ${data.countryName}`);
      },
      () => setLocation("Permission denied")
    );
  }, []);

  return (
    <div className="mt-6 text-gray-500 text-sm">
      <p>📍 {location}</p>
      <p>🕒 {time}</p>
      <p>📅 {date}</p>
    </div>
  );
}

export default VisitorInfo;