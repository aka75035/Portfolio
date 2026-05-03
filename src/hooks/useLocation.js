import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    const getLocation = async () => {
      try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();

      setLocation(`${data.city}, ${data.country_name}`);
      } catch (err) {
      setLocation("Unknown location");
      }
    };

    getLocation();
  }, []);
  return location;

}
