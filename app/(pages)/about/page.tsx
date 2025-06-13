import Image from 'next/image';
import Timeline from '@/components/timeline';
import currentlyAt from '@/components/currently';

export default function About() {
  const now = new Date();
  const birthDate = new Date('1994-03-13');
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
          Hi! My name is Daniel and I&apos;m a Software
          Engineer working remotely from Spain.
        </p>
        <p className="mb-2">I currently work {currentlyAt}</p>
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
          <a href="mailto:hi@dfrico.com">hi [at] dfrico.com</a>
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
          code and projects{' '}
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
          <br />𝕏 {' '}
          <span role="img" aria-label="at">
            👉
          </span>{' '}
          <a
            href="https://x.com/blayhem"
            target="_blank"
            rel="noopener noreferrer"
          >
            x.com/blayhem
          </a>
        </p>
      </section>
    </>
  );
}
