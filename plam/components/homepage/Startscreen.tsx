import { useState, useEffect } from 'react';

import styles from '@/styles/pages/HomePage.module.scss';

export default function Startscreen() {
  const [header, setHeader] = useState(0);

  const listenScrollEvent = () => {
    const { scrollY } = window;
    const parallaxScroll = Math.floor(scrollY / 1.4);
    setHeader(parallaxScroll);
    return null;
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <section className={styles.startscreen}>
      <div className={styles.startscreen_background}></div>
      <div className={styles.ticker} style={{ bottom: header }}>
        <div
          className={styles.ticker__wrapper}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <p className={styles.ticker__text}>{'дизайн интерьеров'.toUpperCase()}</p>
          <p className={styles.ticker__text}>{'дизайн интерьеров'.toUpperCase()}</p>
        </div>
      </div>
      <div className={styles.about__header}></div>
    </section>
  );
}
