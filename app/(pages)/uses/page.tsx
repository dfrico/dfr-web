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
        src="/img/setup.jpg"
        alt="Setup"
        width={maxWidth}
        height={maxWidth / ratio}
        style={{
          objectFit: 'contain',
        }}
      />
      <h2 className="mt-8">Working from home</h2>
      <ul className="mb-8">
        <li>
          <span className="text-yellow">
            2021 MacBook Pro with M1 Pro, 32GB of RAM and 1TB of SSD.
          </span>{' '}
          Thicc boy, but the screen is totally worth it.
        </li>
        <li>
          <span className="text-yellow">Xiaomi 34&quot; ultrawide.</span> Nice
          resolution (1440p), good refresh rate (144Hz). The color profile is
          not great with mac, and I will probably replace it soon, but for now
          it does a pretty good job. It sits on an{' '}
          <span className="text-yellow">Ergotron HX</span> VESA arm.
        </li>
        <li>
          <span className="text-yellow">RAMA M65-b.</span> It&apos;s the KURO
          (黒) model, with Aliaz 60gr switches + GMK stabs (w/ krytox 205g0),
          and PBT Heavy Industry keycaps.
        </li>
        <li>
          <span className="text-yellow">Logitech Ergo MX.</span> I tried a
          Glorious model O and an MX Master, and ended up using this one as my
          daily driver, it&apos;s more comfortable. The mousepad is from Amazon,
          90x40cm.
        </li>
        <li>
          <span className="text-yellow">Yamaha HS5 studio monitors</span> with a{' '}
          <span className="text-yellow">
            Focusrite Scarlett Solo audio interface
          </span>
          . They sound really good but they take a lot of space in my desk. The
          Scarlett is fantastic for its price and size.
        </li>
        <li>
          <span className="text-yellow">Airpods Max.</span> I used the Bose QC35
          for years, and recently switched to these ones. So far I&apos;m happy
          with everything except for the <del>bra</del> case.
        </li>
        <li>
          <span className="text-yellow">Fully Jarvis Desk.</span> Solid standing
          desk, I got the BYOD 3-stage frame and DIY-ed a tabletop with a beech
          kitchen countertop, 180x80cm (~70x31&quot;).
        </li>
        <li>
          <span className="text-yellow">Autonomous ErgoChair 2,</span> which is
          an older model similar to the current Pro one.
        </li>
      </ul>

      <h2>Software and tools</h2>
      <ul className="mb-8">
        <li>
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
        <li>
          I use <span className="text-yellow">Moonlight II italic</span> in
          VScode, and a customized gruvbox in VIM, with{' '}
          <span className="text-yellow">Dank Mono</span> font for everything
          (editor and terminal).
        </li>
        <li>
          <span className="text-yellow">iTerm 2.</span> I tried Hyper but I had
          the feeling iTerm worked better on my machine.
        </li>
        <li>
          <span className="text-yellow">Firefox</span> is my main browser for
          personal and dev use.
        </li>
        <li>
          <span className="text-yellow">Fork</span> is a git GUI app that I like
          a lot. I use the git cli for simple stuff but for complex workflows
          this one is perfect.
        </li>
        <li>
          <span className="text-yellow">Things</span> is my favorite reminders
          app, and <span className="text-yellow">Fantastical</span> is my go-to
          calendar app in macOS.
        </li>
        <li>
          I use <span className="text-yellow">Figma</span> for personal design
          work, <span className="text-yellow">Darkroom</span> for photo editing,
          and <span className="text-yellow">Pixelmator Pro</span> for{' '}
          <del>memes</del> image editing, markup, etc.
        </li>
      </ul>

      <h2>On the go</h2>
      <ul className="mb-8">
        <li>
          <span className="text-yellow">ECD is an iPhone 13 Pro</span>, 6y.o.
          Nomatic wallet, keys etc.
        </li>
        <li>
          <span className="text-yellow">Apple Watch Series 7</span> (41mm alu
          LTE). The always-on and slightly bigger display are great improvements
          from my previous S4.
        </li>
        <li>
          <span className="text-yellow">Airpods Pro.</span> When I&apos;m
          traveling, I ditch the big headphones for smaller earbuds, but ANC is
          a must.
        </li>
        <li>
          <span className="text-yellow">Apple Magsafe Duo.</span> Yeah I know.
          It&apos;s a great charger for my phone and watch and it fits very well
          in my <span className="text-yellow">Native Union stow organizer</span>
          , with the MBP charger and other cables.
        </li>
        <li>
          <span className="text-yellow">Kindle Paperwhite 2013.</span> Old but
          reliable, I use it with Calibre on the mac.
        </li>
        <li>
          <span className="text-yellow">Muji B6 or Midori A6 notebooks</span>,
          with a <span className="text-yellow">Lamy Safari F</span> or some{' '}
          <span className="text-yellow">Muji .38 pens.</span>
        </li>
        <li>
          <span className="text-yellow">Topo Rover</span> or{' '}
          <span className="text-yellow">Herschel Little America</span>{' '}
          backpacks, depends on the trip.
        </li>
      </ul>

      <h2>Music making</h2>
      <ul className="mb-12">
        <li>
          <span className="text-yellow">Ableton Live and Ableton Push 2.</span>
        </li>
        <li>
          <span className="text-yellow">Native Instruments A49.</span> Not the
          best keyboard around and I don&apos;t love the software, but the size
          and the keys are good. I used two keyboard sliders to mount it under
          the desk.
        </li>
        <li>
          <span className="text-yellow">Volca Bass and Volca FM.</span> Little
          hardware synths, the Bass is fun to play with, the FM not so much but
          the sounds are good.
        </li>
        <li>
          <span className="text-yellow">Schecter Omen 6.</span> I had this
          guitar for 10 years now, and I like it a lot.
        </li>
      </ul>
    </main>
  );
}
