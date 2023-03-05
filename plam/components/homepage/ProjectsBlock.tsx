import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Home.module.scss';

import img_1 from '@/public/photo_2.png';
import img_2 from '@/public/photo_3.png';

export default function ProjectsBlock() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projects__title}>ПРОЕКТЫ</h2>
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
    </section>
  );
}
