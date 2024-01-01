import { useState } from 'react';
import experience from './timeline';

export default function Timeline() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="flex justify-center mx-auto mt-6">
      {/* <svg
        className="hidden sm:block mr-5 w-4 transform rotate-180"
        viewBox="0 0 8 558"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M3.64642 557.354C3.84168 557.549 4.15827 557.549 4.35353 557.354L7.53551 554.172C7.73077 553.976 7.73077 553.66 7.53551 553.464C7.34025 553.269 7.02367 553.269 6.8284 553.464L3.99998 556.293L1.17155 553.464C0.976287 553.269 0.659704 553.269 0.464442 553.464C0.26918 553.66 0.26918 553.976 0.464442 554.172L3.64642 557.354ZM3.5 -2.18557e-08L3.49998 557L4.49998 557L4.5 2.18557e-08L3.5 -2.18557e-08Z"
          fill="#FAFAFA"
        />
      </svg> */}
      <div className="exp">
        {Object.entries(experience)
          .reverse()
          .slice(0, isOpen ? Object.keys(experience).length : 2)
          .map(([year, exp]) => (
            <div key={year}>
              <h3 className="text-lg md:text-xl font-bold font-rubik tracking-tight text-gray-100">
                {year}
              </h3>
              <ul className="pl-2 sm:pl-8">
                {exp.map((item, i) => (
                  // year + index is unique enough
                  // eslint-disable-next-line react/no-array-index-key
                  <li className="my-2" key={`${year}-${i}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        <div className="flex items-center my-4">
          <div className="h-px flex-grow bg-white" />
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className="inline-flex items-center px-4 py-2 mx-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isOpen ? `Show less` : `Show more`}
          </button>
          <div className="h-px flex-grow bg-white" />
        </div>
      </div>
    </section>
  );
}
