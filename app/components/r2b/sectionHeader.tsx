type Props = {
  num: string;
  title: string;
  // Adds to the title rather than repeating it ("Work" over "Experience").
  label: string;
  id?: string;
  // h1 on standalone pages (/about, /blog), h2 inside the home page.
  as?: 'h1' | 'h2';
};

export default function SectionHeader({
  num,
  title,
  label,
  id,
  as: Heading = 'h2',
}: Props) {
  return (
    <div className="section-header">
      <Heading id={id}>{title}</Heading>
      <p className="section-label">
        Section {num} — {label}
      </p>
    </div>
  );
}
