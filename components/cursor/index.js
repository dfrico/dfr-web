import React, { useEffect } from 'react';
import headerStyles from '../header/header.module.scss';
import styles from './cursor.module.scss';

export default function Cursor() {
  // Codepen by cezzre
  // https://codepen.io/cezzre/pen/poJxLEM

  const DEFAULT_CURSOR_SIZE = 0;
  let isCursorLocked = false;

  useEffect(() => {
    /* CURSOR */
    const cursor = document.querySelector('#cursor');
    if (cursor) {
      document.addEventListener('mousedown', () => {
        if (!isCursorLocked) {
          cursor.style.setProperty('--scale', 0.9);
        }
      });

      document.addEventListener('mouseup', () => {
        if (!isCursorLocked) {
          cursor.style.setProperty('--scale', 1);
        }
      });

      document.addEventListener('mousemove', ({ x, y }) => {
        if (!isCursorLocked) {
          cursor.style.setProperty('--top', `${y}px`);
          cursor.style.setProperty('--left', `${x}px`);
        }
      });

      /* LINKS */
      document.querySelectorAll(`.${headerStyles.headerLink}`).forEach((a) => {
        let rect = null;

        a.addEventListener(
          'mouseenter',
          ({ target }) => {
            isCursorLocked = true;

            rect = target.getBoundingClientRect();

            cursor.classList.add('is-locked');
            cursor.style.setProperty(
              '--top',
              `${rect.top + rect.height / 2}px`
            );
            cursor.style.setProperty(
              '--left',
              `${rect.left + rect.width / 2}px`
            );
            cursor.style.setProperty('--width', `${rect.width}px`);
            cursor.style.setProperty('--height', `${rect.height}px`);

            target.style.setProperty('--scale', 1.05);
          },
          { passive: true }
        );

        a.addEventListener(
          'mousemove',
          (event) => {
            const { target } = event;
            const halfHeight = rect.height / 2;
            const topOffset = (event.y - rect.top - halfHeight) / halfHeight;
            const halfWidth = rect.width / 2;
            const leftOffset = (event.x - rect.left - halfWidth) / halfWidth;

            cursor.style.setProperty('--translateX', `${leftOffset * 3}px`);
            cursor.style.setProperty('--translateY', `${topOffset * 3}px`);

            target.style.setProperty('--translateX', `${leftOffset * 6}px`);
            target.style.setProperty('--translateY', `${topOffset * 4}px`);
          },
          { passive: true }
        );

        a.addEventListener(
          'mouseleave',
          ({ target }) => {
            isCursorLocked = false;

            cursor.style.setProperty('--width', DEFAULT_CURSOR_SIZE);
            cursor.style.setProperty('--height', DEFAULT_CURSOR_SIZE);
            cursor.style.setProperty('--translateX', 0);
            cursor.style.setProperty('--translateY', 0);

            target.style.setProperty('--translateX', 0);
            target.style.setProperty('--translateY', 0);
            target.style.setProperty('--scale', 1);

            setTimeout(() => {
              if (!isCursorLocked) {
                cursor.classList.remove('is-locked');
              }
            }, 100);
          },
          { passive: true }
        );
      });
    }
  }, []);

  return (
    <div id="cursor" className={styles.cursor}>
      <div className={styles.cursor__content} />
    </div>
  );
}
