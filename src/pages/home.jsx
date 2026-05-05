import { useEffect, useRef, useState } from "react";
import useTypeWriter from "../hooks/useTypeWriter";
import profile from "../assets/profile.jpg";
import Profile from '../components/profilepic'
import About from "../components/about";
import { run } from "../utils/Boot"

function Home() {
  const intro = "Hi, I am Akash";
  const about =
    "A Full Stack Developer focused on building scalable and user-friendly web applications. I work primarily with the MERN stack and enjoy turning ideas into real-world solutions. I’m passionate about writing clean code, optimizing performance, and creating intuitive user experiences. I’m constantly learning and improving my skills to stay up to date with modern technologies.";
  const { lines, typeLine } = useTypeWriter();
  const hasRun = useRef(false);
  const [done, setDone] = useState(false);

  
  useEffect(() => {
    const saved = sessionStorage.getItem("homeTyped");

    if (saved) {
      setDone(true);
      return;
    }

    if (hasRun.current) return;
    hasRun.current = true;

    run(typeLine ,setDone ,intro ,about);
  }, []);

  return (
    <div className="flex h-screen">

      {/* LEFT SIDE */}
      <div className="lg:w-3/5 bg-black">
        <About lines = {lines} done={done} intro ={intro} about ={about} />
      </div>

      {/* RIGHT SIDE (FIXED IMAGE) */}
      <div className="lg:block lg:w-2/5 hidden fixed right-0 top-0 h-screen p-0">
        <Profile/>
      </div>

    </div>
  );
}

export default Home;