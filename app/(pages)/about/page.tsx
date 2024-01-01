import Image from 'next/image';
import Timeline from '@/components/timeline';
import currentlyAt from '@/components/currently';

export default function About() {
  const now = new Date();
  const birthDate = new Date('1994-03-13');
  const age = Math.floor(
    (now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365),
  );
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
          Hello there! My name is Daniel and I&apos;m a {age} year old Frontend
          Engineer based in Spain. I currently work {currentlyAt}
        </p>
        <p className="mb-2">
          Apart from coding I like hiking, good coffee,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/blayhem"
          >
            playing/making music
          </a>
          , or{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://photos.dfr.codes/"
          >
            taking pictures
          </a>
          .
        </p>
      </section>
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
            href="https://github.com/dfrico"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/dfrico
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
