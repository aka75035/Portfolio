
import TerminalCard from "./TerminalCard";

export default function AboutInfo() {
  return (
    <TerminalCard
      command="cat profile.txt"
      title="About Me"
      className="lg:col-span-2"
    >
      <p>
        I'm a Computer Science Engineering student and Full
        Stack Developer focused on creating fast, scalable,
        and user-friendly web applications.
      </p>

      <p className="mt-4">
        I enjoy solving real-world problems, developing
        complete products, and exploring new technologies
        across web development and artificial intelligence.
      </p>
    </TerminalCard>
  );
}