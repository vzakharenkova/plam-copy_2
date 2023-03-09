import styles from '@/styles/Home.module.scss';

export default function Startscreen() {
  return (
    <section className={styles.startscreen} data-aos="fade" data-aos-duration="1000">
      <div className={styles.ticker}>
        <div className={styles.ticker__wrapper} data-aos="fade-right" data-aos-duration="2000">
          <p className={styles.ticker__text}>{'дизайн интерьеров'.toUpperCase()}</p>
          <p className={styles.ticker__text}>{'дизайн интерьеров'.toUpperCase()}</p>
        </div>
      </div>
    </section>
  );
}
