import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Image
        className="rounded-full shadow-white"
        src="/avatar@3x.jpg"
        alt="Avatar"
        width={320}
        height={320}
      />
      <h1 className="font-bold text-5xl tracking-tight mb-4 mt-16 text-yellow">
        Hey, I’m Daniel Fernández
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
      <ul className="flex flex-row justify-center mt-32">
        <li className="mx-7">
          <a href="https://twitter.com/blayhem">
            <Image src="/icons/tw.svg" alt="twitter" width={48} height={48} />
          </a>
        </li>
        <li className="mx-7">
          <a href="https://github.com/blayhem">
            <Image src="/icons/gh.svg" alt="GitHub" width={48} height={48} />
          </a>
        </li>
        <li className="mx-7">
          <a href="https://www.twitch.tv/blayhem">
            <Image
              src="/icons/twitch.svg"
              alt="Twitch"
              width={48}
              height={48}
            />
          </a>
        </li>
        <li className="mx-7">
          <a href="https://www.instagram.com/blayhem/">
            <Image src="/icons/ig.svg" alt="Instagram" width={48} height={48} />
          </a>
        </li>
      </ul>
    </>
  );
}
