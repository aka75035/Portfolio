export default function SectionHeading({
  command,
  title,
}) {
  return (
    <div>

      <p className="font-mono text-sm text-green-400">
        root@portfolio:~$ {command}
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>

    </div>
  );
}