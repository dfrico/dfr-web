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
      <h1 className="font-bold text-5xl tracking-tight mb-4 text-yellow">
        Hey, I’m Daniel Fernández
        {' '}
        <span role="img" aria-label=":wave:">
          👋
        </span>
      </h1>
      <p className="role">Frontend Engineer</p>
      <p className="bio">
        I&apos;m a frontend engineer based in Madrid (Spain), currently working
        at Vizzuality developing tools for a better future.
      </p>
      <ul className="flex flex-row justify-center mt-32">
        <li className="mx-7">
          <Image src="/icons/tw.svg" alt="twitter" width={48} height={48} />
        </li>
        <li className="mx-7">
          <Image src="/icons/gh.svg" alt="GitHub" width={48} height={48} />
        </li>
        <li className="mx-7">
          <Image src="/icons/twitch.svg" alt="Twitch" width={48} height={48} />
        </li>
        <li className="mx-7">
          <Image src="/icons/ig.svg" alt="Instagram" width={48} height={48} />
        </li>
      </ul>
    </>
  );
}
