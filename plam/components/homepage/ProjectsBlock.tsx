import Link from 'next/link';

import styles from '@/styles/Home.module.scss';

export default function ProjectsBlock() {
  return (
    <section className={styles.projects}>
      <div className={`container ${styles.projects__container}`}>
        <h2 className={styles.projects__title}>{'проекты'.toUpperCase()}</h2>
        <div className={styles.projects__content}>
          <div className={styles.projects__left}>
            <div className={styles.btn__wrapper}>
              <Link href="/projects" className={styles.btn}>
                СМОТРЕТЬ ВСЕ
              </Link>
            </div>
            <div className={styles.img_1}></div>
          </div>
          <div className={styles.img_2}></div>
        </div>
      </div>
    </section>
  );
}
