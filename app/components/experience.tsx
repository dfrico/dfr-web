import { previously, work } from '@/content/work';

function Experience() {
  return (
    <section className="mt-24">
      <h2>Experience:</h2>
      <div className="space-y-10">
        {work.map((entry) => (
          <article
            key={entry.company}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10"
          >
            <div>
              <h3 className="font-rubik text-2xl font-bold text-yellow">
                {entry.company}
              </h3>
              <p className="text-gray-400 mt-1">{entry.years}</p>
            </div>

            <div>
              <h4 className="font-rubik text-xl font-bold mb-3">
                {entry.role}
              </h4>

              {entry.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-gray-300 mb-4">
                  {paragraph}
                </p>
              ))}

              {entry.bullets.length > 0 && (
                <ul className="space-y-2 text-gray-300 mb-5">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {entry.tech.map((tech) => (
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
        ))}
      </div>

      <p className="text-gray-300 mt-8">{previously}</p>
    </section>
  );
}

export default Experience;
