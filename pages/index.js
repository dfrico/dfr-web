import Image from 'next/image';
import postList from '../utils/getAllPosts';
import Preview from '../components/preview';

export default function Home() {
  return (
    <div className="container relative h-full flex-grow">
      <div className="grid sm:grid-cols-2 items-center">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-84 md:h-84 mx-auto flex items-center">
          <Image
            className="rounded-full shadow-white object-cover"
            src="/img/avatar@3x.jpg"
            alt="Avatar"
            width={336}
            height={336}
            priority
          />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-5xl tracking-tight mb-4 mt-16 text-yellow">
            Hey, I&apos;m Daniel Fernández
            {' '}
            <span role="img" aria-label=":wave:">
              👋
            </span>
          </h1>
          <h2>Frontend Engineer</h2>
          <p>
            I&apos;m a frontend engineer based in Madrid (Spain), currently
            working at Vizzuality developing tools for a better future.
          </p>
        </div>
      </div>

      {postList.length ? (
        <div className="my-8">
          <h2>Latest post:</h2>
          <Preview key={postList[0].link} post={postList[0]} />
        </div>
      ) : null}

      <footer className="block relative mt-12 mb-6 left-0 right-0 sm:absolute sm:bottom-0">
        <div className="flex justify-evenly w-72 lg:w-2/5 mx-auto">
          <a
            href="https://twitter.com/blayhem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/tw.svg" alt="twitter" width={24} height={24} />
          </a>
          <a
            href="https://github.com/blayhem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/gh.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a
            href="https://www.twitch.tv/blayhem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/twitch.svg"
              alt="Twitch"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.instagram.com/blayhem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/ig.svg" alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
