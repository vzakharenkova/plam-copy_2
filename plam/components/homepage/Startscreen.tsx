import styles from '@/styles/Home.module.scss';

export default function Startscreen() {
  return (
    <section className={styles.startscreen}>
      <div className={`container ${styles.startscreen__container}`}>
        <h1 className={styles.startscreen__title}>
          {'дизайн'.toUpperCase()}
          <br />
          {'интерьеров'.toUpperCase()}
        </h1>
      </div>
    </section>
  );
}
