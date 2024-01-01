import React, { useEffect } from 'react';
import headerStyles from '../header/header.module.scss';
import styles from './cursor.module.scss';

export default function Cursor() {
  // Codepen by cezzre
  // https://codepen.io/cezzre/pen/poJxLEM

  const DEFAULT_CURSOR_SIZE = '0';

  useEffect(() => {
    let isCursorLocked = false;
    /* CURSOR */
    const cursor = document.querySelector('#cursor') as HTMLElement;
    if (cursor) {
      document.addEventListener('mousedown', () => {
        if (!isCursorLocked) {
          cursor.style.setProperty('--scale', '0.9');
        }
      });

      document.addEventListener('mouseup', () => {
        if (!isCursorLocked) {
          cursor.style.setProperty('--scale', '1');
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
        let rect: DOMRect | null = null;

        a.addEventListener(
          'mouseenter',
          // should be MouseEvent but mouse events only work with
          // fullscreenchange and fullscreenerror events so casting it is
          (event: Event) => {
            const target = event.target as HTMLElement;
            isCursorLocked = true;

            rect = target?.getBoundingClientRect();

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

            target?.style.setProperty('--scale', '1.05');
          },
          { passive: true }
        );

        a.addEventListener(
          'mousemove',
          (event: Event) => {
            try {
              if (!rect) throw new Error('No target');
              const target = event.target as HTMLElement;
              const halfHeight = rect.height / 2;
              const topOffset = ((event as MouseEvent).y - rect.top - halfHeight) / halfHeight;
              const halfWidth = rect.width / 2;
              const leftOffset = ((event as MouseEvent).x - rect.left - halfWidth) / halfWidth;

              cursor.style.setProperty('--translateX', `${leftOffset * 3}px`);
              cursor.style.setProperty('--translateY', `${topOffset * 3}px`);

              target.style.setProperty('--translateX', `${leftOffset * 6}px`);
              target.style.setProperty('--translateY', `${topOffset * 4}px`);
            } catch (error) {
              // do nothing
            }
          },
          { passive: true }
        );

        a.addEventListener(
          'mouseleave',
          (event: Event) => {
            isCursorLocked = false;
            const target = event.target as HTMLElement;

            cursor.style.setProperty('--width', DEFAULT_CURSOR_SIZE);
            cursor.style.setProperty('--height', DEFAULT_CURSOR_SIZE);
            cursor.style.setProperty('--translateX', '0');
            cursor.style.setProperty('--translateY', '0');

            target.style.setProperty('--translateX', '0');
            target.style.setProperty('--translateY', '0');
            target.style.setProperty('--scale', '1');

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
