import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import cursor from "../services/cursor";
import styles from "../styles/Home.module.scss";

export default function Home() {
  useEffect(() => {
    cursor();
  }, []);

  return (
    <>
      <Head>
        <title>dfr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <header className={styles.header}>
            <Link href="/">
              <a>
                <svg
                  className={styles.logo}
                  baseProfile="full"
                  version="1.1"
                  viewBox="0 0 930 540"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m240 480a180 180 0 0 1 180 -180v0a180 180 0 0 1 180 180v0a180 180 0 0 1 180 -180m-405 180v0-360 360m90 0v0-180a135 180 0 0 1 135 -180m0 360v0-180"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="42"
                  />
                </svg>
              </a>
            </Link>

            <div className={styles.headerLinks}>
              <Link href="/about">
                <a className={styles.headerLink}>About </a>
              </Link>
              <Link href="/notes">
                <a className={styles.headerLink}>Notes </a>
              </Link>
            </div>
          </header>
          <p>Daniel Fernandez</p>
        </div>

        <div id="cursor" className="cursor">
          <div className="cursor__content"></div>
        </div>
      </main>
    </>
  );
}
