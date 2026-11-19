import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="block relative mt-12 mb-6">
      <div className="flex justify-evenly w-72 lg:w-2/5 mx-auto">
        <a
          href="https://x.com/blayhem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/x white.svg"
            alt="X (previously twitter)"
            width={22}
            height={22}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-fernandez-rico/"
          target="_blank"

          rel="me noopener noreferrer"
        >
          <Image src="/icons/li.png" alt="linkedin" width={24} height={24} />
        </a>
        <a
          href="https://github.com/dfrico"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icons/gh.svg" alt="GitHub" width={24} height={24} />
        </a>
        <a
          href="https://www.instagram.com/dfric0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icons/ig.svg" alt="Instagram" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
}
