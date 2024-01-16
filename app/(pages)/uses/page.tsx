import Image from 'next/image';

export default function Uses() {
  const maxWidth = 768; // max-w-3xl tailwind size
  const ratio = 3 / 2;

  return (
    <main>
      <h1 className="font-bold font-rubik text-5xl tracking-tight mb-4 mt-16 text-yellow">
        /uses
      </h1>
      <Image
        className="rounded-sm"
        src="/img/setup.webp"
        alt="Setup"
        width={maxWidth}
        height={maxWidth / ratio}
        style={{
          objectFit: 'contain',
        }}
      />
      <h2 className="mt-8">Working from home</h2>
      <ul className="mb-8">
        <li className="mb-2">
          <span className="text-yellow">
            2 &times; 16&quot; 2021 MacBook Pro
          </span>
          , one for work and one for personal use. Both have a 10 core M1 Pro,
          work laptop has 32GB + 1TB, and personal laptop has 16GB + 512GB.
        </li>
        <li className="mb-2">
          <span className="text-yellow">SFFPC</span> on a Ncase M1. It has an
          i7-10700, 32GB of RAM, 500GB + 1TB of SSD, and a RTX 3070Ti. I use it
          for gaming and some dev work.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Apple Studio Display</span> with
          height-adjustable stand replacing my old{' '}
          <span className="text-yellow">
            Xiaomi 34&quot; ultrawide + Ergotron HX.
          </span>{' '}
          It connects to my SFFPC and macs via Thunderbolt 3, which allows me to
          use the USB-C hub (+ethernet dongle), speakers, and webcam on both
          computers just by switching the cable. The screen is absolutely great,
          although I think it&apos;s a bit expensive considering it&apos;s a
          60Hz panel and not OLED or miniLED.
        </li>
        <li className="mb-2">
          The speakers on the display replaced my old{' '}
          <span className="text-yellow">
            Yamaha HS7 studio monitors + Focusrite Scarlett Solo.
          </span>{' '}
          I still keep the Scarlett for music making, but I don&apos;t have it
          on my desk.
        </li>
        <li className="mb-2">
          <span className="text-yellow">RAMA M65-b.</span> It&apos;s the KURO
          (黒) model, with Aliaz 60gr switches + GMK stabs (w/ krytox 205g0),
          and PBT Heavy Industry keycaps.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Logitech Ergo MX.</span> I tried a
          Glorious model O and an MX Master, and ended up using this one as my
          daily driver, it&apos;s more comfortable. For gaming, I have a{' '}
          <span className="text-yellow">
            Logitech G Pro X Superlight Wireless.
          </span>
        </li>
        <li className="mb-2">
          <span className="text-yellow">Airpods Max.</span> I used the Bose QC35
          for years, and recently switched to these ones. So far I&apos;m happy
          with everything except for the <del>bra</del> case. For gaming, I have
          a <span className="text-yellow">Logitech G PRO X Wireless.</span>
        </li>
        <li className="mb-2">
          <span className="text-yellow">Fully Jarvis Desk.</span> Solid standing
          desk, I got the BYOD 3-stage frame and DIY-ed a tabletop with a beech
          kitchen countertop, 180x80cm (~70x31&quot;).
        </li>
        <li className="mb-2">
          <span className="text-yellow">Autonomous ErgoChair 2,</span> which is
          an older model similar to the current Pro one.
        </li>
        <li className="mb-2">
          Other accesories are a{' '}
          <span className="text-yellow">
            Belkin 3-in-1 Wireless MagSafe Charger
          </span>
          , a <span className="text-yellow">Xiaomi Desk Lamp 1S</span>, and a{' '}
          <span className="text-yellow">Chilly&apos;s 2 Flip bottle.</span>
        </li>
      </ul>

      <h2>Software and tools</h2>
      <ul className="mb-8">
        <li className="mb-2">
          <span className="text-yellow">Visual Studio Code or VIM</span> are my
          main editors (my{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dfrico/my-dot-files"
          >
            dotfiles are here
          </a>
          ).
        </li>
        <li className="mb-2">
          I use <span className="text-yellow">Moonlight II italic</span> in
          VScode, and a customized gruvbox in VIM, with{' '}
          <span className="text-yellow">Dank Mono</span> font for everything
          (editor and terminal).
        </li>
        <li className="mb-2">
          <span className="text-yellow">iTerm 2.</span> I tried Hyper but I had
          the feeling iTerm worked better on my machine.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Arc from The Browser Company</span> is
          my main browser for personal and dev use.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Fork</span> is a git GUI app that I like
          a lot. I use the git cli for simple stuff but for complex workflows
          this one is perfect.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Things</span> used to be my favorite
          reminders app, but since then I&apos;ve moved to{' '}
          <span className="text-yellow">iOS reminders + Fantastical</span> to
          manage my calendars and to-dos, it&apos;s easier to share lists and
          calendars.
        </li>
        <li className="mb-2">
          I use <span className="text-yellow">Figma</span> for personal design
          work, <span className="text-yellow">Darkroom</span> for photo editing,
          and <span className="text-yellow">Pixelmator Pro</span> for{' '}
          <del>memes</del> image editing, markup, etc.
        </li>
      </ul>

      <h2>On the go</h2>
      <ul className="mb-8">
        <li className="mb-2">
          <span className="text-yellow">ECD is an iPhone 13 Pro</span>, Nomatic
          wallet, keys etc.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Apple Watch Series 7</span> (41mm alu
          LTE). The always-on and slightly bigger display are great improvements
          from my previous S4. I use either the{' '}
          <span className="text-yellow">solo loop</span> or the{' '}
          <span className="text-yellow">link bracelet.</span>
        </li>
        <li className="mb-2">
          <span className="text-yellow">Airpods Pro.</span> When I&apos;m
          traveling, I ditch the big headphones for smaller earbuds, but ANC is
          a must.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Apple Magsafe Duo.</span> Yeah I know.
          It&apos;s a great charger for my phone and watch and it fits very well
          in my <span className="text-yellow">Native Union stow organizer</span>
          , with the MBP charger and other cables.
        </li>
        <li className="mb-2">
          <span className="text-yellow">2022 Kindle.</span> I loved my old 2013
          paperwhite, but the new basic models come with USB-C, 300ppi, and
          backlit —no need for the paperwhite model. I use it with Calibre.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Muji B6 or Midori A6 notebooks</span>,
          with a <span className="text-yellow">Lamy Safari F</span> or some{' '}
          <span className="text-yellow">Muji .38 pens.</span> I&apos;m also into
          mechanical pencils, and I have a{' '}
          <span className="text-yellow">Rotring 600</span> and a{' '}
          <span className="text-yellow">Caran d&apos;Ache</span>.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Topo Rover</span> or{' '}
          <span className="text-yellow">Herschel Little America</span>{' '}
          backpacks, depends on the trip.
        </li>
      </ul>

      <h2>Music making</h2>
      <ul className="mb-12">
        <li className="mb-2">
          <span className="text-yellow">Ableton Live and Ableton Push 2.</span>
        </li>
        <li className="mb-2">
          <span className="text-yellow">Native Instruments A49.</span> Not the
          best keyboard around and I don&apos;t love the software, but the size
          and the keys are good. I&apos;ve been using my{' '}
          <span className="text-yellow">Novation Launchkey Mini MK3</span> more
          lately.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Volca Bass and Volca FM.</span> Little
          hardware synths, the Bass is fun to play with, the FM not so much but
          the sounds are good.
        </li>
        <li className="mb-2">
          <span className="text-yellow">Schecter Omen 6.</span> I had this
          guitar for 10 years now, and I like it a lot.
        </li>
      </ul>
    </main>
  );
}
