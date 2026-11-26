/** Where to find me, in the order the rail and the phone footer list them. */

export type SiteLink = {
  label: string;
  href: string;
};

export const siteLinks: SiteLink[] = [
  { label: '𝕏', href: 'https://x.com/dfrico_' },
  { label: 'github', href: 'https://github.com/dfrico' },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/daniel-fernandez-rico/',
  },
  { label: 'hi [at] dfrico.com', href: 'mailto:hi@dfrico.com' },
];
