import Link from 'next/link';
import Monogram from './monogram';
import RailNav, { type Section } from './railNav';
import SiteLinks from './siteLinks';
import ThemeToggle from './themeToggle';

type Props = {
  active?: Section;
  spy?: boolean;
  // Replaces the social links at the foot of the rail (post pages: "On this page").
  footer?: React.ReactNode;
};

export default function Rail({ active, spy, footer }: Props) {
  return (
    <header className="rail">
      <div className="rail-inner">
        <Link href="/" className="monogram-link">
          <Monogram className="monogram" />
        </Link>
        <RailNav active={active} spy={spy} />
        {/* Foot of the rail on desktop; right end of the top bar on phones. */}
        <ThemeToggle />
        <div className="rail-footer">{footer ?? <SiteLinks />}</div>
      </div>
    </header>
  );
}
