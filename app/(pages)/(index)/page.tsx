import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import currentlyAt from '@/components/currently';
import Footer from '@/components/footer';
import WorkCard from '@/components/workCard';
import Experience from '@/components/experience';

export const metadata: Metadata = {
  openGraph: {
    url: 'https://dfrico.com',
    siteName: 'Daniel Fernandez',
    title: 'Daniel Fernandez',
    description:
      'Senior Software Engineer based in Spain. Products I build, things I write, and work I have done.',
    images: '/img/logo.png',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@blayhem',
    creator: '@blayhem',
    title: 'Daniel Fernandez',
    description:
      'Senior Software Engineer based in Spain. Products I build, things I write, and work I have done.',
    images: '/img/logo.png',
  },
};

export default function Home() {
  return (
    <>
      <div className="container relative h-full grow">
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
              I&apos;m a Senior SWE based in Spain, currently working{' '}
              {currentlyAt}
            </p>
            <p className="mb-2">
              Check out more <Link href="/about">about me</Link>.
            </p>
          </aside>
        </section>

        <Experience />

        <div className="my-8">
          <h2>Selected work (academic):</h2>
          <WorkCard
            title="A Comparative Evaluation of Serverless Vector Databases for RAG workloads"
            description="Master thesis comparing serverless vector databases for latency, cost and scalability."
            date="2026"
            url="https://github.com/dfrico/serverless-vector-search-benchmark"
          />
          <WorkCard
            title="Wildfire simulation using THRML"
            description="A spatio-temporal wildfire model using Potts-model dynamics and block Gibbs sampling."
            date="2025"
            url="#"
          />
          <WorkCard
            title="Monte Carlo Simulations of a Plummer Distribution"
            description="Academic. The probability density distribution of stars within a globular cluster. Sampling and visualizing data."
            date="2025"
            url="#"
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
