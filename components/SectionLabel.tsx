export default function SectionLabel({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-gv-aqua mb-2">
        <span className="text-gv-fg4">~/faiz</span>
        {path}
      </p>
      <h2 className="font-mono text-2xl sm:text-3xl font-semibold text-gv-fg1 tracking-tight">
        {title}
      </h2>
    </div>
  );
}
