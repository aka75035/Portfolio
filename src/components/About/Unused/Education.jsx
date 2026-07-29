import TerminalCard from "./TerminalCard";

export default function Education() {
  return (
    <TerminalCard
      command="cat education.txt"
      title="Education"
    >
      <p className="font-medium text-white">
        B.Tech — Computer Science & Engineering
      </p>

      <p className="mt-3 text-gray-400">
        HMR Institute of Technology & Management
      </p>

      <div className="mt-5 flex items-center gap-2">

        <span className="rounded-md border border-green-500/20 bg-green-500/10 px-2.5 py-1 font-mono text-xs text-green-400">
          2023
        </span>

        <span className="text-gray-600">
          →
        </span>

        <span className="rounded-md border border-green-500/20 bg-green-500/10 px-2.5 py-1 font-mono text-xs text-green-400">
          2027
        </span>

      </div>
    </TerminalCard>
  );
}