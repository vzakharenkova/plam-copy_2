import styles from '@/styles/Home.module.scss';
import { useState, useEffect, useRef, MutableRefObject } from 'react';

export default function Startscreen() {
  const ref = useRef() as MutableRefObject<HTMLElement>;

  const [header, setHeader] = useState(0);

  const listenScrollEvent = (event) => {
    const step = window.scrollY * 0.5;
    console.log(window.scrollY);
    console.log(ref.current.offsetHeight);
    if (header > window.scrollY) {
      if (window.scrollY <= 200) {
        return setHeader(ref.current.offsetHeight * 0.05);
      } else if (window.scrollY < ref.current.offsetHeight) {
        return setHeader(-ref.current.offsetHeight * 0.25 + step);
      }
    } else {
      if (window.scrollY < 200) {
        return setHeader(ref.current.offsetHeight * 0.05 - step);
      } else if (window.scrollY < ref.current.offsetHeight) {
        return setHeader(-ref.current.offsetHeight * 0.25);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    if (window.scrollY === 0) {
      setHeader(ref.current.offsetHeight * 0.05);
    } else if (window.scrollY < 200) {
      setHeader(ref.current.offsetHeight * 0.05 - window.scrollY * 0.5);
    } else {
      setHeader(-ref.current.offsetHeight * 0.25);
    }

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <section className={styles.startscreen} data-aos="fade" data-aos-duration="1000" ref={ref}>
      <div className={styles.ticker} style={{ bottom: header }}>
        <div className={styles.ticker__wrapper} data-aos="fade-right" data-aos-duration="2000">
          <p className={styles.ticker__text}>{'дизайн интерьеров'.toUpperCase()}</p>
          <p className={styles.ticker__text}>{'дизайн интерьеров'.toUpperCase()}</p>
        </div>
      </div>
    </section>
  );
}
