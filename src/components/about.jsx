export default function About({lines, done}){
    const intro = "Hi, I am Akash";
    const about =
        "A Full Stack Developer focused on building scalable and user-friendly web applications. I work primarily with the MERN stack and enjoy turning ideas into real-world solutions. I’m passionate about writing clean code, optimizing performance, and creating intuitive user experiences. I’m constantly learning and improving my skills to stay up to date with modern technologies.";
    return(
      

      <div className="flex flex-col h-full overflow-y-auto bg-gray-900 text-white p-10 no-scrollbar">

            <div className="pt-10 mt-14 text-4xl font-mono text-green-400 text-center">
            {done ? (
                <p>{intro}</p>
            ) : (
                <p>
                {lines[0]}
                <span className="animate-pulse">|</span>
                </p>
            )}
            </div>

            {/* ABOUT */}
            <div className="pt-10 text-lg font-mono text-green-400 leading-relaxed">
            {done ? (
                <p>{about}</p>
            ) : (
                <p>{lines[1]}</p>
            )}
            </div>

        </div>
    )
}