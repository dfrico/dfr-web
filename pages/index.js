import Image from 'next/image';

export default function Home() {
  return (
    <div className="container relative h-full">
      <Image
        className="rounded-full shadow-white w-64 h-64 max-w-sm max-h-96 mx-auto"
        src="/avatar@3x.jpg"
        alt="Avatar"
        width={320}
        height={320}
        priority
      />
      <h1 className="font-bold text-5xl tracking-tight mb-4 mt-16 text-yellow">
        Hey, I&apos;m Daniel Fernández
        {' '}
        <span role="img" aria-label=":wave:">
          👋
        </span>
      </h1>
      <h2 className="text-2xl mb-8">Frontend Engineer</h2>
      <p className="w-80 sm:w-96 mx-auto">
        I&apos;m a frontend engineer based in Madrid (Spain), currently working
        at Vizzuality developing tools for a better future.
      </p>
      <footer className="flex justify-center my-16 left-0 right-0 lg:absolute lg:bottom-0">
        <a className="mx-7" href="https://twitter.com/blayhem">
          <Image src="/icons/tw.svg" alt="twitter" width={48} height={48} />
        </a>
        <a className="mx-7" href="https://github.com/blayhem">
          <Image src="/icons/gh.svg" alt="GitHub" width={48} height={48} />
        </a>
        <a className="mx-7" href="https://www.twitch.tv/blayhem">
          <Image src="/icons/twitch.svg" alt="Twitch" width={48} height={48} />
        </a>
        <a className="mx-7" href="https://www.instagram.com/blayhem/">
          <Image src="/icons/ig.svg" alt="Instagram" width={48} height={48} />
        </a>
      </footer>
    </div>
  );
}
