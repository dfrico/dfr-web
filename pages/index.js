import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import postList from '../utils/getAllPosts';
import Preview from '../components/preview';

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://dfr.codes/" />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Daniel Fernandez" />
        <meta
          property="og:description"
          content="Frontend developer based in Madrid, Spain. Check out my site to learn more about me!"
        />
        <meta property="og:image" content="/img/logo.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@blayhem" />
        <meta name="twitter:url" content="https://dfr.codes" />
        <meta name="twitter:title" content="Daniel Fernandez" />
        <meta
          name="twitter:description"
          content="Frontend developer based in Madrid, Spain. Check out my site to learn more about me!"
        />
        <meta name="twitter:image" content="/img/logo.png" />

        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Favicon */}
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      </Head>
      <div className="container relative h-full flex-grow">
        <div className="grid sm:grid-cols-2 items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-84 md:h-84 mx-auto flex items-center">
            <Image
              className="rounded-full object-cover"
              src="/img/avatar@3x.jpg"
              alt="Avatar"
              width={336}
              height={336}
              priority
            />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-5xl tracking-tight mb-4 mt-16 text-yellow">
              Hey, I&apos;m Daniel Fernández{' '}
              <span role="img" aria-label=":wave:">
                👋
              </span>
            </h1>
            <h2 className="mb-4">Frontend Engineer</h2>
            <p className="mb-2">
              I&apos;m a frontend engineer based in Madrid (Spain), currently
              working at Localistico developing the connection between
              businesses and the digital world.
            </p>
            <p className="mb-2">
              Check out more{' '}
              <Link href="/about">
                <a>about me</a>
              </Link>
              .
            </p>
          </div>
        </div>

        {postList.length && (
          <div className="my-8">
            <h2>Latest post:</h2>
            <Preview key={postList[0].link} post={postList[0]} />
          </div>
        )}

        <footer className="block relative mt-12 mb-6">
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
              href="https://www.instagram.com/blayhem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/ig.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
