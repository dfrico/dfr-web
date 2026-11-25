import Image from 'next/image';

import currentlyAt from '@/components/currently';
import Rail from '@/components/r2b/rail';
import SectionHeader from '@/components/r2b/sectionHeader';
import timeline from '@/components/timeline/timeline';

const contact = [
  {
    label: 'contact me',
    href: 'mailto:hi@dfrico.com',
    text: 'hi [at] dfrico.com',
  },
  {
    label: 'previous work (& other)',
    href: 'https://www.linkedin.com/in/daniel-fernandez-rico/',
    text: 'linkedin.com',
  },
  {
    label: 'code and projects',
    href: 'https://github.com/dfrico',
    text: 'github.com/dfrico',
  },
  { label: '𝕏', href: 'https://x.com/blayhem', text: 'x.com/blayhem' },
];

export default function About() {
  return (
    <div className="shell">
      <Rail active="about" />
      <main id="content" className="main">
        <div className="content">
          <SectionHeader title="About" as="h1" />
          <figure className="portrait frame">
            <Image
              src="/img/sofa.jpeg"
              alt="Daniel Fernández"
              width={360}
              height={360}
            />
          </figure>
          <div className="about-copy">
            <p>
              Hi! My name is Daniel and I&apos;m a Software Engineer working
              remotely from Spain.
            </p>
            <p>{currentlyAt}</p>
          </div>

          {/* Every year is in the page; the current site folds them behind "Show more". */}
          <div className="timeline">
            {Object.entries(timeline)
              .reverse()
              .map(([year, items]) => (
                <section key={year} className="year">
                  <h2>{year}</h2>
                  <ul>
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
          </div>

          <dl className="contact">
            {contact.map(({ label, href, text }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>
                  <a href={href}>{text}</a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  );
}
