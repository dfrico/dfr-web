import Image from 'next/image';
import Link from 'next/link';

import currentlyAt from '@/components/currently';
import { getPost, BMSSP, NIGHT_LIGHT, monthYear } from '@/components/r2b/posts';
import Rail from '@/components/r2b/rail';
import SectionHeader from '@/components/r2b/sectionHeader';
import ToTop from '@/components/r2b/toTop';
import WritingList from '@/components/r2b/writingList';
import { thesis, thrml } from '@/content/projects';
import { homeMetadata } from '@/content/site';
import { previously, work } from '@/content/work';

export const metadata = homeMetadata;

export default function Home() {
  const bmssp = getPost(BMSSP)!.module.meta;
  const nightLight = getPost(NIGHT_LIGHT)!.module.meta;

  const labRows = [
    { ...thesis, status: `GitHub · ${thesis.date}`, external: true },
    {
      title: nightLight.title,
      description: nightLight.description,
      url: `/blog/${NIGHT_LIGHT}`,
      status: `write-up · ${monthYear(NIGHT_LIGHT)}`,
      external: false,
    },
    { ...thrml, status: `0xdf4.com · ${thrml.date}`, external: true },
  ];

  return (
    <div className="shell">
      <Rail active="about" spy />
      <main id="content" className="main">
        <div className="content">
          <section id="about" aria-labelledby="name">
            <h1 id="name" className="name">
              Daniel Fernández
            </h1>
            <p className="identity mono">Senior Software Engineer · Spain</p>
            <hr className="rule" />
            <p className="intro">{currentlyAt}</p>
            <figure className="figure">
              <div className="frame">
                <Image
                  src="/img/office-in-a-small-city.png"
                  width={1328}
                  height={936}
                  sizes="(max-width: 720px) 100vw, 660px"
                  alt="ASCII-art version of Edward Hopper's Office in a Small City: a man sits at a desk by the large corner windows of an office, seen from outside, between a pale stone wall and a blue sky."
                  priority
                />
              </div>
              {/* <figcaption>
                After Edward Hopper, <i>Office in a Small City</i> (1953). ASCII
                rendering.
              </figcaption> */}
            </figure>
          </section>

          <section id="work" aria-labelledby="work-heading">
            <SectionHeader
              num="02"
              title="Work"
              label="Experience"
              id="work-heading"
            />
            {work.map((entry) => (
              <article key={entry.company} className="entry">
                <div className="entry-head">
                  <h3>{entry.company}</h3>
                  <span className="mono">{entry.years}</span>
                </div>
                <p className="role">{entry.role}</p>
                {[...entry.paragraphs, ...entry.bullets].map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
                <p className="tags mono">{entry.tech.join(' · ')}</p>
              </article>
            ))}
            <p className="previously">{previously}</p>
          </section>

          <section id="lab" aria-labelledby="lab-heading">
            <SectionHeader
              num="03"
              title="Lab"
              label="Projects"
              id="lab-heading"
            />
            <article className="feature">
              <div className="feature-head">
                <h3>
                  <Link href={`/blog/${BMSSP}`}>{bmssp.title}</Link>
                </h3>
                <span className="mono">
                  {/* "November 2026" → "Nov 2026" */}
                  write-up · updated{' '}
                  {bmssp.updated?.replace(/^(\w{3})\w+/, '$1')}
                </span>
              </div>
              <p>{bmssp.description}</p>
              {/* <table className="results">
                <tbody>
                  <tr>
                    <th scope="row">Dijkstra, 1M nodes</th>
                    <td>5.5 s</td>
                  </tr>
                  <tr>
                    <th scope="row">BMSSP, 1M nodes</th>
                    <td>16 s</td>
                  </tr>
                  <tr>
                    <th scope="row">Edge relaxations, BMSSP vs Dijkstra</th>
                    <td>2–3× more</td>
                  </tr>
                </tbody>
              </table> */}
              <p className="footnote mono">
                {bmssp.stack} implementation, random sparse graphs (average
                degree 4), on an M1 Pro.
              </p>
              <p className="links mono">
                <Link href={`/blog/${BMSSP}`}>write-up</Link>
                <a href={bmssp.code}>code</a>
              </p>
            </article>

            <div className="lab-list">
              {labRows.map((row) => (
                <article key={row.title} className="lab-row">
                  <div className="lab-row-head">
                    <h3>
                      {row.external ? (
                        <a href={row.url}>{row.title}</a>
                      ) : (
                        <Link href={row.url}>{row.title}</Link>
                      )}
                    </h3>
                    <span className="mono">{row.status}</span>
                  </div>
                  <p>{row.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="writing" aria-labelledby="writing-heading">
            <SectionHeader
              num="04"
              title="Writing"
              label="Notes and write-ups"
              id="writing-heading"
            />
            <WritingList />
          </section>
        </div>
      </main>
      <ToTop />
    </div>
  );
}
