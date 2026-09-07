import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  date: string;
  url: string;
};

function WorkCard({ title, description, url }: Props) {
  return (
    <div className="group border-b border-gray-800">
      <Link
        href={url}
        className="flex gap-8 px-6 py-6 transition-colors hover:bg-gray-800"
      >
        {/* <span className="w-12 shrink-0 text-gray-500">{date}</span> */}

        <div className="grow">
          <h2 className="font-rubik text-xl font-bold text-yellow mb-2">
            {title}
          </h2>

          <p className=" text-gray-300">{description}</p>
        </div>

        <span className="self-center text-xl text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-yellow">
          →
        </span>
      </Link>
    </div>
  );
}

export default WorkCard;
