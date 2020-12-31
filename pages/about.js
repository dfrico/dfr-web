import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="mt-4 mx-auto">
        <Image
          className="rounded-full shadow-white"
          src="/img/sofa.jpeg"
          alt="Avatar"
          width={180}
          height={180}
        />
      </div>

      <section className="text-center mt-6">
        <p className="mb-2">
          Hi! My name is Daniel and I’m a 26 years old, Madrid-based, Frontend
          Engineer at Vizzuality.
        </p>
        <p className="mb-2">
          Before working here, I got a Computer Science BS from UC3M, worked as
          a developer and designer, participated in several hackathons and
          advocated for technology in different ways.
        </p>
        <p className="mb-2">
          I am a person of too many hobbies. My interests outside of coding
          include minimalism, coffee, mechanical keyboards, synths and
          electronic music, and digital &amp; analog photography.
        </p>
      </section>
      <section className="text-center mt-6">
        Check out my
        {' '}
        <Link href="/bio">
          <a>
            <code>/bio</code>
          </a>
        </Link>
        {' '}
        to learn more about me.
      </section>
      <section className="block text-center mt-6 mb-16">
        <p className="mb-4">More about me</p>
        <p>
          contact me
          {' '}
          <span role="img" aria-label="at">
            👉
          </span>
          {' '}
          <a href="mailto:daniel.fdez@pm.me">daniel.fdez@pm.me</a>
          <br />
          code and pet projects
          {' '}
          <span role="img" aria-label="at">
            👉
          </span>
          {' '}
          <a
            href="https://github.com/blayhem"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/blayhem
          </a>
          <br />
          occasional code streamings
          {' '}
          <span role="img" aria-label="at">
            👉
          </span>
          {' '}
          <a
            href="https://www.twitch.tv/blayhem"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitch.tv/blayhem
          </a>
          <br />
          a bit of everything
          {' '}
          <span role="img" aria-label="at">
            👉
          </span>
          {' '}
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
