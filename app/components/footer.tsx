import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
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
           
          rel="me noopener noreferrer"
        >
          <Image src="/icons/mast.svg" alt="mastodon" width={24} height={24} />
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
          <Image src="/icons/ig.svg" alt="Instagram" width={24} height={24} />
        </a>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        Code 👨🏻+🤖. Judgement and writing, 100% human.
      </p>
    </footer>
  );
}
