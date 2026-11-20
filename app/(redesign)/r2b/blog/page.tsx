import Rail from '@/components/r2b/rail';
import SectionHeader from '@/components/r2b/sectionHeader';
import WritingList from '@/components/r2b/writingList';

export default function Blog() {
  return (
    <div className="shell">
      <Rail active="writing" />
      <main id="content" className="main">
        <div className="content">
          <SectionHeader
            num="04"
            title="Writing"
            label="Notes and write-ups"
            as="h1"
          />
          <WritingList />
        </div>
      </main>
    </div>
  );
}
