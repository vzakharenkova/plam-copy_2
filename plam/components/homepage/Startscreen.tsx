import styles from '@/styles/Home.module.scss';

export default function Startscreen() {
  return (
    <section className={styles.startscreen}>
      <div className={styles.ticker}>
        <div className={styles.ticker__wrapper}>
          <p className={styles.ticker__text}>{'дизайн интерьеров'.toUpperCase()}</p>
          <p className={styles.ticker__text}>{'дизайн интерьеров'.toUpperCase()}</p>
        </div>
      </div>
    </section>
  );
}
