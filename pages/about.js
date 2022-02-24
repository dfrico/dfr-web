import Image from 'next/image';
import Link from 'next/link';
import Timeline from 'components/timeline';

export default function About() {
  const now = new Date();
  const birthDate = new Date('1994-03-13');
  const age = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24 * 365));
  return (
    <>
      <div className="mt-4 mx-auto">
        <Image
          className="rounded-full"
          src="/img/sofa.jpeg"
          alt="Avatar"
          width={180}
          height={180}
        />
      </div>

      <section className="text-center mt-6">
        <p className="mb-2">
          Hello there! My name is Daniel and I’m a {age} year old Frontend
          Engineer working remotely from sunny Spain. I currently work at{' '}
          <Link href="https://localistico.com">
            <a>Localistico</a>
          </Link>{' '}
          helping businesses grow.
        </p>
        <p className="mb-2">
          I have a Computer Science BS (UC3M), and I&apos;ve been working as a
          developer and designer since 2016, participating in hackathons and
          advocating for technology in different ways.
        </p>
        <p className="mb-2">
          I am a person of too many hobbies. My interests outside of coding
          include good coffee, mechanical keyboards, synths and electronic
          music, and digital &amp; analog photography.
        </p>
      </section>
      {/* <section className="text-center mt-6">
        Check out my{' '}
        <Link href="/bio">
          <a>
            <code>/bio</code>
          </a>
        </Link>{' '}
        to learn more about me.
      </section> */}
      <Timeline />
      <section className="block text-center mt-6 mb-16">
        <p>
          contact me{' '}
          <span role="img" aria-label="at">
            👉
          </span>{' '}
          <a href="mailto:daniel.fdez@pm.me">daniel.fdez@pm.me</a>
          <br />
          previous work (& other){' '}
          <span role="img" aria-label="at">
            👉
          </span>{' '}
          <a
            href="https://www.linkedin.com/in/daniel-fernandez-rico/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com
          </a>
          <br />
          code and pet projects{' '}
          <span role="img" aria-label="at">
            👉
          </span>{' '}
          <a
            href="https://github.com/blayhem"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/blayhem
          </a>
          <br />
          occasional code streamings{' '}
          <span role="img" aria-label="at">
            👉
          </span>{' '}
          <a
            href="https://www.twitch.tv/blayhem"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitch.tv/blayhem
          </a>
          <br />a bit of everything{' '}
          <span role="img" aria-label="at">
            👉
          </span>{' '}
          <a
            href="https://twitter.com/blayhem"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter.com/blayhem
          </a>
        </p>
      </section>
    </>
  );
}
