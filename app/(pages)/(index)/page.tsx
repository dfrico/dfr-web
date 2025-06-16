import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Preview from '@/components/preview';
import currentlyAt from '@/components/currently';
import postList from '@/utils/getAllPosts';

export default function Home() {
  const URL = 'https://dfr.codes';
  return (
    <>
      <Head>
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Daniel Fernandez" />
        <meta
          property="og:description"
          content="Frontend developer based in Spain. Check out my site to learn more about me!"
        />
        <meta property="og:image" content="/img/logo.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@blayhem" />
        <meta name="twitter:url" content={URL} />
        <meta name="twitter:title" content="Daniel Fernandez" />
        <meta
          name="twitter:description"
          content="Frontend developer based in Madrid, Spain. Check out my site to learn more about me!"
        />
        <meta name="twitter:image" content={`${URL}/img/logo.png`} />

        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Favicon */}
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      </Head>
      <div className="container relative h-full flex-grow">
        <section className="grid sm:grid-cols-2 items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-84 md:h-84 mx-auto flex items-center">
            <Image
              className="rounded-full object-cover"
              src="/img/avatar@3x.jpg"
              alt="Avatar"
              width={512}
              height={512}
              priority
            />
          </div>
          <aside className="text-center">
            <h1 className="font-bold font-rubik text-5xl tracking-tight mb-4 mt-16 text-yellow">
              Hey, I&apos;m Daniel Fernández{' '}
              <span role="img" aria-label=":wave:">
                👋
              </span>
            </h1>
            <h2 className="mb-4">Software Engineer</h2>
            <p className="mb-2">
              I&apos;m a frontend engineer based in Spain, currently working{' '}
              {currentlyAt}
            </p>
            <p className="mb-2">
              Check out more <Link href="/about">about me</Link>.
            </p>
          </aside>
        </section>

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
              href="https://mastodon.social/@dfr"
              target="_blank"
              // eslint-disable-next-line react/no-invalid-html-attribute
              rel="me noopener noreferrer"
            >
              <Image
                src="/icons/mast.svg"
                alt="mastodon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://github.com/dfrico"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/gh.svg" alt="GitHub" width={24} height={24} />
            </a>
            <a
              href="https://www.instagram.com/daniel.frico/"
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
