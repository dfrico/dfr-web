function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-yellow/20 text-yellow rounded px-1 py-0.5">
      {children}
    </span>
  );
}

function Experience() {
  return (
    <section className="mt-24">
      <h2>Experience:</h2>
      <div className="space-y-10">
        {/* Strava */}
        <article className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10">
          <div>
            <h3 className="font-rubik text-2xl font-bold text-yellow">
              Strava
            </h3>
            <p className="text-gray-400 mt-1">2024-2026</p>
          </div>

          <div>
            <h4 className="font-rubik text-xl font-bold mb-3">
              Senior Software Engineer (Map Platform)
            </h4>

            <p className="text-gray-300 mb-4">
              Own <Highlight>end-to-end development</Highlight> for
              Strava&apos;s web map surfaces (50M MAU), from implementation and
              testing to deployment and rollout. Work across React, Next.js and
              TypeScript.
            </p>
            <p className="text-gray-300 mb-4">
              Helped integrate Strava&apos;s C++/WebAssembly map engine into the
              web platform, <Highlight>extending C++ APIs</Highlight> and their
              JavaScript bindings to support new web interactions and
              performance requirements.
            </p>
            <p className="text-gray-300 mb-4">
              Contribute to frontend engineering infrastructure, including
              <Highlight>automated testing, CI workflows</Highlight> and shared
              components used across Strava&apos;s web products.
            </p>

            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Next.js', 'C++', 'WebAssembly'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-sm text-gray-400 border border-gray-700 rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </article>

        {/* FATMAP */}
        <article className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10">
          <div>
            <h3 className="font-rubik text-2xl font-bold text-yellow">
              FATMAP (Acquired by Strava)
            </h3>
            <p className="text-gray-400 mt-1">2022-2023</p>
          </div>

          <div>
            <h4 className="font-rubik text-xl font-bold mb-3">
              Senior Software Engineer
            </h4>

            <p className="text-gray-300 mb-4">
              Built and helped design the platform behind FATMAP&apos;s web
              products, covering deployment, CI/CD, testing and observability.
              Pre-AI work.
            </p>

            <ul className="space-y-2 text-gray-300 mb-5">
              <li>
                Owned CI/CD and release infrastructure across the web stack,
                including GitHub Actions, staging/production releases, and
                canaries.
              </li>
              <li>
                Built the{' '}
                <Highlight>full deployment path (paved road)</Highlight> for a
                greenfield{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fatmap.com"
                >
                  fatmap.com
                </a>{' '}
                application, from Docker and Skaffold to Kubernetes, and
                development/production environments, with support from SRE.
              </li>
              <li>
                Designed the{' '}
                <Highlight>testing strategy and infrastructure</Highlight> using
                Jest, React Testing Library and Playwright, with automated
                validation on pull requests and before releases.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              {[
                'Kubernetes',
                'Docker',
                'GHA',
                'Prometheus',
                'Playwright',
                'Jest',
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-gray-400 border border-gray-700 rounded px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>

      <p className="text-gray-300 mt-8">
        Previously{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://localistico.com"
        >
          Localistico
        </a>
        ,
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://vizzuality.com"
        >
          Vizzuality
        </a>
        , and{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://graphext.com"
        >
          Graphext
        </a>
        . <a href="/about">See more</a>.
      </p>
    </section>
  );
}

export default Experience;
