import Image from 'next/image';

function importAll(r) {
  return r
    .keys()
    .filter((fileName) => fileName.includes('pages'))
    .map((fileName) => ({
      name: fileName.split('_')[1].replace(/\.jpg$/, ''),
      module: r(fileName),
    }));
}

const Images = importAll(require.context('./img', true, /\.jpg$/));
const descriptions = {
  dongles: 'Dongles and adapters, MBP charger, etc.',
  canon: 'Canon A1 & 50mm f/1.4 and Portra 400',
  sony: 'Sony A7II & Sony 28-70 f/3.5 kit lens',
  chilly: '50cl Chilly bottle',
  kindle: 'Kindle Paperwhite 2017',
  bose: 'Bose QC35 1st gen',
  iPad: 'iPad Pro 11" 2018 with smart keyboard (not the magic one) and pencil',
  MBP: 'MacBook Pro M1 on an Incase nylon sleeve',
  bags: 'Topo Rover or Herschel Little America',
  muji: 'Midori notebook and Muji .38mm pen',
  edc: 'EDC: iPhone XS, Nomatic wallet, regular airpods, keys',
};

export default function Uses() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {Images.map((img) => (
        <div key={img.name}>
          <div className="relative h-0 w-full" style={{ paddingTop: '62.5%' }}>
            <Image src={img.module} alt={img.name} layout="fill" />
            <div
              className={`
                invisible
                md:visible
                absolute top-0
                h-full w-full
                bg-yellow
                text-black font-semibold leading-tight
                cursor-pointer
                flex justify-center items-center
                p-8
                opacity-0 hover:opacity-70`}
            >
              {descriptions[img.name]}
            </div>
          </div>
          <p className="visible md:invisible font-semibold leading-tight my-2 md:my-0 md:h-0">
            {descriptions[img.name]}
          </p>
        </div>
      ))}
    </div>
  );
}
