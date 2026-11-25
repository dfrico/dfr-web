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
            <p className="identity meta">Senior Software Engineer · Spain</p>
            <hr className="rule" />
            <p>{currentlyAt}</p>
            {/* The attribution is the image's tooltip rather than a caption
                under it, so the picture carries the section on its own. */}
            <div className="figure frame">
              {/* Dithered art: every pixel is a hard black or white dot, so
                  resampling it to a srcset step and re-encoding it as lossy
                  WebP smears the dither. The source is 461 kB; serve it whole
                  and let the browser do the one downscale to the column. */}
              <Image
                src="/img/office-in-a-small-city.png"
                width={1328}
                height={936}
                alt="ASCII-art version of Edward Hopper's Office in a Small City: a man sits at a desk by the large corner windows of an office, seen from outside, between a pale stone wall and a blue sky."
                title="After Edward Hopper, Office in a Small City (1953). ASCII rendering."
                unoptimized
                priority
              />
            </div>
          </section>

          <section id="work" aria-labelledby="work-heading">
            <SectionHeader title="Work" id="work-heading" />
            {work.map((entry) => (
              <article key={entry.company} className="entry">
                <div className="entry-head">
                  <h3>{entry.company}</h3>
                  <span className="meta">{entry.years}</span>
                </div>
                <p className="role">{entry.role}</p>
                {[...entry.paragraphs, ...entry.bullets].map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
                <p className="tags meta">{entry.tech.join(' · ')}</p>
              </article>
            ))}
            <p className="previously">{previously}</p>
          </section>

          <section id="lab" aria-labelledby="lab-heading">
            <SectionHeader title="Lab" id="lab-heading" />
            <article className="feature">
              <div className="feature-head">
                <h3>
                  <Link href={`/blog/${BMSSP}`}>{bmssp.title}</Link>
                </h3>
                <span className="meta">
                  {/* "November 2026" → "Nov 2026" */}
                  write-up · updated{' '}
                  {bmssp.updated?.replace(/^(\w{3})\w+/, '$1')}
                </span>
              </div>
              <p>{bmssp.description}</p>
              <p className="footnote meta">
                {bmssp.stack} implementation, random sparse graphs (average
                degree 4), on an M1 Pro.
              </p>
              <p className="links meta">
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
                    <span className="meta">{row.status}</span>
                  </div>
                  <p>{row.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="writing" aria-labelledby="writing-heading">
            <SectionHeader title="Writing" id="writing-heading" />
            <WritingList />
          </section>
        </div>
      </main>
      <ToTop />
    </div>
  );
}
