type Props = {
  title: string;
  id?: string;
  // h1 on standalone pages (/about, /blog), h2 inside the home page.
  as?: 'h1' | 'h2';
};

/** A section's title over the rule that opens it. */
export default function SectionHeader({
  title,
  id,
  as: Heading = 'h2',
}: Props) {
  return (
    <div className="section-header">
      <Heading id={id}>{title}</Heading>
    </div>
  );
}
