import Image from 'next/image';
import postList from '../utils/getAllPosts';
import Preview from '../components/preview';

export default function Home() {
  return (
    <div className="container relative h-full">
      <div className="grid sm:grid-cols-2 bg-gray-300">
        <Image
          className="rounded-full shadow-white object-cover mx-auto" // w-64 h-64 max-w-sm max-h-96
          src="/avatar@3x.jpg"
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
          <p className="">
            I&apos;m a frontend engineer based in Madrid (Spain), currently
            working at Vizzuality developing tools for a better future.
          </p>
        </div>
      </div>

      {postList.length ? (
        <>
          <h2>Latest post:</h2>
          <Preview key={postList[0].link} post={postList[0]} />
        </>
      ) : null}

      <h2>Now working on:</h2>
      <div className="grid grid-cols-2 gap-2">
        <a href="https://github.com/blayhem/dfr-web">
          <img
            alt="dfr-web"
            src="https://github-readme-stats.vercel.app/api/pin/?username=blayhem&repo=dfr-web&bg_color=3f4447&text_color=fafafa&title_color=FFC700"
          />
        </a>
        <a href="https://github.com/blayhem/styles">
          <img
            alt="styles"
            src="https://github-readme-stats.vercel.app/api/pin/?username=blayhem&repo=styles&bg_color=3f4447&text_color=fafafa&title_color=FFC700"
          />
        </a>
        <a href="https://github.com/vizzuality/gfw">
          <img
            alt="gfw"
            src="https://github-readme-stats.vercel.app/api/pin/?username=vizzuality&repo=gfw&bg_color=3f4447&text_color=fafafa&title_color=FFC700"
          />
        </a>
        <a href="https://github.com/vizzuality/otp-portal">
          <img
            alt="otp"
            src="https://github-readme-stats.vercel.app/api/pin/?username=vizzuality&repo=otp-portal&bg_color=3f4447&text_color=fafafa&title_color=FFC700"
          />
        </a>
      </div>

      <footer className="flex justify-evenly lg:w-3/5  mx-auto mt-12">
        <a className="mx-6" href="https://twitter.com/blayhem">
          <Image src="/icons/tw.svg" alt="twitter" width={48} height={48} />
        </a>
        <a className="mx-6" href="https://github.com/blayhem">
          <Image src="/icons/gh.svg" alt="GitHub" width={48} height={48} />
        </a>
        <a className="mx-6" href="https://www.twitch.tv/blayhem">
          <Image src="/icons/twitch.svg" alt="Twitch" width={48} height={48} />
        </a>
        <a className="mx-6" href="https://www.instagram.com/blayhem/">
          <Image src="/icons/ig.svg" alt="Instagram" width={48} height={48} />
        </a>
      </footer>
    </div>
  );
}
