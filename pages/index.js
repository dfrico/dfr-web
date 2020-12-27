import Image from 'next/image';
import postList from '../utils/getAllPosts';
import Preview from '../components/preview';

export default function Home() {
  return (
    <div className="container relative h-full">
      <div className="grid sm:grid-cols-2">
        <Image
          className="rounded-full shadow-white object-cover mx-auto" // w-64 h-64 max-w-sm max-h-96
          src="/img/avatar@3x.jpg"
          alt="Avatar"
          width={320}
          height={320}
          priority
        />
        <div className="text-center">
          <h1 className="font-bold text-5xl tracking-tight mb-4 mt-16 text-yellow">
            Hey, I&apos;m Daniel Fernández
            {' '}
            <span role="img" aria-label=":wave:">
              👋
            </span>
          </h1>
          <h2 className="text-2xl mb-8">Frontend Engineer</h2>
          <p>
            I&apos;m a frontend engineer based in Madrid (Spain), currently
            working at Vizzuality developing tools for a better future.
          </p>
        </div>
      </div>

      {postList.length ? (
        <div className="my-8">
          <h2 className="text-2xl mb-8">Latest post:</h2>
          <Preview key={postList[0].link} post={postList[0]} />
        </div>
      ) : null}

      <footer className="block relative mt-12 mb-6 left-0 right-0 sm:absolute sm:bottom-0">
        <div className="flex justify-evenly lg:w-3/5 mx-auto">
          <a className="mx-6" href="https://twitter.com/blayhem">
            <Image src="/icons/tw.svg" alt="twitter" width={48} height={48} />
          </a>
          <a className="mx-6" href="https://github.com/blayhem">
            <Image src="/icons/gh.svg" alt="GitHub" width={48} height={48} />
          </a>
          <a className="mx-6" href="https://www.twitch.tv/blayhem">
            <Image
              src="/icons/twitch.svg"
              alt="Twitch"
              width={48}
              height={48}
            />
          </a>
          <a className="mx-6" href="https://www.instagram.com/blayhem/">
            <Image src="/icons/ig.svg" alt="Instagram" width={48} height={48} />
          </a>
        </div>
      </footer>
    </div>
  );
}
