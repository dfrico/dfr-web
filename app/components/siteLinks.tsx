import { siteLinks } from '@/content/links';

/**
 * The same list in the rail and in the phone footer. rel="me" claims the
 * profiles as mine; a mailto is not a profile, so it does not carry it.
 */
export default function SiteLinks() {
  return (
    <ul>
      {siteLinks.map(({ label, href }) => (
        <li key={href}>
          <a href={href} rel={href.startsWith('mailto:') ? undefined : 'me'}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
